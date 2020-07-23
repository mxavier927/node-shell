module.exports = function (website) {
    const request = require('request');
    request(website, function (error, response, body) {
        if (error) {
            throw error
        } else {
        process.stdout.write(body + '\nprompt > ')
    }})
}