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
    console.log(projects);
    return projects;
}

module.exports = {
    key: 'project',
    noun: 'Project',
    display: {
        label: 'New Project',
        description: 'Triggers when new project is created.'
    },
    operation: {
        perform: listProjects,
        sample: projectSample
    }
}