const env = require('../../env');
const { loginRequest } = require('../helper');
const { vendorInputFields } = require('../input-fields/creates/vendor');
const { vendorSample } = require('../samples/vendor');

const createvendor = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const vendorsPostRequest = await z.request({
        url: `${env.apiServer}/vendor/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'vendor_name' : bundle.inputData.vendor_name,
            'vendor_id' : bundle.inputData.vendor_id,
            'address' : bundle.inputData.address,
            'do_not_use' : bundle.inputData.do_not_use,
        }
    })

    const vendors = vendorsPostRequest.json;

    return vendors;
}

module.exports = {
    key: 'vendor',
    noun: 'vendor',
    display: {
        label: 'Create Vendor',
        description: 'Creates a new vendor.'
    },
    operation: {
        perform: createvendor,
        sample: vendorSample,
        inputFields: vendorInputFields
    }
}