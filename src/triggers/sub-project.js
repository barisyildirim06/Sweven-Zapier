const env = require('../../env');
const { loginRequest } = require('../helper');
const { subProjectSample } = require('../samples/sub-project');

const listSubProjects = async (z, bundle) => {
    const login = await loginRequest(z,bundle);

    const subProjectsGetRequest = await z.request({
        url: `${env.apiServer}/sub-projects`,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token
        },
        params: {}
    })

    const projects = JSON.parse(subProjectsGetRequest.content).sub_projects;

    return projects;
}

module.exports = {
    key: 'subProject',
    noun: 'Sub Project',
    display: {
        label: 'New Sub Project',
        description: 'Triggers when new sub project is created.'
    },
    operation: {
        perform: listSubProjects,
        sample: subProjectSample
    }
}