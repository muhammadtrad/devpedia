import React from "react";
const { useState, useEffect } = React;
import CheckBox from './checkBox'; 
const Tech_Choice = (props) => {

  const initialData = Object.freeze({ checkBoxes: [] });
  const { currentChoices, updateChoices } = props;
  const [currentData, updateData] = useState(initialData);

  const checkedBoxes = (event) => {
    const techName = event.target.name;
    let newArr = currentChoices.techChoices;
    let unChecked = true;
    for (let i = 0; i<newArr.length; i++){
      if (currentChoices.techChoices[i] === techName){
        newArr.splice(i, 1);
        unChecked = false;
      }
    }
    if (unChecked){
      newArr.push(techName);
    }
    updateChoices({ techChoices: newArr });
  }
  
  const createCheckBoxes = (arr) => {
    let checkBoxes = [];
    console.log(arr);
    arr.forEach((el, index) => {

      let techItem = <CheckBox  key={index} name={el} value={el} checkedBoxes={checkedBoxes}/>
      checkBoxes.push(techItem);
      console.log('techItem', techItem);
    })
    updateData({ checkBoxes });
    console.log('checkboxes', currentData.checkBoxes);
  }

  useEffect(function() {
    fetch(`/db?requestQuery=techs`)
    .then( data => {
      return data.json();
    })
    .then( data => {
      console.log(" RETURNED JSON DATA ", data);
      let techArr = data.map((el) => {
        return el.name;
      });
      createCheckBoxes(techArr);
    });

  }, []);


  return (
    <div id="tech_resources" className="more_resources">
      <div className="subtitle-container">
        <h2 className="title">Technology Choices:</h2>
      </div>
      {currentData.checkBoxes}
    </div>
  );
};

export default Tech_Choice;

