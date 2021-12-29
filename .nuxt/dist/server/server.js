"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var Vue = require("vue");
var fetch$1 = require("node-fetch");
var Meta = require("vue-meta");
var ClientOnly = require("vue-client-only");
var NoSsr = require("vue-no-ssr");
var Router = require("vue-router");
function _interopDefaultLegacy(e2) {
  return e2 && typeof e2 === "object" && "default" in e2 ? e2 : { "default": e2 };
}
function _mergeNamespaces(n2, m) {
  m.forEach(function(e2) {
    e2 && typeof e2 !== "string" && !Array.isArray(e2) && Object.keys(e2).forEach(function(k) {
      if (k !== "default" && !(k in n2)) {
        var d = Object.getOwnPropertyDescriptor(e2, k);
        Object.defineProperty(n2, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e2[k];
          }
        });
      }
    });
  });
  return Object.freeze(n2);
}
var Vue__default = /* @__PURE__ */ _interopDefaultLegacy(Vue);
var fetch__default = /* @__PURE__ */ _interopDefaultLegacy(fetch$1);
var Meta__default = /* @__PURE__ */ _interopDefaultLegacy(Meta);
var ClientOnly__default = /* @__PURE__ */ _interopDefaultLegacy(ClientOnly);
var NoSsr__default = /* @__PURE__ */ _interopDefaultLegacy(NoSsr);
var Router__default = /* @__PURE__ */ _interopDefaultLegacy(Router);
const n = /[^\0-\x7E]/;
const t = /[\x2E\u3002\uFF0E\uFF61]/g;
const o = { overflow: "Overflow Error", "not-basic": "Illegal Input", "invalid-input": "Invalid Input" };
const e = Math.floor;
const r = String.fromCharCode;
function s(n2) {
  throw new RangeError(o[n2]);
}
const c = function(n2, t2) {
  return n2 + 22 + 75 * (n2 < 26) - ((t2 != 0) << 5);
};
const u = function(n2, t2, o2) {
  let r2 = 0;
  for (n2 = o2 ? e(n2 / 700) : n2 >> 1, n2 += e(n2 / t2); n2 > 455; r2 += 36) {
    n2 = e(n2 / 35);
  }
  return e(r2 + 36 * n2 / (n2 + 38));
};
function toASCII(o2) {
  return function(n2, o3) {
    const e2 = n2.split("@");
    let r2 = "";
    e2.length > 1 && (r2 = e2[0] + "@", n2 = e2[1]);
    const s2 = function(n3, t2) {
      const o4 = [];
      let e3 = n3.length;
      for (; e3--; ) {
        o4[e3] = t2(n3[e3]);
      }
      return o4;
    }((n2 = n2.replace(t, ".")).split("."), o3).join(".");
    return r2 + s2;
  }(o2, function(t2) {
    return n.test(t2) ? "xn--" + function(n2) {
      const t3 = [];
      const o3 = (n2 = function(n3) {
        const t4 = [];
        let o4 = 0;
        const e2 = n3.length;
        for (; o4 < e2; ) {
          const r2 = n3.charCodeAt(o4++);
          if (r2 >= 55296 && r2 <= 56319 && o4 < e2) {
            const e3 = n3.charCodeAt(o4++);
            (64512 & e3) == 56320 ? t4.push(((1023 & r2) << 10) + (1023 & e3) + 65536) : (t4.push(r2), o4--);
          } else {
            t4.push(r2);
          }
        }
        return t4;
      }(n2)).length;
      let f = 128;
      let i = 0;
      let l = 72;
      for (const o4 of n2) {
        o4 < 128 && t3.push(r(o4));
      }
      const h = t3.length;
      let p = h;
      for (h && t3.push("-"); p < o3; ) {
        let o4 = 2147483647;
        for (const t4 of n2) {
          t4 >= f && t4 < o4 && (o4 = t4);
        }
        const a = p + 1;
        o4 - f > e((2147483647 - i) / a) && s("overflow"), i += (o4 - f) * a, f = o4;
        for (const o5 of n2) {
          if (o5 < f && ++i > 2147483647 && s("overflow"), o5 == f) {
            let n3 = i;
            for (let o6 = 36; ; o6 += 36) {
              const s2 = o6 <= l ? 1 : o6 >= l + 26 ? 26 : o6 - l;
              if (n3 < s2) {
                break;
              }
              const u2 = n3 - s2;
              const f2 = 36 - s2;
              t3.push(r(c(s2 + u2 % f2, 0))), n3 = e(u2 / f2);
            }
            t3.push(r(c(n3, 0))), l = u(i, a, p == h), i = 0, ++p;
          }
        }
        ++i, ++f;
      }
      return t3.join("");
    }(t2) : t2;
  });
}
const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const IM_RE = /\?/g;
const PLUS_RE = /\+/g;
const ENC_BRACKET_OPEN_RE = /%5B/gi;
const ENC_BRACKET_CLOSE_RE = /%5D/gi;
const ENC_CARET_RE = /%5E/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_CURLY_OPEN_RE = /%7B/gi;
const ENC_PIPE_RE = /%7C/gi;
const ENC_CURLY_CLOSE_RE = /%7D/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2F/gi;
const ENC_ENC_SLASH_RE = /%252F/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|").replace(ENC_BRACKET_OPEN_RE, "[").replace(ENC_BRACKET_CLOSE_RE, "]");
}
function encodeHash(text) {
  return encode(text).replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryValue(text) {
  return encode(text).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CURLY_OPEN_RE, "{").replace(ENC_CURLY_CLOSE_RE, "}").replace(ENC_CARET_RE, "^");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function encodePath(text) {
  return encode(text).replace(HASH_RE, "%23").replace(IM_RE, "%3F").replace(ENC_ENC_SLASH_RE, "%2F").replace(AMPERSAND_RE, "%26").replace(PLUS_RE, "%2B");
}
function encodeParam(text) {
  return encodePath(text).replace(SLASH_RE, "%2F");
}
function decode(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch (_err) {
    return "" + text;
  }
}
function decodePath(text) {
  return decode(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryValue(text) {
  return decode(text.replace(PLUS_RE, " "));
}
function encodeHost(name = "") {
  return toASCII(name);
}
function parseQuery(paramsStr = "") {
  const obj = {};
  if (paramsStr[0] === "?") {
    paramsStr = paramsStr.substr(1);
  }
  for (const param of paramsStr.split("&")) {
    const s2 = param.match(/([^=]+)=?(.*)/) || [];
    if (s2.length < 2) {
      continue;
    }
    const key = decode(s2[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s2[2] || "");
    if (obj[key]) {
      if (Array.isArray(obj[key])) {
        obj[key].push(value);
      } else {
        obj[key] = [obj[key], value];
      }
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
function encodeQueryItem(key, val) {
  if (!val) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(val)) {
    return val.map((_val) => `${encodeQueryKey(key)}=${encodeQueryValue(_val)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(val)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).map((k) => encodeQueryItem(k, query[k])).join("&");
}
class $URL {
  constructor(input = "") {
    this.query = {};
    if (typeof input !== "string") {
      throw new TypeError(`URL input should be string received ${typeof input} (${input})`);
    }
    const parsed = parseURL(input);
    this.protocol = decode(parsed.protocol);
    this.host = decode(parsed.host);
    this.auth = decode(parsed.auth);
    this.pathname = decodePath(parsed.pathname);
    this.query = parseQuery(parsed.search);
    this.hash = decode(parsed.hash);
  }
  get hostname() {
    return parseHost(this.host).hostname;
  }
  get port() {
    return parseHost(this.host).port || "";
  }
  get username() {
    return parseAuth(this.auth).username;
  }
  get password() {
    return parseAuth(this.auth).password || "";
  }
  get hasProtocol() {
    return this.protocol.length;
  }
  get isAbsolute() {
    return this.hasProtocol || this.pathname[0] === "/";
  }
  get search() {
    const q = stringifyQuery(this.query);
    return q.length ? "?" + q : "";
  }
  get searchParams() {
    const p = new URLSearchParams();
    for (const name in this.query) {
      const value = this.query[name];
      if (Array.isArray(value)) {
        value.forEach((v) => p.append(name, v));
      } else {
        p.append(name, value || "");
      }
    }
    return p;
  }
  get origin() {
    return (this.protocol ? this.protocol + "//" : "") + encodeHost(this.host);
  }
  get fullpath() {
    return encodePath(this.pathname) + this.search + encodeHash(this.hash);
  }
  get encodedAuth() {
    if (!this.auth) {
      return "";
    }
    const { username, password } = parseAuth(this.auth);
    return encodeURIComponent(username) + (password ? ":" + encodeURIComponent(password) : "");
  }
  get href() {
    const auth = this.encodedAuth;
    const originWithAuth = (this.protocol ? this.protocol + "//" : "") + (auth ? auth + "@" : "") + encodeHost(this.host);
    return this.hasProtocol && this.isAbsolute ? originWithAuth + this.fullpath : this.fullpath;
  }
  append(url) {
    if (url.hasProtocol) {
      throw new Error("Cannot append a URL with protocol");
    }
    Object.assign(this.query, url.query);
    if (url.pathname) {
      this.pathname = withTrailingSlash(this.pathname) + withoutLeadingSlash(url.pathname);
    }
    if (url.hash) {
      this.hash = url.hash;
    }
  }
  toJSON() {
    return this.href;
  }
  toString() {
    return this.href;
  }
}
function hasProtocol(inputStr, acceptProtocolRelative = false) {
  return /^\w+:\/\/.+/.test(inputStr) || acceptProtocolRelative && /^\/\/[^/]+/.test(inputStr);
}
const TRAILING_SLASH_RE = /\/$|\/\?/;
function hasTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/");
  }
  return TRAILING_SLASH_RE.test(input);
}
function withTrailingSlash(input = "", queryParams = false) {
  if (!queryParams) {
    return input.endsWith("/") ? input : input + "/";
  }
  if (hasTrailingSlash(input, true)) {
    return input || "/";
  }
  const [s0, ...s2] = input.split("?");
  return s0 + "/" + (s2.length ? `?${s2.join("?")}` : "");
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withoutLeadingSlash(input = "") {
  return (hasLeadingSlash(input) ? input.substr(1) : input) || "/";
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = __spreadValues(__spreadValues({}, parseQuery(parsed.search)), query);
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const i of input.filter(isNonEmptyURL)) {
    url = url ? withTrailingSlash(url) + withoutLeadingSlash(i) : i;
  }
  return url;
}
function createURL(input) {
  return new $URL(input);
}
function normalizeURL(input) {
  return createURL(input).toString();
}
function parseURL(input = "", defaultProto) {
  if (!hasProtocol(input, true)) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [protocol = "", auth, hostAndPath] = (input.match(/([^:/]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1);
  const [host = "", path = ""] = (hostAndPath.match(/([^/?]*)(.*)?/) || []).splice(1);
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol,
    auth: auth ? auth.substr(0, auth.length - 1) : "",
    host,
    pathname,
    search,
    hash
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function parseAuth(input = "") {
  const [username, password] = input.split(":");
  return {
    username: decode(username),
    password: decode(password)
  };
}
function parseHost(input = "") {
  const [hostname, port] = (input.match(/([^/]*)(:0-9+)?/) || []).splice(1);
  return {
    hostname: decode(hostname),
    port
  };
}
function stringifyParsedURL(parsed) {
  const fullpath = parsed.pathname + (parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "") + parsed.hash;
  if (!parsed.protocol) {
    return fullpath;
  }
  return parsed.protocol + "//" + (parsed.auth ? parsed.auth + "@" : "") + parsed.host + fullpath;
}
const middleware = {};
function createGetCounter(counterObject, defaultKey = "") {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === void 0) {
      counterObject[id] = 0;
    }
    return counterObject[id]++;
  };
}
function globalHandleError(error) {
  if (Vue__default["default"].config.errorHandler) {
    Vue__default["default"].config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then((m) => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === "function" && !vm.$options.fetch.length;
}
function purifyData(data2) {
  return Object.entries(data2).filter(([key, value]) => {
    const valid2 = !(value instanceof Function) && !(value instanceof Promise);
    if (!valid2) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }
    return valid2;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];
  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue;
    }
    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }
  return instances;
}
function applyAsyncData(Component, asyncData) {
  if (!asyncData && Component.options.__hasNuxtData) {
    return;
  }
  const ComponentData = Component.options._originDataFn || Component.options.data || function() {
    return {};
  };
  Component.options._originDataFn = ComponentData;
  Component.options.data = function() {
    const data2 = ComponentData.call(this, this);
    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }
    return __spreadValues(__spreadValues({}, data2), asyncData);
  };
  Component.options.__hasNuxtData = true;
  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }
  if (!Component.options) {
    Component = Vue__default["default"].extend(Component);
    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  }
  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }
  return Component;
}
function getMatchedComponents(route, matches = false, prop = "components") {
  return Array.prototype.concat.apply([], route.matched.map((m, index2) => {
    return Object.keys(m[prop]).map((key) => {
      matches && matches.push(index2);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, "instances");
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index2) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index2));
      } else {
        delete m.components[key];
      }
      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    if (typeof Component === "function" && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        if (error && error.name === "ChunkLoadError" && false) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem("nuxt-reload"));
          if (!previousReloadTime || previousReloadTime + 6e4 < timeNow) {
            window.sessionStorage.setItem("nuxt-reload", timeNow);
            window.location.reload(true);
          }
        }
        throw error;
      }
    }
    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === "function" ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  }
  await resolveRouteComponents(route);
  return __spreadProps(__spreadValues({}, route), {
    meta: getMatchedComponents(route).map((Component, index2) => {
      return __spreadValues(__spreadValues({}, Component.options.meta), (route.matched[index2] || {}).meta);
    })
  });
}
async function setContext(app, context) {
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: true,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    };
    if (context.req) {
      app.context.req = context.req;
    }
    if (context.res) {
      app.context.res = context.res;
    }
    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }
    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }
      app.context._redirected = true;
      let pathType = typeof path;
      if (typeof status !== "number" && (pathType === "undefined" || pathType === "object")) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }
      if (pathType === "object") {
        path = app.router.resolve(path).route.fullPath;
      }
      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = withQuery(path, query);
        {
          app.context.next({
            path,
            status
          });
        }
      }
    };
    {
      app.context.beforeNuxtRender = (fn) => context.beforeRenderFns.push(fn);
    }
  }
  const [currentRouteData, fromRouteData] = await Promise.all([
    getRouteData(context.route),
    getRouteData(context.from)
  ]);
  if (context.route) {
    app.context.route = currentRouteData;
  }
  if (context.from) {
    app.context.from = fromRouteData;
  }
  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = Boolean(context.isHMR);
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }
  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;
  if (fn.length === 2) {
    console.warn("Callback-based asyncData, fetch or middleware calls are deprecated. Please switch to promises or async/await syntax");
    promise = new Promise((resolve) => {
      fn(context, function(err, data2) {
        if (err) {
          context.error(err);
        }
        data2 = data2 || {};
        resolve(data2);
      });
    });
  } else {
    promise = fn(context);
  }
  if (promise && promise instanceof Promise && typeof promise.then === "function") {
    return promise;
  }
  return Promise.resolve(promise);
}
function getLocation(base, mode) {
  if (mode === "hash") {
    return window.location.hash.replace(/^#\//, "");
  }
  base = decodeURI(base).slice(0, -1);
  let path = decodeURI(window.location.pathname);
  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  const fullPath = (path || "/") + window.location.search + window.location.hash;
  return normalizeURL(fullPath);
}
function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function normalizeError(err) {
  let message;
  if (!(err.message || typeof err === "string")) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e2) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }
  return __spreadProps(__spreadValues({}, err), {
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  });
}
const PATH_REGEXP = new RegExp([
  "(\\\\.)",
  "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"
].join("|"), "g");
function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index2 = 0;
  let path = "";
  const defaultDelimiter = options && options.delimiter || "/";
  let res;
  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index2, offset);
    index2 = offset + m.length;
    if (escaped) {
      path += escaped[1];
      continue;
    }
    const next = str[index2];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7];
    if (path) {
      tokens.push(path);
      path = "";
    }
    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === "+" || modifier === "*";
    const optional = modifier === "?" || modifier === "*";
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || "",
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? ".*" : "[^" + escapeString(delimiter) + "]+?"
    });
  }
  if (index2 < str.length) {
    path += str.substr(index2);
  }
  if (path) {
    tokens.push(path);
  }
  return tokens;
}
function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, (c2) => {
    return "%" + c2.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, "\\$1");
}
function tokensToFunction(tokens, options) {
  const matches = new Array(tokens.length);
  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === "object") {
      matches[i] = new RegExp("^(?:" + tokens[i].pattern + ")$", flags(options));
    }
  }
  return function(obj, opts) {
    let path = "";
    const data2 = obj || {};
    const options2 = opts || {};
    const encode2 = options2.pretty ? encodeURIComponentPretty : encodeURIComponent;
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (typeof token === "string") {
        path += token;
        continue;
      }
      const value = data2[token.name || "pathMatch"];
      let segment;
      if (value == null) {
        if (token.optional) {
          if (token.partial) {
            path += token.prefix;
          }
          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }
      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + "`");
        }
        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }
        for (let j = 0; j < value.length; j++) {
          segment = encode2(value[j]);
          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + "`");
          }
          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }
        continue;
      }
      segment = token.asterisk ? encodeAsterisk(value) : encode2(value);
      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }
      path += token.prefix + segment;
    }
    return path;
  };
}
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }
  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  }
  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    {
      console.error("Error in fetch():", err);
    }
    this.$fetchState.error = normalizeError(err);
  }
  this.$fetchState.pending = false;
  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters[""]++;
  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs["data-fetch-key"] = this._fetchKey;
  if (this.$ssrContext.nuxt.fetch[this._fetchKey] !== void 0) {
    console.warn(`Duplicate fetch key detected (${this._fetchKey}). This may lead to unexpected results.`);
  }
  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? { _error: this.$fetchState.error } : purifyData(this._data);
}
var fetchMixin = {
  created() {
    if (!hasFetch(this)) {
      return;
    }
    if (typeof this.$options.fetchOnServer === "function") {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }
    const defaultKey = this.$options._scopeId || this.$options.name || "";
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);
    if (typeof this.$options.fetchKey === "function") {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = typeof this.$options.fetchKey === "string" ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ":" + getCounter(key) : String(getCounter(key));
    }
    this.$fetch = () => {
    };
    Vue__default["default"].util.defineReactive(this, "$fetchState", {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, "serverPrefetch", serverPrefetch);
  }
};
function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);
  if (Pages.length === 1) {
    const { options = {} } = Pages[0];
    return options.scrollToTop !== false;
  }
  return Pages.some(({ options }) => options && options.scrollToTop);
}
function scrollBehavior(to, from, savedPosition) {
  let position = false;
  const isRouteChanged = to !== from;
  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = { x: 0, y: 0 };
  }
  const nuxt = window.$nuxt;
  if (!isRouteChanged || to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit("triggerScroll"));
  }
  return new Promise((resolve) => {
    nuxt.$once("triggerScroll", () => {
      if (to.hash) {
        let hash = to.hash;
        if ("undefined".CSS !== "undefined" && "undefined".CSS.escape !== "undefined") {
          hash = "#" + window.CSS.escape(hash.substr(1));
        }
        try {
          if (document.querySelector(hash)) {
            position = { selector: hash };
          }
        } catch (e2) {
          console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).");
        }
      }
      resolve(position);
    });
  });
}
const _145f180c = () => interopDefault(Promise.resolve().then(function() {
  return index$k;
}));
const _8c9c6104 = () => interopDefault(Promise.resolve().then(function() {
  return index$i;
}));
const _91bcae7e = () => interopDefault(Promise.resolve().then(function() {
  return index$g;
}));
const _52bdd824 = () => interopDefault(Promise.resolve().then(function() {
  return schedule$1;
}));
const _07e62440 = () => interopDefault(Promise.resolve().then(function() {
  return zoom$1;
}));
const _20a60b42 = () => interopDefault(Promise.resolve().then(function() {
  return index$e;
}));
const _f6dca5c0 = () => interopDefault(Promise.resolve().then(function() {
  return index$c;
}));
const _1dd6da99 = () => interopDefault(Promise.resolve().then(function() {
  return index$a;
}));
const _47a0401b = () => interopDefault(Promise.resolve().then(function() {
  return index$8;
}));
const _064e585e = () => interopDefault(Promise.resolve().then(function() {
  return index$6;
}));
const _d413250a = () => interopDefault(Promise.resolve().then(function() {
  return index$4;
}));
const _24134dd2 = () => interopDefault(Promise.resolve().then(function() {
  return _slug$b;
}));
const _fa49e850 = () => interopDefault(Promise.resolve().then(function() {
  return _slug$9;
}));
const _1c203951 = () => interopDefault(Promise.resolve().then(function() {
  return _slug$7;
}));
const _45e99ed3 = () => interopDefault(Promise.resolve().then(function() {
  return _slug$5;
}));
const _0497b716 = () => interopDefault(Promise.resolve().then(function() {
  return _slug$3;
}));
const _d780679a = () => interopDefault(Promise.resolve().then(function() {
  return _slug$1;
}));
const _14e9efd6 = () => interopDefault(Promise.resolve().then(function() {
  return index$2;
}));
const emptyFn = () => {
};
Vue__default["default"].use(Router__default["default"]);
const routerOptions = {
  mode: "history",
  base: "/",
  linkActiveClass: "nuxt-link-active",
  linkExactActiveClass: "nuxt-link-exact-active",
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
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new Router__default["default"](__spreadProps(__spreadValues({}, routerOptions), { base }));
  const originalPush = router.push;
  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };
  const resolve = router.resolve.bind(router);
  router.resolve = (to, current, append) => {
    if (typeof to === "string") {
      to = normalizeURL(to);
    }
    return resolve(to, current, append);
  };
  return router;
}
var NuxtChild = {
  name: "NuxtChild",
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ""
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: void 0
    }
  },
  render(_, { parent, data: data2, props }) {
    const h = parent.$createElement;
    data2.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition2 = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }
      parent = parent.$parent;
    }
    data2.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition2;
    const transitionProps = {};
    transitionsKeys.forEach((key) => {
      if (typeof transition[key] !== "undefined") {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach((key) => {
      if (typeof transition[key] === "function") {
        listeners[key] = transition[key].bind(_parent);
      }
    });
    if (transition.css === false) {
      const leave = listeners.leave;
      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }
          _parent.$nextTick(done);
        };
      }
    }
    let routerView = h("routerView", data2);
    if (props.keepAlive) {
      routerView = h("keep-alive", { props: props.keepAliveProps }, [routerView]);
    }
    return h("transition", {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }
};
const transitionsKeys = [
  "name",
  "mode",
  "appear",
  "css",
  "type",
  "duration",
  "enterClass",
  "leaveClass",
  "appearClass",
  "enterActiveClass",
  "enterActiveClass",
  "leaveActiveClass",
  "appearActiveClass",
  "enterToClass",
  "leaveToClass",
  "appearToClass"
];
const listenersKeys = [
  "beforeEnter",
  "enter",
  "afterEnter",
  "enterCancelled",
  "beforeLeave",
  "leave",
  "afterLeave",
  "leaveCancelled",
  "beforeAppear",
  "appear",
  "afterAppear",
  "appearCancelled"
];
var render$o = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "__nuxt-error-page" }, [_c("div", { staticClass: "error" }, [_c("svg", { attrs: { "xmlns": "http://www.w3.org/2000/svg", "width": "90", "height": "90", "fill": "#DBE1EC", "viewBox": "0 0 48 48" } }, [_c("path", { attrs: { "d": "M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z" } })]), _c("div", { staticClass: "title" }, [_vm._v(_vm._s(_vm.message))]), _vm.statusCode === 404 ? _c("p", { staticClass: "description" }, [typeof _vm.$route === "undefined" ? _c("a", { staticClass: "error-link", attrs: { "href": "/" } }) : _c("NuxtLink", { staticClass: "error-link", attrs: { "to": "/" } }, [_vm._v("Back to the home page")])], 1) : _c("p", { staticClass: "description" }, [_vm._v("An error occurred while rendering the page. Check developer tools console for details.")]), _vm._m(0)])]);
};
var staticRenderFns$o = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { staticClass: "logo" }, [_c("a", { attrs: { "href": "https://nuxtjs.org", "target": "_blank", "rel": "noopener" } }, [_vm._v("Nuxt")])]);
}];
render$o._withStripped = true;
var nuxtError_vue_vue_type_style_index_0_lang = "";
function normalizeComponent(scriptExports, render2, staticRenderFns2, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render2) {
    options.render = render2;
    options.staticRenderFns = staticRenderFns2;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(this, (options.functional ? this.parent : this).$root.$options.shadowRoot);
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const __vue2_script$r = {
  name: "NuxtError",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },
    message() {
      return this.error.message || "Error";
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: "viewport",
          content: "width=device-width,initial-scale=1.0,minimum-scale=1.0"
        }
      ]
    };
  }
};
const __cssModules$r = {};
var __component__$r = /* @__PURE__ */ normalizeComponent(__vue2_script$r, render$o, staticRenderFns$o, false, __vue2_injectStyles$r, null, null, null);
function __vue2_injectStyles$r(context) {
  for (let o2 in __cssModules$r) {
    this[o2] = __cssModules$r[o2];
  }
}
__component__$r.options.__file = ".nuxt/components/nuxt-error.vue";
var NuxtError = /* @__PURE__ */ function() {
  return __component__$r.exports;
}();
var Nuxt = {
  name: "Nuxt",
  components: {
    NuxtChild,
    NuxtError
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: void 0
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: void 0
    },
    name: {
      type: String,
      default: "default"
    }
  },
  errorCaptured(error) {
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },
  computed: {
    routerViewKey() {
      if (typeof this.nuxtChildKey !== "undefined" || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }
      const [matchedRoute] = this.$route.matched;
      if (!matchedRoute) {
        return this.$route.path;
      }
      const Component = matchedRoute.components.default;
      if (Component && Component.options) {
        const { options } = Component;
        if (options.key) {
          return typeof options.key === "function" ? options.key(this.$route) : options.key;
        }
      }
      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, "");
    }
  },
  beforeCreate() {
    Vue__default["default"].util.defineReactive(this, "nuxt", this.$root.$options.nuxt);
  },
  render(h) {
    if (!this.nuxt.err) {
      return h("NuxtChild", {
        key: this.routerViewKey,
        props: this.$props
      });
    }
    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h("div", {}, [
        h("h2", "An error occurred while showing the error page"),
        h("p", "Unfortunately an error occurred and while showing the error page another error occurred"),
        h("p", `Error details: ${this.errorFromNuxtError.toString()}`),
        h("nuxt-link", { props: { to: "/" } }, "Go back to home")
      ]);
    }
    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(NuxtError, {
      props: {
        error: this.nuxt.err
      }
    });
  }
};
var nuxtLoading_vue_vue_type_style_index_0_lang = "";
const __vue2_script$q = {
  name: "NuxtLoading",
  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5e3,
      continuous: false
    };
  },
  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }
      return this.rtl ? this.reversed ? "0px" : "auto" : !this.reversed ? "0px" : "auto";
    }
  },
  beforeDestroy() {
    this.clear();
  },
  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },
    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;
      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }
      return this;
    },
    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },
    get() {
      return this.percent;
    },
    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },
    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },
    pause() {
      clearInterval(this._timer);
      return this;
    },
    resume() {
      this.startTimer();
      return this;
    },
    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },
    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },
    fail(error) {
      this.canSucceed = false;
      return this;
    },
    startTimer() {
      if (!this.show) {
        this.show = true;
      }
      if (typeof this._cut === "undefined") {
        this._cut = 1e4 / Math.floor(this.duration);
      }
      this._timer = setInterval(() => {
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }
        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }
        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }
  },
  render(h) {
    let el = h(false);
    if (this.show) {
      el = h("div", {
        staticClass: "nuxt-progress",
        class: {
          "nuxt-progress-notransition": this.skipTimerCount > 0,
          "nuxt-progress-failed": !this.canSucceed
        },
        style: {
          width: this.percent + "%",
          left: this.left
        }
      });
    }
    return el;
  }
};
let __vue2_render$2, __vue2_staticRenderFns$2;
const __cssModules$q = {};
var __component__$q = /* @__PURE__ */ normalizeComponent(__vue2_script$q, __vue2_render$2, __vue2_staticRenderFns$2, false, __vue2_injectStyles$q, null, null, null);
function __vue2_injectStyles$q(context) {
  for (let o2 in __cssModules$q) {
    this[o2] = __cssModules$q[o2];
  }
}
__component__$q.options.__file = ".nuxt/components/nuxt-loading.vue";
var NuxtLoading = /* @__PURE__ */ function() {
  return __component__$q.exports;
}();
var tailwind = "";
var prism = "";
var render$n = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("Nuxt");
};
var staticRenderFns$n = [];
render$n._withStripped = true;
const __vue2_script$p = {};
const __cssModules$p = {};
var __component__$p = /* @__PURE__ */ normalizeComponent(__vue2_script$p, render$n, staticRenderFns$n, false, __vue2_injectStyles$p, null, null, null);
function __vue2_injectStyles$p(context) {
  for (let o2 in __cssModules$p) {
    this[o2] = __cssModules$p[o2];
  }
}
__component__$p.options.__file = ".nuxt/layouts/default.vue";
var _6f6c098b = /* @__PURE__ */ function() {
  return __component__$p.exports;
}();
const layouts = { "_default": sanitizeComponent(_6f6c098b) };
var App = {
  render(h, props) {
    const loadingEl = h("NuxtLoading", { ref: "loading" });
    const layoutEl = h(this.layout || "nuxt");
    const templateEl = h("div", {
      domProps: {
        id: "__layout"
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h("transition", {
      props: {
        name: "layout",
        mode: "out-in"
      },
      on: {
        beforeEnter(el) {
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit("triggerScroll");
          });
        }
      }
    }, [templateEl]);
    return h("div", {
      domProps: {
        id: "__nuxt"
      }
    }, [
      loadingEl,
      transitionEl
    ]);
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: "",
    nbFetching: 0
  }),
  beforeCreate() {
    Vue__default["default"].util.defineReactive(this, "nuxt", this.$options.nuxt);
  },
  created() {
    this.$root.$options.$nuxt = this;
    this.error = this.nuxt.error;
    this.context = this.$options.context;
  },
  async mounted() {
    this.$loading = this.$refs.loading;
  },
  watch: {
    "nuxt.err": "errorChanged"
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },
    isFetching() {
      return this.nbFetching > 0;
    },
    isPreview() {
      return Boolean(this.$options.previewData);
    }
  },
  methods: {
    refreshOnlineStatus() {
    },
    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);
      if (!pages.length) {
        return;
      }
      this.$loading.start();
      const promises = pages.map((page) => {
        const p = [];
        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }
        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }
        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then((newData) => {
            for (const key in newData) {
              Vue__default["default"].set(page.$data, key, newData[key]);
            }
          }));
        }
        return Promise.all(p);
      });
      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }
      this.$loading.finish();
    },
    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }
          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }
        let errorLayout = (NuxtError.options || NuxtError).layout;
        if (typeof errorLayout === "function") {
          errorLayout = errorLayout(this.context);
        }
        this.setLayout(errorLayout);
      }
    },
    setLayout(layout) {
      if (layout && typeof layout !== "string") {
        throw new Error("[nuxt] Avoid using non-string value as layout property.");
      }
      if (!layout || !layouts["_" + layout]) {
        layout = "default";
      }
      this.layoutName = layout;
      this.layout = layouts["_" + layout];
      return this.layout;
    },
    loadLayout(layout) {
      if (!layout || !layouts["_" + layout]) {
        layout = "default";
      }
      return Promise.resolve(layouts["_" + layout]);
    }
  },
  components: {
    NuxtLoading
  }
};
var render$m = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$m = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("footer", [_c("p", [_vm._v("\xA9 2021 MIT License")])]);
}];
render$m._withStripped = true;
const __vue2_script$o = {};
const __cssModules$o = {};
var __component__$o = /* @__PURE__ */ normalizeComponent(__vue2_script$o, render$m, staticRenderFns$m, false, __vue2_injectStyles$o, null, null, null);
function __vue2_injectStyles$o(context) {
  for (let o2 in __cssModules$o) {
    this[o2] = __cssModules$o[o2];
  }
}
__component__$o.options.__file = "components/Footer.vue";
var Footer = /* @__PURE__ */ function() {
  return __component__$o.exports;
}();
var render$l = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("header", [_vm._m(0), _c("Navigation")], 1);
};
var staticRenderFns$l = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("p", [_vm._v("Sait Web Developer")]), _c("p", [_vm._v("Fast Track - Winter 2022")])]);
}];
render$l._withStripped = true;
const __vue2_script$n = {};
const __cssModules$n = {};
var __component__$n = /* @__PURE__ */ normalizeComponent(__vue2_script$n, render$l, staticRenderFns$l, false, __vue2_injectStyles$n, null, null, null);
function __vue2_injectStyles$n(context) {
  for (let o2 in __cssModules$n) {
    this[o2] = __cssModules$n[o2];
  }
}
__component__$n.options.__file = "components/Header.vue";
var Header = /* @__PURE__ */ function() {
  return __component__$n.exports;
}();
var render$k = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$k = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("nav", [_c("ul", [_c("li", [_c("a", { attrs: { "href": "schedule" } }, [_vm._v("Schedule")])]), _c("li", [_c("a", { attrs: { "href": "assignments" } }, [_vm._v("Assignments")])]), _c("li", [_c("a", { attrs: { "href": "library" } }, [_vm._v("Library")])]), _c("li", [_c("a", { attrs: { "href": "zoom" } }, [_vm._v("Zoom")])])])]);
}];
render$k._withStripped = true;
const __vue2_script$m = {};
const __cssModules$m = {};
var __component__$m = /* @__PURE__ */ normalizeComponent(__vue2_script$m, render$k, staticRenderFns$k, false, __vue2_injectStyles$m, null, null, null);
function __vue2_injectStyles$m(context) {
  for (let o2 in __cssModules$m) {
    this[o2] = __cssModules$m[o2];
  }
}
__component__$m.options.__file = "components/Navigation.vue";
var Navigation = /* @__PURE__ */ function() {
  return __component__$m.exports;
}();
var components = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  Footer,
  Header,
  Navigation
});
for (const name in components) {
  Vue__default["default"].component(name, components[name]);
  Vue__default["default"].component("Lazy" + name, components[name]);
}
var nuxt_plugin_plugin_7846d553 = () => {
};
var propertyInformation = {};
var immutable = extend$1;
var hasOwnProperty = Object.prototype.hasOwnProperty;
function extend$1() {
  var target = {};
  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
}
var schema = Schema$2;
var proto$1 = Schema$2.prototype;
proto$1.space = null;
proto$1.normal = {};
proto$1.property = {};
function Schema$2(property, normal, space) {
  this.property = property;
  this.normal = normal;
  if (space) {
    this.space = space;
  }
}
var xtend = immutable;
var Schema$1 = schema;
var merge_1 = merge$2;
function merge$2(definitions) {
  var length = definitions.length;
  var property = [];
  var normal = [];
  var index2 = -1;
  var info2;
  var space;
  while (++index2 < length) {
    info2 = definitions[index2];
    property.push(info2.property);
    normal.push(info2.normal);
    space = info2.space;
  }
  return new Schema$1(xtend.apply(null, property), xtend.apply(null, normal), space);
}
var normalize_1 = normalize$2;
function normalize$2(value) {
  return value.toLowerCase();
}
var info = Info$2;
var proto = Info$2.prototype;
proto.space = null;
proto.attribute = null;
proto.property = null;
proto.boolean = false;
proto.booleanish = false;
proto.overloadedBoolean = false;
proto.number = false;
proto.commaSeparated = false;
proto.spaceSeparated = false;
proto.commaOrSpaceSeparated = false;
proto.mustUseProperty = false;
proto.defined = false;
function Info$2(property, attribute) {
  this.property = property;
  this.attribute = attribute;
}
var types$5 = {};
var powers = 0;
types$5.boolean = increment();
types$5.booleanish = increment();
types$5.overloadedBoolean = increment();
types$5.number = increment();
types$5.spaceSeparated = increment();
types$5.commaSeparated = increment();
types$5.commaOrSpaceSeparated = increment();
function increment() {
  return Math.pow(2, ++powers);
}
var Info$1 = info;
var types$4 = types$5;
var definedInfo = DefinedInfo$2;
DefinedInfo$2.prototype = new Info$1();
DefinedInfo$2.prototype.defined = true;
var checks = [
  "boolean",
  "booleanish",
  "overloadedBoolean",
  "number",
  "commaSeparated",
  "spaceSeparated",
  "commaOrSpaceSeparated"
];
var checksLength = checks.length;
function DefinedInfo$2(property, attribute, mask, space) {
  var index2 = -1;
  var check;
  mark(this, "space", space);
  Info$1.call(this, property, attribute);
  while (++index2 < checksLength) {
    check = checks[index2];
    mark(this, check, (mask & types$4[check]) === types$4[check]);
  }
}
function mark(values, key, value) {
  if (value) {
    values[key] = value;
  }
}
var normalize$1 = normalize_1;
var Schema = schema;
var DefinedInfo$1 = definedInfo;
var create_1 = create$6;
function create$6(definition) {
  var space = definition.space;
  var mustUseProperty = definition.mustUseProperty || [];
  var attributes = definition.attributes || {};
  var props = definition.properties;
  var transform = definition.transform;
  var property = {};
  var normal = {};
  var prop;
  var info2;
  for (prop in props) {
    info2 = new DefinedInfo$1(prop, transform(attributes, prop), props[prop], space);
    if (mustUseProperty.indexOf(prop) !== -1) {
      info2.mustUseProperty = true;
    }
    property[prop] = info2;
    normal[normalize$1(prop)] = prop;
    normal[normalize$1(info2.attribute)] = prop;
  }
  return new Schema(property, normal, space);
}
var create$5 = create_1;
var xlink$2 = create$5({
  space: "xlink",
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
});
function xlinkTransform(_, prop) {
  return "xlink:" + prop.slice(5).toLowerCase();
}
var create$4 = create_1;
var xml$2 = create$4({
  space: "xml",
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
});
function xmlTransform(_, prop) {
  return "xml:" + prop.slice(3).toLowerCase();
}
var caseSensitiveTransform_1 = caseSensitiveTransform$2;
function caseSensitiveTransform$2(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute;
}
var caseSensitiveTransform$1 = caseSensitiveTransform_1;
var caseInsensitiveTransform_1 = caseInsensitiveTransform$2;
function caseInsensitiveTransform$2(attributes, property) {
  return caseSensitiveTransform$1(attributes, property.toLowerCase());
}
var create$3 = create_1;
var caseInsensitiveTransform$1 = caseInsensitiveTransform_1;
var xmlns$2 = create$3({
  space: "xmlns",
  attributes: {
    xmlnsxlink: "xmlns:xlink"
  },
  transform: caseInsensitiveTransform$1,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
});
var types$3 = types$5;
var create$2 = create_1;
var booleanish$1 = types$3.booleanish;
var number$2 = types$3.number;
var spaceSeparated$2 = types$3.spaceSeparated;
var aria$2 = create$2({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish$1,
    ariaAutoComplete: null,
    ariaBusy: booleanish$1,
    ariaChecked: booleanish$1,
    ariaColCount: number$2,
    ariaColIndex: number$2,
    ariaColSpan: number$2,
    ariaControls: spaceSeparated$2,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated$2,
    ariaDetails: null,
    ariaDisabled: booleanish$1,
    ariaDropEffect: spaceSeparated$2,
    ariaErrorMessage: null,
    ariaExpanded: booleanish$1,
    ariaFlowTo: spaceSeparated$2,
    ariaGrabbed: booleanish$1,
    ariaHasPopup: null,
    ariaHidden: booleanish$1,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated$2,
    ariaLevel: number$2,
    ariaLive: null,
    ariaModal: booleanish$1,
    ariaMultiLine: booleanish$1,
    ariaMultiSelectable: booleanish$1,
    ariaOrientation: null,
    ariaOwns: spaceSeparated$2,
    ariaPlaceholder: null,
    ariaPosInSet: number$2,
    ariaPressed: booleanish$1,
    ariaReadOnly: booleanish$1,
    ariaRelevant: null,
    ariaRequired: booleanish$1,
    ariaRoleDescription: spaceSeparated$2,
    ariaRowCount: number$2,
    ariaRowIndex: number$2,
    ariaRowSpan: number$2,
    ariaSelected: booleanish$1,
    ariaSetSize: number$2,
    ariaSort: null,
    ariaValueMax: number$2,
    ariaValueMin: number$2,
    ariaValueNow: number$2,
    ariaValueText: null,
    role: null
  }
});
function ariaTransform(_, prop) {
  return prop === "role" ? prop : "aria-" + prop.slice(4).toLowerCase();
}
var types$2 = types$5;
var create$1 = create_1;
var caseInsensitiveTransform = caseInsensitiveTransform_1;
var boolean$1 = types$2.boolean;
var overloadedBoolean = types$2.overloadedBoolean;
var booleanish = types$2.booleanish;
var number$1 = types$2.number;
var spaceSeparated$1 = types$2.spaceSeparated;
var commaSeparated$1 = types$2.commaSeparated;
var html$1 = create$1({
  space: "html",
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    abbr: null,
    accept: commaSeparated$1,
    acceptCharset: spaceSeparated$1,
    accessKey: spaceSeparated$1,
    action: null,
    allow: null,
    allowFullScreen: boolean$1,
    allowPaymentRequest: boolean$1,
    allowUserMedia: boolean$1,
    alt: null,
    as: null,
    async: boolean$1,
    autoCapitalize: null,
    autoComplete: spaceSeparated$1,
    autoFocus: boolean$1,
    autoPlay: boolean$1,
    capture: boolean$1,
    charSet: null,
    checked: boolean$1,
    cite: null,
    className: spaceSeparated$1,
    cols: number$1,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean$1,
    controlsList: spaceSeparated$1,
    coords: number$1 | commaSeparated$1,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean$1,
    defer: boolean$1,
    dir: null,
    dirName: null,
    disabled: boolean$1,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean$1,
    formTarget: null,
    headers: spaceSeparated$1,
    height: number$1,
    hidden: boolean$1,
    high: number$1,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated$1,
    httpEquiv: spaceSeparated$1,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated$1,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean$1,
    itemId: null,
    itemProp: spaceSeparated$1,
    itemRef: spaceSeparated$1,
    itemScope: boolean$1,
    itemType: spaceSeparated$1,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean$1,
    low: number$1,
    manifest: null,
    max: null,
    maxLength: number$1,
    media: null,
    method: null,
    min: null,
    minLength: number$1,
    multiple: boolean$1,
    muted: boolean$1,
    name: null,
    nonce: null,
    noModule: boolean$1,
    noValidate: boolean$1,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean$1,
    optimum: number$1,
    pattern: null,
    ping: spaceSeparated$1,
    placeholder: null,
    playsInline: boolean$1,
    poster: null,
    preload: null,
    readOnly: boolean$1,
    referrerPolicy: null,
    rel: spaceSeparated$1,
    required: boolean$1,
    reversed: boolean$1,
    rows: number$1,
    rowSpan: number$1,
    sandbox: spaceSeparated$1,
    scope: null,
    scoped: boolean$1,
    seamless: boolean$1,
    selected: boolean$1,
    shape: null,
    size: number$1,
    sizes: null,
    slot: null,
    span: number$1,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated$1,
    start: number$1,
    step: null,
    style: null,
    tabIndex: number$1,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean$1,
    useMap: null,
    value: booleanish,
    width: number$1,
    wrap: null,
    align: null,
    aLink: null,
    archive: spaceSeparated$1,
    axis: null,
    background: null,
    bgColor: null,
    border: number$1,
    borderColor: null,
    bottomMargin: number$1,
    cellPadding: null,
    cellSpacing: null,
    char: null,
    charOff: null,
    classId: null,
    clear: null,
    code: null,
    codeBase: null,
    codeType: null,
    color: null,
    compact: boolean$1,
    declare: boolean$1,
    event: null,
    face: null,
    frame: null,
    frameBorder: null,
    hSpace: number$1,
    leftMargin: number$1,
    link: null,
    longDesc: null,
    lowSrc: null,
    marginHeight: number$1,
    marginWidth: number$1,
    noResize: boolean$1,
    noHref: boolean$1,
    noShade: boolean$1,
    noWrap: boolean$1,
    object: null,
    profile: null,
    prompt: null,
    rev: null,
    rightMargin: number$1,
    rules: null,
    scheme: null,
    scrolling: booleanish,
    standby: null,
    summary: null,
    text: null,
    topMargin: number$1,
    valueType: null,
    version: null,
    vAlign: null,
    vLink: null,
    vSpace: number$1,
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean$1,
    disableRemotePlayback: boolean$1,
    prefix: null,
    property: null,
    results: number$1,
    security: null,
    unselectable: null
  }
});
var merge$1 = merge_1;
var xlink$1 = xlink$2;
var xml$1 = xml$2;
var xmlns$1 = xmlns$2;
var aria$1 = aria$2;
var html = html$1;
var html_1 = merge$1([xml$1, xlink$1, xmlns$1, aria$1, html]);
var types$1 = types$5;
var create = create_1;
var caseSensitiveTransform = caseSensitiveTransform_1;
var boolean = types$1.boolean;
var number = types$1.number;
var spaceSeparated = types$1.spaceSeparated;
var commaSeparated = types$1.commaSeparated;
var commaOrSpaceSeparated = types$1.commaOrSpaceSeparated;
var svg$1 = create({
  space: "svg",
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  transform: caseSensitiveTransform,
  properties: {
    about: commaOrSpaceSeparated,
    accentHeight: number,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: number,
    amplitude: number,
    arabicForm: null,
    ascent: number,
    attributeName: null,
    attributeType: null,
    azimuth: number,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: number,
    by: null,
    calcMode: null,
    capHeight: number,
    className: spaceSeparated,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: number,
    diffuseConstant: number,
    direction: null,
    display: null,
    dur: null,
    divisor: number,
    dominantBaseline: null,
    download: boolean,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: number,
    enableBackground: null,
    end: null,
    event: null,
    exponent: number,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: number,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: commaSeparated,
    g2: commaSeparated,
    glyphName: commaSeparated,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: number,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: number,
    horizOriginX: number,
    horizOriginY: number,
    id: null,
    ideographic: number,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: number,
    k: number,
    k1: number,
    k2: number,
    k3: number,
    k4: number,
    kernelMatrix: commaOrSpaceSeparated,
    kernelUnitLength: null,
    keyPoints: null,
    keySplines: null,
    keyTimes: null,
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: number,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: number,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: number,
    overlineThickness: number,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: number,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: spaceSeparated,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: number,
    pointsAtY: number,
    pointsAtZ: number,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: commaOrSpaceSeparated,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: commaOrSpaceSeparated,
    rev: commaOrSpaceSeparated,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: commaOrSpaceSeparated,
    requiredFeatures: commaOrSpaceSeparated,
    requiredFonts: commaOrSpaceSeparated,
    requiredFormats: commaOrSpaceSeparated,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: number,
    specularExponent: number,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: number,
    strikethroughThickness: number,
    string: null,
    stroke: null,
    strokeDashArray: commaOrSpaceSeparated,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: number,
    strokeOpacity: number,
    strokeWidth: null,
    style: null,
    surfaceScale: number,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: commaOrSpaceSeparated,
    tabIndex: number,
    tableValues: null,
    target: null,
    targetX: number,
    targetY: number,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: commaOrSpaceSeparated,
    to: null,
    transform: null,
    u1: null,
    u2: null,
    underlinePosition: number,
    underlineThickness: number,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: number,
    values: null,
    vAlphabetic: number,
    vMathematical: number,
    vectorEffect: null,
    vHanging: number,
    vIdeographic: number,
    version: null,
    vertAdvY: number,
    vertOriginX: number,
    vertOriginY: number,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: number,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  }
});
var merge = merge_1;
var xlink = xlink$2;
var xml = xml$2;
var xmlns = xmlns$2;
var aria = aria$2;
var svg = svg$1;
var svg_1 = merge([xml, xlink, xmlns, aria, svg]);
var normalize = normalize_1;
var DefinedInfo = definedInfo;
var Info = info;
var data = "data";
var find_1 = find;
var valid = /^data[-\w.:]+$/i;
var dash = /-[a-z]/g;
var cap = /[A-Z]/g;
function find(schema2, value) {
  var normal = normalize(value);
  var prop = value;
  var Type = Info;
  if (normal in schema2.normal) {
    return schema2.property[schema2.normal[normal]];
  }
  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    if (value.charAt(4) === "-") {
      prop = datasetToProperty(value);
    } else {
      value = datasetToAttribute(value);
    }
    Type = DefinedInfo;
  }
  return new Type(prop, value);
}
function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase);
  return data + value.charAt(0).toUpperCase() + value.slice(1);
}
function datasetToAttribute(property) {
  var value = property.slice(4);
  if (dash.test(value)) {
    return property;
  }
  value = value.replace(cap, kebab);
  if (value.charAt(0) !== "-") {
    value = "-" + value;
  }
  return data + value;
}
function kebab($0) {
  return "-" + $0.toLowerCase();
}
function camelcase($0) {
  return $0.charAt(1).toUpperCase();
}
propertyInformation.html = html_1;
propertyInformation.svg = svg_1;
propertyInformation.normalize = normalize_1;
propertyInformation.find = find_1;
const rootKeys = ["class-name", "class", "className", "style"];
const rxOn = /^@|^v-on:/;
const rxBind = /^:|^v-bind:/;
const rxModel = /^v-model/;
const nativeInputs = ["select", "textarea", "input"];
function evalInContext(code, context) {
  return new Function("with(this) { return (" + code + ") }").call(context);
}
function propsToData(node, doc) {
  const { tag, props } = node;
  return Object.keys(props).reduce(function(data2, key) {
    const k = key.replace(/.*:/, "");
    let obj = rootKeys.includes(k) ? data2 : data2.attrs;
    const value = props[key];
    const { attribute } = propertyInformation.find(propertyInformation.html, key);
    const native = nativeInputs.includes(tag);
    if (rxModel.test(key) && value in doc && !native) {
      const mods = key.replace(rxModel, "").split(".").filter((d) => d).reduce((d, k2) => (d[k2] = true, d), {});
      const field = "value";
      const event = mods.lazy ? "change" : "input";
      const processor = mods.number ? (d) => +d : mods.trim ? (d) => d.trim() : (d) => d;
      obj[field] = evalInContext(value, doc);
      data2.on = data2.on || {};
      data2.on[event] = (e2) => doc[value] = processor(e2);
    } else if (key === "v-bind") {
      const val = value in doc ? doc[value] : evalInContext(value, doc);
      obj = Object.assign(obj, val);
    } else if (rxOn.test(key)) {
      key = key.replace(rxOn, "");
      data2.on = data2.on || {};
      data2.on[key] = evalInContext(value, doc);
    } else if (rxBind.test(key)) {
      key = key.replace(rxBind, "");
      obj[key] = value in doc ? doc[value] : evalInContext(value, doc);
    } else if (Array.isArray(value)) {
      obj[attribute] = value.join(" ");
    } else {
      obj[attribute] = value;
    }
    return data2;
  }, { attrs: {} });
}
function slotsToData(node, h, doc) {
  const data2 = {};
  const children = node.children || [];
  children.forEach((child) => {
    if (!isTemplate(child) || isDefaultTemplate(child)) {
      return;
    }
    data2.scopedSlots = data2.scopedSlots || {};
    const template = child;
    const name = getSlotName(template);
    const vDomTree = template.content.map((tmplNode) => processNode(tmplNode, h, doc));
    data2.scopedSlots[name] = function() {
      return vDomTree;
    };
  });
  return data2;
}
function processNode(node, h, doc) {
  if (node.type === "text") {
    return node.value;
  }
  const slotData = slotsToData(node || {}, h, doc);
  const propData = propsToData(node || {}, doc);
  const data2 = Object.assign({}, slotData, propData);
  const children = [];
  for (const child of node.children) {
    if (isTemplate(child) && !isDefaultTemplate(child)) {
      continue;
    }
    const processQueue = isDefaultTemplate(child) ? child.content : [child];
    children.push(...processQueue.map((node2) => processNode(node2, h, doc)));
  }
  return h(node.tag, data2, children);
}
const DEFAULT_SLOT = "default";
function isDefaultTemplate(node) {
  return isTemplate(node) && getSlotName(node) === DEFAULT_SLOT;
}
function isTemplate(node) {
  return node.tag === "template";
}
function getSlotName(node) {
  let name = "";
  for (const propName of Object.keys(node.props)) {
    if (!propName.startsWith("#") && !propName.startsWith("v-slot:")) {
      continue;
    }
    name = propName.split(/[:#]/, 2)[1];
    break;
  }
  return name || DEFAULT_SLOT;
}
var NuxtContent$1 = {
  name: "NuxtContent",
  functional: true,
  props: {
    document: {
      required: true
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  render(h, { data: data2, props }) {
    const { document: document2, tag } = props;
    const { body } = document2 || {};
    if (!body || !body.children || !Array.isArray(body.children)) {
      return;
    }
    let classes = [];
    if (Array.isArray(data2.class)) {
      classes = data2.class;
    } else if (typeof data2.class === "object") {
      const keys2 = Object.keys(data2.class);
      classes = keys2.filter((key) => data2.class[key]);
    } else {
      classes = [data2.class];
    }
    data2.class = classes.concat("nuxt-content");
    data2.props = Object.assign(__spreadValues({}, body.props), data2.props);
    return h(tag, data2, body.children.map((child) => processNode(child, h, document2)));
  }
};
var render$j = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("textarea", { directives: [{ name: "model", rawName: "v-model", value: _vm.file, expression: "file" }], ref: "textarea", domProps: { "value": _vm.file }, on: { "keydown": [function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
      return null;
    }
    if ($event.ctrlKey || $event.shiftKey || $event.altKey || $event.metaKey) {
      return null;
    }
    $event.preventDefault();
    return _vm.onTabRight.apply(null, arguments);
  }, function($event) {
    if (!$event.type.indexOf("key") && _vm._k($event.keyCode, "tab", 9, $event.key, "Tab")) {
      return null;
    }
    if (!$event.shiftKey) {
      return null;
    }
    $event.preventDefault();
    return _vm.onTabLeft.apply(null, arguments);
  }], "compositionstart": function($event) {
    $event.preventDefault();
    _vm.isInComposition = true;
  }, "compositionend": function($event) {
    $event.preventDefault();
    _vm.isInComposition = false;
  }, "blur": function($event) {
    return _vm.$emit("endEdit");
  }, "input": function($event) {
    if ($event.target.composing) {
      return;
    }
    _vm.file = $event.target.value;
  } } });
};
var staticRenderFns$j = [];
render$j._withStripped = true;
const __vue2_script$l = {
  props: {
    value: String,
    isEditing: Boolean
  },
  data() {
    return {
      file: "",
      isInComposition: false
    };
  },
  watch: {
    value() {
      this.file = this.value;
    },
    isEditing() {
      this.onType();
      this.$refs.textarea.focus();
    },
    file() {
      this.onType();
      this.$emit("input", this.file);
    }
  },
  methods: {
    onType() {
      const el = this.$refs.textarea;
      el.style.height = "auto";
      this.$nextTick(() => {
        el.style.height = el.scrollHeight + "px";
      });
    },
    onTabRight(event) {
      if (this.isInComposition) {
        return;
      }
      const text = this.file;
      const originalSelectionStart = event.target.selectionStart;
      const textStart = text.slice(0, originalSelectionStart);
      const textEnd = text.slice(originalSelectionStart);
      this.file = `${textStart}	${textEnd}`;
      event.target.value = this.file;
      event.target.selectionEnd = event.target.selectionStart = originalSelectionStart + 1;
    },
    onTabLeft(event) {
      if (this.isInComposition) {
        return;
      }
      const text = this.file;
      const originalSelectionStart = event.target.selectionStart;
      const textStart = text.slice(0, originalSelectionStart);
      const textEnd = text.slice(originalSelectionStart);
      this.file = `${textStart.replace(/\t$/, "")}${textEnd}`;
      event.target.value = this.file;
      event.target.selectionEnd = event.target.selectionStart = originalSelectionStart - 1;
    }
  }
};
const __cssModules$l = {};
var __component__$l = /* @__PURE__ */ normalizeComponent(__vue2_script$l, render$j, staticRenderFns$j, false, __vue2_injectStyles$l, null, null, null);
function __vue2_injectStyles$l(context) {
  for (let o2 in __cssModules$l) {
    this[o2] = __cssModules$l[o2];
  }
}
__component__$l.options.__file = ".nuxt/content/editor.vue";
var Editor = /* @__PURE__ */ function() {
  return __component__$l.exports;
}();
var render$i = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(_vm.tag, { tag: "div", class: ["nuxt-content-container", { "is-editing": _vm.isEditing }] }, [_c("client-only", [_c("editor", { directives: [{ name: "show", rawName: "v-show", value: _vm.isEditing, expression: "isEditing" }], staticClass: "nuxt-content-editor", attrs: { "is-editing": _vm.isEditing }, on: { "endEdit": _vm.toggleEdit }, model: { value: _vm.file, callback: function($$v) {
    _vm.file = $$v;
  }, expression: "file" } })], 1), _c("nuxt-content-dev", { directives: [{ name: "show", rawName: "v-show", value: !_vm.isEditing, expression: "!isEditing" }], ref: "content", class: _vm.classes, attrs: { "id": _vm.id, "document": _vm.document }, on: { "dblclick": _vm.toggleEdit } })], 1);
};
var staticRenderFns$i = [];
render$i._withStripped = true;
var nuxtContent_dev_vue_vue_type_style_index_0_scoped_true_lang = "";
const __vue2_script$k = {
  name: "NuxtContent",
  components: {
    NuxtContentDev: NuxtContent$1,
    Editor
  },
  props: NuxtContent$1.props,
  data() {
    return {
      classes: [],
      isEditing: false,
      file: null,
      id: null
    };
  },
  computed: {
    fileUrl() {
      return `/_content${this.document.path}${this.document.extension}`;
    }
  },
  mounted() {
    if (this.$vnode.data.attrs && this.$vnode.data.attrs.id) {
      this.id = this.$vnode.data.attrs.id;
    }
    if (this.$vnode.data.class) {
      let classes;
      if (Array.isArray(this.$vnode.data.class)) {
        classes = this.$vnode.data.class;
      } else if (typeof this.$vnode.data.class === "object") {
        const keys2 = Object.keys(this.$vnode.data.class);
        classes = keys2.filter((key) => this.$vnode.data.class[key]);
      } else {
        classes = this.$vnode.data.class;
      }
      this.classes = this.classes.concat(classes);
      delete this.$vnode.data.class;
    }
    if (this.$vnode.data.staticClass) {
      this.classes = this.classes.concat(this.$vnode.data.staticClass);
      delete this.$vnode.data.staticClass;
    }
  },
  methods: {
    async toggleEdit() {
      if (this.isEditing) {
        await this.saveFile();
        this.isEditing = false;
        return;
      }
      await this.fetchFile();
      this.isEditing = true;
    },
    async fetchFile() {
      this.file = await fetch(this.fileUrl).then((res) => res.text());
    },
    async saveFile() {
      await fetch(this.fileUrl, { method: "PUT", body: JSON.stringify({ file: this.file }) }).then((res) => res.json());
    },
    waitFor(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  }
};
const __cssModules$k = {};
var __component__$k = /* @__PURE__ */ normalizeComponent(__vue2_script$k, render$i, staticRenderFns$i, false, __vue2_injectStyles$k, "f58a9f50", null, null);
function __vue2_injectStyles$k(context) {
  for (let o2 in __cssModules$k) {
    this[o2] = __cssModules$k[o2];
  }
}
__component__$k.options.__file = ".nuxt/content/nuxt-content.dev.vue";
var NuxtContent = /* @__PURE__ */ function() {
  return __component__$k.exports;
}();
Vue__default["default"].component(NuxtContent.name, NuxtContent);
var nuxt_plugin_pluginserver_16a130d7 = (ctx, inject) => {
  const $content = ctx.ssrContext.$content;
  inject("content", $content);
  ctx.$content = $content;
};
function isObject(val) {
  return val !== null && typeof val === "object";
}
function _defu(baseObj, defaults, namespace = ".", merger) {
  if (!isObject(defaults)) {
    return _defu(baseObj, {}, namespace, merger);
  }
  const obj = Object.assign({}, defaults);
  for (const key in baseObj) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const val = baseObj[key];
    if (val === null || val === void 0) {
      continue;
    }
    if (merger && merger(obj, key, val, namespace)) {
      continue;
    }
    if (Array.isArray(val) && Array.isArray(obj[key])) {
      obj[key] = obj[key].concat(val);
    } else if (isObject(val) && isObject(obj[key])) {
      obj[key] = _defu(val, obj[key], (namespace ? `${namespace}.` : "") + key.toString(), merger);
    } else {
      obj[key] = val;
    }
  }
  return obj;
}
function extend(merger) {
  return (...args) => args.reduce((p, c2) => _defu(p, c2, "", merger), {});
}
const defu = extend();
defu.fn = extend((obj, key, currentValue, _namespace) => {
  if (typeof obj[key] !== "undefined" && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.arrayFn = extend((obj, key, currentValue, _namespace) => {
  if (Array.isArray(obj[key]) && typeof currentValue === "function") {
    obj[key] = currentValue(obj[key]);
    return true;
  }
});
defu.extend = extend;
async function imageMeta$1(ctx, url) {
  const cache = getCache(ctx);
  const cacheKey = "image:meta:" + url;
  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  cache.set(cacheKey, meta);
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await Promise.resolve().then(function() {
      return index;
    }).then((r2) => r2.default || r2);
    const data2 = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data2);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function getCache(ctx) {
  if (!ctx.nuxtContext.cache) {
    if (ctx.nuxtContext.ssrContext && ctx.nuxtContext.ssrContext.cache) {
      ctx.nuxtContext.cache = ctx.nuxtContext.ssrContext.cache;
    } else {
      const _cache = {};
      ctx.nuxtContext.cache = {
        get: (id) => _cache[id],
        set: (id, value) => {
          _cache[id] = value;
        },
        has: (id) => typeof _cache[id] !== "undefined"
      };
    }
  }
  return ctx.nuxtContext.cache;
}
function getFileExtension(url = "") {
  const extension = url.split(/[?#]/).shift().split("/").pop().split(".").pop();
  return extension;
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return parseInt(input, 10);
    }
  }
}
function createImage(globalOptions, nuxtContext) {
  const ctx = {
    options: globalOptions,
    nuxtContext
  };
  const getImage2 = function(input, options = {}) {
    const image = resolveImage(ctx, input, options);
    if (image.isStatic)
      ;
    return image;
  };
  const $img = function $img2(input, modifiers = {}, options = {}) {
    return getImage2(input, __spreadProps(__spreadValues({}, options), {
      modifiers: defu(modifiers, options.modifiers || {})
    })).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, __spreadValues(__spreadValues({}, globalOptions.presets[presetName]), options));
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, __spreadValues({}, options));
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta$1(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (typeof input !== "string" || input === "") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        input = joinURL(ctx.options.alias[base], input.substr(base.length));
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = __spreadValues({}, _options.modifiers);
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const hwRatio = width && height ? height / width : 0;
  const variants = [];
  const sizes = {};
  if (typeof opts.sizes === "string") {
    for (const entry of opts.sizes.split(/[\s,]+/).filter((e2) => e2)) {
      const s2 = entry.split(":");
      if (s2.length !== 2) {
        continue;
      }
      sizes[s2[0].trim()] = s2[1].trim();
    }
  } else {
    Object.assign(sizes, opts.sizes);
  }
  for (const key in sizes) {
    const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || parseInt(key);
    let size = String(sizes[key]);
    const isFluid = size.endsWith("vw");
    if (!isFluid && /^\d+$/.test(size)) {
      size = size + "px";
    }
    if (!isFluid && !size.endsWith("px")) {
      continue;
    }
    let _cWidth = parseInt(size);
    if (!screenMaxWidth || !_cWidth) {
      continue;
    }
    if (isFluid) {
      _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
    }
    const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
    variants.push({
      width: _cWidth,
      size,
      screenMaxWidth,
      media: `(max-width: ${screenMaxWidth}px)`,
      src: ctx.$img(input, __spreadProps(__spreadValues({}, opts.modifiers), { width: _cWidth, height: _cHeight }), opts)
    });
  }
  variants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  const defaultVar = variants[variants.length - 1];
  if (defaultVar) {
    defaultVar.media = "";
  }
  return {
    sizes: variants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", "),
    srcset: variants.map((v) => `${v.src} ${v.width}w`).join(", "),
    src: defaultVar == null ? void 0 : defaultVar.src
  };
}
const defineMixin = (opts) => opts;
const imageMixin = defineMixin({
  props: {
    src: { type: String, required: true },
    format: { type: String, default: void 0 },
    quality: { type: [Number, String], default: void 0 },
    background: { type: String, default: void 0 },
    fit: { type: String, default: void 0 },
    modifiers: { type: Object, default: void 0 },
    preset: { type: String, default: void 0 },
    provider: { type: String, default: void 0 },
    sizes: { type: [Object, String], default: void 0 },
    width: { type: [String, Number], default: void 0 },
    height: { type: [String, Number], default: void 0 },
    alt: { type: String, default: void 0 },
    referrerpolicy: { type: String, default: void 0 },
    usemap: { type: String, default: void 0 },
    longdesc: { type: String, default: void 0 },
    ismap: { type: Boolean, default: void 0 },
    crossorigin: { type: [Boolean, String], default: void 0, validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val) },
    loading: { type: String, default: void 0 },
    decoding: { type: String, default: void 0, validator: (val) => ["async", "auto", "sync"].includes(val) }
  },
  computed: {
    nImgAttrs() {
      return {
        width: parseSize(this.width),
        height: parseSize(this.height),
        alt: this.alt,
        referrerpolicy: this.referrerpolicy,
        usemap: this.usemap,
        longdesc: this.longdesc,
        ismap: this.ismap,
        crossorigin: this.crossorigin === true ? "anonymous" : this.crossorigin || void 0,
        loading: this.loading,
        decoding: this.decoding
      };
    },
    nModifiers() {
      return __spreadProps(__spreadValues({}, this.modifiers), {
        width: parseSize(this.width),
        height: parseSize(this.height),
        format: this.format,
        quality: this.quality,
        background: this.background,
        fit: this.fit
      });
    },
    nOptions() {
      return {
        provider: this.provider,
        preset: this.preset
      };
    }
  }
});
var render$h = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("img", _vm._b({ key: _vm.nSrc, attrs: { "src": _vm.nSrc } }, "img", _vm.nAttrs, false));
};
var staticRenderFns$h = [];
render$h._withStripped = true;
const defineComponent$2 = (opts) => opts;
const __vue2_script$j = defineComponent$2({
  name: "NuxtImg",
  mixins: [imageMixin],
  computed: {
    nAttrs() {
      const attrs = this.nImgAttrs;
      if (this.sizes) {
        const { sizes, srcset } = this.nSizes;
        attrs.sizes = sizes;
        attrs.srcset = srcset;
      }
      return attrs;
    },
    nSrc() {
      return this.sizes ? this.nSizes.src : this.$img(this.src, this.nModifiers, this.nOptions);
    },
    nSizes() {
      return this.$img.getSizes(this.src, __spreadProps(__spreadValues({}, this.nOptions), {
        sizes: this.sizes,
        modifiers: __spreadProps(__spreadValues({}, this.nModifiers), {
          width: parseSize(this.width),
          height: parseSize(this.height)
        })
      }));
    }
  },
  created() {
  }
});
const __cssModules$j = {};
var __component__$j = /* @__PURE__ */ normalizeComponent(__vue2_script$j, render$h, staticRenderFns$h, false, __vue2_injectStyles$j, null, null, null);
function __vue2_injectStyles$j(context) {
  for (let o2 in __cssModules$j) {
    this[o2] = __cssModules$j[o2];
  }
}
__component__$j.options.__file = "node_modules/@nuxt/image/dist/runtime/components/nuxt-img.vue";
var NuxtImg = /* @__PURE__ */ function() {
  return __component__$j.exports;
}();
var render$g = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("picture", { key: _vm.nSources[0].src }, [_vm.nSources[1] ? _c("source", { attrs: { "type": _vm.nSources[1].type, "srcset": _vm.nSources[1].srcset, "sizes": _vm.nSources[1].sizes } }) : _vm._e(), _c("img", _vm._b({ attrs: { "src": _vm.nSources[0].src, "srcset": _vm.nSources[0].srcset, "sizes": _vm.nSources[0].sizes } }, "img", _vm.nImgAttrs, false))]);
};
var staticRenderFns$g = [];
render$g._withStripped = true;
const defineComponent$1 = (opts) => opts;
const __vue2_script$i = defineComponent$1({
  name: "NuxtPicture",
  mixins: [imageMixin],
  props: {
    legacyFormat: { type: String, default: null }
  },
  computed: {
    isTransparent() {
      return ["png", "webp", "gif"].includes(this.originalFormat);
    },
    originalFormat() {
      return getFileExtension(this.src);
    },
    nFormat() {
      if (this.format) {
        return this.format;
      }
      if (this.originalFormat === "svg") {
        return "svg";
      }
      return "webp";
    },
    nLegacyFormat() {
      if (this.legacyFormat) {
        return this.legacyFormat;
      }
      const formats = {
        webp: this.isTransparent ? "png" : "jpeg",
        svg: "png"
      };
      return formats[this.nFormat] || this.originalFormat;
    },
    nSources() {
      if (this.nFormat === "svg") {
        return [{
          srcset: this.src
        }];
      }
      const formats = this.nLegacyFormat !== this.nFormat ? [this.nLegacyFormat, this.nFormat] : [this.nFormat];
      const sources = formats.map((format) => {
        const { srcset, sizes, src } = this.$img.getSizes(this.src, __spreadProps(__spreadValues({}, this.nOptions), {
          sizes: this.sizes || this.$img.options.screens,
          modifiers: __spreadProps(__spreadValues({}, this.nModifiers), {
            format
          })
        }));
        return {
          src,
          type: `image/${format}`,
          sizes,
          srcset
        };
      });
      return sources;
    }
  },
  created() {
  }
});
const __cssModules$i = {};
var __component__$i = /* @__PURE__ */ normalizeComponent(__vue2_script$i, render$g, staticRenderFns$g, false, __vue2_injectStyles$i, null, null, null);
function __vue2_injectStyles$i(context) {
  for (let o2 in __cssModules$i) {
    this[o2] = __cssModules$i[o2];
  }
}
__component__$i.options.__file = "node_modules/@nuxt/image/dist/runtime/components/nuxt-picture.vue";
var NuxtPicture = /* @__PURE__ */ function() {
  return __component__$i.exports;
}();
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: ",",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage$1 = (src, { modifiers = {}, baseURL = "/_ipx" } = {}, { nuxtContext: { base: nuxtBase = "/" } = {} }) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  return {
    url: joinURL(nuxtBase, baseURL, params, encodePath(src))
  };
};
const getImage = (src, options, ctx) => __spreadProps(__spreadValues({}, getImage$1(src, options, ctx)), {
  isStatic: true
});
const supportsAlias = true;
var staticRuntime$8903 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  getImage,
  supportsAlias
});
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "static",
  "domains": [],
  "alias": {}
};
imageOptions.providers = {
  ["static"]: { provider: staticRuntime$8903, defaults: {} }
};
Vue__default["default"].component(NuxtImg.name, NuxtImg);
Vue__default["default"].component(NuxtPicture.name, NuxtPicture);
Vue__default["default"].component("NImg", NuxtImg);
Vue__default["default"].component("NPicture", NuxtPicture);
function nuxt_plugin_image_3ac1bc38(nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext);
  inject("img", $img);
}
Vue__default["default"].component(ClientOnly__default["default"].name, ClientOnly__default["default"]);
Vue__default["default"].component(NoSsr__default["default"].name, __spreadProps(__spreadValues({}, NoSsr__default["default"]), {
  render(h, ctx) {
    return NoSsr__default["default"].render(h, ctx);
  }
}));
Vue__default["default"].component(NuxtChild.name, NuxtChild);
Vue__default["default"].component("NChild", NuxtChild);
Vue__default["default"].component(Nuxt.name, Nuxt);
Object.defineProperty(Vue__default["default"].prototype, "$nuxt", {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;
    return globalNuxt;
  },
  configurable: true
});
Vue__default["default"].use(Meta__default["default"], { "keyName": "head", "attribute": "data-n-head", "ssrAttribute": "data-n-head-ssr", "tagIDKeyName": "hid" });
const defaultTransition = { "name": "page", "mode": "out-in", "appear": false, "appearClass": "appear", "appearActiveClass": "appear-active", "appearToClass": "appear-to" };
async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const app = __spreadValues({
    head: { "title": "winter-2022", "htmlAttrs": { "lang": "en" }, "meta": [{ "charset": "utf-8" }, { "name": "viewport", "content": "width=device-width, initial-scale=1" }, { "hid": "description", "name": "description", "content": "" }, { "name": "format-detection", "content": "telephone=no" }], "link": [{ "rel": "icon", "type": "image/x-icon", "href": "/favicon.ico" }, { "hid": "gf-prefetch", "rel": "dns-prefetch", "href": "https://fonts.gstatic.com/" }, { "hid": "gf-preconnect", "rel": "preconnect", "href": "https://fonts.gstatic.com/", "crossorigin": "" }, { "hid": "gf-preload", "rel": "preload", "as": "style", "href": "https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@100;300" }], "style": [], "script": [{ "hid": "gf-script", "innerHTML": `(function(){var l=document.createElement('link');l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@100;300";document.querySelector("head").appendChild(l);})();` }], "noscript": [{ "hid": "gf-noscript", "innerHTML": '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Raleway:wght@100;300">' }], "__dangerouslyDisableSanitizersByTagID": { "gf-script": ["innerHTML"], "gf-noscript": ["innerHTML"] } },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === "string") {
            transition = Object.assign({}, defaultTransition, { name: transition });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }
          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },
      err: null,
      dateErr: null,
      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt;
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }
        nuxt.dateErr = Date.now();
        nuxt.err = err;
        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }
        return err;
      }
    }
  }, App);
  const next = ssrContext ? ssrContext.next : (location) => app.router.push(location);
  let route;
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  }
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : void 0,
    req: ssrContext ? ssrContext.req : void 0,
    res: ssrContext ? ssrContext.res : void 0,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : void 0,
    ssrContext
  });
  function inject(key, value) {
    if (!key) {
      throw new Error("inject(key, value) has no key provided");
    }
    if (value === void 0) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }
    key = "$" + key;
    app[key] = value;
    if (!app.context[key]) {
      app.context[key] = value;
    }
    const installKey = "__nuxt_" + key + "_installed__";
    if (Vue__default["default"][installKey]) {
      return;
    }
    Vue__default["default"][installKey] = true;
    Vue__default["default"].use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue__default["default"].prototype, key)) {
        Object.defineProperty(Vue__default["default"].prototype, key, {
          get() {
            return this.$root.$options[key];
          }
        });
      }
    });
  }
  inject("config", config);
  if (typeof nuxt_plugin_plugin_7846d553 === "function") {
    await nuxt_plugin_plugin_7846d553(app.context);
  }
  if (typeof nuxt_plugin_pluginserver_16a130d7 === "function") {
    await nuxt_plugin_pluginserver_16a130d7(app.context, inject);
  }
  if (typeof nuxt_plugin_image_3ac1bc38 === "function") {
    await nuxt_plugin_image_3ac1bc38(app.context, inject);
  }
  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, (err) => {
      if (!err._isRouter)
        return reject(err);
      if (err.type !== 2)
        return resolve();
      const unregister = router.afterEach(async (to, from) => {
        if (ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }
        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}
var NuxtLink = {
  name: "NuxtLink",
  extends: Vue__default["default"].component("RouterLink"),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
};
Vue__default["default"].config.optionMergeStrategies.serverPrefetch = Vue__default["default"].config.optionMergeStrategies.created;
if (!Vue__default["default"].__nuxt__fetch__mixin__) {
  Vue__default["default"].mixin(fetchMixin);
  Vue__default["default"].__nuxt__fetch__mixin__ = true;
}
if (!Vue__default["default"].__original_use__) {
  Vue__default["default"].__original_use__ = Vue__default["default"].use;
  Vue__default["default"].__install_times__ = 0;
  Vue__default["default"].use = function(plugin, ...args) {
    plugin.__nuxt_external_installed__ = Vue__default["default"]._installedPlugins.includes(plugin);
    return Vue__default["default"].__original_use__(plugin, ...args);
  };
}
if (Vue__default["default"].__install_times__ === 2) {
  Vue__default["default"].__install_times__ = 0;
  Vue__default["default"]._installedPlugins = Vue__default["default"]._installedPlugins.filter((plugin) => {
    return plugin.__nuxt_external_installed__ === true;
  });
}
Vue__default["default"].__install_times__++;
Vue__default["default"].component(NuxtLink.name, NuxtLink);
Vue__default["default"].component("NLink", NuxtLink);
if (!global.fetch) {
  global.fetch = fetch__default["default"];
}
const noopApp = () => new Vue__default["default"]({ render: (h) => h("div", { domProps: { id: "__nuxt" } }) });
const createNext = (ssrContext) => (opts) => {
  ssrContext.redirected = opts;
  if (ssrContext.target === "static" || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }
  let fullPath = withQuery(opts.path, opts.query);
  const $config = ssrContext.runtimeConfig || {};
  const routerBase = $config._app && $config._app.basePath || "/";
  if (!fullPath.startsWith("http") && (routerBase !== "/" && !fullPath.startsWith(routerBase))) {
    fullPath = joinURL(routerBase, fullPath);
  }
  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }
  ssrContext.res.writeHead(opts.status, {
    Location: normalizeURL(fullPath)
  });
  ssrContext.res.end();
};
var server = async (ssrContext) => {
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext);
  ssrContext.beforeRenderFns = [];
  ssrContext.nuxt = { layout: "default", data: [], fetch: {}, error: null, serverRendered: true, routePath: "" };
  ssrContext.fetchCounters = {};
  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;
  if (ssrContext.nuxt.config._app) {
    globalThis.__webpack_public_path__ = joinURL(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  }
  const { app, router } = await createApp(ssrContext, ssrContext.runtimeConfig.private);
  const _app = new Vue__default["default"](app);
  ssrContext.nuxt.routePath = app.context.route.path;
  ssrContext.meta = _app.$meta();
  ssrContext.asyncData = {};
  const beforeRender = async () => {
    await Promise.all(ssrContext.beforeRenderFns.map((fn) => promisify(fn, { Components, nuxtState: ssrContext.nuxt })));
  };
  const renderErrorPage = async () => {
    if (ssrContext.target === "static") {
      ssrContext.nuxt.serverRendered = false;
    }
    const layout2 = (NuxtError.options || NuxtError).layout;
    const errLayout = typeof layout2 === "function" ? layout2.call(NuxtError, app.context) : layout2;
    ssrContext.nuxt.layout = errLayout || "default";
    await _app.loadLayout(errLayout);
    _app.setLayout(errLayout);
    await beforeRender();
    return _app;
  };
  const render404Page = () => {
    app.context.error({ statusCode: 404, path: ssrContext.url, message: "This page could not be found" });
    return renderErrorPage();
  };
  const s2 = Date.now();
  const Components = getMatchedComponents(app.context.route);
  let midd = [];
  midd = midd.map((name) => {
    if (typeof name === "function") {
      return name;
    }
    if (typeof middleware[name] !== "function") {
      app.context.error({ statusCode: 500, message: "Unknown middleware " + name });
    }
    return middleware[name];
  });
  await middlewareSeries(midd, app.context);
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  let layout = Components.length ? Components[0].options.layout : NuxtError.layout;
  if (typeof layout === "function") {
    layout = layout(app.context);
  }
  await _app.loadLayout(layout);
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  midd = [];
  layout = sanitizeComponent(layout);
  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }
  Components.forEach((Component) => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map((name) => {
    if (typeof name === "function") {
      return name;
    }
    if (typeof middleware[name] !== "function") {
      app.context.error({ statusCode: 500, message: "Unknown middleware " + name });
    }
    return middleware[name];
  });
  await middlewareSeries(midd, app.context);
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  let isValid = true;
  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== "function") {
        continue;
      }
      isValid = await Component.options.validate(app.context);
      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    app.context.error({
      statusCode: validationError.statusCode || "500",
      message: validationError.message
    });
    return renderErrorPage();
  }
  if (!isValid) {
    return render404Page();
  }
  if (!Components.length) {
    return render404Page();
  }
  const asyncDatas = await Promise.all(Components.map((Component) => {
    const promises = [];
    if (Component.options.asyncData && typeof Component.options.asyncData === "function") {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then((asyncDataResult) => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    }
    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }
    return Promise.all(promises);
  }));
  if (process.env.DEBUG && asyncDatas.length)
    console.debug("Data fetching " + ssrContext.url + ": " + (Date.now() - s2) + "ms");
  ssrContext.nuxt.data = asyncDatas.map((r2) => r2[0] || {});
  if (ssrContext.redirected) {
    return noopApp();
  }
  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  await beforeRender();
  return _app;
};
const __vue2_script$h = {};
let __vue2_render$1, __vue2_staticRenderFns$1;
const __cssModules$h = {};
var __component__$h = /* @__PURE__ */ normalizeComponent(__vue2_script$h, __vue2_render$1, __vue2_staticRenderFns$1, false, __vue2_injectStyles$h, null, null, null);
function __vue2_injectStyles$h(context) {
  for (let o2 in __cssModules$h) {
    this[o2] = __cssModules$h[o2];
  }
}
__component__$h.options.__file = "pages/assignments/index.vue";
var index$j = /* @__PURE__ */ function() {
  return __component__$h.exports;
}();
var index$k = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$j
});
const __vue2_script$g = {};
let __vue2_render, __vue2_staticRenderFns;
const __cssModules$g = {};
var __component__$g = /* @__PURE__ */ normalizeComponent(__vue2_script$g, __vue2_render, __vue2_staticRenderFns, false, __vue2_injectStyles$g, null, null, null);
function __vue2_injectStyles$g(context) {
  for (let o2 in __cssModules$g) {
    this[o2] = __cssModules$g[o2];
  }
}
__component__$g.options.__file = "pages/courses/index.vue";
var index$h = /* @__PURE__ */ function() {
  return __component__$g.exports;
}();
var index$i = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$h
});
var render$f = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$f = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("p", [_vm._v("Library")])]);
}];
render$f._withStripped = true;
const __vue2_script$f = {};
const __cssModules$f = {};
var __component__$f = /* @__PURE__ */ normalizeComponent(__vue2_script$f, render$f, staticRenderFns$f, false, __vue2_injectStyles$f, null, null, null);
function __vue2_injectStyles$f(context) {
  for (let o2 in __cssModules$f) {
    this[o2] = __cssModules$f[o2];
  }
}
__component__$f.options.__file = "pages/library/index.vue";
var index$f = /* @__PURE__ */ function() {
  return __component__$f.exports;
}();
var index$g = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$f
});
var render$e = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$e = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("p", [_vm._v("Schedule")])]);
}];
render$e._withStripped = true;
const __vue2_script$e = {};
const __cssModules$e = {};
var __component__$e = /* @__PURE__ */ normalizeComponent(__vue2_script$e, render$e, staticRenderFns$e, false, __vue2_injectStyles$e, null, null, null);
function __vue2_injectStyles$e(context) {
  for (let o2 in __cssModules$e) {
    this[o2] = __cssModules$e[o2];
  }
}
__component__$e.options.__file = "pages/schedule.vue";
var schedule = /* @__PURE__ */ function() {
  return __component__$e.exports;
}();
var schedule$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": schedule
});
var render$d = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns$d = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("p", [_vm._v("Zoom")])]);
}];
render$d._withStripped = true;
const __vue2_script$d = {};
const __cssModules$d = {};
var __component__$d = /* @__PURE__ */ normalizeComponent(__vue2_script$d, render$d, staticRenderFns$d, false, __vue2_injectStyles$d, null, null, null);
function __vue2_injectStyles$d(context) {
  for (let o2 in __cssModules$d) {
    this[o2] = __cssModules$d[o2];
  }
}
__component__$d.options.__file = "pages/zoom.vue";
var zoom = /* @__PURE__ */ function() {
  return __component__$d.exports;
}();
var zoom$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": zoom
});
var render$c = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("main", [_c("h2", [_vm._v(_vm._s(_vm.posts.title))]), _c("ul", _vm._l(_vm.posts, function(post) {
    return _c("nuxt-link", { key: post.slug }, [_vm._v(" " + _vm._s(post.title) + " ")]);
  }), 1)]);
};
var staticRenderFns$c = [];
render$c._withStripped = true;
const __vue2_script$c = {
  async asyncData({ $content, params }) {
    const posts = await $content("cpnt-200");
    return {
      posts
    };
  }
};
const __cssModules$c = {};
var __component__$c = /* @__PURE__ */ normalizeComponent(__vue2_script$c, render$c, staticRenderFns$c, false, __vue2_injectStyles$c, null, null, null);
function __vue2_injectStyles$c(context) {
  for (let o2 in __cssModules$c) {
    this[o2] = __cssModules$c[o2];
  }
}
__component__$c.options.__file = "pages/courses/cpnt-200/index.vue";
var index$d = /* @__PURE__ */ function() {
  return __component__$c.exports;
}();
var index$e = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$d
});
var render$b = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("main", [_c("h2", [_vm._v(_vm._s(_vm.posts.title))]), _c("ul", _vm._l(_vm.posts, function(post) {
    return _c("nuxt-link", { key: post.slug }, [_vm._v(" " + _vm._s(post.title) + " ")]);
  }), 1)]);
};
var staticRenderFns$b = [];
render$b._withStripped = true;
const __vue2_script$b = {
  async asyncData({ $content, params }) {
    const posts = await $content("cpnt-200");
    return {
      posts
    };
  }
};
const __cssModules$b = {};
var __component__$b = /* @__PURE__ */ normalizeComponent(__vue2_script$b, render$b, staticRenderFns$b, false, __vue2_injectStyles$b, null, null, null);
function __vue2_injectStyles$b(context) {
  for (let o2 in __cssModules$b) {
    this[o2] = __cssModules$b[o2];
  }
}
__component__$b.options.__file = "pages/courses/cpnt-201/index.vue";
var index$b = /* @__PURE__ */ function() {
  return __component__$b.exports;
}();
var index$c = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$b
});
var render$a = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("main", [_c("h2", [_vm._v(_vm._s(_vm.posts.title))]), _c("ul", _vm._l(_vm.posts, function(post) {
    return _c("nuxt-link", { key: post.slug }, [_vm._v(" " + _vm._s(post.title) + " ")]);
  }), 1)]);
};
var staticRenderFns$a = [];
render$a._withStripped = true;
const __vue2_script$a = {
  async asyncData({ $content, params }) {
    const posts = await $content("cpnt-200");
    return {
      posts
    };
  }
};
const __cssModules$a = {};
var __component__$a = /* @__PURE__ */ normalizeComponent(__vue2_script$a, render$a, staticRenderFns$a, false, __vue2_injectStyles$a, null, null, null);
function __vue2_injectStyles$a(context) {
  for (let o2 in __cssModules$a) {
    this[o2] = __cssModules$a[o2];
  }
}
__component__$a.options.__file = "pages/courses/cpnt-260/index.vue";
var index$9 = /* @__PURE__ */ function() {
  return __component__$a.exports;
}();
var index$a = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$9
});
var render$9 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("main", [_c("h2", [_vm._v(_vm._s(_vm.posts.title))]), _c("ul", _vm._l(_vm.posts, function(post) {
    return _c("nuxt-link", { key: post.slug }, [_vm._v(" " + _vm._s(post.title) + " ")]);
  }), 1)]);
};
var staticRenderFns$9 = [];
render$9._withStripped = true;
const __vue2_script$9 = {
  async asyncData({ $content, params }) {
    const posts = await $content("cpnt-200");
    return {
      posts
    };
  }
};
const __cssModules$9 = {};
var __component__$9 = /* @__PURE__ */ normalizeComponent(__vue2_script$9, render$9, staticRenderFns$9, false, __vue2_injectStyles$9, null, null, null);
function __vue2_injectStyles$9(context) {
  for (let o2 in __cssModules$9) {
    this[o2] = __cssModules$9[o2];
  }
}
__component__$9.options.__file = "pages/courses/cpnt-262/index.vue";
var index$7 = /* @__PURE__ */ function() {
  return __component__$9.exports;
}();
var index$8 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$7
});
var render$8 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("main", [_c("h2", [_vm._v(_vm._s(_vm.posts.title))]), _c("ul", _vm._l(_vm.posts, function(post) {
    return _c("nuxt-link", { key: post.slug }, [_vm._v(" " + _vm._s(post.title) + " ")]);
  }), 1)]);
};
var staticRenderFns$8 = [];
render$8._withStripped = true;
const __vue2_script$8 = {
  async asyncData({ $content, params }) {
    const posts = await $content("cpnt-200");
    return {
      posts
    };
  }
};
const __cssModules$8 = {};
var __component__$8 = /* @__PURE__ */ normalizeComponent(__vue2_script$8, render$8, staticRenderFns$8, false, __vue2_injectStyles$8, null, null, null);
function __vue2_injectStyles$8(context) {
  for (let o2 in __cssModules$8) {
    this[o2] = __cssModules$8[o2];
  }
}
__component__$8.options.__file = "pages/courses/cpnt-265/index.vue";
var index$5 = /* @__PURE__ */ function() {
  return __component__$8.exports;
}();
var index$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$5
});
var render$7 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("main", [_c("h2", [_vm._v(_vm._s(_vm.posts.title))]), _c("ul", _vm._l(_vm.posts, function(post) {
    return _c("nuxt-link", { key: post.slug }, [_vm._v(" " + _vm._s(post.title) + " ")]);
  }), 1)]);
};
var staticRenderFns$7 = [];
render$7._withStripped = true;
const __vue2_script$7 = {
  async asyncData({ $content, params }) {
    const posts = await $content("cpnt-200");
    return {
      posts
    };
  }
};
const __cssModules$7 = {};
var __component__$7 = /* @__PURE__ */ normalizeComponent(__vue2_script$7, render$7, staticRenderFns$7, false, __vue2_injectStyles$7, null, null, null);
function __vue2_injectStyles$7(context) {
  for (let o2 in __cssModules$7) {
    this[o2] = __cssModules$7[o2];
  }
}
__component__$7.options.__file = "pages/courses/dsgn-270/index.vue";
var index$3 = /* @__PURE__ */ function() {
  return __component__$7.exports;
}();
var index$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$3
});
var render$6 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h2", [_vm._v(_vm._s(_vm.lesson.title))]), _c("nuxt-content", { attrs: { "document": _vm.lesson } })], 1);
};
var staticRenderFns$6 = [];
render$6._withStripped = true;
const __vue2_script$6 = defineComponent({
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`/cpnt-200/${params.slug}`).fetch();
      return {
        lesson
      };
    } catch (e2) {
      error("No lesson found");
    }
  }
});
const __cssModules$6 = {};
var __component__$6 = /* @__PURE__ */ normalizeComponent(__vue2_script$6, render$6, staticRenderFns$6, false, __vue2_injectStyles$6, null, null, null);
function __vue2_injectStyles$6(context) {
  for (let o2 in __cssModules$6) {
    this[o2] = __cssModules$6[o2];
  }
}
__component__$6.options.__file = "pages/courses/cpnt-200/_slug.vue";
var _slug$a = /* @__PURE__ */ function() {
  return __component__$6.exports;
}();
var _slug$b = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _slug$a
});
var render$5 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h2", [_vm._v(_vm._s(_vm.lesson.title))]), _c("nuxt-content", { attrs: { "document": _vm.lesson } })], 1);
};
var staticRenderFns$5 = [];
render$5._withStripped = true;
const __vue2_script$5 = defineComponent({
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`/cpnt-200/${params.slug}`).fetch();
      return {
        lesson
      };
    } catch (e2) {
      error("No lesson found");
    }
  }
});
const __cssModules$5 = {};
var __component__$5 = /* @__PURE__ */ normalizeComponent(__vue2_script$5, render$5, staticRenderFns$5, false, __vue2_injectStyles$5, null, null, null);
function __vue2_injectStyles$5(context) {
  for (let o2 in __cssModules$5) {
    this[o2] = __cssModules$5[o2];
  }
}
__component__$5.options.__file = "pages/courses/cpnt-201/_slug.vue";
var _slug$8 = /* @__PURE__ */ function() {
  return __component__$5.exports;
}();
var _slug$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _slug$8
});
var render$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h2", [_vm._v(_vm._s(_vm.lesson.title))]), _c("nuxt-content", { attrs: { "document": _vm.lesson } })], 1);
};
var staticRenderFns$4 = [];
render$4._withStripped = true;
const __vue2_script$4 = defineComponent({
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`/cpnt-200/${params.slug}`).fetch();
      return {
        lesson
      };
    } catch (e2) {
      error("No lesson found");
    }
  }
});
const __cssModules$4 = {};
var __component__$4 = /* @__PURE__ */ normalizeComponent(__vue2_script$4, render$4, staticRenderFns$4, false, __vue2_injectStyles$4, null, null, null);
function __vue2_injectStyles$4(context) {
  for (let o2 in __cssModules$4) {
    this[o2] = __cssModules$4[o2];
  }
}
__component__$4.options.__file = "pages/courses/cpnt-260/_slug.vue";
var _slug$6 = /* @__PURE__ */ function() {
  return __component__$4.exports;
}();
var _slug$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _slug$6
});
var render$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h2", [_vm._v(_vm._s(_vm.lesson.title))]), _c("nuxt-content", { attrs: { "document": _vm.lesson } })], 1);
};
var staticRenderFns$3 = [];
render$3._withStripped = true;
const __vue2_script$3 = defineComponent({
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`/cpnt-200/${params.slug}`).fetch();
      return {
        lesson
      };
    } catch (e2) {
      error("No lesson found");
    }
  }
});
const __cssModules$3 = {};
var __component__$3 = /* @__PURE__ */ normalizeComponent(__vue2_script$3, render$3, staticRenderFns$3, false, __vue2_injectStyles$3, null, null, null);
function __vue2_injectStyles$3(context) {
  for (let o2 in __cssModules$3) {
    this[o2] = __cssModules$3[o2];
  }
}
__component__$3.options.__file = "pages/courses/cpnt-262/_slug.vue";
var _slug$4 = /* @__PURE__ */ function() {
  return __component__$3.exports;
}();
var _slug$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _slug$4
});
var render$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h2", [_vm._v(_vm._s(_vm.lesson.title))]), _c("nuxt-content", { attrs: { "document": _vm.lesson } })], 1);
};
var staticRenderFns$2 = [];
render$2._withStripped = true;
const __vue2_script$2 = defineComponent({
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`/cpnt-200/${params.slug}`).fetch();
      return {
        lesson
      };
    } catch (e2) {
      error("No lesson found");
    }
  }
});
const __cssModules$2 = {};
var __component__$2 = /* @__PURE__ */ normalizeComponent(__vue2_script$2, render$2, staticRenderFns$2, false, __vue2_injectStyles$2, null, null, null);
function __vue2_injectStyles$2(context) {
  for (let o2 in __cssModules$2) {
    this[o2] = __cssModules$2[o2];
  }
}
__component__$2.options.__file = "pages/courses/cpnt-265/_slug.vue";
var _slug$2 = /* @__PURE__ */ function() {
  return __component__$2.exports;
}();
var _slug$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _slug$2
});
var render$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h2", [_vm._v(_vm._s(_vm.lesson.title))]), _c("nuxt-content", { attrs: { "document": _vm.lesson } })], 1);
};
var staticRenderFns$1 = [];
render$1._withStripped = true;
const __vue2_script$1 = defineComponent({
  async asyncData({ $content, params, error }) {
    try {
      const lesson = await $content(`/cpnt-200/${params.slug}`).fetch();
      return {
        lesson
      };
    } catch (e2) {
      error("No lesson found");
    }
  }
});
const __cssModules$1 = {};
var __component__$1 = /* @__PURE__ */ normalizeComponent(__vue2_script$1, render$1, staticRenderFns$1, false, __vue2_injectStyles$1, null, null, null);
function __vue2_injectStyles$1(context) {
  for (let o2 in __cssModules$1) {
    this[o2] = __cssModules$1[o2];
  }
}
__component__$1.options.__file = "pages/courses/dsgn-270/_slug.vue";
var _slug = /* @__PURE__ */ function() {
  return __component__$1.exports;
}();
var _slug$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _slug
});
var render = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  _vm._self._c || _h;
  return _vm._m(0);
};
var staticRenderFns = [function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", [_c("h1", [_vm._v("Home")])]);
}];
render._withStripped = true;
const __vue2_script = {};
const __cssModules = {};
var __component__ = /* @__PURE__ */ normalizeComponent(__vue2_script, render, staticRenderFns, false, __vue2_injectStyles, null, null, null);
function __vue2_injectStyles(context) {
  for (let o2 in __cssModules) {
    this[o2] = __cssModules[o2];
  }
}
__component__.options.__file = "pages/index.vue";
var index$1 = /* @__PURE__ */ function() {
  return __component__.exports;
}();
var index$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index$1
});
var dist = {};
Object.defineProperty(dist, "__esModule", { value: true });
const BMP = {
  validate(buffer) {
    return buffer.toString("ascii", 0, 2) === "BM";
  },
  calculate(buffer) {
    return {
      height: Math.abs(buffer.readInt32LE(22)),
      width: buffer.readUInt32LE(18)
    };
  }
};
const TYPE_ICON = 1;
const SIZE_HEADER = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(buffer, offset) {
  const value = buffer.readUInt8(offset);
  return value === 0 ? 256 : value;
}
function getImageSize(buffer, imageIndex) {
  const offset = SIZE_HEADER + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(buffer, offset + 1),
    width: getSizeFromOffset(buffer, offset)
  };
}
const ICO = {
  validate(buffer) {
    if (buffer.readUInt16LE(0) !== 0) {
      return false;
    }
    return buffer.readUInt16LE(2) === TYPE_ICON;
  },
  calculate(buffer) {
    const nbImages = buffer.readUInt16LE(4);
    const imageSize = getImageSize(buffer, 0);
    if (nbImages === 1) {
      return imageSize;
    }
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize(buffer, imageIndex));
    }
    const result = {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
    return result;
  }
};
const TYPE_CURSOR = 2;
const CUR = {
  validate(buffer) {
    if (buffer.readUInt16LE(0) !== 0) {
      return false;
    }
    return buffer.readUInt16LE(2) === TYPE_CURSOR;
  },
  calculate(buffer) {
    return ICO.calculate(buffer);
  }
};
const DDS = {
  validate(buffer) {
    return buffer.readUInt32LE(0) === 542327876;
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32LE(12),
      width: buffer.readUInt32LE(16)
    };
  }
};
const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate(buffer) {
    const signature = buffer.toString("ascii", 0, 6);
    return gifRegexp.test(signature);
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt16LE(8),
      width: buffer.readUInt16LE(6)
    };
  }
};
const SIZE_HEADER$1 = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  icp6: 64,
  ic12: 32,
  it32: 128,
  t8mk: 128,
  ic07: 128,
  ic08: 256,
  ic13: 256,
  ic09: 512,
  ic14: 512,
  ic10: 1024
};
function readImageHeader(buffer, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    buffer.toString("ascii", imageOffset, imageLengthOffset),
    buffer.readUInt32BE(imageLengthOffset)
  ];
}
function getImageSize$1(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate(buffer) {
    return buffer.toString("ascii", 0, 4) === "icns";
  },
  calculate(buffer) {
    const bufferLength = buffer.length;
    const fileLength = buffer.readUInt32BE(FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER$1;
    let imageHeader = readImageHeader(buffer, imageOffset);
    let imageSize = getImageSize$1(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) {
      return imageSize;
    }
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < bufferLength) {
      imageHeader = readImageHeader(buffer, imageOffset);
      imageSize = getImageSize$1(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};
const J2C = {
  validate(buffer) {
    return buffer.toString("hex", 0, 4) === "ff4fff51";
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32BE(12),
      width: buffer.readUInt32BE(8)
    };
  }
};
const BoxTypes = {
  ftyp: "66747970",
  ihdr: "69686472",
  jp2h: "6a703268",
  jp__: "6a502020",
  rreq: "72726571",
  xml_: "786d6c20"
};
const calculateRREQLength = (box) => {
  const unit = box.readUInt8(0);
  let offset = 1 + 2 * unit;
  const numStdFlags = box.readUInt16BE(offset);
  const flagsLength = numStdFlags * (2 + unit);
  offset = offset + 2 + flagsLength;
  const numVendorFeatures = box.readUInt16BE(offset);
  const featuresLength = numVendorFeatures * (16 + unit);
  return offset + 2 + featuresLength;
};
const parseIHDR = (box) => {
  return {
    height: box.readUInt32BE(4),
    width: box.readUInt32BE(8)
  };
};
const JP2 = {
  validate(buffer) {
    const signature = buffer.toString("hex", 4, 8);
    const signatureLength = buffer.readUInt32BE(0);
    if (signature !== BoxTypes.jp__ || signatureLength < 1) {
      return false;
    }
    const ftypeBoxStart = signatureLength + 4;
    const ftypBoxLength = buffer.readUInt32BE(signatureLength);
    const ftypBox = buffer.slice(ftypeBoxStart, ftypeBoxStart + ftypBoxLength);
    return ftypBox.toString("hex", 0, 4) === BoxTypes.ftyp;
  },
  calculate(buffer) {
    const signatureLength = buffer.readUInt32BE(0);
    const ftypBoxLength = buffer.readUInt16BE(signatureLength + 2);
    let offset = signatureLength + 4 + ftypBoxLength;
    const nextBoxType = buffer.toString("hex", offset, offset + 4);
    switch (nextBoxType) {
      case BoxTypes.rreq:
        const MAGIC = 4;
        offset = offset + 4 + MAGIC + calculateRREQLength(buffer.slice(offset + 4));
        return parseIHDR(buffer.slice(offset + 8, offset + 24));
      case BoxTypes.jp2h:
        return parseIHDR(buffer.slice(offset + 8, offset + 24));
      default:
        throw new TypeError("Unsupported header found: " + buffer.toString("ascii", offset, offset + 4));
    }
  }
};
function readUInt(buffer, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return buffer[methodName].call(buffer, offset);
}
const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(buffer) {
  return buffer.toString("hex", 2, 6) === EXIF_MARKER;
}
function extractSize(buffer, index2) {
  return {
    height: buffer.readUInt16BE(index2),
    width: buffer.readUInt16BE(index2 + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(buffer, index2) {
  const exifBlock = buffer.slice(APP1_DATA_SIZE_BYTES, index2);
  const byteAlign = exifBlock.toString("hex", EXIF_HEADER_BYTES, EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES);
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateBuffer(buffer, index2) {
  if (index2 > buffer.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
  if (buffer[index2] !== 255) {
    throw new TypeError("Invalid JPG, marker table corrupted");
  }
}
const JPG = {
  validate(buffer) {
    const SOIMarker = buffer.toString("hex", 0, 2);
    return SOIMarker === "ffd8";
  },
  calculate(buffer) {
    buffer = buffer.slice(4);
    let orientation;
    let next;
    while (buffer.length) {
      const i = buffer.readUInt16BE(0);
      if (isEXIF(buffer)) {
        orientation = validateExifBlock(buffer, i);
      }
      validateBuffer(buffer, i);
      next = buffer[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(buffer, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      buffer = buffer.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};
const SIGNATURE = "KTX 11";
const KTX = {
  validate(buffer) {
    return SIGNATURE === buffer.toString("ascii", 1, 7);
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32LE(40),
      width: buffer.readUInt32LE(36)
    };
  }
};
const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(buffer) {
    if (pngSignature === buffer.toString("ascii", 1, 8)) {
      let chunkName = buffer.toString("ascii", 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = buffer.toString("ascii", 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(buffer) {
    if (buffer.toString("ascii", 12, 16) === pngFriedChunkName) {
      return {
        height: buffer.readUInt32BE(36),
        width: buffer.readUInt32BE(32)
      };
    }
    return {
      height: buffer.readUInt32BE(20),
      width: buffer.readUInt32BE(16)
    };
  }
};
const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const Signatures = Object.keys(PNMTypes);
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate(buffer) {
    const signature = buffer.toString("ascii", 0, 2);
    return Signatures.includes(signature);
  },
  calculate(buffer) {
    const signature = buffer.toString("ascii", 0, 2);
    const type = PNMTypes[signature];
    const lines = buffer.toString("ascii", 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};
const PSD = {
  validate(buffer) {
    return buffer.toString("ascii", 0, 4) === "8BPS";
  },
  calculate(buffer) {
    return {
      height: buffer.readUInt32BE(14),
      width: buffer.readUInt32BE(18)
    };
  }
};
const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72
};
function parseLength(len) {
  const m = /([0-9.]+)([a-z]*)/.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(parseFloat(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = root.match(extractorRegExps.width);
  const height = root.match(extractorRegExps.height);
  const viewbox = root.match(extractorRegExps.viewbox);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  validate(buffer) {
    const str = String(buffer);
    return svgReg.test(str);
  },
  calculate(buffer) {
    const root = buffer.toString("utf8").match(extractorRegExps.root);
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};
function calculateExtended(buffer) {
  return {
    height: 1 + buffer.readUIntLE(7, 3),
    width: 1 + buffer.readUIntLE(4, 3)
  };
}
function calculateLossless(buffer) {
  return {
    height: 1 + ((buffer[4] & 15) << 10 | buffer[3] << 2 | (buffer[2] & 192) >> 6),
    width: 1 + ((buffer[2] & 63) << 8 | buffer[1])
  };
}
function calculateLossy(buffer) {
  return {
    height: buffer.readInt16LE(8) & 16383,
    width: buffer.readInt16LE(6) & 16383
  };
}
const WEBP = {
  validate(buffer) {
    const riffHeader = buffer.toString("ascii", 0, 4) === "RIFF";
    const webpHeader = buffer.toString("ascii", 8, 12) === "WEBP";
    const vp8Header = buffer.toString("ascii", 12, 15) === "VP8";
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(buffer) {
    const chunkHeader = buffer.toString("ascii", 12, 16);
    buffer = buffer.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = buffer[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(buffer);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && buffer[0] !== 47) {
      return calculateLossy(buffer);
    }
    const signature = buffer.toString("hex", 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(buffer);
    }
    throw new TypeError("Invalid WebP");
  }
};
const typeHandlers = {
  bmp: BMP,
  cur: CUR,
  dds: DDS,
  gif: GIF,
  icns: ICNS,
  ico: ICO,
  j2c: J2C,
  jp2: JP2,
  jpg: JPG,
  ktx: KTX,
  png: PNG,
  pnm: PNM,
  psd: PSD,
  svg: SVG,
  webp: WEBP
};
const getMimeType = (type) => {
  if (type === "svg") {
    return "image/svg+xml";
  }
  return `image/${type}`;
};
const keys = Object.keys(typeHandlers);
const firstBytes = {
  56: "psd",
  66: "bmp",
  68: "dds",
  71: "gif",
  73: "tiff",
  77: "tiff",
  82: "webp",
  105: "icns",
  137: "png",
  255: "jpg"
};
function detector(buffer) {
  const byte = buffer[0];
  if (byte in firstBytes) {
    const type = firstBytes[byte];
    if (typeHandlers[type].validate(buffer)) {
      return type;
    }
  }
  const finder = (key) => typeHandlers[key].validate(buffer);
  return keys.find(finder);
}
function lookup(buffer, filepath) {
  const type = detector(buffer);
  if (type && type in typeHandlers) {
    const size = typeHandlers[type].calculate(buffer, filepath);
    if (size !== void 0) {
      size.type = type;
      size.mimeType = getMimeType(type);
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type + " (file: " + filepath + ")");
}
function imageMeta(input) {
  if (Buffer.isBuffer(input)) {
    return lookup(input);
  }
  throw new Error("Input should be buffer!");
}
const types = Object.keys(typeHandlers);
var _default = dist.default = imageMeta;
var types_1 = dist.types = types;
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  types: types_1,
  "default": _default
}, [dist]));
exports["default"] = server;
