// Enter all the queries here

const gql = require ("graphql-tag");
const listQuery = gql` 
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
module.exports = {listQuery}