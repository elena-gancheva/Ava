const Vue = require('vue');
const visualiseComponentTemplate = require('./visualise-component.html');

require('./visualise-component.scss');

module.exports = {
    template: visualiseComponentTemplate,
    data() {
        return {
          message: 'mmmmmy'
      }
    }
};