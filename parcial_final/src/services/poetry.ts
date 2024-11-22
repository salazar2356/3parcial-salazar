export const fetchPoetryData = async (): Promise<{ title: string; author: string; lines: string[] }[]> => {
  const response = await fetch('https://poetrydb.org/poemcount/20');
  if (!response.ok) {
    throw new Error('Error fetching poetry data');
  }
  const data = await response.json();
  return data.map((poem: any) => ({
    title: poem.title,
    author: poem.author,
    lines: poem.lines,
  }));
};