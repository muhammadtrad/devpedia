//Controller
const resourcesModel = require("../model/model");
const reactResources = require("../model/react.json");


const resources = {};


resources.getReactHardCodedResources = function(req, res, next){ 

  /**
   * Using a promise here as a place holder for the promise
   * returned from our database query.
   */
  return new Promise( (resolve, reject ) => {
    if( reactResources ){
      resolve(reactResources);            
    }else{
      reject("ERROR in hardCoded Resources ");
    }
  }).then( x => {
    res.status(200).send(x);
  })

}

//INSERT INTO Techs (tech_category, name) VALUES (1, ‘Vue’);
resources.getTech = function(req, res, next){
  console.log(" req.params ", req.query);

  resourcesModel.select(`SELECT * FROM "public"."${req.query.requestQuery}"`)
  .then( res => {    
    return res.rows;
  })
  .then( (data) => {
    console.log(" DATA ", data);
    res.status(200).json(data);
    return next();
  })
  .catch( err => `DB CAP ERROR: ${err}`);

}

resources.getTechCategory = function(req, res, next){
  console.log(" req.params ", req.params.requestQuery);
  //front end fetch HTTP METHOD:GET db?requestQuery=tech_categories
  resourcesModel.select(`SELECT * FROM "public".${req.params.requestQuery}`)
  .then( res => {
    return res.rows;
  })
  .then( (data) => {
    console.log(" Data ", data);
    res.status(200).json(data);
    return next();    
  })
  .catch( err => `DB TC ERROR: ${err}`);
}

module.exports = resources;