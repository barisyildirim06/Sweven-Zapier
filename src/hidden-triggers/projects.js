const env = require('../../env');
const { loginRequest } = require('../helper');
const { projectSample } = require('../samples/project');

const listProjects = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const projectsGetRequest = await z.request({
        url: `${env.apiServer}/projects`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const projects = JSON.parse(projectsGetRequest.content).projects;

    return projects;
}

module.exports = {
    key: 'projects',
    noun: 'Projects',
    display: {
        label: 'Projects',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listProjects,
        sample: projectSample
    }
}