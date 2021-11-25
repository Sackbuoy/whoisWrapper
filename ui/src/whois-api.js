const { ApolloClient, gql, InMemoryCache } = require('@apollo/client')

const baseUrl = '/api/';

const cache: InMemoryCache = new InMemoryCache({});
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  cache,
  uri: baseUrl
});

class WhoisAPI {
  static async getDomainInfo(domainName) {
    return client.query({
      query: gql`
        query getDomain {
          domain(domainName: "${domainName}") {
            id
            whois_server
            updated_date
            creation_date
            expiration_date
            registrar
            emails
            status
            nameservers
          }
        }
      `
    }).then(result => {
        let { __typename, ...data } = result['data']['domain'];
        return data;
      }).catch(err => {
        return {};
      });
  }
}

export default WhoisAPI;
