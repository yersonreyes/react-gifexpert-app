import React from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifCard from "./GifCard";
import Loading from "./Loading";
import "./styles/GifGrid.css";

const GifGrid = ({ categori }) => {
  const { gifList, loading } = useFetchGifs(categori);

  return (
    <div className="grid__container">
      <h1>{categori}</h1>
      <div className="gif__container">
        {loading && <Loading />}
        {gifList.map((gif) => (
          <GifCard gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
