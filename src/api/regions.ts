const SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

export async function getRegions(): Promise<string[] | null> {
  if (!SERVER_HOST) return null;
  try {
    const res = await fetch(`https://${SERVER_HOST}/regions`);
    return await res.json();
  } catch (error) {
    console.error("Error fetching regions: ", error);
    return null;
  }
}
