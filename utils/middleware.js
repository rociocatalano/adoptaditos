const jwt = require("jsonwebtoken");
require('dotenv').config()

const consoleData = (req, res, next) => {
  console.log("Method:" + req.method);
  console.log("Path:" + req.path);
  console.log("Body:", req.body);
  console.log("Params:", req.params);
  console.log("Query:", req.query);
  console.log("------");
  next();
};

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "unknown endpoint" });
};

const processToken = (req,resp,next) => {
  const authorization = req.get('authorization');
  if(authorization && authorization.toLowerCase().startsWith('bearer ')){
    req.token = authorization.substring(7)
  }else{
    req.token = null
  }
  next();
}

const validarUserLogin = (req, resp, next) => { 
  if(!req.token ){
    return resp.status(401).json({error: 'token missing'})
  }
  const decodeToken = jwt.verify(req.token,process.env.JWTSECRET)
  
  if( !decodeToken.id){
    return resp.status(401).json({error: 'token invalid'})
  }
  
  req.user = decodeToken
  next()
}

module.exports = { consoleData, unknownEndpoint,processToken, validarUserLogin };
