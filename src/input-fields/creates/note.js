const noteInputFields = [
    {
        key: 'subject',
        label: 'Subject',
        type: 'string',
        required: true
    },
    {
        key: 'description',
        label: 'Description',
        type: 'string',
        required: true
    },
    {
        key: 'form',
        label: 'Form',
        type: 'string',
        required: true
    },
    {
        key: 'form_id',
        label: 'Form ID',
        type: 'integer',
        helpText: 'Choose a Ticket',
        dynamic: 'tickets.id.code',
        altersDynamicFields: true,
        required: true
    },
]
module.exports = { noteInputFields }