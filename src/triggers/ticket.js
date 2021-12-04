const env = require('../../env');
const { loginRequest } = require('../helper');
const { ticketSample } = require('../samples/ticket');

const listTickets = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const ticketsGetRequest = await z.request({
        url: `${env.apiServer}/work-orders`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })
    const tickets = JSON.parse(ticketsGetRequest.content).work_orders;


    return tickets;
}

module.exports = {
    key: 'ticket',
    noun: 'Ticket',
    display: {
        label: 'New Ticket',
        description: 'Triggers when new ticket is created.'
    },
    operation: {
        perform: listTickets,
        sample: ticketSample
    }
}