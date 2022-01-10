const env = require('../../env');
const { loginRequest } = require('../helper');
const { subAssetInputFields } = require('../input-fields/creates/sub-asset');
const { subAssetSample } = require('../samples/sub-asset');

const createSubAsset = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const subAssetPostRequest = await z.request({
        url: `${env.apiServer}/sub-asset/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'name' : bundle.inputData.name,
            'sub_asset_id' : bundle.inputData.sub_asset,
            'site_id' : bundle.inputData.site_id,
            'asset_id' : bundle.inputData.asset_id,
            'state' : bundle.inputData.state,
            'asset_type_id' : bundle.inputData.asset_type_id,
            'make' : bundle.inputData.make,
            'model' : bundle.inputData.model,
            'serial_number' : bundle.inputData.serial_number,
            'location' : bundle.inputData.location,
            'size' : bundle.inputData.size,
            'unit_size' : bundle.inputData.unit_size,
            'given_beginning_date' : bundle.inputData.given_beginning_date,
            'given_end_date' : bundle.inputData.given_end_date,
            'install_date' : bundle.inputData.install_date,
            'life_time_remaining' : bundle.inputData.life_time_remaining,
            'warranty_vendor' : bundle.inputData.warranty_vendor,
            'telecordia' : bundle.inputData.telecordia,
            'barcode' : bundle.inputData.barcode,
        }
    })

    const subAsset = subAssetPostRequest.json;

    return subAsset;
}

module.exports = {
    key: 'subAsset',
    noun: 'SubAsset',
    display: {
        label: 'Create Sub Asset',
        description: 'Creates a new sub asset.'
    },
    operation: {
        perform: createSubAsset,
        sample: subAssetSample,
        inputFields: subAssetInputFields
    }
}