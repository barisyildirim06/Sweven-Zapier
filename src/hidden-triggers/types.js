const env = require('../../env');
const { loginRequest } = require('../helper');
// const { typeSample } = require('../samples/type');

const listTypes = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const typesGetRequest = await z.request({
        url: `${env.apiServer}/types`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const types = JSON.parse(typesGetRequest.content).types;

    return types;
}

module.exports = {
    key: 'types',
    noun: 'Types',
    display: {
        label: 'Types',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listTypes,
        // sample: typeSample
    }
}