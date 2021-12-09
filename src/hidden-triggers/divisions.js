const env = require('../../env');
const { loginRequest } = require('../helper');
const { divisionSample } = require('../samples/division');

const listDivisions = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const divisionsGetRequest = await z.request({
        url: `${env.apiServer}/projectdivisions`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const divisions = JSON.parse(divisionsGetRequest.content).project_divisions;
    return divisions;
}

module.exports = {
    key: 'divisions',
    noun: 'Divisions',
    display: {
        label: 'Divisions',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listDivisions,
        sample: divisionSample
    }
}