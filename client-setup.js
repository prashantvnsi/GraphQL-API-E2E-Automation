/* This file takes care of the setup
   If authentication is needed before calling the endpoint
   it can be added here.
*/
const ApolloClient = require ("apollo-boost"). default;
const fetch = require ('node-fetch')
const apolloGraphQLClient = (accountDetails) => { 
return new ApolloClient ({ 
    uri: accountDetails.url, 
    fetch: fetch, 
    request: (operation) => { 
      operation.setContext ({ 
      }); 
    }, 
  }) ; 
};
module.exports = {apolloGraphQLClient};