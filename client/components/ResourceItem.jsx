import React from "react";

const ResourceItem = (props) => {
   const { name, doc, github } = props;

  return (
    <section className="project_techs">
        <div class = "project-heading-container">
        <h2>{name}</h2>
        </div>
        <div class = "project-link-container">
        <div className="link_container"><a href={doc} className="link">Docs</a></div>
        <div className="link_container"><a href={github} className="link">GitHub</a></div>
        <div className="link_container"><a href="" className="link">More Resources</a></div>
        </div>
    </section>
  );
};

export default ResourceItem;
