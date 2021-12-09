const ticketInputFields = [
    {
        key: 'user_assign_id',
        label: 'User Assign ID',
        type: 'integer',
        helpText: 'Choose an User Assign ID',
        dynamic: 'users.id.email',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'priority_id',
        label: 'Priority ID',
        type: 'integer',
        helpText: 'Choose a Priority',
        dynamic: 'priorities.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'type_id',
        label: 'Type ID',
        type: 'integer',
        helpText: 'Choose a Type',
        dynamic: 'types.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'status_id',
        label: 'Status ID',
        type: 'integer',
        helpText: 'Choose a Status',
        dynamic: 'statuses.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'sub_status_id',
        label: 'Sub Status ID',
        type: 'integer',
        helpText: 'Choose a Sub Status',
        dynamic: 'subStatuses.id.name',
        altersDynamicFields: true,
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
        key: 'project_id',
        label: 'Project ID',
        type: 'integer',
        helpText: 'Choose a Project',
        dynamic: 'projects.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'site_id',
        label: 'Site ID',
        type: 'integer',
        helpText: 'Choose a Site',
        dynamic: 'sites.id.name',
        altersDynamicFields: true,
        required: true
    },
]
module.exports = { ticketInputFields }