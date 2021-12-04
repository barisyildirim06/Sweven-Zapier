const projectInputFields = [
    {
        key: 'name',
        label: 'Project Name',
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
        key: 'client_id',
        label: 'Client ID',
        type: 'integer',
        helpText: 'Choose a Client',
        dynamic: 'clients.id.client_name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'project_manager_id',
        label: 'Project Manager ID',
        type: 'integer',
        helpText: 'Choose a Project Manager',
        dynamic: 'users.id.email',
        altersDynamicFields: true,
        required: true
    },
]
module.exports = { projectInputFields }