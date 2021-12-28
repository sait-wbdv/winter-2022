import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _145f180c = () => interopDefault(import('../pages/assignments/index.vue' /* webpackChunkName: "pages/assignments/index" */))
const _8c9c6104 = () => interopDefault(import('../pages/courses/index.vue' /* webpackChunkName: "pages/courses/index" */))
const _20a60b42 = () => interopDefault(import('../pages/courses/cpnt-200/index.vue' /* webpackChunkName: "pages/courses/cpnt-200/index" */))
const _f6dca5c0 = () => interopDefault(import('../pages/courses/cpnt-201/index.vue' /* webpackChunkName: "pages/courses/cpnt-201/index" */))
const _1dd6da99 = () => interopDefault(import('../pages/courses/cpnt-260/index.vue' /* webpackChunkName: "pages/courses/cpnt-260/index" */))
const _47a0401b = () => interopDefault(import('../pages/courses/cpnt-262/index.vue' /* webpackChunkName: "pages/courses/cpnt-262/index" */))
const _064e585e = () => interopDefault(import('../pages/courses/cpnt-265/index.vue' /* webpackChunkName: "pages/courses/cpnt-265/index" */))
const _14e9efd6 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/assignments",
    component: _145f180c,
    name: "assignments"
  }, {
    path: "/courses",
    component: _8c9c6104,
    name: "courses"
  }, {
    path: "/courses/cpnt-200",
    component: _20a60b42,
    name: "courses-cpnt-200"
  }, {
    path: "/courses/cpnt-201",
    component: _f6dca5c0,
    name: "courses-cpnt-201"
  }, {
    path: "/courses/cpnt-260",
    component: _1dd6da99,
    name: "courses-cpnt-260"
  }, {
    path: "/courses/cpnt-262",
    component: _47a0401b,
    name: "courses-cpnt-262"
  }, {
    path: "/courses/cpnt-265",
    component: _064e585e,
    name: "courses-cpnt-265"
  }, {
    path: "/",
    component: _14e9efd6,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
