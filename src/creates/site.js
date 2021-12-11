const env = require('../../env');
const { loginRequest } = require('../helper');
const { siteInputFields } = require('../input-fields/creates/site');
const { siteSample } = require('../samples/site');

const createSite = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const sitesPostRequest = await z.request({
        url: `${env.apiServer}/site/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'number' : bundle.inputData.number,
            'name' : bundle.inputData.name,
            'address' : bundle.inputData.address,
            'state' : bundle.inputData.state,
            'city' : bundle.inputData.city,
            'client_id' : bundle.inputData.client_id,
        }
    })

    const sites = sitesPostRequest.json;

    return sites;
}

module.exports = {
    key: 'site',
    noun: 'Site',
    display: {
        label: 'Create Site',
        description: 'Creates a new site.'
    },
    operation: {
        perform: createSite,
        sample: siteSample,
        inputFields: siteInputFields
    }
}