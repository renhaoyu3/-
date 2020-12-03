import Vue from 'vue'
import Router from 'vue-router'
import City from './components/City.vue'
import TabBar from './components/TabBar.vue'
import NowPlaying from './components/NowPlaying.vue'
import Login from './components/Login.vue'
import CiList from './components/CiList.vue'
import Header from './components/Header.vue'
import Search from './components/Search.vue'
import ComingSoon from './components/ComingSoon.vue'
import Movie from './components/Movie.vue'
// import Cinema from './components/Cinema.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'movie',
      // component: Movie
      redirect:'/movie'
    },
    
        {
          path: '/movie',
          component:() => import('./components/Movie.vue'),
          //二级路由，使用children进行配置
          children:[
            {
              path:'city',
              component:()=>import('./components/City.vue')
            },
            {
              path:'nowPlaying',
              component:()=>import('../src/components/NowPlaying.vue')
            },
            {
              path:'comingSoon',
              component:()=>import('../src/components/ComingSoon.vue')
            },
            {
              path:'search',
              component:()=>import('../src/components/Search.vue')
            },
            //重定向：当路径为/movie时，重定向到/movie/nowPlaying路径
            {
              path:'/movie',
              redirect:'/movie/nowPlaying'
            }
          ]
      },
      {
        path:'/ciname',
        component:()=>import('../src/components/Cinema.vue')
      },
      {
        path:'/mine',
        component:()=>import('./components/Mine.vue')
      }


    // {
    //   path: '/movie',
    //   // name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})