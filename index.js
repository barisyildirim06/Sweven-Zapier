/* Triggers */
const clientTrigger = require('./src/triggers/client');
const contactTrigger = require('./src/triggers/contact');
const noteTrigger = require('./src/triggers/note');
const projectTrigger = require('./src/triggers/project');
const ticketTrigger = require('./src/triggers/ticket');
const userTrigger = require('./src/triggers/user');
const vendorTrigger = require('./src/triggers/vendor');
/* Hidden Triggers */
const clientsHiddenTrigger = require('./src/hidden-triggers/clients');
const prioritiesHiddenTrigger = require('./src/hidden-triggers/priorities');
const projectsHiddenTrigger = require('./src/hidden-triggers/projects');
const sitesHiddenTrigger = require('./src/hidden-triggers/sites');
const statusesHiddenTrigger = require('./src/hidden-triggers/statuses');
const ticketsHiddenTrigger = require('./src/hidden-triggers/tickets');
const typesHiddenTrigger = require('./src/hidden-triggers/types');
const usersHiddenTrigger = require('./src/hidden-triggers/users');
/* Creates */
const noteCreate = require('./src/creates/note');
const projectCreate = require('./src/creates/project');
const ticketCreate = require('./src/creates/ticket');
const vendorCreate = require('./src/creates/vendor');

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
    [vendorTrigger.key]: vendorTrigger,
  
    /* Hidden Triggers */
    
    [clientsHiddenTrigger.key]: clientsHiddenTrigger,
    [prioritiesHiddenTrigger.key]: prioritiesHiddenTrigger,
    [projectsHiddenTrigger.key]: projectsHiddenTrigger,
    [sitesHiddenTrigger.key]: sitesHiddenTrigger,
    [statusesHiddenTrigger.key]: statusesHiddenTrigger,
    [ticketsHiddenTrigger.key]: ticketsHiddenTrigger,
    [typesHiddenTrigger.key]: typesHiddenTrigger,
    [usersHiddenTrigger.key]: usersHiddenTrigger,
  },
  
  // If you want your searches to show up, you better include it here!
  searches: {},
  
  // If you want your creates to show up, you better include it here!
  creates: {
    [noteCreate.key]: noteCreate,
    [projectCreate.key]: projectCreate,
    [ticketCreate.key]: ticketCreate,
    [vendorCreate.key]: vendorCreate,
  },

  resources: {},
};
