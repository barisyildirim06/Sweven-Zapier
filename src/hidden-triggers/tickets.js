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
    console.log(tickets);
    return tickets;
}

module.exports = {
    key: 'tickets',
    noun: 'Tickets',
    display: {
        label: 'Tickets',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listTickets,
        sample: ticketSample
    }
}