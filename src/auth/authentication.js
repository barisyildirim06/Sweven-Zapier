'use strict';
const env = require('../../env');
const { authenticationInputFields } = require('../input-fields/auth/authentication');

const test = async (z, bundle) => {
  const res = await z.request({
      url: `${env.apiServer}/login`,
      method: 'POST',
      body: {
        'email': bundle.authData.email,
        'password': bundle.authData.password,
      },
      headers: {
      }
  });
  if (res.status !== 200) {
      throw new z.errors.Error(
        'User does not exist.',
        'AuthenticationError',
      );
  }
  return res
}

const handleBadResponses = (response, z, bundle) => {
  if (response.status === 401) {
    throw new z.errors.Error(
      'The API Key you supplied is incorrect',
      'AuthenticationError',
      response.status
    );
  }

  return response;
};

const includeApiKey = (request, z, bundle) => {
  if (bundle.authData.apiKey) {
    request.params = request.params || {};
    request.params.api_key = bundle.authData.apiKey;
  }

  return request;
};

module.exports = {
  config: {
    type: 'custom',

    fields: authenticationInputFields,

    test,
    connectionLabel: '{{json.data.first_name}} {{json.data.last_name}}',
  },
  befores: [includeApiKey],
  afters: [handleBadResponses],
};
