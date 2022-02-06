const ticketInputFields = [
    {
        key: 'user_assign_id',
        label: 'User Assign ID',
        type: 'integer',
        helpText: 'Choose an User Assign ID',
        dynamic: 'users.id.email',
        required: true
    },
    {
        key: 'priority_id',
        label: 'Priority ID',
        type: 'integer',
        helpText: 'Choose a Priority',
        dynamic: 'priorities.id.name',
        required: true
    },
    {
        key: 'type_id',
        label: 'Type ID',
        type: 'integer',
        helpText: 'Choose a Type',
        dynamic: 'types.id.name',
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
    function (z, bundle) {
        if (bundle.inputData.status_id) {
            return [
                {
                    key: 'sub_status_id',
                    label: 'Sub Status ID',
                    type: 'integer',
                    helpText: 'Choose a Sub Status',
                    dynamic: 'subStatuses.id.name',
                    required: true
                },
            ]
        }
    },
    {
        key: 'client_id',
        label: 'Client ID',
        type: 'integer',
        helpText: 'Choose a Client',
        dynamic: 'clients.id.client_name',
        required: true
    },
    {
        key: 'project_id',
        label: 'Project ID',
        type: 'integer',
        helpText: 'Choose a Project',
        dynamic: 'projects.id.name',
        required: true
    },
    {
        key: 'site_id',
        label: 'Site ID',
        type: 'integer',
        helpText: 'Choose a Site',
        dynamic: 'sites.id.name',
        required: true
    },
    {
        key: 'po',
        label: 'PO',
        type: 'string',
    },
    {
        key: 'client_nte',
        label: 'Client NTE($)',
        type: 'integer',
    },
    {
        key: 'subject',
        label: 'Subject',
        type: 'string',
        altersDynamicFields: true,
    },
    function (z, bundle) {
        if (bundle.inputData.subject) {
            return [
                {
                    key: 'note',
                    label: 'Note',
                    type: 'string',
                },
            ]
        }
    },
    {
        key: 'description',
        label: 'Description',
        type: 'string',
    },
    {
        key: 'asset_id',
        label: 'Asset ID',
        type: 'integer',
        helpText: 'Choose an Asset',
        dynamic: 'assets.id.name',
        altersDynamicFields: false
    },
    {
        key: 'contact_id',
        label: 'Contact ID',
        type: 'integer',
        helpText: 'Choose a Contact',
        dynamic: 'contacts.id.name',
        altersDynamicFields: false
    },
]

module.exports = { ticketInputFields }