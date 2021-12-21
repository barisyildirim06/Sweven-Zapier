const env = require('../../env');
const { loginRequest } = require('../helper');
const { assetTypeSample } = require('../samples/asset-type');

const listAssetTypes = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const assetTypesGetRequest = await z.request({
        url: `${env.apiServer}/assettypes`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const assetTypes = JSON.parse(assetTypesGetRequest.content).asset_types;

    return assetTypes;
}

module.exports = {
    key: 'assetTypes',
    noun: 'Asset Types',
    display: {
        label: 'Asset Types',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listAssetTypes,
        sample: assetTypeSample
    }
}