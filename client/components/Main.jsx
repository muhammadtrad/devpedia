// main
import React from "react";
import Tech_Choice from './Tech_Choice';
import Tech_Resources from './Tech_Resources';
import More_Resources from './More_Resources';

const Main = () => {


  return (
    <div className="main">
      {/* <Projects /> */}
      <Tech_Choice/>
      <Tech_Resources />
      <More_Resources />
    </div>
  );
};

export default Main;
