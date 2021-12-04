const env = require('../../env');
const { loginRequest } = require('../helper');
const { clientSample } = require('../samples/client');

const listClients = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const clientsGetRequest = await z.request({
        url: `${env.apiServer}/clients`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const clients = JSON.parse(clientsGetRequest.content).clients;

    return clients;
}

module.exports = {
    key: 'clients',
    noun: 'Clients',
    display: {
        label: 'Clients',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listClients,
        sample: clientSample
    }
}