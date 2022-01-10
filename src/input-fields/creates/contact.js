const contactInputFields = [
    {
        key: 'first_name',
        label: 'First Name',
        type: 'string',
        required: true
    },
    {
        key: 'last_name',
        label: 'Last Name',
        type: 'string',
        required: true
    },
    {
        key: 'email',
        label: 'Email',
        type: 'string',
        required: true
    },
    {
        key: 'company',
        label: 'Company',
        type: 'integer',
        // helpText: 'Choose a Company',
        // dynamic: 'companies.id.name',
        // altersDynamicFields: true,
        required: true
    }
]
module.exports = { contactInputFields }