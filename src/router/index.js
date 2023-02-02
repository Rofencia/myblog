import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [{
    path: '/',
    component: () => import('@/pages/Layout'),
    children: [{
        path: '/',
        component: () => import('@/pages/Home'),
        meta:{
          type:'home'
        }
      },
      {
        path: '/book',
        component: () => import('@/pages/Book'),
        meta:{
          type:'book'
        }
      },
      {
        path: '/resource',
        component: () => import('@/pages/Resource'),
        meta:{
          type:'resource'
        }
      },
      {
        path: '/blog',
        component: () => import('@/pages/Blog'),
        meta:{
          type:'blog'
        }
      },
      {
        path: '/video',
        component: () => import('@/pages/Video'),
        meta:{
          type:'video'
        }
      },
      {
        path:'/bookdetail',
        component:()=>import('@/pages/Book_detail'),
        meta:{
          type:'book'
        }
      },
      {
        path:'/section',
        component:()=>import('@/pages/Section'),
        meta:{
          type:'book'
        }
      },
      {
        path:'/blogdetail',
        component:()=>import('@/pages/Blog_detail'),
        meta:{
          type:'blog'
        }
      },
      {
        path:'/videodetail',
        component:()=>import('@/pages/Video_detail'),
        meta:{
          type:'video'
        }
      },
      {
        path:'/search',
        component:()=>import('@/pages/Search'),
        meta:{
          type:'home'
        }
      }
    ]
  }]
})