import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _145f180c = () => interopDefault(import('../pages/assignments/index.vue' /* webpackChunkName: "pages/assignments/index" */))
const _8c9c6104 = () => interopDefault(import('../pages/courses/index.vue' /* webpackChunkName: "pages/courses/index" */))
const _91bcae7e = () => interopDefault(import('../pages/library/index.vue' /* webpackChunkName: "pages/library/index" */))
const _52bdd824 = () => interopDefault(import('../pages/schedule.vue' /* webpackChunkName: "pages/schedule" */))
const _07e62440 = () => interopDefault(import('../pages/zoom.vue' /* webpackChunkName: "pages/zoom" */))
const _20a60b42 = () => interopDefault(import('../pages/courses/cpnt-200/index.vue' /* webpackChunkName: "pages/courses/cpnt-200/index" */))
const _f6dca5c0 = () => interopDefault(import('../pages/courses/cpnt-201/index.vue' /* webpackChunkName: "pages/courses/cpnt-201/index" */))
const _1dd6da99 = () => interopDefault(import('../pages/courses/cpnt-260/index.vue' /* webpackChunkName: "pages/courses/cpnt-260/index" */))
const _47a0401b = () => interopDefault(import('../pages/courses/cpnt-262/index.vue' /* webpackChunkName: "pages/courses/cpnt-262/index" */))
const _064e585e = () => interopDefault(import('../pages/courses/cpnt-265/index.vue' /* webpackChunkName: "pages/courses/cpnt-265/index" */))
const _d413250a = () => interopDefault(import('../pages/courses/dsgn-270/index.vue' /* webpackChunkName: "pages/courses/dsgn-270/index" */))
const _24134dd2 = () => interopDefault(import('../pages/courses/cpnt-200/_slug.vue' /* webpackChunkName: "pages/courses/cpnt-200/_slug" */))
const _fa49e850 = () => interopDefault(import('../pages/courses/cpnt-201/_slug.vue' /* webpackChunkName: "pages/courses/cpnt-201/_slug" */))
const _1c203951 = () => interopDefault(import('../pages/courses/cpnt-260/_slug.vue' /* webpackChunkName: "pages/courses/cpnt-260/_slug" */))
const _45e99ed3 = () => interopDefault(import('../pages/courses/cpnt-262/_slug.vue' /* webpackChunkName: "pages/courses/cpnt-262/_slug" */))
const _0497b716 = () => interopDefault(import('../pages/courses/cpnt-265/_slug.vue' /* webpackChunkName: "pages/courses/cpnt-265/_slug" */))
const _d780679a = () => interopDefault(import('../pages/courses/dsgn-270/_slug.vue' /* webpackChunkName: "pages/courses/dsgn-270/_slug" */))
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
    path: "/library",
    component: _91bcae7e,
    name: "library"
  }, {
    path: "/schedule",
    component: _52bdd824,
    name: "schedule"
  }, {
    path: "/zoom",
    component: _07e62440,
    name: "zoom"
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
    path: "/courses/dsgn-270",
    component: _d413250a,
    name: "courses-dsgn-270"
  }, {
    path: "/courses/cpnt-200/:slug?",
    component: _24134dd2,
    name: "courses-cpnt-200-slug"
  }, {
    path: "/courses/cpnt-201/:slug?",
    component: _fa49e850,
    name: "courses-cpnt-201-slug"
  }, {
    path: "/courses/cpnt-260/:slug?",
    component: _1c203951,
    name: "courses-cpnt-260-slug"
  }, {
    path: "/courses/cpnt-262/:slug?",
    component: _45e99ed3,
    name: "courses-cpnt-262-slug"
  }, {
    path: "/courses/cpnt-265/:slug?",
    component: _0497b716,
    name: "courses-cpnt-265-slug"
  }, {
    path: "/courses/dsgn-270/:slug?",
    component: _d780679a,
    name: "courses-dsgn-270-slug"
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
