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
    <div className="main">
      {/* <Projects /> */}
      <Tech_Choice updateChoices = {updateChoices} currentChoices={currentChoices}/>
      <Tech_Resources />
      <More_Resources />
    </div>
  );
};

export default Main;
