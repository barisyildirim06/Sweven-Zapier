const env = require('../../env');
const { loginRequest } = require('../helper');
const { contactSample } = require('../samples/contact');

const listContacts = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const contactsGetRequest = await z.request({
        url: `${env.apiServer}/contacts`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const contacts = JSON.parse(contactsGetRequest.content).contacts;
    console.log(contacts);
    return contacts;
}

module.exports = {
    key: 'contact',
    noun: 'Contact',
    display: {
        label: 'New Contact',
        description: 'Triggers when new contact is created.'
    },
    operation: {
        perform: listContacts,
        sample: contactSample
    }
}