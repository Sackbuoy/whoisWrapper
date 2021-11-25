const WhoisDataSource = require('./WhoisDataSource')
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Domain {
    id: String
    whois_server: String
    updated_date: String
    creation_date: String
    expiration_date: String
    registrar: String
    emails: String
    status: String
    nameservers: String
  }

  type Query {
    domain(domainName: String!): Domain
  }
`;

const resolvers = {
  Query: {
    domain: async (_, { domainName }, { dataSources }) => {
      return await dataSources.whoisDataSource.getDomainInfo(domainName);
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    whoisDataSource: new WhoisDataSource()
  })
});

module.exports = {
  server,
  resolvers, 
  typeDefs
};