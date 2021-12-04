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
    key: 'users',
    noun: 'Users',
    display: {
        label: 'Users',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listUsers,
        sample: userSample
    }
}