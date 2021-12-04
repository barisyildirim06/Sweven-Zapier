const env = require('../../env');
const { loginRequest } = require('../helper');
const { projectInputFields } = require('../input-fields/creates/project');
const { projectSample } = require('../samples/project');

const createproject = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const projectsPostRequest = await z.request({
        url: `${env.apiServer}/project/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'name' : bundle.inputData.name,
            'description' : bundle.inputData.description,
            'client_id' : bundle.inputData.client_id,
            'project_manager_id' : bundle.inputData.project_manager_id,
        }
    })

    const projects = projectsPostRequest.json;

    return projects;
}

module.exports = {
    key: 'project',
    noun: 'project',
    display: {
        label: 'Create project',
        description: 'Creates a new project.'
    },
    operation: {
        perform: createproject,
        sample: projectSample,
        inputFields: projectInputFields
    }
}