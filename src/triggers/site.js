const env = require('../../env');
const { loginRequest } = require('../helper');
const { siteSample } = require('../samples/site');

const listSites = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const sitesGetRequest = await z.request({
        url: `${env.apiServer}/sites`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const sites = JSON.parse(sitesGetRequest.content).sites;

    return sites;
}

module.exports = {
    key: 'site',
    noun: 'Site',
    display: {
        label: 'New Site',
        description: 'Triggers when new site is created.'
    },
    operation: {
        perform: listSites,
        sample: siteSample
    }
}