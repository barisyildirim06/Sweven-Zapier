const env = require('../../env');
const { loginRequest } = require('../helper');
const { noteInputFields } = require('../input-fields/creates/note');
const { noteSample } = require('../samples/note');

const createNote = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const notesPostRequest = await z.request({
        url: `${env.apiServer}/note/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'subject' : bundle.inputData.subject,
            'description' : bundle.inputData.description,
            'form' : bundle.inputData.form,
            'form_id' : bundle.inputData.form_id,
        }
    })

    const notes = notesPostRequest.json;

    return notes;
}

module.exports = {
    key: 'note',
    noun: 'Note',
    display: {
        label: 'Create Note',
        description: 'Creates a new note.'
    },
    operation: {
        perform: createNote,
        sample: noteSample,
        inputFields: noteInputFields
    }
}