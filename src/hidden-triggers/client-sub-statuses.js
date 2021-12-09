const env = require('../../env');
const { loginRequest } = require('../helper');
const { clientSubStatusSample } = require('../samples/client-sub-status');

const listClientSubStatuses = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const clientSubStatusesGetRequest = await z.request({
        url: `${env.apiServer}/clientsubstatus`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const clientSubStatuses = JSON.parse(clientSubStatusesGetRequest.content).client_sub_status;

    return clientSubStatuses;
}

module.exports = {
    key: 'clientSubStatuses',
    noun: 'ClientSubStatuses',
    display: {
        label: 'ClientSubStatuses',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listClientSubStatuses,
        sample: clientSubStatusSample
    }
}