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
    key: 'asset',
    noun: 'Asset',
    display: {
        label: 'New Asset',
        description: 'Triggers when new asset is created.'
    },
    operation: {
        perform: listAssets,
        sample: assetSample
    }
}