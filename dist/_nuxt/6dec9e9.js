(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{288:function(e,n,t){"use strict";t.r(n);var r=t(7),c=(t(42),defineComponent({asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function n(){var t,r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.$content,r=e.params,e.e,n.prev=1,n.next=4,t("/cpnt-200/".concat(r.slug)).fetch();case 4:return c=n.sent,n.abrupt("return",{lesson:c});case 8:n.prev=8,n.t0=n.catch(1),error("No lesson found");case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}})),o=t(33),component=Object(o.a)(c,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("h2",[e._v(e._s(e.lesson.title))]),e._v(" "),t("p",[e._v("path: "+e._s(e.$route.path))]),e._v(" "),t("nuxt-content",{attrs:{document:e.lesson}})],1)}),[],!1,null,null,null);n.default=component.exports}}]);