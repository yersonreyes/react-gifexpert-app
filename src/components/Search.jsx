import React, { useState } from "react";
import "./styles/Search.css";
const Search = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onSearch = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue("");
    onNewCategory(inputValue.trim());
  };

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="search-container" onSubmit={onSearch}>
      <input
        type="text"
        placeholder="Busca tu gif"
        value={inputValue}
        onChange={onInputChange}
      />
      <button type="submit"> Buscar</button>
    </form>
  );
};

export default Search;
