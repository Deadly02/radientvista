(function () { const l = document.createElement("link").relList; if (l && l.supports && l.supports("modulepreload")) return; for (const c of document.querySelectorAll('link[rel="modulepreload"]')) o(c); new MutationObserver(c => { for (const d of c) if (d.type === "childList") for (const h of d.addedNodes) h.tagName === "LINK" && h.rel === "modulepreload" && o(h) }).observe(document, { childList: !0, subtree: !0 }); function u(c) { const d = {}; return c.integrity && (d.integrity = c.integrity), c.referrerPolicy && (d.referrerPolicy = c.referrerPolicy), c.crossOrigin === "use-credentials" ? d.credentials = "include" : c.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d } function o(c) { if (c.ep) return; c.ep = !0; const d = u(c); fetch(c.href, d) } })(); function Oy(i) { return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i } var Nr = { exports: {} }, ol = {};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp; function X1() { if (lp) return ol; lp = 1; var i = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment"); function u(o, c, d) { var h = null; if (d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), "key" in c) { d = {}; for (var m in c) m !== "key" && (d[m] = c[m]) } else d = c; return c = d.ref, { $$typeof: i, type: o, key: h, ref: c !== void 0 ? c : null, props: d } } return ol.Fragment = l, ol.jsx = u, ol.jsxs = u, ol } var sp; function k1() { return sp || (sp = 1, Nr.exports = X1()), Nr.exports } var v = k1(), Cr = { exports: {} }, at = {};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var up; function Z1() { if (up) return at; up = 1; var i = Symbol.for("react.transitional.element"), l = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), h = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), b = Symbol.for("react.activity"), T = Symbol.iterator; function z(E) { return E === null || typeof E != "object" ? null : (E = T && E[T] || E["@@iterator"], typeof E == "function" ? E : null) } var R = { isMounted: function () { return !1 }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, U = Object.assign, G = {}; function L(E, B, X) { this.props = E, this.context = B, this.refs = G, this.updater = X || R } L.prototype.isReactComponent = {}, L.prototype.setState = function (E, B) { if (typeof E != "object" && typeof E != "function" && E != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, E, B, "setState") }, L.prototype.forceUpdate = function (E) { this.updater.enqueueForceUpdate(this, E, "forceUpdate") }; function k() { } k.prototype = L.prototype; function q(E, B, X) { this.props = E, this.context = B, this.refs = G, this.updater = X || R } var Z = q.prototype = new k; Z.constructor = q, U(Z, L.prototype), Z.isPureReactComponent = !0; var Q = Array.isArray; function nt() { } var I = { H: null, A: null, T: null, S: null }, F = Object.prototype.hasOwnProperty; function it(E, B, X) { var W = X.ref; return { $$typeof: i, type: E, key: B, ref: W !== void 0 ? W : null, props: X } } function jt(E, B) { return it(E.type, B, E.props) } function Bt(E) { return typeof E == "object" && E !== null && E.$$typeof === i } function qt(E) { var B = { "=": "=0", ":": "=2" }; return "$" + E.replace(/[=:]/g, function (X) { return B[X] }) } var qe = /\/+/g; function je(E, B) { return typeof E == "object" && E !== null && E.key != null ? qt("" + E.key) : B.toString(36) } function oe(E) { switch (E.status) { case "fulfilled": return E.value; case "rejected": throw E.reason; default: switch (typeof E.status == "string" ? E.then(nt, nt) : (E.status = "pending", E.then(function (B) { E.status === "pending" && (E.status = "fulfilled", E.value = B) }, function (B) { E.status === "pending" && (E.status = "rejected", E.reason = B) })), E.status) { case "fulfilled": return E.value; case "rejected": throw E.reason } }throw E } function O(E, B, X, W, lt) { var ot = typeof E; (ot === "undefined" || ot === "boolean") && (E = null); var xt = !1; if (E === null) xt = !0; else switch (ot) { case "bigint": case "string": case "number": xt = !0; break; case "object": switch (E.$$typeof) { case i: case l: xt = !0; break; case x: return xt = E._init, O(xt(E._payload), B, X, W, lt) } }if (xt) return lt = lt(E), xt = W === "" ? "." + je(E, 0) : W, Q(lt) ? (X = "", xt != null && (X = xt.replace(qe, "$&/") + "/"), O(lt, B, X, "", function (pi) { return pi })) : lt != null && (Bt(lt) && (lt = jt(lt, X + (lt.key == null || E && E.key === lt.key ? "" : ("" + lt.key).replace(qe, "$&/") + "/") + xt)), B.push(lt)), 1; xt = 0; var ie = W === "" ? "." : W + ":"; if (Q(E)) for (var Ut = 0; Ut < E.length; Ut++)W = E[Ut], ot = ie + je(W, Ut), xt += O(W, B, X, ot, lt); else if (Ut = z(E), typeof Ut == "function") for (E = Ut.call(E), Ut = 0; !(W = E.next()).done;)W = W.value, ot = ie + je(W, Ut++), xt += O(W, B, X, ot, lt); else if (ot === "object") { if (typeof E.then == "function") return O(oe(E), B, X, W, lt); throw B = String(E), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.") } return xt } function H(E, B, X) { if (E == null) return E; var W = [], lt = 0; return O(E, W, "", "", function (ot) { return B.call(X, ot, lt++) }), W } function P(E) { if (E._status === -1) { var B = E._result; B = B(), B.then(function (X) { (E._status === 0 || E._status === -1) && (E._status = 1, E._result = X) }, function (X) { (E._status === 0 || E._status === -1) && (E._status = 2, E._result = X) }), E._status === -1 && (E._status = 0, E._result = B) } if (E._status === 1) return E._result.default; throw E._result } var ft = typeof reportError == "function" ? reportError : function (E) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var B = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E), error: E }); if (!window.dispatchEvent(B)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", E); return } console.error(E) }, pt = { map: H, forEach: function (E, B, X) { H(E, function () { B.apply(this, arguments) }, X) }, count: function (E) { var B = 0; return H(E, function () { B++ }), B }, toArray: function (E) { return H(E, function (B) { return B }) || [] }, only: function (E) { if (!Bt(E)) throw Error("React.Children.only expected to receive a single React element child."); return E } }; return at.Activity = b, at.Children = pt, at.Component = L, at.Fragment = u, at.Profiler = c, at.PureComponent = q, at.StrictMode = o, at.Suspense = g, at.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = I, at.__COMPILER_RUNTIME = { __proto__: null, c: function (E) { return I.H.useMemoCache(E) } }, at.cache = function (E) { return function () { return E.apply(null, arguments) } }, at.cacheSignal = function () { return null }, at.cloneElement = function (E, B, X) { if (E == null) throw Error("The argument must be a React element, but you passed " + E + "."); var W = U({}, E.props), lt = E.key; if (B != null) for (ot in B.key !== void 0 && (lt = "" + B.key), B) !F.call(B, ot) || ot === "key" || ot === "__self" || ot === "__source" || ot === "ref" && B.ref === void 0 || (W[ot] = B[ot]); var ot = arguments.length - 2; if (ot === 1) W.children = X; else if (1 < ot) { for (var xt = Array(ot), ie = 0; ie < ot; ie++)xt[ie] = arguments[ie + 2]; W.children = xt } return it(E.type, lt, W) }, at.createContext = function (E) { return E = { $$typeof: h, _currentValue: E, _currentValue2: E, _threadCount: 0, Provider: null, Consumer: null }, E.Provider = E, E.Consumer = { $$typeof: d, _context: E }, E }, at.createElement = function (E, B, X) { var W, lt = {}, ot = null; if (B != null) for (W in B.key !== void 0 && (ot = "" + B.key), B) F.call(B, W) && W !== "key" && W !== "__self" && W !== "__source" && (lt[W] = B[W]); var xt = arguments.length - 2; if (xt === 1) lt.children = X; else if (1 < xt) { for (var ie = Array(xt), Ut = 0; Ut < xt; Ut++)ie[Ut] = arguments[Ut + 2]; lt.children = ie } if (E && E.defaultProps) for (W in xt = E.defaultProps, xt) lt[W] === void 0 && (lt[W] = xt[W]); return it(E, ot, lt) }, at.createRef = function () { return { current: null } }, at.forwardRef = function (E) { return { $$typeof: m, render: E } }, at.isValidElement = Bt, at.lazy = function (E) { return { $$typeof: x, _payload: { _status: -1, _result: E }, _init: P } }, at.memo = function (E, B) { return { $$typeof: p, type: E, compare: B === void 0 ? null : B } }, at.startTransition = function (E) { var B = I.T, X = {}; I.T = X; try { var W = E(), lt = I.S; lt !== null && lt(X, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(nt, ft) } catch (ot) { ft(ot) } finally { B !== null && X.types !== null && (B.types = X.types), I.T = B } }, at.unstable_useCacheRefresh = function () { return I.H.useCacheRefresh() }, at.use = function (E) { return I.H.use(E) }, at.useActionState = function (E, B, X) { return I.H.useActionState(E, B, X) }, at.useCallback = function (E, B) { return I.H.useCallback(E, B) }, at.useContext = function (E) { return I.H.useContext(E) }, at.useDebugValue = function () { }, at.useDeferredValue = function (E, B) { return I.H.useDeferredValue(E, B) }, at.useEffect = function (E, B) { return I.H.useEffect(E, B) }, at.useEffectEvent = function (E) { return I.H.useEffectEvent(E) }, at.useId = function () { return I.H.useId() }, at.useImperativeHandle = function (E, B, X) { return I.H.useImperativeHandle(E, B, X) }, at.useInsertionEffect = function (E, B) { return I.H.useInsertionEffect(E, B) }, at.useLayoutEffect = function (E, B) { return I.H.useLayoutEffect(E, B) }, at.useMemo = function (E, B) { return I.H.useMemo(E, B) }, at.useOptimistic = function (E, B) { return I.H.useOptimistic(E, B) }, at.useReducer = function (E, B, X) { return I.H.useReducer(E, B, X) }, at.useRef = function (E) { return I.H.useRef(E) }, at.useState = function (E) { return I.H.useState(E) }, at.useSyncExternalStore = function (E, B, X) { return I.H.useSyncExternalStore(E, B, X) }, at.useTransition = function () { return I.H.useTransition() }, at.version = "19.2.4", at } var op; function Ec() { return op || (op = 1, Cr.exports = Z1()), Cr.exports } var Y = Ec(); const Q1 = Oy(Y); var zr = { exports: {} }, rl = {}, wr = { exports: {} }, Rr = {};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rp; function K1() { return rp || (rp = 1, (function (i) { function l(O, H) { var P = O.length; O.push(H); t: for (; 0 < P;) { var ft = P - 1 >>> 1, pt = O[ft]; if (0 < c(pt, H)) O[ft] = H, O[P] = pt, P = ft; else break t } } function u(O) { return O.length === 0 ? null : O[0] } function o(O) { if (O.length === 0) return null; var H = O[0], P = O.pop(); if (P !== H) { O[0] = P; t: for (var ft = 0, pt = O.length, E = pt >>> 1; ft < E;) { var B = 2 * (ft + 1) - 1, X = O[B], W = B + 1, lt = O[W]; if (0 > c(X, P)) W < pt && 0 > c(lt, X) ? (O[ft] = lt, O[W] = P, ft = W) : (O[ft] = X, O[B] = P, ft = B); else if (W < pt && 0 > c(lt, P)) O[ft] = lt, O[W] = P, ft = W; else break t } } return H } function c(O, H) { var P = O.sortIndex - H.sortIndex; return P !== 0 ? P : O.id - H.id } if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") { var d = performance; i.unstable_now = function () { return d.now() } } else { var h = Date, m = h.now(); i.unstable_now = function () { return h.now() - m } } var g = [], p = [], x = 1, b = null, T = 3, z = !1, R = !1, U = !1, G = !1, L = typeof setTimeout == "function" ? setTimeout : null, k = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null; function Z(O) { for (var H = u(p); H !== null;) { if (H.callback === null) o(p); else if (H.startTime <= O) o(p), H.sortIndex = H.expirationTime, l(g, H); else break; H = u(p) } } function Q(O) { if (U = !1, Z(O), !R) if (u(g) !== null) R = !0, nt || (nt = !0, qt()); else { var H = u(p); H !== null && oe(Q, H.startTime - O) } } var nt = !1, I = -1, F = 5, it = -1; function jt() { return G ? !0 : !(i.unstable_now() - it < F) } function Bt() { if (G = !1, nt) { var O = i.unstable_now(); it = O; var H = !0; try { t: { R = !1, U && (U = !1, k(I), I = -1), z = !0; var P = T; try { e: { for (Z(O), b = u(g); b !== null && !(b.expirationTime > O && jt());) { var ft = b.callback; if (typeof ft == "function") { b.callback = null, T = b.priorityLevel; var pt = ft(b.expirationTime <= O); if (O = i.unstable_now(), typeof pt == "function") { b.callback = pt, Z(O), H = !0; break e } b === u(g) && o(g), Z(O) } else o(g); b = u(g) } if (b !== null) H = !0; else { var E = u(p); E !== null && oe(Q, E.startTime - O), H = !1 } } break t } finally { b = null, T = P, z = !1 } H = void 0 } } finally { H ? qt() : nt = !1 } } } var qt; if (typeof q == "function") qt = function () { q(Bt) }; else if (typeof MessageChannel < "u") { var qe = new MessageChannel, je = qe.port2; qe.port1.onmessage = Bt, qt = function () { je.postMessage(null) } } else qt = function () { L(Bt, 0) }; function oe(O, H) { I = L(function () { O(i.unstable_now()) }, H) } i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function (O) { O.callback = null }, i.unstable_forceFrameRate = function (O) { 0 > O || 125 < O ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < O ? Math.floor(1e3 / O) : 5 }, i.unstable_getCurrentPriorityLevel = function () { return T }, i.unstable_next = function (O) { switch (T) { case 1: case 2: case 3: var H = 3; break; default: H = T }var P = T; T = H; try { return O() } finally { T = P } }, i.unstable_requestPaint = function () { G = !0 }, i.unstable_runWithPriority = function (O, H) { switch (O) { case 1: case 2: case 3: case 4: case 5: break; default: O = 3 }var P = T; T = O; try { return H() } finally { T = P } }, i.unstable_scheduleCallback = function (O, H, P) { var ft = i.unstable_now(); switch (typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? ft + P : ft) : P = ft, O) { case 1: var pt = -1; break; case 2: pt = 250; break; case 5: pt = 1073741823; break; case 4: pt = 1e4; break; default: pt = 5e3 }return pt = P + pt, O = { id: x++, callback: H, priorityLevel: O, startTime: P, expirationTime: pt, sortIndex: -1 }, P > ft ? (O.sortIndex = P, l(p, O), u(g) === null && O === u(p) && (U ? (k(I), I = -1) : U = !0, oe(Q, P - ft))) : (O.sortIndex = pt, l(g, O), R || z || (R = !0, nt || (nt = !0, qt()))), O }, i.unstable_shouldYield = jt, i.unstable_wrapCallback = function (O) { var H = T; return function () { var P = T; T = H; try { return O.apply(this, arguments) } finally { T = P } } } })(Rr)), Rr } var cp; function J1() { return cp || (cp = 1, wr.exports = K1()), wr.exports } var Or = { exports: {} }, ne = {};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fp; function F1() { if (fp) return ne; fp = 1; var i = Ec(); function l(g) { var p = "https://react.dev/errors/" + g; if (1 < arguments.length) { p += "?args[]=" + encodeURIComponent(arguments[1]); for (var x = 2; x < arguments.length; x++)p += "&args[]=" + encodeURIComponent(arguments[x]) } return "Minified React error #" + g + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } function u() { } var o = { d: { f: u, r: function () { throw Error(l(522)) }, D: u, C: u, L: u, m: u, X: u, S: u, M: u }, p: 0, findDOMNode: null }, c = Symbol.for("react.portal"); function d(g, p, x) { var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: c, key: b == null ? null : "" + b, children: g, containerInfo: p, implementation: x } } var h = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE; function m(g, p) { if (g === "font") return ""; if (typeof p == "string") return p === "use-credentials" ? p : "" } return ne.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, ne.createPortal = function (g, p) { var x = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11) throw Error(l(299)); return d(g, p, null, x) }, ne.flushSync = function (g) { var p = h.T, x = o.p; try { if (h.T = null, o.p = 2, g) return g() } finally { h.T = p, o.p = x, o.d.f() } }, ne.preconnect = function (g, p) { typeof g == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, o.d.C(g, p)) }, ne.prefetchDNS = function (g) { typeof g == "string" && o.d.D(g) }, ne.preinit = function (g, p) { if (typeof g == "string" && p && typeof p.as == "string") { var x = p.as, b = m(x, p.crossOrigin), T = typeof p.integrity == "string" ? p.integrity : void 0, z = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0; x === "style" ? o.d.S(g, typeof p.precedence == "string" ? p.precedence : void 0, { crossOrigin: b, integrity: T, fetchPriority: z }) : x === "script" && o.d.X(g, { crossOrigin: b, integrity: T, fetchPriority: z, nonce: typeof p.nonce == "string" ? p.nonce : void 0 }) } }, ne.preinitModule = function (g, p) { if (typeof g == "string") if (typeof p == "object" && p !== null) { if (p.as == null || p.as === "script") { var x = m(p.as, p.crossOrigin); o.d.M(g, { crossOrigin: x, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0 }) } } else p == null && o.d.M(g) }, ne.preload = function (g, p) { if (typeof g == "string" && typeof p == "object" && p !== null && typeof p.as == "string") { var x = p.as, b = m(x, p.crossOrigin); o.d.L(g, x, { crossOrigin: b, integrity: typeof p.integrity == "string" ? p.integrity : void 0, nonce: typeof p.nonce == "string" ? p.nonce : void 0, type: typeof p.type == "string" ? p.type : void 0, fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0, referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0, imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0, imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0, media: typeof p.media == "string" ? p.media : void 0 }) } }, ne.preloadModule = function (g, p) { if (typeof g == "string") if (p) { var x = m(p.as, p.crossOrigin); o.d.m(g, { as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0, crossOrigin: x, integrity: typeof p.integrity == "string" ? p.integrity : void 0 }) } else o.d.m(g) }, ne.requestFormReset = function (g) { o.d.r(g) }, ne.unstable_batchedUpdates = function (g, p) { return g(p) }, ne.useFormState = function (g, p, x) { return h.H.useFormState(g, p, x) }, ne.useFormStatus = function () { return h.H.useHostTransitionStatus() }, ne.version = "19.2.4", ne } var hp; function W1() { if (hp) return Or.exports; hp = 1; function i() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i) } catch (l) { console.error(l) } } return i(), Or.exports = F1(), Or.exports }/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dp; function P1() {
  if (dp) return rl; dp = 1; var i = J1(), l = Ec(), u = W1(); function o(t) { var e = "https://react.dev/errors/" + t; if (1 < arguments.length) { e += "?args[]=" + encodeURIComponent(arguments[1]); for (var n = 2; n < arguments.length; n++)e += "&args[]=" + encodeURIComponent(arguments[n]) } return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings." } function c(t) { return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) } function d(t) { var e = t, n = t; if (t.alternate) for (; e.return;)e = e.return; else { t = e; do e = t, (e.flags & 4098) !== 0 && (n = e.return), t = e.return; while (t) } return e.tag === 3 ? n : null } function h(t) { if (t.tag === 13) { var e = t.memoizedState; if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated } return null } function m(t) { if (t.tag === 31) { var e = t.memoizedState; if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated } return null } function g(t) { if (d(t) !== t) throw Error(o(188)) } function p(t) { var e = t.alternate; if (!e) { if (e = d(t), e === null) throw Error(o(188)); return e !== t ? null : t } for (var n = t, a = e; ;) { var s = n.return; if (s === null) break; var r = s.alternate; if (r === null) { if (a = s.return, a !== null) { n = a; continue } break } if (s.child === r.child) { for (r = s.child; r;) { if (r === n) return g(s), t; if (r === a) return g(s), e; r = r.sibling } throw Error(o(188)) } if (n.return !== a.return) n = s, a = r; else { for (var f = !1, y = s.child; y;) { if (y === n) { f = !0, n = s, a = r; break } if (y === a) { f = !0, a = s, n = r; break } y = y.sibling } if (!f) { for (y = r.child; y;) { if (y === n) { f = !0, n = r, a = s; break } if (y === a) { f = !0, a = r, n = s; break } y = y.sibling } if (!f) throw Error(o(189)) } } if (n.alternate !== a) throw Error(o(190)) } if (n.tag !== 3) throw Error(o(188)); return n.stateNode.current === n ? t : e } function x(t) { var e = t.tag; if (e === 5 || e === 26 || e === 27 || e === 6) return t; for (t = t.child; t !== null;) { if (e = x(t), e !== null) return e; t = t.sibling } return null } var b = Object.assign, T = Symbol.for("react.element"), z = Symbol.for("react.transitional.element"), R = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), G = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), k = Symbol.for("react.consumer"), q = Symbol.for("react.context"), Z = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), nt = Symbol.for("react.suspense_list"), I = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), it = Symbol.for("react.activity"), jt = Symbol.for("react.memo_cache_sentinel"), Bt = Symbol.iterator; function qt(t) { return t === null || typeof t != "object" ? null : (t = Bt && t[Bt] || t["@@iterator"], typeof t == "function" ? t : null) } var qe = Symbol.for("react.client.reference"); function je(t) { if (t == null) return null; if (typeof t == "function") return t.$$typeof === qe ? null : t.displayName || t.name || null; if (typeof t == "string") return t; switch (t) { case U: return "Fragment"; case L: return "Profiler"; case G: return "StrictMode"; case Q: return "Suspense"; case nt: return "SuspenseList"; case it: return "Activity" }if (typeof t == "object") switch (t.$$typeof) { case R: return "Portal"; case q: return t.displayName || "Context"; case k: return (t._context.displayName || "Context") + ".Consumer"; case Z: var e = t.render; return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t; case I: return e = t.displayName || null, e !== null ? e : je(t.type) || "Memo"; case F: e = t._payload, t = t._init; try { return je(t(e)) } catch { } }return null } var oe = Array.isArray, O = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = u.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = { pending: !1, data: null, method: null, action: null }, ft = [], pt = -1; function E(t) { return { current: t } } function B(t) { 0 > pt || (t.current = ft[pt], ft[pt] = null, pt--) } function X(t, e) { pt++, ft[pt] = t.current, t.current = e } var W = E(null), lt = E(null), ot = E(null), xt = E(null); function ie(t, e) { switch (X(ot, e), X(lt, t), X(W, null), e.nodeType) { case 9: case 11: t = (t = e.documentElement) && (t = t.namespaceURI) ? Nm(t) : 0; break; default: if (t = e.tagName, e = e.namespaceURI) e = Nm(e), t = Cm(e, t); else switch (t) { case "svg": t = 1; break; case "math": t = 2; break; default: t = 0 } }B(W), X(W, t) } function Ut() { B(W), B(lt), B(ot) } function pi(t) { t.memoizedState !== null && X(xt, t); var e = W.current, n = Cm(e, t.type); e !== n && (X(lt, t), X(W, n)) } function jl(t) { lt.current === t && (B(W), B(lt)), xt.current === t && (B(xt), il._currentValue = P) } var ru, af; function $n(t) {
    if (ru === void 0) try { throw Error() } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/); ru = e && e[1] || "", af = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : ""
    } return `
`+ ru + t + af
  } var cu = !1; function fu(t, e) {
    if (!t || cu) return ""; cu = !0; var n = Error.prepareStackTrace; Error.prepareStackTrace = void 0; try {
      var a = { DetermineComponentFrameRoot: function () { try { if (e) { var _ = function () { throw Error() }; if (Object.defineProperty(_.prototype, "props", { set: function () { throw Error() } }), typeof Reflect == "object" && Reflect.construct) { try { Reflect.construct(_, []) } catch (C) { var N = C } Reflect.construct(t, [], _) } else { try { _.call() } catch (C) { N = C } t.call(_.prototype) } } else { try { throw Error() } catch (C) { N = C } (_ = t()) && typeof _.catch == "function" && _.catch(function () { }) } } catch (C) { if (C && N && typeof C.stack == "string") return [C.stack, N.stack] } return [null, null] } }; a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot"; var s = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name"); s && s.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", { value: "DetermineComponentFrameRoot" }); var r = a.DetermineComponentFrameRoot(), f = r[0], y = r[1]; if (f && y) {
        var S = f.split(`
`), D = y.split(`
`); for (s = a = 0; a < S.length && !S[a].includes("DetermineComponentFrameRoot");)a++; for (; s < D.length && !D[s].includes("DetermineComponentFrameRoot");)s++; if (a === S.length || s === D.length) for (a = S.length - 1, s = D.length - 1; 1 <= a && 0 <= s && S[a] !== D[s];)s--; for (; 1 <= a && 0 <= s; a--, s--)if (S[a] !== D[s]) {
          if (a !== 1 || s !== 1) do if (a--, s--, 0 > s || S[a] !== D[s]) {
            var w = `
`+ S[a].replace(" at new ", " at "); return t.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", t.displayName)), w
          } while (1 <= a && 0 <= s); break
        }
      }
    } finally { cu = !1, Error.prepareStackTrace = n } return (n = t ? t.displayName || t.name : "") ? $n(n) : ""
  } function b0(t, e) { switch (t.tag) { case 26: case 27: case 5: return $n(t.type); case 16: return $n("Lazy"); case 13: return t.child !== e && e !== null ? $n("Suspense Fallback") : $n("Suspense"); case 19: return $n("SuspenseList"); case 0: case 15: return fu(t.type, !1); case 11: return fu(t.type.render, !1); case 1: return fu(t.type, !0); case 31: return $n("Activity"); default: return "" } } function lf(t) {
    try { var e = "", n = null; do e += b0(t, n), n = t, t = t.return; while (t); return e } catch (a) {
      return `
Error generating stack: `+ a.message + `
`+ a.stack
    }
  } var hu = Object.prototype.hasOwnProperty, du = i.unstable_scheduleCallback, mu = i.unstable_cancelCallback, S0 = i.unstable_shouldYield, T0 = i.unstable_requestPaint, ye = i.unstable_now, A0 = i.unstable_getCurrentPriorityLevel, sf = i.unstable_ImmediatePriority, uf = i.unstable_UserBlockingPriority, Dl = i.unstable_NormalPriority, E0 = i.unstable_LowPriority, of = i.unstable_IdlePriority, M0 = i.log, j0 = i.unstable_setDisableYieldValue, yi = null, ge = null; function bn(t) { if (typeof M0 == "function" && j0(t), ge && typeof ge.setStrictMode == "function") try { ge.setStrictMode(yi, t) } catch { } } var ve = Math.clz32 ? Math.clz32 : C0, D0 = Math.log, N0 = Math.LN2; function C0(t) { return t >>>= 0, t === 0 ? 32 : 31 - (D0(t) / N0 | 0) | 0 } var Nl = 256, Cl = 262144, zl = 4194304; function In(t) { var e = t & 42; if (e !== 0) return e; switch (t & -t) { case 1: return 1; case 2: return 2; case 4: return 4; case 8: return 8; case 16: return 16; case 32: return 32; case 64: return 64; case 128: return 128; case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: return t & 261888; case 262144: case 524288: case 1048576: case 2097152: return t & 3932160; case 4194304: case 8388608: case 16777216: case 33554432: return t & 62914560; case 67108864: return 67108864; case 134217728: return 134217728; case 268435456: return 268435456; case 536870912: return 536870912; case 1073741824: return 0; default: return t } } function wl(t, e, n) { var a = t.pendingLanes; if (a === 0) return 0; var s = 0, r = t.suspendedLanes, f = t.pingedLanes; t = t.warmLanes; var y = a & 134217727; return y !== 0 ? (a = y & ~r, a !== 0 ? s = In(a) : (f &= y, f !== 0 ? s = In(f) : n || (n = y & ~t, n !== 0 && (s = In(n))))) : (y = a & ~r, y !== 0 ? s = In(y) : f !== 0 ? s = In(f) : n || (n = a & ~t, n !== 0 && (s = In(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & r) === 0 && (r = s & -s, n = e & -e, r >= n || r === 32 && (n & 4194048) !== 0) ? e : s } function gi(t, e) { return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0 } function z0(t, e) { switch (t) { case 1: case 2: case 4: case 8: case 64: return e + 250; case 16: case 32: case 128: case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: return e + 5e3; case 4194304: case 8388608: case 16777216: case 33554432: return -1; case 67108864: case 134217728: case 268435456: case 536870912: case 1073741824: return -1; default: return -1 } } function rf() { var t = zl; return zl <<= 1, (zl & 62914560) === 0 && (zl = 4194304), t } function pu(t) { for (var e = [], n = 0; 31 > n; n++)e.push(t); return e } function vi(t, e) { t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0) } function w0(t, e, n, a, s, r) { var f = t.pendingLanes; t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0; var y = t.entanglements, S = t.expirationTimes, D = t.hiddenUpdates; for (n = f & ~n; 0 < n;) { var w = 31 - ve(n), _ = 1 << w; y[w] = 0, S[w] = -1; var N = D[w]; if (N !== null) for (D[w] = null, w = 0; w < N.length; w++) { var C = N[w]; C !== null && (C.lane &= -536870913) } n &= ~_ } a !== 0 && cf(t, a, 0), r !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(f & ~e)) } function cf(t, e, n) { t.pendingLanes |= e, t.suspendedLanes &= ~e; var a = 31 - ve(e); t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930 } function ff(t, e) { var n = t.entangledLanes |= e; for (t = t.entanglements; n;) { var a = 31 - ve(n), s = 1 << a; s & e | t[a] & e && (t[a] |= e), n &= ~s } } function hf(t, e) { var n = e & -e; return n = (n & 42) !== 0 ? 1 : yu(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n } function yu(t) { switch (t) { case 2: t = 1; break; case 8: t = 4; break; case 32: t = 16; break; case 256: case 512: case 1024: case 2048: case 4096: case 8192: case 16384: case 32768: case 65536: case 131072: case 262144: case 524288: case 1048576: case 2097152: case 4194304: case 8388608: case 16777216: case 33554432: t = 128; break; case 268435456: t = 134217728; break; default: t = 0 }return t } function gu(t) { return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2 } function df() { var t = H.p; return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : $m(t.type)) } function mf(t, e) { var n = H.p; try { return H.p = t, e() } finally { H.p = n } } var Sn = Math.random().toString(36).slice(2), Wt = "__reactFiber$" + Sn, re = "__reactProps$" + Sn, Ta = "__reactContainer$" + Sn, vu = "__reactEvents$" + Sn, R0 = "__reactListeners$" + Sn, O0 = "__reactHandles$" + Sn, pf = "__reactResources$" + Sn, xi = "__reactMarker$" + Sn; function xu(t) { delete t[Wt], delete t[re], delete t[vu], delete t[R0], delete t[O0] } function Aa(t) { var e = t[Wt]; if (e) return e; for (var n = t.parentNode; n;) { if (e = n[Ta] || n[Wt]) { if (n = e.alternate, e.child !== null || n !== null && n.child !== null) for (t = Bm(t); t !== null;) { if (n = t[Wt]) return n; t = Bm(t) } return e } t = n, n = t.parentNode } return null } function Ea(t) { if (t = t[Wt] || t[Ta]) { var e = t.tag; if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3) return t } return null } function bi(t) { var e = t.tag; if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode; throw Error(o(33)) } function Ma(t) { var e = t[pf]; return e || (e = t[pf] = { hoistableStyles: new Map, hoistableScripts: new Map }), e } function Jt(t) { t[xi] = !0 } var yf = new Set, gf = {}; function ta(t, e) { ja(t, e), ja(t + "Capture", e) } function ja(t, e) { for (gf[t] = e, t = 0; t < e.length; t++)yf.add(e[t]) } var V0 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), vf = {}, xf = {}; function _0(t) { return hu.call(xf, t) ? !0 : hu.call(vf, t) ? !1 : V0.test(t) ? xf[t] = !0 : (vf[t] = !0, !1) } function Rl(t, e, n) { if (_0(e)) if (n === null) t.removeAttribute(e); else { switch (typeof n) { case "undefined": case "function": case "symbol": t.removeAttribute(e); return; case "boolean": var a = e.toLowerCase().slice(0, 5); if (a !== "data-" && a !== "aria-") { t.removeAttribute(e); return } }t.setAttribute(e, "" + n) } } function Ol(t, e, n) { if (n === null) t.removeAttribute(e); else { switch (typeof n) { case "undefined": case "function": case "symbol": case "boolean": t.removeAttribute(e); return }t.setAttribute(e, "" + n) } } function $e(t, e, n, a) { if (a === null) t.removeAttribute(n); else { switch (typeof a) { case "undefined": case "function": case "symbol": case "boolean": t.removeAttribute(n); return }t.setAttributeNS(e, n, "" + a) } } function De(t) { switch (typeof t) { case "bigint": case "boolean": case "number": case "string": case "undefined": return t; case "object": return t; default: return "" } } function bf(t) { var e = t.type; return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio") } function B0(t, e, n) { var a = Object.getOwnPropertyDescriptor(t.constructor.prototype, e); if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") { var s = a.get, r = a.set; return Object.defineProperty(t, e, { configurable: !0, get: function () { return s.call(this) }, set: function (f) { n = "" + f, r.call(this, f) } }), Object.defineProperty(t, e, { enumerable: a.enumerable }), { getValue: function () { return n }, setValue: function (f) { n = "" + f }, stopTracking: function () { t._valueTracker = null, delete t[e] } } } } function bu(t) { if (!t._valueTracker) { var e = bf(t) ? "checked" : "value"; t._valueTracker = B0(t, e, "" + t[e]) } } function Sf(t) { if (!t) return !1; var e = t._valueTracker; if (!e) return !0; var n = e.getValue(), a = ""; return t && (a = bf(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1 } function Vl(t) { if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null; try { return t.activeElement || t.body } catch { return t.body } } var U0 = /[\n"\\]/g; function Ne(t) { return t.replace(U0, function (e) { return "\\" + e.charCodeAt(0).toString(16) + " " }) } function Su(t, e, n, a, s, r, f, y) { t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + De(e)) : t.value !== "" + De(e) && (t.value = "" + De(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? Tu(t, f, De(e)) : n != null ? Tu(t, f, De(n)) : a != null && t.removeAttribute("value"), s == null && r != null && (t.defaultChecked = !!r), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? t.name = "" + De(y) : t.removeAttribute("name") } function Tf(t, e, n, a, s, r, f, y) { if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (t.type = r), e != null || n != null) { if (!(r !== "submit" && r !== "reset" || e != null)) { bu(t); return } n = n != null ? "" + De(n) : "", e = e != null ? "" + De(e) : n, y || e === t.value || (t.value = e), t.defaultValue = e } a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = y ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), bu(t) } function Tu(t, e, n) { e === "number" && Vl(t.ownerDocument) === t || t.defaultValue === "" + n || (t.defaultValue = "" + n) } function Da(t, e, n, a) { if (t = t.options, e) { e = {}; for (var s = 0; s < n.length; s++)e["$" + n[s]] = !0; for (n = 0; n < t.length; n++)s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && a && (t[n].defaultSelected = !0) } else { for (n = "" + De(n), e = null, s = 0; s < t.length; s++) { if (t[s].value === n) { t[s].selected = !0, a && (t[s].defaultSelected = !0); return } e !== null || t[s].disabled || (e = t[s]) } e !== null && (e.selected = !0) } } function Af(t, e, n) { if (e != null && (e = "" + De(e), e !== t.value && (t.value = e), n == null)) { t.defaultValue !== e && (t.defaultValue = e); return } t.defaultValue = n != null ? "" + De(n) : "" } function Ef(t, e, n, a) { if (e == null) { if (a != null) { if (n != null) throw Error(o(92)); if (oe(a)) { if (1 < a.length) throw Error(o(93)); a = a[0] } n = a } n == null && (n = ""), e = n } n = De(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), bu(t) } function Na(t, e) { if (e) { var n = t.firstChild; if (n && n === t.lastChild && n.nodeType === 3) { n.nodeValue = e; return } } t.textContent = e } var L0 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" ")); function Mf(t, e, n) { var a = e.indexOf("--") === 0; n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || L0.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px" } function jf(t, e, n) { if (e != null && typeof e != "object") throw Error(o(62)); if (t = t.style, n != null) { for (var a in n) !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = ""); for (var s in e) a = e[s], e.hasOwnProperty(s) && n[s] !== a && Mf(t, s, a) } else for (var r in e) e.hasOwnProperty(r) && Mf(t, r, e[r]) } function Au(t) { if (t.indexOf("-") === -1) return !1; switch (t) { case "annotation-xml": case "color-profile": case "font-face": case "font-face-src": case "font-face-uri": case "font-face-format": case "font-face-name": case "missing-glyph": return !1; default: return !0 } } var H0 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]]), q0 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i; function _l(t) { return q0.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t } function Ie() { } var Eu = null; function Mu(t) { return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t } var Ca = null, za = null; function Df(t) { var e = Ea(t); if (e && (t = e.stateNode)) { var n = t[re] || null; t: switch (t = e.stateNode, e.type) { case "input": if (Su(t, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name), e = n.name, n.type === "radio" && e != null) { for (n = t; n.parentNode;)n = n.parentNode; for (n = n.querySelectorAll('input[name="' + Ne("" + e) + '"][type="radio"]'), e = 0; e < n.length; e++) { var a = n[e]; if (a !== t && a.form === t.form) { var s = a[re] || null; if (!s) throw Error(o(90)); Su(a, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name) } } for (e = 0; e < n.length; e++)a = n[e], a.form === t.form && Sf(a) } break t; case "textarea": Af(t, n.value, n.defaultValue); break t; case "select": e = n.value, e != null && Da(t, !!n.multiple, e, !1) } } } var ju = !1; function Nf(t, e, n) { if (ju) return t(e, n); ju = !0; try { var a = t(e); return a } finally { if (ju = !1, (Ca !== null || za !== null) && (Ts(), Ca && (e = Ca, t = za, za = Ca = null, Df(e), t))) for (e = 0; e < t.length; e++)Df(t[e]) } } function Si(t, e) { var n = t.stateNode; if (n === null) return null; var a = n[re] || null; if (a === null) return null; n = a[e]; t: switch (e) { case "onClick": case "onClickCapture": case "onDoubleClick": case "onDoubleClickCapture": case "onMouseDown": case "onMouseDownCapture": case "onMouseMove": case "onMouseMoveCapture": case "onMouseUp": case "onMouseUpCapture": case "onMouseEnter": (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a; break t; default: t = !1 }if (t) return null; if (n && typeof n != "function") throw Error(o(231, e, typeof n)); return n } var tn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Du = !1; if (tn) try { var Ti = {}; Object.defineProperty(Ti, "passive", { get: function () { Du = !0 } }), window.addEventListener("test", Ti, Ti), window.removeEventListener("test", Ti, Ti) } catch { Du = !1 } var Tn = null, Nu = null, Bl = null; function Cf() { if (Bl) return Bl; var t, e = Nu, n = e.length, a, s = "value" in Tn ? Tn.value : Tn.textContent, r = s.length; for (t = 0; t < n && e[t] === s[t]; t++); var f = n - t; for (a = 1; a <= f && e[n - a] === s[r - a]; a++); return Bl = s.slice(t, 1 < a ? 1 - a : void 0) } function Ul(t) { var e = t.keyCode; return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0 } function Ll() { return !0 } function zf() { return !1 } function ce(t) { function e(n, a, s, r, f) { this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = r, this.target = f, this.currentTarget = null; for (var y in t) t.hasOwnProperty(y) && (n = t[y], this[y] = n ? n(r) : r[y]); return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? Ll : zf, this.isPropagationStopped = zf, this } return b(e.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Ll) }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Ll) }, persist: function () { }, isPersistent: Ll }), e } var ea = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (t) { return t.timeStamp || Date.now() }, defaultPrevented: 0, isTrusted: 0 }, Hl = ce(ea), Ai = b({}, ea, { view: 0, detail: 0 }), G0 = ce(Ai), Cu, zu, Ei, ql = b({}, Ai, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ru, button: 0, buttons: 0, relatedTarget: function (t) { return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget }, movementX: function (t) { return "movementX" in t ? t.movementX : (t !== Ei && (Ei && t.type === "mousemove" ? (Cu = t.screenX - Ei.screenX, zu = t.screenY - Ei.screenY) : zu = Cu = 0, Ei = t), Cu) }, movementY: function (t) { return "movementY" in t ? t.movementY : zu } }), wf = ce(ql), Y0 = b({}, ql, { dataTransfer: 0 }), X0 = ce(Y0), k0 = b({}, Ai, { relatedTarget: 0 }), wu = ce(k0), Z0 = b({}, ea, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Q0 = ce(Z0), K0 = b({}, ea, { clipboardData: function (t) { return "clipboardData" in t ? t.clipboardData : window.clipboardData } }), J0 = ce(K0), F0 = b({}, ea, { data: 0 }), Rf = ce(F0), W0 = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, P0 = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, $0 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" }; function I0(t) { var e = this.nativeEvent; return e.getModifierState ? e.getModifierState(t) : (t = $0[t]) ? !!e[t] : !1 } function Ru() { return I0 } var tv = b({}, Ai, { key: function (t) { if (t.key) { var e = W0[t.key] || t.key; if (e !== "Unidentified") return e } return t.type === "keypress" ? (t = Ul(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? P0[t.keyCode] || "Unidentified" : "" }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ru, charCode: function (t) { return t.type === "keypress" ? Ul(t) : 0 }, keyCode: function (t) { return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0 }, which: function (t) { return t.type === "keypress" ? Ul(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0 } }), ev = ce(tv), nv = b({}, ql, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Of = ce(nv), av = b({}, Ai, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ru }), iv = ce(av), lv = b({}, ea, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sv = ce(lv), uv = b({}, ql, { deltaX: function (t) { return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0 }, deltaY: function (t) { return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0 }, deltaZ: 0, deltaMode: 0 }), ov = ce(uv), rv = b({}, ea, { newState: 0, oldState: 0 }), cv = ce(rv), fv = [9, 13, 27, 32], Ou = tn && "CompositionEvent" in window, Mi = null; tn && "documentMode" in document && (Mi = document.documentMode); var hv = tn && "TextEvent" in window && !Mi, Vf = tn && (!Ou || Mi && 8 < Mi && 11 >= Mi), _f = " ", Bf = !1; function Uf(t, e) { switch (t) { case "keyup": return fv.indexOf(e.keyCode) !== -1; case "keydown": return e.keyCode !== 229; case "keypress": case "mousedown": case "focusout": return !0; default: return !1 } } function Lf(t) { return t = t.detail, typeof t == "object" && "data" in t ? t.data : null } var wa = !1; function dv(t, e) { switch (t) { case "compositionend": return Lf(e); case "keypress": return e.which !== 32 ? null : (Bf = !0, _f); case "textInput": return t = e.data, t === _f && Bf ? null : t; default: return null } } function mv(t, e) { if (wa) return t === "compositionend" || !Ou && Uf(t, e) ? (t = Cf(), Bl = Nu = Tn = null, wa = !1, t) : null; switch (t) { case "paste": return null; case "keypress": if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) { if (e.char && 1 < e.char.length) return e.char; if (e.which) return String.fromCharCode(e.which) } return null; case "compositionend": return Vf && e.locale !== "ko" ? null : e.data; default: return null } } var pv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }; function Hf(t) { var e = t && t.nodeName && t.nodeName.toLowerCase(); return e === "input" ? !!pv[t.type] : e === "textarea" } function qf(t, e, n, a) { Ca ? za ? za.push(a) : za = [a] : Ca = a, e = Cs(e, "onChange"), 0 < e.length && (n = new Hl("onChange", "change", null, n, a), t.push({ event: n, listeners: e })) } var ji = null, Di = null; function yv(t) { Tm(t, 0) } function Gl(t) { var e = bi(t); if (Sf(e)) return t } function Gf(t, e) { if (t === "change") return e } var Yf = !1; if (tn) { var Vu; if (tn) { var _u = "oninput" in document; if (!_u) { var Xf = document.createElement("div"); Xf.setAttribute("oninput", "return;"), _u = typeof Xf.oninput == "function" } Vu = _u } else Vu = !1; Yf = Vu && (!document.documentMode || 9 < document.documentMode) } function kf() { ji && (ji.detachEvent("onpropertychange", Zf), Di = ji = null) } function Zf(t) { if (t.propertyName === "value" && Gl(Di)) { var e = []; qf(e, Di, t, Mu(t)), Nf(yv, e) } } function gv(t, e, n) { t === "focusin" ? (kf(), ji = e, Di = n, ji.attachEvent("onpropertychange", Zf)) : t === "focusout" && kf() } function vv(t) { if (t === "selectionchange" || t === "keyup" || t === "keydown") return Gl(Di) } function xv(t, e) { if (t === "click") return Gl(e) } function bv(t, e) { if (t === "input" || t === "change") return Gl(e) } function Sv(t, e) { return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e } var xe = typeof Object.is == "function" ? Object.is : Sv; function Ni(t, e) { if (xe(t, e)) return !0; if (typeof t != "object" || t === null || typeof e != "object" || e === null) return !1; var n = Object.keys(t), a = Object.keys(e); if (n.length !== a.length) return !1; for (a = 0; a < n.length; a++) { var s = n[a]; if (!hu.call(e, s) || !xe(t[s], e[s])) return !1 } return !0 } function Qf(t) { for (; t && t.firstChild;)t = t.firstChild; return t } function Kf(t, e) { var n = Qf(t); t = 0; for (var a; n;) { if (n.nodeType === 3) { if (a = t + n.textContent.length, t <= e && a >= e) return { node: n, offset: e - t }; t = a } t: { for (; n;) { if (n.nextSibling) { n = n.nextSibling; break t } n = n.parentNode } n = void 0 } n = Qf(n) } } function Jf(t, e) { return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Jf(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1 } function Ff(t) { t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window; for (var e = Vl(t.document); e instanceof t.HTMLIFrameElement;) { try { var n = typeof e.contentWindow.location.href == "string" } catch { n = !1 } if (n) t = e.contentWindow; else break; e = Vl(t.document) } return e } function Bu(t) { var e = t && t.nodeName && t.nodeName.toLowerCase(); return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true") } var Tv = tn && "documentMode" in document && 11 >= document.documentMode, Ra = null, Uu = null, Ci = null, Lu = !1; function Wf(t, e, n) { var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; Lu || Ra == null || Ra !== Vl(a) || (a = Ra, "selectionStart" in a && Bu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset }), Ci && Ni(Ci, a) || (Ci = a, a = Cs(Uu, "onSelect"), 0 < a.length && (e = new Hl("onSelect", "select", null, e, n), t.push({ event: e, listeners: a }), e.target = Ra))) } function na(t, e) { var n = {}; return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n } var Oa = { animationend: na("Animation", "AnimationEnd"), animationiteration: na("Animation", "AnimationIteration"), animationstart: na("Animation", "AnimationStart"), transitionrun: na("Transition", "TransitionRun"), transitionstart: na("Transition", "TransitionStart"), transitioncancel: na("Transition", "TransitionCancel"), transitionend: na("Transition", "TransitionEnd") }, Hu = {}, Pf = {}; tn && (Pf = document.createElement("div").style, "AnimationEvent" in window || (delete Oa.animationend.animation, delete Oa.animationiteration.animation, delete Oa.animationstart.animation), "TransitionEvent" in window || delete Oa.transitionend.transition); function aa(t) { if (Hu[t]) return Hu[t]; if (!Oa[t]) return t; var e = Oa[t], n; for (n in e) if (e.hasOwnProperty(n) && n in Pf) return Hu[t] = e[n]; return t } var $f = aa("animationend"), If = aa("animationiteration"), th = aa("animationstart"), Av = aa("transitionrun"), Ev = aa("transitionstart"), Mv = aa("transitioncancel"), eh = aa("transitionend"), nh = new Map, qu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" "); qu.push("scrollEnd"); function Ge(t, e) { nh.set(t, e), ta(e, [t]) } var Yl = typeof reportError == "function" ? reportError : function (t) { if (typeof window == "object" && typeof window.ErrorEvent == "function") { var e = new window.ErrorEvent("error", { bubbles: !0, cancelable: !0, message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t), error: t }); if (!window.dispatchEvent(e)) return } else if (typeof process == "object" && typeof process.emit == "function") { process.emit("uncaughtException", t); return } console.error(t) }, Ce = [], Va = 0, Gu = 0; function Xl() { for (var t = Va, e = Gu = Va = 0; e < t;) { var n = Ce[e]; Ce[e++] = null; var a = Ce[e]; Ce[e++] = null; var s = Ce[e]; Ce[e++] = null; var r = Ce[e]; if (Ce[e++] = null, a !== null && s !== null) { var f = a.pending; f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s } r !== 0 && ah(n, s, r) } } function kl(t, e, n, a) { Ce[Va++] = t, Ce[Va++] = e, Ce[Va++] = n, Ce[Va++] = a, Gu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a) } function Yu(t, e, n, a) { return kl(t, e, n, a), Zl(t) } function ia(t, e) { return kl(t, null, null, e), Zl(t) } function ah(t, e, n) { t.lanes |= n; var a = t.alternate; a !== null && (a.lanes |= n); for (var s = !1, r = t.return; r !== null;)r.childLanes |= n, a = r.alternate, a !== null && (a.childLanes |= n), r.tag === 22 && (t = r.stateNode, t === null || t._visibility & 1 || (s = !0)), t = r, r = r.return; return t.tag === 3 ? (r = t.stateNode, s && e !== null && (s = 31 - ve(n), t = r.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), r) : null } function Zl(t) { if (50 < Pi) throw Pi = 0, $o = null, Error(o(185)); for (var e = t.return; e !== null;)t = e, e = t.return; return t.tag === 3 ? t.stateNode : null } var _a = {}; function jv(t, e, n, a) { this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null } function be(t, e, n, a) { return new jv(t, e, n, a) } function Xu(t) { return t = t.prototype, !(!t || !t.isReactComponent) } function en(t, e) { var n = t.alternate; return n === null ? (n = be(t.tag, e, t.key, t.mode), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 65011712, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n } function ih(t, e) { t.flags &= 65011714; var n = t.alternate; return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t } function Ql(t, e, n, a, s, r) { var f = 0; if (a = t, typeof t == "function") Xu(t) && (f = 1); else if (typeof t == "string") f = w1(t, n, W.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5; else t: switch (t) { case it: return t = be(31, n, e, s), t.elementType = it, t.lanes = r, t; case U: return la(n.children, s, r, e); case G: f = 8, s |= 24; break; case L: return t = be(12, n, e, s | 2), t.elementType = L, t.lanes = r, t; case Q: return t = be(13, n, e, s), t.elementType = Q, t.lanes = r, t; case nt: return t = be(19, n, e, s), t.elementType = nt, t.lanes = r, t; default: if (typeof t == "object" && t !== null) switch (t.$$typeof) { case q: f = 10; break t; case k: f = 9; break t; case Z: f = 11; break t; case I: f = 14; break t; case F: f = 16, a = null; break t }f = 29, n = Error(o(130, t === null ? "null" : typeof t, "")), a = null }return e = be(f, n, e, s), e.elementType = t, e.type = a, e.lanes = r, e } function la(t, e, n, a) { return t = be(7, t, a, e), t.lanes = n, t } function ku(t, e, n) { return t = be(6, t, null, e), t.lanes = n, t } function lh(t) { var e = be(18, null, null, 0); return e.stateNode = t, e } function Zu(t, e, n) { return e = be(4, t.children !== null ? t.children : [], t.key, e), e.lanes = n, e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }, e } var sh = new WeakMap; function ze(t, e) { if (typeof t == "object" && t !== null) { var n = sh.get(t); return n !== void 0 ? n : (e = { value: t, source: e, stack: lf(e) }, sh.set(t, e), e) } return { value: t, source: e, stack: lf(e) } } var Ba = [], Ua = 0, Kl = null, zi = 0, we = [], Re = 0, An = null, Qe = 1, Ke = ""; function nn(t, e) { Ba[Ua++] = zi, Ba[Ua++] = Kl, Kl = t, zi = e } function uh(t, e, n) { we[Re++] = Qe, we[Re++] = Ke, we[Re++] = An, An = t; var a = Qe; t = Ke; var s = 32 - ve(a) - 1; a &= ~(1 << s), n += 1; var r = 32 - ve(e) + s; if (30 < r) { var f = s - s % 5; r = (a & (1 << f) - 1).toString(32), a >>= f, s -= f, Qe = 1 << 32 - ve(e) + s | n << s | a, Ke = r + t } else Qe = 1 << r | n << s | a, Ke = t } function Qu(t) { t.return !== null && (nn(t, 1), uh(t, 1, 0)) } function Ku(t) { for (; t === Kl;)Kl = Ba[--Ua], Ba[Ua] = null, zi = Ba[--Ua], Ba[Ua] = null; for (; t === An;)An = we[--Re], we[Re] = null, Ke = we[--Re], we[Re] = null, Qe = we[--Re], we[Re] = null } function oh(t, e) { we[Re++] = Qe, we[Re++] = Ke, we[Re++] = An, Qe = e.id, Ke = e.overflow, An = t } var Pt = null, Ct = null, mt = !1, En = null, Oe = !1, Ju = Error(o(519)); function Mn(t) { var e = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", "")); throw wi(ze(e, t)), Ju } function rh(t) { var e = t.stateNode, n = t.type, a = t.memoizedProps; switch (e[Wt] = t, e[re] = a, n) { case "dialog": ct("cancel", e), ct("close", e); break; case "iframe": case "object": case "embed": ct("load", e); break; case "video": case "audio": for (n = 0; n < Ii.length; n++)ct(Ii[n], e); break; case "source": ct("error", e); break; case "img": case "image": case "link": ct("error", e), ct("load", e); break; case "details": ct("toggle", e); break; case "input": ct("invalid", e), Tf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0); break; case "select": ct("invalid", e); break; case "textarea": ct("invalid", e), Ef(e, a.value, a.defaultValue, a.children) }n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || jm(e.textContent, n) ? (a.popover != null && (ct("beforetoggle", e), ct("toggle", e)), a.onScroll != null && ct("scroll", e), a.onScrollEnd != null && ct("scrollend", e), a.onClick != null && (e.onclick = Ie), e = !0) : e = !1, e || Mn(t, !0) } function ch(t) { for (Pt = t.return; Pt;)switch (Pt.tag) { case 5: case 31: case 13: Oe = !1; return; case 27: case 3: Oe = !0; return; default: Pt = Pt.return } } function La(t) { if (t !== Pt) return !1; if (!mt) return ch(t), mt = !0, !1; var e = t.tag, n; if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || dr(t.type, t.memoizedProps)), n = !n), n && Ct && Mn(t), ch(t), e === 13) { if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317)); Ct = _m(t) } else if (e === 31) { if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317)); Ct = _m(t) } else e === 27 ? (e = Ct, Hn(t.type) ? (t = vr, vr = null, Ct = t) : Ct = e) : Ct = Pt ? _e(t.stateNode.nextSibling) : null; return !0 } function sa() { Ct = Pt = null, mt = !1 } function Fu() { var t = En; return t !== null && (me === null ? me = t : me.push.apply(me, t), En = null), t } function wi(t) { En === null ? En = [t] : En.push(t) } var Wu = E(null), ua = null, an = null; function jn(t, e, n) { X(Wu, e._currentValue), e._currentValue = n } function ln(t) { t._currentValue = Wu.current, B(Wu) } function Pu(t, e, n) { for (; t !== null;) { var a = t.alternate; if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break; t = t.return } } function $u(t, e, n, a) { var s = t.child; for (s !== null && (s.return = t); s !== null;) { var r = s.dependencies; if (r !== null) { var f = s.child; r = r.firstContext; t: for (; r !== null;) { var y = r; r = s; for (var S = 0; S < e.length; S++)if (y.context === e[S]) { r.lanes |= n, y = r.alternate, y !== null && (y.lanes |= n), Pu(r.return, n, t), a || (f = null); break t } r = y.next } } else if (s.tag === 18) { if (f = s.return, f === null) throw Error(o(341)); f.lanes |= n, r = f.alternate, r !== null && (r.lanes |= n), Pu(f, n, t), f = null } else f = s.child; if (f !== null) f.return = s; else for (f = s; f !== null;) { if (f === t) { f = null; break } if (s = f.sibling, s !== null) { s.return = f.return, f = s; break } f = f.return } s = f } } function Ha(t, e, n, a) { t = null; for (var s = e, r = !1; s !== null;) { if (!r) { if ((s.flags & 524288) !== 0) r = !0; else if ((s.flags & 262144) !== 0) break } if (s.tag === 10) { var f = s.alternate; if (f === null) throw Error(o(387)); if (f = f.memoizedProps, f !== null) { var y = s.type; xe(s.pendingProps.value, f.value) || (t !== null ? t.push(y) : t = [y]) } } else if (s === xt.current) { if (f = s.alternate, f === null) throw Error(o(387)); f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(il) : t = [il]) } s = s.return } t !== null && $u(e, t, n, a), e.flags |= 262144 } function Jl(t) { for (t = t.firstContext; t !== null;) { if (!xe(t.context._currentValue, t.memoizedValue)) return !0; t = t.next } return !1 } function oa(t) { ua = t, an = null, t = t.dependencies, t !== null && (t.firstContext = null) } function $t(t) { return fh(ua, t) } function Fl(t, e) { return ua === null && oa(t), fh(t, e) } function fh(t, e) { var n = e._currentValue; if (e = { context: e, memoizedValue: n, next: null }, an === null) { if (t === null) throw Error(o(308)); an = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288 } else an = an.next = e; return n } var Dv = typeof AbortController < "u" ? AbortController : function () { var t = [], e = this.signal = { aborted: !1, addEventListener: function (n, a) { t.push(a) } }; this.abort = function () { e.aborted = !0, t.forEach(function (n) { return n() }) } }, Nv = i.unstable_scheduleCallback, Cv = i.unstable_NormalPriority, Gt = { $$typeof: q, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 }; function Iu() { return { controller: new Dv, data: new Map, refCount: 0 } } function Ri(t) { t.refCount--, t.refCount === 0 && Nv(Cv, function () { t.controller.abort() }) } var Oi = null, to = 0, qa = 0, Ga = null; function zv(t, e) { if (Oi === null) { var n = Oi = []; to = 0, qa = ir(), Ga = { status: "pending", value: void 0, then: function (a) { n.push(a) } } } return to++, e.then(hh, hh), e } function hh() { if (--to === 0 && Oi !== null) { Ga !== null && (Ga.status = "fulfilled"); var t = Oi; Oi = null, qa = 0, Ga = null; for (var e = 0; e < t.length; e++)(0, t[e])() } } function wv(t, e) { var n = [], a = { status: "pending", value: null, reason: null, then: function (s) { n.push(s) } }; return t.then(function () { a.status = "fulfilled", a.value = e; for (var s = 0; s < n.length; s++)(0, n[s])(e) }, function (s) { for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)(0, n[s])(void 0) }), a } var dh = O.S; O.S = function (t, e) { Wd = ye(), typeof e == "object" && e !== null && typeof e.then == "function" && zv(t, e), dh !== null && dh(t, e) }; var ra = E(null); function eo() { var t = ra.current; return t !== null ? t : Mt.pooledCache } function Wl(t, e) { e === null ? X(ra, ra.current) : X(ra, e.pool) } function mh() { var t = eo(); return t === null ? null : { parent: Gt._currentValue, pool: t } } var Ya = Error(o(460)), no = Error(o(474)), Pl = Error(o(542)), $l = { then: function () { } }; function ph(t) { return t = t.status, t === "fulfilled" || t === "rejected" } function yh(t, e, n) { switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Ie, Ie), e = n), e.status) { case "fulfilled": return e.value; case "rejected": throw t = e.reason, vh(t), t; default: if (typeof e.status == "string") e.then(Ie, Ie); else { if (t = Mt, t !== null && 100 < t.shellSuspendCounter) throw Error(o(482)); t = e, t.status = "pending", t.then(function (a) { if (e.status === "pending") { var s = e; s.status = "fulfilled", s.value = a } }, function (a) { if (e.status === "pending") { var s = e; s.status = "rejected", s.reason = a } }) } switch (e.status) { case "fulfilled": return e.value; case "rejected": throw t = e.reason, vh(t), t }throw fa = e, Ya } } function ca(t) { try { var e = t._init; return e(t._payload) } catch (n) { throw n !== null && typeof n == "object" && typeof n.then == "function" ? (fa = n, Ya) : n } } var fa = null; function gh() { if (fa === null) throw Error(o(459)); var t = fa; return fa = null, t } function vh(t) { if (t === Ya || t === Pl) throw Error(o(483)) } var Xa = null, Vi = 0; function Il(t) { var e = Vi; return Vi += 1, Xa === null && (Xa = []), yh(Xa, t, e) } function _i(t, e) { e = e.props.ref, t.ref = e !== void 0 ? e : null } function ts(t, e) { throw e.$$typeof === T ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(o(31, t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t))) } function xh(t) { function e(M, A) { if (t) { var j = M.deletions; j === null ? (M.deletions = [A], M.flags |= 16) : j.push(A) } } function n(M, A) { if (!t) return null; for (; A !== null;)e(M, A), A = A.sibling; return null } function a(M) { for (var A = new Map; M !== null;)M.key !== null ? A.set(M.key, M) : A.set(M.index, M), M = M.sibling; return A } function s(M, A) { return M = en(M, A), M.index = 0, M.sibling = null, M } function r(M, A, j) { return M.index = j, t ? (j = M.alternate, j !== null ? (j = j.index, j < A ? (M.flags |= 67108866, A) : j) : (M.flags |= 67108866, A)) : (M.flags |= 1048576, A) } function f(M) { return t && M.alternate === null && (M.flags |= 67108866), M } function y(M, A, j, V) { return A === null || A.tag !== 6 ? (A = ku(j, M.mode, V), A.return = M, A) : (A = s(A, j), A.return = M, A) } function S(M, A, j, V) { var tt = j.type; return tt === U ? w(M, A, j.props.children, V, j.key) : A !== null && (A.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === F && ca(tt) === A.type) ? (A = s(A, j.props), _i(A, j), A.return = M, A) : (A = Ql(j.type, j.key, j.props, null, M.mode, V), _i(A, j), A.return = M, A) } function D(M, A, j, V) { return A === null || A.tag !== 4 || A.stateNode.containerInfo !== j.containerInfo || A.stateNode.implementation !== j.implementation ? (A = Zu(j, M.mode, V), A.return = M, A) : (A = s(A, j.children || []), A.return = M, A) } function w(M, A, j, V, tt) { return A === null || A.tag !== 7 ? (A = la(j, M.mode, V, tt), A.return = M, A) : (A = s(A, j), A.return = M, A) } function _(M, A, j) { if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = ku("" + A, M.mode, j), A.return = M, A; if (typeof A == "object" && A !== null) { switch (A.$$typeof) { case z: return j = Ql(A.type, A.key, A.props, null, M.mode, j), _i(j, A), j.return = M, j; case R: return A = Zu(A, M.mode, j), A.return = M, A; case F: return A = ca(A), _(M, A, j) }if (oe(A) || qt(A)) return A = la(A, M.mode, j, null), A.return = M, A; if (typeof A.then == "function") return _(M, Il(A), j); if (A.$$typeof === q) return _(M, Fl(M, A), j); ts(M, A) } return null } function N(M, A, j, V) { var tt = A !== null ? A.key : null; if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint") return tt !== null ? null : y(M, A, "" + j, V); if (typeof j == "object" && j !== null) { switch (j.$$typeof) { case z: return j.key === tt ? S(M, A, j, V) : null; case R: return j.key === tt ? D(M, A, j, V) : null; case F: return j = ca(j), N(M, A, j, V) }if (oe(j) || qt(j)) return tt !== null ? null : w(M, A, j, V, null); if (typeof j.then == "function") return N(M, A, Il(j), V); if (j.$$typeof === q) return N(M, A, Fl(M, j), V); ts(M, j) } return null } function C(M, A, j, V, tt) { if (typeof V == "string" && V !== "" || typeof V == "number" || typeof V == "bigint") return M = M.get(j) || null, y(A, M, "" + V, tt); if (typeof V == "object" && V !== null) { switch (V.$$typeof) { case z: return M = M.get(V.key === null ? j : V.key) || null, S(A, M, V, tt); case R: return M = M.get(V.key === null ? j : V.key) || null, D(A, M, V, tt); case F: return V = ca(V), C(M, A, j, V, tt) }if (oe(V) || qt(V)) return M = M.get(j) || null, w(A, M, V, tt, null); if (typeof V.then == "function") return C(M, A, j, Il(V), tt); if (V.$$typeof === q) return C(M, A, j, Fl(A, V), tt); ts(A, V) } return null } function K(M, A, j, V) { for (var tt = null, yt = null, $ = A, ut = A = 0, dt = null; $ !== null && ut < j.length; ut++) { $.index > ut ? (dt = $, $ = null) : dt = $.sibling; var gt = N(M, $, j[ut], V); if (gt === null) { $ === null && ($ = dt); break } t && $ && gt.alternate === null && e(M, $), A = r(gt, A, ut), yt === null ? tt = gt : yt.sibling = gt, yt = gt, $ = dt } if (ut === j.length) return n(M, $), mt && nn(M, ut), tt; if ($ === null) { for (; ut < j.length; ut++)$ = _(M, j[ut], V), $ !== null && (A = r($, A, ut), yt === null ? tt = $ : yt.sibling = $, yt = $); return mt && nn(M, ut), tt } for ($ = a($); ut < j.length; ut++)dt = C($, M, ut, j[ut], V), dt !== null && (t && dt.alternate !== null && $.delete(dt.key === null ? ut : dt.key), A = r(dt, A, ut), yt === null ? tt = dt : yt.sibling = dt, yt = dt); return t && $.forEach(function (kn) { return e(M, kn) }), mt && nn(M, ut), tt } function et(M, A, j, V) { if (j == null) throw Error(o(151)); for (var tt = null, yt = null, $ = A, ut = A = 0, dt = null, gt = j.next(); $ !== null && !gt.done; ut++, gt = j.next()) { $.index > ut ? (dt = $, $ = null) : dt = $.sibling; var kn = N(M, $, gt.value, V); if (kn === null) { $ === null && ($ = dt); break } t && $ && kn.alternate === null && e(M, $), A = r(kn, A, ut), yt === null ? tt = kn : yt.sibling = kn, yt = kn, $ = dt } if (gt.done) return n(M, $), mt && nn(M, ut), tt; if ($ === null) { for (; !gt.done; ut++, gt = j.next())gt = _(M, gt.value, V), gt !== null && (A = r(gt, A, ut), yt === null ? tt = gt : yt.sibling = gt, yt = gt); return mt && nn(M, ut), tt } for ($ = a($); !gt.done; ut++, gt = j.next())gt = C($, M, ut, gt.value, V), gt !== null && (t && gt.alternate !== null && $.delete(gt.key === null ? ut : gt.key), A = r(gt, A, ut), yt === null ? tt = gt : yt.sibling = gt, yt = gt); return t && $.forEach(function (Y1) { return e(M, Y1) }), mt && nn(M, ut), tt } function Et(M, A, j, V) { if (typeof j == "object" && j !== null && j.type === U && j.key === null && (j = j.props.children), typeof j == "object" && j !== null) { switch (j.$$typeof) { case z: t: { for (var tt = j.key; A !== null;) { if (A.key === tt) { if (tt = j.type, tt === U) { if (A.tag === 7) { n(M, A.sibling), V = s(A, j.props.children), V.return = M, M = V; break t } } else if (A.elementType === tt || typeof tt == "object" && tt !== null && tt.$$typeof === F && ca(tt) === A.type) { n(M, A.sibling), V = s(A, j.props), _i(V, j), V.return = M, M = V; break t } n(M, A); break } else e(M, A); A = A.sibling } j.type === U ? (V = la(j.props.children, M.mode, V, j.key), V.return = M, M = V) : (V = Ql(j.type, j.key, j.props, null, M.mode, V), _i(V, j), V.return = M, M = V) } return f(M); case R: t: { for (tt = j.key; A !== null;) { if (A.key === tt) if (A.tag === 4 && A.stateNode.containerInfo === j.containerInfo && A.stateNode.implementation === j.implementation) { n(M, A.sibling), V = s(A, j.children || []), V.return = M, M = V; break t } else { n(M, A); break } else e(M, A); A = A.sibling } V = Zu(j, M.mode, V), V.return = M, M = V } return f(M); case F: return j = ca(j), Et(M, A, j, V) }if (oe(j)) return K(M, A, j, V); if (qt(j)) { if (tt = qt(j), typeof tt != "function") throw Error(o(150)); return j = tt.call(j), et(M, A, j, V) } if (typeof j.then == "function") return Et(M, A, Il(j), V); if (j.$$typeof === q) return Et(M, A, Fl(M, j), V); ts(M, j) } return typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint" ? (j = "" + j, A !== null && A.tag === 6 ? (n(M, A.sibling), V = s(A, j), V.return = M, M = V) : (n(M, A), V = ku(j, M.mode, V), V.return = M, M = V), f(M)) : n(M, A) } return function (M, A, j, V) { try { Vi = 0; var tt = Et(M, A, j, V); return Xa = null, tt } catch ($) { if ($ === Ya || $ === Pl) throw $; var yt = be(29, $, null, M.mode); return yt.lanes = V, yt.return = M, yt } finally { } } } var ha = xh(!0), bh = xh(!1), Dn = !1; function ao(t) { t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null } } function io(t, e) { t = t.updateQueue, e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null }) } function Nn(t) { return { lane: t, tag: 0, payload: null, callback: null, next: null } } function Cn(t, e, n) { var a = t.updateQueue; if (a === null) return null; if (a = a.shared, (vt & 2) !== 0) { var s = a.pending; return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = Zl(t), ah(t, null, n), e } return kl(t, a, e, n), Zl(t) } function Bi(t, e, n) { if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) { var a = e.lanes; a &= t.pendingLanes, n |= a, e.lanes = n, ff(t, n) } } function lo(t, e) { var n = t.updateQueue, a = t.alternate; if (a !== null && (a = a.updateQueue, n === a)) { var s = null, r = null; if (n = n.firstBaseUpdate, n !== null) { do { var f = { lane: n.lane, tag: n.tag, payload: n.payload, callback: null, next: null }; r === null ? s = r = f : r = r.next = f, n = n.next } while (n !== null); r === null ? s = r = e : r = r.next = e } else s = r = e; n = { baseState: a.baseState, firstBaseUpdate: s, lastBaseUpdate: r, shared: a.shared, callbacks: a.callbacks }, t.updateQueue = n; return } t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e } var so = !1; function Ui() { if (so) { var t = Ga; if (t !== null) throw t } } function Li(t, e, n, a) { so = !1; var s = t.updateQueue; Dn = !1; var r = s.firstBaseUpdate, f = s.lastBaseUpdate, y = s.shared.pending; if (y !== null) { s.shared.pending = null; var S = y, D = S.next; S.next = null, f === null ? r = D : f.next = D, f = S; var w = t.alternate; w !== null && (w = w.updateQueue, y = w.lastBaseUpdate, y !== f && (y === null ? w.firstBaseUpdate = D : y.next = D, w.lastBaseUpdate = S)) } if (r !== null) { var _ = s.baseState; f = 0, w = D = S = null, y = r; do { var N = y.lane & -536870913, C = N !== y.lane; if (C ? (ht & N) === N : (a & N) === N) { N !== 0 && N === qa && (so = !0), w !== null && (w = w.next = { lane: 0, tag: y.tag, payload: y.payload, callback: null, next: null }); t: { var K = t, et = y; N = e; var Et = n; switch (et.tag) { case 1: if (K = et.payload, typeof K == "function") { _ = K.call(Et, _, N); break t } _ = K; break t; case 3: K.flags = K.flags & -65537 | 128; case 0: if (K = et.payload, N = typeof K == "function" ? K.call(Et, _, N) : K, N == null) break t; _ = b({}, _, N); break t; case 2: Dn = !0 } } N = y.callback, N !== null && (t.flags |= 64, C && (t.flags |= 8192), C = s.callbacks, C === null ? s.callbacks = [N] : C.push(N)) } else C = { lane: N, tag: y.tag, payload: y.payload, callback: y.callback, next: null }, w === null ? (D = w = C, S = _) : w = w.next = C, f |= N; if (y = y.next, y === null) { if (y = s.shared.pending, y === null) break; C = y, y = C.next, C.next = null, s.lastBaseUpdate = C, s.shared.pending = null } } while (!0); w === null && (S = _), s.baseState = S, s.firstBaseUpdate = D, s.lastBaseUpdate = w, r === null && (s.shared.lanes = 0), Vn |= f, t.lanes = f, t.memoizedState = _ } } function Sh(t, e) { if (typeof t != "function") throw Error(o(191, t)); t.call(e) } function Th(t, e) { var n = t.callbacks; if (n !== null) for (t.callbacks = null, t = 0; t < n.length; t++)Sh(n[t], e) } var ka = E(null), es = E(0); function Ah(t, e) { t = mn, X(es, t), X(ka, e), mn = t | e.baseLanes } function uo() { X(es, mn), X(ka, ka.current) } function oo() { mn = es.current, B(ka), B(es) } var Se = E(null), Ve = null; function zn(t) { var e = t.alternate; X(Lt, Lt.current & 1), X(Se, t), Ve === null && (e === null || ka.current !== null || e.memoizedState !== null) && (Ve = t) } function ro(t) { X(Lt, Lt.current), X(Se, t), Ve === null && (Ve = t) } function Eh(t) { t.tag === 22 ? (X(Lt, Lt.current), X(Se, t), Ve === null && (Ve = t)) : wn() } function wn() { X(Lt, Lt.current), X(Se, Se.current) } function Te(t) { B(Se), Ve === t && (Ve = null), B(Lt) } var Lt = E(0); function ns(t) { for (var e = t; e !== null;) { if (e.tag === 13) { var n = e.memoizedState; if (n !== null && (n = n.dehydrated, n === null || yr(n) || gr(n))) return e } else if (e.tag === 19 && (e.memoizedProps.revealOrder === "forwards" || e.memoizedProps.revealOrder === "backwards" || e.memoizedProps.revealOrder === "unstable_legacy-backwards" || e.memoizedProps.revealOrder === "together")) { if ((e.flags & 128) !== 0) return e } else if (e.child !== null) { e.child.return = e, e = e.child; continue } if (e === t) break; for (; e.sibling === null;) { if (e.return === null || e.return === t) return null; e = e.return } e.sibling.return = e.return, e = e.sibling } return null } var sn = 0, st = null, Tt = null, Yt = null, as = !1, Za = !1, da = !1, is = 0, Hi = 0, Qa = null, Rv = 0; function Ot() { throw Error(o(321)) } function co(t, e) { if (e === null) return !1; for (var n = 0; n < e.length && n < t.length; n++)if (!xe(t[n], e[n])) return !1; return !0 } function fo(t, e, n, a, s, r) { return sn = r, st = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, O.H = t === null || t.memoizedState === null ? ud : Do, da = !1, r = n(a, s), da = !1, Za && (r = jh(e, n, a, s)), Mh(t), r } function Mh(t) { O.H = Yi; var e = Tt !== null && Tt.next !== null; if (sn = 0, Yt = Tt = st = null, as = !1, Hi = 0, Qa = null, e) throw Error(o(300)); t === null || Xt || (t = t.dependencies, t !== null && Jl(t) && (Xt = !0)) } function jh(t, e, n, a) { st = t; var s = 0; do { if (Za && (Qa = null), Hi = 0, Za = !1, 25 <= s) throw Error(o(301)); if (s += 1, Yt = Tt = null, t.updateQueue != null) { var r = t.updateQueue; r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0) } O.H = od, r = e(n, a) } while (Za); return r } function Ov() { var t = O.H, e = t.useState()[0]; return e = typeof e.then == "function" ? qi(e) : e, t = t.useState()[0], (Tt !== null ? Tt.memoizedState : null) !== t && (st.flags |= 1024), e } function ho() { var t = is !== 0; return is = 0, t } function mo(t, e, n) { e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n } function po(t) { if (as) { for (t = t.memoizedState; t !== null;) { var e = t.queue; e !== null && (e.pending = null), t = t.next } as = !1 } sn = 0, Yt = Tt = st = null, Za = !1, Hi = is = 0, Qa = null } function le() { var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return Yt === null ? st.memoizedState = Yt = t : Yt = Yt.next = t, Yt } function Ht() { if (Tt === null) { var t = st.alternate; t = t !== null ? t.memoizedState : null } else t = Tt.next; var e = Yt === null ? st.memoizedState : Yt.next; if (e !== null) Yt = e, Tt = t; else { if (t === null) throw st.alternate === null ? Error(o(467)) : Error(o(310)); Tt = t, t = { memoizedState: Tt.memoizedState, baseState: Tt.baseState, baseQueue: Tt.baseQueue, queue: Tt.queue, next: null }, Yt === null ? st.memoizedState = Yt = t : Yt = Yt.next = t } return Yt } function ls() { return { lastEffect: null, events: null, stores: null, memoCache: null } } function qi(t) { var e = Hi; return Hi += 1, Qa === null && (Qa = []), t = yh(Qa, t, e), e = st, (Yt === null ? e.memoizedState : Yt.next) === null && (e = e.alternate, O.H = e === null || e.memoizedState === null ? ud : Do), t } function ss(t) { if (t !== null && typeof t == "object") { if (typeof t.then == "function") return qi(t); if (t.$$typeof === q) return $t(t) } throw Error(o(438, String(t))) } function yo(t) { var e = null, n = st.updateQueue; if (n !== null && (e = n.memoCache), e == null) { var a = st.alternate; a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = { data: a.data.map(function (s) { return s.slice() }), index: 0 }))) } if (e == null && (e = { data: [], index: 0 }), n === null && (n = ls(), st.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0) for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)n[a] = jt; return e.index++, n } function un(t, e) { return typeof e == "function" ? e(t) : e } function us(t) { var e = Ht(); return go(e, Tt, t) } function go(t, e, n) { var a = t.queue; if (a === null) throw Error(o(311)); a.lastRenderedReducer = n; var s = t.baseQueue, r = a.pending; if (r !== null) { if (s !== null) { var f = s.next; s.next = r.next, r.next = f } e.baseQueue = s = r, a.pending = null } if (r = t.baseState, s === null) t.memoizedState = r; else { e = s.next; var y = f = null, S = null, D = e, w = !1; do { var _ = D.lane & -536870913; if (_ !== D.lane ? (ht & _) === _ : (sn & _) === _) { var N = D.revertLane; if (N === 0) S !== null && (S = S.next = { lane: 0, revertLane: 0, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }), _ === qa && (w = !0); else if ((sn & N) === N) { D = D.next, N === qa && (w = !0); continue } else _ = { lane: 0, revertLane: D.revertLane, gesture: null, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, S === null ? (y = S = _, f = r) : S = S.next = _, st.lanes |= N, Vn |= N; _ = D.action, da && n(r, _), r = D.hasEagerState ? D.eagerState : n(r, _) } else N = { lane: _, revertLane: D.revertLane, gesture: D.gesture, action: D.action, hasEagerState: D.hasEagerState, eagerState: D.eagerState, next: null }, S === null ? (y = S = N, f = r) : S = S.next = N, st.lanes |= _, Vn |= _; D = D.next } while (D !== null && D !== e); if (S === null ? f = r : S.next = y, !xe(r, t.memoizedState) && (Xt = !0, w && (n = Ga, n !== null))) throw n; t.memoizedState = r, t.baseState = f, t.baseQueue = S, a.lastRenderedState = r } return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch] } function vo(t) { var e = Ht(), n = e.queue; if (n === null) throw Error(o(311)); n.lastRenderedReducer = t; var a = n.dispatch, s = n.pending, r = e.memoizedState; if (s !== null) { n.pending = null; var f = s = s.next; do r = t(r, f.action), f = f.next; while (f !== s); xe(r, e.memoizedState) || (Xt = !0), e.memoizedState = r, e.baseQueue === null && (e.baseState = r), n.lastRenderedState = r } return [r, a] } function Dh(t, e, n) { var a = st, s = Ht(), r = mt; if (r) { if (n === void 0) throw Error(o(407)); n = n() } else n = e(); var f = !xe((Tt || s).memoizedState, n); if (f && (s.memoizedState = n, Xt = !0), s = s.queue, So(zh.bind(null, a, s, t), [t]), s.getSnapshot !== e || f || Yt !== null && Yt.memoizedState.tag & 1) { if (a.flags |= 2048, Ka(9, { destroy: void 0 }, Ch.bind(null, a, s, n, e), null), Mt === null) throw Error(o(349)); r || (sn & 127) !== 0 || Nh(a, e, n) } return n } function Nh(t, e, n) { t.flags |= 16384, t = { getSnapshot: e, value: n }, e = st.updateQueue, e === null ? (e = ls(), st.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t)) } function Ch(t, e, n, a) { e.value = n, e.getSnapshot = a, wh(e) && Rh(t) } function zh(t, e, n) { return n(function () { wh(e) && Rh(t) }) } function wh(t) { var e = t.getSnapshot; t = t.value; try { var n = e(); return !xe(t, n) } catch { return !0 } } function Rh(t) { var e = ia(t, 2); e !== null && pe(e, t, 2) } function xo(t) { var e = le(); if (typeof t == "function") { var n = t; if (t = n(), da) { bn(!0); try { n() } finally { bn(!1) } } } return e.memoizedState = e.baseState = t, e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: un, lastRenderedState: t }, e } function Oh(t, e, n, a) { return t.baseState = n, go(t, Tt, typeof a == "function" ? a : un) } function Vv(t, e, n, a, s) { if (cs(t)) throw Error(o(485)); if (t = e.action, t !== null) { var r = { payload: s, action: t, next: null, isTransition: !0, status: "pending", value: null, reason: null, listeners: [], then: function (f) { r.listeners.push(f) } }; O.T !== null ? n(!0) : r.isTransition = !1, a(r), n = e.pending, n === null ? (r.next = e.pending = r, Vh(e, r)) : (r.next = n.next, e.pending = n.next = r) } } function Vh(t, e) { var n = e.action, a = e.payload, s = t.state; if (e.isTransition) { var r = O.T, f = {}; O.T = f; try { var y = n(s, a), S = O.S; S !== null && S(f, y), _h(t, e, y) } catch (D) { bo(t, e, D) } finally { r !== null && f.types !== null && (r.types = f.types), O.T = r } } else try { r = n(s, a), _h(t, e, r) } catch (D) { bo(t, e, D) } } function _h(t, e, n) { n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(function (a) { Bh(t, e, a) }, function (a) { return bo(t, e, a) }) : Bh(t, e, n) } function Bh(t, e, n) { e.status = "fulfilled", e.value = n, Uh(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Vh(t, n))) } function bo(t, e, n) { var a = t.pending; if (t.pending = null, a !== null) { a = a.next; do e.status = "rejected", e.reason = n, Uh(e), e = e.next; while (e !== a) } t.action = null } function Uh(t) { t = t.listeners; for (var e = 0; e < t.length; e++)(0, t[e])() } function Lh(t, e) { return e } function Hh(t, e) { if (mt) { var n = Mt.formState; if (n !== null) { t: { var a = st; if (mt) { if (Ct) { e: { for (var s = Ct, r = Oe; s.nodeType !== 8;) { if (!r) { s = null; break e } if (s = _e(s.nextSibling), s === null) { s = null; break e } } r = s.data, s = r === "F!" || r === "F" ? s : null } if (s) { Ct = _e(s.nextSibling), a = s.data === "F!"; break t } } Mn(a) } a = !1 } a && (e = n[0]) } } return n = le(), n.memoizedState = n.baseState = e, a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Lh, lastRenderedState: e }, n.queue = a, n = id.bind(null, st, a), a.dispatch = n, a = xo(!1), r = jo.bind(null, st, !1, a.queue), a = le(), s = { state: e, dispatch: null, action: t, pending: null }, a.queue = s, n = Vv.bind(null, st, s, r, n), s.dispatch = n, a.memoizedState = t, [e, n, !1] } function qh(t) { var e = Ht(); return Gh(e, Tt, t) } function Gh(t, e, n) { if (e = go(t, e, Lh)[0], t = us(un)[0], typeof e == "object" && e !== null && typeof e.then == "function") try { var a = qi(e) } catch (f) { throw f === Ya ? Pl : f } else a = e; e = Ht(); var s = e.queue, r = s.dispatch; return n !== e.memoizedState && (st.flags |= 2048, Ka(9, { destroy: void 0 }, _v.bind(null, s, n), null)), [a, r, t] } function _v(t, e) { t.action = e } function Yh(t) { var e = Ht(), n = Tt; if (n !== null) return Gh(e, n, t); Ht(), e = e.memoizedState, n = Ht(); var a = n.queue.dispatch; return n.memoizedState = t, [e, a, !1] } function Ka(t, e, n, a) { return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = st.updateQueue, e === null && (e = ls(), st.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t } function Xh() { return Ht().memoizedState } function os(t, e, n, a) { var s = le(); st.flags |= t, s.memoizedState = Ka(1 | e, { destroy: void 0 }, n, a === void 0 ? null : a) } function rs(t, e, n, a) { var s = Ht(); a = a === void 0 ? null : a; var r = s.memoizedState.inst; Tt !== null && a !== null && co(a, Tt.memoizedState.deps) ? s.memoizedState = Ka(e, r, n, a) : (st.flags |= t, s.memoizedState = Ka(1 | e, r, n, a)) } function kh(t, e) { os(8390656, 8, t, e) } function So(t, e) { rs(2048, 8, t, e) } function Bv(t) { st.flags |= 4; var e = st.updateQueue; if (e === null) e = ls(), st.updateQueue = e, e.events = [t]; else { var n = e.events; n === null ? e.events = [t] : n.push(t) } } function Zh(t) { var e = Ht().memoizedState; return Bv({ ref: e, nextImpl: t }), function () { if ((vt & 2) !== 0) throw Error(o(440)); return e.impl.apply(void 0, arguments) } } function Qh(t, e) { return rs(4, 2, t, e) } function Kh(t, e) { return rs(4, 4, t, e) } function Jh(t, e) { if (typeof e == "function") { t = t(); var n = e(t); return function () { typeof n == "function" ? n() : e(null) } } if (e != null) return t = t(), e.current = t, function () { e.current = null } } function Fh(t, e, n) { n = n != null ? n.concat([t]) : null, rs(4, 4, Jh.bind(null, e, t), n) } function To() { } function Wh(t, e) { var n = Ht(); e = e === void 0 ? null : e; var a = n.memoizedState; return e !== null && co(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t) } function Ph(t, e) { var n = Ht(); e = e === void 0 ? null : e; var a = n.memoizedState; if (e !== null && co(e, a[1])) return a[0]; if (a = t(), da) { bn(!0); try { t() } finally { bn(!1) } } return n.memoizedState = [a, e], a } function Ao(t, e, n) { return n === void 0 || (sn & 1073741824) !== 0 && (ht & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = $d(), st.lanes |= t, Vn |= t, n) } function $h(t, e, n, a) { return xe(n, e) ? n : ka.current !== null ? (t = Ao(t, n, a), xe(t, e) || (Xt = !0), t) : (sn & 42) === 0 || (sn & 1073741824) !== 0 && (ht & 261930) === 0 ? (Xt = !0, t.memoizedState = n) : (t = $d(), st.lanes |= t, Vn |= t, e) } function Ih(t, e, n, a, s) { var r = H.p; H.p = r !== 0 && 8 > r ? r : 8; var f = O.T, y = {}; O.T = y, jo(t, !1, e, n); try { var S = s(), D = O.S; if (D !== null && D(y, S), S !== null && typeof S == "object" && typeof S.then == "function") { var w = wv(S, a); Gi(t, e, w, Me(t)) } else Gi(t, e, a, Me(t)) } catch (_) { Gi(t, e, { then: function () { }, status: "rejected", reason: _ }, Me()) } finally { H.p = r, f !== null && y.types !== null && (f.types = y.types), O.T = f } } function Uv() { } function Eo(t, e, n, a) { if (t.tag !== 5) throw Error(o(476)); var s = td(t).queue; Ih(t, s, e, P, n === null ? Uv : function () { return ed(t), n(a) }) } function td(t) { var e = t.memoizedState; if (e !== null) return e; e = { memoizedState: P, baseState: P, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: un, lastRenderedState: P }, next: null }; var n = {}; return e.next = { memoizedState: n, baseState: n, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: un, lastRenderedState: n }, next: null }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e } function ed(t) { var e = td(t); e.next === null && (e = t.alternate.memoizedState), Gi(t, e.next.queue, {}, Me()) } function Mo() { return $t(il) } function nd() { return Ht().memoizedState } function ad() { return Ht().memoizedState } function Lv(t) { for (var e = t.return; e !== null;) { switch (e.tag) { case 24: case 3: var n = Me(); t = Nn(n); var a = Cn(e, t, n); a !== null && (pe(a, e, n), Bi(a, e, n)), e = { cache: Iu() }, t.payload = e; return }e = e.return } } function Hv(t, e, n) { var a = Me(); n = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }, cs(t) ? ld(e, n) : (n = Yu(t, e, n, a), n !== null && (pe(n, t, a), sd(n, e, a))) } function id(t, e, n) { var a = Me(); Gi(t, e, n, a) } function Gi(t, e, n, a) { var s = { lane: a, revertLane: 0, gesture: null, action: n, hasEagerState: !1, eagerState: null, next: null }; if (cs(t)) ld(e, s); else { var r = t.alternate; if (t.lanes === 0 && (r === null || r.lanes === 0) && (r = e.lastRenderedReducer, r !== null)) try { var f = e.lastRenderedState, y = r(f, n); if (s.hasEagerState = !0, s.eagerState = y, xe(y, f)) return kl(t, e, s, 0), Mt === null && Xl(), !1 } catch { } finally { } if (n = Yu(t, e, s, a), n !== null) return pe(n, t, a), sd(n, e, a), !0 } return !1 } function jo(t, e, n, a) { if (a = { lane: 2, revertLane: ir(), gesture: null, action: a, hasEagerState: !1, eagerState: null, next: null }, cs(t)) { if (e) throw Error(o(479)) } else e = Yu(t, n, a, 2), e !== null && pe(e, t, 2) } function cs(t) { var e = t.alternate; return t === st || e !== null && e === st } function ld(t, e) { Za = as = !0; var n = t.pending; n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e } function sd(t, e, n) { if ((n & 4194048) !== 0) { var a = e.lanes; a &= t.pendingLanes, n |= a, e.lanes = n, ff(t, n) } } var Yi = { readContext: $t, use: ss, useCallback: Ot, useContext: Ot, useEffect: Ot, useImperativeHandle: Ot, useLayoutEffect: Ot, useInsertionEffect: Ot, useMemo: Ot, useReducer: Ot, useRef: Ot, useState: Ot, useDebugValue: Ot, useDeferredValue: Ot, useTransition: Ot, useSyncExternalStore: Ot, useId: Ot, useHostTransitionStatus: Ot, useFormState: Ot, useActionState: Ot, useOptimistic: Ot, useMemoCache: Ot, useCacheRefresh: Ot }; Yi.useEffectEvent = Ot; var ud = { readContext: $t, use: ss, useCallback: function (t, e) { return le().memoizedState = [t, e === void 0 ? null : e], t }, useContext: $t, useEffect: kh, useImperativeHandle: function (t, e, n) { n = n != null ? n.concat([t]) : null, os(4194308, 4, Jh.bind(null, e, t), n) }, useLayoutEffect: function (t, e) { return os(4194308, 4, t, e) }, useInsertionEffect: function (t, e) { os(4, 2, t, e) }, useMemo: function (t, e) { var n = le(); e = e === void 0 ? null : e; var a = t(); if (da) { bn(!0); try { t() } finally { bn(!1) } } return n.memoizedState = [a, e], a }, useReducer: function (t, e, n) { var a = le(); if (n !== void 0) { var s = n(e); if (da) { bn(!0); try { n(e) } finally { bn(!1) } } } else s = e; return a.memoizedState = a.baseState = s, t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: s }, a.queue = t, t = t.dispatch = Hv.bind(null, st, t), [a.memoizedState, t] }, useRef: function (t) { var e = le(); return t = { current: t }, e.memoizedState = t }, useState: function (t) { t = xo(t); var e = t.queue, n = id.bind(null, st, e); return e.dispatch = n, [t.memoizedState, n] }, useDebugValue: To, useDeferredValue: function (t, e) { var n = le(); return Ao(n, t, e) }, useTransition: function () { var t = xo(!1); return t = Ih.bind(null, st, t.queue, !0, !1), le().memoizedState = t, [!1, t] }, useSyncExternalStore: function (t, e, n) { var a = st, s = le(); if (mt) { if (n === void 0) throw Error(o(407)); n = n() } else { if (n = e(), Mt === null) throw Error(o(349)); (ht & 127) !== 0 || Nh(a, e, n) } s.memoizedState = n; var r = { value: n, getSnapshot: e }; return s.queue = r, kh(zh.bind(null, a, r, t), [t]), a.flags |= 2048, Ka(9, { destroy: void 0 }, Ch.bind(null, a, r, n, e), null), n }, useId: function () { var t = le(), e = Mt.identifierPrefix; if (mt) { var n = Ke, a = Qe; n = (a & ~(1 << 32 - ve(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = is++, 0 < n && (e += "H" + n.toString(32)), e += "_" } else n = Rv++, e = "_" + e + "r_" + n.toString(32) + "_"; return t.memoizedState = e }, useHostTransitionStatus: Mo, useFormState: Hh, useActionState: Hh, useOptimistic: function (t) { var e = le(); e.memoizedState = e.baseState = t; var n = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }; return e.queue = n, e = jo.bind(null, st, !0, n), n.dispatch = e, [t, e] }, useMemoCache: yo, useCacheRefresh: function () { return le().memoizedState = Lv.bind(null, st) }, useEffectEvent: function (t) { var e = le(), n = { impl: t }; return e.memoizedState = n, function () { if ((vt & 2) !== 0) throw Error(o(440)); return n.impl.apply(void 0, arguments) } } }, Do = { readContext: $t, use: ss, useCallback: Wh, useContext: $t, useEffect: So, useImperativeHandle: Fh, useInsertionEffect: Qh, useLayoutEffect: Kh, useMemo: Ph, useReducer: us, useRef: Xh, useState: function () { return us(un) }, useDebugValue: To, useDeferredValue: function (t, e) { var n = Ht(); return $h(n, Tt.memoizedState, t, e) }, useTransition: function () { var t = us(un)[0], e = Ht().memoizedState; return [typeof t == "boolean" ? t : qi(t), e] }, useSyncExternalStore: Dh, useId: nd, useHostTransitionStatus: Mo, useFormState: qh, useActionState: qh, useOptimistic: function (t, e) { var n = Ht(); return Oh(n, Tt, t, e) }, useMemoCache: yo, useCacheRefresh: ad }; Do.useEffectEvent = Zh; var od = { readContext: $t, use: ss, useCallback: Wh, useContext: $t, useEffect: So, useImperativeHandle: Fh, useInsertionEffect: Qh, useLayoutEffect: Kh, useMemo: Ph, useReducer: vo, useRef: Xh, useState: function () { return vo(un) }, useDebugValue: To, useDeferredValue: function (t, e) { var n = Ht(); return Tt === null ? Ao(n, t, e) : $h(n, Tt.memoizedState, t, e) }, useTransition: function () { var t = vo(un)[0], e = Ht().memoizedState; return [typeof t == "boolean" ? t : qi(t), e] }, useSyncExternalStore: Dh, useId: nd, useHostTransitionStatus: Mo, useFormState: Yh, useActionState: Yh, useOptimistic: function (t, e) { var n = Ht(); return Tt !== null ? Oh(n, Tt, t, e) : (n.baseState = t, [t, n.queue.dispatch]) }, useMemoCache: yo, useCacheRefresh: ad }; od.useEffectEvent = Zh; function No(t, e, n, a) { e = t.memoizedState, n = n(a, e), n = n == null ? e : b({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n) } var Co = { enqueueSetState: function (t, e, n) { t = t._reactInternals; var a = Me(), s = Nn(a); s.payload = e, n != null && (s.callback = n), e = Cn(t, s, a), e !== null && (pe(e, t, a), Bi(e, t, a)) }, enqueueReplaceState: function (t, e, n) { t = t._reactInternals; var a = Me(), s = Nn(a); s.tag = 1, s.payload = e, n != null && (s.callback = n), e = Cn(t, s, a), e !== null && (pe(e, t, a), Bi(e, t, a)) }, enqueueForceUpdate: function (t, e) { t = t._reactInternals; var n = Me(), a = Nn(n); a.tag = 2, e != null && (a.callback = e), e = Cn(t, a, n), e !== null && (pe(e, t, n), Bi(e, t, n)) } }; function rd(t, e, n, a, s, r, f) { return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, r, f) : e.prototype && e.prototype.isPureReactComponent ? !Ni(n, a) || !Ni(s, r) : !0 } function cd(t, e, n, a) { t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Co.enqueueReplaceState(e, e.state, null) } function ma(t, e) { var n = e; if ("ref" in e) { n = {}; for (var a in e) a !== "ref" && (n[a] = e[a]) } if (t = t.defaultProps) { n === e && (n = b({}, n)); for (var s in t) n[s] === void 0 && (n[s] = t[s]) } return n } function fd(t) { Yl(t) } function hd(t) { console.error(t) } function dd(t) { Yl(t) } function fs(t, e) { try { var n = t.onUncaughtError; n(e.value, { componentStack: e.stack }) } catch (a) { setTimeout(function () { throw a }) } } function md(t, e, n) { try { var a = t.onCaughtError; a(n.value, { componentStack: n.stack, errorBoundary: e.tag === 1 ? e.stateNode : null }) } catch (s) { setTimeout(function () { throw s }) } } function zo(t, e, n) { return n = Nn(n), n.tag = 3, n.payload = { element: null }, n.callback = function () { fs(t, e) }, n } function pd(t) { return t = Nn(t), t.tag = 3, t } function yd(t, e, n, a) { var s = n.type.getDerivedStateFromError; if (typeof s == "function") { var r = a.value; t.payload = function () { return s(r) }, t.callback = function () { md(e, n, a) } } var f = n.stateNode; f !== null && typeof f.componentDidCatch == "function" && (t.callback = function () { md(e, n, a), typeof s != "function" && (_n === null ? _n = new Set([this]) : _n.add(this)); var y = a.stack; this.componentDidCatch(a.value, { componentStack: y !== null ? y : "" }) }) } function qv(t, e, n, a, s) { if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") { if (e = n.alternate, e !== null && Ha(e, n, s, !0), n = Se.current, n !== null) { switch (n.tag) { case 31: case 13: return Ve === null ? As() : n.alternate === null && Vt === 0 && (Vt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === $l ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = new Set([a]) : e.add(a), er(t, a, s)), !1; case 22: return n.flags |= 65536, a === $l ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = new Set([a]) : n.add(a)), er(t, a, s)), !1 }throw Error(o(435, n.tag)) } return er(t, a, s), As(), !1 } if (mt) return e = Se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== Ju && (t = Error(o(422), { cause: a }), wi(ze(t, n)))) : (a !== Ju && (e = Error(o(423), { cause: a }), wi(ze(e, n))), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = ze(a, n), s = zo(t.stateNode, a, s), lo(t, s), Vt !== 4 && (Vt = 2)), !1; var r = Error(o(520), { cause: a }); if (r = ze(r, n), Wi === null ? Wi = [r] : Wi.push(r), Vt !== 4 && (Vt = 2), e === null) return !0; a = ze(a, n), n = e; do { switch (n.tag) { case 3: return n.flags |= 65536, t = s & -s, n.lanes |= t, t = zo(n.stateNode, a, t), lo(n, t), !1; case 1: if (e = n.type, r = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (_n === null || !_n.has(r)))) return n.flags |= 65536, s &= -s, n.lanes |= s, s = pd(s), yd(s, t, n, a), lo(n, s), !1 }n = n.return } while (n !== null); return !1 } var wo = Error(o(461)), Xt = !1; function It(t, e, n, a) { e.child = t === null ? bh(e, null, n, a) : ha(e, t.child, n, a) } function gd(t, e, n, a, s) { n = n.render; var r = e.ref; if ("ref" in a) { var f = {}; for (var y in a) y !== "ref" && (f[y] = a[y]) } else f = a; return oa(e), a = fo(t, e, n, f, r, s), y = ho(), t !== null && !Xt ? (mo(t, e, s), on(t, e, s)) : (mt && y && Qu(e), e.flags |= 1, It(t, e, a, s), e.child) } function vd(t, e, n, a, s) { if (t === null) { var r = n.type; return typeof r == "function" && !Xu(r) && r.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = r, xd(t, e, r, a, s)) : (t = Ql(n.type, null, a, e, e.mode, s), t.ref = e.ref, t.return = e, e.child = t) } if (r = t.child, !Ho(t, s)) { var f = r.memoizedProps; if (n = n.compare, n = n !== null ? n : Ni, n(f, a) && t.ref === e.ref) return on(t, e, s) } return e.flags |= 1, t = en(r, a), t.ref = e.ref, t.return = e, e.child = t } function xd(t, e, n, a, s) { if (t !== null) { var r = t.memoizedProps; if (Ni(r, a) && t.ref === e.ref) if (Xt = !1, e.pendingProps = a = r, Ho(t, s)) (t.flags & 131072) !== 0 && (Xt = !0); else return e.lanes = t.lanes, on(t, e, s) } return Ro(t, e, n, a, s) } function bd(t, e, n, a) { var s = a.children, r = t !== null ? t.memoizedState : null; if (t === null && e.stateNode === null && (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), a.mode === "hidden") { if ((e.flags & 128) !== 0) { if (r = r !== null ? r.baseLanes | n : n, t !== null) { for (a = e.child = t.child, s = 0; a !== null;)s = s | a.lanes | a.childLanes, a = a.sibling; a = s & ~r } else a = 0, e.child = null; return Sd(t, e, r, n, a) } if ((n & 536870912) !== 0) e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Wl(e, r !== null ? r.cachePool : null), r !== null ? Ah(e, r) : uo(), Eh(e); else return a = e.lanes = 536870912, Sd(t, e, r !== null ? r.baseLanes | n : n, n, a) } else r !== null ? (Wl(e, r.cachePool), Ah(e, r), wn(), e.memoizedState = null) : (t !== null && Wl(e, null), uo(), wn()); return It(t, e, s, n), e.child } function Xi(t, e) { return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = { _visibility: 1, _pendingMarkers: null, _retryCache: null, _transitions: null }), e.sibling } function Sd(t, e, n, a, s) { var r = eo(); return r = r === null ? null : { parent: Gt._currentValue, pool: r }, e.memoizedState = { baseLanes: n, cachePool: r }, t !== null && Wl(e, null), uo(), Eh(e), t !== null && Ha(t, e, a, !0), e.childLanes = s, null } function hs(t, e) { return e = ms({ mode: e.mode, children: e.children }, t.mode), e.ref = t.ref, t.child = e, e.return = t, e } function Td(t, e, n) { return ha(e, t.child, null, n), t = hs(e, e.pendingProps), t.flags |= 2, Te(e), e.memoizedState = null, t } function Gv(t, e, n) { var a = e.pendingProps, s = (e.flags & 128) !== 0; if (e.flags &= -129, t === null) { if (mt) { if (a.mode === "hidden") return t = hs(e, a), e.lanes = 536870912, Xi(null, t); if (ro(e), (t = Ct) ? (t = Vm(t, Oe), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: An !== null ? { id: Qe, overflow: Ke } : null, retryLane: 536870912, hydrationErrors: null }, n = lh(t), n.return = e, e.child = n, Pt = e, Ct = null)) : t = null, t === null) throw Mn(e); return e.lanes = 536870912, null } return hs(e, a) } var r = t.memoizedState; if (r !== null) { var f = r.dehydrated; if (ro(e), s) if (e.flags & 256) e.flags &= -257, e = Td(t, e, n); else if (e.memoizedState !== null) e.child = t.child, e.flags |= 128, e = null; else throw Error(o(558)); else if (Xt || Ha(t, e, n, !1), s = (n & t.childLanes) !== 0, Xt || s) { if (a = Mt, a !== null && (f = hf(a, n), f !== 0 && f !== r.retryLane)) throw r.retryLane = f, ia(t, f), pe(a, t, f), wo; As(), e = Td(t, e, n) } else t = r.treeContext, Ct = _e(f.nextSibling), Pt = e, mt = !0, En = null, Oe = !1, t !== null && oh(e, t), e = hs(e, a), e.flags |= 4096; return e } return t = en(t.child, { mode: a.mode, children: a.children }), t.ref = e.ref, e.child = t, t.return = e, t } function ds(t, e) { var n = e.ref; if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816); else { if (typeof n != "function" && typeof n != "object") throw Error(o(284)); (t === null || t.ref !== n) && (e.flags |= 4194816) } } function Ro(t, e, n, a, s) { return oa(e), n = fo(t, e, n, a, void 0, s), a = ho(), t !== null && !Xt ? (mo(t, e, s), on(t, e, s)) : (mt && a && Qu(e), e.flags |= 1, It(t, e, n, s), e.child) } function Ad(t, e, n, a, s, r) { return oa(e), e.updateQueue = null, n = jh(e, a, n, s), Mh(t), a = ho(), t !== null && !Xt ? (mo(t, e, r), on(t, e, r)) : (mt && a && Qu(e), e.flags |= 1, It(t, e, n, r), e.child) } function Ed(t, e, n, a, s) { if (oa(e), e.stateNode === null) { var r = _a, f = n.contextType; typeof f == "object" && f !== null && (r = $t(f)), r = new n(a, r), e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Co, e.stateNode = r, r._reactInternals = e, r = e.stateNode, r.props = a, r.state = e.memoizedState, r.refs = {}, ao(e), f = n.contextType, r.context = typeof f == "object" && f !== null ? $t(f) : _a, r.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (No(e, n, f, a), r.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), f !== r.state && Co.enqueueReplaceState(r, r.state, null), Li(e, a, r, s), Ui(), r.state = e.memoizedState), typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = !0 } else if (t === null) { r = e.stateNode; var y = e.memoizedProps, S = ma(n, y); r.props = S; var D = r.context, w = n.contextType; f = _a, typeof w == "object" && w !== null && (f = $t(w)); var _ = n.getDerivedStateFromProps; w = typeof _ == "function" || typeof r.getSnapshotBeforeUpdate == "function", y = e.pendingProps !== y, w || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (y || D !== f) && cd(e, r, a, f), Dn = !1; var N = e.memoizedState; r.state = N, Li(e, a, r, s), Ui(), D = e.memoizedState, y || N !== D || Dn ? (typeof _ == "function" && (No(e, n, _, a), D = e.memoizedState), (S = Dn || rd(e, n, S, a, N, D, f)) ? (w || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = D), r.props = a, r.state = D, r.context = f, a = S) : (typeof r.componentDidMount == "function" && (e.flags |= 4194308), a = !1) } else { r = e.stateNode, io(t, e), f = e.memoizedProps, w = ma(n, f), r.props = w, _ = e.pendingProps, N = r.context, D = n.contextType, S = _a, typeof D == "object" && D !== null && (S = $t(D)), y = n.getDerivedStateFromProps, (D = typeof y == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== _ || N !== S) && cd(e, r, a, S), Dn = !1, N = e.memoizedState, r.state = N, Li(e, a, r, s), Ui(); var C = e.memoizedState; f !== _ || N !== C || Dn || t !== null && t.dependencies !== null && Jl(t.dependencies) ? (typeof y == "function" && (No(e, n, y, a), C = e.memoizedState), (w = Dn || rd(e, n, w, a, N, C, S) || t !== null && t.dependencies !== null && Jl(t.dependencies)) ? (D || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, C, S), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(a, C, S)), typeof r.componentDidUpdate == "function" && (e.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = C), r.props = a, r.state = C, r.context = S, a = w) : (typeof r.componentDidUpdate != "function" || f === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), a = !1) } return r = a, ds(t, e), a = (e.flags & 128) !== 0, r || a ? (r = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : r.render(), e.flags |= 1, t !== null && a ? (e.child = ha(e, t.child, null, s), e.child = ha(e, null, n, s)) : It(t, e, n, s), e.memoizedState = r.state, t = e.child) : t = on(t, e, s), t } function Md(t, e, n, a) { return sa(), e.flags |= 256, It(t, e, n, a), e.child } var Oo = { dehydrated: null, treeContext: null, retryLane: 0, hydrationErrors: null }; function Vo(t) { return { baseLanes: t, cachePool: mh() } } function _o(t, e, n) { return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ee), t } function jd(t, e, n) { var a = e.pendingProps, s = !1, r = (e.flags & 128) !== 0, f; if ((f = r) || (f = t !== null && t.memoizedState === null ? !1 : (Lt.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) { if (mt) { if (s ? zn(e) : wn(), (t = Ct) ? (t = Vm(t, Oe), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = { dehydrated: t, treeContext: An !== null ? { id: Qe, overflow: Ke } : null, retryLane: 536870912, hydrationErrors: null }, n = lh(t), n.return = e, e.child = n, Pt = e, Ct = null)) : t = null, t === null) throw Mn(e); return gr(t) ? e.lanes = 32 : e.lanes = 536870912, null } var y = a.children; return a = a.fallback, s ? (wn(), s = e.mode, y = ms({ mode: "hidden", children: y }, s), a = la(a, s, n, null), y.return = e, a.return = e, y.sibling = a, e.child = y, a = e.child, a.memoizedState = Vo(n), a.childLanes = _o(t, f, n), e.memoizedState = Oo, Xi(null, a)) : (zn(e), Bo(e, y)) } var S = t.memoizedState; if (S !== null && (y = S.dehydrated, y !== null)) { if (r) e.flags & 256 ? (zn(e), e.flags &= -257, e = Uo(t, e, n)) : e.memoizedState !== null ? (wn(), e.child = t.child, e.flags |= 128, e = null) : (wn(), y = a.fallback, s = e.mode, a = ms({ mode: "visible", children: a.children }, s), y = la(y, s, n, null), y.flags |= 2, a.return = e, y.return = e, a.sibling = y, e.child = a, ha(e, t.child, null, n), a = e.child, a.memoizedState = Vo(n), a.childLanes = _o(t, f, n), e.memoizedState = Oo, e = Xi(null, a)); else if (zn(e), gr(y)) { if (f = y.nextSibling && y.nextSibling.dataset, f) var D = f.dgst; f = D, a = Error(o(419)), a.stack = "", a.digest = f, wi({ value: a, source: null, stack: null }), e = Uo(t, e, n) } else if (Xt || Ha(t, e, n, !1), f = (n & t.childLanes) !== 0, Xt || f) { if (f = Mt, f !== null && (a = hf(f, n), a !== 0 && a !== S.retryLane)) throw S.retryLane = a, ia(t, a), pe(f, t, a), wo; yr(y) || As(), e = Uo(t, e, n) } else yr(y) ? (e.flags |= 192, e.child = t.child, e = null) : (t = S.treeContext, Ct = _e(y.nextSibling), Pt = e, mt = !0, En = null, Oe = !1, t !== null && oh(e, t), e = Bo(e, a.children), e.flags |= 4096); return e } return s ? (wn(), y = a.fallback, s = e.mode, S = t.child, D = S.sibling, a = en(S, { mode: "hidden", children: a.children }), a.subtreeFlags = S.subtreeFlags & 65011712, D !== null ? y = en(D, y) : (y = la(y, s, n, null), y.flags |= 2), y.return = e, a.return = e, a.sibling = y, e.child = a, Xi(null, a), a = e.child, y = t.child.memoizedState, y === null ? y = Vo(n) : (s = y.cachePool, s !== null ? (S = Gt._currentValue, s = s.parent !== S ? { parent: S, pool: S } : s) : s = mh(), y = { baseLanes: y.baseLanes | n, cachePool: s }), a.memoizedState = y, a.childLanes = _o(t, f, n), e.memoizedState = Oo, Xi(t.child, a)) : (zn(e), n = t.child, t = n.sibling, n = en(n, { mode: "visible", children: a.children }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n) } function Bo(t, e) { return e = ms({ mode: "visible", children: e }, t.mode), e.return = t, t.child = e } function ms(t, e) { return t = be(22, t, null, e), t.lanes = 0, t } function Uo(t, e, n) { return ha(e, t.child, null, n), t = Bo(e, e.pendingProps.children), t.flags |= 2, e.memoizedState = null, t } function Dd(t, e, n) { t.lanes |= e; var a = t.alternate; a !== null && (a.lanes |= e), Pu(t.return, e, n) } function Lo(t, e, n, a, s, r) { var f = t.memoizedState; f === null ? t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: a, tail: n, tailMode: s, treeForkCount: r } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = s, f.treeForkCount = r) } function Nd(t, e, n) { var a = e.pendingProps, s = a.revealOrder, r = a.tail; a = a.children; var f = Lt.current, y = (f & 2) !== 0; if (y ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, X(Lt, f), It(t, e, a, n), a = mt ? zi : 0, !y && t !== null && (t.flags & 128) !== 0) t: for (t = e.child; t !== null;) { if (t.tag === 13) t.memoizedState !== null && Dd(t, n, e); else if (t.tag === 19) Dd(t, n, e); else if (t.child !== null) { t.child.return = t, t = t.child; continue } if (t === e) break t; for (; t.sibling === null;) { if (t.return === null || t.return === e) break t; t = t.return } t.sibling.return = t.return, t = t.sibling } switch (s) { case "forwards": for (n = e.child, s = null; n !== null;)t = n.alternate, t !== null && ns(t) === null && (s = n), n = n.sibling; n = s, n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), Lo(e, !1, s, n, r, a); break; case "backwards": case "unstable_legacy-backwards": for (n = null, s = e.child, e.child = null; s !== null;) { if (t = s.alternate, t !== null && ns(t) === null) { e.child = s; break } t = s.sibling, s.sibling = n, n = s, s = t } Lo(e, !0, n, null, r, a); break; case "together": Lo(e, !1, null, null, void 0, a); break; default: e.memoizedState = null }return e.child } function on(t, e, n) { if (t !== null && (e.dependencies = t.dependencies), Vn |= e.lanes, (n & e.childLanes) === 0) if (t !== null) { if (Ha(t, e, n, !1), (n & e.childLanes) === 0) return null } else return null; if (t !== null && e.child !== t.child) throw Error(o(153)); if (e.child !== null) { for (t = e.child, n = en(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null;)t = t.sibling, n = n.sibling = en(t, t.pendingProps), n.return = e; n.sibling = null } return e.child } function Ho(t, e) { return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Jl(t))) } function Yv(t, e, n) { switch (e.tag) { case 3: ie(e, e.stateNode.containerInfo), jn(e, Gt, t.memoizedState.cache), sa(); break; case 27: case 5: pi(e); break; case 4: ie(e, e.stateNode.containerInfo); break; case 10: jn(e, e.type, e.memoizedProps.value); break; case 31: if (e.memoizedState !== null) return e.flags |= 128, ro(e), null; break; case 13: var a = e.memoizedState; if (a !== null) return a.dehydrated !== null ? (zn(e), e.flags |= 128, null) : (n & e.child.childLanes) !== 0 ? jd(t, e, n) : (zn(e), t = on(t, e, n), t !== null ? t.sibling : null); zn(e); break; case 19: var s = (t.flags & 128) !== 0; if (a = (n & e.childLanes) !== 0, a || (Ha(t, e, n, !1), a = (n & e.childLanes) !== 0), s) { if (a) return Nd(t, e, n); e.flags |= 128 } if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), X(Lt, Lt.current), a) break; return null; case 22: return e.lanes = 0, bd(t, e, n, e.pendingProps); case 24: jn(e, Gt, t.memoizedState.cache) }return on(t, e, n) } function Cd(t, e, n) { if (t !== null) if (t.memoizedProps !== e.pendingProps) Xt = !0; else { if (!Ho(t, n) && (e.flags & 128) === 0) return Xt = !1, Yv(t, e, n); Xt = (t.flags & 131072) !== 0 } else Xt = !1, mt && (e.flags & 1048576) !== 0 && uh(e, zi, e.index); switch (e.lanes = 0, e.tag) { case 16: t: { var a = e.pendingProps; if (t = ca(e.elementType), e.type = t, typeof t == "function") Xu(t) ? (a = ma(t, a), e.tag = 1, e = Ed(null, e, t, a, n)) : (e.tag = 0, e = Ro(null, e, t, a, n)); else { if (t != null) { var s = t.$$typeof; if (s === Z) { e.tag = 11, e = gd(null, e, t, a, n); break t } else if (s === I) { e.tag = 14, e = vd(null, e, t, a, n); break t } } throw e = je(t) || t, Error(o(306, e, "")) } } return e; case 0: return Ro(t, e, e.type, e.pendingProps, n); case 1: return a = e.type, s = ma(a, e.pendingProps), Ed(t, e, a, s, n); case 3: t: { if (ie(e, e.stateNode.containerInfo), t === null) throw Error(o(387)); a = e.pendingProps; var r = e.memoizedState; s = r.element, io(t, e), Li(e, a, null, n); var f = e.memoizedState; if (a = f.cache, jn(e, Gt, a), a !== r.cache && $u(e, [Gt], n, !0), Ui(), a = f.element, r.isDehydrated) if (r = { element: a, isDehydrated: !1, cache: f.cache }, e.updateQueue.baseState = r, e.memoizedState = r, e.flags & 256) { e = Md(t, e, a, n); break t } else if (a !== s) { s = ze(Error(o(424)), e), wi(s), e = Md(t, e, a, n); break t } else { switch (t = e.stateNode.containerInfo, t.nodeType) { case 9: t = t.body; break; default: t = t.nodeName === "HTML" ? t.ownerDocument.body : t }for (Ct = _e(t.firstChild), Pt = e, mt = !0, En = null, Oe = !0, n = bh(e, null, a, n), e.child = n; n;)n.flags = n.flags & -3 | 4096, n = n.sibling } else { if (sa(), a === s) { e = on(t, e, n); break t } It(t, e, a, n) } e = e.child } return e; case 26: return ds(t, e), t === null ? (n = qm(e.type, null, e.pendingProps, null)) ? e.memoizedState = n : mt || (n = e.type, t = e.pendingProps, a = zs(ot.current).createElement(n), a[Wt] = e, a[re] = t, te(a, n, t), Jt(a), e.stateNode = a) : e.memoizedState = qm(e.type, t.memoizedProps, e.pendingProps, t.memoizedState), null; case 27: return pi(e), t === null && mt && (a = e.stateNode = Um(e.type, e.pendingProps, ot.current), Pt = e, Oe = !0, s = Ct, Hn(e.type) ? (vr = s, Ct = _e(a.firstChild)) : Ct = s), It(t, e, e.pendingProps.children, n), ds(t, e), t === null && (e.flags |= 4194304), e.child; case 5: return t === null && mt && ((s = a = Ct) && (a = v1(a, e.type, e.pendingProps, Oe), a !== null ? (e.stateNode = a, Pt = e, Ct = _e(a.firstChild), Oe = !1, s = !0) : s = !1), s || Mn(e)), pi(e), s = e.type, r = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = r.children, dr(s, r) ? a = null : f !== null && dr(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = fo(t, e, Ov, null, null, n), il._currentValue = s), ds(t, e), It(t, e, a, n), e.child; case 6: return t === null && mt && ((t = n = Ct) && (n = x1(n, e.pendingProps, Oe), n !== null ? (e.stateNode = n, Pt = e, Ct = null, t = !0) : t = !1), t || Mn(e)), null; case 13: return jd(t, e, n); case 4: return ie(e, e.stateNode.containerInfo), a = e.pendingProps, t === null ? e.child = ha(e, null, a, n) : It(t, e, a, n), e.child; case 11: return gd(t, e, e.type, e.pendingProps, n); case 7: return It(t, e, e.pendingProps, n), e.child; case 8: return It(t, e, e.pendingProps.children, n), e.child; case 12: return It(t, e, e.pendingProps.children, n), e.child; case 10: return a = e.pendingProps, jn(e, e.type, a.value), It(t, e, a.children, n), e.child; case 9: return s = e.type._context, a = e.pendingProps.children, oa(e), s = $t(s), a = a(s), e.flags |= 1, It(t, e, a, n), e.child; case 14: return vd(t, e, e.type, e.pendingProps, n); case 15: return xd(t, e, e.type, e.pendingProps, n); case 19: return Nd(t, e, n); case 31: return Gv(t, e, n); case 22: return bd(t, e, n, e.pendingProps); case 24: return oa(e), a = $t(Gt), t === null ? (s = eo(), s === null && (s = Mt, r = Iu(), s.pooledCache = r, r.refCount++, r !== null && (s.pooledCacheLanes |= n), s = r), e.memoizedState = { parent: a, cache: s }, ao(e), jn(e, Gt, s)) : ((t.lanes & n) !== 0 && (io(t, e), Li(e, null, null, n), Ui()), s = t.memoizedState, r = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), jn(e, Gt, a)) : (a = r.cache, jn(e, Gt, a), a !== s.cache && $u(e, [Gt], n, !0))), It(t, e, e.pendingProps.children, n), e.child; case 29: throw e.pendingProps }throw Error(o(156, e.tag)) } function rn(t) { t.flags |= 4 } function qo(t, e, n, a, s) { if ((e = (t.mode & 32) !== 0) && (e = !1), e) { if (t.flags |= 16777216, (s & 335544128) === s) if (t.stateNode.complete) t.flags |= 8192; else if (nm()) t.flags |= 8192; else throw fa = $l, no } else t.flags &= -16777217 } function zd(t, e) { if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0) t.flags &= -16777217; else if (t.flags |= 16777216, !Zm(e)) if (nm()) t.flags |= 8192; else throw fa = $l, no } function ps(t, e) { e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? rf() : 536870912, t.lanes |= e, Pa |= e) } function ki(t, e) { if (!mt) switch (t.tailMode) { case "hidden": e = t.tail; for (var n = null; e !== null;)e.alternate !== null && (n = e), e = e.sibling; n === null ? t.tail = null : n.sibling = null; break; case "collapsed": n = t.tail; for (var a = null; n !== null;)n.alternate !== null && (a = n), n = n.sibling; a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null } } function zt(t) { var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0; if (e) for (var s = t.child; s !== null;)n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 65011712, a |= s.flags & 65011712, s.return = t, s = s.sibling; else for (s = t.child; s !== null;)n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = t, s = s.sibling; return t.subtreeFlags |= a, t.childLanes = n, e } function Xv(t, e, n) { var a = e.pendingProps; switch (Ku(e), e.tag) { case 16: case 15: case 0: case 11: case 7: case 8: case 12: case 9: case 14: return zt(e), null; case 1: return zt(e), null; case 3: return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), ln(Gt), Ut(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (La(e) ? rn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Fu())), zt(e), null; case 26: var s = e.type, r = e.memoizedState; return t === null ? (rn(e), r !== null ? (zt(e), zd(e, r)) : (zt(e), qo(e, s, null, a, n))) : r ? r !== t.memoizedState ? (rn(e), zt(e), zd(e, r)) : (zt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && rn(e), zt(e), qo(e, s, t, a, n)), null; case 27: if (jl(e), n = ot.current, s = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && rn(e); else { if (!a) { if (e.stateNode === null) throw Error(o(166)); return zt(e), null } t = W.current, La(e) ? rh(e) : (t = Um(s, a, n), e.stateNode = t, rn(e)) } return zt(e), null; case 5: if (jl(e), s = e.type, t !== null && e.stateNode != null) t.memoizedProps !== a && rn(e); else { if (!a) { if (e.stateNode === null) throw Error(o(166)); return zt(e), null } if (r = W.current, La(e)) rh(e); else { var f = zs(ot.current); switch (r) { case 1: r = f.createElementNS("http://www.w3.org/2000/svg", s); break; case 2: r = f.createElementNS("http://www.w3.org/1998/Math/MathML", s); break; default: switch (s) { case "svg": r = f.createElementNS("http://www.w3.org/2000/svg", s); break; case "math": r = f.createElementNS("http://www.w3.org/1998/Math/MathML", s); break; case "script": r = f.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild); break; case "select": r = typeof a.is == "string" ? f.createElement("select", { is: a.is }) : f.createElement("select"), a.multiple ? r.multiple = !0 : a.size && (r.size = a.size); break; default: r = typeof a.is == "string" ? f.createElement(s, { is: a.is }) : f.createElement(s) } }r[Wt] = e, r[re] = a; t: for (f = e.child; f !== null;) { if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode); else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) { f.child.return = f, f = f.child; continue } if (f === e) break t; for (; f.sibling === null;) { if (f.return === null || f.return === e) break t; f = f.return } f.sibling.return = f.return, f = f.sibling } e.stateNode = r; t: switch (te(r, s, a), s) { case "button": case "input": case "select": case "textarea": a = !!a.autoFocus; break t; case "img": a = !0; break t; default: a = !1 }a && rn(e) } } return zt(e), qo(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n), null; case 6: if (t && e.stateNode != null) t.memoizedProps !== a && rn(e); else { if (typeof a != "string" && e.stateNode === null) throw Error(o(166)); if (t = ot.current, La(e)) { if (t = e.stateNode, n = e.memoizedProps, a = null, s = Pt, s !== null) switch (s.tag) { case 27: case 5: a = s.memoizedProps }t[Wt] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || jm(t.nodeValue, n)), t || Mn(e, !0) } else t = zs(t).createTextNode(a), t[Wt] = e, e.stateNode = t } return zt(e), null; case 31: if (n = e.memoizedState, t === null || t.memoizedState !== null) { if (a = La(e), n !== null) { if (t === null) { if (!a) throw Error(o(318)); if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557)); t[Wt] = e } else sa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4; zt(e), t = !1 } else n = Fu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0; if (!t) return e.flags & 256 ? (Te(e), e) : (Te(e), null); if ((e.flags & 128) !== 0) throw Error(o(558)) } return zt(e), null; case 13: if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) { if (s = La(e), a !== null && a.dehydrated !== null) { if (t === null) { if (!s) throw Error(o(318)); if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(o(317)); s[Wt] = e } else sa(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4; zt(e), s = !1 } else s = Fu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0; if (!s) return e.flags & 256 ? (Te(e), e) : (Te(e), null) } return Te(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), r = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool), r !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), ps(e, e.updateQueue), zt(e), null); case 4: return Ut(), t === null && or(e.stateNode.containerInfo), zt(e), null; case 10: return ln(e.type), zt(e), null; case 19: if (B(Lt), a = e.memoizedState, a === null) return zt(e), null; if (s = (e.flags & 128) !== 0, r = a.rendering, r === null) if (s) ki(a, !1); else { if (Vt !== 0 || t !== null && (t.flags & 128) !== 0) for (t = e.child; t !== null;) { if (r = ns(t), r !== null) { for (e.flags |= 128, ki(a, !1), t = r.updateQueue, e.updateQueue = t, ps(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null;)ih(n, t), n = n.sibling; return X(Lt, Lt.current & 1 | 2), mt && nn(e, a.treeForkCount), e.child } t = t.sibling } a.tail !== null && ye() > bs && (e.flags |= 128, s = !0, ki(a, !1), e.lanes = 4194304) } else { if (!s) if (t = ns(r), t !== null) { if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, ps(e, t), ki(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !mt) return zt(e), null } else 2 * ye() - a.renderingStartTime > bs && n !== 536870912 && (e.flags |= 128, s = !0, ki(a, !1), e.lanes = 4194304); a.isBackwards ? (r.sibling = e.child, e.child = r) : (t = a.last, t !== null ? t.sibling = r : e.child = r, a.last = r) } return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ye(), t.sibling = null, n = Lt.current, X(Lt, s ? n & 1 | 2 : n & 1), mt && nn(e, a.treeForkCount), t) : (zt(e), null); case 22: case 23: return Te(e), oo(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : zt(e), n = e.updateQueue, n !== null && ps(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && B(ra), null; case 24: return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), ln(Gt), zt(e), null; case 25: return null; case 30: return null }throw Error(o(156, e.tag)) } function kv(t, e) { switch (Ku(e), e.tag) { case 1: return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null; case 3: return ln(Gt), Ut(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null; case 26: case 27: case 5: return jl(e), null; case 31: if (e.memoizedState !== null) { if (Te(e), e.alternate === null) throw Error(o(340)); sa() } return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null; case 13: if (Te(e), t = e.memoizedState, t !== null && t.dehydrated !== null) { if (e.alternate === null) throw Error(o(340)); sa() } return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null; case 19: return B(Lt), null; case 4: return Ut(), null; case 10: return ln(e.type), null; case 22: case 23: return Te(e), oo(), t !== null && B(ra), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null; case 24: return ln(Gt), null; case 25: return null; default: return null } } function wd(t, e) { switch (Ku(e), e.tag) { case 3: ln(Gt), Ut(); break; case 26: case 27: case 5: jl(e); break; case 4: Ut(); break; case 31: e.memoizedState !== null && Te(e); break; case 13: Te(e); break; case 19: B(Lt); break; case 10: ln(e.type); break; case 22: case 23: Te(e), oo(), t !== null && B(ra); break; case 24: ln(Gt) } } function Zi(t, e) { try { var n = e.updateQueue, a = n !== null ? n.lastEffect : null; if (a !== null) { var s = a.next; n = s; do { if ((n.tag & t) === t) { a = void 0; var r = n.create, f = n.inst; a = r(), f.destroy = a } n = n.next } while (n !== s) } } catch (y) { St(e, e.return, y) } } function Rn(t, e, n) { try { var a = e.updateQueue, s = a !== null ? a.lastEffect : null; if (s !== null) { var r = s.next; a = r; do { if ((a.tag & t) === t) { var f = a.inst, y = f.destroy; if (y !== void 0) { f.destroy = void 0, s = e; var S = n, D = y; try { D() } catch (w) { St(s, S, w) } } } a = a.next } while (a !== r) } } catch (w) { St(e, e.return, w) } } function Rd(t) { var e = t.updateQueue; if (e !== null) { var n = t.stateNode; try { Th(e, n) } catch (a) { St(t, t.return, a) } } } function Od(t, e, n) { n.props = ma(t.type, t.memoizedProps), n.state = t.memoizedState; try { n.componentWillUnmount() } catch (a) { St(t, e, a) } } function Qi(t, e) { try { var n = t.ref; if (n !== null) { switch (t.tag) { case 26: case 27: case 5: var a = t.stateNode; break; case 30: a = t.stateNode; break; default: a = t.stateNode }typeof n == "function" ? t.refCleanup = n(a) : n.current = a } } catch (s) { St(t, e, s) } } function Je(t, e) { var n = t.ref, a = t.refCleanup; if (n !== null) if (typeof a == "function") try { a() } catch (s) { St(t, e, s) } finally { t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null) } else if (typeof n == "function") try { n(null) } catch (s) { St(t, e, s) } else n.current = null } function Vd(t) { var e = t.type, n = t.memoizedProps, a = t.stateNode; try { t: switch (e) { case "button": case "input": case "select": case "textarea": n.autoFocus && a.focus(); break t; case "img": n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet) } } catch (s) { St(t, t.return, s) } } function Go(t, e, n) { try { var a = t.stateNode; h1(a, t.type, n, e), a[re] = e } catch (s) { St(t, t.return, s) } } function _d(t) { return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Hn(t.type) || t.tag === 4 } function Yo(t) { t: for (; ;) { for (; t.sibling === null;) { if (t.return === null || _d(t.return)) return null; t = t.return } for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) { if (t.tag === 27 && Hn(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t; t.child.return = t, t = t.child } if (!(t.flags & 2)) return t.stateNode } } function Xo(t, e, n) { var a = t.tag; if (a === 5 || a === 6) t = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(t, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(t), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Ie)); else if (a !== 4 && (a === 27 && Hn(t.type) && (n = t.stateNode, e = null), t = t.child, t !== null)) for (Xo(t, e, n), t = t.sibling; t !== null;)Xo(t, e, n), t = t.sibling } function ys(t, e, n) { var a = t.tag; if (a === 5 || a === 6) t = t.stateNode, e ? n.insertBefore(t, e) : n.appendChild(t); else if (a !== 4 && (a === 27 && Hn(t.type) && (n = t.stateNode), t = t.child, t !== null)) for (ys(t, e, n), t = t.sibling; t !== null;)ys(t, e, n), t = t.sibling } function Bd(t) { var e = t.stateNode, n = t.memoizedProps; try { for (var a = t.type, s = e.attributes; s.length;)e.removeAttributeNode(s[0]); te(e, a, n), e[Wt] = t, e[re] = n } catch (r) { St(t, t.return, r) } } var cn = !1, kt = !1, ko = !1, Ud = typeof WeakSet == "function" ? WeakSet : Set, Ft = null; function Zv(t, e) { if (t = t.containerInfo, fr = Us, t = Ff(t), Bu(t)) { if ("selectionStart" in t) var n = { start: t.selectionStart, end: t.selectionEnd }; else t: { n = (n = t.ownerDocument) && n.defaultView || window; var a = n.getSelection && n.getSelection(); if (a && a.rangeCount !== 0) { n = a.anchorNode; var s = a.anchorOffset, r = a.focusNode; a = a.focusOffset; try { n.nodeType, r.nodeType } catch { n = null; break t } var f = 0, y = -1, S = -1, D = 0, w = 0, _ = t, N = null; e: for (; ;) { for (var C; _ !== n || s !== 0 && _.nodeType !== 3 || (y = f + s), _ !== r || a !== 0 && _.nodeType !== 3 || (S = f + a), _.nodeType === 3 && (f += _.nodeValue.length), (C = _.firstChild) !== null;)N = _, _ = C; for (; ;) { if (_ === t) break e; if (N === n && ++D === s && (y = f), N === r && ++w === a && (S = f), (C = _.nextSibling) !== null) break; _ = N, N = _.parentNode } _ = C } n = y === -1 || S === -1 ? null : { start: y, end: S } } else n = null } n = n || { start: 0, end: 0 } } else n = null; for (hr = { focusedElem: t, selectionRange: n }, Us = !1, Ft = e; Ft !== null;)if (e = Ft, t = e.child, (e.subtreeFlags & 1028) !== 0 && t !== null) t.return = e, Ft = t; else for (; Ft !== null;) { switch (e = Ft, r = e.alternate, t = e.flags, e.tag) { case 0: if ((t & 4) !== 0 && (t = e.updateQueue, t = t !== null ? t.events : null, t !== null)) for (n = 0; n < t.length; n++)s = t[n], s.ref.impl = s.nextImpl; break; case 11: case 15: break; case 1: if ((t & 1024) !== 0 && r !== null) { t = void 0, n = e, s = r.memoizedProps, r = r.memoizedState, a = n.stateNode; try { var K = ma(n.type, s); t = a.getSnapshotBeforeUpdate(K, r), a.__reactInternalSnapshotBeforeUpdate = t } catch (et) { St(n, n.return, et) } } break; case 3: if ((t & 1024) !== 0) { if (t = e.stateNode.containerInfo, n = t.nodeType, n === 9) pr(t); else if (n === 1) switch (t.nodeName) { case "HEAD": case "HTML": case "BODY": pr(t); break; default: t.textContent = "" } } break; case 5: case 26: case 27: case 6: case 4: case 17: break; default: if ((t & 1024) !== 0) throw Error(o(163)) }if (t = e.sibling, t !== null) { t.return = e.return, Ft = t; break } Ft = e.return } } function Ld(t, e, n) { var a = n.flags; switch (n.tag) { case 0: case 11: case 15: hn(t, n), a & 4 && Zi(5, n); break; case 1: if (hn(t, n), a & 4) if (t = n.stateNode, e === null) try { t.componentDidMount() } catch (f) { St(n, n.return, f) } else { var s = ma(n.type, e.memoizedProps); e = e.memoizedState; try { t.componentDidUpdate(s, e, t.__reactInternalSnapshotBeforeUpdate) } catch (f) { St(n, n.return, f) } } a & 64 && Rd(n), a & 512 && Qi(n, n.return); break; case 3: if (hn(t, n), a & 64 && (t = n.updateQueue, t !== null)) { if (e = null, n.child !== null) switch (n.child.tag) { case 27: case 5: e = n.child.stateNode; break; case 1: e = n.child.stateNode }try { Th(t, e) } catch (f) { St(n, n.return, f) } } break; case 27: e === null && a & 4 && Bd(n); case 26: case 5: hn(t, n), e === null && a & 4 && Vd(n), a & 512 && Qi(n, n.return); break; case 12: hn(t, n); break; case 31: hn(t, n), a & 4 && Gd(t, n); break; case 13: hn(t, n), a & 4 && Yd(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = t1.bind(null, n), b1(t, n)))); break; case 22: if (a = n.memoizedState !== null || cn, !a) { e = e !== null && e.memoizedState !== null || kt, s = cn; var r = kt; cn = a, (kt = e) && !r ? dn(t, n, (n.subtreeFlags & 8772) !== 0) : hn(t, n), cn = s, kt = r } break; case 30: break; default: hn(t, n) } } function Hd(t) { var e = t.alternate; e !== null && (t.alternate = null, Hd(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && xu(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null } var wt = null, fe = !1; function fn(t, e, n) { for (n = n.child; n !== null;)qd(t, e, n), n = n.sibling } function qd(t, e, n) { if (ge && typeof ge.onCommitFiberUnmount == "function") try { ge.onCommitFiberUnmount(yi, n) } catch { } switch (n.tag) { case 26: kt || Je(n, e), fn(t, e, n), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n)); break; case 27: kt || Je(n, e); var a = wt, s = fe; Hn(n.type) && (wt = n.stateNode, fe = !1), fn(t, e, n), el(n.stateNode), wt = a, fe = s; break; case 5: kt || Je(n, e); case 6: if (a = wt, s = fe, wt = null, fn(t, e, n), wt = a, fe = s, wt !== null) if (fe) try { (wt.nodeType === 9 ? wt.body : wt.nodeName === "HTML" ? wt.ownerDocument.body : wt).removeChild(n.stateNode) } catch (r) { St(n, e, r) } else try { wt.removeChild(n.stateNode) } catch (r) { St(n, e, r) } break; case 18: wt !== null && (fe ? (t = wt, Rm(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, n.stateNode), li(t)) : Rm(wt, n.stateNode)); break; case 4: a = wt, s = fe, wt = n.stateNode.containerInfo, fe = !0, fn(t, e, n), wt = a, fe = s; break; case 0: case 11: case 14: case 15: Rn(2, n, e), kt || Rn(4, n, e), fn(t, e, n); break; case 1: kt || (Je(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Od(n, e, a)), fn(t, e, n); break; case 21: fn(t, e, n); break; case 22: kt = (a = kt) || n.memoizedState !== null, fn(t, e, n), kt = a; break; default: fn(t, e, n) } } function Gd(t, e) { if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) { t = t.dehydrated; try { li(t) } catch (n) { St(e, e.return, n) } } } function Yd(t, e) { if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null)))) try { li(t) } catch (n) { St(e, e.return, n) } } function Qv(t) { switch (t.tag) { case 31: case 13: case 19: var e = t.stateNode; return e === null && (e = t.stateNode = new Ud), e; case 22: return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ud), e; default: throw Error(o(435, t.tag)) } } function gs(t, e) { var n = Qv(t); e.forEach(function (a) { if (!n.has(a)) { n.add(a); var s = e1.bind(null, t, a); a.then(s, s) } }) } function he(t, e) { var n = e.deletions; if (n !== null) for (var a = 0; a < n.length; a++) { var s = n[a], r = t, f = e, y = f; t: for (; y !== null;) { switch (y.tag) { case 27: if (Hn(y.type)) { wt = y.stateNode, fe = !1; break t } break; case 5: wt = y.stateNode, fe = !1; break t; case 3: case 4: wt = y.stateNode.containerInfo, fe = !0; break t }y = y.return } if (wt === null) throw Error(o(160)); qd(r, f, s), wt = null, fe = !1, r = s.alternate, r !== null && (r.return = null), s.return = null } if (e.subtreeFlags & 13886) for (e = e.child; e !== null;)Xd(e, t), e = e.sibling } var Ye = null; function Xd(t, e) { var n = t.alternate, a = t.flags; switch (t.tag) { case 0: case 11: case 14: case 15: he(e, t), de(t), a & 4 && (Rn(3, t, t.return), Zi(3, t), Rn(5, t, t.return)); break; case 1: he(e, t), de(t), a & 512 && (kt || n === null || Je(n, n.return)), a & 64 && cn && (t = t.updateQueue, t !== null && (a = t.callbacks, a !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? a : n.concat(a)))); break; case 26: var s = Ye; if (he(e, t), de(t), a & 512 && (kt || n === null || Je(n, n.return)), a & 4) { var r = n !== null ? n.memoizedState : null; if (a = t.memoizedState, n === null) if (a === null) if (t.stateNode === null) { t: { a = t.type, n = t.memoizedProps, s = s.ownerDocument || s; e: switch (a) { case "title": r = s.getElementsByTagName("title")[0], (!r || r[xi] || r[Wt] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = s.createElement(a), s.head.insertBefore(r, s.querySelector("head > title"))), te(r, a, n), r[Wt] = t, Jt(r), a = r; break t; case "link": var f = Xm("link", "href", s).get(a + (n.href || "")); if (f) { for (var y = 0; y < f.length; y++)if (r = f[y], r.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && r.getAttribute("rel") === (n.rel == null ? null : n.rel) && r.getAttribute("title") === (n.title == null ? null : n.title) && r.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) { f.splice(y, 1); break e } } r = s.createElement(a), te(r, a, n), s.head.appendChild(r); break; case "meta": if (f = Xm("meta", "content", s).get(a + (n.content || ""))) { for (y = 0; y < f.length; y++)if (r = f[y], r.getAttribute("content") === (n.content == null ? null : "" + n.content) && r.getAttribute("name") === (n.name == null ? null : n.name) && r.getAttribute("property") === (n.property == null ? null : n.property) && r.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) { f.splice(y, 1); break e } } r = s.createElement(a), te(r, a, n), s.head.appendChild(r); break; default: throw Error(o(468, a)) }r[Wt] = t, Jt(r), a = r } t.stateNode = a } else km(s, t.type, t.stateNode); else t.stateNode = Ym(s, a, t.memoizedProps); else r !== a ? (r === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : r.count--, a === null ? km(s, t.type, t.stateNode) : Ym(s, a, t.memoizedProps)) : a === null && t.stateNode !== null && Go(t, t.memoizedProps, n.memoizedProps) } break; case 27: he(e, t), de(t), a & 512 && (kt || n === null || Je(n, n.return)), n !== null && a & 4 && Go(t, t.memoizedProps, n.memoizedProps); break; case 5: if (he(e, t), de(t), a & 512 && (kt || n === null || Je(n, n.return)), t.flags & 32) { s = t.stateNode; try { Na(s, "") } catch (K) { St(t, t.return, K) } } a & 4 && t.stateNode != null && (s = t.memoizedProps, Go(t, s, n !== null ? n.memoizedProps : s)), a & 1024 && (ko = !0); break; case 6: if (he(e, t), de(t), a & 4) { if (t.stateNode === null) throw Error(o(162)); a = t.memoizedProps, n = t.stateNode; try { n.nodeValue = a } catch (K) { St(t, t.return, K) } } break; case 3: if (Os = null, s = Ye, Ye = ws(e.containerInfo), he(e, t), Ye = s, de(t), a & 4 && n !== null && n.memoizedState.isDehydrated) try { li(e.containerInfo) } catch (K) { St(t, t.return, K) } ko && (ko = !1, kd(t)); break; case 4: a = Ye, Ye = ws(t.stateNode.containerInfo), he(e, t), de(t), Ye = a; break; case 12: he(e, t), de(t); break; case 31: he(e, t), de(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gs(t, a))); break; case 13: he(e, t), de(t), t.child.flags & 8192 && t.memoizedState !== null != (n !== null && n.memoizedState !== null) && (xs = ye()), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gs(t, a))); break; case 22: s = t.memoizedState !== null; var S = n !== null && n.memoizedState !== null, D = cn, w = kt; if (cn = D || s, kt = w || S, he(e, t), kt = w, cn = D, de(t), a & 8192) t: for (e = t.stateNode, e._visibility = s ? e._visibility & -2 : e._visibility | 1, s && (n === null || S || cn || kt || pa(t)), n = null, e = t; ;) { if (e.tag === 5 || e.tag === 26) { if (n === null) { S = n = e; try { if (r = S.stateNode, s) f = r.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none"; else { y = S.stateNode; var _ = S.memoizedProps.style, N = _ != null && _.hasOwnProperty("display") ? _.display : null; y.style.display = N == null || typeof N == "boolean" ? "" : ("" + N).trim() } } catch (K) { St(S, S.return, K) } } } else if (e.tag === 6) { if (n === null) { S = e; try { S.stateNode.nodeValue = s ? "" : S.memoizedProps } catch (K) { St(S, S.return, K) } } } else if (e.tag === 18) { if (n === null) { S = e; try { var C = S.stateNode; s ? Om(C, !0) : Om(S.stateNode, !1) } catch (K) { St(S, S.return, K) } } } else if ((e.tag !== 22 && e.tag !== 23 || e.memoizedState === null || e === t) && e.child !== null) { e.child.return = e, e = e.child; continue } if (e === t) break t; for (; e.sibling === null;) { if (e.return === null || e.return === t) break t; n === e && (n = null), e = e.return } n === e && (n = null), e.sibling.return = e.return, e = e.sibling } a & 4 && (a = t.updateQueue, a !== null && (n = a.retryQueue, n !== null && (a.retryQueue = null, gs(t, n)))); break; case 19: he(e, t), de(t), a & 4 && (a = t.updateQueue, a !== null && (t.updateQueue = null, gs(t, a))); break; case 30: break; case 21: break; default: he(e, t), de(t) } } function de(t) { var e = t.flags; if (e & 2) { try { for (var n, a = t.return; a !== null;) { if (_d(a)) { n = a; break } a = a.return } if (n == null) throw Error(o(160)); switch (n.tag) { case 27: var s = n.stateNode, r = Yo(t); ys(t, r, s); break; case 5: var f = n.stateNode; n.flags & 32 && (Na(f, ""), n.flags &= -33); var y = Yo(t); ys(t, y, f); break; case 3: case 4: var S = n.stateNode.containerInfo, D = Yo(t); Xo(t, D, S); break; default: throw Error(o(161)) } } catch (w) { St(t, t.return, w) } t.flags &= -3 } e & 4096 && (t.flags &= -4097) } function kd(t) { if (t.subtreeFlags & 1024) for (t = t.child; t !== null;) { var e = t; kd(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), t = t.sibling } } function hn(t, e) { if (e.subtreeFlags & 8772) for (e = e.child; e !== null;)Ld(t, e.alternate, e), e = e.sibling } function pa(t) { for (t = t.child; t !== null;) { var e = t; switch (e.tag) { case 0: case 11: case 14: case 15: Rn(4, e, e.return), pa(e); break; case 1: Je(e, e.return); var n = e.stateNode; typeof n.componentWillUnmount == "function" && Od(e, e.return, n), pa(e); break; case 27: el(e.stateNode); case 26: case 5: Je(e, e.return), pa(e); break; case 22: e.memoizedState === null && pa(e); break; case 30: pa(e); break; default: pa(e) }t = t.sibling } } function dn(t, e, n) { for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) { var a = e.alternate, s = t, r = e, f = r.flags; switch (r.tag) { case 0: case 11: case 15: dn(s, r, n), Zi(4, r); break; case 1: if (dn(s, r, n), a = r, s = a.stateNode, typeof s.componentDidMount == "function") try { s.componentDidMount() } catch (D) { St(a, a.return, D) } if (a = r, s = a.updateQueue, s !== null) { var y = a.stateNode; try { var S = s.shared.hiddenCallbacks; if (S !== null) for (s.shared.hiddenCallbacks = null, s = 0; s < S.length; s++)Sh(S[s], y) } catch (D) { St(a, a.return, D) } } n && f & 64 && Rd(r), Qi(r, r.return); break; case 27: Bd(r); case 26: case 5: dn(s, r, n), n && a === null && f & 4 && Vd(r), Qi(r, r.return); break; case 12: dn(s, r, n); break; case 31: dn(s, r, n), n && f & 4 && Gd(s, r); break; case 13: dn(s, r, n), n && f & 4 && Yd(s, r); break; case 22: r.memoizedState === null && dn(s, r, n), Qi(r, r.return); break; case 30: break; default: dn(s, r, n) }e = e.sibling } } function Zo(t, e) { var n = null; t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Ri(n)) } function Qo(t, e) { t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ri(t)) } function Xe(t, e, n, a) { if (e.subtreeFlags & 10256) for (e = e.child; e !== null;)Zd(t, e, n, a), e = e.sibling } function Zd(t, e, n, a) { var s = e.flags; switch (e.tag) { case 0: case 11: case 15: Xe(t, e, n, a), s & 2048 && Zi(9, e); break; case 1: Xe(t, e, n, a); break; case 3: Xe(t, e, n, a), s & 2048 && (t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Ri(t))); break; case 12: if (s & 2048) { Xe(t, e, n, a), t = e.stateNode; try { var r = e.memoizedProps, f = r.id, y = r.onPostCommit; typeof y == "function" && y(f, e.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0) } catch (S) { St(e, e.return, S) } } else Xe(t, e, n, a); break; case 31: Xe(t, e, n, a); break; case 13: Xe(t, e, n, a); break; case 23: break; case 22: r = e.stateNode, f = e.alternate, e.memoizedState !== null ? r._visibility & 2 ? Xe(t, e, n, a) : Ki(t, e) : r._visibility & 2 ? Xe(t, e, n, a) : (r._visibility |= 2, Ja(t, e, n, a, (e.subtreeFlags & 10256) !== 0 || !1)), s & 2048 && Zo(f, e); break; case 24: Xe(t, e, n, a), s & 2048 && Qo(e.alternate, e); break; default: Xe(t, e, n, a) } } function Ja(t, e, n, a, s) { for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null;) { var r = t, f = e, y = n, S = a, D = f.flags; switch (f.tag) { case 0: case 11: case 15: Ja(r, f, y, S, s), Zi(8, f); break; case 23: break; case 22: var w = f.stateNode; f.memoizedState !== null ? w._visibility & 2 ? Ja(r, f, y, S, s) : Ki(r, f) : (w._visibility |= 2, Ja(r, f, y, S, s)), s && D & 2048 && Zo(f.alternate, f); break; case 24: Ja(r, f, y, S, s), s && D & 2048 && Qo(f.alternate, f); break; default: Ja(r, f, y, S, s) }e = e.sibling } } function Ki(t, e) { if (e.subtreeFlags & 10256) for (e = e.child; e !== null;) { var n = t, a = e, s = a.flags; switch (a.tag) { case 22: Ki(n, a), s & 2048 && Zo(a.alternate, a); break; case 24: Ki(n, a), s & 2048 && Qo(a.alternate, a); break; default: Ki(n, a) }e = e.sibling } } var Ji = 8192; function Fa(t, e, n) { if (t.subtreeFlags & Ji) for (t = t.child; t !== null;)Qd(t, e, n), t = t.sibling } function Qd(t, e, n) { switch (t.tag) { case 26: Fa(t, e, n), t.flags & Ji && t.memoizedState !== null && R1(n, Ye, t.memoizedState, t.memoizedProps); break; case 5: Fa(t, e, n); break; case 3: case 4: var a = Ye; Ye = ws(t.stateNode.containerInfo), Fa(t, e, n), Ye = a; break; case 22: t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = Ji, Ji = 16777216, Fa(t, e, n), Ji = a) : Fa(t, e, n)); break; default: Fa(t, e, n) } } function Kd(t) { var e = t.alternate; if (e !== null && (t = e.child, t !== null)) { e.child = null; do e = t.sibling, t.sibling = null, t = e; while (t !== null) } } function Fi(t) { var e = t.deletions; if ((t.flags & 16) !== 0) { if (e !== null) for (var n = 0; n < e.length; n++) { var a = e[n]; Ft = a, Fd(a, t) } Kd(t) } if (t.subtreeFlags & 10256) for (t = t.child; t !== null;)Jd(t), t = t.sibling } function Jd(t) { switch (t.tag) { case 0: case 11: case 15: Fi(t), t.flags & 2048 && Rn(9, t, t.return); break; case 3: Fi(t); break; case 12: Fi(t); break; case 22: var e = t.stateNode; t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, vs(t)) : Fi(t); break; default: Fi(t) } } function vs(t) { var e = t.deletions; if ((t.flags & 16) !== 0) { if (e !== null) for (var n = 0; n < e.length; n++) { var a = e[n]; Ft = a, Fd(a, t) } Kd(t) } for (t = t.child; t !== null;) { switch (e = t, e.tag) { case 0: case 11: case 15: Rn(8, e, e.return), vs(e); break; case 22: n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, vs(e)); break; default: vs(e) }t = t.sibling } } function Fd(t, e) { for (; Ft !== null;) { var n = Ft; switch (n.tag) { case 0: case 11: case 15: Rn(8, n, e); break; case 23: case 22: if (n.memoizedState !== null && n.memoizedState.cachePool !== null) { var a = n.memoizedState.cachePool.pool; a != null && a.refCount++ } break; case 24: Ri(n.memoizedState.cache) }if (a = n.child, a !== null) a.return = n, Ft = a; else t: for (n = t; Ft !== null;) { a = Ft; var s = a.sibling, r = a.return; if (Hd(a), a === n) { Ft = null; break t } if (s !== null) { s.return = r, Ft = s; break t } Ft = r } } } var Kv = { getCacheForType: function (t) { var e = $t(Gt), n = e.data.get(t); return n === void 0 && (n = t(), e.data.set(t, n)), n }, cacheSignal: function () { return $t(Gt).controller.signal } }, Jv = typeof WeakMap == "function" ? WeakMap : Map, vt = 0, Mt = null, rt = null, ht = 0, bt = 0, Ae = null, On = !1, Wa = !1, Ko = !1, mn = 0, Vt = 0, Vn = 0, ya = 0, Jo = 0, Ee = 0, Pa = 0, Wi = null, me = null, Fo = !1, xs = 0, Wd = 0, bs = 1 / 0, Ss = null, _n = null, Qt = 0, Bn = null, $a = null, pn = 0, Wo = 0, Po = null, Pd = null, Pi = 0, $o = null; function Me() { return (vt & 2) !== 0 && ht !== 0 ? ht & -ht : O.T !== null ? ir() : df() } function $d() { if (Ee === 0) if ((ht & 536870912) === 0 || mt) { var t = Cl; Cl <<= 1, (Cl & 3932160) === 0 && (Cl = 262144), Ee = t } else Ee = 536870912; return t = Se.current, t !== null && (t.flags |= 32), Ee } function pe(t, e, n) { (t === Mt && (bt === 2 || bt === 9) || t.cancelPendingCommit !== null) && (Ia(t, 0), Un(t, ht, Ee, !1)), vi(t, n), ((vt & 2) === 0 || t !== Mt) && (t === Mt && ((vt & 2) === 0 && (ya |= n), Vt === 4 && Un(t, ht, Ee, !1)), Fe(t)) } function Id(t, e, n) { if ((vt & 6) !== 0) throw Error(o(327)); var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || gi(t, e), s = a ? Pv(t, e) : tr(t, e, !0), r = a; do { if (s === 0) { Wa && !a && Un(t, e, 0, !1); break } else { if (n = t.current.alternate, r && !Fv(n)) { s = tr(t, e, !1), r = !1; continue } if (s === 2) { if (r = e, t.errorRecoveryDisabledLanes & r) var f = 0; else f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0; if (f !== 0) { e = f; t: { var y = t; s = Wi; var S = y.current.memoizedState.isDehydrated; if (S && (Ia(y, f).flags |= 256), f = tr(y, f, !1), f !== 2) { if (Ko && !S) { y.errorRecoveryDisabledLanes |= r, ya |= r, s = 4; break t } r = me, me = s, r !== null && (me === null ? me = r : me.push.apply(me, r)) } s = f } if (r = !1, s !== 2) continue } } if (s === 1) { Ia(t, 0), Un(t, e, 0, !0); break } t: { switch (a = t, r = s, r) { case 0: case 1: throw Error(o(345)); case 4: if ((e & 4194048) !== e) break; case 6: Un(a, e, Ee, !On); break t; case 2: me = null; break; case 3: case 5: break; default: throw Error(o(329)) }if ((e & 62914560) === e && (s = xs + 300 - ye(), 10 < s)) { if (Un(a, e, Ee, !On), wl(a, 0, !0) !== 0) break t; pn = e, a.timeoutHandle = zm(tm.bind(null, a, n, me, Ss, Fo, e, Ee, ya, Pa, On, r, "Throttled", -0, 0), s); break t } tm(a, n, me, Ss, Fo, e, Ee, ya, Pa, On, r, null, -0, 0) } } break } while (!0); Fe(t) } function tm(t, e, n, a, s, r, f, y, S, D, w, _, N, C) { if (t.timeoutHandle = -1, _ = e.subtreeFlags, _ & 8192 || (_ & 16785408) === 16785408) { _ = { stylesheets: null, count: 0, imgCount: 0, imgBytes: 0, suspenseyImages: [], waitingForImages: !0, waitingForViewTransition: !1, unsuspend: Ie }, Qd(e, r, _); var K = (r & 62914560) === r ? xs - ye() : (r & 4194048) === r ? Wd - ye() : 0; if (K = O1(_, K), K !== null) { pn = r, t.cancelPendingCommit = K(om.bind(null, t, e, r, n, a, s, f, y, S, w, _, null, N, C)), Un(t, r, f, !D); return } } om(t, e, r, n, a, s, f, y, S) } function Fv(t) { for (var e = t; ;) { var n = e.tag; if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null))) for (var a = 0; a < n.length; a++) { var s = n[a], r = s.getSnapshot; s = s.value; try { if (!xe(r(), s)) return !1 } catch { return !1 } } if (n = e.child, e.subtreeFlags & 16384 && n !== null) n.return = e, e = n; else { if (e === t) break; for (; e.sibling === null;) { if (e.return === null || e.return === t) return !0; e = e.return } e.sibling.return = e.return, e = e.sibling } } return !0 } function Un(t, e, n, a) { e &= ~Jo, e &= ~ya, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes; for (var s = e; 0 < s;) { var r = 31 - ve(s), f = 1 << r; a[r] = -1, s &= ~f } n !== 0 && cf(t, n, e) } function Ts() { return (vt & 6) === 0 ? ($i(0), !1) : !0 } function Io() { if (rt !== null) { if (bt === 0) var t = rt.return; else t = rt, an = ua = null, po(t), Xa = null, Vi = 0, t = rt; for (; t !== null;)wd(t.alternate, t), t = t.return; rt = null } } function Ia(t, e) { var n = t.timeoutHandle; n !== -1 && (t.timeoutHandle = -1, p1(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), pn = 0, Io(), Mt = t, rt = n = en(t.current, null), ht = e, bt = 0, Ae = null, On = !1, Wa = gi(t, e), Ko = !1, Pa = Ee = Jo = ya = Vn = Vt = 0, me = Wi = null, Fo = !1, (e & 8) !== 0 && (e |= e & 32); var a = t.entangledLanes; if (a !== 0) for (t = t.entanglements, a &= e; 0 < a;) { var s = 31 - ve(a), r = 1 << s; e |= t[s], a &= ~r } return mn = e, Xl(), n } function em(t, e) { st = null, O.H = Yi, e === Ya || e === Pl ? (e = gh(), bt = 3) : e === no ? (e = gh(), bt = 4) : bt = e === wo ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Ae = e, rt === null && (Vt = 1, fs(t, ze(e, t.current))) } function nm() { var t = Se.current; return t === null ? !0 : (ht & 4194048) === ht ? Ve === null : (ht & 62914560) === ht || (ht & 536870912) !== 0 ? t === Ve : !1 } function am() { var t = O.H; return O.H = Yi, t === null ? Yi : t } function im() { var t = O.A; return O.A = Kv, t } function As() { Vt = 4, On || (ht & 4194048) !== ht && Se.current !== null || (Wa = !0), (Vn & 134217727) === 0 && (ya & 134217727) === 0 || Mt === null || Un(Mt, ht, Ee, !1) } function tr(t, e, n) { var a = vt; vt |= 2; var s = am(), r = im(); (Mt !== t || ht !== e) && (Ss = null, Ia(t, e)), e = !1; var f = Vt; t: do try { if (bt !== 0 && rt !== null) { var y = rt, S = Ae; switch (bt) { case 8: Io(), f = 6; break t; case 3: case 2: case 9: case 6: Se.current === null && (e = !0); var D = bt; if (bt = 0, Ae = null, ti(t, y, S, D), n && Wa) { f = 0; break t } break; default: D = bt, bt = 0, Ae = null, ti(t, y, S, D) } } Wv(), f = Vt; break } catch (w) { em(t, w) } while (!0); return e && t.shellSuspendCounter++, an = ua = null, vt = a, O.H = s, O.A = r, rt === null && (Mt = null, ht = 0, Xl()), f } function Wv() { for (; rt !== null;)lm(rt) } function Pv(t, e) { var n = vt; vt |= 2; var a = am(), s = im(); Mt !== t || ht !== e ? (Ss = null, bs = ye() + 500, Ia(t, e)) : Wa = gi(t, e); t: do try { if (bt !== 0 && rt !== null) { e = rt; var r = Ae; e: switch (bt) { case 1: bt = 0, Ae = null, ti(t, e, r, 1); break; case 2: case 9: if (ph(r)) { bt = 0, Ae = null, sm(e); break } e = function () { bt !== 2 && bt !== 9 || Mt !== t || (bt = 7), Fe(t) }, r.then(e, e); break t; case 3: bt = 7; break t; case 4: bt = 5; break t; case 7: ph(r) ? (bt = 0, Ae = null, sm(e)) : (bt = 0, Ae = null, ti(t, e, r, 7)); break; case 5: var f = null; switch (rt.tag) { case 26: f = rt.memoizedState; case 5: case 27: var y = rt; if (f ? Zm(f) : y.stateNode.complete) { bt = 0, Ae = null; var S = y.sibling; if (S !== null) rt = S; else { var D = y.return; D !== null ? (rt = D, Es(D)) : rt = null } break e } }bt = 0, Ae = null, ti(t, e, r, 5); break; case 6: bt = 0, Ae = null, ti(t, e, r, 6); break; case 8: Io(), Vt = 6; break t; default: throw Error(o(462)) } } $v(); break } catch (w) { em(t, w) } while (!0); return an = ua = null, O.H = a, O.A = s, vt = n, rt !== null ? 0 : (Mt = null, ht = 0, Xl(), Vt) } function $v() { for (; rt !== null && !S0();)lm(rt) } function lm(t) { var e = Cd(t.alternate, t, mn); t.memoizedProps = t.pendingProps, e === null ? Es(t) : rt = e } function sm(t) { var e = t, n = e.alternate; switch (e.tag) { case 15: case 0: e = Ad(n, e, e.pendingProps, e.type, void 0, ht); break; case 11: e = Ad(n, e, e.pendingProps, e.type.render, e.ref, ht); break; case 5: po(e); default: wd(n, e), e = rt = ih(e, mn), e = Cd(n, e, mn) }t.memoizedProps = t.pendingProps, e === null ? Es(t) : rt = e } function ti(t, e, n, a) { an = ua = null, po(e), Xa = null, Vi = 0; var s = e.return; try { if (qv(t, s, e, n, ht)) { Vt = 1, fs(t, ze(n, t.current)), rt = null; return } } catch (r) { if (s !== null) throw rt = s, r; Vt = 1, fs(t, ze(n, t.current)), rt = null; return } e.flags & 32768 ? (mt || a === 1 ? t = !0 : Wa || (ht & 536870912) !== 0 ? t = !1 : (On = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Se.current, a !== null && a.tag === 13 && (a.flags |= 16384))), um(e, t)) : Es(e) } function Es(t) { var e = t; do { if ((e.flags & 32768) !== 0) { um(e, On); return } t = e.return; var n = Xv(e.alternate, e, mn); if (n !== null) { rt = n; return } if (e = e.sibling, e !== null) { rt = e; return } rt = e = t } while (e !== null); Vt === 0 && (Vt = 5) } function um(t, e) { do { var n = kv(t.alternate, t); if (n !== null) { n.flags &= 32767, rt = n; return } if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) { rt = t; return } rt = t = n } while (t !== null); Vt = 6, rt = null } function om(t, e, n, a, s, r, f, y, S) { t.cancelPendingCommit = null; do Ms(); while (Qt !== 0); if ((vt & 6) !== 0) throw Error(o(327)); if (e !== null) { if (e === t.current) throw Error(o(177)); if (r = e.lanes | e.childLanes, r |= Gu, w0(t, n, r, f, y, S), t === Mt && (rt = Mt = null, ht = 0), $a = e, Bn = t, pn = n, Wo = r, Po = s, Pd = a, (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, n1(Dl, function () { return dm(), null })) : (t.callbackNode = null, t.callbackPriority = 0), a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) { a = O.T, O.T = null, s = H.p, H.p = 2, f = vt, vt |= 4; try { Zv(t, e, n) } finally { vt = f, H.p = s, O.T = a } } Qt = 1, rm(), cm(), fm() } } function rm() { if (Qt === 1) { Qt = 0; var t = Bn, e = $a, n = (e.flags & 13878) !== 0; if ((e.subtreeFlags & 13878) !== 0 || n) { n = O.T, O.T = null; var a = H.p; H.p = 2; var s = vt; vt |= 4; try { Xd(e, t); var r = hr, f = Ff(t.containerInfo), y = r.focusedElem, S = r.selectionRange; if (f !== y && y && y.ownerDocument && Jf(y.ownerDocument.documentElement, y)) { if (S !== null && Bu(y)) { var D = S.start, w = S.end; if (w === void 0 && (w = D), "selectionStart" in y) y.selectionStart = D, y.selectionEnd = Math.min(w, y.value.length); else { var _ = y.ownerDocument || document, N = _ && _.defaultView || window; if (N.getSelection) { var C = N.getSelection(), K = y.textContent.length, et = Math.min(S.start, K), Et = S.end === void 0 ? et : Math.min(S.end, K); !C.extend && et > Et && (f = Et, Et = et, et = f); var M = Kf(y, et), A = Kf(y, Et); if (M && A && (C.rangeCount !== 1 || C.anchorNode !== M.node || C.anchorOffset !== M.offset || C.focusNode !== A.node || C.focusOffset !== A.offset)) { var j = _.createRange(); j.setStart(M.node, M.offset), C.removeAllRanges(), et > Et ? (C.addRange(j), C.extend(A.node, A.offset)) : (j.setEnd(A.node, A.offset), C.addRange(j)) } } } } for (_ = [], C = y; C = C.parentNode;)C.nodeType === 1 && _.push({ element: C, left: C.scrollLeft, top: C.scrollTop }); for (typeof y.focus == "function" && y.focus(), y = 0; y < _.length; y++) { var V = _[y]; V.element.scrollLeft = V.left, V.element.scrollTop = V.top } } Us = !!fr, hr = fr = null } finally { vt = s, H.p = a, O.T = n } } t.current = e, Qt = 2 } } function cm() { if (Qt === 2) { Qt = 0; var t = Bn, e = $a, n = (e.flags & 8772) !== 0; if ((e.subtreeFlags & 8772) !== 0 || n) { n = O.T, O.T = null; var a = H.p; H.p = 2; var s = vt; vt |= 4; try { Ld(t, e.alternate, e) } finally { vt = s, H.p = a, O.T = n } } Qt = 3 } } function fm() { if (Qt === 4 || Qt === 3) { Qt = 0, T0(); var t = Bn, e = $a, n = pn, a = Pd; (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0 ? Qt = 5 : (Qt = 0, $a = Bn = null, hm(t, t.pendingLanes)); var s = t.pendingLanes; if (s === 0 && (_n = null), gu(n), e = e.stateNode, ge && typeof ge.onCommitFiberRoot == "function") try { ge.onCommitFiberRoot(yi, e, void 0, (e.current.flags & 128) === 128) } catch { } if (a !== null) { e = O.T, s = H.p, H.p = 2, O.T = null; try { for (var r = t.onRecoverableError, f = 0; f < a.length; f++) { var y = a[f]; r(y.value, { componentStack: y.stack }) } } finally { O.T = e, H.p = s } } (pn & 3) !== 0 && Ms(), Fe(t), s = t.pendingLanes, (n & 261930) !== 0 && (s & 42) !== 0 ? t === $o ? Pi++ : (Pi = 0, $o = t) : Pi = 0, $i(0) } } function hm(t, e) { (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Ri(e))) } function Ms() { return rm(), cm(), fm(), dm() } function dm() { if (Qt !== 5) return !1; var t = Bn, e = Wo; Wo = 0; var n = gu(pn), a = O.T, s = H.p; try { H.p = 32 > n ? 32 : n, O.T = null, n = Po, Po = null; var r = Bn, f = pn; if (Qt = 0, $a = Bn = null, pn = 0, (vt & 6) !== 0) throw Error(o(331)); var y = vt; if (vt |= 4, Jd(r.current), Zd(r, r.current, f, n), vt = y, $i(0, !1), ge && typeof ge.onPostCommitFiberRoot == "function") try { ge.onPostCommitFiberRoot(yi, r) } catch { } return !0 } finally { H.p = s, O.T = a, hm(t, e) } } function mm(t, e, n) { e = ze(n, e), e = zo(t.stateNode, e, 2), t = Cn(t, e, 2), t !== null && (vi(t, 2), Fe(t)) } function St(t, e, n) { if (t.tag === 3) mm(t, t, n); else for (; e !== null;) { if (e.tag === 3) { mm(e, t, n); break } else if (e.tag === 1) { var a = e.stateNode; if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (_n === null || !_n.has(a))) { t = ze(n, t), n = pd(2), a = Cn(e, n, 2), a !== null && (yd(n, a, e, t), vi(a, 2), Fe(a)); break } } e = e.return } } function er(t, e, n) { var a = t.pingCache; if (a === null) { a = t.pingCache = new Jv; var s = new Set; a.set(e, s) } else s = a.get(e), s === void 0 && (s = new Set, a.set(e, s)); s.has(n) || (Ko = !0, s.add(n), t = Iv.bind(null, t, e, n), e.then(t, t)) } function Iv(t, e, n) { var a = t.pingCache; a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Mt === t && (ht & n) === n && (Vt === 4 || Vt === 3 && (ht & 62914560) === ht && 300 > ye() - xs ? (vt & 2) === 0 && Ia(t, 0) : Jo |= n, Pa === ht && (Pa = 0)), Fe(t) } function pm(t, e) { e === 0 && (e = rf()), t = ia(t, e), t !== null && (vi(t, e), Fe(t)) } function t1(t) { var e = t.memoizedState, n = 0; e !== null && (n = e.retryLane), pm(t, n) } function e1(t, e) { var n = 0; switch (t.tag) { case 31: case 13: var a = t.stateNode, s = t.memoizedState; s !== null && (n = s.retryLane); break; case 19: a = t.stateNode; break; case 22: a = t.stateNode._retryCache; break; default: throw Error(o(314)) }a !== null && a.delete(e), pm(t, n) } function n1(t, e) { return du(t, e) } var js = null, ei = null, nr = !1, Ds = !1, ar = !1, Ln = 0; function Fe(t) { t !== ei && t.next === null && (ei === null ? js = ei = t : ei = ei.next = t), Ds = !0, nr || (nr = !0, i1()) } function $i(t, e) { if (!ar && Ds) { ar = !0; do for (var n = !1, a = js; a !== null;) { if (t !== 0) { var s = a.pendingLanes; if (s === 0) var r = 0; else { var f = a.suspendedLanes, y = a.pingedLanes; r = (1 << 31 - ve(42 | t) + 1) - 1, r &= s & ~(f & ~y), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0 } r !== 0 && (n = !0, xm(a, r)) } else r = ht, r = wl(a, a === Mt ? r : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (r & 3) === 0 || gi(a, r) || (n = !0, xm(a, r)); a = a.next } while (n); ar = !1 } } function a1() { ym() } function ym() { Ds = nr = !1; var t = 0; Ln !== 0 && m1() && (t = Ln); for (var e = ye(), n = null, a = js; a !== null;) { var s = a.next, r = gm(a, e); r === 0 ? (a.next = null, n === null ? js = s : n.next = s, s === null && (ei = n)) : (n = a, (t !== 0 || (r & 3) !== 0) && (Ds = !0)), a = s } Qt !== 0 && Qt !== 5 || $i(t), Ln !== 0 && (Ln = 0) } function gm(t, e) { for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, r = t.pendingLanes & -62914561; 0 < r;) { var f = 31 - ve(r), y = 1 << f, S = s[f]; S === -1 ? ((y & n) === 0 || (y & a) !== 0) && (s[f] = z0(y, e)) : S <= e && (t.expiredLanes |= y), r &= ~y } if (e = Mt, n = ht, n = wl(t, t === e ? n : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a = t.callbackNode, n === 0 || t === e && (bt === 2 || bt === 9) || t.cancelPendingCommit !== null) return a !== null && a !== null && mu(a), t.callbackNode = null, t.callbackPriority = 0; if ((n & 3) === 0 || gi(t, n)) { if (e = n & -n, e === t.callbackPriority) return e; switch (a !== null && mu(a), gu(n)) { case 2: case 8: n = uf; break; case 32: n = Dl; break; case 268435456: n = of; break; default: n = Dl }return a = vm.bind(null, t), n = du(n, a), t.callbackPriority = e, t.callbackNode = n, e } return a !== null && a !== null && mu(a), t.callbackPriority = 2, t.callbackNode = null, 2 } function vm(t, e) { if (Qt !== 0 && Qt !== 5) return t.callbackNode = null, t.callbackPriority = 0, null; var n = t.callbackNode; if (Ms() && t.callbackNode !== n) return null; var a = ht; return a = wl(t, t === Mt ? a : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1), a === 0 ? null : (Id(t, a, e), gm(t, ye()), t.callbackNode != null && t.callbackNode === n ? vm.bind(null, t) : null) } function xm(t, e) { if (Ms()) return null; Id(t, e, !0) } function i1() { y1(function () { (vt & 6) !== 0 ? du(sf, a1) : ym() }) } function ir() { if (Ln === 0) { var t = qa; t === 0 && (t = Nl, Nl <<= 1, (Nl & 261888) === 0 && (Nl = 256)), Ln = t } return Ln } function bm(t) { return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : _l("" + t) } function Sm(t, e) { var n = e.ownerDocument.createElement("input"); return n.name = e.name, n.value = e.value, t.id && n.setAttribute("form", t.id), e.parentNode.insertBefore(n, e), t = new FormData(t), n.parentNode.removeChild(n), t } function l1(t, e, n, a, s) { if (e === "submit" && n && n.stateNode === s) { var r = bm((s[re] || null).action), f = a.submitter; f && (e = (e = f[re] || null) ? bm(e.formAction) : f.getAttribute("formAction"), e !== null && (r = e, f = null)); var y = new Hl("action", "action", null, a, s); t.push({ event: y, listeners: [{ instance: null, listener: function () { if (a.defaultPrevented) { if (Ln !== 0) { var S = f ? Sm(s, f) : new FormData(s); Eo(n, { pending: !0, data: S, method: s.method, action: r }, null, S) } } else typeof r == "function" && (y.preventDefault(), S = f ? Sm(s, f) : new FormData(s), Eo(n, { pending: !0, data: S, method: s.method, action: r }, r, S)) }, currentTarget: s }] }) } } for (var lr = 0; lr < qu.length; lr++) { var sr = qu[lr], s1 = sr.toLowerCase(), u1 = sr[0].toUpperCase() + sr.slice(1); Ge(s1, "on" + u1) } Ge($f, "onAnimationEnd"), Ge(If, "onAnimationIteration"), Ge(th, "onAnimationStart"), Ge("dblclick", "onDoubleClick"), Ge("focusin", "onFocus"), Ge("focusout", "onBlur"), Ge(Av, "onTransitionRun"), Ge(Ev, "onTransitionStart"), Ge(Mv, "onTransitionCancel"), Ge(eh, "onTransitionEnd"), ja("onMouseEnter", ["mouseout", "mouseover"]), ja("onMouseLeave", ["mouseout", "mouseover"]), ja("onPointerEnter", ["pointerout", "pointerover"]), ja("onPointerLeave", ["pointerout", "pointerover"]), ta("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ta("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ta("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ta("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ta("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ta("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" ")); var Ii = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), o1 = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ii)); function Tm(t, e) { e = (e & 4) !== 0; for (var n = 0; n < t.length; n++) { var a = t[n], s = a.event; a = a.listeners; t: { var r = void 0; if (e) for (var f = a.length - 1; 0 <= f; f--) { var y = a[f], S = y.instance, D = y.currentTarget; if (y = y.listener, S !== r && s.isPropagationStopped()) break t; r = y, s.currentTarget = D; try { r(s) } catch (w) { Yl(w) } s.currentTarget = null, r = S } else for (f = 0; f < a.length; f++) { if (y = a[f], S = y.instance, D = y.currentTarget, y = y.listener, S !== r && s.isPropagationStopped()) break t; r = y, s.currentTarget = D; try { r(s) } catch (w) { Yl(w) } s.currentTarget = null, r = S } } } } function ct(t, e) { var n = e[vu]; n === void 0 && (n = e[vu] = new Set); var a = t + "__bubble"; n.has(a) || (Am(e, t, 2, !1), n.add(a)) } function ur(t, e, n) { var a = 0; e && (a |= 4), Am(n, t, a, e) } var Ns = "_reactListening" + Math.random().toString(36).slice(2); function or(t) { if (!t[Ns]) { t[Ns] = !0, yf.forEach(function (n) { n !== "selectionchange" && (o1.has(n) || ur(n, !1, t), ur(n, !0, t)) }); var e = t.nodeType === 9 ? t : t.ownerDocument; e === null || e[Ns] || (e[Ns] = !0, ur("selectionchange", !1, e)) } } function Am(t, e, n, a) { switch ($m(e)) { case 2: var s = B1; break; case 8: s = U1; break; default: s = Ar }n = s.bind(null, e, n, t), s = void 0, !Du || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, { capture: !0, passive: s }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, { passive: s }) : t.addEventListener(e, n, !1) } function rr(t, e, n, a, s) { var r = a; if ((e & 1) === 0 && (e & 2) === 0 && a !== null) t: for (; ;) { if (a === null) return; var f = a.tag; if (f === 3 || f === 4) { var y = a.stateNode.containerInfo; if (y === s) break; if (f === 4) for (f = a.return; f !== null;) { var S = f.tag; if ((S === 3 || S === 4) && f.stateNode.containerInfo === s) return; f = f.return } for (; y !== null;) { if (f = Aa(y), f === null) return; if (S = f.tag, S === 5 || S === 6 || S === 26 || S === 27) { a = r = f; continue t } y = y.parentNode } } a = a.return } Nf(function () { var D = r, w = Mu(n), _ = []; t: { var N = nh.get(t); if (N !== void 0) { var C = Hl, K = t; switch (t) { case "keypress": if (Ul(n) === 0) break t; case "keydown": case "keyup": C = ev; break; case "focusin": K = "focus", C = wu; break; case "focusout": K = "blur", C = wu; break; case "beforeblur": case "afterblur": C = wu; break; case "click": if (n.button === 2) break t; case "auxclick": case "dblclick": case "mousedown": case "mousemove": case "mouseup": case "mouseout": case "mouseover": case "contextmenu": C = wf; break; case "drag": case "dragend": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "dragstart": case "drop": C = X0; break; case "touchcancel": case "touchend": case "touchmove": case "touchstart": C = iv; break; case $f: case If: case th: C = Q0; break; case eh: C = sv; break; case "scroll": case "scrollend": C = G0; break; case "wheel": C = ov; break; case "copy": case "cut": case "paste": C = J0; break; case "gotpointercapture": case "lostpointercapture": case "pointercancel": case "pointerdown": case "pointermove": case "pointerout": case "pointerover": case "pointerup": C = Of; break; case "toggle": case "beforetoggle": C = cv }var et = (e & 4) !== 0, Et = !et && (t === "scroll" || t === "scrollend"), M = et ? N !== null ? N + "Capture" : null : N; et = []; for (var A = D, j; A !== null;) { var V = A; if (j = V.stateNode, V = V.tag, V !== 5 && V !== 26 && V !== 27 || j === null || M === null || (V = Si(A, M), V != null && et.push(tl(A, V, j))), Et) break; A = A.return } 0 < et.length && (N = new C(N, K, null, n, w), _.push({ event: N, listeners: et })) } } if ((e & 7) === 0) { t: { if (N = t === "mouseover" || t === "pointerover", C = t === "mouseout" || t === "pointerout", N && n !== Eu && (K = n.relatedTarget || n.fromElement) && (Aa(K) || K[Ta])) break t; if ((C || N) && (N = w.window === w ? w : (N = w.ownerDocument) ? N.defaultView || N.parentWindow : window, C ? (K = n.relatedTarget || n.toElement, C = D, K = K ? Aa(K) : null, K !== null && (Et = d(K), et = K.tag, K !== Et || et !== 5 && et !== 27 && et !== 6) && (K = null)) : (C = null, K = D), C !== K)) { if (et = wf, V = "onMouseLeave", M = "onMouseEnter", A = "mouse", (t === "pointerout" || t === "pointerover") && (et = Of, V = "onPointerLeave", M = "onPointerEnter", A = "pointer"), Et = C == null ? N : bi(C), j = K == null ? N : bi(K), N = new et(V, A + "leave", C, n, w), N.target = Et, N.relatedTarget = j, V = null, Aa(w) === D && (et = new et(M, A + "enter", K, n, w), et.target = j, et.relatedTarget = Et, V = et), Et = V, C && K) e: { for (et = r1, M = C, A = K, j = 0, V = M; V; V = et(V))j++; V = 0; for (var tt = A; tt; tt = et(tt))V++; for (; 0 < j - V;)M = et(M), j--; for (; 0 < V - j;)A = et(A), V--; for (; j--;) { if (M === A || A !== null && M === A.alternate) { et = M; break e } M = et(M), A = et(A) } et = null } else et = null; C !== null && Em(_, N, C, et, !1), K !== null && Et !== null && Em(_, Et, K, et, !0) } } t: { if (N = D ? bi(D) : window, C = N.nodeName && N.nodeName.toLowerCase(), C === "select" || C === "input" && N.type === "file") var yt = Gf; else if (Hf(N)) if (Yf) yt = bv; else { yt = vv; var $ = gv } else C = N.nodeName, !C || C.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? D && Au(D.elementType) && (yt = Gf) : yt = xv; if (yt && (yt = yt(t, D))) { qf(_, yt, n, w); break t } $ && $(t, N, D), t === "focusout" && D && N.type === "number" && D.memoizedProps.value != null && Tu(N, "number", N.value) } switch ($ = D ? bi(D) : window, t) { case "focusin": (Hf($) || $.contentEditable === "true") && (Ra = $, Uu = D, Ci = null); break; case "focusout": Ci = Uu = Ra = null; break; case "mousedown": Lu = !0; break; case "contextmenu": case "mouseup": case "dragend": Lu = !1, Wf(_, n, w); break; case "selectionchange": if (Tv) break; case "keydown": case "keyup": Wf(_, n, w) }var ut; if (Ou) t: { switch (t) { case "compositionstart": var dt = "onCompositionStart"; break t; case "compositionend": dt = "onCompositionEnd"; break t; case "compositionupdate": dt = "onCompositionUpdate"; break t }dt = void 0 } else wa ? Uf(t, n) && (dt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (dt = "onCompositionStart"); dt && (Vf && n.locale !== "ko" && (wa || dt !== "onCompositionStart" ? dt === "onCompositionEnd" && wa && (ut = Cf()) : (Tn = w, Nu = "value" in Tn ? Tn.value : Tn.textContent, wa = !0)), $ = Cs(D, dt), 0 < $.length && (dt = new Rf(dt, t, null, n, w), _.push({ event: dt, listeners: $ }), ut ? dt.data = ut : (ut = Lf(n), ut !== null && (dt.data = ut)))), (ut = hv ? dv(t, n) : mv(t, n)) && (dt = Cs(D, "onBeforeInput"), 0 < dt.length && ($ = new Rf("onBeforeInput", "beforeinput", null, n, w), _.push({ event: $, listeners: dt }), $.data = ut)), l1(_, t, D, n, w) } Tm(_, e) }) } function tl(t, e, n) { return { instance: t, listener: e, currentTarget: n } } function Cs(t, e) { for (var n = e + "Capture", a = []; t !== null;) { var s = t, r = s.stateNode; if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || r === null || (s = Si(t, n), s != null && a.unshift(tl(t, s, r)), s = Si(t, e), s != null && a.push(tl(t, s, r))), t.tag === 3) return a; t = t.return } return [] } function r1(t) { if (t === null) return null; do t = t.return; while (t && t.tag !== 5 && t.tag !== 27); return t || null } function Em(t, e, n, a, s) { for (var r = e._reactName, f = []; n !== null && n !== a;) { var y = n, S = y.alternate, D = y.stateNode; if (y = y.tag, S !== null && S === a) break; y !== 5 && y !== 26 && y !== 27 || D === null || (S = D, s ? (D = Si(n, r), D != null && f.unshift(tl(n, D, S))) : s || (D = Si(n, r), D != null && f.push(tl(n, D, S)))), n = n.return } f.length !== 0 && t.push({ event: e, listeners: f }) } var c1 = /\r\n?/g, f1 = /\u0000|\uFFFD/g; function Mm(t) {
    return (typeof t == "string" ? t : "" + t).replace(c1, `
`).replace(f1, "")
  } function jm(t, e) { return e = Mm(e), Mm(t) === e } function At(t, e, n, a, s, r) { switch (n) { case "children": typeof a == "string" ? e === "body" || e === "textarea" && a === "" || Na(t, a) : (typeof a == "number" || typeof a == "bigint") && e !== "body" && Na(t, "" + a); break; case "className": Ol(t, "class", a); break; case "tabIndex": Ol(t, "tabindex", a); break; case "dir": case "role": case "viewBox": case "width": case "height": Ol(t, n, a); break; case "style": jf(t, a, r); break; case "data": if (e !== "object") { Ol(t, "data", a); break } case "src": case "href": if (a === "" && (e !== "a" || n !== "href")) { t.removeAttribute(n); break } if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") { t.removeAttribute(n); break } a = _l("" + a), t.setAttribute(n, a); break; case "action": case "formAction": if (typeof a == "function") { t.setAttribute(n, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"); break } else typeof r == "function" && (n === "formAction" ? (e !== "input" && At(t, e, "name", s.name, s, null), At(t, e, "formEncType", s.formEncType, s, null), At(t, e, "formMethod", s.formMethod, s, null), At(t, e, "formTarget", s.formTarget, s, null)) : (At(t, e, "encType", s.encType, s, null), At(t, e, "method", s.method, s, null), At(t, e, "target", s.target, s, null))); if (a == null || typeof a == "symbol" || typeof a == "boolean") { t.removeAttribute(n); break } a = _l("" + a), t.setAttribute(n, a); break; case "onClick": a != null && (t.onclick = Ie); break; case "onScroll": a != null && ct("scroll", t); break; case "onScrollEnd": a != null && ct("scrollend", t); break; case "dangerouslySetInnerHTML": if (a != null) { if (typeof a != "object" || !("__html" in a)) throw Error(o(61)); if (n = a.__html, n != null) { if (s.children != null) throw Error(o(60)); t.innerHTML = n } } break; case "multiple": t.multiple = a && typeof a != "function" && typeof a != "symbol"; break; case "muted": t.muted = a && typeof a != "function" && typeof a != "symbol"; break; case "suppressContentEditableWarning": case "suppressHydrationWarning": case "defaultValue": case "defaultChecked": case "innerHTML": case "ref": break; case "autoFocus": break; case "xlinkHref": if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") { t.removeAttribute("xlink:href"); break } n = _l("" + a), t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n); break; case "contentEditable": case "spellCheck": case "draggable": case "value": case "autoReverse": case "externalResourcesRequired": case "focusable": case "preserveAlpha": a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "" + a) : t.removeAttribute(n); break; case "inert": case "allowFullScreen": case "async": case "autoPlay": case "controls": case "default": case "defer": case "disabled": case "disablePictureInPicture": case "disableRemotePlayback": case "formNoValidate": case "hidden": case "loop": case "noModule": case "noValidate": case "open": case "playsInline": case "readOnly": case "required": case "reversed": case "scoped": case "seamless": case "itemScope": a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n); break; case "capture": case "download": a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n); break; case "cols": case "rows": case "size": case "span": a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n); break; case "rowSpan": case "start": a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a); break; case "popover": ct("beforetoggle", t), ct("toggle", t), Rl(t, "popover", a); break; case "xlinkActuate": $e(t, "http://www.w3.org/1999/xlink", "xlink:actuate", a); break; case "xlinkArcrole": $e(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", a); break; case "xlinkRole": $e(t, "http://www.w3.org/1999/xlink", "xlink:role", a); break; case "xlinkShow": $e(t, "http://www.w3.org/1999/xlink", "xlink:show", a); break; case "xlinkTitle": $e(t, "http://www.w3.org/1999/xlink", "xlink:title", a); break; case "xlinkType": $e(t, "http://www.w3.org/1999/xlink", "xlink:type", a); break; case "xmlBase": $e(t, "http://www.w3.org/XML/1998/namespace", "xml:base", a); break; case "xmlLang": $e(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", a); break; case "xmlSpace": $e(t, "http://www.w3.org/XML/1998/namespace", "xml:space", a); break; case "is": Rl(t, "is", a); break; case "innerText": case "textContent": break; default: (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = H0.get(n) || n, Rl(t, n, a)) } } function cr(t, e, n, a, s, r) { switch (n) { case "style": jf(t, a, r); break; case "dangerouslySetInnerHTML": if (a != null) { if (typeof a != "object" || !("__html" in a)) throw Error(o(61)); if (n = a.__html, n != null) { if (s.children != null) throw Error(o(60)); t.innerHTML = n } } break; case "children": typeof a == "string" ? Na(t, a) : (typeof a == "number" || typeof a == "bigint") && Na(t, "" + a); break; case "onScroll": a != null && ct("scroll", t); break; case "onScrollEnd": a != null && ct("scrollend", t); break; case "onClick": a != null && (t.onclick = Ie); break; case "suppressContentEditableWarning": case "suppressHydrationWarning": case "innerHTML": case "ref": break; case "innerText": case "textContent": break; default: if (!gf.hasOwnProperty(n)) t: { if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), e = n.slice(2, s ? n.length - 7 : void 0), r = t[re] || null, r = r != null ? r[n] : null, typeof r == "function" && t.removeEventListener(e, r, s), typeof a == "function")) { typeof r != "function" && r !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(e, a, s); break t } n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Rl(t, n, a) } } } function te(t, e, n) { switch (e) { case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break; case "img": ct("error", t), ct("load", t); var a = !1, s = !1, r; for (r in n) if (n.hasOwnProperty(r)) { var f = n[r]; if (f != null) switch (r) { case "src": a = !0; break; case "srcSet": s = !0; break; case "children": case "dangerouslySetInnerHTML": throw Error(o(137, e)); default: At(t, e, r, f, n, null) } } s && At(t, e, "srcSet", n.srcSet, n, null), a && At(t, e, "src", n.src, n, null); return; case "input": ct("invalid", t); var y = r = f = s = null, S = null, D = null; for (a in n) if (n.hasOwnProperty(a)) { var w = n[a]; if (w != null) switch (a) { case "name": s = w; break; case "type": f = w; break; case "checked": S = w; break; case "defaultChecked": D = w; break; case "value": r = w; break; case "defaultValue": y = w; break; case "children": case "dangerouslySetInnerHTML": if (w != null) throw Error(o(137, e)); break; default: At(t, e, a, w, n, null) } } Tf(t, r, y, S, D, f, s, !1); return; case "select": ct("invalid", t), a = f = r = null; for (s in n) if (n.hasOwnProperty(s) && (y = n[s], y != null)) switch (s) { case "value": r = y; break; case "defaultValue": f = y; break; case "multiple": a = y; default: At(t, e, s, y, n, null) }e = r, n = f, t.multiple = !!a, e != null ? Da(t, !!a, e, !1) : n != null && Da(t, !!a, n, !0); return; case "textarea": ct("invalid", t), r = s = a = null; for (f in n) if (n.hasOwnProperty(f) && (y = n[f], y != null)) switch (f) { case "value": a = y; break; case "defaultValue": s = y; break; case "children": r = y; break; case "dangerouslySetInnerHTML": if (y != null) throw Error(o(91)); break; default: At(t, e, f, y, n, null) }Ef(t, a, s, r); return; case "option": for (S in n) if (n.hasOwnProperty(S) && (a = n[S], a != null)) switch (S) { case "selected": t.selected = a && typeof a != "function" && typeof a != "symbol"; break; default: At(t, e, S, a, n, null) }return; case "dialog": ct("beforetoggle", t), ct("toggle", t), ct("cancel", t), ct("close", t); break; case "iframe": case "object": ct("load", t); break; case "video": case "audio": for (a = 0; a < Ii.length; a++)ct(Ii[a], t); break; case "image": ct("error", t), ct("load", t); break; case "details": ct("toggle", t); break; case "embed": case "source": case "link": ct("error", t), ct("load", t); case "area": case "base": case "br": case "col": case "hr": case "keygen": case "meta": case "param": case "track": case "wbr": case "menuitem": for (D in n) if (n.hasOwnProperty(D) && (a = n[D], a != null)) switch (D) { case "children": case "dangerouslySetInnerHTML": throw Error(o(137, e)); default: At(t, e, D, a, n, null) }return; default: if (Au(e)) { for (w in n) n.hasOwnProperty(w) && (a = n[w], a !== void 0 && cr(t, e, w, a, n, void 0)); return } }for (y in n) n.hasOwnProperty(y) && (a = n[y], a != null && At(t, e, y, a, n, null)) } function h1(t, e, n, a) { switch (e) { case "div": case "span": case "svg": case "path": case "a": case "g": case "p": case "li": break; case "input": var s = null, r = null, f = null, y = null, S = null, D = null, w = null; for (C in n) { var _ = n[C]; if (n.hasOwnProperty(C) && _ != null) switch (C) { case "checked": break; case "value": break; case "defaultValue": S = _; default: a.hasOwnProperty(C) || At(t, e, C, null, a, _) } } for (var N in a) { var C = a[N]; if (_ = n[N], a.hasOwnProperty(N) && (C != null || _ != null)) switch (N) { case "type": r = C; break; case "name": s = C; break; case "checked": D = C; break; case "defaultChecked": w = C; break; case "value": f = C; break; case "defaultValue": y = C; break; case "children": case "dangerouslySetInnerHTML": if (C != null) throw Error(o(137, e)); break; default: C !== _ && At(t, e, N, C, a, _) } } Su(t, f, y, S, D, w, r, s); return; case "select": C = f = y = N = null; for (r in n) if (S = n[r], n.hasOwnProperty(r) && S != null) switch (r) { case "value": break; case "multiple": C = S; default: a.hasOwnProperty(r) || At(t, e, r, null, a, S) }for (s in a) if (r = a[s], S = n[s], a.hasOwnProperty(s) && (r != null || S != null)) switch (s) { case "value": N = r; break; case "defaultValue": y = r; break; case "multiple": f = r; default: r !== S && At(t, e, s, r, a, S) }e = y, n = f, a = C, N != null ? Da(t, !!n, N, !1) : !!a != !!n && (e != null ? Da(t, !!n, e, !0) : Da(t, !!n, n ? [] : "", !1)); return; case "textarea": C = N = null; for (y in n) if (s = n[y], n.hasOwnProperty(y) && s != null && !a.hasOwnProperty(y)) switch (y) { case "value": break; case "children": break; default: At(t, e, y, null, a, s) }for (f in a) if (s = a[f], r = n[f], a.hasOwnProperty(f) && (s != null || r != null)) switch (f) { case "value": N = s; break; case "defaultValue": C = s; break; case "children": break; case "dangerouslySetInnerHTML": if (s != null) throw Error(o(91)); break; default: s !== r && At(t, e, f, s, a, r) }Af(t, N, C); return; case "option": for (var K in n) if (N = n[K], n.hasOwnProperty(K) && N != null && !a.hasOwnProperty(K)) switch (K) { case "selected": t.selected = !1; break; default: At(t, e, K, null, a, N) }for (S in a) if (N = a[S], C = n[S], a.hasOwnProperty(S) && N !== C && (N != null || C != null)) switch (S) { case "selected": t.selected = N && typeof N != "function" && typeof N != "symbol"; break; default: At(t, e, S, N, a, C) }return; case "img": case "link": case "area": case "base": case "br": case "col": case "embed": case "hr": case "keygen": case "meta": case "param": case "source": case "track": case "wbr": case "menuitem": for (var et in n) N = n[et], n.hasOwnProperty(et) && N != null && !a.hasOwnProperty(et) && At(t, e, et, null, a, N); for (D in a) if (N = a[D], C = n[D], a.hasOwnProperty(D) && N !== C && (N != null || C != null)) switch (D) { case "children": case "dangerouslySetInnerHTML": if (N != null) throw Error(o(137, e)); break; default: At(t, e, D, N, a, C) }return; default: if (Au(e)) { for (var Et in n) N = n[Et], n.hasOwnProperty(Et) && N !== void 0 && !a.hasOwnProperty(Et) && cr(t, e, Et, void 0, a, N); for (w in a) N = a[w], C = n[w], !a.hasOwnProperty(w) || N === C || N === void 0 && C === void 0 || cr(t, e, w, N, a, C); return } }for (var M in n) N = n[M], n.hasOwnProperty(M) && N != null && !a.hasOwnProperty(M) && At(t, e, M, null, a, N); for (_ in a) N = a[_], C = n[_], !a.hasOwnProperty(_) || N === C || N == null && C == null || At(t, e, _, N, a, C) } function Dm(t) { switch (t) { case "css": case "script": case "font": case "img": case "image": case "input": case "link": return !0; default: return !1 } } function d1() { if (typeof performance.getEntriesByType == "function") { for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) { var s = n[a], r = s.transferSize, f = s.initiatorType, y = s.duration; if (r && y && Dm(f)) { for (f = 0, y = s.responseEnd, a += 1; a < n.length; a++) { var S = n[a], D = S.startTime; if (D > y) break; var w = S.transferSize, _ = S.initiatorType; w && Dm(_) && (S = S.responseEnd, f += w * (S < y ? 1 : (y - D) / (S - D))) } if (--a, e += 8 * (r + f) / (s.duration / 1e3), t++, 10 < t) break } } if (0 < t) return e / t / 1e6 } return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5 } var fr = null, hr = null; function zs(t) { return t.nodeType === 9 ? t : t.ownerDocument } function Nm(t) { switch (t) { case "http://www.w3.org/2000/svg": return 1; case "http://www.w3.org/1998/Math/MathML": return 2; default: return 0 } } function Cm(t, e) { if (t === 0) switch (e) { case "svg": return 1; case "math": return 2; default: return 0 }return t === 1 && e === "foreignObject" ? 0 : t } function dr(t, e) { return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null } var mr = null; function m1() { var t = window.event; return t && t.type === "popstate" ? t === mr ? !1 : (mr = t, !0) : (mr = null, !1) } var zm = typeof setTimeout == "function" ? setTimeout : void 0, p1 = typeof clearTimeout == "function" ? clearTimeout : void 0, wm = typeof Promise == "function" ? Promise : void 0, y1 = typeof queueMicrotask == "function" ? queueMicrotask : typeof wm < "u" ? function (t) { return wm.resolve(null).then(t).catch(g1) } : zm; function g1(t) { setTimeout(function () { throw t }) } function Hn(t) { return t === "head" } function Rm(t, e) { var n = e, a = 0; do { var s = n.nextSibling; if (t.removeChild(n), s && s.nodeType === 8) if (n = s.data, n === "/$" || n === "/&") { if (a === 0) { t.removeChild(s), li(e); return } a-- } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&") a++; else if (n === "html") el(t.ownerDocument.documentElement); else if (n === "head") { n = t.ownerDocument.head, el(n); for (var r = n.firstChild; r;) { var f = r.nextSibling, y = r.nodeName; r[xi] || y === "SCRIPT" || y === "STYLE" || y === "LINK" && r.rel.toLowerCase() === "stylesheet" || n.removeChild(r), r = f } } else n === "body" && el(t.ownerDocument.body); n = s } while (n); li(e) } function Om(t, e) { var n = t; t = 0; do { var a = n.nextSibling; if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8) if (n = a.data, n === "/$") { if (t === 0) break; t-- } else n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++; n = a } while (n) } function pr(t) { var e = t.firstChild; for (e && e.nodeType === 10 && (e = e.nextSibling); e;) { var n = e; switch (e = e.nextSibling, n.nodeName) { case "HTML": case "HEAD": case "BODY": pr(n), xu(n); continue; case "SCRIPT": case "STYLE": continue; case "LINK": if (n.rel.toLowerCase() === "stylesheet") continue }t.removeChild(n) } } function v1(t, e, n, a) { for (; t.nodeType === 1;) { var s = n; if (t.nodeName.toLowerCase() !== e.toLowerCase()) { if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden")) break } else if (a) { if (!t[xi]) switch (e) { case "meta": if (!t.hasAttribute("itemprop")) break; return t; case "link": if (r = t.getAttribute("rel"), r === "stylesheet" && t.hasAttribute("data-precedence")) break; if (r !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title)) break; return t; case "style": if (t.hasAttribute("data-precedence")) break; return t; case "script": if (r = t.getAttribute("src"), (r !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && r && t.hasAttribute("async") && !t.hasAttribute("itemprop")) break; return t; default: return t } } else if (e === "input" && t.type === "hidden") { var r = s.name == null ? null : "" + s.name; if (s.type === "hidden" && t.getAttribute("name") === r) return t } else return t; if (t = _e(t.nextSibling), t === null) break } return null } function x1(t, e, n) { if (e === "") return null; for (; t.nodeType !== 3;)if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = _e(t.nextSibling), t === null)) return null; return t } function Vm(t, e) { for (; t.nodeType !== 8;)if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = _e(t.nextSibling), t === null)) return null; return t } function yr(t) { return t.data === "$?" || t.data === "$~" } function gr(t) { return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading" } function b1(t, e) { var n = t.ownerDocument; if (t.data === "$~") t._reactRetry = e; else if (t.data !== "$?" || n.readyState !== "loading") e(); else { var a = function () { e(), n.removeEventListener("DOMContentLoaded", a) }; n.addEventListener("DOMContentLoaded", a), t._reactRetry = a } } function _e(t) { for (; t != null; t = t.nextSibling) { var e = t.nodeType; if (e === 1 || e === 3) break; if (e === 8) { if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F") break; if (e === "/$" || e === "/&") return null } } return t } var vr = null; function _m(t) { t = t.nextSibling; for (var e = 0; t;) { if (t.nodeType === 8) { var n = t.data; if (n === "/$" || n === "/&") { if (e === 0) return _e(t.nextSibling); e-- } else n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++ } t = t.nextSibling } return null } function Bm(t) { t = t.previousSibling; for (var e = 0; t;) { if (t.nodeType === 8) { var n = t.data; if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") { if (e === 0) return t; e-- } else n !== "/$" && n !== "/&" || e++ } t = t.previousSibling } return null } function Um(t, e, n) { switch (e = zs(n), t) { case "html": if (t = e.documentElement, !t) throw Error(o(452)); return t; case "head": if (t = e.head, !t) throw Error(o(453)); return t; case "body": if (t = e.body, !t) throw Error(o(454)); return t; default: throw Error(o(451)) } } function el(t) { for (var e = t.attributes; e.length;)t.removeAttributeNode(e[0]); xu(t) } var Be = new Map, Lm = new Set; function ws(t) { return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument } var yn = H.d; H.d = { f: S1, r: T1, D: A1, C: E1, L: M1, m: j1, X: N1, S: D1, M: C1 }; function S1() { var t = yn.f(), e = Ts(); return t || e } function T1(t) { var e = Ea(t); e !== null && e.tag === 5 && e.type === "form" ? ed(e) : yn.r(t) } var ni = typeof document > "u" ? null : document; function Hm(t, e, n) { var a = ni; if (a && typeof e == "string" && e) { var s = Ne(e); s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), Lm.has(s) || (Lm.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), te(e, "link", t), Jt(e), a.head.appendChild(e))) } } function A1(t) { yn.D(t), Hm("dns-prefetch", t, null) } function E1(t, e) { yn.C(t, e), Hm("preconnect", t, e) } function M1(t, e, n) { yn.L(t, e, n); var a = ni; if (a && t && e) { var s = 'link[rel="preload"][as="' + Ne(e) + '"]'; e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + Ne(n.imageSrcSet) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + Ne(n.imageSizes) + '"]')) : s += '[href="' + Ne(t) + '"]'; var r = s; switch (e) { case "style": r = ai(t); break; case "script": r = ii(t) }Be.has(r) || (t = b({ rel: "preload", href: e === "image" && n && n.imageSrcSet ? void 0 : t, as: e }, n), Be.set(r, t), a.querySelector(s) !== null || e === "style" && a.querySelector(nl(r)) || e === "script" && a.querySelector(al(r)) || (e = a.createElement("link"), te(e, "link", t), Jt(e), a.head.appendChild(e))) } } function j1(t, e) { yn.m(t, e); var n = ni; if (n && t) { var a = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + Ne(a) + '"][href="' + Ne(t) + '"]', r = s; switch (a) { case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": r = ii(t) }if (!Be.has(r) && (t = b({ rel: "modulepreload", href: t }, e), Be.set(r, t), n.querySelector(s) === null)) { switch (a) { case "audioworklet": case "paintworklet": case "serviceworker": case "sharedworker": case "worker": case "script": if (n.querySelector(al(r))) return }a = n.createElement("link"), te(a, "link", t), Jt(a), n.head.appendChild(a) } } } function D1(t, e, n) { yn.S(t, e, n); var a = ni; if (a && t) { var s = Ma(a).hoistableStyles, r = ai(t); e = e || "default"; var f = s.get(r); if (!f) { var y = { loading: 0, preload: null }; if (f = a.querySelector(nl(r))) y.loading = 5; else { t = b({ rel: "stylesheet", href: t, "data-precedence": e }, n), (n = Be.get(r)) && xr(t, n); var S = f = a.createElement("link"); Jt(S), te(S, "link", t), S._p = new Promise(function (D, w) { S.onload = D, S.onerror = w }), S.addEventListener("load", function () { y.loading |= 1 }), S.addEventListener("error", function () { y.loading |= 2 }), y.loading |= 4, Rs(f, e, a) } f = { type: "stylesheet", instance: f, count: 1, state: y }, s.set(r, f) } } } function N1(t, e) { yn.X(t, e); var n = ni; if (n && t) { var a = Ma(n).hoistableScripts, s = ii(t), r = a.get(s); r || (r = n.querySelector(al(s)), r || (t = b({ src: t, async: !0 }, e), (e = Be.get(s)) && br(t, e), r = n.createElement("script"), Jt(r), te(r, "link", t), n.head.appendChild(r)), r = { type: "script", instance: r, count: 1, state: null }, a.set(s, r)) } } function C1(t, e) { yn.M(t, e); var n = ni; if (n && t) { var a = Ma(n).hoistableScripts, s = ii(t), r = a.get(s); r || (r = n.querySelector(al(s)), r || (t = b({ src: t, async: !0, type: "module" }, e), (e = Be.get(s)) && br(t, e), r = n.createElement("script"), Jt(r), te(r, "link", t), n.head.appendChild(r)), r = { type: "script", instance: r, count: 1, state: null }, a.set(s, r)) } } function qm(t, e, n, a) { var s = (s = ot.current) ? ws(s) : null; if (!s) throw Error(o(446)); switch (t) { case "meta": case "title": return null; case "style": return typeof n.precedence == "string" && typeof n.href == "string" ? (e = ai(n.href), n = Ma(s).hoistableStyles, a = n.get(e), a || (a = { type: "style", instance: null, count: 0, state: null }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null }; case "link": if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") { t = ai(n.href); var r = Ma(s).hoistableStyles, f = r.get(t); if (f || (s = s.ownerDocument || s, f = { type: "stylesheet", instance: null, count: 0, state: { loading: 0, preload: null } }, r.set(t, f), (r = s.querySelector(nl(t))) && !r._p && (f.instance = r, f.state.loading = 5), Be.has(t) || (n = { rel: "preload", as: "style", href: n.href, crossOrigin: n.crossOrigin, integrity: n.integrity, media: n.media, hrefLang: n.hrefLang, referrerPolicy: n.referrerPolicy }, Be.set(t, n), r || z1(s, t, n, f.state))), e && a === null) throw Error(o(528, "")); return f } if (e && a !== null) throw Error(o(529, "")); return null; case "script": return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (e = ii(n), n = Ma(s).hoistableScripts, a = n.get(e), a || (a = { type: "script", instance: null, count: 0, state: null }, n.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null }; default: throw Error(o(444, t)) } } function ai(t) { return 'href="' + Ne(t) + '"' } function nl(t) { return 'link[rel="stylesheet"][' + t + "]" } function Gm(t) { return b({}, t, { "data-precedence": t.precedence, precedence: null }) } function z1(t, e, n, a) { t.querySelector('link[rel="preload"][as="style"][' + e + "]") ? a.loading = 1 : (e = t.createElement("link"), a.preload = e, e.addEventListener("load", function () { return a.loading |= 1 }), e.addEventListener("error", function () { return a.loading |= 2 }), te(e, "link", n), Jt(e), t.head.appendChild(e)) } function ii(t) { return '[src="' + Ne(t) + '"]' } function al(t) { return "script[async]" + t } function Ym(t, e, n) { if (e.count++, e.instance === null) switch (e.type) { case "style": var a = t.querySelector('style[data-href~="' + Ne(n.href) + '"]'); if (a) return e.instance = a, Jt(a), a; var s = b({}, n, { "data-href": n.href, "data-precedence": n.precedence, href: null, precedence: null }); return a = (t.ownerDocument || t).createElement("style"), Jt(a), te(a, "style", s), Rs(a, n.precedence, t), e.instance = a; case "stylesheet": s = ai(n.href); var r = t.querySelector(nl(s)); if (r) return e.state.loading |= 4, e.instance = r, Jt(r), r; a = Gm(n), (s = Be.get(s)) && xr(a, s), r = (t.ownerDocument || t).createElement("link"), Jt(r); var f = r; return f._p = new Promise(function (y, S) { f.onload = y, f.onerror = S }), te(r, "link", a), e.state.loading |= 4, Rs(r, n.precedence, t), e.instance = r; case "script": return r = ii(n.src), (s = t.querySelector(al(r))) ? (e.instance = s, Jt(s), s) : (a = n, (s = Be.get(r)) && (a = b({}, n), br(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), Jt(s), te(s, "link", a), t.head.appendChild(s), e.instance = s); case "void": return null; default: throw Error(o(443, e.type)) } else e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Rs(a, n.precedence, t)); return e.instance } function Rs(t, e, n) { for (var a = n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), s = a.length ? a[a.length - 1] : null, r = s, f = 0; f < a.length; f++) { var y = a[f]; if (y.dataset.precedence === e) r = y; else if (r !== s) break } r ? r.parentNode.insertBefore(t, r.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild)) } function xr(t, e) { t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title) } function br(t, e) { t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity) } var Os = null; function Xm(t, e, n) { if (Os === null) { var a = new Map, s = Os = new Map; s.set(n, a) } else s = Os, a = s.get(n), a || (a = new Map, s.set(n, a)); if (a.has(t)) return a; for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) { var r = n[s]; if (!(r[xi] || r[Wt] || t === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") { var f = r.getAttribute(e) || ""; f = t + f; var y = a.get(f); y ? y.push(r) : a.set(f, [r]) } } return a } function km(t, e, n) { t = t.ownerDocument || t, t.head.insertBefore(n, e === "title" ? t.querySelector("head > title") : null) } function w1(t, e, n) { if (n === 1 || e.itemProp != null) return !1; switch (t) { case "meta": case "title": return !0; case "style": if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "") break; return !0; case "link": if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError) break; switch (e.rel) { case "stylesheet": return t = e.disabled, typeof e.precedence == "string" && t == null; default: return !0 }case "script": if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string") return !0 }return !1 } function Zm(t) { return !(t.type === "stylesheet" && (t.state.loading & 3) === 0) } function R1(t, e, n, a) { if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) { if (n.instance === null) { var s = ai(a.href), r = e.querySelector(nl(s)); if (r) { e = r._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = Vs.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = r, Jt(r); return } r = e.ownerDocument || e, a = Gm(a), (s = Be.get(s)) && xr(a, s), r = r.createElement("link"), Jt(r); var f = r; f._p = new Promise(function (y, S) { f.onload = y, f.onerror = S }), te(r, "link", a), n.instance = r } t.stylesheets === null && (t.stylesheets = new Map), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = Vs.bind(t), e.addEventListener("load", n), e.addEventListener("error", n)) } } var Sr = 0; function O1(t, e) { return t.stylesheets && t.count === 0 && Bs(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function (n) { var a = setTimeout(function () { if (t.stylesheets && Bs(t, t.stylesheets), t.unsuspend) { var r = t.unsuspend; t.unsuspend = null, r() } }, 6e4 + e); 0 < t.imgBytes && Sr === 0 && (Sr = 62500 * d1()); var s = setTimeout(function () { if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Bs(t, t.stylesheets), t.unsuspend)) { var r = t.unsuspend; t.unsuspend = null, r() } }, (t.imgBytes > Sr ? 50 : 800) + e); return t.unsuspend = n, function () { t.unsuspend = null, clearTimeout(a), clearTimeout(s) } } : null } function Vs() { if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) { if (this.stylesheets) Bs(this, this.stylesheets); else if (this.unsuspend) { var t = this.unsuspend; this.unsuspend = null, t() } } } var _s = null; function Bs(t, e) { t.stylesheets = null, t.unsuspend !== null && (t.count++, _s = new Map, e.forEach(V1, t), _s = null, Vs.call(t)) } function V1(t, e) { if (!(e.state.loading & 4)) { var n = _s.get(t); if (n) var a = n.get(null); else { n = new Map, _s.set(t, n); for (var s = t.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < s.length; r++) { var f = s[r]; (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f) } a && n.set(null, a) } s = e.instance, f = s.getAttribute("data-precedence"), r = n.get(f) || a, r === a && n.set(null, s), n.set(f, s), this.count++, a = Vs.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), r ? r.parentNode.insertBefore(s, r.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4 } } var il = { $$typeof: q, Provider: null, Consumer: null, _currentValue: P, _currentValue2: P, _threadCount: 0 }; function _1(t, e, n, a, s, r, f, y, S) { this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = pu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = pu(0), this.hiddenUpdates = pu(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = r, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = S, this.incompleteTransitions = new Map } function Qm(t, e, n, a, s, r, f, y, S, D, w, _) { return t = new _1(t, e, n, f, S, D, w, _, y), e = 1, r === !0 && (e |= 24), r = be(3, null, null, e), t.current = r, r.stateNode = t, e = Iu(), e.refCount++, t.pooledCache = e, e.refCount++, r.memoizedState = { element: a, isDehydrated: n, cache: e }, ao(r), t } function Km(t) { return t ? (t = _a, t) : _a } function Jm(t, e, n, a, s, r) { s = Km(s), a.context === null ? a.context = s : a.pendingContext = s, a = Nn(e), a.payload = { element: n }, r = r === void 0 ? null : r, r !== null && (a.callback = r), n = Cn(t, a, e), n !== null && (pe(n, t, e), Bi(n, t, e)) } function Fm(t, e) { if (t = t.memoizedState, t !== null && t.dehydrated !== null) { var n = t.retryLane; t.retryLane = n !== 0 && n < e ? n : e } } function Tr(t, e) { Fm(t, e), (t = t.alternate) && Fm(t, e) } function Wm(t) { if (t.tag === 13 || t.tag === 31) { var e = ia(t, 67108864); e !== null && pe(e, t, 67108864), Tr(t, 67108864) } } function Pm(t) { if (t.tag === 13 || t.tag === 31) { var e = Me(); e = yu(e); var n = ia(t, e); n !== null && pe(n, t, e), Tr(t, e) } } var Us = !0; function B1(t, e, n, a) { var s = O.T; O.T = null; var r = H.p; try { H.p = 2, Ar(t, e, n, a) } finally { H.p = r, O.T = s } } function U1(t, e, n, a) { var s = O.T; O.T = null; var r = H.p; try { H.p = 8, Ar(t, e, n, a) } finally { H.p = r, O.T = s } } function Ar(t, e, n, a) { if (Us) { var s = Er(a); if (s === null) rr(t, e, a, Ls, n), Im(t, a); else if (H1(s, t, e, n, a)) a.stopPropagation(); else if (Im(t, a), e & 4 && -1 < L1.indexOf(t)) { for (; s !== null;) { var r = Ea(s); if (r !== null) switch (r.tag) { case 3: if (r = r.stateNode, r.current.memoizedState.isDehydrated) { var f = In(r.pendingLanes); if (f !== 0) { var y = r; for (y.pendingLanes |= 2, y.entangledLanes |= 2; f;) { var S = 1 << 31 - ve(f); y.entanglements[1] |= S, f &= ~S } Fe(r), (vt & 6) === 0 && (bs = ye() + 500, $i(0)) } } break; case 31: case 13: y = ia(r, 2), y !== null && pe(y, r, 2), Ts(), Tr(r, 2) }if (r = Er(a), r === null && rr(t, e, a, Ls, n), r === s) break; s = r } s !== null && a.stopPropagation() } else rr(t, e, a, null, n) } } function Er(t) { return t = Mu(t), Mr(t) } var Ls = null; function Mr(t) { if (Ls = null, t = Aa(t), t !== null) { var e = d(t); if (e === null) t = null; else { var n = e.tag; if (n === 13) { if (t = h(e), t !== null) return t; t = null } else if (n === 31) { if (t = m(e), t !== null) return t; t = null } else if (n === 3) { if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null; t = null } else e !== t && (t = null) } } return Ls = t, null } function $m(t) { switch (t) { case "beforetoggle": case "cancel": case "click": case "close": case "contextmenu": case "copy": case "cut": case "auxclick": case "dblclick": case "dragend": case "dragstart": case "drop": case "focusin": case "focusout": case "input": case "invalid": case "keydown": case "keypress": case "keyup": case "mousedown": case "mouseup": case "paste": case "pause": case "play": case "pointercancel": case "pointerdown": case "pointerup": case "ratechange": case "reset": case "resize": case "seeked": case "submit": case "toggle": case "touchcancel": case "touchend": case "touchstart": case "volumechange": case "change": case "selectionchange": case "textInput": case "compositionstart": case "compositionend": case "compositionupdate": case "beforeblur": case "afterblur": case "beforeinput": case "blur": case "fullscreenchange": case "focus": case "hashchange": case "popstate": case "select": case "selectstart": return 2; case "drag": case "dragenter": case "dragexit": case "dragleave": case "dragover": case "mousemove": case "mouseout": case "mouseover": case "pointermove": case "pointerout": case "pointerover": case "scroll": case "touchmove": case "wheel": case "mouseenter": case "mouseleave": case "pointerenter": case "pointerleave": return 8; case "message": switch (A0()) { case sf: return 2; case uf: return 8; case Dl: case E0: return 32; case of: return 268435456; default: return 32 }default: return 32 } } var jr = !1, qn = null, Gn = null, Yn = null, ll = new Map, sl = new Map, Xn = [], L1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" "); function Im(t, e) { switch (t) { case "focusin": case "focusout": qn = null; break; case "dragenter": case "dragleave": Gn = null; break; case "mouseover": case "mouseout": Yn = null; break; case "pointerover": case "pointerout": ll.delete(e.pointerId); break; case "gotpointercapture": case "lostpointercapture": sl.delete(e.pointerId) } } function ul(t, e, n, a, s, r) { return t === null || t.nativeEvent !== r ? (t = { blockedOn: e, domEventName: n, eventSystemFlags: a, nativeEvent: r, targetContainers: [s] }, e !== null && (e = Ea(e), e !== null && Wm(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t) } function H1(t, e, n, a, s) { switch (e) { case "focusin": return qn = ul(qn, t, e, n, a, s), !0; case "dragenter": return Gn = ul(Gn, t, e, n, a, s), !0; case "mouseover": return Yn = ul(Yn, t, e, n, a, s), !0; case "pointerover": var r = s.pointerId; return ll.set(r, ul(ll.get(r) || null, t, e, n, a, s)), !0; case "gotpointercapture": return r = s.pointerId, sl.set(r, ul(sl.get(r) || null, t, e, n, a, s)), !0 }return !1 } function tp(t) { var e = Aa(t.target); if (e !== null) { var n = d(e); if (n !== null) { if (e = n.tag, e === 13) { if (e = h(n), e !== null) { t.blockedOn = e, mf(t.priority, function () { Pm(n) }); return } } else if (e === 31) { if (e = m(n), e !== null) { t.blockedOn = e, mf(t.priority, function () { Pm(n) }); return } } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) { t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null; return } } } t.blockedOn = null } function Hs(t) { if (t.blockedOn !== null) return !1; for (var e = t.targetContainers; 0 < e.length;) { var n = Er(t.nativeEvent); if (n === null) { n = t.nativeEvent; var a = new n.constructor(n.type, n); Eu = a, n.target.dispatchEvent(a), Eu = null } else return e = Ea(n), e !== null && Wm(e), t.blockedOn = n, !1; e.shift() } return !0 } function ep(t, e, n) { Hs(t) && n.delete(e) } function q1() { jr = !1, qn !== null && Hs(qn) && (qn = null), Gn !== null && Hs(Gn) && (Gn = null), Yn !== null && Hs(Yn) && (Yn = null), ll.forEach(ep), sl.forEach(ep) } function qs(t, e) { t.blockedOn === e && (t.blockedOn = null, jr || (jr = !0, i.unstable_scheduleCallback(i.unstable_NormalPriority, q1))) } var Gs = null; function np(t) { Gs !== t && (Gs = t, i.unstable_scheduleCallback(i.unstable_NormalPriority, function () { Gs === t && (Gs = null); for (var e = 0; e < t.length; e += 3) { var n = t[e], a = t[e + 1], s = t[e + 2]; if (typeof a != "function") { if (Mr(a || n) === null) continue; break } var r = Ea(n); r !== null && (t.splice(e, 3), e -= 3, Eo(r, { pending: !0, data: s, method: n.method, action: a }, a, s)) } })) } function li(t) { function e(S) { return qs(S, t) } qn !== null && qs(qn, t), Gn !== null && qs(Gn, t), Yn !== null && qs(Yn, t), ll.forEach(e), sl.forEach(e); for (var n = 0; n < Xn.length; n++) { var a = Xn[n]; a.blockedOn === t && (a.blockedOn = null) } for (; 0 < Xn.length && (n = Xn[0], n.blockedOn === null);)tp(n), n.blockedOn === null && Xn.shift(); if (n = (t.ownerDocument || t).$$reactFormReplay, n != null) for (a = 0; a < n.length; a += 3) { var s = n[a], r = n[a + 1], f = s[re] || null; if (typeof r == "function") f || np(n); else if (f) { var y = null; if (r && r.hasAttribute("formAction")) { if (s = r, f = r[re] || null) y = f.formAction; else if (Mr(s) !== null) continue } else y = f.action; typeof y == "function" ? n[a + 1] = y : (n.splice(a, 3), a -= 3), np(n) } } } function ap() { function t(r) { r.canIntercept && r.info === "react-transition" && r.intercept({ handler: function () { return new Promise(function (f) { return s = f }) }, focusReset: "manual", scroll: "manual" }) } function e() { s !== null && (s(), s = null), a || setTimeout(n, 20) } function n() { if (!a && !navigation.transition) { var r = navigation.currentEntry; r && r.url != null && navigation.navigate(r.url, { state: r.getState(), info: "react-transition", history: "replace" }) } } if (typeof navigation == "object") { var a = !1, s = null; return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function () { a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null) } } } function Dr(t) { this._internalRoot = t } Ys.prototype.render = Dr.prototype.render = function (t) { var e = this._internalRoot; if (e === null) throw Error(o(409)); var n = e.current, a = Me(); Jm(n, a, t, e, null, null) }, Ys.prototype.unmount = Dr.prototype.unmount = function () { var t = this._internalRoot; if (t !== null) { this._internalRoot = null; var e = t.containerInfo; Jm(t.current, 2, null, t, null, null), Ts(), e[Ta] = null } }; function Ys(t) { this._internalRoot = t } Ys.prototype.unstable_scheduleHydration = function (t) { if (t) { var e = df(); t = { blockedOn: null, target: t, priority: e }; for (var n = 0; n < Xn.length && e !== 0 && e < Xn[n].priority; n++); Xn.splice(n, 0, t), n === 0 && tp(t) } }; var ip = l.version; if (ip !== "19.2.4") throw Error(o(527, ip, "19.2.4")); H.findDOMNode = function (t) { var e = t._reactInternals; if (e === void 0) throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t))); return t = p(e), t = t !== null ? x(t) : null, t = t === null ? null : t.stateNode, t }; var G1 = { bundleType: 0, version: "19.2.4", rendererPackageName: "react-dom", currentDispatcherRef: O, reconcilerVersion: "19.2.4" }; if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") { var Xs = __REACT_DEVTOOLS_GLOBAL_HOOK__; if (!Xs.isDisabled && Xs.supportsFiber) try { yi = Xs.inject(G1), ge = Xs } catch { } } return rl.createRoot = function (t, e) { if (!c(t)) throw Error(o(299)); var n = !1, a = "", s = fd, r = hd, f = dd; return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (r = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Qm(t, 1, !1, null, null, n, a, null, s, r, f, ap), t[Ta] = e.current, or(t), new Dr(e) }, rl.hydrateRoot = function (t, e, n) { if (!c(t)) throw Error(o(299)); var a = !1, s = "", r = fd, f = hd, y = dd, S = null; return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (r = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError), n.formState !== void 0 && (S = n.formState)), e = Qm(t, 1, !0, e, n ?? null, a, s, S, r, f, y, ap), e.context = Km(null), n = e.current, a = Me(), a = yu(a), s = Nn(a), s.callback = null, Cn(n, s, a), n = a, e.current.lanes = n, vi(e, n), Fe(e), t[Ta] = e.current, or(t), new Ys(e) }, rl.version = "19.2.4", rl
} var mp; function $1() { if (mp) return zr.exports; mp = 1; function i() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try { __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i) } catch (l) { console.error(l) } } return i(), zr.exports = P1(), zr.exports } var I1 = $1(); const tx = Oy(I1), Mc = Y.createContext({}); function jc(i) { const l = Y.useRef(null); return l.current === null && (l.current = i()), l.current } const Vy = typeof window < "u", _y = Vy ? Y.useLayoutEffect : Y.useEffect, lu = Y.createContext(null); function Dc(i, l) { i.indexOf(l) === -1 && i.push(l) } function Nc(i, l) { const u = i.indexOf(l); u > -1 && i.splice(u, 1) } const Pe = (i, l, u) => u > l ? l : u < i ? i : u; let Cc = () => { }; const vn = {}, By = i => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i); function Uy(i) { return typeof i == "object" && i !== null } const Ly = i => /^0[^.\s]+$/u.test(i); function zc(i) { let l; return () => (l === void 0 && (l = i()), l) } const He = i => i, ex = (i, l) => u => l(i(u)), Tl = (...i) => i.reduce(ex), gl = (i, l, u) => { const o = l - i; return o === 0 ? 1 : (u - i) / o }; class wc { constructor() { this.subscriptions = [] } add(l) { return Dc(this.subscriptions, l), () => Nc(this.subscriptions, l) } notify(l, u, o) { const c = this.subscriptions.length; if (c) if (c === 1) this.subscriptions[0](l, u, o); else for (let d = 0; d < c; d++) { const h = this.subscriptions[d]; h && h(l, u, o) } } getSize() { return this.subscriptions.length } clear() { this.subscriptions.length = 0 } } const gn = i => i * 1e3, Le = i => i / 1e3; function Hy(i, l) { return l ? i * (1e3 / l) : 0 } const qy = (i, l, u) => (((1 - 3 * u + 3 * l) * i + (3 * u - 6 * l)) * i + 3 * l) * i, nx = 1e-7, ax = 12; function ix(i, l, u, o, c) { let d, h, m = 0; do h = l + (u - l) / 2, d = qy(h, o, c) - i, d > 0 ? u = h : l = h; while (Math.abs(d) > nx && ++m < ax); return h } function Al(i, l, u, o) { if (i === l && u === o) return He; const c = d => ix(d, 0, 1, i, u); return d => d === 0 || d === 1 ? d : qy(c(d), l, o) } const Gy = i => l => l <= .5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, Yy = i => l => 1 - i(1 - l), Xy = Al(.33, 1.53, .69, .99), Rc = Yy(Xy), ky = Gy(Rc), Zy = i => (i *= 2) < 1 ? .5 * Rc(i) : .5 * (2 - Math.pow(2, -10 * (i - 1))), Oc = i => 1 - Math.sin(Math.acos(i)), Qy = Yy(Oc), Ky = Gy(Oc), lx = Al(.42, 0, 1, 1), sx = Al(0, 0, .58, 1), Jy = Al(.42, 0, .58, 1), ux = i => Array.isArray(i) && typeof i[0] != "number", Fy = i => Array.isArray(i) && typeof i[0] == "number", ox = { linear: He, easeIn: lx, easeInOut: Jy, easeOut: sx, circIn: Oc, circInOut: Ky, circOut: Qy, backIn: Rc, backInOut: ky, backOut: Xy, anticipate: Zy }, rx = i => typeof i == "string", pp = i => { if (Fy(i)) { Cc(i.length === 4); const [l, u, o, c] = i; return Al(l, u, o, c) } else if (rx(i)) return ox[i]; return i }, ks = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"]; function cx(i, l) { let u = new Set, o = new Set, c = !1, d = !1; const h = new WeakSet; let m = { delta: 0, timestamp: 0, isProcessing: !1 }; function g(x) { h.has(x) && (p.schedule(x), i()), x(m) } const p = { schedule: (x, b = !1, T = !1) => { const R = T && c ? u : o; return b && h.add(x), R.has(x) || R.add(x), x }, cancel: x => { o.delete(x), h.delete(x) }, process: x => { if (m = x, c) { d = !0; return } c = !0, [u, o] = [o, u], u.forEach(g), u.clear(), c = !1, d && (d = !1, p.process(x)) } }; return p } const fx = 40; function Wy(i, l) { let u = !1, o = !0; const c = { delta: 0, timestamp: 0, isProcessing: !1 }, d = () => u = !0, h = ks.reduce((q, Z) => (q[Z] = cx(d), q), {}), { setup: m, read: g, resolveKeyframes: p, preUpdate: x, update: b, preRender: T, render: z, postRender: R } = h, U = () => { const q = vn.useManualTiming ? c.timestamp : performance.now(); u = !1, vn.useManualTiming || (c.delta = o ? 1e3 / 60 : Math.max(Math.min(q - c.timestamp, fx), 1)), c.timestamp = q, c.isProcessing = !0, m.process(c), g.process(c), p.process(c), x.process(c), b.process(c), T.process(c), z.process(c), R.process(c), c.isProcessing = !1, u && l && (o = !1, i(U)) }, G = () => { u = !0, o = !0, c.isProcessing || i(U) }; return { schedule: ks.reduce((q, Z) => { const Q = h[Z]; return q[Z] = (nt, I = !1, F = !1) => (u || G(), Q.schedule(nt, I, F)), q }, {}), cancel: q => { for (let Z = 0; Z < ks.length; Z++)h[ks[Z]].cancel(q) }, state: c, steps: h } } const { schedule: Dt, cancel: Fn, state: ee, steps: Vr } = Wy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : He, !0); let Js; function hx() { Js = void 0 } const se = { now: () => (Js === void 0 && se.set(ee.isProcessing || vn.useManualTiming ? ee.timestamp : performance.now()), Js), set: i => { Js = i, queueMicrotask(hx) } }, Py = i => l => typeof l == "string" && l.startsWith(i), $y = Py("--"), dx = Py("var(--"), Vc = i => dx(i) ? mx.test(i.split("/*")[0].trim()) : !1, mx = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu; function yp(i) { return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--") } const hi = { test: i => typeof i == "number", parse: parseFloat, transform: i => i }, vl = { ...hi, transform: i => Pe(0, 1, i) }, Zs = { ...hi, default: 1 }, dl = i => Math.round(i * 1e5) / 1e5, _c = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu; function px(i) { return i == null } const yx = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Bc = (i, l) => u => !!(typeof u == "string" && yx.test(u) && u.startsWith(i) || l && !px(u) && Object.prototype.hasOwnProperty.call(u, l)), Iy = (i, l, u) => o => { if (typeof o != "string") return o; const [c, d, h, m] = o.match(_c); return { [i]: parseFloat(c), [l]: parseFloat(d), [u]: parseFloat(h), alpha: m !== void 0 ? parseFloat(m) : 1 } }, gx = i => Pe(0, 255, i), _r = { ...hi, transform: i => Math.round(gx(i)) }, xa = { test: Bc("rgb", "red"), parse: Iy("red", "green", "blue"), transform: ({ red: i, green: l, blue: u, alpha: o = 1 }) => "rgba(" + _r.transform(i) + ", " + _r.transform(l) + ", " + _r.transform(u) + ", " + dl(vl.transform(o)) + ")" }; function vx(i) { let l = "", u = "", o = "", c = ""; return i.length > 5 ? (l = i.substring(1, 3), u = i.substring(3, 5), o = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), u = i.substring(2, 3), o = i.substring(3, 4), c = i.substring(4, 5), l += l, u += u, o += o, c += c), { red: parseInt(l, 16), green: parseInt(u, 16), blue: parseInt(o, 16), alpha: c ? parseInt(c, 16) / 255 : 1 } } const tc = { test: Bc("#"), parse: vx, transform: xa.transform }, El = i => ({ test: l => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1, parse: parseFloat, transform: l => `${l}${i}` }), Qn = El("deg"), We = El("%"), J = El("px"), xx = El("vh"), bx = El("vw"), gp = { ...We, parse: i => We.parse(i) / 100, transform: i => We.transform(i * 100) }, si = { test: Bc("hsl", "hue"), parse: Iy("hue", "saturation", "lightness"), transform: ({ hue: i, saturation: l, lightness: u, alpha: o = 1 }) => "hsla(" + Math.round(i) + ", " + We.transform(dl(l)) + ", " + We.transform(dl(u)) + ", " + dl(vl.transform(o)) + ")" }, Zt = { test: i => xa.test(i) || tc.test(i) || si.test(i), parse: i => xa.test(i) ? xa.parse(i) : si.test(i) ? si.parse(i) : tc.parse(i), transform: i => typeof i == "string" ? i : i.hasOwnProperty("red") ? xa.transform(i) : si.transform(i), getAnimatableNone: i => { const l = Zt.parse(i); return l.alpha = 0, Zt.transform(l) } }, Sx = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu; function Tx(i) { var l, u; return isNaN(i) && typeof i == "string" && (((l = i.match(_c)) == null ? void 0 : l.length) || 0) + (((u = i.match(Sx)) == null ? void 0 : u.length) || 0) > 0 } const tg = "number", eg = "color", Ax = "var", Ex = "var(", vp = "${}", Mx = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu; function xl(i) { const l = i.toString(), u = [], o = { color: [], number: [], var: [] }, c = []; let d = 0; const m = l.replace(Mx, g => (Zt.test(g) ? (o.color.push(d), c.push(eg), u.push(Zt.parse(g))) : g.startsWith(Ex) ? (o.var.push(d), c.push(Ax), u.push(g)) : (o.number.push(d), c.push(tg), u.push(parseFloat(g))), ++d, vp)).split(vp); return { values: u, split: m, indexes: o, types: c } } function ng(i) { return xl(i).values } function ag(i) { const { split: l, types: u } = xl(i), o = l.length; return c => { let d = ""; for (let h = 0; h < o; h++)if (d += l[h], c[h] !== void 0) { const m = u[h]; m === tg ? d += dl(c[h]) : m === eg ? d += Zt.transform(c[h]) : d += c[h] } return d } } const jx = i => typeof i == "number" ? 0 : Zt.test(i) ? Zt.getAnimatableNone(i) : i; function Dx(i) { const l = ng(i); return ag(i)(l.map(jx)) } const Wn = { test: Tx, parse: ng, createTransformer: ag, getAnimatableNone: Dx }; function Br(i, l, u) { return u < 0 && (u += 1), u > 1 && (u -= 1), u < 1 / 6 ? i + (l - i) * 6 * u : u < 1 / 2 ? l : u < 2 / 3 ? i + (l - i) * (2 / 3 - u) * 6 : i } function Nx({ hue: i, saturation: l, lightness: u, alpha: o }) { i /= 360, l /= 100, u /= 100; let c = 0, d = 0, h = 0; if (!l) c = d = h = u; else { const m = u < .5 ? u * (1 + l) : u + l - u * l, g = 2 * u - m; c = Br(g, m, i + 1 / 3), d = Br(g, m, i), h = Br(g, m, i - 1 / 3) } return { red: Math.round(c * 255), green: Math.round(d * 255), blue: Math.round(h * 255), alpha: o } } function $s(i, l) { return u => u > 0 ? l : i } const Rt = (i, l, u) => i + (l - i) * u, Ur = (i, l, u) => { const o = i * i, c = u * (l * l - o) + o; return c < 0 ? 0 : Math.sqrt(c) }, Cx = [tc, xa, si], zx = i => Cx.find(l => l.test(i)); function xp(i) { const l = zx(i); if (!l) return !1; let u = l.parse(i); return l === si && (u = Nx(u)), u } const bp = (i, l) => { const u = xp(i), o = xp(l); if (!u || !o) return $s(i, l); const c = { ...u }; return d => (c.red = Ur(u.red, o.red, d), c.green = Ur(u.green, o.green, d), c.blue = Ur(u.blue, o.blue, d), c.alpha = Rt(u.alpha, o.alpha, d), xa.transform(c)) }, ec = new Set(["none", "hidden"]); function wx(i, l) { return ec.has(i) ? u => u <= 0 ? i : l : u => u >= 1 ? l : i } function Rx(i, l) { return u => Rt(i, l, u) } function Uc(i) { return typeof i == "number" ? Rx : typeof i == "string" ? Vc(i) ? $s : Zt.test(i) ? bp : _x : Array.isArray(i) ? ig : typeof i == "object" ? Zt.test(i) ? bp : Ox : $s } function ig(i, l) { const u = [...i], o = u.length, c = i.map((d, h) => Uc(d)(d, l[h])); return d => { for (let h = 0; h < o; h++)u[h] = c[h](d); return u } } function Ox(i, l) { const u = { ...i, ...l }, o = {}; for (const c in u) i[c] !== void 0 && l[c] !== void 0 && (o[c] = Uc(i[c])(i[c], l[c])); return c => { for (const d in o) u[d] = o[d](c); return u } } function Vx(i, l) { const u = [], o = { color: 0, var: 0, number: 0 }; for (let c = 0; c < l.values.length; c++) { const d = l.types[c], h = i.indexes[d][o[d]], m = i.values[h] ?? 0; u[c] = m, o[d]++ } return u } const _x = (i, l) => { const u = Wn.createTransformer(l), o = xl(i), c = xl(l); return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? ec.has(i) && !c.values.length || ec.has(l) && !o.values.length ? wx(i, l) : Tl(ig(Vx(o, c), c.values), u) : $s(i, l) }; function lg(i, l, u) { return typeof i == "number" && typeof l == "number" && typeof u == "number" ? Rt(i, l, u) : Uc(i)(i, l) } const Bx = i => { const l = ({ timestamp: u }) => i(u); return { start: (u = !0) => Dt.update(l, u), stop: () => Fn(l), now: () => ee.isProcessing ? ee.timestamp : se.now() } }, sg = (i, l, u = 10) => { let o = ""; const c = Math.max(Math.round(l / u), 2); for (let d = 0; d < c; d++)o += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", "; return `linear(${o.substring(0, o.length - 2)})` }, Is = 2e4; function Lc(i) { let l = 0; const u = 50; let o = i.next(l); for (; !o.done && l < Is;)l += u, o = i.next(l); return l >= Is ? 1 / 0 : l } function Ux(i, l = 100, u) { const o = u({ ...i, keyframes: [0, l] }), c = Math.min(Lc(o), Is); return { type: "keyframes", ease: d => o.next(c * d).value / l, duration: Le(c) } } const Lx = 5; function ug(i, l, u) { const o = Math.max(l - Lx, 0); return Hy(u - i(o), l - o) } const _t = { stiffness: 100, damping: 10, mass: 1, velocity: 0, duration: 800, bounce: .3, visualDuration: .3, restSpeed: { granular: .01, default: 2 }, restDelta: { granular: .005, default: .5 }, minDuration: .01, maxDuration: 10, minDamping: .05, maxDamping: 1 }, Lr = .001; function Hx({ duration: i = _t.duration, bounce: l = _t.bounce, velocity: u = _t.velocity, mass: o = _t.mass }) { let c, d, h = 1 - l; h = Pe(_t.minDamping, _t.maxDamping, h), i = Pe(_t.minDuration, _t.maxDuration, Le(i)), h < 1 ? (c = p => { const x = p * h, b = x * i, T = x - u, z = nc(p, h), R = Math.exp(-b); return Lr - T / z * R }, d = p => { const b = p * h * i, T = b * u + u, z = Math.pow(h, 2) * Math.pow(p, 2) * i, R = Math.exp(-b), U = nc(Math.pow(p, 2), h); return (-c(p) + Lr > 0 ? -1 : 1) * ((T - z) * R) / U }) : (c = p => { const x = Math.exp(-p * i), b = (p - u) * i + 1; return -Lr + x * b }, d = p => { const x = Math.exp(-p * i), b = (u - p) * (i * i); return x * b }); const m = 5 / i, g = Gx(c, d, m); if (i = gn(i), isNaN(g)) return { stiffness: _t.stiffness, damping: _t.damping, duration: i }; { const p = Math.pow(g, 2) * o; return { stiffness: p, damping: h * 2 * Math.sqrt(o * p), duration: i } } } const qx = 12; function Gx(i, l, u) { let o = u; for (let c = 1; c < qx; c++)o = o - i(o) / l(o); return o } function nc(i, l) { return i * Math.sqrt(1 - l * l) } const Yx = ["duration", "bounce"], Xx = ["stiffness", "damping", "mass"]; function Sp(i, l) { return l.some(u => i[u] !== void 0) } function kx(i) { let l = { velocity: _t.velocity, stiffness: _t.stiffness, damping: _t.damping, mass: _t.mass, isResolvedFromDuration: !1, ...i }; if (!Sp(i, Xx) && Sp(i, Yx)) if (i.visualDuration) { const u = i.visualDuration, o = 2 * Math.PI / (u * 1.2), c = o * o, d = 2 * Pe(.05, 1, 1 - (i.bounce || 0)) * Math.sqrt(c); l = { ...l, mass: _t.mass, stiffness: c, damping: d } } else { const u = Hx(i); l = { ...l, ...u, mass: _t.mass }, l.isResolvedFromDuration = !0 } return l } function tu(i = _t.visualDuration, l = _t.bounce) { const u = typeof i != "object" ? { visualDuration: i, keyframes: [0, 1], bounce: l } : i; let { restSpeed: o, restDelta: c } = u; const d = u.keyframes[0], h = u.keyframes[u.keyframes.length - 1], m = { done: !1, value: d }, { stiffness: g, damping: p, mass: x, duration: b, velocity: T, isResolvedFromDuration: z } = kx({ ...u, velocity: -Le(u.velocity || 0) }), R = T || 0, U = p / (2 * Math.sqrt(g * x)), G = h - d, L = Le(Math.sqrt(g / x)), k = Math.abs(G) < 5; o || (o = k ? _t.restSpeed.granular : _t.restSpeed.default), c || (c = k ? _t.restDelta.granular : _t.restDelta.default); let q; if (U < 1) { const Q = nc(L, U); q = nt => { const I = Math.exp(-U * L * nt); return h - I * ((R + U * L * G) / Q * Math.sin(Q * nt) + G * Math.cos(Q * nt)) } } else if (U === 1) q = Q => h - Math.exp(-L * Q) * (G + (R + L * G) * Q); else { const Q = L * Math.sqrt(U * U - 1); q = nt => { const I = Math.exp(-U * L * nt), F = Math.min(Q * nt, 300); return h - I * ((R + U * L * G) * Math.sinh(F) + Q * G * Math.cosh(F)) / Q } } const Z = { calculatedDuration: z && b || null, next: Q => { const nt = q(Q); if (z) m.done = Q >= b; else { let I = Q === 0 ? R : 0; U < 1 && (I = Q === 0 ? gn(R) : ug(q, Q, nt)); const F = Math.abs(I) <= o, it = Math.abs(h - nt) <= c; m.done = F && it } return m.value = m.done ? h : nt, m }, toString: () => { const Q = Math.min(Lc(Z), Is), nt = sg(I => Z.next(Q * I).value, Q, 30); return Q + "ms " + nt }, toTransition: () => { } }; return Z } tu.applyToOptions = i => { const l = Ux(i, 100, tu); return i.ease = l.ease, i.duration = gn(l.duration), i.type = "keyframes", i }; function ac({ keyframes: i, velocity: l = 0, power: u = .8, timeConstant: o = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: h, min: m, max: g, restDelta: p = .5, restSpeed: x }) { const b = i[0], T = { done: !1, value: b }, z = F => m !== void 0 && F < m || g !== void 0 && F > g, R = F => m === void 0 ? g : g === void 0 || Math.abs(m - F) < Math.abs(g - F) ? m : g; let U = u * l; const G = b + U, L = h === void 0 ? G : h(G); L !== G && (U = L - b); const k = F => -U * Math.exp(-F / o), q = F => L + k(F), Z = F => { const it = k(F), jt = q(F); T.done = Math.abs(it) <= p, T.value = T.done ? L : jt }; let Q, nt; const I = F => { z(T.value) && (Q = F, nt = tu({ keyframes: [T.value, R(T.value)], velocity: ug(q, F, T.value), damping: c, stiffness: d, restDelta: p, restSpeed: x })) }; return I(0), { calculatedDuration: null, next: F => { let it = !1; return !nt && Q === void 0 && (it = !0, Z(F), I(F)), Q !== void 0 && F >= Q ? nt.next(F - Q) : (!it && Z(F), T) } } } function Zx(i, l, u) { const o = [], c = u || vn.mix || lg, d = i.length - 1; for (let h = 0; h < d; h++) { let m = c(i[h], i[h + 1]); if (l) { const g = Array.isArray(l) ? l[h] || He : l; m = Tl(g, m) } o.push(m) } return o } function Qx(i, l, { clamp: u = !0, ease: o, mixer: c } = {}) { const d = i.length; if (Cc(d === l.length), d === 1) return () => l[0]; if (d === 2 && l[0] === l[1]) return () => l[1]; const h = i[0] === i[1]; i[0] > i[d - 1] && (i = [...i].reverse(), l = [...l].reverse()); const m = Zx(l, o, c), g = m.length, p = x => { if (h && x < i[0]) return l[0]; let b = 0; if (g > 1) for (; b < i.length - 2 && !(x < i[b + 1]); b++); const T = gl(i[b], i[b + 1], x); return m[b](T) }; return u ? x => p(Pe(i[0], i[d - 1], x)) : p } function Kx(i, l) { const u = i[i.length - 1]; for (let o = 1; o <= l; o++) { const c = gl(0, l, o); i.push(Rt(u, 1, c)) } } function Jx(i) { const l = [0]; return Kx(l, i.length - 1), l } function Fx(i, l) { return i.map(u => u * l) } function Wx(i, l) { return i.map(() => l || Jy).splice(0, i.length - 1) } function ml({ duration: i = 300, keyframes: l, times: u, ease: o = "easeInOut" }) { const c = ux(o) ? o.map(pp) : pp(o), d = { done: !1, value: l[0] }, h = Fx(u && u.length === l.length ? u : Jx(l), i), m = Qx(h, l, { ease: Array.isArray(c) ? c : Wx(l, c) }); return { calculatedDuration: i, next: g => (d.value = m(g), d.done = g >= i, d) } } const Px = i => i !== null; function Hc(i, { repeat: l, repeatType: u = "loop" }, o, c = 1) { const d = i.filter(Px), m = c < 0 || l && u !== "loop" && l % 2 === 1 ? 0 : d.length - 1; return !m || o === void 0 ? d[m] : o } const $x = { decay: ac, inertia: ac, tween: ml, keyframes: ml, spring: tu }; function og(i) { typeof i.type == "string" && (i.type = $x[i.type]) } class qc { constructor() { this.updateFinished() } get finished() { return this._finished } updateFinished() { this._finished = new Promise(l => { this.resolve = l }) } notifyFinished() { this.resolve() } then(l, u) { return this.finished.then(l, u) } } const Ix = i => i / 100; class Gc extends qc { constructor(l) { super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => { var o, c; const { motionValue: u } = this.options; u && u.updatedAt !== se.now() && this.tick(se.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), (c = (o = this.options).onStop) == null || c.call(o)) }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause() } initAnimation() { const { options: l } = this; og(l); const { type: u = ml, repeat: o = 0, repeatDelay: c = 0, repeatType: d, velocity: h = 0 } = l; let { keyframes: m } = l; const g = u || ml; g !== ml && typeof m[0] != "number" && (this.mixKeyframes = Tl(Ix, lg(m[0], m[1])), m = [0, 100]); const p = g({ ...l, keyframes: m }); d === "mirror" && (this.mirroredGenerator = g({ ...l, keyframes: [...m].reverse(), velocity: -h })), p.calculatedDuration === null && (p.calculatedDuration = Lc(p)); const { calculatedDuration: x } = p; this.calculatedDuration = x, this.resolvedDuration = x + c, this.totalDuration = this.resolvedDuration * (o + 1) - c, this.generator = p } updateTime(l) { const u = Math.round(l - this.startTime) * this.playbackSpeed; this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = u } tick(l, u = !1) { const { generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: h, resolvedDuration: m, calculatedDuration: g } = this; if (this.startTime === null) return o.next(0); const { delay: p = 0, keyframes: x, repeat: b, repeatType: T, repeatDelay: z, type: R, onUpdate: U, finalKeyframe: G } = this.options; this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), u ? this.currentTime = l : this.updateTime(l); const L = this.currentTime - p * (this.playbackSpeed >= 0 ? 1 : -1), k = this.playbackSpeed >= 0 ? L < 0 : L > c; this.currentTime = Math.max(L, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c); let q = this.currentTime, Z = o; if (b) { const F = Math.min(this.currentTime, c) / m; let it = Math.floor(F), jt = F % 1; !jt && F >= 1 && (jt = 1), jt === 1 && it--, it = Math.min(it, b + 1), !!(it % 2) && (T === "reverse" ? (jt = 1 - jt, z && (jt -= z / m)) : T === "mirror" && (Z = h)), q = Pe(0, 1, jt) * m } const Q = k ? { done: !1, value: x[0] } : Z.next(q); d && (Q.value = d(Q.value)); let { done: nt } = Q; !k && g !== null && (nt = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0); const I = this.holdTime === null && (this.state === "finished" || this.state === "running" && nt); return I && R !== ac && (Q.value = Hc(x, this.options, G, this.speed)), U && U(Q.value), I && this.finish(), Q } then(l, u) { return this.finished.then(l, u) } get duration() { return Le(this.calculatedDuration) } get iterationDuration() { const { delay: l = 0 } = this.options || {}; return this.duration + Le(l) } get time() { return Le(this.currentTime) } set time(l) { var u; l = gn(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), (u = this.driver) == null || u.start(!1) } get speed() { return this.playbackSpeed } set speed(l) { this.updateTime(se.now()); const u = this.playbackSpeed !== l; this.playbackSpeed = l, u && (this.time = Le(this.currentTime)) } play() { var c, d; if (this.isStopped) return; const { driver: l = Bx, startTime: u } = this.options; this.driver || (this.driver = l(h => this.tick(h))), (d = (c = this.options).onPlay) == null || d.call(c); const o = this.driver.now(); this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime : this.startTime || (this.startTime = u ?? o), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start() } pause() { this.state = "paused", this.updateTime(se.now()), this.holdTime = this.currentTime } complete() { this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null } finish() { var l, u; this.notifyFinished(), this.teardown(), this.state = "finished", (u = (l = this.options).onComplete) == null || u.call(l) } cancel() { var l, u; this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), (u = (l = this.options).onCancel) == null || u.call(l) } teardown() { this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null } stopDriver() { this.driver && (this.driver.stop(), this.driver = void 0) } sample(l) { return this.startTime = 0, this.tick(l, !0) } attachTimeline(l) { var u; return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), (u = this.driver) == null || u.stop(), l.observe(this) } } function tb(i) { for (let l = 1; l < i.length; l++)i[l] ?? (i[l] = i[l - 1]) } const ba = i => i * 180 / Math.PI, ic = i => { const l = ba(Math.atan2(i[1], i[0])); return lc(l) }, eb = { x: 4, y: 5, translateX: 4, translateY: 5, scaleX: 0, scaleY: 3, scale: i => (Math.abs(i[0]) + Math.abs(i[3])) / 2, rotate: ic, rotateZ: ic, skewX: i => ba(Math.atan(i[1])), skewY: i => ba(Math.atan(i[2])), skew: i => (Math.abs(i[1]) + Math.abs(i[2])) / 2 }, lc = i => (i = i % 360, i < 0 && (i += 360), i), Tp = ic, Ap = i => Math.sqrt(i[0] * i[0] + i[1] * i[1]), Ep = i => Math.sqrt(i[4] * i[4] + i[5] * i[5]), nb = { x: 12, y: 13, z: 14, translateX: 12, translateY: 13, translateZ: 14, scaleX: Ap, scaleY: Ep, scale: i => (Ap(i) + Ep(i)) / 2, rotateX: i => lc(ba(Math.atan2(i[6], i[5]))), rotateY: i => lc(ba(Math.atan2(-i[2], i[0]))), rotateZ: Tp, rotate: Tp, skewX: i => ba(Math.atan(i[4])), skewY: i => ba(Math.atan(i[1])), skew: i => (Math.abs(i[1]) + Math.abs(i[4])) / 2 }; function sc(i) { return i.includes("scale") ? 1 : 0 } function uc(i, l) { if (!i || i === "none") return sc(l); const u = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u); let o, c; if (u) o = nb, c = u; else { const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u); o = eb, c = m } if (!c) return sc(l); const d = o[l], h = c[1].split(",").map(ib); return typeof d == "function" ? d(h) : h[d] } const ab = (i, l) => { const { transform: u = "none" } = getComputedStyle(i); return uc(u, l) }; function ib(i) { return parseFloat(i.trim()) } const di = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"], mi = new Set(di), Mp = i => i === hi || i === J, lb = new Set(["x", "y", "z"]), sb = di.filter(i => !lb.has(i)); function ub(i) { const l = []; return sb.forEach(u => { const o = i.getValue(u); o !== void 0 && (l.push([u, o.get()]), o.set(u.startsWith("scale") ? 1 : 0)) }), l } const Kn = { width: ({ x: i }, { paddingLeft: l = "0", paddingRight: u = "0" }) => i.max - i.min - parseFloat(l) - parseFloat(u), height: ({ y: i }, { paddingTop: l = "0", paddingBottom: u = "0" }) => i.max - i.min - parseFloat(l) - parseFloat(u), top: (i, { top: l }) => parseFloat(l), left: (i, { left: l }) => parseFloat(l), bottom: ({ y: i }, { top: l }) => parseFloat(l) + (i.max - i.min), right: ({ x: i }, { left: l }) => parseFloat(l) + (i.max - i.min), x: (i, { transform: l }) => uc(l, "x"), y: (i, { transform: l }) => uc(l, "y") }; Kn.translateX = Kn.x; Kn.translateY = Kn.y; const Sa = new Set; let oc = !1, rc = !1, cc = !1; function rg() { if (rc) { const i = Array.from(Sa).filter(o => o.needsMeasurement), l = new Set(i.map(o => o.element)), u = new Map; l.forEach(o => { const c = ub(o); c.length && (u.set(o, c), o.render()) }), i.forEach(o => o.measureInitialState()), l.forEach(o => { o.render(); const c = u.get(o); c && c.forEach(([d, h]) => { var m; (m = o.getValue(d)) == null || m.set(h) }) }), i.forEach(o => o.measureEndState()), i.forEach(o => { o.suspendedScrollY !== void 0 && window.scrollTo(0, o.suspendedScrollY) }) } rc = !1, oc = !1, Sa.forEach(i => i.complete(cc)), Sa.clear() } function cg() { Sa.forEach(i => { i.readKeyframes(), i.needsMeasurement && (rc = !0) }) } function ob() { cc = !0, cg(), rg(), cc = !1 } class Yc { constructor(l, u, o, c, d, h = !1) { this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = u, this.name = o, this.motionValue = c, this.element = d, this.isAsync = h } scheduleResolve() { this.state = "scheduled", this.isAsync ? (Sa.add(this), oc || (oc = !0, Dt.read(cg), Dt.resolveKeyframes(rg))) : (this.readKeyframes(), this.complete()) } readKeyframes() { const { unresolvedKeyframes: l, name: u, element: o, motionValue: c } = this; if (l[0] === null) { const d = c == null ? void 0 : c.get(), h = l[l.length - 1]; if (d !== void 0) l[0] = d; else if (o && u) { const m = o.readValue(u, h); m != null && (l[0] = m) } l[0] === void 0 && (l[0] = h), c && d === void 0 && c.set(l[0]) } tb(l) } setFinalKeyframe() { } measureInitialState() { } renderEndStyles() { } measureEndState() { } complete(l = !1) { this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Sa.delete(this) } cancel() { this.state === "scheduled" && (Sa.delete(this), this.state = "pending") } resume() { this.state === "pending" && this.scheduleResolve() } } const rb = i => i.startsWith("--"); function cb(i, l, u) { rb(l) ? i.style.setProperty(l, u) : i.style[l] = u } const fb = zc(() => window.ScrollTimeline !== void 0), hb = {}; function db(i, l) { const u = zc(i); return () => hb[l] ?? u() } const fg = db(() => { try { document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" }) } catch { return !1 } return !0 }, "linearEasing"), fl = ([i, l, u, o]) => `cubic-bezier(${i}, ${l}, ${u}, ${o})`, jp = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: fl([0, .65, .55, 1]), circOut: fl([.55, 0, 1, .45]), backIn: fl([.31, .01, .66, -.59]), backOut: fl([.33, 1.53, .69, .99]) }; function hg(i, l) { if (i) return typeof i == "function" ? fg() ? sg(i, l) : "ease-out" : Fy(i) ? fl(i) : Array.isArray(i) ? i.map(u => hg(u, l) || jp.easeOut) : jp[i] } function mb(i, l, u, { delay: o = 0, duration: c = 300, repeat: d = 0, repeatType: h = "loop", ease: m = "easeOut", times: g } = {}, p = void 0) { const x = { [l]: u }; g && (x.offset = g); const b = hg(m, c); Array.isArray(b) && (x.easing = b); const T = { delay: o, duration: c, easing: Array.isArray(b) ? "linear" : b, fill: "both", iterations: d + 1, direction: h === "reverse" ? "alternate" : "normal" }; return p && (T.pseudoElement = p), i.animate(x, T) } function dg(i) { return typeof i == "function" && "applyToOptions" in i } function pb({ type: i, ...l }) { return dg(i) && fg() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l) } class yb extends qc { constructor(l) { if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l) return; const { element: u, name: o, keyframes: c, pseudoElement: d, allowFlatten: h = !1, finalKeyframe: m, onComplete: g } = l; this.isPseudoElement = !!d, this.allowFlatten = h, this.options = l, Cc(typeof l.type != "string"); const p = pb(l); this.animation = mb(u, o, c, p, d), p.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => { if (this.finishedTime = this.time, !d) { const x = Hc(c, this.options, m, this.speed); this.updateMotionValue ? this.updateMotionValue(x) : cb(u, o, x), this.animation.cancel() } g == null || g(), this.notifyFinished() } } play() { this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished()) } pause() { this.animation.pause() } complete() { var l, u; (u = (l = this.animation).finish) == null || u.call(l) } cancel() { try { this.animation.cancel() } catch { } } stop() { if (this.isStopped) return; this.isStopped = !0; const { state: l } = this; l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel()) } commitStyles() { var u, o, c; const l = (u = this.options) == null ? void 0 : u.element; !this.isPseudoElement && (l != null && l.isConnected) && ((c = (o = this.animation).commitStyles) == null || c.call(o)) } get duration() { var u, o; const l = ((o = (u = this.animation.effect) == null ? void 0 : u.getComputedTiming) == null ? void 0 : o.call(u).duration) || 0; return Le(Number(l)) } get iterationDuration() { const { delay: l = 0 } = this.options || {}; return this.duration + Le(l) } get time() { return Le(Number(this.animation.currentTime) || 0) } set time(l) { this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = gn(l) } get speed() { return this.animation.playbackRate } set speed(l) { l < 0 && (this.finishedTime = null), this.animation.playbackRate = l } get state() { return this.finishedTime !== null ? "finished" : this.animation.playState } get startTime() { return this.manualStartTime ?? Number(this.animation.startTime) } set startTime(l) { this.manualStartTime = this.animation.startTime = l } attachTimeline({ timeline: l, observe: u }) { var o; return this.allowFlatten && ((o = this.animation.effect) == null || o.updateTiming({ easing: "linear" })), this.animation.onfinish = null, l && fb() ? (this.animation.timeline = l, He) : u(this) } } const mg = { anticipate: Zy, backInOut: ky, circInOut: Ky }; function gb(i) { return i in mg } function vb(i) { typeof i.ease == "string" && gb(i.ease) && (i.ease = mg[i.ease]) } const Hr = 10; class xb extends yb { constructor(l) { vb(l), og(l), super(l), l.startTime !== void 0 && (this.startTime = l.startTime), this.options = l } updateMotionValue(l) { const { motionValue: u, onUpdate: o, onComplete: c, element: d, ...h } = this.options; if (!u) return; if (l !== void 0) { u.set(l); return } const m = new Gc({ ...h, autoplay: !1 }), g = Math.max(Hr, se.now() - this.startTime), p = Pe(0, Hr, g - Hr); u.setWithVelocity(m.sample(Math.max(0, g - p)).value, m.sample(g).value, p), m.stop() } } const Dp = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && (Wn.test(i) || i === "0") && !i.startsWith("url(")); function bb(i) { const l = i[0]; if (i.length === 1) return !0; for (let u = 0; u < i.length; u++)if (i[u] !== l) return !0 } function Sb(i, l, u, o) { const c = i[0]; if (c === null) return !1; if (l === "display" || l === "visibility") return !0; const d = i[i.length - 1], h = Dp(c, l), m = Dp(d, l); return !h || !m ? !1 : bb(i) || (u === "spring" || dg(u)) && o } function fc(i) { i.duration = 0, i.type = "keyframes" } const Tb = new Set(["opacity", "clipPath", "filter", "transform"]), Ab = zc(() => Object.hasOwnProperty.call(Element.prototype, "animate")); function Eb(i) { var x; const { motionValue: l, name: u, repeatDelay: o, repeatType: c, damping: d, type: h } = i; if (!(((x = l == null ? void 0 : l.owner) == null ? void 0 : x.current) instanceof HTMLElement)) return !1; const { onUpdate: g, transformTemplate: p } = l.owner.getProps(); return Ab() && u && Tb.has(u) && (u !== "transform" || !p) && !g && !o && c !== "mirror" && d !== 0 && h !== "inertia" } const Mb = 40; class jb extends qc { constructor({ autoplay: l = !0, delay: u = 0, type: o = "keyframes", repeat: c = 0, repeatDelay: d = 0, repeatType: h = "loop", keyframes: m, name: g, motionValue: p, element: x, ...b }) { var R; super(), this.stop = () => { var U, G; this._animation && (this._animation.stop(), (U = this.stopTimeline) == null || U.call(this)), (G = this.keyframeResolver) == null || G.cancel() }, this.createdAt = se.now(); const T = { autoplay: l, delay: u, type: o, repeat: c, repeatDelay: d, repeatType: h, name: g, motionValue: p, element: x, ...b }, z = (x == null ? void 0 : x.KeyframeResolver) || Yc; this.keyframeResolver = new z(m, (U, G, L) => this.onKeyframesResolved(U, G, T, !L), g, p, x), (R = this.keyframeResolver) == null || R.scheduleResolve() } onKeyframesResolved(l, u, o, c) { var G, L; this.keyframeResolver = void 0; const { name: d, type: h, velocity: m, delay: g, isHandoff: p, onUpdate: x } = o; this.resolvedAt = se.now(), Sb(l, d, h, m) || ((vn.instantAnimations || !g) && (x == null || x(Hc(l, o, u))), l[0] = l[l.length - 1], fc(o), o.repeat = 0); const T = { startTime: c ? this.resolvedAt ? this.resolvedAt - this.createdAt > Mb ? this.resolvedAt : this.createdAt : this.createdAt : void 0, finalKeyframe: u, ...o, keyframes: l }, z = !p && Eb(T), R = (L = (G = T.motionValue) == null ? void 0 : G.owner) == null ? void 0 : L.current, U = z ? new xb({ ...T, element: R }) : new Gc(T); U.finished.then(() => { this.notifyFinished() }).catch(He), this.pendingTimeline && (this.stopTimeline = U.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = U } get finished() { return this._animation ? this.animation.finished : this._finished } then(l, u) { return this.finished.finally(l).then(() => { }) } get animation() { var l; return this._animation || ((l = this.keyframeResolver) == null || l.resume(), ob()), this._animation } get duration() { return this.animation.duration } get iterationDuration() { return this.animation.iterationDuration } get time() { return this.animation.time } set time(l) { this.animation.time = l } get speed() { return this.animation.speed } get state() { return this.animation.state } set speed(l) { this.animation.speed = l } get startTime() { return this.animation.startTime } attachTimeline(l) { return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop() } play() { this.animation.play() } pause() { this.animation.pause() } complete() { this.animation.complete() } cancel() { var l; this._animation && this.animation.cancel(), (l = this.keyframeResolver) == null || l.cancel() } } function pg(i, l, u, o = 0, c = 1) { const d = Array.from(i).sort((p, x) => p.sortNodePosition(x)).indexOf(l), h = i.size, m = (h - 1) * o; return typeof u == "function" ? u(d, h) : c === 1 ? d * o : m - d * o } const Db = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u; function Nb(i) { const l = Db.exec(i); if (!l) return [,]; const [, u, o, c] = l; return [`--${u ?? o}`, c] } function yg(i, l, u = 1) { const [o, c] = Nb(i); if (!o) return; const d = window.getComputedStyle(l).getPropertyValue(o); if (d) { const h = d.trim(); return By(h) ? parseFloat(h) : h } return Vc(c) ? yg(c, l, u + 1) : c } const Cb = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 }, zb = i => ({ type: "spring", stiffness: 550, damping: i === 0 ? 2 * Math.sqrt(550) : 30, restSpeed: 10 }), wb = { type: "keyframes", duration: .8 }, Rb = { type: "keyframes", ease: [.25, .1, .35, 1], duration: .3 }, Ob = (i, { keyframes: l }) => l.length > 2 ? wb : mi.has(i) ? i.startsWith("scale") ? zb(l[1]) : Cb : Rb, Vb = i => i !== null; function _b(i, { repeat: l, repeatType: u = "loop" }, o) { const c = i.filter(Vb), d = l && u !== "loop" && l % 2 === 1 ? 0 : c.length - 1; return c[d] } function Xc(i, l) { return (i == null ? void 0 : i[l]) ?? (i == null ? void 0 : i.default) ?? i } function Bb({ when: i, delay: l, delayChildren: u, staggerChildren: o, staggerDirection: c, repeat: d, repeatType: h, repeatDelay: m, from: g, elapsed: p, ...x }) { return !!Object.keys(x).length } const kc = (i, l, u, o = {}, c, d) => h => { const m = Xc(o, i) || {}, g = m.delay || o.delay || 0; let { elapsed: p = 0 } = o; p = p - gn(g); const x = { keyframes: Array.isArray(u) ? u : [null, u], ease: "easeOut", velocity: l.getVelocity(), ...m, delay: -p, onUpdate: T => { l.set(T), m.onUpdate && m.onUpdate(T) }, onComplete: () => { h(), m.onComplete && m.onComplete() }, name: i, motionValue: l, element: d ? void 0 : c }; Bb(m) || Object.assign(x, Ob(i, x)), x.duration && (x.duration = gn(x.duration)), x.repeatDelay && (x.repeatDelay = gn(x.repeatDelay)), x.from !== void 0 && (x.keyframes[0] = x.from); let b = !1; if ((x.type === !1 || x.duration === 0 && !x.repeatDelay) && (fc(x), x.delay === 0 && (b = !0)), (vn.instantAnimations || vn.skipAnimations || c != null && c.shouldSkipAnimations) && (b = !0, fc(x), x.delay = 0), x.allowFlatten = !m.type && !m.ease, b && !d && l.get() !== void 0) { const T = _b(x.keyframes, m); if (T !== void 0) { Dt.update(() => { x.onUpdate(T), x.onComplete() }); return } } return m.isSync ? new Gc(x) : new jb(x) }; function Np(i) { const l = [{}, {}]; return i == null || i.values.forEach((u, o) => { l[0][o] = u.get(), l[1][o] = u.getVelocity() }), l } function Zc(i, l, u, o) { if (typeof l == "function") { const [c, d] = Np(o); l = l(u !== void 0 ? u : i.custom, c, d) } if (typeof l == "string" && (l = i.variants && i.variants[l]), typeof l == "function") { const [c, d] = Np(o); l = l(u !== void 0 ? u : i.custom, c, d) } return l } function ci(i, l, u) { const o = i.getProps(); return Zc(o, l, u !== void 0 ? u : o.custom, i) } const gg = new Set(["width", "height", "top", "left", "right", "bottom", ...di]), Cp = 30, Ub = i => !isNaN(parseFloat(i)); class Lb { constructor(l, u = {}) { this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = o => { var d; const c = se.now(); if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && ((d = this.events.change) == null || d.notify(this.current), this.dependents)) for (const h of this.dependents) h.dirty() }, this.hasAnimated = !1, this.setCurrent(l), this.owner = u.owner } setCurrent(l) { this.current = l, this.updatedAt = se.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = Ub(this.current)) } setPrevFrameValue(l = this.current) { this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt } onChange(l) { return this.on("change", l) } on(l, u) { this.events[l] || (this.events[l] = new wc); const o = this.events[l].add(u); return l === "change" ? () => { o(), Dt.read(() => { this.events.change.getSize() || this.stop() }) } : o } clearListeners() { for (const l in this.events) this.events[l].clear() } attach(l, u) { this.passiveEffect = l, this.stopPassiveEffect = u } set(l) { this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l) } setWithVelocity(l, u, o) { this.set(u), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - o } jump(l, u = !0) { this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, u && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect() } dirty() { var l; (l = this.events.change) == null || l.notify(this.current) } addDependent(l) { this.dependents || (this.dependents = new Set), this.dependents.add(l) } removeDependent(l) { this.dependents && this.dependents.delete(l) } get() { return this.current } getPrevious() { return this.prev } getVelocity() { const l = se.now(); if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Cp) return 0; const u = Math.min(this.updatedAt - this.prevUpdatedAt, Cp); return Hy(parseFloat(this.current) - parseFloat(this.prevFrameValue), u) } start(l) { return this.stop(), new Promise(u => { this.hasAnimated = !0, this.animation = l(u), this.events.animationStart && this.events.animationStart.notify() }).then(() => { this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation() }) } stop() { this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation() } isAnimating() { return !!this.animation } clearAnimation() { delete this.animation } destroy() { var l, u; (l = this.dependents) == null || l.clear(), (u = this.events.destroy) == null || u.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect() } } function fi(i, l) { return new Lb(i, l) } const hc = i => Array.isArray(i); function Hb(i, l, u) { i.hasValue(l) ? i.getValue(l).set(u) : i.addValue(l, fi(u)) } function qb(i) { return hc(i) ? i[i.length - 1] || 0 : i } function Gb(i, l) { const u = ci(i, l); let { transitionEnd: o = {}, transition: c = {}, ...d } = u || {}; d = { ...d, ...o }; for (const h in d) { const m = qb(d[h]); Hb(i, h, m) } } const ae = i => !!(i && i.getVelocity); function Yb(i) { return !!(ae(i) && i.add) } function dc(i, l) { const u = i.getValue("willChange"); if (Yb(u)) return u.add(l); if (!u && vn.WillChange) { const o = new vn.WillChange("auto"); i.addValue("willChange", o), o.add(l) } } function Qc(i) { return i.replace(/([A-Z])/g, l => `-${l.toLowerCase()}`) } const Xb = "framerAppearId", vg = "data-" + Qc(Xb); function xg(i) { return i.props[vg] } function kb({ protectedKeys: i, needsAnimating: l }, u) { const o = i.hasOwnProperty(u) && l[u] !== !0; return l[u] = !1, o } function bg(i, l, { delay: u = 0, transitionOverride: o, type: c } = {}) { let { transition: d = i.getDefaultTransition(), transitionEnd: h, ...m } = l; const g = d == null ? void 0 : d.reduceMotion; o && (d = o); const p = [], x = c && i.animationState && i.animationState.getState()[c]; for (const b in m) { const T = i.getValue(b, i.latestValues[b] ?? null), z = m[b]; if (z === void 0 || x && kb(x, b)) continue; const R = { delay: u, ...Xc(d || {}, b) }, U = T.get(); if (U !== void 0 && !T.isAnimating && !Array.isArray(z) && z === U && !R.velocity) continue; let G = !1; if (window.MotionHandoffAnimation) { const q = xg(i); if (q) { const Z = window.MotionHandoffAnimation(q, b, Dt); Z !== null && (R.startTime = Z, G = !0) } } dc(i, b); const L = g ?? i.shouldReduceMotion; T.start(kc(b, T, z, L && gg.has(b) ? { type: !1 } : R, i, G)); const k = T.animation; k && p.push(k) } return h && Promise.all(p).then(() => { Dt.update(() => { h && Gb(i, h) }) }), p } function mc(i, l, u = {}) { var g; const o = ci(i, l, u.type === "exit" ? (g = i.presenceContext) == null ? void 0 : g.custom : void 0); let { transition: c = i.getDefaultTransition() || {} } = o || {}; u.transitionOverride && (c = u.transitionOverride); const d = o ? () => Promise.all(bg(i, o, u)) : () => Promise.resolve(), h = i.variantChildren && i.variantChildren.size ? (p = 0) => { const { delayChildren: x = 0, staggerChildren: b, staggerDirection: T } = c; return Zb(i, l, p, x, b, T, u) } : () => Promise.resolve(), { when: m } = c; if (m) { const [p, x] = m === "beforeChildren" ? [d, h] : [h, d]; return p().then(() => x()) } else return Promise.all([d(), h(u.delay)]) } function Zb(i, l, u = 0, o = 0, c = 0, d = 1, h) { const m = []; for (const g of i.variantChildren) g.notify("AnimationStart", l), m.push(mc(g, l, { ...h, delay: u + (typeof o == "function" ? 0 : o) + pg(i.variantChildren, g, o, c, d) }).then(() => g.notify("AnimationComplete", l))); return Promise.all(m) } function Qb(i, l, u = {}) { i.notify("AnimationStart", l); let o; if (Array.isArray(l)) { const c = l.map(d => mc(i, d, u)); o = Promise.all(c) } else if (typeof l == "string") o = mc(i, l, u); else { const c = typeof l == "function" ? ci(i, l, u.custom) : l; o = Promise.all(bg(i, c, u)) } return o.then(() => { i.notify("AnimationComplete", l) }) } const Kb = { test: i => i === "auto", parse: i => i }, Sg = i => l => l.test(i), Tg = [hi, J, We, Qn, bx, xx, Kb], zp = i => Tg.find(Sg(i)); function Jb(i) { return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Ly(i) : !0 } const Fb = new Set(["brightness", "contrast", "saturate", "opacity"]); function Wb(i) { const [l, u] = i.slice(0, -1).split("("); if (l === "drop-shadow") return i; const [o] = u.match(_c) || []; if (!o) return i; const c = u.replace(o, ""); let d = Fb.has(l) ? 1 : 0; return o !== u && (d *= 100), l + "(" + d + c + ")" } const Pb = /\b([a-z-]*)\(.*?\)/gu, pc = { ...Wn, getAnimatableNone: i => { const l = i.match(Pb); return l ? l.map(Wb).join(" ") : i } }, wp = { ...hi, transform: Math.round }, $b = { rotate: Qn, rotateX: Qn, rotateY: Qn, rotateZ: Qn, scale: Zs, scaleX: Zs, scaleY: Zs, scaleZ: Zs, skew: Qn, skewX: Qn, skewY: Qn, distance: J, translateX: J, translateY: J, translateZ: J, x: J, y: J, z: J, perspective: J, transformPerspective: J, opacity: vl, originX: gp, originY: gp, originZ: J }, Kc = { borderWidth: J, borderTopWidth: J, borderRightWidth: J, borderBottomWidth: J, borderLeftWidth: J, borderRadius: J, borderTopLeftRadius: J, borderTopRightRadius: J, borderBottomRightRadius: J, borderBottomLeftRadius: J, width: J, maxWidth: J, height: J, maxHeight: J, top: J, right: J, bottom: J, left: J, inset: J, insetBlock: J, insetBlockStart: J, insetBlockEnd: J, insetInline: J, insetInlineStart: J, insetInlineEnd: J, padding: J, paddingTop: J, paddingRight: J, paddingBottom: J, paddingLeft: J, paddingBlock: J, paddingBlockStart: J, paddingBlockEnd: J, paddingInline: J, paddingInlineStart: J, paddingInlineEnd: J, margin: J, marginTop: J, marginRight: J, marginBottom: J, marginLeft: J, marginBlock: J, marginBlockStart: J, marginBlockEnd: J, marginInline: J, marginInlineStart: J, marginInlineEnd: J, fontSize: J, backgroundPositionX: J, backgroundPositionY: J, ...$b, zIndex: wp, fillOpacity: vl, strokeOpacity: vl, numOctaves: wp }, Ib = { ...Kc, color: Zt, backgroundColor: Zt, outlineColor: Zt, fill: Zt, stroke: Zt, borderColor: Zt, borderTopColor: Zt, borderRightColor: Zt, borderBottomColor: Zt, borderLeftColor: Zt, filter: pc, WebkitFilter: pc }, Ag = i => Ib[i]; function Eg(i, l) { let u = Ag(i); return u !== pc && (u = Wn), u.getAnimatableNone ? u.getAnimatableNone(l) : void 0 } const t2 = new Set(["auto", "none", "0"]); function e2(i, l, u) { let o = 0, c; for (; o < i.length && !c;) { const d = i[o]; typeof d == "string" && !t2.has(d) && xl(d).values.length && (c = i[o]), o++ } if (c && u) for (const d of l) i[d] = Eg(u, c) } class n2 extends Yc { constructor(l, u, o, c, d) { super(l, u, o, c, d, !0) } readKeyframes() { const { unresolvedKeyframes: l, element: u, name: o } = this; if (!u || !u.current) return; super.readKeyframes(); for (let x = 0; x < l.length; x++) { let b = l[x]; if (typeof b == "string" && (b = b.trim(), Vc(b))) { const T = yg(b, u.current); T !== void 0 && (l[x] = T), x === l.length - 1 && (this.finalKeyframe = b) } } if (this.resolveNoneKeyframes(), !gg.has(o) || l.length !== 2) return; const [c, d] = l, h = zp(c), m = zp(d), g = yp(c), p = yp(d); if (g !== p && Kn[o]) { this.needsMeasurement = !0; return } if (h !== m) if (Mp(h) && Mp(m)) for (let x = 0; x < l.length; x++) { const b = l[x]; typeof b == "string" && (l[x] = parseFloat(b)) } else Kn[o] && (this.needsMeasurement = !0) } resolveNoneKeyframes() { const { unresolvedKeyframes: l, name: u } = this, o = []; for (let c = 0; c < l.length; c++)(l[c] === null || Jb(l[c])) && o.push(c); o.length && e2(l, o, u) } measureInitialState() { const { element: l, unresolvedKeyframes: u, name: o } = this; if (!l || !l.current) return; o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Kn[o](l.measureViewportBox(), window.getComputedStyle(l.current)), u[0] = this.measuredOrigin; const c = u[u.length - 1]; c !== void 0 && l.getValue(o, c).jump(c, !1) } measureEndState() { var m; const { element: l, name: u, unresolvedKeyframes: o } = this; if (!l || !l.current) return; const c = l.getValue(u); c && c.jump(this.measuredOrigin, !1); const d = o.length - 1, h = o[d]; o[d] = Kn[u](l.measureViewportBox(), window.getComputedStyle(l.current)), h !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = h), (m = this.removedTransforms) != null && m.length && this.removedTransforms.forEach(([g, p]) => { l.getValue(g).set(p) }), this.resolveNoneKeyframes() } } function a2(i, l, u) { if (i == null) return []; if (i instanceof EventTarget) return [i]; if (typeof i == "string") { let o = document; const c = (u == null ? void 0 : u[i]) ?? o.querySelectorAll(i); return c ? Array.from(c) : [] } return Array.from(i).filter(o => o != null) } const Mg = (i, l) => l && typeof i == "number" ? l.transform(i) : i; function yc(i) { return Uy(i) && "offsetHeight" in i } const { schedule: Jc } = Wy(queueMicrotask, !1), Ze = { x: !1, y: !1 }; function jg() { return Ze.x || Ze.y } function i2(i) { return i === "x" || i === "y" ? Ze[i] ? null : (Ze[i] = !0, () => { Ze[i] = !1 }) : Ze.x || Ze.y ? null : (Ze.x = Ze.y = !0, () => { Ze.x = Ze.y = !1 }) } function Dg(i, l) { const u = a2(i), o = new AbortController, c = { passive: !0, ...l, signal: o.signal }; return [u, c, () => o.abort()] } function Rp(i) { return !(i.pointerType === "touch" || jg()) } function l2(i, l, u = {}) { const [o, c, d] = Dg(i, u), h = m => { if (!Rp(m)) return; const { target: g } = m, p = l(g, m); if (typeof p != "function" || !g) return; const x = b => { Rp(b) && (p(b), g.removeEventListener("pointerleave", x)) }; g.addEventListener("pointerleave", x, c) }; return o.forEach(m => { m.addEventListener("pointerenter", h, c) }), d } const Ng = (i, l) => l ? i === l ? !0 : Ng(i, l.parentElement) : !1, Fc = i => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, s2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]); function u2(i) { return s2.has(i.tagName) || i.isContentEditable === !0 } const o2 = new Set(["INPUT", "SELECT", "TEXTAREA"]); function r2(i) { return o2.has(i.tagName) || i.isContentEditable === !0 } const Fs = new WeakSet; function Op(i) { return l => { l.key === "Enter" && i(l) } } function qr(i, l) { i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 })) } const c2 = (i, l) => { const u = i.currentTarget; if (!u) return; const o = Op(() => { if (Fs.has(u)) return; qr(u, "down"); const c = Op(() => { qr(u, "up") }), d = () => qr(u, "cancel"); u.addEventListener("keyup", c, l), u.addEventListener("blur", d, l) }); u.addEventListener("keydown", o, l), u.addEventListener("blur", () => u.removeEventListener("keydown", o), l) }; function Vp(i) { return Fc(i) && !jg() } function f2(i, l, u = {}) { const [o, c, d] = Dg(i, u), h = m => { const g = m.currentTarget; if (!Vp(m)) return; Fs.add(g); const p = l(g, m), x = (z, R) => { window.removeEventListener("pointerup", b), window.removeEventListener("pointercancel", T), Fs.has(g) && Fs.delete(g), Vp(z) && typeof p == "function" && p(z, { success: R }) }, b = z => { x(z, g === window || g === document || u.useGlobalTarget || Ng(g, z.target)) }, T = z => { x(z, !1) }; window.addEventListener("pointerup", b, c), window.addEventListener("pointercancel", T, c) }; return o.forEach(m => { (u.useGlobalTarget ? window : m).addEventListener("pointerdown", h, c), yc(m) && (m.addEventListener("focus", p => c2(p, c)), !u2(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0)) }), d } function Cg(i) { return Uy(i) && "ownerSVGElement" in i } function h2(i) { return Cg(i) && i.tagName === "svg" } const d2 = [...Tg, Zt, Wn], m2 = i => d2.find(Sg(i)), _p = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }), ui = () => ({ x: _p(), y: _p() }), Bp = () => ({ min: 0, max: 0 }), Kt = () => ({ x: Bp(), y: Bp() }), gc = { current: null }, zg = { current: !1 }, p2 = typeof window < "u"; function y2() { if (zg.current = !0, !!p2) if (window.matchMedia) { const i = window.matchMedia("(prefers-reduced-motion)"), l = () => gc.current = i.matches; i.addEventListener("change", l), l() } else gc.current = !1 } const g2 = new WeakMap; function su(i) { return i !== null && typeof i == "object" && typeof i.start == "function" } function bl(i) { return typeof i == "string" || Array.isArray(i) } const Wc = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"], Pc = ["initial", ...Wc]; function uu(i) { return su(i.animate) || Pc.some(l => bl(i[l])) } function wg(i) { return !!(uu(i) || i.variants) } function v2(i, l, u) { for (const o in l) { const c = l[o], d = u[o]; if (ae(c)) i.addValue(o, c); else if (ae(d)) i.addValue(o, fi(c, { owner: i })); else if (d !== c) if (i.hasValue(o)) { const h = i.getValue(o); h.liveStyle === !0 ? h.jump(c) : h.hasAnimated || h.set(c) } else { const h = i.getStaticValue(o); i.addValue(o, fi(h !== void 0 ? h : c, { owner: i })) } } for (const o in u) l[o] === void 0 && i.removeValue(o); return l } const Up = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]; let eu = {}; function Rg(i) { eu = i } function x2() { return eu } class b2 { scrapeMotionValuesFromProps(l, u, o) { return {} } constructor({ parent: l, props: u, presenceContext: o, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: h, visualState: m }, g = {}) { this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = Yc, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => { this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection)) }, this.renderScheduledAt = 0, this.scheduleRender = () => { const z = se.now(); this.renderScheduledAt < z && (this.renderScheduledAt = z, Dt.render(this.render, !1, !0)) }; const { latestValues: p, renderState: x } = m; this.latestValues = p, this.baseTarget = { ...p }, this.initialValues = u.initial ? { ...p } : {}, this.renderState = x, this.parent = l, this.props = u, this.presenceContext = o, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = g, this.blockInitialAnimation = !!h, this.isControllingVariants = uu(u), this.isVariantNode = wg(u), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(l && l.current); const { willChange: b, ...T } = this.scrapeMotionValuesFromProps(u, {}, this); for (const z in T) { const R = T[z]; p[z] !== void 0 && ae(R) && R.set(p[z]) } } mount(l) { var u; this.current = l, g2.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((o, c) => this.bindToMotionValue(c, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (zg.current || y2(), this.shouldReduceMotion = gc.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, (u = this.parent) == null || u.addChild(this), this.update(this.props, this.presenceContext) } unmount() { var l; this.projection && this.projection.unmount(), Fn(this.notifyUpdate), Fn(this.render), this.valueSubscriptions.forEach(u => u()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), (l = this.parent) == null || l.removeChild(this); for (const u in this.events) this.events[u].clear(); for (const u in this.features) { const o = this.features[u]; o && (o.unmount(), o.isMounted = !1) } this.current = null } addChild(l) { this.children.add(l), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(l) } removeChild(l) { this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l) } bindToMotionValue(l, u) { this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(); const o = mi.has(l); o && this.onBindTransform && this.onBindTransform(); const c = u.on("change", h => { this.latestValues[l] = h, this.props.onUpdate && Dt.preRender(this.notifyUpdate), o && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender() }); let d; typeof window < "u" && window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, u)), this.valueSubscriptions.set(l, () => { c(), d && d(), u.owner && u.stop() }) } sortNodePosition(l) { return !this.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current) } updateFeatures() { let l = "animation"; for (l in eu) { const u = eu[l]; if (!u) continue; const { isEnabled: o, Feature: c } = u; if (!this.features[l] && c && o(this.props) && (this.features[l] = new c(this)), this.features[l]) { const d = this.features[l]; d.isMounted ? d.update() : (d.mount(), d.isMounted = !0) } } } triggerBuild() { this.build(this.renderState, this.latestValues, this.props) } measureViewportBox() { return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Kt() } getStaticValue(l) { return this.latestValues[l] } setStaticValue(l, u) { this.latestValues[l] = u } update(l, u) { (l.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = u; for (let o = 0; o < Up.length; o++) { const c = Up[o]; this.propEventSubscriptions[c] && (this.propEventSubscriptions[c](), delete this.propEventSubscriptions[c]); const d = "on" + c, h = l[d]; h && (this.propEventSubscriptions[c] = this.on(c, h)) } this.prevMotionValues = v2(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue() } getProps() { return this.props } getVariant(l) { return this.props.variants ? this.props.variants[l] : void 0 } getDefaultTransition() { return this.props.transition } getTransformPagePoint() { return this.props.transformPagePoint } getClosestVariantNode() { return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0 } addVariantChild(l) { const u = this.getClosestVariantNode(); if (u) return u.variantChildren && u.variantChildren.add(l), () => u.variantChildren.delete(l) } addValue(l, u) { const o = this.values.get(l); u !== o && (o && this.removeValue(l), this.bindToMotionValue(l, u), this.values.set(l, u), this.latestValues[l] = u.get()) } removeValue(l) { this.values.delete(l); const u = this.valueSubscriptions.get(l); u && (u(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState) } hasValue(l) { return this.values.has(l) } getValue(l, u) { if (this.props.values && this.props.values[l]) return this.props.values[l]; let o = this.values.get(l); return o === void 0 && u !== void 0 && (o = fi(u === null ? void 0 : u, { owner: this }), this.addValue(l, o)), o } readValue(l, u) { let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options); return o != null && (typeof o == "string" && (By(o) || Ly(o)) ? o = parseFloat(o) : !m2(o) && Wn.test(u) && (o = Eg(l, u)), this.setBaseTarget(l, ae(o) ? o.get() : o)), ae(o) ? o.get() : o } setBaseTarget(l, u) { this.baseTarget[l] = u } getBaseTarget(l) { var d; const { initial: u } = this.props; let o; if (typeof u == "string" || typeof u == "object") { const h = Zc(this.props, u, (d = this.presenceContext) == null ? void 0 : d.custom); h && (o = h[l]) } if (u && o !== void 0) return o; const c = this.getBaseTargetFromProps(this.props, l); return c !== void 0 && !ae(c) ? c : this.initialValues[l] !== void 0 && o === void 0 ? void 0 : this.baseTarget[l] } on(l, u) { return this.events[l] || (this.events[l] = new wc), this.events[l].add(u) } notify(l, ...u) { this.events[l] && this.events[l].notify(...u) } scheduleRenderMicrotask() { Jc.render(this.render) } } class Og extends b2 { constructor() { super(...arguments), this.KeyframeResolver = n2 } sortInstanceNodePosition(l, u) { return l.compareDocumentPosition(u) & 2 ? 1 : -1 } getBaseTargetFromProps(l, u) { const o = l.style; return o ? o[u] : void 0 } removeValueFromRenderState(l, { vars: u, style: o }) { delete u[l], delete o[l] } handleChildMotionValue() { this.childSubscription && (this.childSubscription(), delete this.childSubscription); const { children: l } = this.props; ae(l) && (this.childSubscription = l.on("change", u => { this.current && (this.current.textContent = `${u}`) })) } } class Pn { constructor(l) { this.isMounted = !1, this.node = l } update() { } } function Vg({ top: i, left: l, right: u, bottom: o }) { return { x: { min: l, max: u }, y: { min: i, max: o } } } function S2({ x: i, y: l }) { return { top: l.min, right: i.max, bottom: l.max, left: i.min } } function T2(i, l) { if (!l) return i; const u = l({ x: i.left, y: i.top }), o = l({ x: i.right, y: i.bottom }); return { top: u.y, left: u.x, bottom: o.y, right: o.x } } function Gr(i) { return i === void 0 || i === 1 } function vc({ scale: i, scaleX: l, scaleY: u }) { return !Gr(i) || !Gr(l) || !Gr(u) } function va(i) { return vc(i) || _g(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY } function _g(i) { return Lp(i.x) || Lp(i.y) } function Lp(i) { return i && i !== "0%" } function nu(i, l, u) { const o = i - u, c = l * o; return u + c } function Hp(i, l, u, o, c) { return c !== void 0 && (i = nu(i, c, o)), nu(i, u, o) + l } function xc(i, l = 0, u = 1, o, c) { i.min = Hp(i.min, l, u, o, c), i.max = Hp(i.max, l, u, o, c) } function Bg(i, { x: l, y: u }) { xc(i.x, l.translate, l.scale, l.originPoint), xc(i.y, u.translate, u.scale, u.originPoint) } const qp = .999999999999, Gp = 1.0000000000001; function A2(i, l, u, o = !1) { const c = u.length; if (!c) return; l.x = l.y = 1; let d, h; for (let m = 0; m < c; m++) { d = u[m], h = d.projectionDelta; const { visualElement: g } = d.options; g && g.props.style && g.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && ri(i, { x: -d.scroll.offset.x, y: -d.scroll.offset.y }), h && (l.x *= h.x.scale, l.y *= h.y.scale, Bg(i, h)), o && va(d.latestValues) && ri(i, d.latestValues)) } l.x < Gp && l.x > qp && (l.x = 1), l.y < Gp && l.y > qp && (l.y = 1) } function oi(i, l) { i.min = i.min + l, i.max = i.max + l } function Yp(i, l, u, o, c = .5) { const d = Rt(i.min, i.max, c); xc(i, l, u, d, o) } function ri(i, l) { Yp(i.x, l.x, l.scaleX, l.scale, l.originX), Yp(i.y, l.y, l.scaleY, l.scale, l.originY) } function Ug(i, l) { return Vg(T2(i.getBoundingClientRect(), l)) } function E2(i, l, u) { const o = Ug(i, u), { scroll: c } = l; return c && (oi(o.x, c.offset.x), oi(o.y, c.offset.y)), o } const M2 = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" }, j2 = di.length; function D2(i, l, u) { let o = "", c = !0; for (let d = 0; d < j2; d++) { const h = di[d], m = i[h]; if (m === void 0) continue; let g = !0; if (typeof m == "number") g = m === (h.startsWith("scale") ? 1 : 0); else { const p = parseFloat(m); g = h.startsWith("scale") ? p === 1 : p === 0 } if (!g || u) { const p = Mg(m, Kc[h]); if (!g) { c = !1; const x = M2[h] || h; o += `${x}(${p}) ` } u && (l[h] = p) } } return o = o.trim(), u ? o = u(l, c ? "" : o) : c && (o = "none"), o } function $c(i, l, u) { const { style: o, vars: c, transformOrigin: d } = i; let h = !1, m = !1; for (const g in l) { const p = l[g]; if (mi.has(g)) { h = !0; continue } else if ($y(g)) { c[g] = p; continue } else { const x = Mg(p, Kc[g]); g.startsWith("origin") ? (m = !0, d[g] = x) : o[g] = x } } if (l.transform || (h || u ? o.transform = D2(l, i.transform, u) : o.transform && (o.transform = "none")), m) { const { originX: g = "50%", originY: p = "50%", originZ: x = 0 } = d; o.transformOrigin = `${g} ${p} ${x}` } } function Lg(i, { style: l, vars: u }, o, c) { const d = i.style; let h; for (h in l) d[h] = l[h]; c == null || c.applyProjectionStyles(d, o); for (h in u) d.setProperty(h, u[h]) } function Xp(i, l) { return l.max === l.min ? 0 : i / (l.max - l.min) * 100 } const cl = { correct: (i, l) => { if (!l.target) return i; if (typeof i == "string") if (J.test(i)) i = parseFloat(i); else return i; const u = Xp(i, l.target.x), o = Xp(i, l.target.y); return `${u}% ${o}%` } }, N2 = { correct: (i, { treeScale: l, projectionDelta: u }) => { const o = i, c = Wn.parse(i); if (c.length > 5) return o; const d = Wn.createTransformer(i), h = typeof c[0] != "number" ? 1 : 0, m = u.x.scale * l.x, g = u.y.scale * l.y; c[0 + h] /= m, c[1 + h] /= g; const p = Rt(m, g, .5); return typeof c[2 + h] == "number" && (c[2 + h] /= p), typeof c[3 + h] == "number" && (c[3 + h] /= p), d(c) } }, bc = { borderRadius: { ...cl, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: cl, borderTopRightRadius: cl, borderBottomLeftRadius: cl, borderBottomRightRadius: cl, boxShadow: N2 }; function Hg(i, { layout: l, layoutId: u }) { return mi.has(i) || i.startsWith("origin") || (l || u !== void 0) && (!!bc[i] || i === "opacity") } function Ic(i, l, u) { var h; const o = i.style, c = l == null ? void 0 : l.style, d = {}; if (!o) return d; for (const m in o) (ae(o[m]) || c && ae(c[m]) || Hg(m, i) || ((h = u == null ? void 0 : u.getValue(m)) == null ? void 0 : h.liveStyle) !== void 0) && (d[m] = o[m]); return d } function C2(i) { return window.getComputedStyle(i) } class z2 extends Og { constructor() { super(...arguments), this.type = "html", this.renderInstance = Lg } readValueFromInstance(l, u) { var o; if (mi.has(u)) return (o = this.projection) != null && o.isProjecting ? sc(u) : ab(l, u); { const c = C2(l), d = ($y(u) ? c.getPropertyValue(u) : c[u]) || 0; return typeof d == "string" ? d.trim() : d } } measureInstanceViewportBox(l, { transformPagePoint: u }) { return Ug(l, u) } build(l, u, o) { $c(l, u, o.transformTemplate) } scrapeMotionValuesFromProps(l, u, o) { return Ic(l, u, o) } } const w2 = { offset: "stroke-dashoffset", array: "stroke-dasharray" }, R2 = { offset: "strokeDashoffset", array: "strokeDasharray" }; function O2(i, l, u = 1, o = 0, c = !0) { i.pathLength = 1; const d = c ? w2 : R2; i[d.offset] = `${-o}`, i[d.array] = `${l} ${u}` } const V2 = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"]; function qg(i, { attrX: l, attrY: u, attrScale: o, pathLength: c, pathSpacing: d = 1, pathOffset: h = 0, ...m }, g, p, x) { if ($c(i, m, p), g) { i.style.viewBox && (i.attrs.viewBox = i.style.viewBox); return } i.attrs = i.style, i.style = {}; const { attrs: b, style: T } = i; b.transform && (T.transform = b.transform, delete b.transform), (T.transform || b.transformOrigin) && (T.transformOrigin = b.transformOrigin ?? "50% 50%", delete b.transformOrigin), T.transform && (T.transformBox = (x == null ? void 0 : x.transformBox) ?? "fill-box", delete b.transformBox); for (const z of V2) b[z] !== void 0 && (T[z] = b[z], delete b[z]); l !== void 0 && (b.x = l), u !== void 0 && (b.y = u), o !== void 0 && (b.scale = o), c !== void 0 && O2(b, c, d, h, !1) } const Gg = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]), Yg = i => typeof i == "string" && i.toLowerCase() === "svg"; function _2(i, l, u, o) { Lg(i, l, void 0, o); for (const c in l.attrs) i.setAttribute(Gg.has(c) ? c : Qc(c), l.attrs[c]) } function Xg(i, l, u) { const o = Ic(i, l, u); for (const c in i) if (ae(i[c]) || ae(l[c])) { const d = di.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c; o[d] = i[c] } return o } class B2 extends Og { constructor() { super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Kt } getBaseTargetFromProps(l, u) { return l[u] } readValueFromInstance(l, u) { if (mi.has(u)) { const o = Ag(u); return o && o.default || 0 } return u = Gg.has(u) ? u : Qc(u), l.getAttribute(u) } scrapeMotionValuesFromProps(l, u, o) { return Xg(l, u, o) } build(l, u, o) { qg(l, u, this.isSVGTag, o.transformTemplate, o.style) } renderInstance(l, u, o, c) { _2(l, u, o, c) } mount(l) { this.isSVGTag = Yg(l.tagName), super.mount(l) } } const U2 = Pc.length; function kg(i) { if (!i) return; if (!i.isControllingVariants) { const u = i.parent ? kg(i.parent) || {} : {}; return i.props.initial !== void 0 && (u.initial = i.props.initial), u } const l = {}; for (let u = 0; u < U2; u++) { const o = Pc[u], c = i.props[o]; (bl(c) || c === !1) && (l[o] = c) } return l } function Zg(i, l) { if (!Array.isArray(l)) return !1; const u = l.length; if (u !== i.length) return !1; for (let o = 0; o < u; o++)if (l[o] !== i[o]) return !1; return !0 } const L2 = [...Wc].reverse(), H2 = Wc.length; function q2(i) { return l => Promise.all(l.map(({ animation: u, options: o }) => Qb(i, u, o))) } function G2(i) { let l = q2(i), u = kp(), o = !0; const c = g => (p, x) => { var T; const b = ci(i, x, g === "exit" ? (T = i.presenceContext) == null ? void 0 : T.custom : void 0); if (b) { const { transition: z, transitionEnd: R, ...U } = b; p = { ...p, ...U, ...R } } return p }; function d(g) { l = g(i) } function h(g) { const { props: p } = i, x = kg(i.parent) || {}, b = [], T = new Set; let z = {}, R = 1 / 0; for (let G = 0; G < H2; G++) { const L = L2[G], k = u[L], q = p[L] !== void 0 ? p[L] : x[L], Z = bl(q), Q = L === g ? k.isActive : null; Q === !1 && (R = G); let nt = q === x[L] && q !== p[L] && Z; if (nt && o && i.manuallyAnimateOnMount && (nt = !1), k.protectedKeys = { ...z }, !k.isActive && Q === null || !q && !k.prevProp || su(q) || typeof q == "boolean") continue; const I = Y2(k.prevProp, q); let F = I || L === g && k.isActive && !nt && Z || G > R && Z, it = !1; const jt = Array.isArray(q) ? q : [q]; let Bt = jt.reduce(c(L), {}); Q === !1 && (Bt = {}); const { prevResolvedValues: qt = {} } = k, qe = { ...qt, ...Bt }, je = H => { F = !0, T.has(H) && (it = !0, T.delete(H)), k.needsAnimating[H] = !0; const P = i.getValue(H); P && (P.liveStyle = !1) }; for (const H in qe) { const P = Bt[H], ft = qt[H]; if (z.hasOwnProperty(H)) continue; let pt = !1; hc(P) && hc(ft) ? pt = !Zg(P, ft) : pt = P !== ft, pt ? P != null ? je(H) : T.add(H) : P !== void 0 && T.has(H) ? je(H) : k.protectedKeys[H] = !0 } k.prevProp = q, k.prevResolvedValues = Bt, k.isActive && (z = { ...z, ...Bt }), o && i.blockInitialAnimation && (F = !1); const oe = nt && I; F && (!oe || it) && b.push(...jt.map(H => { const P = { type: L }; if (typeof H == "string" && o && !oe && i.manuallyAnimateOnMount && i.parent) { const { parent: ft } = i, pt = ci(ft, H); if (ft.enteringChildren && pt) { const { delayChildren: E } = pt.transition || {}; P.delay = pg(ft.enteringChildren, i, E) } } return { animation: H, options: P } })) } if (T.size) { const G = {}; if (typeof p.initial != "boolean") { const L = ci(i, Array.isArray(p.initial) ? p.initial[0] : p.initial); L && L.transition && (G.transition = L.transition) } T.forEach(L => { const k = i.getBaseTarget(L), q = i.getValue(L); q && (q.liveStyle = !0), G[L] = k ?? null }), b.push({ animation: G }) } let U = !!b.length; return o && (p.initial === !1 || p.initial === p.animate) && !i.manuallyAnimateOnMount && (U = !1), o = !1, U ? l(b) : Promise.resolve() } function m(g, p) { var b; if (u[g].isActive === p) return Promise.resolve(); (b = i.variantChildren) == null || b.forEach(T => { var z; return (z = T.animationState) == null ? void 0 : z.setActive(g, p) }), u[g].isActive = p; const x = h(g); for (const T in u) u[T].protectedKeys = {}; return x } return { animateChanges: h, setActive: m, setAnimateFunction: d, getState: () => u, reset: () => { u = kp() } } } function Y2(i, l) { return typeof l == "string" ? l !== i : Array.isArray(l) ? !Zg(l, i) : !1 } function ga(i = !1) { return { isActive: i, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} } } function kp() { return { animate: ga(!0), whileInView: ga(), whileHover: ga(), whileTap: ga(), whileDrag: ga(), whileFocus: ga(), exit: ga() } } function Zp(i, l) { i.min = l.min, i.max = l.max } function ke(i, l) { Zp(i.x, l.x), Zp(i.y, l.y) } function Qp(i, l) { i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin } const Qg = 1e-4, X2 = 1 - Qg, k2 = 1 + Qg, Kg = .01, Z2 = 0 - Kg, Q2 = 0 + Kg; function ue(i) { return i.max - i.min } function K2(i, l, u) { return Math.abs(i - l) <= u } function Kp(i, l, u, o = .5) { i.origin = o, i.originPoint = Rt(l.min, l.max, i.origin), i.scale = ue(u) / ue(l), i.translate = Rt(u.min, u.max, i.origin) - i.originPoint, (i.scale >= X2 && i.scale <= k2 || isNaN(i.scale)) && (i.scale = 1), (i.translate >= Z2 && i.translate <= Q2 || isNaN(i.translate)) && (i.translate = 0) } function pl(i, l, u, o) { Kp(i.x, l.x, u.x, o ? o.originX : void 0), Kp(i.y, l.y, u.y, o ? o.originY : void 0) } function Jp(i, l, u) { i.min = u.min + l.min, i.max = i.min + ue(l) } function J2(i, l, u) { Jp(i.x, l.x, u.x), Jp(i.y, l.y, u.y) } function Fp(i, l, u) { i.min = l.min - u.min, i.max = i.min + ue(l) } function au(i, l, u) { Fp(i.x, l.x, u.x), Fp(i.y, l.y, u.y) } function Wp(i, l, u, o, c) { return i -= l, i = nu(i, 1 / u, o), c !== void 0 && (i = nu(i, 1 / c, o)), i } function F2(i, l = 0, u = 1, o = .5, c, d = i, h = i) { if (We.test(l) && (l = parseFloat(l), l = Rt(h.min, h.max, l / 100) - h.min), typeof l != "number") return; let m = Rt(d.min, d.max, o); i === d && (m -= l), i.min = Wp(i.min, l, u, m, c), i.max = Wp(i.max, l, u, m, c) } function Pp(i, l, [u, o, c], d, h) { F2(i, l[u], l[o], l[c], l.scale, d, h) } const W2 = ["x", "scaleX", "originX"], P2 = ["y", "scaleY", "originY"]; function $p(i, l, u, o) { Pp(i.x, l, W2, u ? u.x : void 0, o ? o.x : void 0), Pp(i.y, l, P2, u ? u.y : void 0, o ? o.y : void 0) } function Ip(i) { return i.translate === 0 && i.scale === 1 } function Jg(i) { return Ip(i.x) && Ip(i.y) } function ty(i, l) { return i.min === l.min && i.max === l.max } function $2(i, l) { return ty(i.x, l.x) && ty(i.y, l.y) } function ey(i, l) { return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max) } function Fg(i, l) { return ey(i.x, l.x) && ey(i.y, l.y) } function ny(i) { return ue(i.x) / ue(i.y) } function ay(i, l) { return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint } function Ue(i) { return [i("x"), i("y")] } function I2(i, l, u) { let o = ""; const c = i.x.translate / l.x, d = i.y.translate / l.y, h = (u == null ? void 0 : u.z) || 0; if ((c || d || h) && (o = `translate3d(${c}px, ${d}px, ${h}px) `), (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `), u) { const { transformPerspective: p, rotate: x, rotateX: b, rotateY: T, skewX: z, skewY: R } = u; p && (o = `perspective(${p}px) ${o}`), x && (o += `rotate(${x}deg) `), b && (o += `rotateX(${b}deg) `), T && (o += `rotateY(${T}deg) `), z && (o += `skewX(${z}deg) `), R && (o += `skewY(${R}deg) `) } const m = i.x.scale * l.x, g = i.y.scale * l.y; return (m !== 1 || g !== 1) && (o += `scale(${m}, ${g})`), o || "none" } const Wg = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], tS = Wg.length, iy = i => typeof i == "string" ? parseFloat(i) : i, ly = i => typeof i == "number" || J.test(i); function eS(i, l, u, o, c, d) { c ? (i.opacity = Rt(0, u.opacity ?? 1, nS(o)), i.opacityExit = Rt(l.opacity ?? 1, 0, aS(o))) : d && (i.opacity = Rt(l.opacity ?? 1, u.opacity ?? 1, o)); for (let h = 0; h < tS; h++) { const m = `border${Wg[h]}Radius`; let g = sy(l, m), p = sy(u, m); if (g === void 0 && p === void 0) continue; g || (g = 0), p || (p = 0), g === 0 || p === 0 || ly(g) === ly(p) ? (i[m] = Math.max(Rt(iy(g), iy(p), o), 0), (We.test(p) || We.test(g)) && (i[m] += "%")) : i[m] = p } (l.rotate || u.rotate) && (i.rotate = Rt(l.rotate || 0, u.rotate || 0, o)) } function sy(i, l) { return i[l] !== void 0 ? i[l] : i.borderRadius } const nS = Pg(0, .5, Qy), aS = Pg(.5, .95, He); function Pg(i, l, u) { return o => o < i ? 0 : o > l ? 1 : u(gl(i, l, o)) } function iS(i, l, u) { const o = ae(i) ? i : fi(i); return o.start(kc("", o, l, u)), o.animation } function Sl(i, l, u, o = { passive: !0 }) { return i.addEventListener(l, u, o), () => i.removeEventListener(l, u) } const lS = (i, l) => i.depth - l.depth; class sS { constructor() { this.children = [], this.isDirty = !1 } add(l) { Dc(this.children, l), this.isDirty = !0 } remove(l) { Nc(this.children, l), this.isDirty = !0 } forEach(l) { this.isDirty && this.children.sort(lS), this.isDirty = !1, this.children.forEach(l) } } function uS(i, l) { const u = se.now(), o = ({ timestamp: c }) => { const d = c - u; d >= l && (Fn(o), i(d - l)) }; return Dt.setup(o, !0), () => Fn(o) } function Ws(i) { return ae(i) ? i.get() : i } class oS { constructor() { this.members = [] } add(l) { Dc(this.members, l), l.scheduleRender() } remove(l) { if (Nc(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) { const u = this.members[this.members.length - 1]; u && this.promote(u) } } relegate(l) { const u = this.members.findIndex(c => l === c); if (u === 0) return !1; let o; for (let c = u; c >= 0; c--) { const d = this.members[c]; if (d.isPresent !== !1) { o = d; break } } return o ? (this.promote(o), !0) : !1 } promote(l, u) { const o = this.lead; if (l !== o && (this.prevLead = o, this.lead = l, l.show(), o)) { o.instance && o.scheduleRender(), l.scheduleRender(); const c = o.options.layoutDependency, d = l.options.layoutDependency; c !== void 0 && d !== void 0 && c === d || (l.resumeFrom = o, u && (l.resumeFrom.preserveOpacity = !0), o.snapshot && (l.snapshot = o.snapshot, l.snapshot.latestValues = o.animationValues || o.latestValues), l.root && l.root.isUpdating && (l.isLayoutDirty = !0)); const { crossfade: m } = l.options; m === !1 && o.hide() } } exitAnimationComplete() { this.members.forEach(l => { const { options: u, resumingFrom: o } = l; u.onExitComplete && u.onExitComplete(), o && o.options.onExitComplete && o.options.onExitComplete() }) } scheduleRender() { this.members.forEach(l => { l.instance && l.scheduleRender(!1) }) } removeLeadSnapshot() { this.lead && this.lead.snapshot && (this.lead.snapshot = void 0) } } const Ps = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 }, Yr = ["", "X", "Y", "Z"], rS = 1e3; let cS = 0; function Xr(i, l, u, o) { const { latestValues: c } = l; c[i] && (u[i] = c[i], l.setStaticValue(i, 0), o && (o[i] = 0)) } function $g(i) { if (i.hasCheckedOptimisedAppear = !0, i.root === i) return; const { visualElement: l } = i.options; if (!l) return; const u = xg(l); if (window.MotionHasOptimisedAnimation(u, "transform")) { const { layout: c, layoutId: d } = i.options; window.MotionCancelOptimisedAnimation(u, "transform", Dt, !(c || d)) } const { parent: o } = i; o && !o.hasCheckedOptimisedAppear && $g(o) } function Ig({ attachResizeListener: i, defaultParent: l, measureScroll: u, checkIsScrollRoot: o, resetTransform: c }) { return class { constructor(h = {}, m = l == null ? void 0 : l()) { this.id = cS++, this.animationId = 0, this.animationCommitId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.layoutVersion = 0, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => { this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots()) }, this.updateProjection = () => { this.projectionUpdateScheduled = !1, this.nodes.forEach(dS), this.nodes.forEach(gS), this.nodes.forEach(vS), this.nodes.forEach(mS) }, this.resolvedRelativeTargetAt = 0, this.linkedParentVersion = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = h, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0; for (let g = 0; g < this.path.length; g++)this.path[g].shouldResetTransform = !0; this.root === this && (this.nodes = new sS) } addEventListener(h, m) { return this.eventHandlers.has(h) || this.eventHandlers.set(h, new wc), this.eventHandlers.get(h).add(m) } notifyListeners(h, ...m) { const g = this.eventHandlers.get(h); g && g.notify(...m) } hasListeners(h) { return this.eventHandlers.has(h) } mount(h) { if (this.instance) return; this.isSVG = Cg(h) && !h2(h), this.instance = h; const { layoutId: m, layout: g, visualElement: p } = this.options; if (p && !p.current && p.mount(h), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0), i) { let x, b = 0; const T = () => this.root.updateBlockedByResize = !1; Dt.read(() => { b = window.innerWidth }), i(h, () => { const z = window.innerWidth; z !== b && (b = z, this.root.updateBlockedByResize = !0, x && x(), x = uS(T, 250), Ps.hasAnimatedSinceResize && (Ps.hasAnimatedSinceResize = !1, this.nodes.forEach(ry))) }) } m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && p && (m || g) && this.addEventListener("didUpdate", ({ delta: x, hasLayoutChanged: b, hasRelativeLayoutChanged: T, layout: z }) => { if (this.isTreeAnimationBlocked()) { this.target = void 0, this.relativeTarget = void 0; return } const R = this.options.transition || p.getDefaultTransition() || AS, { onLayoutAnimationStart: U, onLayoutAnimationComplete: G } = p.getProps(), L = !this.targetLayout || !Fg(this.targetLayout, z), k = !b && T; if (this.options.layoutRoot || this.resumeFrom || k || b && (L || !this.currentAnimation)) { this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0); const q = { ...Xc(R, "layout"), onPlay: U, onComplete: G }; (p.shouldReduceMotion || this.options.layoutRoot) && (q.delay = 0, q.type = !1), this.startAnimation(q), this.setAnimationOrigin(x, k) } else b || ry(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete(); this.targetLayout = z }) } unmount() { this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this); const h = this.getStack(); h && h.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Fn(this.updateProjection) } blockUpdate() { this.updateManuallyBlocked = !0 } unblockUpdate() { this.updateManuallyBlocked = !1 } isUpdateBlocked() { return this.updateManuallyBlocked || this.updateBlockedByResize } isTreeAnimationBlocked() { return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1 } startUpdate() { this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(xS), this.animationId++) } getTransformTemplate() { const { visualElement: h } = this.options; return h && h.getProps().transformTemplate } willUpdate(h = !0) { if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) { this.options.onExitComplete && this.options.onExitComplete(); return } if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && $g(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return; this.isLayoutDirty = !0; for (let x = 0; x < this.path.length; x++) { const b = this.path[x]; b.shouldResetTransform = !0, b.updateScroll("snapshot"), b.options.layoutRoot && b.willUpdate(!1) } const { layoutId: m, layout: g } = this.options; if (m === void 0 && !g) return; const p = this.getTransformTemplate(); this.prevTransformTemplateValue = p ? p(this.latestValues, "") : void 0, this.updateSnapshot(), h && this.notifyListeners("willUpdate") } update() { if (this.updateScheduled = !1, this.isUpdateBlocked()) { this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(uy); return } if (this.animationId <= this.animationCommitId) { this.nodes.forEach(oy); return } this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(yS), this.nodes.forEach(fS), this.nodes.forEach(hS)) : this.nodes.forEach(oy), this.clearAllSnapshots(); const m = se.now(); ee.delta = Pe(0, 1e3 / 60, m - ee.timestamp), ee.timestamp = m, ee.isProcessing = !0, Vr.update.process(ee), Vr.preRender.process(ee), Vr.render.process(ee), ee.isProcessing = !1 } didUpdate() { this.updateScheduled || (this.updateScheduled = !0, Jc.read(this.scheduleUpdate)) } clearAllSnapshots() { this.nodes.forEach(pS), this.sharedNodes.forEach(bS) } scheduleUpdateProjection() { this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Dt.preRender(this.updateProjection, !1, !0)) } scheduleCheckAfterUnmount() { Dt.postRender(() => { this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed() }) } updateSnapshot() { this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !ue(this.snapshot.measuredBox.x) && !ue(this.snapshot.measuredBox.y) && (this.snapshot = void 0)) } updateLayout() { if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return; if (this.resumeFrom && !this.resumeFrom.instance) for (let g = 0; g < this.path.length; g++)this.path[g].updateScroll(); const h = this.layout; this.layout = this.measure(!1), this.layoutVersion++, this.layoutCorrected = Kt(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox); const { visualElement: m } = this.options; m && m.notify("LayoutMeasure", this.layout.layoutBox, h ? h.layoutBox : void 0) } updateScroll(h = "measure") { let m = !!(this.options.layoutScroll && this.instance); if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === h && (m = !1), m && this.instance) { const g = o(this.instance); this.scroll = { animationId: this.root.animationId, phase: h, isRoot: g, offset: u(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : g } } } resetTransform() { if (!c) return; const h = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, m = this.projectionDelta && !Jg(this.projectionDelta), g = this.getTransformTemplate(), p = g ? g(this.latestValues, "") : void 0, x = p !== this.prevTransformTemplateValue; h && this.instance && (m || va(this.latestValues) || x) && (c(this.instance, p), this.shouldResetTransform = !1, this.scheduleRender()) } measure(h = !0) { const m = this.measurePageBox(); let g = this.removeElementScroll(m); return h && (g = this.removeTransform(g)), ES(g), { animationId: this.root.animationId, measuredBox: m, layoutBox: g, latestValues: {}, source: this.id } } measurePageBox() { var p; const { visualElement: h } = this.options; if (!h) return Kt(); const m = h.measureViewportBox(); if (!(((p = this.scroll) == null ? void 0 : p.wasRoot) || this.path.some(MS))) { const { scroll: x } = this.root; x && (oi(m.x, x.offset.x), oi(m.y, x.offset.y)) } return m } removeElementScroll(h) { var g; const m = Kt(); if (ke(m, h), (g = this.scroll) != null && g.wasRoot) return m; for (let p = 0; p < this.path.length; p++) { const x = this.path[p], { scroll: b, options: T } = x; x !== this.root && b && T.layoutScroll && (b.wasRoot && ke(m, h), oi(m.x, b.offset.x), oi(m.y, b.offset.y)) } return m } applyTransform(h, m = !1) { const g = Kt(); ke(g, h); for (let p = 0; p < this.path.length; p++) { const x = this.path[p]; !m && x.options.layoutScroll && x.scroll && x !== x.root && ri(g, { x: -x.scroll.offset.x, y: -x.scroll.offset.y }), va(x.latestValues) && ri(g, x.latestValues) } return va(this.latestValues) && ri(g, this.latestValues), g } removeTransform(h) { const m = Kt(); ke(m, h); for (let g = 0; g < this.path.length; g++) { const p = this.path[g]; if (!p.instance || !va(p.latestValues)) continue; vc(p.latestValues) && p.updateSnapshot(); const x = Kt(), b = p.measurePageBox(); ke(x, b), $p(m, p.latestValues, p.snapshot ? p.snapshot.layoutBox : void 0, x) } return va(this.latestValues) && $p(m, this.latestValues), m } setTargetDelta(h) { this.targetDelta = h, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0 } setOptions(h) { this.options = { ...this.options, ...h, crossfade: h.crossfade !== void 0 ? h.crossfade : !0 } } clearMeasurements() { this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1 } forceRelativeParentToResolveTarget() { this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ee.timestamp && this.relativeParent.resolveTargetDelta(!0) } resolveTargetDelta(h = !1) { var z; const m = this.getLead(); this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty); const g = !!this.resumingFrom || this !== m; if (!(h || g && this.isSharedProjectionDirty || this.isProjectionDirty || (z = this.parent) != null && z.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return; const { layout: x, layoutId: b } = this.options; if (!this.layout || !(x || b)) return; this.resolvedRelativeTargetAt = ee.timestamp; const T = this.getClosestProjectingParent(); T && this.linkedParentVersion !== T.layoutVersion && !T.options.layoutRoot && this.removeRelativeTarget(), !this.targetDelta && !this.relativeTarget && (T && T.layout ? this.createRelativeTarget(T, this.layout.layoutBox, T.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = Kt(), this.targetWithTransforms = Kt()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), J2(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ke(this.target, this.layout.layoutBox), Bg(this.target, this.targetDelta)) : ke(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, T && !!T.resumingFrom == !!this.resumingFrom && !T.options.layoutScroll && T.target && this.animationProgress !== 1 ? this.createRelativeTarget(T, this.target, T.target) : this.relativeParent = this.relativeTarget = void 0)) } getClosestProjectingParent() { if (!(!this.parent || vc(this.parent.latestValues) || _g(this.parent.latestValues))) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent() } isProjecting() { return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout) } createRelativeTarget(h, m, g) { this.relativeParent = h, this.linkedParentVersion = h.layoutVersion, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Kt(), this.relativeTargetOrigin = Kt(), au(this.relativeTargetOrigin, m, g), ke(this.relativeTarget, this.relativeTargetOrigin) } removeRelativeTarget() { this.relativeParent = this.relativeTarget = void 0 } calcProjection() { var R; const h = this.getLead(), m = !!this.resumingFrom || this !== h; let g = !0; if ((this.isProjectionDirty || (R = this.parent) != null && R.isProjectionDirty) && (g = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === ee.timestamp && (g = !1), g) return; const { layout: p, layoutId: x } = this.options; if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(p || x)) return; ke(this.layoutCorrected, this.layout.layoutBox); const b = this.treeScale.x, T = this.treeScale.y; A2(this.layoutCorrected, this.treeScale, this.path, m), h.layout && !h.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (h.target = h.layout.layoutBox, h.targetWithTransforms = Kt()); const { target: z } = h; if (!z) { this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender()); return } !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Qp(this.prevProjectionDelta.x, this.projectionDelta.x), Qp(this.prevProjectionDelta.y, this.projectionDelta.y)), pl(this.projectionDelta, this.layoutCorrected, z, this.latestValues), (this.treeScale.x !== b || this.treeScale.y !== T || !ay(this.projectionDelta.x, this.prevProjectionDelta.x) || !ay(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", z)) } hide() { this.isVisible = !1 } show() { this.isVisible = !0 } scheduleRender(h = !0) { var m; if ((m = this.options.visualElement) == null || m.scheduleRender(), h) { const g = this.getStack(); g && g.scheduleRender() } this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0) } createProjectionDeltas() { this.prevProjectionDelta = ui(), this.projectionDelta = ui(), this.projectionDeltaWithTransform = ui() } setAnimationOrigin(h, m = !1) { const g = this.snapshot, p = g ? g.latestValues : {}, x = { ...this.latestValues }, b = ui(); (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m; const T = Kt(), z = g ? g.source : void 0, R = this.layout ? this.layout.source : void 0, U = z !== R, G = this.getStack(), L = !G || G.members.length <= 1, k = !!(U && !L && this.options.crossfade === !0 && !this.path.some(TS)); this.animationProgress = 0; let q; this.mixTargetDelta = Z => { const Q = Z / 1e3; cy(b.x, h.x, Q), cy(b.y, h.y, Q), this.setTargetDelta(b), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (au(T, this.layout.layoutBox, this.relativeParent.layout.layoutBox), SS(this.relativeTarget, this.relativeTargetOrigin, T, Q), q && $2(this.relativeTarget, q) && (this.isProjectionDirty = !1), q || (q = Kt()), ke(q, this.relativeTarget)), U && (this.animationValues = x, eS(x, p, this.latestValues, Q, k, L)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = Q }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0) } startAnimation(h) { var m, g, p; this.notifyListeners("animationStart"), (m = this.currentAnimation) == null || m.stop(), (p = (g = this.resumingFrom) == null ? void 0 : g.currentAnimation) == null || p.stop(), this.pendingAnimation && (Fn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Dt.update(() => { Ps.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = fi(0)), this.currentAnimation = iS(this.motionValue, [0, 1e3], { ...h, velocity: 0, isSync: !0, onUpdate: x => { this.mixTargetDelta(x), h.onUpdate && h.onUpdate(x) }, onStop: () => { }, onComplete: () => { h.onComplete && h.onComplete(), this.completeAnimation() } }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0 }) } completeAnimation() { this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0); const h = this.getStack(); h && h.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete") } finishAnimation() { this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(rS), this.currentAnimation.stop()), this.completeAnimation() } applyTransformsToTarget() { const h = this.getLead(); let { targetWithTransforms: m, target: g, layout: p, latestValues: x } = h; if (!(!m || !g || !p)) { if (this !== h && this.layout && p && t0(this.options.animationType, this.layout.layoutBox, p.layoutBox)) { g = this.target || Kt(); const b = ue(this.layout.layoutBox.x); g.x.min = h.target.x.min, g.x.max = g.x.min + b; const T = ue(this.layout.layoutBox.y); g.y.min = h.target.y.min, g.y.max = g.y.min + T } ke(m, g), ri(m, x), pl(this.projectionDeltaWithTransform, this.layoutCorrected, m, x) } } registerSharedNode(h, m) { this.sharedNodes.has(h) || this.sharedNodes.set(h, new oS), this.sharedNodes.get(h).add(m); const p = m.options.initialPromotionConfig; m.promote({ transition: p ? p.transition : void 0, preserveFollowOpacity: p && p.shouldPreserveFollowOpacity ? p.shouldPreserveFollowOpacity(m) : void 0 }) } isLead() { const h = this.getStack(); return h ? h.lead === this : !0 } getLead() { var m; const { layoutId: h } = this.options; return h ? ((m = this.getStack()) == null ? void 0 : m.lead) || this : this } getPrevLead() { var m; const { layoutId: h } = this.options; return h ? (m = this.getStack()) == null ? void 0 : m.prevLead : void 0 } getStack() { const { layoutId: h } = this.options; if (h) return this.root.sharedNodes.get(h) } promote({ needsReset: h, transition: m, preserveFollowOpacity: g } = {}) { const p = this.getStack(); p && p.promote(this, g), h && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({ transition: m }) } relegate() { const h = this.getStack(); return h ? h.relegate(this) : !1 } resetSkewAndRotation() { const { visualElement: h } = this.options; if (!h) return; let m = !1; const { latestValues: g } = h; if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (m = !0), !m) return; const p = {}; g.z && Xr("z", h, p, this.animationValues); for (let x = 0; x < Yr.length; x++)Xr(`rotate${Yr[x]}`, h, p, this.animationValues), Xr(`skew${Yr[x]}`, h, p, this.animationValues); h.render(); for (const x in p) h.setStaticValue(x, p[x]), this.animationValues && (this.animationValues[x] = p[x]); h.scheduleRender() } applyProjectionStyles(h, m) { if (!this.instance || this.isSVG) return; if (!this.isVisible) { h.visibility = "hidden"; return } const g = this.getTransformTemplate(); if (this.needsReset) { this.needsReset = !1, h.visibility = "", h.opacity = "", h.pointerEvents = Ws(m == null ? void 0 : m.pointerEvents) || "", h.transform = g ? g(this.latestValues, "") : "none"; return } const p = this.getLead(); if (!this.projectionDelta || !this.layout || !p.target) { this.options.layoutId && (h.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, h.pointerEvents = Ws(m == null ? void 0 : m.pointerEvents) || ""), this.hasProjected && !va(this.latestValues) && (h.transform = g ? g({}, "") : "none", this.hasProjected = !1); return } h.visibility = ""; const x = p.animationValues || p.latestValues; this.applyTransformsToTarget(); let b = I2(this.projectionDeltaWithTransform, this.treeScale, x); g && (b = g(x, b)), h.transform = b; const { x: T, y: z } = this.projectionDelta; h.transformOrigin = `${T.origin * 100}% ${z.origin * 100}% 0`, p.animationValues ? h.opacity = p === this ? x.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : h.opacity = p === this ? x.opacity !== void 0 ? x.opacity : "" : x.opacityExit !== void 0 ? x.opacityExit : 0; for (const R in bc) { if (x[R] === void 0) continue; const { correct: U, applyTo: G, isCSSVariable: L } = bc[R], k = b === "none" ? x[R] : U(x[R], p); if (G) { const q = G.length; for (let Z = 0; Z < q; Z++)h[G[Z]] = k } else L ? this.options.visualElement.renderState.vars[R] = k : h[R] = k } this.options.layoutId && (h.pointerEvents = p === this ? Ws(m == null ? void 0 : m.pointerEvents) || "" : "none") } clearSnapshot() { this.resumeFrom = this.snapshot = void 0 } resetTree() { this.root.nodes.forEach(h => { var m; return (m = h.currentAnimation) == null ? void 0 : m.stop() }), this.root.nodes.forEach(uy), this.root.sharedNodes.clear() } } } function fS(i) { i.updateLayout() } function hS(i) { var u; const l = ((u = i.resumeFrom) == null ? void 0 : u.snapshot) || i.snapshot; if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) { const { layoutBox: o, measuredBox: c } = i.layout, { animationType: d } = i.options, h = l.source !== i.layout.source; d === "size" ? Ue(b => { const T = h ? l.measuredBox[b] : l.layoutBox[b], z = ue(T); T.min = o[b].min, T.max = T.min + z }) : t0(d, l.layoutBox, o) && Ue(b => { const T = h ? l.measuredBox[b] : l.layoutBox[b], z = ue(o[b]); T.max = T.min + z, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[b].max = i.relativeTarget[b].min + z) }); const m = ui(); pl(m, o, l.layoutBox); const g = ui(); h ? pl(g, i.applyTransform(c, !0), l.measuredBox) : pl(g, o, l.layoutBox); const p = !Jg(m); let x = !1; if (!i.resumeFrom) { const b = i.getClosestProjectingParent(); if (b && !b.resumeFrom) { const { snapshot: T, layout: z } = b; if (T && z) { const R = Kt(); au(R, l.layoutBox, T.layoutBox); const U = Kt(); au(U, o, z.layoutBox), Fg(R, U) || (x = !0), b.options.layoutRoot && (i.relativeTarget = U, i.relativeTargetOrigin = R, i.relativeParent = b) } } } i.notifyListeners("didUpdate", { layout: o, snapshot: l, delta: g, layoutDelta: m, hasLayoutChanged: p, hasRelativeLayoutChanged: x }) } else if (i.isLead()) { const { onExitComplete: o } = i.options; o && o() } i.options.transition = void 0 } function dS(i) { i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty)) } function mS(i) { i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1 } function pS(i) { i.clearSnapshot() } function uy(i) { i.clearMeasurements() } function oy(i) { i.isLayoutDirty = !1 } function yS(i) { const { visualElement: l } = i.options; l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform() } function ry(i) { i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0 } function gS(i) { i.resolveTargetDelta() } function vS(i) { i.calcProjection() } function xS(i) { i.resetSkewAndRotation() } function bS(i) { i.removeLeadSnapshot() } function cy(i, l, u) { i.translate = Rt(l.translate, 0, u), i.scale = Rt(l.scale, 1, u), i.origin = l.origin, i.originPoint = l.originPoint } function fy(i, l, u, o) { i.min = Rt(l.min, u.min, o), i.max = Rt(l.max, u.max, o) } function SS(i, l, u, o) { fy(i.x, l.x, u.x, o), fy(i.y, l.y, u.y, o) } function TS(i) { return i.animationValues && i.animationValues.opacityExit !== void 0 } const AS = { duration: .45, ease: [.4, 0, .1, 1] }, hy = i => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), dy = hy("applewebkit/") && !hy("chrome/") ? Math.round : He; function my(i) { i.min = dy(i.min), i.max = dy(i.max) } function ES(i) { my(i.x), my(i.y) } function t0(i, l, u) { return i === "position" || i === "preserve-aspect" && !K2(ny(l), ny(u), .2) } function MS(i) { var l; return i !== i.root && ((l = i.scroll) == null ? void 0 : l.wasRoot) } const jS = Ig({ attachResizeListener: (i, l) => Sl(i, "resize", l), measureScroll: () => { var i, l; return { x: document.documentElement.scrollLeft || ((i = document.body) == null ? void 0 : i.scrollLeft) || 0, y: document.documentElement.scrollTop || ((l = document.body) == null ? void 0 : l.scrollTop) || 0 } }, checkIsScrollRoot: () => !0 }), kr = { current: void 0 }, e0 = Ig({ measureScroll: i => ({ x: i.scrollLeft, y: i.scrollTop }), defaultParent: () => { if (!kr.current) { const i = new jS({}); i.mount(window), i.setOptions({ layoutScroll: !0 }), kr.current = i } return kr.current }, resetTransform: (i, l) => { i.style.transform = l !== void 0 ? l : "none" }, checkIsScrollRoot: i => window.getComputedStyle(i).position === "fixed" }), tf = Y.createContext({ transformPagePoint: i => i, isStatic: !1, reducedMotion: "never" }); function py(i, l) { if (typeof i == "function") return i(l); i != null && (i.current = l) } function DS(...i) { return l => { let u = !1; const o = i.map(c => { const d = py(c, l); return !u && typeof d == "function" && (u = !0), d }); if (u) return () => { for (let c = 0; c < o.length; c++) { const d = o[c]; typeof d == "function" ? d() : py(i[c], null) } } } } function NS(...i) { return Y.useCallback(DS(...i), i) } class CS extends Y.Component { getSnapshotBeforeUpdate(l) { const u = this.props.childRef.current; if (u && l.isPresent && !this.props.isPresent) { const o = u.offsetParent, c = yc(o) && o.offsetWidth || 0, d = yc(o) && o.offsetHeight || 0, h = this.props.sizeRef.current; h.height = u.offsetHeight || 0, h.width = u.offsetWidth || 0, h.top = u.offsetTop, h.left = u.offsetLeft, h.right = c - h.width - h.left, h.bottom = d - h.height - h.top } return null } componentDidUpdate() { } render() { return this.props.children } } function zS({ children: i, isPresent: l, anchorX: u, anchorY: o, root: c }) {
  var b; const d = Y.useId(), h = Y.useRef(null), m = Y.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }), { nonce: g } = Y.useContext(tf), p = ((b = i.props) == null ? void 0 : b.ref) ?? (i == null ? void 0 : i.ref), x = NS(h, p); return Y.useInsertionEffect(() => {
    const { width: T, height: z, top: R, left: U, right: G, bottom: L } = m.current; if (l || !h.current || !T || !z) return; const k = u === "left" ? `left: ${U}` : `right: ${G}`, q = o === "bottom" ? `bottom: ${L}` : `top: ${R}`; h.current.dataset.motionPopId = d; const Z = document.createElement("style"); g && (Z.nonce = g); const Q = c ?? document.head; return Q.appendChild(Z), Z.sheet && Z.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${T}px !important;
            height: ${z}px !important;
            ${k}px !important;
            ${q}px !important;
          }
        `), () => { Q.contains(Z) && Q.removeChild(Z) }
  }, [l]), v.jsx(CS, { isPresent: l, childRef: h, sizeRef: m, children: Y.cloneElement(i, { ref: x }) })
} const wS = ({ children: i, initial: l, isPresent: u, onExitComplete: o, custom: c, presenceAffectsLayout: d, mode: h, anchorX: m, anchorY: g, root: p }) => { const x = jc(RS), b = Y.useId(); let T = !0, z = Y.useMemo(() => (T = !1, { id: b, initial: l, isPresent: u, custom: c, onExitComplete: R => { x.set(R, !0); for (const U of x.values()) if (!U) return; o && o() }, register: R => (x.set(R, !1), () => x.delete(R)) }), [u, x, o]); return d && T && (z = { ...z }), Y.useMemo(() => { x.forEach((R, U) => x.set(U, !1)) }, [u]), Y.useEffect(() => { !u && !x.size && o && o() }, [u]), h === "popLayout" && (i = v.jsx(zS, { isPresent: u, anchorX: m, anchorY: g, root: p, children: i })), v.jsx(lu.Provider, { value: z, children: i }) }; function RS() { return new Map } function n0(i = !0) { const l = Y.useContext(lu); if (l === null) return [!0, null]; const { isPresent: u, onExitComplete: o, register: c } = l, d = Y.useId(); Y.useEffect(() => { if (i) return c(d) }, [i]); const h = Y.useCallback(() => i && o && o(d), [d, o, i]); return !u && o ? [!1, h] : [!0] } const Qs = i => i.key || ""; function yy(i) { const l = []; return Y.Children.forEach(i, u => { Y.isValidElement(u) && l.push(u) }), l } const a0 = ({ children: i, custom: l, initial: u = !0, onExitComplete: o, presenceAffectsLayout: c = !0, mode: d = "sync", propagate: h = !1, anchorX: m = "left", anchorY: g = "top", root: p }) => { const [x, b] = n0(h), T = Y.useMemo(() => yy(i), [i]), z = h && !x ? [] : T.map(Qs), R = Y.useRef(!0), U = Y.useRef(T), G = jc(() => new Map), L = Y.useRef(new Set), [k, q] = Y.useState(T), [Z, Q] = Y.useState(T); _y(() => { R.current = !1, U.current = T; for (let F = 0; F < Z.length; F++) { const it = Qs(Z[F]); z.includes(it) ? (G.delete(it), L.current.delete(it)) : G.get(it) !== !0 && G.set(it, !1) } }, [Z, z.length, z.join("-")]); const nt = []; if (T !== k) { let F = [...T]; for (let it = 0; it < Z.length; it++) { const jt = Z[it], Bt = Qs(jt); z.includes(Bt) || (F.splice(it, 0, jt), nt.push(jt)) } return d === "wait" && nt.length && (F = nt), Q(yy(F)), q(T), null } const { forceRender: I } = Y.useContext(Mc); return v.jsx(v.Fragment, { children: Z.map(F => { const it = Qs(F), jt = h && !x ? !1 : T === Z || z.includes(it), Bt = () => { if (L.current.has(it)) return; if (L.current.add(it), G.has(it)) G.set(it, !0); else return; let qt = !0; G.forEach(qe => { qe || (qt = !1) }), qt && (I == null || I(), Q(U.current), h && (b == null || b()), o && o()) }; return v.jsx(wS, { isPresent: jt, initial: !R.current || u ? void 0 : !1, custom: l, presenceAffectsLayout: c, mode: d, root: p, onExitComplete: jt ? void 0 : Bt, anchorX: m, anchorY: g, children: F }, it) }) }) }, i0 = Y.createContext({ strict: !1 }), gy = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] }; let vy = !1; function OS() { if (vy) return; const i = {}; for (const l in gy) i[l] = { isEnabled: u => gy[l].some(o => !!u[o]) }; Rg(i), vy = !0 } function l0() { return OS(), x2() } function VS(i) { const l = l0(); for (const u in i) l[u] = { ...l[u], ...i[u] }; Rg(l) } const _S = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]); function iu(i) { return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || _S.has(i) } let s0 = i => !iu(i); function BS(i) { typeof i == "function" && (s0 = l => l.startsWith("on") ? !iu(l) : i(l)) } try { BS(require("@emotion/is-prop-valid").default) } catch { } function US(i, l, u) { const o = {}; for (const c in i) c === "values" && typeof i.values == "object" || (s0(c) || u === !0 && iu(c) || !l && !iu(c) || i.draggable && c.startsWith("onDrag")) && (o[c] = i[c]); return o } const ou = Y.createContext({}); function LS(i, l) { if (uu(i)) { const { initial: u, animate: o } = i; return { initial: u === !1 || bl(u) ? u : void 0, animate: bl(o) ? o : void 0 } } return i.inherit !== !1 ? l : {} } function HS(i) { const { initial: l, animate: u } = LS(i, Y.useContext(ou)); return Y.useMemo(() => ({ initial: l, animate: u }), [xy(l), xy(u)]) } function xy(i) { return Array.isArray(i) ? i.join(" ") : i } const ef = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }); function u0(i, l, u) { for (const o in l) !ae(l[o]) && !Hg(o, u) && (i[o] = l[o]) } function qS({ transformTemplate: i }, l) { return Y.useMemo(() => { const u = ef(); return $c(u, l, i), Object.assign({}, u.vars, u.style) }, [l]) } function GS(i, l) { const u = i.style || {}, o = {}; return u0(o, u, i), Object.assign(o, qS(i, l)), o } function YS(i, l) { const u = {}, o = GS(i, l); return i.drag && i.dragListener !== !1 && (u.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (u.tabIndex = 0), u.style = o, u } const o0 = () => ({ ...ef(), attrs: {} }); function XS(i, l, u, o) { const c = Y.useMemo(() => { const d = o0(); return qg(d, l, Yg(o), i.transformTemplate, i.style), { ...d.attrs, style: { ...d.style } } }, [l]); if (i.style) { const d = {}; u0(d, i.style, i), c.style = { ...d, ...c.style } } return c } const kS = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"]; function nf(i) { return typeof i != "string" || i.includes("-") ? !1 : !!(kS.indexOf(i) > -1 || /[A-Z]/u.test(i)) } function ZS(i, l, u, { latestValues: o }, c, d = !1, h) { const g = (h ?? nf(i) ? XS : YS)(l, o, c, i), p = US(l, typeof i == "string", d), x = i !== Y.Fragment ? { ...p, ...g, ref: u } : {}, { children: b } = l, T = Y.useMemo(() => ae(b) ? b.get() : b, [b]); return Y.createElement(i, { ...x, children: T }) } function QS({ scrapeMotionValuesFromProps: i, createRenderState: l }, u, o, c) { return { latestValues: KS(u, o, c, i), renderState: l() } } function KS(i, l, u, o) { const c = {}, d = o(i, {}); for (const T in d) c[T] = Ws(d[T]); let { initial: h, animate: m } = i; const g = uu(i), p = wg(i); l && p && !g && i.inherit !== !1 && (h === void 0 && (h = l.initial), m === void 0 && (m = l.animate)); let x = u ? u.initial === !1 : !1; x = x || h === !1; const b = x ? m : h; if (b && typeof b != "boolean" && !su(b)) { const T = Array.isArray(b) ? b : [b]; for (let z = 0; z < T.length; z++) { const R = Zc(i, T[z]); if (R) { const { transitionEnd: U, transition: G, ...L } = R; for (const k in L) { let q = L[k]; if (Array.isArray(q)) { const Z = x ? q.length - 1 : 0; q = q[Z] } q !== null && (c[k] = q) } for (const k in U) c[k] = U[k] } } } return c } const r0 = i => (l, u) => { const o = Y.useContext(ou), c = Y.useContext(lu), d = () => QS(i, l, o, c); return u ? d() : jc(d) }, JS = r0({ scrapeMotionValuesFromProps: Ic, createRenderState: ef }), FS = r0({ scrapeMotionValuesFromProps: Xg, createRenderState: o0 }), WS = Symbol.for("motionComponentSymbol"); function PS(i, l, u) { const o = Y.useRef(u); Y.useInsertionEffect(() => { o.current = u }); const c = Y.useRef(null); return Y.useCallback(d => { var m; d && ((m = i.onMount) == null || m.call(i, d)), l && (d ? l.mount(d) : l.unmount()); const h = o.current; if (typeof h == "function") if (d) { const g = h(d); typeof g == "function" && (c.current = g) } else c.current ? (c.current(), c.current = null) : h(d); else h && (h.current = d) }, [l]) } const c0 = Y.createContext({}); function hl(i) { return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current") } function $S(i, l, u, o, c, d) { var q, Z; const { visualElement: h } = Y.useContext(ou), m = Y.useContext(i0), g = Y.useContext(lu), p = Y.useContext(tf), x = p.reducedMotion, b = p.skipAnimations, T = Y.useRef(null), z = Y.useRef(!1); o = o || m.renderer, !T.current && o && (T.current = o(i, { visualState: l, parent: h, props: u, presenceContext: g, blockInitialAnimation: g ? g.initial === !1 : !1, reducedMotionConfig: x, skipAnimations: b, isSVG: d }), z.current && T.current && (T.current.manuallyAnimateOnMount = !0)); const R = T.current, U = Y.useContext(c0); R && !R.projection && c && (R.type === "html" || R.type === "svg") && IS(T.current, u, c, U); const G = Y.useRef(!1); Y.useInsertionEffect(() => { R && G.current && R.update(u, g) }); const L = u[vg], k = Y.useRef(!!L && !((q = window.MotionHandoffIsComplete) != null && q.call(window, L)) && ((Z = window.MotionHasOptimisedAnimation) == null ? void 0 : Z.call(window, L))); return _y(() => { z.current = !0, R && (G.current = !0, window.MotionIsMounted = !0, R.updateFeatures(), R.scheduleRenderMicrotask(), k.current && R.animationState && R.animationState.animateChanges()) }), Y.useEffect(() => { R && (!k.current && R.animationState && R.animationState.animateChanges(), k.current && (queueMicrotask(() => { var Q; (Q = window.MotionHandoffMarkAsComplete) == null || Q.call(window, L) }), k.current = !1), R.enteringChildren = void 0) }), R } function IS(i, l, u, o) { const { layoutId: c, layout: d, drag: h, dragConstraints: m, layoutScroll: g, layoutRoot: p, layoutCrossfade: x } = l; i.projection = new u(i.latestValues, l["data-framer-portal-id"] ? void 0 : f0(i.parent)), i.projection.setOptions({ layoutId: c, layout: d, alwaysMeasureLayout: !!h || m && hl(m), visualElement: i, animationType: typeof d == "string" ? d : "both", initialPromotionConfig: o, crossfade: x, layoutScroll: g, layoutRoot: p }) } function f0(i) { if (i) return i.options.allowProjection !== !1 ? i.projection : f0(i.parent) } function Zr(i, { forwardMotionProps: l = !1, type: u } = {}, o, c) { o && VS(o); const d = u ? u === "svg" : nf(i), h = d ? FS : JS; function m(p, x) { let b; const T = { ...Y.useContext(tf), ...p, layoutId: tT(p) }, { isStatic: z } = T, R = HS(p), U = h(p, z); if (!z && Vy) { eT(); const G = nT(T); b = G.MeasureLayout, R.visualElement = $S(i, U, T, c, G.ProjectionNode, d) } return v.jsxs(ou.Provider, { value: R, children: [b && R.visualElement ? v.jsx(b, { visualElement: R.visualElement, ...T }) : null, ZS(i, p, PS(U, R.visualElement, x), U, z, l, d)] }) } m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`; const g = Y.forwardRef(m); return g[WS] = i, g } function tT({ layoutId: i }) { const l = Y.useContext(Mc).id; return l && i !== void 0 ? l + "-" + i : i } function eT(i, l) { Y.useContext(i0).strict } function nT(i) { const l = l0(), { drag: u, layout: o } = l; if (!u && !o) return {}; const c = { ...u, ...o }; return { MeasureLayout: u != null && u.isEnabled(i) || o != null && o.isEnabled(i) ? c.MeasureLayout : void 0, ProjectionNode: c.ProjectionNode } } function aT(i, l) { if (typeof Proxy > "u") return Zr; const u = new Map, o = (d, h) => Zr(d, h, i, l), c = (d, h) => o(d, h); return new Proxy(c, { get: (d, h) => h === "create" ? o : (u.has(h) || u.set(h, Zr(h, void 0, i, l)), u.get(h)) }) } const iT = (i, l) => l.isSVG ?? nf(i) ? new B2(l) : new z2(l, { allowProjection: i !== Y.Fragment }); class lT extends Pn { constructor(l) { super(l), l.animationState || (l.animationState = G2(l)) } updateAnimationControlsSubscription() { const { animate: l } = this.node.getProps(); su(l) && (this.unmountControls = l.subscribe(this.node)) } mount() { this.updateAnimationControlsSubscription() } update() { const { animate: l } = this.node.getProps(), { animate: u } = this.node.prevProps || {}; l !== u && this.updateAnimationControlsSubscription() } unmount() { var l; this.node.animationState.reset(), (l = this.unmountControls) == null || l.call(this) } } let sT = 0; class uT extends Pn { constructor() { super(...arguments), this.id = sT++ } update() { if (!this.node.presenceContext) return; const { isPresent: l, onExitComplete: u } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {}; if (!this.node.animationState || l === o) return; const c = this.node.animationState.setActive("exit", !l); u && !l && c.then(() => { u(this.id) }) } mount() { const { register: l, onExitComplete: u } = this.node.presenceContext || {}; u && u(this.id), l && (this.unmount = l(this.id)) } unmount() { } } const oT = { animation: { Feature: lT }, exit: { Feature: uT } }; function Ml(i) { return { point: { x: i.pageX, y: i.pageY } } } const rT = i => l => Fc(l) && i(l, Ml(l)); function yl(i, l, u, o) { return Sl(i, l, rT(u), o) } const h0 = ({ current: i }) => i ? i.ownerDocument.defaultView : null, by = (i, l) => Math.abs(i - l); function cT(i, l) { const u = by(i.x, l.x), o = by(i.y, l.y); return Math.sqrt(u ** 2 + o ** 2) } const Sy = new Set(["auto", "scroll"]); class d0 { constructor(l, u, { transformPagePoint: o, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: h = 3, element: m } = {}) { if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = new Map, this.removeScrollListeners = null, this.onElementScroll = z => { this.handleScroll(z.target) }, this.onWindowScroll = () => { this.handleScroll(window) }, this.updatePoint = () => { if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return; const z = Kr(this.lastMoveEventInfo, this.history), R = this.startEvent !== null, U = cT(z.offset, { x: 0, y: 0 }) >= this.distanceThreshold; if (!R && !U) return; const { point: G } = z, { timestamp: L } = ee; this.history.push({ ...G, timestamp: L }); const { onStart: k, onMove: q } = this.handlers; R || (k && k(this.lastMoveEvent, z), this.startEvent = this.lastMoveEvent), q && q(this.lastMoveEvent, z) }, this.handlePointerMove = (z, R) => { this.lastMoveEvent = z, this.lastMoveEventInfo = Qr(R, this.transformPagePoint), Dt.update(this.updatePoint, !0) }, this.handlePointerUp = (z, R) => { this.end(); const { onEnd: U, onSessionEnd: G, resumeAnimation: L } = this.handlers; if ((this.dragSnapToOrigin || !this.startEvent) && L && L(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return; const k = Kr(z.type === "pointercancel" ? this.lastMoveEventInfo : Qr(R, this.transformPagePoint), this.history); this.startEvent && U && U(z, k), G && G(z, k) }, !Fc(l)) return; this.dragSnapToOrigin = d, this.handlers = u, this.transformPagePoint = o, this.distanceThreshold = h, this.contextWindow = c || window; const g = Ml(l), p = Qr(g, this.transformPagePoint), { point: x } = p, { timestamp: b } = ee; this.history = [{ ...x, timestamp: b }]; const { onSessionStart: T } = u; T && T(l, Kr(p, this.history)), this.removeListeners = Tl(yl(this.contextWindow, "pointermove", this.handlePointerMove), yl(this.contextWindow, "pointerup", this.handlePointerUp), yl(this.contextWindow, "pointercancel", this.handlePointerUp)), m && this.startScrollTracking(m) } startScrollTracking(l) { let u = l.parentElement; for (; u;) { const o = getComputedStyle(u); (Sy.has(o.overflowX) || Sy.has(o.overflowY)) && this.scrollPositions.set(u, { x: u.scrollLeft, y: u.scrollTop }), u = u.parentElement } this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }), window.addEventListener("scroll", this.onElementScroll, { capture: !0, passive: !0 }), window.addEventListener("scroll", this.onWindowScroll, { passive: !0 }), this.removeScrollListeners = () => { window.removeEventListener("scroll", this.onElementScroll, { capture: !0 }), window.removeEventListener("scroll", this.onWindowScroll) } } handleScroll(l) { const u = this.scrollPositions.get(l); if (!u) return; const o = l === window, c = o ? { x: window.scrollX, y: window.scrollY } : { x: l.scrollLeft, y: l.scrollTop }, d = { x: c.x - u.x, y: c.y - u.y }; d.x === 0 && d.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(l, c), Dt.update(this.updatePoint, !0)) } updateHandlers(l) { this.handlers = l } end() { this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Fn(this.updatePoint) } } function Qr(i, l) { return l ? { point: l(i.point) } : i } function Ty(i, l) { return { x: i.x - l.x, y: i.y - l.y } } function Kr({ point: i }, l) { return { point: i, delta: Ty(i, m0(l)), offset: Ty(i, fT(l)), velocity: hT(l, .1) } } function fT(i) { return i[0] } function m0(i) { return i[i.length - 1] } function hT(i, l) { if (i.length < 2) return { x: 0, y: 0 }; let u = i.length - 1, o = null; const c = m0(i); for (; u >= 0 && (o = i[u], !(c.timestamp - o.timestamp > gn(l)));)u--; if (!o) return { x: 0, y: 0 }; const d = Le(c.timestamp - o.timestamp); if (d === 0) return { x: 0, y: 0 }; const h = { x: (c.x - o.x) / d, y: (c.y - o.y) / d }; return h.x === 1 / 0 && (h.x = 0), h.y === 1 / 0 && (h.y = 0), h } function dT(i, { min: l, max: u }, o) { return l !== void 0 && i < l ? i = o ? Rt(l, i, o.min) : Math.max(i, l) : u !== void 0 && i > u && (i = o ? Rt(u, i, o.max) : Math.min(i, u)), i } function Ay(i, l, u) { return { min: l !== void 0 ? i.min + l : void 0, max: u !== void 0 ? i.max + u - (i.max - i.min) : void 0 } } function mT(i, { top: l, left: u, bottom: o, right: c }) { return { x: Ay(i.x, u, c), y: Ay(i.y, l, o) } } function Ey(i, l) { let u = l.min - i.min, o = l.max - i.max; return l.max - l.min < i.max - i.min && ([u, o] = [o, u]), { min: u, max: o } } function pT(i, l) { return { x: Ey(i.x, l.x), y: Ey(i.y, l.y) } } function yT(i, l) { let u = .5; const o = ue(i), c = ue(l); return c > o ? u = gl(l.min, l.max - o, i.min) : o > c && (u = gl(i.min, i.max - c, l.min)), Pe(0, 1, u) } function gT(i, l) { const u = {}; return l.min !== void 0 && (u.min = l.min - i.min), l.max !== void 0 && (u.max = l.max - i.min), u } const Sc = .35; function vT(i = Sc) { return i === !1 ? i = 0 : i === !0 && (i = Sc), { x: My(i, "left", "right"), y: My(i, "top", "bottom") } } function My(i, l, u) { return { min: jy(i, l), max: jy(i, u) } } function jy(i, l) { return typeof i == "number" ? i : i[l] || 0 } const xT = new WeakMap; class bT { constructor(l) { this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Kt(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l } start(l, { snapToCursor: u = !1, distanceThreshold: o } = {}) { const { presenceContext: c } = this.visualElement; if (c && c.isPresent === !1) return; const d = b => { u ? (this.stopAnimation(), this.snapToCursor(Ml(b).point)) : this.pauseAnimation() }, h = (b, T) => { this.stopAnimation(); const { drag: z, dragPropagation: R, onDragStart: U } = this.getProps(); if (z && !R && (this.openDragLock && this.openDragLock(), this.openDragLock = i2(z), !this.openDragLock)) return; this.latestPointerEvent = b, this.latestPanInfo = T, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Ue(L => { let k = this.getAxisMotionValue(L).get() || 0; if (We.test(k)) { const { projection: q } = this.visualElement; if (q && q.layout) { const Z = q.layout.layoutBox[L]; Z && (k = ue(Z) * (parseFloat(k) / 100)) } } this.originPoint[L] = k }), U && Dt.update(() => U(b, T), !1, !0), dc(this.visualElement, "transform"); const { animationState: G } = this.visualElement; G && G.setActive("whileDrag", !0) }, m = (b, T) => { this.latestPointerEvent = b, this.latestPanInfo = T; const { dragPropagation: z, dragDirectionLock: R, onDirectionLock: U, onDrag: G } = this.getProps(); if (!z && !this.openDragLock) return; const { offset: L } = T; if (R && this.currentDirection === null) { this.currentDirection = ST(L), this.currentDirection !== null && U && U(this.currentDirection); return } this.updateAxis("x", T.point, L), this.updateAxis("y", T.point, L), this.visualElement.render(), G && Dt.update(() => G(b, T), !1, !0) }, g = (b, T) => { this.latestPointerEvent = b, this.latestPanInfo = T, this.stop(b, T), this.latestPointerEvent = null, this.latestPanInfo = null }, p = () => Ue(b => { var T; return this.getAnimationState(b) === "paused" && ((T = this.getAxisMotionValue(b).animation) == null ? void 0 : T.play()) }), { dragSnapToOrigin: x } = this.getProps(); this.panSession = new d0(l, { onSessionStart: d, onStart: h, onMove: m, onSessionEnd: g, resumeAnimation: p }, { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: x, distanceThreshold: o, contextWindow: h0(this.visualElement), element: this.visualElement.current }) } stop(l, u) { const o = l || this.latestPointerEvent, c = u || this.latestPanInfo, d = this.isDragging; if (this.cancel(), !d || !c || !o) return; const { velocity: h } = c; this.startAnimation(h); const { onDragEnd: m } = this.getProps(); m && Dt.postRender(() => m(o, c)) } cancel() { this.isDragging = !1; const { projection: l, animationState: u } = this.visualElement; l && (l.isAnimationBlocked = !1), this.endPanSession(); const { dragPropagation: o } = this.getProps(); !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), u && u.setActive("whileDrag", !1) } endPanSession() { this.panSession && this.panSession.end(), this.panSession = void 0 } updateAxis(l, u, o) { const { drag: c } = this.getProps(); if (!o || !Ks(l, c, this.currentDirection)) return; const d = this.getAxisMotionValue(l); let h = this.originPoint[l] + o[l]; this.constraints && this.constraints[l] && (h = dT(h, this.constraints[l], this.elastic[l])), d.set(h) } resolveConstraints() { var d; const { dragConstraints: l, dragElastic: u } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (d = this.visualElement.projection) == null ? void 0 : d.layout, c = this.constraints; l && hl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = mT(o.layoutBox, l) : this.constraints = !1, this.elastic = vT(u), c !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Ue(h => { this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = gT(o.layoutBox[h], this.constraints[h])) }) } resolveRefConstraints() { const { dragConstraints: l, onMeasureDragConstraints: u } = this.getProps(); if (!l || !hl(l)) return !1; const o = l.current, { projection: c } = this.visualElement; if (!c || !c.layout) return !1; const d = E2(o, c.root, this.visualElement.getTransformPagePoint()); let h = pT(c.layout.layoutBox, d); if (u) { const m = u(S2(h)); this.hasMutatedConstraints = !!m, m && (h = Vg(m)) } return h } startAnimation(l) { const { drag: u, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: h, onDragTransitionEnd: m } = this.getProps(), g = this.constraints || {}, p = Ue(x => { if (!Ks(x, u, this.currentDirection)) return; let b = g && g[x] || {}; h && (b = { min: 0, max: 0 }); const T = c ? 200 : 1e6, z = c ? 40 : 1e7, R = { type: "inertia", velocity: o ? l[x] : 0, bounceStiffness: T, bounceDamping: z, timeConstant: 750, restDelta: 1, restSpeed: 10, ...d, ...b }; return this.startAxisValueAnimation(x, R) }); return Promise.all(p).then(m) } startAxisValueAnimation(l, u) { const o = this.getAxisMotionValue(l); return dc(this.visualElement, l), o.start(kc(l, o, 0, u, this.visualElement, !1)) } stopAnimation() { Ue(l => this.getAxisMotionValue(l).stop()) } pauseAnimation() { Ue(l => { var u; return (u = this.getAxisMotionValue(l).animation) == null ? void 0 : u.pause() }) } getAnimationState(l) { var u; return (u = this.getAxisMotionValue(l).animation) == null ? void 0 : u.state } getAxisMotionValue(l) { const u = `_drag${l.toUpperCase()}`, o = this.visualElement.getProps(), c = o[u]; return c || this.visualElement.getValue(l, (o.initial ? o.initial[l] : void 0) || 0) } snapToCursor(l) { Ue(u => { const { drag: o } = this.getProps(); if (!Ks(u, o, this.currentDirection)) return; const { projection: c } = this.visualElement, d = this.getAxisMotionValue(u); if (c && c.layout) { const { min: h, max: m } = c.layout.layoutBox[u], g = d.get() || 0; d.set(l[u] - Rt(h, m, .5) + g) } }) } scalePositionWithinConstraints() { if (!this.visualElement.current) return; const { drag: l, dragConstraints: u } = this.getProps(), { projection: o } = this.visualElement; if (!hl(u) || !o || !this.constraints) return; this.stopAnimation(); const c = { x: 0, y: 0 }; Ue(h => { const m = this.getAxisMotionValue(h); if (m && this.constraints !== !1) { const g = m.get(); c[h] = yT({ min: g, max: g }, this.constraints[h]) } }); const { transformTemplate: d } = this.visualElement.getProps(); this.visualElement.current.style.transform = d ? d({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.resolveConstraints(), Ue(h => { if (!Ks(h, l, null)) return; const m = this.getAxisMotionValue(h), { min: g, max: p } = this.constraints[h]; m.set(Rt(g, p, c[h])) }) } addListeners() { if (!this.visualElement.current) return; xT.set(this.visualElement, this); const l = this.visualElement.current, u = yl(l, "pointerdown", g => { const { drag: p, dragListener: x = !0 } = this.getProps(), b = g.target, T = b !== l && r2(b); p && x && !T && this.start(g) }), o = () => { const { dragConstraints: g } = this.getProps(); hl(g) && g.current && (this.constraints = this.resolveRefConstraints()) }, { projection: c } = this.visualElement, d = c.addEventListener("measure", o); c && !c.layout && (c.root && c.root.updateScroll(), c.updateLayout()), Dt.read(o); const h = Sl(window, "resize", () => this.scalePositionWithinConstraints()), m = c.addEventListener("didUpdate", (({ delta: g, hasLayoutChanged: p }) => { this.isDragging && p && (Ue(x => { const b = this.getAxisMotionValue(x); b && (this.originPoint[x] += g[x].translate, b.set(b.get() + g[x].translate)) }), this.visualElement.render()) })); return () => { h(), u(), d(), m && m() } } getProps() { const l = this.visualElement.getProps(), { drag: u = !1, dragDirectionLock: o = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: h = Sc, dragMomentum: m = !0 } = l; return { ...l, drag: u, dragDirectionLock: o, dragPropagation: c, dragConstraints: d, dragElastic: h, dragMomentum: m } } } function Ks(i, l, u) { return (l === !0 || l === i) && (u === null || u === i) } function ST(i, l = 10) { let u = null; return Math.abs(i.y) > l ? u = "y" : Math.abs(i.x) > l && (u = "x"), u } class TT extends Pn { constructor(l) { super(l), this.removeGroupControls = He, this.removeListeners = He, this.controls = new bT(l) } mount() { const { dragControls: l } = this.node.getProps(); l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || He } update() { const { dragControls: l } = this.node.getProps(), { dragControls: u } = this.node.prevProps || {}; l !== u && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls))) } unmount() { this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession() } } const Jr = i => (l, u) => { i && Dt.update(() => i(l, u), !1, !0) }; class AT extends Pn { constructor() { super(...arguments), this.removePointerDownListener = He } onPointerDown(l) { this.session = new d0(l, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: h0(this.node) }) } createPanHandlers() { const { onPanSessionStart: l, onPanStart: u, onPan: o, onPanEnd: c } = this.node.getProps(); return { onSessionStart: Jr(l), onStart: Jr(u), onMove: Jr(o), onEnd: (d, h) => { delete this.session, c && Dt.postRender(() => c(d, h)) } } } mount() { this.removePointerDownListener = yl(this.node.current, "pointerdown", l => this.onPointerDown(l)) } update() { this.session && this.session.updateHandlers(this.createPanHandlers()) } unmount() { this.removePointerDownListener(), this.session && this.session.end() } } let Fr = !1; class ET extends Y.Component { componentDidMount() { const { visualElement: l, layoutGroup: u, switchLayoutGroup: o, layoutId: c } = this.props, { projection: d } = l; d && (u.group && u.group.add(d), o && o.register && c && o.register(d), Fr && d.root.didUpdate(), d.addEventListener("animationComplete", () => { this.safeToRemove() }), d.setOptions({ ...d.options, layoutDependency: this.props.layoutDependency, onExitComplete: () => this.safeToRemove() })), Ps.hasEverUpdated = !0 } getSnapshotBeforeUpdate(l) { const { layoutDependency: u, visualElement: o, drag: c, isPresent: d } = this.props, { projection: h } = o; return h && (h.isPresent = d, l.layoutDependency !== u && h.setOptions({ ...h.options, layoutDependency: u }), Fr = !0, c || l.layoutDependency !== u || u === void 0 || l.isPresent !== d ? h.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? h.promote() : h.relegate() || Dt.postRender(() => { const m = h.getStack(); (!m || !m.members.length) && this.safeToRemove() }))), null } componentDidUpdate() { const { projection: l } = this.props.visualElement; l && (l.root.didUpdate(), Jc.postRender(() => { !l.currentAnimation && l.isLead() && this.safeToRemove() })) } componentWillUnmount() { const { visualElement: l, layoutGroup: u, switchLayoutGroup: o } = this.props, { projection: c } = l; Fr = !0, c && (c.scheduleCheckAfterUnmount(), u && u.group && u.group.remove(c), o && o.deregister && o.deregister(c)) } safeToRemove() { const { safeToRemove: l } = this.props; l && l() } render() { return null } } function p0(i) { const [l, u] = n0(), o = Y.useContext(Mc); return v.jsx(ET, { ...i, layoutGroup: o, switchLayoutGroup: Y.useContext(c0), isPresent: l, safeToRemove: u }) } const MT = { pan: { Feature: AT }, drag: { Feature: TT, ProjectionNode: e0, MeasureLayout: p0 } }; function Dy(i, l, u) { const { props: o } = i; i.animationState && o.whileHover && i.animationState.setActive("whileHover", u === "Start"); const c = "onHover" + u, d = o[c]; d && Dt.postRender(() => d(l, Ml(l))) } class jT extends Pn { mount() { const { current: l } = this.node; l && (this.unmount = l2(l, (u, o) => (Dy(this.node, o, "Start"), c => Dy(this.node, c, "End")))) } unmount() { } } class DT extends Pn { constructor() { super(...arguments), this.isActive = !1 } onFocus() { let l = !1; try { l = this.node.current.matches(":focus-visible") } catch { l = !0 } !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0) } onBlur() { !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1) } mount() { this.unmount = Tl(Sl(this.node.current, "focus", () => this.onFocus()), Sl(this.node.current, "blur", () => this.onBlur())) } unmount() { } } function Ny(i, l, u) { const { props: o } = i; if (i.current instanceof HTMLButtonElement && i.current.disabled) return; i.animationState && o.whileTap && i.animationState.setActive("whileTap", u === "Start"); const c = "onTap" + (u === "End" ? "" : u), d = o[c]; d && Dt.postRender(() => d(l, Ml(l))) } class NT extends Pn { mount() { const { current: l } = this.node; l && (this.unmount = f2(l, (u, o) => (Ny(this.node, o, "Start"), (c, { success: d }) => Ny(this.node, c, d ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget })) } unmount() { } } const Tc = new WeakMap, Wr = new WeakMap, CT = i => { const l = Tc.get(i.target); l && l(i) }, zT = i => { i.forEach(CT) }; function wT({ root: i, ...l }) { const u = i || document; Wr.has(u) || Wr.set(u, {}); const o = Wr.get(u), c = JSON.stringify(l); return o[c] || (o[c] = new IntersectionObserver(zT, { root: i, ...l })), o[c] } function RT(i, l, u) { const o = wT(l); return Tc.set(i, u), o.observe(i), () => { Tc.delete(i), o.unobserve(i) } } const OT = { some: 0, all: 1 }; class VT extends Pn { constructor() { super(...arguments), this.hasEnteredView = !1, this.isInView = !1 } startObserver() { this.unmount(); const { viewport: l = {} } = this.node.getProps(), { root: u, margin: o, amount: c = "some", once: d } = l, h = { root: u ? u.current : void 0, rootMargin: o, threshold: typeof c == "number" ? c : OT[c] }, m = g => { const { isIntersecting: p } = g; if (this.isInView === p || (this.isInView = p, d && !p && this.hasEnteredView)) return; p && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", p); const { onViewportEnter: x, onViewportLeave: b } = this.node.getProps(), T = p ? x : b; T && T(g) }; return RT(this.node.current, h, m) } mount() { this.startObserver() } update() { if (typeof IntersectionObserver > "u") return; const { props: l, prevProps: u } = this.node;["amount", "margin", "root"].some(_T(l, u)) && this.startObserver() } unmount() { } } function _T({ viewport: i = {} }, { viewport: l = {} } = {}) { return u => i[u] !== l[u] } const BT = { inView: { Feature: VT }, tap: { Feature: NT }, focus: { Feature: DT }, hover: { Feature: jT } }, UT = { layout: { ProjectionNode: e0, MeasureLayout: p0 } }, LT = { ...oT, ...BT, ...MT, ...UT }, Jn = aT(LT, iT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT = i => i.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qT = i => i.replace(/^([A-Z])|[\s-_]+(\w)/g, (l, u, o) => o ? o.toUpperCase() : u.toLowerCase()), Cy = i => { const l = qT(i); return l.charAt(0).toUpperCase() + l.slice(1) }, y0 = (...i) => i.filter((l, u, o) => !!l && l.trim() !== "" && o.indexOf(l) === u).join(" ").trim(), GT = i => { for (const l in i) if (l.startsWith("aria-") || l === "role" || l === "title") return !0 };/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var YT = { xmlns: "http://www.w3.org/2000/svg", width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round" };/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT = Y.forwardRef(({ color: i = "currentColor", size: l = 24, strokeWidth: u = 2, absoluteStrokeWidth: o, className: c = "", children: d, iconNode: h, ...m }, g) => Y.createElement("svg", { ref: g, ...YT, width: l, height: l, stroke: i, strokeWidth: o ? Number(u) * 24 / Number(l) : u, className: y0("lucide", c), ...!d && !GT(m) && { "aria-hidden": "true" }, ...m }, [...h.map(([p, x]) => Y.createElement(p, x)), ...Array.isArray(d) ? d : [d]]));/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt = (i, l) => { const u = Y.forwardRef(({ className: o, ...c }, d) => Y.createElement(XT, { ref: d, iconNode: l, className: y0(`lucide-${HT(Cy(i))}`, `lucide-${i}`, o), ...c })); return u.displayName = Cy(i), u };/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kT = [["path", { d: "M5 12h14", key: "1ays0h" }], ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]], ZT = Nt("arrow-right", kT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT = [["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }], ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]], KT = Nt("briefcase", QT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT = [["path", { d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2", key: "5owen" }], ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }], ["path", { d: "M9 17h6", key: "r8uit2" }], ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]], zy = Nt("car", JT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]], WT = Nt("chevron-left", FT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PT = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]], $T = Nt("chevron-right", PT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IT = [["path", { d: "M10 2v2", key: "7u0qdc" }], ["path", { d: "M14 2v2", key: "6buw04" }], ["path", { d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1", key: "pwadti" }], ["path", { d: "M6 2v2", key: "colzsn" }]], tA = Nt("coffee", IT);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eA = [["path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z", key: "1jg4f8" }]], nA = Nt("facebook", eA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aA = [["path", { d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z", key: "p55z4y" }], ["path", { d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0", key: "mjntcy" }]], iA = Nt("glass-water", aA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lA = [["path", { d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3", key: "1xhozi" }]], sA = Nt("headphones", lA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uA = [["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }], ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }], ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }]], oA = Nt("instagram", uA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rA = [["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }], ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]], cA = Nt("lock", rA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fA = [["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }], ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]], hA = Nt("mail", fA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dA = [["path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0", key: "1r0f0z" }], ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }]], g0 = Nt("map-pin", dA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mA = [["path", { d: "M4 5h16", key: "1tepv9" }], ["path", { d: "M4 12h16", key: "1lakjw" }], ["path", { d: "M4 19h16", key: "1djgab" }]], pA = Nt("menu", mA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA = [["polygon", { points: "3 11 22 2 13 21 11 13 3 11", key: "1ltx0t" }]], Pr = Nt("navigation", yA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gA = [["path", { d: "M5.8 11.3 2 22l10.7-3.79", key: "gwxi1d" }], ["path", { d: "M4 3h.01", key: "1vcuye" }], ["path", { d: "M22 8h.01", key: "1mrtc2" }], ["path", { d: "M15 2h.01", key: "1cjtqr" }], ["path", { d: "M22 20h.01", key: "1mrys2" }], ["path", { d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10", key: "hbicv8" }], ["path", { d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17", key: "1i94pl" }], ["path", { d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7", key: "1cofks" }], ["path", { d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z", key: "4kbmks" }]], $r = Nt("party-popper", gA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vA = [["path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384", key: "9njp5v" }]], xA = Nt("phone", vA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA = [["path", { d: "M5 7 3 5", key: "1yys58" }], ["path", { d: "M9 6V3", key: "1ptz9u" }], ["path", { d: "m13 7 2-2", key: "1w3vmq" }], ["circle", { cx: "9", cy: "13", r: "3", key: "1mma13" }], ["path", { d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17", key: "2frwzc" }], ["path", { d: "M16 16h2", key: "dnq2od" }]], SA = Nt("projector", bA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA = [["path", { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z", key: "oel41y" }], ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]], AA = Nt("shield-check", TA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA = [["path", { d: "m17 2-5 5-5-5", key: "16satq" }], ["rect", { width: "20", height: "15", x: "2", y: "7", rx: "2", key: "1e6viu" }]], MA = Nt("tv", EA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jA = [["path", { d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z", key: "yt1" }], ["polygon", { points: "9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02", fill: "currentColor", stroke: "currentColor", key: "yt2" }]], DA = Nt("youtube", jA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA = [["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }], ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }], ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }], ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]], wy = Nt("users", NA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA = [["path", { d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2", key: "cjf0a3" }], ["path", { d: "M7 2v20", key: "1473qp" }], ["path", { d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7", key: "j28e5" }]], v0 = Nt("utensils", CA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zA = [["path", { d: "M12 20h.01", key: "zekei9" }], ["path", { d: "M2 8.82a15 15 0 0 1 20 0", key: "dnpr2z" }], ["path", { d: "M5 12.859a10 10 0 0 1 14 0", key: "1x1e6c" }], ["path", { d: "M8.5 16.429a5 5 0 0 1 7 0", key: "1bycff" }]], wA = Nt("wifi", zA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA = [["path", { d: "M12.8 19.6A2 2 0 1 0 14 16H2", key: "148xed" }], ["path", { d: "M17.5 8a2.5 2.5 0 1 1 2 4H2", key: "1u4tom" }], ["path", { d: "M9.8 4.4A2 2 0 1 1 11 8H2", key: "75valh" }]], OA = Nt("wind", RA);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VA = [["path", { d: "M18 6 6 18", key: "1bl5f8" }], ["path", { d: "m6 6 12 12", key: "d8bk6v" }]], _A = Nt("x", VA);

// WhatsApp SVG Icon
const WhatsAppIcon = ({ className = "w-5 h-5" }) => v.jsx("svg", {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  className: className,
  children: v.jsx("path", {
    d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
  })
});

// Calendar SVG Icon
const CalendarIcon = ({ className = "w-5 h-5" }) => v.jsxs("svg", {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: className,
  children: [
    v.jsx("rect", { width: "18", height: "18", x: "3", y: "4", rx: "2" }),
    v.jsx("line", { x1: "16", x2: "16", y1: "2", y2: "6" }),
    v.jsx("line", { x1: "8", x2: "8", y1: "2", y2: "6" }),
    v.jsx("line", { x1: "3", x2: "21", y1: "10", y2: "10" })
  ]
});

// Month Names for WhatsApp formatting
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const getTodayParts = () => {
  const now = new Date();
  return {
    year: now.getFullYear(),
    month: now.getMonth() + 1,
    day: now.getDate(),
    iso: `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`
  };
};

const isLeapYear = (year) => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

const getDaysInMonth = (month, year) => {
  const days = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  return days[month - 1];
};

const validateDateValues = (day, month, year) => {
  if (month < 1 || month > 12) {
    return { valid: false, error: "Invalid month. Month must be between 01 and 12." };
  }
  const maxDays = getDaysInMonth(month, year);
  if (day < 1 || day > maxDays) {
    if (month === 2 && day === 29 && !isLeapYear(year)) {
      return { valid: false, error: `${year} is not a leap year. February has only 28 days.` };
    }
    return { valid: false, error: `Invalid day. Selected month has only ${maxDays} days.` };
  }
  if (year < 2000 || year > 2100) {
    return { valid: false, error: "Please enter a valid 4-digit year." };
  }
  const today = getTodayParts();
  const inputDateObj = new Date(year, month - 1, day, 23, 59, 59);
  const todayStartObj = new Date(today.year, today.month - 1, today.day, 0, 0, 0);
  if (inputDateObj < todayStartObj) {
    return { valid: false, error: "Selected date is in the past. Please select today or a future date." };
  }
  return { valid: true, error: "" };
};

// Constants and image assets
const RESAVENUE_URL = "https://bookings.resavenue.com/engine-ibe/search?regCode=TXRX0322";
const WA_PHONE = "919187195517";

const Ry = [
  { label: "Home", href: "/", hash: "#home" },
  { label: "About", href: "/", hash: "#about" },
  { label: "Rooms", href: "/rooms/" },
  { label: "Dining", href: "/dining/" },
  { label: "Bar", href: "/bar/" },
  { label: "Banquets", href: "/banquets/" },
  { label: "Facilities", href: "/", hash: "#facilities" },
  { label: "Gallery", href: "/gallery/" },
  { label: "Location", href: "/", hash: "#location" },
  { label: "Contact", href: "/", hash: "#contact" }
];

const Zn = [
  { id: 1, image: "/images/c4_result.webp", title: "Welcome to Radiant Vista", subtitle: "Business hotel and leisure travel destination on Gokul Road, Hubballi." },
  { id: 2, image: "/images/gallery/ChatGPT Image Oct 11, 2026, 03_02_47 PM_result.webp", title: "Breeze Point Rooftop", subtitle: "Unwind with stunning views and a cozy ambiance." },
  { id: 3, image: "/images/c3_result.webp", title: "Brick and Brew", subtitle: "Premium nostalgia served with a modern twist." },
  { id: 4, image: "/images/suite_result.webp", title: "Luxury Redefined", subtitle: "Spacious suites designed for the modern traveler." },
  { id: 5, image: "/images/hall/ChatGPT Image Oct 10, 2026, 03_35_40 PM_result.webp", title: "Empowering Business", subtitle: "State-of-the-art facilities for your corporate events." },
  { id: 6, image: "/images/2_result.webp", title: "Exquisite Flavors", subtitle: "A culinary journey like no other." },
  { id: 7, image: "/images/ChatGPT Image Oct 11, 2026, 03_02_41 PM_result.webp", title: "Leisure & Comfort", subtitle: "Relax and rejuvenate in our tranquil spaces." },
  { id: 8, image: "/images/c5_result.webp", title: "Legendary Hospitality", subtitle: "Where every guest is treated like royalty." }
];

const ROOM_IMAGES = {
  classic: [
    "/images/roomimage/classic/ChatGPT Image Oct 10, 2026, 12_35_43 PM_result.webp",
    "/images/roomimage/classic/ChatGPT Image Oct 10, 2026, 12_36_03 PM_result.webp",
    "/images/roomimage/classic/ChatGPT Image Oct 10, 2026, 12_36_08 PM_result.webp"
  ],
  premium: [
    "/images/roomimage/premium/ChatGPT Image Oct 10, 2026, 02_06_58 PM_result.webp",
    "/images/roomimage/premium/ChatGPT Image Oct 10, 2026, 02_07_00 PM_result.webp",
    "/images/roomimage/premium/ChatGPT Image Oct 10, 2026, 02_07_03 PM_result.webp",
    "/images/roomimage/premium/ChatGPT Image Oct 10, 2026, 02_07_05 PM_result.webp"
  ],
  suite: [
    "/images/roomimage/suit/ChatGPT Image Oct 10, 2026, 12_15_08 PM_result.webp",
    "/images/roomimage/suit/ChatGPT Image Oct 10, 2026, 12_15_11 PM_result.webp",
    "/images/roomimage/suit/ChatGPT Image Oct 10, 2026, 12_15_13 PM_result.webp",
    "/images/roomimage/suit/ChatGPT Image Oct 10, 2026, 12_15_15 PM_result.webp"
  ]
};

const DINING_IMAGES = [
  "/images/dining/ChatGPT Image Oct 10, 2026, 02_24_07 PM_result.webp",
  "/images/dining/ChatGPT Image Oct 10, 2026, 02_24_10 PM_result.webp",
  "/images/dining/ChatGPT Image Oct 10, 2026, 02_24_14 PM_result.webp"
];

const BAR_IMAGES = [
  "/images/bar/ChatGPT Image Oct 10, 2026, 03_17_28 PM_result.webp",
  "/images/bar/ChatGPT Image Oct 10, 2026, 03_17_35 PM_result.webp",
  "/images/bar/ChatGPT Image Oct 10, 2026, 03_17_45 PM_result.webp",
  "/images/bar/ChatGPT Image Oct 10, 2026, 03_17_48 PM_result.webp"
];

const HALL_IMAGES = [
  "/images/hall/ChatGPT Image Oct 10, 2026, 03_35_40 PM_result.webp",
  "/images/hall/ChatGPT Image Oct 10, 2026, 03_35_48 PM_result.webp",
  "/images/hall/ChatGPT Image Oct 10, 2026, 03_35_54 PM_result.webp"
];

const Ir = {
  classic: ROOM_IMAGES.classic[0],
  premium: ROOM_IMAGES.premium[0],
  suite: ROOM_IMAGES.suite[0]
};

const Ac = {
  brickAndBrew: "/images/brick.png",
  breezePoint: BAR_IMAGES[0],
  food: DINING_IMAGES[0]
};

const GALLERY_ALL_IMAGES = [
  {
    id: 1,
    src: "/images/gallery/ChatGPT Image Oct 11, 2026, 03_24_50 PM_result.webp",
    title: "Hotel Facade & Night Architecture",
    category: "Facilities",
    categoryLabel: "Property & Facade",
    alt: "Illuminated nighttime exterior architecture and facade of Radiant Vista on Gokul Road, Hubballi"
  },
  {
    id: 2,
    src: "/images/gallery/ChatGPT Image Oct 11, 2026, 03_10_05 PM_result.webp",
    title: "Reception & Hotel Lobby Lounge",
    category: "Facilities",
    categoryLabel: "Facilities & Lobby",
    alt: "Warm hotel reception lounge and seating area with Radiant Vista emblem at Gokul Road Hubballi"
  },
  {
    id: 3,
    src: "/images/gallery/ChatGPT Image Oct 11, 2026, 03_19_42 PM_result.webp",
    title: "Luxury Suite Living Area & Lounge",
    category: "Rooms",
    categoryLabel: "Rooms & Suites",
    alt: "Expansive luxury suite living area with plush sofa lounge and modern decor at Radiant Vista"
  },
  {
    id: 4,
    src: "/images/gallery/g4_result.webp",
    title: "Guest Room Luxury Bath Amenities",
    category: "Rooms",
    categoryLabel: "Rooms & Amenities",
    alt: "Well-appointed guest room bathroom care products and plush towels at Radiant Vista"
  },
  {
    id: 5,
    src: "/images/gallery/abt_result.webp",
    title: "Brick & Brew Restaurant Dining Space",
    category: "Dining",
    categoryLabel: "Dining & Cuisine",
    alt: "Brick and Brew in-house dining restaurant interior with stylish table settings at Radiant Vista"
  },
  {
    id: 6,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 02_24_07 PM_result.webp",
    title: "Brick & Brew Woven Lantern Ambiance",
    category: "Dining",
    categoryLabel: "Dining & Cuisine",
    alt: "Vibrant dining setting with artisanal woven basket pendant lights and geometric tile flooring"
  },
  {
    id: 7,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 02_24_10 PM_result.webp",
    title: "Brick & Brew Group Dining Table",
    category: "Dining",
    categoryLabel: "Dining & Cuisine",
    alt: "Spacious long dining table arrangement for family reunions and banquet dining at Brick and Brew"
  },
  {
    id: 8,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 02_24_14 PM_result.webp",
    title: "Brick & Brew Contemporary Dining Hall",
    category: "Dining",
    categoryLabel: "Dining & Cuisine",
    alt: "Modern restaurant seating perspective with wicker armchairs and wooden ceiling beams"
  },
  {
    id: 9,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 03_17_35 PM_result.webp",
    title: "Brick & Brew Arched Booth Seating",
    category: "Dining",
    categoryLabel: "Dining & Cuisine",
    alt: "Cozy brick archway alcoves and plush booth seating at Brick and Brew restaurant"
  },
  {
    id: 10,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 03_17_45 PM_result.webp",
    title: "Brick & Brew Restobar Overview",
    category: "Dining",
    categoryLabel: "Dining & Cuisine",
    alt: "Overview of Brick and Brew dining hall with bar counter and ambient mood lighting"
  },
  {
    id: 11,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 03_17_48 PM_result.webp",
    title: "Brick & Brew Warm Twilight Seating",
    category: "Dining",
    categoryLabel: "Dining & Cuisine",
    alt: "Intimate evening dining atmosphere under warm woven globes and leafy indoor planters"
  },
  {
    id: 12,
    src: "/images/gallery/ChatGPT Image Oct 11, 2026, 03_20_44 PM_result.webp",
    title: "Gourmet Culinary Feast & Plating",
    category: "Dining",
    categoryLabel: "Dining & Cuisine",
    alt: "Artfully plated multi-cuisine delicacies and signature dishes prepared by Radiant Vista chefs"
  },
  {
    id: 13,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 03_17_28 PM_result.webp",
    title: "Breeze Point Rooftop Bar Counter",
    category: "Bar",
    categoryLabel: "Bar & Rooftop",
    alt: "Breeze Point rooftop restobar counter with high barstools and custom backlit bar display"
  },
  {
    id: 14,
    src: "/images/gallery/ChatGPT Image Oct 11, 2026, 03_02_47 PM_result.webp",
    title: "Breeze Point Open-Air Rooftop Terrace",
    category: "Bar",
    categoryLabel: "Bar & Rooftop",
    alt: "Aerial view of open-air rooftop terrace dining tables surrounded by lush foliage and fairy lights"
  },
  {
    id: 15,
    src: "/images/gallery/g2_result.webp",
    title: "Breeze Point Illuminated Spirits Bar",
    category: "Bar",
    categoryLabel: "Bar & Rooftop",
    alt: "Backlit liquor shelving and premium glassware setup at Breeze Point rooftop restobar"
  },
  {
    id: 16,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 03_35_40 PM_result.webp",
    title: "Gala Vista Grand Stage & Conference Hall",
    category: "Banquets",
    categoryLabel: "Banquets & Events",
    alt: "Gala Vista grand banquet hall with auditorium seating, polished stage, and executive chairs"
  },
  {
    id: 17,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 03_35_54 PM_result.webp",
    title: "Gala Vista Banquet & Round Table Setup",
    category: "Banquets",
    categoryLabel: "Banquets & Events",
    alt: "Flexible banquet room arrangement with round tables, dressed chairs, and corporate lighting"
  }
];

const GALLERY_CAROUSEL_IMAGES = [
  {
    id: 1,
    src: "/images/gallery/ChatGPT Image Oct 11, 2026, 03_24_50 PM_result.webp",
    title: "Hotel Night Facade",
    alt: "Illuminated nighttime exterior architecture and facade of Radiant Vista on Gokul Road, Hubballi"
  },
  {
    id: 2,
    src: "/images/gallery/ChatGPT Image Oct 11, 2026, 03_02_47 PM_result.webp",
    title: "Breeze Point Rooftop",
    alt: "Aerial view of open-air rooftop terrace dining tables surrounded by lush foliage and fairy lights"
  },
  {
    id: 3,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 02_24_07 PM_result.webp",
    title: "Brick & Brew Dining",
    alt: "Vibrant dining setting with artisanal woven basket pendant lights and geometric tile flooring"
  },
  {
    id: 4,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 03_17_28 PM_result.webp",
    title: "Breeze Point Bar Counter",
    alt: "Breeze Point rooftop restobar counter with high barstools and custom backlit bar display"
  },
  {
    id: 5,
    src: "/images/gallery/ChatGPT Image Oct 10, 2026, 03_35_40 PM_result.webp",
    title: "Gala Vista Banquets",
    alt: "Gala Vista grand banquet hall with auditorium seating, polished stage, and executive chairs"
  },
  {
    id: 6,
    src: "/images/gallery/ChatGPT Image Oct 11, 2026, 03_19_42 PM_result.webp",
    title: "Luxury Suites",
    alt: "Expansive luxury suite living area with plush sofa lounge and modern decor at Radiant Vista"
  }
];

const UA = GALLERY_ALL_IMAGES.map((img) => img.src);

const LA = {
  galaVista: HALL_IMAGES[0]
};

const HA = "/images/abt1_result.webp";

// Reusable Automatic Image Slider Component (3000ms rotation, responsive, accessible)
const ImageSlider = ({ images = [], alt = "Radiant Vista", className = "", autoPlayInterval = 3000 }) => {
  const [curr, setCurr] = Y.useState(0);
  const [isPaused, setIsPaused] = Y.useState(false);

  Y.useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;
    const mediaQuery = typeof window !== "undefined" && window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    if (mediaQuery && mediaQuery.matches) return;

    const timer = setInterval(() => {
      setCurr((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [images.length, isPaused, autoPlayInterval]);

  if (!images || images.length === 0) return null;

  const next = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurr((prev) => (prev + 1) % images.length);
  };
  const prev = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    setCurr((prev) => (prev - 1 + images.length) % images.length);
  };

  return v.jsxs("div", {
    className: `relative overflow-hidden group select-none ${className}`,
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onTouchStart: () => setIsPaused(true),
    onTouchEnd: () => setIsPaused(false),
    children: [
      images.map((imgSrc, idx) => v.jsx("img", {
        src: imgSrc,
        alt: `${alt} - photo ${idx + 1}`,
        loading: idx === 0 ? "eager" : "lazy",
        className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
          idx === curr ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 pointer-events-none"
        }`
      }, `${imgSrc}-${idx}`)),

      images.length > 1 && v.jsx("button", {
        type: "button",
        onClick: prev,
        className: "absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md cursor-pointer",
        "aria-label": "Previous image",
        children: v.jsx(WT, { className: "w-4 h-4 md:w-5 md:h-5" })
      }),

      images.length > 1 && v.jsx("button", {
        type: "button",
        onClick: next,
        className: "absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/75 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md cursor-pointer",
        "aria-label": "Next image",
        children: v.jsx($T, { className: "w-4 h-4 md:w-5 md:h-5" })
      }),

      images.length > 1 && v.jsx("div", {
        className: "absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm",
        children: images.map((_, dotIdx) => v.jsx("button", {
          type: "button",
          onClick: (e) => {
            if (e && e.stopPropagation) e.stopPropagation();
            setCurr(dotIdx);
          },
          className: `h-1.5 rounded-full transition-all duration-300 ${
            dotIdx === curr ? "w-5 bg-hubli-sunset" : "w-1.5 bg-white/70 hover:bg-white"
          }`,
          "aria-label": `Go to slide ${dotIdx + 1}`
        }, dotIdx))
      }),

      images.length > 1 && v.jsxs("span", {
        className: "absolute top-3 right-3 z-20 px-2 py-0.5 rounded text-[11px] font-semibold bg-black/50 text-white/90 backdrop-blur-sm tracking-wider",
        children: [`${curr + 1}`, ` / ${images.length}`]
      })
    ]
  });
};

// Section wrapper component with Framer Motion
const xn = ({ children, id, className = "", delay = 0 }) => {
  const c = Jn.div;
  return v.jsx("section", {
    id: id,
    className: `py-16 md:py-24 ${className} overflow-hidden`,
    children: v.jsx(c, {
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.7, delay: delay, ease: "easeOut" },
      children: children
    })
  });
};

// Main Navigation Component
const BA = ({ currentPath, navigate }) => {
  const [menuOpen, setMenuOpen] = Y.useState(false);
  const [scrolled, setScrolled] = Y.useState(false);

  Y.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  Y.useEffect(() => {
    if (menuOpen) {
      const prevOverflow = document.body.style.overflow;
      const prevTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
      return () => {
        document.body.style.overflow = prevOverflow;
        document.body.style.touchAction = prevTouchAction;
      };
    }
  }, [menuOpen]);

  // Close mobile menu on resize to desktop (>= 1024px)
  Y.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  // Close mobile menu on Escape key
  Y.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const isDesktopDark = scrolled || currentPath !== "/";

  const handleLinkClick = (e, item) => {
    e.preventDefault();
    setMenuOpen(false);
    if (item.hash) {
      if (currentPath === "/") {
        const el = document.querySelector(item.hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", item.hash);
      }
    } else {
      navigate(item.href);
    }
  };

  const isItemActive = (item) => {
    if (item.hash) {
      return currentPath === "/" && item.label === "Home";
    }
    return currentPath === item.href;
  };

  return v.jsxs("header", {
    className: `fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      isDesktopDark
        ? "bg-white shadow-md border-b border-gray-100 py-0 lg:py-3.5"
        : "bg-white shadow-sm border-b border-gray-100 lg:border-none lg:bg-gradient-to-b lg:from-black/75 lg:to-transparent lg:shadow-none py-0 lg:py-5"
    }`,
    children: [
      // Header Top Bar
      v.jsxs("div", {
        className: "container mx-auto px-4 sm:px-6 flex justify-between items-center h-16 lg:h-auto relative z-50",
        children: [
          // Brand / Logo
          v.jsxs("a", {
            href: "/",
            onClick: (e) => { e.preventDefault(); setMenuOpen(false); navigate("/"); },
            className: "flex flex-col justify-center min-w-0 pr-3 cursor-pointer group select-none",
            children: [
              v.jsx("span", {
                className: `font-serif text-xl sm:text-2xl lg:text-2xl xl:text-3xl font-bold tracking-wide transition-colors leading-tight truncate ${
                  isDesktopDark ? "text-hubli-green" : "text-hubli-green lg:text-white"
                }`,
                children: "Radiant Vista"
              }),
              v.jsx("span", {
                className: `text-[9px] sm:text-[10px] md:text-xs tracking-[0.22em] uppercase font-semibold transition-colors leading-normal truncate ${
                  isDesktopDark ? "text-hubli-earth" : "text-hubli-earth lg:text-hubli-sunset"
                }`,
                children: "Hotel & Leisure"
              })
            ]
          }),

          // Desktop Navigation Links
          v.jsxs("div", {
            className: "hidden lg:flex items-center space-x-3.5 xl:space-x-5",
            children: [
              Ry.map((item) => {
                const active = isItemActive(item);
                return v.jsx("a", {
                  href: item.hash && currentPath !== "/" ? `/${item.hash}` : (item.hash || item.href),
                  onClick: (e) => handleLinkClick(e, item),
                  className: `text-xs xl:text-sm font-semibold uppercase tracking-wider transition-colors relative py-1 nav-link-effect ${
                    active
                      ? "text-hubli-sunset font-bold active"
                      : isDesktopDark
                      ? "text-hubli-dark hover:text-hubli-sunset"
                      : "text-white/90 hover:text-white"
                  }`,
                  children: item.label
                }, item.label);
              }),

              // Desktop Book Now CTA
              v.jsx("a", {
                href: RESAVENUE_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                className: `px-4 py-2 xl:px-5 xl:py-2.5 rounded-sm text-xs xl:text-sm font-semibold uppercase tracking-wider transition-all duration-300 btn-hover-effect ${
                  isDesktopDark
                    ? "bg-hubli-earth text-white hover:bg-hubli-dark shadow-sm"
                    : "bg-white text-hubli-earth hover:bg-hubli-sand shadow-md"
                }`,
                children: "Book Now"
              })
            ]
          }),

          // Mobile Hamburger / Close Button
          v.jsx("button", {
            type: "button",
            className: "lg:hidden flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-md text-hubli-dark hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none cursor-pointer",
            onClick: () => setMenuOpen(!menuOpen),
            "aria-label": menuOpen ? "Close navigation menu" : "Open navigation menu",
            "aria-expanded": menuOpen,
            children: menuOpen
              ? v.jsx(_A, { className: "w-6 h-6 text-hubli-dark" })
              : v.jsx(pA, { className: "w-6 h-6 text-hubli-dark" })
          })
        ]
      }),

      // Dedicated Mobile Navigation Panel
      menuOpen && v.jsxs("div", {
        className: "lg:hidden fixed inset-x-0 top-16 bottom-0 z-50 bg-[#fafaf9] flex flex-col justify-between overflow-y-auto overflow-x-hidden border-t border-gray-200/80 shadow-2xl",
        style: { height: "calc(100dvh - 64px)" },
        children: [
          // Links List
          v.jsx("nav", {
            "aria-label": "Mobile Navigation Links",
            className: "flex flex-col py-2 divide-y divide-gray-100/80",
            children: Ry.map((item) => {
              const active = isItemActive(item);
              return v.jsxs("a", {
                href: item.hash && currentPath !== "/" ? `/${item.hash}` : (item.hash || item.href),
                onClick: (e) => handleLinkClick(e, item),
                className: `flex items-center justify-between px-6 py-3.5 transition-colors cursor-pointer ${
                  active
                    ? "bg-amber-50/80 text-hubli-sunset font-bold border-l-4 border-hubli-sunset pl-5"
                    : "text-hubli-dark hover:text-hubli-sunset hover:bg-white active:bg-gray-100"
                }`,
                children: [
                  v.jsx("span", {
                    className: `font-serif text-base sm:text-lg tracking-wide ${
                      active ? "font-bold text-hubli-sunset" : "font-semibold text-hubli-dark"
                    }`,
                    children: item.label
                  }),
                  v.jsx("span", {
                    className: `text-xs font-sans uppercase tracking-wider ${
                      active ? "text-hubli-sunset font-bold" : "text-gray-300"
                    }`,
                    children: "→"
                  })
                ]
              }, item.label);
            })
          }),

          // Dedicated Book Your Stay Section Below All Links
          v.jsxs("div", {
            className: "p-6 pt-4 pb-10 bg-white border-t border-gray-200/80 mt-auto",
            children: [
              v.jsx("a", {
                href: RESAVENUE_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => setMenuOpen(false),
                className: "w-full flex items-center justify-center gap-2 py-3.5 px-6 bg-hubli-earth hover:bg-hubli-dark text-white rounded-sm text-sm sm:text-base font-semibold uppercase tracking-wider shadow-md hover:shadow-lg active:scale-[0.99] transition-all",
                children: "Book Your Stay"
              }),
              v.jsxs("div", {
                className: "mt-4 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5 flex-wrap",
                children: [
                  v.jsx("span", { children: "Need assistance? Call" }),
                  v.jsx("a", {
                    href: "tel:+919187195517",
                    className: "text-hubli-earth font-semibold hover:underline",
                    children: "+91 91871 95517"
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
};

// Hero Slider Component
const qA = () => {
  const [curr, setCurr] = Y.useState(0);

  Y.useEffect(() => {
    const timer = setInterval(() => {
      setCurr((prev) => (prev + 1) % Zn.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurr((prev) => (prev + 1) % Zn.length);
  const prev = () => setCurr((prev) => (prev - 1 + Zn.length) % Zn.length);

  const c = Jn.div;
  const d = Jn.h1;
  const h = Jn.p;

  return v.jsxs("section", {
    id: "home",
    className: "relative h-screen w-full overflow-hidden bg-hubli-dark",
    children: [
      v.jsx(a0, {
        mode: "wait",
        children: v.jsxs(c, {
          initial: { opacity: 0, scale: 1.08 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          transition: { duration: 1.2 },
          className: "absolute inset-0",
          children: [
            v.jsx("div", { className: "absolute inset-0 bg-black/45 z-10" }),
            v.jsx("img", {
              src: Zn[curr].image,
              alt: Zn[curr].title,
              className: "w-full h-full object-cover"
            })
          ]
        }, curr)
      }),

      v.jsx("div", {
        className: "absolute inset-0 z-20 flex items-center justify-center text-center px-4",
        children: v.jsxs("div", {
          className: "max-w-4xl space-y-6",
          children: [
            v.jsx(d, {
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.8, delay: 0.2 },
              className: "text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-tight drop-shadow-lg",
              children: Zn[curr].title
            }, `title-${curr}`),
            v.jsx(h, {
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.8, delay: 0.4 },
              className: "text-lg md:text-2xl text-gray-200 font-light",
              children: Zn[curr].subtitle
            }, `sub-${curr}`),
            v.jsx(c, {
              initial: { y: 30, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.8, delay: 0.6 },
              className: "flex flex-col sm:flex-row gap-4 justify-center pt-8",
              children: v.jsxs("a", {
                href: RESAVENUE_URL,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "px-8 py-4 bg-hubli-sunset text-white font-bold rounded-sm hover:bg-orange-700 transition-all shadow-lg flex items-center justify-center gap-2 group btn-hover-effect uppercase tracking-wider text-sm",
                children: [
                  "Book Now",
                  v.jsx(ZT, { className: "w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" })
                ]
              })
            }, `btn-${curr}`)
          ]
        })
      }),

      v.jsx("button", {
        onClick: prev,
        className: "absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all hidden md:block cursor-pointer",
        "aria-label": "Previous slide",
        children: v.jsx(WT, { className: "w-7 h-7" })
      }),
      v.jsx("button", {
        onClick: next,
        className: "absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm transition-all hidden md:block cursor-pointer",
        "aria-label": "Next slide",
        children: v.jsx($T, { className: "w-7 h-7" })
      }),
      v.jsx("div", {
        className: "absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2",
        children: Zn.map((_, idx) => v.jsx("button", {
          type: "button",
          onClick: () => setCurr(idx),
          className: `h-2 rounded-full transition-all duration-300 ${
            idx === curr ? "w-8 bg-hubli-sunset" : "w-2 bg-white/60 hover:bg-white"
          }`,
          "aria-label": `Go to slide ${idx + 1}`
        }, idx))
      })
    ]
  });
};

// About Us Section
const GA = () => v.jsx(xn, {
  id: "about",
  className: "bg-hubli-light",
  children: v.jsx("div", {
    className: "container mx-auto px-4 md:px-6",
    children: v.jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
      children: [
        v.jsxs("div", {
          className: "space-y-6",
          children: [
            v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-sm", children: "About Us" }),
            v.jsxs("h2", {
              className: "text-4xl md:text-5xl font-serif text-hubli-green font-bold leading-tight",
              children: [
                "Business Hotel & ",
                v.jsx("span", { className: "italic text-hubli-earth", children: "Leisure Travel" })
              ]
            }),
            v.jsx("p", {
              className: "text-gray-600 leading-relaxed text-lg",
              children: "Radiant Vista is not just a hotel; it's a seamless blend of professional excellence and leisurely comfort. Whether you are visiting Hubli for a business conference or a relaxing getaway, we provide the perfect environment on Gokul Road, Akshay Park."
            }),
            v.jsxs("p", {
              className: "text-gray-600 leading-relaxed text-lg",
              children: [
                "Enjoy our distinct dining experiences—from the nostalgic flavors at ",
                v.jsx("strong", { children: "Brick and Brew" }),
                " to the stunning rooftop vibes at ",
                v.jsx("strong", { children: "Breeze Point" }),
                ". With designer rooms and state-of-the-art facilities, we redefine hospitality in Hubballi."
              ]
            }),
            v.jsxs("div", {
              className: "grid grid-cols-2 gap-6 pt-4",
              children: [
                v.jsxs("div", {
                  className: "border-l-4 border-hubli-sunset pl-4",
                  children: [
                    v.jsx("h4", { className: "font-bold text-xl text-hubli-dark", children: "Premium Stay" }),
                    v.jsx("p", { className: "text-sm text-gray-500", children: "Designer rooms with modern amenities." })
                  ]
                }),
                v.jsxs("div", {
                  className: "border-l-4 border-hubli-sunset pl-4",
                  children: [
                    v.jsx("h4", { className: "font-bold text-xl text-hubli-dark", children: "Dining & Events" }),
                    v.jsx("p", { className: "text-sm text-gray-500", children: "Multiple dining options & Banqueting." })
                  ]
                })
              ]
            })
          ]
        }),
        v.jsxs("div", {
          className: "relative img-hover-zoom rounded-lg overflow-hidden group shadow-2xl",
          children: [
            v.jsx("div", { className: "absolute -inset-4 bg-hubli-earth/10 rounded-lg -z-10 rotate-3" }),
            v.jsx("img", {
              src: HA,
              alt: "Radiant Vista hotel on Gokul Road in Hubballi",
              className: "rounded-lg w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105",
              loading: "lazy"
            })
          ]
        })
      ]
    })
  })
});

// Rooms Data
const YA = [
  {
    id: 1,
    title: "Classic Room",
    price: "Check Availability",
    image: Ir.classic,
    images: ROOM_IMAGES.classic,
    description: "Designer rooms equipped with individually controlled air conditioning, 42-inch Smart TV, and essential amenities for a restful stay.",
    features: ["Individually Controlled AC", '42" Smart TV', "Hot Water Kettle", "High-Speed Wi-Fi", "CCTV Security"]
  },
  {
    id: 2,
    title: "Premium Room",
    price: "Check Availability",
    image: Ir.premium,
    images: ROOM_IMAGES.premium,
    description: "Spacious accommodation featuring premium interiors, a private mini fridge, an executive work desk, and a safe deposit locker.",
    features: ["Mini Fridge", "Safe Deposit Locker", "Work Desk", "Individually Controlled AC", '42" Smart TV']
  },
  {
    id: 3,
    title: "Suite",
    price: "Check Availability",
    image: Ir.suite,
    images: ROOM_IMAGES.suite,
    description: "Experience ultimate luxury with satellite cable, expansive living space, separate lounge, and upscale designer interiors.",
    features: ["Living Area & Lounge", "Designer Interiors", "Business Amenities", "Mini Fridge", "Safe Deposit Locker"]
  }
];

// Rooms Preview Section on Homepage
const XA = ({ navigate }) => v.jsx(xn, {
  id: "rooms",
  className: "bg-white",
  children: v.jsxs("div", {
    className: "container mx-auto px-4 md:px-6",
    children: [
      v.jsxs("div", {
        className: "text-center mb-16 max-w-2xl mx-auto",
        children: [
          v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-sm", children: "Accommodation" }),
          v.jsx("h2", { className: "text-4xl font-serif text-hubli-green font-bold mt-2", children: "Designed for Comfort" }),
          v.jsx("p", { className: "text-gray-600 mt-4", children: "All rooms feature individually controlled air conditioning, 42-inch Smart TVs, and secure premises with CCTV surveillance." })
        ]
      }),
      v.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
        children: YA.map((room) => v.jsxs("div", {
          className: "group bg-hubli-light rounded-lg overflow-hidden shadow-md card-hover-lift transition-all duration-300",
          children: [
            v.jsx(ImageSlider, {
              images: room.images,
              alt: room.title,
              className: "h-64"
            }),
            v.jsxs("div", {
              className: "p-6",
              children: [
                v.jsx("h3", { className: "text-xl font-serif font-bold text-hubli-dark mb-2", children: room.title }),
                v.jsx("p", { className: "text-gray-500 text-sm mb-4 line-clamp-2", children: room.description }),
                v.jsxs("div", {
                  className: "flex gap-3 mb-6 text-gray-400 flex-wrap",
                  children: [
                    v.jsx("div", { title: "AC", children: v.jsx(OA, { className: "w-4 h-4" }) }),
                    v.jsx("div", { title: "Smart TV", children: v.jsx(MA, { className: "w-4 h-4" }) }),
                    v.jsx("div", { title: "WiFi", children: v.jsx(wA, { className: "w-4 h-4" }) }),
                    v.jsx("div", { title: "Safe", children: v.jsx(cA, { className: "w-4 h-4" }) }),
                    v.jsx("div", { title: "Kettle", children: v.jsx(tA, { className: "w-4 h-4" }) })
                  ]
                }),
                v.jsx("a", {
                  href: RESAVENUE_URL,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "w-full py-3 border border-hubli-earth text-hubli-earth font-semibold uppercase text-xs tracking-wider hover:bg-hubli-earth hover:text-white transition-colors block text-center btn-hover-effect rounded-sm",
                  children: "Book Now"
                })
              ]
            })
          ]
        }, room.id))
      }),
      // View All Rooms CTA linking to /rooms/
      v.jsx("div", {
        className: "mt-12 text-center",
        children: v.jsxs("a", {
          href: "/rooms/",
          onClick: (e) => { e.preventDefault(); navigate("/rooms/"); },
          className: "inline-flex items-center gap-2 px-8 py-3.5 bg-hubli-earth text-white font-bold rounded-sm hover:bg-hubli-green transition-all shadow-md hover:shadow-lg group btn-hover-effect tracking-wide uppercase text-sm",
          children: [
            "View All Rooms",
            v.jsx(ZT, { className: "w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" })
          ]
        })
      })
    ]
  })
});

// Dining Preview Section on Homepage
const $A = ({ navigate }) => v.jsx(xn, {
  id: "dining",
  className: "bg-neutral-50",
  children: v.jsxs("div", {
    className: "container mx-auto px-4 md:px-6",
    children: [
      v.jsxs("div", {
        className: "text-center mb-16",
        children: [
          v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-sm", children: "Culinary Experience" }),
          v.jsx("h2", { className: "text-4xl md:text-5xl font-serif text-hubli-green font-bold mt-2", children: "Taste the Extraordinary Food" })
        ]
      }),
      v.jsxs("div", {
        className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
        children: [
          v.jsxs("div", {
            className: "order-2 lg:order-1",
            children: [
              v.jsx(ImageSlider, {
                images: DINING_IMAGES,
                alt: "Brick and Brew restaurant dining at Radiant Vista in Hubballi",
                className: "rounded-lg shadow-xl mb-4 h-[380px]"
              }),
              v.jsxs("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                  v.jsx("div", {
                    className: "rounded-lg overflow-hidden shadow-md h-36 bg-hubli-dark flex items-center justify-center p-4",
                    children: v.jsx("img", {
                      src: Ac.brickAndBrew,
                      alt: "Brick and Brew logo emblem",
                      className: "max-h-full max-w-full object-contain",
                      loading: "lazy"
                    })
                  }),
                  v.jsx("div", {
                    className: "bg-hubli-earth rounded-lg flex items-center justify-center p-4 text-white text-center italic font-serif text-sm shadow-md",
                    children: '"It’s India but cooler, sassier, and way more Instagrammable."'
                  })
                ]
              })
            ]
          }),
          v.jsxs("div", {
            className: "order-1 lg:order-2 space-y-6",
            children: [
              v.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  v.jsx(v0, { className: "text-hubli-sunset w-6 h-6" }),
                  v.jsx("h3", { className: "text-3xl font-serif font-bold text-hubli-dark", children: "Brick and Brew" })
                ]
              }),
              v.jsx("p", { className: "text-gray-600 leading-relaxed italic font-serif text-lg", children: '"Premium Nostalgia"' }),
              v.jsx("p", {
                className: "text-gray-600 leading-relaxed",
                children: "Walk in and you’re hit with retro Bollywood beats, earthy vibes, and comforting food favourites served with a bold, modern twist. Born from a love for nostalgic flavours, Brick and Brew blends the cherished tastes of the past with the style and spirit of today’s India."
              }),
              v.jsx("p", {
                className: "text-gray-600 leading-relaxed",
                children: "Think butter chicken that looks like a masterpiece, momos with a gourmet dimsum twist, and nani’s dal served with five-star plating elegance."
              }),
              v.jsxs("div", {
                className: "flex flex-col sm:flex-row gap-4 pt-4",
                children: [
                  v.jsxs("a", {
                    href: "https://wa.me/919187195517?text=" + encodeURIComponent("Hello Radiant Vista Hotel, I would like to enquire about dining at Brick and Brew. Please share the available details. Thank you."),
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-md btn-hover-effect text-sm uppercase tracking-wider",
                    children: [
                      v.jsx(WhatsAppIcon, { className: "w-5 h-5" }),
                      "Enquire on WhatsApp"
                    ]
                  }),
                  v.jsxs("a", {
                    href: "/dining/",
                    onClick: (e) => { e.preventDefault(); navigate("/dining/"); },
                    className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-hubli-earth text-hubli-earth font-bold rounded-sm hover:bg-hubli-earth hover:text-white transition-all shadow-sm btn-hover-effect text-sm uppercase tracking-wider group",
                    children: [
                      "View Dining Details",
                      v.jsx(ZT, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  })
});

// Bar Preview Section on Homepage
const IA = ({ navigate }) => v.jsx(xn, {
  id: "breeze-point",
  className: "bg-white",
  children: v.jsx("div", {
    className: "container mx-auto px-4 md:px-6",
    children: v.jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
      children: [
        v.jsxs("div", {
          className: "space-y-6",
          children: [
            v.jsxs("div", {
              className: "flex items-center gap-3",
              children: [
                v.jsx(iA, { className: "text-hubli-sunset w-6 h-6" }),
                v.jsx("h3", { className: "text-3xl font-serif font-bold text-hubli-dark", children: "Breeze Point" })
              ]
            }),
            v.jsx("p", { className: "text-gray-500 uppercase tracking-wide text-sm font-semibold", children: "Rooftop Restaurant & Bar" }),
            v.jsx("p", {
              className: "text-gray-600 leading-relaxed",
              children: "Unwind with stunning views and a cozy ambiance at our Rooftop Bar and Restaurant. From our barman creating classic curated cocktails to savoury bites, each dish is thoughtfully crafted to elevate your experience."
            }),
            v.jsx("p", {
              className: "text-gray-600 leading-relaxed",
              children: "Whether you're here to relax, socialize, or host a gathering, we offer a space where memories are made. Its distinct spaces let you enjoy a romantic dinner date at the same time as your friends gear up for a night of partying."
            }),
            v.jsxs("ul", {
              className: "space-y-2 text-gray-700 pt-2",
              children: [
                v.jsxs("li", { className: "flex items-center gap-2", children: [v.jsx($r, { className: "w-4 h-4 text-hubli-sunset" }), " Open-roof scenic ambience"] }),
                v.jsxs("li", { className: "flex items-center gap-2", children: [v.jsx($r, { className: "w-4 h-4 text-hubli-sunset" }), " Distinct spaces for dates & parties"] }),
                v.jsxs("li", { className: "flex items-center gap-2", children: [v.jsx($r, { className: "w-4 h-4 text-hubli-sunset" }), " Rotating selection of meals & curated drinks"] })
              ]
            }),
            v.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4 pt-4",
              children: [
                v.jsxs("a", {
                  href: "https://wa.me/919187195517?text=" + encodeURIComponent("Hello Radiant Vista Hotel, I would like to enquire about Breeze Point Rooftop Bar and Restaurant. Please share the available details. Thank you."),
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-md btn-hover-effect text-sm uppercase tracking-wider",
                  children: [
                    v.jsx(WhatsAppIcon, { className: "w-5 h-5" }),
                    "Enquire on WhatsApp"
                  ]
                }),
                v.jsxs("a", {
                  href: "/bar/",
                  onClick: (e) => { e.preventDefault(); navigate("/bar/"); },
                  className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-hubli-earth text-hubli-earth font-bold rounded-sm hover:bg-hubli-earth hover:text-white transition-all shadow-sm btn-hover-effect text-sm uppercase tracking-wider group",
                  children: [
                    "View Bar Details",
                    v.jsx(ZT, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" })
                  ]
                })
              ]
            })
          ]
        }),
        v.jsx(ImageSlider, {
          images: BAR_IMAGES,
          alt: "Breeze Point rooftop restaurant and bar at Radiant Vista in Hubballi",
          className: "rounded-lg shadow-xl h-[450px]"
        })
      ]
    })
  })
});

// Gala Vista Banquets Preview on Homepage
const t3 = ({ navigate }) => v.jsx(xn, {
  id: "gala-vista",
  className: "bg-hubli-dark text-white",
  children: v.jsxs("div", {
    className: "container mx-auto px-4 md:px-6",
    children: [
      v.jsxs("div", {
        className: "text-center mb-16",
        children: [
          v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-sm", children: "Event Spaces" }),
          v.jsx("h2", { className: "text-4xl md:text-5xl font-serif font-bold mt-2", children: "Gala Vista" })
        ]
      }),
      v.jsx("div", {
        className: "bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden",
        children: v.jsxs("div", {
          className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
          children: [
            v.jsxs("div", {
              children: [
                v.jsxs("div", {
                  className: "flex items-center gap-3 mb-4",
                  children: [
                    v.jsx(SA, { className: "text-hubli-sunset w-8 h-8" }),
                    v.jsx("h3", { className: "text-3xl font-serif font-bold", children: "Banqueting & Conferencing" })
                  ]
                }),
                v.jsx("p", {
                  className: "text-gray-300 mb-6 leading-relaxed",
                  children: "Host your events in style at our premier halls. Perfect for corporate conferences, weddings, and grand gatherings. Our facilities are designed to handle both intimate business meetings and large-scale celebrations with equal grace."
                }),
                v.jsxs("div", {
                  className: "space-y-4 mb-8",
                  children: [
                    v.jsxs("div", {
                      className: "flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 card-hover-lift",
                      children: [
                        v.jsx(wy, { className: "text-hubli-sunset w-6 h-6" }),
                        v.jsxs("div", {
                          children: [
                            v.jsx("h4", { className: "font-bold text-lg", children: "Gala Vista I" }),
                            v.jsx("p", { className: "text-sm text-gray-400", children: "Grand Banquet Hall for weddings and receptions" })
                          ]
                        })
                      ]
                    }),
                    v.jsxs("div", {
                      className: "flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/5 card-hover-lift",
                      children: [
                        v.jsx(wy, { className: "text-hubli-sunset w-6 h-6" }),
                        v.jsxs("div", {
                          children: [
                            v.jsx("h4", { className: "font-bold text-lg", children: "Gala Vista II" }),
                            v.jsx("p", { className: "text-sm text-gray-400", children: "Conference & Event Space for corporate presentations" })
                          ]
                        })
                      ]
                    })
                  ]
                }),
                v.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-4",
                  children: [
                    v.jsxs("a", {
                      href: "https://wa.me/919187195517?text=" + encodeURIComponent("Hello Radiant Vista Hotel, I would like to enquire about Gala Vista Banquets and Conferencing. My event type is [event type], and my preferred event date is [date]. Please share the available packages and details."),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-md btn-hover-effect text-sm uppercase tracking-wider",
                      children: [
                        v.jsx(WhatsAppIcon, { className: "w-5 h-5" }),
                        "Enquire on WhatsApp"
                      ]
                    }),
                    v.jsxs("a", {
                      href: "/banquets/",
                      onClick: (e) => { e.preventDefault(); navigate("/banquets/"); },
                      className: "inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-hubli-sunset text-hubli-sunset font-bold rounded-sm hover:bg-hubli-sunset hover:text-white transition-all shadow-sm btn-hover-effect text-sm uppercase tracking-wider group",
                      children: [
                        "View Banquet Details",
                        v.jsx(ZT, { className: "w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" })
                      ]
                    })
                  ]
                })
              ]
            }),
            v.jsxs("div", {
              className: "relative h-[320px] md:h-[450px] w-full rounded-xl overflow-hidden shadow-2xl",
              children: [
                v.jsx(ImageSlider, {
                  images: HALL_IMAGES,
                  alt: "Gala Vista banquet hall at Radiant Vista in Hubballi",
                  className: "w-full h-full"
                }),
                v.jsx("div", {
                  className: "absolute inset-0 bg-gradient-to-t from-hubli-dark/85 via-black/20 to-transparent flex items-end justify-center p-8 text-center pointer-events-none z-20",
                  children: v.jsxs("div", {
                    children: [
                      v.jsx("h3", { className: "text-2xl font-serif italic mb-1 text-white", children: '"Gala Vista"' }),
                      v.jsx("p", { className: "text-white/80 text-xs tracking-widest uppercase", children: "Where celebrations meet grandeur" })
                    ]
                  })
                })
              ]
            })
          ]
        })
      })
    ]
  })
});

// Facilities Section
const kA = [
  { id: 1, title: "Travel Desk", icon: v.jsx(zy, { className: "w-8 h-8" }) },
  { id: 2, title: "Business Center", icon: v.jsx(KT, { className: "w-8 h-8" }) },
  { id: 3, title: "Basement Parking", icon: v.jsx(zy, { className: "w-8 h-8" }) },
  { id: 4, title: "Secure Premises (CCTV)", icon: v.jsx(AA, { className: "w-8 h-8" }) },
  { id: 5, title: "Multiple Dining Options", icon: v.jsx(v0, { className: "w-8 h-8" }) },
  { id: 6, title: "24/7 Front Desk", icon: v.jsx(sA, { className: "w-8 h-8" }) }
];

const ZA = () => v.jsx(xn, {
  id: "facilities",
  className: "bg-hubli-light text-hubli-dark",
  children: v.jsxs("div", {
    className: "container mx-auto px-4 md:px-6",
    children: [
      v.jsx("div", {
        className: "flex flex-col md:flex-row items-start md:items-end justify-between mb-12",
        children: v.jsxs("div", {
          className: "max-w-xl",
          children: [
            v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-sm", children: "Services" }),
            v.jsx("h2", { className: "text-4xl font-serif font-bold mt-2", children: "Amenities & Events" }),
            v.jsx("p", { className: "text-gray-600 mt-4", children: "From secure basement parking to a fully equipped business center, we have it all to ensure a seamless stay." })
          ]
        })
      }),
      v.jsx("div", {
        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6",
        children: kA.map((item) => v.jsxs("div", {
          className: "bg-white p-8 rounded-lg shadow-sm border border-gray-100 card-hover-lift group cursor-default",
          children: [
            v.jsx("div", { className: "text-hubli-sunset mb-4 group-hover:scale-110 transition-transform duration-300", children: item.icon }),
            v.jsx("h3", { className: "text-lg font-semibold tracking-wide", children: item.title })
          ]
        }, item.id))
      })
    ]
  })
});

// 3D Carousel Component
const Carousel3D = ({ images, navigate }) => {
  const [activeIndex, setActiveIndex] = Y.useState(0);
  const [isPaused, setIsPaused] = Y.useState(false);
  const [windowWidth, setWindowWidth] = Y.useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  const touchStartX = Y.useRef(0);
  const touchEndX = Y.useRef(0);

  const isReducedMotion = Y.useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  Y.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 2-second automatic rotation
  Y.useEffect(() => {
    if (isPaused || isReducedMotion) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, isReducedMotion, images.length, activeIndex]);

  const isMobile = windowWidth < 640;
  const isTablet = windowWidth >= 640 && windowWidth < 1024;

  const cardWidth = isMobile ? 260 : isTablet ? 360 : 460;
  const cardHeight = isMobile ? 170 : isTablet ? 230 : 295;

  const getCardStyle = (idx) => {
    const N = images.length;
    let offset = (idx - activeIndex) % N;
    if (offset > N / 2) offset -= N;
    if (offset < -N / 2) offset += N;

    const tx1 = isMobile ? 120 : isTablet ? 190 : 270;
    const tx2 = isMobile ? 210 : isTablet ? 350 : 480;
    const tz1 = isMobile ? -95 : -160;
    const tz2 = isMobile ? -190 : -310;
    const tzHidden = -460;

    const baseTransition = isReducedMotion
      ? "none"
      : "transform 650ms cubic-bezier(0.25, 1, 0.5, 1), opacity 650ms ease, filter 650ms ease, box-shadow 650ms ease";

    if (offset === 0) {
      return {
        transform: "translate(-50%, -50%) translateX(0px) translateZ(0px) rotateY(0deg) scale(1)",
        zIndex: 30,
        opacity: 1,
        filter: "brightness(1)",
        pointerEvents: "auto",
        cursor: "default",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9), 0 0 35px rgba(217, 119, 6, 0.2)",
        borderColor: "rgba(255, 255, 255, 0.2)",
        transition: baseTransition
      };
    } else if (offset === 1) {
      return {
        transform: `translate(-50%, -50%) translateX(${tx1}px) translateZ(${tz1}px) rotateY(-36deg) scale(0.82)`,
        zIndex: 20,
        opacity: 0.82,
        filter: "brightness(0.72)",
        pointerEvents: "auto",
        cursor: "pointer",
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        transition: baseTransition
      };
    } else if (offset === -1) {
      return {
        transform: `translate(-50%, -50%) translateX(-${tx1}px) translateZ(${tz1}px) rotateY(36deg) scale(0.82)`,
        zIndex: 20,
        opacity: 0.82,
        filter: "brightness(0.72)",
        pointerEvents: "auto",
        cursor: "pointer",
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.8)",
        borderColor: "rgba(255, 255, 255, 0.08)",
        transition: baseTransition
      };
    } else if (offset === 2) {
      return {
        transform: `translate(-50%, -50%) translateX(${tx2}px) translateZ(${tz2}px) rotateY(-50deg) scale(0.66)`,
        zIndex: 10,
        opacity: isMobile ? 0.25 : 0.45,
        filter: "brightness(0.5)",
        pointerEvents: "auto",
        cursor: "pointer",
        boxShadow: "0 10px 20px -10px rgba(0, 0, 0, 0.7)",
        borderColor: "rgba(255, 255, 255, 0.04)",
        transition: baseTransition
      };
    } else if (offset === -2) {
      return {
        transform: `translate(-50%, -50%) translateX(-${tx2}px) translateZ(${tz2}px) rotateY(50deg) scale(0.66)`,
        zIndex: 10,
        opacity: isMobile ? 0.25 : 0.45,
        filter: "brightness(0.5)",
        pointerEvents: "auto",
        cursor: "pointer",
        boxShadow: "0 10px 20px -10px rgba(0, 0, 0, 0.7)",
        borderColor: "rgba(255, 255, 255, 0.04)",
        transition: baseTransition
      };
    } else {
      return {
        transform: `translate(-50%, -50%) translateX(0px) translateZ(${tzHidden}px) scale(0.5)`,
        zIndex: 1,
        opacity: 0,
        filter: "brightness(0.2)",
        pointerEvents: "none",
        cursor: "default",
        boxShadow: "none",
        borderColor: "transparent",
        transition: baseTransition
      };
    }
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
  };

  return v.jsxs("div", {
    className: "relative w-full max-w-6xl mx-auto flex flex-col items-center select-none",
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    children: [
      // 3D Perspective Stage
      v.jsx("div", {
        className: "relative w-full overflow-hidden flex items-center justify-center",
        style: {
          height: isMobile ? "320px" : isTablet ? "390px" : "450px",
          perspective: isMobile ? "850px" : "1100px",
          perspectiveOrigin: "center center"
        },
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        children: v.jsxs("div", {
          className: "relative w-full h-full",
          style: { transformStyle: "preserve-3d" },
          children: [
            images.map((item, idx) => {
              const style = getCardStyle(idx);
              return v.jsx("div", {
                onClick: () => {
                  if (idx !== activeIndex) setActiveIndex(idx);
                },
                style: {
                  ...style,
                  width: `${cardWidth}px`,
                  height: `${cardHeight}px`,
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transformOrigin: "center center",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  borderWidth: "1px",
                  borderStyle: "solid"
                },
                children: v.jsx("img", {
                  src: item.src,
                  alt: item.alt,
                  className: "w-full h-full object-cover select-none pointer-events-none rounded-2xl",
                  draggable: false,
                  loading: "eager"
                })
              }, item.id || idx);
            }),

            // Prev & Next Chevrons on stage edges
            v.jsx("button", {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
              },
              className: "absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer focus:outline-none border border-white/10 shadow-lg",
              "aria-label": "Previous slide",
              children: v.jsx(WT, { className: "w-5 h-5 md:w-6 md:h-6" })
            }),
            v.jsx("button", {
              type: "button",
              onClick: (e) => {
                e.stopPropagation();
                setActiveIndex((prev) => (prev + 1) % images.length);
              },
              className: "absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 p-2.5 md:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white/80 hover:text-white backdrop-blur-md transition-all cursor-pointer focus:outline-none border border-white/10 shadow-lg",
              "aria-label": "Next slide",
              children: v.jsx($T, { className: "w-5 h-5 md:w-6 md:h-6" })
            })
          ]
        })
      }),

      // Subtle indicator dots below stage
      v.jsx("div", {
        className: "flex items-center space-x-2.5 mt-5 md:mt-6 z-30",
        children: images.map((_, dotIdx) => v.jsx("button", {
          type: "button",
          onClick: () => setActiveIndex(dotIdx),
          "aria-label": `Go to slide ${dotIdx + 1}`,
          className: `transition-all duration-300 focus:outline-none cursor-pointer ${
            dotIdx === activeIndex
              ? "w-7 h-2 bg-hubli-sunset rounded-full shadow-md"
              : "w-2 h-2 bg-white/30 hover:bg-white/60 rounded-full"
          }`
        }, dotIdx))
      })
    ]
  });
};

// Gallery Section on Homepage (Dark Stage, 3D Carousel, Explore Button)
const QA = ({ navigate }) => {
  return v.jsxs(xn, {
    id: "gallery",
    className: "relative bg-black text-white pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden select-none scroll-mt-16",
    children: [
      // Subtle background ambient light
      v.jsx("div", {
        className: "absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900/60 via-black to-black pointer-events-none"
      }),

      v.jsxs("div", {
        className: "container mx-auto px-4 md:px-6 relative z-10",
        children: [
          // Section Heading
          v.jsxs("div", {
            className: "text-center mb-10 md:mb-14",
            children: [
              v.jsx("span", {
                className: "text-hubli-sunset font-bold tracking-widest uppercase text-xs md:text-sm",
                children: "Gallery"
              }),
              v.jsx("h2", {
                className: "text-3xl md:text-5xl font-serif text-white font-bold mt-2 tracking-wide",
                children: "Capturing Moments"
              }),
              v.jsx("p", {
                className: "text-gray-400 text-sm md:text-base font-light max-w-xl mx-auto mt-3",
                children: "An interactive three-dimensional glimpse into the warmth, grandeur, and hospitality of Radiant Vista."
              })
            ]
          }),

          // 3D Rotating Carousel
          v.jsx(Carousel3D, {
            images: GALLERY_CAROUSEL_IMAGES,
            navigate: navigate
          }),

          // Explore Full Gallery CTA Link/Button
          v.jsx("div", {
            className: "text-center mt-10 md:mt-14",
            children: v.jsxs("a", {
              href: "/gallery/",
              onClick: (e) => {
                e.preventDefault();
                if (navigate) navigate("/gallery/");
                else window.location.href = "/gallery/";
              },
              className: "inline-flex items-center space-x-2.5 px-8 py-3.5 bg-hubli-sunset hover:bg-hubli-earth text-white font-semibold text-sm uppercase tracking-wider rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group cursor-pointer",
              children: [
                v.jsx("span", { children: "Explore Full Gallery" }),
                v.jsx(ZT, { className: "w-4 h-4 transition-transform group-hover:translate-x-1" })
              ]
            })
          })
        ]
      })
    ]
  });
};

// Location Section
const KA = () => v.jsx(xn, {
  id: "location",
  className: "bg-white",
  children: v.jsx("div", {
    className: "container mx-auto px-4 md:px-6",
    children: v.jsxs("div", {
      className: "grid grid-cols-1 lg:grid-cols-2 gap-12 bg-hubli-light rounded-2xl overflow-hidden shadow-xl",
      children: [
        v.jsx("div", {
          className: "h-[400px] lg:h-auto w-full relative",
          children: v.jsx("iframe", {
            title: "Radiant Vista Location on Gokul Road Hubballi",
            src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3847.461623192068!2d75.1158!3d15.3524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDIxJzA4LjYiTiA3NcKwMDYnNTYuOSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
            width: "100%",
            height: "100%",
            style: { border: 0, filter: "grayscale(0.2)" },
            allowFullScreen: true,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade"
          })
        }),
        v.jsxs("div", {
          className: "p-8 lg:p-16 flex flex-col justify-center",
          children: [
            v.jsxs("div", {
              className: "flex items-center gap-3 text-hubli-sunset mb-4",
              children: [
                v.jsx(g0, { className: "w-6 h-6" }),
                v.jsx("span", { className: "uppercase tracking-widest font-bold text-sm", children: "Getting Here" })
              ]
            }),
            v.jsx("h2", { className: "text-3xl md:text-4xl font-serif text-hubli-dark font-bold mb-6", children: "Located at Akshay Park, Gokul Road" }),
            v.jsx("p", { className: "text-gray-600 mb-8 leading-relaxed", children: "We are conveniently located in the prime commercial corridor of Akshay Park on Gokul Road, just minutes from Hubli Airport and major transport hubs. Experience unparalleled accessibility in Hubballi." }),
            v.jsxs("ul", {
              className: "space-y-4 text-gray-700",
              children: [
                v.jsxs("li", {
                  className: "flex items-center gap-4",
                  children: [
                    v.jsx("div", { className: "bg-white p-2 rounded-full shadow-sm text-hubli-earth", children: v.jsx(Pr, { className: "w-5 h-5" }) }),
                    v.jsx("span", { children: "Near Hubli Airport (Gokul Road)" })
                  ]
                }),
                v.jsxs("li", {
                  className: "flex items-center gap-4",
                  children: [
                    v.jsx("div", { className: "bg-white p-2 rounded-full shadow-sm text-hubli-earth", children: v.jsx(Pr, { className: "w-5 h-5" }) }),
                    v.jsx("span", { children: "Located in Akshay Park Commercial Hub" })
                  ]
                }),
                v.jsxs("li", {
                  className: "flex items-center gap-4",
                  children: [
                    v.jsx("div", { className: "bg-white p-2 rounded-full shadow-sm text-hubli-earth", children: v.jsx(Pr, { className: "w-5 h-5" }) }),
                    v.jsx("span", { children: "Convenient access to Industrial Areas & Transport Hubs" })
                  ]
                })
              ]
            })
          ]
        })
      ]
    })
  })
});

// Contact Section with Form Validation and WhatsApp Submission
const JA = () => {
  const [formData, setFormData] = Y.useState({ name: "", phone: "", email: "", message: "" });
  const [errors, setErrors] = Y.useState({});
  const [statusMsg, setStatusMsg] = Y.useState("");
  const [isSubmitting, setIsSubmitting] = Y.useState(false);

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const newErrors = {};
    const nameVal = formData.name.trim();
    const phoneVal = formData.phone.trim();
    const emailVal = formData.email.trim();
    const msgVal = formData.message.trim();

    if (!nameVal) {
      newErrors.name = "Please enter your full name.";
    }

    if (!phoneVal || phoneVal.length !== 10 || !/^\d{10}$/.test(phoneVal)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (emailVal && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!msgVal || msgVal.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatusMsg("Opening WhatsApp to send your enquiry...");

    const text = [
      "Hello Radiant Vista Hotel,",
      "",
      "I would like to make an enquiry.",
      "",
      `Name: ${nameVal}`,
      `Phone: ${phoneVal}`,
      `Email: ${emailVal || "Not provided"}`,
      "",
      "Message:",
      msgVal,
      "",
      "Thank you."
    ].join("\n");

    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setTimeout(() => {
      setFormData({ name: "", phone: "", email: "", message: "" });
      setIsSubmitting(false);
      setTimeout(() => setStatusMsg(""), 5000);
    }, 1200);
  };

  return v.jsxs(xn, {
    id: "contact",
    className: "bg-hubli-dark text-white relative",
    children: [
      v.jsx("div", {
        className: "absolute inset-0 opacity-10 pointer-events-none",
        style: { backgroundImage: 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")' }
      }),
      v.jsxs("div", {
        className: "container mx-auto px-4 md:px-6 relative z-10",
        children: [
          v.jsxs("div", {
            className: "text-center mb-16",
            children: [
              v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-sm", children: "Contact Us" }),
              v.jsx("h2", { className: "text-4xl font-serif font-bold mt-2", children: "Start Your Journey" })
            ]
          }),
          v.jsxs("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-12",
            children: [
              v.jsxs("div", {
                className: "lg:col-span-1 space-y-8",
                children: [
                  v.jsxs("div", {
                    className: "flex items-start gap-4",
                    children: [
                      v.jsx("div", { className: "p-4 bg-white/10 rounded-lg text-hubli-sunset", children: v.jsx(xA, { className: "w-6 h-6" }) }),
                      v.jsxs("div", {
                        children: [
                          v.jsx("h4", { className: "font-bold text-lg", children: "Phone" }),
                          v.jsx("p", { className: "text-gray-400 mt-1 hover:text-white transition-colors", children: v.jsx("a", { href: "tel:+919187195517", children: "+91 91871 95517 (Reservations)" }) }),
                          v.jsx("p", { className: "text-gray-400 hover:text-white transition-colors", children: v.jsx("a", { href: "tel:+918362002487", children: "+91 836 200 2487" }) }),
                          v.jsx("p", { className: "text-gray-400 hover:text-white transition-colors", children: v.jsx("a", { href: "tel:+918364511339", children: "+91 836 451 1339" }) })
                        ]
                      })
                    ]
                  }),
                  v.jsxs("div", {
                    className: "flex items-start gap-4",
                    children: [
                      v.jsx("div", { className: "p-4 bg-white/10 rounded-lg text-hubli-sunset", children: v.jsx(hA, { className: "w-6 h-6" }) }),
                      v.jsxs("div", {
                        children: [
                          v.jsx("h4", { className: "font-bold text-lg", children: "Email" }),
                          v.jsx("p", { className: "text-gray-400 mt-1 break-all", children: v.jsx("a", { href: "mailto:reservations@hotelradiantvista.com", className: "hover:text-white transition-colors", children: "reservations@hotelradiantvista.com" }) })
                        ]
                      })
                    ]
                  }),
                  v.jsxs("div", {
                    className: "flex items-start gap-4",
                    children: [
                      v.jsx("div", { className: "p-4 bg-white/10 rounded-lg text-hubli-sunset", children: v.jsx(g0, { className: "w-6 h-6" }) }),
                      v.jsxs("div", {
                        children: [
                          v.jsx("h4", { className: "font-bold text-lg", children: "Address" }),
                          v.jsxs("p", { className: "text-gray-400 mt-1 leading-relaxed", children: ["Plot No 04, S/No 106A, 107B, 108A, & 109A,", v.jsx("br", {}), "Akshay Park, Gokul Road,", v.jsx("br", {}), "Hubballi, Dharwad District,", v.jsx("br", {}), "Karnataka 580030"] })
                        ]
                      })
                    ]
                  })
                ]
              }),
              v.jsxs("div", {
                className: "lg:col-span-2 bg-white rounded-lg p-8 md:p-10 text-gray-800 shadow-2xl",
                children: [
                  v.jsx("h3", { className: "text-2xl font-serif font-bold text-hubli-green mb-6", children: "Send us a message" }),
                  v.jsxs("form", {
                    onSubmit: handleSubmit,
                    noValidate: true,
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                    children: [
                      v.jsxs("div", {
                        className: "md:col-span-2",
                        children: [
                          v.jsx("label", { className: "block text-sm font-semibold text-gray-600 mb-2", children: "Full Name *" }),
                          v.jsx("input", {
                            type: "text",
                            value: formData.name,
                            onChange: (e) => handleChange("name", e.target.value),
                            className: `w-full px-4 py-3 bg-gray-50 border ${errors.name ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"} rounded-sm focus:outline-none focus:border-hubli-sunset transition-colors`,
                            placeholder: "John Doe"
                          }),
                          errors.name && v.jsx("p", { className: "text-red-500 text-xs mt-1 font-medium", children: errors.name })
                        ]
                      }),
                      v.jsxs("div", {
                        children: [
                          v.jsx("label", { className: "block text-sm font-semibold text-gray-600 mb-2", children: "Phone *" }),
                          v.jsx("input", {
                            type: "tel",
                            inputMode: "numeric",
                            maxLength: 10,
                            value: formData.phone,
                            onChange: (e) => {
                              const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                              handleChange("phone", digits);
                            },
                            className: `w-full px-4 py-3 bg-gray-50 border ${errors.phone ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"} rounded-sm focus:outline-none focus:border-hubli-sunset transition-colors`,
                            placeholder: "9876543210"
                          }),
                          errors.phone && v.jsx("p", { className: "text-red-500 text-xs mt-1 font-medium", children: errors.phone })
                        ]
                      }),
                      v.jsxs("div", {
                        children: [
                          v.jsx("label", { className: "block text-sm font-semibold text-gray-600 mb-2", children: "Email" }),
                          v.jsx("input", {
                            type: "email",
                            value: formData.email,
                            onChange: (e) => handleChange("email", e.target.value),
                            className: `w-full px-4 py-3 bg-gray-50 border ${errors.email ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"} rounded-sm focus:outline-none focus:border-hubli-sunset transition-colors`,
                            placeholder: "john@example.com"
                          }),
                          errors.email && v.jsx("p", { className: "text-red-500 text-xs mt-1 font-medium", children: errors.email })
                        ]
                      }),
                      v.jsxs("div", {
                        className: "md:col-span-2",
                        children: [
                          v.jsx("label", { className: "block text-sm font-semibold text-gray-600 mb-2", children: "Message *" }),
                          v.jsx("textarea", {
                            rows: 4,
                            value: formData.message,
                            onChange: (e) => handleChange("message", e.target.value),
                            className: `w-full px-4 py-3 bg-gray-50 border ${errors.message ? "border-red-500 ring-1 ring-red-500" : "border-gray-200"} rounded-sm focus:outline-none focus:border-hubli-sunset transition-colors`,
                            placeholder: "Tell us about your requirements..."
                          }),
                          errors.message && v.jsx("p", { className: "text-red-500 text-xs mt-1 font-medium", children: errors.message })
                        ]
                      }),
                      statusMsg && v.jsx("div", {
                        className: "md:col-span-2 p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-sm text-center font-medium",
                        children: statusMsg
                      }),
                      v.jsx("div", {
                        className: "md:col-span-2 mt-2",
                        children: v.jsx("button", {
                          type: "submit",
                          disabled: isSubmitting,
                          className: `w-full py-4 bg-hubli-earth text-white font-bold tracking-widest uppercase hover:bg-hubli-green transition-all rounded-sm shadow-lg btn-hover-effect ${
                            isSubmitting ? "opacity-75 cursor-not-allowed" : "cursor-pointer"
                          }`,
                          children: isSubmitting ? "Opening WhatsApp..." : "Submit Request"
                        })
                      })
                    ]
                  })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
};

// Nearby Places Component
const RVNP = () => v.jsx(xn, {
  id: "nearby-places",
  className: "bg-white",
  children: v.jsxs("div", {
    className: "container mx-auto px-4 md:px-6",
    children: [
      v.jsxs("div", {
        className: "text-center mb-12 max-w-3xl mx-auto",
        children: [
          v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-sm", children: "Explore Hubballi" }),
          v.jsx("h2", { className: "text-4xl md:text-5xl font-serif text-hubli-green font-bold mt-2", children: "Nearby Places & Attractions in Hubballi" }),
          v.jsx("p", { className: "text-gray-600 mt-4 leading-relaxed", children: "Radiant Vista is located on Gokul Road in Akshay Park, Hubballi, with convenient access to shopping, transport hubs, leisure destinations, and important attractions around the city." })
        ]
      }),
      v.jsx("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5",
        children: [
          ["Inorbit Mall Hubballi", "Shopping and entertainment destination."],
          ["Hubballi Airport", "Convenient for guests travelling by air on Gokul Road."],
          ["Hubballi Junction", "Major railway connection for travellers."],
          ["Unkal Lake", "Popular leisure and sightseeing destination."],
          ["Chandramouleshwara Temple", "Historic temple and cultural attraction."],
          ["Nrupatunga Betta", "Popular viewpoint and recreational destination."],
          ["Siddharoodha Math", "Important spiritual and cultural landmark."],
          ["Indira Gandhi Glass House Garden", "Public garden and leisure destination."]
        ].map((item, idx) => v.jsxs("div", {
          className: "bg-hubli-light rounded-lg p-6 border border-gray-100 shadow-sm card-hover-lift transition-all",
          children: [
            v.jsx("h3", { className: "font-serif text-xl font-bold text-hubli-dark mb-2", children: item[0] }),
            v.jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: item[1] })
          ]
        }, idx))
      }),
      v.jsx("p", {
        className: "text-gray-600 leading-relaxed text-center max-w-4xl mx-auto mt-10 text-sm",
        children: v.jsxs(v.Fragment, {
          children: [
            "Guests searching for a ",
            v.jsx("strong", { children: "hotel near Inorbit Mall Hubballi" }),
            ", a ",
            v.jsx("strong", { children: "hotel near Hubballi Airport" }),
            ", a ",
            v.jsx("strong", { children: "hotel near Hubballi Junction" }),
            ", or accommodation convenient for exploring Hubballi can consider Radiant Vista on Gokul Road, Akshay Park."
          ]
        })
      })
    ]
  })
});

// Footer Component
const FA = ({ navigate }) => v.jsx("footer", {
  className: "bg-[#1a1818] text-gray-400 py-16 border-t border-white/5",
  children: v.jsxs("div", {
    className: "container mx-auto px-4 md:px-6",
    children: [
      v.jsxs("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12",
        children: [
          v.jsxs("div", {
            className: "space-y-4",
            children: [
              v.jsx("h3", { className: "text-2xl font-serif text-white font-bold", children: "Radiant Vista" }),
              v.jsx("p", { className: "text-sm leading-relaxed", children: "Business hotel and leisure travel destination on Gokul Road, Akshay Park, Hubballi. Home to Brick and Brew restaurant, Breeze Point rooftop bar, and Gala Vista banquet halls." })
            ]
          }),
          v.jsxs("div", {
            children: [
              v.jsx("h4", { className: "text-white font-bold mb-6 uppercase tracking-wider text-sm", children: "Quick Links" }),
              v.jsxs("ul", {
                className: "space-y-3 text-sm",
                children: [
                  v.jsx("li", { children: v.jsx("a", { href: "/", onClick: (e) => { e.preventDefault(); navigate("/"); }, className: "hover:text-hubli-sunset transition-colors", children: "Home" }) }),
                  v.jsx("li", { children: v.jsx("a", { href: "/rooms/", onClick: (e) => { e.preventDefault(); navigate("/rooms/"); }, className: "hover:text-hubli-sunset transition-colors", children: "Rooms & Accommodation" }) }),
                  v.jsx("li", { children: v.jsx("a", { href: "/dining/", onClick: (e) => { e.preventDefault(); navigate("/dining/"); }, className: "hover:text-hubli-sunset transition-colors", children: "Dining (Brick and Brew)" }) }),
                  v.jsx("li", { children: v.jsx("a", { href: "/bar/", onClick: (e) => { e.preventDefault(); navigate("/bar/"); }, className: "hover:text-hubli-sunset transition-colors", children: "Rooftop Bar (Breeze Point)" }) }),
                  v.jsx("li", { children: v.jsx("a", { href: "/banquets/", onClick: (e) => { e.preventDefault(); navigate("/banquets/"); }, className: "hover:text-hubli-sunset transition-colors", children: "Banquets (Gala Vista)" }) }),
                  v.jsx("li", { children: v.jsx("a", { href: "/gallery/", onClick: (e) => { e.preventDefault(); navigate("/gallery/"); }, className: "hover:text-hubli-sunset transition-colors", children: "Photo Gallery" }) })
                ]
              })
            ]
          }),
          v.jsxs("div", {
            children: [
              v.jsx("h4", { className: "text-white font-bold mb-6 uppercase tracking-wider text-sm", children: "Services" }),
              v.jsxs("ul", {
                className: "space-y-3 text-sm",
                children: [
                  v.jsx("li", { children: "Rooftop Bar & Restaurant" }),
                  v.jsx("li", { children: "Banqueting & Conferencing" }),
                  v.jsx("li", { children: "Business Center Facilities" }),
                  v.jsx("li", { children: "Travel Desk & Basement Parking" })
                ]
              })
            ]
          }),
          v.jsxs("div", {
            children: [
              v.jsx("h4", { className: "text-white font-bold mb-6 uppercase tracking-wider text-sm", children: "Follow Us" }),
              v.jsxs("div", {
                className: "flex space-x-4",
                children: [
                  v.jsx("a", { href: "https://www.facebook.com/share/19zCqFvENQ/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Facebook", className: "p-2.5 bg-white/5 rounded-full hover:bg-hubli-sunset hover:text-white transition-all btn-hover-effect", children: v.jsx(nA, { className: "w-5 h-5" }) }),
                  v.jsx("a", { href: "https://www.instagram.com/radiantvistahubli/", target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "p-2.5 bg-white/5 rounded-full hover:bg-hubli-sunset hover:text-white transition-all btn-hover-effect", children: v.jsx(oA, { className: "w-5 h-5" }) }),
                  v.jsx("a", { href: "https://www.youtube.com/@RadiantVistaHubli", target: "_blank", rel: "noopener noreferrer", "aria-label": "YouTube", className: "p-2.5 bg-white/5 rounded-full hover:bg-hubli-sunset hover:text-white transition-all btn-hover-effect", children: v.jsx(DA, { className: "w-5 h-5" }) })
                ]
              })
            ]
          })
        ]
      }),
      v.jsxs("div", {
        className: "border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500",
        children: [
          v.jsxs("p", { children: ["© ", new Date().getFullYear(), " Radiant Vista, Hubballi. All rights reserved."] }),
          v.jsx("p", { className: "mt-2 md:mt-0", children: "Plot No 04, Gokul Road, Akshay Park, Hubballi, Karnataka 580030" })
        ]
      })
    ]
  })
});

// Floating WhatsApp Button
const WA = () => {
  const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent("Hi, I want to book a room at Radiant Vista")}`;
  const o = Jn.a;
  return v.jsx(o, {
    href: waUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Chat with Radiant Vista on WhatsApp",
    className: "fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20bd5a] transition-all btn-hover-effect",
    initial: { scale: 0 },
    animate: { scale: 1 },
    whileHover: { scale: 1.1 },
    whileTap: { scale: 0.92 },
    transition: { type: "spring", stiffness: 260, damping: 20 },
    children: v.jsx(WhatsAppIcon, { className: "w-8 h-8" })
  });
};

// Initial Splash Screen Component
const PA = () => {
  const i = Jn.div;
  const l = Jn.h1;
  const u = Jn.p;
  return v.jsxs(i, {
    className: "fixed inset-0 z-[100] flex flex-col items-center justify-center bg-hubli-dark text-white",
    initial: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.8, ease: "easeInOut" },
    children: [
      v.jsxs("div", {
        className: "flex flex-col items-center relative z-10",
        children: [
          v.jsx(i, {
            initial: { scale: 0.6, opacity: 0, y: 30 },
            animate: { scale: 1, opacity: 1, y: 0 },
            transition: { duration: 1.1, ease: "easeOut" },
            className: "mb-8",
            children: v.jsx("img", { src: "/images/logo.svg", alt: "Radiant Vista Logo", className: "w-28 md:w-36 lg:w-44 h-auto" })
          }),
          v.jsx("div", {
            className: "overflow-hidden",
            children: v.jsx(l, {
              initial: { y: 50, opacity: 0 },
              animate: { y: 0, opacity: 1 },
              transition: { duration: 0.8, delay: 0.4, ease: "easeOut" },
              className: "text-4xl md:text-6xl font-serif font-bold tracking-wider text-center px-4",
              children: "Radiant Vista"
            })
          }),
          v.jsx(i, {
            initial: { width: 0 },
            animate: { width: "140px" },
            transition: { duration: 1, delay: 0.9 },
            className: "h-[2px] bg-hubli-sunset my-5"
          }),
          v.jsx(u, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { duration: 0.8, delay: 1.3 },
            className: "text-gray-300 text-sm tracking-[0.45em] uppercase",
            children: "Business & Leisure"
          })
        ]
      }),
      v.jsx("div", {
        className: "absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-hubli-green to-hubli-dark"
      })
    ]
  });
};

// ==========================================
// DEDICATED ROOMS PAGE COMPONENT (/rooms/)
// ==========================================
const RoomsPage = ({ navigate }) => {
  const roomEnquiryMsg = "Hello Radiant Vista Hotel, I would like to enquire about room reservations and accommodation at Radiant Vista. Please share the available details. Thank you.";
  const waRoomUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(roomEnquiryMsg)}`;

  const detailedRooms = [
    {
      id: "classic",
      title: "Classic Room",
      subtitle: "Comfortable Executive Accommodation",
      image: Ir.classic,
      images: ROOM_IMAGES.classic,
      description: "Our Classic Rooms are thoughtfully appointed designer sanctuaries equipped with individually controlled air conditioning, a 42-inch Smart TV, high-speed Wi-Fi, and a hot water kettle. Designed for both business travelers seeking functionality and leisure guests wanting peace, each Classic Room offers plush bedding and a relaxing ambience on Gokul Road.",
      amenities: [
        { label: "Individually Controlled AC", icon: v.jsx(OA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: '42" Smart TV', icon: v.jsx(MA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Hot Water Kettle", icon: v.jsx(tA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "High-Speed Wi-Fi", icon: v.jsx(wA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "CCTV Secure Premises", icon: v.jsx(AA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Work Desk Space", icon: v.jsx(KT, { className: "w-4 h-4 text-hubli-sunset" }) }
      ]
    },
    {
      id: "premium",
      title: "Premium Room",
      subtitle: "Spacious Comfort with Enhanced Features",
      image: Ir.premium,
      images: ROOM_IMAGES.premium,
      description: "The Premium Rooms at Radiant Vista offer extra square footage, sophisticated interiors, and upgraded conveniences for corporate executives and extended stays. Each room features an executive work desk, safe deposit locker, private mini fridge, individually controlled air conditioning, and a 42-inch Smart TV to keep you refreshed and productive in Hubballi.",
      amenities: [
        { label: "Private Mini Fridge", icon: v.jsx(v0, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Safe Deposit Locker", icon: v.jsx(cA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Executive Work Desk", icon: v.jsx(KT, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Individually Controlled AC", icon: v.jsx(OA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: '42" Smart TV', icon: v.jsx(MA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Hot Water Kettle", icon: v.jsx(tA, { className: "w-4 h-4 text-hubli-sunset" }) }
      ]
    },
    {
      id: "suite",
      title: "Suite",
      subtitle: "Expansive Luxury & Private Lounge",
      image: Ir.suite,
      images: ROOM_IMAGES.suite,
      description: "Radiant Vista Suites represent our premier hospitality tier, designed for travelers who appreciate refined grandeur and ample space. Featuring an expansive separate lounge area, satellite cable entertainment, upscale designer interiors, safe locker, mini fridge, and complete business amenities, our Suites elevate your stay in Hubballi to an art form.",
      amenities: [
        { label: "Expansive Living Area & Lounge", icon: v.jsx(wy, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Designer Interiors & Decor", icon: v.jsx(SA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Satellite Television", icon: v.jsx(MA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Private Mini Fridge", icon: v.jsx(v0, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Safe Deposit Locker", icon: v.jsx(cA, { className: "w-4 h-4 text-hubli-sunset" }) },
        { label: "Individually Controlled AC", icon: v.jsx(OA, { className: "w-4 h-4 text-hubli-sunset" }) }
      ]
    }
  ];

  return v.jsxs("main", {
    className: "pt-20 bg-hubli-light min-h-screen text-hubli-dark",
    children: [
      // Introduction (Retained White Content Section directly below header)
      v.jsx("section", {
        className: "pt-12 pb-12 md:pt-16 md:pb-16 bg-white border-b border-gray-100",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-4xl text-center",
          children: [
            v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-xs", children: "Stay with Us" }),
            v.jsx("h1", { className: "text-3xl md:text-4xl font-serif text-hubli-green font-bold mt-2 mb-6", children: "Hotel Rooms and Suites in Hubballi" }),
            v.jsx("p", {
              className: "text-gray-600 leading-relaxed text-base md:text-lg mb-4",
              children: "Whether you are visiting Hubli for corporate conferences, business presentations, or leisurely family exploration, Radiant Vista provides hotel rooms in Hubballi built around modern traveler expectations. Positioned conveniently on Gokul Road in Akshay Park near Hubballi Airport, our business hotel in Hubballi guarantees seamless connectivity and tranquil rest."
            }),
            v.jsx("p", {
              className: "text-gray-600 leading-relaxed text-base md:text-lg",
              children: "From our well-appointed Classic Room to our spacious Premium Room and expansive Suite rooms in Hubballi, all accommodations feature individually controlled air conditioning, 42-inch Smart TVs, high-speed Wi-Fi, and 24/7 CCTV-monitored secure premises."
            })
          ]
        })
      }),

      // Detailed Room Showcases
      v.jsx("section", {
        className: "py-16 md:py-24 container mx-auto px-4 md:px-6",
        children: v.jsx("div", {
          className: "space-y-16",
          children: detailedRooms.map((room, idx) => v.jsxs("div", {
            id: room.id,
            className: `grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 card-hover-lift ${
              idx % 2 === 1 ? "lg:grid-flow-dense" : ""
            }`,
            children: [
              v.jsx(ImageSlider, {
                images: room.images,
                alt: `${room.title} accommodation at Radiant Vista hotel in Hubballi`,
                className: `rounded-xl overflow-hidden shadow-md h-[320px] md:h-[400px] ${
                  idx % 2 === 1 ? "lg:col-start-2" : ""
                }`
              }),
              v.jsxs("div", {
                className: "space-y-6",
                children: [
                  v.jsxs("div", {
                    children: [
                      v.jsx("span", { className: "text-hubli-sunset font-bold uppercase tracking-widest text-xs", children: room.subtitle }),
                      v.jsx("h2", { className: "text-3xl md:text-4xl font-serif text-hubli-dark font-bold mt-1", children: room.title })
                    ]
                  }),
                  v.jsx("p", { className: "text-gray-600 leading-relaxed", children: room.description }),
                  v.jsx("div", {
                    children: [
                      v.jsx("h4", { className: "text-xs font-bold uppercase tracking-wider text-hubli-green mb-3", children: "Verified In-Room Amenities" }),
                      v.jsx("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-2.5",
                        children: room.amenities.map((a, aIdx) => v.jsxs("div", {
                          className: "flex items-center gap-2.5 bg-hubli-light px-3 py-2 rounded-md text-xs font-medium text-gray-700",
                          children: [
                            a.icon,
                            v.jsx("span", { children: a.label })
                          ]
                        }, aIdx))
                      })
                    ]
                  }),
                  v.jsxs("div", {
                    className: "flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100",
                    children: [
                      v.jsxs("a", {
                        href: RESAVENUE_URL,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "px-6 py-3.5 bg-hubli-earth text-white font-bold rounded-sm hover:bg-hubli-dark transition-all text-center text-xs uppercase tracking-wider shadow-md btn-hover-effect flex items-center justify-center gap-2 group",
                        children: [
                          "Book Now",
                          v.jsx(ZT, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" })
                        ]
                      }),
                      v.jsxs("a", {
                        href: `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(`Hello Radiant Vista Hotel, I would like to enquire about ${room.title} accommodation. Please share details.`)}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "px-6 py-3.5 border border-[#25D366] text-[#128C7E] font-bold rounded-sm hover:bg-[#25D366] hover:text-white transition-all text-center text-xs uppercase tracking-wider btn-hover-effect flex items-center justify-center gap-2",
                        children: [
                          v.jsx(WhatsAppIcon, { className: "w-4 h-4" }),
                          "Enquire on WhatsApp"
                        ]
                      })
                    ]
                  })
                ]
              })
            ]
          }, room.id))
        })
      }),

      // WhatsApp Assistance Banner
      v.jsx("section", {
        className: "py-12 bg-white border-y border-gray-100",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-4xl text-center",
          children: [
            v.jsx("h3", { className: "text-2xl font-serif text-hubli-green font-bold mb-2", children: "Need Personalised Booking Assistance?" }),
            v.jsx("p", { className: "text-gray-600 mb-6 text-sm md:text-base", children: "Our dedicated reservations team is available to assist you with room enquiries, corporate bookings, and stay details." }),
            v.jsxs("a", {
              href: waRoomUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-md btn-hover-effect uppercase tracking-wider text-xs",
              children: [
                v.jsx(WhatsAppIcon, { className: "w-5 h-5" }),
                "Enquire on WhatsApp (+91 91871 95517)"
              ]
            })
          ]
        })
      }),

      // Hotel Facilities Grid
      v.jsx(ZA, {}),

      // Verified Rooms FAQ
      v.jsx("section", {
        className: "py-16 md:py-24 bg-white",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-3xl",
          children: [
            v.jsxs("div", {
              className: "text-center mb-12",
              children: [
                v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-xs", children: "Frequently Asked Questions" }),
                v.jsx("h2", { className: "text-3xl md:text-4xl font-serif text-hubli-dark font-bold mt-2", children: "Rooms & Accommodation FAQ" })
              ]
            }),
            v.jsxs("div", {
              className: "space-y-6",
              children: [
                v.jsxs("div", {
                  className: "p-6 rounded-lg bg-hubli-light border border-gray-100",
                  children: [
                    v.jsx("h3", { className: "font-serif text-xl font-bold text-hubli-dark mb-2", children: "What room categories are available at Radiant Vista?" }),
                    v.jsx("p", { className: "text-gray-600 leading-relaxed text-sm", children: "Radiant Vista offers three verified room categories: Classic Room, Premium Room, and luxury Suite. All categories include individually controlled air conditioning and 42-inch Smart TVs." })
                  ]
                }),
                v.jsxs("div", {
                  className: "p-6 rounded-lg bg-hubli-light border border-gray-100",
                  children: [
                    v.jsx("h3", { className: "font-serif text-xl font-bold text-hubli-dark mb-2", children: "What amenities are included in the rooms?" }),
                    v.jsx("p", { className: "text-gray-600 leading-relaxed text-sm", children: "Standard amenities include individually controlled AC, 42-inch Smart TV, hot water kettle, complimentary high-speed Wi-Fi, work desks, and CCTV secure premises. Premium Rooms and Suites additionally feature mini fridges and safe deposit lockers." })
                  ]
                }),
                v.jsxs("div", {
                  className: "p-6 rounded-lg bg-hubli-light border border-gray-100",
                  children: [
                    v.jsx("h3", { className: "font-serif text-xl font-bold text-hubli-dark mb-2", children: "Is Radiant Vista suitable for business travellers visiting Hubballi?" }),
                    v.jsx("p", { className: "text-gray-600 leading-relaxed text-sm", children: "Yes. Radiant Vista is positioned as a business hotel on Gokul Road near Hubballi Airport, featuring a business center, meeting facilities, high-speed Wi-Fi, executive work desks, and 24/7 front desk services." })
                  ]
                }),
                v.jsxs("div", {
                  className: "p-6 rounded-lg bg-hubli-light border border-gray-100",
                  children: [
                    v.jsx("h3", { className: "font-serif text-xl font-bold text-hubli-dark mb-2", children: "How do I book a room at Radiant Vista?" }),
                    v.jsx("p", { className: "text-gray-600 leading-relaxed text-sm", children: "You can book directly online via our verified ResAvenue booking engine, contact reservations on WhatsApp at +91 91871 95517, or call +91 836 200 2487." })
                  ]
                })
              ]
            })
          ]
        })
      }),

      // Internal Links / Explore other sections
      v.jsx("section", {
        className: "py-12 bg-hubli-light border-t border-gray-200",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-4xl text-center",
          children: [
            v.jsx("h3", { className: "text-xl font-serif font-bold text-hubli-dark mb-6", children: "Explore Other Hotel Services" }),
            v.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                v.jsx("a", { href: "/dining/", onClick: (e) => { e.preventDefault(); navigate("/dining/"); }, className: "p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Brick and Brew Dining" }),
                v.jsx("a", { href: "/bar/", onClick: (e) => { e.preventDefault(); navigate("/bar/"); }, className: "p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Breeze Point Rooftop Bar" }),
                v.jsx("a", { href: "/banquets/", onClick: (e) => { e.preventDefault(); navigate("/banquets/"); }, className: "p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Gala Vista Banquets" }),
                v.jsx("a", { href: "/", onClick: (e) => { e.preventDefault(); navigate("/", "#contact"); }, className: "p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Contact Hotel" })
              ]
            })
          ]
        })
      })
    ]
  });
};

// ==========================================
// DEDICATED DINING PAGE COMPONENT (/dining/)
// ==========================================
const DiningPage = ({ navigate }) => {
  const diningMsg = "Hello Radiant Vista Hotel, I would like to enquire about dining at Brick and Brew. Please share the available details. Thank you.";
  const waDiningUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(diningMsg)}`;

  return v.jsxs("main", {
    className: "pt-24 bg-hubli-light min-h-screen text-hubli-dark",
    children: [
      // Hero Banner
      v.jsx("section", {
        className: "relative py-20 md:py-28 bg-hubli-dark text-white overflow-hidden",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center",
          children: [
            v.jsxs("nav", {
              className: "text-xs tracking-widest uppercase text-hubli-sand mb-4 flex justify-center items-center gap-2",
              children: [
                v.jsx("a", { href: "/", onClick: (e) => { e.preventDefault(); navigate("/"); }, className: "hover:text-white transition-colors", children: "Home" }),
                v.jsx("span", { children: "/" }),
                v.jsx("span", { className: "text-hubli-sunset font-semibold", children: "Brick and Brew Dining" })
              ]
            }),
            v.jsx("h1", {
              className: "text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6",
              children: "Brick and Brew — Vibrant Dining Restaurant in Hubballi"
            }),
            v.jsx("p", {
              className: "text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto",
              children: "Nostalgic flavours served with a bold, modern edge at Radiant Vista on Gokul Road, Hubballi."
            })
          ]
        })
      }),

      // Story & Concept Section
      v.jsx("section", {
        className: "py-16 md:py-24 bg-white",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-5xl",
          children: [
            v.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
              children: [
                v.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-xs", children: "Restaurant in Hubballi" }),
                    v.jsx("h2", { className: "text-3xl md:text-4xl font-serif text-hubli-dark font-bold leading-tight", children: "Premium Nostalgia with a Modern Twist" }),
                    v.jsx("p", {
                      className: "text-gray-600 leading-relaxed text-lg",
                      children: "Ever craved butter chicken that looks like a masterpiece? Or momo with a dimsum twist? Welcome to Brick and Brew—where every dish is a throwback to your favourite food memories, but with a bold, modern edge."
                    }),
                    v.jsx("p", {
                      className: "text-gray-600 leading-relaxed",
                      children: "Walk in and you’re hit with retro Bollywood beats, earthy vibes, pomegranate motifs (that’s our OG inspo!), and maybe even a flaming cocktail. Born from a love for comforting food and the cultural quirks we all grew up with, Brick and Brew blends the flavours of the past with the style and spirit of today’s India."
                    }),
                    v.jsx("p", {
                      className: "text-gray-600 font-semibold italic border-l-4 border-hubli-sunset pl-4 py-1",
                      children: "Think your nani’s dal but with five-star plating twist. This is not just another restaurant; it's a feeling like no other. 'It’s India but cooler, sassier, and way more Instagrammable.'"
                    })
                  ]
                }),
                v.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    v.jsx(ImageSlider, {
                      images: DINING_IMAGES,
                      alt: "Brick and Brew restaurant dining at Radiant Vista in Hubballi",
                      className: "rounded-xl shadow-xl h-[380px]"
                    }),
                    v.jsxs("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        v.jsx("div", {
                          className: "rounded-xl overflow-hidden shadow-md h-32 bg-hubli-dark flex items-center justify-center p-4",
                          children: v.jsx("img", {
                            src: Ac.brickAndBrew,
                            alt: "Brick and Brew logo emblem",
                            className: "max-h-full max-w-full object-contain",
                            loading: "lazy"
                          })
                        }),
                        v.jsx("div", {
                          className: "bg-hubli-earth rounded-xl flex items-center justify-center p-4 text-white text-center italic font-serif text-sm shadow-md",
                          children: '"Where cherished memories meet modern culinary craft."'
                        })
                      ]
                    })
                  ]
                })
              ]
            }),

            // Verified Dining Highlights Grid
            v.jsxs("div", {
              className: "mt-16 grid grid-cols-1 md:grid-cols-3 gap-6",
              children: [
                v.jsxs("div", {
                  className: "p-6 rounded-lg bg-hubli-light border border-gray-100 card-hover-lift",
                  children: [
                    v.jsx("h3", { className: "font-serif text-xl font-bold text-hubli-green mb-2", children: "Retro Bollywood Beats" }),
                    v.jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: "Energetic musical ambiance celebrating classic tunes alongside earthy decor and welcoming hospitality." })
                  ]
                }),
                v.jsxs("div", {
                  className: "p-6 rounded-lg bg-hubli-light border border-gray-100 card-hover-lift",
                  children: [
                    v.jsx("h3", { className: "font-serif text-xl font-bold text-hubli-green mb-2", children: "Five-Star Plating" }),
                    v.jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: "Familiar Indian culinary favourites reimagined with artistic presentation and contemporary craftsmanship." })
                  ]
                }),
                v.jsxs("div", {
                  className: "p-6 rounded-lg bg-hubli-light border border-gray-100 card-hover-lift",
                  children: [
                    v.jsx("h3", { className: "font-serif text-xl font-bold text-hubli-green mb-2", children: "Gokul Road Hubballi" }),
                    v.jsx("p", { className: "text-gray-600 text-sm leading-relaxed", children: "Conveniently located in Akshay Park inside Radiant Vista hotel, perfect for dining in Hubballi." })
                  ]
                })
              ]
            })
          ]
        })
      }),

      // Prominent WhatsApp Enquiry CTA
      v.jsx("section", {
        className: "py-16 bg-neutral-900 text-white text-center",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-3xl",
          children: [
            v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-xs", children: "Table & Dining Enquiries" }),
            v.jsx("h2", { className: "text-3xl md:text-4xl font-serif font-bold mt-2 mb-4", children: "Enquire About Dining at Brick and Brew" }),
            v.jsx("p", { className: "text-gray-300 mb-8 max-w-xl mx-auto text-sm md:text-base", children: "Connect directly with our dining team on WhatsApp to enquire about table availability, timings, and menus." }),
            v.jsxs("a", {
              href: waDiningUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-lg btn-hover-effect text-sm uppercase tracking-wider",
              children: [
                v.jsx(WhatsAppIcon, { className: "w-5 h-5" }),
                "Enquire on WhatsApp (+91 91871 95517)"
              ]
            })
          ]
        })
      }),

      // Internal Links
      v.jsx("section", {
        className: "py-12 bg-white border-t border-gray-200",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-4xl text-center",
          children: [
            v.jsx("h3", { className: "text-xl font-serif font-bold text-hubli-dark mb-6", children: "Explore More at Radiant Vista" }),
            v.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                v.jsx("a", { href: "/bar/", onClick: (e) => { e.preventDefault(); navigate("/bar/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Breeze Point Rooftop Bar" }),
                v.jsx("a", { href: "/rooms/", onClick: (e) => { e.preventDefault(); navigate("/rooms/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Rooms & Accommodation" }),
                v.jsx("a", { href: "/banquets/", onClick: (e) => { e.preventDefault(); navigate("/banquets/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Gala Vista Banquets" }),
                v.jsx("a", { href: "/", onClick: (e) => { e.preventDefault(); navigate("/", "#contact"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Hotel Contact" })
              ]
            })
          ]
        })
      })
    ]
  });
};

// ==========================================
// DEDICATED BAR PAGE COMPONENT (/bar/)
// ==========================================
const BarPage = ({ navigate }) => {
  const barMsg = "Hello Radiant Vista Hotel, I would like to enquire about Breeze Point Rooftop Bar and Restaurant. Please share the available details. Thank you.";
  const waBarUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(barMsg)}`;

  return v.jsxs("main", {
    className: "pt-24 bg-hubli-light min-h-screen text-hubli-dark",
    children: [
      // Hero Banner
      v.jsx("section", {
        className: "relative py-20 md:py-28 bg-hubli-dark text-white overflow-hidden",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center",
          children: [
            v.jsxs("nav", {
              className: "text-xs tracking-widest uppercase text-hubli-sand mb-4 flex justify-center items-center gap-2",
              children: [
                v.jsx("a", { href: "/", onClick: (e) => { e.preventDefault(); navigate("/"); }, className: "hover:text-white transition-colors", children: "Home" }),
                v.jsx("span", { children: "/" }),
                v.jsx("span", { className: "text-hubli-sunset font-semibold", children: "Breeze Point Rooftop Bar" })
              ]
            }),
            v.jsx("h1", {
              className: "text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-6",
              children: "Breeze Point — Rooftop Bar and Restaurant in Hubballi"
            }),
            v.jsx("p", {
              className: "text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto",
              children: "Open-roof scenic ambiance, curated cocktails, savoury dishes, and panoramic skyline views at Radiant Vista."
            })
          ]
        })
      }),

      // Story & Ambience Section
      v.jsx("section", {
        className: "py-16 md:py-24 bg-white",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-5xl",
          children: [
            v.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
              children: [
                v.jsxs("div", {
                  className: "space-y-6",
                  children: [
                    v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-xs", children: "Rooftop Dining & Drinks" }),
                    v.jsx("h2", { className: "text-3xl md:text-4xl font-serif text-hubli-dark font-bold leading-tight", children: "Unwind with Skyline Views & Cozy Ambiance" }),
                    v.jsx("p", {
                      className: "text-gray-600 leading-relaxed text-lg",
                      children: "Unwind with stunning views and a cozy ambiance at our Rooftop Bar and Restaurant. From our barman creating classic curated cocktails to savoury bites, each dish is thoughtfully crafted to elevate your experience."
                    }),
                    v.jsx("p", {
                      className: "text-gray-600 leading-relaxed",
                      children: "Whether you're here to relax, socialize, or host a gathering, we offer a space where memories are made. Its distinct spaces let you enjoy a romantic dinner date at the same time as your friends gear up for a night of partying."
                    }),
                    v.jsxs("div", {
                      className: "space-y-3 pt-2",
                      children: [
                        v.jsxs("div", { className: "flex items-center gap-3 text-gray-700", children: [v.jsx($r, { className: "w-5 h-5 text-hubli-sunset" }), v.jsx("span", { className: "font-semibold", children: "Open-roof scenic skyline ambiance" })] }),
                        v.jsxs("div", { className: "flex items-center gap-3 text-gray-700", children: [v.jsx($r, { className: "w-5 h-5 text-hubli-sunset" }), v.jsx("span", { className: "font-semibold", children: "Distinct zones for romantic dates and social parties" })] }),
                        v.jsxs("div", { className: "flex items-center gap-3 text-gray-700", children: [v.jsx($r, { className: "w-5 h-5 text-hubli-sunset" }), v.jsx("span", { className: "font-semibold", children: "Rotating selection of savoury meals and curated drinks" })] })
                      ]
                    })
                  ]
                }),
                v.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    v.jsx(ImageSlider, {
                      images: BAR_IMAGES,
                      alt: "Breeze Point rooftop restaurant and bar at Radiant Vista in Hubballi",
                      className: "rounded-xl shadow-xl h-[380px]"
                    }),
                    v.jsxs("div", {
                      className: "grid grid-cols-2 gap-4",
                      children: [
                        v.jsxs("div", {
                          className: "bg-hubli-dark text-white rounded-xl p-4 flex flex-col justify-center text-center shadow-md",
                          children: [
                            v.jsx("span", { className: "text-hubli-sunset text-xs uppercase font-bold tracking-widest", children: "Atmosphere" }),
                            v.jsx("span", { className: "font-serif text-lg font-bold mt-1", children: "Open Skyline" })
                          ]
                        }),
                        v.jsxs("div", {
                          className: "bg-hubli-earth text-white rounded-xl p-4 flex flex-col justify-center text-center shadow-md",
                          children: [
                            v.jsx("span", { className: "text-amber-200 text-xs uppercase font-bold tracking-widest", children: "Experience" }),
                            v.jsx("span", { className: "font-serif text-lg font-bold mt-1", children: "Cocktails & Dining" })
                          ]
                        })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      }),

      // Prominent WhatsApp Enquiry CTA
      v.jsx("section", {
        className: "py-16 bg-neutral-900 text-white text-center",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-3xl",
          children: [
            v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-xs", children: "Reservations & Enquiries" }),
            v.jsx("h2", { className: "text-3xl md:text-4xl font-serif font-bold mt-2 mb-4", children: "Enquire About Breeze Point Rooftop Bar" }),
            v.jsx("p", { className: "text-gray-300 mb-8 max-w-xl mx-auto text-sm md:text-base", children: "Connect directly with our hotel team on WhatsApp for table enquiries, timings, and rooftop bookings." }),
            v.jsxs("a", {
              href: waBarUrl,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-lg btn-hover-effect text-sm uppercase tracking-wider",
              children: [
                v.jsx(WhatsAppIcon, { className: "w-5 h-5" }),
                "Enquire on WhatsApp (+91 91871 95517)"
              ]
            })
          ]
        })
      }),

      // Internal Links
      v.jsx("section", {
        className: "py-12 bg-white border-t border-gray-200",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-4xl text-center",
          children: [
            v.jsx("h3", { className: "text-xl font-serif font-bold text-hubli-dark mb-6", children: "Explore More at Radiant Vista" }),
            v.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                v.jsx("a", { href: "/dining/", onClick: (e) => { e.preventDefault(); navigate("/dining/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Brick and Brew Dining" }),
                v.jsx("a", { href: "/banquets/", onClick: (e) => { e.preventDefault(); navigate("/banquets/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Gala Vista Banquets" }),
                v.jsx("a", { href: "/rooms/", onClick: (e) => { e.preventDefault(); navigate("/rooms/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Rooms & Accommodation" }),
                v.jsx("a", { href: "/", onClick: (e) => { e.preventDefault(); navigate("/", "#contact"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Hotel Contact" })
              ]
            })
          ]
        })
      })
    ]
  });
};

// ==========================================
// DEDICATED BANQUETS PAGE COMPONENT (/banquets/)
// ==========================================
const BanquetsPage = ({ navigate }) => {
  const [eventType, setEventType] = Y.useState("");
  const [rawDigits, setRawDigits] = Y.useState("");
  const [displayDate, setDisplayDate] = Y.useState("");
  const [calendarIso, setCalendarIso] = Y.useState("");
  const [validatedFormattedDate, setValidatedFormattedDate] = Y.useState("");
  const [dateError, setDateError] = Y.useState("");
  const datePickerRef = Y.useRef(null);

  const handleManualDateChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 8);
    setRawDigits(digits);
    let formatted = "";
    if (digits.length <= 2) {
      formatted = digits;
    } else if (digits.length <= 4) {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2)}`;
    } else {
      formatted = `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
    }
    setDisplayDate(formatted);

    if (digits.length === 8) {
      const d = parseInt(digits.slice(0, 2), 10);
      const m = parseInt(digits.slice(2, 4), 10);
      const y = parseInt(digits.slice(4, 8), 10);
      const res = validateDateValues(d, m, y);
      if (res.valid) {
        setDateError("");
        const formattedName = `${d} ${MONTH_NAMES[m - 1]} ${y}`;
        setValidatedFormattedDate(formattedName);
        const iso = `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
        setCalendarIso(iso);
      } else {
        setDateError(res.error);
        setValidatedFormattedDate("");
        setCalendarIso("");
      }
    } else {
      setValidatedFormattedDate("");
      setCalendarIso("");
      if (digits.length === 0) {
        setDateError("");
      } else if (dateError) {
        setDateError("");
      }
    }
  };

  const handleDateBlur = () => {
    if (rawDigits.length > 0 && rawDigits.length < 8) {
      setDateError("Please enter a complete 8-digit date in DDMMYYYY format (e.g. 25112026).");
    }
  };

  const handleCalendarChange = (e) => {
    const isoVal = e.target.value;
    if (!isoVal) return;
    const [yStr, mStr, dStr] = isoVal.split("-");
    const y = parseInt(yStr, 10);
    const m = parseInt(mStr, 10);
    const d = parseInt(dStr, 10);
    const res = validateDateValues(d, m, y);
    if (res.valid) {
      setDateError("");
      setCalendarIso(isoVal);
      const digits = `${String(d).padStart(2, "0")}${String(m).padStart(2, "0")}${y}`;
      setRawDigits(digits);
      setDisplayDate(`${String(d).padStart(2, "0")}/${String(m).padStart(2, "0")}/${y}`);
      const formattedName = `${d} ${MONTH_NAMES[m - 1]} ${y}`;
      setValidatedFormattedDate(formattedName);
    } else {
      setDateError(res.error);
      setValidatedFormattedDate("");
    }
  };

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    if (!rawDigits && !calendarIso) {
      setDateError("Please select or enter your preferred event date (today or a future date).");
      return;
    }
    if (rawDigits.length > 0 && rawDigits.length < 8) {
      setDateError("Please enter a complete 8-digit date in DDMMYYYY format.");
      return;
    }
    if (dateError || !validatedFormattedDate) {
      setDateError(dateError || "Please provide a valid, future event date.");
      return;
    }

    const finalEventType = eventType.trim() || "Special Event";
    const msg = `Hello Radiant Vista Hotel, I would like to enquire about Gala Vista Banquets and Conferencing. My event type is ${finalEventType}, and my preferred event date is ${validatedFormattedDate}. Please share the available packages and details.`;
    const waUrl = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  const previewMsg = `Hello Radiant Vista Hotel, I would like to enquire about Gala Vista Banquets and Conferencing. My event type is ${eventType.trim() || "[event type]"}, and my preferred event date is ${validatedFormattedDate || "[preferred date]"}. Please share the available packages and details.`;

  return v.jsxs("main", {
    className: "pt-20 bg-hubli-light min-h-screen text-hubli-dark",
    children: [
      // Introduction (Retained White Content Section directly below header)
      v.jsx("section", {
        className: "pt-12 pb-12 md:pt-16 md:pb-16 bg-white border-b border-gray-100",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-4xl text-center",
          children: [
            v.jsx("span", { className: "text-hubli-sunset font-bold tracking-widest uppercase text-xs", children: "Premier Event Venue" }),
            v.jsx("h1", { className: "text-3xl md:text-4xl font-serif text-hubli-green font-bold mt-2 mb-6", children: "Banquet Halls & Conference Venues in Hubballi" }),
            v.jsx("p", {
              className: "text-gray-600 leading-relaxed text-base md:text-lg mb-4",
              children: "Host your events in style at our premier halls. Perfect for corporate conferences, weddings, receptions, and grand gatherings in Hubballi. Our facilities are designed to handle both intimate business meetings and large-scale celebrations with equal grace."
            }),
            v.jsx("p", {
              className: "text-gray-600 leading-relaxed text-base md:text-lg",
              children: "Gala Vista features two dedicated, versatile spaces: Gala Vista I, tailored for grand weddings, receptions, and family celebrations; and Gala Vista II, purpose-built for business conferences, seminars, and corporate meetings."
            })
          ]
        })
      }),

      // Two Dedicated Spaces Showcase
      v.jsx("section", {
        className: "py-16 md:py-24 container mx-auto px-4 md:px-6 max-w-5xl",
        children: v.jsxs("div", {
          className: "space-y-16",
          children: [
            // Gala Vista I
            v.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 card-hover-lift",
              children: [
                v.jsx(ImageSlider, {
                  images: HALL_IMAGES,
                  alt: "Gala Vista I grand banquet hall for weddings in Hubballi",
                  className: "rounded-xl overflow-hidden shadow-md h-[320px] md:h-[380px]"
                }),
                v.jsxs("div", {
                  className: "space-y-5",
                  children: [
                    v.jsx("span", { className: "text-hubli-sunset font-bold uppercase tracking-widest text-xs", children: "Grand Celebrations" }),
                    v.jsx("h2", { className: "text-3xl font-serif text-hubli-dark font-bold", children: "Gala Vista I — Grand Banquet Hall" }),
                    v.jsx("p", {
                      className: "text-gray-600 leading-relaxed",
                      children: "Designed for grand celebrations, weddings, marriage receptions, engagement ceremonies, and festive family reunions. The hall provides an opulent atmosphere, elegant lighting, and seamless coordination to make your special moments unforgettable in Hubballi."
                    }),
                    v.jsxs("ul", {
                      className: "space-y-2 text-sm text-gray-700",
                      children: [
                        v.jsxs("li", { className: "flex items-center gap-2", children: [v.jsx(AA, { className: "w-4 h-4 text-hubli-sunset" }), " Ideal for weddings, receptions & milestones"] }),
                        v.jsxs("li", { className: "flex items-center gap-2", children: [v.jsx(AA, { className: "w-4 h-4 text-hubli-sunset" }), " Secure basement parking for all guests"] }),
                        v.jsxs("li", { className: "flex items-center gap-2", children: [v.jsx(AA, { className: "w-4 h-4 text-hubli-sunset" }), " On-site catering and banquet management support"] })
                      ]
                    })
                  ]
                })
              ]
            }),

            // Gala Vista II
            v.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100 card-hover-lift lg:grid-flow-dense",
              children: [
                v.jsx(ImageSlider, {
                  images: HALL_IMAGES,
                  alt: "Gala Vista II conference and event space at Radiant Vista Hubballi",
                  className: "rounded-xl overflow-hidden shadow-md h-[320px] md:h-[380px] lg:col-start-2"
                }),
                v.jsxs("div", {
                  className: "space-y-5",
                  children: [
                    v.jsx("span", { className: "text-hubli-sunset font-bold uppercase tracking-widest text-xs", children: "Corporate & Professional" }),
                    v.jsx("h2", { className: "text-3xl font-serif text-hubli-dark font-bold", children: "Gala Vista II — Conference & Event Space" }),
                    v.jsx("p", {
                      className: "text-gray-600 leading-relaxed",
                      children: "Tailored for corporate conferences, business presentations, seminars, executive boardroom meetings, and corporate training programs. Located within our business hotel on Gokul Road, Gala Vista II provides professional surroundings with high-speed Wi-Fi and modern event infrastructure."
                    }),
                    v.jsxs("ul", {
                      className: "space-y-2 text-sm text-gray-700",
                      children: [
                        v.jsxs("li", { className: "flex items-center gap-2", children: [v.jsx(AA, { className: "w-4 h-4 text-hubli-sunset" }), " Purpose-built for corporate seminars & conferences"] }),
                        v.jsxs("li", { className: "flex items-center gap-2", children: [v.jsx(AA, { className: "w-4 h-4 text-hubli-sunset" }), " High-speed Wi-Fi and presentation connectivity"] }),
                        v.jsxs("li", { className: "flex items-center gap-2", children: [v.jsx(AA, { className: "w-4 h-4 text-hubli-sunset" }), " Adjacent business center and hotel room blocks"] })
                      ]
                    })
                  ]
                })
              ]
            })
          ]
        })
      }),

      // Interactive WhatsApp Enquiry Helper Tool
      v.jsx("section", {
        className: "py-16 bg-white border-y border-gray-100",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-2xl bg-hubli-light p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200",
          children: [
            v.jsxs("div", {
              className: "text-center mb-8",
              children: [
                v.jsx("span", { className: "text-hubli-sunset font-bold uppercase tracking-widest text-xs", children: "Quick Event Planner" }),
                v.jsx("h3", { className: "text-2xl md:text-3xl font-serif font-bold text-hubli-green mt-1", children: "Enquire for Your Upcoming Event" }),
                v.jsx("p", { className: "text-gray-600 text-sm mt-2", children: "Select your event type and preferred date below, then click to open WhatsApp with your customized details." })
              ]
            }),
            v.jsxs("div", {
              className: "space-y-5",
              children: [
                v.jsxs("div", {
                  children: [
                    v.jsx("label", { className: "block text-sm font-semibold text-gray-700 mb-1.5", children: "Event Type" }),
                    v.jsxs("select", {
                      value: eventType,
                      onChange: (e) => setEventType(e.target.value),
                      className: "w-full px-4 py-3 bg-white border border-gray-300 rounded-sm focus:outline-none focus:border-hubli-sunset text-sm",
                      children: [
                        v.jsx("option", { value: "", children: "-- Select Event Type (Optional) --" }),
                        v.jsx("option", { value: "Wedding", children: "Wedding" }),
                        v.jsx("option", { value: "Marriage Reception", children: "Marriage Reception" }),
                        v.jsx("option", { value: "Corporate Conference", children: "Corporate Conference" }),
                        v.jsx("option", { value: "Seminar / Presentation", children: "Seminar / Presentation" }),
                        v.jsx("option", { value: "Business Meeting", children: "Business Meeting" }),
                        v.jsx("option", { value: "Social Celebration", children: "Social Celebration / Anniversary" }),
                        v.jsx("option", { value: "Other Event", children: "Other Event" })
                      ]
                    })
                  ]
                }),
                v.jsxs("div", {
                  className: "space-y-1.5",
                  children: [
                    v.jsxs("label", {
                      className: "block text-sm font-semibold text-gray-700",
                      children: [
                        "Preferred Event Date ",
                        v.jsx("span", { className: "text-xs font-normal text-gray-500", children: "(DDMMYYYY or choose from calendar)" })
                      ]
                    }),
                    v.jsxs("div", {
                      className: "relative flex items-center",
                      children: [
                        v.jsx("input", {
                          type: "text",
                          inputMode: "numeric",
                          maxLength: 10,
                          value: displayDate,
                          onChange: handleManualDateChange,
                          onBlur: handleDateBlur,
                          placeholder: "DD/MM/YYYY (e.g. 25112026)",
                          className: `w-full pl-4 pr-12 py-3 bg-white border ${
                            dateError ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-hubli-sunset"
                          } rounded-sm focus:outline-none text-sm transition-colors`
                        }),
                        v.jsxs("div", {
                          className: "absolute right-3 flex items-center justify-center w-7 h-7",
                          children: [
                            v.jsx(CalendarIcon, { className: "w-5 h-5 text-gray-500 pointer-events-none" }),
                            v.jsx("input", {
                              ref: datePickerRef,
                              type: "date",
                              min: getTodayParts().iso,
                              value: calendarIso,
                              onChange: handleCalendarChange,
                              title: "Choose date from calendar",
                              className: "absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            })
                          ]
                        })
                      ]
                    }),
                    dateError ? v.jsxs("p", {
                      className: "text-xs text-red-600 font-medium flex items-center gap-1 mt-1",
                      children: [
                        v.jsx("span", { children: "⚠" }),
                        dateError
                      ]
                    }) : validatedFormattedDate ? v.jsxs("p", {
                      className: "text-xs text-green-700 font-medium flex items-center gap-1 mt-1",
                      children: [
                        v.jsx("span", { children: "✓" }),
                        `Validated Event Date: ${validatedFormattedDate}`
                      ]
                    }) : null
                  ]
                }),
                v.jsxs("div", {
                  className: "p-4 bg-white rounded-md border border-gray-200 text-xs text-gray-600 leading-relaxed",
                  children: [
                    v.jsx("strong", { className: "text-gray-800", children: "Preview WhatsApp message:" }),
                    v.jsx("br", {}),
                    previewMsg
                  ]
                }),
                v.jsx("div", {
                  className: "pt-2",
                  children: v.jsxs("button", {
                    type: "button",
                    onClick: handleWhatsAppSubmit,
                    className: "w-full py-4 bg-[#25D366] text-white font-bold rounded-sm hover:bg-[#20bd5a] transition-all shadow-md btn-hover-effect flex items-center justify-center gap-2 uppercase tracking-wider text-sm cursor-pointer",
                    children: [
                      v.jsx(WhatsAppIcon, { className: "w-5 h-5" }),
                      "Enquire on WhatsApp (+91 91871 95517)"
                    ]
                  })
                })
              ]
            })
          ]
        })
      }),

      // Internal Links
      v.jsx("section", {
        className: "py-12 bg-white border-t border-gray-200",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-4xl text-center",
          children: [
            v.jsx("h3", { className: "text-xl font-serif font-bold text-hubli-dark mb-6", children: "Explore More at Radiant Vista" }),
            v.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                v.jsx("a", { href: "/rooms/", onClick: (e) => { e.preventDefault(); navigate("/rooms/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Rooms & Accommodation" }),
                v.jsx("a", { href: "/dining/", onClick: (e) => { e.preventDefault(); navigate("/dining/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Brick and Brew Dining" }),
                v.jsx("a", { href: "/bar/", onClick: (e) => { e.preventDefault(); navigate("/bar/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Breeze Point Rooftop Bar" }),
                v.jsx("a", { href: "/", onClick: (e) => { e.preventDefault(); navigate("/", "#contact"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm", children: "Contact Hotel" })
              ]
            })
          ]
        })
      })
    ]
  });
};

// ==========================================
// DEDICATED GALLERY PAGE COMPONENT
// ==========================================
const GalleryPage = ({ navigate }) => {
  const [activeCategory, setActiveCategory] = Y.useState("All");
  const [lightboxIdx, setLightboxIdx] = Y.useState(null);
  const touchStartX = Y.useRef(0);
  const touchEndX = Y.useRef(0);

  const categories = [
    { key: "All", label: "All Photos", count: GALLERY_ALL_IMAGES.length },
    { key: "Rooms", label: "Rooms & Suites", count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Rooms").length },
    { key: "Dining", label: "Dining & Cuisine", count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Dining").length },
    { key: "Bar", label: "Bar & Rooftop", count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Bar").length },
    { key: "Banquets", label: "Banquets & Events", count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Banquets").length },
    { key: "Facilities", label: "Facilities & Property", count: GALLERY_ALL_IMAGES.filter((i) => i.category === "Facilities").length }
  ];

  const filteredImages = Y.useMemo(() => {
    if (activeCategory === "All") return GALLERY_ALL_IMAGES;
    return GALLERY_ALL_IMAGES.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  // Lightbox keyboard navigation and scroll lock
  Y.useEffect(() => {
    if (lightboxIdx !== null) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") setLightboxIdx(null);
        if (e.key === "ArrowLeft") setLightboxIdx((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
        if (e.key === "ArrowRight") setLightboxIdx((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "unset";
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [lightboxIdx, filteredImages.length]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setLightboxIdx((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
      } else {
        setLightboxIdx((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
      }
    }
  };

  return v.jsxs("main", {
    className: "pt-24 bg-hubli-light min-h-screen text-hubli-dark",
    children: [
      // Hero Header Banner
      v.jsx("section", {
        className: "relative py-16 md:py-24 bg-hubli-dark text-white overflow-hidden",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center",
          children: [
            v.jsxs("nav", {
              className: "text-xs tracking-widest uppercase text-hubli-sand mb-4 flex justify-center items-center gap-2",
              children: [
                v.jsx("a", { href: "/", onClick: (e) => { e.preventDefault(); navigate("/"); }, className: "hover:text-white transition-colors cursor-pointer", children: "Home" }),
                v.jsx("span", { children: "/" }),
                v.jsx("span", { className: "text-hubli-sunset font-semibold", children: "Photo Gallery" })
              ]
            }),
            v.jsx("h1", {
              className: "text-4xl md:text-6xl font-serif font-bold text-white leading-tight mb-4",
              children: "Explore Radiant Vista"
            }),
            v.jsx("p", {
              className: "text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto",
              children: "Discover our serene guest rooms, vibrant Brick and Brew dining, Breeze Point open-air rooftop, Gala Vista banquet halls, and modern hospitality amenities in Hubballi."
            })
          ]
        })
      }),

      // Gallery Controls & Grid Section
      v.jsx("section", {
        className: "py-12 md:py-16",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-7xl",
          children: [
            // Category Filter Pills
            v.jsx("div", {
              className: "flex flex-wrap items-center justify-center gap-2.5 md:gap-3 mb-10 md:mb-12",
              children: categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return v.jsxs("button", {
                  type: "button",
                  onClick: () => {
                    setActiveCategory(cat.key);
                    setLightboxIdx(null);
                  },
                  className: `px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? "bg-hubli-sunset text-white border-hubli-sunset shadow-md -translate-y-0.5"
                      : "bg-white text-gray-700 hover:text-hubli-sunset border-gray-200 hover:border-hubli-sunset/40 hover:bg-amber-50/40"
                  }`,
                  children: [
                    cat.label,
                    v.jsx("span", {
                      className: `ml-2 text-xs opacity-80 px-1.5 py-0.5 rounded-full ${
                        isActive ? "bg-white/20 text-white" : "bg-gray-100 text-gray-600"
                      }`,
                      children: cat.count
                    })
                  ]
                }, cat.key);
              })
            }),

            // Total Counter Label
            v.jsxs("div", {
              className: "flex justify-between items-center text-xs md:text-sm text-gray-500 mb-6 px-1",
              children: [
                v.jsxs("span", {
                  children: [
                    "Showing ",
                    v.jsx("strong", { className: "text-hubli-dark", children: filteredImages.length }),
                    " photographs"
                  ]
                }),
                v.jsx("span", {
                  className: "italic text-gray-400 hidden sm:inline",
                  children: "Click any image to view in full resolution"
                })
              ]
            }),

            // Responsive Image Grid
            v.jsx("div", {
              className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
              children: filteredImages.map((img, idx) => v.jsxs("div", {
                className: "group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 cursor-pointer card-hover-lift flex flex-col",
                onClick: () => setLightboxIdx(idx),
                role: "button",
                tabIndex: 0,
                onKeyDown: (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setLightboxIdx(idx);
                  }
                },
                children: [
                  v.jsxs("div", {
                    className: "relative w-full aspect-[16/10] overflow-hidden bg-gray-100",
                    children: [
                      v.jsx("img", {
                        src: img.src,
                        alt: img.alt,
                        loading: "lazy",
                        className: "w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                      }),
                      // Subtle dark gradient on hover
                      v.jsx("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5",
                        children: [
                          v.jsx("div", {
                            className: "self-start",
                            children: v.jsx("span", {
                              className: "text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20",
                              children: img.categoryLabel
                            })
                          }),
                          v.jsxs("div", {
                            className: "text-white",
                            children: [
                              v.jsx("h3", { className: "font-serif text-lg font-bold leading-snug drop-shadow-sm", children: img.title }),
                              v.jsx("p", { className: "text-xs text-white/80 mt-1 font-sans", children: "Click to open full view" })
                            ]
                          })
                        ]
                      })
                    ]
                  }),
                  v.jsxs("div", {
                    className: "p-4 flex items-center justify-between bg-white border-t border-gray-50",
                    children: [
                      v.jsxs("div", {
                        className: "truncate pr-2",
                        children: [
                          v.jsx("h4", { className: "font-serif font-bold text-hubli-dark text-sm md:text-base truncate group-hover:text-hubli-sunset transition-colors", children: img.title }),
                          v.jsx("span", { className: "text-xs text-gray-500 tracking-wide", children: img.categoryLabel })
                        ]
                      }),
                      v.jsx("span", {
                        className: "text-hubli-sunset opacity-60 group-hover:opacity-100 transition-opacity",
                        children: v.jsx(ZT, { className: "w-4 h-4" })
                      })
                    ]
                  })
                ]
              }, img.src))
            })
          ]
        })
      }),

      // Internal Links Navigation
      v.jsx("section", {
        className: "py-12 bg-white border-t border-gray-200",
        children: v.jsxs("div", {
          className: "container mx-auto px-4 md:px-6 max-w-4xl text-center",
          children: [
            v.jsx("h3", { className: "text-xl font-serif font-bold text-hubli-dark mb-6", children: "Explore More at Radiant Vista" }),
            v.jsxs("div", {
              className: "grid grid-cols-2 md:grid-cols-4 gap-4",
              children: [
                v.jsx("a", { href: "/rooms/", onClick: (e) => { e.preventDefault(); navigate("/rooms/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm cursor-pointer", children: "Rooms & Accommodation" }),
                v.jsx("a", { href: "/dining/", onClick: (e) => { e.preventDefault(); navigate("/dining/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm cursor-pointer", children: "Brick and Brew Dining" }),
                v.jsx("a", { href: "/bar/", onClick: (e) => { e.preventDefault(); navigate("/bar/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm cursor-pointer", children: "Breeze Point Rooftop Bar" }),
                v.jsx("a", { href: "/banquets/", onClick: (e) => { e.preventDefault(); navigate("/banquets/"); }, className: "p-4 bg-hubli-light rounded-lg shadow-sm hover:shadow-md transition-shadow font-semibold text-hubli-earth hover:text-hubli-sunset text-sm cursor-pointer", children: "Banquets (Gala Vista)" })
              ]
            })
          ]
        })
      }),

      // Lightbox Modal for Gallery Page
      lightboxIdx !== null && filteredImages[lightboxIdx] && v.jsxs("div", {
        className: "fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none",
        onClick: (e) => {
          if (e.target === e.currentTarget) setLightboxIdx(null);
        },
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        children: [
          // Close button
          v.jsx("button", {
            type: "button",
            onClick: () => setLightboxIdx(null),
            className: "absolute top-5 right-5 z-[210] p-3 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer focus:outline-none",
            "aria-label": "Close lightbox",
            children: v.jsx(_A, { className: "w-7 h-7" })
          }),

          // Previous button
          v.jsx("button", {
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              setLightboxIdx((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
            },
            className: "absolute left-4 top-1/2 -translate-y-1/2 z-[210] p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all cursor-pointer focus:outline-none border border-white/10",
            "aria-label": "Previous image",
            children: v.jsx(WT, { className: "w-6 h-6 md:w-8 md:h-8" })
          }),

          // Image container
          v.jsxs("div", {
            className: "relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center pointer-events-auto",
            onClick: (e) => e.stopPropagation(),
            children: [
              v.jsx("img", {
                src: filteredImages[lightboxIdx].src,
                alt: filteredImages[lightboxIdx].alt,
                className: "max-h-[76vh] max-w-[90vw] w-auto h-auto object-contain rounded-xl shadow-2xl border border-white/10"
              }),
              v.jsxs("div", {
                className: "mt-4 text-center text-white",
                children: [
                  v.jsx("h3", { className: "text-lg md:text-xl font-serif font-bold text-white", children: filteredImages[lightboxIdx].title }),
                  v.jsxs("div", {
                    className: "mt-1 text-white/70 text-xs md:text-sm font-medium tracking-wider flex items-center justify-center gap-3",
                    children: [
                      v.jsx("span", { className: "text-hubli-sunset font-semibold", children: filteredImages[lightboxIdx].categoryLabel }),
                      v.jsx("span", { children: "•" }),
                      v.jsxs("span", { children: [`${lightboxIdx + 1} / ${filteredImages.length}`] })
                    ]
                  })
                ]
              })
            ]
          }),

          // Next button
          v.jsx("button", {
            type: "button",
            onClick: (e) => {
              e.stopPropagation();
              setLightboxIdx((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
            },
            className: "absolute right-4 top-1/2 -translate-y-1/2 z-[210] p-3 text-white/80 hover:text-white bg-black/50 hover:bg-black/80 rounded-full backdrop-blur-sm transition-all cursor-pointer focus:outline-none border border-white/10",
            "aria-label": "Next image",
            children: v.jsx($T, { className: "w-6 h-6 md:w-8 md:h-8" })
          })
        ]
      })
    ]
  });
};

// ==========================================
// ROOT APP COMPONENT WITH MULTI-PAGE ROUTING
// ==========================================
const e3 = () => {
  const getInitialPath = () => {
    if (typeof window === "undefined") return "/";
    const p = window.location.pathname.toLowerCase();
    if (p.includes("/rooms")) return "/rooms/";
    if (p.includes("/dining")) return "/dining/";
    if (p.includes("/bar")) return "/bar/";
    if (p.includes("/banquets")) return "/banquets/";
    if (p.includes("/gallery")) return "/gallery/";
    return "/";
  };

  const [currentPath, setCurrentPath] = Y.useState(getInitialPath);
  const [showSplash, setShowSplash] = Y.useState(() => {
    // Only show splash on home page and if not previously dismissed in session
    if (typeof window === "undefined") return false;
    const isHome = window.location.pathname === "/" || window.location.pathname === "/index.html";
    return isHome && !sessionStorage.getItem("rv_splash_shown");
  });

  Y.useEffect(() => {
    if (showSplash) {
      document.body.style.overflow = "hidden";
      const timer = setTimeout(() => {
        setShowSplash(false);
        sessionStorage.setItem("rv_splash_shown", "1");
        document.body.style.overflow = "unset";
      }, 2000);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "unset";
      };
    }
  }, [showSplash]);

  // Listen to browser Back / Forward buttons
  Y.useEffect(() => {
    const onPopState = () => {
      const p = window.location.pathname.toLowerCase();
      if (p.includes("/rooms")) setCurrentPath("/rooms/");
      else if (p.includes("/dining")) setCurrentPath("/dining/");
      else if (p.includes("/bar")) setCurrentPath("/bar/");
      else if (p.includes("/banquets")) setCurrentPath("/banquets/");
      else if (p.includes("/gallery")) setCurrentPath("/gallery/");
      else setCurrentPath("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (path, hash) => {
    if (path !== currentPath) {
      window.history.pushState({}, "", path + (hash || ""));
      setCurrentPath(path);
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return v.jsxs("div", {
    className: "font-sans antialiased text-gray-800 bg-hubli-light selection:bg-hubli-sunset selection:text-white min-h-screen flex flex-col justify-between",
    children: [
      v.jsx(a0, {
        children: showSplash && v.jsx(PA, {}, "splash")
      }),

      !showSplash && v.jsxs(v.Fragment, {
        children: [
          v.jsx(BA, { currentPath: currentPath, navigate: navigate }),

          currentPath === "/rooms/"
            ? v.jsx(RoomsPage, { navigate: navigate })
            : currentPath === "/dining/"
            ? v.jsx(DiningPage, { navigate: navigate })
            : currentPath === "/bar/"
            ? v.jsx(BarPage, { navigate: navigate })
            : currentPath === "/banquets/"
            ? v.jsx(BanquetsPage, { navigate: navigate })
            : currentPath === "/gallery/"
            ? v.jsx(GalleryPage, { navigate: navigate })
            : v.jsxs(v.Fragment, {
                children: [
                  v.jsx(qA, {}),
                  v.jsxs("main", {
                    children: [
                      v.jsx(GA, {}),
                      v.jsx(XA, { navigate: navigate }),
                      v.jsx($A, { navigate: navigate }),
                      v.jsx(IA, { navigate: navigate }),
                      v.jsx(t3, { navigate: navigate }),
                      v.jsx(ZA, {}),
                      v.jsx(RVNP, {}),
                      v.jsx(QA, { navigate: navigate }),
                      v.jsx(KA, {}),
                      v.jsx(JA, {})
                    ]
                  })
                ]
              }),

          v.jsx(FA, { navigate: navigate }),
          v.jsx(WA, {})
        ]
      })
    ]
  });
};

const x0 = document.getElementById("root");
if (!x0) throw new Error("Could not find root element to mount to");
const n3 = tx.createRoot(x0);
n3.render(v.jsx(Q1.StrictMode, { children: v.jsx(e3, {}) }));
