'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import Sidebar from '@/components/Sidebar';

import { loadGeoJson } from '@/services/geojsonService';
import { getGeometryType } from '@/utils/geometry';

const files = [
  'India_simplified_prj.geojson',
  'Indian_Rivers.geojson',
];

const MapView = dynamic(
  () => import('@/components/MapView'),
  { ssr: false }
);

export default function HomePage() {
  const [selectedFile, setSelectedFile] = useState(files[0]);

  const [geoData, setGeoData] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  const [visible, setVisible] = useState(true);

  const [color, setColor] = useState('#00FF99');

  useEffect(() => {
    fetchGeoJson(selectedFile);
  }, [selectedFile]);

  const fetchGeoJson = async (file: string) => {
    try {
      setLoading(true);

      setError('');

      const data = await loadGeoJson(file);

      if (!data?.features || data.features.length === 0) {
        setError('GeoJSON contains no features');
      }

      setGeoData(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load GeoJSON');
    } finally {
      setLoading(false);
    }
  };

  // HEX → RGB
  const rgbColor = [
    parseInt(color.slice(1, 3), 16),
    parseInt(color.slice(3, 5), 16),
    parseInt(color.slice(5, 7), 16),
  ] as [number, number, number];

  return (
    <main className="flex h-screen w-screen overflow-hidden bg-slate-950">

      {/* Sidebar */}
      <div className="w-[30%] border-r border-slate-800">
        <Sidebar
          files={files}
          selectedFile={selectedFile}
          onSelect={setSelectedFile}
          featureCount={geoData?.features?.length || 0}
          geometryType={getGeometryType(geoData)}
          visible={visible}
          color={color}
          onToggle={() => setVisible(!visible)}
          onColorChange={setColor}
        />
      </div>

      {/* Map */}
      <div className="relative w-[70%]">

        {loading && (
          <div className="absolute left-4 top-4 z-50 rounded-xl bg-slate-900 px-4 py-2 text-white shadow-xl">
            Loading GeoJSON...
          </div>
        )}

        {error && (
          <div className="absolute left-4 top-4 z-50 rounded-xl bg-red-600 px-4 py-2 text-white shadow-xl">
            {error}
          </div>
        )}

        {geoData && (
          <MapView
            data={geoData}
            visible={visible}
            color={rgbColor}
          />
        )}
      </div>
    </main>
  );
}