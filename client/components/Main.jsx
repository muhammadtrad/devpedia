// main
import React from "react";
import Tech_Choice from './Tech_Choice';
import Tech_Resources from './Tech_Resources';
import More_Resources from './More_Resources';
const { useState, useEffect } = React;

const Main = () => {

  const initialData = Object.freeze({ techChoices : [] });

  const [currentChoices, updateChoices] = useState(initialData);

  return (
    <div id="main">
      <Tech_Choice updateChoices = {updateChoices} currentChoices={currentChoices}/>
      <Tech_Resources techChoices={currentChoices.techChoices}/>
      <More_Resources techChoices={currentChoices.techChoices}/>
    </div>
  );
};

export default Main;
