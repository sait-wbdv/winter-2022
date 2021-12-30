import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7fc6a76e = () => interopDefault(import('../pages/assignments.vue' /* webpackChunkName: "pages/assignments" */))
const _ac3b3d8a = () => interopDefault(import('../pages/courses.vue' /* webpackChunkName: "pages/courses" */))
const _20047ba8 = () => interopDefault(import('../pages/cpnt-200/index.vue' /* webpackChunkName: "pages/cpnt-200/index" */))
const _962da32e = () => interopDefault(import('../pages/cpnt-201/index.vue' /* webpackChunkName: "pages/cpnt-201/index" */))
const _4e2e5be2 = () => interopDefault(import('../pages/cpnt-260/index.vue' /* webpackChunkName: "pages/cpnt-260/index" */))
const _77f7c164 = () => interopDefault(import('../pages/cpnt-262/index.vue' /* webpackChunkName: "pages/cpnt-262/index" */))
const _36a5d9a7 = () => interopDefault(import('../pages/cpnt-265/index.vue' /* webpackChunkName: "pages/cpnt-265/index" */))
const _73642278 = () => interopDefault(import('../pages/dsgn-270/index.vue' /* webpackChunkName: "pages/dsgn-270/index" */))
const _91bcae7e = () => interopDefault(import('../pages/library/index.vue' /* webpackChunkName: "pages/library/index" */))
const _52bdd824 = () => interopDefault(import('../pages/schedule.vue' /* webpackChunkName: "pages/schedule" */))
const _07e62440 = () => interopDefault(import('../pages/zoom.vue' /* webpackChunkName: "pages/zoom" */))
const _2280c71f = () => interopDefault(import('../pages/cpnt-200/assignments/index.vue' /* webpackChunkName: "pages/cpnt-200/assignments/index" */))
const _6cb26060 = () => interopDefault(import('../pages/cpnt-201/assignments/index.vue' /* webpackChunkName: "pages/cpnt-201/assignments/index" */))
const _0a8a2059 = () => interopDefault(import('../pages/cpnt-260/assignments/index.vue' /* webpackChunkName: "pages/cpnt-260/assignments/index" */))
const _c2255a4a = () => interopDefault(import('../pages/cpnt-262/assignments/index.vue' /* webpackChunkName: "pages/cpnt-262/assignments/index" */))
const _7d821e9e = () => interopDefault(import('../pages/cpnt-265/assignments/index.vue' /* webpackChunkName: "pages/cpnt-265/assignments/index" */))
const _d4eb1f8a = () => interopDefault(import('../pages/dsgn-270/assignments/index.vue' /* webpackChunkName: "pages/dsgn-270/assignments/index" */))
const _20ca25d7 = () => interopDefault(import('../pages/cpnt-200/assignments/_slug.vue' /* webpackChunkName: "pages/cpnt-200/assignments/_slug" */))
const _0b85a4e8 = () => interopDefault(import('../pages/cpnt-200/lessons/_slug.vue' /* webpackChunkName: "pages/cpnt-200/lessons/_slug" */))
const _6afbbf18 = () => interopDefault(import('../pages/cpnt-201/assignments/_slug.vue' /* webpackChunkName: "pages/cpnt-201/assignments/_slug" */))
const _7030e166 = () => interopDefault(import('../pages/cpnt-201/lessons/_slug.vue' /* webpackChunkName: "pages/cpnt-201/lessons/_slug" */))
const _08d37f11 = () => interopDefault(import('../pages/cpnt-260/assignments/_slug.vue' /* webpackChunkName: "pages/cpnt-260/assignments/_slug" */))
const _680833c6 = () => interopDefault(import('../pages/cpnt-260/lessons/_slug.vue' /* webpackChunkName: "pages/cpnt-260/lessons/_slug" */))
const _c5929cda = () => interopDefault(import('../pages/cpnt-262/assignments/_slug.vue' /* webpackChunkName: "pages/cpnt-262/assignments/_slug" */))
const _035cf748 = () => interopDefault(import('../pages/cpnt-262/lessons/_slug.vue' /* webpackChunkName: "pages/cpnt-262/lessons/_slug" */))
const _7bcb7d56 = () => interopDefault(import('../pages/cpnt-265/assignments/_slug.vue' /* webpackChunkName: "pages/cpnt-265/assignments/_slug" */))
const _6c5c1c8b = () => interopDefault(import('../pages/cpnt-265/lessons/_slug.vue' /* webpackChunkName: "pages/cpnt-265/lessons/_slug" */))
const _d858621a = () => interopDefault(import('../pages/dsgn-270/assignments/_slug.vue' /* webpackChunkName: "pages/dsgn-270/assignments/_slug" */))
const _3cdfc4a8 = () => interopDefault(import('../pages/dsgn-270/lessons/_slug.vue' /* webpackChunkName: "pages/dsgn-270/lessons/_slug" */))
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
    component: _7fc6a76e,
    name: "assignments"
  }, {
    path: "/courses",
    component: _ac3b3d8a,
    name: "courses"
  }, {
    path: "/cpnt-200",
    component: _20047ba8,
    name: "cpnt-200"
  }, {
    path: "/cpnt-201",
    component: _962da32e,
    name: "cpnt-201"
  }, {
    path: "/cpnt-260",
    component: _4e2e5be2,
    name: "cpnt-260"
  }, {
    path: "/cpnt-262",
    component: _77f7c164,
    name: "cpnt-262"
  }, {
    path: "/cpnt-265",
    component: _36a5d9a7,
    name: "cpnt-265"
  }, {
    path: "/dsgn-270",
    component: _73642278,
    name: "dsgn-270"
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
    path: "/cpnt-200/assignments",
    component: _2280c71f,
    name: "cpnt-200-assignments"
  }, {
    path: "/cpnt-201/assignments",
    component: _6cb26060,
    name: "cpnt-201-assignments"
  }, {
    path: "/cpnt-260/assignments",
    component: _0a8a2059,
    name: "cpnt-260-assignments"
  }, {
    path: "/cpnt-262/assignments",
    component: _c2255a4a,
    name: "cpnt-262-assignments"
  }, {
    path: "/cpnt-265/assignments",
    component: _7d821e9e,
    name: "cpnt-265-assignments"
  }, {
    path: "/dsgn-270/assignments",
    component: _d4eb1f8a,
    name: "dsgn-270-assignments"
  }, {
    path: "/cpnt-200/assignments/:slug",
    component: _20ca25d7,
    name: "cpnt-200-assignments-slug"
  }, {
    path: "/cpnt-200/lessons/:slug",
    component: _0b85a4e8,
    name: "cpnt-200-lessons-slug"
  }, {
    path: "/cpnt-201/assignments/:slug",
    component: _6afbbf18,
    name: "cpnt-201-assignments-slug"
  }, {
    path: "/cpnt-201/lessons/:slug",
    component: _7030e166,
    name: "cpnt-201-lessons-slug"
  }, {
    path: "/cpnt-260/assignments/:slug",
    component: _08d37f11,
    name: "cpnt-260-assignments-slug"
  }, {
    path: "/cpnt-260/lessons/:slug",
    component: _680833c6,
    name: "cpnt-260-lessons-slug"
  }, {
    path: "/cpnt-262/assignments/:slug",
    component: _c5929cda,
    name: "cpnt-262-assignments-slug"
  }, {
    path: "/cpnt-262/lessons/:slug",
    component: _035cf748,
    name: "cpnt-262-lessons-slug"
  }, {
    path: "/cpnt-265/assignments/:slug",
    component: _7bcb7d56,
    name: "cpnt-265-assignments-slug"
  }, {
    path: "/cpnt-265/lessons/:slug",
    component: _6c5c1c8b,
    name: "cpnt-265-lessons-slug"
  }, {
    path: "/dsgn-270/assignments/:slug",
    component: _d858621a,
    name: "dsgn-270-assignments-slug"
  }, {
    path: "/dsgn-270/lessons/:slug",
    component: _3cdfc4a8,
    name: "dsgn-270-lessons-slug"
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
