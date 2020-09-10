import React from "react";
import Videos from "./Videos";
import Text from "./Text";
const angular = require('../../server/model/angular.json');
const bootstrap = require('../../server/model/bootstrap.json');
const chai = require('../../server/model/chai.json');
const express = require('../../server/model/express.json');
const graphql = require('../../server/model/graphql.json');
const jest = require('../../server/model/jest.json');
const materialui = require('../../server/model/materialui.json');
const mocha = require('../../server/model/mocha.json');
const mongodb = require('../../server/model/mongodb.json');
const node = require('../../server/model/node.json');
const postgresql = require('../../server/model/postgresql.json');
const react = require('../../server/model/react.json');
const sql = require('../../server/model/sql.json');
const vue = require('../../server/model/vue.json');

const More_Resources = (props) => {
  const { techChoices } = props;
    const  resourceInfo = {
    angular,
    bootstrap,
    chai,
    express,
    graphql,
    jest,
    materialui,
    mocha,
    mongodb,
    node,
    postgresql,
    react,
    sql,
    vue
  };

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
