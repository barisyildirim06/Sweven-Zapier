const env = require('../../env');
const { loginRequest } = require('../helper');
const { subProjectInputFields } = require('../input-fields/creates/sub-project');
const { subProjectSample } = require('../samples/sub-project');

const createSubProject = async (z, bundle) => {
    const login = await loginRequest(z, bundle);

    const subProjectPostRequest = await z.request({
        url: `${env.apiServer}/sub-project/create`,
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': login.json.data.token,
        },
        body: {
            'name' : bundle.inputData.name,
            'description' : bundle.inputData.description,
            'project_id' : bundle.inputData.project_id,
            'division_id' : bundle.inputData.division_id,
            'status_id' : bundle.inputData.status_id,
            'project_manager_id' : bundle.inputData.project_manager_id,
        }
    })

    const subProject = subProjectPostRequest.json;

    return subProject;
}

module.exports = {
    key: 'subProject',
    noun: 'SubProject',
    display: {
        label: 'Create Sub Project',
        description: 'Creates a new sub project.'
    },
    operation: {
        perform: createSubProject,
        sample: subProjectSample,
        inputFields: subProjectInputFields
    }
}