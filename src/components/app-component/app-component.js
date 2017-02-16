const Vue = require('vue');
const appComponentTemplate = require('./app-component.html');

require('./app-component.scss');

module.exports = {
    template: appComponentTemplate,
    data() {
        return {
          message: 'hhhhhhhhhhhh'
      }
    },
    methods: {
        goThere() {
            this.$router.push('/visualise-component');
        }
    }
};