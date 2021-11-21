const axios = require('axios').default;

const baseUrl = '/api/';
class WhoisAPI {
  static async getDomainInfo(domain) {
    const url = baseUrl + `lookup/${domain}`;
    console.log(url)
    return axios.get(url)
      .then(response => response.data );
  }
}

export default WhoisAPI;
