const env = require('../../env');
const { loginRequest } = require('../helper');
const { prioritySample } = require('../samples/priority');

const listPriorities = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const prioritiesGetRequest = await z.request({
        url: `${env.apiServer}/priorities`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const priorities = JSON.parse(prioritiesGetRequest.content).priorities;

    return priorities;
}

module.exports = {
    key: 'priorities',
    noun: 'Priorities',
    display: {
        label: 'Priorities',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listPriorities,
        sample: prioritySample
    }
}