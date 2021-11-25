const { RESTDataSource } = require('apollo-datasource-rest');
const whois = require('whois-api');

class WhoisDataSource extends RESTDataSource {
  constructor() {
    super();
  }

  async getDomainInfo(domainName) {
    return await new Promise((resolve, reject) => 
      whois.lookup(domainName, async (err, res) => {
        err === null ? resolve(res) : reject(err);
    }));
  }
}

module.exports = WhoisDataSource;

