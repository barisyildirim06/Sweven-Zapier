const subProjectInputFields = [
    {
        key: 'name',
        label: 'Sub Project Name',
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
        key: 'project_id',
        label: 'Project',
        type: 'integer',
        helpText: 'Choose a Project',
        dynamic: 'projects.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'division_id',
        label: 'Division',
        type: 'integer',
        helpText: 'Choose a Division',
        dynamic: 'divisions.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'status_id',
        label: 'Status',
        type: 'integer',
        helpText: 'Choose a Status',
        dynamic: 'statuses.id.name',
        altersDynamicFields: true,
        required: true
    },
    {
        key: 'project_manager_id',
        label: 'Project Manager',
        type: 'integer',
        helpText: 'Choose a Project Manager',
        dynamic: 'users.id.email',
        altersDynamicFields: true,
        required: true
    },
]
module.exports = { subProjectInputFields }