const env = require('../../env');
const { loginRequest } = require('../helper');
const { vendorSample } = require('../samples/vendor');

const listVendors = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const vendorsGetRequest = await z.request({
        url: `${env.apiServer}/vendors`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const vendors = JSON.parse(vendorsGetRequest.content).vendors;
    return vendors;
}

module.exports = {
    key: 'vendor',
    noun: 'Vendor',
    display: {
        label: 'New Vendor',
        description: 'Triggers when new vendor is created.'
    },
    operation: {
        perform: listVendors,
        sample: vendorSample
    }
}