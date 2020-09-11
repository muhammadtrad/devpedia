import React from "react";
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

import ResourceItem from './ResourceItem';

const Tech_Resources = (props) => {

  const { techChoices, moreResources } = props;
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

  const displayResources = (resources) =>{
    let compArr = [];
    console.log(resourceInfo);
    resources.forEach((el) => {
      let item = <ResourceItem name={el} doc={resourceInfo[el].Docs} github={resourceInfo[el].Github} moreResources={moreResources}/>
      compArr.push(item);
    })
    return compArr;
  }
  return (
    <div className="more_resources">
    <div className="subtitle-container">
      <h2 className="title">Project Technologies:</h2>      
    </div>
    <div className="cards-container">
    {displayResources(techChoices)}      
    </div>
    </div>
  );
};

export default Tech_Resources;