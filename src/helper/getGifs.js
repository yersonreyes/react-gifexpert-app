export const getGif = async (categori) => {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=PPXFHExFhqGnJgENU2fH5t6O8qhjdkcJ&limit=10&lang=es&q=${categori}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
