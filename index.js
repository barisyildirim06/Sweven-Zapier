/* Triggers */
const clientTrigger = require('./src/triggers/client');
const contactTrigger = require('./src/triggers/contact');
const noteTrigger = require('./src/triggers/note');
const projectTrigger = require('./src/triggers/project');
const ticketTrigger = require('./src/triggers/ticket');
const userTrigger = require('./src/triggers/user');
/* Hidden Triggers */
const clientsHiddenTrigger = require('./src/hidden-triggers/clients');
const projectsHiddenTrigger = require('./src/hidden-triggers/projects');
const ticketsHiddenTrigger = require('./src/hidden-triggers/tickets');
const usersHiddenTrigger = require('./src/hidden-triggers/users');
const sitesHiddenTrigger = require('./src/hidden-triggers/sites');
/* Creates */
const noteCreate = require('./src/creates/note');
const ticketCreate = require('./src/creates/ticket');

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
    [ticketTrigger.key]: ticketTrigger,
    [userTrigger.key]: userTrigger,
  
    /* Hidden Triggers */
    
    [clientsHiddenTrigger.key]: clientsHiddenTrigger,
    [projectsHiddenTrigger.key]: projectsHiddenTrigger,
    [sitesHiddenTrigger.key]: sitesHiddenTrigger,
    [ticketsHiddenTrigger.key]: ticketsHiddenTrigger,
    [usersHiddenTrigger.key]: usersHiddenTrigger,
  },
  
  // If you want your searches to show up, you better include it here!
  searches: {},
  
  // If you want your creates to show up, you better include it here!
  creates: {
    [noteCreate.key]: noteCreate,
    [ticketCreate.key]: ticketCreate,
  },

  resources: {},
};
