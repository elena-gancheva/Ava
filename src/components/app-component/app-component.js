const Vue = require('vue');
const appComponentTemplate = require('./app-component.html');

require('./app-component.scss');

module.exports = Vue.extend({
    name: 'app-component',
    template: appComponentTemplate,
    data() {
        return {
          message: 'hhhhhhhhhhhh'
      }
    }
});