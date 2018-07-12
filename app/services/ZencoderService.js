const axios = require('axios')
const ENDPOINT = 'https://app.zencoder.com/api/v2'

axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Zencoder-Api-Key'] = 'SECRET-KEY'

module.exports = {
  async createJob ({ input, bucket, key }){
    const data = {
      input: input,
      outputs: [
        {
          label: 'web',
          url: `s3://${bucket}/processed_${key}`,
          notifications: [
            //TODO Quando estiver em produção adicionar url do hook que irá receber os eventos
          ]
        }
      ]
    }
    return await axios.post(`${ENDPOINT}/jobs`, data)
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        return null
        console.log(error)
      });
  }
}