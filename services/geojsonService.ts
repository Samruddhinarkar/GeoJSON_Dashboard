export const loadGeoJson = async (file: string) => {
  try {
    const response = await fetch(`/data/${file}`);

    if (!response.ok) {
      throw new Error('Failed to load file');
    }

    const data = await response.json();

    if (!data.features || !Array.isArray(data.features)) {
      throw new Error('Invalid GeoJSON format');
    }

    return data;
  } catch (error) {
    throw error;
  }
};