const clientInputFields = [
    {
        key: 'client_name',
        label: 'Client Name',
        type: 'string',
        required: true
    },
    {
        key: 'prefix',
        label: 'Prefix',
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
        key: 'status_id',
        label: 'Status ID',
        type: 'integer',
        helpText: 'Choose a Status',
        dynamic: 'clientSubStatuses.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'state',
        label: 'State',
        type: 'string',
        required: true
    },
]
module.exports = { clientInputFields }