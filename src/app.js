const Vue = require('vue');
const VueRouter = require("vue-router");
const AppComponent = require('./components/app-component/app-component');
const VisualiseComponent = require('./components/visualise-component/visualise-component')

require('./lib/sass/grayscale.scss');
require('./app.scss');

const routes = [];

const router = new VueRouter({
    base: __dirname,
    routes: [
        {
            path: '/',
            component: AppComponent
        },
        {
            path: '/app',
            component: VisualiseComponent
        }
    ]
});

new Vue({
    render: h => h(AppComponent),
    router
}).$mount('#app');
