const env = require('../../env');
const { loginRequest } = require('../helper');
const { subAssetSample } = require('../samples/sub-asset');

const listSubAssets = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const subAssetsGetRequest = await z.request({
        url: `${env.apiServer}/sub-assets`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const subAssets = JSON.parse(subAssetsGetRequest.content).sub_assets;

    return subAssets;
}

module.exports = {
    key: 'subAsset',
    noun: 'Sub Asset',
    display: {
        label: 'New Sub Asset',
        description: 'Triggers when new sub asset is created.'
    },
    operation: {
        perform: listSubAssets,
        sample: subAssetSample
    }
}