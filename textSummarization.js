const request = require('request-promise')
const config = require('./config')

const options = {
    method: 'POST',
    uri: 'https://api.a3rt.recruit-tech.co.jp/text_summarization/v1',
    timeout: 3000,
    json: true,
    form: {
        apikey: config.TEXT_SUMMARIZATION_API_KEY,
        sentences: 'むかしむかし、あるところに、おじいさんとおばあさんが住んでいました。おじいさんは山へしばかりに、おばあさんは川へせんたくに行きました。おばあさんが川でせんたくをしていると、ドンブラコ、ドンブラコと、大きな桃が流れてきました。'
    }
}

request(options)
    .then(body => {
        console.log(body)
    })
    .catch(err => {
        console.log(err)
    })
