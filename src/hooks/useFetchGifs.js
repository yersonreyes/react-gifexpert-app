import React, { useEffect, useState } from "react";
import { getGif } from "../helper/getGifs";

const useFetchGifs = (categori) => {
  const [gifList, setGifList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getGifList = async () => {
    const newGifList = await getGif(categori);
    setGifList(newGifList);
    setLoading(false);
  };
  useEffect(() => {
    getGifList();
  }, []);

  return { gifList, loading };
};

export default useFetchGifs;
