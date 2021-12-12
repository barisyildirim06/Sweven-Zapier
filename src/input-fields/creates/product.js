const productInputFields = [
    {
        key: 'sku_number',
        label: 'sku_number',
        type: 'string',
        required: true
    },
    {
        key: 'name',
        label: 'name',
        type: 'string',
        required: true
    },
    {
        key: 'serial_number',
        label: 'serial_number',
        type: 'string',
        required: true
    },
    {
        key: 'category_id',
        label: 'Category',
        type: 'integer',
        helpText: 'Choose a Category',
        dynamic: 'productCategories.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'type_id',
        label: 'Type',
        type: 'integer',
        helpText: 'Choose a Type',
        dynamic: 'productTypes.id.name',
        altersDynamicFields: true,
        required: true
    },
]
module.exports = { productInputFields }