const env = require('../../env');
const { loginRequest } = require('../helper');
// const { statusSample } = require('../samples/status');

const listStatuses = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const statusesGetRequest = await z.request({
        url: `${env.apiServer}/status`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    console.log(statusesGetRequest);
    const statuses = JSON.parse(statusesGetRequest.content).status;

    return statuses;
}

module.exports = {
    key: 'statuses',
    noun: 'Statuses',
    display: {
        label: 'Statuses',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listStatuses,
        // sample: statusSample
    }
}