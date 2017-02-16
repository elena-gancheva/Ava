const Vue = require('vue');
const appComponentTemplate = require('./app-component.html');

require('./app-component.scss');

module.exports = {
    template: appComponentTemplate,
    data() {
        return {
            firstname: '',
            password: '',
            username: ''
        }
    },
    methods: {
        submit() {
            const credentials = {
                firstname: this.firstname,
                password: this.password,
                username: this.username
            };

            this.$http.post('/register', credentials)
                .then((response) => {
                    this.$router.push('/visualise-component');
                });
        }
    }
};