const vendorInputFields = [
    {
        key: 'vendor_name',
        label: 'Vendor Name',
        type: 'string',
        required: true
    },
    {
        key: 'vendor',
        label: 'Vendor',
        type: 'integer',
        required: true
    },
    {
        key: 'address',
        label: 'Address',
        type: 'string',
        required: true
    },
    {
        key: 'do_not_use',
        label: 'Do Not Use',
        type: 'boolean',
        required: true
    },
]
module.exports = { vendorInputFields }