
// Enter all the queries here
const {mutationData} = require("../testdata")
const gql = require ("graphql-tag");
const { parse } = require ("graphql")

const retreiveBookings = gql` 
{
    bookings(limit: 10, filter: { matching: "a",timeState: upcoming, status: all }) {
      pageInfo{
        currentOffset
        totalPages
        totalCount
      }
      items {
        id
        service {
          status
          date
          passenger {
            firstName
          }
          pickupFlightDesignator {
            flightNumber
          }
        }
      }
    }
  }
`;

const chauffeurLogin = gql` 
mutation {
    chauffeurLogin(
      clientId: "${mutationData.clientId}",
      email: "${mutationData.email}",
      password: "${mutationData.password}",
      resourceOwnerType: ${mutationData.resourceOwnerType} ,
      grantType: ${mutationData.grantType}
    ){
      success,
      message,
      accessToken {
        accessToken
        tokenType
        expiresIn
      }
    }
  }
`;
module.exports = {retreiveBookings, chauffeurLogin}