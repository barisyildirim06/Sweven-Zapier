const env = require('../../env');
const { loginRequest } = require('../helper');
const { assetSample } = require('../samples/asset');

const listAssets = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const assetsGetRequest = await z.request({
        url: `${env.apiServer}/assets`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })
    const assets = JSON.parse(assetsGetRequest.content).assets;

    return assets;
}

module.exports = {
    key: 'assets',
    noun: 'Assets',
    display: {
        label: 'Assets',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listAssets,
        sample: assetSample
    }
}