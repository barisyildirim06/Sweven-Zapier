const env = require('../../env');
const { loginRequest } = require('../helper');
const { productTypeSample } = require('../samples/product-type');

const listProductTypes = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const productTypesGetRequest = await z.request({
        url: `${env.apiServer}/producttypes`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })
    console.log(JSON.parse(productTypesGetRequest.content));
    const productTypes = JSON.parse(productTypesGetRequest.content).product_types;

    return productTypes;
}

module.exports = {
    key: 'productTypes',
    noun: 'Product Types',
    display: {
        label: 'Product Types',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listProductTypes,
        sample: productTypeSample
    }
}