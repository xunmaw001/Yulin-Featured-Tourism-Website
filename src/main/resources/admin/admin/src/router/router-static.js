import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import aboutus from '@/views/modules/aboutus/list'
    import tesemeishi from '@/views/modules/tesemeishi/list'
    import lvyoujingdian from '@/views/modules/lvyoujingdian/list'
    import discussjinianpin from '@/views/modules/discussjinianpin/list'
    import youjixinxi from '@/views/modules/youjixinxi/list'
    import discusstesemeishi from '@/views/modules/discusstesemeishi/list'
    import chanpinfenlei from '@/views/modules/chanpinfenlei/list'
    import systemintro from '@/views/modules/systemintro/list'
    import jingdianfenlei from '@/views/modules/jingdianfenlei/list'
    import discusslvyoujingdian from '@/views/modules/discusslvyoujingdian/list'
    import yonghu from '@/views/modules/yonghu/list'
    import chat from '@/views/modules/chat/list'
    import jinianpin from '@/views/modules/jinianpin/list'
    import discussyoujixinxi from '@/views/modules/discussyoujixinxi/list'
    import orders from '@/views/modules/orders/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '系统公告',
        component: news
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/tesemeishi',
        name: '特色美食',
        component: tesemeishi
      }
      ,{
	path: '/lvyoujingdian',
        name: '旅游景点',
        component: lvyoujingdian
      }
      ,{
	path: '/discussjinianpin',
        name: '纪念品评论',
        component: discussjinianpin
      }
      ,{
	path: '/youjixinxi',
        name: '游记信息',
        component: youjixinxi
      }
      ,{
	path: '/discusstesemeishi',
        name: '特色美食评论',
        component: discusstesemeishi
      }
      ,{
	path: '/chanpinfenlei',
        name: '产品分类',
        component: chanpinfenlei
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/jingdianfenlei',
        name: '景点分类',
        component: jingdianfenlei
      }
      ,{
	path: '/discusslvyoujingdian',
        name: '旅游景点评论',
        component: discusslvyoujingdian
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/chat',
        name: '留言板',
        component: chat
      }
      ,{
	path: '/jinianpin',
        name: '纪念品',
        component: jinianpin
      }
      ,{
	path: '/discussyoujixinxi',
        name: '游记信息评论',
        component: discussyoujixinxi
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
