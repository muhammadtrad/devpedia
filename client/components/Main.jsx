// main
import React from "react";
import Tech_Choice from './Tech_Choice';
import Tech_Resources from './Tech_Resources';
import More_Resources from './More_Resources';
const { useState, useEffect } = React;

const Main = () => {

  const initialData = { techChoices : [], selectedTech: ''};

  const [currentChoices, updateChoices] = useState(initialData);

  const moreResources = (name) => {
  
    updateChoices({ ...currentChoices, selectedTech: name});
    console.log(currentChoices.selectedTech);
  };

  return (
    <div id="main">
      <Tech_Choice updateChoices = {updateChoices} currentChoices={currentChoices}/>
      <Tech_Resources techChoices={currentChoices.techChoices} moreResources={moreResources}/>
      <More_Resources selectedTech={currentChoices.selectedTech}/>
    </div>
  );
};

export default Main;
