import React from "react";
import { Form } from 'react-bootstrap';
const SearchBox = () => {


  return (
    <div className="searchBox">
      <div className = "searchBox-container">
      <h2>What are you looking for?</h2>
      <br />
      <form>
        <label>
        <input type="text" name="name" />
        </label>
        <input type="Submit" value="Search" />
      </form>
      </div>
    </div>
  );
};

export default SearchBox;
