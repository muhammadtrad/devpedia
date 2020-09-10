import React from "react";
import Videos from "./Videos";
import Text from "./Text";

const More_Resources = () => {


  return (
    <div className="more_resources">
      <div className="subtitle-container">
        <h2 className="title">Project Technologies:</h2>
      </div>
      <div className="project_tech_container">
        <div className="more_resources_col">
          <Videos />
        </div>
        <div className="more_resources_col">
          <Text />
        </div>
      </div>
    </div>
  );
};

export default More_Resources;
