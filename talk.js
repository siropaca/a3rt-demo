const request = require('request-promise')
const config = require('./config')

const options = {
    method: 'POST',
    uri: 'https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',
    timeout: 3000,
    json: true,
    form: {
        apikey: config.TALK_API_KEY,
        query: 'おはよう'
    }
}

request(options)
    .then(body => {
        console.log(body)
    })
    .catch(err => {
        console.log(err)
    })
