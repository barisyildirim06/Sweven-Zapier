/* Triggers */
const assetTrigger = require('./src/triggers/asset');
const clientTrigger = require('./src/triggers/client');
const contactTrigger = require('./src/triggers/contact');
const noteTrigger = require('./src/triggers/note');
const projectTrigger = require('./src/triggers/project');
const siteTrigger = require('./src/triggers/site');
const subAssetTrigger = require('./src/triggers/sub-asset');
const subProjectTrigger = require('./src/triggers/sub-project');
const ticketTrigger = require('./src/triggers/ticket');
const userTrigger = require('./src/triggers/user');
const vendorTrigger = require('./src/triggers/vendor');
/* Hidden Triggers */
const clientSubStatusesHiddenTrigger = require('./src/hidden-triggers/client-sub-statuses');
const clientsHiddenTrigger = require('./src/hidden-triggers/clients');
const divisionsHiddenTrigger = require('./src/hidden-triggers/divisions');
const prioritiesHiddenTrigger = require('./src/hidden-triggers/priorities');
const projectsHiddenTrigger = require('./src/hidden-triggers/projects');
const sitesHiddenTrigger = require('./src/hidden-triggers/sites');
const statusesHiddenTrigger = require('./src/hidden-triggers/statuses');
const subStatusesHiddenTrigger = require('./src/hidden-triggers/sub-statuses');
const ticketsHiddenTrigger = require('./src/hidden-triggers/tickets');
const typesHiddenTrigger = require('./src/hidden-triggers/types');
const usersHiddenTrigger = require('./src/hidden-triggers/users');
/* Creates */
const assetCreate = require('./src/creates/asset');
const clientCreate = require('./src/creates/client');
const contactCreate = require('./src/creates/contact');
const noteCreate = require('./src/creates/note');
const projectCreate = require('./src/creates/project');
const siteCreate = require('./src/creates/site');
const subAssetCreate = require('./src/creates/sub-asset');
const subProjectCreate = require('./src/creates/sub-project');
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
    [assetTrigger.key]: assetTrigger,
    [clientTrigger.key]: clientTrigger,
    [contactTrigger.key]: contactTrigger,
    [noteTrigger.key]: noteTrigger,
    [projectTrigger.key]: projectTrigger,
    [siteTrigger.key]: siteTrigger,
    [subAssetTrigger.key]: subAssetTrigger,
    [subProjectTrigger.key]: subProjectTrigger,
    [ticketTrigger.key]: ticketTrigger,
    [userTrigger.key]: userTrigger,
    [vendorTrigger.key]: vendorTrigger,
  
    /* Hidden Triggers */
    [clientSubStatusesHiddenTrigger.key]: clientSubStatusesHiddenTrigger,
    [clientsHiddenTrigger.key]: clientsHiddenTrigger,
    [divisionsHiddenTrigger.key]: divisionsHiddenTrigger,
    [prioritiesHiddenTrigger.key]: prioritiesHiddenTrigger,
    [projectsHiddenTrigger.key]: projectsHiddenTrigger,
    [sitesHiddenTrigger.key]: sitesHiddenTrigger,
    [statusesHiddenTrigger.key]: statusesHiddenTrigger,
    [subStatusesHiddenTrigger.key]: subStatusesHiddenTrigger,
    [ticketsHiddenTrigger.key]: ticketsHiddenTrigger,
    [typesHiddenTrigger.key]: typesHiddenTrigger,
    [usersHiddenTrigger.key]: usersHiddenTrigger,
  },
  
  // If you want your searches to show up, you better include it here!
  searches: {},
  
  // If you want your creates to show up, you better include it here!
  creates: {
    [assetCreate.key]: assetCreate,
    [clientCreate.key]: clientCreate,
    [contactCreate.key]: contactCreate,
    [noteCreate.key]: noteCreate,
    [projectCreate.key]: projectCreate,
    [siteCreate.key]: siteCreate,
    // [subAssetCreate.key]: subAssetCreate,
    [subProjectCreate.key]: subProjectCreate,
    [ticketCreate.key]: ticketCreate,
    [vendorCreate.key]: vendorCreate,
  },

  resources: {},
};
