import React from "react";
import Tutorials from './Tutorials';
import Overviews from './Overviews';

const Text = () => {


  return (
    <div className="more_resources_child">
    <div>
    <h2>Text-based:</h2>
      <br />
    </div>
    <div>
      <Tutorials />
    </div>
    <div>
      <Overviews />
    </div>
    </div>
  );
};

export default Text;