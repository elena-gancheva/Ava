import Vue from 'vue';
import AppComponent from './components/app-component/app-component';

require('./app.scss');

new Vue({
    render: h => h(AppComponent)
}).$mount('#app');