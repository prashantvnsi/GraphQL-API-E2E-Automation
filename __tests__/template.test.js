// Write the tests here

const {apolloGraphQLClient} = require ("../client-setup"); 
const {listQuery} = require ("../queries/my-queries");
let client;

const accountDetails = { 
  url: "https://graphql.blacklane.io/graphql", 
};
describe ("Tests the bookings query", () => { 
  beforeAll (() => { 
    client = apolloGraphQLClient (accountDetails); 
  });
test ("Fetches all the bookings", async () => { 
    const graphQLdata = await client.query ({ 
      query: listQuery, 
    }); 
    expect (graphQLdata) .toBeTruthy (); 
    // display the id of the 1st booking
    console.log(graphQLdata.data.bookings.items[1].id);
  }); 
});