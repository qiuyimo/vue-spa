/**
 * 导入 vue-router
 */
import VueRouter from 'vue-router';

/**
 * 路由定义
 * @type {*[]}
 */
let routes = [
    {
        path: '/',
        'component': require('./components/pages/Home.vue')
    },
    {
        path: '/about',
        'component': require('./components/pages/About.vue')
    },
    {
        path: '/posts/:id',
        name: 'posts',
        'component': require('./components/posts/Post')
    },
    {
        path: '/register',
        name: 'register',
        'component': require('./components/register/Register')
    },
    {
        path: '/login',
        name: 'login',
        'component': require('./components/login/Login')
    }
];

/**
 * 返回 module
 */
export default new VueRouter({
    // 默认的 url 包含了 #, 设置 `mode: 'history'`, 则不包含 #.
    mode: 'history',

    // (缩写) 相当于 routes: routes
    routes
});
