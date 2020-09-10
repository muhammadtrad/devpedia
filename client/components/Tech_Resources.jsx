import React from "react";

const Tech_Resources = () => {


  return (
    <div className="more_resources">
    <div className="subtitle-container">
      <h2 className="title">Project Technologies:</h2>      
    </div>
    <div className="cards-container">
      <section className="project_techs">
          <div class = "project-heading-container">
            <h2>Vue</h2>
          </div>
          <div class = "project-link-container">
            <div className="link_container"><a href="https://www.chaijs.com/" className="link">Docs</a></div>
            <div className="link_container"><a href="https://github.com/chaijs/chai" className="link">GitHub</a></div>
            <div className="link_container"><a href="" className="link">More Resources</a></div>
          </div>
      </section>
      <section className="project_techs">
          <div class = "project-heading-container">
            <h2>Node</h2>
          </div>
          <div class = "project_link_container">
            <div className="link_container"><a href="https://www.chaijs.com/" className="link">Docs</a></div>
            <div className="link_container"><a href="https://github.com/chaijs/chai" className="link">GitHub</a></div>
            <div className="link_container"><a href="" className="link">More Resources</a></div>
          </div>
      </section>
      <section className="project_techs">
          <div class = "project-heading-container">
            <h2>Graph QL</h2>
          </div>
          <div class = "project_link_container">
            <div className="link_container"><a href="https://www.chaijs.com/" className="link">Docs</a></div>
            <div className="link_container"><a href="https://github.com/chaijs/chai" className="link">GitHub</a></div>
            <div className="link_container"><a href="" className="link">More Resources</a></div>
          </div>
      </section>
      <section className="project_techs">
        <div class = "project-heading-container">
          <h2>SCSS</h2>
        </div>
        <div class = "project_link_container">
          <div className="link_container"><a href="https://www.chaijs.com/" className="link">Docs</a></div>
          <div className="link_container"><a href="https://github.com/chaijs/chai" className="link">GitHub</a></div>
          <div className="link_container"><a href="" className="link">More Resources</a></div>
        </div>
    </section>         
    </div>
</div>
  );
};

export default Tech_Resources;