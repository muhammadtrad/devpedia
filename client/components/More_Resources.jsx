import React from "react";
import Videos from "./Videos";
import Text from "./Text";
const Angular = require('../../server/model/angular.json');
const Bootstrap = require('../../server/model/bootstrap.json');
const Chai = require('../../server/model/chai.json');
const Express = require('../../server/model/express.json');
const GraphQL = require('../../server/model/graphql.json');
const Jest = require('../../server/model/jest.json');
const MaterialUI = require('../../server/model/materialui.json');
const Mocha = require('../../server/model/mocha.json');
const MongoDB = require('../../server/model/mongodb.json');
const Node = require('../../server/model/node.json');
const PostgreSQL = require('../../server/model/postgresql.json');
const React2 = require('../../server/model/react.json');
const SQL = require('../../server/model/sql.json');
const Vue = require('../../server/model/vue.json');

const More_Resources = (props) => {
  const { selectedTech } = props;
  const  resourceInfo = {
    Angular,
    Bootstrap,
    Chai,
    Express,
    GraphQL,
    Jest,
    MaterialUI,
    Mocha,
    MongoDB,
    Node,
    PostgreSQL,
    React2,
    SQL,
    Vue
  };


  return (
    <div className="more_resources">
      <div className="subtitle-container">
        <h2 className="title">Project Technologies:</h2>
      </div>
      <div className="project_tech_container">
        <div className="more_resources_col">
          <Videos videos={resourceInfo[selectedTech]}/>
        </div>
        <div className="more_resources_col">
          <Text text={resourceInfo[selectedTech]}/>
        </div>
      </div>
    </div>
  );
};

export default More_Resources;
