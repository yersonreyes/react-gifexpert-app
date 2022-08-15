import { useState } from "react";
import GifGrid from "./components/GifGrid";
import Search from "./components/Search";

const App = () => {
  const [categories, setCategories] = useState(["Hello World"]);

  const onAddCategory = (newCategori) => {
    if (categories.includes(newCategori)) return;
    setCategories([newCategori, ...categories]);
  };

  return (
    <div className="container">
      <h1 className="title">Busca tu gif</h1>
      <Search onNewCategory={(value) => onAddCategory(value)} />
      {categories.map((categori) => (
        <GifGrid categori={categori} key={categori} />
      ))}
    </div>
  );
};

export default App;
