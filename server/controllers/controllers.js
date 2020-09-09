//Controller

let resourcesModel = require("../model/model");

const reactResources = require("../model/react.json");

console.log(" React resources ", reactResources);

const resources = {};

resources.createResourcesTable = function(){
    resourcesModel.select(`CREATE TABLE "Resources"
  (
  "resources_id"   varchar(50) NOT NULL,
  "video_tutorial" json NOT NULL,
  "video_overview" json NOT NULL,
  "text_tutorial"  json NOT NULL,
  "text_overview"  json NOT NULL,
  CONSTRAINT "PK_resources" PRIMARY KEY ( "resources_id" )
  );`);
}

resources.createTechnologyTable = function(){
    `CREATE TABLE "technology"
    (
    "technology_id"  NOT NULL,
    "name"          varchar(50) NOT NULL,
    "github_link"   varchar(50) NOT NULL,
    "project_id"    varchar(50) NOT NULL,
    "resources_id"  varchar(50) NOT NULL,
    "documentation" varchar(50) NOT NULL,
    CONSTRAINT "PK_technology" PRIMARY KEY ( "technology_id" ),
    CONSTRAINT "FK_54" FOREIGN KEY ( "project_id" ) REFERENCES "projects" ( "project_id" ),
    CONSTRAINT "FK_57" FOREIGN KEY ( "resources_id" ) REFERENCES "Resources" ( "resources_id" )
    );

    CREATE INDEX "fkIdx_54" ON "technology"
    (
    "project_id"
    );

    CREATE INDEX "fkIdx_57" ON "technology"
    (
    "resources_id"
    );`
}

resources.createUsersTable = function() {
`  CREATE TABLE "users"("_id" varchar(50) NOT NULL, CONSTRAINT "PK_table_3" PRIMARY KEY ( "_id" ));`
}

resources.getReactHardCodedResources = function(){ 

  return new Promise( (resolve, reject ) => {
    if( reactResources ){
      resolve(reactResources);            
    }else{
      reject("ERROR in hardCoded Resources ");
    }
  })
  
}


module.exports = resources;