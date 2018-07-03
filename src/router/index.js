import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import User from '../components/User'
import UserList from '../components/UserList'
import UserEdit from '../components/UserEdit'
import AddUser from '../components/AddUser'
import VuejsDialog from "vuejs-dialog"
Vue.use(VuejsDialog)
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'User',
      component: User,
    },
    {
      path:'/list',
      name: 'UserList',
      component: UserList,
      children:[
        {
        path: 'edit',
        name: 'UserEdit',
        component: UserEdit,
        }
      ]
    },
    {
      path: '/add',
      name: 'AddUser',
      component: AddUser,
    },
  ],
  mode:'history'
})
