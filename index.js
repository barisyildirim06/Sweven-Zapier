/* Triggers */
const clientTrigger = require('./src/triggers/client');
const contactTrigger = require('./src/triggers/contact');
const noteTrigger = require('./src/triggers/note');
const projectTrigger = require('./src/triggers/project');
const userTrigger = require('./src/triggers/user');
/* Triggers */
const ticketsHiddenTrigger = require('./src/hidden-triggers/tickets');
const projectsHiddenTrigger = require('./src/hidden-triggers/projects');
/* Creates */
const noteCreate = require('./src/creates/note');
const {
  config: authentication,
  befores = [],
  afters = [],
} = require('./src/auth/authentication');


module.exports = {
  // This is just shorthand to reference the installed dependencies you have.
  // Zapier will need to know these before we can upload.
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,

  authentication,

  beforeRequest: [...befores],

  afterResponse: [...afters],

  // If you want your trigger to show up, you better include it here!
  triggers: {
    /* Triggers */
    [clientTrigger.key]: clientTrigger,
    [contactTrigger.key]: contactTrigger,
    [noteTrigger.key]: noteTrigger,
    [projectTrigger.key]: projectTrigger,
    [userTrigger.key]: userTrigger,
  
    /* Hidden Triggers */
    [ticketsHiddenTrigger.key]: ticketsHiddenTrigger,
    [projectsHiddenTrigger.key]: projectsHiddenTrigger,
  },
  
  // If you want your searches to show up, you better include it here!
  searches: {},
  
  // If you want your creates to show up, you better include it here!
  creates: {
    [noteCreate.key]: noteCreate,
  },

  resources: {},
};
