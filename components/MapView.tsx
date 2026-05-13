'use client';

import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import Map, { NavigationControl } from 'react-map-gl/maplibre';
import { useMemo } from 'react';

interface Props {
  data: any;
  visible: boolean;
  color: [number, number, number];
}

const INITIAL_VIEW_STATE = {
  longitude: 78.9629,
  latitude: 20.5937,
  zoom: 4,
  pitch: 0,
  bearing: 0,
};

export default function MapView({
  data,
  visible,
  color,
}: Props) {
const layers = useMemo(() => {
  return [
    new GeoJsonLayer({
      id: 'geojson-layer',
      data,
      visible,
      pickable: true,
      stroked: true,
      filled: true,
      pointRadiusMinPixels: 5,
      lineWidthMinPixels: 2,
      getFillColor: [...color, 120],
      getLineColor: color,
      getPointColor: color,
    }),
  ];
}, [data, visible, color]);

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller
      layers={layers}
    >
      <Map
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
      >
        <NavigationControl position="top-right" />
      </Map>
    </DeckGL>
  );
}