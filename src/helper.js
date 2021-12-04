const env = require("../env");

const loginRequest = async (z,bundle) => {
    return await z.request({
        url: `${env.apiServer}/login`,
        method: 'POST',
        body: {
          'email': bundle.authData.email,
          'password': bundle.authData.password,
        },
        headers: {
        }
    });
}

module.exports = { loginRequest };