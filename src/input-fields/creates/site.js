const siteInputFields = [
    {
        key: 'number',
        label: 'Number',
        type: 'string',
        required: true
    },
    {
        key: 'name',
        label: 'Name',
        type: 'string',
        required: true
    },
    {
        key: 'address',
        label: 'Address',
        type: 'string',
        required: true
    },
    {
        key: 'city',
        label: 'City',
        type: 'string',
        required: true
    },
    {
        key: 'state',
        label: 'State',
        type: 'string',
        required: true
    },
    {
        key: 'client_id',
        label: 'Client',
        type: 'integer',
        helpText: 'Choose a Client',
        dynamic: 'clients.id.client_name',
        altersDynamicFields: true,
        required: true
    },
]
module.exports = { siteInputFields }