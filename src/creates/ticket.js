const env = require('../../env');
const { loginRequest } = require('../helper');
const { ticketInputFields } = require('../input-fields/creates/ticket');
const { ticketSample } = require('../samples/ticket');

const createticket = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const ticketsPostRequest = await z.request({
        url: `${env.apiServer}/ticket/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'user_assign_id' : bundle.inputData.user_assign_id,
            'priority_id' : bundle.inputData.priority_id,
            'type_id' : bundle.inputData.type_id,
            'status_id' : bundle.inputData.status_id,
            'sub_status_id' : bundle.inputData.sub_status_id,
            'client_id' : bundle.inputData.client_id,
            'project_id' : bundle.inputData.project_id,
            'site_id' : bundle.inputData.site_id,
        }
    })

    const tickets = ticketsPostRequest.json;

    return tickets;
}

module.exports = {
    key: 'ticket',
    noun: 'ticket',
    display: {
        label: 'Create ticket',
        description: 'Creates a new ticket.'
    },
    operation: {
        perform: createticket,
        sample: ticketSample,
        inputFields: ticketInputFields
    }
}