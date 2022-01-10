const env = require('../../env');
const { loginRequest } = require('../helper');
const { assetInputFields } = require('../input-fields/creates/asset');
const { assetSample } = require('../samples/asset');

const createAsset = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const assetsPostRequest = await z.request({
        url: `${env.apiServer}/asset/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'name' : bundle.inputData.name,
            'site_id' : bundle.inputData.site_id,
            'asset_id' : bundle.inputData.asset,
        }
    })

    const assets = assetsPostRequest.json;

    return assets;
}

module.exports = {
    key: 'asset',
    noun: 'Asset',
    display: {
        label: 'Create Asset',
        description: 'Creates a new asset.'
    },
    operation: {
        perform: createAsset,
        sample: assetSample,
        inputFields: assetInputFields
    }
}