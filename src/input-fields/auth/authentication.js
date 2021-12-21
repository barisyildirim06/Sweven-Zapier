const authenticationInputFields = [
    {
        key: 'email',
        type: 'string',
        required: true,
        helpText: `You can use your email credentials for https://devapp.swevenbpm.com/`

    },
    {
        key: 'password',
        type: 'password',
        required: true,
        helpText: `You can use your password credentials for https://devapp.swevenbpm.com/`
    }
]
module.exports = { authenticationInputFields }