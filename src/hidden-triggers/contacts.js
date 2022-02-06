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

    const contacts = JSON.parse(contactsGetRequest.content).contacts.map(el => {
        return {
            ...el,
            name: `${el.first_name} ${el.last_name}`
        }
    });

    return contacts;
}

module.exports = {
    key: 'contacts',
    noun: 'Contacts',
    display: {
        label: 'Contacts',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listContacts,
        sample: contactSample
    }
}