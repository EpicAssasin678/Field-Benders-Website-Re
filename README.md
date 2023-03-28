## Field Benders Web 

[![Netlify Status](https://api.netlify.com/api/v1/badges/4851dff4-0194-4846-be08-8e02fd6ef872/deploy-status)](https://app.netlify.com/sites/peaceful-mermaid-8e32a8/deploys)

> [Current depolyment of the site here!](https://fieldbendersweb.netlify.app)



This repository serves as store for my website for Field Benders. There should be a branch called deployable which contains the dependencies in correct versions needed to run the site. Since I cannot verify the behavviour of this program outside of the versions used, if you are desiring to deploy this as a template, please clone that branch. 

Note: This project is under the Apache License, but the a good portion of content within is under my licensing. Using the assets along with this site and creating a direct copy isn't allowed. Thank you. 

### Dependencies 

nodemon

### ENV VARIABLES
#### server 
MONGO_TOKEN = mongodb login token 
ENTRYPOINT = basic entrypoint for server instance, follows IP address Ipv4 or Ipv6 depending on deployment config
PORT = process port 
#### client server 
DATABASE_SERVER_ADDRESS = http/https address of the backend for REST calls

