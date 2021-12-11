const env = require('../../env');
const { loginRequest } = require('../helper');
const { contactInputFields } = require('../input-fields/creates/contact');
const { contactSample } = require('../samples/contact');

const createContact = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const contactsPostRequest = await z.request({
        url: `${env.apiServer}/contact/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'company_id' : bundle.inputData.company_id,
            'first_name' : bundle.inputData.first_name,
            'last_name' : bundle.inputData.last_name,
            'email' : bundle.inputData.email,
        }
    })

    const contacts = contactsPostRequest.json;

    return contacts;
}

module.exports = {
    key: 'contact',
    noun: 'Contact',
    display: {
        label: 'Create Contact',
        description: 'Creates a new contact.'
    },
    operation: {
        perform: createContact,
        sample: contactSample,
        inputFields: contactInputFields
    }
}