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
        'component': require('./components/Home.vue')
    },
    {
        path: '/about',
        'component': require('./components/About.vue')
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
