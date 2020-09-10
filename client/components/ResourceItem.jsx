import React from "react";

const ResourceItem = (props) => {
   const { name, doc, github } = props;

  return (
    <div className="project_techs">
    <section>
    <h2>{name}</h2>
        <a href={doc} className="link">Docs</a>
        <a href={github} className="link">GitHub</a>
        <a href="" className="link">More Resources</a>
    </section>
    </div>
  );
};

export default ResourceItem;