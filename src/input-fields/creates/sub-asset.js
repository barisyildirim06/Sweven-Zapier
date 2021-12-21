const subAssetInputFields = [
    {
        key: 'name',
        label: 'name',
        type: 'string',
        required: true
    },
    {
        key: 'sub_asset_id',
        label: 'sub_asset_id',
        type: 'integer',
        required: true
    },
    {
        key: 'site_id',
        label: 'Site',
        type: 'integer',
        helpText: 'Choose a Site',
        dynamic: 'sites.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'asset_id',
        label: 'Asset',
        type: 'integer',
        helpText: 'Choose an Asset',
        dynamic: 'assets.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'state',
        label: 'State',
        type: 'string',
        // required: true
    },
    {
        key: 'asset_type_id',
        label: 'Asset Type ID',
        type: 'integer',
        required: true
    },
    {
        key: 'make',
        label: 'Make',
        type: 'string',
        // required: true
    },
    {
        key: 'model',
        label: 'model',
        type: 'string',
        // required: true
    },
    {
        key: 'serial_number',
        label: 'serial_number',
        type: 'string',
        // required: true
    },
    {
        key: 'location',
        label: 'location',
        type: 'string',
        // required: true
    },
    {
        key: 'size',
        label: 'size',
        type: 'string',
        // required: true
    },
    {
        key: 'unit_size',
        label: 'unit_size',
        type: 'string',
        // required: true
    },
    {
        key: 'given_beginning_date',
        label: 'given_beginning_date',
        type: 'string',
        // required: true
    },
    {
        key: 'given_end_date',
        label: 'given_end_date',
        type: 'string',
        // required: true
    },
    {
        key: 'install_date',
        label: 'install_date',
        type: 'string',
        // required: true
    },
    {
        key: 'life_time_remaining',
        label: 'life_time_remaining',
        type: 'string',
        // required: true
    },
    {
        key: 'warranty_vendor',
        label: 'warranty_vendor',
        type: 'string',
        // required: true
    },
    {
        key: 'telecordia',
        label: 'telecordia',
        type: 'string',
        // required: true
    },
    {
        key: 'barcode',
        label: 'barcode',
        type: 'string',
        // required: true
    },
]
module.exports = { subAssetInputFields }