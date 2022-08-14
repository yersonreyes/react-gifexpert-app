import { useState } from "react";
import GifCard from "./components/GifCard";
import Search from "./components/Search";

const App = () => {
  const [categories, setCategories] = useState(["hola Mundo"]);

  const onAddCategory = (newCategori) => {
    setCategories([newCategori, ...categories]);
  };

  return (
    <div className="container">
      <h1 className="title">Busca tu gif</h1>
      <Search onNewCategory={(value) => onAddCategory(value)} />
      <GifCard />
    </div>
  );
};

export default App;
