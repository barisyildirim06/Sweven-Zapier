const env = require('../../env');
const { loginRequest } = require('../helper');
const { productInputFields } = require('../input-fields/creates/product');
const { productSample } = require('../samples/product');

const createProduct = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const productsPostRequest = await z.request({
        url: `${env.apiServer}/product/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'sku_number' : bundle.inputData.sku_number,
            'name' : bundle.inputData.name,
            'serial_number' : bundle.inputData.serial_number,
            'category_id' : bundle.inputData.category_id,
            'type_id' : bundle.inputData.type_id,
        }
    })

    const products = productsPostRequest.json;

    return products;
}

module.exports = {
    key: 'product',
    noun: 'Product',
    display: {
        label: 'Create Product',
        description: 'Creates a new product.'
    },
    operation: {
        perform: createProduct,
        sample: productSample,
        inputFields: productInputFields
    }
}