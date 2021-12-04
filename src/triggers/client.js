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
    key: 'client',
    noun: 'Client',
    display: {
        label: 'New Client',
        description: 'Triggers when new client is created.'
    },
    operation: {
        perform: listClients,
        sample: clientSample
    }
}