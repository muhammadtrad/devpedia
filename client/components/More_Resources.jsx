import React from "react";
import Videos from "./Videos";
import Text from "./Text";

const More_Resources = () => {


  return (
    <div className="more_resources">
    <div>
    <h2 className="title">More Resources:</h2>
      <br />
    </div>
    <div className="more_resources_col">
      <Videos />
    </div>
    <div className="more_resources_col">
      <Text />
    </div>
    </div>
  );
};

export default More_Resources;
