import React, { useState } from "react";
import HomeButton from "../HomeButton";
import "./SearchPage.css";
import "../MainPage.css";

const SearchPage = () => {
  const [data, setData] = useState([]);
  // const names = ['James', 'John', 'Paul', 'Ringo', 'George'];
  const countries = [
    { name: "Belgium", continent: "Europe" },
    { name: "India", continent: "Asia" },
    { name: "Bolivia", continent: "South America" },
    { name: "Ghana", continent: "Africa" },
    { name: "Japan", continent: "Asia" },
    { name: "Canada", continent: "North America" },
    { name: "New Zealand", continent: "Australasia" },
    { name: "Italy", continent: "Europe" },
    { name: "South Africa", continent: "Africa" },
    { name: "China", continent: "Asia" },
    { name: "Paraguay", continent: "South America" },
    { name: "Usa", continent: "North America" },
    { name: "France", continent: "Europe" },
    { name: "Botswana", continent: "Africa" },
    { name: "Spain", continent: "Europe" },
    { name: "Senegal", continent: "Africa" },
    { name: "Brazil", continent: "South America" },
    { name: "Denmark", continent: "Europe" },
    { name: "Mexico", continent: "South America" },
    { name: "Australia", continent: "Australasia" },
    { name: "Tanzania", continent: "Africa" },
    { name: "Bangladesh", continent: "Asia" },
    { name: "Portugal", continent: "Europe" },
    { name: "Pakistan", continent: "Asia" },
  ];
  const searchHandler = (e) => {
    e.preventDefault();
    setData(e.target.value);
    console.log("getData", e.target.value);
  };
  return (
    <div className="containerSearch">
      <div className="home">
        <HomeButton />
      </div>
      <div className="textcentre">
        <h4>Type to search</h4>
        <br />
        <input
          type="text"
          placeholder="type text & press enter..."
          size="50"
          value={data}
          onChange={searchHandler}
        />
        <br />
        <ul>
        {/* {countries.map((item)=>(
          <li>
           <h4>Country </h4>: {item.name}  <h4>Continent </h4>:{item.continent}
          </li>
        ))} */}
        {countries.filter(name => name.includes(data)).map(filteredName => (
        <li>
          {filteredName}
        </li>
      ))}
        </ul>
        {!data && <p>Showing 0 results</p>}
      </div>
    </div>
  );
};

export default SearchPage;
