const env = require('../../env');
const { loginRequest } = require('../helper');
const { productSample } = require('../samples/product');

const listProducts = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const productsGetRequest = await z.request({
        url: `${env.apiServer}/products`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const products = JSON.parse(productsGetRequest.content).products;

    return products;
}

module.exports = {
    key: 'product',
    noun: 'Product',
    display: {
        label: 'New Product',
        description: 'Triggers when new product is created.'
    },
    operation: {
        perform: listProducts,
        sample: productSample
    }
}