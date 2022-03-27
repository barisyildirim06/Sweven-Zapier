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
    key: 'subProjects',
    noun: 'SubProjects',
    display: {
        label: 'SubProjects',
        description: 'This is a hidden trigger, and is used in a Dynamic Dropdown of another trigger.',
        hidden: true
    },
    operation: {
        perform: listSubProjects,
        sample: subProjectSample
    }
}