const assetInputFields = [
    {
        key: 'name',
        label: 'name',
        type: 'string',
        required: true
    },
    {
        key: 'asset_id',
        label: 'Asset ID',
        type: 'string',
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
]
module.exports = { assetInputFields }