export const getGeometryType = (geojson: any) => {
  if (!geojson?.features?.length) return 'Unknown';

  return geojson.features[0]?.geometry?.type || 'Unknown';
};