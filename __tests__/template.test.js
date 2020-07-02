// Write the tests here
const {urls} = require("../testdata")
const {apolloGraphQLClient} = require ("../client-setup"); 
const {retreiveBookings, chauffeurLogin} = require ("../queries/my-queries");
let client;

const accountDetails = { 
  url: urls.test_env
};
describe ("Tests the bookings query", () => { 
  beforeAll (() => { 
    client = apolloGraphQLClient (accountDetails); 
  });
test ("Fetches all the bookings", async () => { 
    const graphQLdata = await client.query ({ 
      query: retreiveBookings, 
    }); 
    expect (graphQLdata) .toBeTruthy (); 
    console.log(graphQLdata.data.bookings.items[1].id);
  }); 
});

describe ("Test Chauffeur Login Endpoint", () => { 
  beforeAll (() => { 
    client = apolloGraphQLClient (accountDetails); 
  });
  test ("it should have success value as true", async () => { 
    const graphQLdata = await client.mutate ({ 
      mutation: chauffeurLogin,
    }); 
    expect (graphQLdata) .toBeTruthy (); 
    expect(graphQLdata.data.chauffeurLogin.success).toBe(true);
  }); 
  test ("it should return a bearer token", async () => { 
    const graphQLdata = await client.mutate ({ 
      mutation: chauffeurLogin,
    }); 
    expect (graphQLdata) .toBeTruthy (); 
    expect(graphQLdata.data.chauffeurLogin.accessToken.tokenType).toBe('bearer');
  }); 
});