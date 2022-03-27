const env = require('../../env');
const { loginRequest } = require('../helper');
const { ticketInputFields } = require('../input-fields/creates/ticket');
const { ticketSample } = require('../samples/ticket');

const createticket = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const ticketsPostRequest = await z.request({
        url: `${env.apiServer}/work-order/create`,
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
            'sub_project_id' : bundle.inputData.sub_project_id,
            'site_id' : bundle.inputData.site_id,
            'client_nte' : bundle.inputData.client_nte,
            'po' : bundle.inputData.po,
            'subject' : bundle.inputData.subject,
            'description' : bundle.inputData.description,
            'asset_id' : bundle.inputData.asset_id,
            'contact_id' : bundle.inputData.contact_id,
        }
    })

    const ticket = ticketsPostRequest.json;
    if (bundle.inputData.note !== '' && bundle.inputData.subject !== '') {
        await z.request({
            url: `${env.apiServer}/note/create`,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Authorization': login.json.data.token,
            },
            body: {
                'form': 'ServiceOrder',
                'form_id': ticket.id,
                'subject': bundle.inputData.subject,
                'description': bundle.inputData.note,
            }
        });
    }
    const modifiedTicket = {
        ...ticket,
        note: bundle.inputData.note
    }
    return modifiedTicket;
}

module.exports = {
    key: 'ticket',
    noun: 'ticket',
    display: {
        label: 'Create Ticket',
        description: 'Creates a new ticket.',
        important: true
    },
    operation: {
        perform: createticket,
        sample: ticketSample,
        inputFields: ticketInputFields
    }
}