import Vue from 'vue'
import VueRouter from 'vue-router'
import { componentsConfig } from "../config/components"

Vue.use(VueRouter)

const routes = [
];

componentsConfig.forEach(config => {
  routes.push({
    ...config
  })
})

const router = new VueRouter({
  routes
})

export default router
