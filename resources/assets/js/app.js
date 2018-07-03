/**
 * 引入 bootstrap
 * 这个 bootstrap 不是 npm 安装的, 是 laravel 自带的, 其中引入了 jquery 和 lodash.
 */
require('./bootstrap');

/**
 * 引入 vue
 * 这个 vue 是通过 npm 安装的. 所以, 在使用之前, 必须运行 `npm install`.
 */
window.Vue = require('vue');

/**
 * 引入 vue 路由
 * 这个 vue 路由是通过 npm 安装的. 原始的 laravel 框架没有这个. `npm install vue-router`
 */
import VueRouter from 'vue-router';

/**
 * 引入 vue 路由的配置文件
 */
import router from './routes';

/**
 * 使用 vue 路由.
 * Vue.use 的作用是什么? 参数是什么?
 * @link https://router.vuejs.org/zh/installation.html
 */
Vue.use(VueRouter);


/**
 * 实例化 Vue.
 */
new Vue({
    el: '#app',
    router
});
