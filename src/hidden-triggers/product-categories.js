const env = require('../../env');
const { loginRequest } = require('../helper');
const { productCategoriesample } = require('../samples/product-category');

const listProductCategories = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const productCategoriesGetRequest = await z.request({
        url: `${env.apiServer}/productcategories`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })
    console.log(JSON.parse(productCategoriesGetRequest.content));
    const productCategories = JSON.parse(productCategoriesGetRequest.content).product_categories;

    return productCategories;
}

module.exports = {
    key: 'productCategories',
    noun: 'Product Categories',
    display: {
        label: 'Product Categories',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listProductCategories,
        sample: productCategoriesample
    }
}