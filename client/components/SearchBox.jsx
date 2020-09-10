import React, {useState} from "react";
import { Form } from 'react-bootstrap';
const SearchBox = () => {  

  const initialData = {
    tableName: "",
  };

  const [currentQuery, updateQuery] = useState(initialData);

  const handleChange = function(e) {    
    console.log(" E: ", currentQuery.tableName);
    console.log(" E2", e.target.value)
    updateQuery({tableName: e.target.value})
  }
  
  const queryDB = function (e){
    console.log("TABLE NAME EVENT ", e.target);
    
    let tech = currentQuery.tableName.trim();
    
    fetch(`/db?requestQuery=${tech}`)
    .then( data => {
      return data.json();
    })
    .then( data => {
      console.log(" RETURNED JSON DATA ", data);
    })
    .catch( e => {
      console.error(" ERROR WITH DB FETCH ", e);
    })
  }
  

  return (
    <div className="searchBox">
      <div className = "searchBox-container">
      <h2>What are you looking for?</h2>
      <br />
      <div>
        <label>
        <input id='techname' type="text" name="name" onChange={handleChange}/>
        </label>
        <button type="Submit" value="Search" onClick={queryDB}>Query</button>
      </div>
      </div>
    </div>
  );
};

export default SearchBox;
