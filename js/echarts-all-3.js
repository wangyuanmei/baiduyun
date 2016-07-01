!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.echarts = e() : t.echarts = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n])return i[n].exports;
            var o = i[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0)
    }([function (t, e, i) {
        t.exports = i(2), i(85), i(79), i(90), i(165), i(283), i(272), i(293), i(248), i(244), i(240), i(279), i(288), i(226), i(231), i(237), i(268), i(261), i(36), i(178), i(198), i(308), i(305), i(214), i(189), i(168), i(321), i(184), i(183), i(312), i(190), i(206)
    }, function (t, e, i) {
        function n(t) {
            if ("object" == typeof t && null !== t) {
                var e = t;
                if (t instanceof Array) {
                    e = [];
                    for (var i = 0, o = t.length; o > i; i++)e[i] = n(t[i])
                } else if (!A(t) && !I(t)) {
                    e = {};
                    for (var a in t)t.hasOwnProperty(a) && (e[a] = n(t[a]))
                }
                return e
            }
            return t
        }

        function o(t, e, i) {
            if (!M(e) || !M(t))return i ? n(e) : t;
            for (var a in e)if (e.hasOwnProperty(a)) {
                var r = t[a], s = e[a];
                !M(s) || !M(r) || b(s) || b(r) || I(s) || I(r) || A(s) || A(r) ? !i && a in t || (t[a] = n(e[a], !0)) : o(r, s, i)
            }
            return t
        }

        function a(t, e) {
            for (var i = t[0], n = 1, a = t.length; a > n; n++)i = o(i, t[n], e);
            return i
        }

        function r(t, e) {
            for (var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
            return t
        }

        function s(t, e, i) {
            for (var n in e)e.hasOwnProperty(n) && (i ? null != e[n] : null == t[n]) && (t[n] = e[n]);
            return t
        }

        function l() {
            return document.createElement("canvas")
        }

        function h() {
            return D || (D = G.createCanvas().getContext("2d")), D
        }

        function u(t, e) {
            if (t) {
                if (t.indexOf)return t.indexOf(e);
                for (var i = 0, n = t.length; n > i; i++)if (t[i] === e)return i
            }
            return -1
        }

        function c(t, e) {
            function i() {
            }

            var n = t.prototype;
            i.prototype = e.prototype, t.prototype = new i;
            for (var o in n)t.prototype[o] = n[o];
            t.prototype.constructor = t, t.superClass = e
        }

        function d(t, e, i) {
            t = "prototype"in t ? t.prototype : t, e = "prototype"in e ? e.prototype : e, s(t, e, i)
        }

        function f(t) {
            return t ? "string" == typeof t ? !1 : "number" == typeof t.length : void 0
        }

        function p(t, e, i) {
            if (t && e)if (t.forEach && t.forEach === O)t.forEach(e, i); else if (t.length === +t.length)for (var n = 0, o = t.length; o > n; n++)e.call(i, t[n], n, t); else for (var a in t)t.hasOwnProperty(a) && e.call(i, t[a], a, t)
        }

        function g(t, e, i) {
            if (t && e) {
                if (t.map && t.map === N)return t.map(e, i);
                for (var n = [], o = 0, a = t.length; a > o; o++)n.push(e.call(i, t[o], o, t));
                return n
            }
        }

        function m(t, e, i, n) {
            if (t && e) {
                if (t.reduce && t.reduce === B)return t.reduce(e, i, n);
                for (var o = 0, a = t.length; a > o; o++)i = e.call(n, i, t[o], o, t);
                return i
            }
        }

        function v(t, e, i) {
            if (t && e) {
                if (t.filter && t.filter === R)return t.filter(e, i);
                for (var n = [], o = 0, a = t.length; a > o; o++)e.call(i, t[o], o, t) && n.push(t[o]);
                return n
            }
        }

        function y(t, e, i) {
            if (t && e)for (var n = 0, o = t.length; o > n; n++)if (e.call(i, t[n], n, t))return t[n]
        }

        function x(t, e) {
            var i = V.call(arguments, 2);
            return function () {
                return t.apply(e, i.concat(V.call(arguments)))
            }
        }

        function _(t) {
            var e = V.call(arguments, 1);
            return function () {
                return t.apply(this, e.concat(V.call(arguments)))
            }
        }

        function b(t) {
            return "[object Array]" === z.call(t)
        }

        function w(t) {
            return "function" == typeof t
        }

        function S(t) {
            return "[object String]" === z.call(t)
        }

        function M(t) {
            var e = typeof t;
            return "function" === e || !!t && "object" == e
        }

        function A(t) {
            return !!k[z.call(t)] || t instanceof P
        }

        function I(t) {
            return t && 1 === t.nodeType && "string" == typeof t.nodeName
        }

        function T(t) {
            for (var e = 0, i = arguments.length; i > e; e++)if (null != arguments[e])return arguments[e]
        }

        function L() {
            return Function.call.apply(V, arguments)
        }

        function C(t, e) {
            if (!t)throw new Error(e)
        }

        var D, P = i(17), k = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1
        }, z = Object.prototype.toString, E = Array.prototype, O = E.forEach, R = E.filter, V = E.slice, N = E.map, B = E.reduce, G = {
            inherits: c,
            mixin: d,
            clone: n,
            merge: o,
            mergeAll: a,
            extend: r,
            defaults: s,
            getContext: h,
            createCanvas: l,
            indexOf: u,
            slice: L,
            find: y,
            isArrayLike: f,
            each: p,
            map: g,
            reduce: m,
            filter: v,
            bind: x,
            curry: _,
            isArray: b,
            isString: S,
            isObject: M,
            isFunction: w,
            isBuildInObject: A,
            isDom: I,
            retrieve: T,
            assert: C,
            noop: function () {
            }
        };
        t.exports = G
    }, function (t, e, i) {
        function n(t) {
            return function (e, i, n) {
                e = e && e.toLowerCase(), C.prototype[t].call(this, e, i, n)
            }
        }

        function o() {
            C.call(this)
        }

        function a(t, e, i) {
            i = i || {}, "string" == typeof e && (e = W[e]), e && D(F, function (t) {
                t(e)
            }), this.id, this.group, this._dom = t, this._zr = A.init(t, {
                renderer: i.renderer || "canvas",
                devicePixelRatio: i.devicePixelRatio
            }), this._theme = I.clone(e), this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._api = new v(this), this._coordSysMgr = new y, C.call(this), this._messageCenter = new o, this._initEvents(), this.resize = I.bind(this.resize, this)
        }

        function r(t, e) {
            var i = this._model;
            i && i.eachComponent({mainType: "series", query: e}, function (n, o) {
                var a = this._chartsMap[n.__viewId];
                a && a.__alive && a[t](n, i, this._api, e)
            }, this)
        }

        function s(t, e, i) {
            var n = this._api;
            D(this._componentsViews, function (o) {
                var a = o.__model;
                o[t](a, e, n, i), p(a, o)
            }, this), e.eachSeries(function (o, a) {
                var r = this._chartsMap[o.__viewId];
                r[t](o, e, n, i), p(o, r)
            }, this)
        }

        function l(t, e) {
            for (var i = "component" === t, n = i ? this._componentsViews : this._chartsViews, o = i ? this._componentsMap : this._chartsMap, a = this._zr, r = 0; r < n.length; r++)n[r].__alive = !1;
            e[i ? "eachComponent" : "eachSeries"](function (t, r) {
                if (i) {
                    if ("series" === t)return
                } else r = t;
                var s = r.id + "_" + r.type, l = o[s];
                if (!l) {
                    var h = _.parseClassType(r.type), u = i ? w.getClass(h.main, h.sub) : S.getClass(h.sub);
                    if (!u)return;
                    l = new u, l.init(e, this._api), o[s] = l, n.push(l), a.add(l.group)
                }
                r.__viewId = s, l.__alive = !0, l.__id = s, l.__model = r
            }, this);
            for (var r = 0; r < n.length;) {
                var s = n[r];
                s.__alive ? r++ : (a.remove(s.group), s.dispose(e, this._api), n.splice(r, 1), delete o[s.__id])
            }
        }

        function h(t, e) {
            D(k, function (i) {
                D(G[i] || [], function (i) {
                    i(t, e)
                })
            })
        }

        function u(t) {
            var e = {};
            t.eachSeries(function (t) {
                var i = t.get("stack"), n = t.getData();
                if (i && "list" === n.type) {
                    var o = e[i];
                    o && (n.stackedOn = o), e[i] = n
                }
            })
        }

        function c(t, e) {
            var i = this._api;
            D(B, function (n) {
                n(t, i, e)
            })
        }

        function d(t, e) {
            D(P, function (i) {
                D(H[i] || [], function (i) {
                    i(t, e)
                })
            })
        }

        function f(t, e) {
            var i = this._api;
            D(this._componentsViews, function (n) {
                var o = n.__model;
                n.render(o, t, i, e), p(o, n)
            }, this), D(this._chartsViews, function (t) {
                t.__alive = !1
            }, this), t.eachSeries(function (n, o) {
                var a = this._chartsMap[n.__viewId];
                a.__alive = !0, a.render(n, t, i, e), a.group.silent = !!n.get("silent"), p(n, a)
            }, this), D(this._chartsViews, function (e) {
                e.__alive || e.remove(t, i)
            }, this)
        }

        function p(t, e) {
            var i = t.get("z"), n = t.get("zlevel");
            e.group.traverse(function (t) {
                null != i && (t.z = i), null != n && (t.zlevel = n)
            })
        }

        function g(t) {
            function e(t, e) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n[a] = e
                }
            }

            var i = 0, n = 1, o = 2, a = "__connectUpdateStatus";
            I.each(N, function (r, s) {
                t._messageCenter.on(s, function (r) {
                    if (q[t.group] && t[a] !== i) {
                        var s = t.makeActionFromEvent(r), l = [];
                        for (var h in Z) {
                            var u = Z[h];
                            u !== t && u.group === t.group && l.push(u)
                        }
                        e(l, i), D(l, function (t) {
                            t[a] !== n && t.dispatchAction(s)
                        }), e(l, o)
                    }
                })
            })
        }

        /*!
         * ECharts, a javascript interactive chart library.
         *
         * Copyright (c) 2015, Baidu Inc.
         * All rights reserved.
         *
         * LICENSE
         * https://github.com/ecomfe/echarts/blob/master/LICENSE.txt
         */
        var m = i(111), v = i(78), y = i(23), x = i(112), _ = i(10), b = i(13), w = i(54), S = i(26), M = i(3), A = i(68), I = i(1), T = i(22), L = i(14), C = i(21), D = I.each, P = ["echarts", "chart", "component"], k = ["transform", "filter", "statistic"];
        o.prototype.on = n("on"), o.prototype.off = n("off"), o.prototype.one = n("one"), I.mixin(o, C);
        var z = a.prototype;
        z.getDom = function () {
            return this._dom
        }, z.getZr = function () {
            return this._zr
        }, z.setOption = function (t, e, i) {
            this._model && !e || (this._model = new m(null, null, this._theme, new x(this._api))), this._model.setOption(t, F), E.prepareAndUpdate.call(this), !i && this._zr.refreshImmediately()
        }, z.setTheme = function () {
            console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        }, z.getModel = function () {
            return this._model
        }, z.getOption = function () {
            return this._model.getOption()
        }, z.getWidth = function () {
            return this._zr.getWidth()
        }, z.getHeight = function () {
            return this._zr.getHeight()
        }, z.getRenderedCanvas = function (t) {
            if (L.canvasSupported) {
                t = t || {}, t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
                var e = this._zr, i = e.storage.getDisplayList();
                return I.each(i, function (t) {
                    t.stopAnimation(!0)
                }), e.painter.getRenderedCanvas(t)
            }
        }, z.getDataURL = function (t) {
            t = t || {};
            var e = t.excludeComponents, i = this._model, n = [], o = this;
            D(e, function (t) {
                i.eachComponent({mainType: t}, function (t) {
                    var e = o._componentsMap[t.__viewId];
                    e.group.ignore || (n.push(e), e.group.ignore = !0)
                })
            });
            var a = this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
            return D(n, function (t) {
                t.group.ignore = !1
            }), a
        }, z.getConnectedDataURL = function (t) {
            if (L.canvasSupported) {
                var e = this.group, i = Math.min, n = Math.max, o = 1 / 0;
                if (q[e]) {
                    var a = o, r = o, s = -o, l = -o, h = [], u = t && t.pixelRatio || 1;
                    for (var c in Z) {
                        var d = Z[c];
                        if (d.group === e) {
                            var f = d.getRenderedCanvas(I.clone(t)), p = d.getDom().getBoundingClientRect();
                            a = i(p.left, a), r = i(p.top, r), s = n(p.right, s), l = n(p.bottom, l), h.push({
                                dom: f,
                                left: p.left,
                                top: p.top
                            })
                        }
                    }
                    a *= u, r *= u, s *= u, l *= u;
                    var g = s - a, m = l - r, v = I.createCanvas();
                    v.width = g, v.height = m;
                    var y = A.init(v);
                    return D(h, function (t) {
                        var e = new M.Image({style: {x: t.left * u - a, y: t.top * u - r, image: t.dom}});
                        y.add(e)
                    }), y.refreshImmediately(), v.toDataURL("image/" + (t && t.type || "png"))
                }
                return this.getDataURL(t)
            }
        };
        var E = {
            update: function (t) {
                var e = this._model, i = this._api, n = this._coordSysMgr;
                if (e) {
                    e.restoreData(), n.create(this._model, this._api), h.call(this, e, i), u.call(this, e), n.update(e, i), c.call(this, e, t), d.call(this, e, t), f.call(this, e, t);
                    var o = e.get("backgroundColor") || "transparent", a = this._zr.painter;
                    if (a.isSingleCanvas && a.isSingleCanvas())this._zr.configLayer(0, {clearColor: o}); else {
                        if (!L.canvasSupported) {
                            var r = T.parse(o);
                            o = T.stringify(r, "rgb"), 0 === r[3] && (o = "transparent")
                        }
                        o = o, this._dom.style.backgroundColor = o
                    }
                }
            }, updateView: function (t) {
                var e = this._model;
                e && (c.call(this, e, t), d.call(this, e, t), s.call(this, "updateView", e, t))
            }, updateVisual: function (t) {
                var e = this._model;
                e && (d.call(this, e, t), s.call(this, "updateVisual", e, t))
            }, updateLayout: function (t) {
                var e = this._model;
                e && (c.call(this, e, t), s.call(this, "updateLayout", e, t))
            }, highlight: function (t) {
                r.call(this, "highlight", t)
            }, downplay: function (t) {
                r.call(this, "downplay", t)
            }, prepareAndUpdate: function (t) {
                var e = this._model;
                l.call(this, "component", e), l.call(this, "chart", e), E.update.call(this, t)
            }
        };
        z.resize = function () {
            this._zr.resize();
            var t = this._model && this._model.resetOption("media");
            E[t ? "prepareAndUpdate" : "update"].call(this), this._loadingFX && this._loadingFX.resize()
        };
        var O = i(110);
        z.showLoading = function (t, e) {
            I.isObject(t) && (e = t, t = "default"), this.hideLoading();
            var i = O(this._api, e), n = this._zr;
            this._loadingFX = i, n.add(i)
        }, z.hideLoading = function () {
            this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
        }, z.makeActionFromEvent = function (t) {
            var e = I.extend({}, t);
            return e.type = N[t.type], e
        }, z.dispatchAction = function (t, e) {
            var i = V[t.type];
            if (i) {
                var n = i.actionInfo, o = n.update || "update", a = [t], r = !1;
                t.batch && (r = !0, a = I.map(t.batch, function (e) {
                    return e = I.defaults(I.extend({}, e), t), e.batch = null, e
                }));
                for (var s, l = [], h = "highlight" === t.type || "downplay" === t.type, u = 0; u < a.length; u++) {
                    var c = a[u];
                    s = i.action(c, this._model), s = s || I.extend({}, c), s.type = n.event || s.type, l.push(s), h && E[o].call(this, c)
                }
                "none" !== o && !h && E[o].call(this, t), e || (s = r ? {
                    type: n.event || t.type,
                    batch: l
                } : l[0], this._messageCenter.trigger(s.type, s))
            }
        }, z.on = n("on"), z.off = n("off"), z.one = n("one");
        var R = ["click", "dblclick", "mouseover", "mouseout", "mousedown", "mouseup", "globalout"];
        z._initEvents = function () {
            D(R, function (t) {
                this._zr.on(t, function (e) {
                    var i = this.getModel(), n = e.target;
                    if (n && null != n.dataIndex) {
                        var o = n.dataModel || i.getSeriesByIndex(n.seriesIndex), a = o && o.getDataParams(n.dataIndex, n.dataType) || {};
                        a.event = e, a.type = t, this.trigger(t, a)
                    } else n && n.eventData && this.trigger(t, n.eventData)
                }, this)
            }, this), D(N, function (t, e) {
                this._messageCenter.on(e, function (t) {
                    this.trigger(e, t)
                }, this)
            }, this)
        }, z.isDisposed = function () {
            return this._disposed
        }, z.clear = function () {
            this.setOption({}, !0)
        }, z.dispose = function () {
            this._disposed = !0;
            var t = this._api, e = this._model;
            D(this._componentsViews, function (i) {
                i.dispose(e, t)
            }), D(this._chartsViews, function (i) {
                i.dispose(e, t)
            }), this._zr.dispose(), delete Z[this.id]
        }, I.mixin(a, C);
        var V = [], N = {}, B = [], G = {}, F = [], H = {}, W = {}, Z = {}, q = {}, j = new Date - 0, U = new Date - 0, X = "_echarts_instance_", Y = {
            version: "3.1.10",
            dependencies: {zrender: "3.1.0"}
        };
        Y.init = function (t, e, i) {
            if (A.version.replace(".", "") - 0 < Y.dependencies.zrender.replace(".", "") - 0)throw new Error("ZRender " + A.version + " is too old for ECharts " + Y.version + ". Current version need ZRender " + Y.dependencies.zrender + "+");
            if (!t)throw new Error("Initialize failed: invalid dom.");
            var n = new a(t, e, i);
            return n.id = "ec_" + j++, Z[n.id] = n, t.setAttribute && t.setAttribute(X, n.id), g(n), n
        }, Y.connect = function (t) {
            if (I.isArray(t)) {
                var e = t;
                t = null, I.each(e, function (e) {
                    null != e.group && (t = e.group)
                }), t = t || "g_" + U++, I.each(e, function (e) {
                    e.group = t
                })
            }
            return q[t] = !0, t
        }, Y.disConnect = function (t) {
            q[t] = !1
        }, Y.dispose = function (t) {
            I.isDom(t) ? t = Y.getInstanceByDom(t) : "string" == typeof t && (t = Z[t]), t instanceof a && !t.isDisposed() && t.dispose()
        }, Y.getInstanceByDom = function (t) {
            var e = t.getAttribute(X);
            return Z[e]
        }, Y.getInstanceById = function (t) {
            return Z[t]
        }, Y.registerTheme = function (t, e) {
            W[t] = e
        }, Y.registerPreprocessor = function (t) {
            F.push(t)
        }, Y.registerProcessor = function (t, e) {
            if (I.indexOf(k, t) < 0)throw new Error("stage should be one of " + k);
            var i = G[t] || (G[t] = []);
            i.push(e)
        }, Y.registerAction = function (t, e, i) {
            "function" == typeof e && (i = e, e = "");
            var n = I.isObject(t) ? t.type : [t, t = {event: e}][0];
            t.event = (t.event || n).toLowerCase(), e = t.event, V[n] || (V[n] = {action: i, actionInfo: t}), N[e] = n
        }, Y.registerCoordinateSystem = function (t, e) {
            y.register(t, e)
        }, Y.registerLayout = function (t) {
            I.indexOf(B, t) < 0 && B.push(t)
        }, Y.registerVisualCoding = function (t, e) {
            if (I.indexOf(P, t) < 0)throw new Error("stage should be one of " + P);
            var i = H[t] || (H[t] = []);
            i.push(e)
        }, Y.extendChartView = function (t) {
            return S.extend(t)
        }, Y.extendComponentModel = function (t) {
            return _.extend(t)
        }, Y.extendSeriesModel = function (t) {
            return b.extend(t)
        }, Y.extendComponentView = function (t) {
            return w.extend(t)
        }, Y.setCanvasCreator = function (t) {
            I.createCanvas = t
        }, Y.registerVisualCoding("echarts", I.curry(i(74), "", "itemStyle")), Y.registerPreprocessor(i(119)), Y.registerAction({
            type: "highlight",
            event: "highlight",
            update: "highlight"
        }, I.noop), Y.registerAction({
            type: "downplay",
            event: "downplay",
            update: "downplay"
        }, I.noop), Y.graphic = i(3), Y.number = i(4), Y.format = i(9), Y.matrix = i(19), Y.vector = i(5), Y.util = {}, D(["map", "each", "filter", "indexOf", "inherits", "reduce", "filter", "bind", "curry", "isArray", "isString", "isObject", "isFunction", "extend"], function (t) {
            Y.util[t] = I[t]
        }), t.exports = Y
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return null != t && "none" != t
        }

        function o(t) {
            return t instanceof S ? t : _.lift(t, -.1)
        }

        function a(t) {
            if (t.__hoverStlDirty) {
                var e = t.style.stroke, i = t.style.fill, a = t.__hoverStl;
                a.fill = a.fill || (n(i) ? o(i) : null), a.stroke = a.stroke || (n(e) ? o(e) : null);
                var r = {};
                for (var s in a)a.hasOwnProperty(s) && (r[s] = t.style[s]);
                t.__normalStl = r, t.__hoverStlDirty = !1
            }
        }

        function r(t) {
            t.__isHover || (a(t), t.setStyle(t.__hoverStl), t.z2 += 1, t.__isHover = !0)
        }

        function s(t) {
            if (t.__isHover) {
                var e = t.__normalStl;
                e && t.setStyle(e), t.z2 -= 1, t.__isHover = !1
            }
        }

        function l(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && r(t)
            }) : r(t)
        }

        function h(t) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && s(t)
            }) : s(t)
        }

        function u(t, e) {
            t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && a(t)
        }

        function c() {
            !this.__isEmphasis && l(this)
        }

        function d() {
            !this.__isEmphasis && h(this)
        }

        function f() {
            this.__isEmphasis = !0, l(this)
        }

        function p() {
            this.__isEmphasis = !1, h(this)
        }

        function g(t, e, i, n, o, a) {
            "function" == typeof o && (a = o, o = null);
            var r = t ? "Update" : "", s = n && n.getShallow("animationDuration" + r), l = n && n.getShallow("animationEasing" + r), h = n && n.getShallow("animationDelay" + r);
            "function" == typeof h && (h = h(o)), n && n.getShallow("animation") ? e.animateTo(i, s, h || 0, l, a) : (e.attr(i), a && a())
        }

        var m = i(1), v = i(156), y = Math.round, x = i(6), _ = i(22), b = i(19), w = i(5), S = i(17), M = {};
        M.Group = i(27), M.Image = i(46), M.Text = i(66), M.Circle = i(147), M.Sector = i(153), M.Ring = i(152), M.Polygon = i(149), M.Polyline = i(150), M.Rect = i(151), M.Line = i(148), M.BezierCurve = i(146), M.Arc = i(145), M.CompoundPath = i(140), M.LinearGradient = i(76), M.RadialGradient = i(141), M.BoundingRect = i(8), M.extendShape = function (t) {
            return x.extend(t)
        }, M.extendPath = function (t, e) {
            return v.extendFromString(t, e)
        }, M.makePath = function (t, e, i, n) {
            var o = v.createFromString(t, e), a = o.getBoundingRect();
            if (i) {
                var r = a.width / a.height;
                if ("center" === n) {
                    var s, l = i.height * r;
                    l <= i.width ? s = i.height : (l = i.width, s = l / r);
                    var h = i.x + i.width / 2, u = i.y + i.height / 2;
                    i.x = h - l / 2, i.y = u - s / 2, i.width = l, i.height = s
                }
                this.resizePath(o, i)
            }
            return o
        }, M.mergePath = v.mergePath, M.resizePath = function (t, e) {
            if (t.applyTransform) {
                var i = t.getBoundingRect(), n = i.calculateTransform(e);
                t.applyTransform(n)
            }
        }, M.subPixelOptimizeLine = function (t) {
            var e = M.subPixelOptimize, i = t.shape, n = t.style.lineWidth;
            return y(2 * i.x1) === y(2 * i.x2) && (i.x1 = i.x2 = e(i.x1, n, !0)), y(2 * i.y1) === y(2 * i.y2) && (i.y1 = i.y2 = e(i.y1, n, !0)), t
        }, M.subPixelOptimizeRect = function (t) {
            var e = M.subPixelOptimize, i = t.shape, n = t.style.lineWidth, o = i.x, a = i.y, r = i.width, s = i.height;
            return i.x = e(i.x, n, !0), i.y = e(i.y, n, !0), i.width = Math.max(e(o + r, n, !1) - i.x, 0 === r ? 0 : 1), i.height = Math.max(e(a + s, n, !1) - i.y, 0 === s ? 0 : 1), t
        }, M.subPixelOptimize = function (t, e, i) {
            var n = y(2 * t);
            return (n + y(e)) % 2 === 0 ? n / 2 : (n + (i ? 1 : -1)) / 2
        }, M.setHoverStyle = function (t, e) {
            "group" === t.type ? t.traverse(function (t) {
                "group" !== t.type && u(t, e)
            }) : u(t, e), t.on("mouseover", c).on("mouseout", d), t.on("emphasis", f).on("normal", p)
        }, M.setText = function (t, e, i) {
            var n = e.getShallow("position") || "inside", o = n.indexOf("inside") >= 0 ? "white" : i, a = e.getModel("textStyle");
            m.extend(t, {
                textDistance: e.getShallow("distance") || 5,
                textFont: a.getFont(),
                textPosition: n,
                textFill: a.getTextColor() || o
            })
        }, M.updateProps = m.curry(g, !0), M.initProps = m.curry(g, !1), M.getTransform = function (t, e) {
            for (var i = b.identity([]); t && t !== e;)b.mul(i, t.getLocalTransform(), i), t = t.parent;
            return i
        }, M.applyTransform = function (t, e, i) {
            return i && (e = b.invert([], e)), w.applyTransform([], t, e)
        }, M.transformDirection = function (t, e, i) {
            var n = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]), o = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]), a = ["left" === t ? -n : "right" === t ? n : 0, "top" === t ? -o : "bottom" === t ? o : 0];
            return a = M.applyTransform(a, e, i), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
        }, t.exports = M
    }, function (t, e) {
        function i(t) {
            return t.replace(/^\s+/, "").replace(/\s+$/, "")
        }

        var n = {}, o = 1e-4;
        n.linearMap = function (t, e, i, n) {
            var o = e[1] - e[0], a = i[1] - i[0];
            if (0 === o)return 0 === a ? i[0] : (i[0] + i[1]) / 2;
            if (n)if (o > 0) {
                if (t <= e[0])return i[0];
                if (t >= e[1])return i[1]
            } else {
                if (t >= e[0])return i[0];
                if (t <= e[1])return i[1]
            } else {
                if (t === e[0])return i[0];
                if (t === e[1])return i[1]
            }
            return (t - e[0]) / o * a + i[0]
        }, n.parsePercent = function (t, e) {
            switch (t) {
                case"center":
                case"middle":
                    t = "50%";
                    break;
                case"left":
                case"top":
                    t = "0%";
                    break;
                case"right":
                case"bottom":
                    t = "100%"
            }
            return "string" == typeof t ? i(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
        }, n.round = function (t) {
            return +(+t).toFixed(10)
        }, n.asc = function (t) {
            return t.sort(function (t, e) {
                return t - e
            }), t
        }, n.getPrecision = function (t) {
            if (isNaN(t))return 0;
            for (var e = 1, i = 0; Math.round(t * e) / e !== t;)e *= 10, i++;
            return i
        }, n.getPixelPrecision = function (t, e) {
            var i = Math.log, n = Math.LN10, o = Math.floor(i(t[1] - t[0]) / n), a = Math.round(i(Math.abs(e[1] - e[0])) / n);
            return Math.max(-o + a, 0)
        }, n.MAX_SAFE_INTEGER = 9007199254740991, n.remRadian = function (t) {
            var e = 2 * Math.PI;
            return (t % e + e) % e
        }, n.isRadianAroundZero = function (t) {
            return t > -o && o > t
        }, n.parseDate = function (t) {
            return t instanceof Date ? t : new Date("string" == typeof t ? t.replace(/-/g, "/") : Math.round(t))
        }, n.quantity = function (t) {
            return Math.pow(10, Math.floor(Math.log(t) / Math.LN10))
        }, n.nice = function (t, e) {
            var i, o = n.quantity(t), a = t / o;
            return i = e ? 1.5 > a ? 1 : 2.5 > a ? 2 : 4 > a ? 3 : 7 > a ? 5 : 10 : 1 > a ? 1 : 2 > a ? 2 : 3 > a ? 3 : 5 > a ? 5 : 10, i * o
        }, t.exports = n
    }, function (t, e) {
        var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
            create: function (t, e) {
                var n = new i(2);
                return n[0] = t || 0, n[1] = e || 0, n
            }, copy: function (t, e) {
                return t[0] = e[0], t[1] = e[1], t
            }, clone: function (t) {
                var e = new i(2);
                return e[0] = t[0], e[1] = t[1], e
            }, set: function (t, e, i) {
                return t[0] = e, t[1] = i, t
            }, add: function (t, e, i) {
                return t[0] = e[0] + i[0], t[1] = e[1] + i[1], t
            }, scaleAndAdd: function (t, e, i, n) {
                return t[0] = e[0] + i[0] * n, t[1] = e[1] + i[1] * n, t
            }, sub: function (t, e, i) {
                return t[0] = e[0] - i[0], t[1] = e[1] - i[1], t
            }, len: function (t) {
                return Math.sqrt(this.lenSquare(t))
            }, lenSquare: function (t) {
                return t[0] * t[0] + t[1] * t[1]
            }, mul: function (t, e, i) {
                return t[0] = e[0] * i[0], t[1] = e[1] * i[1], t
            }, div: function (t, e, i) {
                return t[0] = e[0] / i[0], t[1] = e[1] / i[1], t
            }, dot: function (t, e) {
                return t[0] * e[0] + t[1] * e[1]
            }, scale: function (t, e, i) {
                return t[0] = e[0] * i, t[1] = e[1] * i, t
            }, normalize: function (t, e) {
                var i = n.len(e);
                return 0 === i ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / i, t[1] = e[1] / i), t
            }, distance: function (t, e) {
                return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
            }, distanceSquare: function (t, e) {
                return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
            }, negate: function (t, e) {
                return t[0] = -e[0], t[1] = -e[1], t
            }, lerp: function (t, e, i, n) {
                return t[0] = e[0] + n * (i[0] - e[0]), t[1] = e[1] + n * (i[1] - e[1]), t
            }, applyTransform: function (t, e, i) {
                var n = e[0], o = e[1];
                return t[0] = i[0] * n + i[2] * o + i[4], t[1] = i[1] * n + i[3] * o + i[5], t
            }, min: function (t, e, i) {
                return t[0] = Math.min(e[0], i[0]), t[1] = Math.min(e[1], i[1]), t
            }, max: function (t, e, i) {
                return t[0] = Math.max(e[0], i[0]), t[1] = Math.max(e[1], i[1]), t
            }
        };
        n.length = n.len, n.lengthSquare = n.lenSquare, n.dist = n.distance, n.distSquare = n.distanceSquare, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            var e = t.fill;
            return null != e && "none" !== e
        }

        function o(t) {
            var e = t.stroke;
            return null != e && "none" !== e && t.lineWidth > 0
        }

        function a(t) {
            r.call(this, t), this.path = new l
        }

        var r = i(37), s = i(1), l = i(28), h = i(136), u = (i(17), Math.abs);
        a.prototype = {
            constructor: a, type: "path", __dirtyPath: !0, strokeContainThreshold: 5, brush: function (t) {
                t.save();
                var e = this.style, i = this.path, a = o(e), r = n(e), s = r && !!e.fill.colorStops, l = a && !!e.stroke.colorStops;
                if (e.bind(t, this), this.setTransform(t), this.__dirtyPath) {
                    var h = this.getBoundingRect();
                    s && (this._fillGradient = e.getGradient(t, e.fill, h)), l && (this._strokeGradient = e.getGradient(t, e.stroke, h))
                }
                s && (t.fillStyle = this._fillGradient), l && (t.strokeStyle = this._strokeGradient);
                var u = e.lineDash, c = e.lineDashOffset, d = !!t.setLineDash, f = this.getGlobalScale();
                i.setScale(f[0], f[1]), this.__dirtyPath || u && !d && a ? (i = this.path.beginPath(t), u && !d && (i.setLineDash(u), i.setLineDashOffset(c)), this.buildPath(i, this.shape), this.__dirtyPath = !1) : (t.beginPath(), this.path.rebuildPath(t)), r && i.fill(t), u && d && (t.setLineDash(u), t.lineDashOffset = c), a && i.stroke(t), null != e.text && this.drawRectText(t, this.getBoundingRect()), t.restore()
            }, buildPath: function (t, e) {
            }, getBoundingRect: function () {
                var t = this._rect, e = this.style, i = !t;
                if (i) {
                    var a = this.path;
                    this.__dirtyPath && (a.beginPath(), this.buildPath(a, this.shape)), t = a.getBoundingRect()
                }
                if (this._rect = t, o(e)) {
                    var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this.__dirty || i) {
                        r.copy(t);
                        var s = e.lineWidth, l = e.strokeNoScale ? this.getLineScale() : 1;
                        n(e) || (s = Math.max(s, this.strokeContainThreshold)), l > 1e-10 && (r.width += s / l, r.height += s / l, r.x -= s / l / 2, r.y -= s / l / 2)
                    }
                    return r
                }
                return t
            }, contain: function (t, e) {
                var i = this.transformCoordToLocal(t, e), a = this.getBoundingRect(), r = this.style;
                if (t = i[0], e = i[1], a.contain(t, e)) {
                    var s = this.path.data;
                    if (o(r)) {
                        var l = r.lineWidth, u = r.strokeNoScale ? this.getLineScale() : 1;
                        if (u > 1e-10 && (n(r) || (l = Math.max(l, this.strokeContainThreshold)), h.containStroke(s, l / u, t, e)))return !0
                    }
                    if (n(r))return h.contain(s, t, e)
                }
                return !1
            }, dirty: function (t) {
                0 === arguments.length && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
            }, animateShape: function (t) {
                return this.animate("shape", t)
            }, attrKV: function (t, e) {
                "shape" === t ? this.setShape(e) : r.prototype.attrKV.call(this, t, e)
            }, setShape: function (t, e) {
                var i = this.shape;
                if (i) {
                    if (s.isObject(t))for (var n in t)i[n] = t[n]; else i[t] = e;
                    this.dirty(!0)
                }
                return this
            }, getLineScale: function () {
                var t = this.transform;
                return t && u(t[0] - 1) > 1e-10 && u(t[3] - 1) > 1e-10 ? Math.sqrt(u(t[0] * t[3] - t[2] * t[1])) : 1
            }
        }, a.extend = function (t) {
            var e = function (e) {
                a.call(this, e), t.style && this.style.extendFrom(t.style, !1);
                var i = t.shape;
                if (i) {
                    this.shape = this.shape || {};
                    var n = this.shape;
                    for (var o in i)!n.hasOwnProperty(o) && i.hasOwnProperty(o) && (n[o] = i[o])
                }
                t.init && t.init.call(this, e)
            };
            s.inherits(e, a);
            for (var i in t)"style" !== i && "shape" !== i && (e.prototype[i] = t[i]);
            return e
        }, s.inherits(a, r), t.exports = a
    }, function (t, e, i) {
        var n = i(9), o = i(4), a = i(1), r = ["x", "y", "z", "radius", "angle"], s = {};
        s.createNameEach = function (t, e) {
            t = t.slice();
            var i = a.map(t, s.capitalFirst);
            e = (e || []).slice();
            var n = a.map(e, s.capitalFirst);
            return function (o, r) {
                a.each(t, function (t, a) {
                    for (var s = {name: t, capital: i[a]}, l = 0; l < e.length; l++)s[e[l]] = t + n[l];
                    o.call(r, s)
                })
            }
        }, s.capitalFirst = function (t) {
            return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
        }, s.eachAxisDim = s.createNameEach(r, ["axisIndex", "axis", "index"]), s.normalizeToArray = function (t) {
            return a.isArray(t) ? t : null == t ? [] : [t]
        }, s.createLinkedNodesFinder = function (t, e, i) {
            function n(t, e) {
                return a.indexOf(e.nodes, t) >= 0
            }

            function o(t, n) {
                var o = !1;
                return e(function (e) {
                    a.each(i(t, e) || [], function (t) {
                        n.records[e.name][t] && (o = !0)
                    })
                }), o
            }

            function r(t, n) {
                n.nodes.push(t), e(function (e) {
                    a.each(i(t, e) || [], function (t) {
                        n.records[e.name][t] = !0
                    })
                })
            }

            return function (i) {
                function a(t) {
                    !n(t, s) && o(t, s) && (r(t, s), l = !0)
                }

                var s = {nodes: [], records: {}};
                if (e(function (t) {
                        s.records[t.name] = {}
                    }), !i)return s;
                r(i, s);
                var l;
                do l = !1, t(a); while (l);
                return s
            }
        }, s.defaultEmphasis = function (t, e) {
            if (t) {
                var i = t.emphasis = t.emphasis || {}, n = t.normal = t.normal || {};
                a.each(e, function (t) {
                    var e = a.retrieve(i[t], n[t]);
                    null != e && (i[t] = e)
                })
            }
        }, s.LABEL_OPTIONS = ["position", "show", "textStyle", "distance", "formatter"], s.getDataItemValue = function (t) {
            return t && (null == t.value ? t : t.value)
        }, s.converDataValue = function (t, e) {
            var i = e && e.type;
            return "ordinal" === i ? t : ("time" !== i || isFinite(t) || null == t || "-" === t || (t = +o.parseDate(t)), null == t || "" === t ? NaN : +t)
        }, s.dataFormatMixin = {
            getDataParams: function (t, e) {
                var i = this.getData(e), n = this.seriesIndex, o = this.name, a = this.getRawValue(t, e), r = i.getRawIndex(t), s = i.getName(t, !0), l = i.getRawDataItem(t);
                return {
                    componentType: this.mainType,
                    componentSubType: this.subType,
                    seriesType: "series" === this.mainType ? this.subType : null,
                    seriesIndex: n,
                    seriesName: o,
                    name: s,
                    dataIndex: r,
                    data: l,
                    dataType: e,
                    value: a,
                    color: i.getItemVisual(t, "color"),
                    $vars: ["seriesName", "name", "value"]
                }
            }, getFormattedLabel: function (t, e, i, o) {
                e = e || "normal";
                var r = this.getData(i), s = r.getItemModel(t), l = this.getDataParams(t, i);
                null != o && a.isArray(l.value) && (l.value = l.value[o]);
                var h = s.get(["label", e, "formatter"]);
                return "function" == typeof h ? (l.status = e, h(l)) : "string" == typeof h ? n.formatTpl(h, l) : void 0
            }, getRawValue: function (t, e) {
                var i = this.getData(e), n = i.getRawDataItem(t);
                return null != n ? a.isObject(n) && !a.isArray(n) ? n.value : n : void 0
            }, formatTooltip: a.noop
        }, s.mappingToExists = function (t, e) {
            e = (e || []).slice();
            var i = a.map(t || [], function (t, e) {
                return {exist: t}
            });
            return a.each(e, function (t, n) {
                if (a.isObject(t))for (var o = 0; o < i.length; o++) {
                    var r = i[o].exist;
                    if (!i[o].option && (null != t.id && r.id === t.id + "" || null != t.name && !s.isIdInner(t) && !s.isIdInner(r) && r.name === t.name + "")) {
                        i[o].option = t, e[n] = null;
                        break
                    }
                }
            }), a.each(e, function (t, e) {
                if (a.isObject(t)) {
                    for (var n = 0; n < i.length; n++) {
                        var o = i[n].exist;
                        if (!i[n].option && !s.isIdInner(o) && null == t.id) {
                            i[n].option = t;
                            break
                        }
                    }
                    n >= i.length && i.push({option: t})
                }
            }), i
        }, s.isIdInner = function (t) {
            return a.isObject(t) && t.id && 0 === (t.id + "").indexOf("\x00_ec_\x00")
        }, t.exports = s
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n) {
            this.x = t, this.y = e, this.width = i, this.height = n
        }

        var o = i(5), a = i(19), r = o.applyTransform, s = Math.min, l = Math.abs, h = Math.max;
        n.prototype = {
            constructor: n, union: function (t) {
                var e = s(t.x, this.x), i = s(t.y, this.y);
                this.width = h(t.x + t.width, this.x + this.width) - e, this.height = h(t.y + t.height, this.y + this.height) - i, this.x = e, this.y = i
            }, applyTransform: function () {
                var t = [], e = [];
                return function (i) {
                    i && (t[0] = this.x, t[1] = this.y, e[0] = this.x + this.width, e[1] = this.y + this.height, r(t, t, i), r(e, e, i), this.x = s(t[0], e[0]), this.y = s(t[1], e[1]), this.width = l(e[0] - t[0]), this.height = l(e[1] - t[1]))
                }
            }(), calculateTransform: function (t) {
                var e = this, i = t.width / e.width, n = t.height / e.height, o = a.create();
                return a.translate(o, o, [-e.x, -e.y]), a.scale(o, o, [i, n]), a.translate(o, o, [t.x, t.y]), o
            }, intersect: function (t) {
                var e = this, i = e.x, n = e.x + e.width, o = e.y, a = e.y + e.height, r = t.x, s = t.x + t.width, l = t.y, h = t.y + t.height;
                return !(r > n || i > s || l > a || o > h)
            }, contain: function (t, e) {
                var i = this;
                return t >= i.x && t <= i.x + i.width && e >= i.y && e <= i.y + i.height
            }, clone: function () {
                return new n(this.x, this.y, this.width, this.height)
            }, copy: function (t) {
                this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return isNaN(t) ? "-" : (t = (t + "").split("."), t[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : ""))
        }

        function o(t) {
            return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                return e.toUpperCase()
            })
        }

        function a(t) {
            var e = t.length;
            return "number" == typeof t ? [t, t, t, t] : 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
        }

        function r(t) {
            return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
        }

        function s(t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }

        function l(t, e) {
            c.isArray(e) || (e = [e]);
            var i = e.length;
            if (!i)return "";
            for (var n = e[0].$vars, o = 0; o < n.length; o++) {
                var a = f[o];
                t = t.replace(s(a), s(a, 0))
            }
            for (var r = 0; i > r; r++)for (var l = 0; l < n.length; l++)t = t.replace(s(f[l], r), e[r][n[l]]);
            return t
        }

        function h(t, e) {
            "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
            var i = d.parseDate(e), n = i.getFullYear(), o = i.getMonth() + 1, a = i.getDate(), r = i.getHours(), s = i.getMinutes(), l = i.getSeconds();
            return t = t.replace("MM", u(o)).toLowerCase().replace("yyyy", n).replace("yy", n % 100).replace("dd", u(a)).replace("d", a).replace("hh", u(r)).replace("h", r).replace("mm", u(s)).replace("m", s).replace("ss", u(l)).replace("s", l)
        }

        function u(t) {
            return 10 > t ? "0" + t : t
        }

        var c = i(1), d = i(4), f = ["a", "b", "c", "d", "e", "f", "g"];
        t.exports = {normalizeCssArray: a, addCommas: n, toCamelCase: o, encodeHTML: r, formatTpl: l, formatTime: h}
    }, function (t, e, i) {
        function n(t) {
            var e = [];
            return a.each(u.getClassesByMainType(t), function (t) {
                r.apply(e, t.prototype.dependencies || [])
            }), a.map(e, function (t) {
                return l.parseClassType(t).main
            })
        }

        var o = i(12), a = i(1), r = Array.prototype.push, s = i(42), l = i(20), h = i(11), u = o.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            init: function (t, e, i, n) {
                this.mergeDefaultAndTheme(this.option, this.ecModel)
            },
            mergeDefaultAndTheme: function (t, e) {
                var i = this.layoutMode, n = i ? h.getLayoutParams(t) : {}, o = e.getTheme();
                a.merge(t, o.get(this.mainType)), a.merge(t, this.getDefaultOption()), i && h.mergeLayoutParam(t, n, i)
            },
            mergeOption: function (t) {
                a.merge(this.option, t, !0);
                var e = this.layoutMode;
                e && h.mergeLayoutParam(this.option, t, e)
            },
            optionUpdated: function (t) {
            },
            getDefaultOption: function () {
                if (!this.hasOwnProperty("__defaultOption")) {
                    for (var t = [], e = this.constructor; e;) {
                        var i = e.prototype.defaultOption;
                        i && t.push(i), e = e.superClass
                    }
                    for (var n = {}, o = t.length - 1; o >= 0; o--)n = a.merge(n, t[o], !0);
                    this.__defaultOption = n
                }
                return this.__defaultOption
            }
        });
        l.enableClassExtend(u, function (t, e, i, n) {
            a.extend(this, n), this.uid = s.getUID("componentModel")
        }), l.enableClassManagement(u, {registerWhenExtend: !0}), s.enableSubTypeDefaulter(u), s.enableTopologicalTravel(u, n), a.mixin(u, i(115)), t.exports = u
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n, o) {
            var a = 0, r = 0;
            null == n && (n = 1 / 0), null == o && (o = 1 / 0);
            var s = 0;
            e.eachChild(function (l, h) {
                var u, c, d = l.position, f = l.getBoundingRect(), p = e.childAt(h + 1), g = p && p.getBoundingRect();
                if ("horizontal" === t) {
                    var m = f.width + (g ? -g.x + f.x : 0);
                    u = a + m, u > n || l.newline ? (a = 0, u = m, r += s + i, s = f.height) : s = Math.max(s, f.height)
                } else {
                    var v = f.height + (g ? -g.y + f.y : 0);
                    c = r + v, c > o || l.newline ? (a += s + i, r = 0, c = v, s = f.width) : s = Math.max(s, f.width)
                }
                l.newline || (d[0] = a, d[1] = r, "horizontal" === t ? a = u + i : r = c + i)
            })
        }

        var o = i(1), a = i(8), r = i(4), s = i(9), l = r.parsePercent, h = o.each, u = {}, c = ["left", "right", "top", "bottom", "width", "height"];
        u.box = n, u.vbox = o.curry(n, "vertical"), u.hbox = o.curry(n, "horizontal"), u.getAvailableSize = function (t, e, i) {
            var n = e.width, o = e.height, a = l(t.x, n), r = l(t.y, o), h = l(t.x2, n), u = l(t.y2, o);
            return (isNaN(a) || isNaN(parseFloat(t.x))) && (a = 0), (isNaN(h) || isNaN(parseFloat(t.x2))) && (h = n), (isNaN(r) || isNaN(parseFloat(t.y))) && (r = 0), (isNaN(u) || isNaN(parseFloat(t.y2))) && (u = o), i = s.normalizeCssArray(i || 0), {
                width: Math.max(h - a - i[1] - i[3], 0),
                height: Math.max(u - r - i[0] - i[2], 0)
            }
        }, u.getLayoutRect = function (t, e, i) {
            i = s.normalizeCssArray(i || 0);
            var n = e.width, o = e.height, r = l(t.left, n), h = l(t.top, o), u = l(t.right, n), c = l(t.bottom, o), d = l(t.width, n), f = l(t.height, o), p = i[2] + i[0], g = i[1] + i[3], m = t.aspect;
            switch (isNaN(d) && (d = n - u - g - r), isNaN(f) && (f = o - c - p - h), isNaN(d) && isNaN(f) && (m > n / o ? d = .8 * n : f = .8 * o), null != m && (isNaN(d) && (d = m * f), isNaN(f) && (f = d / m)), isNaN(r) && (r = n - u - d - g), isNaN(h) && (h = o - c - f - p), t.left || t.right) {
                case"center":
                    r = n / 2 - d / 2 - i[3];
                    break;
                case"right":
                    r = n - d - g
            }
            switch (t.top || t.bottom) {
                case"middle":
                case"center":
                    h = o / 2 - f / 2 - i[0];
                    break;
                case"bottom":
                    h = o - f - p
            }
            r = r || 0, h = h || 0, isNaN(d) && (d = n - r - (u || 0)), isNaN(f) && (f = o - h - (c || 0));
            var v = new a(r + i[3], h + i[0], d, f);
            return v.margin = i, v
        }, u.positionGroup = function (t, e, i, n) {
            var a = t.getBoundingRect();
            e = o.extend(o.clone(e), {
                width: a.width,
                height: a.height
            }), e = u.getLayoutRect(e, i, n), t.position = [e.x - a.x, e.y - a.y]
        }, u.mergeLayoutParam = function (t, e, i) {
            function n(n) {
                var o = {}, s = 0, l = {}, u = 0, c = i.ignoreSize ? 1 : 2;
                if (h(n, function (e) {
                        l[e] = t[e]
                    }), h(n, function (t) {
                        a(e, t) && (o[t] = l[t] = e[t]), r(o, t) && s++, r(l, t) && u++
                    }), u !== c && s) {
                    if (s >= c)return o;
                    for (var d = 0; d < n.length; d++) {
                        var f = n[d];
                        if (!a(o, f) && a(t, f)) {
                            o[f] = t[f];
                            break
                        }
                    }
                    return o
                }
                return l
            }

            function a(t, e) {
                return t.hasOwnProperty(e)
            }

            function r(t, e) {
                return null != t[e] && "auto" !== t[e]
            }

            function s(t, e, i) {
                h(t, function (t) {
                    e[t] = i[t]
                })
            }

            !o.isObject(i) && (i = {});
            var l = ["width", "left", "right"], u = ["height", "top", "bottom"], c = n(l), d = n(u);
            s(l, t, c), s(u, t, d)
        }, u.getLayoutParams = function (t) {
            return u.copyLayoutParams({}, t)
        }, u.copyLayoutParams = function (t, e) {
            return e && t && h(c, function (i) {
                e.hasOwnProperty(i) && (t[i] = e[i])
            }), t
        }, t.exports = u
    }, function (t, e, i) {
        function n(t, e, i, n) {
            this.parentModel = e, this.ecModel = i, this.option = t, this.init && (arguments.length <= 4 ? this.init(t, e, i, n) : this.init.apply(this, arguments))
        }

        var o = i(1), a = i(20);
        n.prototype = {
            constructor: n, init: null, mergeOption: function (t) {
                o.merge(this.option, t, !0)
            }, get: function (t, e) {
                if (!t)return this.option;
                "string" == typeof t && (t = t.split("."));
                for (var i = this.option, n = this.parentModel, o = 0; o < t.length && (!t[o] || (i = i && "object" == typeof i ? i[t[o]] : null, null != i)); o++);
                return null == i && n && !e && (i = n.get(t)), i
            }, getShallow: function (t, e) {
                var i = this.option, n = i && i[t], o = this.parentModel;
                return null == n && o && !e && (n = o.getShallow(t)), n
            }, getModel: function (t, e) {
                var i = this.get(t, !0), o = this.parentModel, a = new n(i, e || o && o.getModel(t), this.ecModel);
                return a
            }, isEmpty: function () {
                return null == this.option
            }, restoreData: function () {
            }, clone: function () {
                var t = this.constructor;
                return new t(o.clone(this.option))
            }, setReadOnly: function (t) {
                a.setReadOnly(this, t)
            }
        }, a.enableClassExtend(n);
        var r = o.mixin;
        r(n, i(117)), r(n, i(114)), r(n, i(118)), r(n, i(116)), t.exports = n
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(9), a = i(7), r = i(10), s = o.encodeHTML, l = o.addCommas, h = r.extend({
            type: "series.__base__",
            seriesIndex: 0,
            coordinateSystem: null,
            defaultOption: null,
            legendDataProvider: null,
            init: function (t, e, i, n) {
                this.seriesIndex = this.componentIndex, this.mergeDefaultAndTheme(t, i), this._dataBeforeProcessed = this.getInitialData(t, i), this._data = this._dataBeforeProcessed.cloneShallow()
            },
            mergeDefaultAndTheme: function (t, e) {
                n.merge(t, e.getTheme().get(this.subType)), n.merge(t, this.getDefaultOption()), a.defaultEmphasis(t.label, a.LABEL_OPTIONS), this.fillDataTextStyle(t.data)
            },
            mergeOption: function (t, e) {
                t = n.merge(this.option, t, !0), this.fillDataTextStyle(t.data);
                var i = this.getInitialData(t, e);
                i && (this._data = i, this._dataBeforeProcessed = i.cloneShallow())
            },
            fillDataTextStyle: function (t) {
                if (t)for (var e = 0; e < t.length; e++)t[e] && t[e].label && a.defaultEmphasis(t[e].label, a.LABEL_OPTIONS)
            },
            getInitialData: function () {
            },
            getData: function (t) {
                return null == t ? this._data : this._data.getLinkedData(t)
            },
            setData: function (t) {
                this._data = t
            },
            getRawData: function () {
                return this._dataBeforeProcessed
            },
            coordDimToDataDim: function (t) {
                return [t]
            },
            dataDimToCoordDim: function (t) {
                return t
            },
            getBaseAxis: function () {
                var t = this.coordinateSystem;
                return t && t.getBaseAxis && t.getBaseAxis()
            },
            formatTooltip: function (t, e, i) {
                var o = this._data, a = this.getRawValue(t), r = n.isArray(a) ? n.map(a, l).join(", ") : l(a), h = o.getName(t), u = o.getItemVisual(t, "color"), c = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + u + '"></span>', d = this.name;
                return "\x00-" === d && (d = ""), e ? c + s(this.name) + " : " + r : (d && s(d) + "<br />") + c + (h ? s(h) + " : " + r : r)
            },
            restoreData: function () {
                this._data = this._dataBeforeProcessed.cloneShallow()
            },
            getAxisTooltipDataIndex: null
        });
        n.mixin(h, a.dataFormatMixin), t.exports = h
    }, function (t, e) {
        function i(t) {
            var e = {}, i = {}, n = t.match(/Web[kK]it[\/]{0,1}([\d.]+)/), o = t.match(/(Android);?[\s\/]+([\d.]+)?/), a = t.match(/(iPad).*OS\s([\d_]+)/), r = t.match(/(iPod)(.*OS\s([\d_]+))?/), s = !a && t.match(/(iPhone\sOS)\s([\d_]+)/), l = t.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), h = l && t.match(/TouchPad/), u = t.match(/Kindle\/([\d.]+)/), c = t.match(/Silk\/([\d._]+)/), d = t.match(/(BlackBerry).*Version\/([\d.]+)/), f = t.match(/(BB10).*Version\/([\d.]+)/), p = t.match(/(RIM\sTablet\sOS)\s([\d.]+)/), g = t.match(/PlayBook/), m = t.match(/Chrome\/([\d.]+)/) || t.match(/CriOS\/([\d.]+)/), v = t.match(/Firefox\/([\d.]+)/), y = n && t.match(/Mobile\//) && !m, x = t.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/) && !m, _ = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), b = t.match(/Edge\/([\d.]+)/);
            return (i.webkit = !!n) && (i.version = n[1]), o && (e.android = !0, e.version = o[2]), s && !r && (e.ios = e.iphone = !0, e.version = s[2].replace(/_/g, ".")), a && (e.ios = e.ipad = !0, e.version = a[2].replace(/_/g, ".")), r && (e.ios = e.ipod = !0, e.version = r[3] ? r[3].replace(/_/g, ".") : null), l && (e.webos = !0, e.version = l[2]), h && (e.touchpad = !0), d && (e.blackberry = !0, e.version = d[2]), f && (e.bb10 = !0, e.version = f[2]), p && (e.rimtabletos = !0, e.version = p[2]), g && (i.playbook = !0), u && (e.kindle = !0, e.version = u[1]), c && (i.silk = !0, i.version = c[1]), !c && e.android && t.match(/Kindle Fire/) && (i.silk = !0), m && (i.chrome = !0, i.version = m[1]), v && (i.firefox = !0, i.version = v[1]), _ && (i.ie = !0, i.version = _[1]), y && (t.match(/Safari/) || e.ios) && (i.safari = !0), x && (i.webview = !0), _ && (i.ie = !0, i.version = _[1]), b && (i.edge = !0, i.version = b[1]), e.tablet = !!(a || g || o && !t.match(/Mobile/) || v && t.match(/Tablet/) || _ && !t.match(/Phone/) && t.match(/Touch/)), e.phone = !(e.tablet || e.ipod || !(o || s || l || d || f || m && t.match(/Android/) || m && t.match(/CriOS\/([\d.]+)/) || v && t.match(/Mobile/) || _ && t.match(/Touch/))), {
                browser: i,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                touchEventsSupported: "ontouchstart"in window && !i.ie && !i.edge,
                pointerEventsSupported: "onpointerdown"in window && (i.edge || i.ie && i.version >= 10)
            }
        }

        var n = {};
        n = "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            canvasSupported: !0
        } : i(navigator.userAgent), t.exports = n
    }, function (t, e, i) {
        (function (e) {
            function n(t) {
                return d.isArray(t) || (t = [t]), t
            }

            function o(t, e) {
                var i = t.dimensions, n = new v(d.map(i, t.getDimensionInfo, t), t.hostModel);
                m(n, t);
                for (var o = n._storage = {}, a = t._storage, r = 0; r < i.length; r++) {
                    var s = i[r], l = a[s];
                    d.indexOf(e, s) >= 0 ? o[s] = new l.constructor(a[s].length) : o[s] = a[s];
                }
                return n
            }

            var a = "undefined", r = "undefined" == typeof window ? e : window, s = typeof r.Float64Array === a ? Array : r.Float64Array, l = typeof r.Int32Array === a ? Array : r.Int32Array, h = {
                "float": s,
                "int": l,
                ordinal: Array,
                number: Array,
                time: Array
            }, u = i(12), c = i(48), d = i(1), f = i(7), p = d.isObject, g = ["stackedOn", "_nameList", "_idList", "_rawData"], m = function (t, e) {
                d.each(g.concat(e.__wrappedMethods || []), function (i) {
                    e.hasOwnProperty(i) && (t[i] = e[i])
                }), t.__wrappedMethods = e.__wrappedMethods
            }, v = function (t, e) {
                t = t || ["x", "y"];
                for (var i = {}, n = [], o = 0; o < t.length; o++) {
                    var a, r = {};
                    "string" == typeof t[o] ? (a = t[o], r = {
                        name: a,
                        stackable: !1,
                        type: "number"
                    }) : (r = t[o], a = r.name, r.type = r.type || "number"), n.push(a), i[a] = r
                }
                this.dimensions = n, this._dimensionInfos = i, this.hostModel = e, this.dataType, this.indices = [], this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this.stackedOn = null, this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawData, this._extent
            }, y = v.prototype;
            y.type = "list", y.getDimension = function (t) {
                return isNaN(t) || (t = this.dimensions[t] || t), t
            }, y.getDimensionInfo = function (t) {
                return d.clone(this._dimensionInfos[this.getDimension(t)])
            }, y.initData = function (t, e, i) {
                if (t = t || [], !d.isArray(t))throw new Error("Invalid data.");
                this._rawData = t;
                var n = this._storage = {}, o = this.indices = [], a = this.dimensions, r = t.length, s = this._dimensionInfos, l = [], u = {};
                e = e || [];
                for (var c = 0; c < a.length; c++) {
                    var p = s[a[c]], g = h[p.type];
                    n[a[c]] = new g(r)
                }
                i = i || function (t, e, i, n) {
                    var o = f.getDataItemValue(t);
                    return f.converDataValue(d.isArray(o) ? o[n] : o, s[e])
                };
                for (var m = 0; m < t.length; m++) {
                    for (var v = t[m], y = 0; y < a.length; y++) {
                        var x = a[y], _ = n[x];
                        _[m] = i(v, x, m, y)
                    }
                    o.push(m)
                }
                for (var c = 0; c < t.length; c++) {
                    var b = "";
                    e[c] || (e[c] = t[c].name, b = t[c].id);
                    var w = e[c] || "";
                    !b && w && (u[w] = u[w] || 0, b = w, u[w] > 0 && (b += "__ec__" + u[w]), u[w]++), b && (l[c] = b)
                }
                this._nameList = e, this._idList = l
            }, y.count = function () {
                return this.indices.length
            }, y.get = function (t, e, i) {
                var n = this._storage, o = this.indices[e];
                if (null == o)return NaN;
                var a = n[t] && n[t][o];
                if (i) {
                    var r = this._dimensionInfos[t];
                    if (r && r.stackable)for (var s = this.stackedOn; s;) {
                        var l = s.get(t, e);
                        (a >= 0 && l > 0 || 0 >= a && 0 > l) && (a += l), s = s.stackedOn
                    }
                }
                return a
            }, y.getValues = function (t, e, i) {
                var n = [];
                d.isArray(t) || (i = e, e = t, t = this.dimensions);
                for (var o = 0, a = t.length; a > o; o++)n.push(this.get(t[o], e, i));
                return n
            }, y.hasValue = function (t) {
                for (var e = this.dimensions, i = this._dimensionInfos, n = 0, o = e.length; o > n; n++)if ("ordinal" !== i[e[n]].type && isNaN(this.get(e[n], t)))return !1;
                return !0
            }, y.getDataExtent = function (t, e) {
                var i = this._storage[t], n = this.getDimensionInfo(t);
                e = n && n.stackable && e;
                var o, a = (this._extent || (this._extent = {}))[t + !!e];
                if (a)return a;
                if (i) {
                    for (var r = 1 / 0, s = -(1 / 0), l = 0, h = this.count(); h > l; l++)o = this.get(t, l, e), r > o && (r = o), o > s && (s = o);
                    return this._extent[t + e] = [r, s]
                }
                return [1 / 0, -(1 / 0)]
            }, y.getSum = function (t, e) {
                var i = this._storage[t], n = 0;
                if (i)for (var o = 0, a = this.count(); a > o; o++) {
                    var r = this.get(t, o, e);
                    isNaN(r) || (n += r)
                }
                return n
            }, y.indexOf = function (t, e) {
                var i = this._storage, n = i[t], o = this.indices;
                if (n)for (var a = 0, r = o.length; r > a; a++) {
                    var s = o[a];
                    if (n[s] === e)return a
                }
                return -1
            }, y.indexOfName = function (t) {
                for (var e = this.indices, i = this._nameList, n = 0, o = e.length; o > n; n++) {
                    var a = e[n];
                    if (i[a] === t)return n
                }
                return -1
            }, y.indexOfNearest = function (t, e, i) {
                var n = this._storage, o = n[t];
                if (o) {
                    for (var a = Number.MAX_VALUE, r = -1, s = 0, l = this.count(); l > s; s++) {
                        var h = e - this.get(t, s, i), u = Math.abs(h);
                        (a > u || u === a && h > 0) && (a = u, r = s)
                    }
                    return r
                }
                return -1
            }, y.getRawIndex = function (t) {
                var e = this.indices[t];
                return null == e ? -1 : e
            }, y.getRawDataItem = function (t) {
                return this._rawData[this.getRawIndex(t)]
            }, y.getName = function (t) {
                return this._nameList[this.indices[t]] || ""
            }, y.getId = function (t) {
                return this._idList[this.indices[t]] || this.getRawIndex(t) + ""
            }, y.each = function (t, e, i, o) {
                "function" == typeof t && (o = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
                var a = [], r = t.length, s = this.indices;
                o = o || this;
                for (var l = 0; l < s.length; l++)if (0 === r)e.call(o, l); else if (1 === r)e.call(o, this.get(t[0], l, i), l); else {
                    for (var h = 0; r > h; h++)a[h] = this.get(t[h], l, i);
                    a[h] = l, e.apply(o, a)
                }
            }, y.filterSelf = function (t, e, i, o) {
                "function" == typeof t && (o = i, i = e, e = t, t = []), t = d.map(n(t), this.getDimension, this);
                var a = [], r = [], s = t.length, l = this.indices;
                o = o || this;
                for (var h = 0; h < l.length; h++) {
                    var u;
                    if (1 === s)u = e.call(o, this.get(t[0], h, i), h); else {
                        for (var c = 0; s > c; c++)r[c] = this.get(t[c], h, i);
                        r[c] = h, u = e.apply(o, r)
                    }
                    u && a.push(l[h])
                }
                return this.indices = a, this._extent = {}, this
            }, y.mapArray = function (t, e, i, n) {
                "function" == typeof t && (n = i, i = e, e = t, t = []);
                var o = [];
                return this.each(t, function () {
                    o.push(e && e.apply(this, arguments))
                }, i, n), o
            }, y.map = function (t, e, i, a) {
                t = d.map(n(t), this.getDimension, this);
                var r = o(this, t), s = r.indices = this.indices, l = r._storage, h = [];
                return this.each(t, function () {
                    var i = arguments[arguments.length - 1], n = e && e.apply(this, arguments);
                    if (null != n) {
                        "number" == typeof n && (h[0] = n, n = h);
                        for (var o = 0; o < n.length; o++) {
                            var a = t[o], r = l[a], u = s[i];
                            r && (r[u] = n[o])
                        }
                    }
                }, i, a), r
            }, y.downSample = function (t, e, i, n) {
                for (var a = o(this, [t]), r = this._storage, s = a._storage, l = this.indices, h = a.indices = [], u = [], c = [], d = Math.floor(1 / e), f = s[t], p = this.count(), g = 0; g < r[t].length; g++)s[t][g] = r[t][g];
                for (var g = 0; p > g; g += d) {
                    d > p - g && (d = p - g, u.length = d);
                    for (var m = 0; d > m; m++) {
                        var v = l[g + m];
                        u[m] = f[v], c[m] = v
                    }
                    var y = i(u), v = c[n(u, y) || 0];
                    f[v] = y, h.push(v)
                }
                return a
            }, y.getItemModel = function (t) {
                var e = this.hostModel;
                return t = this.indices[t], new u(this._rawData[t], e, e && e.ecModel)
            }, y.diff = function (t) {
                var e = this._idList, i = t && t._idList;
                return new c(t ? t.indices : [], this.indices, function (t) {
                    return i[t] || t + ""
                }, function (t) {
                    return e[t] || t + ""
                })
            }, y.getVisual = function (t) {
                var e = this._visual;
                return e && e[t]
            }, y.setVisual = function (t, e) {
                if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setVisual(i, t[i]); else this._visual = this._visual || {}, this._visual[t] = e
            }, y.setLayout = function (t, e) {
                if (p(t))for (var i in t)t.hasOwnProperty(i) && this.setLayout(i, t[i]); else this._layout[t] = e
            }, y.getLayout = function (t) {
                return this._layout[t]
            }, y.getItemLayout = function (t) {
                return this._itemLayouts[t]
            }, y.setItemLayout = function (t, e, i) {
                this._itemLayouts[t] = i ? d.extend(this._itemLayouts[t] || {}, e) : e
            }, y.clearItemLayouts = function () {
                this._itemLayouts.length = 0
            }, y.getItemVisual = function (t, e, i) {
                var n = this._itemVisuals[t], o = n && n[e];
                return null != o || i ? o : this.getVisual(e)
            }, y.setItemVisual = function (t, e, i) {
                var n = this._itemVisuals[t] || {};
                if (this._itemVisuals[t] = n, p(e))for (var o in e)e.hasOwnProperty(o) && (n[o] = e[o]); else n[e] = i
            };
            var x = function (t) {
                t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
            };
            y.setItemGraphicEl = function (t, e) {
                var i = this.hostModel;
                e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = i && i.seriesIndex, "group" === e.type && e.traverse(x, e)), this._graphicEls[t] = e
            }, y.getItemGraphicEl = function (t) {
                return this._graphicEls[t]
            }, y.eachItemGraphicEl = function (t, e) {
                d.each(this._graphicEls, function (i, n) {
                    i && t && t.call(e, i, n)
                })
            }, y.cloneShallow = function () {
                var t = d.map(this.dimensions, this.getDimensionInfo, this), e = new v(t, this.hostModel);
                return e._storage = this._storage, m(e, this), e.indices = this.indices.slice(), e
            }, y.wrapMethod = function (t, e) {
                var i = this[t];
                "function" == typeof i && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                    var t = i.apply(this, arguments);
                    return e.apply(this, [t].concat(d.slice(arguments)))
                })
            }, y.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], y.CHANGABLE_METHODS = ["filterSelf"], t.exports = v
        }).call(e, function () {
                return this
            }())
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t > -w && w > t
        }

        function o(t) {
            return t > w || -w > t
        }

        function a(t, e, i, n, o) {
            var a = 1 - o;
            return a * a * (a * t + 3 * o * e) + o * o * (o * n + 3 * a * i)
        }

        function r(t, e, i, n, o) {
            var a = 1 - o;
            return 3 * (((e - t) * a + 2 * (i - e) * o) * a + (n - i) * o * o)
        }

        function s(t, e, i, o, a, r) {
            var s = o + 3 * (e - i) - t, l = 3 * (i - 2 * e + t), h = 3 * (e - t), u = t - a, c = l * l - 3 * s * h, d = l * h - 9 * s * u, f = h * h - 3 * l * u, p = 0;
            if (n(c) && n(d))if (n(l))r[0] = 0; else {
                var g = -h / l;
                g >= 0 && 1 >= g && (r[p++] = g)
            } else {
                var m = d * d - 4 * c * f;
                if (n(m)) {
                    var v = d / c, g = -l / s + v, y = -v / 2;
                    g >= 0 && 1 >= g && (r[p++] = g), y >= 0 && 1 >= y && (r[p++] = y)
                } else if (m > 0) {
                    var x = b(m), w = c * l + 1.5 * s * (-d + x), S = c * l + 1.5 * s * (-d - x);
                    w = 0 > w ? -_(-w, A) : _(w, A), S = 0 > S ? -_(-S, A) : _(S, A);
                    var g = (-l - (w + S)) / (3 * s);
                    g >= 0 && 1 >= g && (r[p++] = g)
                } else {
                    var I = (2 * c * l - 3 * s * d) / (2 * b(c * c * c)), T = Math.acos(I) / 3, L = b(c), C = Math.cos(T), g = (-l - 2 * L * C) / (3 * s), y = (-l + L * (C + M * Math.sin(T))) / (3 * s), D = (-l + L * (C - M * Math.sin(T))) / (3 * s);
                    g >= 0 && 1 >= g && (r[p++] = g), y >= 0 && 1 >= y && (r[p++] = y), D >= 0 && 1 >= D && (r[p++] = D)
                }
            }
            return p
        }

        function l(t, e, i, a, r) {
            var s = 6 * i - 12 * e + 6 * t, l = 9 * e + 3 * a - 3 * t - 9 * i, h = 3 * e - 3 * t, u = 0;
            if (n(l)) {
                if (o(s)) {
                    var c = -h / s;
                    c >= 0 && 1 >= c && (r[u++] = c)
                }
            } else {
                var d = s * s - 4 * l * h;
                if (n(d))r[0] = -s / (2 * l); else if (d > 0) {
                    var f = b(d), c = (-s + f) / (2 * l), p = (-s - f) / (2 * l);
                    c >= 0 && 1 >= c && (r[u++] = c), p >= 0 && 1 >= p && (r[u++] = p)
                }
            }
            return u
        }

        function h(t, e, i, n, o, a) {
            var r = (e - t) * o + t, s = (i - e) * o + e, l = (n - i) * o + i, h = (s - r) * o + r, u = (l - s) * o + s, c = (u - h) * o + h;
            a[0] = t, a[1] = r, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = n
        }

        function u(t, e, i, n, o, r, s, l, h, u, c) {
            var d, f, p, g, m, v = .005, y = 1 / 0;
            I[0] = h, I[1] = u;
            for (var _ = 0; 1 > _; _ += .05)T[0] = a(t, i, o, s, _), T[1] = a(e, n, r, l, _), g = x(I, T), y > g && (d = _, y = g);
            y = 1 / 0;
            for (var w = 0; 32 > w && !(S > v); w++)f = d - v, p = d + v, T[0] = a(t, i, o, s, f), T[1] = a(e, n, r, l, f), g = x(T, I), f >= 0 && y > g ? (d = f, y = g) : (L[0] = a(t, i, o, s, p), L[1] = a(e, n, r, l, p), m = x(L, I), 1 >= p && y > m ? (d = p, y = m) : v *= .5);
            return c && (c[0] = a(t, i, o, s, d), c[1] = a(e, n, r, l, d)), b(y)
        }

        function c(t, e, i, n) {
            var o = 1 - n;
            return o * (o * t + 2 * n * e) + n * n * i
        }

        function d(t, e, i, n) {
            return 2 * ((1 - n) * (e - t) + n * (i - e))
        }

        function f(t, e, i, a, r) {
            var s = t - 2 * e + i, l = 2 * (e - t), h = t - a, u = 0;
            if (n(s)) {
                if (o(l)) {
                    var c = -h / l;
                    c >= 0 && 1 >= c && (r[u++] = c)
                }
            } else {
                var d = l * l - 4 * s * h;
                if (n(d)) {
                    var c = -l / (2 * s);
                    c >= 0 && 1 >= c && (r[u++] = c)
                } else if (d > 0) {
                    var f = b(d), c = (-l + f) / (2 * s), p = (-l - f) / (2 * s);
                    c >= 0 && 1 >= c && (r[u++] = c), p >= 0 && 1 >= p && (r[u++] = p)
                }
            }
            return u
        }

        function p(t, e, i) {
            var n = t + i - 2 * e;
            return 0 === n ? .5 : (t - e) / n
        }

        function g(t, e, i, n, o) {
            var a = (e - t) * n + t, r = (i - e) * n + e, s = (r - a) * n + a;
            o[0] = t, o[1] = a, o[2] = s, o[3] = s, o[4] = r, o[5] = i
        }

        function m(t, e, i, n, o, a, r, s, l) {
            var h, u = .005, d = 1 / 0;
            I[0] = r, I[1] = s;
            for (var f = 0; 1 > f; f += .05) {
                T[0] = c(t, i, o, f), T[1] = c(e, n, a, f);
                var p = x(I, T);
                d > p && (h = f, d = p)
            }
            d = 1 / 0;
            for (var g = 0; 32 > g && !(S > u); g++) {
                var m = h - u, v = h + u;
                T[0] = c(t, i, o, m), T[1] = c(e, n, a, m);
                var p = x(T, I);
                if (m >= 0 && d > p)h = m, d = p; else {
                    L[0] = c(t, i, o, v), L[1] = c(e, n, a, v);
                    var y = x(L, I);
                    1 >= v && d > y ? (h = v, d = y) : u *= .5
                }
            }
            return l && (l[0] = c(t, i, o, h), l[1] = c(e, n, a, h)), b(d)
        }

        var v = i(5), y = v.create, x = v.distSquare, _ = Math.pow, b = Math.sqrt, w = 1e-8, S = 1e-4, M = b(3), A = 1 / 3, I = y(), T = y(), L = y();
        t.exports = {
            cubicAt: a,
            cubicDerivativeAt: r,
            cubicRootAt: s,
            cubicExtrema: l,
            cubicSubdivide: h,
            cubicProjectPoint: u,
            quadraticAt: c,
            quadraticDerivativeAt: d,
            quadraticRootAt: f,
            quadraticExtremum: p,
            quadraticSubdivide: g,
            quadraticProjectPoint: m
        }
    }, function (t, e) {
        var i = function (t) {
            this.colorStops = t || []
        };
        i.prototype = {
            constructor: i, addColorStop: function (t, e) {
                this.colorStops.push({offset: t, color: e})
            }
        }, t.exports = i
    }, function (t, e, i) {
        function n(t, e) {
            var i = t + ":" + e;
            if (h[i])return h[i];
            for (var n = (t + "").split("\n"), o = 0, a = 0, r = n.length; r > a; a++)o = Math.max(p.measureText(n[a], e).width, o);
            return u > c && (u = 0, h = {}), u++, h[i] = o, o
        }

        function o(t, e, i, o) {
            var a = ((t || "") + "").split("\n").length, r = n(t, e), s = n("国", e), l = a * s, h = new f(0, 0, r, l);
            switch (h.lineHeight = s, o) {
                case"bottom":
                case"alphabetic":
                    h.y -= s;
                    break;
                case"middle":
                    h.y -= s / 2
            }
            switch (i) {
                case"end":
                case"right":
                    h.x -= h.width;
                    break;
                case"center":
                    h.x -= h.width / 2
            }
            return h
        }

        function a(t, e, i, n) {
            var o = e.x, a = e.y, r = e.height, s = e.width, l = i.height, h = r / 2 - l / 2, u = "left";
            switch (t) {
                case"left":
                    o -= n, a += h, u = "right";
                    break;
                case"right":
                    o += n + s, a += h, u = "left";
                    break;
                case"top":
                    o += s / 2, a -= n + l, u = "center";
                    break;
                case"bottom":
                    o += s / 2, a += r + n, u = "center";
                    break;
                case"inside":
                    o += s / 2, a += h, u = "center";
                    break;
                case"insideLeft":
                    o += n, a += h, u = "left";
                    break;
                case"insideRight":
                    o += s - n, a += h, u = "right";
                    break;
                case"insideTop":
                    o += s / 2, a += n, u = "center";
                    break;
                case"insideBottom":
                    o += s / 2, a += r - l - n, u = "center";
                    break;
                case"insideTopLeft":
                    o += n, a += n, u = "left";
                    break;
                case"insideTopRight":
                    o += s - n, a += n, u = "right";
                    break;
                case"insideBottomLeft":
                    o += n, a += r - l - n;
                    break;
                case"insideBottomRight":
                    o += s - n, a += r - l - n, u = "right"
            }
            return {x: o, y: a, textAlign: u, textBaseline: "top"}
        }

        function r(t, e, i, o) {
            if (!i)return "";
            o = d.defaults({
                ellipsis: "...",
                minCharacters: 3,
                maxIterations: 3,
                cnCharWidth: n("国", e),
                ascCharWidth: n("a", e)
            }, o, !0), i -= n(o.ellipsis);
            for (var a = (t + "").split("\n"), r = 0, l = a.length; l > r; r++)a[r] = s(a[r], e, i, o);
            return a.join("\n")
        }

        function s(t, e, i, o) {
            for (var a = 0; ; a++) {
                var r = n(t, e);
                if (i > r || a >= o.maxIterations) {
                    t += o.ellipsis;
                    break
                }
                var s = 0 === a ? l(t, i, o) : Math.floor(t.length * i / r);
                if (s < o.minCharacters) {
                    t = "";
                    break
                }
                t = t.substr(0, s)
            }
            return t
        }

        function l(t, e, i) {
            for (var n = 0, o = 0, a = t.length; a > o && e > n; o++) {
                var r = t.charCodeAt(o);
                n += r >= 0 && 127 >= r ? i.ascCharWidth : i.cnCharWidth
            }
            return o
        }

        var h = {}, u = 0, c = 5e3, d = i(1), f = i(8), p = {
            getWidth: n,
            getBoundingRect: o,
            adjustTextPositionOnRect: a,
            ellipsis: r,
            measureText: function (t, e) {
                var i = d.getContext();
                return i.font = e, i.measureText(t)
            }
        };
        t.exports = p
    }, function (t, e) {
        var i = "undefined" == typeof Float32Array ? Array : Float32Array, n = {
            create: function () {
                var t = new i(6);
                return n.identity(t), t
            }, identity: function (t) {
                return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
            }, copy: function (t, e) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
            }, mul: function (t, e, i) {
                var n = e[0] * i[0] + e[2] * i[1], o = e[1] * i[0] + e[3] * i[1], a = e[0] * i[2] + e[2] * i[3], r = e[1] * i[2] + e[3] * i[3], s = e[0] * i[4] + e[2] * i[5] + e[4], l = e[1] * i[4] + e[3] * i[5] + e[5];
                return t[0] = n, t[1] = o, t[2] = a, t[3] = r, t[4] = s, t[5] = l, t
            }, translate: function (t, e, i) {
                return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + i[0], t[5] = e[5] + i[1], t
            }, rotate: function (t, e, i) {
                var n = e[0], o = e[2], a = e[4], r = e[1], s = e[3], l = e[5], h = Math.sin(i), u = Math.cos(i);
                return t[0] = n * u + r * h, t[1] = -n * h + r * u, t[2] = o * u + s * h, t[3] = -o * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t
            }, scale: function (t, e, i) {
                var n = i[0], o = i[1];
                return t[0] = e[0] * n, t[1] = e[1] * o, t[2] = e[2] * n, t[3] = e[3] * o, t[4] = e[4] * n, t[5] = e[5] * o, t
            }, invert: function (t, e) {
                var i = e[0], n = e[2], o = e[4], a = e[1], r = e[3], s = e[5], l = i * r - a * n;
                return l ? (l = 1 / l, t[0] = r * l, t[1] = -a * l, t[2] = -n * l, t[3] = i * l, t[4] = (n * s - r * o) * l, t[5] = (a * o - i * s) * l, t) : null
            }
        };
        t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = a.slice(arguments, 2);
            return this.superClass.prototype[e].apply(t, i)
        }

        function o(t, e, i) {
            return this.superClass.prototype[e].apply(t, i)
        }

        var a = i(1), r = {}, s = ".", l = "___EC__COMPONENT__CONTAINER___", h = r.parseClassType = function (t) {
            var e = {main: "", sub: ""};
            return t && (t = t.split(s), e.main = t[0] || "", e.sub = t[1] || ""), e
        };
        r.enableClassExtend = function (t, e) {
            t.extend = function (i) {
                var r = function () {
                    e && e.apply(this, arguments), t.apply(this, arguments)
                };
                return a.extend(r.prototype, i), r.extend = this.extend, r.superCall = n, r.superApply = o, a.inherits(r, this), r.superClass = this, r
            }
        }, r.enableClassManagement = function (t, e) {
            function i(t) {
                var e = n[t.main];
                return e && e[l] || (e = n[t.main] = {}, e[l] = !0), e
            }

            e = e || {};
            var n = {};
            if (t.registerClass = function (t, e) {
                    if (e)if (e = h(e), e.sub) {
                        if (e.sub !== l) {
                            var o = i(e);
                            o[e.sub] = t
                        }
                    } else {
                        if (n[e.main])throw new Error(e.main + "exists.");
                        n[e.main] = t
                    }
                    return t
                }, t.getClass = function (t, e, i) {
                    var o = n[t];
                    if (o && o[l] && (o = e ? o[e] : null), i && !o)throw new Error("Component " + t + "." + (e || "") + " not exists. Load it first.");
                    return o
                }, t.getClassesByMainType = function (t) {
                    t = h(t);
                    var e = [], i = n[t.main];
                    return i && i[l] ? a.each(i, function (t, i) {
                        i !== l && e.push(t)
                    }) : e.push(i), e
                }, t.hasClass = function (t) {
                    return t = h(t), !!n[t.main]
                }, t.getAllClassMainTypes = function () {
                    var t = [];
                    return a.each(n, function (e, i) {
                        t.push(i)
                    }), t
                }, t.hasSubTypes = function (t) {
                    t = h(t);
                    var e = n[t.main];
                    return e && e[l]
                }, t.parseClassType = h, e.registerWhenExtend) {
                var o = t.extend;
                o && (t.extend = function (e) {
                    var i = o.call(this, e);
                    return t.registerClass(i, e.type)
                })
            }
            return t
        }, r.setReadOnly = function (t, e) {
        }, t.exports = r
    }, function (t, e, i) {
        var n = Array.prototype.slice, o = i(1), a = o.indexOf, r = function () {
            this._$handlers = {}
        };
        r.prototype = {
            constructor: r, one: function (t, e, i) {
                var n = this._$handlers;
                return e && t ? (n[t] || (n[t] = []), a(n[t], t) >= 0 ? this : (n[t].push({
                    h: e,
                    one: !0,
                    ctx: i || this
                }), this)) : this
            }, on: function (t, e, i) {
                var n = this._$handlers;
                return e && t ? (n[t] || (n[t] = []), n[t].push({h: e, one: !1, ctx: i || this}), this) : this
            }, isSilent: function (t) {
                var e = this._$handlers;
                return e[t] && e[t].length
            }, off: function (t, e) {
                var i = this._$handlers;
                if (!t)return this._$handlers = {}, this;
                if (e) {
                    if (i[t]) {
                        for (var n = [], o = 0, a = i[t].length; a > o; o++)i[t][o].h != e && n.push(i[t][o]);
                        i[t] = n
                    }
                    i[t] && 0 === i[t].length && delete i[t]
                } else delete i[t];
                return this
            }, trigger: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments, i = e.length;
                    i > 3 && (e = n.call(e, 1));
                    for (var o = this._$handlers[t], a = o.length, r = 0; a > r;) {
                        switch (i) {
                            case 1:
                                o[r].h.call(o[r].ctx);
                                break;
                            case 2:
                                o[r].h.call(o[r].ctx, e[1]);
                                break;
                            case 3:
                                o[r].h.call(o[r].ctx, e[1], e[2]);
                                break;
                            default:
                                o[r].h.apply(o[r].ctx, e)
                        }
                        o[r].one ? (o.splice(r, 1), a--) : r++
                    }
                }
                return this
            }, triggerWithContext: function (t) {
                if (this._$handlers[t]) {
                    var e = arguments, i = e.length;
                    i > 4 && (e = n.call(e, 1, e.length - 1));
                    for (var o = e[e.length - 1], a = this._$handlers[t], r = a.length, s = 0; r > s;) {
                        switch (i) {
                            case 1:
                                a[s].h.call(o);
                                break;
                            case 2:
                                a[s].h.call(o, e[1]);
                                break;
                            case 3:
                                a[s].h.call(o, e[1], e[2]);
                                break;
                            default:
                                a[s].h.apply(o, e)
                        }
                        a[s].one ? (a.splice(s, 1), r--) : s++
                    }
                }
                return this
            }
        }, t.exports = r
    }, function (t, e) {
        function i(t) {
            return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
        }

        function n(t) {
            return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
        }

        function o(t) {
            return 0 > t ? 0 : t > 1 ? 1 : t
        }

        function a(t) {
            return i(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
        }

        function r(t) {
            return o(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
        }

        function s(t, e, i) {
            return 0 > i ? i += 1 : i > 1 && (i -= 1), 1 > 6 * i ? t + (e - t) * i * 6 : 1 > 2 * i ? e : 2 > 3 * i ? t + (e - t) * (2 / 3 - i) * 6 : t
        }

        function l(t, e, i) {
            return t + (e - t) * i
        }

        function h(t) {
            if (t) {
                t += "";
                var e = t.replace(/ /g, "").toLowerCase();
                if (e in x)return x[e].slice();
                if ("#" !== e.charAt(0)) {
                    var i = e.indexOf("("), n = e.indexOf(")");
                    if (-1 !== i && n + 1 === e.length) {
                        var o = e.substr(0, i), s = e.substr(i + 1, n - (i + 1)).split(","), l = 1;
                        switch (o) {
                            case"rgba":
                                if (4 !== s.length)return;
                                l = r(s.pop());
                            case"rgb":
                                if (3 !== s.length)return;
                                return [a(s[0]), a(s[1]), a(s[2]), l];
                            case"hsla":
                                if (4 !== s.length)return;
                                return s[3] = r(s[3]), u(s);
                            case"hsl":
                                if (3 !== s.length)return;
                                return u(s);
                            default:
                                return
                        }
                    }
                } else {
                    if (4 === e.length) {
                        var h = parseInt(e.substr(1), 16);
                        if (!(h >= 0 && 4095 >= h))return;
                        return [(3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1]
                    }
                    if (7 === e.length) {
                        var h = parseInt(e.substr(1), 16);
                        if (!(h >= 0 && 16777215 >= h))return;
                        return [(16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1]
                    }
                }
            }
        }

        function u(t) {
            var e = (parseFloat(t[0]) % 360 + 360) % 360 / 360, n = r(t[1]), o = r(t[2]), a = .5 >= o ? o * (n + 1) : o + n - o * n, l = 2 * o - a, h = [i(255 * s(l, a, e + 1 / 3)), i(255 * s(l, a, e)), i(255 * s(l, a, e - 1 / 3))];
            return 4 === t.length && (h[3] = t[3]), h
        }

        function c(t) {
            if (t) {
                var e, i, n = t[0] / 255, o = t[1] / 255, a = t[2] / 255, r = Math.min(n, o, a), s = Math.max(n, o, a), l = s - r, h = (s + r) / 2;
                if (0 === l)e = 0, i = 0; else {
                    i = .5 > h ? l / (s + r) : l / (2 - s - r);
                    var u = ((s - n) / 6 + l / 2) / l, c = ((s - o) / 6 + l / 2) / l, d = ((s - a) / 6 + l / 2) / l;
                    n === s ? e = d - c : o === s ? e = 1 / 3 + u - d : a === s && (e = 2 / 3 + c - u), 0 > e && (e += 1), e > 1 && (e -= 1)
                }
                var f = [360 * e, i, h];
                return null != t[3] && f.push(t[3]), f
            }
        }

        function d(t, e) {
            var i = h(t);
            if (i) {
                for (var n = 0; 3 > n; n++)0 > e ? i[n] = i[n] * (1 - e) | 0 : i[n] = (255 - i[n]) * e + i[n] | 0;
                return y(i, 4 === i.length ? "rgba" : "rgb")
            }
        }

        function f(t, e) {
            var i = h(t);
            return i ? ((1 << 24) + (i[0] << 16) + (i[1] << 8) + +i[2]).toString(16).slice(1) : void 0
        }

        function p(t, e, n) {
            if (e && e.length && t >= 0 && 1 >= t) {
                n = n || [0, 0, 0, 0];
                var o = t * (e.length - 1), a = Math.floor(o), r = Math.ceil(o), s = e[a], h = e[r], u = o - a;
                return n[0] = i(l(s[0], h[0], u)), n[1] = i(l(s[1], h[1], u)), n[2] = i(l(s[2], h[2], u)), n[3] = i(l(s[3], h[3], u)), n
            }
        }

        function g(t, e, n) {
            if (e && e.length && t >= 0 && 1 >= t) {
                var a = t * (e.length - 1), r = Math.floor(a), s = Math.ceil(a), u = h(e[r]), c = h(e[s]), d = a - r, f = y([i(l(u[0], c[0], d)), i(l(u[1], c[1], d)), i(l(u[2], c[2], d)), o(l(u[3], c[3], d))], "rgba");
                return n ? {color: f, leftIndex: r, rightIndex: s, value: a} : f
            }
        }

        function m(t, e, i, o) {
            return t = h(t), t ? (t = c(t), null != e && (t[0] = n(e)), null != i && (t[1] = r(i)), null != o && (t[2] = r(o)), y(u(t), "rgba")) : void 0
        }

        function v(t, e) {
            return t = h(t), t && null != e ? (t[3] = o(e), y(t, "rgba")) : void 0
        }

        function y(t, e) {
            return "rgb" !== e && "hsv" !== e && "hsl" !== e || (t = t.slice(0, 3)), e + "(" + t.join(",") + ")"
        }

        var x = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        };
        t.exports = {
            parse: h,
            lift: d,
            toHex: f,
            fastMapToColor: p,
            mapToColor: g,
            modifyHSL: m,
            modifyAlpha: v,
            stringify: y
        }
    }, function (t, e) {
        "use strict";
        function i() {
            this._coordinateSystems = []
        }

        var n = {};
        i.prototype = {
            constructor: i, create: function (t, e) {
                var i = [];
                for (var o in n) {
                    var a = n[o].create(t, e);
                    a && (i = i.concat(a))
                }
                this._coordinateSystems = i
            }, update: function (t, e) {
                for (var i = this._coordinateSystems, n = 0; n < i.length; n++)i[n].update && i[n].update(t, e)
            }
        }, i.register = function (t, e) {
            n[t] = e
        }, i.get = function (t) {
            return n[t]
        }, t.exports = i
    }, function (t, e, i) {
        var n = i(123), o = i(38);
        i(124), i(122);
        var a = i(32), r = i(4), s = i(1), l = i(18), h = {};
        h.getScaleExtent = function (t, e) {
            var i = t.scale, n = i.getExtent(), o = n[1] - n[0];
            if ("ordinal" === i.type)return isFinite(o) ? n : [0, 0];
            var a = e.getMin ? e.getMin() : e.get("min"), l = e.getMax ? e.getMax() : e.get("max"), h = e.getNeedCrossZero ? e.getNeedCrossZero() : !e.get("scale"), u = e.get("boundaryGap");
            s.isArray(u) || (u = [u || 0, u || 0]), u[0] = r.parsePercent(u[0], 1), u[1] = r.parsePercent(u[1], 1);
            var c = !0, d = !0;
            return null == a && (a = n[0] - u[0] * o, c = !1), null == l && (l = n[1] + u[1] * o, d = !1), "dataMin" === a && (a = n[0]), "dataMax" === l && (l = n[1]), h && (a > 0 && l > 0 && !c && (a = 0), 0 > a && 0 > l && !d && (l = 0)), [a, l]
        }, h.niceScaleExtent = function (t, e) {
            var i = t.scale, n = h.getScaleExtent(t, e), o = null != (e.getMin ? e.getMin() : e.get("min")), a = null != (e.getMax ? e.getMax() : e.get("max")), r = e.get("splitNumber");
            i.setExtent(n[0], n[1]), i.niceExtent(r, o, a);
            var s = e.get("minInterval");
            if (isFinite(s) && !o && !a && "interval" === i.type) {
                var l = i.getInterval(), u = Math.max(Math.abs(l), s) / l;
                n = i.getExtent(), i.setExtent(u * n[0], n[1] * u), i.niceExtent(r)
            }
            var l = e.get("interval");
            null != l && i.setInterval && i.setInterval(l)
        }, h.createScaleByModel = function (t, e) {
            if (e = e || t.get("type"))switch (e) {
                case"category":
                    return new n(t.getCategories(), [1 / 0, -(1 / 0)]);
                case"value":
                    return new o;
                default:
                    return (a.getClass(e) || o).create(t)
            }
        }, h.ifAxisCrossZero = function (t) {
            var e = t.scale.getExtent(), i = e[0], n = e[1];
            return !(i > 0 && n > 0 || 0 > i && 0 > n)
        }, h.getAxisLabelInterval = function (t, e, i, n) {
            var o, a = 0, r = 0, s = 1;
            e.length > 40 && (s = Math.round(e.length / 40));
            for (var h = 0; h < t.length; h += s) {
                var u = t[h], c = l.getBoundingRect(e[h], i, "center", "top");
                c[n ? "x" : "y"] += u, c[n ? "width" : "height"] *= 1.5, o ? o.intersect(c) ? (r++, a = Math.max(a, r)) : (o.union(c), r = 0) : o = c.clone()
            }
            return 0 === a && s > 1 ? s : a * s
        }, h.getFormattedLabels = function (t, e) {
            var i = t.scale, n = i.getTicksLabels(), o = i.getTicks();
            return "string" == typeof e ? (e = function (t) {
                return function (e) {
                    return t.replace("{value}", e)
                }
            }(e), s.map(n, e)) : "function" == typeof e ? s.map(o, function (n, o) {
                return e("category" === t.type ? i.getLabel(n) : n, o)
            }, this) : n
        }, t.exports = h
    }, function (t, e, i) {
        "use strict";
        var n = i(3), o = i(8), a = n.extendShape({
            type: "triangle",
            shape: {cx: 0, cy: 0, width: 0, height: 0},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = e.width / 2, a = e.height / 2;
                t.moveTo(i, n - a), t.lineTo(i + o, n + a), t.lineTo(i - o, n + a), t.closePath()
            }
        }), r = n.extendShape({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = e.width / 2, a = e.height / 2;
                t.moveTo(i, n - a), t.lineTo(i + o, n), t.lineTo(i, n + a), t.lineTo(i - o, n), t.closePath()
            }
        }), s = n.extendShape({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.x, n = e.y, o = e.width / 5 * 3, a = Math.max(o, e.height), r = o / 2, s = r * r / (a - r), l = n - a + r + s, h = Math.asin(s / r), u = Math.cos(h) * r, c = Math.sin(h), d = Math.cos(h);
                t.arc(i, l, r, Math.PI - h, 2 * Math.PI + h);
                var f = .6 * r, p = .7 * r;
                t.bezierCurveTo(i + u - c * f, l + s + d * f, i, n - p, i, n), t.bezierCurveTo(i, n - p, i - u + c * f, l + s + d * f, i - u, l + s), t.closePath()
            }
        }), l = n.extendShape({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var i = e.height, n = e.width, o = e.x, a = e.y, r = n / 3 * 2;
                t.moveTo(o, a), t.lineTo(o + r, a + i), t.lineTo(o, a + i / 4 * 3), t.lineTo(o - r, a + i), t.lineTo(o, a), t.closePath()
            }
        }), h = {
            line: n.Line,
            rect: n.Rect,
            roundRect: n.Rect,
            square: n.Rect,
            circle: n.Circle,
            diamond: r,
            pin: s,
            arrow: l,
            triangle: a
        }, u = {
            line: function (t, e, i, n, o) {
                o.x1 = t, o.y1 = e + n / 2, o.x2 = t + i, o.y2 = e + n / 2
            }, rect: function (t, e, i, n, o) {
                o.x = t, o.y = e, o.width = i, o.height = n
            }, roundRect: function (t, e, i, n, o) {
                o.x = t, o.y = e, o.width = i, o.height = n, o.r = Math.min(i, n) / 4
            }, square: function (t, e, i, n, o) {
                var a = Math.min(i, n);
                o.x = t, o.y = e, o.width = a, o.height = a
            }, circle: function (t, e, i, n, o) {
                o.cx = t + i / 2, o.cy = e + n / 2, o.r = Math.min(i, n) / 2
            }, diamond: function (t, e, i, n, o) {
                o.cx = t + i / 2, o.cy = e + n / 2, o.width = i, o.height = n
            }, pin: function (t, e, i, n, o) {
                o.x = t + i / 2, o.y = e + n / 2, o.width = i, o.height = n
            }, arrow: function (t, e, i, n, o) {
                o.x = t + i / 2, o.y = e + n / 2, o.width = i, o.height = n
            }, triangle: function (t, e, i, n, o) {
                o.cx = t + i / 2, o.cy = e + n / 2, o.width = i, o.height = n
            }
        }, c = {};
        for (var d in h)c[d] = new h[d];
        var f = n.extendShape({
            type: "symbol",
            shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
            beforeBrush: function () {
                var t = this.style, e = this.shape;
                "pin" === e.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
            },
            buildPath: function (t, e) {
                var i = e.symbolType, n = c[i];
                "none" !== e.symbolType && (n || (i = "rect", n = c[i]), u[i](e.x, e.y, e.width, e.height, n.shape), n.buildPath(t, n.shape))
            }
        }), p = function (t) {
            if ("image" !== this.type) {
                var e = this.style, i = this.shape;
                i && "line" === i.symbolType ? e.stroke = t : this.__isEmptyBrush ? (e.stroke = t, e.fill = "#fff") : (e.fill && (e.fill = t), e.stroke && (e.stroke = t)), this.dirty()
            }
        }, g = {
            createSymbol: function (t, e, i, a, r, s) {
                var l = 0 === t.indexOf("empty");
                l && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
                var h;
                return h = 0 === t.indexOf("image://") ? new n.Image({
                    style: {
                        image: t.slice(8),
                        x: e,
                        y: i,
                        width: a,
                        height: r
                    }
                }) : 0 === t.indexOf("path://") ? n.makePath(t.slice(7), {}, new o(e, i, a, r)) : new f({
                    shape: {
                        symbolType: t,
                        x: e,
                        y: i,
                        width: a,
                        height: r
                    }
                }), h.__isEmptyBrush = l, h.setColor = p, h.setColor(s), h
            }
        };
        t.exports = g
    }, function (t, e, i) {
        function n() {
            this.group = new r, this.uid = s.getUID("viewChart")
        }

        function o(t, e) {
            if (t && (t.trigger(e), "group" === t.type))for (var i = 0; i < t.childCount(); i++)o(t.childAt(i), e)
        }

        function a(t, e, i) {
            if (null != e.dataIndex) {
                var n = t.getItemGraphicEl(e.dataIndex);
                o(n, i)
            } else if (e.name) {
                var a = t.indexOfName(e.name), n = t.getItemGraphicEl(a);
                o(n, i)
            } else t.eachItemGraphicEl(function (t) {
                o(t, i)
            })
        }

        var r = i(27), s = i(42), l = i(20);
        n.prototype = {
            type: "chart", init: function (t, e) {
            }, render: function (t, e, i, n) {
            }, highlight: function (t, e, i, n) {
                a(t.getData(), n, "emphasis")
            }, downplay: function (t, e, i, n) {
                a(t.getData(), n, "normal")
            }, remove: function (t, e) {
                this.group.removeAll()
            }, dispose: function () {
            }
        };
        var h = n.prototype;
        h.updateView = h.updateLayout = h.updateVisual = function (t, e, i, n) {
            this.render(t, e, i, n)
        }, l.enableClassExtend(n), l.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
    }, function (t, e, i) {
        var n = i(1), o = i(55), a = i(8), r = function (t) {
            t = t || {}, o.call(this, t);
            for (var e in t)this[e] = t[e];
            this._children = [], this.__storage = null, this.__dirty = !0
        };
        r.prototype = {
            constructor: r, type: "group", silent: !1, children: function () {
                return this._children.slice()
            }, childAt: function (t) {
                return this._children[t]
            }, childOfName: function (t) {
                for (var e = this._children, i = 0; i < e.length; i++)if (e[i].name === t)return e[i]
            }, childCount: function () {
                return this._children.length
            }, add: function (t) {
                return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
            }, addBefore: function (t, e) {
                if (t && t !== this && t.parent !== this && e && e.parent === this) {
                    var i = this._children, n = i.indexOf(e);
                    n >= 0 && (i.splice(n, 0, t), this._doAdd(t))
                }
                return this
            }, _doAdd: function (t) {
                t.parent && t.parent.remove(t), t.parent = this;
                var e = this.__storage, i = this.__zr;
                e && e !== t.__storage && (e.addToMap(t), t instanceof r && t.addChildrenToStorage(e)), i && i.refresh()
            }, remove: function (t) {
                var e = this.__zr, i = this.__storage, o = this._children, a = n.indexOf(o, t);
                return 0 > a ? this : (o.splice(a, 1), t.parent = null, i && (i.delFromMap(t.id), t instanceof r && t.delChildrenFromStorage(i)), e && e.refresh(), this)
            }, removeAll: function () {
                var t, e, i = this._children, n = this.__storage;
                for (e = 0; e < i.length; e++)t = i[e], n && (n.delFromMap(t.id), t instanceof r && t.delChildrenFromStorage(n)), t.parent = null;
                return i.length = 0, this
            }, eachChild: function (t, e) {
                for (var i = this._children, n = 0; n < i.length; n++) {
                    var o = i[n];
                    t.call(e, o, n)
                }
                return this
            }, traverse: function (t, e) {
                for (var i = 0; i < this._children.length; i++) {
                    var n = this._children[i];
                    t.call(e, n), "group" === n.type && n.traverse(t, e)
                }
                return this
            }, addChildrenToStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.addToMap(i), i instanceof r && i.addChildrenToStorage(t)
                }
            }, delChildrenFromStorage: function (t) {
                for (var e = 0; e < this._children.length; e++) {
                    var i = this._children[e];
                    t.delFromMap(i.id), i instanceof r && i.delChildrenFromStorage(t)
                }
            }, dirty: function () {
                return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
            }, getBoundingRect: function (t) {
                for (var e = null, i = new a(0, 0, 0, 0), n = t || this._children, o = [], r = 0; r < n.length; r++) {
                    var s = n[r];
                    if (!s.ignore && !s.invisible) {
                        var l = s.getBoundingRect(), h = s.getLocalTransform(o);
                        h ? (i.copy(l), i.applyTransform(h), e = e || i.clone(), e.union(i)) : (e = e || l.clone(), e.union(l))
                    }
                }
                return e || i
            }
        }, n.inherits(r, o), t.exports = r
    }, function (t, e, i) {
        "use strict";
        var n = i(16), o = i(5), a = i(65), r = i(8), s = i(33).devicePixelRatio, l = {
            M: 1,
            L: 2,
            C: 3,
            Q: 4,
            A: 5,
            Z: 6,
            R: 7
        }, h = [], u = [], c = [], d = [], f = Math.min, p = Math.max, g = Math.cos, m = Math.sin, v = Math.sqrt, y = Math.abs, x = "undefined" != typeof Float32Array, _ = function () {
            this.data = [], this._len = 0,
                this._ctx = null, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._ux = 0, this._uy = 0
        };
        _.prototype = {
            constructor: _,
            _lineDash: null,
            _dashOffset: 0,
            _dashIdx: 0,
            _dashSum: 0,
            setScale: function (t, e) {
                this._ux = y(1 / s / t) || 0, this._uy = y(1 / s / e) || 0
            },
            getContext: function () {
                return this._ctx
            },
            beginPath: function (t) {
                return this._ctx = t, t && t.beginPath(), this._len = 0, this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
            },
            moveTo: function (t, e) {
                return this.addData(l.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            },
            lineTo: function (t, e) {
                var i = y(t - this._xi) > this._ux || y(e - this._yi) > this._uy || 0 === this._len;
                return this.addData(l.L, t, e), this._ctx && i && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), i && (this._xi = t, this._yi = e), this
            },
            bezierCurveTo: function (t, e, i, n, o, a) {
                return this.addData(l.C, t, e, i, n, o, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, i, n, o, a) : this._ctx.bezierCurveTo(t, e, i, n, o, a)), this._xi = o, this._yi = a, this
            },
            quadraticCurveTo: function (t, e, i, n) {
                return this.addData(l.Q, t, e, i, n), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, i, n) : this._ctx.quadraticCurveTo(t, e, i, n)), this._xi = i, this._yi = n, this
            },
            arc: function (t, e, i, n, o, a) {
                return this.addData(l.A, t, e, i, i, n, o - n, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, i, n, o, a), this._xi = g(o) * i + t, this._xi = m(o) * i + t, this
            },
            arcTo: function (t, e, i, n, o) {
                return this._ctx && this._ctx.arcTo(t, e, i, n, o), this
            },
            rect: function (t, e, i, n) {
                return this._ctx && this._ctx.rect(t, e, i, n), this.addData(l.R, t, e, i, n), this
            },
            closePath: function () {
                this.addData(l.Z);
                var t = this._ctx, e = this._x0, i = this._y0;
                return t && (this._needsDash() && this._dashedLineTo(e, i), t.closePath()), this._xi = e, this._yi = i, this
            },
            fill: function (t) {
                t && t.fill(), this.toStatic()
            },
            stroke: function (t) {
                t && t.stroke(), this.toStatic()
            },
            setLineDash: function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, i = 0; i < t.length; i++)e += t[i];
                    this._dashSum = e
                }
                return this
            },
            setLineDashOffset: function (t) {
                return this._dashOffset = t, this
            },
            len: function () {
                return this._len
            },
            setData: function (t) {
                var e = t.length;
                this.data && this.data.length == e || !x || (this.data = new Float32Array(e));
                for (var i = 0; e > i; i++)this.data[i] = t[i];
                this._len = e
            },
            appendPath: function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, i = 0, n = this._len, o = 0; e > o; o++)i += t[o].len();
                x && this.data instanceof Float32Array && (this.data = new Float32Array(n + i));
                for (var o = 0; e > o; o++)for (var a = t[o].data, r = 0; r < a.length; r++)this.data[n++] = a[r];
                this._len = n
            },
            addData: function (t) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var i = 0; i < arguments.length; i++)e[this._len++] = arguments[i];
                this._prevCmd = t
            },
            _expandData: function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++)t[e] = this.data[e];
                    this.data = t
                }
            },
            _needsDash: function () {
                return this._lineDash
            },
            _dashedLineTo: function (t, e) {
                var i, n, o = this._dashSum, a = this._dashOffset, r = this._lineDash, s = this._ctx, l = this._xi, h = this._yi, u = t - l, c = e - h, d = v(u * u + c * c), g = l, m = h, y = r.length;
                for (u /= d, c /= d, 0 > a && (a = o + a), a %= o, g -= a * u, m -= a * c; u >= 0 && t >= g || 0 > u && g > t;)n = this._dashIdx, i = r[n], g += u * i, m += c * i, this._dashIdx = (n + 1) % y, u > 0 && l > g || 0 > u && g > l || s[n % 2 ? "moveTo" : "lineTo"](u >= 0 ? f(g, t) : p(g, t), c >= 0 ? f(m, e) : p(m, e));
                u = g - t, c = m - e, this._dashOffset = -v(u * u + c * c)
            },
            _dashedBezierTo: function (t, e, i, o, a, r) {
                var s, l, h, u, c, d = this._dashSum, f = this._dashOffset, p = this._lineDash, g = this._ctx, m = this._xi, y = this._yi, x = n.cubicAt, _ = 0, b = this._dashIdx, w = p.length, S = 0;
                for (0 > f && (f = d + f), f %= d, s = 0; 1 > s; s += .1)l = x(m, t, i, a, s + .1) - x(m, t, i, a, s), h = x(y, e, o, r, s + .1) - x(y, e, o, r, s), _ += v(l * l + h * h);
                for (; w > b && (S += p[b], !(S > f)); b++);
                for (s = (S - f) / _; 1 >= s;)u = x(m, t, i, a, s), c = x(y, e, o, r, s), b % 2 ? g.moveTo(u, c) : g.lineTo(u, c), s += p[b] / _, b = (b + 1) % w;
                b % 2 !== 0 && g.lineTo(a, r), l = a - u, h = r - c, this._dashOffset = -v(l * l + h * h)
            },
            _dashedQuadraticTo: function (t, e, i, n) {
                var o = i, a = n;
                i = (i + 2 * t) / 3, n = (n + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, i, n, o, a)
            },
            toStatic: function () {
                var t = this.data;
                t instanceof Array && (t.length = this._len, x && (this.data = new Float32Array(t)))
            },
            getBoundingRect: function () {
                h[0] = h[1] = c[0] = c[1] = Number.MAX_VALUE, u[0] = u[1] = d[0] = d[1] = -Number.MAX_VALUE;
                for (var t = this.data, e = 0, i = 0, n = 0, s = 0, f = 0; f < t.length;) {
                    var p = t[f++];
                    switch (1 == f && (e = t[f], i = t[f + 1], n = e, s = i), p) {
                        case l.M:
                            n = t[f++], s = t[f++], e = n, i = s, c[0] = n, c[1] = s, d[0] = n, d[1] = s;
                            break;
                        case l.L:
                            a.fromLine(e, i, t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                            break;
                        case l.C:
                            a.fromCubic(e, i, t[f++], t[f++], t[f++], t[f++], t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                            break;
                        case l.Q:
                            a.fromQuadratic(e, i, t[f++], t[f++], t[f], t[f + 1], c, d), e = t[f++], i = t[f++];
                            break;
                        case l.A:
                            var v = t[f++], y = t[f++], x = t[f++], _ = t[f++], b = t[f++], w = t[f++] + b, S = (t[f++], 1 - t[f++]);
                            1 == f && (n = g(b) * x + v, s = m(b) * _ + y), a.fromArc(v, y, x, _, b, w, S, c, d), e = g(w) * x + v, i = m(w) * _ + y;
                            break;
                        case l.R:
                            n = e = t[f++], s = i = t[f++];
                            var M = t[f++], A = t[f++];
                            a.fromLine(n, s, n + M, s + A, c, d);
                            break;
                        case l.Z:
                            e = n, i = s
                    }
                    o.min(h, h, c), o.max(u, u, d)
                }
                return 0 === f && (h[0] = h[1] = u[0] = u[1] = 0), new r(h[0], h[1], u[0] - h[0], u[1] - h[1])
            },
            rebuildPath: function (t) {
                for (var e, i, n, o, a, r, s = this.data, h = this._ux, u = this._uy, c = this._len, d = 0; c > d;) {
                    var f = s[d++];
                    switch (1 == d && (n = s[d], o = s[d + 1], e = n, i = o), f) {
                        case l.M:
                            e = n = s[d++], i = o = s[d++], t.moveTo(n, o);
                            break;
                        case l.L:
                            a = s[d++], r = s[d++], (y(a - n) > h || y(r - o) > u || d === c - 1) && (t.lineTo(a, r), n = a, o = r);
                            break;
                        case l.C:
                            t.bezierCurveTo(s[d++], s[d++], s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], o = s[d - 1];
                            break;
                        case l.Q:
                            t.quadraticCurveTo(s[d++], s[d++], s[d++], s[d++]), n = s[d - 2], o = s[d - 1];
                            break;
                        case l.A:
                            var p = s[d++], v = s[d++], x = s[d++], _ = s[d++], b = s[d++], w = s[d++], S = s[d++], M = s[d++], A = x > _ ? x : _, I = x > _ ? 1 : x / _, T = x > _ ? _ / x : 1, L = Math.abs(x - _) > .001, C = b + w;
                            L ? (t.translate(p, v), t.rotate(S), t.scale(I, T), t.arc(0, 0, A, b, C, 1 - M), t.scale(1 / I, 1 / T), t.rotate(-S), t.translate(-p, -v)) : t.arc(p, v, A, b, C, 1 - M), 1 == d && (e = g(b) * x + p, i = m(b) * _ + v), n = g(C) * x + p, o = m(C) * _ + v;
                            break;
                        case l.R:
                            e = n = s[d], i = o = s[d + 1], t.rect(s[d++], s[d++], s[d++], s[d++]);
                            break;
                        case l.Z:
                            t.closePath(), n = e, o = i
                    }
                }
            }
        }, _.CMD = l, t.exports = _
    }, function (t, e) {
        "use strict";
        var i = {};
        t.exports = {
            register: function (t, e) {
                i[t] = e
            }, get: function (t) {
                return i[t]
            }
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            for (var e = 0; e < t.length; e++)t[e][1] || (t[e][1] = t[e][0]);
            return function (e) {
                for (var i = {}, o = 0; o < t.length; o++) {
                    var a = t[o][1];
                    if (!(e && n.indexOf(e, a) >= 0)) {
                        var r = this.getShallow(a);
                        null != r && (i[t[o][0]] = r)
                    }
                }
                return i
            }
        }
    }, function (t, e, i) {
        function n(t, e, i, n) {
            if (!e)return t;
            var s = a(e[0]), l = r.isArray(s) && s.length || 1;
            i = i || [], n = n || "extra";
            for (var h = 0; l > h; h++)if (!t[h]) {
                var u = i[h] || n + (h - i.length);
                t[h] = o(e, h) ? {type: "ordinal", name: u} : u
            }
            return t
        }

        function o(t, e) {
            for (var i = 0, n = t.length; n > i; i++) {
                var o = a(t[i]);
                if (!r.isArray(o))return !1;
                var o = o[e];
                if (null != o && isFinite(o))return !1;
                if (r.isString(o) && "-" !== o)return !0
            }
            return !1
        }

        function a(t) {
            return r.isArray(t) ? t : r.isObject(t) ? t.value : t
        }

        var r = i(1);
        t.exports = n
    }, function (t, e, i) {
        function n() {
            this._extent = [1 / 0, -(1 / 0)], this._interval = 0, this.init && this.init.apply(this, arguments)
        }

        var o = i(20), a = n.prototype;
        a.parse = function (t) {
            return t
        }, a.contain = function (t) {
            var e = this._extent;
            return t >= e[0] && t <= e[1]
        }, a.normalize = function (t) {
            var e = this._extent;
            return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
        }, a.scale = function (t) {
            var e = this._extent;
            return t * (e[1] - e[0]) + e[0]
        }, a.unionExtent = function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
        }, a.getExtent = function () {
            return this._extent.slice()
        }, a.setExtent = function (t, e) {
            var i = this._extent;
            isNaN(t) || (i[0] = t), isNaN(e) || (i[1] = e)
        }, a.getTicksLabels = function () {
            for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
            return t
        }, o.enableClassExtend(n), o.enableClassManagement(n, {registerWhenExtend: !0}), t.exports = n
    }, function (t, e) {
        var i = 1;
        "undefined" != typeof window && (i = Math.max(window.devicePixelRatio || 1, 1));
        var n = {debugMode: 0, devicePixelRatio: i};
        t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t.getBoundingClientRect ? t.getBoundingClientRect() : {left: 0, top: 0}
        }

        function o(t, e) {
            if (e = e || window.event, null != e.zrX)return e;
            var i = e.type, o = i && i.indexOf("touch") >= 0;
            if (o) {
                var a = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
                if (a) {
                    var r = n(t);
                    e.zrX = a.clientX - r.left, e.zrY = a.clientY - r.top
                }
            } else {
                var s = n(t);
                e.zrX = e.clientX - s.left, e.zrY = e.clientY - s.top, e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3
            }
            return e
        }

        function a(t, e, i) {
            l ? t.addEventListener(e, i) : t.attachEvent("on" + e, i)
        }

        function r(t, e, i) {
            l ? t.removeEventListener(e, i) : t.detachEvent("on" + e, i)
        }

        var s = i(21), l = "undefined" != typeof window && !!window.addEventListener, h = l ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        };
        t.exports = {normalizeEvent: o, addEventListener: a, removeEventListener: r, stop: h, Dispatcher: s}
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            for (var e = 0; e < t.length && null == t[e];)e++;
            return t[e]
        }

        function o(t) {
            var e = n(t);
            return null != e && !c.isArray(p(e))
        }

        function a(t, e, i) {
            if (t = t || [], !c.isArray(t))throw new Error("Invalid data.");
            var n = e.get("coordinateSystem"), a = m[n], r = f.get(n), s = a && a(t, e, i), d = s && s.dimensions;
            d || (d = r && r.dimensions || ["x", "y"], d = u(d, t, d.concat(["value"])));
            var v, y = s && s.categoryAxisModel, x = "ordinal" === d[0].type ? 0 : "ordinal" === d[1].type ? 1 : -1, _ = new h(d, e), b = l(s, t), w = y && o(t) ? function (t, e, i, n) {
                return n === x ? i : g(p(t), d[n])
            } : function (t, e, i, n) {
                var o = p(t), a = g(o && o[n], d[n]);
                return x === n && "string" == typeof a && (v = v || y.getCategories(), a = c.indexOf(v, a), 0 > a && !isNaN(a) && (a = +a)), a
            };
            return _.initData(t, b, w), _
        }

        function r(t) {
            return "category" !== t && "time" !== t
        }

        function s(t) {
            return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
        }

        function l(t, e) {
            var i = [];
            if (t && t.categoryAxisModel) {
                var n = t.categoryAxisModel.getCategories();
                if (n) {
                    var o = e.length;
                    if (c.isArray(e[0]) && e[0].length > 1) {
                        i = [];
                        for (var a = 0; o > a; a++)i[a] = n[e[a][t.categoryIndex || 0]]
                    } else i = n.slice(0)
                }
            }
            return i
        }

        var h = i(15), u = i(31), c = i(1), d = i(7), f = i(23), p = d.getDataItemValue, g = d.converDataValue, m = {
            cartesian2d: function (t, e, i) {
                var n = i.getComponent("xAxis", e.get("xAxisIndex")), o = i.getComponent("yAxis", e.get("yAxisIndex"));
                if (!n || !o)throw new Error("Axis option not found");
                var a = n.get("type"), l = o.get("type"), h = [{name: "x", type: s(a), stackable: r(a)}, {
                    name: "y",
                    type: s(l),
                    stackable: r(l)
                }], c = "category" === a;
                return u(h, t, ["x", "y", "z"]), {
                    dimensions: h,
                    categoryIndex: c ? 0 : 1,
                    categoryAxisModel: c ? n : "category" === l ? o : null
                }
            }, polar: function (t, e, i) {
                var n = e.get("polarIndex") || 0, o = function (t) {
                    return t.get("polarIndex") === n
                }, a = i.findComponents({
                    mainType: "angleAxis",
                    filter: o
                })[0], l = i.findComponents({mainType: "radiusAxis", filter: o})[0];
                if (!a || !l)throw new Error("Axis option not found");
                var h = l.get("type"), c = a.get("type"), d = [{
                    name: "radius",
                    type: s(h),
                    stackable: r(h)
                }, {name: "angle", type: s(c), stackable: r(c)}], f = "category" === c;
                return u(d, t, ["radius", "angle", "value"]), {
                    dimensions: d,
                    categoryIndex: f ? 1 : 0,
                    categoryAxisModel: f ? a : "category" === h ? l : null
                }
            }, geo: function (t, e, i) {
                return {dimensions: u([{name: "lng"}, {name: "lat"}], t, ["lng", "lat", "value"])}
            }
        };
        t.exports = a
    }, function (t, e, i) {
        "use strict";
        var n = i(3), o = i(1);
        i(52), i(95), i(2).extendComponentView({
            type: "grid", render: function (t, e) {
                this.group.removeAll(), t.get("show") && this.group.add(new n.Rect({
                    shape: t.coordinateSystem.getRect(),
                    style: o.defaults({fill: t.get("backgroundColor")}, t.getItemStyle()),
                    silent: !0
                }))
            }
        })
    }, function (t, e, i) {
        function n(t) {
            t = t || {}, r.call(this, t);
            for (var e in t)t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
            this.style = new a(t.style), this._rect = null, this.__clipPaths = []
        }

        var o = i(1), a = i(142), r = i(55), s = i(67);
        n.prototype = {
            constructor: n,
            type: "displayable",
            __dirty: !0,
            invisible: !1,
            z: 0,
            z2: 0,
            zlevel: 0,
            draggable: !1,
            dragging: !1,
            silent: !1,
            culling: !1,
            cursor: "pointer",
            rectHover: !1,
            beforeBrush: function (t) {
            },
            afterBrush: function (t) {
            },
            brush: function (t) {
            },
            getBoundingRect: function () {
            },
            contain: function (t, e) {
                return this.rectContain(t, e)
            },
            traverse: function (t, e) {
                t.call(e, this)
            },
            rectContain: function (t, e) {
                var i = this.transformCoordToLocal(t, e), n = this.getBoundingRect();
                return n.contain(i[0], i[1])
            },
            dirty: function () {
                this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
            },
            animateStyle: function (t) {
                return this.animate("style", t)
            },
            attrKV: function (t, e) {
                "style" !== t ? r.prototype.attrKV.call(this, t, e) : this.style.set(e)
            },
            setStyle: function (t, e) {
                return this.style.set(t, e), this.dirty(!1), this
            },
            useStyle: function (t) {
                return this.style = new a(t), this.dirty(!1), this
            }
        }, o.inherits(n, r), o.mixin(n, s), t.exports = n
    }, function (t, e, i) {
        var n = i(4), o = i(9), a = i(32), r = Math.floor, s = Math.ceil, l = a.extend({
            type: "interval",
            _interval: 0,
            setExtent: function (t, e) {
                var i = this._extent;
                isNaN(t) || (i[0] = parseFloat(t)), isNaN(e) || (i[1] = parseFloat(e))
            },
            unionExtent: function (t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), l.prototype.setExtent.call(this, e[0], e[1])
            },
            getInterval: function () {
                return this._interval || this.niceTicks(), this._interval
            },
            setInterval: function (t) {
                this._interval = t, this._niceExtent = this._extent.slice()
            },
            getTicks: function () {
                this._interval || this.niceTicks();
                var t = this._interval, e = this._extent, i = [], o = 1e4;
                if (t) {
                    var a = this._niceExtent;
                    e[0] < a[0] && i.push(e[0]);
                    for (var r = a[0]; r <= a[1];)if (i.push(r), r = n.round(r + t), i.length > o)return [];
                    e[1] > a[1] && i.push(e[1])
                }
                return i
            },
            getTicksLabels: function () {
                for (var t = [], e = this.getTicks(), i = 0; i < e.length; i++)t.push(this.getLabel(e[i]));
                return t
            },
            getLabel: function (t) {
                return o.addCommas(t)
            },
            niceTicks: function (t) {
                t = t || 5;
                var e = this._extent, i = e[1] - e[0];
                if (isFinite(i)) {
                    0 > i && (i = -i, e.reverse());
                    var o = n.nice(i / t, !0), a = [n.round(s(e[0] / o) * o), n.round(r(e[1] / o) * o)];
                    this._interval = o, this._niceExtent = a
                }
            },
            niceExtent: function (t, e, i) {
                var o = this._extent;
                if (o[0] === o[1])if (0 !== o[0]) {
                    var a = o[0] / 2;
                    o[0] -= a, o[1] += a
                } else o[1] = 1;
                var l = o[1] - o[0];
                isFinite(l) || (o[0] = 0, o[1] = 1), this.niceTicks(t);
                var h = this._interval;
                e || (o[0] = n.round(r(o[0] / h) * h)), i || (o[1] = n.round(s(o[1] / h) * h))
            }
        });
        l.create = function () {
            return new l
        }, t.exports = l
    }, function (t, e, i) {
        function n(t) {
            this.group = new a.Group, this._symbolCtor = t || r
        }

        function o(t, e, i) {
            var n = t.getItemLayout(e);
            return n && !isNaN(n[0]) && !isNaN(n[1]) && !(i && i(e)) && "none" !== t.getItemVisual(e, "symbol")
        }

        var a = i(3), r = i(47), s = n.prototype;
        s.updateData = function (t, e) {
            var i = this.group, n = t.hostModel, r = this._data, s = this._symbolCtor;
            t.diff(r).add(function (n) {
                var a = t.getItemLayout(n);
                if (o(t, n, e)) {
                    var r = new s(t, n);
                    r.attr("position", a), t.setItemGraphicEl(n, r), i.add(r)
                }
            }).update(function (l, h) {
                var u = r.getItemGraphicEl(h), c = t.getItemLayout(l);
                return o(t, l, e) ? (u ? (u.updateData(t, l), a.updateProps(u, {position: c}, n)) : (u = new s(t, l), u.attr("position", c)), i.add(u), void t.setItemGraphicEl(l, u)) : void i.remove(u)
            }).remove(function (t) {
                var e = r.getItemGraphicEl(t);
                e && e.fadeOut(function () {
                    i.remove(e)
                })
            }).execute(), this._data = t
        }, s.updateLayout = function () {
            var t = this._data;
            t && t.eachItemGraphicEl(function (e, i) {
                e.attr("position", t.getItemLayout(i))
            })
        }, s.remove = function (t) {
            var e = this.group, i = this._data;
            i && (t ? i.eachItemGraphicEl(function (t) {
                t.fadeOut(function () {
                    e.remove(t)
                })
            }) : e.removeAll())
        }, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            var e = {};
            return u(["start", "end", "startValue", "endValue"], function (i) {
                e[i] = t[i]
            }), e
        }

        function o(t, e, i, n) {
            null != i[e] && null == i[t] && (n[t] = null)
        }

        var a = i(1), r = i(14), s = i(2), l = i(7), h = i(169), u = a.each, c = l.eachAxisDim, d = s.extendComponentModel({
            type: "dataZoom",
            dependencies: ["xAxis", "yAxis", "zAxis", "radiusAxis", "angleAxis", "series"],
            defaultOption: {
                zlevel: 0,
                z: 4,
                orient: null,
                xAxisIndex: null,
                yAxisIndex: null,
                angleAxisIndex: null,
                radiusAxisIndex: null,
                filterMode: "filter",
                throttle: 100,
                start: 0,
                end: 100,
                startValue: null,
                endValue: null
            },
            init: function (t, e, i) {
                this._dataIntervalByAxis = {}, this._dataInfo = {}, this._axisProxies = {}, this.textStyleModel;
                var o = n(t);
                this.mergeDefaultAndTheme(t, i), this.doInit(o)
            },
            mergeOption: function (t) {
                var e = n(t);
                a.merge(this.option, t, !0), this.doInit(e)
            },
            doInit: function (t) {
                var e = this.option;
                r.canvasSupported || (e.realtime = !1), o("start", "startValue", t, e), o("end", "endValue", t, e), this.textStyleModel = this.getModel("textStyle"), this._resetTarget(), this._giveAxisProxies()
            },
            _giveAxisProxies: function () {
                var t = this._axisProxies;
                this.eachTargetAxis(function (e, i, n, o) {
                    var a = this.dependentModels[e.axis][i], r = a.__dzAxisProxy || (a.__dzAxisProxy = new h(e.name, i, this, o));
                    t[e.name + "_" + i] = r
                }, this)
            },
            _resetTarget: function () {
                var t = this.option, e = this._judgeAutoMode();
                c(function (e) {
                    var i = e.axisIndex;
                    t[i] = l.normalizeToArray(t[i])
                }, this), "axisIndex" === e ? this._autoSetAxisIndex() : "orient" === e && this._autoSetOrient()
            },
            _judgeAutoMode: function () {
                var t = this.option, e = !1;
                c(function (i) {
                    null != t[i.axisIndex] && (e = !0)
                }, this);
                var i = t.orient;
                return null == i && e ? "orient" : e ? void 0 : (null == i && (t.orient = "horizontal"), "axisIndex")
            },
            _autoSetAxisIndex: function () {
                var t = !0, e = this.get("orient", !0), i = this.option;
                if (t) {
                    var n = "vertical" === e ? {dim: "y", axisIndex: "yAxisIndex", axis: "yAxis"} : {
                        dim: "x",
                        axisIndex: "xAxisIndex",
                        axis: "xAxis"
                    };
                    this.dependentModels[n.axis].length && (i[n.axisIndex] = [0], t = !1)
                }
                t && c(function (e) {
                    if (t) {
                        var n = [], o = this.dependentModels[e.axis];
                        if (o.length && !n.length)for (var a = 0, r = o.length; r > a; a++)"category" === o[a].get("type") && n.push(a);
                        i[e.axisIndex] = n, n.length && (t = !1)
                    }
                }, this), t && this.ecModel.eachSeries(function (t) {
                    this._isSeriesHasAllAxesTypeOf(t, "value") && c(function (e) {
                        var n = i[e.axisIndex], o = t.get(e.axisIndex);
                        a.indexOf(n, o) < 0 && n.push(o)
                    })
                }, this)
            },
            _autoSetOrient: function () {
                var t;
                this.eachTargetAxis(function (e) {
                    !t && (t = e.name)
                }, this), this.option.orient = "y" === t ? "vertical" : "horizontal"
            },
            _isSeriesHasAllAxesTypeOf: function (t, e) {
                var i = !0;
                return c(function (n) {
                    var o = t.get(n.axisIndex), a = this.dependentModels[n.axis][o];
                    a && a.get("type") === e || (i = !1)
                }, this), i
            },
            getFirstTargetAxisModel: function () {
                var t;
                return c(function (e) {
                    if (null == t) {
                        var i = this.get(e.axisIndex);
                        i.length && (t = this.dependentModels[e.axis][i[0]])
                    }
                }, this), t
            },
            eachTargetAxis: function (t, e) {
                var i = this.ecModel;
                c(function (n) {
                    u(this.get(n.axisIndex), function (o) {
                        t.call(e, n, o, this, i)
                    }, this)
                }, this)
            },
            getAxisProxy: function (t, e) {
                return this._axisProxies[t + "_" + e]
            },
            setRawRange: function (t) {
                u(["start", "end", "startValue", "endValue"], function (e) {
                    this.option[e] = t[e]
                }, this)
            },
            getPercentRange: function () {
                var t = this.findRepresentativeAxisProxy();
                return t ? t.getDataPercentWindow() : void 0
            },
            getValueRange: function (t, e) {
                if (null != t || null != e)return this.getAxisProxy(t, e).getDataValueWindow();
                var i = this.findRepresentativeAxisProxy();
                return i ? i.getDataValueWindow() : void 0
            },
            findRepresentativeAxisProxy: function () {
                var t = this._axisProxies;
                for (var e in t)if (t.hasOwnProperty(e) && t[e].hostedBy(this))return t[e];
                for (var e in t)if (t.hasOwnProperty(e) && !t[e].hostedBy(this))return t[e]
            }
        });
        t.exports = d
    }, function (t, e, i) {
        var n = i(54);
        t.exports = n.extend({
            type: "dataZoom", render: function (t, e, i, n) {
                this.dataZoomModel = t, this.ecModel = e, this.api = i
            }, getTargetInfo: function () {
                function t(t, e, i, n) {
                    for (var o, a = 0; a < i.length; a++)if (i[a].model === t) {
                        o = i[a];
                        break
                    }
                    o || i.push(o = {model: t, axisModels: [], coordIndex: n}), o.axisModels.push(e)
                }

                var e = this.dataZoomModel, i = this.ecModel, n = [], o = [], a = [];
                return e.eachTargetAxis(function (e, r) {
                    var s = i.getComponent(e.axis, r);
                    if (s) {
                        a.push(s);
                        var l = s.get("gridIndex"), h = s.get("polarIndex");
                        if (null != l) {
                            var u = i.getComponent("grid", l);
                            t(u, s, n, l)
                        } else if (null != h) {
                            var u = i.getComponent("polar", h);
                            t(u, s, o, h)
                        }
                    }
                }, this), {cartesians: n, polars: o, axisModels: a}
            }
        })
    }, function (t, e, i) {
        var n = i(1), o = i(20), a = o.parseClassType, r = 0, s = {}, l = "_";
        s.getUID = function (t) {
            return [t || "", r++, Math.random()].join(l)
        }, s.enableSubTypeDefaulter = function (t) {
            var e = {};
            return t.registerSubTypeDefaulter = function (t, i) {
                t = a(t), e[t.main] = i
            }, t.determineSubType = function (i, n) {
                var o = n.type;
                if (!o) {
                    var r = a(i).main;
                    t.hasSubTypes(i) && e[r] && (o = e[r](n))
                }
                return o
            }, t
        }, s.enableTopologicalTravel = function (t, e) {
            function i(t) {
                var i = {}, r = [];
                return n.each(t, function (s) {
                    var l = o(i, s), h = l.originalDeps = e(s), u = a(h, t);
                    l.entryCount = u.length, 0 === l.entryCount && r.push(s), n.each(u, function (t) {
                        n.indexOf(l.predecessor, t) < 0 && l.predecessor.push(t);
                        var e = o(i, t);
                        n.indexOf(e.successor, t) < 0 && e.successor.push(s)
                    })
                }), {graph: i, noEntryList: r}
            }

            function o(t, e) {
                return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
            }

            function a(t, e) {
                var i = [];
                return n.each(t, function (t) {
                    n.indexOf(e, t) >= 0 && i.push(t)
                }), i
            }

            t.topologicalTravel = function (t, e, o, a) {
                function r(t) {
                    h[t].entryCount--, 0 === h[t].entryCount && u.push(t)
                }

                function s(t) {
                    c[t] = !0, r(t)
                }

                if (t.length) {
                    var l = i(e), h = l.graph, u = l.noEntryList, c = {};
                    for (n.each(t, function (t) {
                        c[t] = !0
                    }); u.length;) {
                        var d = u.pop(), f = h[d], p = !!c[d];
                        p && (o.call(a, d, f.originalDeps.slice()), delete c[d]), n.each(f.successor, p ? s : r)
                    }
                    n.each(c, function () {
                        throw new Error("Circle dependency may exists")
                    })
                }
            }
        }, t.exports = s
    }, function (t, e, i) {
        function n(t, e) {
            var i = t[1] - t[0], n = e, o = i / n / 2;
            t[0] += o, t[1] -= o
        }

        var o = i(4), a = o.linearMap, r = i(1), s = [0, 1], l = function (t, e, i) {
            this.dim = t, this.scale = e, this._extent = i || [0, 0], this.inverse = !1, this.onBand = !1
        };
        l.prototype = {
            constructor: l, contain: function (t) {
                var e = this._extent, i = Math.min(e[0], e[1]), n = Math.max(e[0], e[1]);
                return t >= i && n >= t
            }, containData: function (t) {
                return this.contain(this.dataToCoord(t))
            }, getExtent: function () {
                var t = this._extent.slice();
                return t
            }, getPixelPrecision: function (t) {
                return o.getPixelPrecision(t || this.scale.getExtent(), this._extent)
            }, setExtent: function (t, e) {
                var i = this._extent;
                i[0] = t, i[1] = e
            }, dataToCoord: function (t, e) {
                var i = this._extent, o = this.scale;
                return t = o.normalize(t), this.onBand && "ordinal" === o.type && (i = i.slice(), n(i, o.count())), a(t, s, i, e)
            }, coordToData: function (t, e) {
                var i = this._extent, o = this.scale;
                this.onBand && "ordinal" === o.type && (i = i.slice(), n(i, o.count()));
                var r = a(t, i, s, e);
                return this.scale.scale(r)
            }, getTicksCoords: function () {
                if (this.onBand) {
                    for (var t = this.getBands(), e = [], i = 0; i < t.length; i++)e.push(t[i][0]);
                    return t[i - 1] && e.push(t[i - 1][1]), e
                }
                return r.map(this.scale.getTicks(), this.dataToCoord, this)
            }, getLabelsCoords: function () {
                if (this.onBand) {
                    for (var t, e = this.getBands(), i = [], n = 0; n < e.length; n++)t = e[n], i.push((t[0] + t[1]) / 2);
                    return i
                }
                return r.map(this.scale.getTicks(), this.dataToCoord, this)
            }, getBands: function () {
                for (var t = this.getExtent(), e = [], i = this.scale.count(), n = t[0], o = t[1], a = o - n, r = 0; i > r; r++)e.push([a * r / i + n, a * (r + 1) / i + n]);
                return e
            }, getBandWidth: function () {
                var t = this._extent, e = this.scale.getExtent(), i = e[1] - e[0] + (this.onBand ? 1 : 0);
                0 === i && (i = 1);
                var n = Math.abs(t[1] - t[0]);
                return Math.abs(n) / i
            }
        }, t.exports = l
    }, function (t, e) {
        t.exports = function (t, e, i, n, o) {
            n.eachRawSeriesByType(t, function (t) {
                var o = t.getData(), a = t.get("symbol") || e, r = t.get("symbolSize");
                o.setVisual({
                    legendSymbol: i || a,
                    symbol: a,
                    symbolSize: r
                }), n.isSeriesFiltered(t) || ("function" == typeof r && o.each(function (e) {
                    var i = t.getRawValue(e), n = t.getDataParams(e);
                    o.setItemVisual(e, "symbolSize", r(i, n))
                }), o.each(function (t) {
                    var e = o.getItemModel(t), i = e.get("symbol", !0), n = e.get("symbolSize", !0);
                    null != i && o.setItemVisual(t, "symbol", i), null != n && o.setItemVisual(t, "symbolSize", n)
                }))
            })
        }
    }, function (t, e, i) {
        var n = i(33);
        t.exports = function () {
            if (0 !== n.debugMode)if (1 == n.debugMode)for (var t in arguments)throw new Error(arguments[t]); else if (n.debugMode > 1)for (var t in arguments)console.log(arguments[t])
        }
    }, function (t, e, i) {
        function n(t) {
            o.call(this, t)
        }

        var o = i(37), a = i(8), r = i(1), s = i(60), l = i(139), h = new l(50);
        n.prototype = {
            constructor: n, type: "image", brush: function (t) {
                var e, i = this.style, n = i.image;
                if (e = "string" == typeof n ? this._image : n, !e && n) {
                    var o = h.get(n);
                    if (!o)return e = new Image, e.onload = function () {
                        e.onload = null;
                        for (var t = 0; t < o.pending.length; t++)o.pending[t].dirty()
                    }, o = {image: e, pending: [this]}, e.src = n, h.put(n, o), void(this._image = e);
                    if (e = o.image, this._image = e, !e.width || !e.height)return void o.pending.push(this)
                }
                if (e) {
                    var a = i.width || e.width, r = i.height || e.height, l = i.x || 0, u = i.y || 0;
                    if (!e.width || !e.height)return;
                    if (t.save(), i.bind(t), this.setTransform(t), i.r && (t.beginPath(), s.buildPath(t, i), t.clip()), i.sWidth && i.sHeight) {
                        var c = i.sx || 0, d = i.sy || 0;
                        t.drawImage(e, c, d, i.sWidth, i.sHeight, l, u, a, r)
                    } else if (i.sx && i.sy) {
                        var c = i.sx, d = i.sy, f = a - c, p = r - d;
                        t.drawImage(e, c, d, f, p, l, u, a, r)
                    } else t.drawImage(e, l, u, a, r);
                    null == i.width && (i.width = a), null == i.height && (i.height = r), null != i.text && this.drawRectText(t, this.getBoundingRect()), t.restore()
                }
            }, getBoundingRect: function () {
                var t = this.style;
                return this._rect || (this._rect = new a(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
            }
        }, r.inherits(n, o), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return r.isArray(t) || (t = [+t, +t]), t
        }

        function o(t, e) {
            l.Group.call(this), this.updateData(t, e)
        }

        function a(t, e) {
            this.parent.drift(t, e)
        }

        var r = i(1), s = i(25), l = i(3), h = i(4), u = o.prototype;
        u._createSymbol = function (t, e, i) {
            this.removeAll();
            var o = e.hostModel, r = e.getItemVisual(i, "color"), h = s.createSymbol(t, -.5, -.5, 1, 1, r);
            h.attr({z2: 100, culling: !0, scale: [0, 0]}), h.drift = a;
            var u = n(e.getItemVisual(i, "symbolSize"));
            l.initProps(h, {scale: u}, o, i), this._symbolType = t, this.add(h)
        }, u.stopSymbolAnimation = function (t) {
            this.childAt(0).stopAnimation(t)
        }, u.getScale = function () {
            return this.childAt(0).scale
        }, u.highlight = function () {
            this.childAt(0).trigger("emphasis")
        }, u.downplay = function () {
            this.childAt(0).trigger("normal")
        }, u.setZ = function (t, e) {
            var i = this.childAt(0);
            i.zlevel = t, i.z = e
        }, u.setDraggable = function (t) {
            var e = this.childAt(0);
            e.draggable = t, e.cursor = t ? "move" : "pointer"
        }, u.updateData = function (t, e) {
            var i = t.getItemVisual(e, "symbol") || "circle", o = t.hostModel, a = n(t.getItemVisual(e, "symbolSize"));
            if (i !== this._symbolType)this._createSymbol(i, t, e); else {
                var r = this.childAt(0);
                l.updateProps(r, {scale: a}, o, e)
            }
            this._updateCommon(t, e, a), this._seriesModel = o
        };
        var c = ["itemStyle", "normal"], d = ["itemStyle", "emphasis"], f = ["label", "normal"], p = ["label", "emphasis"];
        u._updateCommon = function (t, e, i) {
            var o = this.childAt(0), a = t.hostModel, s = t.getItemModel(e), u = s.getModel(c), g = t.getItemVisual(e, "color");
            "image" !== o.type && o.useStyle({strokeNoScale: !0});
            var m = o.style, v = s.getModel(d).getItemStyle();
            o.rotation = (s.getShallow("symbolRotate") || 0) * Math.PI / 180 || 0;
            var y = s.getShallow("symbolOffset");
            if (y) {
                var x = o.position;
                x[0] = h.parsePercent(y[0], i[0]), x[1] = h.parsePercent(y[1], i[1])
            }
            o.setColor(g), r.extend(m, u.getItemStyle(["color"]));
            var _ = t.getItemVisual(e, "opacity");
            null != _ && (m.opacity = _);
            for (var b, w, S = s.getModel(f), M = s.getModel(p), A = t.dimensions.slice(); A.length && (b = A.pop(), w = t.getDimensionInfo(b).type, "ordinal" === w || "time" === w););
            null != b && S.get("show") ? (l.setText(m, S, g), m.text = r.retrieve(a.getFormattedLabel(e, "normal"), t.get(b, e))) : m.text = "", null != b && M.getShallow("show") ? (l.setText(v, M, g), v.text = r.retrieve(a.getFormattedLabel(e, "emphasis"), t.get(b, e))) : v.text = "";
            var I = n(t.getItemVisual(e, "symbolSize"));
            if (o.off("mouseover").off("mouseout").off("emphasis").off("normal"), l.setHoverStyle(o, v), s.getShallow("hoverAnimation")) {
                var T = function () {
                    var t = I[1] / I[0];
                    this.animateTo({scale: [Math.max(1.1 * I[0], I[0] + 3), Math.max(1.1 * I[1], I[1] + 3 * t)]}, 400, "elasticOut")
                }, L = function () {
                    this.animateTo({scale: I}, 400, "elasticOut")
                };
                o.on("mouseover", T).on("mouseout", L).on("emphasis", T).on("normal", L)
            }
        }, u.fadeOut = function (t) {
            var e = this.childAt(0);
            e.off("mouseover").off("mouseout").off("emphasis").off("normal"), e.style.text = "", l.updateProps(e, {scale: [0, 0]}, this._seriesModel, this.dataIndex, t)
        }, r.inherits(o, l.Group), t.exports = o
    }, function (t, e) {
        "use strict";
        function i(t) {
            return t
        }

        function n(t, e, n, o) {
            this._old = t, this._new = e, this._oldKeyGetter = n || i, this._newKeyGetter = o || i
        }

        function o(t, e, i) {
            for (var n = 0; n < t.length; n++) {
                var o = i(t[n]), a = e[o];
                null == a ? e[o] = n : (a.length || (e[o] = a = [a]), a.push(n))
            }
        }

        n.prototype = {
            constructor: n, add: function (t) {
                return this._add = t, this
            }, update: function (t) {
                return this._update = t, this
            }, remove: function (t) {
                return this._remove = t, this
            }, execute: function () {
                var t, e = this._old, i = this._new, n = this._oldKeyGetter, a = this._newKeyGetter, r = {}, s = {};
                for (o(e, r, n), o(i, s, a), t = 0; t < e.length; t++) {
                    var l = n(e[t]), h = s[l];
                    if (null != h) {
                        var u = h.length;
                        u ? (1 === u && (s[l] = null), h = h.unshift()) : s[l] = null, this._update && this._update(h, t)
                    } else this._remove && this._remove(t)
                }
                for (var l in s)if (s.hasOwnProperty(l)) {
                    var h = s[l];
                    if (null == h)continue;
                    if (h.length)for (var t = 0, u = h.length; u > t; t++)this._add && this._add(h[t]); else this._add && this._add(h)
                }
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            var e = {componentType: t.mainType};
            return e[t.mainType + "Index"] = t.componentIndex, e
        }

        function o(t, e, i) {
            var n, o, a = u(e - t.rotation);
            return c(a) ? (o = i > 0 ? "top" : "bottom", n = "center") : c(a - d) ? (o = i > 0 ? "bottom" : "top", n = "center") : (o = "middle", n = a > 0 && d > a ? i > 0 ? "right" : "left" : i > 0 ? "left" : "right"), {
                rotation: a,
                textAlign: n,
                verticalAlign: o
            }
        }

        function a(t, e, i) {
            var n, o, a = u(-t.rotation), r = i[0] > i[1], s = "start" === e && !r || "start" !== e && r;
            return c(a - d / 2) ? (o = s ? "bottom" : "top", n = "center") : c(a - 1.5 * d) ? (o = s ? "top" : "bottom", n = "center") : (o = "middle", n = 1.5 * d > a && a > d / 2 ? s ? "left" : "right" : s ? "right" : "left"), {
                rotation: a,
                textAlign: n,
                verticalAlign: o
            }
        }

        var r = i(1), s = i(3), l = i(12), h = i(4), u = h.remRadian, c = h.isRadianAroundZero, d = Math.PI, f = function (t, e) {
            this.opt = e, this.axisModel = t, r.defaults(e, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0
            }), this.group = new s.Group({position: e.position.slice(), rotation: e.rotation})
        };
        f.prototype = {
            constructor: f, hasBuilder: function (t) {
                return !!p[t]
            }, add: function (t) {
                p[t].call(this)
            }, getGroup: function () {
                return this.group
            }
        };
        var p = {
            axisLine: function () {
                var t = this.opt, e = this.axisModel;
                if (e.get("axisLine.show")) {
                    var i = this.axisModel.axis.getExtent();
                    this.group.add(new s.Line({
                        shape: {x1: i[0], y1: 0, x2: i[1], y2: 0},
                        style: r.extend({lineCap: "round"}, e.getModel("axisLine.lineStyle").getLineStyle()),
                        strokeContainThreshold: t.strokeContainThreshold,
                        silent: !!t.axisLineSilent,
                        z2: 1
                    }))
                }
            }, axisTick: function () {
                var t = this.axisModel;
                if (t.get("axisTick.show")) {
                    for (var e = t.axis, i = t.getModel("axisTick"), n = this.opt, o = i.getModel("lineStyle"), a = i.get("length"), r = m(i, n.labelInterval), l = e.getTicksCoords(), h = [], u = 0; u < l.length; u++)if (!g(e, u, r)) {
                        var c = l[u];
                        h.push(new s.Line(s.subPixelOptimizeLine({
                            shape: {x1: c, y1: 0, x2: c, y2: n.tickDirection * a},
                            style: {lineWidth: o.get("width")},
                            silent: !0
                        })))
                    }
                    this.group.add(s.mergePath(h, {style: o.getLineStyle(), z2: 2, silent: !0}))
                }
            }, axisLabel: function () {
                function t(t, e) {
                    var i = t && t.getBoundingRect().clone(), n = e && e.getBoundingRect().clone();
                    return i && n ? (i.applyTransform(t.getLocalTransform()), n.applyTransform(e.getLocalTransform()), i.intersect(n)) : void 0
                }

                var e = this.axisModel;
                if (e.get("axisLabel.show")) {
                    var i = this.opt, a = e.axis, r = e.getModel("axisLabel"), h = r.getModel("textStyle"), u = r.get("margin"), c = a.scale.getTicks(), f = e.getFormattedLabels(), p = i.labelRotation;
                    null == p && (p = r.get("rotate") || 0), p = p * d / 180;
                    for (var m = o(i, p, i.labelDirection), v = e.get("data"), y = [], x = e.get("silent"), _ = 0; _ < c.length; _++)if (!g(a, _, i.labelInterval)) {
                        var b = h;
                        v && v[_] && v[_].textStyle && (b = new l(v[_].textStyle, h, e.ecModel));
                        var w = b.getTextColor(), S = a.dataToCoord(c[_]), M = [S, i.labelOffset + i.labelDirection * u], A = a.scale.getLabel(c[_]), I = new s.Text({
                            style: {
                                text: f[_],
                                textAlign: b.get("align", !0) || m.textAlign,
                                textVerticalAlign: b.get("baseline", !0) || m.verticalAlign,
                                textFont: b.getFont(),
                                fill: "function" == typeof w ? w(A) : w
                            }, position: M, rotation: m.rotation, silent: x, z2: 10
                        });
                        I.eventData = n(e), I.eventData.targetType = "axisLabel", I.eventData.value = A, y.push(I), this.group.add(I)
                    }
                    if ("category" !== a.type) {
                        if (e.getMin ? e.getMin() : e.get("min")) {
                            var T = y[0], L = y[1];
                            t(T, L) && (T.ignore = !0)
                        }
                        if (e.getMax ? e.getMax() : e.get("max")) {
                            var C = y[y.length - 1], D = y[y.length - 2];
                            t(D, C) && (C.ignore = !0)
                        }
                    }
                }
            }, axisName: function () {
                var t = this.opt, e = this.axisModel, i = this.opt.axisName;
                if (null == i && (i = e.get("name")), i) {
                    var r, l = e.get("nameLocation"), h = t.nameDirection, u = e.getModel("nameTextStyle"), c = e.get("nameGap") || 0, d = this.axisModel.axis.getExtent(), f = d[0] > d[1] ? -1 : 1, p = ["start" === l ? d[0] - f * c : "end" === l ? d[1] + f * c : (d[0] + d[1]) / 2, "middle" === l ? t.labelOffset + h * c : 0];
                    r = "middle" === l ? o(t, t.rotation, h) : a(t, l, d);
                    var g = new s.Text({
                        style: {
                            text: i,
                            textFont: u.getFont(),
                            fill: u.getTextColor() || e.get("axisLine.lineStyle.color"),
                            textAlign: r.textAlign,
                            textVerticalAlign: r.verticalAlign
                        }, position: p, rotation: r.rotation, silent: e.get("silent"), z2: 1
                    });
                    g.eventData = n(e), g.eventData.targetType = "axisName", g.eventData.name = i, this.group.add(g)
                }
            }
        }, g = f.ifIgnoreOnTick = function (t, e, i) {
            var n, o = t.scale;
            return "ordinal" === o.type && ("function" == typeof i ? (n = o.getTicks()[e], !i(n, o.getLabel(n))) : e % (i + 1))
        }, m = f.getInterval = function (t, e) {
            var i = t.get("interval");
            return null != i && "auto" != i || (i = e), i
        };
        t.exports = f
    }, function (t, e, i) {
        function n(t) {
            return r.isObject(t) && null != t.value ? t.value : t
        }

        function o() {
            return "category" === this.get("type") && r.map(this.get("data"), n)
        }

        function a() {
            return s.getFormattedLabels(this.axis, this.get("axisLabel.formatter"))
        }

        var r = i(1), s = i(24);
        t.exports = {getFormattedLabels: a, getCategories: o}
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var o = i(10), a = i(1), r = i(62), s = o.extend({
            type: "cartesian2dAxis", axis: null,
            init: function () {
                s.superApply(this, "init", arguments), this._resetRange()
            }, mergeOption: function () {
                s.superApply(this, "mergeOption", arguments), this._resetRange()
            }, restoreData: function () {
                s.superApply(this, "restoreData", arguments), this._resetRange()
            }, setRange: function (t, e) {
                this.option.rangeStart = t, this.option.rangeEnd = e
            }, getMin: function () {
                var t = this.option;
                return null != t.rangeStart ? t.rangeStart : t.min
            }, getMax: function () {
                var t = this.option;
                return null != t.rangeEnd ? t.rangeEnd : t.max
            }, getNeedCrossZero: function () {
                var t = this.option;
                return null != t.rangeStart || null != t.rangeEnd ? !1 : !t.scale
            }, _resetRange: function () {
                this.option.rangeStart = this.option.rangeEnd = null
            }
        });
        a.merge(s.prototype, i(50));
        var l = {gridIndex: 0};
        r("x", s, n, l), r("y", s, n, l), t.exports = s
    }, function (t, e, i) {
        function n(t, e, i) {
            return i.getComponent("grid", t.get("gridIndex")) === e
        }

        function o(t) {
            var e, i = t.model, n = i.getFormattedLabels(), o = 1, a = n.length;
            a > 40 && (o = Math.ceil(a / 40));
            for (var r = 0; a > r; r += o)if (!t.isLabelIgnored(r)) {
                var s = i.getTextRect(n[r]);
                e ? e.union(s) : e = s
            }
            return e
        }

        function a(t, e, i) {
            this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, i), this._model = t
        }

        function r(t, e) {
            var i = t.getExtent(), n = i[0] + i[1];
            t.toGlobalCoord = "x" === t.dim ? function (t) {
                return t + e
            } : function (t) {
                return n - t + e
            }, t.toLocalCoord = "x" === t.dim ? function (t) {
                return t - e
            } : function (t) {
                return n - t + e
            }
        }

        var s = i(11), l = i(24), h = i(1), u = i(106), c = i(104), d = h.each, f = l.ifAxisCrossZero, p = l.niceScaleExtent;
        i(107);
        var g = a.prototype;
        g.type = "grid", g.getRect = function () {
            return this._rect
        }, g.update = function (t, e) {
            function i(t) {
                var e = n[t];
                for (var i in e) {
                    var o = e[i];
                    if (o && ("category" === o.type || !f(o)))return !0
                }
                return !1
            }

            var n = this._axesMap;
            this._updateScale(t, this._model), d(n.x, function (t) {
                p(t, t.model)
            }), d(n.y, function (t) {
                p(t, t.model)
            }), d(n.x, function (t) {
                i("y") && (t.onZero = !1)
            }), d(n.y, function (t) {
                i("x") && (t.onZero = !1)
            }), this.resize(this._model, e)
        }, g.resize = function (t, e) {
            function i() {
                d(a, function (t) {
                    var e = t.isHorizontal(), i = e ? [0, n.width] : [0, n.height], o = t.inverse ? 1 : 0;
                    t.setExtent(i[o], i[1 - o]), r(t, e ? n.x : n.y)
                })
            }

            var n = s.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()});
            this._rect = n;
            var a = this._axesList;
            i(), t.get("containLabel") && (d(a, function (t) {
                if (!t.model.get("axisLabel.inside")) {
                    var e = o(t);
                    if (e) {
                        var i = t.isHorizontal() ? "height" : "width", a = t.model.get("axisLabel.margin");
                        n[i] -= e[i] + a, "top" === t.position ? n.y += e.height + a : "left" === t.position && (n.x += e.width + a)
                    }
                }
            }), i())
        }, g.getAxis = function (t, e) {
            var i = this._axesMap[t];
            if (null != i) {
                if (null == e)for (var n in i)return i[n];
                return i[e]
            }
        }, g.getCartesian = function (t, e) {
            var i = "x" + t + "y" + e;
            return this._coordsMap[i]
        }, g._initCartesian = function (t, e, i) {
            function o(i) {
                return function (o, h) {
                    if (n(o, t, e)) {
                        var u = o.get("position");
                        "x" === i ? ("top" !== u && "bottom" !== u && (u = "bottom"), a[u] && (u = "top" === u ? "bottom" : "top")) : ("left" !== u && "right" !== u && (u = "left"), a[u] && (u = "left" === u ? "right" : "left")), a[u] = !0;
                        var d = new c(i, l.createScaleByModel(o), [0, 0], o.get("type"), u), f = "category" === d.type;
                        d.onBand = f && o.get("boundaryGap"), d.inverse = o.get("inverse"), d.onZero = o.get("axisLine.onZero"), o.axis = d, d.model = o, d.index = h, this._axesList.push(d), r[i][h] = d, s[i]++
                    }
                }
            }

            var a = {left: !1, right: !1, top: !1, bottom: !1}, r = {x: {}, y: {}}, s = {x: 0, y: 0};
            return e.eachComponent("xAxis", o("x"), this), e.eachComponent("yAxis", o("y"), this), s.x && s.y ? (this._axesMap = r, void d(r.x, function (t, e) {
                d(r.y, function (i, n) {
                    var o = "x" + e + "y" + n, a = new u(o);
                    a.grid = this, this._coordsMap[o] = a, this._coordsList.push(a), a.addAxis(t), a.addAxis(i)
                }, this)
            }, this)) : (this._axesMap = {}, void(this._axesList = []))
        }, g._updateScale = function (t, e) {
            function i(t, e, i) {
                d(i.coordDimToDataDim(e.dim), function (i) {
                    e.scale.unionExtent(t.getDataExtent(i, "ordinal" !== e.scale.type))
                })
            }

            h.each(this._axesList, function (t) {
                t.scale.setExtent(1 / 0, -(1 / 0))
            }), t.eachSeries(function (o) {
                if ("cartesian2d" === o.get("coordinateSystem")) {
                    var a = o.get("xAxisIndex"), r = o.get("yAxisIndex"), s = t.getComponent("xAxis", a), l = t.getComponent("yAxis", r);
                    if (!n(s, e, t) || !n(l, e, t))return;
                    var h = this.getCartesian(a, r), u = o.getData(), c = h.getAxis("x"), d = h.getAxis("y");
                    "list" === u.type && (i(u, c, o), i(u, d, o))
                }
            }, this)
        }, a.create = function (t, e) {
            var i = [];
            return t.eachComponent("grid", function (n, o) {
                var r = new a(n, t, e);
                r.name = "grid_" + o, r.resize(n, e), n.coordinateSystem = r, i.push(r)
            }), t.eachSeries(function (e) {
                if ("cartesian2d" === e.get("coordinateSystem")) {
                    var n = e.get("xAxisIndex"), o = t.getComponent("xAxis", n), a = i[o.get("gridIndex")];
                    e.coordinateSystem = a.getCartesian(n, e.get("yAxisIndex"))
                }
            }), i
        }, a.dimensions = u.prototype.dimensions, i(23).register("cartesian2d", a), t.exports = a
    }, function (t, e) {
        t.exports = function (t, e, i) {
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(), i = t.coordinateSystem;
                if (i) {
                    var n = i.dimensions;
                    e.each(n, function (t, n, o) {
                        var a;
                        a = isNaN(t) || isNaN(n) ? [NaN, NaN] : i.dataToPoint([t, n]), e.setItemLayout(o, a)
                    }, !0)
                }
            })
        }
    }, function (t, e, i) {
        var n = i(27), o = i(42), a = i(20), r = function () {
            this.group = new n, this.uid = o.getUID("viewComponent")
        };
        r.prototype = {
            constructor: r, init: function (t, e) {
            }, render: function (t, e, i, n) {
            }, dispose: function () {
            }
        };
        var s = r.prototype;
        s.updateView = s.updateLayout = s.updateVisual = function (t, e, i, n) {
        }, a.enableClassExtend(r), a.enableClassManagement(r, {registerWhenExtend: !0}), t.exports = r
    }, function (t, e, i) {
        "use strict";
        var n = i(58), o = i(21), a = i(77), r = i(154), s = i(1), l = function (t) {
            a.call(this, t), o.call(this, t), r.call(this, t), this.id = t.id || n()
        };
        l.prototype = {
            type: "element", name: "", __zr: null, ignore: !1, clipPath: null, drift: function (t, e) {
                switch (this.draggable) {
                    case"horizontal":
                        e = 0;
                        break;
                    case"vertical":
                        t = 0
                }
                var i = this.transform;
                i || (i = this.transform = [1, 0, 0, 1, 0, 0]), i[4] += t, i[5] += e, this.decomposeTransform(), this.dirty()
            }, beforeUpdate: function () {
            }, afterUpdate: function () {
            }, update: function () {
                this.updateTransform()
            }, traverse: function (t, e) {
            }, attrKV: function (t, e) {
                if ("position" === t || "scale" === t || "origin" === t) {
                    if (e) {
                        var i = this[t];
                        i || (i = this[t] = []), i[0] = e[0], i[1] = e[1]
                    }
                } else this[t] = e
            }, hide: function () {
                this.ignore = !0, this.__zr && this.__zr.refresh()
            }, show: function () {
                this.ignore = !1, this.__zr && this.__zr.refresh()
            }, attr: function (t, e) {
                if ("string" == typeof t)this.attrKV(t, e); else if (s.isObject(t))for (var i in t)t.hasOwnProperty(i) && this.attrKV(i, t[i]);
                return this.dirty(), this
            }, setClipPath: function (t) {
                var e = this.__zr;
                e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty()
            }, removeClipPath: function () {
                var t = this.clipPath;
                t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty())
            }, addSelfToZr: function (t) {
                this.__zr = t;
                var e = this.animators;
                if (e)for (var i = 0; i < e.length; i++)t.animation.addAnimator(e[i]);
                this.clipPath && this.clipPath.addSelfToZr(t)
            }, removeSelfFromZr: function (t) {
                this.__zr = null;
                var e = this.animators;
                if (e)for (var i = 0; i < e.length; i++)t.animation.removeAnimator(e[i]);
                this.clipPath && this.clipPath.removeSelfFromZr(t)
            }
        }, s.mixin(l, r), s.mixin(l, a), s.mixin(l, o), t.exports = l
    }, function (t, e, i) {
        function n(t, e) {
            return t[e]
        }

        function o(t, e, i) {
            t[e] = i
        }

        function a(t, e, i) {
            return (e - t) * i + t
        }

        function r(t, e, i) {
            return i > .5 ? e : t
        }

        function s(t, e, i, n, o) {
            var r = t.length;
            if (1 == o)for (var s = 0; r > s; s++)n[s] = a(t[s], e[s], i); else for (var l = t[0].length, s = 0; r > s; s++)for (var h = 0; l > h; h++)n[s][h] = a(t[s][h], e[s][h], i)
        }

        function l(t, e, i) {
            var n = t.length, o = e.length;
            if (n !== o) {
                var a = n > o;
                if (a)t.length = o; else for (var r = n; o > r; r++)t.push(1 === i ? e[r] : x.call(e[r]))
            }
            for (var s = t[0] && t[0].length, r = 0; r < t.length; r++)if (1 === i)isNaN(t[r]) && (t[r] = e[r]); else for (var l = 0; s > l; l++)isNaN(t[r][l]) && (t[r][l] = e[r][l])
        }

        function h(t, e, i) {
            if (t === e)return !0;
            var n = t.length;
            if (n !== e.length)return !1;
            if (1 === i) {
                for (var o = 0; n > o; o++)if (t[o] !== e[o])return !1
            } else for (var a = t[0].length, o = 0; n > o; o++)for (var r = 0; a > r; r++)if (t[o][r] !== e[o][r])return !1;
            return !0
        }

        function u(t, e, i, n, o, a, r, s, l) {
            var h = t.length;
            if (1 == l)for (var u = 0; h > u; u++)s[u] = c(t[u], e[u], i[u], n[u], o, a, r); else for (var d = t[0].length, u = 0; h > u; u++)for (var f = 0; d > f; f++)s[u][f] = c(t[u][f], e[u][f], i[u][f], n[u][f], o, a, r)
        }

        function c(t, e, i, n, o, a, r) {
            var s = .5 * (i - t), l = .5 * (n - e);
            return (2 * (e - i) + s + l) * r + (-3 * (e - i) - 2 * s - l) * a + s * o + e
        }

        function d(t) {
            if (y(t)) {
                var e = t.length;
                if (y(t[0])) {
                    for (var i = [], n = 0; e > n; n++)i.push(x.call(t[n]));
                    return i
                }
                return x.call(t)
            }
            return t
        }

        function f(t) {
            return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
        }

        function p(t, e, i, n, o) {
            var d = t._getter, p = t._setter, v = "spline" === e, x = n.length;
            if (x) {
                var _, b = n[0].value, w = y(b), S = !1, M = !1, A = w && y(b[0]) ? 2 : 1;
                n.sort(function (t, e) {
                    return t.time - e.time
                }), _ = n[x - 1].time;
                for (var I = [], T = [], L = n[0].value, C = !0, D = 0; x > D; D++) {
                    I.push(n[D].time / _);
                    var P = n[D].value;
                    if (w && h(P, L, A) || !w && P === L || (C = !1), L = P, "string" == typeof P) {
                        var k = m.parse(P);
                        k ? (P = k, S = !0) : M = !0
                    }
                    T.push(P)
                }
                if (!C) {
                    for (var z = T[x - 1], D = 0; x - 1 > D; D++)w ? l(T[D], z, A) : !isNaN(T[D]) || isNaN(z) || M || S || (T[D] = z);
                    w && l(d(t._target, o), z, A);
                    var E, O, R, V, N, B, G = 0, F = 0;
                    if (S)var H = [0, 0, 0, 0];
                    var W = function (t, e) {
                        var i;
                        if (F > e) {
                            for (E = Math.min(G + 1, x - 1), i = E; i >= 0 && !(I[i] <= e); i--);
                            i = Math.min(i, x - 2)
                        } else {
                            for (i = G; x > i && !(I[i] > e); i++);
                            i = Math.min(i - 1, x - 2)
                        }
                        G = i, F = e;
                        var n = I[i + 1] - I[i];
                        if (0 !== n)if (O = (e - I[i]) / n, v)if (V = T[i], R = T[0 === i ? i : i - 1], N = T[i > x - 2 ? x - 1 : i + 1], B = T[i > x - 3 ? x - 1 : i + 2], w)u(R, V, N, B, O, O * O, O * O * O, d(t, o), A); else {
                            var l;
                            if (S)l = u(R, V, N, B, O, O * O, O * O * O, H, 1), l = f(H); else {
                                if (M)return r(V, N, O);
                                l = c(R, V, N, B, O, O * O, O * O * O)
                            }
                            p(t, o, l)
                        } else if (w)s(T[i], T[i + 1], O, d(t, o), A); else {
                            var l;
                            if (S)s(T[i], T[i + 1], O, H, 1), l = f(H); else {
                                if (M)return r(T[i], T[i + 1], O);
                                l = a(T[i], T[i + 1], O)
                            }
                            p(t, o, l)
                        }
                    }, Z = new g({
                        target: t._target,
                        life: _,
                        loop: t._loop,
                        delay: t._delay,
                        onframe: W,
                        ondestroy: i
                    });
                    return e && "spline" !== e && (Z.easing = e), Z
                }
            }
        }

        var g = i(131), m = i(22), v = i(1), y = v.isArrayLike, x = Array.prototype.slice, _ = function (t, e, i, a) {
            this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = i || n, this._setter = a || o, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
        };
        _.prototype = {
            when: function (t, e) {
                var i = this._tracks;
                for (var n in e) {
                    if (!i[n]) {
                        i[n] = [];
                        var o = this._getter(this._target, n);
                        if (null == o)continue;
                        0 !== t && i[n].push({time: 0, value: d(o)})
                    }
                    i[n].push({time: t, value: e[n]})
                }
                return this
            }, during: function (t) {
                return this._onframeList.push(t), this
            }, _doneCallback: function () {
                this._tracks = {}, this._clipList.length = 0;
                for (var t = this._doneList, e = t.length, i = 0; e > i; i++)t[i].call(this)
            }, start: function (t) {
                var e, i = this, n = 0, o = function () {
                    n--, n || i._doneCallback()
                };
                for (var a in this._tracks) {
                    var r = p(this, t, o, this._tracks[a], a);
                    r && (this._clipList.push(r), n++, this.animation && this.animation.addClip(r), e = r)
                }
                if (e) {
                    var s = e.onframe;
                    e.onframe = function (t, e) {
                        s(t, e);
                        for (var n = 0; n < i._onframeList.length; n++)i._onframeList[n](t, e)
                    }
                }
                return n || this._doneCallback(), this
            }, stop: function (t) {
                for (var e = this._clipList, i = this.animation, n = 0; n < e.length; n++) {
                    var o = e[n];
                    t && o.onframe(this._target, 1), i && i.removeClip(o)
                }
                e.length = 0
            }, delay: function (t) {
                return this._delay = t, this
            }, done: function (t) {
                return t && this._doneList.push(t), this
            }, getClips: function () {
                return this._clipList
            }
        }, t.exports = _
    }, function (t, e) {
        var i = 2 * Math.PI;
        t.exports = {
            normalizeRadian: function (t) {
                return t %= i, 0 > t && (t += i), t
            }
        }
    }, function (t, e) {
        var i = 2311;
        t.exports = function () {
            return "zr_" + i++
        }
    }, function (t, e, i) {
        var n = i(144), o = i(143);
        t.exports = {
            buildPath: function (t, e, i) {
                var a = e.points, r = e.smooth;
                if (a && a.length >= 2) {
                    if (r && "spline" !== r) {
                        var s = o(a, r, i, e.smoothConstraint);
                        t.moveTo(a[0][0], a[0][1]);
                        for (var l = a.length, h = 0; (i ? l : l - 1) > h; h++) {
                            var u = s[2 * h], c = s[2 * h + 1], d = a[(h + 1) % l];
                            t.bezierCurveTo(u[0], u[1], c[0], c[1], d[0], d[1])
                        }
                    } else {
                        "spline" === r && (a = n(a, i)), t.moveTo(a[0][0], a[0][1]);
                        for (var h = 1, f = a.length; f > h; h++)t.lineTo(a[h][0], a[h][1])
                    }
                    i && t.closePath()
                }
            }
        }
    }, function (t, e) {
        t.exports = {
            buildPath: function (t, e) {
                var i, n, o, a, r = e.x, s = e.y, l = e.width, h = e.height, u = e.r;
                0 > l && (r += l, l = -l), 0 > h && (s += h, h = -h), "number" == typeof u ? i = n = o = a = u : u instanceof Array ? 1 === u.length ? i = n = o = a = u[0] : 2 === u.length ? (i = o = u[0], n = a = u[1]) : 3 === u.length ? (i = u[0], n = a = u[1], o = u[2]) : (i = u[0], n = u[1], o = u[2], a = u[3]) : i = n = o = a = 0;
                var c;
                i + n > l && (c = i + n, i *= l / c, n *= l / c), o + a > l && (c = o + a, o *= l / c, a *= l / c), n + o > h && (c = n + o, n *= h / c, o *= h / c), i + a > h && (c = i + a, i *= h / c, a *= h / c), t.moveTo(r + i, s), t.lineTo(r + l - n, s), 0 !== n && t.quadraticCurveTo(r + l, s, r + l, s + n), t.lineTo(r + l, s + h - o), 0 !== o && t.quadraticCurveTo(r + l, s + h, r + l - o, s + h), t.lineTo(r + a, s + h), 0 !== a && t.quadraticCurveTo(r, s + h, r, s + h - a), t.lineTo(r, s + i), 0 !== i && t.quadraticCurveTo(r, s, r + i, s)
            }
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = {
            updateSelectedMap: function (t) {
                this._selectTargetMap = n.reduce(t || [], function (t, e) {
                    return t[e.name] = e, t
                }, {})
            }, select: function (t) {
                var e = this._selectTargetMap, i = e[t], o = this.get("selectedMode");
                "single" === o && n.each(e, function (t) {
                    t.selected = !1
                }), i && (i.selected = !0)
            }, unSelect: function (t) {
                var e = this._selectTargetMap[t];
                e && (e.selected = !1)
            }, toggleSelected: function (t) {
                var e = this._selectTargetMap[t];
                return null != e ? (this[e.selected ? "unSelect" : "select"](t), e.selected) : void 0
            }, isSelected: function (t) {
                var e = this._selectTargetMap[t];
                return e && e.selected
            }
        }
    }, function (t, e, i) {
        var n = i(72), o = i(1), a = i(10), r = i(11), s = ["value", "category", "time", "log"];
        t.exports = function (t, e, i, l) {
            o.each(s, function (a) {
                e.extend({
                    type: t + "Axis." + a, mergeDefaultAndTheme: function (e, n) {
                        var s = this.layoutMode, l = s ? r.getLayoutParams(e) : {}, h = n.getTheme();
                        o.merge(e, h.get(a + "Axis")), o.merge(e, this.getDefaultOption()), e.type = i(t, e), s && r.mergeLayoutParam(e, l, s)
                    }, defaultOption: o.mergeAll([{}, n[a + "Axis"], l], !0)
                })
            }), a.registerSubTypeDefaulter(t + "Axis", o.curry(i, t))
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            var i = e.findComponents({mainType: "legend"});
            i && i.length && e.eachSeriesByType(t, function (t) {
                var e = t.getData();
                e.filterSelf(function (t) {
                    for (var n = e.getName(t), o = 0; o < i.length; o++)if (!i[o].isSelected(n))return !1;
                    return !0
                }, this)
            }, this)
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            var i = e.get("color"), n = 0;
            e.eachRawSeriesByType(t, function (t) {
                var o = t.get("color", !0), a = t.getRawData();
                if (!e.isSeriesFiltered(t)) {
                    var r = t.getData();
                    r.each(function (t) {
                        var e = r.getItemModel(t), s = r.getRawIndex(t), l = r.getItemVisual(t, "color", !0);
                        if (l)a.setItemVisual(s, "color", l); else {
                            var h = o ? o[s % o.length] : i[(s + n) % i.length], u = e.get("itemStyle.normal.color") || h;
                            a.setItemVisual(s, "color", u), r.setItemVisual(t, "color", u)
                        }
                    })
                }
                n += a.count()
            })
        }
    }, function (t, e, i) {
        var n = i(5), o = i(16), a = {}, r = Math.min, s = Math.max, l = Math.sin, h = Math.cos, u = n.create(), c = n.create(), d = n.create(), f = 2 * Math.PI;
        a.fromPoints = function (t, e, i) {
            if (0 !== t.length) {
                var n, o = t[0], a = o[0], l = o[0], h = o[1], u = o[1];
                for (n = 1; n < t.length; n++)o = t[n], a = r(a, o[0]), l = s(l, o[0]), h = r(h, o[1]), u = s(u, o[1]);
                e[0] = a, e[1] = h, i[0] = l, i[1] = u
            }
        }, a.fromLine = function (t, e, i, n, o, a) {
            o[0] = r(t, i), o[1] = r(e, n), a[0] = s(t, i), a[1] = s(e, n)
        };
        var p = [], g = [];
        a.fromCubic = function (t, e, i, n, a, l, h, u, c, d) {
            var f, m = o.cubicExtrema, v = o.cubicAt, y = m(t, i, a, h, p);
            for (c[0] = 1 / 0, c[1] = 1 / 0, d[0] = -(1 / 0), d[1] = -(1 / 0), f = 0; y > f; f++) {
                var x = v(t, i, a, h, p[f]);
                c[0] = r(x, c[0]), d[0] = s(x, d[0])
            }
            for (y = m(e, n, l, u, g), f = 0; y > f; f++) {
                var _ = v(e, n, l, u, g[f]);
                c[1] = r(_, c[1]), d[1] = s(_, d[1])
            }
            c[0] = r(t, c[0]), d[0] = s(t, d[0]), c[0] = r(h, c[0]), d[0] = s(h, d[0]), c[1] = r(e, c[1]), d[1] = s(e, d[1]), c[1] = r(u, c[1]), d[1] = s(u, d[1])
        }, a.fromQuadratic = function (t, e, i, n, a, l, h, u) {
            var c = o.quadraticExtremum, d = o.quadraticAt, f = s(r(c(t, i, a), 1), 0), p = s(r(c(e, n, l), 1), 0), g = d(t, i, a, f), m = d(e, n, l, p);
            h[0] = r(t, a, g), h[1] = r(e, l, m), u[0] = s(t, a, g), u[1] = s(e, l, m)
        }, a.fromArc = function (t, e, i, o, a, r, s, p, g) {
            var m = n.min, v = n.max, y = Math.abs(a - r);
            if (1e-4 > y % f && y > 1e-4)return p[0] = t - i, p[1] = e - o, g[0] = t + i, void(g[1] = e + o);
            if (u[0] = h(a) * i + t, u[1] = l(a) * o + e, c[0] = h(r) * i + t, c[1] = l(r) * o + e, m(p, u, c), v(g, u, c), a %= f, 0 > a && (a += f), r %= f, 0 > r && (r += f), a > r && !s ? r += f : r > a && s && (a += f), s) {
                var x = r;
                r = a, a = x
            }
            for (var _ = 0; r > _; _ += Math.PI / 2)_ > a && (d[0] = h(_) * i + t, d[1] = l(_) * o + e, m(p, d, p), v(g, d, g))
        }, t.exports = a
    }, function (t, e, i) {
        var n = i(37), o = i(1), a = i(18), r = function (t) {
            n.call(this, t)
        };
        r.prototype = {
            constructor: r, type: "text", brush: function (t) {
                var e = this.style, i = e.x || 0, n = e.y || 0, o = e.text, r = e.fill, s = e.stroke;
                if (null != o && (o += ""), o) {
                    if (t.save(), this.style.bind(t), this.setTransform(t), r && (t.fillStyle = r), s && (t.strokeStyle = s), t.font = e.textFont || e.font, t.textAlign = e.textAlign, e.textVerticalAlign) {
                        var l = a.getBoundingRect(o, t.font, e.textAlign, "top");
                        switch (t.textBaseline = "middle", e.textVerticalAlign) {
                            case"middle":
                                n -= l.height / 2 - l.lineHeight / 2;
                                break;
                            case"bottom":
                                n -= l.height - l.lineHeight / 2;
                                break;
                            default:
                                n += l.lineHeight / 2
                        }
                    } else t.textBaseline = e.textBaseline;
                    for (var h = a.measureText("国", t.font).width, u = o.split("\n"), c = 0; c < u.length; c++)r && t.fillText(u[c], i, n), s && t.strokeText(u[c], i, n), n += h;
                    t.restore()
                }
            }, getBoundingRect: function () {
                if (!this._rect) {
                    var t = this.style, e = t.textVerticalAlign, i = a.getBoundingRect(t.text + "", t.textFont || t.font, t.textAlign, e ? "top" : t.textBaseline);
                    switch (e) {
                        case"middle":
                            i.y -= i.height / 2;
                            break;
                        case"bottom":
                            i.y -= i.height
                    }
                    i.x += t.x || 0, i.y += t.y || 0, this._rect = i
                }
                return this._rect
            }
        }, o.inherits(r, n), t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
        }

        function o(t, e) {
            t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
        }

        var a = i(18), r = i(8), s = new r, l = function () {
        };
        l.prototype = {
            constructor: l, drawRectText: function (t, e, i) {
                var r = this.style, l = r.text;
                if (null != l && (l += ""), l) {
                    var h, u, c = r.textPosition, d = r.textDistance, f = r.textAlign, p = r.textFont || r.font, g = r.textBaseline, m = r.textVerticalAlign;
                    i = i || a.getBoundingRect(l, p, f, g);
                    var v = this.transform, y = this.invTransform;
                    if (v && (s.copy(e), s.applyTransform(v), e = s, o(t, y)), c instanceof Array) {
                        if (h = e.x + n(c[0], e.width), u = e.y + n(c[1], e.height), f = f || "left", g = g || "top", m) {
                            switch (m) {
                                case"middle":
                                    u -= i.height / 2 - i.lineHeight / 2;
                                    break;
                                case"bottom":
                                    u -= i.height - i.lineHeight / 2;
                                    break;
                                default:
                                    u += i.lineHeight / 2
                            }
                            g = "middle"
                        }
                    } else {
                        var x = a.adjustTextPositionOnRect(c, e, i, d);
                        h = x.x, u = x.y, f = f || x.textAlign, g = g || x.textBaseline
                    }
                    t.textAlign = f, t.textBaseline = g;
                    var _ = r.textFill, b = r.textStroke;
                    _ && (t.fillStyle = _), b && (t.strokeStyle = b), t.font = p, t.shadowColor = r.textShadowColor, t.shadowBlur = r.textShadowBlur, t.shadowOffsetX = r.textShadowOffsetX, t.shadowOffsetY = r.textShadowOffsetY;
                    for (var w = l.split("\n"), S = 0; S < w.length; S++)_ && t.fillText(w[S], h, u), b && t.strokeText(w[S], h, u), u += i.lineHeight;
                    v && o(t, v)
                }
            }
        }, t.exports = l
    }, function (t, e, i) {
        function n(t) {
            delete c[t]
        }

        /*!
         * ZRender, a high performance 2d drawing library.
         *
         * Copyright (c) 2013, Baidu Inc.
         * All rights reserved.
         *
         * LICENSE
         * https://github.com/ecomfe/zrender/blob/master/LICENSE.txt
         */
        var o = i(58), a = i(14), r = i(126), s = i(129), l = i(130), h = !a.canvasSupported, u = {canvas: i(128)}, c = {}, d = {};
        d.version = "3.1.0", d.init = function (t, e) {
            var i = new f(o(), t, e);
            return c[i.id] = i, i
        }, d.dispose = function (t) {
            if (t)t.dispose(); else {
                for (var e in c)c[e].dispose();
                c = {}
            }
            return d
        }, d.getInstance = function (t) {
            return c[t]
        }, d.registerPainter = function (t, e) {
            u[t] = e
        };
        var f = function (t, e, i) {
            i = i || {}, this.dom = e, this.id = t;
            var n = this, o = new s, c = i.renderer;
            if (h) {
                if (!u.vml)throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                c = "vml"
            } else c && u[c] || (c = "canvas");
            var d = new u[c](e, o, i);
            this.storage = o, this.painter = d, a.node || (this.handler = new r(d.getViewportRoot(), o, d)), this.animation = new l({
                stage: {
                    update: function () {
                        n._needsRefresh && n.refreshImmediately()
                    }
                }
            }), this.animation.start(), this._needsRefresh;
            var f = o.delFromMap, p = o.addToMap;
            o.delFromMap = function (t) {
                var e = o.get(t);
                f.call(o, t), e && e.removeSelfFromZr(n)
            }, o.addToMap = function (t) {
                p.call(o, t), t.addSelfToZr(n)
            }
        };
        f.prototype = {
            constructor: f, getId: function () {
                return this.id
            }, add: function (t) {
                this.storage.addRoot(t), this._needsRefresh = !0
            }, remove: function (t) {
                this.storage.delRoot(t), this._needsRefresh = !0
            }, configLayer: function (t, e) {
                this.painter.configLayer(t, e), this._needsRefresh = !0
            }, refreshImmediately: function () {
                this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
            }, refresh: function () {
                this._needsRefresh = !0
            }, resize: function () {
                this.painter.resize(), this.handler && this.handler.resize()
            }, clearAnimation: function () {
                this.animation.clear()
            }, getWidth: function () {
                return this.painter.getWidth()
            }, getHeight: function () {
                return this.painter.getHeight()
            }, pathToImage: function (t, e, i) {
                var n = o();
                return this.painter.pathToImage(n, t, e, i)
            }, setDefaultCursorStyle: function (t) {
                this.handler.setDefaultCursorStyle(t)
            }, on: function (t, e, i) {
                this.handler && this.handler.on(t, e, i)
            }, off: function (t, e) {
                this.handler && this.handler.off(t, e)
            }, trigger: function (t, e) {
                this.handler && this.handler.trigger(t, e)
            }, clear: function () {
                this.storage.delRoot(), this.painter.clear()
            }, dispose: function () {
                this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler && this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, n(this.id)
            }
        }, t.exports = d
    }, function (t, e, i) {
        var n = i(2), o = i(1);
        t.exports = function (t, e) {
            o.each(e, function (e) {
                e.update = "updateView", n.registerAction(e, function (i, n) {
                    var o = {};
                    return n.eachComponent({mainType: "series", subType: t, query: i}, function (t) {
                        t[e.method] && t[e.method](i.name);
                        var n = t.getData();
                        n.each(function (e) {
                            var i = n.getName(e);
                            o[i] = t.isSelected(i) || !1
                        })
                    }), {name: i.name, selected: o}
                })
            })
        }
    }, function (t, e, i) {
        function n(t) {
            if (!t.target || !t.target.draggable) {
                var e = t.offsetX, i = t.offsetY, n = this.rectProvider && this.rectProvider();
                n && n.contain(e, i) && (this._x = e, this._y = i, this._dragging = !0)
            }
        }

        function o(t) {
            if (this._dragging && (d.stop(t.event), "pinch" !== t.gestureEvent)) {
                if (f.isTaken("globalPan", this._zr))return;
                var e = t.offsetX, i = t.offsetY, n = e - this._x, o = i - this._y;
                this._x = e, this._y = i;
                var a = this.target;
                if (a) {
                    var r = a.position;
                    r[0] += n, r[1] += o, a.dirty()
                }
                d.stop(t.event), this.trigger("pan", n, o)
            }
        }

        function a(t) {
            this._dragging = !1
        }

        function r(t) {
            var e = t.wheelDelta > 0 ? 1.1 : 1 / 1.1;
            l.call(this, t, e, t.offsetX, t.offsetY)
        }

        function s(t) {
            if (!f.isTaken("globalPan", this._zr)) {
                var e = t.pinchScale > 1 ? 1.1 : 1 / 1.1;
                l.call(this, t, e, t.pinchX, t.pinchY)
            }
        }

        function l(t, e, i, n) {
            var o = this.rectProvider && this.rectProvider();
            if (o && o.contain(i, n)) {
                d.stop(t.event);
                var a = this.target, r = this.zoomLimit;
                if (a) {
                    var s = a.position, l = a.scale, h = this.zoom = this.zoom || 1;
                    if (h *= e, r) {
                        var u = r.min || 0, c = r.max || 1 / 0;
                        h = Math.max(Math.min(c, h), u)
                    }
                    var f = h / this.zoom;
                    this.zoom = h, s[0] -= (i - s[0]) * (f - 1), s[1] -= (n - s[1]) * (f - 1), l[0] *= f, l[1] *= f, a.dirty()
                }
                this.trigger("zoom", e, i, n)
            }
        }

        function h(t, e, i) {
            this.target = e, this.rectProvider = i, this.zoomLimit, this.zoom, this._zr = t;
            var l = c.bind, h = l(n, this), d = l(o, this), f = l(a, this), p = l(r, this), g = l(s, this);
            u.call(this), this.enable = function (e) {
                this.disable(), null == e && (e = !0), e !== !0 && "move" !== e && "pan" !== e || (t.on("mousedown", h), t.on("mousemove", d), t.on("mouseup", f)), e !== !0 && "scale" !== e && "zoom" !== e || (t.on("mousewheel", p), t.on("pinch", g))
            }, this.disable = function () {
                t.off("mousedown", h), t.off("mousemove", d), t.off("mouseup", f), t.off("mousewheel", p), t.off("pinch", g)
            }, this.dispose = this.disable, this.isDragging = function () {
                return this._dragging
            }, this.isPinching = function () {
                return this._pinching
            }
        }

        var u = i(21), c = i(1), d = i(34), f = i(101);
        c.mixin(h, u), t.exports = h
    }, function (t, e) {
        t.exports = function (t, e, i, n, o) {
            function a(t, e, i) {
                var n = e.length ? e.slice() : [e, e];
                return e[0] > e[1] && n.reverse(), 0 > t && n[0] + t < i[0] && (t = i[0] - n[0]), t > 0 && n[1] + t > i[1] && (t = i[1] - n[1]), t
            }

            return t ? ("rigid" === n ? (t = a(t, e, i), e[0] += t, e[1] += t) : (t = a(t, e[o], i), e[o] += t, "push" === n && e[0] > e[1] && (e[1 - o] = e[o])), e) : e
        }
    }, function (t, e, i) {
        var n = i(1), o = {
            show: !0,
            zlevel: 0,
            z: 0,
            inverse: !1,
            name: "",
            nameLocation: "end",
            nameTextStyle: {},
            nameGap: 15,
            silent: !0,
            axisLine: {show: !0, onZero: !0, lineStyle: {color: "#333", width: 1, type: "solid"}},
            axisTick: {show: !0, inside: !1, length: 5, lineStyle: {color: "#333", width: 1}},
            axisLabel: {show: !0, inside: !1, rotate: 0, margin: 8, textStyle: {color: "#333", fontSize: 12}},
            splitLine: {show: !0, lineStyle: {color: ["#ccc"], width: 1, type: "solid"}},
            splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]}}
        }, a = n.merge({
            boundaryGap: !0,
            axisTick: {interval: "auto"},
            axisLabel: {interval: "auto"}
        }, o), r = n.defaults({boundaryGap: [0, 0], splitNumber: 5}, o), s = n.defaults({
            scale: !0,
            min: "dataMin",
            max: "dataMax"
        }, r), l = n.defaults({}, r);
        l.scale = !0, t.exports = {categoryAxis: a, valueAxis: r, timeAxis: s, logAxis: l}
    }, function (t, e, i) {
        function n(t) {
            var e = t.pieceList;
            t.hasSpecialVisual = !1, c.each(e, function (e, i) {
                e.originIndex = i, null != e.visual && (t.hasSpecialVisual = !0)
            })
        }

        function o(t) {
            var e = t.categories, i = t.visual, n = t.categoryMap = {};
            if (p(e, function (t, e) {
                    n[t] = e
                }), !c.isArray(i)) {
                var o = [];
                c.isObject(i) ? p(i, function (t, e) {
                    var i = n[e];
                    o[null != i ? i : m] = t
                }) : o[m] = i, i = t.visual = o
            }
            for (var a = e.length - 1; a >= 0; a--)null == i[a] && (delete n[e[a]], e.pop())
        }

        function a(t, e) {
            var i = t.visual, n = [];
            c.isObject(i) ? p(i, function (t) {
                n.push(t)
            }) : null != i && n.push(i);
            var o = {color: 1, symbol: 1};
            e || 1 !== n.length || t.type in o || (n[1] = n[0]), t.visual = n
        }

        function r(t) {
            return {
                applyVisual: function (e, i, n) {
                    e = this.mapValueToVisual(e), n("color", t(i("color"), e))
                }, mapValueToVisual: function (t) {
                    var e = this._normalizeData(t), i = this._getSpecifiedVisual(t), n = this.option.visual;
                    return null == i && (i = u(this) ? h(this, n, e) : f(e, [0, 1], n, !0)), i
                }
            }
        }

        function s(t, e) {
            return t[Math.round(f(e, [0, 1], [0, t.length - 1], !0))]
        }

        function l(t, e, i) {
            i("color", this.mapValueToVisual(t))
        }

        function h(t, e, i) {
            return e[t.option.loop && i !== m ? i % e.length : i]
        }

        function u(t) {
            return "category" === t.option.mappingMethod
        }

        var c = i(1), d = i(22), f = i(4).linearMap, p = c.each, g = c.isObject, m = -1, v = function (t) {
            var e = t.mappingMethod, i = t.type, r = this.option = c.clone(t);
            this.type = i, this.mappingMethod = e, this._normalizeData = x[e], this._getSpecifiedVisual = c.bind(_[e], this, i), c.extend(this, y[i]), "piecewise" === e ? (a(r), n(r)) : "category" === e ? r.categories ? o(r) : a(r, !0) : (c.assert(r.dataExtent), a(r))
        };
        v.prototype = {
            constructor: v,
            applyVisual: null,
            isValueActive: null,
            mapValueToVisual: null,
            getNormalizer: function () {
                return c.bind(this._normalizeData, this)
            }
        };
        var y = v.visualHandlers = {
            color: {
                applyVisual: l, getColorMapper: function () {
                    var t = u(this) ? this.option.visual : c.map(this.option.visual, d.parse);
                    return c.bind(u(this) ? function (e, i) {
                        return !i && (e = this._normalizeData(e)), h(this, t, e)
                    } : function (e, i, n) {
                        var o = !!n;
                        return !i && (e = this._normalizeData(e)), n = d.fastMapToColor(e, t, n), o ? n : c.stringify(n, "rgba")
                    }, this)
                }, mapValueToVisual: function (t) {
                    var e = this.option.visual, i = this._normalizeData(t), n = this._getSpecifiedVisual(t);
                    return null == n && (n = u(this) ? h(this, e, i) : d.mapToColor(i, e)), n
                }
            }, colorHue: r(function (t, e) {
                return d.modifyHSL(t, e)
            }), colorSaturation: r(function (t, e) {
                return d.modifyHSL(t, null, e)
            }), colorLightness: r(function (t, e) {
                return d.modifyHSL(t, null, null, e)
            }), colorAlpha: r(function (t, e) {
                return d.modifyAlpha(t, e)
            }), opacity: {
                applyVisual: function (t, e, i) {
                    i("opacity", this.mapValueToVisual(t))
                }, mapValueToVisual: function (t) {
                    var e = this._normalizeData(t), i = this._getSpecifiedVisual(t), n = this.option.visual;
                    return null == i && (i = u(this) ? h(this, n, e) : f(e, [0, 1], n, !0)), i
                }
            }, symbol: {
                applyVisual: function (t, e, i) {
                    var n = this.mapValueToVisual(t);
                    if (c.isString(n))i("symbol", n); else if (g(n))for (var o in n)n.hasOwnProperty(o) && i(o, n[o])
                }, mapValueToVisual: function (t) {
                    var e = this._normalizeData(t), i = this._getSpecifiedVisual(t), n = this.option.visual;
                    return null == i && (i = u(this) ? h(this, n, e) : s(n, e) || {}), i
                }
            }, symbolSize: {
                applyVisual: function (t, e, i) {
                    i("symbolSize", this.mapValueToVisual(t))
                }, mapValueToVisual: function (t) {
                    var e = this._normalizeData(t), i = this._getSpecifiedVisual(t), n = this.option.visual;
                    return null == i && (i = u(this) ? h(this, n, e) : f(e, [0, 1], n, !0)), i
                }
            }
        }, x = {
            linear: function (t) {
                return f(t, this.option.dataExtent, [0, 1], !0)
            }, piecewise: function (t) {
                var e = this.option.pieceList, i = v.findPieceIndex(t, e);
                return null != i ? f(i, [0, e.length - 1], [0, 1], !0) : void 0
            }, category: function (t) {
                var e = this.option.categories ? this.option.categoryMap[t] : t;
                return null == e ? m : e
            }
        }, _ = {
            linear: c.noop, piecewise: function (t, e) {
                var i = this.option, n = i.pieceList;
                if (i.hasSpecialVisual) {
                    var o = v.findPieceIndex(e, n), a = n[o];
                    if (a && a.visual)return a.visual[t]
                }
            }, category: c.noop
        };
        v.addVisualHandler = function (t, e) {
            y[t] = e
        }, v.isValidType = function (t) {
            return y.hasOwnProperty(t)
        }, v.eachVisual = function (t, e, i) {
            c.isObject(t) ? c.each(t, e, i) : e.call(i, t)
        }, v.mapVisual = function (t, e, i) {
            var n, o = c.isArray(t) ? [] : c.isObject(t) ? {} : (n = !0, null);
            return v.eachVisual(t, function (t, a) {
                var r = e.call(i, t, a);
                n ? o = r : o[a] = r
            }), o
        }, v.retrieveVisuals = function (t) {
            var e, i = {};
            return t && p(y, function (n, o) {
                t.hasOwnProperty(o) && (i[o] = t[o], e = !0)
            }), e ? i : null
        }, v.prepareVisualTypes = function (t) {
            if (g(t)) {
                var e = [];
                p(t, function (t, i) {
                    e.push(i)
                }), t = e
            } else {
                if (!c.isArray(t))return [];
                t = t.slice()
            }
            return t.sort(function (t, e) {
                return "color" === e && "color" !== t && 0 === t.indexOf("color") ? 1 : -1
            }), t
        }, v.dependsOn = function (t, e) {
            return "color" === e ? !(!t || 0 !== t.indexOf(e)) : t === e
        }, v.findPieceIndex = function (t, e) {
            for (var i = 0, n = e.length; n > i; i++) {
                var o = e[i];
                if (null != o.value && o.value === t)return i
            }
            for (var i = 0, n = e.length; n > i; i++) {
                var o = e[i], a = o.interval;
                if (a)if (a[0] === -(1 / 0)) {
                    if (t < a[1])return i
                } else if (a[1] === 1 / 0) {
                    if (a[0] < t)return i
                } else if (o.interval[0] <= t && t <= o.interval[1])return i
            }
        }, t.exports = v
    }, function (t, e, i) {
        var n = i(17);
        t.exports = function (t, e, i) {
            function o(t) {
                var o = [e, "normal", "color"], a = i.get("color"), r = t.getData(), s = t.get(o) || a[t.seriesIndex % a.length];
                r.setVisual("color", s), i.isSeriesFiltered(t) || ("function" != typeof s || s instanceof n || r.each(function (e) {
                    r.setItemVisual(e, "color", s(t.getDataParams(e)))
                }), r.each(function (t) {
                    var e = r.getItemModel(t), i = e.get(o, !0);
                    null != i && r.setItemVisual(t, "color", i)
                }))
            }

            t ? i.eachSeriesByType(t, o) : i.eachSeries(o)
        }
    }, function (t, e) {
        t.exports = function (t, e, i, n, o, a) {
            if (a > e && a > n || e > a && n > a)return 0;
            if (n === e)return 0;
            var r = e > n ? 1 : -1, s = (a - e) / (n - e), l = s * (i - t) + t;
            return l > o ? r : 0
        }
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(17), a = function (t, e, i, n, a) {
            this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == i ? 1 : i, this.y2 = null == n ? 0 : n, o.call(this, a)
        };
        a.prototype = {constructor: a, type: "linear"}, n.inherits(a, o), t.exports = a
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t > s || -s > t
        }

        var o = i(19), a = i(5), r = o.identity, s = 5e-5, l = function (t) {
            t = t || {}, t.position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
        }, h = l.prototype;
        h.transform = null, h.needLocalTransform = function () {
            return n(this.rotation) || n(this.position[0]) || n(this.position[1]) || n(this.scale[0] - 1) || n(this.scale[1] - 1)
        }, h.updateTransform = function () {
            var t = this.parent, e = t && t.transform, i = this.needLocalTransform(), n = this.transform;
            return i || e ? (n = n || o.create(), i ? this.getLocalTransform(n) : r(n), e && (i ? o.mul(n, t.transform, n) : o.copy(n, t.transform)), this.transform = n, this.invTransform = this.invTransform || o.create(), void o.invert(this.invTransform, n)) : void(n && r(n))
        }, h.getLocalTransform = function (t) {
            t = t || [], r(t);
            var e = this.origin, i = this.scale, n = this.rotation, a = this.position;
            return e && (t[4] -= e[0], t[5] -= e[1]), o.scale(t, t, i), n && o.rotate(t, t, n), e && (t[4] += e[0], t[5] += e[1]), t[4] += a[0], t[5] += a[1], t
        }, h.setTransform = function (t) {
            var e = this.transform;
            e && t.transform(e[0], e[1], e[2], e[3], e[4], e[5])
        };
        var u = [];
        h.decomposeTransform = function () {
            if (this.transform) {
                var t = this.parent, e = this.transform;
                t && t.transform && (o.mul(u, t.invTransform, e), e = u);
                var i = e[0] * e[0] + e[1] * e[1], a = e[2] * e[2] + e[3] * e[3], r = this.position, s = this.scale;
                n(i - 1) && (i = Math.sqrt(i)), n(a - 1) && (a = Math.sqrt(a)), e[0] < 0 && (i = -i), e[3] < 0 && (a = -a), r[0] = e[4], r[1] = e[5], s[0] = i, s[1] = a, this.rotation = Math.atan2(-e[1] / a, e[0] / i)
            }
        }, h.getGlobalScale = function () {
            var t = this.transform;
            if (!t)return [1, 1];
            var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]), i = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
            return t[0] < 0 && (e = -e), t[3] < 0 && (i = -i), [e, i]
        }, h.transformCoordToLocal = function (t, e) {
            var i = [t, e], n = this.invTransform;
            return n && a.applyTransform(i, i, n), i
        }, h.transformCoordToGlobal = function (t, e) {
            var i = [t, e], n = this.transform;
            return n && a.applyTransform(i, i, n), i
        }, t.exports = l
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            o.each(a, function (e) {
                this[e] = o.bind(t[e], t)
            }, this)
        }

        var o = i(1), a = ["getDom", "getZr", "getWidth", "getHeight", "dispatchAction", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption"];
        t.exports = n
    }, function (t, e, i) {
        var n = i(1);
        i(52), i(80), i(81);
        var o = i(109), a = i(2);
        a.registerLayout(n.curry(o, "bar")), a.registerVisualCoding("chart", function (t) {
            t.eachSeriesByType("bar", function (t) {
                var e = t.getData();
                e.setVisual("legendSymbol", "roundRect")
            })
        }), i(36)
    }, function (t, e, i) {
        "use strict";
        var n = i(13), o = i(35);
        t.exports = n.extend({
            type: "series.bar",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                return o(t.data, this, e)
            },
            getMarkerPosition: function (t) {
                var e = this.coordinateSystem;
                if (e) {
                    var i = e.dataToPoint(t), n = this.getData(), o = n.getLayout("offset"), a = n.getLayout("size"), r = e.getBaseAxis().isHorizontal() ? 0 : 1;
                    return i[r] += o + a / 2, i
                }
                return [NaN, NaN]
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                barMinHeight: 0,
                itemStyle: {
                    normal: {barBorderColor: "#fff", barBorderWidth: 0},
                    emphasis: {barBorderColor: "#fff", barBorderWidth: 0}
                }
            }
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            var i = t.width > 0 ? 1 : -1, n = t.height > 0 ? 1 : -1;
            e = Math.min(e, Math.abs(t.width), Math.abs(t.height)), t.x += i * e / 2, t.y += n * e / 2, t.width -= i * e, t.height -= n * e
        }

        var o = i(1), a = i(3);
        o.extend(i(12).prototype, i(82)), t.exports = i(2).extendChartView({
            type: "bar", render: function (t, e, i) {
                var n = t.get("coordinateSystem");
                return "cartesian2d" === n && this._renderOnCartesian(t, e, i), this.group
            }, _renderOnCartesian: function (t, e, i) {
                function r(e, i) {
                    var r = l.getItemLayout(e), s = l.getItemModel(e).get(p) || 0;
                    n(r, s);
                    var h = new a.Rect({shape: o.extend({}, r)});
                    if (f) {
                        var u = h.shape, c = d ? "height" : "width", g = {};
                        u[c] = 0, g[c] = r[c], a[i ? "updateProps" : "initProps"](h, {shape: g}, t, e)
                    }
                    return h
                }

                var s = this.group, l = t.getData(), h = this._data, u = t.coordinateSystem, c = u.getBaseAxis(), d = c.isHorizontal(), f = t.get("animation"), p = ["itemStyle", "normal", "barBorderWidth"];
                l.diff(h).add(function (t) {
                    if (l.hasValue(t)) {
                        var e = r(t);
                        l.setItemGraphicEl(t, e), s.add(e)
                    }
                }).update(function (e, i) {
                    var o = h.getItemGraphicEl(i);
                    if (!l.hasValue(e))return void s.remove(o);
                    o || (o = r(e, !0));
                    var u = l.getItemLayout(e), c = l.getItemModel(e).get(p) || 0;
                    n(u, c), a.updateProps(o, {shape: u}, t, e), l.setItemGraphicEl(e, o), s.add(o)
                }).remove(function (e) {
                    var i = h.getItemGraphicEl(e);
                    i && (i.style.text = "", a.updateProps(i, {shape: {width: 0}}, t, e, function () {
                        s.remove(i)
                    }))
                }).execute(), this._updateStyle(t, l, d), this._data = l
            }, _updateStyle: function (t, e, i) {
                function n(t, e, i, n, o) {
                    a.setText(t, e, i), t.text = n, "outside" === t.textPosition && (t.textPosition = o)
                }

                e.eachItemGraphicEl(function (r, s) {
                    var l = e.getItemModel(s), h = e.getItemVisual(s, "color"), u = e.getItemVisual(s, "opacity"), c = e.getItemLayout(s), d = l.getModel("itemStyle.normal"), f = l.getModel("itemStyle.emphasis").getBarItemStyle();
                    r.setShape("r", d.get("barBorderRadius") || 0), r.useStyle(o.defaults({
                        fill: h,
                        opacity: u
                    }, d.getBarItemStyle()));
                    var p = i ? c.height > 0 ? "bottom" : "top" : c.width > 0 ? "left" : "right", g = l.getModel("label.normal"), m = l.getModel("label.emphasis"), v = r.style;
                    g.get("show") ? n(v, g, h, o.retrieve(t.getFormattedLabel(s, "normal"), t.getRawValue(s)), p) : v.text = "", m.get("show") ? n(f, m, h, o.retrieve(t.getFormattedLabel(s, "emphasis"), t.getRawValue(s)), p) : f.text = "", a.setHoverStyle(r, f)
                })
            }, remove: function (t, e) {
                var i = this.group;
                t.get("animation") ? this._data && this._data.eachItemGraphicEl(function (e) {
                    e.style.text = "", a.updateProps(e, {shape: {width: 0}}, t, e.dataIndex, function () {
                        i.remove(e)
                    })
                }) : i.removeAll()
            }
        })
    }, function (t, e, i) {
        t.exports = {getBarItemStyle: i(30)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["stroke", "barBorderColor"], ["lineWidth", "barBorderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]])}
    }, function (t, e, i) {
        function n(t) {
            return "_" + t + "Type"
        }

        function o(t, e, i) {
            var n = e.getItemVisual(i, "color"), o = e.getItemVisual(i, t), a = e.getItemVisual(i, t + "Size");
            if (o && "none" !== o) {
                f.isArray(a) || (a = [a, a]);
                var r = h.createSymbol(o, -a[0] / 2, -a[1] / 2, a[0], a[1], n);
                return r.name = t, r
            }
        }

        function a(t) {
            var e = new c({name: "line"});
            return r(e.shape, t), e
        }

        function r(t, e) {
            var i = e[0], n = e[1], o = e[2];
            t.x1 = i[0], t.y1 = i[1], t.x2 = n[0], t.y2 = n[1], t.percent = 1, o && (t.cpx1 = o[0], t.cpy1 = o[1])
        }

        function s() {
            var t = this, e = t.childOfName("fromSymbol"), i = t.childOfName("toSymbol"), n = t.childOfName("label");
            if (e || i || !n.ignore) {
                for (var o = 1, a = this.parent; a;)a.scale && (o /= a.scale[0]), a = a.parent;
                var r = t.childOfName("line");
                if (this.__dirty || r.__dirty) {
                    var s = r.shape.percent, l = r.pointAt(0), h = r.pointAt(s), c = u.sub([], h, l);
                    if (u.normalize(c, c), e) {
                        e.attr("position", l);
                        var d = r.tangentAt(0);
                        e.attr("rotation", Math.PI / 2 - Math.atan2(d[1], d[0])), e.attr("scale", [o * s, o * s])
                    }
                    if (i) {
                        i.attr("position", h);
                        var d = r.tangentAt(1);
                        i.attr("rotation", -Math.PI / 2 - Math.atan2(d[1], d[0])), i.attr("scale", [o * s, o * s])
                    }
                    if (!n.ignore) {
                        n.attr("position", h);
                        var f, p, g, m = 5 * o;
                        if ("end" === n.__position)f = [c[0] * m + h[0], c[1] * m + h[1]], p = c[0] > .8 ? "left" : c[0] < -.8 ? "right" : "center", g = c[1] > .8 ? "top" : c[1] < -.8 ? "bottom" : "middle"; else if ("middle" === n.__position) {
                            var v = s / 2, d = r.tangentAt(v), y = [d[1], -d[0]], x = r.pointAt(v);
                            y[1] > 0 && (y[0] = -y[0], y[1] = -y[1]), f = [x[0] + y[0] * m, x[1] + y[1] * m], p = "center", g = "bottom";
                            var _ = -Math.atan2(d[1], d[0]);
                            h[0] < l[0] && (_ = Math.PI + _), n.attr("rotation", _)
                        } else f = [-c[0] * m + l[0], -c[1] * m + l[1]], p = c[0] > .8 ? "right" : c[0] < -.8 ? "left" : "center", g = c[1] > .8 ? "bottom" : c[1] < -.8 ? "top" : "middle";
                        n.attr({
                            style: {textVerticalAlign: n.__verticalAlign || g, textAlign: n.__textAlign || p},
                            position: f,
                            scale: [o, o]
                        })
                    }
                }
            }
        }

        function l(t, e) {
            d.Group.call(this), this._createLine(t, e)
        }

        var h = i(25), u = i(5), c = i(164), d = i(3), f = i(1), p = i(4), g = ["fromSymbol", "toSymbol"], m = l.prototype;
        m.beforeUpdate = s, m._createLine = function (t, e) {
            var i = t.hostModel, r = t.getItemLayout(e), s = a(r);
            s.shape.percent = 0, d.initProps(s, {shape: {percent: 1}}, i, e), this.add(s);
            var l = new d.Text({name: "label"});
            this.add(l), f.each(g, function (i) {
                var a = o(i, t, e);
                this.add(a), this[n(i)] = t.getItemVisual(e, i)
            }, this), this._updateCommonStl(t, e)
        }, m.updateData = function (t, e) {
            var i = t.hostModel, a = this.childOfName("line"), s = t.getItemLayout(e), l = {shape: {}};
            r(l.shape, s), d.updateProps(a, l, i, e), f.each(g, function (i) {
                var a = t.getItemVisual(e, i), r = n(i);
                if (this[r] !== a) {
                    var s = o(i, t, e);
                    this.remove(this.childOfName(i)), this.add(s)
                }
                this[r] = a
            }, this), this._updateCommonStl(t, e)
        }, m._updateCommonStl = function (t, e) {
            var i = t.hostModel, n = this.childOfName("line"), o = t.getItemModel(e), a = o.getModel("label.normal"), r = a.getModel("textStyle"), s = o.getModel("label.emphasis"), l = s.getModel("textStyle"), h = p.round(i.getRawValue(e));
            isNaN(h) && (h = t.getName(e)), n.useStyle(f.extend({
                strokeNoScale: !0,
                fill: "none",
                stroke: t.getItemVisual(e, "color")
            }, o.getModel("lineStyle.normal").getLineStyle())), n.hoverStyle = o.getModel("lineStyle.emphasis").getLineStyle();
            var u = t.getItemVisual(e, "color") || "#000", c = this.childOfName("label");
            c.setStyle({
                text: a.get("show") ? f.retrieve(i.getFormattedLabel(e, "normal", t.dataType), h) : "",
                textFont: r.getFont(),
                fill: r.getTextColor() || u
            }), c.hoverStyle = {
                text: s.get("show") ? f.retrieve(i.getFormattedLabel(e, "emphasis", t.dataType), h) : "",
                textFont: l.getFont(),
                fill: l.getTextColor() || u
            }, c.__textAlign = r.get("align"), c.__verticalAlign = r.get("baseline"), c.__position = a.get("position"), c.ignore = !c.style.text && !c.hoverStyle.text, d.setHoverStyle(this)
        }, m.updateLayout = function (t, e) {
            var i = t.getItemLayout(e), n = this.childOfName("line");
            r(n.shape, i), n.dirty(!0)
        }, m.setLinePoints = function (t) {
            var e = this.childOfName("line");
            r(e.shape, t), e.dirty()
        }, f.inherits(l, d.Group), t.exports = l
    }, function (t, e, i) {
        function n(t) {
            return isNaN(t[0]) || isNaN(t[1])
        }

        function o(t) {
            return !n(t[0]) && !n(t[1])
        }

        function a(t) {
            this._ctor = t || s, this.group = new r.Group
        }

        var r = i(3), s = i(83), l = a.prototype;
        l.updateData = function (t) {
            var e = this._lineData, i = this.group, n = this._ctor;
            t.diff(e).add(function (e) {
                if (o(t.getItemLayout(e))) {
                    var a = new n(t, e);
                    t.setItemGraphicEl(e, a), i.add(a)
                }
            }).update(function (a, r) {
                var s = e.getItemGraphicEl(r);
                return o(t.getItemLayout(a)) ? (s ? s.updateData(t, a) : s = new n(t, a), t.setItemGraphicEl(a, s), void i.add(s)) : void i.remove(s)
            }).remove(function (t) {
                i.remove(e.getItemGraphicEl(t))
            }).execute(), this._lineData = t
        }, l.updateLayout = function () {
            var t = this._lineData;
            t.eachItemGraphicEl(function (e, i) {
                e.updateLayout(t, i)
            }, this)
        }, l.remove = function () {
            this.group.removeAll()
        }, t.exports = a
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(86), i(87), o.registerVisualCoding("chart", n.curry(i(44), "line", "circle", "line")), o.registerLayout(n.curry(i(53), "line")), o.registerProcessor("statistic", n.curry(i(121), "line")), i(36)
    }, function (t, e, i) {
        "use strict";
        var n = i(35), o = i(13);
        t.exports = o.extend({
            type: "series.line",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                return n(t.data, this, e)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                clipOverflow: !0,
                label: {normal: {position: "top"}},
                lineStyle: {normal: {width: 2, type: "solid"}},
                smooth: !1,
                smoothMonotone: null,
                symbol: "emptyCircle",
                symbolSize: 4,
                symbolRotate: null,
                showSymbol: !0,
                showAllSymbol: !1,
                connectNulls: !1,
                sampling: "none",
                animationEasing: "linear"
            }
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            if (t.length === e.length) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i], o = e[i];
                    if (n[0] !== o[0] || n[1] !== o[1])return
                }
                return !0
            }
        }

        function o(t) {
            return "number" == typeof t ? t : t ? .3 : 0
        }

        function a(t) {
            var e = t.getGlobalExtent();
            if (t.onBand) {
                var i = t.getBandWidth() / 2 - 1, n = e[1] > e[0] ? 1 : -1;
                e[0] += n * i, e[1] -= n * i
            }
            return e
        }

        function r(t) {
            return t >= 0 ? 1 : -1
        }

        function s(t, e) {
            var i = t.getBaseAxis(), n = t.getOtherAxis(i), o = i.onZero ? 0 : n.scale.getExtent()[0], a = n.dim, s = "x" === a || "radius" === a ? 1 : 0;
            return e.mapArray([a], function (n, l) {
                for (var h, u = e.stackedOn; u && r(u.get(a, l)) === r(n);) {
                    h = u;
                    break
                }
                var c = [];
                return c[s] = e.get(i.dim, l), c[1 - s] = h ? h.get(a, l, !0) : o, t.dataToPoint(c)
            }, !0)
        }

        function l(t, e) {
            return null != e.dataIndex ? e.dataIndex : null != e.name ? t.indexOfName(e.name) : void 0
        }

        function h(t, e, i) {
            var n = a(t.getAxis("x")), o = a(t.getAxis("y")), r = t.getBaseAxis().isHorizontal(), s = Math.min(n[0], n[1]), l = Math.min(o[0], o[1]), h = Math.max(n[0], n[1]) - s, u = Math.max(o[0], o[1]) - l, c = i.get("lineStyle.normal.width") || 2, d = i.get("clipOverflow") ? c / 2 : Math.max(h, u);
            r ? (l -= d, u += 2 * d) : (s -= d, h += 2 * d);
            var f = new m.Rect({shape: {x: s, y: l, width: h, height: u}});
            return e && (f.shape[r ? "width" : "height"] = 0, m.initProps(f, {shape: {width: h, height: u}}, i)), f
        }

        function u(t, e, i) {
            var n = t.getAngleAxis(), o = t.getRadiusAxis(), a = o.getExtent(), r = n.getExtent(), s = Math.PI / 180, l = new m.Sector({
                shape: {
                    cx: t.cx,
                    cy: t.cy,
                    r0: a[0],
                    r: a[1],
                    startAngle: -r[0] * s,
                    endAngle: -r[1] * s,
                    clockwise: n.inverse
                }
            });
            return e && (l.shape.endAngle = -r[0] * s, m.initProps(l, {shape: {endAngle: -r[1] * s}}, i)), l
        }

        function c(t, e, i) {
            return "polar" === t.type ? u(t, e, i) : h(t, e, i)
        }

        var d = i(1), f = i(39), p = i(47), g = i(88), m = i(3), v = i(89), y = i(26);
        t.exports = y.extend({
            type: "line", init: function () {
                var t = new m.Group, e = new f;
                this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
            }, render: function (t, e, i) {
                var a = t.coordinateSystem, r = this.group, l = t.getData(), h = t.getModel("lineStyle.normal"), u = t.getModel("areaStyle.normal"), f = l.mapArray(l.getItemLayout, !0), p = "polar" === a.type, g = this._coordSys, m = this._symbolDraw, v = this._polyline, y = this._polygon, x = this._lineGroup, _ = t.get("animation"), b = !u.isEmpty(), w = s(a, l), S = t.get("showSymbol"), M = S && !p && !t.get("showAllSymbol") && this._getSymbolIgnoreFunc(l, a), A = this._data;
                A && A.eachItemGraphicEl(function (t, e) {
                    t.__temp && (r.remove(t), A.setItemGraphicEl(e, null))
                }), S || m.remove(), r.add(x), v && g.type === a.type ? (b && !y ? y = this._newPolygon(f, w, a, _) : y && !b && (x.remove(y), y = this._polygon = null), x.setClipPath(c(a, !1, t)), S && m.updateData(l, M), l.eachItemGraphicEl(function (t) {
                    t.stopAnimation(!0)
                }), n(this._stackedOnPoints, w) && n(this._points, f) || (_ ? this._updateAnimation(l, w, a, i) : (v.setShape({points: f}), y && y.setShape({
                    points: f,
                    stackedOnPoints: w
                })))) : (S && m.updateData(l, M), v = this._newPolyline(f, a, _), b && (y = this._newPolygon(f, w, a, _)), x.setClipPath(c(a, !0, t))), v.useStyle(d.defaults(h.getLineStyle(), {
                    fill: "none",
                    stroke: l.getVisual("color"),
                    lineJoin: "bevel"
                }));
                var I = t.get("smooth");
                if (I = o(t.get("smooth")), v.setShape({
                        smooth: I,
                        smoothMonotone: t.get("smoothMonotone"),
                        connectNulls: t.get("connectNulls")
                    }), y) {
                    var T = l.stackedOn, L = 0;
                    if (y.useStyle(d.defaults(u.getAreaStyle(), {
                            fill: l.getVisual("color"),
                            opacity: .7,
                            lineJoin: "bevel"
                        })), T) {
                        var C = T.hostModel;
                        L = o(C.get("smooth"))
                    }
                    y.setShape({
                        smooth: I,
                        stackedOnSmooth: L,
                        smoothMonotone: t.get("smoothMonotone"),
                        connectNulls: t.get("connectNulls")
                    })
                }
                this._data = l, this._coordSys = a, this._stackedOnPoints = w, this._points = f
            }, highlight: function (t, e, i, n) {
                var o = t.getData(), a = l(o, n);
                if (null != a && a >= 0) {
                    var r = o.getItemGraphicEl(a);
                    if (!r) {
                        var s = o.getItemLayout(a);
                        r = new p(o, a, i), r.position = s, r.setZ(t.get("zlevel"), t.get("z")), r.ignore = isNaN(s[0]) || isNaN(s[1]), r.__temp = !0, o.setItemGraphicEl(a, r), r.stopSymbolAnimation(!0), this.group.add(r)
                    }
                    r.highlight()
                } else y.prototype.highlight.call(this, t, e, i, n)
            }, downplay: function (t, e, i, n) {
                var o = t.getData(), a = l(o, n);
                if (null != a && a >= 0) {
                    var r = o.getItemGraphicEl(a);
                    r && (r.__temp ? (o.setItemGraphicEl(a, null), this.group.remove(r)) : r.downplay())
                } else y.prototype.downplay.call(this, t, e, i, n)
            }, _newPolyline: function (t) {
                var e = this._polyline;
                return e && this._lineGroup.remove(e), e = new v.Polyline({
                    shape: {points: t},
                    silent: !0,
                    z2: 10
                }), this._lineGroup.add(e), this._polyline = e, e
            }, _newPolygon: function (t, e) {
                var i = this._polygon;
                return i && this._lineGroup.remove(i), i = new v.Polygon({
                    shape: {points: t, stackedOnPoints: e},
                    silent: !0
                }), this._lineGroup.add(i), this._polygon = i, i
            }, _getSymbolIgnoreFunc: function (t, e) {
                var i = e.getAxesByScale("ordinal")[0];
                return i && i.isLabelIgnored ? d.bind(i.isLabelIgnored, i) : void 0
            }, _updateAnimation: function (t, e, i, n) {
                var o = this._polyline, a = this._polygon, r = t.hostModel, s = g(this._data, t, this._stackedOnPoints, e, this._coordSys, i);
                o.shape.points = s.current, m.updateProps(o, {shape: {points: s.next}}, r), a && (a.setShape({
                    points: s.current,
                    stackedOnPoints: s.stackedOnCurrent
                }), m.updateProps(a, {shape: {points: s.next, stackedOnPoints: s.stackedOnNext}}, r));
                for (var l = [], h = s.status, u = 0; u < h.length; u++) {
                    var c = h[u].cmd;
                    if ("=" === c) {
                        var d = t.getItemGraphicEl(h[u].idx1);
                        d && l.push({el: d, ptIdx: u})
                    }
                }
                o.animators && o.animators.length && o.animators[0].during(function () {
                    for (var t = 0; t < l.length; t++) {
                        var e = l[t].el;
                        e.attr("position", o.shape.points[l[t].ptIdx])
                    }
                })
            }, remove: function (t) {
                var e = this.group, i = this._data;
                this._lineGroup.removeAll(), this._symbolDraw.remove(!0), i && i.eachItemGraphicEl(function (t, n) {
                    t.__temp && (e.remove(t), i.setItemGraphicEl(n, null))
                }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
            }
        })
    }, function (t, e) {
        function i(t) {
            return t >= 0 ? 1 : -1
        }

        function n(t, e, n) {
            for (var o, a = t.getBaseAxis(), r = t.getOtherAxis(a), s = a.onZero ? 0 : r.scale.getExtent()[0], l = r.dim, h = "x" === l || "radius" === l ? 1 : 0, u = e.stackedOn, c = e.get(l, n); u && i(u.get(l, n)) === i(c);) {
                o = u;
                break
            }
            var d = [];
            return d[h] = e.get(a.dim, n), d[1 - h] = o ? o.get(l, n, !0) : s, t.dataToPoint(d)
        }

        function o(t, e) {
            var i = [];
            return e.diff(t).add(function (t) {
                i.push({cmd: "+", idx: t})
            }).update(function (t, e) {
                i.push({cmd: "=", idx: e, idx1: t})
            }).remove(function (t) {
                i.push({cmd: "-", idx: t})
            }).execute(), i
        }

        t.exports = function (t, e, i, a, r, s) {
            for (var l = o(t, e), h = [], u = [], c = [], d = [], f = [], p = [], g = [], m = s.dimensions, v = 0; v < l.length; v++) {
                var y = l[v], x = !0;
                switch (y.cmd) {
                    case"=":
                        var _ = t.getItemLayout(y.idx), b = e.getItemLayout(y.idx1);
                        (isNaN(_[0]) || isNaN(_[1])) && (_ = b.slice()), h.push(_), u.push(b), c.push(i[y.idx]), d.push(a[y.idx1]), g.push(e.getRawIndex(y.idx1));
                        break;
                    case"+":
                        var w = y.idx;
                        h.push(r.dataToPoint([e.get(m[0], w, !0), e.get(m[1], w, !0)])), u.push(e.getItemLayout(w).slice()), c.push(n(r, e, w)), d.push(a[w]), g.push(e.getRawIndex(w));
                        break;
                    case"-":
                        var w = y.idx, S = t.getRawIndex(w);
                        S !== w ? (h.push(t.getItemLayout(w)), u.push(s.dataToPoint([t.get(m[0], w, !0), t.get(m[1], w, !0)])), c.push(i[w]), d.push(n(s, t, w)), g.push(S)) : x = !1
                }
                x && (f.push(y), p.push(p.length))
            }
            p.sort(function (t, e) {
                return g[t] - g[e]
            });
            for (var M = [], A = [], I = [], T = [], L = [], v = 0; v < p.length; v++) {
                var w = p[v];
                M[v] = h[w], A[v] = u[w], I[v] = c[w], T[v] = d[w], L[v] = f[w]
            }
            return {current: M, next: A, stackedOnCurrent: I, stackedOnNext: T, status: L}
        }
    }, function (t, e, i) {
        function n(t) {
            return isNaN(t[0]) || isNaN(t[1])
        }

        function o(t, e, i, o, a, r, g, m, v, y, x) {
            for (var _ = 0, b = i, w = 0; o > w; w++) {
                var S = e[b];
                if (b >= a || 0 > b)break;
                if (n(S)) {
                    if (x) {
                        b += r;
                        continue
                    }
                    break
                }
                if (b === i)t[r > 0 ? "moveTo" : "lineTo"](S[0], S[1]), c(f, S); else if (v > 0) {
                    var M = b + r, A = e[M];
                    if (x)for (; A && n(e[M]);)M += r, A = e[M];
                    var I = .5, T = e[_], A = e[M];
                    if (!A || n(A))c(p, S); else {
                        n(A) && !x && (A = S), s.sub(d, A, T);
                        var L, C;
                        if ("x" === y || "y" === y) {
                            var D = "x" === y ? 0 : 1;
                            L = Math.abs(S[D] - T[D]), C = Math.abs(S[D] - A[D])
                        } else L = s.dist(S, T), C = s.dist(S, A);
                        I = C / (C + L), u(p, S, d, -v * (1 - I))
                    }
                    l(f, f, m), h(f, f, g), l(p, p, m), h(p, p, g), t.bezierCurveTo(f[0], f[1], p[0], p[1], S[0], S[1]), u(f, S, d, v * I)
                } else t.lineTo(S[0], S[1]);
                _ = b, b += r
            }
            return w
        }

        function a(t, e) {
            var i = [1 / 0, 1 / 0], n = [-(1 / 0), -(1 / 0)];
            if (e)for (var o = 0; o < t.length; o++) {
                var a = t[o];
                a[0] < i[0] && (i[0] = a[0]), a[1] < i[1] && (i[1] = a[1]), a[0] > n[0] && (n[0] = a[0]), a[1] > n[1] && (n[1] = a[1])
            }
            return {min: e ? i : n, max: e ? n : i}
        }

        var r = i(6), s = i(5), l = s.min, h = s.max, u = s.scaleAndAdd, c = s.copy, d = [], f = [], p = [];
        t.exports = {
            Polyline: r.extend({
                type: "ec-polyline",
                shape: {points: [], smooth: 0, smoothConstraint: !0, smoothMonotone: null, connectNulls: !1},
                style: {fill: null, stroke: "#000"},
                buildPath: function (t, e) {
                    var i = e.points, r = 0, s = i.length, l = a(i, e.smoothConstraint);
                    if (e.connectNulls) {
                        for (; s > 0 && n(i[s - 1]); s--);
                        for (; s > r && n(i[r]); r++);
                    }
                    for (; s > r;)r += o(t, i, r, s, s, 1, l.min, l.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
                }
            }),
            Polygon: r.extend({
                type: "ec-polygon",
                shape: {
                    points: [],
                    stackedOnPoints: [],
                    smooth: 0,
                    stackedOnSmooth: 0,
                    smoothConstraint: !0,
                    smoothMonotone: null,
                    connectNulls: !1
                },
                buildPath: function (t, e) {
                    var i = e.points, r = e.stackedOnPoints, s = 0, l = i.length, h = e.smoothMonotone, u = a(i, e.smoothConstraint), c = a(r, e.smoothConstraint);
                    if (e.connectNulls) {
                        for (; l > 0 && n(i[l - 1]); l--);
                        for (; l > s && n(i[s]); s++);
                    }
                    for (; l > s;) {
                        var d = o(t, i, s, l, l, 1, u.min, u.max, e.smooth, h, e.connectNulls);
                        o(t, r, s + d - 1, d, l, -1, c.min, c.max, e.stackedOnSmooth, h, e.connectNulls), s += d + 1, t.closePath()
                    }
                }
            })
        }
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(91), i(92), i(69)("pie", [{
            type: "pieToggleSelect",
            event: "pieselectchanged",
            method: "toggleSelected"
        }, {type: "pieSelect", event: "pieselected", method: "select"}, {
            type: "pieUnSelect",
            event: "pieunselected",
            method: "unSelect"
        }]), o.registerVisualCoding("chart", n.curry(i(64), "pie")), o.registerLayout(n.curry(i(94), "pie")), o.registerProcessor("filter", n.curry(i(63), "pie"))
    }, function (t, e, i) {
        "use strict";
        var n = i(15), o = i(1), a = i(7), r = i(31), s = i(61), l = i(2).extendSeriesModel({
            type: "series.pie", init: function (t) {
                l.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }, this.updateSelectedMap(t.data), this._defaultLabelLine(t)
            }, mergeOption: function (t) {
                l.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
            }, getInitialData: function (t, e) {
                var i = r(["value"], t.data), o = new n(i, this);
                return o.initData(t.data), o
            }, getDataParams: function (t) {
                var e = this._data, i = l.superCall(this, "getDataParams", t), n = e.getSum("value");
                return i.percent = n ? +(e.get("value", t) / n * 100).toFixed(2) : 0, i.$vars.push("percent"), i
            }, _defaultLabelLine: function (t) {
                a.defaultEmphasis(t.labelLine, ["show"]);
                var e = t.labelLine.normal, i = t.labelLine.emphasis;
                e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
            }, defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                center: ["50%", "50%"],
                radius: [0, "75%"],
                clockwise: !0,
                startAngle: 90,
                minAngle: 0,
                selectedOffset: 10,
                avoidLabelOverlap: !0,
                label: {normal: {rotate: !1, show: !0, position: "outer"}, emphasis: {}},
                labelLine: {
                    normal: {
                        show: !0,
                        length: 15,
                        length2: 15,
                        smooth: !1,
                        lineStyle: {width: 1, type: "solid"}
                    }
                },
                itemStyle: {
                    normal: {borderColor: "rgba(0,0,0,0)", borderWidth: 1},
                    emphasis: {borderColor: "rgba(0,0,0,0)", borderWidth: 1}
                },
                animationEasing: "cubicOut",
                data: []
            }
        });
        o.mixin(l, s), t.exports = l
    }, function (t, e, i) {
        function n(t, e, i, n) {
            var a = e.getData(), r = this.dataIndex, s = a.getName(r), l = e.get("selectedOffset");
            n.dispatchAction({type: "pieToggleSelect", from: t, name: s, seriesId: e.id}), a.each(function (t) {
                o(a.getItemGraphicEl(t), a.getItemLayout(t), e.isSelected(a.getName(t)), l, i)
            })
        }

        function o(t, e, i, n, o) {
            var a = (e.startAngle + e.endAngle) / 2, r = Math.cos(a), s = Math.sin(a), l = i ? n : 0, h = [r * l, s * l];
            o ? t.animate().when(200, {position: h}).start("bounceOut") : t.attr("position", h)
        }

        function a(t, e) {
            function i() {
                a.ignore = a.hoverIgnore, r.ignore = r.hoverIgnore
            }

            function n() {
                a.ignore = a.normalIgnore, r.ignore = r.normalIgnore
            }

            s.Group.call(this);
            var o = new s.Sector({z2: 2}), a = new s.Polyline, r = new s.Text;
            this.add(o), this.add(a), this.add(r), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
        }

        function r(t, e, i, n, o) {
            var a = n.getModel("textStyle"), r = "inside" === o || "inner" === o;
            return {
                fill: a.getTextColor() || (r ? "#fff" : t.getItemVisual(e, "color")),
                opacity: t.getItemVisual(e, "opacity"),
                textFont: a.getFont(),
                text: l.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
            }
        }

        var s = i(3), l = i(1), h = a.prototype;
        h.updateData = function (t, e, i) {
            function n() {
                r.stopAnimation(!0), r.animateTo({shape: {r: c.r + 10}}, 300, "elasticOut")
            }

            function a() {
                r.stopAnimation(!0), r.animateTo({shape: {r: c.r}}, 300, "elasticOut")
            }

            var r = this.childAt(0), h = t.hostModel, u = t.getItemModel(e), c = t.getItemLayout(e), d = l.extend({}, c);
            d.label = null, i ? (r.setShape(d), r.shape.endAngle = c.startAngle, s.updateProps(r, {shape: {endAngle: c.endAngle}}, h, e)) : s.updateProps(r, {shape: d}, h, e);
            var f = u.getModel("itemStyle"), p = t.getItemVisual(e, "color");
            r.useStyle(l.defaults({fill: p}, f.getModel("normal").getItemStyle())), r.hoverStyle = f.getModel("emphasis").getItemStyle(), o(this, t.getItemLayout(e), u.get("selected"), h.get("selectedOffset"), h.get("animation")), r.off("mouseover").off("mouseout").off("emphasis").off("normal"), u.get("hoverAnimation") && r.on("mouseover", n).on("mouseout", a).on("emphasis", n).on("normal", a), this._updateLabel(t, e), s.setHoverStyle(this)
        }, h._updateLabel = function (t, e) {
            var i = this.childAt(1), n = this.childAt(2), o = t.hostModel, a = t.getItemModel(e), l = t.getItemLayout(e), h = l.label, u = t.getItemVisual(e, "color");
            s.updateProps(i, {shape: {points: h.linePoints || [[h.x, h.y], [h.x, h.y], [h.x, h.y]]}}, o, e), s.updateProps(n, {
                style: {
                    x: h.x,
                    y: h.y
                }
            }, o, e), n.attr({
                style: {textVerticalAlign: h.verticalAlign, textAlign: h.textAlign, textFont: h.font},
                rotation: h.rotation,
                origin: [h.x, h.y],
                z2: 10
            });
            var c = a.getModel("label.normal"), d = a.getModel("label.emphasis"), f = a.getModel("labelLine.normal"), p = a.getModel("labelLine.emphasis"), g = c.get("position") || d.get("position");
            n.setStyle(r(t, e, "normal", c, g)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({
                stroke: u,
                opacity: t.getItemVisual(e, "opacity")
            }), i.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = r(t, e, "emphasis", d, g), i.hoverStyle = p.getModel("lineStyle").getLineStyle();
            var m = f.get("smooth");
            m && m === !0 && (m = .4), i.setShape({smooth: m})
        }, l.inherits(a, s.Group);
        var u = i(26).extend({
            type: "pie", init: function () {
                var t = new s.Group;
                this._sectorGroup = t
            }, render: function (t, e, i, o) {
                if (!o || o.from !== this.uid) {
                    var r = t.getData(), s = this._data, h = this.group, u = e.get("animation"), c = !s, d = l.curry(n, this.uid, t, u, i), f = t.get("selectedMode");
                    if (r.diff(s).add(function (t) {
                            var e = new a(r, t);
                            c && e.eachChild(function (t) {
                                t.stopAnimation(!0)
                            }), f && e.on("click", d), r.setItemGraphicEl(t, e), h.add(e)
                        }).update(function (t, e) {
                            var i = s.getItemGraphicEl(e);
                            i.updateData(r, t), i.off("click"), f && i.on("click", d), h.add(i), r.setItemGraphicEl(t, i)
                        }).remove(function (t) {
                            var e = s.getItemGraphicEl(t);
                            h.remove(e)
                        }).execute(), u && c && r.count() > 0) {
                        var p = r.getItemLayout(0), g = Math.max(i.getWidth(), i.getHeight()) / 2, m = l.bind(h.removeClipPath, h);
                        h.setClipPath(this._createClipPath(p.cx, p.cy, g, p.startAngle, p.clockwise, m, t))
                    }
                    this._data = r
                }
            }, _createClipPath: function (t, e, i, n, o, a, r) {
                var l = new s.Sector({shape: {cx: t, cy: e, r0: 0, r: i, startAngle: n, endAngle: n, clockwise: o}});
                return s.initProps(l, {shape: {endAngle: n + (o ? 1 : -1) * Math.PI * 2}}, r, a), l
            }
        });
        t.exports = u
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n, o, a, r) {
            function s(e, i, n, o) {
                for (var a = e; i > a; a++)if (t[a].y += n, a > e && i > a + 1 && t[a + 1].y > t[a].y + t[a].height)return void l(a, n / 2);
                l(i - 1, n / 2)
            }

            function l(e, i) {
                for (var n = e; n >= 0 && (t[n].y -= i, !(n > 0 && t[n].y > t[n - 1].y + t[n - 1].height)); n--);
            }

            function h(t, e, i, n, o, a) {
                for (var r = a > 0 ? e ? Number.MAX_VALUE : 0 : e ? Number.MAX_VALUE : 0, s = 0, l = t.length; l > s; s++)if ("center" !== t[s].position) {
                    var h = Math.abs(t[s].y - n), u = t[s].len, c = t[s].len2, d = o + u > h ? Math.sqrt((o + u + c) * (o + u + c) - h * h) : Math.abs(t[s].x - i);
                    e && d >= r && (d = r - 10), !e && r >= d && (d = r + 10), t[s].x = i + d * a, r = d
                }
            }

            t.sort(function (t, e) {
                return t.y - e.y
            });
            for (var u, c = 0, d = t.length, f = [], p = [], g = 0; d > g; g++)u = t[g].y - c, 0 > u && s(g, d, -u, o), c = t[g].y + t[g].height;
            0 > r - c && l(d - 1, c - r);
            for (var g = 0; d > g; g++)t[g].y >= i ? p.push(t[g]) : f.push(t[g]);
            h(f, !1, e, i, n, o), h(p, !0, e, i, n, o)
        }

        function o(t, e, i, o, a, r) {
            for (var s = [], l = [], h = 0; h < t.length; h++)t[h].x < e ? s.push(t[h]) : l.push(t[h]);
            n(l, e, i, o, 1, a, r), n(s, e, i, o, -1, a, r);
            for (var h = 0; h < t.length; h++) {
                var u = t[h].linePoints;
                if (u) {
                    var c = u[1][0] - u[2][0];
                    t[h].x < e ? u[2][0] = t[h].x + 3 : u[2][0] = t[h].x - 3, u[1][1] = u[2][1] = t[h].y, u[1][0] = u[2][0] + c
                }
            }
        }

        var a = i(18);
        t.exports = function (t, e, i, n) {
            var r, s, l = t.getData(), h = [], u = !1;
            l.each(function (i) {
                var n, o, c, d, f = l.getItemLayout(i), p = l.getItemModel(i), g = p.getModel("label.normal"), m = g.get("position") || p.get("label.emphasis.position"), v = p.getModel("labelLine.normal"), y = v.get("length"), x = v.get("length2"), _ = (f.startAngle + f.endAngle) / 2, b = Math.cos(_), w = Math.sin(_);
                r = f.cx, s = f.cy;
                var S = "inside" === m || "inner" === m;
                if ("center" === m)n = f.cx, o = f.cy, d = "center"; else {
                    var M = (S ? (f.r + f.r0) / 2 * b : f.r * b) + r, A = (S ? (f.r + f.r0) / 2 * w : f.r * w) + s;
                    if (n = M + 3 * b, o = A + 3 * w, !S) {
                        var I = M + b * (y + e - f.r), T = A + w * (y + e - f.r), L = I + (0 > b ? -1 : 1) * x, C = T;
                        n = L + (0 > b ? -5 : 5), o = C, c = [[M, A], [I, T], [L, C]]
                    }
                    d = S ? "center" : b > 0 ? "left" : "right"
                }
                var D = g.getModel("textStyle").getFont(), P = g.get("rotate") ? 0 > b ? -_ + Math.PI : -_ : 0, k = t.getFormattedLabel(i, "normal") || l.getName(i), z = a.getBoundingRect(k, D, d, "top");
                u = !!P, f.label = {
                    x: n,
                    y: o,
                    position: m,
                    height: z.height,
                    len: y,
                    len2: x,
                    linePoints: c,
                    textAlign: d,
                    verticalAlign: "middle",
                    font: D,
                    rotation: P
                }, S || h.push(f.label)
            }), !u && t.get("avoidLabelOverlap") && o(h, r, s, e, i, n)
        }
    }, function (t, e, i) {
        var n = i(4), o = n.parsePercent, a = i(93), r = i(1), s = 2 * Math.PI, l = Math.PI / 180;
        t.exports = function (t, e, i) {
            e.eachSeriesByType(t, function (t) {
                var e = t.get("center"), h = t.get("radius");
                r.isArray(h) || (h = [0, h]), r.isArray(e) || (e = [e, e]);
                var u = i.getWidth(), c = i.getHeight(), d = Math.min(u, c), f = o(e[0], u), p = o(e[1], c), g = o(h[0], d / 2), m = o(h[1], d / 2), v = t.getData(), y = -t.get("startAngle") * l, x = t.get("minAngle") * l, _ = v.getSum("value"), b = Math.PI / (_ || v.count()) * 2, w = t.get("clockwise"), S = t.get("roseType"), M = v.getDataExtent("value");
                M[0] = 0;
                var A = s, I = 0, T = y, L = w ? 1 : -1;
                if (v.each("value", function (t, e) {
                        var i;
                        i = "area" !== S ? 0 === _ ? b : t * b : s / (v.count() || 1), x > i ? (i = x, A -= x) : I += t;
                        var o = T + L * i;
                        v.setItemLayout(e, {
                            angle: i,
                            startAngle: T,
                            endAngle: o,
                            clockwise: w,
                            cx: f,
                            cy: p,
                            r0: g,
                            r: S ? n.linearMap(t, M, [g, m]) : m
                        }), T = o
                    }, !0), s > A)if (.001 >= A) {
                    var C = s / v.count();
                    v.each(function (t) {
                        var e = v.getItemLayout(t);
                        e.startAngle = y + L * t * C, e.endAngle = y + L * (t + 1) * C
                    })
                } else b = A / I, T = y, v.each("value", function (t, e) {
                    var i = v.getItemLayout(e), n = i.angle === x ? x : t * b;
                    i.startAngle = T, i.endAngle = T + L * n, T += n
                });
                a(t, m, u, c)
            })
        }
    }, function (t, e, i) {
        "use strict";
        i(51), i(96)
    }, function (t, e, i) {
        function n(t, e) {
            function i(t, e) {
                var i = n.getAxis(t);
                return i.toGlobalCoord(i.dataToCoord(0))
            }

            var n = t.coordinateSystem, o = e.axis, a = {}, r = o.position, s = o.onZero ? "onZero" : r, l = o.dim, h = n.getRect(), u = [h.x, h.x + h.width, h.y, h.y + h.height], c = {
                x: {
                    top: u[2],
                    bottom: u[3]
                }, y: {left: u[0], right: u[1]}
            };
            c.x.onZero = Math.max(Math.min(i("y"), c.x.bottom), c.x.top), c.y.onZero = Math.max(Math.min(i("x"), c.y.right), c.y.left), a.position = ["y" === l ? c.y[s] : u[0], "x" === l ? c.x[s] : u[3]];
            var d = {x: 0, y: 1};
            a.rotation = Math.PI / 2 * d[l];
            var f = {top: -1, bottom: 1, left: -1, right: 1};
            a.labelDirection = a.tickDirection = a.nameDirection = f[r], o.onZero && (a.labelOffset = c[l][r] - c[l].onZero), e.getModel("axisTick").get("inside") && (a.tickDirection = -a.tickDirection), e.getModel("axisLabel").get("inside") && (a.labelDirection = -a.labelDirection);
            var p = e.getModel("axisLabel").get("rotate");
            return a.labelRotation = "top" === s ? -p : p, a.labelInterval = o.getLabelInterval(), a.z2 = 1, a
        }

        var o = i(1), a = i(3), r = i(49), s = r.ifIgnoreOnTick, l = r.getInterval, h = ["axisLine", "axisLabel", "axisTick", "axisName"], u = ["splitLine", "splitArea"], c = i(2).extendComponentView({
            type: "axis",
            render: function (t, e) {
                if (this.group.removeAll(), t.get("show")) {
                    var i = e.getComponent("grid", t.get("gridIndex")), a = n(i, t), s = new r(t, a);
                    o.each(h, s.add, s), this.group.add(s.getGroup()), o.each(u, function (e) {
                        t.get(e + ".show") && this["_" + e](t, i, a.labelInterval)
                    }, this)
                }
            },
            _splitLine: function (t, e, i) {
                var n = t.axis, r = t.getModel("splitLine"), h = r.getModel("lineStyle"), u = h.get("width"), c = h.get("color"), d = l(r, i);
                c = o.isArray(c) ? c : [c];
                for (var f = e.coordinateSystem.getRect(), p = n.isHorizontal(), g = [], m = 0, v = n.getTicksCoords(), y = [], x = [], _ = 0; _ < v.length; _++)if (!s(n, _, d)) {
                    var b = n.toGlobalCoord(v[_]);
                    p ? (y[0] = b, y[1] = f.y, x[0] = b, x[1] = f.y + f.height) : (y[0] = f.x, y[1] = b, x[0] = f.x + f.width, x[1] = b);
                    var w = m++ % c.length;
                    g[w] = g[w] || [], g[w].push(new a.Line(a.subPixelOptimizeLine({
                        shape: {
                            x1: y[0],
                            y1: y[1],
                            x2: x[0],
                            y2: x[1]
                        }, style: {lineWidth: u}, silent: !0
                    })))
                }
                for (var S = h.getLineStyle(), _ = 0; _ < g.length; _++)this.group.add(a.mergePath(g[_], {
                    style: o.defaults({stroke: c[_ % c.length]}, S),
                    silent: !0
                }))
            },
            _splitArea: function (t, e, i) {
                var n = t.axis, r = t.getModel("splitArea"), h = r.getModel("areaStyle"), u = h.get("color"), c = e.coordinateSystem.getRect(), d = n.getTicksCoords(), f = n.toGlobalCoord(d[0]), p = n.toGlobalCoord(d[0]), g = [], m = 0, v = l(r, i);
                u = o.isArray(u) ? u : [u];
                for (var y = 1; y < d.length; y++)if (!s(n, y, v)) {
                    var x, _, b, w, S = n.toGlobalCoord(d[y]);
                    n.isHorizontal() ? (x = f, _ = c.y, b = S - x, w = c.height) : (x = c.x, _ = p, b = c.width, w = S - _);
                    var M = m++ % u.length;
                    g[M] = g[M] || [], g[M].push(new a.Rect({
                        shape: {x: x, y: _, width: b, height: w},
                        silent: !0
                    })), f = x + b, p = _ + w
                }
                for (var A = h.getAreaStyle(), y = 0; y < g.length; y++)this.group.add(a.mergePath(g[y], {
                    style: o.defaults({fill: u[y % u.length]}, A),
                    silent: !0
                }))
            }
        });
        c.extend({type: "xAxis"}), c.extend({type: "yAxis"})
    }, function (t, e, i) {
        var n = i(1), o = i(7), a = i(2);
        a.registerAction("dataZoom", function (t, e) {
            var i = o.createLinkedNodesFinder(n.bind(e.eachComponent, e, "dataZoom"), o.eachAxisDim, function (t, e) {
                return t.get(e.axisIndex)
            }), a = [];
            e.eachComponent({mainType: "dataZoom", query: t}, function (t, e) {
                a.push.apply(a, i(t).nodes)
            }), n.each(a, function (e, i) {
                e.setRawRange({start: t.start, end: t.end, startValue: t.startValue, endValue: t.endValue})
            })
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            i.getAxisProxy(t.name, e).reset(i)
        }

        function o(t, e, i) {
            i.getAxisProxy(t.name, e).filterData(i)
        }

        var a = i(2);
        a.registerProcessor("filter", function (t, e) {
            t.eachComponent("dataZoom", function (t) {
                t.eachTargetAxis(n), t.eachTargetAxis(o)
            }), t.eachComponent("dataZoom", function (t) {
                var e = t.findRepresentativeAxisProxy(), i = e.getDataPercentWindow(), n = e.getDataValueWindow();
                t.setRawRange({start: i[0], end: i[1], startValue: n[0], endValue: n[1]})
            })
        })
    }, function (t, e, i) {
        function n(t) {
            var e = t[r];
            return e || (e = t[r] = [{}]), e
        }

        var o = i(1), a = o.each, r = "\x00_ec_hist_store", s = {
            push: function (t, e) {
                var i = n(t);
                a(e, function (e, n) {
                    for (var o = i.length - 1; o >= 0; o--) {
                        var a = i[o];
                        if (a[n])break
                    }
                    if (0 > o) {
                        var r = t.queryComponents({mainType: "dataZoom", subType: "select", id: n})[0];
                        if (r) {
                            var s = r.getPercentRange();
                            i[0][n] = {dataZoomId: n, start: s[0], end: s[1]}
                        }
                    }
                }), i.push(e)
            }, pop: function (t) {
                var e = n(t), i = e[e.length - 1];
                e.length > 1 && e.pop();
                var o = {};
                return a(i, function (t, i) {
                    for (var n = e.length - 1; n >= 0; n--) {
                        var t = e[n][i];
                        if (t) {
                            o[i] = t;
                            break
                        }
                    }
                }), o
            }, clear: function (t) {
                t[r] = null
            }, count: function (t) {
                return n(t).length
            }
        };
        t.exports = s
    }, function (t, e, i) {
        i(10).registerSubTypeDefaulter("dataZoom", function (t) {
            return "slider"
        })
    }, function (t, e) {
        function i(t) {
            return t[n] || (t[n] = {})
        }

        var n = "\x00_ec_interaction_mutex", o = {
            take: function (t, e) {
                i(e)[t] = !0
            }, release: function (t, e) {
                i(e)[t] = !1
            }, isTaken: function (t, e) {
                return !!i(e)[t]
            }
        };
        t.exports = o
    }, function (t, e, i) {
        function n(t, e, i) {
            o.positionGroup(t, e.getBoxLayoutParams(), {width: i.getWidth(), height: i.getHeight()}, e.get("padding"))
        }

        var o = i(11), a = i(9), r = i(3);
        t.exports = {
            layout: function (t, e, i) {
                var a = o.getLayoutRect(e.getBoxLayoutParams(), {
                    width: i.getWidth(),
                    height: i.getHeight()
                }, e.get("padding"));
                o.box(e.get("orient"), t, e.get("itemGap"), a.width, a.height), n(t, e, i)
            }, addBackground: function (t, e) {
                var i = a.normalizeCssArray(e.get("padding")), n = t.getBoundingRect(), o = e.getItemStyle(["color", "opacity"]);
                o.fill = e.get("backgroundColor");
                var s = new r.Rect({
                    shape: {
                        x: n.x - i[3],
                        y: n.y - i[0],
                        width: n.width + i[1] + i[3],
                        height: n.height + i[0] + i[2]
                    }, style: o, silent: !0, z2: -1
                });
                r.subPixelOptimizeRect(s), t.add(s)
            }
        }
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = -1;
            do n = Math.max(r.getPrecision(t.get(e, i)), n), t = t.stackedOn; while (t);
            return n
        }

        function o(t, e, i, o, a, r) {
            var s = [], l = p(e, o, t), h = e.indexOfNearest(o, l, !0);
            s[a] = e.get(i, h, !0), s[r] = e.get(o, h, !0);
            var u = n(e, o, h);
            return u >= 0 && (s[r] = +s[r].toFixed(u)), s
        }

        var a = i(1), r = i(4), s = a.indexOf, l = a.curry, h = {
            min: l(o, "min"),
            max: l(o, "max"),
            average: l(o, "average")
        }, u = function (t, e) {
            var i = t.getData(), n = t.coordinateSystem;
            if (e && (isNaN(parseFloat(e.x)) || isNaN(parseFloat(e.y))) && !a.isArray(e.coord) && n) {
                var o = c(e, i, n, t);
                if (e = a.clone(e), e.type && h[e.type] && o.baseAxis && o.valueAxis) {
                    var r = n.dimensions, l = s(r, o.baseAxis.dim), u = s(r, o.valueAxis.dim);
                    e.coord = h[e.type](i, o.baseDataDim, o.valueDataDim, l, u), e.value = e.coord[u]
                } else e.coord = [null != e.xAxis ? e.xAxis : e.radiusAxis, null != e.yAxis ? e.yAxis : e.angleAxis]
            }
            return e
        }, c = function (t, e, i, n) {
            var o = {};
            return null != t.valueIndex || null != t.valueDim ? (o.valueDataDim = null != t.valueIndex ? e.getDimension(t.valueIndex) : t.valueDim, o.valueAxis = i.getAxis(n.dataDimToCoordDim(o.valueDataDim)), o.baseAxis = i.getOtherAxis(o.valueAxis), o.baseDataDim = n.coordDimToDataDim(o.baseAxis.dim)[0]) : (o.baseAxis = n.getBaseAxis(), o.valueAxis = i.getOtherAxis(o.baseAxis), o.baseDataDim = n.coordDimToDataDim(o.baseAxis.dim)[0], o.valueDataDim = n.coordDimToDataDim(o.valueAxis.dim)[0]), o
        }, d = function (t, e) {
            return t && t.containData && e.coord && (null == e.x || null == e.y) ? t.containData(e.coord) : !0
        }, f = function (t, e, i, n) {
            return 2 > n ? t.coord && t.coord[n] : t.value
        }, p = function (t, e, i) {
            return "average" === i ? t.getSum(e, !0) / t.count() : t.getDataExtent(e, !0)["max" === i ? 1 : 0]
        };
        t.exports = {dataTransform: u, dataFilter: d, dimValueGetter: f, getAxisInfo: c, numCalculate: p}
    }, function (t, e, i) {
        var n = i(1), o = i(43), a = i(108), r = function (t, e, i, n, a) {
            o.call(this, t, e, i), this.type = n || "value", this.position = a || "bottom"
        };
        r.prototype = {
            constructor: r, index: 0, onZero: !1, model: null, isHorizontal: function () {
                var t = this.position;
                return "top" === t || "bottom" === t
            }, getGlobalExtent: function () {
                var t = this.getExtent();
                return t[0] = this.toGlobalCoord(t[0]), t[1] = this.toGlobalCoord(t[1]), t
            }, getLabelInterval: function () {
                var t = this._labelInterval;
                return t || (t = this._labelInterval = a(this)), t
            }, isLabelIgnored: function (t) {
                if ("category" === this.type) {
                    var e = this.getLabelInterval();
                    return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
                }
            }, toLocalCoord: null, toGlobalCoord: null
        }, n.inherits(r, o), t.exports = r
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return this._axes[t]
        }

        var o = i(1), a = function (t) {
            this._axes = {}, this._dimList = [], this.name = t || ""
        };
        a.prototype = {
            constructor: a, type: "cartesian", getAxis: function (t) {
                return this._axes[t]
            }, getAxes: function () {
                return o.map(this._dimList, n, this)
            }, getAxesByScale: function (t) {
                return t = t.toLowerCase(), o.filter(this.getAxes(), function (e) {
                    return e.scale.type === t
                })
            }, addAxis: function (t) {
                var e = t.dim;
                this._axes[e] = t, this._dimList.push(e)
            }, dataToCoord: function (t) {
                return this._dataCoordConvert(t, "dataToCoord")
            }, coordToData: function (t) {
                return this._dataCoordConvert(t, "coordToData")
            }, _dataCoordConvert: function (t, e) {
                for (var i = this._dimList, n = t instanceof Array ? [] : {}, o = 0; o < i.length; o++) {
                    var a = i[o], r = this._axes[a];
                    n[a] = r[e](t[a])
                }
                return n
            }
        }, t.exports = a
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            a.call(this, t)
        }

        var o = i(1), a = i(105);
        n.prototype = {
            constructor: n, type: "cartesian2d", dimensions: ["x", "y"], getBaseAxis: function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
            }, containPoint: function (t) {
                var e = this.getAxis("x"), i = this.getAxis("y");
                return e.contain(e.toLocalCoord(t[0])) && i.contain(i.toLocalCoord(t[1]))
            }, containData: function (t) {
                return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
            }, dataToPoints: function (t, e) {
                return t.mapArray(["x", "y"], function (t, e) {
                    return this.dataToPoint([t, e])
                }, e, this)
            }, dataToPoint: function (t, e) {
                var i = this.getAxis("x"), n = this.getAxis("y");
                return [i.toGlobalCoord(i.dataToCoord(t[0], e)), n.toGlobalCoord(n.dataToCoord(t[1], e))]
            }, pointToData: function (t, e) {
                var i = this.getAxis("x"), n = this.getAxis("y");
                return [i.coordToData(i.toLocalCoord(t[0]), e), n.coordToData(n.toLocalCoord(t[1]), e)]
            }, getOtherAxis: function (t) {
                return this.getAxis("x" === t.dim ? "y" : "x")
            }
        }, o.inherits(n, a), t.exports = n
    }, function (t, e, i) {
        "use strict";
        i(51);
        var n = i(10);
        t.exports = n.extend({
            type: "grid",
            dependencies: ["xAxis", "yAxis"],
            layoutMode: "box",
            coordinateSystem: null,
            defaultOption: {
                show: !1,
                zlevel: 0,
                z: 0,
                left: "10%",
                top: 60,
                right: "10%",
                bottom: 60,
                containLabel: !1,
                backgroundColor: "rgba(0,0,0,0)",
                borderWidth: 1,
                borderColor: "#ccc"
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(24);
        t.exports = function (t) {
            var e = t.model, i = e.getModel("axisLabel"), a = i.get("interval");
            return "category" !== t.type || "auto" !== a ? "auto" === a ? 0 : a : o.getAxisLabelInterval(n.map(t.scale.getTicks(), t.dataToCoord, t), e.getFormattedLabels(), i.getModel("textStyle").getFont(), t.isHorizontal())
        }
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return t.get("stack") || "__ec_stack_" + t.seriesIndex
        }

        function o(t, e) {
            var i = {};
            r.each(t, function (t, e) {
                var o = t.coordinateSystem, a = o.getBaseAxis(), r = i[a.index] || {
                        remainedWidth: a.getBandWidth(),
                        autoWidthCount: 0,
                        categoryGap: "20%",
                        gap: "30%",
                        axis: a,
                        stacks: {}
                    }, s = r.stacks;
                i[a.index] = r;
                var l = n(t);
                s[l] || r.autoWidthCount++, s[l] = s[l] || {width: 0, maxWidth: 0};
                var h = t.get("barWidth"), u = t.get("barMaxWidth"), c = t.get("barGap"), d = t.get("barCategoryGap");
                h && !s[l].width && (h = Math.min(r.remainedWidth, h), s[l].width = h, r.remainedWidth -= h), u && (s[l].maxWidth = u), null != c && (r.gap = c), null != d && (r.categoryGap = d)
            });
            var o = {};
            return r.each(i, function (t, e) {
                o[e] = {};
                var i = t.stacks, n = t.axis, a = n.getBandWidth(), s = l(t.categoryGap, a), h = l(t.gap, 1), u = t.remainedWidth, c = t.autoWidthCount, d = (u - s) / (c + (c - 1) * h);
                d = Math.max(d, 0), r.each(i, function (t, e) {
                    var i = t.maxWidth;
                    !t.width && i && d > i && (i = Math.min(i, u), u -= i, t.width = i, c--)
                }), d = (u - s) / (c + (c - 1) * h), d = Math.max(d, 0);
                var f, p = 0;
                r.each(i, function (t, e) {
                    t.width || (t.width = d), f = t, p += t.width * (1 + h)
                }), f && (p -= f.width * h);
                var g = -p / 2;
                r.each(i, function (t, i) {
                    o[e][i] = o[e][i] || {offset: g, width: t.width}, g += t.width * (1 + h)
                })
            }), o
        }

        function a(t, e, i) {
            var a = o(r.filter(e.getSeriesByType(t), function (t) {
                return !e.isSeriesFiltered(t) && t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
            })), s = {};
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(), i = t.coordinateSystem, o = i.getBaseAxis(), r = n(t), l = a[o.index][r], h = l.offset, u = l.width, c = i.getOtherAxis(o), d = t.get("barMinHeight") || 0, f = o.onZero ? c.toGlobalCoord(c.dataToCoord(0)) : c.getGlobalExtent()[0], p = i.dataToPoints(e, !0);
                s[r] = s[r] || [], e.setLayout({offset: h, size: u}), e.each(c.dim, function (t, i) {
                    if (!isNaN(t)) {
                        s[r][i] || (s[r][i] = {p: f, n: f});
                        var n, o, a, l, g = t >= 0 ? "p" : "n", m = p[i], v = s[r][i][g];
                        c.isHorizontal() ? (n = v, o = m[1] + h, a = m[0] - v, l = u, Math.abs(a) < d && (a = (0 > a ? -1 : 1) * d), s[r][i][g] += a) : (n = m[0] + h, o = v, a = u, l = m[1] - v, Math.abs(l) < d && (l = (0 >= l ? -1 : 1) * d), s[r][i][g] += l), e.setItemLayout(i, {
                            x: n,
                            y: o,
                            width: a,
                            height: l
                        })
                    }
                }, !0)
            }, this)
        }

        var r = i(1), s = i(4), l = s.parsePercent;
        t.exports = a
    }, function (t, e, i) {
        var n = i(3), o = i(1), a = Math.PI;
        t.exports = function (t, e) {
            e = e || {}, o.defaults(e, {
                text: "loading",
                color: "#c23531",
                textColor: "#000",
                maskColor: "rgba(255, 255, 255, 0.8)",
                zlevel: 0
            });
            var i = new n.Rect({
                style: {fill: e.maskColor},
                zlevel: e.zlevel,
                z: 1e4
            }), r = new n.Arc({
                shape: {startAngle: -a / 2, endAngle: -a / 2 + .1, r: 10},
                style: {stroke: e.color, lineCap: "round", lineWidth: 5},
                zlevel: e.zlevel,
                z: 10001
            }), s = new n.Rect({
                style: {
                    fill: "none",
                    text: e.text,
                    textPosition: "right",
                    textDistance: 10,
                    textFill: e.textColor
                }, zlevel: e.zlevel, z: 10001
            });
            r.animateShape(!0).when(1e3, {endAngle: 3 * a / 2}).start("circularInOut"), r.animateShape(!0).when(1e3, {startAngle: 3 * a / 2}).delay(300).start("circularInOut");
            var l = new n.Group;
            return l.add(r), l.add(s), l.add(i), l.resize = function () {
                var e = t.getWidth() / 2, n = t.getHeight() / 2;
                r.setShape({cx: e, cy: n});
                var o = r.shape.r;
                s.setShape({x: e - o, y: n - o, width: 2 * o, height: 2 * o}), i.setShape({
                    x: 0,
                    y: 0,
                    width: t.getWidth(),
                    height: t.getHeight()
                })
            }, l.resize(), l
        }
    }, function (t, e, i) {
        function n(t, e) {
            for (var i in e)_.hasClass(i) || ("object" == typeof e[i] ? t[i] = t[i] ? c.merge(t[i], e[i], !1) : c.clone(e[i]) : null == t[i] && (t[i] = e[i]))
        }

        function o(t) {
            t = t, this.option = {}, this.option[w] = 1, this._componentsMap = {}, this._seriesIndices = null, n(t, this._theme.option), c.merge(t, b, !1), this.mergeOption(t)
        }

        function a(t, e) {
            c.isArray(e) || (e = e ? [e] : []);
            var i = {};
            return p(e, function (e) {
                i[e] = (t[e] || []).slice()
            }), i
        }

        function r(t, e) {
            var i = {};
            p(e, function (t, e) {
                var n = t.exist;
                n && (i[n.id] = t)
            }), p(e, function (e, n) {
                var o = e.option;
                if (c.assert(!o || null == o.id || !i[o.id] || i[o.id] === e, "id duplicates: " + (o && o.id)), o && null != o.id && (i[o.id] = e), x(o)) {
                    var a = s(t, o, e.exist);
                    e.keyInfo = {mainType: t, subType: a}
                }
            }), p(e, function (t, e) {
                var n = t.exist, o = t.option, a = t.keyInfo;
                if (x(o)) {
                    if (a.name = null != o.name ? o.name + "" : n ? n.name : "\x00-", n)a.id = n.id; else if (null != o.id)a.id = o.id + ""; else {
                        var r = 0;
                        do a.id = "\x00" + a.name + "\x00" + r++; while (i[a.id])
                    }
                    i[a.id] = t
                }
            })
        }

        function s(t, e, i) {
            var n = e.type ? e.type : i ? i.subType : _.determineSubType(t, e);
            return n
        }

        function l(t) {
            return m(t, function (t) {
                    return t.componentIndex
                }) || []
        }

        function h(t, e) {
            return e.hasOwnProperty("subType") ? g(t, function (t) {
                return t.subType === e.subType
            }) : t
        }

        function u(t) {
            if (!t._seriesIndices)throw new Error("Series has not been initialized yet.")
        }

        var c = i(1), d = i(7), f = i(12), p = c.each, g = c.filter, m = c.map, v = c.isArray, y = c.indexOf, x = c.isObject, _ = i(10), b = i(113), w = "\x00_ec_inner", S = f.extend({
            constructor: S,
            init: function (t, e, i, n) {
                i = i || {}, this.option = null, this._theme = new f(i), this._optionManager = n
            },
            setOption: function (t, e) {
                c.assert(!(w in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption()
            },
            resetOption: function (t) {
                var e = !1, i = this._optionManager;
                if (!t || "recreate" === t) {
                    var n = i.mountOption("recreate" === t);
                    this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(n)) : o.call(this, n), e = !0
                }
                if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                    var a = i.getTimelineOption(this);
                    a && (this.mergeOption(a), e = !0)
                }
                if (!t || "recreate" === t || "media" === t) {
                    var r = i.getMediaOption(this, this._api);
                    r.length && p(r, function (t) {
                        this.mergeOption(t, e = !0)
                    }, this)
                }
                return e
            },
            mergeOption: function (t) {
                function e(e, o) {
                    var s = d.normalizeToArray(t[e]), h = d.mappingToExists(n[e], s);
                    r(e, h);
                    var u = a(n, o);
                    i[e] = [], n[e] = [], p(h, function (t, o) {
                        var a = t.exist, r = t.option;
                        if (c.assert(x(r) || a, "Empty component definition"), r) {
                            var s = _.getClass(e, t.keyInfo.subType, !0);
                            a && a instanceof s ? (a.mergeOption(r, this), a.optionUpdated(this)) : (a = new s(r, this, this, c.extend({
                                dependentModels: u,
                                componentIndex: o
                            }, t.keyInfo)), a.optionUpdated(this))
                        } else a.mergeOption({}, this), a.optionUpdated(this);
                        n[e][o] = a, i[e][o] = a.option
                    }, this), "series" === e && (this._seriesIndices = l(n.series))
                }

                var i = this.option, n = this._componentsMap, o = [];
                p(t, function (t, e) {
                    null != t && (_.hasClass(e) ? o.push(e) : i[e] = null == i[e] ? c.clone(t) : c.merge(i[e], t, !0))
                }), _.topologicalTravel(o, _.getAllClassMainTypes(), e, this)
            },
            getOption: function () {
                var t = c.clone(this.option);
                return p(t, function (e, i) {
                    if (_.hasClass(i)) {
                        for (var e = d.normalizeToArray(e), n = e.length - 1; n >= 0; n--)d.isIdInner(e[n]) && e.splice(n, 1);
                        t[i] = e
                    }
                }), delete t[w], t
            },
            getTheme: function () {
                return this._theme
            },
            getComponent: function (t, e) {
                var i = this._componentsMap[t];
                return i ? i[e || 0] : void 0
            },
            queryComponents: function (t) {
                var e = t.mainType;
                if (!e)return [];
                var i = t.index, n = t.id, o = t.name, a = this._componentsMap[e];
                if (!a || !a.length)return [];
                var r;
                if (null != i)v(i) || (i = [i]), r = g(m(i, function (t) {
                    return a[t]
                }), function (t) {
                    return !!t
                }); else if (null != n) {
                    var s = v(n);
                    r = g(a, function (t) {
                        return s && y(n, t.id) >= 0 || !s && t.id === n
                    })
                } else if (null != o) {
                    var l = v(o);
                    r = g(a, function (t) {
                        return l && y(o, t.name) >= 0 || !l && t.name === o
                    })
                }
                return h(r, t)
            },
            findComponents: function (t) {
                function e(t) {
                    var e = o + "Index", i = o + "Id", n = o + "Name";
                    return t && (t.hasOwnProperty(e) || t.hasOwnProperty(i) || t.hasOwnProperty(n)) ? {
                        mainType: o,
                        index: t[e],
                        id: t[i],
                        name: t[n]
                    } : null
                }

                function i(e) {
                    return t.filter ? g(e, t.filter) : e
                }

                var n = t.query, o = t.mainType, a = e(n), r = a ? this.queryComponents(a) : this._componentsMap[o];
                return i(h(r, t))
            },
            eachComponent: function (t, e, i) {
                var n = this._componentsMap;
                if ("function" == typeof t)i = e, e = t, p(n, function (t, n) {
                    p(t, function (t, o) {
                        e.call(i, n, t, o)
                    })
                }); else if (c.isString(t))p(n[t], e, i); else if (x(t)) {
                    var o = this.findComponents(t);
                    p(o, e, i)
                }
            },
            getSeriesByName: function (t) {
                var e = this._componentsMap.series;
                return g(e, function (e) {
                    return e.name === t
                })
            },
            getSeriesByIndex: function (t) {
                return this._componentsMap.series[t]
            },
            getSeriesByType: function (t) {
                var e = this._componentsMap.series;
                return g(e, function (e) {
                    return e.subType === t
                })
            },
            getSeries: function () {
                return this._componentsMap.series.slice()
            },
            eachSeries: function (t, e) {
                u(this), p(this._seriesIndices, function (i) {
                    var n = this._componentsMap.series[i];
                    t.call(e, n, i)
                }, this)
            },
            eachRawSeries: function (t, e) {
                p(this._componentsMap.series, t, e)
            },
            eachSeriesByType: function (t, e, i) {
                u(this), p(this._seriesIndices, function (n) {
                    var o = this._componentsMap.series[n];
                    o.subType === t && e.call(i, o, n)
                }, this)
            },
            eachRawSeriesByType: function (t, e, i) {
                return p(this.getSeriesByType(t), e, i)
            },
            isSeriesFiltered: function (t) {
                return u(this), c.indexOf(this._seriesIndices, t.componentIndex) < 0
            },
            filterSeries: function (t, e) {
                u(this);
                var i = g(this._componentsMap.series, t, e);
                this._seriesIndices = l(i)
            },
            restoreData: function () {
                var t = this._componentsMap;
                this._seriesIndices = l(t.series);
                var e = [];
                p(t, function (t, i) {
                    e.push(i)
                }), _.topologicalTravel(e, _.getAllClassMainTypes(), function (e, i) {
                    p(t[e], function (t) {
                        t.restoreData()
                    })
                })
            }
        });
        t.exports = S
    }, function (t, e, i) {
        function n(t) {
            this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
        }

        function o(t, e) {
            var i, n, o = [], a = [], r = t.timeline;
            if (t.baseOption && (n = t.baseOption), (r || t.options) && (n = n || {}, o = (t.options || []).slice()), t.media) {
                n = n || {};
                var s = t.media;
                d(s, function (t) {
                    t && t.option && (t.query ? a.push(t) : i || (i = t))
                })
            }
            return n || (n = t), n.timeline || (n.timeline = r), d([n].concat(o).concat(h.map(a, function (t) {
                return t.option
            })), function (t) {
                d(e, function (e) {
                    e(t)
                })
            }), {baseOption: n, timelineOptions: o, mediaDefault: i, mediaList: a}
        }

        function a(t, e, i) {
            var n = {width: e, height: i, aspectratio: e / i}, o = !0;
            return h.each(t, function (t, e) {
                var i = e.match(m);
                if (i && i[1] && i[2]) {
                    var a = i[1], s = i[2].toLowerCase();
                    r(n[s], t, a) || (o = !1)
                }
            }), o
        }

        function r(t, e, i) {
            return "min" === i ? t >= e : "max" === i ? e >= t : t === e
        }

        function s(t, e) {
            return t.join(",") === e.join(",")
        }

        function l(t, e) {
            e = e || {}, d(e, function (e, i) {
                if (null != e) {
                    var n = t[i];
                    if (c.hasClass(i)) {
                        e = u.normalizeToArray(e), n = u.normalizeToArray(n);
                        var o = u.mappingToExists(n, e);
                        t[i] = p(o, function (t) {
                            return t.option && t.exist ? g(t.exist, t.option, !0) : t.exist || t.option
                        })
                    } else t[i] = g(n, e, !0)
                }
            })
        }

        var h = i(1), u = i(7), c = i(10), d = h.each, f = h.clone, p = h.map, g = h.merge, m = /^(min|max)?(.+)$/;
        n.prototype = {
            constructor: n, setOption: function (t, e) {
                t = f(t, !0);
                var i = this._optionBackup, n = o.call(this, t, e);
                this._newBaseOption = n.baseOption, i ? (l(i.baseOption, n.baseOption), n.timelineOptions.length && (i.timelineOptions = n.timelineOptions), n.mediaList.length && (i.mediaList = n.mediaList), n.mediaDefault && (i.mediaDefault = n.mediaDefault)) : this._optionBackup = n
            }, mountOption: function (t) {
                var e = this._optionBackup;
                return this._timelineOptions = p(e.timelineOptions, f), this._mediaList = p(e.mediaList, f), this._mediaDefault = f(e.mediaDefault), this._currentMediaIndices = [], f(t ? e.baseOption : this._newBaseOption)
            }, getTimelineOption: function (t) {
                var e, i = this._timelineOptions;
                if (i.length) {
                    var n = t.getComponent("timeline");
                    n && (e = f(i[n.getCurrentIndex()], !0))
                }
                return e
            }, getMediaOption: function (t) {
                var e = this._api.getWidth(), i = this._api.getHeight(), n = this._mediaList, o = this._mediaDefault, r = [], l = [];
                if (!n.length && !o)return l;
                for (var h = 0, u = n.length; u > h; h++)a(n[h].query, e, i) && r.push(h);
                return !r.length && o && (r = [-1]), r.length && !s(r, this._currentMediaIndices) && (l = p(r, function (t) {
                    return f(-1 === t ? o.option : n[t].option)
                })), this._currentMediaIndices = r, l
            }
        }, t.exports = n
    }, function (t, e) {
        var i = "";
        "undefined" != typeof navigator && (i = navigator.platform || ""), t.exports = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            grid: {},
            textStyle: {
                fontFamily: i.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            animation: !0,
            animationThreshold: 2e3,
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut"
        }
    }, function (t, e, i) {
        t.exports = {getAreaStyle: i(30)([["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]])}
    }, function (t, e) {
        t.exports = {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }
    }, function (t, e, i) {
        t.exports = {getItemStyle: i(30)([["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]])}
    }, function (t, e, i) {
        var n = i(30)([["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"]]);
        t.exports = {
            getLineStyle: function (t) {
                var e = n.call(this, t), i = this.getLineDash();
                return i && (e.lineDash = i), e
            }, getLineDash: function () {
                var t = this.get("type");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            return t && t.getShallow(e)
        }

        var o = i(18);
        t.exports = {
            getTextColor: function () {
                var t = this.ecModel;
                return this.getShallow("color") || t && t.get("textStyle.color")
            }, getFont: function () {
                var t = this.ecModel, e = t && t.getModel("textStyle");
                return [this.getShallow("fontStyle") || n(e, "fontStyle"), this.getShallow("fontWeight") || n(e, "fontWeight"), (this.getShallow("fontSize") || n(e, "fontSize") || 12) + "px", this.getShallow("fontFamily") || n(e, "fontFamily") || "sans-serif"].join(" ")
            }, getTextRect: function (t) {
                var e = this.get("textStyle") || {};
                return o.getBoundingRect(t, this.getFont(), e.align, e.baseline)
            }, ellipsis: function (t, e, i) {
                return o.ellipsis(t, this.getFont(), e, i)
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            e = e.split(",");
            for (var i = t, n = 0; n < e.length && (i = i && i[e[n]], null != i); n++);
            return i
        }

        function o(t, e, i, n) {
            e = e.split(",");
            for (var o, a = t, r = 0; r < e.length - 1; r++)o = e[r], null == a[o] && (a[o] = {}), a = a[o];
            (n || null == a[e[r]]) && (a[e[r]] = i)
        }

        function a(t) {
            c(l, function (e) {
                e[0]in t && !(e[1]in t) && (t[e[1]] = t[e[0]])
            })
        }

        var r = i(1), s = i(120), l = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]], h = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"], u = ["bar", "boxplot", "candlestick", "chord", "effectScatter", "funnel", "gauge", "lines", "graph", "heatmap", "line", "map", "parallel", "pie", "radar", "sankey", "scatter", "treemap"], c = r.each;
        t.exports = function (t) {
            c(t.series, function (t) {
                if (r.isObject(t)) {
                    var e = t.type;
                    if (s(t), "pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                        var i = n(t, "pointer.color");
                        null != i && o(t, "itemStyle.normal.color", i)
                    }
                    for (var l = 0; l < u.length; l++)if (u[l] === t.type) {
                        a(t);
                        break
                    }
                }
            }), t.dataRange && (t.visualMap = t.dataRange), c(h, function (e) {
                var i = t[e];
                i && (r.isArray(i) || (i = [i]), c(i, function (t) {
                    a(t)
                }))
            })
        }
    }, function (t, e, i) {
        function n(t) {
            var e = t && t.itemStyle;
            e && o.each(a, function (i) {
                var n = e.normal, a = e.emphasis;
                n && n[i] && (t[i] = t[i] || {}, t[i].normal ? o.merge(t[i].normal, n[i]) : t[i].normal = n[i], n[i] = null), a && a[i] && (t[i] = t[i] || {}, t[i].emphasis ? o.merge(t[i].emphasis, a[i]) : t[i].emphasis = a[i],
                    a[i] = null)
            })
        }

        var o = i(1), a = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"];
        t.exports = function (t) {
            if (t) {
                n(t), n(t.markPoint), n(t.markLine);
                var e = t.data;
                if (e) {
                    for (var i = 0; i < e.length; i++)n(e[i]);
                    var a = t.markPoint;
                    if (a && a.data)for (var r = a.data, i = 0; i < r.length; i++)n(r[i]);
                    var s = t.markLine;
                    if (s && s.data)for (var l = s.data, i = 0; i < l.length; i++)o.isArray(l[i]) ? (n(l[i][0]), n(l[i][1])) : n(l[i])
                }
            }
        }
    }, function (t, e) {
        var i = {
            average: function (t) {
                for (var e = 0, i = 0, n = 0; n < t.length; n++)isNaN(t[n]) || (e += t[n], i++);
                return 0 === i ? NaN : e / i
            }, sum: function (t) {
                for (var e = 0, i = 0; i < t.length; i++)e += t[i] || 0;
                return e
            }, max: function (t) {
                for (var e = -(1 / 0), i = 0; i < t.length; i++)t[i] > e && (e = t[i]);
                return e
            }, min: function (t) {
                for (var e = 1 / 0, i = 0; i < t.length; i++)t[i] < e && (e = t[i]);
                return e
            }, nearest: function (t) {
                return t[0]
            }
        }, n = function (t, e) {
            return Math.round(t.length / 2)
        };
        t.exports = function (t, e, o) {
            e.eachSeriesByType(t, function (t) {
                var e = t.getData(), o = t.get("sampling"), a = t.coordinateSystem;
                if ("cartesian2d" === a.type && o) {
                    var r = a.getBaseAxis(), s = a.getOtherAxis(r), l = r.getExtent(), h = l[1] - l[0], u = Math.round(e.count() / h);
                    if (u > 1) {
                        var c;
                        "string" == typeof o ? c = i[o] : "function" == typeof o && (c = o), c && (e = e.downSample(s.dim, 1 / u, c, n), t.setData(e))
                    }
                }
            }, this)
        }
    }, function (t, e, i) {
        var n = i(1), o = i(32), a = i(4), r = i(38), s = o.prototype, l = r.prototype, h = Math.floor, u = Math.ceil, c = Math.pow, d = 10, f = Math.log, p = o.extend({
            type: "log",
            getTicks: function () {
                return n.map(l.getTicks.call(this), function (t) {
                    return a.round(c(d, t))
                })
            },
            getLabel: l.getLabel,
            scale: function (t) {
                return t = s.scale.call(this, t), c(d, t)
            },
            setExtent: function (t, e) {
                t = f(t) / f(d), e = f(e) / f(d), l.setExtent.call(this, t, e)
            },
            getExtent: function () {
                var t = s.getExtent.call(this);
                return t[0] = c(d, t[0]), t[1] = c(d, t[1]), t
            },
            unionExtent: function (t) {
                t[0] = f(t[0]) / f(d), t[1] = f(t[1]) / f(d), s.unionExtent.call(this, t)
            },
            niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, i = e[1] - e[0];
                if (!(i === 1 / 0 || 0 >= i)) {
                    var n = c(10, h(f(i / t) / Math.LN10)), o = t / i * n;
                    .5 >= o && (n *= 10);
                    var r = [a.round(u(e[0] / n) * n), a.round(h(e[1] / n) * n)];
                    this._interval = n, this._niceExtent = r
                }
            },
            niceExtent: l.niceExtent
        });
        n.each(["contain", "normalize"], function (t) {
            p.prototype[t] = function (e) {
                return e = f(e) / f(d), s[t].call(this, e)
            }
        }), p.create = function () {
            return new p
        }, t.exports = p
    }, function (t, e, i) {
        var n = i(1), o = i(32), a = o.prototype, r = o.extend({
            type: "ordinal", init: function (t, e) {
                this._data = t, this._extent = e || [0, t.length - 1]
            }, parse: function (t) {
                return "string" == typeof t ? n.indexOf(this._data, t) : Math.round(t)
            }, contain: function (t) {
                return t = this.parse(t), a.contain.call(this, t) && null != this._data[t]
            }, normalize: function (t) {
                return a.normalize.call(this, this.parse(t))
            }, scale: function (t) {
                return Math.round(a.scale.call(this, t))
            }, getTicks: function () {
                for (var t = [], e = this._extent, i = e[0]; i <= e[1];)t.push(i), i++;
                return t
            }, getLabel: function (t) {
                return this._data[t]
            }, count: function () {
                return this._extent[1] - this._extent[0] + 1
            }, niceTicks: n.noop, niceExtent: n.noop
        });
        r.create = function () {
            return new r
        }, t.exports = r
    }, function (t, e, i) {
        var n = i(1), o = i(4), a = i(9), r = i(38), s = r.prototype, l = Math.ceil, h = Math.floor, u = 1e3, c = 60 * u, d = 60 * c, f = 24 * d, p = function (t, e, i, n) {
            for (; n > i;) {
                var o = i + n >>> 1;
                t[o][2] < e ? i = o + 1 : n = o
            }
            return i
        }, g = r.extend({
            type: "time", getLabel: function (t) {
                var e = this._stepLvl, i = new Date(t);
                return a.formatTime(e[0], i)
            }, niceExtent: function (t, e, i) {
                var n = this._extent;
                if (n[0] === n[1] && (n[0] -= f, n[1] += f), n[1] === -(1 / 0) && n[0] === 1 / 0) {
                    var a = new Date;
                    n[1] = new Date(a.getFullYear(), a.getMonth(), a.getDate()), n[0] = n[1] - f
                }
                this.niceTicks(t);
                var r = this._interval;
                e || (n[0] = o.round(h(n[0] / r) * r)), i || (n[1] = o.round(l(n[1] / r) * r))
            }, niceTicks: function (t) {
                t = t || 10;
                var e = this._extent, i = e[1] - e[0], n = i / t, a = m.length, r = p(m, n, 0, a), s = m[Math.min(r, a - 1)], u = s[2];
                if ("year" === s[0]) {
                    var c = i / u, d = o.nice(c / t, !0);
                    u *= d
                }
                var f = [l(e[0] / u) * u, h(e[1] / u) * u];
                this._stepLvl = s, this._interval = u, this._niceExtent = f
            }, parse: function (t) {
                return +o.parseDate(t)
            }
        });
        n.each(["contain", "normalize"], function (t) {
            g.prototype[t] = function (e) {
                return s[t].call(this, this.parse(e))
            }
        });
        var m = [["hh:mm:ss", 1, u], ["hh:mm:ss", 5, 5 * u], ["hh:mm:ss", 10, 10 * u], ["hh:mm:ss", 15, 15 * u], ["hh:mm:ss", 30, 30 * u], ["hh:mm\nMM-dd", 1, c], ["hh:mm\nMM-dd", 5, 5 * c], ["hh:mm\nMM-dd", 10, 10 * c], ["hh:mm\nMM-dd", 15, 15 * c], ["hh:mm\nMM-dd", 30, 30 * c], ["hh:mm\nMM-dd", 1, d], ["hh:mm\nMM-dd", 2, 2 * d], ["hh:mm\nMM-dd", 6, 6 * d], ["hh:mm\nMM-dd", 12, 12 * d], ["MM-dd\nyyyy", 1, f], ["week", 7, 7 * f], ["month", 1, 31 * f], ["quarter", 3, 380 * f / 4], ["half-year", 6, 380 * f / 2], ["year", 1, 380 * f]];
        g.create = function () {
            return new g
        }, t.exports = g
    }, function (t, e) {
        var i = {}, n = "\x00__throttleOriginMethod", o = "\x00__throttleRate";
        i.throttle = function (t, e, i, n) {
            function o(o) {
                function f() {
                    u = (new Date).getTime(), c = null, (d ? t : t[o]).apply(r, s || [])
                }

                var p = function () {
                    l = (new Date).getTime(), r = this, s = arguments, a = l - (n ? h : u) - e, clearTimeout(c), n ? i ? c = setTimeout(f, e) : a >= 0 && f() : a >= 0 ? f() : i && (c = setTimeout(f, -a)), h = l
                };
                return p.clear = function () {
                    c && (clearTimeout(c), c = null)
                }, p
            }

            var a, r, s, l = (new Date).getTime(), h = 0, u = 0, c = null, d = "function" == typeof t;
            if (e = e || 0, d)return o();
            for (var f = [], p = 0; p < t.length; p++)f[p] = o(p);
            return f
        }, i.fixRate = function (t, e) {
            return null != e ? i.throttle(t, e, !0, !1) : t
        }, i.debounce = function (t, e) {
            return null != e ? i.throttle(t, e, !0, !0) : t
        }, i.createOrUpdate = function (t, e, a, r) {
            var s = t[e];
            if (s && null != a && r) {
                var l = s[n] || s, h = s[o];
                h !== a && (s = t[e] = i[r](l, a), s[n] = l, s[o] = a)
            }
        }, i.clear = function (t, e) {
            var i = t[e];
            i && i[n] && (t[e] = i[n])
        }, t.exports = i
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            return {
                type: t,
                event: i,
                target: e,
                cancelBubble: !1,
                offsetX: i.zrX,
                offsetY: i.zrY,
                gestureEvent: i.gestureEvent,
                pinchX: i.pinchX,
                pinchY: i.pinchY,
                pinchScale: i.pinchScale,
                wheelDelta: i.zrDelta
            }
        }

        function o(t, e, i) {
            var n = t._gestureMgr;
            "start" === i && n.clear();
            var o = n.recognize(e, t.findHover(e.zrX, e.zrY, null));
            if ("end" === i && n.clear(), o) {
                var a = o.type;
                e.gestureEvent = a, t._dispatchProxy(o.target, a, o.event)
            }
        }

        function a(t) {
            function e(t, e) {
                return function () {
                    return e._touching ? void 0 : t.apply(e, arguments)
                }
            }

            for (var i = y.concat(x), n = 0; n < i.length; n++) {
                var o = i[n];
                t._handlers[o] = f.bind(M[o], t)
            }
            for (var n = 0; n < v.length; n++) {
                var o = v[n];
                t._handlers[o] = e(M[o], t)
            }
        }

        function r(t, e, i) {
            if (t[t.rectHover ? "rectContain" : "contain"](e, i)) {
                for (var n = t; n;) {
                    if (n.silent || n.clipPath && !n.clipPath.contain(e, i))return !1;
                    n = n.parent
                }
                return !0
            }
            return !1
        }

        function s(t) {
            t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
                t._touching = !1
            }, 700)
        }

        function l() {
            return !1
        }

        function h() {
            return c.touchEventsSupported
        }

        function u(t) {
            return "mousewheel" === t && c.browser.firefox ? "DOMMouseScroll" : t
        }

        var c = i(14), d = i(34), f = i(1), p = i(155), g = i(138), m = i(21), v = ["click", "dblclick", "mousewheel", "mouseout"];
        !l() && v.push("mouseup", "mousedown", "mousemove");
        var y = ["touchstart", "touchend", "touchmove"], x = ["pointerdown", "pointerup", "pointermove"], _ = 300, b = d.addEventListener, w = d.removeEventListener, S = d.normalizeEvent, M = {
            mousemove: function (t) {
                t = S(this.root, t);
                var e = t.zrX, i = t.zrY, n = this.findHover(e, i, null), o = this._hovered;
                this._hovered = n, this.root.style.cursor = n ? n.cursor : this._defaultCursorStyle, o && n !== o && o.__zr && this._dispatchProxy(o, "mouseout", t), this._dispatchProxy(n, "mousemove", t), n && n !== o && this._dispatchProxy(n, "mouseover", t)
            }, mouseout: function (t) {
                t = S(this.root, t);
                var e = t.toElement || t.relatedTarget;
                if (e != this.root)for (; e && 9 != e.nodeType;) {
                    if (e === this.root)return;
                    e = e.parentNode
                }
                this._dispatchProxy(this._hovered, "mouseout", t), this.trigger("globalout", {event: t})
            }, touchstart: function (t) {
                t = S(this.root, t), this._lastTouchMoment = new Date, o(this, t, "start"), M.mousemove.call(this, t), M.mousedown.call(this, t), s(this)
            }, touchmove: function (t) {
                t = S(this.root, t), o(this, t, "change"), M.mousemove.call(this, t), s(this)
            }, touchend: function (t) {
                t = S(this.root, t), o(this, t, "end"), M.mouseup.call(this, t), +new Date - this._lastTouchMoment < _ && M.click.call(this, t), s(this)
            }
        };
        f.each(["click", "mousedown", "mouseup", "mousewheel", "dblclick"], function (t) {
            M[t] = function (e) {
                e = S(this.root, e);
                var i = this.findHover(e.zrX, e.zrY, null);
                if ("mousedown" === t)this._downel = i, this._upel = i; else if ("mosueup" === t)this._upel = i; else if ("click" === t && this._downel !== this._upel)return;
                this._dispatchProxy(i, t, e)
            }
        });
        var A = function (t, e, i) {
            function n(e, i) {
                f.each(e, function (e) {
                    b(t, u(e), i._handlers[e])
                }, i)
            }

            m.call(this), this.root = t, this.storage = e, this.painter = i, this._hovered, this._lastTouchMoment, this._lastX, this._lastY, this._defaultCursorStyle = "default", this._gestureMgr = new g, this._handlers = [], this._touching = !1, this._touchTimer, a(this), l() ? n(x, this) : h() && n(y, this), n(v, this), p.call(this)
        };
        A.prototype = {
            constructor: A, resize: function (t) {
                this._hovered = null
            }, dispatch: function (t, e) {
                var i = this._handlers[t];
                i && i.call(this, e)
            }, dispose: function () {
                for (var t = this.root, e = v.concat(y), i = 0; i < e.length; i++) {
                    var n = e[i];
                    w(t, u(n), this._handlers[n])
                }
                this.root = this.storage = this.painter = null
            }, setDefaultCursorStyle: function (t) {
                this._defaultCursorStyle = t
            }, _dispatchProxy: function (t, e, i) {
                for (var o = "on" + e, a = n(e, t, i), r = t; r && (r[o] && (a.cancelBubble = r[o].call(r, a)), r.trigger(e, a), r = r.parent, !a.cancelBubble););
                a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[o] && t[o].call(t, a), t.trigger && t.trigger(e, a)
                }))
            }, findHover: function (t, e, i) {
                for (var n = this.storage.getDisplayList(), o = n.length - 1; o >= 0; o--)if (!n[o].silent && n[o] !== i && !n[o].ignore && r(n[o], t, e))return n[o]
            }
        }, f.mixin(A, m), f.mixin(A, p), t.exports = A
    }, function (t, e, i) {
        function n() {
            return !1
        }

        function o(t, e, i, n) {
            var o = document.createElement(e), a = i.getWidth(), r = i.getHeight(), s = o.style;
            return s.position = "absolute", s.left = 0, s.top = 0, s.width = a + "px", s.height = r + "px", o.width = a * n, o.height = r * n, o.setAttribute("data-zr-dom-id", t), o
        }

        var a = i(1), r = i(33), s = function (t, e, i) {
            var s;
            i = i || r.devicePixelRatio, "string" == typeof t ? s = o(t, "canvas", e, i) : a.isObject(t) && (s = t, t = s.id), this.id = t, this.dom = s;
            var l = s.style;
            l && (s.onselectstart = n, l["-webkit-user-select"] = "none", l["user-select"] = "none", l["-webkit-touch-callout"] = "none", l["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)"), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = i
        };
        s.prototype = {
            constructor: s, elCount: 0, __dirty: !0, initContext: function () {
                this.ctx = this.dom.getContext("2d");
                var t = this.dpr;
                1 != t && this.ctx.scale(t, t)
            }, createBackBuffer: function () {
                var t = this.dpr;
                this.domBack = o("back-" + this.id, "canvas", this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
            }, resize: function (t, e) {
                var i = this.dpr, n = this.dom, o = n.style, a = this.domBack;
                o.width = t + "px", o.height = e + "px", n.width = t * i, n.height = e * i, 1 != i && this.ctx.scale(i, i), a && (a.width = t * i, a.height = e * i, 1 != i && this.ctxBack.scale(i, i))
            }, clear: function (t) {
                var e = this.dom, i = this.ctx, n = e.width, o = e.height, a = this.clearColor, r = this.motionBlur && !t, s = this.lastFrameAlpha, l = this.dpr;
                if (r && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(e, 0, 0, n / l, o / l)), i.clearRect(0, 0, n / l, o / l), a && (i.save(), i.fillStyle = this.clearColor, i.fillRect(0, 0, n / l, o / l), i.restore()), r) {
                    var h = this.domBack;
                    i.save(), i.globalAlpha = s, i.drawImage(h, 0, 0, n / l, o / l), i.restore()
                }
            }
        }, t.exports = s
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return parseInt(t, 10)
        }

        function o(t) {
            return t ? t.isBuildin ? !0 : "function" == typeof t.resize && "function" == typeof t.refresh : !1
        }

        function a(t) {
            t.__unusedCount++
        }

        function r(t) {
            t.__dirty = !1, 1 == t.__unusedCount && t.clear()
        }

        function s(t, e, i) {
            return g.copy(t.getBoundingRect()), t.transform && g.applyTransform(t.transform), m.width = e, m.height = i, !g.intersect(m)
        }

        function l(t, e) {
            if (!t || !e || t.length !== e.length)return !0;
            for (var i = 0; i < t.length; i++)if (t[i] !== e[i])return !0
        }

        function h(t, e) {
            for (var i = 0; i < t.length; i++) {
                var n, o = t[i];
                o.transform && (n = o.transform, e.transform(n[0], n[1], n[2], n[3], n[4], n[5]));
                var a = o.path;
                a.beginPath(e), o.buildPath(a, o.shape), e.clip(), o.transform && (n = o.invTransform, e.transform(n[0], n[1], n[2], n[3], n[4], n[5]))
            }
        }

        var u = i(33), c = i(1), d = i(45), f = i(8), p = i(127), g = new f(0, 0, 0, 0), m = new f(0, 0, 0, 0), v = function (t, e, i) {
            var n = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            i = i || {}, this.dpr = i.devicePixelRatio || u.devicePixelRatio, this._singleCanvas = n, this.root = t;
            var o = t.style;
            if (o && (o["-webkit-tap-highlight-color"] = "transparent", o["-webkit-user-select"] = "none", o["user-select"] = "none", o["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e, n) {
                var a = t.width, r = t.height;
                this._width = a, this._height = r;
                var s = new p(t, this, 1);
                s.initContext(), this._layers = {0: s}, this._zlevelList = [0]
            } else {
                var a = this._getWidth(), r = this._getHeight();
                this._width = a, this._height = r;
                var l = document.createElement("div");
                this._domRoot = l;
                var h = l.style;
                h.position = "relative", h.overflow = "hidden", h.width = this._width + "px", h.height = this._height + "px", t.appendChild(l), this._layers = {}, this._zlevelList = []
            }
            this._layerConfig = {}, this.pathToImage = this._createPathToImage()
        };
        v.prototype = {
            constructor: v, isSingleCanvas: function () {
                return this._singleCanvas
            }, getViewportRoot: function () {
                return this._singleCanvas ? this._layers[0].dom : this._domRoot
            }, refresh: function (t) {
                var e = this.storage.getDisplayList(!0), i = this._zlevelList;
                this._paintList(e, t);
                for (var n = 0; n < i.length; n++) {
                    var o = i[n], a = this._layers[o];
                    !a.isBuildin && a.refresh && a.refresh()
                }
                return this
            }, _paintList: function (t, e) {
                null == e && (e = !1), this._updateLayerStatus(t);
                var i, n, o, u = this._width, c = this._height;
                this.eachBuildinLayer(a);
                for (var f = null, p = 0, g = t.length; g > p; p++) {
                    var m = t[p], v = this._singleCanvas ? 0 : m.zlevel;
                    if (n !== v && (n = v, i = this.getLayer(n), i.isBuildin || d("ZLevel " + n + " has been used by unkown layer " + i.id), o = i.ctx, i.__unusedCount = 0, (i.__dirty || e) && i.clear()), (i.__dirty || e) && !m.invisible && 0 !== m.style.opacity && m.scale[0] && m.scale[1] && (!m.culling || !s(m, u, c))) {
                        var y = m.__clipPaths;
                        l(y, f) && (f && o.restore(), y && (o.save(), h(y, o)), f = y), m.beforeBrush && m.beforeBrush(o), m.brush(o, !1), m.afterBrush && m.afterBrush(o)
                    }
                    m.__dirty = !1
                }
                f && o.restore(), this.eachBuildinLayer(r)
            }, getLayer: function (t) {
                if (this._singleCanvas)return this._layers[0];
                var e = this._layers[t];
                return e || (e = new p("zr_" + t, this, this.dpr), e.isBuildin = !0, this._layerConfig[t] && c.merge(e, this._layerConfig[t], !0), this.insertLayer(t, e), e.initContext()), e
            }, insertLayer: function (t, e) {
                var i = this._layers, n = this._zlevelList, a = n.length, r = null, s = -1, l = this._domRoot;
                if (i[t])return void d("ZLevel " + t + " has been used already");
                if (!o(e))return void d("Layer of zlevel " + t + " is not valid");
                if (a > 0 && t > n[0]) {
                    for (s = 0; a - 1 > s && !(n[s] < t && n[s + 1] > t); s++);
                    r = i[n[s]]
                }
                if (n.splice(s + 1, 0, t), r) {
                    var h = r.dom;
                    h.nextSibling ? l.insertBefore(e.dom, h.nextSibling) : l.appendChild(e.dom)
                } else l.firstChild ? l.insertBefore(e.dom, l.firstChild) : l.appendChild(e.dom);
                i[t] = e
            }, eachLayer: function (t, e) {
                var i, n, o = this._zlevelList;
                for (n = 0; n < o.length; n++)i = o[n], t.call(e, this._layers[i], i)
            }, eachBuildinLayer: function (t, e) {
                var i, n, o, a = this._zlevelList;
                for (o = 0; o < a.length; o++)n = a[o], i = this._layers[n], i.isBuildin && t.call(e, i, n)
            }, eachOtherLayer: function (t, e) {
                var i, n, o, a = this._zlevelList;
                for (o = 0; o < a.length; o++)n = a[o], i = this._layers[n], i.isBuildin || t.call(e, i, n)
            }, getLayers: function () {
                return this._layers
            }, _updateLayerStatus: function (t) {
                var e = this._layers, i = {};
                this.eachBuildinLayer(function (t, e) {
                    i[e] = t.elCount, t.elCount = 0
                });
                for (var n = 0, o = t.length; o > n; n++) {
                    var a = t[n], r = this._singleCanvas ? 0 : a.zlevel, s = e[r];
                    if (s) {
                        if (s.elCount++, s.__dirty)continue;
                        s.__dirty = a.__dirty
                    }
                }
                this.eachBuildinLayer(function (t, e) {
                    i[e] !== t.elCount && (t.__dirty = !0)
                })
            }, clear: function () {
                return this.eachBuildinLayer(this._clearLayer), this
            }, _clearLayer: function (t) {
                t.clear()
            }, configLayer: function (t, e) {
                if (e) {
                    var i = this._layerConfig;
                    i[t] ? c.merge(i[t], e, !0) : i[t] = e;
                    var n = this._layers[t];
                    n && c.merge(n, i[t], !0)
                }
            }, delLayer: function (t) {
                var e = this._layers, i = this._zlevelList, n = e[t];
                n && (n.dom.parentNode.removeChild(n.dom), delete e[t], i.splice(c.indexOf(i, t), 1))
            }, resize: function (t, e) {
                var i = this._domRoot;
                if (i.style.display = "none", t = t || this._getWidth(), e = e || this._getHeight(), i.style.display = "", this._width != t || e != this._height) {
                    i.style.width = t + "px", i.style.height = e + "px";
                    for (var n in this._layers)this._layers[n].resize(t, e);
                    this.refresh(!0)
                }
                return this._width = t, this._height = e, this
            }, clearLayer: function (t) {
                var e = this._layers[t];
                e && e.clear()
            }, dispose: function () {
                this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
            }, getRenderedCanvas: function (t) {
                if (t = t || {}, this._singleCanvas)return this._layers[0].dom;
                var e = new p("image", this, t.pixelRatio || this.dpr);
                e.initContext();
                var i = e.ctx;
                e.clearColor = t.backgroundColor, e.clear();
                for (var n = this.storage.getDisplayList(!0), o = 0; o < n.length; o++) {
                    var a = n[o];
                    a.invisible || (a.beforeBrush && a.beforeBrush(i), a.brush(i, !1), a.afterBrush && a.afterBrush(i))
                }
                return e.dom
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, _getWidth: function () {
                var t = this.root, e = document.defaultView.getComputedStyle(t);
                return (t.clientWidth || n(e.width) || n(t.style.width)) - (n(e.paddingLeft) || 0) - (n(e.paddingRight) || 0) | 0
            }, _getHeight: function () {
                var t = this.root, e = document.defaultView.getComputedStyle(t);
                return (t.clientHeight || n(e.height) || n(t.style.height)) - (n(e.paddingTop) || 0) - (n(e.paddingBottom) || 0) | 0
            }, _pathToImage: function (t, e, n, o, a) {
                var r = document.createElement("canvas"), s = r.getContext("2d");
                r.width = n * a, r.height = o * a, s.clearRect(0, 0, n * a, o * a);
                var l = {position: e.position, rotation: e.rotation, scale: e.scale};
                e.position = [0, 0, 0], e.rotation = 0, e.scale = [1, 1], e && e.brush(s);
                var h = i(46), u = new h({id: t, style: {x: 0, y: 0, image: r}});
                return null != l.position && (u.position = e.position = l.position), null != l.rotation && (u.rotation = e.rotation = l.rotation), null != l.scale && (u.scale = e.scale = l.scale), u
            }, _createPathToImage: function () {
                var t = this;
                return function (e, i, n, o) {
                    return t._pathToImage(e, i, n, o, t.dpr)
                }
            }
        }, t.exports = v
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 === e.z2 ? t.__renderidx - e.__renderidx : t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
        }

        var o = i(1), a = i(27), r = function () {
            this._elements = {}, this._roots = [], this._displayList = [], this._displayListLen = 0
        };
        r.prototype = {
            constructor: r, getDisplayList: function (t, e) {
                return e = e || !1, t && this.updateDisplayList(e), this._displayList
            }, updateDisplayList: function (t) {
                this._displayListLen = 0;
                for (var e = this._roots, i = this._displayList, o = 0, a = e.length; a > o; o++)this._updateAndAddDisplayable(e[o], null, t);
                i.length = this._displayListLen;
                for (var o = 0, a = i.length; a > o; o++)i[o].__renderidx = o;
                i.sort(n)
            }, _updateAndAddDisplayable: function (t, e, i) {
                if (!t.ignore || i) {
                    t.beforeUpdate(), t.update(), t.afterUpdate();
                    var n = t.clipPath;
                    if (n && (n.parent = t, n.updateTransform(), e ? (e = e.slice(), e.push(n)) : e = [n]), "group" == t.type) {
                        for (var o = t._children, a = 0; a < o.length; a++) {
                            var r = o[a];
                            r.__dirty = t.__dirty || r.__dirty, this._updateAndAddDisplayable(r, e, i)
                        }
                        t.__dirty = !1
                    } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
                }
            }, addRoot: function (t) {
                this._elements[t.id] || (t instanceof a && t.addChildrenToStorage(this), this.addToMap(t), this._roots.push(t))
            }, delRoot: function (t) {
                if (null == t) {
                    for (var e = 0; e < this._roots.length; e++) {
                        var i = this._roots[e];
                        i instanceof a && i.delChildrenFromStorage(this)
                    }
                    return this._elements = {}, this._roots = [], this._displayList = [], void(this._displayListLen = 0)
                }
                if (t instanceof Array)for (var e = 0, n = t.length; n > e; e++)this.delRoot(t[e]); else {
                    var r;
                    r = "string" == typeof t ? this._elements[t] : t;
                    var s = o.indexOf(this._roots, r);
                    s >= 0 && (this.delFromMap(r.id), this._roots.splice(s, 1), r instanceof a && r.delChildrenFromStorage(this))
                }
            }, addToMap: function (t) {
                return t instanceof a && (t.__storage = this), t.dirty(), this._elements[t.id] = t, this
            }, get: function (t) {
                return this._elements[t]
            }, delFromMap: function (t) {
                var e = this._elements, i = e[t];
                return i && (delete e[t], i instanceof a && (i.__storage = null)), this
            }, dispose: function () {
                this._elements = this._renderList = this._roots = null
            }
        }, t.exports = r
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(34).Dispatcher, a = "undefined" != typeof window && (window.requestAnimationFrame || window.msRequestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
                setTimeout(t, 16)
            }, r = i(56), s = function (t) {
            t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {
            }, this._clips = [], this._running = !1, this._time = 0, o.call(this)
        };
        s.prototype = {
            constructor: s, addClip: function (t) {
                this._clips.push(t)
            }, addAnimator: function (t) {
                t.animation = this;
                for (var e = t.getClips(), i = 0; i < e.length; i++)this.addClip(e[i])
            }, removeClip: function (t) {
                var e = n.indexOf(this._clips, t);
                e >= 0 && this._clips.splice(e, 1)
            }, removeAnimator: function (t) {
                for (var e = t.getClips(), i = 0; i < e.length; i++)this.removeClip(e[i]);
                t.animation = null
            }, _update: function () {
                for (var t = (new Date).getTime(), e = t - this._time, i = this._clips, n = i.length, o = [], a = [], r = 0; n > r; r++) {
                    var s = i[r], l = s.step(t);
                    l && (o.push(l), a.push(s))
                }
                for (var r = 0; n > r;)i[r]._needsRemove ? (i[r] = i[n - 1], i.pop(), n--) : r++;
                n = o.length;
                for (var r = 0; n > r; r++)a[r].fire(o[r]);
                this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
            }, start: function () {
                function t() {
                    e._running && (a(t), e._update())
                }

                var e = this;
                this._running = !0, this._time = (new Date).getTime(), a(t)
            }, stop: function () {
                this._running = !1
            }, clear: function () {
                this._clips = []
            }, animate: function (t, e) {
                e = e || {};
                var i = new r(t, e.loop, e.getter, e.setter);
                return i
            }
        }, n.mixin(s, o), t.exports = s
    }, function (t, e, i) {
        function n(t) {
            this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
        }

        var o = i(132);
        n.prototype = {
            constructor: n, step: function (t) {
                this._initialized || (this._startTime = (new Date).getTime() + this._delay, this._initialized = !0);
                var e = (t - this._startTime) / this._life;
                if (!(0 > e)) {
                    e = Math.min(e, 1);
                    var i = this.easing, n = "string" == typeof i ? o[i] : i, a = "function" == typeof n ? n(e) : e;
                    return this.fire("frame", a), 1 == e ? this.loop ? (this.restart(), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }, restart: function () {
                var t = (new Date).getTime(), e = (t - this._startTime) % this._life;
                this._startTime = (new Date).getTime() - e + this.gap, this._needsRemove = !1
            }, fire: function (t, e) {
                t = "on" + t, this[t] && this[t](this._target, e)
            }
        }, t.exports = n
    }, function (t, e) {
        var i = {
            linear: function (t) {
                return t
            }, quadraticIn: function (t) {
                return t * t
            }, quadraticOut: function (t) {
                return t * (2 - t)
            }, quadraticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }, cubicIn: function (t) {
                return t * t * t
            }, cubicOut: function (t) {
                return --t * t * t + 1
            }, cubicInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }, quarticIn: function (t) {
                return t * t * t * t
            }, quarticOut: function (t) {
                return 1 - --t * t * t * t
            }, quarticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }, quinticIn: function (t) {
                return t * t * t * t * t
            }, quinticOut: function (t) {
                return --t * t * t * t * t + 1
            }, quinticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }, sinusoidalIn: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, sinusoidalOut: function (t) {
                return Math.sin(t * Math.PI / 2)
            }, sinusoidalInOut: function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }, exponentialIn: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            }, exponentialOut: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }, exponentialInOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
            }, circularIn: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, circularOut: function (t) {
                return Math.sqrt(1 - --t * t)
            }, circularInOut: function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, elasticIn: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), -(i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)))
            }, elasticOut: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), i * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1)
            }, elasticInOut: function (t) {
                var e, i = .1, n = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!i || 1 > i ? (i = 1, e = n / 4) : e = n * Math.asin(1 / i) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * (i * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)) : i * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1)
            }, backIn: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, backOut: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            }, backInOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? .5 * (t * t * ((e + 1) * t - e)) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }, bounceIn: function (t) {
                return 1 - i.bounceOut(1 - t)
            }, bounceOut: function (t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, bounceInOut: function (t) {
                return .5 > t ? .5 * i.bounceIn(2 * t) : .5 * i.bounceOut(2 * t - 1) + .5
            }
        };
        t.exports = i
    }, function (t, e, i) {
        var n = i(57).normalizeRadian, o = 2 * Math.PI;
        t.exports = {
            containStroke: function (t, e, i, a, r, s, l, h, u) {
                if (0 === l)return !1;
                var c = l;
                h -= t, u -= e;
                var d = Math.sqrt(h * h + u * u);
                if (d - c > i || i > d + c)return !1;
                if (Math.abs(a - r) % o < 1e-4)return !0;
                if (s) {
                    var f = a;
                    a = n(r), r = n(f)
                } else a = n(a), r = n(r);
                a > r && (r += o);
                var p = Math.atan2(u, h);
                return 0 > p && (p += o), p >= a && r >= p || p + o >= a && r >= p + o
            }
        }
    }, function (t, e, i) {
        var n = i(16);
        t.exports = {
            containStroke: function (t, e, i, o, a, r, s, l, h, u, c) {
                if (0 === h)return !1;
                var d = h;
                if (c > e + d && c > o + d && c > r + d && c > l + d || e - d > c && o - d > c && r - d > c && l - d > c || u > t + d && u > i + d && u > a + d && u > s + d || t - d > u && i - d > u && a - d > u && s - d > u)return !1;
                var f = n.cubicProjectPoint(t, e, i, o, a, r, s, l, u, c, null);
                return d / 2 >= f
            }
        }
    }, function (t, e) {
        t.exports = {
            containStroke: function (t, e, i, n, o, a, r) {
                if (0 === o)return !1;
                var s = o, l = 0, h = t;
                if (r > e + s && r > n + s || e - s > r && n - s > r || a > t + s && a > i + s || t - s > a && i - s > a)return !1;
                if (t === i)return Math.abs(a - t) <= s / 2;
                l = (e - n) / (t - i), h = (t * n - i * e) / (t - i);
                var u = l * a - r + h, c = u * u / (l * l + 1);
                return s / 2 * s / 2 >= c
            }
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return Math.abs(t - e) < x
        }

        function o() {
            var t = b[0];
            b[0] = b[1], b[1] = t
        }

        function a(t, e, i, n, a, r, s, l, h, u) {
            if (u > e && u > n && u > r && u > l || e > u && n > u && r > u && l > u)return 0;
            var c = g.cubicRootAt(e, n, r, l, u, _);
            if (0 === c)return 0;
            for (var d, f, p = 0, m = -1, v = 0; c > v; v++) {
                var y = _[v], x = g.cubicAt(t, i, a, s, y);
                h > x || (0 > m && (m = g.cubicExtrema(e, n, r, l, b), b[1] < b[0] && m > 1 && o(), d = g.cubicAt(e, n, r, l, b[0]), m > 1 && (f = g.cubicAt(e, n, r, l, b[1]))), p += 2 == m ? y < b[0] ? e > d ? 1 : -1 : y < b[1] ? d > f ? 1 : -1 : f > l ? 1 : -1 : y < b[0] ? e > d ? 1 : -1 : d > l ? 1 : -1)
            }
            return p
        }

        function r(t, e, i, n, o, a, r, s) {
            if (s > e && s > n && s > a || e > s && n > s && a > s)return 0;
            var l = g.quadraticRootAt(e, n, a, s, _);
            if (0 === l)return 0;
            var h = g.quadraticExtremum(e, n, a);
            if (h >= 0 && 1 >= h) {
                for (var u = 0, c = g.quadraticAt(e, n, a, h), d = 0; l > d; d++) {
                    var f = g.quadraticAt(t, i, o, _[d]);
                    r > f || (u += _[d] < h ? e > c ? 1 : -1 : c > a ? 1 : -1)
                }
                return u
            }
            var f = g.quadraticAt(t, i, o, _[0]);
            return r > f ? 0 : e > a ? 1 : -1
        }

        function s(t, e, i, n, o, a, r, s) {
            if (s -= e, s > i || -i > s)return 0;
            var l = Math.sqrt(i * i - s * s);
            _[0] = -l, _[1] = l;
            var h = Math.abs(n - o);
            if (1e-4 > h)return 0;
            if (1e-4 > h % y) {
                n = 0, o = y;
                var u = a ? 1 : -1;
                return r >= _[0] + t && r <= _[1] + t ? u : 0
            }
            if (a) {
                var l = n;
                n = p(o), o = p(l)
            } else n = p(n), o = p(o);
            n > o && (o += y);
            for (var c = 0, d = 0; 2 > d; d++) {
                var f = _[d];
                if (f + t > r) {
                    var g = Math.atan2(s, f), u = a ? 1 : -1;
                    0 > g && (g = y + g), (g >= n && o >= g || g + y >= n && o >= g + y) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (u = -u), c += u)
                }
            }
            return c
        }

        function l(t, e, i, o, l) {
            for (var u = 0, p = 0, g = 0, y = 0, x = 0, _ = 0; _ < t.length;) {
                var b = t[_++];
                if (b === h.M && _ > 1 && (i || (u += m(p, g, y, x, o, l)), 0 !== u))return !0;
                switch (1 == _ && (p = t[_], g = t[_ + 1], y = p, x = g), b) {
                    case h.M:
                        y = t[_++], x = t[_++], p = y, g = x;
                        break;
                    case h.L:
                        if (i) {
                            if (v(p, g, t[_], t[_ + 1], e, o, l))return !0
                        } else u += m(p, g, t[_], t[_ + 1], o, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case h.C:
                        if (i) {
                            if (c.containStroke(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], e, o, l))return !0
                        } else u += a(p, g, t[_++], t[_++], t[_++], t[_++], t[_], t[_ + 1], o, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case h.Q:
                        if (i) {
                            if (d.containStroke(p, g, t[_++], t[_++], t[_], t[_ + 1], e, o, l))return !0
                        } else u += r(p, g, t[_++], t[_++], t[_], t[_ + 1], o, l) || 0;
                        p = t[_++], g = t[_++];
                        break;
                    case h.A:
                        var w = t[_++], S = t[_++], M = t[_++], A = t[_++], I = t[_++], T = t[_++], L = (t[_++], 1 - t[_++]), C = Math.cos(I) * M + w, D = Math.sin(I) * A + S;
                        _ > 1 ? u += m(p, g, C, D, o, l) : (y = C, x = D);
                        var P = (o - w) * A / M + w;
                        if (i) {
                            if (f.containStroke(w, S, A, I, I + T, L, e, P, l))return !0
                        } else u += s(w, S, A, I, I + T, L, P, l);
                        p = Math.cos(I + T) * M + w, g = Math.sin(I + T) * A + S;
                        break;
                    case h.R:
                        y = p = t[_++], x = g = t[_++];
                        var k = t[_++], z = t[_++], C = y + k, D = x + z;
                        if (i) {
                            if (v(y, x, C, x, e, o, l) || v(C, x, C, D, e, o, l) || v(C, D, y, D, e, o, l) || v(y, D, C, D, e, o, l))return !0
                        } else u += m(C, x, C, D, o, l), u += m(y, D, y, x, o, l);
                        break;
                    case h.Z:
                        if (i) {
                            if (v(p, g, y, x, e, o, l))return !0
                        } else if (u += m(p, g, y, x, o, l), 0 !== u)return !0;
                        p = y, g = x
                }
            }
            return i || n(g, x) || (u += m(p, g, y, x, o, l) || 0), 0 !== u
        }

        var h = i(28).CMD, u = i(135), c = i(134), d = i(137), f = i(133), p = i(57).normalizeRadian, g = i(16), m = i(75), v = u.containStroke, y = 2 * Math.PI, x = 1e-4, _ = [-1, -1, -1], b = [-1, -1];
        t.exports = {
            contain: function (t, e, i) {
                return l(t, 0, !1, e, i)
            }, containStroke: function (t, e, i, n) {
                return l(t, e, !0, i, n)
            }
        }
    }, function (t, e, i) {
        var n = i(16);
        t.exports = {
            containStroke: function (t, e, i, o, a, r, s, l, h) {
                if (0 === s)return !1;
                var u = s;
                if (h > e + u && h > o + u && h > r + u || e - u > h && o - u > h && r - u > h || l > t + u && l > i + u && l > a + u || t - u > l && i - u > l && a - u > l)return !1;
                var c = n.quadraticProjectPoint(t, e, i, o, a, r, l, h, null);
                return u / 2 >= c
            }
        }
    }, function (t, e) {
        "use strict";
        function i(t) {
            var e = t[1][0] - t[0][0], i = t[1][1] - t[0][1];
            return Math.sqrt(e * e + i * i)
        }

        function n(t) {
            return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
        }

        var o = function () {
            this._track = []
        };
        o.prototype = {
            constructor: o, recognize: function (t, e) {
                return this._doTrack(t, e), this._recognize(t)
            }, clear: function () {
                return this._track.length = 0, this
            }, _doTrack: function (t, e) {
                var i = t.touches;
                if (i) {
                    for (var n = {points: [], touches: [], target: e, event: t}, o = 0, a = i.length; a > o; o++) {
                        var r = i[o];
                        n.points.push([r.clientX, r.clientY]), n.touches.push(r)
                    }
                    this._track.push(n)
                }
            }, _recognize: function (t) {
                for (var e in a)if (a.hasOwnProperty(e)) {
                    var i = a[e](this._track, t);
                    if (i)return i
                }
            }
        };
        var a = {
            pinch: function (t, e) {
                var o = t.length;
                if (o) {
                    var a = (t[o - 1] || {}).points, r = (t[o - 2] || {}).points || a;
                    if (r && r.length > 1 && a && a.length > 1) {
                        var s = i(a) / i(r);
                        !isFinite(s) && (s = 1), e.pinchScale = s;
                        var l = n(a);
                        return e.pinchX = l[0], e.pinchY = l[1], {type: "pinch", target: t[0].target, event: e}
                    }
                }
            }
        };
        t.exports = o
    }, function (t, e) {
        var i = function () {
            this.head = null, this.tail = null, this._len = 0
        }, n = i.prototype;
        n.insert = function (t) {
            var e = new o(t);
            return this.insertEntry(e), e
        }, n.insertEntry = function (t) {
            this.head ? (this.tail.next = t, t.prev = this.tail, this.tail = t) : this.head = this.tail = t, this._len++
        }, n.remove = function (t) {
            var e = t.prev, i = t.next;
            e ? e.next = i : this.head = i, i ? i.prev = e : this.tail = e, t.next = t.prev = null, this._len--
        }, n.len = function () {
            return this._len
        };
        var o = function (t) {
            this.value = t, this.next, this.prev
        }, a = function (t) {
            this._list = new i, this._map = {}, this._maxSize = t || 10
        }, r = a.prototype;
        r.put = function (t, e) {
            var i = this._list, n = this._map;
            if (null == n[t]) {
                var o = i.len();
                if (o >= this._maxSize && o > 0) {
                    var a = i.head;
                    i.remove(a), delete n[a.key]
                }
                var r = i.insert(e);
                r.key = t, n[t] = r
            }
        }, r.get = function (t) {
            var e = this._map[t], i = this._list;
            return null != e ? (e !== i.tail && (i.remove(e), i.insertEntry(e)), e.value) : void 0
        }, r.clear = function () {
            this._list.clear(), this._map = {}
        }, t.exports = a
    }, function (t, e, i) {
        var n = i(6);
        t.exports = n.extend({
            type: "compound", shape: {paths: null}, _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, i = 0; i < e.length; i++)t = t || e[i].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            }, beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), i = 0; i < t.length; i++)t[i].path.setScale(e[0], e[1])
            }, buildPath: function (t, e) {
                for (var i = e.paths || [], n = 0; n < i.length; n++)i[n].buildPath(t, i[n].shape)
            }, afterBrush: function () {
                for (var t = this.shape.paths, e = 0; e < t.length; e++)t[e].__dirtyPath = !1
            }, getBoundingRect: function () {
                return this._updatePathDirty(), n.prototype.getBoundingRect.call(this)
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(17), a = function (t, e, i, n) {
            this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == i ? .5 : i, o.call(this, n)
        };
        a.prototype = {constructor: a, type: "radial"}, n.inherits(a, o), t.exports = a
    }, function (t, e) {
        var i = ["lineCap", "lineJoin", "miterLimit", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "shadowColor"], n = function (t) {
            this.extendFrom(t)
        };
        n.prototype = {
            constructor: n,
            fill: "#000000",
            stroke: null,
            opacity: 1,
            lineDash: null,
            lineDashOffset: 0,
            shadowBlur: 0,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            lineWidth: 1,
            strokeNoScale: !1,
            text: null,
            textFill: "#000",
            textStroke: null,
            textPosition: "inside",
            textBaseline: null,
            textAlign: null,
            textVerticalAlign: null,
            textDistance: 5,
            textShadowBlur: 0,
            textShadowOffsetX: 0,
            textShadowOffsetY: 0,
            bind: function (t, e) {
                for (var n = this.fill, o = this.stroke, a = 0; a < i.length; a++) {
                    var r = i[a];
                    null != this[r] && (t[r] = this[r])
                }
                if (null != o) {
                    var s = this.lineWidth;
                    t.lineWidth = s / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
                }
                null == n || "none" === n || n.colorStops || (t.fillStyle = n), null == o || "none" === o || o.colorStops || (t.strokeStyle = o), null != this.opacity && (t.globalAlpha = this.opacity)
            },
            extendFrom: function (t, e) {
                if (t) {
                    var i = this;
                    for (var n in t)!t.hasOwnProperty(n) || !e && i.hasOwnProperty(n) || (i[n] = t[n])
                }
            },
            set: function (t, e) {
                "string" == typeof t ? this[t] = e : this.extendFrom(t, !0);
            },
            clone: function () {
                var t = new this.constructor;
                return t.extendFrom(this, !0), t
            },
            createLinearGradient: function (t, e, i) {
                var n = e.x * i.width + i.x, o = e.x2 * i.width + i.x, a = e.y * i.height + i.y, r = e.y2 * i.height + i.y, s = t.createLinearGradient(n, a, o, r);
                return s
            },
            createRadialGradient: function (t, e, i) {
                var n = i.width, o = i.height, a = Math.min(n, o), r = e.x * n + i.x, s = e.y * o + i.y, l = e.r * a, h = t.createRadialGradient(r, s, 0, r, s, l);
                return h
            },
            getGradient: function (t, e, i) {
                for (var n = "radial" === e.type ? "createRadialGradient" : "createLinearGradient", o = this[n](t, e, i), a = e.colorStops, r = 0; r < a.length; r++)o.addColorStop(a[r].offset, a[r].color);
                return o
            }
        };
        var o, a, r = n.prototype;
        for (a = 0; a < i.length; a++)o = i[a], o in r || (r[o] = null);
        t.exports = n
    }, function (t, e, i) {
        var n = i(5), o = n.min, a = n.max, r = n.scale, s = n.distance, l = n.add;
        t.exports = function (t, e, i, h) {
            var u, c, d, f, p = [], g = [], m = [], v = [];
            if (h) {
                d = [1 / 0, 1 / 0], f = [-(1 / 0), -(1 / 0)];
                for (var y = 0, x = t.length; x > y; y++)o(d, d, t[y]), a(f, f, t[y]);
                o(d, d, h[0]), a(f, f, h[1])
            }
            for (var y = 0, x = t.length; x > y; y++) {
                var _ = t[y];
                if (i)u = t[y ? y - 1 : x - 1], c = t[(y + 1) % x]; else {
                    if (0 === y || y === x - 1) {
                        p.push(n.clone(t[y]));
                        continue
                    }
                    u = t[y - 1], c = t[y + 1]
                }
                n.sub(g, c, u), r(g, g, e);
                var b = s(_, u), w = s(_, c), S = b + w;
                0 !== S && (b /= S, w /= S), r(m, g, -b), r(v, g, w);
                var M = l([], _, m), A = l([], _, v);
                h && (a(M, M, d), o(M, M, f), a(A, A, d), o(A, A, f)), p.push(M), p.push(A)
            }
            return i && p.push(p.shift()), p
        }
    }, function (t, e, i) {
        function n(t, e, i, n, o, a, r) {
            var s = .5 * (i - t), l = .5 * (n - e);
            return (2 * (e - i) + s + l) * r + (-3 * (e - i) - 2 * s - l) * a + s * o + e
        }

        var o = i(5);
        t.exports = function (t, e) {
            for (var i = t.length, a = [], r = 0, s = 1; i > s; s++)r += o.distance(t[s - 1], t[s]);
            var l = r / 2;
            l = i > l ? i : l;
            for (var s = 0; l > s; s++) {
                var h, u, c, d = s / (l - 1) * (e ? i : i - 1), f = Math.floor(d), p = d - f, g = t[f % i];
                e ? (h = t[(f - 1 + i) % i], u = t[(f + 1) % i], c = t[(f + 2) % i]) : (h = t[0 === f ? f : f - 1], u = t[f > i - 2 ? i - 1 : f + 1], c = t[f > i - 3 ? i - 1 : f + 2]);
                var m = p * p, v = p * m;
                a.push([n(h[0], g[0], u[0], c[0], p, m, v), n(h[1], g[1], u[1], c[1], p, m, v)])
            }
            return a
        }
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "arc",
            shape: {cx: 0, cy: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = Math.max(e.r, 0), a = e.startAngle, r = e.endAngle, s = e.clockwise, l = Math.cos(a), h = Math.sin(a);
                t.moveTo(l * o + i, h * o + n), t.arc(i, n, o, a, r, !s)
            }
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = t.cpx2, o = t.cpy2;
            return null === n || null === o ? [(i ? c : h)(t.x1, t.cpx1, t.cpx2, t.x2, e), (i ? c : h)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(i ? u : l)(t.x1, t.cpx1, t.x2, e), (i ? u : l)(t.y1, t.cpy1, t.y2, e)]
        }

        var o = i(16), a = i(5), r = o.quadraticSubdivide, s = o.cubicSubdivide, l = o.quadraticAt, h = o.cubicAt, u = o.quadraticDerivativeAt, c = o.cubicDerivativeAt, d = [];
        t.exports = i(6).extend({
            type: "bezier-curve",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, cpx1: 0, cpy1: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, o = e.x2, a = e.y2, l = e.cpx1, h = e.cpy1, u = e.cpx2, c = e.cpy2, f = e.percent;
                0 !== f && (t.moveTo(i, n), null == u || null == c ? (1 > f && (r(i, l, o, f, d), l = d[1], o = d[2], r(n, h, a, f, d), h = d[1], a = d[2]), t.quadraticCurveTo(l, h, o, a)) : (1 > f && (s(i, l, u, o, f, d), l = d[1], u = d[2], o = d[3], s(n, h, c, a, f, d), h = d[1], c = d[2], a = d[3]), t.bezierCurveTo(l, h, u, c, o, a)))
            },
            pointAt: function (t) {
                return n(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = n(this.shape, t, !0);
                return a.normalize(e, e)
            }
        })
    }, function (t, e, i) {
        "use strict";
        t.exports = i(6).extend({
            type: "circle", shape: {cx: 0, cy: 0, r: 0}, buildPath: function (t, e) {
                t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        })
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "line",
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                var i = e.x1, n = e.y1, o = e.x2, a = e.y2, r = e.percent;
                0 !== r && (t.moveTo(i, n), 1 > r && (o = i * (1 - r) + o * r, a = n * (1 - r) + a * r), t.lineTo(o, a))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        })
    }, function (t, e, i) {
        var n = i(59);
        t.exports = i(6).extend({
            type: "polygon",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            buildPath: function (t, e) {
                n.buildPath(t, e, !0)
            }
        })
    }, function (t, e, i) {
        var n = i(59);
        t.exports = i(6).extend({
            type: "polyline",
            shape: {points: null, smooth: !1, smoothConstraint: null},
            style: {stroke: "#000", fill: null},
            buildPath: function (t, e) {
                n.buildPath(t, e, !1)
            }
        })
    }, function (t, e, i) {
        var n = i(60);
        t.exports = i(6).extend({
            type: "rect",
            shape: {r: 0, x: 0, y: 0, width: 0, height: 0},
            buildPath: function (t, e) {
                var i = e.x, o = e.y, a = e.width, r = e.height;
                e.r ? n.buildPath(t, e) : t.rect(i, o, a, r), t.closePath()
            }
        })
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "ring", shape: {cx: 0, cy: 0, r: 0, r0: 0}, buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = 2 * Math.PI;
                t.moveTo(i + e.r, n), t.arc(i, n, e.r, 0, o, !1), t.moveTo(i + e.r0, n), t.arc(i, n, e.r0, 0, o, !0)
            }
        })
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "sector",
            shape: {cx: 0, cy: 0, r0: 0, r: 0, startAngle: 0, endAngle: 2 * Math.PI, clockwise: !0},
            buildPath: function (t, e) {
                var i = e.cx, n = e.cy, o = Math.max(e.r0 || 0, 0), a = Math.max(e.r, 0), r = e.startAngle, s = e.endAngle, l = e.clockwise, h = Math.cos(r), u = Math.sin(r);
                t.moveTo(h * o + i, u * o + n), t.lineTo(h * a + i, u * a + n), t.arc(i, n, a, r, s, !l), t.lineTo(Math.cos(s) * o + i, Math.sin(s) * o + n), 0 !== o && t.arc(i, n, o, s, r, l), t.closePath()
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(56), o = i(1), a = o.isString, r = o.isFunction, s = o.isObject, l = i(45), h = function () {
            this.animators = []
        };
        h.prototype = {
            constructor: h, animate: function (t, e) {
                var i, a = !1, r = this, s = this.__zr;
                if (t) {
                    var h = t.split("."), u = r;
                    a = "shape" === h[0];
                    for (var c = 0, d = h.length; d > c; c++)u && (u = u[h[c]]);
                    u && (i = u)
                } else i = r;
                if (!i)return void l('Property "' + t + '" is not existed in element ' + r.id);
                var f = r.animators, p = new n(i, e);
                return p.during(function (t) {
                    r.dirty(a)
                }).done(function () {
                    f.splice(o.indexOf(f, p), 1)
                }), f.push(p), s && s.animation.addAnimator(p), p
            }, stopAnimation: function (t) {
                for (var e = this.animators, i = e.length, n = 0; i > n; n++)e[n].stop(t);
                return e.length = 0, this
            }, animateTo: function (t, e, i, n, o) {
                function s() {
                    h--, h || o && o()
                }

                a(i) ? (o = n, n = i, i = 0) : r(n) ? (o = n, n = "linear", i = 0) : r(i) ? (o = i, i = 0) : r(e) ? (o = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, i, n, o);
                var l = this.animators.slice(), h = l.length;
                h || o && o();
                for (var u = 0; u < l.length; u++)l[u].done(s).start(n)
            }, _animateToShallow: function (t, e, i, n, a) {
                var r = {}, l = 0;
                for (var h in i)if (null != e[h])s(i[h]) && !o.isArrayLike(i[h]) ? this._animateToShallow(t ? t + "." + h : h, e[h], i[h], n, a) : (r[h] = i[h], l++); else if (null != i[h])if (t) {
                    var u = {};
                    u[t] = {}, u[t][h] = i[h], this.attr(u)
                } else this.attr(h, i[h]);
                return l > 0 && this.animate(t, !1).when(null == n ? 500 : n, r).delay(a || 0), this
            }
        }, t.exports = h
    }, function (t, e) {
        function i() {
            this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
        }

        i.prototype = {
            constructor: i, _dragStart: function (t) {
                var e = t.target;
                e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this._dispatchProxy(e, "dragstart", t.event))
            }, _drag: function (t) {
                var e = this._draggingTarget;
                if (e) {
                    var i = t.offsetX, n = t.offsetY, o = i - this._x, a = n - this._y;
                    this._x = i, this._y = n, e.drift(o, a, t), this._dispatchProxy(e, "drag", t.event);
                    var r = this.findHover(i, n, e), s = this._dropTarget;
                    this._dropTarget = r, e !== r && (s && r !== s && this._dispatchProxy(s, "dragleave", t.event), r && r !== s && this._dispatchProxy(r, "dragenter", t.event))
                }
            }, _dragEnd: function (t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1), this._dispatchProxy(e, "dragend", t.event), this._dropTarget && this._dispatchProxy(this._dropTarget, "drop", t.event), this._draggingTarget = null, this._dropTarget = null
            }
        }, t.exports = i
    }, function (t, e, i) {
        function n(t, e, i, n, o, a, r, s, l, h, u) {
            var g = l * (p / 180), y = f(g) * (t - i) / 2 + d(g) * (e - n) / 2, x = -1 * d(g) * (t - i) / 2 + f(g) * (e - n) / 2, _ = y * y / (r * r) + x * x / (s * s);
            _ > 1 && (r *= c(_), s *= c(_));
            var b = (o === a ? -1 : 1) * c((r * r * (s * s) - r * r * (x * x) - s * s * (y * y)) / (r * r * (x * x) + s * s * (y * y))) || 0, w = b * r * x / s, S = b * -s * y / r, M = (t + i) / 2 + f(g) * w - d(g) * S, A = (e + n) / 2 + d(g) * w + f(g) * S, I = v([1, 0], [(y - w) / r, (x - S) / s]), T = [(y - w) / r, (x - S) / s], L = [(-1 * y - w) / r, (-1 * x - S) / s], C = v(T, L);
            m(T, L) <= -1 && (C = p), m(T, L) >= 1 && (C = 0), 0 === a && C > 0 && (C -= 2 * p), 1 === a && 0 > C && (C += 2 * p), u.addData(h, M, A, r, s, I, C, g, a)
        }

        function o(t) {
            if (!t)return [];
            var e, i = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
            for (e = 0; e < u.length; e++)i = i.replace(new RegExp(u[e], "g"), "|" + u[e]);
            var o, a = i.split("|"), r = 0, l = 0, h = new s, c = s.CMD;
            for (e = 1; e < a.length; e++) {
                var d, f = a[e], p = f.charAt(0), g = 0, m = f.slice(1).replace(/e,-/g, "e-").split(",");
                m.length > 0 && "" === m[0] && m.shift();
                for (var v = 0; v < m.length; v++)m[v] = parseFloat(m[v]);
                for (; g < m.length && !isNaN(m[g]) && !isNaN(m[0]);) {
                    var y, x, _, b, w, S, M, A = r, I = l;
                    switch (p) {
                        case"l":
                            r += m[g++], l += m[g++], d = c.L, h.addData(d, r, l);
                            break;
                        case"L":
                            r = m[g++], l = m[g++], d = c.L, h.addData(d, r, l);
                            break;
                        case"m":
                            r += m[g++], l += m[g++], d = c.M, h.addData(d, r, l), p = "l";
                            break;
                        case"M":
                            r = m[g++], l = m[g++], d = c.M, h.addData(d, r, l), p = "L";
                            break;
                        case"h":
                            r += m[g++], d = c.L, h.addData(d, r, l);
                            break;
                        case"H":
                            r = m[g++], d = c.L, h.addData(d, r, l);
                            break;
                        case"v":
                            l += m[g++], d = c.L, h.addData(d, r, l);
                            break;
                        case"V":
                            l = m[g++], d = c.L, h.addData(d, r, l);
                            break;
                        case"C":
                            d = c.C, h.addData(d, m[g++], m[g++], m[g++], m[g++], m[g++], m[g++]), r = m[g - 2], l = m[g - 1];
                            break;
                        case"c":
                            d = c.C, h.addData(d, m[g++] + r, m[g++] + l, m[g++] + r, m[g++] + l, m[g++] + r, m[g++] + l), r += m[g - 2], l += m[g - 1];
                            break;
                        case"S":
                            y = r, x = l;
                            var T = h.len(), L = h.data;
                            o === c.C && (y += r - L[T - 4], x += l - L[T - 3]), d = c.C, A = m[g++], I = m[g++], r = m[g++], l = m[g++], h.addData(d, y, x, A, I, r, l);
                            break;
                        case"s":
                            y = r, x = l;
                            var T = h.len(), L = h.data;
                            o === c.C && (y += r - L[T - 4], x += l - L[T - 3]), d = c.C, A = r + m[g++], I = l + m[g++], r += m[g++], l += m[g++], h.addData(d, y, x, A, I, r, l);
                            break;
                        case"Q":
                            A = m[g++], I = m[g++], r = m[g++], l = m[g++], d = c.Q, h.addData(d, A, I, r, l);
                            break;
                        case"q":
                            A = m[g++] + r, I = m[g++] + l, r += m[g++], l += m[g++], d = c.Q, h.addData(d, A, I, r, l);
                            break;
                        case"T":
                            y = r, x = l;
                            var T = h.len(), L = h.data;
                            o === c.Q && (y += r - L[T - 4], x += l - L[T - 3]), r = m[g++], l = m[g++], d = c.Q, h.addData(d, y, x, r, l);
                            break;
                        case"t":
                            y = r, x = l;
                            var T = h.len(), L = h.data;
                            o === c.Q && (y += r - L[T - 4], x += l - L[T - 3]), r += m[g++], l += m[g++], d = c.Q, h.addData(d, y, x, r, l);
                            break;
                        case"A":
                            _ = m[g++], b = m[g++], w = m[g++], S = m[g++], M = m[g++], A = r, I = l, r = m[g++], l = m[g++], d = c.A, n(A, I, r, l, S, M, _, b, w, d, h);
                            break;
                        case"a":
                            _ = m[g++], b = m[g++], w = m[g++], S = m[g++], M = m[g++], A = r, I = l, r += m[g++], l += m[g++], d = c.A, n(A, I, r, l, S, M, _, b, w, d, h)
                    }
                }
                "z" !== p && "Z" !== p || (d = c.Z, h.addData(d)), o = d
            }
            return h.toStatic(), h
        }

        function a(t, e) {
            var i, n = o(t);
            return e = e || {}, e.buildPath = function (t) {
                t.setData(n.data), i && l(t, i);
                var e = t.getContext();
                e && t.rebuildPath(e)
            }, e.applyTransform = function (t) {
                i || (i = h.create()), h.mul(i, t, i)
            }, e
        }

        var r = i(6), s = i(28), l = i(157), h = i(19), u = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"], c = Math.sqrt, d = Math.sin, f = Math.cos, p = Math.PI, g = function (t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        }, m = function (t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (g(t) * g(e))
        }, v = function (t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(m(t, e))
        };
        t.exports = {
            createFromString: function (t, e) {
                return new r(a(t, e))
            }, extendFromString: function (t, e) {
                return r.extend(a(t, e))
            }, mergePath: function (t, e) {
                var i, n, o = [], a = t.length;
                for (n = 0; a > n; n++)i = t[n], i.__dirty && i.buildPath(i.path, i.shape), o.push(i.path);
                var s = new r(e);
                return s.buildPath = function (t) {
                    t.appendPath(o);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, s
            }
        }
    }, function (t, e, i) {
        function n(t, e) {
            var i, n, a, u, c, d, f = t.data, p = o.M, g = o.C, m = o.L, v = o.R, y = o.A, x = o.Q;
            for (a = 0, u = 0; a < f.length;) {
                switch (i = f[a++], u = a, n = 0, i) {
                    case p:
                        n = 1;
                        break;
                    case m:
                        n = 1;
                        break;
                    case g:
                        n = 3;
                        break;
                    case x:
                        n = 2;
                        break;
                    case y:
                        var _ = e[4], b = e[5], w = l(e[0] * e[0] + e[1] * e[1]), S = l(e[2] * e[2] + e[3] * e[3]), M = h(-e[1] / S, e[0] / w);
                        f[a++] += _, f[a++] += b, f[a++] *= w, f[a++] *= S, f[a++] += M, f[a++] += M, a += 2, u = a;
                        break;
                    case v:
                        d[0] = f[a++], d[1] = f[a++], r(d, d, e), f[u++] = d[0], f[u++] = d[1], d[0] += f[a++], d[1] += f[a++], r(d, d, e), f[u++] = d[0], f[u++] = d[1]
                }
                for (c = 0; n > c; c++) {
                    var d = s[c];
                    d[0] = f[a++], d[1] = f[a++], r(d, d, e), f[u++] = d[0], f[u++] = d[1]
                }
            }
        }

        var o = i(28).CMD, a = i(5), r = a.applyTransform, s = [[], [], []], l = Math.sqrt, h = Math.atan2;
        t.exports = n
    }, function (t, e, i) {
        if (!i(14).canvasSupported) {
            var n, o = "urn:schemas-microsoft-com:vml", a = window, r = a.document, s = !1;
            try {
                !r.namespaces.zrvml && r.namespaces.add("zrvml", o), n = function (t) {
                    return r.createElement("<zrvml:" + t + ' class="zrvml">')
                }
            } catch (l) {
                n = function (t) {
                    return r.createElement("<" + t + ' xmlns="' + o + '" class="zrvml">')
                }
            }
            var h = function () {
                if (!s) {
                    s = !0;
                    var t = r.styleSheets;
                    t.length < 31 ? r.createStyleSheet().addRule(".zrvml", "behavior:url(#default#VML)") : t[0].addRule(".zrvml", "behavior:url(#default#VML)")
                }
            };
            t.exports = {doc: r, initVML: h, createNode: n}
        }
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            return null == t.value ? t : t.value
        }

        var o = i(15), a = i(31), r = i(267), s = i(1), l = {
            _baseAxisDim: null, getInitialData: function (t, e) {
                var i, r, s = e.getComponent("xAxis", this.get("xAxisIndex")), l = e.getComponent("yAxis", this.get("yAxisIndex")), h = s.get("type"), u = l.get("type");
                "category" === h ? (t.layout = "horizontal", i = s.getCategories(), r = !0) : "category" === u ? (t.layout = "vertical", i = l.getCategories(), r = !0) : t.layout = t.layout || "horizontal", this._baseAxisDim = "horizontal" === t.layout ? "x" : "y";
                var c = t.data, d = this.dimensions = ["base"].concat(this.valueDimensions);
                a(d, c);
                var f = new o(d, this);
                return f.initData(c, i ? i.slice() : null, function (t, e, i, o) {
                    var a = n(t);
                    return r ? "base" === e ? i : a[o - 1] : a[o]
                }), f
            }, coordDimToDataDim: function (t) {
                var e = this.valueDimensions.slice(), i = ["base"], n = {
                    horizontal: {x: i, y: e},
                    vertical: {x: e, y: i}
                };
                return n[this.get("layout")][t]
            }, dataDimToCoordDim: function (t) {
                var e;
                return s.each(["x", "y"], function (i, n) {
                    var o = this.coordDimToDataDim(i);
                    s.indexOf(o, t) >= 0 && (e = i)
                }, this), e
            }, getBaseAxis: function () {
                var t = this._baseAxisDim;
                return this.ecModel.getComponent(t + "Axis", this.get(t + "AxisIndex")).axis
            }
        }, h = {
            init: function () {
                var t = this._whiskerBoxDraw = new r(this.getStyleUpdater());
                this.group.add(t.group)
            }, render: function (t, e, i) {
                this._whiskerBoxDraw.updateData(t.getData())
            }, remove: function (t) {
                this._whiskerBoxDraw.remove()
            }
        };
        t.exports = {seriesModelMixin: l, viewMixin: h}
    }, function (t, e, i) {
        var n = i(1), o = {
            retrieveTargetInfo: function (t, e) {
                if (t && ("treemapZoomToNode" === t.type || "treemapRootToNode" === t.type)) {
                    var i = e.getData().tree.root, n = t.targetNode;
                    if (n && i.contains(n))return {node: n};
                    var o = t.targetNodeId;
                    if (null != o && (n = i.getNodeById(o)))return {node: n}
                }
            }, getPathToRoot: function (t) {
                for (var e = []; t;)t = t.parentNode, t && e.push(t);
                return e.reverse()
            }, aboveViewRoot: function (t, e) {
                var i = o.getPathToRoot(t);
                return n.indexOf(i, e) >= 0
            }
        };
        t.exports = o
    }, function (t, e, i) {
        function n(t, e, i) {
            v.call(this), this.type = t, this.zr = e, this.opt = y.clone(i), this.group = new x.Group, this._containerRect = null, this._track = [], this._dragging, this._cover, this._disabled = !0, this._handlers = {
                mousedown: _(s, this),
                mousemove: _(l, this),
                mouseup: _(h, this)
            }, b(T, function (t) {
                this.zr.on(t, this._handlers[t])
            }, this)
        }

        function o(t) {
            t.traverse(function (t) {
                t.z = A
            })
        }

        function a(t, e) {
            var i = this.group.transformCoordToLocal(t, e);
            return !this._containerRect || this._containerRect.contain(i[0], i[1])
        }

        function r(t) {
            var e = t.event;
            e.preventDefault && e.preventDefault()
        }

        function s(t) {
            if (!(this._disabled || t.target && t.target.draggable)) {
                r(t);
                var e = t.offsetX, i = t.offsetY;
                a.call(this, e, i) && (this._dragging = !0, this._track = [[e, i]])
            }
        }

        function l(t) {
            this._dragging && !this._disabled && (r(t), u.call(this, t))
        }

        function h(t) {
            this._dragging && !this._disabled && (r(t), u.call(this, t, !0), this._dragging = !1, this._track = [])
        }

        function u(t, e) {
            var i = t.offsetX, n = t.offsetY;
            if (a.call(this, i, n)) {
                this._track.push([i, n]);
                var o = c.call(this) ? L[this.type].getRanges.call(this) : [];
                d.call(this, o), this.trigger("selected", y.clone(o)), e && this.trigger("selectEnd", y.clone(o))
            }
        }

        function c() {
            var t = this._track;
            if (!t.length)return !1;
            var e = t[t.length - 1], i = t[0], n = e[0] - i[0], o = e[1] - i[1], a = M(n * n + o * o, .5);
            return a > I
        }

        function d(t) {
            var e = L[this.type];
            t && t.length ? (this._cover || (this._cover = e.create.call(this), this.group.add(this._cover)), e.update.call(this, t)) : (this.group.remove(this._cover), this._cover = null), o(this.group)
        }

        function f() {
            var t = this.group, e = t.parent;
            e && e.remove(t)
        }

        function p() {
            var t = this.opt;
            return new x.Rect({style: {stroke: t.stroke, fill: t.fill, lineWidth: t.lineWidth, opacity: t.opacity}})
        }

        function g() {
            return y.map(this._track, function (t) {
                return this.group.transformCoordToLocal(t[0], t[1])
            }, this)
        }

        function m() {
            var t = g.call(this), e = t.length - 1;
            return 0 > e && (e = 0), [t[0], t[e]]
        }

        var v = i(21), y = i(1), x = i(3), _ = y.bind, b = y.each, w = Math.min, S = Math.max, M = Math.pow, A = 1e4, I = 2, T = ["mousedown", "mousemove", "mouseup"];
        n.prototype = {
            constructor: n, enable: function (t, e) {
                this._disabled = !1, f.call(this), this._containerRect = e !== !1 ? e || t.getBoundingRect() : null, t.add(this.group)
            }, update: function (t) {
                d.call(this, t && y.clone(t))
            }, disable: function () {
                this._disabled = !0, f.call(this)
            }, dispose: function () {
                this.disable(), b(T, function (t) {
                    this.zr.off(t, this._handlers[t])
                }, this)
            }
        }, y.mixin(n, v);
        var L = {
            line: {
                create: p, getRanges: function () {
                    var t = m.call(this), e = w(t[0][0], t[1][0]), i = S(t[0][0], t[1][0]);
                    return [[e, i]]
                }, update: function (t) {
                    var e = t[0], i = this.opt.width;
                    this._cover.setShape({x: e[0], y: -i / 2, width: e[1] - e[0], height: i})
                }
            }, rect: {
                create: p, getRanges: function () {
                    var t = m.call(this), e = [w(t[1][0], t[0][0]), w(t[1][1], t[0][1])], i = [S(t[1][0], t[0][0]), S(t[1][1], t[0][1])];
                    return [[[e[0], i[0]], [e[1], i[1]]]]
                }, update: function (t) {
                    var e = t[0];
                    this._cover.setShape({x: e[0][0], y: e[1][0], width: e[0][1] - e[0][0], height: e[1][1] - e[1][0]})
                }
            }
        };
        t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = this.getBoundingRect(), n = t.getBoxLayoutParams();
            n.aspect = i.width / i.height * .75;
            var o = s.getLayoutRect(n, {width: e.getWidth(), height: e.getHeight()});
            this.setViewRect(o.x, o.y, o.width, o.height), this.setCenter(t.get("center")), this.setZoom(t.get("zoom"))
        }

        function o(t, e) {
            l.each(e.get("geoCoord"), function (e, i) {
                t.addGeoCoord(i, e)
            })
        }

        function a(t) {
            console.error("Map " + t + " not exists")
        }

        var r = i(328), s = i(11), l = i(1), h = {}, u = {
            dimensions: r.prototype.dimensions, create: function (t, e) {
                var i = [];
                t.eachComponent("geo", function (t, s) {
                    var l = t.get("map"), u = h[l];
                    u || a(l);
                    var c = new r(l + s, l, u && u.geoJson, u && u.specialAreas, t.get("nameMap"));
                    c.zoomLimit = t.get("scaleLimit"), i.push(c), o(c, t), t.coordinateSystem = c, c.model = t, c.resize = n, c.resize(t, e)
                }), t.eachSeries(function (t) {
                    var e = t.get("coordinateSystem");
                    if ("geo" === e) {
                        var n = t.get("geoIndex") || 0;
                        t.coordinateSystem = i[n]
                    }
                });
                var s = {};
                return t.eachSeriesByType("map", function (t) {
                    var e = t.get("map");
                    s[e] = s[e] || [], s[e].push(t)
                }), l.each(s, function (t, s) {
                    var u = h[s];
                    u || a(name);
                    var c = l.map(t, function (t) {
                        return t.get("nameMap")
                    }), d = new r(s, s, u && u.geoJson, u && u.specialAreas, l.mergeAll(c));
                    d.zoomLimit = l.retrieve.apply(null, l.map(t, function (t) {
                        return t.get("scaleLimit")
                    })), i.push(d), d.resize = n, d.resize(t[0], e), l.each(t, function (t) {
                        t.coordinateSystem = d, o(d, t)
                    })
                }), i
            }, registerMap: function (t, e, i) {
                e.geoJson && !e.features && (i = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), h[t] = {
                    geoJson: e,
                    specialAreas: i
                }
            }, getMap: function (t) {
                return h[t]
            }, getFilledRegions: function (t, e) {
                for (var i = (t || []).slice(), n = u.getMap(e), o = n && n.geoJson, a = {}, r = o.features, s = 0; s < i.length; s++)a[i[s].name] = i[s];
                for (var s = 0; s < r.length; s++) {
                    var l = r[s].properties.name;
                    a[l] || i.push({name: l})
                }
                return i
            }
        }, c = i(2);
        c.registerMap = u.registerMap, c.getMap = u.getMap, c.loadMap = function () {
        }, c.registerCoordinateSystem("geo", u), t.exports = u
    }, function (t, e, i) {
        function n() {
            this.group = new o.Group, this._symbolEl = new s({silent: !0})
        }

        var o = i(3), a = i(25), r = i(1), s = o.extendShape({
            shape: {points: null, sizes: null},
            symbolProxy: null,
            buildPath: function (t, e) {
                for (var i = e.points, n = e.sizes, o = this.symbolProxy, a = o.shape, r = 0; r < i.length; r++) {
                    var s = i[r], l = n[r];
                    l[0] < 4 ? t.rect(s[0] - l[0] / 2, s[1] - l[1] / 2, l[0], l[1]) : (a.x = s[0] - l[0] / 2, a.y = s[1] - l[1] / 2, a.width = l[0], a.height = l[1], o.buildPath(t, a))
                }
            }
        }), l = n.prototype;
        l.updateData = function (t) {
            this.group.removeAll();
            var e = this._symbolEl, i = t.hostModel;
            e.setShape({
                points: t.mapArray(t.getItemLayout), sizes: t.mapArray(function (e) {
                    var i = t.getItemVisual(e, "symbolSize");
                    return r.isArray(i) || (i = [i, i]), i
                })
            }), e.symbolProxy = a.createSymbol(t.getVisual("symbol"), 0, 0, 0, 0), e.setColor = e.symbolProxy.setColor, e.useStyle(i.getModel("itemStyle.normal").getItemStyle(["color"]));
            var n = t.getVisual("color");
            n && e.setColor(n), this.group.add(this._symbolEl)
        }, l.updateLayout = function (t) {
            var e = t.getData();
            this._symbolEl.setShape({points: e.mapArray(e.getItemLayout)})
        }, l.remove = function () {
            this.group.removeAll()
        }, t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return null == t.cpx1 || null == t.cpy1
        }

        var o = i(3), a = i(5), r = o.Line.prototype, s = o.BezierCurve.prototype;
        t.exports = o.extendShape({
            type: "ec-line",
            style: {stroke: "#000", fill: null},
            shape: {x1: 0, y1: 0, x2: 0, y2: 0, percent: 1, cpx1: null, cpy1: null},
            buildPath: function (t, e) {
                (n(e) ? r : s).buildPath(t, e)
            },
            pointAt: function (t) {
                return n(this.shape) ? r.pointAt.call(this, t) : s.pointAt.call(this, t)
            },
            tangentAt: function (t) {
                var e = this.shape, i = n(e) ? [e.x2 - e.x1, e.y2 - e.y1] : s.tangentAt.call(this, t);
                return a.normalize(i, i)
            }
        })
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(166), i(167), o.registerVisualCoding("chart", n.curry(i(44), "scatter", "circle", null)), o.registerLayout(n.curry(i(53), "scatter")), i(36)
    }, function (t, e, i) {
        "use strict";
        var n = i(35), o = i(13);
        t.exports = o.extend({
            type: "series.scatter",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                var i = n(t.data, this, e);
                return i
            },
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                geoIndex: 0,
                symbolSize: 10,
                large: !1,
                largeThreshold: 2e3,
                itemStyle: {normal: {opacity: .8}}
            }
        })
    }, function (t, e, i) {
        var n = i(39), o = i(163);
        i(2).extendChartView({
            type: "scatter", init: function () {
                this._normalSymbolDraw = new n, this._largeSymbolDraw = new o
            }, render: function (t, e, i) {
                var n = t.getData(), o = this._largeSymbolDraw, a = this._normalSymbolDraw, r = this.group, s = t.get("large") && n.count() > t.get("largeThreshold") ? o : a;
                this._symbolDraw = s, s.updateData(n), r.add(s.group), r.remove(s === o ? a.group : o.group)
            }, updateLayout: function (t) {
                this._symbolDraw.updateLayout(t)
            }, remove: function (t, e) {
                this._symbolDraw && this._symbolDraw.remove(e, !0)
            }
        })
    }, function (t, e, i) {
        i(100), i(40), i(41), i(174), i(175), i(170), i(171), i(98), i(97)
    }, function (t, e, i) {
        function n(t, e) {
            var i = [1 / 0, -(1 / 0)];
            return h(e, function (e) {
                var n = e.getData();
                n && h(e.coordDimToDataDim(t), function (t) {
                    var e = n.getDataExtent(t);
                    e[0] < i[0] && (i[0] = e[0]), e[1] > i[1] && (i[1] = e[1])
                })
            }, this), i
        }

        function o(t, e, i) {
            var n = i.getAxisModel(), o = n.axis.scale, r = [0, 100], s = [t.start, t.end], c = [];
            return e = e.slice(), a(e, n, o), h(["startValue", "endValue"], function (e) {
                c.push(null != t[e] ? o.parse(t[e]) : null)
            }), h([0, 1], function (t) {
                var i = c[t], n = s[t];
                null != n || null == i ? (null == n && (n = r[t]), i = o.parse(l.linearMap(n, r, e, !0))) : n = l.linearMap(i, e, r, !0), c[t] = i, s[t] = n
            }), {valueWindow: u(c), percentWindow: u(s)}
        }

        function a(t, e, i) {
            return h(["min", "max"], function (n, o) {
                var a = e.get(n, !0);
                null != a && (a + "").toLowerCase() !== "data" + n && (t[o] = i.parse(a))
            }), e.get("scale", !0) || (t[0] > 0 && (t[0] = 0), t[1] < 0 && (t[1] = 0)), t
        }

        function r(t, e) {
            var i = t.getAxisModel(), n = t._percentWindow, o = t._valueWindow;
            if (n) {
                var a = e || 0 === n[0] && 100 === n[1], r = !e && l.getPixelPrecision(o, [0, 500]), s = !(e || 20 > r && r >= 0), h = e || a || s;
                i.setRange && i.setRange(h ? null : +o[0].toFixed(r), h ? null : +o[1].toFixed(r))
            }
        }

        var s = i(1), l = i(4), h = s.each, u = l.asc, c = function (t, e, i, n) {
            this._dimName = t, this._axisIndex = e, this._valueWindow, this._percentWindow, this._dataExtent, this.ecModel = n, this._dataZoomModel = i
        };
        c.prototype = {
            constructor: c, hostedBy: function (t) {
                return this._dataZoomModel === t
            }, getDataExtent: function () {
                return this._dataExtent.slice()
            }, getDataValueWindow: function () {
                return this._valueWindow.slice()
            }, getDataPercentWindow: function () {
                return this._percentWindow.slice()
            }, getTargetSeriesModels: function () {
                var t = [];
                return this.ecModel.eachSeries(function (e) {
                    this._axisIndex === e.get(this._dimName + "AxisIndex") && t.push(e)
                }, this), t
            }, getAxisModel: function () {
                return this.ecModel.getComponent(this._dimName + "Axis", this._axisIndex)
            }, getOtherAxisModel: function () {
                var t, e, i = this._dimName, n = this.ecModel, o = this.getAxisModel(), a = "x" === i || "y" === i;
                a ? (e = "gridIndex", t = "x" === i ? "y" : "x") : (e = "polarIndex", t = "angle" === i ? "radius" : "angle");
                var r;
                return n.eachComponent(t + "Axis", function (t) {
                    (t.get(e) || 0) === (o.get(e) || 0) && (r = t)
                }), r
            }, reset: function (t) {
                if (t === this._dataZoomModel) {
                    var e = this._dataExtent = n(this._dimName, this.getTargetSeriesModels()), i = o(t.option, e, this);
                    this._valueWindow = i.valueWindow, this._percentWindow = i.percentWindow, r(this)
                }
            }, restore: function (t) {
                t === this._dataZoomModel && (this._valueWindow = this._percentWindow = null, r(this, !0))
            }, filterData: function (t) {
                function e(t) {
                    return t >= a[0] && t <= a[1]
                }

                if (t === this._dataZoomModel) {
                    var i = this._dimName, n = this.getTargetSeriesModels(), o = t.get("filterMode"), a = this._valueWindow, r = this.getOtherAxisModel();
                    t.get("$fromToolbox") && r && "category" === r.get("type") && (o = "empty"), h(n, function (t) {
                        var n = t.getData();
                        n && h(t.coordDimToDataDim(i), function (i) {
                            "empty" === o ? t.setData(n.map(i, function (t) {
                                return e(t) ? t : NaN
                            })) : n.filterSelf(i, e)
                        })
                    })
                }
            }
        }, t.exports = c
    }, function (t, e, i) {
        t.exports = i(40).extend({type: "dataZoom.inside", defaultOption: {zoomLock: !1}})
    }, function (t, e, i) {
        function n(t, e, i, n) {
            e = e.slice();
            var o = n.axisModels[0];
            if (o) {
                var r = a(t, o, i), s = r.signal * (e[1] - e[0]) * r.pixel / r.pixelLength;
                return h(s, e, [0, 100], "rigid"), e
            }
        }

        function o(t, e, i, n, o, s) {
            i = i.slice();
            var l = o.axisModels[0];
            if (l) {
                var h = a(e, l, n), u = h.pixel - h.pixelStart, c = u / h.pixelLength * (i[1] - i[0]) + i[0];
                return t = Math.max(t, 0), i[0] = (i[0] - c) * t + c, i[1] = (i[1] - c) * t + c, r(i)
            }
        }

        function a(t, e, i) {
            var n = e.axis, o = i.rectProvider(), a = {};
            return "x" === n.dim ? (a.pixel = t[0], a.pixelLength = o.width, a.pixelStart = o.x, a.signal = n.inverse ? 1 : -1) : (a.pixel = t[1], a.pixelLength = o.height, a.pixelStart = o.y, a.signal = n.inverse ? -1 : 1), a
        }

        function r(t) {
            var e = [0, 100];
            return !(t[0] <= e[1]) && (t[0] = e[1]), !(t[1] <= e[1]) && (t[1] = e[1]), !(t[0] >= e[0]) && (t[0] = e[0]), !(t[1] >= e[0]) && (t[1] = e[0]), t
        }

        var s = i(41), l = i(1), h = i(71), u = i(176), c = l.bind, d = s.extend({
            type: "dataZoom.inside",
            init: function (t, e) {
                this._range
            },
            render: function (t, e, i, n) {
                d.superApply(this, "render", arguments), u.shouldRecordRange(n, t.id) && (this._range = t.getPercentRange());
                var o = this.getTargetInfo().cartesians, a = l.map(o, function (t) {
                    return u.generateCoordId(t.model)
                });
                l.each(o, function (e) {
                    var n = e.model;
                    u.register(i, {
                        coordId: u.generateCoordId(n),
                        allCoordIds: a,
                        coordinateSystem: n.coordinateSystem,
                        dataZoomId: t.id,
                        throttleRage: t.get("throttle", !0),
                        panGetRange: c(this._onPan, this, e),
                        zoomGetRange: c(this._onZoom, this, e)
                    })
                }, this)
            },
            remove: function () {
                u.unregister(this.api, this.dataZoomModel.id), d.superApply(this, "remove", arguments), this._range = null
            },
            dispose: function () {
                u.unregister(this.api, this.dataZoomModel.id), d.superApply(this, "dispose", arguments), this._range = null
            },
            _onPan: function (t, e, i, o) {
                return this._range = n([i, o], this._range, e, t)
            },
            _onZoom: function (t, e, i, n, a) {
                var r = this.dataZoomModel;
                return r.option.zoomLock ? this._range : this._range = o(1 / i, [n, a], this._range, e, t, r)
            }
        });
        t.exports = d
    }, function (t, e, i) {
        var n = i(40);
        t.exports = n.extend({type: "dataZoom.select"})
    }, function (t, e, i) {
        t.exports = i(41).extend({type: "dataZoom.select"})
    }, function (t, e, i) {
        var n = i(40), o = n.extend({
            type: "dataZoom.slider",
            layoutMode: "box",
            defaultOption: {
                show: !0,
                right: "ph",
                top: "ph",
                width: "ph",
                height: "ph",
                left: null,
                bottom: null,
                backgroundColor: "rgba(47,69,84,0)",
                dataBackgroundColor: "#ddd",
                fillerColor: "rgba(47,69,84,0.15)",
                handleColor: "rgba(148,164,165,0.95)",
                handleSize: 10,
                labelPrecision: null,
                labelFormatter: null,
                showDetail: !0,
                showDataShadow: "auto",
                realtime: !0,
                zoomLock: !1,
                textStyle: {color: "#333"}
            },
            mergeOption: function (t) {
                o.superApply(this, "mergeOption", arguments)
            }
        });
        t.exports = o
    }, function (t, e, i) {
        function n(t) {
            return "x" === t ? "y" : "x"
        }

        var o = i(1), a = i(3), r = i(125), s = i(41), l = a.Rect, h = i(4), u = h.linearMap, c = i(11), d = i(71), f = h.asc, p = o.bind, g = Math.round, m = Math.max, v = o.each, y = 7, x = 1, _ = 30, b = "horizontal", w = "vertical", S = 5, M = ["line", "bar", "candlestick", "scatter"], A = s.extend({
            type: "dataZoom.slider", init: function (t, e) {
                this._displayables = {}, this._orient, this._range, this._handleEnds, this._size, this._halfHandleSize, this._location, this._dragging, this._dataShadowInfo, this.api = e
            }, render: function (t, e, i, n) {
                return A.superApply(this, "render", arguments), r.createOrUpdate(this, "_dispatchZoomAction", this.dataZoomModel.get("throttle"), "fixRate"), this._orient = t.get("orient"), this._halfHandleSize = g(t.get("handleSize") / 2), this.dataZoomModel.get("show") === !1 ? void this.group.removeAll() : (n && "dataZoom" === n.type && n.from === this.uid || this._buildView(), void this._updateView())
            }, remove: function () {
                A.superApply(this, "remove", arguments), r.clear(this, "_dispatchZoomAction")
            }, dispose: function () {
                A.superApply(this, "dispose", arguments), r.clear(this, "_dispatchZoomAction")
            }, _buildView: function () {
                var t = this.group;
                t.removeAll(), this._resetLocation(), this._resetInterval();
                var e = this._displayables.barGroup = new a.Group;
                this._renderBackground(), this._renderDataShadow(), this._renderHandle(), t.add(e), this._positionGroup()
            }, _resetLocation: function () {
                var t = this.dataZoomModel, e = this.api, i = this._findCoordRect(), n = {
                    width: e.getWidth(),
                    height: e.getHeight()
                }, a = this._orient === b ? {
                    right: n.width - i.x - i.width,
                    top: n.height - _ - y,
                    width: i.width,
                    height: _
                } : {right: y, top: i.y, width: _, height: i.height}, r = c.getLayoutParams(t.option);
                o.each(["right", "top", "width", "height"], function (t) {
                    "ph" === r[t] && (r[t] = a[t])
                });
                var s = c.getLayoutRect(r, n, t.padding);
                this._location = {
                    x: s.x,
                    y: s.y
                }, this._size = [s.width, s.height], this._orient === w && this._size.reverse()
            }, _positionGroup: function () {
                var t = this.group, e = this._location, i = this._orient, n = this.dataZoomModel.getFirstTargetAxisModel(), o = n && n.get("inverse"), a = this._displayables.barGroup, r = (this._dataShadowInfo || {}).otherAxisInverse;
                a.attr(i !== b || o ? i === b && o ? {scale: r ? [-1, 1] : [-1, -1]} : i !== w || o ? {
                    scale: r ? [-1, -1] : [-1, 1],
                    rotation: Math.PI / 2
                } : {scale: r ? [1, -1] : [1, 1], rotation: Math.PI / 2} : {scale: r ? [1, 1] : [1, -1]});
                var s = t.getBoundingRect([a]);
                t.position[0] = e.x - s.x, t.position[1] = e.y - s.y
            }, _getViewExtent: function () {
                var t = this._halfHandleSize, e = m(this._size[0], 4 * t), i = [t, e - t];
                return i
            }, _renderBackground: function () {
                var t = this.dataZoomModel, e = this._size;
                this._displayables.barGroup.add(new l({
                    silent: !0,
                    shape: {x: 0, y: 0, width: e[0], height: e[1]},
                    style: {fill: t.get("backgroundColor")}
                }))
            }, _renderDataShadow: function () {
                var t = this._dataShadowInfo = this._prepareDataShadowInfo();
                if (t) {
                    var e = this._size, i = t.series, n = i.getRawData(), o = i.getShadowDim ? i.getShadowDim() : t.otherDim, r = n.getDataExtent(o), s = .3 * (r[1] - r[0]);
                    r = [r[0] - s, r[1] + s];
                    var l = [0, e[1]], h = [0, e[0]], c = [[e[0], 0], [0, 0]], d = h[1] / (n.count() - 1), f = 0, p = Math.round(n.count() / e[0]);
                    n.each([o], function (t, e) {
                        if (p > 0 && e % p)return void(f += d);
                        var i = null == t || isNaN(t) || "" === t ? null : u(t, r, l, !0);
                        null != i && c.push([f, i]), f += d
                    }), this._displayables.barGroup.add(new a.Polyline({
                        shape: {points: c},
                        style: {fill: this.dataZoomModel.get("dataBackgroundColor"), lineWidth: 0},
                        silent: !0,
                        z2: -20
                    }))
                }
            }, _prepareDataShadowInfo: function () {
                var t = this.dataZoomModel, e = t.get("showDataShadow");
                if (e !== !1) {
                    var i, a = this.ecModel;
                    return t.eachTargetAxis(function (r, s) {
                        var l = t.getAxisProxy(r.name, s).getTargetSeriesModels();
                        o.each(l, function (t) {
                            if (!(i || e !== !0 && o.indexOf(M, t.get("type")) < 0)) {
                                var l = n(r.name), h = a.getComponent(r.axis, s).axis;
                                i = {
                                    thisAxis: h,
                                    series: t,
                                    thisDim: r.name,
                                    otherDim: l,
                                    otherAxisInverse: t.coordinateSystem.getOtherAxis(h).inverse
                                }
                            }
                        }, this)
                    }, this), i
                }
            }, _renderHandle: function () {
                var t = this._displayables, e = t.handles = [], i = t.handleLabels = [], n = this._displayables.barGroup, o = this._size;
                n.add(t.filler = new l({
                    draggable: !0,
                    cursor: "move",
                    drift: p(this._onDragMove, this, "all"),
                    ondragend: p(this._onDragEnd, this),
                    onmouseover: p(this._showDataInfo, this, !0),
                    onmouseout: p(this._showDataInfo, this, !1),
                    style: {fill: this.dataZoomModel.get("fillerColor"), textPosition: "inside"}
                })), n.add(new l(a.subPixelOptimizeRect({
                    silent: !0,
                    shape: {x: 0, y: 0, width: o[0], height: o[1]},
                    style: {stroke: this.dataZoomModel.get("dataBackgroundColor"), lineWidth: x, fill: "rgba(0,0,0,0)"}
                }))), v([0, 1], function (t) {
                    n.add(e[t] = new l({
                        style: {fill: this.dataZoomModel.get("handleColor")},
                        cursor: "move",
                        draggable: !0,
                        drift: p(this._onDragMove, this, t),
                        ondragend: p(this._onDragEnd, this),
                        onmouseover: p(this._showDataInfo, this, !0),
                        onmouseout: p(this._showDataInfo, this, !1)
                    }));
                    var o = this.dataZoomModel.textStyleModel;
                    this.group.add(i[t] = new a.Text({
                        silent: !0,
                        invisible: !0,
                        style: {
                            x: 0,
                            y: 0,
                            text: "",
                            textVerticalAlign: "middle",
                            textAlign: "center",
                            fill: o.getTextColor(),
                            textFont: o.getFont()
                        }
                    }))
                }, this)
            }, _resetInterval: function () {
                var t = this._range = this.dataZoomModel.getPercentRange(), e = this._getViewExtent();
                this._handleEnds = [u(t[0], [0, 100], e, !0), u(t[1], [0, 100], e, !0)]
            }, _updateInterval: function (t, e) {
                var i = this._handleEnds, n = this._getViewExtent();
                d(e, i, n, "all" === t || this.dataZoomModel.get("zoomLock") ? "rigid" : "cross", t), this._range = f([u(i[0], n, [0, 100], !0), u(i[1], n, [0, 100], !0)])
            }, _updateView: function () {
                var t = this._displayables, e = this._handleEnds, i = f(e.slice()), n = this._size, o = this._halfHandleSize;
                v([0, 1], function (i) {
                    var a = t.handles[i];
                    a.setShape({x: e[i] - o, y: -1, width: 2 * o, height: n[1] + 2, r: 1})
                }, this), t.filler.setShape({
                    x: i[0],
                    y: 0, width: i[1] - i[0], height: this._size[1]
                }), this._updateDataInfo()
            }, _updateDataInfo: function () {
                function t(t) {
                    var e = a.getTransform(i.handles[t], this.group), s = a.transformDirection(0 === t ? "right" : "left", e), l = this._halfHandleSize + S, u = a.applyTransform([h[t] + (0 === t ? -l : l), this._size[1] / 2], e);
                    n[t].setStyle({
                        x: u[0],
                        y: u[1],
                        textVerticalAlign: o === b ? "middle" : s,
                        textAlign: o === b ? s : "center",
                        text: r[t]
                    })
                }

                var e = this.dataZoomModel, i = this._displayables, n = i.handleLabels, o = this._orient, r = ["", ""];
                if (e.get("showDetail")) {
                    var s, l;
                    e.eachTargetAxis(function (t, i) {
                        s || (s = e.getAxisProxy(t.name, i).getDataValueWindow(), l = this.ecModel.getComponent(t.axis, i).axis)
                    }, this), s && (r = [this._formatLabel(s[0], l), this._formatLabel(s[1], l)])
                }
                var h = f(this._handleEnds.slice());
                t.call(this, 0), t.call(this, 1)
            }, _formatLabel: function (t, e) {
                var i = this.dataZoomModel, n = i.get("labelFormatter");
                if (o.isFunction(n))return n(t);
                var a = i.get("labelPrecision");
                return null != a && "auto" !== a || (a = e.getPixelPrecision()), t = null == t && isNaN(t) ? "" : "category" === e.type || "time" === e.type ? e.scale.getLabel(Math.round(t)) : t.toFixed(Math.min(a, 20)), o.isString(n) && (t = n.replace("{value}", t)), t
            }, _showDataInfo: function (t) {
                t = this._dragging || t;
                var e = this._displayables.handleLabels;
                e[0].attr("invisible", !t), e[1].attr("invisible", !t)
            }, _onDragMove: function (t, e, i) {
                this._dragging = !0;
                var n = this._applyBarTransform([e, i], !0);
                this._updateInterval(t, n[0]), this._updateView(), this.dataZoomModel.get("realtime") && this._dispatchZoomAction()
            }, _onDragEnd: function () {
                this._dragging = !1, this._showDataInfo(!1), this._dispatchZoomAction()
            }, _dispatchZoomAction: function () {
                var t = this._range;
                this.api.dispatchAction({
                    type: "dataZoom",
                    from: this.uid,
                    dataZoomId: this.dataZoomModel.id,
                    start: t[0],
                    end: t[1]
                })
            }, _applyBarTransform: function (t, e) {
                var i = this._displayables.barGroup.getLocalTransform();
                return a.applyTransform(t, i, e)
            }, _findCoordRect: function () {
                var t, e = this.getTargetInfo();
                if (e.cartesians.length)t = e.cartesians[0].model.coordinateSystem.getRect(); else {
                    var i = this.api.getWidth(), n = this.api.getHeight();
                    t = {x: .2 * i, y: .2 * n, width: .6 * i, height: .6 * n}
                }
                return t
            }
        });
        t.exports = A
    }, function (t, e, i) {
        function n(t) {
            var e = t.getZr();
            return e[p] || (e[p] = {})
        }

        function o(t, e, i) {
            var n = new c(t.getZr());
            return n.enable(), n.on("pan", f(r, i)), n.on("zoom", f(s, i)), n
        }

        function a(t) {
            u.each(t, function (e, i) {
                e.count || (e.controller.off("pan").off("zoom"), delete t[i])
            })
        }

        function r(t, e, i) {
            l(t, function (n) {
                return n.panGetRange(t.controller, e, i)
            })
        }

        function s(t, e, i, n) {
            l(t, function (o) {
                return o.zoomGetRange(t.controller, e, i, n)
            })
        }

        function l(t, e) {
            var i = [];
            u.each(t.dataZoomInfos, function (t) {
                var n = e(t);
                n && i.push({dataZoomId: t.dataZoomId, start: n[0], end: n[1]})
            }), t.dispatchAction(i)
        }

        function h(t, e) {
            t.dispatchAction({type: "dataZoom", batch: e})
        }

        var u = i(1), c = i(70), d = i(125), f = u.curry, p = "\x00_ec_dataZoom_roams", g = {
            register: function (t, e) {
                var i = n(t), r = e.dataZoomId, s = e.coordId;
                u.each(i, function (t, i) {
                    var n = t.dataZoomInfos;
                    n[r] && u.indexOf(e.allCoordIds, s) < 0 && (delete n[r], t.count--)
                }), a(i);
                var l = i[s];
                l || (l = i[s] = {
                    coordId: s,
                    dataZoomInfos: {},
                    count: 0
                }, l.controller = o(t, e, l), l.dispatchAction = u.curry(h, t));
                var c = e.coordinateSystem.getRect().clone();
                l.controller.rectProvider = function () {
                    return c
                }, d.createOrUpdate(l, "dispatchAction", e.throttleRate, "fixRate"), !l.dataZoomInfos[r] && l.count++, l.dataZoomInfos[r] = e
            }, unregister: function (t, e) {
                var i = n(t);
                u.each(i, function (t) {
                    var i = t.dataZoomInfos;
                    i[e] && (delete i[e], t.count--)
                }), a(i)
            }, shouldRecordRange: function (t, e) {
                if (t && "dataZoom" === t.type && t.batch)for (var i = 0, n = t.batch.length; n > i; i++)if (t.batch[i].dataZoomId === e)return !1;
                return !0
            }, generateCoordId: function (t) {
                return t.type + "\x00_" + t.id
            }
        };
        t.exports = g
    }, function (t, e, i) {
        i(100), i(40), i(41), i(172), i(173), i(98), i(97)
    }, function (t, e, i) {
        i(179), i(181), i(180);
        var n = i(2);
        n.registerProcessor("filter", i(182))
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(12), a = i(2).extendComponentModel({
            type: "legend",
            dependencies: ["series"],
            layoutMode: {type: "box", ignoreSize: !0},
            init: function (t, e, i) {
                this.mergeDefaultAndTheme(t, i), t.selected = t.selected || {}, this._updateData(i);
                var n = this._data, o = this.option.selected;
                if (n[0] && "single" === this.get("selectedMode")) {
                    var a = !1;
                    for (var r in o)o[r] && (this.select(r), a = !0);
                    !a && this.select(n[0].get("name"))
                }
            },
            mergeOption: function (t) {
                a.superCall(this, "mergeOption", t), this._updateData(this.ecModel)
            },
            _updateData: function (t) {
                var e = n.map(this.get("data") || [], function (t) {
                    return "string" == typeof t && (t = {name: t}), new o(t, this, this.ecModel)
                }, this);
                this._data = e;
                var i = n.map(t.getSeries(), function (t) {
                    return t.name
                });
                t.eachSeries(function (t) {
                    if (t.legendDataProvider) {
                        var e = t.legendDataProvider();
                        i = i.concat(e.mapArray(e.getName))
                    }
                }), this._availableNames = i
            },
            getData: function () {
                return this._data
            },
            select: function (t) {
                var e = this.option.selected, i = this.get("selectedMode");
                if ("single" === i) {
                    var o = this._data;
                    n.each(o, function (t) {
                        e[t.get("name")] = !1
                    })
                }
                e[t] = !0
            },
            unSelect: function (t) {
                "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
            },
            toggleSelected: function (t) {
                var e = this.option.selected;
                t in e || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
            },
            isSelected: function (t) {
                var e = this.option.selected;
                return !(t in e && !e[t]) && n.indexOf(this._availableNames, t) >= 0
            },
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                orient: "horizontal",
                left: "center",
                top: "top",
                align: "auto",
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                itemWidth: 25,
                itemHeight: 14,
                textStyle: {color: "#333"},
                selectedMode: !0
            }
        });
        t.exports = a
    }, function (t, e, i) {
        function n(t, e) {
            e.dispatchAction({type: "legendToggleSelect", name: t})
        }

        function o(t, e, i) {
            t.get("legendHoverLink") && i.dispatchAction({type: "highlight", seriesName: t.name, name: e})
        }

        function a(t, e, i) {
            t.get("legendHoverLink") && i.dispatchAction({type: "downplay", seriesName: t.name, name: e})
        }

        var r = i(1), s = i(25), l = i(3), h = i(102), u = r.curry, c = "#ccc";
        t.exports = i(2).extendComponentView({
            type: "legend", init: function () {
                this._symbolTypeStore = {}
            }, render: function (t, e, i) {
                var s = this.group;
                if (s.removeAll(), t.get("show")) {
                    var c = t.get("selectedMode"), d = t.get("align");
                    "auto" === d && (d = "right" === t.get("left") && "vertical" === t.get("orient") ? "right" : "left");
                    var f = {};
                    r.each(t.getData(), function (r) {
                        var h = r.get("name");
                        if ("" === h || "\n" === h)return void s.add(new l.Group({newline: !0}));
                        var p = e.getSeriesByName(h)[0];
                        if (!f[h])if (p) {
                            var g = p.getData(), m = g.getVisual("color");
                            "function" == typeof m && (m = m(p.getDataParams(0)));
                            var v = g.getVisual("legendSymbol") || "roundRect", y = g.getVisual("symbol"), x = this._createItem(h, r, t, v, y, d, m, c);
                            x.on("click", u(n, h, i)).on("mouseover", u(o, p, "", i)).on("mouseout", u(a, p, "", i)), f[h] = !0
                        } else e.eachRawSeries(function (e) {
                            if (!f[h] && e.legendDataProvider) {
                                var s = e.legendDataProvider(), l = s.indexOfName(h);
                                if (0 > l)return;
                                var p = s.getItemVisual(l, "color"), g = "roundRect", m = this._createItem(h, r, t, g, null, d, p, c);
                                m.on("click", u(n, h, i)).on("mouseover", u(o, e, h, i)).on("mouseout", u(a, e, h, i)), f[h] = !0
                            }
                        }, this)
                    }, this), h.layout(s, t, i), h.addBackground(s, t)
                }
            }, _createItem: function (t, e, i, n, o, a, r, h) {
                var u = i.get("itemWidth"), d = i.get("itemHeight"), f = i.isSelected(t), p = new l.Group, g = e.getModel("textStyle"), m = e.get("icon");
                if (n = m || n, p.add(s.createSymbol(n, 0, 0, u, d, f ? r : c)), !m && o && (o !== n || "none" == o)) {
                    var v = .8 * d;
                    "none" === o && (o = "circle"), p.add(s.createSymbol(o, (u - v) / 2, (d - v) / 2, v, v, f ? r : c))
                }
                var y = "left" === a ? u + 5 : -5, x = a, _ = i.get("formatter");
                "string" == typeof _ && _ ? t = _.replace("{name}", t) : "function" == typeof _ && (t = _(t));
                var b = new l.Text({
                    style: {
                        text: t,
                        x: y,
                        y: d / 2,
                        fill: f ? g.getTextColor() : c,
                        textFont: g.getFont(),
                        textAlign: x,
                        textVerticalAlign: "middle"
                    }
                });
                return p.add(b), p.add(new l.Rect({
                    shape: p.getBoundingRect(),
                    invisible: !0
                })), p.eachChild(function (t) {
                    t.silent = !h
                }), this.group.add(p), l.setHoverStyle(p), p
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n, o = {}, r = "toggleSelected" === t;
            return i.eachComponent("legend", function (i) {
                r && null != n ? i[n ? "select" : "unSelect"](e.name) : (i[t](e.name), n = i.isSelected(e.name));
                var s = i.getData();
                a.each(s, function (t) {
                    var e = t.get("name");
                    if ("\n" !== e && "" !== e) {
                        var n = i.isSelected(e);
                        e in o ? o[e] = o[e] && n : o[e] = n
                    }
                })
            }), {name: e.name, selected: o}
        }

        var o = i(2), a = i(1);
        o.registerAction("legendToggleSelect", "legendselectchanged", a.curry(n, "toggleSelected")), o.registerAction("legendSelect", "legendselected", a.curry(n, "select")), o.registerAction("legendUnSelect", "legendunselected", a.curry(n, "unSelect"))
    }, function (t, e) {
        t.exports = function (t) {
            var e = t.findComponents({mainType: "legend"});
            e && e.length && t.filterSeries(function (t) {
                for (var i = 0; i < e.length; i++)if (!e[i].isSelected(t.name))return !1;
                return !0
            })
        }
    }, function (t, e, i) {
        i(185), i(186), i(2).registerPreprocessor(function (t) {
            t.markLine = t.markLine || {}
        })
    }, function (t, e, i) {
        i(187), i(188), i(2).registerPreprocessor(function (t) {
            t.markPoint = t.markPoint || {}
        })
    }, function (t, e, i) {
        function n(t) {
            o.defaultEmphasis(t.label, o.LABEL_OPTIONS)
        }

        var o = i(7), a = i(1), r = i(2).extendComponentModel({
            type: "markLine",
            dependencies: ["series", "grid", "polar", "geo"],
            init: function (t, e, i, n) {
                this.mergeDefaultAndTheme(t, i), this.mergeOption(t, i, n.createdBySelf, !0)
            },
            mergeOption: function (t, e, i, o) {
                i || e.eachSeries(function (t) {
                    var i = t.get("markLine"), s = t.markLineModel;
                    if (!i || !i.data)return void(t.markLineModel = null);
                    if (s)s.mergeOption(i, e, !0); else {
                        o && n(i), a.each(i.data, function (t) {
                            t instanceof Array ? (n(t[0]), n(t[1])) : n(t)
                        });
                        var l = {mainType: "markLine", seriesIndex: t.seriesIndex, name: t.name, createdBySelf: !0};
                        s = new r(i, this, e, l)
                    }
                    t.markLineModel = s
                }, this)
            },
            defaultOption: {
                zlevel: 0,
                z: 5,
                symbol: ["circle", "arrow"],
                symbolSize: [8, 16],
                precision: 2,
                tooltip: {trigger: "item"},
                label: {normal: {show: !0, position: "end"}, emphasis: {show: !0}},
                lineStyle: {normal: {type: "dashed"}, emphasis: {width: 3}},
                animationEasing: "linear"
            }
        });
        t.exports = r
    }, function (t, e, i) {
        function n(t) {
            return !isNaN(t) && !isFinite(t)
        }

        function o(t, e, i, o) {
            var a = 1 - t, r = o.dimensions[t];
            return n(e[a]) && n(i[a]) && e[t] === i[t] && o.getAxis(r).containData(e[t])
        }

        function a(t, e) {
            if ("cartesian2d" === t.type) {
                var i = e[0].coord, n = e[1].coord;
                if (i && n && (o(1, i, n, t) || o(0, i, n, t)))return !0
            }
            return g.dataFilter(t, e[0]) && g.dataFilter(t, e[1])
        }

        function r(t, e, i, o, a, r, s) {
            var l, h = r.coordinateSystem, u = t.getItemModel(e), c = u.get("x"), f = u.get("y");
            if (null != c && null != f)l = [d.parsePercent(c, s.getWidth()), d.parsePercent(f, s.getHeight())]; else {
                if (r.getMarkerPosition)l = r.getMarkerPosition(t.getValues(t.dimensions, e)); else {
                    var p = h.dimensions, g = t.get(p[0], e), m = t.get(p[1], e);
                    l = h.dataToPoint([g, m])
                }
                if ("cartesian2d" === h.type) {
                    var v = h.getAxis("x"), y = h.getAxis("y"), p = h.dimensions;
                    n(t.get(p[0], e)) ? l[0] = v.toGlobalCoord(v.getExtent()[i ? 0 : 1]) : n(t.get(p[1], e)) && (l[1] = y.toGlobalCoord(y.getExtent()[i ? 0 : 1]))
                }
            }
            t.setItemLayout(e, l)
        }

        function s(t, e, i) {
            var n;
            n = t ? l.map(t && t.dimensions, function (t) {
                var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                return i.name = t, i
            }) : [{name: "value", type: "float"}];
            var o = new h(n, i), r = new h(n, i), s = new h([], i), u = l.map(i.get("data"), l.curry(v, e, t, i));
            t && (u = l.filter(u, l.curry(a, t)));
            var c = t ? g.dimValueGetter : function (t) {
                return t.value
            };
            return o.initData(l.map(u, function (t) {
                return t[0]
            }), null, c), r.initData(l.map(u, function (t) {
                return t[1]
            }), null, c), s.initData(l.map(u, function (t) {
                return t[2]
            })), {from: o, to: r, line: s}
        }

        var l = i(1), h = i(15), u = i(9), c = i(7), d = i(4), f = u.addCommas, p = u.encodeHTML, g = i(103), m = i(84), v = function (t, e, i, n) {
            var o = t.getData(), a = n.type;
            if (!l.isArray(n) && ("min" === a || "max" === a || "average" === a || null != n.xAxis || null != n.yAxis)) {
                var r, s, h;
                if (null != n.yAxis || null != n.xAxis)s = null != n.yAxis ? "y" : "x", r = e.getAxis(s), h = l.retrieve(n.yAxis, n.xAxis); else {
                    var u = g.getAxisInfo(n, o, e, t);
                    s = u.valueDataDim, r = u.valueAxis, h = g.numCalculate(o, s, a)
                }
                var c = "x" === s ? 0 : 1, d = 1 - c, f = l.clone(n), p = {};
                f.type = null, f.coord = [], p.coord = [], f.coord[d] = -(1 / 0), p.coord[d] = 1 / 0;
                var m = i.get("precision");
                m >= 0 && (h = +h.toFixed(m)), f.coord[c] = p.coord[c] = h, n = [f, p, {
                    type: a,
                    valueIndex: n.valueIndex,
                    value: h
                }]
            }
            return n = [g.dataTransform(t, n[0]), g.dataTransform(t, n[1]), l.extend({}, n[2])], n[2].type = n[2].type || "", l.merge(n[2], n[0]), l.merge(n[2], n[1]), n
        }, y = {
            formatTooltip: function (t) {
                var e = this._data, i = this.getRawValue(t), n = l.isArray(i) ? l.map(i, f).join(", ") : f(i), o = e.getName(t);
                return this.name + "<br />" + ((o ? p(o) + " : " : "") + n)
            }, getData: function () {
                return this._data
            }, setData: function (t) {
                this._data = t
            }
        };
        l.defaults(y, c.dataFormatMixin), i(2).extendComponentView({
            type: "markLine", init: function () {
                this._markLineMap = {}
            }, render: function (t, e, i) {
                var n = this._markLineMap;
                for (var o in n)n[o].__keep = !1;
                e.eachSeries(function (t) {
                    var n = t.markLineModel;
                    n && this._renderSeriesML(t, n, e, i)
                }, this);
                for (var o in n)n[o].__keep || this.group.remove(n[o].group)
            }, updateLayout: function (t, e, i) {
                e.eachSeries(function (t) {
                    var e = t.markLineModel;
                    if (e) {
                        var n = e.getData(), o = e.__from, a = e.__to;
                        o.each(function (e) {
                            var s = n.getItemModel(e), l = s.get("type"), h = s.get("valueIndex");
                            r(o, e, !0, l, h, t, i), r(a, e, !1, l, h, t, i)
                        }), n.each(function (t) {
                            n.setItemLayout(t, [o.getItemLayout(t), a.getItemLayout(t)])
                        }), this._markLineMap[t.name].updateLayout()
                    }
                }, this)
            }, _renderSeriesML: function (t, e, i, n) {
                function o(e, i, o, a, s) {
                    var l = e.getItemModel(i);
                    r(e, i, o, a, s, t, n), e.setItemVisual(i, {
                        symbolSize: l.get("symbolSize") || _[o ? 0 : 1],
                        symbol: l.get("symbol", !0) || x[o ? 0 : 1],
                        color: l.get("itemStyle.normal.color") || u.getVisual("color")
                    })
                }

                var a = t.coordinateSystem, h = t.name, u = t.getData(), c = this._markLineMap, d = c[h];
                d || (d = c[h] = new m), this.group.add(d.group);
                var f = s(a, t, e), p = f.from, g = f.to, v = f.line;
                e.__from = p, e.__to = g, l.extend(e, y), e.setData(v);
                var x = e.get("symbol"), _ = e.get("symbolSize");
                l.isArray(x) || (x = [x, x]), "number" == typeof _ && (_ = [_, _]), f.from.each(function (t) {
                    var e = v.getItemModel(t), i = e.get("type"), n = e.get("valueIndex");
                    o(p, t, !0, i, n), o(g, t, !1, i, n)
                }), v.each(function (t) {
                    var e = v.getItemModel(t).get("lineStyle.normal.color");
                    v.setItemVisual(t, {color: e || p.getItemVisual(t, "color")}), v.setItemLayout(t, [p.getItemLayout(t), g.getItemLayout(t)]), v.setItemVisual(t, {
                        fromSymbolSize: p.getItemVisual(t, "symbolSize"),
                        fromSymbol: p.getItemVisual(t, "symbol"),
                        toSymbolSize: g.getItemVisual(t, "symbolSize"),
                        toSymbol: g.getItemVisual(t, "symbol")
                    })
                }), d.updateData(v), f.line.eachItemGraphicEl(function (t, i) {
                    t.traverse(function (t) {
                        t.dataModel = e
                    })
                }), d.__keep = !0
            }
        })
    }, function (t, e, i) {
        function n(t) {
            o.defaultEmphasis(t.label, o.LABEL_OPTIONS)
        }

        var o = i(7), a = i(1), r = i(2).extendComponentModel({
            type: "markPoint",
            dependencies: ["series", "grid", "polar"],
            init: function (t, e, i, n) {
                this.mergeDefaultAndTheme(t, i), this.mergeOption(t, i, n.createdBySelf, !0)
            },
            mergeOption: function (t, e, i, o) {
                i || e.eachSeries(function (t) {
                    var i = t.get("markPoint"), s = t.markPointModel;
                    if (!i || !i.data)return void(t.markPointModel = null);
                    if (s)s.mergeOption(i, e, !0); else {
                        o && n(i), a.each(i.data, n);
                        var l = {mainType: "markPoint", seriesIndex: t.seriesIndex, name: t.name, createdBySelf: !0};
                        s = new r(i, this, e, l)
                    }
                    t.markPointModel = s
                }, this)
            },
            defaultOption: {
                zlevel: 0,
                z: 5,
                symbol: "pin",
                symbolSize: 50,
                tooltip: {trigger: "item"},
                label: {normal: {show: !0, position: "inside"}, emphasis: {show: !0}},
                itemStyle: {normal: {borderWidth: 2}}
            }
        });
        t.exports = r
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = e.coordinateSystem;
            t.each(function (o) {
                var a, r = t.getItemModel(o), s = r.getShallow("x"), l = r.getShallow("y");
                if (null != s && null != l)a = [h.parsePercent(s, i.getWidth()), h.parsePercent(l, i.getHeight())]; else if (e.getMarkerPosition)a = e.getMarkerPosition(t.getValues(t.dimensions, o)); else if (n) {
                    var u = t.get(n.dimensions[0], o), c = t.get(n.dimensions[1], o);
                    a = n.dataToPoint([u, c])
                }
                t.setItemLayout(o, a)
            })
        }

        function o(t, e, i) {
            var n;
            n = t ? r.map(t && t.dimensions, function (t) {
                var i = e.getData().getDimensionInfo(e.coordDimToDataDim(t)[0]) || {};
                return i.name = t, i
            }) : [{name: "value", type: "float"}];
            var o = new d(n, i), a = r.map(i.get("data"), r.curry(f.dataTransform, e));
            return t && (a = r.filter(a, r.curry(f.dataFilter, t))), o.initData(a, null, t ? f.dimValueGetter : function (t) {
                return t.value
            }), o
        }

        var a = i(39), r = i(1), s = i(9), l = i(7), h = i(4), u = s.addCommas, c = s.encodeHTML, d = i(15), f = i(103), p = {
            formatTooltip: function (t) {
                var e = this.getData(), i = this.getRawValue(t), n = r.isArray(i) ? r.map(i, u).join(", ") : u(i), o = e.getName(t);
                return this.name + "<br />" + ((o ? c(o) + " : " : "") + n)
            }, getData: function () {
                return this._data
            }, setData: function (t) {
                this._data = t
            }
        };
        r.defaults(p, l.dataFormatMixin), i(2).extendComponentView({
            type: "markPoint", init: function () {
                this._symbolDrawMap = {}
            }, render: function (t, e, i) {
                var n = this._symbolDrawMap;
                for (var o in n)n[o].__keep = !1;
                e.eachSeries(function (t) {
                    var e = t.markPointModel;
                    e && this._renderSeriesMP(t, e, i)
                }, this);
                for (var o in n)n[o].__keep || (n[o].remove(), this.group.remove(n[o].group))
            }, updateLayout: function (t, e, i) {
                e.eachSeries(function (t) {
                    var e = t.markPointModel;
                    e && (n(e.getData(), t, i), this._symbolDrawMap[t.name].updateLayout(e))
                }, this)
            }, _renderSeriesMP: function (t, e, i) {
                var s = t.coordinateSystem, l = t.name, h = t.getData(), u = this._symbolDrawMap, c = u[l];
                c || (c = u[l] = new a);
                var d = o(s, t, e);
                r.mixin(e, p), e.setData(d), n(e.getData(), t, i), d.each(function (t) {
                    var i = d.getItemModel(t), n = i.getShallow("symbolSize");
                    "function" == typeof n && (n = n(e.getRawValue(t), e.getDataParams(t))), d.setItemVisual(t, {
                        symbolSize: n,
                        color: i.get("itemStyle.normal.color") || h.getVisual("color"),
                        symbol: i.getShallow("symbol")
                    })
                }), c.updateData(d), this.group.add(c.group), d.eachItemGraphicEl(function (t) {
                    t.traverse(function (t) {
                        t.dataModel = e
                    })
                }), c.__keep = !0
            }
        })
    }, function (t, e, i) {
        "use strict";
        var n = i(2), o = i(3), a = i(11);
        n.extendComponentModel({
            type: "title",
            layoutMode: {type: "box", ignoreSize: !0},
            defaultOption: {
                zlevel: 0,
                z: 6,
                show: !0,
                text: "",
                target: "blank",
                subtext: "",
                subtarget: "blank",
                left: 0,
                top: 0,
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemGap: 10,
                textStyle: {fontSize: 18, fontWeight: "bolder", color: "#333"},
                subtextStyle: {color: "#aaa"}
            }
        }), n.extendComponentView({
            type: "title", render: function (t, e, i) {
                if (this.group.removeAll(), t.get("show")) {
                    var n = this.group, r = t.getModel("textStyle"), s = t.getModel("subtextStyle"), l = t.get("textAlign"), h = new o.Text({
                        style: {
                            text: t.get("text"),
                            textFont: r.getFont(),
                            fill: r.getTextColor(),
                            textBaseline: "top"
                        }, z2: 10
                    }), u = h.getBoundingRect(), c = t.get("subtext"), d = new o.Text({
                        style: {
                            text: c,
                            textFont: s.getFont(),
                            fill: s.getTextColor(),
                            y: u.height + t.get("itemGap"),
                            textBaseline: "top"
                        }, z2: 10
                    }), f = t.get("link"), p = t.get("sublink");
                    h.silent = !f, d.silent = !p, f && h.on("click", function () {
                        window.open(f, "_" + t.get("target"))
                    }), p && d.on("click", function () {
                        window.open(p, "_" + t.get("subtarget"))
                    }), n.add(h), c && n.add(d);
                    var g = n.getBoundingRect(), m = t.getBoxLayoutParams();
                    m.width = g.width, m.height = g.height;
                    var v = a.getLayoutRect(m, {width: i.getWidth(), height: i.getHeight()}, t.get("padding"));
                    l || (l = t.get("left") || t.get("right"), "middle" === l && (l = "center"), "right" === l ? v.x += v.width : "center" === l && (v.x += v.width / 2)), n.position = [v.x, v.y], h.setStyle("textAlign", l), d.setStyle("textAlign", l), g = n.getBoundingRect();
                    var y = v.margin, x = t.getItemStyle(["color", "opacity"]);
                    x.fill = t.get("backgroundColor");
                    var _ = new o.Rect({
                        shape: {
                            x: g.x - y[3],
                            y: g.y - y[0],
                            width: g.width + y[1] + y[3],
                            height: g.height + y[0] + y[2]
                        }, style: x, silent: !0
                    });
                    o.subPixelOptimizeRect(_), n.add(_)
                }
            }
        })
    }, function (t, e, i) {
        i(191), i(192), i(197), i(195), i(193), i(194), i(196)
    }, function (t, e, i) {
        var n = i(29), o = i(1), a = i(2).extendComponentModel({
            type: "toolbox",
            layoutMode: {type: "box", ignoreSize: !0},
            mergeDefaultAndTheme: function (t) {
                a.superApply(this, "mergeDefaultAndTheme", arguments), o.each(this.option.feature, function (t, e) {
                    var i = n.get(e);
                    i && o.merge(t, i.defaultOption)
                })
            },
            defaultOption: {
                show: !0,
                z: 6,
                zlevel: 0,
                orient: "horizontal",
                left: "right",
                top: "top",
                backgroundColor: "transparent",
                borderColor: "#ccc",
                borderWidth: 0,
                padding: 5,
                itemSize: 15,
                itemGap: 8,
                showTitle: !0,
                iconStyle: {normal: {borderColor: "#666", color: "none"}, emphasis: {borderColor: "#3E98C5"}}
            }
        });
        t.exports = a
    }, function (t, e, i) {
        (function (e) {
            function n(t) {
                return 0 === t.indexOf("my")
            }

            var o = i(29), a = i(1), r = i(3), s = i(12), l = i(48), h = i(102), u = i(18);
            t.exports = i(2).extendComponentView({
                type: "toolbox", render: function (t, e, i) {
                    function c(a, r) {
                        var l, h = v[a], u = v[r], c = g[h], f = new s(c, t, t.ecModel);
                        if (h && !u) {
                            if (n(h))l = {model: f, onclick: f.option.onclick, featureName: h}; else {
                                var p = o.get(h);
                                if (!p)return;
                                l = new p(f)
                            }
                            m[h] = l
                        } else {
                            if (l = m[u], !l)return;
                            l.model = f
                        }
                        return !h && u ? void(l.dispose && l.dispose(e, i)) : !f.get("show") || l.unusable ? void(l.remove && l.remove(e, i)) : (d(f, l, h), f.setIconStatus = function (t, e) {
                            var i = this.option, n = this.iconPaths;
                            i.iconStatus = i.iconStatus || {}, i.iconStatus[t] = e, n[t] && n[t].trigger(e)
                        }, void(l.render && l.render(f, e, i)))
                    }

                    function d(n, o, s) {
                        var l = n.getModel("iconStyle"), h = o.getIcons ? o.getIcons() : n.get("icon"), u = n.get("title") || {};
                        if ("string" == typeof h) {
                            var c = h, d = u;
                            h = {}, u = {}, h[s] = c, u[s] = d
                        }
                        var g = n.iconPaths = {};
                        a.each(h, function (s, h) {
                            var c = l.getModel("normal").getItemStyle(), d = l.getModel("emphasis").getItemStyle(), m = {
                                x: -p / 2,
                                y: -p / 2,
                                width: p,
                                height: p
                            }, v = 0 === s.indexOf("image://") ? (m.image = s.slice(8), new r.Image({style: m})) : r.makePath(s.replace("path://", ""), {
                                style: c,
                                hoverStyle: d,
                                rectHover: !0
                            }, m, "center");
                            r.setHoverStyle(v), t.get("showTitle") && (v.__title = u[h], v.on("mouseover", function () {
                                v.setStyle({
                                    text: u[h],
                                    textPosition: d.textPosition || "bottom",
                                    textFill: d.fill || d.stroke || "#000",
                                    textAlign: d.textAlign || "center"
                                })
                            }).on("mouseout", function () {
                                v.setStyle({textFill: null})
                            })), v.trigger(n.get("iconStatus." + h) || "normal"), f.add(v), v.on("click", a.bind(o.onclick, o, e, i, h)), g[h] = v
                        })
                    }

                    var f = this.group;
                    if (f.removeAll(), t.get("show")) {
                        var p = +t.get("itemSize"), g = t.get("feature") || {}, m = this._features || (this._features = {}), v = [];
                        a.each(g, function (t, e) {
                            v.push(e)
                        }), new l(this._featureNames || [], v).add(c).update(c).remove(a.curry(c, null)).execute(), this._featureNames = v, h.layout(f, t, i), h.addBackground(f, t), f.eachChild(function (t) {
                            var e = t.__title, n = t.hoverStyle;
                            if (n && e) {
                                var o = u.getBoundingRect(e, n.font), a = t.position[0] + f.position[0], r = t.position[1] + f.position[1] + p, s = !1;
                                r + o.height > i.getHeight() && (n.textPosition = "top", s = !0);
                                var l = s ? -5 - o.height : p + 8;
                                a + o.width / 2 > i.getWidth() ? (n.textPosition = ["100%", l], n.textAlign = "right") : a - o.width / 2 < 0 && (n.textPosition = [0, l], n.textAlign = "left")
                            }
                        })
                    }
                }, remove: function (t, e) {
                    a.each(this._features, function (i) {
                        i.remove && i.remove(t, e)
                    }), this.group.removeAll()
                }, dispose: function (t, e) {
                    a.each(this._features, function (i) {
                        i.dispose && i.dispose(t, e)
                    })
                }
            })
        }).call(e, i(203))
    }, function (t, e, i) {
        function n(t) {
            var e = {}, i = [], n = [];
            return t.eachRawSeries(function (t) {
                var o = t.coordinateSystem;
                if (!o || "cartesian2d" !== o.type && "polar" !== o.type)i.push(t); else {
                    var a = o.getBaseAxis();
                    if ("category" === a.type) {
                        var r = a.dim + "_" + a.index;
                        e[r] || (e[r] = {
                            categoryAxis: a,
                            valueAxis: o.getOtherAxis(a),
                            series: []
                        }, n.push({axisDim: a.dim, axisIndex: a.index})), e[r].series.push(t)
                    } else i.push(t)
                }
            }), {seriesGroupByCategoryAxis: e, other: i, meta: n}
        }

        function o(t) {
            var e = [];
            return p.each(t, function (t, i) {
                var n = t.categoryAxis, o = t.valueAxis, a = o.dim, r = [" "].concat(p.map(t.series, function (t) {
                    return t.name
                })), s = [n.model.getCategories()];
                p.each(t.series, function (t) {
                    s.push(t.getRawData().mapArray(a, function (t) {
                        return t
                    }))
                });
                for (var l = [r.join(v)], h = 0; h < s[0].length; h++) {
                    for (var u = [], c = 0; c < s.length; c++)u.push(s[c][h]);
                    l.push(u.join(v))
                }
                e.push(l.join("\n"))
            }), e.join("\n\n" + m + "\n\n")
        }

        function a(t) {
            return p.map(t, function (t) {
                var e = t.getRawData(), i = [t.name], n = [];
                return e.each(e.dimensions, function () {
                    for (var t = arguments.length, o = arguments[t - 1], a = e.getName(o), r = 0; t - 1 > r; r++)n[r] = arguments[r];
                    i.push((a ? a + v : "") + n.join(v))
                }), i.join("\n")
            }).join("\n\n" + m + "\n\n")
        }

        function r(t) {
            var e = n(t);
            return {
                value: p.filter([o(e.seriesGroupByCategoryAxis), a(e.other)], function (t) {
                    return t.replace(/[\n\t\s]/g, "")
                }).join("\n\n" + m + "\n\n"), meta: e.meta
            }
        }

        function s(t) {
            return t.replace(/^\s\s*/, "").replace(/\s\s*$/, "")
        }

        function l(t) {
            var e = t.slice(0, t.indexOf("\n"));
            return e.indexOf(v) >= 0 ? !0 : void 0
        }

        function h(t) {
            for (var e = t.split(/\n+/g), i = s(e.shift()).split(y), n = [], o = p.map(i, function (t) {
                return {name: t, data: []}
            }), a = 0; a < e.length; a++) {
                var r = s(e[a]).split(y);
                n.push(r.shift());
                for (var l = 0; l < r.length; l++)o[l] && (o[l].data[a] = r[l])
            }
            return {series: o, categories: n}
        }

        function u(t) {
            for (var e = t.split(/\n+/g), i = s(e.shift()), n = [], o = 0; o < e.length; o++) {
                var a, r = s(e[o]).split(y), l = "", h = !1;
                isNaN(r[0]) ? (h = !0, l = r[0], r = r.slice(1), n[o] = {
                    name: l,
                    value: []
                }, a = n[o].value) : a = n[o] = [];
                for (var u = 0; u < r.length; u++)a.push(+r[u]);
                1 === a.length && (h ? n[o].value = a[0] : n[o] = a[0])
            }
            return {name: i, data: n}
        }

        function c(t, e) {
            var i = t.split(new RegExp("\n*" + m + "\n*", "g")), n = {series: []};
            return p.each(i, function (t, i) {
                if (l(t)) {
                    var o = h(t), a = e[i], r = a.axisDim + "Axis";
                    a && (n[r] = n[r] || [], n[r][a.axisIndex] = {data: o.categories}, n.series = n.series.concat(o.series))
                } else {
                    var o = u(t);
                    n.series.push(o)
                }
            }), n
        }

        function d(t) {
            this._dom = null, this.model = t
        }

        function f(t, e) {
            return p.map(t, function (t, i) {
                var n = e && e[i];
                return p.isObject(n) && !p.isArray(n) ? (p.isObject(t) && !p.isArray(t) && (t = t.value), p.defaults({value: t}, n)) : t
            })
        }

        var p = i(1), g = i(34), m = new Array(60).join("-"), v = "	", y = new RegExp("[" + v + "]+", "g");
        d.defaultOption = {
            show: !0,
            readOnly: !1,
            optionToContent: null,
            contentToOption: null,
            icon: "M17.5,17.3H33 M17.5,17.3H33 M45.4,29.5h-28 M11.5,2v56H51V14.8L38.4,2H11.5z M38.4,2.2v12.7H51 M45.4,41.7h-28",
            title: "数据视图",
            lang: ["数据视图", "关闭", "刷新"],
            backgroundColor: "#fff",
            textColor: "#000",
            textareaColor: "#fff",
            textareaBorderColor: "#333",
            buttonColor: "#c23531",
            buttonTextColor: "#fff"
        }, d.prototype.onclick = function (t, e) {
            function i() {
                n.removeChild(a), M._dom = null
            }

            var n = e.getDom(), o = this.model;
            this._dom && n.removeChild(this._dom);
            var a = document.createElement("div");
            a.style.cssText = "position:absolute;left:5px;top:5px;bottom:5px;right:5px;", a.style.backgroundColor = o.get("backgroundColor") || "#fff";
            var s = document.createElement("h4"), l = o.get("lang") || [];
            s.innerHTML = l[0] || o.get("title"), s.style.cssText = "margin: 10px 20px;", s.style.color = o.get("textColor");
            var h = document.createElement("div"), u = document.createElement("textarea");
            h.style.cssText = "display:block;width:100%;overflow:hidden;";
            var d = o.get("optionToContent"), f = o.get("contentToOption"), m = r(t);
            if ("function" == typeof d) {
                var y = d(e.getOption());
                "string" == typeof y ? h.innerHTML = y : p.isDom(y) && h.appendChild(y)
            } else h.appendChild(u), u.readOnly = o.get("readOnly"), u.style.cssText = "width:100%;height:100%;font-family:monospace;font-size:14px;line-height:1.6rem;", u.style.color = o.get("textColor"), u.style.borderColor = o.get("textareaBorderColor"), u.style.backgroundColor = o.get("textareaColor"), u.value = m.value;
            var x = m.meta, _ = document.createElement("div");
            _.style.cssText = "position:absolute;bottom:0;left:0;right:0;";
            var b = "float:right;margin-right:20px;border:none;cursor:pointer;padding:2px 5px;font-size:12px;border-radius:3px", w = document.createElement("div"), S = document.createElement("div");
            b += ";background-color:" + o.get("buttonColor"), b += ";color:" + o.get("buttonTextColor");
            var M = this;
            g.addEventListener(w, "click", i), g.addEventListener(S, "click", function () {
                var t;
                try {
                    t = "function" == typeof f ? f(h, e.getOption()) : c(u.value, x)
                } catch (n) {
                    throw i(), new Error("Data view format error " + n)
                }
                t && e.dispatchAction({type: "changeDataView", newOption: t}), i()
            }), w.innerHTML = l[1], S.innerHTML = l[2], S.style.cssText = b, w.style.cssText = b, !o.get("readOnly") && _.appendChild(S), _.appendChild(w), g.addEventListener(u, "keydown", function (t) {
                if (9 === (t.keyCode || t.which)) {
                    var e = this.value, i = this.selectionStart, n = this.selectionEnd;
                    this.value = e.substring(0, i) + v + e.substring(n), this.selectionStart = this.selectionEnd = i + 1, g.stop(t)
                }
            }), a.appendChild(s), a.appendChild(h), a.appendChild(_), h.style.height = n.clientHeight - 80 + "px", n.appendChild(a), this._dom = a
        }, d.prototype.remove = function (t, e) {
            this._dom && e.getDom().removeChild(this._dom)
        }, d.prototype.dispose = function (t, e) {
            this.remove(t, e)
        }, i(29).register("dataView", d), i(2).registerAction({
            type: "changeDataView",
            event: "dataViewChanged",
            update: "prepareAndUpdate"
        }, function (t, e) {
            var i = [];
            p.each(t.newOption.series, function (t) {
                var n = e.getSeriesByName(t.name)[0];
                if (n) {
                    var o = n.get("data");
                    i.push({name: t.name, data: f(t.data, o)})
                } else i.push(p.extend({type: "scatter"}, t))
            }), e.mergeOption(p.defaults({series: i}, t.newOption))
        }), t.exports = d
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            this.model = t, this._controllerGroup, this._controller, this._isZoomActive
        }

        function o(t, e) {
            var i = [{axisModel: t.getAxis("x").model, axisIndex: 0}, {axisModel: t.getAxis("y").model, axisIndex: 0}];
            return i.grid = t, e.eachComponent({mainType: "dataZoom", subType: "select"}, function (t, n) {
                a("xAxis", i[0].axisModel, t, e) && (i[0].dataZoomModel = t), a("yAxis", i[1].axisModel, t, e) && (i[1].dataZoomModel = t)
            }), i
        }

        function a(t, e, i, n) {
            var o = i.get(t + "Index");
            return null != o && n.getComponent(t, o) === e
        }

        function r(t, e) {
            var i = e.grid, n = new d(t[0][0], t[1][0], t[0][1] - t[0][0], t[1][1] - t[1][0]);
            if (n.intersect(i.getRect())) {
                var o = i.getCartesian(e[0].axisIndex, e[1].axisIndex), a = o.pointToData([t[0][0], t[1][0]], !0), r = o.pointToData([t[0][1], t[1][1]], !0);
                return [v([a[0], r[0]]), v([a[1], r[1]])]
            }
        }

        function s(t, e, i, n) {
            var o = e[i], a = o.dataZoomModel;
            return a ? {dataZoomId: a.id, startValue: t[i][0], endValue: t[i][1]} : void 0
        }

        function l(t, e) {
            t.setIconStatus("back", p.count(e) > 1 ? "emphasis" : "normal")
        }

        var h = i(1), u = i(4), c = i(161), d = i(8), f = i(27), p = i(99), g = i(101), m = h.each, v = u.asc;
        i(177);
        var y = "\x00_ec_\x00toolbox-dataZoom_";
        n.defaultOption = {
            show: !0,
            icon: {
                zoom: "M0,13.5h26.9 M13.5,26.9V0 M32.1,13.5H58V58H13.5 V32.1",
                back: "M22,1.4L9.9,13.5l12.3,12.3 M10.3,13.5H54.9v44.6 H10.3v-26"
            },
            title: {zoom: "区域缩放", back: "区域缩放还原"}
        };
        var x = n.prototype;
        x.render = function (t, e, i) {
            l(t, e)
        }, x.onclick = function (t, e, i) {
            var n = this._controllerGroup;
            this._controllerGroup || (n = this._controllerGroup = new f, e.getZr().add(n)), _[i].call(this, n, this.model, t, e)
        }, x.remove = function (t, e) {
            this._disposeController(), g.release("globalPan", e.getZr())
        }, x.dispose = function (t, e) {
            var i = e.getZr();
            g.release("globalPan", i), this._disposeController(), this._controllerGroup && i.remove(this._controllerGroup)
        };
        var _ = {
            zoom: function (t, e, i, n) {
                var o = this._isZoomActive = !this._isZoomActive, a = n.getZr();
                g[o ? "take" : "release"]("globalPan", a), e.setIconStatus("zoom", o ? "emphasis" : "normal"), o ? (a.setDefaultCursorStyle("crosshair"), this._createController(t, e, i, n)) : (a.setDefaultCursorStyle("default"), this._disposeController())
            }, back: function (t, e, i, n) {
                this._dispatchAction(p.pop(i), n)
            }
        };
        x._createController = function (t, e, i, n) {
            var o = this._controller = new c("rect", n.getZr(), {
                lineWidth: 3,
                stroke: "#333",
                fill: "rgba(0,0,0,0.2)"
            });
            o.on("selectEnd", h.bind(this._onSelected, this, o, e, i, n)), o.enable(t, !1)
        }, x._disposeController = function () {
            var t = this._controller;
            t && (t.off("selected"), t.dispose())
        }, x._onSelected = function (t, e, i, n, a) {
            if (a.length) {
                var l = a[0];
                t.update();
                var h = {};
                i.eachComponent("grid", function (t, e) {
                    var n = t.coordinateSystem, a = o(n, i), u = r(l, a);
                    if (u) {
                        var c = s(u, a, 0, "x"), d = s(u, a, 1, "y");
                        c && (h[c.dataZoomId] = c), d && (h[d.dataZoomId] = d)
                    }
                }, this), p.push(i, h), this._dispatchAction(h, n)
            }
        }, x._dispatchAction = function (t, e) {
            var i = [];
            m(t, function (t) {
                i.push(t)
            }), i.length && e.dispatchAction({type: "dataZoom", from: this.uid, batch: h.clone(i, !0)})
        }, i(29).register("dataZoom", n), i(2).registerPreprocessor(function (t) {
            function e(t, e) {
                if (e) {
                    var o = t + "Index", a = e[o];
                    null == a || h.isArray(a) || (a = a === !1 ? [] : [a]), i(t, function (e, i) {
                        if (null == a || -1 !== h.indexOf(a, i)) {
                            var r = {type: "select", $fromToolbox: !0, id: y + t + i};
                            r[o] = i, n.push(r)
                        }
                    })
                }
            }

            function i(e, i) {
                var n = t[e];
                h.isArray(n) || (n = n ? [n] : []), m(n, i)
            }

            if (t) {
                var n = t.dataZoom || (t.dataZoom = []);
                h.isArray(n) || (t.dataZoom = n = [n]);
                var o = t.toolbox;
                if (o && (h.isArray(o) && (o = o[0]), o && o.feature)) {
                    var a = o.feature.dataZoom;
                    e("xAxis", a), e("yAxis", a)
                }
            }
        }), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            this.model = t
        }

        var o = i(1);
        n.defaultOption = {
            show: !0,
            type: [],
            icon: {
                line: "M4.1,28.9h7.1l9.3-22l7.4,38l9.7-19.7l3,12.8h14.9M4.1,58h51.4",
                bar: "M6.7,22.9h10V48h-10V22.9zM24.9,13h10v35h-10V13zM43.2,2h10v46h-10V2zM3.1,58h53.7",
                stack: "M8.2,38.4l-8.4,4.1l30.6,15.3L60,42.5l-8.1-4.1l-21.5,11L8.2,38.4z M51.9,30l-8.1,4.2l-13.4,6.9l-13.9-6.9L8.2,30l-8.4,4.2l8.4,4.2l22.2,11l21.5-11l8.1-4.2L51.9,30z M51.9,21.7l-8.1,4.2L35.7,30l-5.3,2.8L24.9,30l-8.4-4.1l-8.3-4.2l-8.4,4.2L8.2,30l8.3,4.2l13.9,6.9l13.4-6.9l8.1-4.2l8.1-4.1L51.9,21.7zM30.4,2.2L-0.2,17.5l8.4,4.1l8.3,4.2l8.4,4.2l5.5,2.7l5.3-2.7l8.1-4.2l8.1-4.2l8.1-4.1L30.4,2.2z",
                tiled: "M2.3,2.2h22.8V25H2.3V2.2z M35,2.2h22.8V25H35V2.2zM2.3,35h22.8v22.8H2.3V35z M35,35h22.8v22.8H35V35z"
            },
            title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"},
            option: {},
            seriesIndex: {}
        };
        var a = n.prototype;
        a.getIcons = function () {
            var t = this.model, e = t.get("icon"), i = {};
            return o.each(t.get("type"), function (t) {
                e[t] && (i[t] = e[t])
            }), i
        };
        var r = {
            line: function (t, e, i, n) {
                return "bar" === t ? o.merge({
                    id: e,
                    type: "line",
                    data: i.get("data"),
                    stack: i.get("stack"),
                    markPoint: i.get("markPoint"),
                    markLine: i.get("markLine")
                }, n.get("option.line") || {}, !0) : void 0
            }, bar: function (t, e, i, n) {
                return "line" === t ? o.merge({
                    id: e, type: "bar", data: i.get("data"),
                    stack: i.get("stack"), markPoint: i.get("markPoint"), markLine: i.get("markLine")
                }, n.get("option.bar") || {}, !0) : void 0
            }, stack: function (t, e, i, n) {
                return "line" === t || "bar" === t ? o.merge({
                    id: e,
                    stack: "__ec_magicType_stack__"
                }, n.get("option.stack") || {}, !0) : void 0
            }, tiled: function (t, e, i, n) {
                return "line" === t || "bar" === t ? o.merge({
                    id: e,
                    stack: ""
                }, n.get("option.tiled") || {}, !0) : void 0
            }
        }, s = [["line", "bar"], ["stack", "tiled"]];
        a.onclick = function (t, e, i) {
            var n = this.model, a = n.get("seriesIndex." + i);
            if (r[i]) {
                var l = {series: []}, h = function (t) {
                    var e = t.subType, a = t.id, s = r[i](e, a, t, n);
                    s && (o.defaults(s, t.option), l.series.push(s));
                    var h = t.coordinateSystem;
                    if (h && "cartesian2d" === h.type && ("line" === i || "bar" === i)) {
                        var u = h.getAxesByScale("ordinal")[0];
                        if (u) {
                            var c = u.dim, d = t.get(c + "AxisIndex"), f = c + "Axis";
                            l[f] = l[f] || [];
                            for (var p = 0; d >= p; p++)l[f][d] = l[f][d] || {};
                            l[f][d].boundaryGap = "bar" === i
                        }
                    }
                };
                o.each(s, function (t) {
                    o.indexOf(t, i) >= 0 && o.each(t, function (t) {
                        n.setIconStatus(t, "normal")
                    })
                }), n.setIconStatus(i, "emphasis"), t.eachComponent({
                    mainType: "series",
                    query: null == a ? null : {seriesIndex: a}
                }, h), e.dispatchAction({type: "changeMagicType", currentType: i, newOption: l})
            }
        };
        var l = i(2);
        l.registerAction({
            type: "changeMagicType",
            event: "magicTypeChanged",
            update: "prepareAndUpdate"
        }, function (t, e) {
            e.mergeOption(t.newOption)
        }), i(29).register("magicType", n), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t) {
            this.model = t
        }

        var o = i(99);
        n.defaultOption = {
            show: !0,
            icon: "M3.8,33.4 M47,18.9h9.8V8.7 M56.3,20.1 C52.1,9,40.5,0.6,26.8,2.1C12.6,3.7,1.6,16.2,2.1,30.6 M13,41.1H3.1v10.2 M3.7,39.9c4.2,11.1,15.8,19.5,29.5,18 c14.2-1.6,25.2-14.1,24.7-28.5",
            title: "还原"
        };
        var a = n.prototype;
        a.onclick = function (t, e, i) {
            o.clear(t), e.dispatchAction({type: "restore", from: this.uid})
        }, i(29).register("restore", n), i(2).registerAction({
            type: "restore",
            event: "restore",
            update: "prepareAndUpdate"
        }, function (t, e) {
            e.resetOption("recreate")
        }), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            this.model = t
        }

        var o = i(14);
        n.defaultOption = {
            show: !0,
            icon: "M4.7,22.9L29.3,45.5L54.7,23.4M4.6,43.6L4.6,58L53.8,58L53.8,43.6M29.2,45.1L29.2,0",
            title: "保存为图片",
            type: "png",
            name: "",
            excludeComponents: ["toolbox"],
            pixelRatio: 1,
            lang: ["右键另存为图片"]
        }, n.prototype.unusable = !o.canvasSupported;
        var a = n.prototype;
        a.onclick = function (t, e) {
            var i = this.model, n = i.get("name") || t.get("title.0.text") || "echarts", o = document.createElement("a"), a = i.get("type", !0) || "png";
            o.download = n + "." + a, o.target = "_blank";
            var r = e.getConnectedDataURL({
                type: a,
                backgroundColor: i.get("backgroundColor", !0) || t.get("backgroundColor") || "#fff",
                excludeComponents: i.get("excludeComponents"),
                pixelRatio: i.get("pixelRatio")
            });
            if (o.href = r, "function" == typeof MouseEvent) {
                var s = new MouseEvent("click", {view: window, bubbles: !0, cancelable: !1});
                o.dispatchEvent(s)
            } else {
                var l = i.get("lang"), h = '<body style="margin:0;"><img src="' + r + '" style="max-width:100%;" title="' + (l && l[0] || "") + '" /></body>', u = window.open();
                u.document.write(h)
            }
        }, i(29).register("saveAsImage", n), t.exports = n
    }, function (t, e, i) {
        i(200), i(201), i(2).registerAction({type: "showTip", event: "showTip", update: "none"}, function () {
        }), i(2).registerAction({type: "hideTip", event: "hideTip", update: "none"}, function () {
        })
    }, function (t, e, i) {
        function n(t) {
            var e = "cubic-bezier(0.23, 1, 0.32, 1)", i = "left " + t + "s " + e + ",top " + t + "s " + e;
            return l.map(g, function (t) {
                return t + "transition:" + i
            }).join(";")
        }

        function o(t) {
            var e = [], i = t.get("fontSize"), n = t.getTextColor();
            return n && e.push("color:" + n), e.push("font:" + t.getFont()), i && e.push("line-height:" + Math.round(3 * i / 2) + "px"), d(["decoration", "align"], function (i) {
                var n = t.get(i);
                n && e.push("text-" + i + ":" + n)
            }), e.join(";")
        }

        function a(t) {
            t = t;
            var e = [], i = t.get("transitionDuration"), a = t.get("backgroundColor"), r = t.getModel("textStyle"), s = t.get("padding");
            return i && e.push(n(i)), a && (p.canvasSupported ? e.push("background-Color:" + a) : (e.push("background-Color:#" + h.toHex(a)), e.push("filter:alpha(opacity=70)"))), d(["width", "color", "radius"], function (i) {
                var n = "border-" + i, o = f(n), a = t.get(o);
                null != a && e.push(n + ":" + a + ("color" === i ? "" : "px"))
            }), e.push(o(r)), null != s && e.push("padding:" + c.normalizeCssArray(s).join("px ") + "px"), e.join(";") + ";"
        }

        function r(t, e) {
            var i = document.createElement("div"), n = e.getZr();
            this.el = i, this._x = e.getWidth() / 2, this._y = e.getHeight() / 2, t.appendChild(i), this._container = t, this._show = !1, this._hideTimeout;
            var o = this;
            i.onmouseenter = function () {
                o.enterable && (clearTimeout(o._hideTimeout), o._show = !0), o._inContent = !0
            }, i.onmousemove = function (e) {
                if (!o.enterable) {
                    var i = n.handler;
                    u.normalizeEvent(t, e), i.dispatch("mousemove", e)
                }
            }, i.onmouseleave = function () {
                o.enterable && o._show && o.hideLater(o._hideDelay), o._inContent = !1
            }, s(i, t)
        }

        function s(t, e) {
            function i(t) {
                n(t.target) && t.preventDefault()
            }

            function n(i) {
                for (; i && i !== e;) {
                    if (i === t)return !0;
                    i = i.parentNode
                }
            }

            u.addEventListener(e, "touchstart", i), u.addEventListener(e, "touchmove", i), u.addEventListener(e, "touchend", i)
        }

        var l = i(1), h = i(22), u = i(34), c = i(9), d = l.each, f = c.toCamelCase, p = i(14), g = ["", "-webkit-", "-moz-", "-o-"], m = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;";
        r.prototype = {
            constructor: r, enterable: !0, update: function () {
                var t = this._container, e = t.currentStyle || document.defaultView.getComputedStyle(t), i = t.style;
                "absolute" !== i.position && "absolute" !== e.position && (i.position = "relative")
            }, show: function (t) {
                clearTimeout(this._hideTimeout), this.el.style.cssText = m + a(t) + ";left:" + this._x + "px;top:" + this._y + "px;" + (t.get("extraCssText") || ""), this._show = !0
            }, setContent: function (t) {
                var e = this.el;
                e.innerHTML = t, e.style.display = t ? "block" : "none"
            }, moveTo: function (t, e) {
                var i = this.el.style;
                i.left = t + "px", i.top = e + "px", this._x = t, this._y = e
            }, hide: function () {
                this.el.style.display = "none", this._show = !1
            }, hideLater: function (t) {
                !this._show || this._inContent && this.enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(l.bind(this.hide, this), t)) : this.hide())
            }, isShow: function () {
                return this._show
            }
        }, t.exports = r
    }, function (t, e, i) {
        i(2).extendComponentModel({
            type: "tooltip",
            defaultOption: {
                zlevel: 0,
                z: 8,
                show: !0,
                showContent: !0,
                trigger: "item",
                triggerOn: "mousemove",
                alwaysShowContent: !1,
                showDelay: 0,
                hideDelay: 100,
                transitionDuration: .4,
                enterable: !1,
                backgroundColor: "rgba(50,50,50,0.7)",
                borderColor: "#333",
                borderRadius: 4,
                borderWidth: 0,
                padding: 5,
                extraCssText: "",
                axisPointer: {
                    type: "line",
                    axis: "auto",
                    animation: !0,
                    animationDurationUpdate: 200,
                    animationEasingUpdate: "exponentialOut",
                    lineStyle: {color: "#555", width: 1, type: "solid"},
                    crossStyle: {color: "#555", width: 1, type: "dashed", textStyle: {}},
                    shadowStyle: {color: "rgba(150,150,150,0.3)"}
                },
                textStyle: {color: "#fff", fontSize: 14}
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            if (!t || !e)return !1;
            var i = g.round;
            return i(t[0]) === i(e[0]) && i(t[1]) === i(e[1])
        }

        function o(t, e, i, n) {
            return {x1: t, y1: e, x2: i, y2: n}
        }

        function a(t, e, i, n) {
            return {x: t, y: e, width: i, height: n}
        }

        function r(t, e, i, n, o, a) {
            return {cx: t, cy: e, r0: i, r: n, startAngle: o, endAngle: a, clockwise: !0}
        }

        function s(t, e, i, n, o) {
            var a = i.clientWidth, r = i.clientHeight, s = 20;
            return t + a + s > n ? t -= a + s : t += s, e + r + s > o ? e -= r + s : e += s, [t, e]
        }

        function l(t, e, i) {
            var n = i.clientWidth, o = i.clientHeight, a = 5, r = 0, s = 0, l = e.width, h = e.height;
            switch (t) {
                case"inside":
                    r = e.x + l / 2 - n / 2, s = e.y + h / 2 - o / 2;
                    break;
                case"top":
                    r = e.x + l / 2 - n / 2, s = e.y - o - a;
                    break;
                case"bottom":
                    r = e.x + l / 2 - n / 2, s = e.y + h + a;
                    break;
                case"left":
                    r = e.x - n - a, s = e.y + h / 2 - o / 2;
                    break;
                case"right":
                    r = e.x + l + a, s = e.y + h / 2 - o / 2
            }
            return [r, s]
        }

        function h(t, e, i, n, o, a, r) {
            var h = r.getWidth(), u = r.getHeight(), c = a && a.getBoundingRect().clone();
            if (a && c.applyTransform(a.transform), "function" == typeof t && (t = t([e, i], o, n.el, c)), f.isArray(t))e = m(t[0], h), i = m(t[1], u); else if ("string" == typeof t && a) {
                var d = l(t, c, n.el);
                e = d[0], i = d[1]
            } else {
                var d = s(e, i, n.el, h, u);
                e = d[0], i = d[1]
            }
            n.moveTo(e, i)
        }

        function u(t) {
            var e = t.coordinateSystem, i = t.get("tooltip.trigger", !0);
            return !(!e || "cartesian2d" !== e.type && "polar" !== e.type && "single" !== e.type || "item" === i)
        }

        var c = i(199), d = i(3), f = i(1), p = i(9), g = i(4), m = g.parsePercent, v = i(14);
        i(2).extendComponentView({
            type: "tooltip", _axisPointers: {}, init: function (t, e) {
                if (!v.node) {
                    var i = new c(e.getDom(), e);
                    this._tooltipContent = i, e.on("showTip", this._manuallyShowTip, this), e.on("hideTip", this._manuallyHideTip, this)
                }
            }, render: function (t, e, i) {
                if (!v.node) {
                    this.group.removeAll(), this._axisPointers = {}, this._tooltipModel = t, this._ecModel = e, this._api = i, this._lastHover = {};
                    var n = this._tooltipContent;
                    n.update(), n.enterable = t.get("enterable"), this._alwaysShowContent = t.get("alwaysShowContent"), this._seriesGroupByAxis = this._prepareAxisTriggerData(t, e);
                    var o = this._crossText;
                    if (o && this.group.add(o), null != this._lastX && null != this._lastY) {
                        var a = this;
                        clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                            a._manuallyShowTip({x: a._lastX, y: a._lastY})
                        })
                    }
                    var r = this._api.getZr();
                    r.off("click", this._tryShow), r.off("mousemove", this._mousemove), r.off("mouseout", this._hide), r.off("globalout", this._hide), "click" === t.get("triggerOn") ? r.on("click", this._tryShow, this) : (r.on("mousemove", this._mousemove, this), r.on("mouseout", this._hide, this), r.on("globalout", this._hide, this))
                }
            }, _mousemove: function (t) {
                var e = this._tooltipModel.get("showDelay"), i = this;
                clearTimeout(this._showTimeout), e > 0 ? this._showTimeout = setTimeout(function () {
                    i._tryShow(t)
                }, e) : this._tryShow(t)
            }, _manuallyShowTip: function (t) {
                if (t.from !== this.uid) {
                    var e = this._ecModel, i = t.seriesIndex, n = t.dataIndex, o = e.getSeriesByIndex(i), a = this._api;
                    if (null == t.x || null == t.y) {
                        if (o || e.eachSeries(function (t) {
                                u(t) && !o && (o = t)
                            }), o) {
                            var r = o.getData();
                            null == n && (n = r.indexOfName(t.name));
                            var s, l, h = r.getItemGraphicEl(n), c = o.coordinateSystem;
                            if (c && c.dataToPoint) {
                                var d = c.dataToPoint(r.getValues(f.map(c.dimensions, function (t) {
                                    return o.coordDimToDataDim(t)[0]
                                }), n, !0));
                                s = d && d[0], l = d && d[1]
                            } else if (h) {
                                var p = h.getBoundingRect().clone();
                                p.applyTransform(h.transform), s = p.x + p.width / 2, l = p.y + p.height / 2
                            }
                            null != s && null != l && this._tryShow({offsetX: s, offsetY: l, target: h, event: {}})
                        }
                    } else {
                        var h = a.getZr().handler.findHover(t.x, t.y);
                        this._tryShow({offsetX: t.x, offsetY: t.y, target: h, event: {}})
                    }
                }
            }, _manuallyHideTip: function (t) {
                t.from !== this.uid && this._hide()
            }, _prepareAxisTriggerData: function (t, e) {
                var i = {};
                return e.eachSeries(function (t) {
                    if (u(t)) {
                        var e, n, o = t.coordinateSystem;
                        "cartesian2d" === o.type ? (e = o.getBaseAxis(), n = e.dim + e.index) : "single" === o.type ? (e = o.getAxis(), n = e.dim + e.type) : (e = o.getBaseAxis(), n = e.dim + o.name), i[n] = i[n] || {
                            coordSys: [],
                            series: []
                        }, i[n].coordSys.push(o), i[n].series.push(t)
                    }
                }, this), i
            }, _tryShow: function (t) {
                var e = t.target, i = this._tooltipModel, n = i.get("trigger"), o = this._ecModel, a = this._api;
                if (i)if (this._lastX = t.offsetX, this._lastY = t.offsetY, e && null != e.dataIndex) {
                    var r = e.dataModel || o.getSeriesByIndex(e.seriesIndex), s = e.dataIndex, l = r.getData().getItemModel(s);
                    "axis" === (l.get("tooltip.trigger") || n) ? this._showAxisTooltip(i, o, t) : (this._ticket = "", this._hideAxisPointer(), this._resetLastHover(), this._showItemTooltipContent(r, s, e.dataType, t)), a.dispatchAction({
                        type: "showTip",
                        from: this.uid,
                        dataIndex: e.dataIndex,
                        seriesIndex: e.seriesIndex
                    })
                } else"item" === n ? this._hide() : this._showAxisTooltip(i, o, t), "cross" === i.get("axisPointer.type") && a.dispatchAction({
                    type: "showTip",
                    from: this.uid,
                    x: t.offsetX,
                    y: t.offsetY
                })
            }, _showAxisTooltip: function (t, e, i) {
                var o = t.getModel("axisPointer"), a = o.get("type");
                if ("cross" === a) {
                    var r = i.target;
                    if (r && null != r.dataIndex) {
                        var s = e.getSeriesByIndex(r.seriesIndex), l = r.dataIndex;
                        this._showItemTooltipContent(s, l, r.dataType, i)
                    }
                }
                this._showAxisPointer();
                var h = !0;
                f.each(this._seriesGroupByAxis, function (t) {
                    var e = t.coordSys, r = e[0], s = [i.offsetX, i.offsetY];
                    if (!r.containPoint(s))return void this._hideAxisPointer(r.name);
                    h = !1;
                    var l = r.dimensions, u = r.pointToData(s, !0);
                    s = r.dataToPoint(u);
                    var c = r.getBaseAxis(), d = o.get("axis");
                    "auto" === d && (d = c.dim);
                    var p = !1, g = this._lastHover;
                    if ("cross" === a)n(g.data, u) && (p = !0), g.data = u; else {
                        var m = f.indexOf(l, d);
                        g.data === u[m] && (p = !0), g.data = u[m]
                    }
                    "cartesian2d" !== r.type || p ? "polar" !== r.type || p ? "single" !== r.type || p || this._showSinglePointer(o, r, d, s) : this._showPolarPointer(o, r, d, s) : this._showCartesianPointer(o, r, d, s), "cross" !== a && this._dispatchAndShowSeriesTooltipContent(r, t.series, s, u, p)
                }, this), this._tooltipModel.get("show") || this._hideAxisPointer(), h && this._hide()
            }, _showCartesianPointer: function (t, e, i, n) {
                function r(i, n, a) {
                    var r = "x" === i ? o(n[0], a[0], n[0], a[1]) : o(a[0], n[1], a[1], n[1]), s = l._getPointerElement(e, t, i, r);
                    u ? d.updateProps(s, {shape: r}, t) : s.attr({shape: r})
                }

                function s(i, n, o) {
                    var r = e.getAxis(i), s = r.getBandWidth(), h = o[1] - o[0], c = "x" === i ? a(n[0] - s / 2, o[0], s, h) : a(o[0], n[1] - s / 2, h, s), f = l._getPointerElement(e, t, i, c);
                    u ? d.updateProps(f, {shape: c}, t) : f.attr({shape: c})
                }

                var l = this, h = t.get("type"), u = "cross" !== h;
                if ("cross" === h)r("x", n, e.getAxis("y").getGlobalExtent()), r("y", n, e.getAxis("x").getGlobalExtent()), this._updateCrossText(e, n, t); else {
                    var c = e.getAxis("x" === i ? "y" : "x"), f = c.getGlobalExtent();
                    "cartesian2d" === e.type && ("line" === h ? r : s)(i, n, f)
                }
            }, _showSinglePointer: function (t, e, i, n) {
                function a(i, n, a) {
                    var s = e.getAxis(), h = s.orient, u = "horizontal" === h ? o(n[0], a[0], n[0], a[1]) : o(a[0], n[1], a[1], n[1]), c = r._getPointerElement(e, t, i, u);
                    l ? d.updateProps(c, {shape: u}, t) : c.attr({shape: u})
                }

                var r = this, s = t.get("type"), l = "cross" !== s, h = e.getRect(), u = [h.y, h.y + h.height];
                a(i, n, u)
            }, _showPolarPointer: function (t, e, i, n) {
                function a(i, n, a) {
                    var r, s = e.pointToCoord(n);
                    if ("angle" === i) {
                        var h = e.coordToPoint([a[0], s[1]]), u = e.coordToPoint([a[1], s[1]]);
                        r = o(h[0], h[1], u[0], u[1])
                    } else r = {cx: e.cx, cy: e.cy, r: s[0]};
                    var c = l._getPointerElement(e, t, i, r);
                    f ? d.updateProps(c, {shape: r}, t) : c.attr({shape: r})
                }

                function s(i, n, o) {
                    var a, s = e.getAxis(i), h = s.getBandWidth(), u = e.pointToCoord(n), c = Math.PI / 180;
                    a = "angle" === i ? r(e.cx, e.cy, o[0], o[1], (-u[1] - h / 2) * c, (-u[1] + h / 2) * c) : r(e.cx, e.cy, u[0] - h / 2, u[0] + h / 2, 0, 2 * Math.PI);
                    var p = l._getPointerElement(e, t, i, a);
                    f ? d.updateProps(p, {shape: a}, t) : p.attr({shape: a})
                }

                var l = this, h = t.get("type"), u = e.getAngleAxis(), c = e.getRadiusAxis(), f = "cross" !== h;
                if ("cross" === h)a("angle", n, c.getExtent()), a("radius", n, u.getExtent()), this._updateCrossText(e, n, t); else {
                    var p = e.getAxis("radius" === i ? "angle" : "radius"), g = p.getExtent();
                    ("line" === h ? a : s)(i, n, g)
                }
            }, _updateCrossText: function (t, e, i) {
                var n = i.getModel("crossStyle"), o = n.getModel("textStyle"), a = this._tooltipModel, r = this._crossText;
                r || (r = this._crossText = new d.Text({
                    style: {
                        textAlign: "left",
                        textVerticalAlign: "bottom"
                    }
                }), this.group.add(r));
                var s = t.pointToData(e), l = t.dimensions;
                s = f.map(s, function (e, i) {
                    var n = t.getAxis(l[i]);
                    return e = "category" === n.type || "time" === n.type ? n.scale.getLabel(e) : p.addCommas(e.toFixed(n.getPixelPrecision()))
                }), r.setStyle({
                    fill: o.getTextColor() || n.get("color"),
                    textFont: o.getFont(),
                    text: s.join(", "),
                    x: e[0] + 5,
                    y: e[1] - 5
                }), r.z = a.get("z"), r.zlevel = a.get("zlevel")
            }, _getPointerElement: function (t, e, i, n) {
                var o = this._tooltipModel, a = o.get("z"), r = o.get("zlevel"), s = this._axisPointers, l = t.name;
                if (s[l] = s[l] || {}, s[l][i])return s[l][i];
                var h = e.get("type"), u = e.getModel(h + "Style"), c = "shadow" === h, f = u[c ? "getAreaStyle" : "getLineStyle"](), p = "polar" === t.type ? c ? "Sector" : "radius" === i ? "Circle" : "Line" : c ? "Rect" : "Line";
                c ? f.stroke = null : f.fill = null;
                var g = s[l][i] = new d[p]({style: f, z: a, zlevel: r, silent: !0, shape: n});
                return this.group.add(g), g
            }, _dispatchAndShowSeriesTooltipContent: function (t, e, i, n, o) {
                var a = this._tooltipModel, r = this._tooltipContent, s = t.getBaseAxis(), l = f.map(e, function (t) {
                    return {
                        seriesIndex: t.seriesIndex,
                        dataIndex: t.getAxisTooltipDataIndex ? t.getAxisTooltipDataIndex(t.coordDimToDataDim(s.dim), n, s) : t.getData().indexOfNearest(t.coordDimToDataDim(s.dim)[0], n["x" === s.dim || "radius" === s.dim ? 0 : 1])
                    }
                }), u = this._lastHover, c = this._api;
                if (u.payloadBatch && !o && c.dispatchAction({
                        type: "downplay",
                        batch: u.payloadBatch
                    }), o || (c.dispatchAction({
                        type: "highlight",
                        batch: l
                    }), u.payloadBatch = l), c.dispatchAction({
                        type: "showTip",
                        dataIndex: l[0].dataIndex,
                        seriesIndex: l[0].seriesIndex,
                        from: this.uid
                    }), s && a.get("showContent") && a.get("show")) {
                    var d, g = a.get("formatter"), m = a.get("position"), v = f.map(e, function (t, e) {
                        return t.getDataParams(l[e].dataIndex)
                    });
                    r.show(a);
                    var y = l[0].dataIndex;
                    if (!o) {
                        if (this._ticket = "", g) {
                            if ("string" == typeof g)d = p.formatTpl(g, v); else if ("function" == typeof g) {
                                var x = this, _ = "axis_" + t.name + "_" + y, b = function (t, e) {
                                    t === x._ticket && (r.setContent(e), h(m, i[0], i[1], r, v, null, c))
                                };
                                x._ticket = _, d = g(v, _, b)
                            }
                        } else {
                            var w = e[0].getData().getName(y);
                            d = (w ? w + "<br />" : "") + f.map(e, function (t, e) {
                                return t.formatTooltip(l[e].dataIndex, !0)
                            }).join("<br />")
                        }
                        r.setContent(d)
                    }
                    h(m, i[0], i[1], r, v, null, c)
                }
            }, _showItemTooltipContent: function (t, e, i, n) {
                var o = this._api, a = t.getData(i), r = a.getItemModel(e), s = this._tooltipModel, l = this._tooltipContent, u = r.getModel("tooltip");
                if (u.parentModel ? u.parentModel.parentModel = s : u.parentModel = this._tooltipModel, u.get("showContent") && u.get("show")) {
                    var c, d = u.get("formatter"), f = u.get("position"), g = t.getDataParams(e, i);
                    if (d) {
                        if ("string" == typeof d)c = p.formatTpl(d, g); else if ("function" == typeof d) {
                            var m = this, v = "item_" + t.name + "_" + e, y = function (t, e) {
                                t === m._ticket && (l.setContent(e), h(f, n.offsetX, n.offsetY, l, g, n.target, o))
                            };
                            m._ticket = v, c = d(g, v, y)
                        }
                    } else c = t.formatTooltip(e, !1, i);
                    l.show(u), l.setContent(c), h(f, n.offsetX, n.offsetY, l, g, n.target, o)
                }
            }, _showAxisPointer: function (t) {
                if (t) {
                    var e = this._axisPointers[t];
                    e && f.each(e, function (t) {
                        t.show()
                    })
                } else this.group.eachChild(function (t) {
                    t.show()
                }), this.group.show()
            }, _resetLastHover: function () {
                var t = this._lastHover;
                t.payloadBatch && this._api.dispatchAction({
                    type: "downplay",
                    batch: t.payloadBatch
                }), this._lastHover = {}
            }, _hideAxisPointer: function (t) {
                if (t) {
                    var e = this._axisPointers[t];
                    e && f.each(e, function (t) {
                        t.hide()
                    })
                } else this.group.hide()
            }, _hide: function () {
                clearTimeout(this._showTimeout), this._hideAxisPointer(), this._resetLastHover(), this._alwaysShowContent || this._tooltipContent.hideLater(this._tooltipModel.get("hideDelay")), this._api.dispatchAction({
                    type: "hideTip",
                    from: this.uid
                }), this._lastX = this._lastY = null
            }, dispose: function (t, e) {
                if (!v.node) {
                    var i = e.getZr();
                    this._tooltipContent.hide(), i.off("click", this._tryShow), i.off("mousemove", this._mousemove), i.off("mouseout", this._hide), i.off("globalout", this._hide), e.off("showTip", this._manuallyShowTip), e.off("hideTip", this._manuallyHideTip)
                }
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.get("center"), n = t.get("radius"), o = e.getWidth(), a = e.getHeight(), r = s.parsePercent;
            this.cx = r(i[0], o), this.cy = r(i[1], a);
            var l = this.getRadiusAxis(), h = Math.min(o, a) / 2;
            l.setExtent(0, r(n, h))
        }

        function o(t, e) {
            var i = this, n = i.getAngleAxis(), o = i.getRadiusAxis();
            if (n.scale.setExtent(1 / 0, -(1 / 0)), o.scale.setExtent(1 / 0, -(1 / 0)), t.eachSeries(function (t) {
                    if (t.coordinateSystem === i) {
                        var e = t.getData();
                        o.scale.unionExtent(e.getDataExtent("radius", "category" !== o.type)), n.scale.unionExtent(e.getDataExtent("angle", "category" !== n.type))
                    }
                }), h(n, n.model), h(o, o.model), "category" === n.type && !n.onBand) {
                var a = n.getExtent(), r = 360 / n.scale.count();
                n.inverse ? a[1] += r : a[1] -= r, n.setExtent(a[0], a[1])
            }
        }

        function a(t, e) {
            if (t.type = e.get("type"), t.scale = l.createScaleByModel(e), t.onBand = e.get("boundaryGap") && "category" === t.type, "angleAxis" === e.mainType) {
                var i = e.get("startAngle");
                t.inverse = e.get("inverse") ^ e.get("clockwise"), t.setExtent(i, i + (t.inverse ? -360 : 360))
            }
            e.axis = t, t.model = e
        }

        var r = i(341), s = i(4), l = i(24), h = l.niceScaleExtent;
        i(342);
        var u = {
            dimensions: r.prototype.dimensions, create: function (t, e) {
                var i = [];
                return t.eachComponent("polar", function (t, s) {
                    var l = new r(s);
                    l.resize = n, l.update = o;
                    var h = l.getRadiusAxis(), u = l.getAngleAxis(), c = t.findAxisModel("radiusAxis"), d = t.findAxisModel("angleAxis");
                    a(h, c), a(u, d), l.resize(t, e), i.push(l), t.coordinateSystem = l
                }), t.eachSeries(function (t) {
                    "polar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("polarIndex")])
                }), i
            }
        };
        i(23).register("polar", u)
    }, function (t, e) {
        function i() {
            h = !1, r.length ? l = r.concat(l) : u = -1, l.length && n()
        }

        function n() {
            if (!h) {
                var t = setTimeout(i);
                h = !0;
                for (var e = l.length; e;) {
                    for (r = l, l = []; ++u < e;)r && r[u].run();
                    u = -1, e = l.length
                }
                r = null, h = !1, clearTimeout(t)
            }
        }

        function o(t, e) {
            this.fun = t, this.array = e
        }

        function a() {
        }

        var r, s = t.exports = {}, l = [], h = !1, u = -1;
        s.nextTick = function (t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)for (var i = 1; i < arguments.length; i++)e[i - 1] = arguments[i];
            l.push(new o(t, e)), 1 !== l.length || h || setTimeout(n, 0)
        }, o.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = a, s.addListener = a, s.once = a, s.off = a, s.removeListener = a, s.removeAllListeners = a, s.emit = a, s.binding = function (t) {
            throw new Error("process.binding is not supported")
        }, s.cwd = function () {
            return "/"
        }, s.chdir = function (t) {
            throw new Error("process.chdir is not supported")
        }, s.umask = function () {
            return 0
        }
    }, function (t, e, i) {
        function n(t) {
            return parseInt(t, 10)
        }

        function o(t, e) {
            s.initVML(), this.root = t, this.storage = e;
            var i = document.createElement("div"), n = document.createElement("div");
            i.style.cssText = "display:inline-block;overflow:hidden;position:relative;width:300px;height:150px;", n.style.cssText = "position:absolute;left:0;top:0;", t.appendChild(i), this._vmlRoot = n, this._vmlViewport = i, this.resize();
            var o = e.delFromMap, a = e.addToMap;
            e.delFromMap = function (t) {
                var i = e.get(t);
                o.call(e, t), i && i.onRemove && i.onRemove(n)
            }, e.addToMap = function (t) {
                t.onAdd && t.onAdd(n), a.call(e, t)
            }, this._firstPaint = !0
        }

        function a(t) {
            return function () {
                r('In IE8.0 VML mode painter not support method "' + t + '"')
            }
        }

        var r = i(45), s = i(158);
        o.prototype = {
            constructor: o, getViewportRoot: function () {
                return this._vmlViewport
            }, refresh: function () {
                var t = this.storage.getDisplayList(!0, !0);
                this._paintList(t)
            }, _paintList: function (t) {
                for (var e = this._vmlRoot, i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.invisible || n.ignore ? (n.__alreadyNotVisible || n.onRemove(e), n.__alreadyNotVisible = !0) : (n.__alreadyNotVisible && n.onAdd(e), n.__alreadyNotVisible = !1, n.__dirty && (n.beforeBrush && n.beforeBrush(), (n.brushVML || n.brush).call(n, e), n.afterBrush && n.afterBrush())), n.__dirty = !1
                }
                this._firstPaint && (this._vmlViewport.appendChild(e), this._firstPaint = !1)
            }, resize: function () {
                var t = this._getWidth(), e = this._getHeight();
                if (this._width != t && this._height != e) {
                    this._width = t, this._height = e;
                    var i = this._vmlViewport.style;
                    i.width = t + "px", i.height = e + "px"
                }
            }, dispose: function () {
                this.root.innerHTML = "", this._vmlRoot = this._vmlViewport = this.storage = null
            }, getWidth: function () {
                return this._width
            }, getHeight: function () {
                return this._height
            }, _getWidth: function () {
                var t = this.root, e = t.currentStyle;
                return (t.clientWidth || n(e.width)) - n(e.paddingLeft) - n(e.paddingRight) | 0
            }, _getHeight: function () {
                var t = this.root, e = t.currentStyle;
                return (t.clientHeight || n(e.height)) - n(e.paddingTop) - n(e.paddingBottom) | 0
            }
        };
        for (var l = ["getLayer", "insertLayer", "eachLayer", "eachBuildinLayer", "eachOtherLayer", "getLayers", "modLayer", "delLayer", "clearLayer", "toDataURL", "pathToImage"], h = 0; h < l.length; h++) {
            var u = l[h];
            o.prototype[u] = a(u)
        }
        t.exports = o
    }, function (t, e, i) {
        if (!i(14).canvasSupported) {
            var n = i(5), o = i(8), a = i(28).CMD, r = i(22), s = i(18), l = i(67), h = i(37), u = i(46), c = i(66), d = i(6), f = i(17), p = i(158), g = Math.round, m = Math.sqrt, v = Math.abs, y = Math.cos, x = Math.sin, _ = Math.max, b = n.applyTransform, w = ",", S = "progid:DXImageTransform.Microsoft", M = 21600, A = M / 2, I = 1e5, T = 1e3, L = function (t) {
                t.style.cssText = "position:absolute;left:0;top:0;width:1px;height:1px;", t.coordsize = M + "," + M, t.coordorigin = "0,0"
            }, C = function (t) {
                return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
            }, D = function (t, e, i) {
                return "rgb(" + [t, e, i].join(",") + ")"
            }, P = function (t, e) {
                e && t && e.parentNode !== t && t.appendChild(e)
            }, k = function (t, e) {
                e && t && e.parentNode === t && t.removeChild(e)
            }, z = function (t, e, i) {
                return (parseFloat(t) || 0) * I + (parseFloat(e) || 0) * T + i
            }, E = function (t, e) {
                return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
            }, O = function (t, e, i) {
                var n = r.parse(e);
                i = +i, isNaN(i) && (i = 1), n && (t.color = D(n[0], n[1], n[2]), t.opacity = i * n[3])
            }, R = function (t) {
                var e = r.parse(t);
                return [D(e[0], e[1], e[2]), e[3]]
            }, V = function (t, e, i) {
                var n = e.fill;
                if (null != n)if (n instanceof f) {
                    var o, a = 0, r = [0, 0], s = 0, l = 1, h = i.getBoundingRect(), u = h.width, c = h.height;
                    if ("linear" === n.type) {
                        o = "gradient";
                        var d = i.transform, p = [n.x * u, n.y * c], g = [n.x2 * u, n.y2 * c];
                        d && (b(p, p, d), b(g, g, d));
                        var m = g[0] - p[0], v = g[1] - p[1];
                        a = 180 * Math.atan2(m, v) / Math.PI, 0 > a && (a += 360), 1e-6 > a && (a = 0)
                    } else {
                        o = "gradientradial";
                        var p = [n.x * u, n.y * c], d = i.transform, y = i.scale, x = u, w = c;
                        r = [(p[0] - h.x) / x, (p[1] - h.y) / w], d && b(p, p, d), x /= y[0] * M, w /= y[1] * M;
                        var S = _(x, w);
                        s = 0 / S, l = 2 * n.r / S - s
                    }
                    var A = n.colorStops.slice();
                    A.sort(function (t, e) {
                        return t.offset - e.offset
                    });
                    for (var I = A.length, T = [], L = [], C = 0; I > C; C++) {
                        var D = A[C], P = R(D.color);
                        L.push(D.offset * l + s + " " + P[0]), 0 !== C && C !== I - 1 || T.push(P)
                    }
                    if (I >= 2) {
                        var k = T[0][0], z = T[1][0], E = T[0][1] * e.opacity, V = T[1][1] * e.opacity;
                        t.type = o, t.method = "none", t.focus = "100%", t.angle = a, t.color = k, t.color2 = z, t.colors = L.join(","), t.opacity = V, t.opacity2 = E
                    }
                    "radial" === o && (t.focusposition = r.join(","))
                } else O(t, n, e.opacity)
            }, N = function (t, e) {
                null != e.lineJoin && (t.joinstyle = e.lineJoin), null != e.miterLimit && (t.miterlimit = e.miterLimit * M), null != e.lineCap && (t.endcap = e.lineCap), null != e.lineDash && (t.dashstyle = e.lineDash.join(" ")), null == e.stroke || e.stroke instanceof f || O(t, e.stroke, e.opacity)
            }, B = function (t, e, i, n) {
                var o = "fill" == e, a = t.getElementsByTagName(e)[0];
                null != i[e] && "none" !== i[e] && (o || !o && i.lineWidth) ? (t[o ? "filled" : "stroked"] = "true", i[e]instanceof f && k(t, a), a || (a = p.createNode(e)), o ? V(a, i, n) : N(a, i), P(t, a)) : (t[o ? "filled" : "stroked"] = "false", k(t, a))
            }, G = [[], [], []], F = function (t, e) {
                var i, n, o, r, s, l, h = a.M, u = a.C, c = a.L, d = a.A, f = a.Q, p = [];
                for (r = 0; r < t.length;) {
                    switch (o = t[r++], n = "", i = 0, o) {
                        case h:
                            n = " m ", i = 1, s = t[r++], l = t[r++], G[0][0] = s, G[0][1] = l;
                            break;
                        case c:
                            n = " l ", i = 1, s = t[r++], l = t[r++], G[0][0] = s, G[0][1] = l;
                            break;
                        case f:
                        case u:
                            n = " c ", i = 3;
                            var v, _, S = t[r++], I = t[r++], T = t[r++], L = t[r++];
                            o === f ? (v = T, _ = L, T = (T + 2 * S) / 3, L = (L + 2 * I) / 3, S = (s + 2 * S) / 3, I = (l + 2 * I) / 3) : (v = t[r++], _ = t[r++]), G[0][0] = S, G[0][1] = I, G[1][0] = T, G[1][1] = L, G[2][0] = v, G[2][1] = _, s = v, l = _;
                            break;
                        case d:
                            var C = 0, D = 0, P = 1, k = 1, z = 0;
                            e && (C = e[4], D = e[5], P = m(e[0] * e[0] + e[1] * e[1]), k = m(e[2] * e[2] + e[3] * e[3]), z = Math.atan2(-e[1] / k, e[0] / P));
                            var E = t[r++], O = t[r++], R = t[r++], V = t[r++], N = t[r++] + z, B = t[r++] + N + z;
                            r++;
                            var F = t[r++], H = E + y(N) * R, W = O + x(N) * V, S = E + y(B) * R, I = O + x(B) * V, Z = F ? " wa " : " at ";
                            Math.abs(H - S) < 1e-10 && (Math.abs(B - N) > .01 ? F && (H += 270 / M) : Math.abs(W - O) < 1e-10 ? F && E > H || !F && H > E ? I -= 270 / M : I += 270 / M : F && O > W || !F && W > O ? S += 270 / M : S -= 270 / M), p.push(Z, g(((E - R) * P + C) * M - A), w, g(((O - V) * k + D) * M - A), w, g(((E + R) * P + C) * M - A), w, g(((O + V) * k + D) * M - A), w, g((H * P + C) * M - A), w, g((W * k + D) * M - A), w, g((S * P + C) * M - A), w, g((I * k + D) * M - A)), s = S, l = I;
                            break;
                        case a.R:
                            var q = G[0], j = G[1];
                            q[0] = t[r++], q[1] = t[r++], j[0] = q[0] + t[r++], j[1] = q[1] + t[r++], e && (b(q, q, e), b(j, j, e)), q[0] = g(q[0] * M - A), j[0] = g(j[0] * M - A), q[1] = g(q[1] * M - A), j[1] = g(j[1] * M - A), p.push(" m ", q[0], w, q[1], " l ", j[0], w, q[1], " l ", j[0], w, j[1], " l ", q[0], w, j[1]);
                            break;
                        case a.Z:
                            p.push(" x ")
                    }
                    if (i > 0) {
                        p.push(n);
                        for (var U = 0; i > U; U++) {
                            var X = G[U];
                            e && b(X, X, e), p.push(g(X[0] * M - A), w, g(X[1] * M - A), i - 1 > U ? w : "")
                        }
                    }
                }
                return p.join("")
            };
            d.prototype.brushVML = function (t) {
                var e = this.style, i = this._vmlEl;
                i || (i = p.createNode("shape"), L(i), this._vmlEl = i), B(i, "fill", e, this), B(i, "stroke", e, this);
                var n = this.transform, o = null != n, a = i.getElementsByTagName("stroke")[0];
                if (a) {
                    var r = e.lineWidth;
                    if (o && !e.strokeNoScale) {
                        var s = n[0] * n[3] - n[1] * n[2];
                        r *= m(v(s))
                    }
                    a.weight = r + "px"
                }
                var l = this.path;
                this.__dirtyPath && (l.beginPath(), this.buildPath(l, this.shape), l.toStatic(), this.__dirtyPath = !1), i.path = F(l.data, this.transform), i.style.zIndex = z(this.zlevel, this.z, this.z2), P(t, i), e.text ? this.drawRectText(t, this.getBoundingRect()) : this.removeRectText(t)
            }, d.prototype.onRemove = function (t) {
                k(t, this._vmlEl), this.removeRectText(t)
            }, d.prototype.onAdd = function (t) {
                P(t, this._vmlEl), this.appendRectText(t)
            };
            var H = function (t) {
                return "object" == typeof t && t.tagName && "IMG" === t.tagName.toUpperCase()
            };
            u.prototype.brushVML = function (t) {
                var e, i, n = this.style, o = n.image;
                if (H(o)) {
                    var a = o.src;
                    if (a === this._imageSrc)e = this._imageWidth, i = this._imageHeight; else {
                        var r = o.runtimeStyle, s = r.width, l = r.height;
                        r.width = "auto", r.height = "auto", e = o.width, i = o.height, r.width = s, r.height = l, this._imageSrc = a, this._imageWidth = e, this._imageHeight = i
                    }
                    o = a
                } else o === this._imageSrc && (e = this._imageWidth, i = this._imageHeight);
                if (o) {
                    var h = n.x || 0, u = n.y || 0, c = n.width, d = n.height, f = n.sWidth, v = n.sHeight, y = n.sx || 0, x = n.sy || 0, M = f && v, A = this._vmlEl;
                    A || (A = p.doc.createElement("div"), L(A), this._vmlEl = A);
                    var I, T = A.style, C = !1, D = 1, k = 1;
                    if (this.transform && (I = this.transform, D = m(I[0] * I[0] + I[1] * I[1]), k = m(I[2] * I[2] + I[3] * I[3]), C = I[1] || I[2]), C) {
                        var E = [h, u], O = [h + c, u], R = [h, u + d], V = [h + c, u + d];
                        b(E, E, I), b(O, O, I), b(R, R, I), b(V, V, I);
                        var N = _(E[0], O[0], R[0], V[0]), B = _(E[1], O[1], R[1], V[1]), G = [];
                        G.push("M11=", I[0] / D, w, "M12=", I[2] / k, w, "M21=", I[1] / D, w, "M22=", I[3] / k, w, "Dx=", g(h * D + I[4]), w, "Dy=", g(u * k + I[5])), T.padding = "0 " + g(N) + "px " + g(B) + "px 0", T.filter = S + ".Matrix(" + G.join("") + ", SizingMethod=clip)"
                    } else I && (h = h * D + I[4], u = u * k + I[5]), T.filter = "", T.left = g(h) + "px", T.top = g(u) + "px";
                    var F = this._imageEl, W = this._cropEl;
                    F || (F = p.doc.createElement("div"), this._imageEl = F);
                    var Z = F.style;
                    if (M) {
                        if (e && i)Z.width = g(D * e * c / f) + "px", Z.height = g(k * i * d / v) + "px"; else {
                            var q = new Image, j = this;
                            q.onload = function () {
                                q.onload = null, e = q.width, i = q.height, Z.width = g(D * e * c / f) + "px", Z.height = g(k * i * d / v) + "px", j._imageWidth = e, j._imageHeight = i, j._imageSrc = o
                            }, q.src = o
                        }
                        W || (W = p.doc.createElement("div"), W.style.overflow = "hidden", this._cropEl = W);
                        var U = W.style;
                        U.width = g((c + y * c / f) * D), U.height = g((d + x * d / v) * k), U.filter = S + ".Matrix(Dx=" + -y * c / f * D + ",Dy=" + -x * d / v * k + ")", W.parentNode || A.appendChild(W), F.parentNode != W && W.appendChild(F)
                    } else Z.width = g(D * c) + "px", Z.height = g(k * d) + "px", A.appendChild(F), W && W.parentNode && (A.removeChild(W), this._cropEl = null);
                    var X = "", Y = n.opacity;
                    1 > Y && (X += ".Alpha(opacity=" + g(100 * Y) + ") "), X += S + ".AlphaImageLoader(src=" + o + ", SizingMethod=scale)", Z.filter = X, A.style.zIndex = z(this.zlevel, this.z, this.z2), P(t, A), n.text && this.drawRectText(t, this.getBoundingRect())
                }
            }, u.prototype.onRemove = function (t) {
                k(t, this._vmlEl), this._vmlEl = null, this._cropEl = null, this._imageEl = null, this.removeRectText(t)
            }, u.prototype.onAdd = function (t) {
                P(t, this._vmlEl), this.appendRectText(t)
            };
            var W, Z = "normal", q = {}, j = 0, U = 100, X = document.createElement("div"), Y = function (t) {
                var e = q[t];
                if (!e) {
                    j > U && (j = 0, q = {});
                    var i, n = X.style;
                    try {
                        n.font = t, i = n.fontFamily.split(",")[0]
                    } catch (o) {
                    }
                    e = {
                        style: n.fontStyle || Z,
                        variant: n.fontVariant || Z,
                        weight: n.fontWeight || Z,
                        size: 0 | parseFloat(n.fontSize || 12),
                        family: i || "Microsoft YaHei"
                    }, q[t] = e, j++
                }
                return e
            };
            s.measureText = function (t, e) {
                var i = p.doc;
                W || (W = i.createElement("div"), W.style.cssText = "position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;", p.doc.body.appendChild(W));
                try {
                    W.style.font = e
                } catch (n) {
                }
                return W.innerHTML = "", W.appendChild(i.createTextNode(t)), {width: W.offsetWidth}
            };
            for (var K = new o, Q = function (t, e, i, n) {
                var o = this.style, a = o.text;
                if (a) {
                    var r, l, h = o.textAlign, u = Y(o.textFont), c = u.style + " " + u.variant + " " + u.weight + " " + u.size + 'px "' + u.family + '"', d = o.textBaseline, f = o.textVerticalAlign;
                    i = i || s.getBoundingRect(a, c, h, d);
                    var m = this.transform;
                    if (m && !n && (K.copy(e), K.applyTransform(m), e = K), n)r = e.x, l = e.y; else {
                        var v = o.textPosition, y = o.textDistance;
                        if (v instanceof Array)r = e.x + E(v[0], e.width), l = e.y + E(v[1], e.height), h = h || "left", d = d || "top"; else {
                            var x = s.adjustTextPositionOnRect(v, e, i, y);
                            r = x.x, l = x.y, h = h || x.textAlign, d = d || x.textBaseline
                        }
                    }
                    if (f) {
                        switch (f) {
                            case"middle":
                                l -= i.height / 2;
                                break;
                            case"bottom":
                                l -= i.height
                        }
                        d = "top"
                    }
                    var _ = u.size;
                    switch (d) {
                        case"hanging":
                        case"top":
                            l += _ / 1.75;
                            break;
                        case"middle":
                            break;
                        default:
                            l -= _ / 2.25
                    }
                    switch (h) {
                        case"left":
                            break;
                        case"center":
                            r -= i.width / 2;
                            break;
                        case"right":
                            r -= i.width
                    }
                    var S, M, A, I = p.createNode, T = this._textVmlEl;
                    T ? (A = T.firstChild, S = A.nextSibling, M = S.nextSibling) : (T = I("line"), S = I("path"), M = I("textpath"), A = I("skew"), M.style["v-text-align"] = "left", L(T), S.textpathok = !0, M.on = !0, T.from = "0 0", T.to = "1000 0.05", P(T, A), P(T, S), P(T, M), this._textVmlEl = T);
                    var D = [r, l], k = T.style;
                    m && n ? (b(D, D, m), A.on = !0, A.matrix = m[0].toFixed(3) + w + m[2].toFixed(3) + w + m[1].toFixed(3) + w + m[3].toFixed(3) + ",0,0", A.offset = (g(D[0]) || 0) + "," + (g(D[1]) || 0), A.origin = "0 0", k.left = "0px", k.top = "0px") : (A.on = !1, k.left = g(r) + "px", k.top = g(l) + "px"), M.string = C(a);
                    try {
                        M.style.font = c
                    } catch (O) {
                    }
                    B(T, "fill", {
                        fill: n ? o.fill : o.textFill,
                        opacity: o.opacity
                    }, this), B(T, "stroke", {
                        stroke: n ? o.stroke : o.textStroke,
                        opacity: o.opacity,
                        lineDash: o.lineDash
                    }, this), T.style.zIndex = z(this.zlevel, this.z, this.z2), P(t, T)
                }
            }, $ = function (t) {
                k(t, this._textVmlEl), this._textVmlEl = null
            }, J = function (t) {
                P(t, this._textVmlEl)
            }, tt = [l, h, u, d, c], et = 0; et < tt.length; et++) {
                var it = tt[et].prototype;
                it.drawRectText = Q, it.removeRectText = $, it.appendRectText = J
            }
            c.prototype.brushVML = function (t) {
                var e = this.style;
                e.text ? this.drawRectText(t, {
                    x: e.x || 0,
                    y: e.y || 0,
                    width: 0,
                    height: 0
                }, this.getBoundingRect(), !0) : this.removeRectText(t)
            }, c.prototype.onRemove = function (t) {
                this.removeRectText(t);
            }, c.prototype.onAdd = function (t) {
                this.appendRectText(t)
            }
        }
    }, function (t, e, i) {
        i(205), i(68).registerPainter("vml", i(204))
    }, function (t, e, i) {
        var n = i(1), o = i(208), a = i(2);
        a.registerAction({type: "geoRoam", event: "geoRoam", update: "updateLayout"}, function (t, e) {
            var i = t.componentType || "series";
            e.eachComponent({mainType: i, query: t}, function (e) {
                var a = e.coordinateSystem;
                if ("geo" === a.type) {
                    var r = o.updateCenterAndZoom(a, t, e.get("scaleLimit"));
                    e.setCenter && e.setCenter(r.center), e.setZoom && e.setZoom(r.zoom), "series" === i && n.each(e.seriesGroup, function (t) {
                        t.setCenter(r.center), t.setZoom(r.zoom)
                    })
                }
            })
        })
    }, function (t, e) {
        var i = {};
        i.updateCenterAndZoom = function (t, e, i) {
            var n = t.getZoom(), o = t.getCenter(), a = e.zoom, r = t.dataToPoint(o);
            if (null != e.dx && null != e.dy) {
                r[0] -= e.dx, r[1] -= e.dy;
                var o = t.pointToData(r);
                t.setCenter(o)
            }
            if (null != a) {
                if (i) {
                    var s = i.min || 0, l = i.max || 1 / 0;
                    a = Math.max(Math.min(n * a, l), s) / n
                }
                t.scale[0] *= a, t.scale[1] *= a;
                var h = t.position, u = (e.originX - h[0]) * (a - 1), c = (e.originY - h[1]) * (a - 1);
                h[0] -= u, h[1] -= c, t.updateTransform();
                var o = t.pointToData(r);
                t.setCenter(o), t.setZoom(a * n)
            }
            return {center: t.getCenter(), zoom: t.getZoom()}
        }, t.exports = i
    }, function (t, e, i) {
        var n = i(5);
        t.exports = function (t) {
            var e = t.coordinateSystem;
            if (!e || "view" === e.type) {
                var i = e.getBoundingRect(), o = t.getData(), a = o.graph, r = 0, s = o.getSum("value"), l = 2 * Math.PI / (s || o.count()), h = i.width / 2 + i.x, u = i.height / 2 + i.y, c = Math.min(i.width, i.height) / 2;
                a.eachNode(function (t) {
                    var e = t.getValue("value");
                    r += l * (s ? e : 2) / 2, t.setLayout([c * Math.cos(r) + h, c * Math.sin(r) + u]), r += l * (s ? e : 2) / 2
                }), a.eachEdge(function (t) {
                    var e, i = t.getModel().get("lineStyle.normal.curveness") || 0, o = n.clone(t.node1.getLayout()), a = n.clone(t.node2.getLayout()), r = (o[0] + a[0]) / 2, s = (o[1] + a[1]) / 2;
                    i > 0 && (i *= 3, e = [h * i + r * (1 - i), u * i + s * (1 - i)]), t.setLayout([o, a, e])
                })
            }
        }
    }, function (t, e, i) {
        var n = i(5);
        t.exports = function (t) {
            t.eachEdge(function (t) {
                var e = t.getModel().get("lineStyle.normal.curveness") || 0, i = n.clone(t.node1.getLayout()), o = n.clone(t.node2.getLayout()), a = [i, o];
                e > 0 && a.push([(i[0] + o[0]) / 2 - (i[1] - o[1]) * e, (i[1] + o[1]) / 2 - (o[0] - i[0]) * e]), t.setLayout(a)
            })
        }
    }, function (t, e, i) {
        var n = i(210);
        t.exports = function (t) {
            var e = t.coordinateSystem;
            if (!e || "view" === e.type) {
                var i = t.getGraph();
                i.eachNode(function (t) {
                    var e = t.getModel();
                    t.setLayout([+e.get("x"), +e.get("y")])
                }), n(i)
            }
        }
    }, function (t, e, i) {
        var n = i(15), o = i(347), a = i(225), r = i(31), s = i(23), l = i(1), h = i(35);
        t.exports = function (t, e, i, u, c) {
            for (var d = new o(u), f = 0; f < t.length; f++)d.addNode(l.retrieve(t[f].id, t[f].name, f), f);
            for (var p = [], g = [], f = 0; f < e.length; f++) {
                var m = e[f], v = m.source, y = m.target;
                d.addEdge(v, y, f) && (g.push(m), p.push(l.retrieve(m.id, v + " > " + y)))
            }
            var x, _ = i.get("coordinateSystem");
            if ("cartesian2d" === _ || "polar" === _)x = h(t, i, i.ecModel); else {
                var b = s.get(_), w = r((b && "view" !== b.type ? b.dimensions || [] : []).concat(["value"]), t);
                x = new n(w, i), x.initData(t)
            }
            var S = new n(["value"], i);
            return S.initData(g, p), c && c(x, S), a({
                mainData: x,
                struct: d,
                structAttr: "graph",
                datas: {node: x, edge: S},
                datasAttr: {node: "data", edge: "edgeData"}
            }), d.update(), d
        }
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.getItemStyle(), n = t.get("areaColor");
            return n && (i.fill = n), i
        }

        function o(t, e, i, n) {
            e.off("click"), t.get("selectedMode") && e.on("click", function (o) {
                for (var r = o.target; !r.__region;)r = r.parent;
                if (r) {
                    var s = r.__region, l = {
                        type: ("geo" === t.mainType ? "geo" : "map") + "ToggleSelect",
                        name: s.name,
                        from: n.uid
                    };
                    l[t.mainType + "Id"] = t.id, i.dispatchAction(l), a(t, e)
                }
            })
        }

        function a(t, e) {
            e.eachChild(function (e) {
                e.__region && e.trigger(t.isSelected(e.__region.name) ? "emphasis" : "normal")
            })
        }

        function r(t, e) {
            var i = new l.Group;
            this._controller = new s(t.getZr(), e ? i : null, null), this.group = i, this._updateGroup = e
        }

        var s = i(70), l = i(3), h = i(1);
        r.prototype = {
            constructor: r, draw: function (t, e, i, r, s) {
                var u = t.getData && t.getData(), c = t.coordinateSystem, d = this.group, f = c.scale, p = {
                    position: c.position,
                    scale: f
                };
                !d.childAt(0) || s ? d.attr(p) : l.updateProps(d, p, t), d.removeAll();
                var g = ["itemStyle", "normal"], m = ["itemStyle", "emphasis"], v = ["label", "normal"], y = ["label", "emphasis"];
                h.each(c.regions, function (e) {
                    var i = new l.Group, o = new l.CompoundPath({shape: {paths: []}});
                    i.add(o);
                    var a, r = t.getRegionModel(e.name) || t, s = r.getModel(g), c = r.getModel(m), p = n(s, f), x = n(c, f), _ = r.getModel(v), b = r.getModel(y);
                    if (u) {
                        a = u.indexOfName(e.name);
                        var w = u.getItemVisual(a, "color", !0);
                        w && (p.fill = w)
                    }
                    var S = _.getModel("textStyle"), M = b.getModel("textStyle");
                    h.each(e.contours, function (t) {
                        var e = new l.Polygon({shape: {points: t}});
                        o.shape.paths.push(e)
                    }), o.setStyle(p), o.style.strokeNoScale = !0, o.culling = !0;
                    var A = _.get("show"), I = b.get("show"), T = u && isNaN(u.get("value", a)), L = u && u.getItemLayout(a);
                    if (!u || T && (A || I) || L && L.showLabel) {
                        var C = u ? a : e.name, D = t.getFormattedLabel(C, "normal"), P = t.getFormattedLabel(C, "emphasis"), k = new l.Text({
                            style: {
                                text: A ? D || e.name : "",
                                fill: S.getTextColor(),
                                textFont: S.getFont(),
                                textAlign: "center",
                                textVerticalAlign: "middle"
                            },
                            hoverStyle: {text: I ? P || e.name : "", fill: M.getTextColor(), textFont: M.getFont()},
                            position: e.center.slice(),
                            scale: [1 / f[0], 1 / f[1]],
                            z2: 10,
                            silent: !0
                        });
                        i.add(k)
                    }
                    if (u)u.setItemGraphicEl(a, i); else {
                        var r = t.getRegionModel(e.name);
                        o.eventData = {
                            componentType: "geo",
                            geoIndex: t.componentIndex,
                            name: e.name,
                            region: r && r.option || {}
                        }
                    }
                    i.__region = e, l.setHoverStyle(i, x), d.add(i)
                }), this._updateController(t, e, i), o(t, d, i, r), a(t, d)
            }, remove: function () {
                this.group.removeAll(), this._controller.dispose()
            }, _updateController: function (t, e, i) {
                function n() {
                    var e = {type: "geoRoam", componentType: r};
                    return e[r + "Id"] = t.id, e
                }

                var o = t.coordinateSystem, a = this._controller;
                a.zoomLimit = t.get("scaleLimit"), a.zoom = o.getZoom(), a.enable(t.get("roam") || !1);
                var r = t.mainType;
                a.off("pan").on("pan", function (t, e) {
                    i.dispatchAction(h.extend(n(), {dx: t, dy: e}))
                }), a.off("zoom").on("zoom", function (t, e, o) {
                    if (i.dispatchAction(h.extend(n(), {zoom: t, originX: e, originY: o})), this._updateGroup) {
                        var a = this.group, r = a.scale;
                        a.traverse(function (t) {
                            "text" === t.type && t.attr("scale", [1 / r[0], 1 / r[1]])
                        })
                    }
                }, this), a.rectProvider = function () {
                    return o.getViewRectAfterRoam()
                }
            }
        }, t.exports = r
    }, function (t, e, i) {
        i(224), i(337), i(307);
        var n = i(2);
        n.extendComponentView({type: "parallel"}), n.registerPreprocessor(i(338))
    }, function (t, e, i) {
        function n(t, e) {
            var i, n = ["inRange", "outOfRange", "target", "controller", "color"];
            o.each(n, function (t) {
                e.hasOwnProperty(t) && (i = !0)
            }), i && o.each(n, function (i) {
                e.hasOwnProperty(i) ? t[i] = o.clone(e[i]) : delete t[i]
            })
        }

        var o = i(1), a = i(14), r = i(2), s = i(7), l = i(351), h = i(73), u = h.mapVisual, c = h.eachVisual, d = i(4), f = o.isArray, p = o.each, g = d.asc, m = d.linearMap, v = r.extendComponentModel({
            type: "visualMap",
            dependencies: ["series"],
            dataBound: [-(1 / 0), 1 / 0],
            stateList: ["inRange", "outOfRange"],
            layoutMode: {type: "box", ignoreSize: !0},
            defaultOption: {
                show: !0,
                zlevel: 0,
                z: 4,
                min: 0,
                max: 200,
                dimension: null,
                inRange: null,
                outOfRange: null,
                left: 0,
                right: null,
                top: null,
                bottom: 0,
                itemWidth: null,
                itemHeight: null,
                inverse: !1,
                orient: "vertical",
                seriesIndex: null,
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                contentColor: "#5793f3",
                inactiveColor: "#aaa",
                borderWidth: 0,
                padding: 5,
                textGap: 10,
                precision: 0,
                color: ["#bf444c", "#d88273", "#f6efa6"],
                formatter: null,
                text: null,
                textStyle: {color: "#333"}
            },
            init: function (t, e, i) {
                this._dataExtent, this.controllerVisuals = {}, this.targetVisuals = {}, this.textStyleModel, this.itemSize, this.mergeDefaultAndTheme(t, i), this.doMergeOption({}, !0)
            },
            mergeOption: function (t) {
                v.superApply(this, "mergeOption", arguments), this.doMergeOption(t, !1)
            },
            doMergeOption: function (t, e) {
                var i = this.option;
                !e && n(i, t), a.canvasSupported || (i.realtime = !1), this.textStyleModel = this.getModel("textStyle"), this.resetItemSize(), this.completeVisualOption()
            },
            formatValueText: function (t, e) {
                function i(t) {
                    return t === l[0] ? "min" : t === l[1] ? "max" : (+t).toFixed(s)
                }

                var n, a, r = this.option, s = r.precision, l = this.dataBound, h = r.formatter;
                return o.isArray(t) && (t = t.slice(), n = !0), a = e ? t : n ? [i(t[0]), i(t[1])] : i(t), o.isString(h) ? h.replace("{value}", n ? a[0] : a).replace("{value2}", n ? a[1] : a) : o.isFunction(h) ? n ? h(t[0], t[1]) : h(t) : n ? t[0] === l[0] ? "< " + a[1] : t[1] === l[1] ? "> " + a[0] : a[0] + " - " + a[1] : a
            },
            resetTargetSeries: function (t, e) {
                var i = this.option, n = null == i.seriesIndex;
                i.seriesIndex = n ? [] : s.normalizeToArray(i.seriesIndex), n && this.ecModel.eachSeries(function (t, e) {
                    var n = t.getData();
                    "list" === n.type && i.seriesIndex.push(e)
                })
            },
            resetExtent: function () {
                var t = this.option, e = g([t.min, t.max]);
                this._dataExtent = e
            },
            getDataDimension: function (t) {
                var e = this.option.dimension;
                return null != e ? e : t.dimensions.length - 1
            },
            getExtent: function () {
                return this._dataExtent.slice()
            },
            resetVisual: function (t) {
                function e(e, a) {
                    p(this.stateList, function (r) {
                        var s = a[r] || (a[r] = i()), l = this.option[e][r] || {};
                        p(l, function (i, a) {
                            if (h.isValidType(a)) {
                                var l = {type: a, dataExtent: n, visual: i};
                                t && t.call(this, l, r), s[a] = new h(l), "controller" === e && "opacity" === a && (l = o.clone(l), l.type = "colorAlpha", s.__hidden.__alphaForOpacity = new h(l))
                            }
                        }, this)
                    }, this)
                }

                function i() {
                    var t = function () {
                    };
                    t.prototype.__hidden = t.prototype;
                    var e = new t;
                    return e
                }

                var n = this.getExtent();
                e.call(this, "controller", this.controllerVisuals), e.call(this, "target", this.targetVisuals)
            },
            completeVisualOption: function () {
                function t(t) {
                    f(n.color) && !t.inRange && (t.inRange = {color: n.color.slice().reverse()}), p(this.stateList, function (e) {
                        var i = t[e];
                        if (o.isString(i)) {
                            var n = l.get(i, "active", d);
                            n ? (t[e] = {}, t[e][i] = n) : delete t[e]
                        }
                    }, this)
                }

                function e(t, e, i) {
                    var n = t[e], o = t[i];
                    n && !o && (o = t[i] = {}, p(n, function (t, e) {
                        if (h.isValidType(e)) {
                            var i = l.get(e, "inactive", d);
                            null != i && (o[e] = i, "color" !== e || o.hasOwnProperty("opacity") || o.hasOwnProperty("colorAlpha") || (o.opacity = [0, 0]))
                        }
                    }))
                }

                function i(t) {
                    var e = (t.inRange || {}).symbol || (t.outOfRange || {}).symbol, i = (t.inRange || {}).symbolSize || (t.outOfRange || {}).symbolSize, n = this.get("inactiveColor");
                    p(this.stateList, function (a) {
                        var r = this.itemSize, s = t[a];
                        s || (s = t[a] = {color: d ? n : [n]}), null == s.symbol && (s.symbol = e && o.clone(e) || (d ? "roundRect" : ["roundRect"])), null == s.symbolSize && (s.symbolSize = i && o.clone(i) || (d ? r[0] : [r[0], r[0]])), s.symbol = u(s.symbol, function (t) {
                            return "none" === t || "square" === t ? "roundRect" : t
                        });
                        var l = s.symbolSize;
                        if (null != l) {
                            var h = -(1 / 0);
                            c(l, function (t) {
                                t > h && (h = t)
                            }), s.symbolSize = u(l, function (t) {
                                return m(t, [0, h], [0, r[0]], !0)
                            })
                        }
                    }, this)
                }

                var n = this.option, a = {
                    inRange: n.inRange,
                    outOfRange: n.outOfRange
                }, r = n.target || (n.target = {}), s = n.controller || (n.controller = {});
                o.merge(r, a), o.merge(s, a);
                var d = this.isCategory();
                t.call(this, r), t.call(this, s), e.call(this, r, "inRange", "outOfRange"), e.call(this, r, "outOfRange", "inRange"), i.call(this, s)
            },
            eachTargetSeries: function (t, e) {
                o.each(this.option.seriesIndex, function (i) {
                    t.call(e, this.ecModel.getSeriesByIndex(i))
                }, this)
            },
            isCategory: function () {
                return !!this.option.categories
            },
            resetItemSize: function () {
                this.itemSize = [parseFloat(this.get("itemWidth")), parseFloat(this.get("itemHeight"))]
            },
            setSelected: o.noop,
            getValueState: o.noop
        });
        t.exports = v
    }, function (t, e, i) {
        var n = i(2), o = i(1), a = i(3), r = i(9), s = i(11), l = i(73);
        t.exports = n.extendComponentView({
            type: "visualMap",
            autoPositionValues: {left: 1, right: 1, top: 1, bottom: 1},
            init: function (t, e) {
                this.ecModel = t, this.api = e, this.visualMapModel, this._updatableShapes = {}
            },
            render: function (t, e, i, n) {
                return this.visualMapModel = t, t.get("show") === !1 ? void this.group.removeAll() : void this.doRender.apply(this, arguments)
            },
            renderBackground: function (t) {
                var e = this.visualMapModel, i = r.normalizeCssArray(e.get("padding") || 0), n = t.getBoundingRect();
                t.add(new a.Rect({
                    z2: -1,
                    silent: !0,
                    shape: {x: n.x - i[3], y: n.y - i[0], width: n.width + i[3] + i[1], height: n.height + i[0] + i[2]},
                    style: {
                        fill: e.get("backgroundColor"),
                        stroke: e.get("borderColor"),
                        lineWidth: e.get("borderWidth")
                    }
                }))
            },
            getControllerVisual: function (t, e, i) {
                function n(t) {
                    return h[t]
                }

                function a(t, e) {
                    h[t] = e
                }

                i = i || {};
                var r = i.forceState, s = this.visualMapModel, h = {};
                if ("symbol" === e && (h.symbol = s.get("itemSymbol")), "color" === e) {
                    var u = s.get("contentColor");
                    h.color = u
                }
                var c = s.controllerVisuals[r || s.getValueState(t)], d = l.prepareVisualTypes(c);
                return o.each(d, function (o) {
                    var r = c[o];
                    i.convertOpacityToAlpha && "opacity" === o && (o = "colorAlpha", r = c.__alphaForOpacity), l.dependsOn(o, e) && r && r.applyVisual(t, n, a)
                }), h[e]
            },
            positionGroup: function (t) {
                var e = this.visualMapModel, i = this.api;
                s.positionGroup(t, e.getBoxLayoutParams(), {width: i.getWidth(), height: i.getHeight()})
            },
            doRender: o.noop
        })
    }, function (t, e, i) {
        var n = i(11), o = i(1), a = i(48), r = {
            getItemAlign: function (t, e, i) {
                var o = t.option, a = o.align;
                if (null != a && "auto" !== a)return a;
                for (var r = {
                    width: e.getWidth(),
                    height: e.getHeight()
                }, s = "horizontal" === o.orient ? 1 : 0, l = [["left", "right", "width"], ["top", "bottom", "height"]], h = l[s], u = [0, null, 10], c = {}, d = 0; 3 > d; d++)c[l[1 - s][d]] = u[d], c[h[d]] = 2 === d ? i[0] : o[h[d]];
                var f = [["x", "width", 3], ["y", "height", 0]][s], p = n.getLayoutRect(c, r, o.padding);
                return h[(p.margin[f[2]] || 0) + p[f[0]] + .5 * p[f[1]] < .5 * r[f[1]] ? 0 : 1]
            }, convertDataIndicesToBatch: function (t) {
                var e = [];
                return o.each(t, function (t) {
                    o.each(t.dataIndices, function (i) {
                        e.push({seriesId: t.seriesId, dataIndex: i})
                    })
                }), e
            }, removeDuplicateBatch: function (t, e) {
                function i(t) {
                    return t.seriesId + "-" + t.dataIndex
                }

                function n(t) {
                    s[1].push(e[t])
                }

                function r(e) {
                    s[0].push(t[e])
                }

                var s = [[], []];
                return new a(t, e, i, i).add(n).update(o.noop).remove(r).execute(), s
            }
        };
        t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            return t && t.hasOwnProperty && t.hasOwnProperty(e)
        }

        var o = i(1), a = o.each;
        t.exports = function (t) {
            var e = t && t.visualMap;
            o.isArray(e) || (e = e ? [e] : []), a(e, function (t) {
                if (t) {
                    n(t, "splitList") && !n(t, "pieces") && (t.pieces = t.splitList, delete t.splitList);
                    var e = t.pieces;
                    e && o.isArray(e) && a(e, function (t) {
                        o.isObject(t) && (n(t, "start") && !n(t, "min") && (t.min = t.start), n(t, "end") && !n(t, "max") && (t.max = t.end))
                    })
                }
            })
        }
    }, function (t, e, i) {
        i(10).registerSubTypeDefaulter("visualMap", function (t) {
            return t.categories || (t.pieces ? t.pieces.length > 0 : t.splitNumber > 0) && !t.calculable ? "piecewise" : "continuous"
        })
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.targetVisuals, n = {};
            r.each(["inRange", "outOfRange"], function (t) {
                var e = a.prepareVisualTypes(i[t]);
                n[t] = e
            }), t.eachTargetSeries(function (e) {
                function o(t) {
                    return s.getItemVisual(r, t)
                }

                function a(t, e) {
                    s.setItemVisual(r, t, e)
                }

                var r, s = e.getData(), l = t.getDataDimension(s);
                s.each([l], function (e, s) {
                    r = s;
                    for (var l = t.getValueState(e), h = i[l], u = n[l], c = 0, d = u.length; d > c; c++) {
                        var f = u[c];
                        h[f] && h[f].applyVisual(e, o, a)
                    }
                }, !0)
            })
        }

        var o = i(2), a = i(73), r = i(1);
        o.registerVisualCoding("component", function (t) {
            t.eachComponent("visualMap", function (e) {
                n(e, t)
            })
        })
    }, function (t, e, i) {
        var n = i(2), o = {type: "selectDataRange", event: "dataRangeSelected", update: "update"};
        n.registerAction(o, function (t, e) {
            e.eachComponent({mainType: "visualMap", query: t}, function (e) {
                e.setSelected(t.selected)
            })
        })
    }, function (t, e, i) {
        function n() {
            s.call(this)
        }

        function o(t) {
            this.name = t, this.zoomLimit, s.call(this), this._roamTransform = new n, this._viewTransform = new n, this._center, this._zoom
        }

        var a = i(5), r = i(19), s = i(77), l = i(1), h = i(8), u = a.applyTransform;
        l.mixin(n, s), o.prototype = {
            constructor: o,
            type: "view",
            dimensions: ["x", "y"],
            setBoundingRect: function (t, e, i, n) {
                return this._rect = new h(t, e, i, n), this._rect
            },
            getBoundingRect: function () {
                return this._rect
            },
            setViewRect: function (t, e, i, n) {
                i = i, n = n, this.transformTo(t, e, i, n), this._viewRect = new h(t, e, i, n)
            },
            transformTo: function (t, e, i, n) {
                var o = this.getBoundingRect(), a = this._viewTransform;
                a.transform = o.calculateTransform(new h(t, e, i, n)), a.decomposeTransform(), this._updateTransform()
            },
            setCenter: function (t) {
                t && (this._center = t, this._updateCenterAndZoom())
            },
            setZoom: function (t) {
                t = t || 1;
                var e = this.zoomLimit;
                e && (null != e.max && (t = Math.min(e.max, t)), null != e.min && (t = Math.max(e.min, t))), this._zoom = t, this._updateCenterAndZoom()
            },
            getDefaultCenter: function () {
                var t = this.getBoundingRect(), e = t.x + t.width / 2, i = t.y + t.height / 2;
                return [e, i]
            },
            getCenter: function () {
                return this._center || this.getDefaultCenter()
            },
            getZoom: function () {
                return this._zoom || 1
            },
            getRoamTransform: function () {
                return this._roamTransform
            },
            _updateCenterAndZoom: function () {
                var t = this._viewTransform.getLocalTransform(), e = this._roamTransform, i = this.getDefaultCenter(), n = this.getCenter(), o = this.getZoom();
                n = a.applyTransform([], n, t), i = a.applyTransform([], i, t), e.origin = n, e.position = [i[0] - n[0], i[1] - n[1]], e.scale = [o, o], this._updateTransform()
            },
            _updateTransform: function () {
                var t = this._roamTransform, e = this._viewTransform;
                e.parent = t, t.updateTransform(), e.updateTransform(), e.transform && r.copy(this.transform || (this.transform = []), e.transform), this.transform ? (this.invTransform = this.invTransform || [], r.invert(this.invTransform, this.transform)) : this.invTransform = null, this.decomposeTransform()
            },
            getViewRect: function () {
                return this._viewRect
            },
            getViewRectAfterRoam: function () {
                var t = this.getBoundingRect().clone();
                return t.applyTransform(this.transform), t
            },
            dataToPoint: function (t) {
                var e = this.transform;
                return e ? u([], t, e) : [t[0], t[1]]
            },
            pointToData: function (t) {
                var e = this.invTransform;
                return e ? u([], t, e) : [t[0], t[1]]
            }
        }, l.mixin(o, s), t.exports = o
    }, function (t, e, i) {
        function n(t, e, i) {
            if (this.name = t, this.contours = e, i)i = [i[0], i[1]]; else {
                var n = this.getBoundingRect();
                i = [n.x + n.width / 2, n.y + n.height / 2]
            }
            this.center = i
        }

        var o = i(352), a = i(8), r = i(65), s = i(5);
        n.prototype = {
            constructor: n, getBoundingRect: function () {
                var t = this._rect;
                if (t)return t;
                for (var e = Number.MAX_VALUE, i = [e, e], n = [-e, -e], o = [], l = [], h = this.contours, u = 0; u < h.length; u++)r.fromPoints(h[u], o, l), s.min(i, i, o), s.max(n, n, l);
                return 0 === u && (i[0] = i[1] = n[0] = n[1] = 0), this._rect = new a(i[0], i[1], n[0] - i[0], n[1] - i[1])
            }, contain: function (t) {
                var e = this.getBoundingRect(), i = this.contours;
                if (e.contain(t[0], t[1]))for (var n = 0, a = i.length; a > n; n++)if (o.contain(i[n], t[0], t[1]))return !0;
                return !1
            }, transformTo: function (t, e, i, n) {
                var o = this.getBoundingRect(), r = o.width / o.height;
                i ? n || (n = i / r) : i = r * n;
                for (var l = new a(t, e, i, n), h = o.calculateTransform(l), u = this.contours, c = 0; c < u.length; c++)for (var d = 0; d < u[c].length; d++)s.applyTransform(u[c][d], u[c][d], h);
                o = this._rect, o.copy(l), this.center = [o.x + o.width / 2, o.y + o.height / 2]
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = [];
            return t.eachComponent("parallel", function (n, a) {
                var r = new o(n, t, e);
                r.name = "parallel_" + a, r.resize(n, e), n.coordinateSystem = r, r.model = n, i.push(r)
            }), t.eachSeries(function (t) {
                if ("parallel" === t.get("coordinateSystem")) {
                    var e = t.get("parallelIndex");
                    t.coordinateSystem = i[e]
                }
            }), i
        }

        var o = i(335);
        i(23).register("parallel", {create: n})
    }, function (t, e, i) {
        function n(t) {
            var e = t.mainData, i = t.datas;
            i || (i = {main: e}, t.datasAttr = {main: "data"}), t.datas = t.mainData = null, h(e, i, t), d(i, function (i) {
                d(e.TRANSFERABLE_METHODS, function (e) {
                    i.wrapMethod(e, c.curry(o, t))
                })
            }), e.wrapMethod("cloneShallow", c.curry(r, t)), d(e.CHANGABLE_METHODS, function (i) {
                e.wrapMethod(i, c.curry(a, t))
            }), c.assert(i[e.dataType] === e)
        }

        function o(t, e) {
            if (l(this)) {
                var i = c.extend({}, this[f]);
                i[this.dataType] = e, h(e, i, t)
            } else u(e, this.dataType, this[p], t);
            return e
        }

        function a(t, e) {
            return t.struct && t.struct.update(this), e
        }

        function r(t, e) {
            return d(e[f], function (i, n) {
                i !== e && u(i.cloneShallow(), n, e, t)
            }), e
        }

        function s(t) {
            var e = this[p];
            return null == t || null == e ? e : e[f][t]
        }

        function l(t) {
            return t[p] === t
        }

        function h(t, e, i) {
            t[f] = {}, d(e, function (e, n) {
                u(e, n, t, i)
            })
        }

        function u(t, e, i, n) {
            i[f][e] = t, t[p] = i, t.dataType = e, n.struct && (t[n.structAttr] = n.struct, n.struct[n.datasAttr[e]] = t), t.getLinkedData = s
        }

        var c = i(1), d = c.each, f = "\x00__link_datas", p = "\x00__link_mainData";
        t.exports = n
    }, function (t, e, i) {
        var n = i(2);
        i(227), i(228), n.registerVisualCoding("chart", i(230)), n.registerLayout(i(229))
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(13), a = i(159), r = o.extend({
            type: "series.boxplot",
            dependencies: ["xAxis", "yAxis", "grid"],
            valueDimensions: ["min", "Q1", "median", "Q3", "max"],
            dimensions: null,
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                layout: null,
                boxWidth: [7, 50],
                itemStyle: {
                    normal: {color: "#fff", borderWidth: 1},
                    emphasis: {
                        borderWidth: 2,
                        shadowBlur: 5,
                        shadowOffsetX: 2,
                        shadowOffsetY: 2,
                        shadowColor: "rgba(0,0,0,0.4)"
                    }
                },
                animationEasing: "elasticOut",
                animationDuration: 800
            }
        });
        n.mixin(r, a.seriesModelMixin, !0), t.exports = r
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = e.getItemModel(i), o = n.getModel(h), a = e.getItemVisual(i, "color"), s = o.getItemStyle(["borderColor"]), l = t.childAt(t.whiskerIndex);
            l.style.set(s), l.style.stroke = a, l.dirty();
            var c = t.childAt(t.bodyIndex);
            c.style.set(s), c.style.stroke = a, c.dirty();
            var d = n.getModel(u).getItemStyle();
            r.setHoverStyle(t, d)
        }

        var o = i(1), a = i(26), r = i(3), s = i(159), l = a.extend({
            type: "boxplot", getStyleUpdater: function () {
                return n
            }
        });
        o.mixin(l, s.viewMixin, !0);
        var h = ["itemStyle", "normal"], u = ["itemStyle", "emphasis"];
        t.exports = l
    }, function (t, e, i) {
        function n(t) {
            var e = [], i = [];
            return t.eachSeriesByType("boxplot", function (t) {
                var n = t.getBaseAxis(), o = r.indexOf(i, n);
                0 > o && (o = i.length, i[o] = n, e[o] = {axis: n, seriesModels: []}), e[o].seriesModels.push(t)
            }), e
        }

        function o(t) {
            var e, i, n = t.axis, o = t.seriesModels, a = o.length, s = t.boxWidthList = [], u = t.boxOffsetList = [], c = [];
            if ("category" === n.type)i = n.getBandWidth(); else {
                var d = 0;
                h(o, function (t) {
                    d = Math.max(d, t.getData().count())
                }), e = n.getExtent(), Math.abs(e[1] - e[0]) / d
            }
            h(o, function (t) {
                var e = t.get("boxWidth");
                r.isArray(e) || (e = [e, e]), c.push([l(e[0], i) || 0, l(e[1], i) || 0])
            });
            var f = .8 * i - 2, p = f / a * .3, g = (f - p * (a - 1)) / a, m = g / 2 - f / 2;
            h(o, function (t, e) {
                u.push(m), m += p + g, s.push(Math.min(Math.max(g, c[e][0]), c[e][1]))
            })
        }

        function a(t, e, i) {
            var n = t.coordinateSystem, o = t.getData(), a = t.dimensions, r = t.get("layout"), s = i / 2;
            o.each(a, function () {
                function t(t) {
                    var i = [];
                    i[f] = c, i[p] = t;
                    var o;
                    return isNaN(c) || isNaN(t) ? o = [NaN, NaN] : (o = n.dataToPoint(i), o[f] += e), o
                }

                function i(t, e) {
                    var i = t.slice(), n = t.slice();
                    i[f] += s, n[f] -= s, e ? x.push(i, n) : x.push(n, i)
                }

                function l(t) {
                    var e = [t.slice(), t.slice()];
                    e[0][f] -= s, e[1][f] += s, y.push(e)
                }

                var h = arguments, u = a.length, c = h[0], d = h[u], f = "horizontal" === r ? 0 : 1, p = 1 - f, g = t(h[3]), m = t(h[1]), v = t(h[5]), y = [[m, t(h[2])], [v, t(h[4])]];
                l(m), l(v), l(g);
                var x = [];
                i(y[0][1], 0), i(y[1][1], 1), o.setItemLayout(d, {
                    chartLayout: r,
                    initBaseline: g[p],
                    median: g,
                    bodyEnds: x,
                    whiskerEnds: y
                })
            })
        }

        var r = i(1), s = i(4), l = s.parsePercent, h = r.each;
        t.exports = function (t, e) {
            var i = n(t);
            h(i, function (t) {
                var e = t.seriesModels;
                e.length && (o(t), h(e, function (e, i) {
                    a(e, t.boxOffsetList[i], t.boxWidthList[i])
                }))
            })
        }
    }, function (t, e) {
        var i = ["itemStyle", "normal", "borderColor"];
        t.exports = function (t, e) {
            var n = t.get("color");
            t.eachRawSeriesByType("boxplot", function (e) {
                var o = n[e.seriesIndex % n.length], a = e.getData();
                a.setVisual({
                    legendSymbol: "roundRect",
                    color: e.get(i) || o
                }), t.isSeriesFiltered(e) || a.each(function (t) {
                    var e = a.getItemModel(t);
                    a.setItemVisual(t, {color: e.get(i, !0)})
                })
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(232), i(233), n.registerPreprocessor(i(236)), n.registerVisualCoding("chart", i(235)), n.registerLayout(i(234))
    }, function (t, e, i) {
        "use strict";
        var n = i(1), o = i(13), a = i(159), r = i(9), s = r.encodeHTML, l = r.addCommas, h = o.extend({
            type: "series.candlestick",
            dependencies: ["xAxis", "yAxis", "grid"],
            valueDimensions: ["open", "close", "lowest", "highest"],
            dimensions: null,
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "cartesian2d",
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                layout: null,
                itemStyle: {
                    normal: {
                        color: "#c23531",
                        color0: "#314656",
                        borderWidth: 1,
                        borderColor: "#c23531",
                        borderColor0: "#314656"
                    }, emphasis: {borderWidth: 2}
                },
                animationUpdate: !1,
                animationEasing: "linear",
                animationDuration: 300
            },
            getShadowDim: function () {
                return "open"
            },
            formatTooltip: function (t, e) {
                var i = n.map(this.valueDimensions, function (e) {
                    return e + ": " + l(this._data.get(e, t))
                }, this);
                return s(this.name) + "<br />" + i.join("<br />")
            }
        });
        n.mixin(h, a.seriesModelMixin, !0), t.exports = h
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            var n = e.getItemModel(i), o = n.getModel(h), a = e.getItemVisual(i, "color"), s = e.getItemVisual(i, "borderColor"), l = o.getItemStyle(["color", "color0", "borderColor", "borderColor0"]), c = t.childAt(t.whiskerIndex);
            c.useStyle(l), c.style.stroke = s;
            var d = t.childAt(t.bodyIndex);
            d.useStyle(l), d.style.fill = a, d.style.stroke = s;
            var f = n.getModel(u).getItemStyle();
            r.setHoverStyle(t, f)
        }

        var o = i(1), a = i(26), r = i(3), s = i(159), l = a.extend({
            type: "candlestick", getStyleUpdater: function () {
                return n
            }
        });
        o.mixin(l, s.viewMixin, !0);
        var h = ["itemStyle", "normal"], u = ["itemStyle", "emphasis"];
        t.exports = l
    }, function (t, e) {
        function i(t, e) {
            var i, r = t.getBaseAxis(), s = "category" === r.type ? r.getBandWidth() : (i = r.getExtent(), Math.abs(i[1] - i[0]) / e.count());
            return s / 2 - 2 > o ? s / 2 - 2 : s - o > a ? o : Math.max(s - a, n)
        }

        var n = 2, o = 5, a = 4;
        t.exports = function (t, e) {
            t.eachSeriesByType("candlestick", function (t) {
                var e = t.coordinateSystem, n = t.getData(), o = t.dimensions, a = t.get("layout"), r = i(t, n);
                n.each(o, function () {
                    function t(t) {
                        var i = [];
                        return i[c] = h, i[d] = t, isNaN(h) || isNaN(t) ? [NaN, NaN] : e.dataToPoint(i)
                    }

                    function i(t, e) {
                        var i = t.slice(), n = t.slice();
                        i[c] += r / 2, n[c] -= r / 2, e ? M.push(i, n) : M.push(n, i)
                    }

                    var s = arguments, l = o.length, h = s[0], u = s[l], c = "horizontal" === a ? 0 : 1, d = 1 - c, f = s[1], p = s[2], g = s[3], m = s[4], v = Math.min(f, p), y = Math.max(f, p), x = t(v), _ = t(y), b = t(g), w = t(m), S = [[w, _], [b, x]], M = [];
                    i(_, 0), i(x, 1), n.setItemLayout(u, {
                        chartLayout: a,
                        sign: f > p ? -1 : p > f ? 1 : 0,
                        initBaseline: f > p ? _[d] : x[d],
                        bodyEnds: M,
                        whiskerEnds: S
                    })
                }, !0)
            })
        }
    }, function (t, e) {
        var i = ["itemStyle", "normal", "borderColor"], n = ["itemStyle", "normal", "borderColor0"], o = ["itemStyle", "normal", "color"], a = ["itemStyle", "normal", "color0"];
        t.exports = function (t, e) {
            t.eachRawSeriesByType("candlestick", function (e) {
                var r = e.getData();
                r.setVisual({legendSymbol: "roundRect"}), t.isSeriesFiltered(e) || r.each(function (t) {
                    var e = r.getItemModel(t), s = r.getItemLayout(t).sign;
                    r.setItemVisual(t, {color: e.get(s > 0 ? o : a), borderColor: e.get(s > 0 ? i : n)})
                })
            })
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            t && n.isArray(t.series) && n.each(t.series, function (t) {
                n.isObject(t) && "k" === t.type && (t.type = "candlestick")
            })
        }
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(238), i(239), o.registerVisualCoding("chart", n.curry(i(44), "effectScatter", "circle", null)), o.registerLayout(n.curry(i(53), "effectScatter"))
    }, function (t, e, i) {
        "use strict";
        var n = i(35), o = i(13);
        t.exports = o.extend({
            type: "series.effectScatter",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                var i = n(t.data, this, e);
                return i
            },
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                effectType: "ripple",
                showEffectOn: "render",
                rippleEffect: {period: 4, scale: 2.5, brushType: "fill"},
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                geoIndex: 0,
                symbolSize: 10
            }
        })
    }, function (t, e, i) {
        var n = i(39), o = i(266);
        i(2).extendChartView({
            type: "effectScatter", init: function () {
                this._symbolDraw = new n(o)
            }, render: function (t, e, i) {
                var n = t.getData(), o = this._symbolDraw;
                o.updateData(n), this.group.add(o.group)
            }, updateLayout: function () {
                this._symbolDraw.updateLayout()
            }, remove: function (t, e) {
                this._symbolDraw && this._symbolDraw.remove(e)
            }
        })
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(241), i(242), o.registerVisualCoding("chart", n.curry(i(64), "funnel")), o.registerLayout(i(243)), o.registerProcessor("filter", n.curry(i(63), "funnel"))
    }, function (t, e, i) {
        "use strict";
        var n = i(15), o = i(7), a = i(31), r = i(2).extendSeriesModel({
            type: "series.funnel",
            init: function (t) {
                r.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }, this._defaultLabelLine(t)
            },
            getInitialData: function (t, e) {
                var i = a(["value"], t.data), o = new n(i, this);
                return o.initData(t.data), o
            },
            _defaultLabelLine: function (t) {
                o.defaultEmphasis(t.labelLine, ["show"]);
                var e = t.labelLine.normal, i = t.labelLine.emphasis;
                e.show = e.show && t.label.normal.show, i.show = i.show && t.label.emphasis.show
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                left: 80,
                top: 60,
                right: 80,
                bottom: 60,
                minSize: "0%",
                maxSize: "100%",
                sort: "descending",
                gap: 0,
                funnelAlign: "center",
                label: {normal: {show: !0, position: "outer"}, emphasis: {show: !0}},
                labelLine: {normal: {show: !0, length: 20, lineStyle: {width: 1, type: "solid"}}, emphasis: {}},
                itemStyle: {normal: {borderColor: "#fff", borderWidth: 1}, emphasis: {}}
            }
        });
        t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            function i() {
                r.ignore = r.hoverIgnore, s.ignore = s.hoverIgnore
            }

            function n() {
                r.ignore = r.normalIgnore, s.ignore = s.normalIgnore
            }

            a.Group.call(this);
            var o = new a.Polygon, r = new a.Polyline, s = new a.Text;
            this.add(o), this.add(r), this.add(s), this.updateData(t, e, !0), this.on("emphasis", i).on("normal", n).on("mouseover", i).on("mouseout", n)
        }

        function o(t, e, i, n) {
            var o = n.getModel("textStyle"), a = n.get("position"), s = "inside" === a || "inner" === a || "center" === a;
            return {
                fill: o.getTextColor() || (s ? "#fff" : t.getItemVisual(e, "color")),
                textFont: o.getFont(),
                text: r.retrieve(t.hostModel.getFormattedLabel(e, i), t.getName(e))
            }
        }

        var a = i(3), r = i(1), s = n.prototype, l = ["itemStyle", "normal", "opacity"];
        s.updateData = function (t, e, i) {
            var n = this.childAt(0), o = t.hostModel, s = t.getItemModel(e), h = t.getItemLayout(e), u = t.getItemModel(e).get(l);
            u = null == u ? 1 : u, n.useStyle({}), i ? (n.setShape({points: h.points}), n.setStyle({opacity: 0}), a.initProps(n, {style: {opacity: u}}, o, e)) : a.updateProps(n, {
                style: {opacity: u},
                shape: {points: h.points}
            }, o, e);
            var c = s.getModel("itemStyle"), d = t.getItemVisual(e, "color");
            n.setStyle(r.defaults({fill: d}, c.getModel("normal").getItemStyle(["opacity"]))), n.hoverStyle = c.getModel("emphasis").getItemStyle(), this._updateLabel(t, e), a.setHoverStyle(this)
        }, s._updateLabel = function (t, e) {
            var i = this.childAt(1), n = this.childAt(2), r = t.hostModel, s = t.getItemModel(e), l = t.getItemLayout(e), h = l.label, u = t.getItemVisual(e, "color");
            a.updateProps(i, {shape: {points: h.linePoints || h.linePoints}}, r, e), a.updateProps(n, {
                style: {
                    x: h.x,
                    y: h.y
                }
            }, r, e), n.attr({
                style: {textAlign: h.textAlign, textVerticalAlign: h.verticalAlign, textFont: h.font},
                rotation: h.rotation,
                origin: [h.x, h.y],
                z2: 10
            });
            var c = s.getModel("label.normal"), d = s.getModel("label.emphasis"), f = s.getModel("labelLine.normal"), p = s.getModel("labelLine.emphasis");
            n.setStyle(o(t, e, "normal", c)), n.ignore = n.normalIgnore = !c.get("show"), n.hoverIgnore = !d.get("show"), i.ignore = i.normalIgnore = !f.get("show"), i.hoverIgnore = !p.get("show"), i.setStyle({stroke: u}), i.setStyle(f.getModel("lineStyle").getLineStyle()), n.hoverStyle = o(t, e, "emphasis", d), i.hoverStyle = p.getModel("lineStyle").getLineStyle()
        }, r.inherits(n, a.Group);
        var h = i(26).extend({
            type: "funnel", render: function (t, e, i) {
                var o = t.getData(), a = this._data, r = this.group;
                o.diff(a).add(function (t) {
                    var e = new n(o, t);
                    o.setItemGraphicEl(t, e), r.add(e)
                }).update(function (t, e) {
                    var i = a.getItemGraphicEl(e);
                    i.updateData(o, t), r.add(i), o.setItemGraphicEl(t, i)
                }).remove(function (t) {
                    var e = a.getItemGraphicEl(t);
                    r.remove(e)
                }).execute(), this._data = o
            }, remove: function () {
                this.group.removeAll(), this._data = null
            }
        });
        t.exports = h
    }, function (t, e, i) {
        function n(t, e) {
            return r.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()})
        }

        function o(t, e) {
            for (var i = t.mapArray("value", function (t) {
                return t
            }), n = [], o = "ascending" === e, a = 0, r = t.count(); r > a; a++)n[a] = a;
            return n.sort(function (t, e) {
                return o ? i[t] - i[e] : i[e] - i[t]
            }), n
        }

        function a(t) {
            t.each(function (e) {
                var i, n, o, a, r = t.getItemModel(e), s = r.getModel("label.normal"), l = s.get("position"), h = r.getModel("labelLine.normal"), u = t.getItemLayout(e), c = u.points, d = "inner" === l || "inside" === l || "center" === l;
                if (d)n = (c[0][0] + c[1][0] + c[2][0] + c[3][0]) / 4, o = (c[0][1] + c[1][1] + c[2][1] + c[3][1]) / 4, i = "center", a = [[n, o], [n, o]]; else {
                    var f, p, g, m = h.get("length");
                    "left" === l ? (f = (c[3][0] + c[0][0]) / 2, p = (c[3][1] + c[0][1]) / 2, g = f - m, n = g - 5, i = "right") : (f = (c[1][0] + c[2][0]) / 2, p = (c[1][1] + c[2][1]) / 2, g = f + m, n = g + 5, i = "left");
                    var v = p;
                    a = [[f, p], [g, v]], o = v
                }
                u.label = {linePoints: a, x: n, y: o, verticalAlign: "middle", textAlign: i, inside: d}
            })
        }

        var r = i(11), s = i(4), l = s.parsePercent;
        t.exports = function (t, e) {
            t.eachSeriesByType("funnel", function (t) {
                var i = t.getData(), r = t.get("sort"), h = n(t, e), u = o(i, r), c = [l(t.get("minSize"), h.width), l(t.get("maxSize"), h.width)], d = i.getDataExtent("value"), f = t.get("min"), p = t.get("max");
                null == f && (f = Math.min(d[0], 0)), null == p && (p = d[1]);
                var g = t.get("funnelAlign"), m = t.get("gap"), v = (h.height - m * (i.count() - 1)) / i.count(), y = h.y, x = function (t, e) {
                    var n, o = i.get("value", t) || 0, a = s.linearMap(o, [f, p], c, !0);
                    switch (g) {
                        case"left":
                            n = h.x;
                            break;
                        case"center":
                            n = h.x + (h.width - a) / 2;
                            break;
                        case"right":
                            n = h.x + h.width - a
                    }
                    return [[n, e], [n + a, e]]
                };
                "ascending" === r && (v = -v, m = -m, y += h.height, u = u.reverse());
                for (var _ = 0; _ < u.length; _++) {
                    var b = u[_], w = u[_ + 1], S = x(b, y), M = x(w, y + v);
                    y += v + m, i.setItemLayout(b, {points: S.concat(M.slice().reverse())})
                }
                a(i)
            })
        }
    }, function (t, e, i) {
        i(245), i(246)
    }, function (t, e, i) {
        var n = i(15), o = i(13), a = i(1), r = o.extend({
            type: "series.gauge", getInitialData: function (t, e) {
                var i = new n(["value"], this), o = t.data || [];
                return a.isArray(o) || (o = [o]), i.initData(o), i
            }, defaultOption: {
                zlevel: 0,
                z: 2,
                center: ["50%", "50%"],
                legendHoverLink: !0,
                radius: "75%",
                startAngle: 225,
                endAngle: -45,
                clockwise: !0,
                min: 0,
                max: 100,
                splitNumber: 10,
                axisLine: {show: !0, lineStyle: {color: [[.2, "#91c7ae"], [.8, "#63869e"], [1, "#c23531"]], width: 30}},
                splitLine: {show: !0, length: 30, lineStyle: {color: "#eee", width: 2, type: "solid"}},
                axisTick: {show: !0, splitNumber: 5, length: 8, lineStyle: {color: "#eee", width: 1, type: "solid"}},
                axisLabel: {show: !0, textStyle: {color: "auto"}},
                pointer: {show: !0, length: "80%", width: 8},
                itemStyle: {
                    normal: {color: "auto"}
                },
                title: {show: !0, offsetCenter: [0, "-40%"], textStyle: {color: "#333", fontSize: 15}},
                detail: {
                    show: !0,
                    backgroundColor: "rgba(0,0,0,0)",
                    borderWidth: 0,
                    borderColor: "#ccc",
                    width: 100,
                    height: 40,
                    offsetCenter: [0, "40%"],
                    textStyle: {color: "auto", fontSize: 30}
                }
            }
        });
        t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.get("center"), n = e.getWidth(), o = e.getHeight(), a = Math.min(n, o), r = l(i[0], e.getWidth()), s = l(i[1], e.getHeight()), h = l(t.get("radius"), a / 2);
            return {cx: r, cy: s, r: h}
        }

        function o(t, e) {
            return e && ("string" == typeof e ? t = e.replace("{value}", t) : "function" == typeof e && (t = e(t))), t
        }

        var a = i(247), r = i(3), s = i(4), l = s.parsePercent, h = 2 * Math.PI, u = i(26).extend({
            type: "gauge",
            render: function (t, e, i) {
                this.group.removeAll();
                var o = t.get("axisLine.lineStyle.color"), a = n(t, i);
                this._renderMain(t, e, i, o, a)
            },
            _renderMain: function (t, e, i, n, o) {
                for (var a = this.group, s = t.getModel("axisLine"), l = s.getModel("lineStyle"), u = t.get("clockwise"), c = -t.get("startAngle") / 180 * Math.PI, d = -t.get("endAngle") / 180 * Math.PI, f = (d - c) % h, p = c, g = l.get("width"), m = 0; m < n.length; m++) {
                    var v = Math.min(Math.max(n[m][0], 0), 1), d = c + f * v, y = new r.Sector({
                        shape: {
                            startAngle: p,
                            endAngle: d,
                            cx: o.cx,
                            cy: o.cy,
                            clockwise: u,
                            r0: o.r - g,
                            r: o.r
                        }, silent: !0
                    });
                    y.setStyle({fill: n[m][1]}), y.setStyle(l.getLineStyle(["color", "borderWidth", "borderColor"])), a.add(y), p = d
                }
                var x = function (t) {
                    if (0 >= t)return n[0][1];
                    for (var e = 0; e < n.length; e++)if (n[e][0] >= t && (0 === e ? 0 : n[e - 1][0]) < t)return n[e][1];
                    return n[e - 1][1]
                };
                if (!u) {
                    var _ = c;
                    c = d, d = _
                }
                this._renderTicks(t, e, i, x, o, c, d, u), this._renderPointer(t, e, i, x, o, c, d, u), this._renderTitle(t, e, i, x, o), this._renderDetail(t, e, i, x, o)
            },
            _renderTicks: function (t, e, i, n, a, h, u, c) {
                for (var d = this.group, f = a.cx, p = a.cy, g = a.r, m = t.get("min"), v = t.get("max"), y = t.getModel("splitLine"), x = t.getModel("axisTick"), _ = t.getModel("axisLabel"), b = t.get("splitNumber"), w = x.get("splitNumber"), S = l(y.get("length"), g), M = l(x.get("length"), g), A = h, I = (u - h) / b, T = I / w, L = y.getModel("lineStyle").getLineStyle(), C = x.getModel("lineStyle").getLineStyle(), D = _.getModel("textStyle"), P = 0; b >= P; P++) {
                    var k = Math.cos(A), z = Math.sin(A);
                    if (y.get("show")) {
                        var E = new r.Line({
                            shape: {
                                x1: k * g + f,
                                y1: z * g + p,
                                x2: k * (g - S) + f,
                                y2: z * (g - S) + p
                            }, style: L, silent: !0
                        });
                        "auto" === L.stroke && E.setStyle({stroke: n(P / b)}), d.add(E)
                    }
                    if (_.get("show")) {
                        var O = o(s.round(P / b * (v - m) + m), _.get("formatter")), R = new r.Text({
                            style: {
                                text: O,
                                x: k * (g - S - 5) + f,
                                y: z * (g - S - 5) + p,
                                fill: D.getTextColor(),
                                textFont: D.getFont(),
                                textVerticalAlign: -.4 > z ? "top" : z > .4 ? "bottom" : "middle",
                                textAlign: -.4 > k ? "left" : k > .4 ? "right" : "center"
                            }, silent: !0
                        });
                        "auto" === R.style.fill && R.setStyle({fill: n(P / b)}), d.add(R)
                    }
                    if (x.get("show") && P !== b) {
                        for (var V = 0; w >= V; V++) {
                            var k = Math.cos(A), z = Math.sin(A), N = new r.Line({
                                shape: {
                                    x1: k * g + f,
                                    y1: z * g + p,
                                    x2: k * (g - M) + f,
                                    y2: z * (g - M) + p
                                }, silent: !0, style: C
                            });
                            "auto" === C.stroke && N.setStyle({stroke: n((P + V / w) / b)}), d.add(N), A += T
                        }
                        A -= T
                    } else A += I
                }
            },
            _renderPointer: function (t, e, i, n, o, h, u, c) {
                var d = [+t.get("min"), +t.get("max")], f = [h, u];
                c || (f = f.reverse());
                var p = t.getData(), g = this._data, m = this.group;
                p.diff(g).add(function (e) {
                    var i = new a({shape: {angle: h}});
                    r.updateProps(i, {shape: {angle: s.linearMap(p.get("value", e), d, f, !0)}}, t), m.add(i), p.setItemGraphicEl(e, i)
                }).update(function (e, i) {
                    var n = g.getItemGraphicEl(i);
                    r.updateProps(n, {shape: {angle: s.linearMap(p.get("value", e), d, f, !0)}}, t), m.add(n), p.setItemGraphicEl(e, n)
                }).remove(function (t) {
                    var e = g.getItemGraphicEl(t);
                    m.remove(e)
                }).execute(), p.eachItemGraphicEl(function (t, e) {
                    var i = p.getItemModel(e), a = i.getModel("pointer");
                    t.setShape({
                        x: o.cx,
                        y: o.cy,
                        width: l(a.get("width"), o.r),
                        r: l(a.get("length"), o.r)
                    }), t.useStyle(i.getModel("itemStyle.normal").getItemStyle()), "auto" === t.style.fill && t.setStyle("fill", n((p.get("value", e) - d[0]) / (d[1] - d[0]))), r.setHoverStyle(t, i.getModel("itemStyle.emphasis").getItemStyle())
                }), this._data = p
            },
            _renderTitle: function (t, e, i, n, o) {
                var a = t.getModel("title");
                if (a.get("show")) {
                    var s = a.getModel("textStyle"), h = a.get("offsetCenter"), u = o.cx + l(h[0], o.r), c = o.cy + l(h[1], o.r), d = new r.Text({
                        style: {
                            x: u,
                            y: c,
                            text: t.getData().getName(0),
                            fill: s.getTextColor(),
                            textFont: s.getFont(),
                            textAlign: "center",
                            textVerticalAlign: "middle"
                        }
                    });
                    this.group.add(d)
                }
            },
            _renderDetail: function (t, e, i, n, a) {
                var h = t.getModel("detail"), u = t.get("min"), c = t.get("max");
                if (h.get("show")) {
                    var d = h.getModel("textStyle"), f = h.get("offsetCenter"), p = a.cx + l(f[0], a.r), g = a.cy + l(f[1], a.r), m = l(h.get("width"), a.r), v = l(h.get("height"), a.r), y = t.getData().get("value", 0), x = new r.Rect({
                        shape: {
                            x: p - m / 2,
                            y: g - v / 2,
                            width: m,
                            height: v
                        },
                        style: {
                            text: o(y, h.get("formatter")),
                            fill: h.get("backgroundColor"),
                            textFill: d.getTextColor(),
                            textFont: d.getFont()
                        }
                    });
                    "auto" === x.style.textFill && x.setStyle("textFill", n(s.linearMap(y, [u, c], [0, 1], !0))), x.setStyle(h.getItemStyle(["color"])), this.group.add(x)
                }
            }
        });
        t.exports = u
    }, function (t, e, i) {
        t.exports = i(6).extend({
            type: "echartsGaugePointer",
            shape: {angle: 0, width: 10, r: 10, x: 0, y: 0},
            buildPath: function (t, e) {
                var i = Math.cos, n = Math.sin, o = e.r, a = e.width, r = e.angle, s = e.x - i(r) * a * (a >= o / 3 ? 1 : 2), l = e.y - n(r) * a * (a >= o / 3 ? 1 : 2);
                r = e.angle - Math.PI / 2, t.moveTo(s, l), t.lineTo(e.x + i(r) * a, e.y + n(r) * a), t.lineTo(e.x + i(e.angle) * o, e.y + n(e.angle) * o), t.lineTo(e.x - i(r) * a, e.y - n(r) * a), t.lineTo(s, l)
            }
        })
    }, function (t, e, i) {
        var n = i(2), o = i(1);
        i(249), i(250), i(259), n.registerProcessor("filter", i(252)), n.registerVisualCoding("chart", o.curry(i(44), "graph", "circle", null)), n.registerVisualCoding("chart", i(253)), n.registerVisualCoding("chart", i(256)), n.registerLayout(i(260)), n.registerLayout(i(254)), n.registerLayout(i(258)), n.registerCoordinateSystem("graphView", {create: i(255)})
    }, function (t, e, i) {
        "use strict";
        var n = i(15), o = i(1), a = i(7), r = i(12), s = i(212), l = i(2).extendSeriesModel({
            type: "series.graph",
            init: function (t) {
                l.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._categoriesData
                }, this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData()
            },
            mergeOption: function (t) {
                l.superApply(this, "mergeOption", arguments), this.fillDataTextStyle(t.edges || t.links), this._updateCategoriesData()
            },
            mergeDefaultAndTheme: function (t) {
                l.superApply(this, "mergeDefaultAndTheme", arguments), a.defaultEmphasis(t.edgeLabel, a.LABEL_OPTIONS)
            },
            getInitialData: function (t, e) {
                function i(t, e) {
                    t.wrapMethod("getItemModel", function (t) {
                        var e = a._categoriesModels, i = t.getShallow("category"), n = e[i];
                        return n && (n.parentModel = t.parentModel, t.parentModel = n), t
                    });
                    var i = a.getModel("edgeLabel"), n = function (t, e) {
                        var o = (t || "").split(".");
                        "label" === o[0] && (e = e || i.getModel(o.slice(1)));
                        var a = r.prototype.getModel.call(this, o, e);
                        return a.getModel = n, a
                    };
                    e.wrapMethod("getItemModel", function (t) {
                        return t.getModel = n, t
                    })
                }

                var n = t.edges || t.links || [], o = t.data || t.nodes || [], a = this;
                return o && n ? s(o, n, this, !0, i).data : void 0
            },
            getGraph: function () {
                return this.getData().graph
            },
            getEdgeData: function () {
                return this.getGraph().edgeData
            },
            getCategoriesData: function () {
                return this._categoriesData
            },
            formatTooltip: function (t, e, i) {
                if ("edge" === i) {
                    var n = this.getData(), o = this.getDataParams(t, i), a = n.graph.getEdgeByIndex(t), r = n.getName(a.node1.dataIndex), s = n.getName(a.node2.dataIndex), h = r + " > " + s;
                    return o.value && (h += " : " + o.value), h
                }
                return l.superApply(this, "formatTooltip", arguments)
            },
            _updateCategoriesData: function () {
                var t = o.map(this.option.categories || [], function (t) {
                    return null != t.value ? t : o.extend({value: 0}, t)
                }), e = new n(["value"], this);
                e.initData(t), this._categoriesData = e, this._categoriesModels = e.mapArray(function (t) {
                    return e.getItemModel(t, !0)
                })
            },
            setZoom: function (t) {
                this.option.zoom = t
            },
            setCenter: function (t) {
                this.option.center = t
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                color: ["#61a0a8", "#d14a61", "#fd9c35", "#675bba", "#fec42c", "#dd4444", "#fd9c35", "#cd4870"],
                coordinateSystem: "view",
                xAxisIndex: 0,
                yAxisIndex: 0,
                polarIndex: 0,
                geoIndex: 0,
                legendHoverLink: !0,
                hoverAnimation: !0,
                layout: null,
                force: {initLayout: null, repulsion: 50, gravity: .1, edgeLength: 30, layoutAnimation: !0},
                left: "center",
                top: "center",
                symbol: "circle",
                symbolSize: 10,
                edgeSymbol: ["none", "none"],
                edgeSymbolSize: 10,
                edgeLabel: {normal: {position: "middle"}, emphasis: {}},
                draggable: !1,
                roam: !1,
                center: null,
                zoom: 1,
                nodeScaleRatio: .6,
                label: {normal: {show: !1, formatter: "{b}"}, emphasis: {show: !0}},
                itemStyle: {normal: {}, emphasis: {}},
                lineStyle: {normal: {color: "#aaa", width: 1, curveness: 0, opacity: .5}, emphasis: {}}
            }
        });
        t.exports = l
    }, function (t, e, i) {
        var n = i(39), o = i(84), a = i(70), r = i(3), s = i(251);
        i(2).extendChartView({
            type: "graph", init: function (t, e) {
                var i = new n, r = new o, s = this.group, l = new a(e.getZr(), s);
                s.add(i.group), s.add(r.group), this._symbolDraw = i, this._lineDraw = r, this._controller = l, this._firstRender = !0
            }, render: function (t, e, i) {
                var n = t.coordinateSystem;
                this._model = t, this._nodeScaleRatio = t.get("nodeScaleRatio");
                var o = this._symbolDraw, a = this._lineDraw, l = this.group;
                if ("view" === n.type) {
                    var h = {position: n.position, scale: n.scale};
                    this._firstRender ? l.attr(h) : r.updateProps(l, h, t)
                }
                s(t.getGraph(), this._getNodeGlobalScale(t));
                var u = t.getData();
                o.updateData(u);
                var c = t.getEdgeData();
                a.updateData(c), this._updateNodeAndLinkScale(), this._updateController(t, i), clearTimeout(this._layoutTimeout);
                var d = t.forceLayout, f = t.get("force.layoutAnimation");
                d && this._startForceLayoutIteration(d, f), u.eachItemGraphicEl(function (t, e) {
                    var i = u.getItemModel(e).get("draggable");
                    i ? t.on("drag", function () {
                        d && (d.warmUp(), !this._layouting && this._startForceLayoutIteration(d, f), d.setFixed(e), u.setItemLayout(e, t.position))
                    }, this).on("dragend", function () {
                        d && d.setUnfixed(e)
                    }, this) : t.off("drag"), t.setDraggable(i && d)
                }, this), this._firstRender = !1
            }, _startForceLayoutIteration: function (t, e) {
                var i = this;
                !function n() {
                    t.step(function (t) {
                        i.updateLayout(i._model), (i._layouting = !t) && (e ? i._layoutTimeout = setTimeout(n, 16) : n())
                    })
                }()
            }, _updateController: function (t, e) {
                var i = this._controller, n = this.group;
                return i.rectProvider = function () {
                    var t = n.getBoundingRect();
                    return t.applyTransform(n.transform), t
                }, "view" !== t.coordinateSystem.type ? void i.disable() : (i.enable(t.get("roam")), i.zoomLimit = t.get("scaleLimit"), i.zoom = t.coordinateSystem.getZoom(), void i.off("pan").off("zoom").on("pan", function (i, n) {
                    e.dispatchAction({seriesId: t.id, type: "graphRoam", dx: i, dy: n})
                }).on("zoom", function (i, n, o) {
                    e.dispatchAction({
                        seriesId: t.id,
                        type: "graphRoam",
                        zoom: i,
                        originX: n,
                        originY: o
                    }), this._updateNodeAndLinkScale(), s(t.getGraph(), this._getNodeGlobalScale(t)), this._lineDraw.updateLayout()
                }, this))
            }, _updateNodeAndLinkScale: function () {
                var t = this._model, e = t.getData(), i = this._getNodeGlobalScale(t), n = [i, i];
                e.eachItemGraphicEl(function (t, e) {
                    t.attr("scale", n)
                })
            }, _getNodeGlobalScale: function (t) {
                var e = t.coordinateSystem;
                if ("view" !== e.type)return 1;
                var i = this._nodeScaleRatio, n = this.group.scale, o = n && n[0] || 1, a = e.getZoom(), r = (a - 1) * i + 1;
                return r / o
            }, updateLayout: function (t) {
                this._symbolDraw.updateLayout(), this._lineDraw.updateLayout(), s(t.getGraph(), this._getNodeGlobalScale(t))
            }, remove: function (t, e) {
                this._symbolDraw && this._symbolDraw.remove(), this._lineDraw && this._lineDraw.remove()
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            for (var n, o = t[0], a = t[1], d = t[2], f = 1 / 0, p = i * i, g = .1, m = .1; .9 >= m; m += .1) {
                r[0] = h(o[0], a[0], d[0], m), r[1] = h(o[1], a[1], d[1], m);
                var v = c(u(r, e) - p);
                f > v && (f = v, n = m)
            }
            for (var y = 0; 32 > y; y++) {
                var x = n + g;
                s[0] = h(o[0], a[0], d[0], n), s[1] = h(o[1], a[1], d[1], n), l[0] = h(o[0], a[0], d[0], x), l[1] = h(o[1], a[1], d[1], x);
                var v = u(s, e) - p;
                if (c(v) < .01)break;
                var _ = u(l, e) - p;
                g /= 2, 0 > v ? _ >= 0 ? n += g : n -= g : _ >= 0 ? n -= g : n += g
            }
            return n
        }

        var o = i(16), a = i(5), r = [], s = [], l = [], h = o.quadraticAt, u = a.distSquare, c = Math.abs;
        t.exports = function (t, e) {
            var i = [], r = o.quadraticSubdivide, s = [[], [], []], l = [[], []], h = [];
            e /= 2, t.eachEdge(function (t) {
                var o = t.getLayout(), u = t.getVisual("fromSymbol"), c = t.getVisual("toSymbol");
                o.__original || (o.__original = [a.clone(o[0]), a.clone(o[1])], o[2] && o.__original.push(a.clone(o[2])));
                var d = o.__original;
                if (null != o[2]) {
                    if (a.copy(s[0], d[0]), a.copy(s[1], d[2]), a.copy(s[2], d[1]), u && "none" != u) {
                        var f = n(s, d[0], t.node1.getVisual("symbolSize") * e);
                        r(s[0][0], s[1][0], s[2][0], f, i), s[0][0] = i[3], s[1][0] = i[4], r(s[0][1], s[1][1], s[2][1], f, i), s[0][1] = i[3], s[1][1] = i[4]
                    }
                    if (c && "none" != c) {
                        var f = n(s, d[1], t.node2.getVisual("symbolSize") * e);
                        r(s[0][0], s[1][0], s[2][0], f, i), s[1][0] = i[1], s[2][0] = i[2], r(s[0][1], s[1][1], s[2][1], f, i), s[1][1] = i[1], s[2][1] = i[2]
                    }
                    a.copy(o[0], s[0]), a.copy(o[1], s[2]), a.copy(o[2], s[1])
                } else a.copy(l[0], d[0]), a.copy(l[1], d[1]), a.sub(h, l[1], l[0]), a.normalize(h, h), u && "none" != u && a.scaleAndAdd(l[0], l[0], h, t.node1.getVisual("symbolSize") * e), c && "none" != c && a.scaleAndAdd(l[1], l[1], h, -t.node2.getVisual("symbolSize") * e), a.copy(o[0], l[0]), a.copy(o[1], l[1])
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            var e = t.findComponents({mainType: "legend"});
            e && e.length && t.eachSeriesByType("graph", function (t) {
                var i = t.getCategoriesData(), n = t.getGraph(), o = n.data, a = i.mapArray(i.getName);
                o.filterSelf(function (t) {
                    var i = o.getItemModel(t), n = i.getShallow("category");
                    if (null != n) {
                        "number" == typeof n && (n = a[n]);
                        for (var r = 0; r < e.length; r++)if (!e[r].isSelected(n))return !1
                    }
                    return !0
                })
            }, this)
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.get("color"), i = t.getCategoriesData(), n = t.getData(), o = {};
                i.each(function (t) {
                    o[i.getName(t)] = t;
                    var n = i.getItemModel(t), a = i.getRawIndex(t), r = n.get("itemStyle.normal.color") || e[a % e.length];
                    i.setItemVisual(t, "color", r)
                }), i.count() && n.each(function (t) {
                    var e = n.getItemModel(t), a = e.getShallow("category");
                    null != a && ("string" == typeof a && (a = o[a]), n.getItemVisual(t, "color", !0) || n.setItemVisual(t, "color", i.getItemVisual(a, "color")))
                })
            })
        }
    }, function (t, e, i) {
        var n = i(209);
        t.exports = function (t, e) {
            t.eachSeriesByType("graph", function (t) {
                "circular" === t.get("layout") && n(t)
            })
        }
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.getBoxLayoutParams();
            return n.aspect = i, a.getLayoutRect(n, {width: e.getWidth(), height: e.getHeight()})
        }

        var o = i(222), a = i(11), r = i(65);
        t.exports = function (t, e) {
            var i = [];
            return t.eachSeriesByType("graph", function (t) {
                var a = t.get("coordinateSystem");
                if (!a || "view" === a) {
                    var s = new o;
                    i.push(s);
                    var l = t.getData(), h = l.mapArray(function (t) {
                        var e = l.getItemModel(t);
                        return [+e.get("x"), +e.get("y")]
                    }), u = [], c = [];
                    r.fromPoints(h, u, c), c[0] - u[0] === 0 && (c[0] += 1, u[0] -= 1), c[1] - u[1] === 0 && (c[1] += 1, u[1] -= 1);
                    var d = (c[0] - u[0]) / (c[1] - u[1]), f = n(t, e, d);
                    isNaN(d) && (u = [f.x, f.y], c = [f.x + f.width, f.y + f.height]);
                    var p = c[0] - u[0], g = c[1] - u[1], m = f.width, v = f.height;
                    s = t.coordinateSystem = new o, s.zoomLimit = t.get("scaleLimit"), s.setBoundingRect(u[0], u[1], p, g), s.setViewRect(f.x, f.y, m, v), s.setCenter(t.get("center")), s.setZoom(t.get("zoom"))
                }
            }), i
        }
    }, function (t, e) {
        function i(t) {
            return t instanceof Array || (t = [t, t]), t
        }

        t.exports = function (t) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.getEdgeData(), n = i(t.get("edgeSymbol")), o = i(t.get("edgeSymbolSize"));
                e.setVisual("fromSymbol", n && n[0]), e.setVisual("toSymbol", n && n[1]), e.setVisual("fromSymbolSize", o && o[0]), e.setVisual("toSymbolSize", o && o[1]), e.setVisual("color", t.get("lineStyle.normal.color")), e.each(function (t) {
                    var n = e.getItemModel(t), o = i(n.getShallow("symbol", !0)), a = i(n.getShallow("symbolSize", !0));
                    o[0] && e.setItemVisual(t, "fromSymbol", o[0]), o[1] && e.setItemVisual(t, "toSymbol", o[1]), a[0] && e.setItemVisual(t, "fromSymbolSize", a[0]), a[1] && e.setItemVisual(t, "toSymbolSize", a[1])
                })
            })
        }
    }, function (t, e, i) {
        var n = i(5), o = n.scaleAndAdd;
        t.exports = function (t, e, i) {
            for (var a = i.rect, r = a.width, s = a.height, l = [a.x + r / 2, a.y + s / 2], h = null == i.gravity ? .1 : i.gravity, u = 0; u < t.length; u++) {
                var c = t[u];
                c.p || (c.p = n.create(r * (Math.random() - .5) + l[0], s * (Math.random() - .5) + l[1])), c.pp = n.clone(c.p), c.edges = null
            }
            var d = .6;
            return {
                warmUp: function () {
                    d = .5
                }, setFixed: function (e) {
                    t[e].fixed = !0
                }, setUnfixed: function (e) {
                    t[e].fixed = !1
                }, step: function (i) {
                    for (var a = [], r = t.length, s = 0; s < e.length; s++) {
                        var u = e[s], c = u.n1, f = u.n2;
                        n.sub(a, f.p, c.p);
                        var p = n.len(a) - u.d, g = f.w / (c.w + f.w);
                        n.normalize(a, a), !c.fixed && o(c.p, c.p, a, g * p * d), !f.fixed && o(f.p, f.p, a, -(1 - g) * p * d)
                    }
                    for (var s = 0; r > s; s++) {
                        var m = t[s];
                        m.fixed || (n.sub(a, l, m.p), n.scaleAndAdd(m.p, m.p, a, h * d))
                    }
                    for (var s = 0; r > s; s++)for (var c = t[s], v = s + 1; r > v; v++) {
                        var f = t[v];
                        n.sub(a, f.p, c.p);
                        var p = n.len(a);
                        0 === p && (n.set(a, Math.random() - .5, Math.random() - .5), p = 1);
                        var y = (c.rep + f.rep) / p / p;
                        !c.fixed && o(c.pp, c.pp, a, y), !f.fixed && o(f.pp, f.pp, a, -y)
                    }
                    for (var x = [], s = 0; r > s; s++) {
                        var m = t[s];
                        m.fixed || (n.sub(x, m.p, m.pp), n.scaleAndAdd(m.p, m.p, x, d), n.copy(m.pp, m.p))
                    }
                    d = .992 * d, i && i(t, e, .01 > d)
                }
            }
        }
    }, function (t, e, i) {
        var n = i(257), o = i(4), a = i(211), r = i(209), s = i(5);
        t.exports = function (t, e) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.coordinateSystem;
                if (!e || "view" === e.type)if ("force" === t.get("layout")) {
                    var i = t.preservedPoints || {}, l = t.getGraph(), h = l.data, u = l.edgeData, c = t.getModel("force"), d = c.get("initLayout");
                    t.preservedPoints ? h.each(function (t) {
                        var e = h.getId(t);
                        h.setItemLayout(t, i[e] || [NaN, NaN])
                    }) : d && "none" !== d ? "circular" === d && r(t) : a(t);
                    var f = h.getDataExtent("value"), p = c.get("repulsion"), g = c.get("edgeLength"), m = h.mapArray("value", function (t, e) {
                        var i = h.getItemLayout(e), n = o.linearMap(t, f, [0, p]) || p / 2;
                        return {w: n, rep: n, p: !i || isNaN(i[0]) || isNaN(i[1]) ? null : i}
                    }), v = u.mapArray("value", function (t, e) {
                        var i = l.getEdgeByIndex(e);
                        return {
                            n1: m[i.node1.dataIndex],
                            n2: m[i.node2.dataIndex],
                            d: g,
                            curveness: i.getModel().get("lineStyle.normal.curveness") || 0
                        }
                    }), e = t.coordinateSystem, y = e.getBoundingRect(), x = n(m, v, {
                        rect: y,
                        gravity: c.get("gravity")
                    }), _ = x.step;
                    x.step = function (t) {
                        for (var e = 0, n = m.length; n > e; e++)m[e].fixed && s.copy(m[e].p, l.getNodeByIndex(e).getLayout());
                        _(function (e, n, o) {
                            for (var a = 0, r = e.length; r > a; a++)e[a].fixed || l.getNodeByIndex(a).setLayout(e[a].p), i[h.getId(a)] = e[a].p;
                            for (var a = 0, r = n.length; r > a; a++) {
                                var s = n[a], u = s.n1.p, c = s.n2.p, d = [u, c];
                                s.curveness > 0 && d.push([(u[0] + c[0]) / 2 - (u[1] - c[1]) * s.curveness, (u[1] + c[1]) / 2 - (c[0] - u[0]) * s.curveness]), l.getEdgeByIndex(a).setLayout(d)
                            }
                            t && t(o)
                        })
                    }, t.forceLayout = x, t.preservedPoints = i, x.step()
                } else t.forceLayout = null
            })
        }
    }, function (t, e, i) {
        var n = i(2), o = i(208), a = {type: "graphRoam", event: "graphRoam", update: "none"};
        n.registerAction(a, function (t, e) {
            e.eachComponent({mainType: "series", query: t}, function (e) {
                var i = e.coordinateSystem, n = o.updateCenterAndZoom(i, t);
                e.setCenter && e.setCenter(n.center), e.setZoom && e.setZoom(n.zoom)
            })
        })
    }, function (t, e, i) {
        var n = i(211), o = i(210);
        t.exports = function (t, e) {
            t.eachSeriesByType("graph", function (t) {
                var e = t.get("layout"), i = t.coordinateSystem;
                if (i && "view" !== i.type) {
                    var a = t.getData();
                    a.each(i.dimensions, function (t, e, n) {
                        isNaN(t) || isNaN(e) ? a.setItemLayout(n, [NaN, NaN]) : a.setItemLayout(n, i.dataToPoint([t, e]))
                    }), o(a.graph)
                } else e && "none" !== e || n(t)
            })
        }
    }, function (t, e, i) {
        i(263), i(264)
    }, function (t, e, i) {
        function n() {
            var t = a.createCanvas();
            this.canvas = t, this.blurSize = 30, this.pointSize = 20, this.maxOpacity = 1, this.minOpacity = 0, this._gradientPixels = {}
        }

        var o = 256, a = i(1);
        n.prototype = {
            update: function (t, e, i, n, a, r) {
                var s = this._getBrush(), l = this._getGradient(t, a, "inRange"), h = this._getGradient(t, a, "outOfRange"), u = this.pointSize + this.blurSize, c = this.canvas, d = c.getContext("2d"), f = t.length;
                c.width = e, c.height = i;
                for (var p = 0; f > p; ++p) {
                    var g = t[p], m = g[0], v = g[1], y = g[2], x = n(y);
                    d.globalAlpha = x, d.drawImage(s, m - u, v - u)
                }
                for (var _ = d.getImageData(0, 0, c.width, c.height), b = _.data, w = 0, S = b.length, M = this.minOpacity, A = this.maxOpacity, I = A - M; S > w;) {
                    var x = b[w + 3] / 256, T = 4 * Math.floor(x * (o - 1));
                    if (x > 0) {
                        var L = r(x) ? l : h;
                        x > 0 && (x = x * I + M), b[w++] = L[T], b[w++] = L[T + 1], b[w++] = L[T + 2], b[w++] = L[T + 3] * x * 256
                    } else w += 4
                }
                return d.putImageData(_, 0, 0), c
            }, _getBrush: function () {
                var t = this._brushCanvas || (this._brushCanvas = a.createCanvas()), e = this.pointSize + this.blurSize, i = 2 * e;
                t.width = i, t.height = i;
                var n = t.getContext("2d");
                return n.clearRect(0, 0, i, i), n.shadowOffsetX = i, n.shadowBlur = this.blurSize, n.shadowColor = "#000", n.beginPath(), n.arc(-e, e, this.pointSize, 0, 2 * Math.PI, !0), n.closePath(), n.fill(), t
            }, _getGradient: function (t, e, i) {
                for (var n = this._gradientPixels, o = n[i] || (n[i] = new Uint8ClampedArray(1024)), a = [], r = 0, s = 0; 256 > s; s++)e[i](s / 255, !0, a), o[r++] = a[0], o[r++] = a[1], o[r++] = a[2], o[r++] = a[3];
                return o
            }
        }, t.exports = n
    }, function (t, e, i) {
        var n = i(13), o = i(35);
        t.exports = n.extend({
            type: "series.heatmap",
            getInitialData: function (t, e) {
                return o(t.data, this, e)
            },
            defaultOption: {
                coordinateSystem: "cartesian2d",
                zlevel: 0,
                z: 2,
                xAxisIndex: 0,
                yAxisIndex: 0,
                geoIndex: 0,
                blurSize: 30,
                pointSize: 20,
                maxOpacity: 1,
                minOpacity: 0
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t[1] - t[0];
            e = l.map(e, function (e) {
                return {interval: [(e.interval[0] - t[0]) / n, (e.interval[1] - t[0]) / n]}
            });
            var o = e.length, a = 0;
            return function (t) {
                for (var n = a; o > n; n++) {
                    var r = e[n].interval;
                    if (r[0] <= t && t <= r[1]) {
                        a = n;
                        break
                    }
                }
                if (n === o)for (var n = a - 1; n >= 0; n--) {
                    var r = e[n].interval;
                    if (r[0] <= t && t <= r[1]) {
                        a = n;
                        break
                    }
                }
                return n >= 0 && o > n && i[n]
            }
        }

        function o(t, e) {
            var i = t[1] - t[0];
            return e = [(e[0] - t[0]) / i, (e[1] - t[0]) / i], function (t) {
                return t >= e[0] && t <= e[1]
            }
        }

        function a(t) {
            var e = t.dimensions;
            return "lng" === e[0] && "lat" === e[1]
        }

        var r = i(3), s = i(262), l = i(1);
        t.exports = i(2).extendChartView({
            type: "heatmap", render: function (t, e, i) {
                var n;
                if (e.eachComponent("visualMap", function (e) {
                        e.eachTargetSeries(function (i) {
                            i === t && (n = e)
                        })
                    }), !n)throw new Error("Heatmap must use with visualMap");
                this.group.removeAll();
                var o = t.coordinateSystem;
                "cartesian2d" === o.type ? this._renderOnCartesian(o, t, i) : a(o) && this._renderOnGeo(o, t, n, i)
            }, _renderOnCartesian: function (t, e, i) {
                var n = t.getAxis("x"), o = t.getAxis("y"), a = this.group;
                if ("category" !== n.type || "category" !== o.type)throw new Error("Heatmap on cartesian must have two category axes");
                if (!n.onBand || !o.onBand)throw new Error("Heatmap on cartesian must have two axes with boundaryGap true");
                var s = n.getBandWidth(), l = o.getBandWidth(), h = e.getData();
                h.each(["x", "y", "z"], function (i, n, o, u) {
                    var c = h.getItemModel(u), d = t.dataToPoint([i, n]);
                    if (!isNaN(o)) {
                        var f = new r.Rect({
                            shape: {x: d[0] - s / 2, y: d[1] - l / 2, width: s, height: l},
                            style: {fill: h.getItemVisual(u, "color"), opacity: h.getItemVisual(u, "opacity")}
                        }), p = c.getModel("itemStyle.normal").getItemStyle(["color"]), g = c.getModel("itemStyle.emphasis").getItemStyle(), m = c.getModel("label.normal"), v = c.getModel("label.emphasis"), y = e.getRawValue(u), x = "-";
                        y && null != y[2] && (x = y[2]), m.get("show") && (r.setText(p, m), p.text = e.getFormattedLabel(u, "normal") || x), v.get("show") && (r.setText(g, v), g.text = e.getFormattedLabel(u, "emphasis") || x), f.setStyle(p), r.setHoverStyle(f, g), a.add(f), h.setItemGraphicEl(u, f)
                    }
                })
            }, _renderOnGeo: function (t, e, i, a) {
                var l = i.targetVisuals.inRange, h = i.targetVisuals.outOfRange, u = e.getData(), c = this._hmLayer || this._hmLayer || new s;
                c.blurSize = e.get("blurSize"), c.pointSize = e.get("pointSize"), c.minOpacity = e.get("minOpacity"), c.maxOpacity = e.get("maxOpacity");
                var d = t.getViewRect().clone(), f = t.getRoamTransform().transform;
                d.applyTransform(f);
                var p = Math.max(d.x, 0), g = Math.max(d.y, 0), m = Math.min(d.width + d.x, a.getWidth()), v = Math.min(d.height + d.y, a.getHeight()), y = m - p, x = v - g, _ = u.mapArray(["lng", "lat", "value"], function (e, i, n) {
                    var o = t.dataToPoint([e, i]);
                    return o[0] -= p, o[1] -= g, o.push(n), o
                }), b = i.getExtent(), w = "visualMap.continuous" === i.type ? o(b, i.option.range) : n(b, i.getPieceList(), i.option.selected);
                c.update(_, y, x, l.color.getNormalizer(), {
                    inRange: l.color.getColorMapper(),
                    outOfRange: h.color.getColorMapper()
                }, w);
                var S = new r.Image({style: {width: y, height: x, x: p, y: g, image: c.canvas}, silent: !0});
                this.group.add(S)
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            r.Group.call(this);
            var i = new s(t, e);
            this.add(i), this._updateEffectSymbol(t, e)
        }

        function o(t, e) {
            t.__p1 = e[0], t.__p2 = e[1], t.__cp1 = e[2] || [(e[0][0] + e[1][0]) / 2, (e[0][1] + e[1][1]) / 2]
        }

        function a() {
            var t = this.__p1, e = this.__p2, i = this.__cp1, n = this.__t, o = this.position, a = u.quadraticAt, r = u.quadraticDerivativeAt;
            o[0] = a(t[0], i[0], e[0], n), o[1] = a(t[1], i[1], e[1], n);
            var s = r(t[0], i[0], e[0], n), l = r(t[1], i[1], e[1], n);
            this.rotation = -Math.atan2(l, s) - Math.PI / 2, this.ignore = !1
        }

        var r = i(3), s = i(83), l = i(1), h = i(25), u = i(16), c = n.prototype;
        c._updateEffectSymbol = function (t, e) {
            var i = t.getItemModel(e), n = i.getModel("effect"), r = n.get("symbolSize"), s = n.get("symbol");
            l.isArray(r) || (r = [r, r]);
            var u = n.get("color") || t.getItemVisual(e, "color"), c = this.childAt(1), d = 1e3 * n.get("period");
            this._symbolType === s && d === this._period || (c = h.createSymbol(s, -.5, -.5, 1, 1, u), c.ignore = !0, c.z2 = 100, this._symbolType = s, this._period = d, this.add(c), c.__t = 0, c.animate("", !0).when(d, {__t: 1}).delay(e / t.count() * d / 2).during(l.bind(a, c)).start()), c.setStyle("shadowColor", u), c.setStyle(n.getItemStyle(["color"])), c.attr("scale", r);
            var f = t.getItemLayout(e);
            o(c, f), c.setColor(u), c.attr("scale", r)
        }, c.updateData = function (t, e) {
            this.childAt(0).updateData(t, e), this._updateEffectSymbol(t, e)
        }, c.updateLayout = function (t, e) {
            this.childAt(0).updateLayout(t, e);
            var i = this.childAt(1), n = t.getItemLayout(e);
            o(i, n)
        }, l.inherits(n, r.Group), t.exports = n
    }, function (t, e, i) {
        function n(t) {
            return a.isArray(t) || (t = [+t, +t]), t
        }

        function o(t, e) {
            u.call(this);
            var i = new h(t, e), n = new u;
            this.add(i), this.add(n), n.beforeUpdate = function () {
                this.attr(i.getScale())
            }, this.updateData(t, e)
        }

        var a = i(1), r = i(25), s = i(3), l = i(4), h = i(47), u = s.Group, c = 3, d = o.prototype;
        d.stopEffectAnimation = function () {
            this.childAt(1).removeAll()
        }, d.startEffectAnimation = function (t, e, i, n, o, a) {
            for (var s = this._symbolType, l = this._color, h = this.childAt(1), u = 0; c > u; u++) {
                var d = r.createSymbol(s, -.5, -.5, 1, 1, l);
                d.attr({
                    style: {stroke: "stroke" === e ? l : null, fill: "fill" === e ? l : null, strokeNoScale: !0},
                    z2: 99,
                    silent: !0,
                    scale: [1, 1],
                    z: o,
                    zlevel: a
                });
                var f = -u / c * t + n;
                d.animate("", !0).when(t, {scale: [i, i]}).delay(f).start(), d.animateStyle(!0).when(t, {opacity: 0}).delay(f).start(), h.add(d)
            }
        }, d.highlight = function () {
            this.trigger("emphasis")
        }, d.downplay = function () {
            this.trigger("normal")
        }, d.updateData = function (t, e) {
            function i() {
                b.trigger("emphasis"), "render" !== p && this.startEffectAnimation(v, m, g, y, x, _)
            }

            function o() {
                b.trigger("normal"), "render" !== p && this.stopEffectAnimation()
            }

            var a = t.hostModel;
            this.childAt(0).updateData(t, e);
            var r = this.childAt(1), s = t.getItemModel(e), h = t.getItemVisual(e, "symbol"), u = n(t.getItemVisual(e, "symbolSize")), c = t.getItemVisual(e, "color");
            r.attr("scale", u), r.traverse(function (t) {
                t.attr({fill: c})
            });
            var d = s.getShallow("symbolOffset");
            if (d) {
                var f = r.position;
                f[0] = l.parsePercent(d[0], u[0]), f[1] = l.parsePercent(d[1], u[1])
            }
            r.rotation = (s.getShallow("symbolRotate") || 0) * Math.PI / 180 || 0, this._symbolType = h, this._color = c;
            var p = a.get("showEffectOn"), g = s.get("rippleEffect.scale"), m = s.get("rippleEffect.brushType"), v = 1e3 * s.get("rippleEffect.period"), y = e / t.count(), x = s.getShallow("z") || 0, _ = s.getShallow("zlevel") || 0;
            this.stopEffectAnimation(), "render" === p && this.startEffectAnimation(v, m, g, y, x, _);
            var b = this.childAt(0);
            this.on("mouseover", i, this).on("mouseout", o, this).on("emphasis", i, this).on("normal", o, this)
        }, d.fadeOut = function (t) {
            this.off("mouseover").off("mouseout").off("emphasis").off("normal"), t && t()
        }, a.inherits(o, u), t.exports = o
    }, function (t, e, i) {
        function n(t, e, i, n) {
            l.Group.call(this), this.bodyIndex, this.whiskerIndex, this.styleUpdater = i, this._createContent(t, e, n), this.updateData(t, e, n), this._seriesModel
        }

        function o(t, e, i) {
            return s.map(t, function (t) {
                return t = t.slice(), t[e] = i.initBaseline, t
            })
        }

        function a(t) {
            var e = {};
            return s.each(t, function (t, i) {
                e["ends" + i] = t
            }), e
        }

        function r(t) {
            this.group = new l.Group, this.styleUpdater = t
        }

        var s = i(1), l = i(3), h = i(6), u = h.extend({
            type: "whiskerInBox", shape: {}, buildPath: function (t, e) {
                for (var i in e)if (0 === i.indexOf("ends")) {
                    var n = e[i];
                    t.moveTo(n[0][0], n[0][1]), t.lineTo(n[1][0], n[1][1])
                }
            }
        }), c = n.prototype;
        c._createContent = function (t, e, i) {
            var n = t.getItemLayout(e), r = "horizontal" === n.chartLayout ? 1 : 0, h = 0;
            this.add(new l.Polygon({
                shape: {points: i ? o(n.bodyEnds, r, n) : n.bodyEnds},
                style: {strokeNoScale: !0},
                z2: 100
            })), this.bodyIndex = h++;
            var c = s.map(n.whiskerEnds, function (t) {
                return i ? o(t, r, n) : t
            });
            this.add(new u({shape: a(c), style: {strokeNoScale: !0}, z2: 100})), this.whiskerIndex = h++
        }, c.updateData = function (t, e, i) {
            var n = this._seriesModel = t.hostModel, o = t.getItemLayout(e), r = l[i ? "initProps" : "updateProps"];
            r(this.childAt(this.bodyIndex), {shape: {points: o.bodyEnds}}, n, e), r(this.childAt(this.whiskerIndex), {shape: a(o.whiskerEnds)}, n, e), this.styleUpdater.call(null, this, t, e)
        }, s.inherits(n, l.Group);
        var d = r.prototype;
        d.updateData = function (t) {
            var e = this.group, i = this._data, o = this.styleUpdater;
            t.diff(i).add(function (i) {
                if (t.hasValue(i)) {
                    var a = new n(t, i, o, !0);
                    t.setItemGraphicEl(i, a), e.add(a)
                }
            }).update(function (a, r) {
                var s = i.getItemGraphicEl(r);
                return t.hasValue(a) ? (s ? s.updateData(t, a) : s = new n(t, a, o), e.add(s), void t.setItemGraphicEl(a, s)) : void e.remove(s)
            }).remove(function (t) {
                var n = i.getItemGraphicEl(t);
                n && e.remove(n)
            }).execute(), this._data = t
        }, d.remove = function () {
            var t = this.group, e = this._data;
            this._data = null, e && e.eachItemGraphicEl(function (e) {
                e && t.remove(e)
            })
        }, t.exports = r
    }, function (t, e, i) {
        i(269), i(270);
        var n = i(1), o = i(2);
        o.registerLayout(i(271)), o.registerVisualCoding("chart", n.curry(i(74), "lines", "lineStyle"))
    }, function (t, e, i) {
        "use strict";
        var n = i(13), o = i(15), a = i(1), r = i(23);
        t.exports = n.extend({
            type: "series.lines",
            dependencies: ["grid", "polar"],
            getInitialData: function (t, e) {
                function i(t, e, i, n) {
                    return t.coord && t.coord[n]
                }

                var n = [], s = [], l = [];
                a.each(t.data, function (t) {
                    n.push(t[0]), s.push(t[1]), l.push(a.extend(a.extend({}, a.isArray(t[0]) ? null : t[0]), a.isArray(t[1]) ? null : t[1]))
                });
                var h = r.get(t.coordinateSystem);
                if (!h)throw new Error("Invalid coordinate system");
                var u = h.dimensions, c = new o(u, this), d = new o(u, this), f = new o(["value"], this);
                return c.initData(n, null, i), d.initData(s, null, i), f.initData(l), this.fromData = c, this.toData = d, f
            },
            formatTooltip: function (t) {
                var e = this.fromData.getName(t), i = this.toData.getName(t);
                return e + " > " + i
            },
            defaultOption: {
                coordinateSystem: "geo",
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                xAxisIndex: 0,
                yAxisIndex: 0,
                geoIndex: 0,
                effect: {show: !1, period: 4, symbol: "circle", symbolSize: 3, trailLength: .2},
                large: !1,
                largeThreshold: 2e3,
                label: {normal: {show: !1, position: "end"}},
                lineStyle: {normal: {opacity: .5}}
            }
        })
    }, function (t, e, i) {
        var n = i(84), o = i(265), a = i(83);
        i(2).extendChartView({
            type: "lines", init: function () {
            }, render: function (t, e, i) {
                var r = t.getData(), s = this._lineDraw, l = t.get("effect.show");
                l !== this._hasEffet && (s && s.remove(), s = this._lineDraw = new n(l ? o : a), this._hasEffet = l);
                var h = t.get("zlevel"), u = t.get("effect.trailLength"), c = i.getZr();
                c.painter.getLayer(h).clear(!0), null != this._lastZlevel && c.configLayer(this._lastZlevel, {motionBlur: !1}), l && u && c.configLayer(h, {
                    motionBlur: !0,
                    lastFrameAlpha: Math.max(Math.min(u / 10 + .9, 1), 0)
                }), this.group.add(s.group), s.updateData(r), this._lastZlevel = h
            }, updateLayout: function (t, e, i) {
                this._lineDraw.updateLayout();
                var n = i.getZr();
                n.painter.getLayer(this._lastZlevel).clear(!0)
            }, remove: function (t, e) {
                this._lineDraw && this._lineDraw.remove(e, !0)
            }
        })
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("lines", function (t) {
                var e = t.coordinateSystem, i = t.fromData, n = t.toData, o = t.getData(), a = e.dimensions;
                i.each(a, function (t, n, o) {
                    i.setItemLayout(o, e.dataToPoint([t, n]))
                }), n.each(a, function (t, i, o) {
                    n.setItemLayout(o, e.dataToPoint([t, i]))
                }), o.each(function (t) {
                    var e, a = i.getItemLayout(t), r = n.getItemLayout(t), s = o.getItemModel(t).get("lineStyle.normal.curveness");
                    s > 0 && (e = [(a[0] + r[0]) / 2 - (a[1] - r[1]) * s, (a[1] + r[1]) / 2 - (r[0] - a[0]) * s]), o.setItemLayout(t, [a, r, e])
                })
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(273), i(274), i(207), i(162), n.registerLayout(i(277)), n.registerVisualCoding("chart", i(278)), n.registerProcessor("statistic", i(276)), n.registerPreprocessor(i(275)), i(69)("map", [{
            type: "mapToggleSelect",
            event: "mapselectchanged",
            method: "toggleSelected"
        }, {type: "mapSelect", event: "mapselected", method: "select"}, {
            type: "mapUnSelect",
            event: "mapunselected",
            method: "unSelect"
        }])
    }, function (t, e, i) {
        var n = i(15), o = i(13), a = i(1), r = i(31), s = i(9), l = s.encodeHTML, h = s.addCommas, u = i(61), c = i(162), d = o.extend({
            type: "series.map", needsDrawMap: !1, seriesGroup: [], init: function (t) {
                t = this._fillOption(t, t.map), this.option = t, d.superApply(this, "init", arguments), this.updateSelectedMap(t.data)
            }, getInitialData: function (t) {
                var e = r(["value"], t.data || []), i = new n(e, this);
                return i.initData(t.data), i
            }, mergeOption: function (t) {
                t.data && (t = this._fillOption(t, this.option.map)), d.superCall(this, "mergeOption", t), this.updateSelectedMap(this.option.data)
            }, _fillOption: function (t, e) {
                return t = a.extend({}, t), t.data = c.getFilledRegions(t.data, e), t
            }, getRawValue: function (t) {
                return this._data.get("value", t)
            }, getRegionModel: function (t) {
                var e = this.getData();
                return e.getItemModel(e.indexOfName(t))
            }, formatTooltip: function (t) {
                for (var e = this._data, i = h(this.getRawValue(t)), n = e.getName(t), o = this.seriesGroup, a = [], r = 0; r < o.length; r++)isNaN(o[r].getRawValue(t)) || a.push(l(o[r].name));
                return a.join(", ") + "<br />" + n + " : " + i
            }, defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "geo",
                map: "china",
                left: "center",
                top: "center",
                showLegendSymbol: !0,
                dataRangeHoverLink: !0,
                center: null,
                zoom: 1,
                scaleLimit: null,
                label: {
                    normal: {show: !1, textStyle: {color: "#000"}},
                    emphasis: {show: !0, textStyle: {color: "rgb(100,0,0)"}}
                },
                itemStyle: {
                    normal: {borderWidth: .5, borderColor: "#444", areaColor: "#eee"}, emphasis: {
                        areaColor: "rgba(255,215, 0, 0.8)"
                    }
                }
            }, setZoom: function (t) {
                this.option.zoom = t
            }, setCenter: function (t) {
                this.option.center = t
            }
        });
        a.mixin(d, u), t.exports = d
    }, function (t, e, i) {
        var n = i(3), o = i(213);
        i(2).extendChartView({
            type: "map", render: function (t, e, i, n) {
                if (!n || "mapToggleSelect" !== n.type || n.from !== this.uid) {
                    var a = this.group;
                    if (a.removeAll(), n && "geoRoam" === n.type && "series" === n.component && n.name === t.name) {
                        var r = this._mapDraw;
                        r && a.add(r.group)
                    } else if (t.needsDrawMap) {
                        var r = this._mapDraw || new o(i, !0);
                        a.add(r.group), r.draw(t, e, i, this, n), this._mapDraw = r
                    } else this._mapDraw && this._mapDraw.remove(), this._mapDraw = null;
                    t.get("showLegendSymbol") && e.getComponent("legend") && this._renderSymbols(t, e, i)
                }
            }, remove: function () {
                this._mapDraw && this._mapDraw.remove(), this._mapDraw = null, this.group.removeAll()
            }, _renderSymbols: function (t, e, i) {
                var o = t.getData(), a = this.group;
                o.each("value", function (t, e) {
                    if (!isNaN(t)) {
                        var i = o.getItemLayout(e);
                        if (i && i.point) {
                            var r = i.point, s = i.offset, l = new n.Circle({
                                style: {fill: o.getVisual("color")},
                                shape: {cx: r[0] + 9 * s, cy: r[1], r: 3},
                                silent: !0,
                                z2: 10
                            });
                            if (!s) {
                                var h = o.getName(e), u = o.getItemModel(e), c = u.getModel("label.normal"), d = u.getModel("label.emphasis"), f = c.getModel("textStyle"), p = d.getModel("textStyle"), g = o.getItemGraphicEl(e);
                                l.setStyle({textPosition: "bottom"});
                                var m = function () {
                                    l.setStyle({
                                        text: d.get("show") ? h : "",
                                        textFill: p.getTextColor(),
                                        textFont: p.getFont()
                                    })
                                }, v = function () {
                                    l.setStyle({
                                        text: c.get("show") ? h : "",
                                        textFill: f.getTextColor(),
                                        textFont: f.getFont()
                                    })
                                };
                                g.on("mouseover", m).on("mouseout", v).on("emphasis", m).on("normal", v), v()
                            }
                            a.add(l)
                        }
                    }
                })
            }
        })
    }, function (t, e, i) {
        function n(t) {
            var e = {};
            return o.each(a, function (i) {
                null != t[i] && (e[i] = t[i])
            }), e
        }

        var o = i(1), a = ["x", "y", "x2", "y2", "width", "height", "map", "roam", "center", "zoom", "scaleLimit", "label", "itemStyle"], r = {};
        t.exports = function (t) {
            var e = [];
            o.each(t.series, function (t) {
                "map" === t.type && e.push(t), o.extend(r, t.geoCoord)
            });
            var i = {};
            o.each(e, function (e) {
                if (e.map = e.map || e.mapType, o.defaults(e, e.mapLocation), e.markPoint) {
                    var a = e.markPoint;
                    if (a.data = o.map(a.data, function (t) {
                            if (!o.isArray(t.value)) {
                                var e;
                                t.geoCoord ? e = t.geoCoord : t.name && (e = r[t.name]);
                                var i = e ? [e[0], e[1]] : [NaN, NaN];
                                null != t.value && i.push(t.value), t.value = i
                            }
                            return t
                        }), !e.data || !e.data.length) {
                        t.geo ? o.isArray(t.geo) || (t.geo = [t.geo]) : t.geo = [];
                        var s = i[e.map];
                        s || (s = i[e.map] = n(e), t.geo.push(s));
                        var l = e.markPoint;
                        l.type = t.effect && t.effect.show ? "effectScatter" : "scatter", l.coordinateSystem = "geo", l.geoIndex = o.indexOf(t.geo, s), l.name = e.name, t.series.splice(o.indexOf(t.series, e), 1, l)
                    }
                }
            })
        }
    }, function (t, e, i) {
        function n(t, e) {
            for (var i = {}, n = ["value"], o = 0; o < t.length; o++)t[o].each(n, function (e, n) {
                var a = t[o].getName(n);
                i[a] = i[a] || [], isNaN(e) || i[a].push(e)
            });
            return t[0].map(n, function (n, o) {
                for (var a = t[0].getName(o), r = 0, s = 1 / 0, l = -(1 / 0), h = i[a].length, u = 0; h > u; u++)s = Math.min(s, i[a][u]), l = Math.max(l, i[a][u]), r += i[a][u];
                var c;
                return c = "min" === e ? s : "max" === e ? l : "average" === e ? r / h : r, 0 === h ? NaN : c
            })
        }

        var o = i(1);
        t.exports = function (t) {
            var e = {};
            t.eachSeriesByType("map", function (t) {
                var i = t.get("map");
                e[i] = e[i] || [], e[i].push(t)
            }), o.each(e, function (t, e) {
                var i = n(o.map(t, function (t) {
                    return t.getData()
                }), t[0].get("mapValueCalculation"));
                t[0].seriesGroup = [], t[0].setData(i);
                for (var a = 0; a < t.length; a++)t[a].seriesGroup = t, t[a].needsDrawMap = 0 === a
            })
        }
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            var e = {};
            t.eachSeriesByType("map", function (i) {
                var o = i.get("map");
                if (!e[o]) {
                    var a = {};
                    n.each(i.seriesGroup, function (e) {
                        var i = e.coordinateSystem, n = e.getData();
                        e.get("showLegendSymbol") && t.getComponent("legend") && n.each("value", function (t, e) {
                            var o = n.getName(e), r = i.getRegion(o);
                            if (r && !isNaN(t)) {
                                var s = a[o] || 0, l = i.dataToPoint(r.center);
                                a[o] = s + 1, n.setItemLayout(e, {point: l, offset: s})
                            }
                        })
                    });
                    var r = i.getData();
                    r.each(function (t) {
                        var e = r.getName(t), i = r.getItemLayout(t) || {};
                        i.showLabel = !a[e], r.setItemLayout(t, i)
                    }), e[o] = !0
                }
            })
        }
    }, function (t, e) {
        t.exports = function (t) {
            t.eachSeriesByType("map", function (t) {
                var e = t.get("color"), i = t.getModel("itemStyle.normal"), n = i.get("areaColor"), o = i.get("color") || e[t.seriesIndex % e.length];
                t.getData().setVisual({areaColor: n, color: o})
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(214), i(280), i(281), n.registerVisualCoding("chart", i(282))
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.get("data"), o = +e.replace("dim", "");
            n && n.length && a.each(i, function (t) {
                if (t) {
                    var e = a.indexOf(n, t[o]);
                    t[o] = e >= 0 ? e : NaN
                }
            })
        }

        var o = i(15), a = i(1), r = i(13);
        t.exports = r.extend({
            type: "series.parallel",
            dependencies: ["parallel"],
            getInitialData: function (t, e) {
                var i = e.getComponent("parallel", this.get("parallelIndex")), r = i.dimensions, s = i.parallelAxisIndex, l = t.data, h = a.map(r, function (t, i) {
                    var o = e.getComponent("parallelAxis", s[i]);
                    return "category" === o.get("type") ? (n(o, t, l), {name: t, type: "ordinal"}) : t
                }), u = new o(h, this);
                return u.initData(l), u
            },
            getRawIndicesByActiveState: function (t) {
                var e = this.coordinateSystem, i = this.getData(), n = [];
                return e.eachActiveState(i, function (e, o) {
                    t === e && n.push(i.getRawIndex(o))
                }), n
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "parallel",
                parallelIndex: 0,
                label: {normal: {show: !1}, emphasis: {show: !1}},
                inactiveOpacity: .05,
                activeOpacity: 1,
                lineStyle: {normal: {width: 2, opacity: .45, type: "solid"}},
                animationEasing: "linear"
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = t.model, o = t.getRect(), a = new s.Rect({
                shape: {
                    x: o.x,
                    y: o.y,
                    width: o.width,
                    height: o.height
                }
            }), r = "horizontal" === n.get("layout") ? "width" : "height";
            return a.setShape(r, 0), s.initProps(a, {shape: {width: o.width, height: o.height}}, e, i), a
        }

        function o(t, e, i, n) {
            for (var o = 0, a = e.length - 1; a > o; o++) {
                var s = e[o], l = e[o + 1], h = t[o], u = t[o + 1];
                n(r(h, i.getAxis(s).type) || r(u, i.getAxis(l).type) ? null : [i.dataToPoint(h, s), i.dataToPoint(u, l)], o)
            }
        }

        function a(t) {
            return new s.Polyline({shape: {points: t}, silent: !0})
        }

        function r(t, e) {
            return "category" === e ? null == t : null == t || isNaN(t)
        }

        var s = i(3), l = i(1), h = i(26).extend({
            type: "parallel", init: function () {
                this._dataGroup = new s.Group, this.group.add(this._dataGroup), this._data
            }, render: function (t, e, i, r) {
                function h(t) {
                    var e = f.getValues(m, t), i = new s.Group;
                    d.add(i), o(e, m, g, function (t, e) {
                        t && i.add(a(t))
                    }), f.setItemGraphicEl(t, i)
                }

                function u(e, i) {
                    var n = f.getValues(m, e), r = p.getItemGraphicEl(i), l = [], h = 0;
                    o(n, m, g, function (i, n) {
                        var o = r.childAt(h++);
                        i && !o ? l.push(a(i)) : i && s.updateProps(o, {shape: {points: i}}, t, e)
                    });
                    for (var u = r.childCount() - 1; u >= h; u--)r.remove(r.childAt(u));
                    for (var u = 0, c = l.length; c > u; u++)r.add(l[u]);
                    f.setItemGraphicEl(e, r)
                }

                function c(t) {
                    var e = p.getItemGraphicEl(t);
                    d.remove(e)
                }

                var d = this._dataGroup, f = t.getData(), p = this._data, g = t.coordinateSystem, m = g.dimensions;
                f.diff(p).add(h).update(u).remove(c).execute(), f.eachItemGraphicEl(function (t, e) {
                    var i = f.getItemModel(e), n = i.getModel("lineStyle.normal");
                    t.eachChild(function (t) {
                        t.useStyle(l.extend(n.getLineStyle(), {
                            fill: null,
                            stroke: f.getItemVisual(e, "color"),
                            opacity: f.getItemVisual(e, "opacity")
                        }))
                    })
                }), this._data || d.setClipPath(n(g, t, function () {
                    d.removeClipPath()
                })), this._data = f
            }, remove: function () {
                this._dataGroup && this._dataGroup.removeAll(), this._data = null
            }
        });
        t.exports = h
    }, function (t, e) {
        t.exports = function (t, e) {
            t.eachSeriesByType("parallel", function (e) {
                var i = e.getModel("itemStyle.normal"), n = t.get("color"), o = i.get("color") || n[e.seriesIndex % n.length], a = e.get("inactiveOpacity"), r = e.get("activeOpacity"), s = e.getModel("lineStyle.normal").getLineStyle(), l = e.coordinateSystem, h = e.getData(), u = {
                    normal: s.opacity,
                    active: r,
                    inactive: a
                };
                l.eachActiveState(h, function (t, e) {
                    h.setItemVisual(e, "opacity", u[t])
                }), h.setVisual("color", o)
            })
        }
    }, function (t, e, i) {
        var n = i(1), o = i(2);
        i(309), i(284), i(285), o.registerVisualCoding("chart", n.curry(i(64), "radar")), o.registerVisualCoding("chart", n.curry(i(44), "radar", "circle", null)), o.registerLayout(i(287)), o.registerProcessor("filter", n.curry(i(63), "radar")), o.registerPreprocessor(i(286))
    }, function (t, e, i) {
        "use strict";
        var n = i(13), o = i(15), a = i(31), r = i(1), s = n.extend({
            type: "series.radar",
            dependencies: ["radar"],
            init: function (t) {
                s.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this._dataBeforeProcessed
                }
            },
            getInitialData: function (t, e) {
                var i = t.data || [], n = a([], i, [], "indicator_"), r = new o(n, this);
                return r.initData(i), r
            },
            formatTooltip: function (t) {
                var e = this.getRawValue(t), i = this.coordinateSystem, n = i.getIndicatorAxes();
                return this._data.getName(t) + "<br />" + r.map(n, function (t, i) {
                        return t.name + " : " + e[i]
                    }).join("<br />")
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "radar",
                legendHoverLink: !0,
                radarIndex: 0,
                lineStyle: {normal: {width: 2, type: "solid"}},
                label: {normal: {position: "top"}},
                symbol: "emptyCircle",
                symbolSize: 4
            }
        });
        t.exports = s
    }, function (t, e, i) {
        function n(t) {
            return a.isArray(t) || (t = [+t, +t]), t
        }

        var o = i(3), a = i(1), r = i(25);
        t.exports = i(2).extendChartView({
            type: "radar", render: function (t, e, i) {
                function s(t, e) {
                    var i = t.getItemVisual(e, "symbol") || "circle", o = t.getItemVisual(e, "color");
                    if ("none" !== i) {
                        var a = r.createSymbol(i, -.5, -.5, 1, 1, o);
                        return a.attr({
                            style: {strokeNoScale: !0},
                            z2: 100,
                            scale: n(t.getItemVisual(e, "symbolSize"))
                        }), a
                    }
                }

                function l(e, i, n, a, r, l) {
                    n.removeAll();
                    for (var h = 0; h < i.length - 1; h++) {
                        var u = s(a, r);
                        u && (u.__dimIdx = h, e[h] ? (u.attr("position", e[h]), o[l ? "initProps" : "updateProps"](u, {position: i[h]}, t, r)) : u.attr("position", i[h]), n.add(u))
                    }
                }

                function h(t) {
                    return a.map(t, function (t) {
                        return [u.cx, u.cy]
                    })
                }

                var u = t.coordinateSystem, c = this.group, d = t.getData(), f = this._data;
                d.diff(f).add(function (e) {
                    var i = d.getItemLayout(e);
                    if (i) {
                        var n = new o.Polygon, a = new o.Polyline, r = {shape: {points: i}};
                        n.shape.points = h(i), a.shape.points = h(i), o.initProps(n, r, t, e), o.initProps(a, r, t, e);
                        var s = new o.Group, u = new o.Group;
                        s.add(a), s.add(n), s.add(u), l(a.shape.points, i, u, d, e, !0), d.setItemGraphicEl(e, s)
                    }
                }).update(function (e, i) {
                    var n = f.getItemGraphicEl(i), a = n.childAt(0), r = n.childAt(1), s = n.childAt(2), h = {shape: {points: d.getItemLayout(e)}};
                    h.shape.points && (l(a.shape.points, h.shape.points, s, d, e, !1), o.updateProps(a, h, t), o.updateProps(r, h, t), d.setItemGraphicEl(e, n))
                }).remove(function (t) {
                    c.remove(f.getItemGraphicEl(t))
                }).execute(), d.eachItemGraphicEl(function (e, i) {
                    function n() {
                        h.attr("ignore", v)
                    }

                    function r() {
                        h.attr("ignore", m)
                    }

                    var s = d.getItemModel(i), l = e.childAt(0), h = e.childAt(1), u = e.childAt(2), f = d.getItemVisual(i, "color");
                    c.add(e), l.useStyle(a.extend(s.getModel("lineStyle.normal").getLineStyle(), {
                        fill: "none",
                        stroke: f
                    })), l.hoverStyle = s.getModel("lineStyle.emphasis").getLineStyle();
                    var p = s.getModel("areaStyle.normal"), g = s.getModel("areaStyle.emphasis"), m = p.isEmpty() && p.parentModel.isEmpty(), v = g.isEmpty() && g.parentModel.isEmpty();
                    v = v && m, h.ignore = m, h.useStyle(a.defaults(p.getAreaStyle(), {
                        fill: f,
                        opacity: .7
                    })), h.hoverStyle = g.getAreaStyle();
                    var y = s.getModel("itemStyle.normal").getItemStyle(["color"]), x = s.getModel("itemStyle.emphasis").getItemStyle(), _ = s.getModel("label.normal"), b = s.getModel("label.emphasis");
                    u.eachChild(function (e) {
                        e.setStyle(y), e.hoverStyle = a.clone(x);
                        var n = d.get(d.dimensions[e.__dimIdx], i);
                        o.setText(e.style, _, f), e.setStyle({text: _.get("show") ? a.retrieve(t.getFormattedLabel(i, "normal", null, e.__dimIdx), n) : ""}), o.setText(e.hoverStyle, b, f), e.hoverStyle.text = b.get("show") ? a.retrieve(t.getFormattedLabel(i, "emphasis", null, e.__dimIdx), n) : ""
                    }), e.off("mouseover").off("mouseout").off("normal").off("emphasis"), e.on("emphasis", n).on("mouseover", n).on("normal", r).on("mouseout", r), o.setHoverStyle(e)
                }), this._data = d
            }, remove: function () {
                this.group.removeAll(), this._data = null
            }
        })
    }, function (t, e, i) {
        var n = i(1);
        t.exports = function (t) {
            var e = t.polar;
            if (e) {
                n.isArray(e) || (e = [e]);
                var i = [];
                n.each(e, function (e, o) {
                    e.indicator ? (e.type && !e.shape && (e.shape = e.type), t.radar = t.radar || [], n.isArray(t.radar) || (t.radar = [t.radar]), t.radar.push(e)) : i.push(e)
                }), t.polar = i
            }
            n.each(t.series, function (t) {
                "radar" === t.type && t.polarIndex && (t.radarIndex = t.polarIndex)
            })
        }
    }, function (t, e) {
        t.exports = function (t, e) {
            t.eachSeriesByType("radar", function (t) {
                function e(t, e) {
                    n[e] = n[e] || [], n[e][a] = o.dataToPoint(t, a)
                }

                var i = t.getData(), n = [], o = t.coordinateSystem;
                if (o) {
                    for (var a = 0; a < o.getIndicatorAxes().length; a++) {
                        var r = i.dimensions[a];
                        i.each(r, e)
                    }
                    i.each(function (t) {
                        n[t][0] && n[t].push(n[t][0].slice()), i.setItemLayout(t, n[t])
                    })
                }
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(289), i(290), n.registerLayout(i(291)), n.registerVisualCoding("chart", i(292))
    }, function (t, e, i) {
        "use strict";
        var n = i(13), o = i(212), a = n.extend({
            type: "series.sankey",
            layoutInfo: null,
            getInitialData: function (t, e) {
                var i = t.edges || t.links, n = t.data || t.nodes;
                if (n && i) {
                    var a = o(n, i, this, !0);
                    return a.data
                }
            },
            getGraph: function () {
                return this.getData().graph
            },
            getEdgeData: function () {
                return this.getGraph().edgeData
            },
            formatTooltip: function (t, e, i) {
                if ("edge" === i) {
                    var n = this.getDataParams(t, i), o = n.data, r = o.source + " -- " + o.target;
                    return n.value && (r += " : " + n.value), r
                }
                return a.superCall(this, "formatTooltip", t, e)
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                coordinateSystem: "view",
                layout: null,
                left: "5%",
                top: "5%",
                right: "20%",
                bottom: "5%",
                nodeWidth: 20,
                nodeGap: 8,
                layoutIterations: 32,
                label: {
                    normal: {show: !0, position: "right", textStyle: {color: "#000", fontSize: 12}},
                    emphasis: {show: !0}
                },
                itemStyle: {normal: {borderWidth: 1, borderColor: "#333"}},
                lineStyle: {normal: {color: "#314656", opacity: .2, curveness: .5}, emphasis: {opacity: .6}},
                animationEasing: "linear",
                animationDuration: 1e3
            }
        });
        t.exports = a
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = new o.Rect({shape: {x: t.x - 10, y: t.y - 10, width: 0, height: t.height + 20}});
            return o.initProps(n, {shape: {width: t.width + 20, height: t.height + 20}}, e, i), n
        }

        var o = i(3), a = i(1), r = o.extendShape({
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                cpx1: 0,
                cpy1: 0,
                cpx2: 0,
                cpy2: 0,
                extent: 0
            }, buildPath: function (t, e) {
                var i = e.extent / 2;
                t.moveTo(e.x1, e.y1 - i), t.bezierCurveTo(e.cpx1, e.cpy1 - i, e.cpx2, e.cpy2 - i, e.x2, e.y2 - i), t.lineTo(e.x2, e.y2 + i), t.bezierCurveTo(e.cpx2, e.cpy2 + i, e.cpx1, e.cpy1 + i, e.x1, e.y1 + i), t.closePath()
            }
        });
        t.exports = i(2).extendChartView({
            type: "sankey", _model: null, render: function (t, e, i) {
                var s = t.getGraph(), l = this.group, h = t.layoutInfo, u = t.getData(), c = t.getData("edge");
                this._model = t, l.removeAll(), l.position = [h.x, h.y], s.eachNode(function (e) {
                    var i = e.getLayout(), n = e.getModel(), r = n.getModel("label.normal"), s = r.getModel("textStyle"), h = n.getModel("label.emphasis"), c = h.getModel("textStyle"), d = new o.Rect({
                        shape: {
                            x: i.x,
                            y: i.y,
                            width: e.getLayout().dx,
                            height: e.getLayout().dy
                        },
                        style: {
                            text: r.get("show") ? t.getFormattedLabel(e.dataIndex, "normal") || e.id : "",
                            textFont: s.getFont(),
                            textFill: s.getTextColor(),
                            textPosition: r.get("position")
                        }
                    });
                    d.setStyle(a.defaults({fill: e.getVisual("color")}, n.getModel("itemStyle.normal").getItemStyle())), o.setHoverStyle(d, a.extend(e.getModel("itemStyle.emphasis"), {
                        text: h.get("show") ? t.getFormattedLabel(e.dataIndex, "emphasis") || e.id : "",
                        textFont: c.getFont(),
                        textFill: c.getTextColor(),
                        textPosition: h.get("position")
                    })), l.add(d), u.setItemGraphicEl(e.dataIndex, d), d.dataType = "node"
                }), s.eachEdge(function (e) {
                    var i = new r;
                    i.dataIndex = e.dataIndex, i.seriesIndex = t.seriesIndex, i.dataType = "edge";
                    var n = e.getModel("lineStyle.normal"), a = n.get("curveness"), s = e.node1.getLayout(), h = e.node2.getLayout(), u = e.getLayout();
                    i.shape.extent = Math.max(1, u.dy);
                    var d = s.x + s.dx, f = s.y + u.sy + u.dy / 2, p = h.x, g = h.y + u.ty + u.dy / 2, m = d * (1 - a) + p * a, v = f, y = d * a + p * (1 - a), x = g;
                    i.setShape({
                        x1: d,
                        y1: f,
                        x2: p,
                        y2: g,
                        cpx1: m,
                        cpy1: v,
                        cpx2: y,
                        cpy2: x
                    }), i.setStyle(n.getItemStyle()), o.setHoverStyle(i, e.getModel("lineStyle.emphasis").getItemStyle()), l.add(i), c.setItemGraphicEl(e.dataIndex, i)
                }), !this._data && t.get("animation") && l.setClipPath(n(l.getBoundingRect(), t, function () {
                    l.removeClipPath()
                })), this._data = t.getData()
            }
        })
    }, function (t, e, i) {
        function n(t, e) {
            return M.getLayoutRect(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()})
        }

        function o(t, e, i, n, o, a, s) {
            r(t, i, o), h(t, e, a, n, s), m(t)
        }

        function a(t) {
            I.each(t, function (t) {
                var e = x(t.outEdges, S), i = x(t.inEdges, S), n = Math.max(e, i);
                t.setLayout({value: n}, !0)
            })
        }

        function r(t, e, i) {
            for (var n = t, o = null, a = 0, r = 0; n.length;) {
                o = [];
                for (var h = 0, u = n.length; u > h; h++) {
                    var c = n[h];
                    c.setLayout({x: a}, !0), c.setLayout({dx: e}, !0);
                    for (var d = 0, f = c.outEdges.length; f > d; d++)o.push(c.outEdges[d].node2)
                }
                n = o, ++a
            }
            s(t, a), r = (i - e) / (a - 1), l(t, r)
        }

        function s(t, e) {
            I.each(t, function (t) {
                t.outEdges.length || t.setLayout({x: e - 1}, !0)
            })
        }

        function l(t, e) {
            I.each(t, function (t) {
                var i = t.getLayout().x * e;
                t.setLayout({x: i}, !0)
            })
        }

        function h(t, e, i, n, o) {
            var a = A().key(function (t) {
                return t.getLayout().x
            }).sortKeys(w).entries(t).map(function (t) {
                return t.values
            });
            u(t, a, e, i, n), c(a, n, i);
            for (var r = 1; o > 0; o--)r *= .99, d(a, r), c(a, n, i), p(a, r), c(a, n, i)
        }

        function u(t, e, i, n, o) {
            var a = [];
            I.each(e, function (t) {
                var e = t.length, i = 0;
                I.each(t, function (t) {
                    i += t.getLayout().value
                });
                var r = (n - (e - 1) * o) / i;
                a.push(r)
            }), a.sort(function (t, e) {
                return t - e
            });
            var r = a[0];
            I.each(e, function (t) {
                I.each(t, function (t, e) {
                    t.setLayout({y: e}, !0);
                    var i = t.getLayout().value * r;
                    t.setLayout({dy: i}, !0)
                })
            }), I.each(i, function (t) {
                var e = +t.getValue() * r;
                t.setLayout({dy: e}, !0)
            })
        }

        function c(t, e, i) {
            I.each(t, function (t) {
                var n, o, a, r = 0, s = t.length;
                for (t.sort(b), a = 0; s > a; a++) {
                    if (n = t[a], o = r - n.getLayout().y, o > 0) {
                        var l = n.getLayout().y + o;
                        n.setLayout({y: l}, !0)
                    }
                    r = n.getLayout().y + n.getLayout().dy + e
                }
                if (o = r - e - i, o > 0) {
                    var l = n.getLayout().y - o;
                    for (n.setLayout({y: l}, !0), r = n.getLayout().y, a = s - 2; a >= 0; --a)n = t[a], o = n.getLayout().y + n.getLayout().dy + e - r, o > 0 && (l = n.getLayout().y - o, n.setLayout({y: l}, !0)), r = n.getLayout().y
                }
            })
        }

        function d(t, e) {
            I.each(t.slice().reverse(), function (t) {
                I.each(t, function (t) {
                    if (t.outEdges.length) {
                        var i = x(t.outEdges, f) / x(t.outEdges, S), n = t.getLayout().y + (i - _(t)) * e;
                        t.setLayout({y: n}, !0)
                    }
                })
            })
        }

        function f(t) {
            return _(t.node2) * t.getValue()
        }

        function p(t, e) {
            I.each(t, function (t) {
                I.each(t, function (t) {
                    if (t.inEdges.length) {
                        var i = x(t.inEdges, g) / x(t.inEdges, S), n = t.getLayout().y + (i - _(t)) * e;
                        t.setLayout({y: n}, !0)
                    }
                })
            })
        }

        function g(t) {
            return _(t.node1) * t.getValue()
        }

        function m(t) {
            I.each(t, function (t) {
                t.outEdges.sort(v), t.inEdges.sort(y)
            }), I.each(t, function (t) {
                var e = 0, i = 0;
                I.each(t.outEdges, function (t) {
                    t.setLayout({sy: e}, !0), e += t.getLayout().dy
                }), I.each(t.inEdges, function (t) {
                    t.setLayout({ty: i}, !0), i += t.getLayout().dy
                })
            })
        }

        function v(t, e) {
            return t.node2.getLayout().y - e.node2.getLayout().y
        }

        function y(t, e) {
            return t.node1.getLayout().y - e.node1.getLayout().y
        }

        function x(t, e) {
            var i, n = 0, o = t.length, a = -1;
            if (1 === arguments.length)for (; ++a < o;)i = +t[a], isNaN(i) || (n += i); else for (; ++a < o;)i = +e.call(t, t[a], a), isNaN(i) || (n += i);
            return n
        }

        function _(t) {
            return t.getLayout().y + t.getLayout().dy / 2
        }

        function b(t, e) {
            return t.getLayout().y - e.getLayout().y
        }

        function w(t, e) {
            return e > t ? -1 : t > e ? 1 : t == e ? 0 : NaN
        }

        function S(t) {
            return t.getValue()
        }

        var M = i(11), A = i(350), I = i(1);
        t.exports = function (t, e) {
            t.eachSeriesByType("sankey", function (t) {
                var i = t.get("nodeWidth"), r = t.get("nodeGap"), s = n(t, e);
                t.layoutInfo = s;
                var l = s.width, h = s.height, u = t.getGraph(), c = u.nodes, d = u.edges;
                a(c);
                var f = c.filter(function (t) {
                    return 0 === t.getLayout().value
                }), p = 0 !== f.length ? 0 : t.get("layoutIterations");
                o(c, d, i, r, l, h, p)
            })
        }
    }, function (t, e, i) {
        var n = i(73);
        t.exports = function (t, e) {
            t.eachSeriesByType("sankey", function (t) {
                var e = t.getGraph(), i = e.nodes;
                i.sort(function (t, e) {
                    return t.getLayout().value - e.getLayout().value
                });
                var o = i[0].getLayout().value, a = i[i.length - 1].getLayout().value;
                i.forEach(function (e) {
                    var i = new n({
                        type: "color",
                        mappingMethod: "linear",
                        dataExtent: [o, a],
                        visual: t.get("color")
                    }), r = i.mapValueToVisual(e.getLayout().value);
                    e.setVisual("color", r);
                    var s = e.getModel(), l = s.get("itemStyle.normal.color");
                    null != l && e.setVisual("color", l)
                })
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        i(295), i(296), i(297), n.registerVisualCoding("chart", i(299)), n.registerLayout(i(298))
    }, function (t, e, i) {
        function n(t, e) {
            this.group = new a.Group, t.add(this.group), this._onSelect = e || s.noop
        }

        function o(t, e, i, n, o, a) {
            var r = [[o ? t : t - u, e], [t + i, e], [t + i, e + n], [o ? t : t - u, e + n]];
            return !a && r.splice(2, 0, [t + i + u, e + n / 2]), !o && r.push([t, e + n / 2]), r
        }

        var a = i(3), r = i(11), s = i(1), l = 8, h = 8, u = 5;
        n.prototype = {
            constructor: n, render: function (t, e, i) {
                var n = t.getModel("breadcrumb"), o = this.group;
                if (o.removeAll(), n.get("show") && i) {
                    var a = n.getModel("itemStyle.normal"), s = a.getModel("textStyle"), l = {
                        pos: {
                            left: n.get("left"),
                            right: n.get("right"),
                            top: n.get("top"),
                            bottom: n.get("bottom")
                        },
                        box: {width: e.getWidth(), height: e.getHeight()},
                        emptyItemWidth: n.get("emptyItemWidth"),
                        totalWidth: 0,
                        renderList: []
                    };
                    this._prepare(n, i, l, s), this._renderContent(n, i, l, a, s), r.positionGroup(o, l.pos, l.box)
                }
            }, _prepare: function (t, e, i, n) {
                for (var o = e; o; o = o.parentNode) {
                    var a = o.getModel().get("name"), r = n.getTextRect(a), s = Math.max(r.width + 2 * l, i.emptyItemWidth);
                    i.totalWidth += s + h, i.renderList.push({node: o, text: a, width: s})
                }
            }, _renderContent: function (t, e, i, n, l) {
                for (var u = 0, c = i.emptyItemWidth, d = t.get("height"), f = r.getAvailableSize(i.pos, i.box), p = i.totalWidth, g = i.renderList, m = g.length - 1; m >= 0; m--) {
                    var v = g[m], y = v.width, x = v.text;
                    p > f.width && (p -= y - c, y = c, x = ""), this.group.add(new a.Polygon({
                        shape: {points: o(u, 0, y, d, m === g.length - 1, 0 === m)},
                        style: s.defaults(n.getItemStyle(), {
                            lineJoin: "bevel",
                            text: x,
                            textFill: l.getTextColor(),
                            textFont: l.getFont()
                        }),
                        z: 10,
                        onclick: s.bind(this._onSelect, this, v.node)
                    })), u += y + h
                }
            }, remove: function () {
                this.group.removeAll()
            }
        }, t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            var i = 0;
            s.each(t.children, function (t) {
                n(t, e);
                var o = t.value;
                s.isArray(o) && (o = o[0]), i += o
            });
            var o = t.value;
            e >= 0 && (s.isArray(o) ? o = o[0] : t.value = new Array(e)), (null == o || isNaN(o)) && (o = i), 0 > o && (o = 0), e >= 0 ? t.value[0] = o : t.value = o
        }

        function o(t, e) {
            var i = e.get("color");
            if (i) {
                t = t || [];
                var n;
                if (s.each(t, function (t) {
                        var e = new l(t), i = e.get("color");
                        (e.get("itemStyle.normal.color") || i && "none" !== i) && (n = !0)
                    }), !n) {
                    var o = t[0] || (t[0] = {});
                    o.color = i.slice()
                }
                return t
            }
        }

        var a = i(13), r = i(348), s = i(1), l = i(12), h = i(9), u = h.encodeHTML, c = h.addCommas;
        t.exports = a.extend({
            type: "series.treemap",
            dependencies: ["grid", "polar"],
            _viewRoot: null,
            defaultOption: {
                left: "center",
                top: "middle",
                right: null,
                bottom: null,
                width: "80%",
                height: "80%",
                sort: !0,
                clipWindow: "origin",
                squareRatio: .5 * (1 + Math.sqrt(5)),
                leafDepth: null,
                drillDownIcon: "▶",
                visualDimension: 0,
                zoomToNodeRatio: .1024,
                roam: !0,
                nodeClick: "zoomToNode",
                animation: !0,
                animationDurationUpdate: 900,
                animationEasing: "quinticInOut",
                breadcrumb: {
                    show: !0,
                    height: 22,
                    left: "center",
                    top: "bottom",
                    emptyItemWidth: 25,
                    itemStyle: {
                        normal: {
                            color: "rgba(0,0,0,0.7)",
                            borderColor: "rgba(255,255,255,0.7)",
                            borderWidth: 1,
                            shadowColor: "rgba(150,150,150,1)",
                            shadowBlur: 3,
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            textStyle: {color: "#fff"}
                        }, emphasis: {textStyle: {}}
                    }
                },
                label: {normal: {show: !0, position: "inside", textStyle: {color: "#fff", ellipsis: !0}}},
                itemStyle: {
                    normal: {
                        color: null,
                        colorAlpha: null,
                        colorSaturation: null,
                        borderWidth: 0,
                        gapWidth: 0,
                        borderColor: "#fff",
                        borderColorSaturation: null
                    }, emphasis: {}
                },
                color: "none",
                colorAlpha: null,
                colorSaturation: null,
                colorMappingBy: "index",
                visibleMin: 10,
                childrenVisibleMin: null,
                levels: []
            },
            getInitialData: function (t, e) {
                var i = t.data || [], a = t.name;
                null == a && (a = t.name);
                var l = {name: a, children: t.data}, h = (i[0] || {}).value;
                n(l, s.isArray(h) ? h.length : -1);
                var u = t.levels || [];
                return u = t.levels = o(u, e), r.createTree(l, this, u).data
            },
            optionUpdated: function () {
                this.resetViewRoot()
            },
            formatTooltip: function (t) {
                var e = this.getData(), i = this.getRawValue(t), n = c(s.isArray(i) ? i[0] : i), o = e.getName(t);
                return u(o) + ": " + n
            },
            getDataParams: function (t) {
                for (var e = a.prototype.getDataParams.apply(this, arguments), i = this.getData(), n = i.tree.getNodeByDataIndex(t), o = e.treePathInfo = []; n;) {
                    var r = n.dataIndex;
                    o.push({name: n.name, dataIndex: r, value: this.getRawValue(r)}), n = n.parentNode
                }
                return o.reverse(), e
            },
            setLayoutInfo: function (t) {
                this.layoutInfo = this.layoutInfo || {}, s.extend(this.layoutInfo, t)
            },
            mapIdToIndex: function (t) {
                var e = this._idIndexMap;
                e || (e = this._idIndexMap = {}, this._idIndexMapCount = 0);
                var i = e[t];
                return null == i && (e[t] = i = this._idIndexMapCount++), i
            },
            getViewRoot: function () {
                return this._viewRoot
            },
            resetViewRoot: function (t) {
                t ? this._viewRoot = t : t = this._viewRoot;
                var e = this.getData().tree.root;
                t && (t === e || e.contains(t)) || (this._viewRoot = e)
            }
        })
    }, function (t, e, i) {
        function n() {
            return {nodeGroup: [], background: [], content: []}
        }

        function o(t, e, i, n, o, l, h, u, c, d) {
            function f(e) {
                O.dataIndex = h.dataIndex, O.seriesIndex = t.seriesIndex;
                var i = I.borderWidth, n = Math.max(T - 2 * i, 0), o = Math.max(L - 2 * i, 0);
                O.culling = !0, O.setShape({x: i, y: i, width: n, height: o});
                var a = h.getVisual("color", !0);
                p(O, function () {
                    var t = {fill: a}, e = h.getModel("itemStyle.emphasis").getItemStyle();
                    g(t, e, a, n, o), O.setStyle(t), s.setHoverStyle(O, e)
                }), e.add(O)
            }

            function p(t, e) {
                C ? !t.invisible && l.push(t) : (e(), t.__tmWillVisible || (t.invisible = !1))
            }

            function g(e, i, n, o, a) {
                var r = h.getModel(), s = r.get("name");
                if (I.isLeafRoot) {
                    var l = t.get("drillDownIcon", !0);
                    s += l ? "  " + l : ""
                }
                y(s, e, r, _, n, o, a), y(s, i, r, b, n, o, a)
            }

            function y(t, e, i, n, o, a, r) {
                var l = i.getModel(n), h = l.getModel("textStyle");
                s.setText(e, l, o), e.textAlign = h.get("align"), e.textVerticalAlign = h.get("baseline");
                var u = h.getTextRect(t);
                !l.getShallow("show") || u.height > r ? e.text = "" : u.width > a ? e.text = h.get("ellipsis") ? h.ellipsis(t, a) : "" : e.text = t
            }

            function x(t, n, r, s) {
                var l = null != P && i[t][P], h = o[t];
                return l ? (i[t][P] = null, w(h, l, t)) : C || (l = new n({z: a(r, s)}), l.__tmDepth = r, l.__tmStorageName = t, A(h, l, t)), e[t][D] = l
            }

            function w(t, e, i) {
                var n = t[D] = {};
                n.old = "nodeGroup" === i ? e.position.slice() : r.extend({}, e.shape)
            }

            function A(t, e, i) {
                var a = t[D] = {}, r = h.parentNode;
                if (r && (!n || "drillDown" === n.direction)) {
                    var s = 0, l = 0, u = o.background[r.getRawIndex()];
                    !n && u && u.old && (s = u.old.width, l = u.old.height), a.old = "nodeGroup" === i ? [0, l] : {
                        x: s,
                        y: l,
                        width: 0,
                        height: 0
                    }
                }
                a.fadein = "nodeGroup" !== i
            }

            if (h) {
                var I = h.getLayout();
                if (I && I.isInView) {
                    var T = I.width, L = I.height, C = I.invisible, D = h.getRawIndex(), P = u && u.getRawIndex(), k = x("nodeGroup", m);
                    if (k) {
                        if (c.add(k), k.position = [I.x || 0, I.y || 0], k.__tmNodeWidth = T, k.__tmNodeHeight = L, I.isAboveViewRoot)return k;
                        var z = x("background", v, d, S);
                        z && (z.setShape({x: 0, y: 0, width: T, height: L}), p(z, function () {
                            z.setStyle("fill", h.getVisual("borderColor", !0))
                        }), k.add(z));
                        var E = h.viewChildren;
                        if (!E || !E.length) {
                            var O = x("content", v, d, M);
                            O && f(k)
                        }
                        return k
                    }
                }
            }
        }

        function a(t, e) {
            var i = t * w + e;
            return (i - 1) / i
        }

        var r = i(1), s = i(3), l = i(48), h = i(160), u = i(294), c = i(70), d = i(8), f = i(19), p = i(349), g = r.bind, m = s.Group, v = s.Rect, y = r.each, x = 3, _ = ["label", "normal"], b = ["label", "emphasis"], w = 10, S = 1, M = 2;
        t.exports = i(2).extendChartView({
            type: "treemap", init: function (t, e) {
                this._containerGroup, this._storage = n(), this._oldTree, this._breadcrumb, this._controller, this._state = "ready", this._mayClick
            }, render: function (t, e, i, n) {
                var o = e.findComponents({mainType: "series", subType: "treemap", query: n});
                if (!(r.indexOf(o, t) < 0)) {
                    this.seriesModel = t, this.api = i, this.ecModel = e;
                    var a = h.retrieveTargetInfo(n, t), s = n && n.type, l = t.layoutInfo, u = !this._oldTree, c = this._storage, d = "treemapRootToNode" === s && a && c ? {
                        rootNodeGroup: c.nodeGroup[a.node.getRawIndex()],
                        direction: n.direction
                    } : null, f = this._giveContainerGroup(l), p = this._doRender(f, t, d);
                    u || s && "treemapZoomToNode" !== s && "treemapRootToNode" !== s ? p.renderFinally() : this._doAnimation(f, p, t, d), this._resetController(i), this._renderBreadcrumb(t, i, a)
                }
            }, _giveContainerGroup: function (t) {
                var e = this._containerGroup;
                return e || (e = this._containerGroup = new m, this._initEvents(e), this.group.add(e)), e.position = [t.x, t.y], e
            }, _doRender: function (t, e, i) {
                function a(t, e, i, n, o) {
                    function s(t) {
                        return t.getId()
                    }

                    function h(r, s) {
                        var l = null != r ? t[r] : null, h = null != s ? e[s] : null, u = m(l, h, i, o);
                        u && a(l && l.viewChildren || [], h && h.viewChildren || [], u, n, o + 1)
                    }

                    n ? (e = t, y(t, function (t, e) {
                        !t.isRemoved() && h(e, e)
                    })) : new l(e, t, s, s).add(h).update(h).remove(r.curry(h, null)).execute()
                }

                function s(t) {
                    var e = n();
                    return t && y(t, function (t, i) {
                        var n = e[i];
                        y(t, function (t) {
                            t && (n.push(t), t.__tmWillDelete = 1)
                        })
                    }), e
                }

                function h() {
                    y(v, function (t) {
                        y(t, function (t) {
                            t.parent && t.parent.remove(t)
                        })
                    }), y(g, function (t) {
                        t.invisible = !0, t.dirty()
                    })
                }

                var u = e.getData().tree, c = this._oldTree, d = n(), f = n(), p = this._storage, g = [], m = r.curry(o, e, f, p, i, d, g);
                a(u.root ? [u.root] : [], c && c.root ? [c.root] : [], t, u === c || !c, 0);
                var v = s(p);
                return this._oldTree = u, this._storage = f, {lastsForAnimation: d, willDeleteEls: v, renderFinally: h}
            }, _doAnimation: function (t, e, i, n) {
                if (i.get("animation")) {
                    var o = i.get("animationDurationUpdate"), a = i.get("animationEasing"), s = p.createWrap();
                    y(e.willDeleteEls, function (t, e) {
                        y(t, function (t, i) {
                            if (!t.invisible) {
                                var r, l = t.parent;
                                if (n && "drillDown" === n.direction)r = l === n.rootNodeGroup ? {
                                    shape: {
                                        x: 0,
                                        y: 0,
                                        width: l.__tmNodeWidth,
                                        height: l.__tmNodeHeight
                                    }, style: {opacity: 0}
                                } : {style: {opacity: 0}}; else {
                                    var h = 0, u = 0;
                                    l.__tmWillDelete || (h = l.__tmNodeWidth / 2, u = l.__tmNodeHeight / 2), r = "nodeGroup" === e ? {
                                        position: [h, u],
                                        style: {opacity: 0}
                                    } : {shape: {x: h, y: u, width: 0, height: 0}, style: {opacity: 0}}
                                }
                                r && s.add(t, r, o, a)
                            }
                        })
                    }), y(this._storage, function (t, i) {
                        y(t, function (t, n) {
                            var l = e.lastsForAnimation[i][n], h = {};
                            l && ("nodeGroup" === i ? l.old && (h.position = t.position.slice(), t.position = l.old) : (l.old && (h.shape = r.extend({}, t.shape), t.setShape(l.old)), l.fadein ? (t.setStyle("opacity", 0), h.style = {opacity: 1}) : 1 !== t.style.opacity && (h.style = {opacity: 1})), s.add(t, h, o, a))
                        })
                    }, this), this._state = "animating", s.done(g(function () {
                        this._state = "ready", e.renderFinally()
                    }, this)).start()
                }
            }, _resetController: function (t) {
                var e = this._controller;
                e || (e = this._controller = new c(t.getZr()), e.enable(this.seriesModel.get("roam")), e.on("pan", g(this._onPan, this)), e.on("zoom", g(this._onZoom, this)));
                var i = new d(0, 0, t.getWidth(), t.getHeight());
                e.rectProvider = function () {
                    return i
                }
            }, _clearController: function () {
                var t = this._controller;
                t && (t.off("pan").off("zoom"), t = null)
            }, _onPan: function (t, e) {
                if (this._mayClick = !1, "animating" !== this._state && (Math.abs(t) > x || Math.abs(e) > x)) {
                    var i = this.seriesModel.getData().tree.root;
                    if (!i)return;
                    var n = i.getLayout();
                    if (!n)return;
                    this.api.dispatchAction({
                        type: "treemapMove",
                        from: this.uid,
                        seriesId: this.seriesModel.id,
                        rootRect: {x: n.x + t, y: n.y + e, width: n.width, height: n.height}
                    })
                }
            }, _onZoom: function (t, e, i) {
                if (this._mayClick = !1, "animating" !== this._state) {
                    var n = this.seriesModel.getData().tree.root;
                    if (!n)return;
                    var o = n.getLayout();
                    if (!o)return;
                    var a = new d(o.x, o.y, o.width, o.height), r = this.seriesModel.layoutInfo;
                    e -= r.x, i -= r.y;
                    var s = f.create();
                    f.translate(s, s, [-e, -i]), f.scale(s, s, [t, t]), f.translate(s, s, [e, i]), a.applyTransform(s), this.api.dispatchAction({
                        type: "treemapRender",
                        from: this.uid,
                        seriesId: this.seriesModel.id,
                        rootRect: {x: a.x, y: a.y, width: a.width, height: a.height}
                    })
                }
            }, _initEvents: function (t) {
                function e(t) {
                    var e = this.seriesModel.get("nodeClick", !0);
                    if (e) {
                        var i = this.findTarget(t.offsetX, t.offsetY);
                        if (i) {
                            var n = i.node;
                            if (n.getLayout().isLeafRoot)this._rootToNode(i); else if ("zoomToNode" === e)this._zoomToNode(i); else if ("link" === e) {
                                var o = n.hostTree.data.getItemModel(n.dataIndex), a = o.get("link", !0), r = o.get("target", !0) || "blank";
                                a && window.open(a, r)
                            }
                        }
                    }
                }

                t.on("mousedown", function (t) {
                    "ready" === this._state && (this._mayClick = !0)
                }, this), t.on("mouseup", function (t) {
                    this._mayClick && (this._mayClick = !1, "ready" === this._state && e.call(this, t))
                }, this)
            }, _renderBreadcrumb: function (t, e, i) {
                function n(e) {
                    "animating" !== this._state && (h.aboveViewRoot(t.getViewRoot(), e) ? this._rootToNode({node: e}) : this._zoomToNode({node: e}))
                }

                i || (i = this.findTarget(e.getWidth() / 2, e.getHeight() / 2), i || (i = {node: t.getData().tree.root})), (this._breadcrumb || (this._breadcrumb = new u(this.group, g(n, this)))).render(t, e, i.node)
            }, remove: function () {
                this._clearController(), this._containerGroup && this._containerGroup.removeAll(), this._storage = n(), this._state = "ready", this._breadcrumb && this._breadcrumb.remove()
            }, dispose: function () {
                this._clearController()
            }, _zoomToNode: function (t) {
                this.api.dispatchAction({
                    type: "treemapZoomToNode",
                    from: this.uid,
                    seriesId: this.seriesModel.id,
                    targetNode: t.node
                })
            }, _rootToNode: function (t) {
                this.api.dispatchAction({
                    type: "treemapRootToNode",
                    from: this.uid,
                    seriesId: this.seriesModel.id,
                    targetNode: t.node
                })
            }, findTarget: function (t, e) {
                var i, n = this.seriesModel.getViewRoot();
                return n.eachNode({attr: "viewChildren", order: "preorder"}, function (n) {
                    var o = this._storage.background[n.getRawIndex()];
                    if (o) {
                        var a = o.transformCoordToLocal(t, e), r = o.shape;
                        if (!(r.x <= a[0] && a[0] <= r.x + r.width && r.y <= a[1] && a[1] <= r.y + r.height))return !1;
                        i = {node: n, offsetX: a[0], offsetY: a[1]}
                    }
                }, this), i
            }
        })
    }, function (t, e, i) {
        for (var n = i(2), o = i(160), a = function () {
        }, r = ["treemapZoomToNode", "treemapRender", "treemapMove"], s = 0; s < r.length; s++)n.registerAction({
            type: r[s],
            update: "updateView"
        }, a);
        n.registerAction({type: "treemapRootToNode", update: "updateView"}, function (t, e) {
            function i(e, i) {
                var n = o.retrieveTargetInfo(t, e);
                if (n) {
                    var a = e.getViewRoot();
                    a && (t.direction = o.aboveViewRoot(a, n.node) ? "rollUp" : "drillDown"), e.resetViewRoot(n.node)
                }
            }

            e.eachComponent({mainType: "series", subType: "treemap", query: t}, i)
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            var n = {mainType: "series", subType: "treemap", query: i};
            t.eachComponent(n, function (t) {
                var n = e.getWidth(), a = e.getHeight(), r = t.option, s = r.size || [], l = b(w(r.width, s[0]), n), h = b(w(r.height, s[1]), a), u = m.getLayoutRect(t.getBoxLayoutParams(), {
                    width: e.getWidth(),
                    height: e.getHeight()
                }), g = i && i.type, x = v.retrieveTargetInfo(i, t), _ = "treemapRender" === g || "treemapMove" === g ? i.rootRect : null, M = t.getViewRoot(), A = v.getPathToRoot(M);
                if ("treemapMove" !== g) {
                    var I = "treemapZoomToNode" === g ? c(t, x, M, l, h) : _ ? [_.width, _.height] : [l, h], T = r.sort;
                    T && "asc" !== T && "desc" !== T && (T = "desc");
                    var L = {squareRatio: r.squareRatio, sort: T, leafDepth: r.leafDepth};
                    M.hostTree.clearLayouts();
                    var C = {x: 0, y: 0, width: I[0], height: I[1], area: I[0] * I[1]};
                    M.setLayout(C), o(M, L, !1, 0);
                    var C = M.getLayout();
                    S(A, function (t, e) {
                        var i = (A[e + 1] || M).getValue();
                        t.setLayout(p.extend({dataExtent: [i, i], borderWidth: 0}, C))
                    })
                }
                var D = t.getData().tree.root;
                D.setLayout(d(u, _, x), !0), t.setLayoutInfo(u), f(D, new y(-u.x, -u.y, n, a), A, M, 0)
            })
        }

        function o(t, e, i, n) {
            var r, s;
            if (!t.isRemoved()) {
                var l = t.getLayout();
                r = l.width, s = l.height;
                var c = t.getModel("itemStyle.normal"), d = c.get("borderWidth"), f = c.get("gapWidth") / 2, p = d - f, g = t.getModel();
                t.setLayout({borderWidth: d}, !0), r = x(r - 2 * p, 0), s = x(s - 2 * p, 0);
                var m = r * s, v = a(t, g, m, e, i, n);
                if (v.length) {
                    var y = {x: p, y: p, width: r, height: s}, b = _(r, s), w = 1 / 0, S = [];
                    S.area = 0;
                    for (var M = 0, A = v.length; A > M;) {
                        var I = v[M];
                        S.push(I), S.area += I.getLayout().area;
                        var T = h(S, b, e.squareRatio);
                        w >= T ? (M++, w = T) : (S.area -= S.pop().getLayout().area, u(S, b, y, f, !1), b = _(y.width, y.height), S.length = S.area = 0, w = 1 / 0)
                    }
                    if (S.length && u(S, b, y, f, !0), !i) {
                        var L = g.get("childrenVisibleMin");
                        null != L && L > m && (i = !0)
                    }
                    for (var M = 0, A = v.length; A > M; M++)o(v[M], e, i, n + 1)
                }
            }
        }

        function a(t, e, i, n, o, a) {
            var h = t.children || [], u = n.sort;
            "asc" !== u && "desc" !== u && (u = null);
            var c = null != n.leafDepth && n.leafDepth <= a;
            if (o && !c)return t.viewChildren = [];
            h = p.filter(h, function (t) {
                return !t.isRemoved()
            }), s(h, u);
            var d = l(e, h, u);
            if (0 === d.sum)return t.viewChildren = [];
            if (d.sum = r(e, i, d.sum, u, h), 0 === d.sum)return t.viewChildren = [];
            for (var f = 0, g = h.length; g > f; f++) {
                var m = h[f].getValue() / d.sum * i;
                h[f].setLayout({area: m})
            }
            return c && (h.length && t.setLayout({isLeafRoot: !0}, !0), h.length = 0), t.viewChildren = h, t.setLayout({dataExtent: d.dataExtent}, !0), h
        }

        function r(t, e, i, n, o) {
            if (!n)return i;
            for (var a = t.get("visibleMin"), r = o.length, s = r, l = r - 1; l >= 0; l--) {
                var h = o["asc" === n ? r - l - 1 : l].getValue();
                a > h / i * e && (s = l, i -= h)
            }
            return "asc" === n ? o.splice(0, r - s) : o.splice(s, r - s), i
        }

        function s(t, e) {
            return e && t.sort(function (t, i) {
                return "asc" === e ? t.getValue() - i.getValue() : i.getValue() - t.getValue()
            }), t
        }

        function l(t, e, i) {
            for (var n = 0, o = 0, a = e.length; a > o; o++)n += e[o].getValue();
            var r, s = t.get("visualDimension");
            if (e && e.length)if ("value" === s && i)r = [e[e.length - 1].getValue(), e[0].getValue()], "asc" === i && r.reverse(); else {
                var r = [1 / 0, -(1 / 0)];
                S(e, function (t) {
                    var e = t.getValue(s);
                    e < r[0] && (r[0] = e), e > r[1] && (r[1] = e)
                })
            } else r = [NaN, NaN];
            return {sum: n, dataExtent: r}
        }

        function h(t, e, i) {
            for (var n, o = 0, a = 1 / 0, r = 0, s = t.length; s > r; r++)n = t[r].getLayout().area, n && (a > n && (a = n), n > o && (o = n));
            var l = t.area * t.area, h = e * e * i;
            return l ? x(h * o / l, l / (h * a)) : 1 / 0
        }

        function u(t, e, i, n, o) {
            var a = e === i.width ? 0 : 1, r = 1 - a, s = ["x", "y"], l = ["width", "height"], h = i[s[a]], u = e ? t.area / e : 0;
            (o || u > i[l[r]]) && (u = i[l[r]]);
            for (var c = 0, d = t.length; d > c; c++) {
                var f = t[c], p = {}, g = u ? f.getLayout().area / u : 0, m = p[l[r]] = x(u - 2 * n, 0), v = i[s[a]] + i[l[a]] - h, y = c === d - 1 || g > v ? v : g, b = p[l[a]] = x(y - 2 * n, 0);
                p[s[r]] = i[s[r]] + _(n, m / 2), p[s[a]] = h + _(n, b / 2), h += y, f.setLayout(p, !0)
            }
            i[s[r]] += u, i[l[r]] -= u
        }

        function c(t, e, i, n, o) {
            var a = (e || {}).node, r = [n, o];
            if (!a || a === i)return r;
            for (var s, l = n * o, h = l * t.option.zoomToNodeRatio; s = a.parentNode;) {
                for (var u = 0, c = s.children, d = 0, f = c.length; f > d; d++)u += c[d].getValue();
                var p = a.getValue();
                if (0 === p)return r;
                h *= u / p;
                var m = s.getModel("itemStyle.normal").get("borderWidth");
                isFinite(m) && (h += 4 * m * m + 4 * m * Math.pow(h, .5)), h > g.MAX_SAFE_INTEGER && (h = g.MAX_SAFE_INTEGER), a = s
            }
            l > h && (h = l);
            var v = Math.pow(h / l, .5);
            return [n * v, o * v]
        }

        function d(t, e, i) {
            if (e)return {x: e.x, y: e.y};
            var n = {x: 0, y: 0};
            if (!i)return n;
            var o = i.node, a = o.getLayout();
            if (!a)return n;
            for (var r = [a.width / 2, a.height / 2], s = o; s;) {
                var l = s.getLayout();
                r[0] += l.x, r[1] += l.y, s = s.parentNode
            }
            return {x: t.width / 2 - r[0], y: t.height / 2 - r[1]}
        }

        function f(t, e, i, n, o) {
            var a = t.getLayout(), r = i[o], s = r && r === t;
            if (!(r && !s || o === i.length && t !== n)) {
                t.setLayout({isInView: !0, invisible: !s && !e.intersect(a), isAboveViewRoot: s}, !0);
                var l = new y(e.x - a.x, e.y - a.y, e.width, e.height);
                S(t.viewChildren || [], function (t) {
                    f(t, l, i, n, o + 1)
                })
            }
        }

        var p = i(1), g = i(4), m = i(11), v = i(160), y = i(8), v = i(160), x = Math.max, _ = Math.min, b = g.parsePercent, w = p.retrieve, S = p.each;
        t.exports = n
    }, function (t, e, i) {
        function n(t, e, i, s, h, c) {
            var d = t.getModel(), p = t.getLayout();
            if (p && !p.invisible && p.isInView) {
                var m, v = t.getModel(g), y = i[t.depth], x = o(v, e, y, s), _ = v.get("borderColor"), b = v.get("borderColorSaturation");
                null != b && (m = a(x, t), _ = r(b, m)), t.setVisual("borderColor", _);
                var w = t.viewChildren;
                if (w && w.length) {
                    var S = l(t, d, p, v, x, w);
                    f.each(w, function (t, e) {
                        if (t.depth >= h.length || t === h[t.depth]) {
                            var o = u(d, x, t, e, S, c);
                            n(t, o, i, s, h, c)
                        }
                    })
                } else m = a(x, t), t.setVisual("color", m)
            }
        }

        function o(t, e, i, n) {
            var o = f.extend({}, e);
            return f.each(["color", "colorAlpha", "colorSaturation"], function (a) {
                var r = t.get(a, !0);
                null == r && i && (r = i[a]), null == r && (r = e[a]), null == r && (r = n.get(a)), null != r && (o[a] = r)
            }), o
        }

        function a(t) {
            var e = s(t, "color");
            if (e) {
                var i = s(t, "colorAlpha"), n = s(t, "colorSaturation");
                return n && (e = d.modifyHSL(e, null, null, n)), i && (e = d.modifyAlpha(e, i)), e
            }
        }

        function r(t, e) {
            return null != e ? d.modifyHSL(e, null, null, t) : null
        }

        function s(t, e) {
            var i = t[e];
            return null != i && "none" !== i ? i : void 0
        }

        function l(t, e, i, n, o, a) {
            if (a && a.length) {
                var r = h(e, "color") || null != o.color && "none" !== o.color && (h(e, "colorAlpha") || h(e, "colorSaturation"));
                if (r) {
                    var s = e.get("colorMappingBy"), l = {type: r.name, dataExtent: i.dataExtent, visual: r.range};
                    "color" !== l.type || "index" !== s && "id" !== s ? l.mappingMethod = "linear" : (l.mappingMethod = "category", l.loop = !0);
                    var u = new c(l);
                    return u.__drColorMappingBy = s, u
                }
            }
        }

        function h(t, e) {
            var i = t.get(e);
            return p(i) && i.length ? {name: e, range: i} : null
        }

        function u(t, e, i, n, o, a) {
            var r = f.extend({}, e);
            if (o) {
                var s = o.type, l = "color" === s && o.__drColorMappingBy, h = "index" === l ? n : "id" === l ? a.mapIdToIndex(i.getId()) : i.getValue(t.get("visualDimension"));
                r[s] = o.mapValueToVisual(h)
            }
            return r
        }

        var c = i(73), d = i(22), f = i(1), p = f.isArray, g = "itemStyle.normal";
        t.exports = function (t, e) {
            var i = {mainType: "series", subType: "treemap", query: e};
            t.eachComponent(i, function (t) {
                var e = t.getData().tree, i = e.root, o = t.getModel(g);
                if (!i.isRemoved()) {
                    var a = f.map(e.levelModels, function (t) {
                        return t ? t.get(g) : null
                    });
                    n(i, {}, a, o, t.getViewRoot().getAncestors(), t)
                }
            })
        }
    }, function (t, e, i) {
        "use strict";
        i(202), i(301)
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i, n) {
            var o = t.coordToPoint([e, n]), a = t.coordToPoint([i, n]);
            return {x1: o[0], y1: o[1], x2: a[0], y2: a[1]}
        }

        var o = i(1), a = i(3), r = i(12), s = ["axisLine", "axisLabel", "axisTick", "splitLine", "splitArea"];
        i(2).extendComponentView({
            type: "angleAxis", render: function (t, e) {
                if (this.group.removeAll(), t.get("show")) {
                    var i = e.getComponent("polar", t.get("polarIndex")), n = t.axis, a = i.coordinateSystem, r = a.getRadiusAxis().getExtent(), l = n.getTicksCoords();
                    "category" !== n.type && l.pop(), o.each(s, function (e) {
                        t.get(e + ".show") && this["_" + e](t, a, l, r)
                    }, this)
                }
            }, _axisLine: function (t, e, i, n) {
                var o = t.getModel("axisLine.lineStyle"), r = new a.Circle({
                    shape: {cx: e.cx, cy: e.cy, r: n[1]},
                    style: o.getLineStyle(),
                    z2: 1,
                    silent: !0
                });
                r.style.fill = null, this.group.add(r)
            }, _axisTick: function (t, e, i, r) {
                var s = t.getModel("axisTick"), l = (s.get("inside") ? -1 : 1) * s.get("length"), h = o.map(i, function (t) {
                    return new a.Line({shape: n(e, r[1], r[1] + l, t)})
                });
                this.group.add(a.mergePath(h, {style: s.getModel("lineStyle").getLineStyle()}))
            }, _axisLabel: function (t, e, i, n) {
                for (var o = t.axis, s = t.get("data"), l = t.getModel("axisLabel"), h = l.getModel("textStyle"), u = t.getFormattedLabels(), c = l.get("margin"), d = o.getLabelsCoords(), f = 0; f < i.length; f++) {
                    var p = n[1], g = e.coordToPoint([p + c, d[f]]), m = e.cx, v = e.cy, y = Math.abs(g[0] - m) / p < .3 ? "center" : g[0] > m ? "left" : "right", x = Math.abs(g[1] - v) / p < .3 ? "middle" : g[1] > v ? "top" : "bottom", _ = h;
                    s && s[f] && s[f].textStyle && (_ = new r(s[f].textStyle, h)), this.group.add(new a.Text({
                        style: {
                            x: g[0],
                            y: g[1],
                            fill: _.getTextColor(),
                            text: u[f],
                            textAlign: y,
                            textVerticalAlign: x,
                            textFont: _.getFont()
                        }, silent: !0
                    }))
                }
            }, _splitLine: function (t, e, i, r) {
                var s = t.getModel("splitLine"), l = s.getModel("lineStyle"), h = l.get("color"), u = 0;
                h = h instanceof Array ? h : [h];
                for (var c = [], d = 0; d < i.length; d++) {
                    var f = u++ % h.length;
                    c[f] = c[f] || [], c[f].push(new a.Line({shape: n(e, r[0], r[1], i[d])}))
                }
                for (var d = 0; d < c.length; d++)this.group.add(a.mergePath(c[d], {
                    style: o.defaults({stroke: h[d % h.length]}, l.getLineStyle()),
                    silent: !0,
                    z: t.get("z")
                }))
            }, _splitArea: function (t, e, i, n) {
                var r = t.getModel("splitArea"), s = r.getModel("areaStyle"), l = s.get("color"), h = 0;
                l = l instanceof Array ? l : [l];
                for (var u = [], c = Math.PI / 180, d = -i[0] * c, f = Math.min(n[0], n[1]), p = Math.max(n[0], n[1]), g = t.get("clockwise"), m = 1; m < i.length; m++) {
                    var v = h++ % l.length;
                    u[v] = u[v] || [], u[v].push(new a.Sector({
                        shape: {
                            cx: e.cx,
                            cy: e.cy,
                            r0: f,
                            r: p,
                            startAngle: d,
                            endAngle: -i[m] * c,
                            clockwise: g
                        }, silent: !0
                    })), d = -i[m] * c
                }
                for (var m = 0; m < u.length; m++)this.group.add(a.mergePath(u[m], {
                    style: o.defaults({fill: l[m % l.length]}, s.getAreaStyle()),
                    silent: !0
                }))
            }
        })
    }, function (t, e, i) {
        function n(t, e, i) {
            return i && "axisAreaSelect" === i.type && e.findComponents({mainType: "parallelAxis", query: i})[0] === t
        }

        var o = i(1), a = i(49), r = i(161), s = ["axisLine", "axisLabel", "axisTick", "axisName"], l = i(2).extendComponentView({
            type: "parallelAxis",
            _selectController: null,
            render: function (t, e, i, r) {
                if (!n(t, e, r) && (this.axisModel = t, this.api = i, this.group.removeAll(), t.get("show"))) {
                    var l = e.getComponent("parallel", t.get("parallelIndex")).coordinateSystem, h = t.getAreaSelectStyle(), u = h.width, c = l.getAxisLayout(t.axis.dim), d = o.extend({
                        strokeContainThreshold: u,
                        axisLineSilent: !(u > 0)
                    }, c), f = new a(t, d);
                    o.each(s, f.add, f);
                    var p = f.getGroup();
                    this.group.add(p), this._buildSelectController(p, h, t, i)
                }
            },
            _buildSelectController: function (t, e, i, n) {
                var a = i.axis, s = this._selectController;
                s || (s = this._selectController = new r("line", n.getZr(), e), s.on("selected", o.bind(this._onSelected, this))), s.enable(t);
                var l = o.map(i.activeIntervals, function (t) {
                    return [a.dataToCoord(t[0], !0), a.dataToCoord(t[1], !0)]
                });
                s.update(l)
            },
            _onSelected: function (t) {
                var e = this.axisModel, i = e.axis, n = o.map(t, function (t) {
                    return [i.coordToData(t[0], !0), i.coordToData(t[1], !0)]
                });
                this.api.dispatchAction({type: "axisAreaSelect", parallelAxisId: e.id, intervals: n})
            },
            remove: function () {
                this._selectController && this._selectController.disable()
            },
            dispose: function () {
                this._selectController && (this._selectController.dispose(), this._selectController = null)
            }
        });
        t.exports = l
    }, function (t, e, i) {
        "use strict";
        function n(t, e, i) {
            return {
                position: [t.cx, t.cy],
                rotation: i / 180 * Math.PI,
                labelDirection: -1,
                tickDirection: -1,
                nameDirection: 1,
                labelRotation: e.getModel("axisLabel").get("rotate"),
                z2: 1
            }
        }

        var o = i(1), a = i(3), r = i(49), s = ["axisLine", "axisLabel", "axisTick", "axisName"], l = ["splitLine", "splitArea"];
        i(2).extendComponentView({
            type: "radiusAxis", render: function (t, e) {
                if (this.group.removeAll(), t.get("show")) {
                    var i = e.getComponent("polar", t.get("polarIndex")), a = i.coordinateSystem.getAngleAxis(), h = t.axis, u = i.coordinateSystem, c = h.getTicksCoords(), d = a.getExtent()[0], f = h.getExtent(), p = n(u, t, d), g = new r(t, p);
                    o.each(s, g.add, g), this.group.add(g.getGroup()), o.each(l, function (e) {
                        t.get(e + ".show") && this["_" + e](t, u, d, f, c)
                    }, this)
                }
            }, _splitLine: function (t, e, i, n, r) {
                var s = t.getModel("splitLine"), l = s.getModel("lineStyle"), h = l.get("color"), u = 0;
                h = h instanceof Array ? h : [h];
                for (var c = [], d = 0; d < r.length; d++) {
                    var f = u++ % h.length;
                    c[f] = c[f] || [], c[f].push(new a.Circle({shape: {cx: e.cx, cy: e.cy, r: r[d]}, silent: !0}))
                }
                for (var d = 0; d < c.length; d++)this.group.add(a.mergePath(c[d], {
                    style: o.defaults({
                        stroke: h[d % h.length],
                        fill: null
                    }, l.getLineStyle()), silent: !0
                }))
            }, _splitArea: function (t, e, i, n, r) {
                var s = t.getModel("splitArea"), l = s.getModel("areaStyle"), h = l.get("color"), u = 0;
                h = h instanceof Array ? h : [h];
                for (var c = [], d = r[0], f = 1; f < r.length; f++) {
                    var p = u++ % h.length;
                    c[p] = c[p] || [], c[p].push(new a.Sector({
                        shape: {
                            cx: e.cx,
                            cy: e.cy,
                            r0: d,
                            r: r[f],
                            startAngle: 0,
                            endAngle: 2 * Math.PI
                        }, silent: !0
                    })), d = r[f]
                }
                for (var f = 0; f < c.length; f++)this.group.add(a.mergePath(c[f], {
                    style: o.defaults({fill: h[f % h.length]}, l.getAreaStyle()),
                    silent: !0
                }))
            }
        })
    }, function (t, e, i) {
        var n = i(2), o = {type: "axisAreaSelect", event: "axisAreaSelected", update: "updateVisual"};
        n.registerAction(o, function (t, e) {
            e.eachComponent({mainType: "parallelAxis", query: t}, function (e) {
                e.axis.model.setActiveIntervals(t.intervals)
            })
        })
    }, function (t, e, i) {
        function n(t, e) {
            e.update = "updateView", o.registerAction(e, function (e, i) {
                var n = {};
                return i.eachComponent({mainType: "geo", query: e}, function (i) {
                    i[t](e.name);
                    var o = i.coordinateSystem;
                    a.each(o.regions, function (t) {
                        n[t.name] = i.isSelected(t.name) || !1
                    })
                }), {selected: n, name: e.name}
            })
        }

        i(329), i(162), i(306), i(207);
        var o = i(2), a = i(1);
        n("toggleSelected", {type: "geoToggleSelect", event: "geoselectchanged"}), n("select", {
            type: "geoSelect",
            event: "geoselected"
        }), n("unSelect", {type: "geoUnSelect", event: "geounselected"})
    }, function (t, e, i) {
        "use strict";
        var n = i(213);
        t.exports = i(2).extendComponentView({
            type: "geo", init: function (t, e) {
                var i = new n(e, !0);
                this._mapDraw = i, this.group.add(i.group)
            }, render: function (t, e, i, n) {
                if (!n || "geoToggleSelect" !== n.type || n.from !== this.uid) {
                    var o = this._mapDraw;
                    t.get("show") ? o.draw(t, e, i, this, n) : this._mapDraw.group.removeAll()
                }
            }
        })
    }, function (t, e, i) {
        i(224), i(304), i(302)
    }, function (t, e, i) {
        "use strict";
        i(202), i(300), i(311), i(2).extendComponentView({type: "polar"})
    }, function (t, e, i) {
        i(345), i(346), i(310)
    }, function (t, e, i) {
        var n = i(49), o = i(1), a = i(3), r = ["axisLine", "axisLabel", "axisTick", "axisName"];
        t.exports = i(2).extendComponentView({
            type: "radar", render: function (t, e, i) {
                var n = this.group;
                n.removeAll(), this._buildAxes(t), this._buildSplitLineAndArea(t)
            }, _buildAxes: function (t) {
                var e = t.coordinateSystem, i = e.getIndicatorAxes(), a = o.map(i, function (t) {
                    var i = new n(t.model, {
                        position: [e.cx, e.cy],
                        rotation: t.angle,
                        labelDirection: -1,
                        tickDirection: -1,
                        nameDirection: 1
                    });
                    return i
                });
                o.each(a, function (t) {
                    o.each(r, t.add, t), this.group.add(t.getGroup())
                }, this)
            }, _buildSplitLineAndArea: function (t) {
                function e(t, e, i) {
                    var n = i % e.length;
                    return t[n] = t[n] || [], n
                }

                var i = t.coordinateSystem, n = t.get("splitNumber"), r = i.getIndicatorAxes();
                if (r.length) {
                    var s = t.get("shape"), l = t.getModel("splitLine"), h = t.getModel("splitArea"), u = l.getModel("lineStyle"), c = h.getModel("areaStyle"), d = l.get("show"), f = h.get("show"), p = u.get("color"), g = c.get("color");
                    p = o.isArray(p) ? p : [p], g = o.isArray(g) ? g : [g];
                    var m = [], v = [];
                    if ("circle" === s)for (var y = r[0].getTicksCoords(), x = i.cx, _ = i.cy, b = 0; b < y.length; b++) {
                        if (d) {
                            var w = e(m, p, b);
                            m[w].push(new a.Circle({shape: {cx: x, cy: _, r: y[b]}}))
                        }
                        if (f && b < y.length - 1) {
                            var w = e(v, g, b);
                            v[w].push(new a.Ring({shape: {cx: x, cy: _, r0: y[b], r: y[b + 1]}}))
                        }
                    } else for (var S = o.map(r, function (t, e) {
                        var n = t.getTicksCoords();
                        return o.map(n, function (t) {
                            return i.coordToPoint(t, e)
                        })
                    }), M = [], b = 0; n >= b; b++) {
                        for (var A = [], I = 0; I < r.length; I++)A.push(S[I][b]);
                        if (A.push(A[0].slice()), d) {
                            var w = e(m, p, b);
                            m[w].push(new a.Polyline({shape: {points: A}}))
                        }
                        if (f && M) {
                            var w = e(v, g, b - 1);
                            v[w].push(new a.Polygon({shape: {points: A.concat(M)}}))
                        }
                        M = A.slice().reverse()
                    }
                    var T = u.getLineStyle(), L = c.getAreaStyle();
                    o.each(v, function (t, e) {
                        this.group.add(a.mergePath(t, {
                            style: o.defaults({stroke: "none", fill: g[e % g.length]}, L),
                            silent: !0
                        }))
                    }, this), o.each(m, function (t, e) {
                        this.group.add(a.mergePath(t, {
                            style: o.defaults({fill: "none", stroke: p[e % p.length]}, T),
                            silent: !0
                        }))
                    }, this)
                }
            }
        })
    }, function (t, e, i) {
        i(202), i(303)
    }, function (t, e, i) {
        var n = i(2);
        n.registerPreprocessor(i(318)), i(320), i(319), i(313), i(314)
    }, function (t, e, i) {
        var n = i(316), o = i(1), a = i(7), r = n.extend({
            type: "timeline.slider",
            defaultOption: {
                backgroundColor: "rgba(0,0,0,0)",
                borderColor: "#ccc",
                borderWidth: 0,
                orient: "horizontal",
                inverse: !1,
                tooltip: {trigger: "item"},
                symbol: "emptyCircle",
                symbolSize: 10,
                lineStyle: {show: !0, width: 2, color: "#304654"},
                label: {
                    position: "auto",
                    normal: {show: !0, interval: "auto", rotate: 0, textStyle: {color: "#304654"}},
                    emphasis: {show: !0, textStyle: {color: "#c23531"}}
                },
                itemStyle: {normal: {color: "#304654", borderWidth: 1}, emphasis: {color: "#c23531"}},
                checkpointStyle: {
                    symbol: "circle",
                    symbolSize: 13,
                    color: "#c23531",
                    borderWidth: 5,
                    borderColor: "rgba(194,53,49, 0.5)",
                    animation: !0,
                    animationDuration: 300,
                    animationEasing: "quinticInOut"
                },
                controlStyle: {
                    show: !0,
                    showPlayBtn: !0,
                    showPrevBtn: !0,
                    showNextBtn: !0,
                    itemSize: 22,
                    itemGap: 12,
                    position: "left",
                    playIcon: "path://M31.6,53C17.5,53,6,41.5,6,27.4S17.5,1.8,31.6,1.8C45.7,1.8,57.2,13.3,57.2,27.4S45.7,53,31.6,53z M31.6,3.3 C18.4,3.3,7.5,14.1,7.5,27.4c0,13.3,10.8,24.1,24.1,24.1C44.9,51.5,55.7,40.7,55.7,27.4C55.7,14.1,44.9,3.3,31.6,3.3z M24.9,21.3 c0-2.2,1.6-3.1,3.5-2l10.5,6.1c1.899,1.1,1.899,2.9,0,4l-10.5,6.1c-1.9,1.1-3.5,0.2-3.5-2V21.3z",
                    stopIcon: "path://M30.9,53.2C16.8,53.2,5.3,41.7,5.3,27.6S16.8,2,30.9,2C45,2,56.4,13.5,56.4,27.6S45,53.2,30.9,53.2z M30.9,3.5C17.6,3.5,6.8,14.4,6.8,27.6c0,13.3,10.8,24.1,24.101,24.1C44.2,51.7,55,40.9,55,27.6C54.9,14.4,44.1,3.5,30.9,3.5z M36.9,35.8c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H36c0.5,0,0.9,0.4,0.9,1V35.8z M27.8,35.8 c0,0.601-0.4,1-0.9,1h-1.3c-0.5,0-0.9-0.399-0.9-1V19.5c0-0.6,0.4-1,0.9-1H27c0.5,0,0.9,0.4,0.9,1L27.8,35.8L27.8,35.8z",
                    nextIcon: "path://M18.6,50.8l22.5-22.5c0.2-0.2,0.3-0.4,0.3-0.7c0-0.3-0.1-0.5-0.3-0.7L18.7,4.4c-0.1-0.1-0.2-0.3-0.2-0.5 c0-0.4,0.3-0.8,0.8-0.8c0.2,0,0.5,0.1,0.6,0.3l23.5,23.5l0,0c0.2,0.2,0.3,0.4,0.3,0.7c0,0.3-0.1,0.5-0.3,0.7l-0.1,0.1L19.7,52 c-0.1,0.1-0.3,0.2-0.5,0.2c-0.4,0-0.8-0.3-0.8-0.8C18.4,51.2,18.5,51,18.6,50.8z",
                    prevIcon: "path://M43,52.8L20.4,30.3c-0.2-0.2-0.3-0.4-0.3-0.7c0-0.3,0.1-0.5,0.3-0.7L42.9,6.4c0.1-0.1,0.2-0.3,0.2-0.5 c0-0.4-0.3-0.8-0.8-0.8c-0.2,0-0.5,0.1-0.6,0.3L18.3,28.8l0,0c-0.2,0.2-0.3,0.4-0.3,0.7c0,0.3,0.1,0.5,0.3,0.7l0.1,0.1L41.9,54 c0.1,0.1,0.3,0.2,0.5,0.2c0.4,0,0.8-0.3,0.8-0.8C43.2,53.2,43.1,53,43,52.8z",
                    normal: {color: "#304654", borderColor: "#304654", borderWidth: 1},
                    emphasis: {color: "#c23531", borderColor: "#c23531", borderWidth: 2}
                },
                data: []
            }
        });
        o.mixin(r, a.dataFormatMixin), t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            return h.getLayoutRect(t.getBoxLayoutParams(), {
                width: e.getWidth(),
                height: e.getHeight()
            }, t.get("padding"))
        }

        function o(t, e, i, n) {
            var o = l.makePath(t.get(e).replace(/^path:\/\//, ""), s.clone(n || {}), new p(i[0], i[1], i[2], i[3]), "center");
            return o
        }

        function a(t, e, i, n, o, a) {
            var r = t.get("symbol"), l = e.get("color"), h = t.get("symbolSize"), u = h / 2, c = e.getItemStyle(["color", "symbol", "symbolSize"]);
            return o ? (o.setStyle(c), o.setColor(l), i.add(o), a && a.onUpdate(o)) : (o = d.createSymbol(r, -u, -u, h, h, l), i.add(o), a && a.onCreate(o)), n = s.merge({
                rectHover: !0,
                style: c,
                z2: 100
            }, n, !0), o.attr(n), o
        }

        function r(t, e, i, n, o) {
            if (!t.dragging) {
                var a = n.getModel("checkpointStyle"), r = i.dataToCoord(n.getData().get(["value"], e));
                o || !a.get("animation", !0) ? t.attr({position: [r, 0]}) : (t.stopAnimation(!0), t.animateTo({position: [r, 0]}, a.get("animationDuration", !0), a.get("animationEasing", !0)))
            }
        }

        var s = i(1), l = i(3), h = i(11), u = i(317), c = i(315), d = i(25), f = i(24), p = i(8), g = i(19), m = i(4), v = i(9), y = v.encodeHTML, x = s.bind, _ = s.each, b = Math.PI;
        t.exports = u.extend({
            type: "timeline.slider", init: function (t, e) {
                this.api = e, this._axis, this._viewRect, this._timer, this._currentPointer, this._mainGroup, this._labelGroup
            }, render: function (t, e, i, n) {
                if (this.model = t, this.api = i, this.ecModel = e, this.group.removeAll(), t.get("show", !0)) {
                    var o = this._layout(t, i), a = this._createGroup("mainGroup"), r = this._createGroup("labelGroup"), s = this._axis = this._createAxis(o, t);
                    t.formatTooltip = function (t) {
                        return y(s.scale.getLabel(t))
                    }, _(["AxisLine", "AxisTick", "Control", "CurrentPointer"], function (e) {
                        this["_render" + e](o, a, s, t)
                    }, this), this._renderAxisLabel(o, r, s, t), this._position(o, t)
                }
                this._doPlayStop()
            }, remove: function () {
                this._clearTimer(), this.group.removeAll()
            }, dispose: function () {
                this._clearTimer()
            }, _layout: function (t, e) {
                var i = t.get("label.normal.position"), o = t.get("orient"), a = n(t, e);
                null == i || "auto" === i ? i = "horizontal" === o ? a.y + a.height / 2 < e.getHeight() / 2 ? "-" : "+" : a.x + a.width / 2 < e.getWidth() / 2 ? "+" : "-" : isNaN(i) && (i = {
                    horizontal: {
                        top: "-",
                        bottom: "+"
                    }, vertical: {left: "-", right: "+"}
                }[o][i]);
                var r = {
                    horizontal: "center",
                    vertical: i >= 0 || "+" === i ? "left" : "right"
                }, s = {horizontal: i >= 0 || "+" === i ? "top" : "bottom", vertical: "middle"}, l = {
                    horizontal: 0,
                    vertical: b / 2
                }, h = "vertical" === o ? a.height : a.width, u = t.getModel("controlStyle"), c = u.get("show"), d = c ? u.get("itemSize") : 0, f = c ? u.get("itemGap") : 0, p = d + f, g = t.get("label.normal.rotate") || 0;
                g = g * b / 180;
                var m, v, y, x, _ = u.get("position", !0), c = u.get("show", !0), w = c && u.get("showPlayBtn", !0), S = c && u.get("showPrevBtn", !0), M = c && u.get("showNextBtn", !0), A = 0, I = h;
                return "left" === _ || "bottom" === _ ? (w && (m = [0, 0], A += p), S && (v = [A, 0], A += p), M && (y = [I - d, 0], I -= p)) : (w && (m = [I - d, 0], I -= p), S && (v = [0, 0], A += p), M && (y = [I - d, 0], I -= p)), x = [A, I], t.get("inverse") && x.reverse(), {
                    viewRect: a,
                    mainLength: h,
                    orient: o,
                    rotation: l[o],
                    labelRotation: g,
                    labelPosOpt: i,
                    labelAlign: r[o],
                    labelBaseline: s[o],
                    playPosition: m,
                    prevBtnPosition: v,
                    nextBtnPosition: y,
                    axisExtent: x,
                    controlSize: d,
                    controlGap: f
                }
            }, _position: function (t, e) {
                function i(t) {
                    var e = t.position;
                    t.origin = [c[0][0] - e[0], c[1][0] - e[1]]
                }

                function n(t) {
                    return [[t.x, t.x + t.width], [t.y, t.y + t.height]]
                }

                function o(t, e, i, n, o) {
                    t[n] += i[n][o] - e[n][o]
                }

                var a = this._mainGroup, r = this._labelGroup, s = t.viewRect;
                if ("vertical" === t.orient) {
                    var l = g.create(), h = s.x, u = s.y + s.height;
                    g.translate(l, l, [-h, -u]), g.rotate(l, l, -b / 2), g.translate(l, l, [h, u]), s = s.clone(), s.applyTransform(l)
                }
                var c = n(s), d = n(a.getBoundingRect()), f = n(r.getBoundingRect()), p = a.position, m = r.position;
                m[0] = p[0] = c[0][0];
                var v = t.labelPosOpt;
                if (isNaN(v)) {
                    var y = "+" === v ? 0 : 1;
                    o(p, d, c, 1, y), o(m, f, c, 1, 1 - y)
                } else {
                    var y = v >= 0 ? 0 : 1;
                    o(p, d, c, 1, y), m[1] = p[1] + v
                }
                a.position = p, r.position = m, a.rotation = r.rotation = t.rotation, i(a), i(r)
            }, _createAxis: function (t, e) {
                var i = e.getData(), n = e.get("axisType"), o = f.createScaleByModel(e, n), a = i.getDataExtent("value");
                o.setExtent(a[0], a[1]), this._customizeScale(o, i), o.niceTicks();
                var r = new c("value", o, t.axisExtent, n);
                return r.model = e, r
            }, _customizeScale: function (t, e) {
                t.getTicks = function () {
                    return e.mapArray(["value"], function (t) {
                        return t
                    })
                }, t.getTicksLabels = function () {
                    return s.map(this.getTicks(), t.getLabel, t)
                }
            }, _createGroup: function (t) {
                var e = this["_" + t] = new l.Group;
                return this.group.add(e), e
            }, _renderAxisLine: function (t, e, i, n) {
                var o = i.getExtent();
                n.get("lineStyle.show") && e.add(new l.Line({
                    shape: {x1: o[0], y1: 0, x2: o[1], y2: 0},
                    style: s.extend({lineCap: "round"}, n.getModel("lineStyle").getLineStyle()),
                    silent: !0,
                    z2: 1
                }))
            }, _renderAxisTick: function (t, e, i, n) {
                var o = n.getData(), r = i.scale.getTicks();
                _(r, function (t, r) {
                    var s = i.dataToCoord(t), h = o.getItemModel(r), u = h.getModel("itemStyle.normal"), c = h.getModel("itemStyle.emphasis"), d = {
                        position: [s, 0],
                        onclick: x(this._changeTimeline, this, r)
                    }, f = a(h, u, e, d);
                    l.setHoverStyle(f, c.getItemStyle()), h.get("tooltip") ? (f.dataIndex = r, f.dataModel = n) : f.dataIndex = f.dataModel = null
                }, this)
            }, _renderAxisLabel: function (t, e, i, n) {
                var o = n.getModel("label.normal");
                if (o.get("show")) {
                    var a = n.getData(), r = i.scale.getTicks(), s = f.getFormattedLabels(i, o.get("formatter")), h = i.getLabelInterval();
                    _(r, function (n, o) {
                        if (!i.isLabelIgnored(o, h)) {
                            var r = a.getItemModel(o), u = r.getModel("label.normal.textStyle"), c = r.getModel("label.emphasis.textStyle"), d = i.dataToCoord(n), f = new l.Text({
                                style: {
                                    text: s[o],
                                    textAlign: t.labelAlign,
                                    textVerticalAlign: t.labelBaseline,
                                    textFont: u.getFont(),
                                    fill: u.getTextColor()
                                },
                                position: [d, 0],
                                rotation: t.labelRotation - t.rotation,
                                onclick: x(this._changeTimeline, this, o),
                                silent: !1
                            });
                            e.add(f), l.setHoverStyle(f, c.getItemStyle())
                        }
                    }, this)
                }
            }, _renderControl: function (t, e, i, n) {
                function a(t, i, a, d) {
                    if (t) {
                        var f = {
                            position: t,
                            origin: [r / 2, 0],
                            rotation: d ? -s : 0,
                            rectHover: !0,
                            style: h,
                            onclick: a
                        }, p = o(n, i, c, f);
                        e.add(p), l.setHoverStyle(p, u)
                    }
                }

                var r = t.controlSize, s = t.rotation, h = n.getModel("controlStyle.normal").getItemStyle(), u = n.getModel("controlStyle.emphasis").getItemStyle(), c = [0, -r / 2, r, r], d = n.getPlayState(), f = n.get("inverse", !0);
                a(t.nextBtnPosition, "controlStyle.nextIcon", x(this._changeTimeline, this, f ? "-" : "+")), a(t.prevBtnPosition, "controlStyle.prevIcon", x(this._changeTimeline, this, f ? "+" : "-")), a(t.playPosition, "controlStyle." + (d ? "stopIcon" : "playIcon"), x(this._handlePlayClick, this, !d), !0)
            }, _renderCurrentPointer: function (t, e, i, n) {
                var o = n.getData(), s = n.getCurrentIndex(), l = o.getItemModel(s).getModel("checkpointStyle"), h = this, u = {
                    onCreate: function (t) {
                        t.draggable = !0, t.drift = x(h._handlePointerDrag, h), t.ondragend = x(h._handlePointerDragend, h), r(t, s, i, n, !0)
                    }, onUpdate: function (t) {
                        r(t, s, i, n)
                    }
                };
                this._currentPointer = a(l, l, this._mainGroup, {}, this._currentPointer, u)
            }, _handlePlayClick: function (t) {
                this._clearTimer(), this.api.dispatchAction({type: "timelinePlayChange", playState: t, from: this.uid})
            }, _handlePointerDrag: function (t, e, i) {
                this._clearTimer(), this._pointerChangeTimeline([i.offsetX, i.offsetY])
            }, _handlePointerDragend: function (t) {
                this._pointerChangeTimeline([t.offsetX, t.offsetY], !0)
            }, _pointerChangeTimeline: function (t, e) {
                var i = this._toAxisCoord(t)[0], n = this._axis, o = m.asc(n.getExtent().slice());
                i > o[1] && (i = o[1]), i < o[0] && (i = o[0]), this._currentPointer.position[0] = i, this._currentPointer.dirty();
                var a = this._findNearestTick(i), r = this.model;
                (e || a !== r.getCurrentIndex() && r.get("realtime")) && this._changeTimeline(a)
            }, _doPlayStop: function () {
                function t() {
                    var t = this.model;
                    this._changeTimeline(t.getCurrentIndex() + (t.get("rewind", !0) ? -1 : 1))
                }

                this._clearTimer(), this.model.getPlayState() && (this._timer = setTimeout(x(t, this), this.model.get("playInterval")))
            }, _toAxisCoord: function (t) {
                var e = this._mainGroup.getLocalTransform();
                return l.applyTransform(t, e, !0)
            }, _findNearestTick: function (t) {
                var e, i = this.model.getData(), n = 1 / 0, o = this._axis;
                return i.each(["value"], function (i, a) {
                    var r = o.dataToCoord(i), s = Math.abs(r - t);
                    n > s && (n = s, e = a)
                }), e
            }, _clearTimer: function () {
                this._timer && (clearTimeout(this._timer), this._timer = null)
            }, _changeTimeline: function (t) {
                var e = this.model.getCurrentIndex();
                "+" === t ? t = e + 1 : "-" === t && (t = e - 1), this.api.dispatchAction({
                    type: "timelineChange",
                    currentIndex: t,
                    from: this.uid
                })
            }
        })
    }, function (t, e, i) {
        var n = i(1), o = i(43), a = i(24), r = function (t, e, i, n) {
            o.call(this, t, e, i), this.type = n || "value", this._autoLabelInterval, this.model = null
        };
        r.prototype = {
            constructor: r, getLabelInterval: function () {
                var t = this.model, e = t.getModel("label.normal"), i = e.get("interval");
                if (null != i && "auto" != i)return i;
                var i = this._autoLabelInterval;
                return i || (i = this._autoLabelInterval = a.getAxisLabelInterval(n.map(this.scale.getTicks(), this.dataToCoord, this), a.getFormattedLabels(this, e.get("formatter")), e.getModel("textStyle").getFont(), "horizontal" === t.get("orient"))), i
            }, isLabelIgnored: function (t) {
                if ("category" === this.type) {
                    var e = this.getLabelInterval();
                    return "function" == typeof e && !e(t, this.scale.getLabel(t)) || t % (e + 1)
                }
            }
        }, n.inherits(r, o), t.exports = r
    }, function (t, e, i) {
        var n = i(10), o = i(15), a = i(1), r = i(7), s = n.extend({
            type: "timeline",
            layoutMode: "box",
            defaultOption: {
                zlevel: 0,
                z: 4,
                show: !0,
                axisType: "time",
                realtime: !0,
                left: "20%",
                top: null,
                right: "20%",
                bottom: 0,
                width: null,
                height: 40,
                padding: 5,
                controlPosition: "left",
                autoPlay: !1,
                rewind: !1,
                loop: !0,
                playInterval: 2e3,
                currentIndex: 0,
                itemStyle: {normal: {}, emphasis: {}},
                label: {normal: {textStyle: {color: "#000"}}, emphasis: {}},
                data: []
            },
            init: function (t, e, i) {
                this._data, this._names, this.mergeDefaultAndTheme(t, i), this._initData()
            },
            mergeOption: function (t) {
                s.superApply(this, "mergeOption", arguments), this._initData()
            },
            setCurrentIndex: function (t) {
                null == t && (t = this.option.currentIndex);
                var e = this._data.count();
                this.option.loop ? t = (t % e + e) % e : (t >= e && (t = e - 1), 0 > t && (t = 0)), this.option.currentIndex = t
            },
            getCurrentIndex: function () {
                return this.option.currentIndex
            },
            isIndexMax: function () {
                return this.getCurrentIndex() >= this._data.count() - 1
            },
            setPlayState: function (t) {
                this.option.autoPlay = !!t
            },
            getPlayState: function () {
                return !!this.option.autoPlay
            },
            _initData: function () {
                var t = this.option, e = t.data || [], i = t.axisType, n = this._names = [];
                if ("category" === i) {
                    var s = [];
                    a.each(e, function (t, e) {
                        var i, o = r.getDataItemValue(t);
                        a.isObject(t) ? (i = a.clone(t), i.value = e) : i = e, s.push(i), a.isString(o) || null != o && !isNaN(o) || (o = ""), n.push(o + "")
                    }), e = s
                }
                var l = {category: "ordinal", time: "time"}[i] || "number", h = this._data = new o([{
                    name: "value",
                    type: l
                }], this);
                h.initData(e, n)
            },
            getData: function () {
                return this._data
            },
            getCategories: function () {
                return "category" === this.get("axisType") ? this._names.slice() : void 0
            }
        });
        t.exports = s
    }, function (t, e, i) {
        var n = i(54);
        t.exports = n.extend({type: "timeline"})
    }, function (t, e, i) {
        function n(t) {
            var e = t.type, i = {number: "value", time: "time"};
            if (i[e] && (t.axisType = i[e], delete t.type), o(t), a(t, "controlPosition")) {
                var n = t.controlStyle || (t.controlStyle = {});
                a(n, "position") || (n.position = t.controlPosition), "none" !== n.position || a(n, "show") || (n.show = !1, delete n.position), delete t.controlPosition
            }
            r.each(t.data || [], function (t) {
                r.isObject(t) && !r.isArray(t) && (!a(t, "value") && a(t, "name") && (t.value = t.name), o(t))
            })
        }

        function o(t) {
            var e = t.itemStyle || (t.itemStyle = {}), i = e.emphasis || (e.emphasis = {}), n = t.label || t.label || {}, o = n.normal || (n.normal = {}), s = {
                normal: 1,
                emphasis: 1
            };
            r.each(n, function (t, e) {
                s[e] || a(o, e) || (o[e] = t)
            }), i.label && !a(n, "emphasis") && (n.emphasis = i.label, delete i.label)
        }

        function a(t, e) {
            return t.hasOwnProperty(e)
        }

        var r = i(1);
        t.exports = function (t) {
            var e = t && t.timeline;
            r.isArray(e) || (e = e ? [e] : []), r.each(e, function (t) {
                t && n(t)
            })
        }
    }, function (t, e, i) {
        var n = i(2);
        n.registerAction({
            type: "timelineChange",
            event: "timelineChanged",
            update: "prepareAndUpdate"
        }, function (t, e) {
            var i = e.getComponent("timeline");
            i && null != t.currentIndex && (i.setCurrentIndex(t.currentIndex), !i.get("loop", !0) && i.isIndexMax() && i.setPlayState(!1)), e.resetOption("timeline")
        }), n.registerAction({
            type: "timelinePlayChange",
            event: "timelinePlayChanged",
            update: "update"
        }, function (t, e) {
            var i = e.getComponent("timeline");
            i && null != t.playState && i.setPlayState(t.playState)
        })
    }, function (t, e, i) {
        i(10).registerSubTypeDefaulter("timeline", function () {
            return "slider"
        })
    }, function (t, e, i) {
        i(326), i(327)
    }, function (t, e, i) {
        var n = i(215), o = i(1), a = i(4), r = [20, 140], s = n.extend({
            type: "visualMap.continuous",
            defaultOption: {
                align: "auto",
                calculable: !1,
                range: null,
                realtime: !0,
                itemHeight: null,
                itemWidth: null,
                hoverLink: !0
            },
            doMergeOption: function (t, e) {
                s.superApply(this, "doMergeOption", arguments), this.resetTargetSeries(t, e), this.resetExtent(), this.resetVisual(function (t) {
                    t.mappingMethod = "linear"
                }), this._resetRange()
            },
            resetItemSize: function () {
                n.prototype.resetItemSize.apply(this, arguments);
                var t = this.itemSize;
                "horizontal" === this._orient && t.reverse(), (null == t[0] || isNaN(t[0])) && (t[0] = r[0]), (null == t[1] || isNaN(t[1])) && (t[1] = r[1])
            },
            _resetRange: function () {
                var t = this.getExtent(), e = this.option.range;
                !e || e.auto ? (t.auto = 1, this.option.range = t) : o.isArray(e) && (e[0] > e[1] && e.reverse(), e[0] = Math.max(e[0], t[0]), e[1] = Math.min(e[1], t[1]))
            },
            completeVisualOption: function () {
                n.prototype.completeVisualOption.apply(this, arguments), o.each(this.stateList, function (t) {
                    var e = this.option.controller[t].symbolSize;
                    e && e[0] !== e[1] && (e[0] = 0)
                }, this)
            },
            setSelected: function (t) {
                this.option.range = t.slice(), this._resetRange()
            },
            getSelected: function () {
                var t = this.getExtent(), e = a.asc((this.get("range") || []).slice());
                return e[0] > t[1] && (e[0] = t[1]), e[1] > t[1] && (e[1] = t[1]), e[0] < t[0] && (e[0] = t[0]), e[1] < t[0] && (e[1] = t[0]), e
            },
            getValueState: function (t) {
                var e = this.option.range, i = this.getExtent();
                return (e[0] <= i[0] || e[0] <= t) && (e[1] >= i[1] || t <= e[1]) ? "inRange" : "outOfRange"
            },
            findTargetDataIndices: function (t) {
                var e = [];
                return this.eachTargetSeries(function (i) {
                    var n = [], o = i.getData();
                    o.each(this.getDataDimension(o), function (e, i) {
                        t[0] <= e && e <= t[1] && n.push(i)
                    }, !0, this), e.push({seriesId: i.id, dataIndices: n})
                }, this), e
            }
        });
        t.exports = s
    }, function (t, e, i) {
        function n(t, e, i) {
            return new s.Polygon({shape: {points: t}, draggable: !!e, cursor: i, drift: e})
        }

        function o(t, e) {
            return 0 === t ? [[0, 0], [e, 0], [e, -e]] : [[0, 0], [e, 0], [e, e]]
        }

        function a(t, e, i) {
            return t ? [[0, -m(y, v(e, 0))], [x, 0], [0, m(y, v(i - e, 0))]] : [[0, 0], [5, -5], [5, 5]]
        }

        var r = i(216), s = i(3), l = i(1), h = i(4), u = i(71), c = i(76), d = i(217), f = h.linearMap, p = d.convertDataIndicesToBatch, g = l.each, m = Math.min, v = Math.max, y = 6, x = 6, _ = r.extend({
            type: "visualMap.continuous", init: function () {
                r.prototype.init.apply(this, arguments), this._shapes = {}, this._dataInterval = [], this._handleEnds = [], this._orient, this._useHandle, this._hoverLinkDataIndices = []
            }, doRender: function (t, e, i, n) {
                n && "selectDataRange" === n.type && n.from === this.uid ? this._updateView() : this._buildView()
            }, _buildView: function () {
                this.group.removeAll();
                var t = this.visualMapModel, e = this.group;
                this._orient = t.get("orient"), this._useHandle = t.get("calculable"), this._resetInterval(), this._renderBar(e);
                var i = t.get("text");
                this._renderEndsText(e, i, 0), this._renderEndsText(e, i, 1), this._updateView(!0), this.renderBackground(e), this._updateView(), this._enableHoverLinkToSeries(), this._enableHoverLinkFromSeries(), this.positionGroup(e)
            }, _renderEndsText: function (t, e, i) {
                if (e) {
                    var n = e[1 - i];
                    n = null != n ? n + "" : "";
                    var o = this.visualMapModel, a = o.get("textGap"), r = o.itemSize, l = this._shapes.barGroup, h = this._applyTransform([r[0] / 2, 0 === i ? -a : r[1] + a], l), u = this._applyTransform(0 === i ? "bottom" : "top", l), c = this._orient, d = this.visualMapModel.textStyleModel;
                    this.group.add(new s.Text({
                        style: {
                            x: h[0],
                            y: h[1],
                            textVerticalAlign: "horizontal" === c ? "middle" : u,
                            textAlign: "horizontal" === c ? u : "center",
                            text: n,
                            textFont: d.getFont(),
                            fill: d.getTextColor()
                        }
                    }))
                }
            }, _renderBar: function (t) {
                var e = this.visualMapModel, i = this._shapes, o = e.itemSize, a = this._orient, r = this._useHandle, s = d.getItemAlign(e, this.api, o), h = i.barGroup = this._createBarGroup(s);
                h.add(i.outOfRange = n()), h.add(i.inRange = n(null, l.bind(this._modifyHandle, this, "all"), r ? "move" : null));
                var u = e.textStyleModel.getTextRect("国"), c = Math.max(u.width, u.height);
                r && (i.handleThumbs = [], i.handleLabels = [], i.handleLabelPoints = [], this._createHandle(h, 0, o, c, a, s), this._createHandle(h, 1, o, c, a, s)), this._createIndicator(h, o, c, a), t.add(h)
            }, _createHandle: function (t, e, i, a, r) {
                var h = l.bind(this._modifyHandle, this, e), u = n(o(e, a), h, "move");
                u.position[0] = i[0], t.add(u);
                var c = this.visualMapModel.textStyleModel, d = new s.Text({
                    draggable: !0,
                    drift: h,
                    style: {x: 0, y: 0, text: "", textFont: c.getFont(), fill: c.getTextColor()}
                });
                this.group.add(d);
                var f = ["horizontal" === r ? a / 2 : 1.5 * a, "horizontal" === r ? 0 === e ? -(1.5 * a) : 1.5 * a : 0 === e ? -a / 2 : a / 2], p = this._shapes;
                p.handleThumbs[e] = u, p.handleLabelPoints[e] = f, p.handleLabels[e] = d
            }, _createIndicator: function (t, e, i, o) {
                var a = n([[0, 0]], null, "move");
                a.position[0] = e[0], a.attr({invisible: !0, silent: !0}), t.add(a);
                var r = this.visualMapModel.textStyleModel, l = new s.Text({
                    silent: !0,
                    invisible: !0,
                    style: {x: 0, y: 0, text: "", textFont: r.getFont(), fill: r.getTextColor()}
                });
                this.group.add(l);
                var h = ["horizontal" === o ? i / 2 : x + 3, 0], u = this._shapes;
                u.indicator = a, u.indicatorLabel = l, u.indicatorLabelPoint = h
            }, _modifyHandle: function (t, e, i) {
                if (this._useHandle) {
                    var n = this._applyTransform([e, i], this._shapes.barGroup, !0);
                    this._updateInterval(t, n[1]), this.api.dispatchAction({
                        type: "selectDataRange",
                        from: this.uid,
                        visualMapId: this.visualMapModel.id,
                        selected: this._dataInterval.slice()
                    })
                }
            }, _resetInterval: function () {
                var t = this.visualMapModel, e = this._dataInterval = t.getSelected(), i = t.getExtent(), n = [0, t.itemSize[1]];
                this._handleEnds = [f(e[0], i, n, !0), f(e[1], i, n, !0)]
            }, _updateInterval: function (t, e) {
                e = e || 0;
                var i = this.visualMapModel, n = this._handleEnds;
                u(e, n, [0, i.itemSize[1]], "all" === t ? "rigid" : "push", t);
                var o = i.getExtent(), a = [0, i.itemSize[1]];
                this._dataInterval = [f(n[0], a, o, !0), f(n[1], a, o, !0)]
            }, _updateView: function (t) {
                var e = this.visualMapModel, i = e.getExtent(), n = this._shapes, o = [0, e.itemSize[1]], a = t ? o : this._handleEnds, r = this._createBarVisual(this._dataInterval, i, a, "inRange"), s = this._createBarVisual(i, i, o, "outOfRange");
                n.inRange.setStyle({
                    fill: r.barColor,
                    opacity: r.opacity
                }).setShape("points", r.barPoints), n.outOfRange.setStyle({
                    fill: s.barColor,
                    opacity: s.opacity
                }).setShape("points", s.barPoints), this._updateHandle(a, r)
            }, _createBarVisual: function (t, e, i, n) {
                var o = {
                    forceState: n,
                    convertOpacityToAlpha: !0
                }, a = this._makeColorGradient(t, o), r = [this.getControllerVisual(t[0], "symbolSize", o), this.getControllerVisual(t[1], "symbolSize", o)], s = this._createBarPoints(i, r);
                return {barColor: new c(0, 0, 1, 1, a), barPoints: s, handlesColor: [a[0].color, a[a.length - 1].color]}
            }, _makeColorGradient: function (t, e) {
                var i = 100, n = [], o = (t[1] - t[0]) / i;
                n.push({color: this.getControllerVisual(t[0], "color", e), offset: 0});
                for (var a = 1; i > a; a++) {
                    var r = t[0] + o * a;
                    if (r > t[1])break;
                    n.push({color: this.getControllerVisual(r, "color", e), offset: a / i})
                }
                return n.push({color: this.getControllerVisual(t[1], "color", e), offset: 1}), n
            }, _createBarPoints: function (t, e) {
                var i = this.visualMapModel.itemSize;
                return [[i[0] - e[0], t[0]], [i[0], t[0]], [i[0], t[1]], [i[0] - e[1], t[1]]]
            }, _createBarGroup: function (t) {
                var e = this._orient, i = this.visualMapModel.get("inverse");
                return new s.Group("horizontal" !== e || i ? "horizontal" === e && i ? {
                    scale: "bottom" === t ? [-1, 1] : [1, 1],
                    rotation: -Math.PI / 2
                } : "vertical" !== e || i ? {scale: "left" === t ? [1, 1] : [-1, 1]} : {scale: "left" === t ? [1, -1] : [-1, -1]} : {
                    scale: "bottom" === t ? [1, 1] : [-1, 1],
                    rotation: Math.PI / 2
                })
            }, _updateHandle: function (t, e) {
                if (this._useHandle) {
                    var i = this._shapes, n = this.visualMapModel, o = i.handleThumbs, a = i.handleLabels;
                    g([0, 1], function (r) {
                        var l = o[r];
                        l.setStyle("fill", e.handlesColor[r]), l.position[1] = t[r];
                        var h = s.applyTransform(i.handleLabelPoints[r], s.getTransform(l, this.group));
                        a[r].setStyle({
                            x: h[0],
                            y: h[1],
                            text: n.formatValueText(this._dataInterval[r]),
                            textVerticalAlign: "middle",
                            textAlign: this._applyTransform("horizontal" === this._orient ? 0 === r ? "bottom" : "top" : "left", i.barGroup)
                        })
                    }, this)
                }
            }, _showIndicator: function (t, e) {
                var i = this.visualMapModel, n = i.getExtent(), o = i.itemSize, r = [0, o[1]], l = f(t, n, r, !0), h = this._shapes, u = h.indicator;
                if (u) {
                    u.position[1] = l, u.attr("invisible", !1), u.setShape("points", a(e, l, o[1]));
                    var c = {convertOpacityToAlpha: !0}, d = this.getControllerVisual(t, "color", c);
                    u.setStyle("fill", d);
                    var p = s.applyTransform(h.indicatorLabelPoint, s.getTransform(u, this.group)), g = h.indicatorLabel;
                    g.attr("invisible", !1);
                    var m = this._applyTransform("left", h.barGroup), v = this._orient;
                    g.setStyle({
                        text: (e ? "≈" : "") + i.formatValueText(t),
                        textVerticalAlign: "horizontal" === v ? m : "middle",
                        textAlign: "horizontal" === v ? "center" : m,
                        x: p[0],
                        y: p[1]
                    })
                }
            }, _enableHoverLinkToSeries: function () {
                function t(t) {
                    var e = this.visualMapModel, i = e.itemSize;
                    if (e.option.hoverLink) {
                        var n = this._applyTransform([t.offsetX, t.offsetY], this._shapes.barGroup, !0, !0), o = [n[1] - y / 2, n[1] + y / 2], a = [0, i[1]], r = e.getExtent(), s = [f(o[0], a, r, !0), f(o[1], a, r, !0)];
                        0 <= n[0] && n[0] <= i[0] && this._showIndicator((s[0] + s[1]) / 2, !0);
                        var l = p(this._hoverLinkDataIndices);
                        this._hoverLinkDataIndices = e.findTargetDataIndices(s);
                        var h = p(this._hoverLinkDataIndices), u = d.removeDuplicateBatch(l, h);
                        this.api.dispatchAction({
                            type: "downplay",
                            batch: u[0]
                        }), this.api.dispatchAction({type: "highlight", batch: u[1]})
                    }
                }

                this._shapes.barGroup.on("mousemove", l.bind(t, this)).on("mouseout", l.bind(this._clearHoverLinkToSeries, this))
            }, _enableHoverLinkFromSeries: function () {
                var t = this.api.getZr();
                this.visualMapModel.option.hoverLink ? (t.on("mouseover", this._hoverLinkFromSeriesMouseOver, this), t.on("mouseout", this._hideIndicator, this)) : this._clearHoverLinkFromSeries()
            }, _hoverLinkFromSeriesMouseOver: function (t) {
                var e = t.target;
                if (e && null != e.dataIndex) {
                    var i = e.dataModel || this.ecModel.getSeriesByIndex(e.seriesIndex), n = i.getData(e.dataType), o = n.getDimension(this.visualMapModel.getDataDimension(n)), a = n.get(o, e.dataIndex, !0);
                    this._showIndicator(a)
                }
            }, _hideIndicator: function () {
                var t = this._shapes;
                t.indicator && t.indicator.attr("invisible", !0), t.indicatorLabel && t.indicatorLabel.attr("invisible", !0)
            }, _clearHoverLinkToSeries: function () {
                this._hideIndicator();
                var t = this._hoverLinkDataIndices;
                this.api.dispatchAction({type: "downplay", batch: p(t)}), t.length = 0
            }, _clearHoverLinkFromSeries: function () {
                this._hideIndicator();
                var t = this.api.getZr();
                t.off("mouseover", this._hoverLinkFromSeriesMouseOver), t.off("mouseout", this._hideIndicator)
            }, _applyTransform: function (t, e, i, n) {
                var o = s.getTransform(e, n ? null : this.group);
                return s[l.isArray(t) ? "applyTransform" : "transformDirection"](t, o, i)
            }, dispose: function () {
                this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
            }, remove: function () {
                this._clearHoverLinkFromSeries(), this._clearHoverLinkToSeries()
            }
        });
        t.exports = _
    }, function (t, e, i) {
        function n(t, e) {
            var i = t.inverse;
            ("vertical" === t.orient ? !i : i) && e.reverse()
        }

        var o = i(215), a = i(1), r = i(73), s = o.extend({
            type: "visualMap.piecewise",
            defaultOption: {
                selected: null,
                align: "auto",
                itemWidth: 20,
                itemHeight: 14,
                itemSymbol: "roundRect",
                pieceList: null,
                categories: null,
                splitNumber: 5,
                selectedMode: "multiple",
                itemGap: 10,
                hoverLink: !0
            },
            doMergeOption: function (t, e) {
                s.superApply(this, "doMergeOption", arguments), this._pieceList = [], this.resetTargetSeries(t, e), this.resetExtent();
                var i = this._mode = this._decideMode();
                l[this._mode].call(this), this._resetSelected(t, e);
                var n = this.option.categories;
                this.resetVisual(function (t, e) {
                    "categories" === i ? (t.mappingMethod = "category", t.categories = a.clone(n)) : (t.mappingMethod = "piecewise", t.pieceList = a.map(this._pieceList, function (t) {
                        var t = a.clone(t);
                        return "inRange" !== e && (t.visual = null), t
                    }))
                })
            },
            _resetSelected: function (t, e) {
                var i = this.option, n = this._pieceList, o = (e ? i : t).selected || {};
                if (i.selected = o, a.each(n, function (t, e) {
                        var i = this.getSelectedMapKey(t);
                        i in o || (o[i] = !0)
                    }, this), "single" === i.selectedMode) {
                    var r = !1;
                    a.each(n, function (t, e) {
                        var i = this.getSelectedMapKey(t);
                        o[i] && (r ? o[i] = !1 : r = !0)
                    }, this)
                }
            },
            getSelectedMapKey: function (t) {
                return "categories" === this._mode ? t.value + "" : t.index + ""
            },
            getPieceList: function () {
                return this._pieceList
            },
            _decideMode: function () {
                var t = this.option;
                return t.pieces && t.pieces.length > 0 ? "pieces" : this.option.categories ? "categories" : "splitNumber"
            },
            setSelected: function (t) {
                this.option.selected = a.clone(t)
            },
            getValueState: function (t) {
                var e = r.findPieceIndex(t, this._pieceList);
                return null != e && this.option.selected[this.getSelectedMapKey(this._pieceList[e])] ? "inRange" : "outOfRange"
            },
            findTargetDataIndices: function (t) {
                var e = [];
                return this.eachTargetSeries(function (i) {
                    var n = [], o = i.getData();
                    o.each(this.getDataDimension(o), function (e, i) {
                        var o = r.findPieceIndex(e, this._pieceList);
                        o === t && n.push(i)
                    }, !0, this), e.push({seriesId: i.id, dataIndices: n})
                }, this), e
            }
        }), l = {
            splitNumber: function () {
                var t = this.option, e = t.precision, i = this.getExtent(), n = t.splitNumber;
                n = Math.max(parseInt(n, 10), 1), t.splitNumber = n;
                for (var o = (i[1] - i[0]) / n; +o.toFixed(e) !== o && 5 > e;)e++;
                t.precision = e, o = +o.toFixed(e);
                for (var a = 0, r = i[0]; n > a; a++, r += o) {
                    var s = a === n - 1 ? i[1] : r + o;
                    this._pieceList.push({text: this.formatValueText([r, s]), index: a, interval: [r, s]})
                }
            }, categories: function () {
                var t = this.option;
                a.each(t.categories, function (t) {
                    this._pieceList.push({text: this.formatValueText(t, !0), value: t})
                }, this), n(t, this._pieceList)
            }, pieces: function () {
                var t = this.option;
                a.each(t.pieces, function (t, e) {
                    a.isObject(t) || (t = {value: t});
                    var i, n = {text: "", index: e};
                    if (null != t.label && (n.text = t.label, i = !0), t.hasOwnProperty("value"))n.value = t.value, i || (n.text = this.formatValueText(n.value)); else {
                        var o = t.min, s = t.max;
                        null == o && (o = -(1 / 0)), null == s && (s = 1 / 0), o === s && (n.value = o), n.interval = [o, s], i || (n.text = this.formatValueText([o, s]))
                    }
                    n.visual = r.retrieveVisuals(t), this._pieceList.push(n)
                }, this), n(t, this._pieceList)
            }
        };
        t.exports = s
    }, function (t, e, i) {
        var n = i(216), o = i(1), a = i(3), r = i(25), s = i(11), l = i(217), h = n.extend({
            type: "visualMap.piecewise",
            doRender: function () {
                function t(t) {
                    var i = t.piece, r = new a.Group;
                    r.onclick = o.bind(this._onItemClick, this, i), this._enableHoverLink(r, t.indexInModelPieceList);
                    var s = this._getRepresentValue(i);
                    if (this._createItemSymbol(r, s, [0, 0, c[0], c[1]]), f) {
                        var d = this.visualMapModel.getValueState(s);
                        r.add(new a.Text({
                            style: {
                                x: "right" === u ? -n : c[0] + n,
                                y: c[1] / 2,
                                text: i.text,
                                textVerticalAlign: "middle",
                                textAlign: u,
                                textFont: l,
                                fill: h,
                                opacity: "outOfRange" === d ? .5 : 1
                            }
                        }))
                    }
                    e.add(r)
                }

                var e = this.group;
                e.removeAll();
                var i = this.visualMapModel, n = i.get("textGap"), r = i.textStyleModel, l = r.getFont(), h = r.getTextColor(), u = this._getItemAlign(), c = i.itemSize, d = this._getViewData(), f = !d.endsText, p = !f;
                p && this._renderEndsText(e, d.endsText[0], c), o.each(d.viewPieceList, t, this), p && this._renderEndsText(e, d.endsText[1], c), s.box(i.get("orient"), e, i.get("itemGap")), this.renderBackground(e), this.positionGroup(e)
            },
            _enableHoverLink: function (t, e) {
                function i(t) {
                    var i = this.visualMapModel;
                    i.option.hoverLink && this.api.dispatchAction({
                        type: t,
                        batch: l.convertDataIndicesToBatch(i.findTargetDataIndices(e))
                    })
                }

                t.on("mouseover", o.bind(i, this, "highlight")).on("mouseout", o.bind(i, this, "downplay"))
            },
            _getItemAlign: function () {
                var t = this.visualMapModel, e = t.option;
                if ("vertical" === e.orient)return l.getItemAlign(t, this.api, t.itemSize);
                var i = e.align;
                return i && "auto" !== i || (i = "left"), i
            },
            _renderEndsText: function (t, e, i) {
                if (e) {
                    var n = new a.Group, o = this.visualMapModel.textStyleModel;
                    n.add(new a.Text({
                        style: {
                            x: i[0] / 2,
                            y: i[1] / 2,
                            textVerticalAlign: "middle",
                            textAlign: "center",
                            text: e,
                            textFont: o.getFont(),
                            fill: o.getTextColor()
                        }
                    })), t.add(n)
                }
            },
            _getViewData: function () {
                var t = this.visualMapModel, e = o.map(t.getPieceList(), function (t, e) {
                    return {piece: t, indexInModelPieceList: e}
                }), i = t.get("text"), n = t.get("orient"), a = t.get("inverse");
                return ("horizontal" === n ? a : !a) ? e.reverse() : i && (i = i.slice().reverse()), {
                    viewPieceList: e,
                    endsText: i
                }
            },
            _getRepresentValue: function (t) {
                var e;
                if (this.visualMapModel.isCategory())e = t.value; else if (null != t.value)e = t.value; else {
                    var i = t.interval || [];
                    e = (i[0] + i[1]) / 2
                }
                return e
            },
            _createItemSymbol: function (t, e, i) {
                t.add(r.createSymbol(this.getControllerVisual(e, "symbol"), i[0], i[1], i[2], i[3], this.getControllerVisual(e, "color")))
            },
            _onItemClick: function (t) {
                var e = this.visualMapModel, i = e.option, n = o.clone(i.selected), a = e.getSelectedMapKey(t);
                "single" === i.selectedMode ? (n[a] = !0, o.each(n, function (t, e) {
                    n[e] = e === a
                })) : n[a] = !n[a], this.api.dispatchAction({
                    type: "selectDataRange",
                    from: this.uid,
                    visualMapId: this.visualMapModel.id,
                    selected: n
                })
            }
        });
        t.exports = h
    }, function (t, e, i) {
        i(2).registerPreprocessor(i(218)), i(219), i(220), i(322), i(323), i(221)
    }, function (t, e, i) {
        i(2).registerPreprocessor(i(218)), i(219), i(220), i(324), i(325), i(221)
    }, function (t, e, i) {
        function n(t, e, i, n, o) {
            s.call(this, t), this.map = e, this._nameCoordMap = {}, this.loadGeoJson(i, n, o)
        }

        var o = i(333), a = i(1), r = i(8), s = i(222), l = [i(331), i(332), i(330)];
        n.prototype = {
            constructor: n, type: "geo", dimensions: ["lng", "lat"], containCoord: function (t) {
                for (var e = this.regions, i = 0; i < e.length; i++)if (e[i].contain(t))return !0;
                return !1
            }, loadGeoJson: function (t, e, i) {
                try {
                    this.regions = t ? o(t) : []
                } catch (n) {
                    throw"Invalid geoJson format\n" + n
                }
                e = e || {}, i = i || {};
                for (var r = this.regions, s = {}, h = 0; h < r.length; h++) {
                    var u = r[h].name;
                    u = i[u] || u, r[h].name = u, s[u] = r[h], this.addGeoCoord(u, r[h].center);
                    var c = e[u];
                    c && r[h].transformTo(c.left, c.top, c.width, c.height)
                }
                this._regionsMap = s, this._rect = null, a.each(l, function (t) {
                    t(this)
                }, this)
            }, transformTo: function (t, e, i, n) {
                var o = this.getBoundingRect();
                o = o.clone(), o.y = -o.y - o.height;
                var a = this._viewTransform;
                a.transform = o.calculateTransform(new r(t, e, i, n)), a.decomposeTransform();
                var s = a.scale;
                s[1] = -s[1], a.updateTransform(), this._updateTransform()
            }, getRegion: function (t) {
                return this._regionsMap[t]
            }, getRegionByCoord: function (t) {
                for (var e = this.regions, i = 0; i < e.length; i++)if (e[i].contain(t))return e[i]
            }, addGeoCoord: function (t, e) {
                this._nameCoordMap[t] = e
            }, getGeoCoord: function (t) {
                return this._nameCoordMap[t]
            }, getBoundingRect: function () {
                if (this._rect)return this._rect;
                for (var t, e = this.regions, i = 0; i < e.length; i++) {
                    var n = e[i].getBoundingRect();
                    t = t || n.clone(), t.union(n)
                }
                return this._rect = t || new r(0, 0, 0, 0)
            }, dataToPoints: function (t) {
                var e = [];
                return t.mapArray(["lng", "lat"], function (t, i) {
                    return e[0] = t, e[1] = i, this.dataToPoint(e)
                }, this)
            }, dataToPoint: function (t) {
                return "string" == typeof t && (t = this.getGeoCoord(t)), t ? s.prototype.dataToPoint.call(this, t) : void 0
            }
        }, a.mixin(n, s), t.exports = n
    }, function (t, e, i) {
        "use strict";
        var n = i(7), o = i(10), a = i(12), r = i(1), s = i(61), l = i(162), h = o.extend({
            type: "geo",
            coordinateSystem: null,
            init: function (t) {
                o.prototype.init.apply(this, arguments), n.defaultEmphasis(t.label, ["position", "show", "textStyle", "distance", "formatter"])
            },
            optionUpdated: function () {
                var t = this.option, e = this;
                t.regions = l.getFilledRegions(t.regions, t.map), this._optionModelMap = r.reduce(t.regions || [], function (t, i) {
                    return i.name && (t[i.name] = new a(i, e)), t
                }, {}), this.updateSelectedMap(t.regions)
            },
            defaultOption: {
                zlevel: 0,
                z: 0,
                show: !0,
                left: "center",
                top: "center",
                map: "",
                center: null,
                zoom: 1,
                scaleLimit: null,
                label: {
                    normal: {show: !1, textStyle: {color: "#000"}},
                    emphasis: {show: !0, textStyle: {color: "rgb(100,0,0)"}}
                },
                itemStyle: {
                    normal: {borderWidth: .5, borderColor: "#444", color: "#eee"},
                    emphasis: {color: "rgba(255,215,0,0.8)"}
                },
                regions: []
            },
            getRegionModel: function (t) {
                return this._optionModelMap[t]
            },
            getFormattedLabel: function (t, e) {
                var i = this.get("label." + e + ".formatter"), n = {name: t};
                return "function" == typeof i ? (n.status = e, i(n)) : "string" == typeof i ? i.replace("{a}", n.seriesName) : void 0
            },
            setZoom: function (t) {
                this.option.zoom = t
            },
            setCenter: function (t) {
                this.option.center = t
            }
        });
        r.mixin(h, s), t.exports = h
    }, function (t, e, i) {
        var n = i(1), o = {Russia: [100, 60], "United States of America": [-99, 38]};
        t.exports = function (t) {
            n.each(t.regions, function (t) {
                var e = o[t.name];
                if (e) {
                    var i = t.center;
                    i[0] = e[0], i[1] = e[1]
                }
            })
        }
    }, function (t, e, i) {
        for (var n = i(223), o = [126, 25], a = [[[0, 3.5], [7, 11.2], [15, 11.9], [30, 7], [42, .7], [52, .7], [56, 7.7], [59, .7], [64, .7], [64, 0], [5, 0], [0, 3.5]], [[13, 16.1], [19, 14.7], [16, 21.7], [11, 23.1], [13, 16.1]], [[12, 32.2], [14, 38.5], [15, 38.5], [13, 32.2], [12, 32.2]], [[16, 47.6], [12, 53.2], [13, 53.2], [18, 47.6], [16, 47.6]], [[6, 64.4], [8, 70], [9, 70], [8, 64.4], [6, 64.4]], [[23, 82.6], [29, 79.8], [30, 79.8], [25, 82.6], [23, 82.6]], [[37, 70.7], [43, 62.3], [44, 62.3], [39, 70.7], [37, 70.7]], [[48, 51.1], [51, 45.5], [53, 45.5], [50, 51.1], [48, 51.1]], [[51, 35], [51, 28.7], [53, 28.7], [53, 35], [51, 35]], [[52, 22.4], [55, 17.5], [56, 17.5], [53, 22.4], [52, 22.4]], [[58, 12.6], [62, 7], [63, 7], [60, 12.6], [58, 12.6]], [[0, 3.5], [0, 93.1], [64, 93.1], [64, 0], [63, 0], [63, 92.4], [1, 92.4], [1, 3.5], [0, 3.5]]], r = 0; r < a.length; r++)for (var s = 0; s < a[r].length; s++)a[r][s][0] /= 10.5, a[r][s][1] /= -14, a[r][s][0] += o[0], a[r][s][1] += o[1];
        t.exports = function (t) {
            "china" === t.map && t.regions.push(new n("南海诸岛", a, o))
        }
    }, function (t, e, i) {
        var n = i(1), o = {"南海诸岛": [32, 80], "广东": [0, -10], "香港": [10, 5], "澳门": [-10, 10], "天津": [5, 5]};
        t.exports = function (t) {
            n.each(t.regions, function (t) {
                var e = o[t.name];
                if (e) {
                    var i = t.center;
                    i[0] += e[0] / 10.5, i[1] += -e[1] / 14
                }
            })
        }
    }, function (t, e, i) {
        function n(t) {
            if (!t.UTF8Encoding)return t;
            for (var e = t.features, i = 0; i < e.length; i++)for (var n = e[i], a = n.geometry, r = a.coordinates, s = a.encodeOffsets, l = 0; l < r.length; l++) {
                var h = r[l];
                if ("Polygon" === a.type)r[l] = o(h, s[l]); else if ("MultiPolygon" === a.type)for (var u = 0; u < h.length; u++) {
                    var c = h[u];
                    h[u] = o(c, s[l][u])
                }
            }
            return t.UTF8Encoding = !1, t
        }

        function o(t, e) {
            for (var i = [], n = e[0], o = e[1], a = 0; a < t.length; a += 2) {
                var r = t.charCodeAt(a) - 64, s = t.charCodeAt(a + 1) - 64;
                r = r >> 1 ^ -(1 & r), s = s >> 1 ^ -(1 & s), r += n, s += o, n = r, o = s, i.push([r / 1024, s / 1024])
            }
            return i
        }

        function a(t) {
            for (var e = [], i = 0; i < t.length; i++)for (var n = 0; n < t[i].length; n++)e.push(t[i][n]);
            return e
        }

        var r = i(1), s = i(223);
        t.exports = function (t) {
            return n(t), r.map(r.filter(t.features, function (t) {
                return t.geometry && t.properties
            }), function (t) {
                var e = t.properties, i = t.geometry, n = i.coordinates;
                return "MultiPolygon" === i.type && (n = a(n)), new s(e.name, n, e.cp)
            })
        }
    }, function (t, e, i) {
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var o = i(10), a = i(1), r = i(30), s = i(62), l = i(4), h = o.extend({
            type: "baseParallelAxis",
            axis: null,
            activeIntervals: [],
            getAreaSelectStyle: function () {
                return r([["fill", "color"], ["lineWidth", "borderWidth"], ["stroke", "borderColor"], ["width", "width"], ["opacity", "opacity"]]).call(this.getModel("areaSelectStyle"))
            },
            setActiveIntervals: function (t) {
                var e = this.activeIntervals = a.clone(t);
                if (e)for (var i = e.length - 1; i >= 0; i--)l.asc(e[i])
            },
            getActiveState: function (t) {
                var e = this.activeIntervals;
                if (!e.length)return "normal";
                if (null == t)return "inactive";
                for (var i = 0, n = e.length; n > i; i++)if (e[i][0] <= t && t <= e[i][1])return "active";
                return "inactive"
            }
        }), u = {
            type: "value",
            dim: null,
            parallelIndex: null,
            areaSelectStyle: {
                width: 20,
                borderWidth: 1,
                borderColor: "rgba(160,197,232)",
                color: "rgba(160,197,232)",
                opacity: .3
            },
            z: 10
        };
        a.merge(h.prototype, i(50)), s("parallel", h, n, u), t.exports = h
    }, function (t, e, i) {
        function n(t, e, i) {
            this._axesMap = {}, this._axesLayout = {}, this.dimensions = t.dimensions, this._rect, this._model = t, this._init(t, e, i)
        }

        var o = i(11), a = i(24), r = i(1), s = i(336), l = i(19), h = i(5), u = r.each, c = Math.PI;
        n.prototype = {
            type: "parallel", constructor: n, _init: function (t, e, i) {
                var n = t.dimensions, o = t.parallelAxisIndex;
                u(n, function (t, i) {
                    var n = o[i], r = e.getComponent("parallelAxis", n), l = this._axesMap[t] = new s(t, a.createScaleByModel(r), [0, 0], r.get("type"), n), h = "category" === l.type;
                    l.onBand = h && r.get("boundaryGap"), l.inverse = r.get("inverse"), r.axis = l, l.model = r
                }, this)
            }, update: function (t, e) {
                this._updateAxesFromSeries(this._model, t)
            }, _updateAxesFromSeries: function (t, e) {
                e.eachSeries(function (i) {
                    if (t.contains(i, e)) {
                        var n = i.getData();
                        u(this.dimensions, function (t) {
                            var e = this._axesMap[t];
                            e.scale.unionExtent(n.getDataExtent(t)), a.niceScaleExtent(e, e.model)
                        }, this)
                    }
                }, this)
            }, resize: function (t, e) {
                this._rect = o.getLayoutRect(t.getBoxLayoutParams(), {
                    width: e.getWidth(),
                    height: e.getHeight()
                }), this._layoutAxes(t)
            }, getRect: function () {
                return this._rect
            }, _layoutAxes: function (t) {
                var e = this._rect, i = t.get("layout"), n = this._axesMap, o = this.dimensions, a = [e.width, e.height], r = "horizontal" === i ? 0 : 1, s = a[r], h = a[1 - r], d = [0, h];
                u(n, function (t) {
                    var e = t.inverse ? 1 : 0;
                    t.setExtent(d[e], d[1 - e])
                }), u(o, function (t, n) {
                    var a = s * n / (o.length - 1), r = {
                        horizontal: {x: a, y: h},
                        vertical: {x: 0, y: a}
                    }, u = {horizontal: c / 2, vertical: 0}, d = [r[i].x + e.x, r[i].y + e.y], f = u[i], p = l.create();
                    l.rotate(p, p, f), l.translate(p, p, d), this._axesLayout[t] = {
                        position: d,
                        rotation: f,
                        transform: p,
                        tickDirection: 1,
                        labelDirection: 1
                    }
                }, this)
            }, getAxis: function (t) {
                return this._axesMap[t]
            }, dataToPoint: function (t, e) {
                return this.axisCoordToPoint(this._axesMap[e].dataToCoord(t), e)
            }, eachActiveState: function (t, e, i) {
                for (var n = this.dimensions, o = this._axesMap, a = !1, r = 0, s = n.length; s > r; r++)"normal" !== o[n[r]].model.getActiveState() && (a = !0);
                for (var l = 0, h = t.count(); h > l; l++) {
                    var u, c = t.getValues(n, l);
                    if (a) {
                        u = "active";
                        for (var r = 0, s = n.length; s > r; r++) {
                            var d = n[r], f = o[d].model.getActiveState(c[r], r);
                            if ("inactive" === f) {
                                u = "inactive";
                                break
                            }
                        }
                    } else u = "normal";
                    e.call(i, u, l)
                }
            }, axisCoordToPoint: function (t, e) {
                var i = this._axesLayout[e], n = [t, 0];
                return h.applyTransform(n, n, i.transform), n
            }, getAxisLayout: function (t) {
                return r.clone(this._axesLayout[t])
            }
        }, t.exports = n
    }, function (t, e, i) {
        var n = i(1), o = i(43), a = function (t, e, i, n, a) {
            o.call(this, t, e, i), this.type = n || "value", this.axisIndex = a
        };
        a.prototype = {constructor: a, model: null}, n.inherits(a, o), t.exports = a
    }, function (t, e, i) {
        var n = i(1), o = i(10);
        i(334), o.extend({
            type: "parallel",
            dependencies: ["parallelAxis"],
            coordinateSystem: null,
            dimensions: null,
            parallelAxisIndex: null,
            defaultOption: {
                zlevel: 0,
                z: 0,
                left: 80,
                top: 60,
                right: 80,
                bottom: 60,
                layout: "horizontal",
                parallelAxisDefault: null
            },
            init: function () {
                o.prototype.init.apply(this, arguments), this.mergeOption({})
            },
            mergeOption: function (t) {
                var e = this.option;
                t && n.merge(e, t, !0), this._initDimensions()
            },
            contains: function (t, e) {
                var i = t.get("parallelIndex");
                return null != i && e.getComponent("parallel", i) === this
            },
            _initDimensions: function () {
                var t = this.dimensions = [], e = this.parallelAxisIndex = [], i = n.filter(this.dependentModels.parallelAxis, function (t) {
                    return t.get("parallelIndex") === this.componentIndex
                });
                n.each(i, function (i) {
                    t.push("dim" + i.get("dim")), e.push(i.componentIndex)
                })
            }
        })
    }, function (t, e, i) {
        function n(t) {
            if (!t.parallel) {
                var e = !1;
                a.each(t.series, function (t) {
                    t && "parallel" === t.type && (e = !0)
                }), e && (t.parallel = [{}])
            }
        }

        function o(t) {
            var e = r.normalizeToArray(t.parallelAxis);
            a.each(e, function (e) {
                if (a.isObject(e)) {
                    var i = e.parallelIndex || 0, n = r.normalizeToArray(t.parallel)[i];
                    n && n.parallelAxisDefault && a.merge(e, n.parallelAxisDefault, !1)
                }
            })
        }

        var a = i(1), r = i(7);
        t.exports = function (t) {
            n(t), o(t)
        }
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            e = e || [0, 360], a.call(this, "angle", t, e), this.type = "category"
        }

        var o = i(1), a = i(43);
        n.prototype = {
            constructor: n,
            dataToAngle: a.prototype.dataToCoord,
            angleToData: a.prototype.coordToData
        }, o.inherits(n, a), t.exports = n
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            return e.type || (e.data ? "category" : "value")
        }

        var o = i(1), a = i(10), r = i(62), s = a.extend({type: "polarAxis", axis: null});
        o.merge(s.prototype, i(50));
        var l = {
            angle: {polarIndex: 0, startAngle: 90, clockwise: !0, splitNumber: 12, axisLabel: {rotate: !1}},
            radius: {polarIndex: 0, splitNumber: 5}
        };
        r("angle", s, n, l.angle), r("radius", s, n, l.radius)
    }, function (t, e, i) {
        "use strict";
        var n = i(343), o = i(339), a = function (t) {
            this.name = t || "", this.cx = 0, this.cy = 0, this._radiusAxis = new n, this._angleAxis = new o
        };
        a.prototype = {
            constructor: a, type: "polar", dimensions: ["radius", "angle"], containPoint: function (t) {
                var e = this.pointToCoord(t);
                return this._radiusAxis.contain(e[0]) && this._angleAxis.contain(e[1])
            }, containData: function (t) {
                return this._radiusAxis.containData(t[0]) && this._angleAxis.containData(t[1])
            }, getAxis: function (t) {
                return this["_" + t + "Axis"]
            }, getAxesByScale: function (t) {
                var e = [], i = this._angleAxis, n = this._radiusAxis;
                return i.scale.type === t && e.push(i), n.scale.type === t && e.push(n), e
            }, getAngleAxis: function () {
                return this._angleAxis
            }, getRadiusAxis: function () {
                return this._radiusAxis
            }, getOtherAxis: function (t) {
                var e = this._angleAxis;
                return t === e ? this._radiusAxis : e
            }, getBaseAxis: function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAngleAxis()
            }, dataToPoints: function (t) {
                return t.mapArray(this.dimensions, function (t, e) {
                    return this.dataToPoint([t, e])
                }, this)
            }, dataToPoint: function (t, e) {
                return this.coordToPoint([this._radiusAxis.dataToRadius(t[0], e), this._angleAxis.dataToAngle(t[1], e)])
            }, pointToData: function (t, e) {
                var i = this.pointToCoord(t);
                return [this._radiusAxis.radiusToData(i[0], e), this._angleAxis.angleToData(i[1], e)]
            }, pointToCoord: function (t) {
                var e = t[0] - this.cx, i = t[1] - this.cy, n = this.getAngleAxis(), o = n.getExtent(), a = Math.min(o[0], o[1]), r = Math.max(o[0], o[1]);
                n.inverse ? a = r - 360 : r = a + 360;
                var s = Math.sqrt(e * e + i * i);
                e /= s, i /= s;
                for (var l = Math.atan2(-i, e) / Math.PI * 180, h = a > l ? 1 : -1; a > l || l > r;)l += 360 * h;
                return [s, l]
            }, coordToPoint: function (t) {
                var e = t[0], i = t[1] / 180 * Math.PI, n = Math.cos(i) * e + this.cx, o = -Math.sin(i) * e + this.cy;
                return [n, o]
            }
        }, t.exports = a
    }, function (t, e, i) {
        "use strict";
        i(340), i(2).extendComponentModel({
            type: "polar",
            dependencies: ["polarAxis", "angleAxis"],
            coordinateSystem: null,
            findAxisModel: function (t) {
                var e, i = this.ecModel;
                return i.eachComponent(t, function (t) {
                    i.getComponent("polar", t.getShallow("polarIndex")) === this && (e = t)
                }, this), e
            },
            defaultOption: {zlevel: 0, z: 0, center: ["50%", "50%"], radius: "80%"}
        })
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            a.call(this, "radius", t, e), this.type = "category"
        }

        var o = i(1), a = i(43);
        n.prototype = {
            constructor: n,
            dataToRadius: a.prototype.dataToCoord,
            radiusToData: a.prototype.coordToData
        }, o.inherits(n, a), t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            a.call(this, t, e, i), this.type = "value", this.angle = 0, this.name = "", this.model
        }

        var o = i(1), a = i(43);
        o.inherits(n, a), t.exports = n
    }, function (t, e, i) {
        function n(t, e, i) {
            this._model = t, this.dimensions = [], this._indicatorAxes = o.map(t.getIndicatorModels(), function (t, e) {
                var i = "indicator_" + e, n = new a(i, new r);
                return n.name = t.get("name"), n.model = t, t.axis = n, this.dimensions.push(i), n
            }, this), this.resize(t, i), this.cx, this.cy, this.r, this.startAngle
        }

        var o = i(1), a = i(344), r = i(38), s = i(4), l = i(24);
        n.prototype.getIndicatorAxes = function () {
            return this._indicatorAxes
        }, n.prototype.dataToPoint = function (t, e) {
            var i = this._indicatorAxes[e];
            return this.coordToPoint(i.dataToCoord(t), e)
        }, n.prototype.coordToPoint = function (t, e) {
            var i = this._indicatorAxes[e], n = i.angle, o = this.cx + t * Math.cos(n), a = this.cy - t * Math.sin(n);
            return [o, a]
        }, n.prototype.pointToData = function (t) {
            var e = t[0] - this.cx, i = t[1] - this.cy, n = Math.sqrt(e * e + i * i);
            e /= n, i /= n;
            for (var o, a = Math.atan2(-i, e), r = 1 / 0, s = -1, l = 0; l < this._indicatorAxes.length; l++) {
                var h = this._indicatorAxes[l], u = Math.abs(a - h.angle);
                r > u && (o = h, s = l, r = u)
            }
            return [s, +(o && o.coodToData(n))]
        }, n.prototype.resize = function (t, e) {
            var i = t.get("center"), n = e.getWidth(), a = e.getHeight(), r = Math.min(n, a) / 2;
            this.cx = s.parsePercent(i[0], n), this.cy = s.parsePercent(i[1], a), this.startAngle = t.get("startAngle") * Math.PI / 180, this.r = s.parsePercent(t.get("radius"), r), o.each(this._indicatorAxes, function (t, e) {
                t.setExtent(0, this.r);
                var i = this.startAngle + e * Math.PI * 2 / this._indicatorAxes.length;
                i = Math.atan2(Math.sin(i), Math.cos(i)), t.angle = i
            }, this)
        }, n.prototype.update = function (t, e) {
            function i(t) {
                var e = Math.pow(10, Math.floor(Math.log(t) / Math.LN10)), i = t / e;
                return 2 === i ? i = 5 : i *= 2, i * e
            }

            var n = this._indicatorAxes, a = this._model;
            o.each(n, function (t) {
                t.scale.setExtent(1 / 0, -(1 / 0))
            }), t.eachSeriesByType("radar", function (e, i) {
                if ("radar" === e.get("coordinateSystem") && t.getComponent("radar", e.get("radarIndex")) === a) {
                    var r = e.getData();
                    o.each(n, function (t) {
                        t.scale.unionExtent(r.getDataExtent(t.dim))
                    })
                }
            }, this);
            var r = a.get("splitNumber");
            o.each(n, function (t, e) {
                var n = l.getScaleExtent(t, t.model);
                l.niceScaleExtent(t, t.model);
                var o = t.model, a = t.scale, h = o.get("min"), u = o.get("max"), c = a.getInterval();
                if (null != h && null != u)a.setInterval((u - h) / r); else if (null != h) {
                    var d;
                    do d = h + c * r, a.setExtent(+h, d), a.setInterval(c), c = i(c); while (d < n[1] && isFinite(d) && isFinite(n[1]))
                } else if (null != u) {
                    var f;
                    do f = u - c * r, a.setExtent(f, +u), a.setInterval(c), c = i(c); while (f > n[0] && isFinite(f) && isFinite(n[0]))
                } else {
                    var p = a.getTicks().length - 1;
                    p > r && (c = i(c));
                    var g = Math.round((n[0] + n[1]) / 2 / c) * c, m = Math.round(r / 2);
                    a.setExtent(s.round(g - m * c), s.round(g + (r - m) * c)), a.setInterval(c)
                }
            })
        }, n.dimensions = [], n.create = function (t, e) {
            var i = [];
            return t.eachComponent("radar", function (o) {
                var a = new n(o, t, e);
                i.push(a), o.coordinateSystem = a
            }), t.eachSeriesByType("radar", function (t) {
                "radar" === t.get("coordinateSystem") && (t.coordinateSystem = i[t.get("radarIndex") || 0])
            }), i
        }, i(23).register("radar", n), t.exports = n
    }, function (t, e, i) {
        function n(t, e) {
            return s.defaults({show: e}, t)
        }

        var o = i(72), a = o.valueAxis, r = i(12), s = i(1), l = i(50), h = i(2).extendComponentModel({
            type: "radar",
            optionUpdated: function () {
                var t = this.get("boundaryGap"), e = this.get("splitNumber"), i = this.get("scale"), n = this.get("axisLine"), o = this.get("axisTick"), a = this.get("axisLabel"), h = this.get("name.textStyle"), u = this.get("name.show"), c = this.get("name.formatter"), d = this.get("nameGap"), f = s.map(this.get("indicator") || [], function (f) {
                    return null != f.max && f.max > 0 ? f.min = 0 : null != f.min && f.min < 0 && (f.max = 0), f = s.merge(s.clone(f), {
                        boundaryGap: t,
                        splitNumber: e,
                        scale: i,
                        axisLine: n,
                        axisTick: o,
                        axisLabel: a,
                        name: f.text,
                        nameLocation: "end",
                        nameGap: d,
                        nameTextStyle: h
                    }, !1), u || (f.name = ""), "string" == typeof c ? f.name = c.replace("{value}", f.name) : "function" == typeof c && (f.name = c(f.name, f)), s.extend(new r(f, null, this.ecModel), l)
                }, this);
                this.getIndicatorModels = function () {
                    return f
                }
            },
            defaultOption: {
                zlevel: 0,
                z: 0,
                center: ["50%", "50%"],
                radius: "75%",
                startAngle: 90,
                name: {show: !0},
                boundaryGap: [0, 0],
                splitNumber: 5,
                nameGap: 15,
                scale: !1,
                shape: "polygon",
                axisLine: s.merge({lineStyle: {color: "#bbb"}}, a.axisLine),
                axisLabel: n(a.axisLabel, !1),
                axisTick: n(a.axisTick, !1),
                splitLine: n(a.splitLine, !0),
                splitArea: n(a.splitArea, !0),
                indicator: []
            }
        });
        t.exports = h
    }, function (t, e, i) {
        "use strict";
        function n(t, e) {
            this.id = null == t ? "" : t, this.inEdges = [], this.outEdges = [], this.edges = [], this.hostGraph, this.dataIndex = null == e ? -1 : e
        }

        function o(t, e, i) {
            this.node1 = t, this.node2 = e, this.dataIndex = null == i ? -1 : i
        }

        var a = i(1), r = function (t) {
            this._directed = t || !1, this.nodes = [], this.edges = [], this._nodesMap = {}, this._edgesMap = {}, this.data, this.edgeData
        }, s = r.prototype;
        s.type = "graph", s.isDirected = function () {
            return this._directed
        }, s.addNode = function (t, e) {
            t = t || "" + e;
            var i = this._nodesMap;
            if (!i[t]) {
                var o = new n(t, e);
                return o.hostGraph = this, this.nodes.push(o), i[t] = o, o
            }
        }, s.getNodeByIndex = function (t) {
            var e = this.data.getRawIndex(t);
            return this.nodes[e]
        }, s.getNodeById = function (t) {
            return this._nodesMap[t]
        }, s.addEdge = function (t, e, i) {
            var a = this._nodesMap, r = this._edgesMap;
            if ("number" == typeof t && (t = this.nodes[t]), "number" == typeof e && (e = this.nodes[e]), t instanceof n || (t = a[t]), e instanceof n || (e = a[e]), t && e) {
                var s = t.id + "-" + e.id;
                if (!r[s]) {
                    var l = new o(t, e, i);
                    return l.hostGraph = this, this._directed && (t.outEdges.push(l), e.inEdges.push(l)), t.edges.push(l), t !== e && e.edges.push(l), this.edges.push(l), r[s] = l, l
                }
            }
        }, s.getEdgeByIndex = function (t) {
            var e = this.edgeData.getRawIndex(t);
            return this.edges[e]
        }, s.getEdge = function (t, e) {
            t instanceof n && (t = t.id), e instanceof n && (e = e.id);
            var i = this._edgesMap;
            return this._directed ? i[t + "-" + e] : i[t + "-" + e] || i[e + "-" + t]
        }, s.eachNode = function (t, e) {
            for (var i = this.nodes, n = i.length, o = 0; n > o; o++)i[o].dataIndex >= 0 && t.call(e, i[o], o)
        }, s.eachEdge = function (t, e) {
            for (var i = this.edges, n = i.length, o = 0; n > o; o++)i[o].dataIndex >= 0 && i[o].node1.dataIndex >= 0 && i[o].node2.dataIndex >= 0 && t.call(e, i[o], o)
        }, s.breadthFirstTraverse = function (t, e, i, o) {
            if (e instanceof n || (e = this._nodesMap[e]), e) {
                for (var a = "out" === i ? "outEdges" : "in" === i ? "inEdges" : "edges", r = 0; r < this.nodes.length; r++)this.nodes[r].__visited = !1;
                if (!t.call(o, e, null))for (var s = [e]; s.length;)for (var l = s.shift(), h = l[a], r = 0; r < h.length; r++) {
                    var u = h[r], c = u.node1 === l ? u.node2 : u.node1;
                    if (!c.__visited) {
                        if (t.call(c, c, l))return;
                        s.push(c), c.__visited = !0
                    }
                }
            }
        }, s.update = function () {
            for (var t = this.data, e = this.edgeData, i = this.nodes, n = this.edges, o = 0, a = i.length; a > o; o++)i[o].dataIndex = -1;
            for (var o = 0, a = t.count(); a > o; o++)i[t.getRawIndex(o)].dataIndex = o;
            e.filterSelf(function (t) {
                var i = n[e.getRawIndex(t)];
                return i.node1.dataIndex >= 0 && i.node2.dataIndex >= 0
            });
            for (var o = 0, a = n.length; a > o; o++)n[o].dataIndex = -1;
            for (var o = 0, a = e.count(); a > o; o++)n[e.getRawIndex(o)].dataIndex = o
        }, s.clone = function () {
            for (var t = new r(this._directed), e = this.nodes, i = this.edges, n = 0; n < e.length; n++)t.addNode(e[n].id, e[n].dataIndex);
            for (var n = 0; n < i.length; n++) {
                var o = i[n];
                t.addEdge(o.node1.id, o.node2.id, o.dataIndex);
            }
            return t
        }, n.prototype = {
            constructor: n, degree: function () {
                return this.edges.length
            }, inDegree: function () {
                return this.inEdges.length
            }, outDegree: function () {
                return this.outEdges.length
            }, getModel: function (t) {
                if (!(this.dataIndex < 0)) {
                    var e = this.hostGraph, i = e.data.getItemModel(this.dataIndex);
                    return i.getModel(t)
                }
            }
        }, o.prototype.getModel = function (t) {
            if (!(this.dataIndex < 0)) {
                var e = this.hostGraph, i = e.edgeData.getItemModel(this.dataIndex);
                return i.getModel(t)
            }
        };
        var l = function (t, e) {
            return {
                getValue: function (i) {
                    var n = this[t][e];
                    return n.get(n.getDimension(i || "value"), this.dataIndex)
                }, setVisual: function (i, n) {
                    this.dataIndex >= 0 && this[t][e].setItemVisual(this.dataIndex, i, n)
                }, getVisual: function (i, n) {
                    return this[t][e].getItemVisual(this.dataIndex, i, n)
                }, setLayout: function (i, n) {
                    this.dataIndex >= 0 && this[t][e].setItemLayout(this.dataIndex, i, n)
                }, getLayout: function () {
                    return this[t][e].getItemLayout(this.dataIndex)
                }, getGraphicEl: function () {
                    return this[t][e].getItemGraphicEl(this.dataIndex)
                }, getRawIndex: function () {
                    return this[t][e].getRawIndex(this.dataIndex)
                }
            }
        };
        a.mixin(n, l("hostGraph", "data")), a.mixin(o, l("hostGraph", "edgeData")), r.Node = n, r.Edge = o, t.exports = r
    }, function (t, e, i) {
        function n(t, e) {
            this.root, this.data, this._nodes = [], this.hostModel = t, this.levelModels = a.map(e || [], function (e) {
                return new r(e, t, t.ecModel)
            })
        }

        function o(t, e) {
            var i = e.children;
            t.parentNode !== e && (i.push(t), t.parentNode = e)
        }

        var a = i(1), r = i(12), s = i(15), l = i(225), h = i(31), u = function (t, e) {
            this.name = t || "", this.depth = 0, this.height = 0, this.parentNode = null, this.dataIndex = -1, this.children = [], this.viewChildren = [], this.hostTree = e
        };
        u.prototype = {
            constructor: u, isRemoved: function () {
                return this.dataIndex < 0
            }, eachNode: function (t, e, i) {
                "function" == typeof t && (i = e, e = t, t = null), t = t || {}, a.isString(t) && (t = {order: t});
                var n, o = t.order || "preorder", r = this[t.attr || "children"];
                "preorder" === o && (n = e.call(i, this));
                for (var s = 0; !n && s < r.length; s++)r[s].eachNode(t, e, i);
                "postorder" === o && e.call(i, this)
            }, updateDepthAndHeight: function (t) {
                var e = 0;
                this.depth = t;
                for (var i = 0; i < this.children.length; i++) {
                    var n = this.children[i];
                    n.updateDepthAndHeight(t + 1), n.height > e && (e = n.height)
                }
                this.height = e + 1
            }, getNodeById: function (t) {
                if (this.getId() === t)return this;
                for (var e = 0, i = this.children, n = i.length; n > e; e++) {
                    var o = i[e].getNodeById(t);
                    if (o)return o
                }
            }, contains: function (t) {
                if (t === this)return !0;
                for (var e = 0, i = this.children, n = i.length; n > e; e++) {
                    var o = i[e].contains(t);
                    if (o)return o
                }
            }, getAncestors: function (t) {
                for (var e = [], i = t ? this : this.parentNode; i;)e.push(i), i = i.parentNode;
                return e.reverse(), e
            }, getValue: function (t) {
                var e = this.hostTree.data;
                return e.get(e.getDimension(t || "value"), this.dataIndex)
            }, setLayout: function (t, e) {
                this.dataIndex >= 0 && this.hostTree.data.setItemLayout(this.dataIndex, t, e)
            }, getLayout: function () {
                return this.hostTree.data.getItemLayout(this.dataIndex)
            }, getModel: function (t) {
                if (!(this.dataIndex < 0)) {
                    var e = this.hostTree, i = e.data.getItemModel(this.dataIndex), n = this.getLevelModel();
                    return i.getModel(t, (n || e.hostModel).getModel(t))
                }
            }, getLevelModel: function () {
                return (this.hostTree.levelModels || [])[this.depth]
            }, setVisual: function (t, e) {
                this.dataIndex >= 0 && this.hostTree.data.setItemVisual(this.dataIndex, t, e)
            }, getVisual: function (t, e) {
                return this.hostTree.data.getItemVisual(this.dataIndex, t, e)
            }, getRawIndex: function () {
                return this.hostTree.data.getRawIndex(this.dataIndex)
            }, getId: function () {
                return this.hostTree.data.getId(this.dataIndex)
            }
        }, n.prototype = {
            constructor: n, type: "tree", eachNode: function (t, e, i) {
                this.root.eachNode(t, e, i)
            }, getNodeByDataIndex: function (t) {
                var e = this.data.getRawIndex(t);
                return this._nodes[e]
            }, getNodeByName: function (t) {
                return this.root.getNodeByName(t)
            }, update: function () {
                for (var t = this.data, e = this._nodes, i = 0, n = e.length; n > i; i++)e[i].dataIndex = -1;
                for (var i = 0, n = t.count(); n > i; i++)e[t.getRawIndex(i)].dataIndex = i
            }, clearLayouts: function () {
                this.data.clearItemLayouts()
            }
        }, n.createTree = function (t, e, i) {
            function a(t, e) {
                c.push(t);
                var i = new u(t.name, r);
                e ? o(i, e) : r.root = i, r._nodes.push(i);
                var n = t.children;
                if (n)for (var s = 0; s < n.length; s++)a(n[s], i)
            }

            var r = new n(e, i), c = [];
            a(t), r.root.updateDepthAndHeight(0);
            var d = h([{name: "value"}], c), f = new s(d, e);
            return f.initData(c), l({mainData: f, struct: r, structAttr: "tree"}), r.update(), r
        }, t.exports = n
    }, function (t, e, i) {
        function n() {
            var t, e = [], i = {};
            return {
                add: function (t, n, a, r, s) {
                    return o.isString(r) && (s = r, r = 0), i[t.id] ? !1 : (i[t.id] = 1, e.push({
                        el: t,
                        target: n,
                        time: a,
                        delay: r,
                        easing: s
                    }), !0)
                }, done: function (e) {
                    return t = e, this
                }, start: function () {
                    function n() {
                        o--, o || (e.length = 0, i = {}, t && t())
                    }

                    for (var o = e.length, a = 0, r = e.length; r > a; a++) {
                        var s = e[a];
                        s.el.animateTo(s.target, s.time, s.delay, s.easing, n)
                    }
                    return this
                }
            }
        }

        var o = i(1);
        t.exports = {createWrap: n}
    }, function (t, e, i) {
        function n() {
            function t(e, n) {
                if (n >= i.length)return e;
                for (var a = -1, r = e.length, s = i[n++], l = {}, h = {}; ++a < r;) {
                    var u = s(e[a]), c = h[u];
                    c ? c.push(e[a]) : h[u] = [e[a]]
                }
                return o.each(h, function (e, i) {
                    l[i] = t(e, n)
                }), l
            }

            function e(t, a) {
                if (a >= i.length)return t;
                var r = [], s = n[a++];
                return o.each(t, function (t, i) {
                    r.push({key: i, values: e(t, a)})
                }), s ? r.sort(function (t, e) {
                    return s(t.key, e.key)
                }) : r
            }

            var i = [], n = [];
            return {
                key: function (t) {
                    return i.push(t), this
                }, sortKeys: function (t) {
                    return n[i.length - 1] = t, this
                }, entries: function (i) {
                    return e(t(i, 0), 0)
                }
            }
        }

        var o = i(1);
        t.exports = n
    }, function (t, e, i) {
        var n = i(1), o = {
            get: function (t, e, i) {
                var o = n.clone((a[t] || {})[e]);
                return i && n.isArray(o) ? o[o.length - 1] : o
            }
        }, a = {
            color: {active: ["#006edd", "#e0ffff"], inactive: ["rgba(0,0,0,0)"]},
            colorHue: {active: [0, 360], inactive: [0, 0]},
            colorSaturation: {active: [.3, 1], inactive: [0, 0]},
            colorLightness: {active: [.9, .5], inactive: [0, 0]},
            colorAlpha: {active: [.3, 1], inactive: [0, 0]},
            opacity: {active: [.3, 1], inactive: [0, 0]},
            symbol: {active: ["circle", "roundRect", "diamond"], inactive: ["none"]},
            symbolSize: {active: [10, 50], inactive: [0, 0]}
        };
        t.exports = o
    }, function (t, e, i) {
        function n(t, e) {
            return Math.abs(t - e) < r
        }

        function o(t, e, i) {
            var o = 0, r = t[0];
            if (!r)return !1;
            for (var s = 1; s < t.length; s++) {
                var l = t[s];
                o += a(r[0], r[1], l[0], l[1], e, i), r = l
            }
            var h = t[0];
            return n(r[0], h[0]) && n(r[1], h[1]) || (o += a(r[0], r[1], h[0], h[1], e, i)), 0 !== o
        }

        var a = i(75), r = 1e-8;
        t.exports = {contain: o}
    }])
});