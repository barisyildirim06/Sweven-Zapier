const env = require('../../env');
const { loginRequest } = require('../helper');
const { noteSample } = require('../samples/note');

const listNotes = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const notesGetRequest = await z.request({
        url: `${env.apiServer}/notes`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const notes = JSON.parse(notesGetRequest.content).notes;

    return notes;
}

module.exports = {
    key: 'note',
    noun: 'Note',
    display: {
        label: 'New Note',
        description: 'Triggers when new note is created.'
    },
    operation: {
        perform: listNotes,
        sample: noteSample
    }
}