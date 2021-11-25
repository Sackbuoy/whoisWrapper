const WhoisDataSource = require('../WhoisDataSource')
const { ApolloServer, gql } = require('apollo-server');
const { resolvers, typeDefs } = require('../app')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    whoisDataSource: new WhoisDataSource()
  })
});

describe('Makes requests to valid location', () => {
  it('Requests information about a valid domain', async () => {
    const res = await server.executeOperation({ query: '{ domain(domainName: "whoiswrapper.com") { id } }'});
    expect(res.data.domain.id).toBe('2656629675_DOMAIN_COM-VRSN');
  })

  it('Requests information about an invalid domain', async () => {
    const res = await server.executeOperation({ query: '{ domain(domainName: "does-not-exist") { id } }'});
    expect(res.errors[0].message).toBe('No WHOIS server found for the address');
  })

  it('Requests information with a blank domain', async () => {
    const res = await server.executeOperation({ query: '{ domain(domainName: " ") { id } }'});
    expect(res.errors[0].message).toBe('No WHOIS server found for the address');
  })

  it('Requests information with an empty domain', async () => {
    const res = await server.executeOperation({ query: '{ domain(domainName: "") { id } }'});
    expect(res.errors[0].message).toBe('Address is empty');
  })
})