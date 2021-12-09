const env = require('../../env');
const { loginRequest } = require('../helper');
const { subStatusSample } = require('../samples/sub-status');

const listSubStatuses = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const subStatusesGetRequest = await z.request({
        url: `${env.apiServer}/substatus`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const subStatuses = JSON.parse(subStatusesGetRequest.content).sub_status;

    return subStatuses;
}

module.exports = {
    key: 'subStatuses',
    noun: 'SubStatuses',
    display: {
        label: 'SubStatuses',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listSubStatuses,
        sample: subStatusSample
    }
}