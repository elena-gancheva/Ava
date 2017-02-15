const Vue = require('vue');
const visualiseComponentTemplate = require('./visualise-component.html');

require('./visualise-component.scss');

module.exports = Vue.extend({
    name: 'visualise-component',
    template: visualiseComponentTemplate,
    data() {
        return {
          message: 'hhhhhhhhhhhh'
      }
    }
});