const Vue = require('vue');
const appComponentTemplate = require('./app-component.html');

require('./app-component.scss');

module.exports = {
    template: appComponentTemplate,
    data() {
        return {
          password: '',
          username: ''
      }
    },
    methods: {
        submit() {
            const that = this;

            that.$http.post('/register', { password, username })
                .then((response) => {
                    // that.$http.post('/login', { password, username })
                    //     .then((res) => {
                            this.$router.push('/visualise-component');
                        // })
                });
        }

        // goThere() {
        //     this.$router.push('/visualise-component');
        // }
    }
};