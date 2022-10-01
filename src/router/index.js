import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StaffManager from '../views/StaffManager.vue'
import AddStaff from '../views/AddStaff.vue'
import EditStaff from '../views/EditStaff.vue'
import ViewStaff from '../views/ViewStaff.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: "/staffs",
    component: HomeView
  },
  {
    path: '/staffs',
    name: 'StaffManager',
    component: StaffManager
  },
  {
    path: '/staffs/add',
    name: 'AddStaff',
    component: AddStaff
  },
  {
    path: '/staffs/edit/:staffId',
    name: 'EditStaff',
    component: EditStaff
  },
  {
    path: '/staffs/view/:staffId',
    name: 'ViewStaff',
    component: ViewStaff
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
