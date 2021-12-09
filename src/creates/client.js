const env = require('../../env');
const { loginRequest } = require('../helper');
const { clientInputFields } = require('../input-fields/creates/client');
const { clientSample } = require('../samples/client');

const createClient = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const clientsPostRequest = await z.request({
        url: `${env.apiServer}/client/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'client_name' : bundle.inputData.client_name,
            'prefix' : bundle.inputData.prefix,
            'address' : bundle.inputData.address,
            'city' : bundle.inputData.city,
            'status_id' : bundle.inputData.status_id,
            'state' : bundle.inputData.state,
        }
    })

    const clients = clientsPostRequest.json;

    return clients;
}

module.exports = {
    key: 'client',
    noun: 'Client',
    display: {
        label: 'Create Client',
        description: 'Creates a new client.'
    },
    operation: {
        perform: createClient,
        sample: clientSample,
        inputFields: clientInputFields
    }
}