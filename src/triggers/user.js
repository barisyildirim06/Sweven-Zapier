const env = require('../../env');
const { loginRequest } = require('../helper');
const { userSample } = require('../samples/user');

const listUsers = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const usersGetRequest = await z.request({
        url: `${env.apiServer}/users`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const users = JSON.parse(usersGetRequest.content).users;
    console.log(users);
    return users;
}

module.exports = {
    key: 'user',
    noun: 'User',
    display: {
        label: 'New User',
        description: 'Triggers when new user is created.'
    },
    operation: {
        perform: listUsers,
        sample: userSample
    }
}