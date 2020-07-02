// Enter all the queries here
const {mutationData} = require("../testdata")
const gql = require ("graphql-tag");
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
      clientId: "u24XpG36M8EcZXp3OIO5LyeZLM6YMZj6",
      email: "prashant.tiwari+driver@blacklane.com",
      password: "blacklane",
      resourceOwnerType: driver ,
      grantType: implicit
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