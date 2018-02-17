import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/Home';
import Editor from '../page/Editer';
import ChartsList from '../components/chartsList';
import MyCharts from '../components/myCharts';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children:[
        {
          path:"/home/chartsList",
          component: ChartsList,
          name:"chartsList"
        },
        {
          path:"/home/myCharts",
          component: MyCharts,
          name:"myCharts"
        }
      ],
    },
    {
      path:"/editor",
      component: Editor,
      name:"Editor"
    }
  ]
})
