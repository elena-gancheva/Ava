const Vue = require('vue/dist/vue');
const appComponentTemplate = require('./app-component.html');

const AppComponent = Vue.extend({
  template: appComponentTemplate
});

export default AppComponent;