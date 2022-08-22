import { gql } from 'apollo-server-micro';

export default gql`
type Location {
    id: Int!
    name: String!
    region: String
    country: String!
    lat: Float!
    log: Float!
    timezone: String!
}

type Query {
    locationById(id: Int!): Location
}
`
