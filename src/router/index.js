import Vue from 'vue'
import Router from 'vue-router'

const Index  = ()=>import('../components/Index');
const Detail  = ()=>import('../components/Detail');
const Img  = ()=>import('../components/Img');
const Color  = ()=>import('../components/Color');
const Type  = ()=>import('../components/Type');
const Quotation  = ()=>import('../components/Quotation');
const Login = ()=>import('../components/Login.vue');

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [{
        path: '/index',
        name: 'index',
        component: Index,
    },{
        path:'/detail',
        component: Detail
    },{
        path:'/img',
        component: Img
    },{
        path:'/color',
        component: Color
    },{
        path:'/type',
        component: Type
    },{
        path:'/quotation',
        component: Quotation
    },{
        path: '/login',
        component: Login
    },{
        path: '*',
        redirect: '/index'
    }]
})

//导航守卫
router.beforeEach((to, from, next)=>{
    // console.log(to, from)
    let login = window.localStorage.getItem('login');
    if(!login && to.path != '/login'){
        next('/login');
    }
    next();
})
router.afterEach((to, from)=>{
    
})
export default router;