const _ = require('lodash');

const Vue = require('vue');
const VueRouter = require("vue-router");
const AppTemplate = require('./index.html');

const AppComponent = require('./components/app-component/app-component');
const VisualiseComponent = require('./components/visualise-component/visualise-component')

require('./lib/sass/grayscale.scss');
require('./app.scss');

Vue.use(VueRouter);

const routes = [];
const req = require.context("components", true, /(\w|-)+\.(js)$/);
const locations = req.keys();

_.forEach(locations, (location) => {
    const componentName = location.split("/").pop().replace(/\.[^/.]+$/, "");
    const componentPath = location.replace(/\.[^/.]+$/, "");

    routes.push({
        path: `/${componentName}`,
        name: componentName,
        component: createVueComponent(location, req)
    })
});

let router = new VueRouter({
    base: __dirname,
    routes
});

const app = new Vue({
    el: '#app',
    template: AppTemplate,
    router
});

function createVueComponent(location, req) {
    const data = req(location);
    const name = location.split("/").pop().replace(/\.[^/.]+$/, "");

    return Vue.component(`${name}`, data);
}

router.push('app-component');