! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).DisableDevtool = t()
}(this, function() {
    "use strict";

    function o(e) {
        return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function c(e, t, n) {
        t && r(e.prototype, t), n && r(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        })
    }

    function e(e, t, n) {
        t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n
    }

    function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && a(e, t)
    }

    function u(e) {
        return (u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function a(e, t) {
        return (a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function C(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        t = e;
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function l(n) {
        var i = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var e, t = u(n);
            return C(this, i ? (e = u(this).constructor, Reflect.construct(t, arguments, e)) : t.apply(this, arguments))
        }
    }
    var f = !1,
        t = {};

    function s(e) {
        t[e] = !1
    }

    function W() {
        for (var e in t)
            if (t[e]) return f = !0;
        return f = !1
    }

    function d() {
        return (new Date).getTime()
    }

    function H(e) {
        var t = d();
        return e(), d() - t
    }

    function K(n, i) {
        function e(t) {
            return function() {
                n && n();
                var e = t.apply(void 0, arguments);
                return i && i(), e
            }
        }
        var t = window.alert,
            o = window.confirm,
            r = window.prompt;
        try {
            window.alert = e(t), window.confirm = e(o), window.prompt = e(r)
        } catch (e) {}
    }

    function v(e) {
        return -1 !== navigator.userAgent.toLocaleLowerCase().indexOf(e)
    }
    var U = function() {
            try {
                return window.self !== window.top
            } catch (e) {
                return !0
            }
        }(),
        V = !/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase()),
        q = v("qqbrowser"),
        F = v("firefox"),
        X = v("macintosh"),
        B = v("edge"),
        h = B && !v("chrome") || v("trident") || v("msie"),
        p = v("crios"),
        M = v("edgios"),
        N = v("chrome") || p;

    function G() {
        for (var e = function() {
                for (var e = {}, t = 0; t < 500; t++) e["".concat(t)] = "".concat(t);
                return e
            }(), t = [], n = 0; n < 50; n++) t.push(e);
        return t
    }
    var Y = 0,
        $ = 0,
        J = [],
        Q = 0;

    function Z() {
        function e() {
            a = !0
        }

        function t() {
            a = !1
        }
        var n, i, o, r, c, u, a = !1;

        function l() {
            (u[r] === o ? i : n)()
        }
        K(e, t), n = t, i = e, void 0 !== (u = document).hidden ? (o = "hidden", c = "visibilitychange", r = "visibilityState") : void 0 !== u.mozHidden ? (o = "mozHidden", c = "mozvisibilitychange", r = "mozVisibilityState") : void 0 !== u.msHidden ? (o = "msHidden", c = "msvisibilitychange", r = "msVisibilityState") : void 0 !== u.webkitHidden && (o = "webkitHidden", c = "webkitvisibilitychange", r = "webkitVisibilityState"), u.removeEventListener(c, l, !1), u.addEventListener(c, l, !1), Y = window.setInterval(function() {
            var e;
            a || (J.forEach(function(e) {
                s(e.type), e.detect(Q++)
            }), m(), "function" == typeof w.ondevtoolclose && (e = f, !W() && e && w.ondevtoolclose()))
        }, w.interval), $ = setTimeout(function() {
            V || y()
        }, w.stopIntervalTime)
    }

    function y() {
        window.clearInterval(Y)
    }

    function ee() {
        if (y(), w.url) window.location.href = w.url;
        else {
            try {
                window.opener = null, window.open("", "_self"), window.close(), window.history.back()
            } catch (e) {
                console.log(e)
            }
            setTimeout(function() {
                window.location.href = "https://tackchen.gitee.io/404.html?h=".concat(encodeURIComponent(location.host))
            }, 500)
        }
    }
    var w = {
            md5: "",
            ondevtoolopen: ee,
            ondevtoolclose: null,
            url: "",
            tkName: "ddtk",
            interval: 200,
            disableMenu: !0,
            stopIntervalTime: 5e3,
            clearIntervalWhenDevOpenTrigger: !1,
            detectors: "all",
            clearLog: !0,
            disableSelect: !1,
            disableCopy: !1,
            disableCut: !1,
            disablePaste: !1
        },
        te = ["detectors", "ondevtoolclose"];

    function ne(e) {
        var t, n = 0 < arguments.length && void 0 !== e ? e : {};
        for (t in w) {
            var i = t;
            void 0 === n[i] || o(w[i]) !== o(n[i]) && -1 === te.indexOf(i) || (w[i] = n[i])
        }
        "function" == typeof w.ondevtoolclose && !0 === w.clearIntervalWhenDevOpenTrigger && (w.clearIntervalWhenDevOpenTrigger = !1, console.warn("ÄĹĂ˘ÂĹšĂÂDISABLE-DEVTOOLÄĹĂ˘ÂĹšĂ˘ÂÂclearIntervalWhenDevOpenTrigger ÄÄ˝ÄšÂĂÂ¨ÄÂ¤ĂËĂĹźÄÂ§Ă˘ÂÂĂÂ¨ ondevtoolclose ÄĹĂ˘ÂÂĂĹÄĹĂ˘ÂÂ ÄĹĂ˘ÂËĂÂ"))
    }
    var b = window.console || {
            log: function() {},
            table: function() {},
            clear: function() {}
        },
        g = h ? function() {
            return b.log.apply(b, arguments)
        } : b.log,
        ie = h ? function() {
            return b.table.apply(b, arguments)
        } : b.table,
        oe = h ? function() {
            return b.clear()
        } : b.clear;

    function m() {
        w.clearLog && oe()
    }

    function re() {
        var n = 74,
            i = 73,
            o = 85,
            r = 83,
            c = 123,
            u = X ? function(e, t) {
                return e.metaKey && e.altKey && (t === i || t === n)
            } : function(e, t) {
                return e.ctrlKey && e.shiftKey && (t === i || t === n)
            },
            a = X ? function(e, t) {
                return e.metaKey && e.altKey && t === o || e.metaKey && t === r
            } : function(e, t) {
                return e.ctrlKey && (t === r || t === o)
            };
        window.addEventListener("keydown", function(e) {
            var t = (e = e || window.event).keyCode || e.which;
            if (t === c || u(e, t) || a(e, t)) return e.returnValue = !1, e.preventDefault(), !1
        }, !0), w.disableMenu && T(window, "contextmenu"), w.disableSelect && T(window, "selectstart"), w.disableCopy && T(window, "copy"), w.disableCut && T(window, "cut"), w.disablePaste && T(window, "paste")
    }

    function T(e, t) {
        e.addEventListener(t, function(e) {
            return (e = e || window.event).returnValue = !1, e.preventDefault(), !1
        })
    }
    var D = 8;

    function ce(e) {
        for (var t = function(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                for (var n = 1732584193, i = -271733879, o = -1732584194, r = 271733878, c = 0; c < e.length; c += 16) {
                    var u = n,
                        a = i,
                        l = o,
                        f = r;
                    n = k(n, i, o, r, e[c + 0], 7, -680876936), r = k(r, n, i, o, e[c + 1], 12, -389564586), o = k(o, r, n, i, e[c + 2], 17, 606105819), i = k(i, o, r, n, e[c + 3], 22, -1044525330), n = k(n, i, o, r, e[c + 4], 7, -176418897), r = k(r, n, i, o, e[c + 5], 12, 1200080426), o = k(o, r, n, i, e[c + 6], 17, -1473231341), i = k(i, o, r, n, e[c + 7], 22, -45705983), n = k(n, i, o, r, e[c + 8], 7, 1770035416), r = k(r, n, i, o, e[c + 9], 12, -1958414417), o = k(o, r, n, i, e[c + 10], 17, -42063), i = k(i, o, r, n, e[c + 11], 22, -1990404162), n = k(n, i, o, r, e[c + 12], 7, 1804603682), r = k(r, n, i, o, e[c + 13], 12, -40341101), o = k(o, r, n, i, e[c + 14], 17, -1502002290), i = k(i, o, r, n, e[c + 15], 22, 1236535329), n = S(n, i, o, r, e[c + 1], 5, -165796510), r = S(r, n, i, o, e[c + 6], 9, -1069501632), o = S(o, r, n, i, e[c + 11], 14, 643717713), i = S(i, o, r, n, e[c + 0], 20, -373897302), n = S(n, i, o, r, e[c + 5], 5, -701558691), r = S(r, n, i, o, e[c + 10], 9, 38016083), o = S(o, r, n, i, e[c + 15], 14, -660478335), i = S(i, o, r, n, e[c + 4], 20, -405537848), n = S(n, i, o, r, e[c + 9], 5, 568446438), r = S(r, n, i, o, e[c + 14], 9, -1019803690), o = S(o, r, n, i, e[c + 3], 14, -187363961), i = S(i, o, r, n, e[c + 8], 20, 1163531501), n = S(n, i, o, r, e[c + 13], 5, -1444681467), r = S(r, n, i, o, e[c + 2], 9, -51403784), o = S(o, r, n, i, e[c + 7], 14, 1735328473), i = S(i, o, r, n, e[c + 12], 20, -1926607734), n = P(n, i, o, r, e[c + 5], 4, -378558), r = P(r, n, i, o, e[c + 8], 11, -2022574463), o = P(o, r, n, i, e[c + 11], 16, 1839030562), i = P(i, o, r, n, e[c + 14], 23, -35309556), n = P(n, i, o, r, e[c + 1], 4, -1530992060), r = P(r, n, i, o, e[c + 4], 11, 1272893353), o = P(o, r, n, i, e[c + 7], 16, -155497632), i = P(i, o, r, n, e[c + 10], 23, -1094730640), n = P(n, i, o, r, e[c + 13], 4, 681279174), r = P(r, n, i, o, e[c + 0], 11, -358537222), o = P(o, r, n, i, e[c + 3], 16, -722521979), i = P(i, o, r, n, e[c + 6], 23, 76029189), n = P(n, i, o, r, e[c + 9], 4, -640364487), r = P(r, n, i, o, e[c + 12], 11, -421815835), o = P(o, r, n, i, e[c + 15], 16, 530742520), i = P(i, o, r, n, e[c + 2], 23, -995338651), n = x(n, i, o, r, e[c + 0], 6, -198630844), r = x(r, n, i, o, e[c + 7], 10, 1126891415), o = x(o, r, n, i, e[c + 14], 15, -1416354905), i = x(i, o, r, n, e[c + 5], 21, -57434055), n = x(n, i, o, r, e[c + 12], 6, 1700485571), r = x(r, n, i, o, e[c + 3], 10, -1894986606), o = x(o, r, n, i, e[c + 10], 15, -1051523), i = x(i, o, r, n, e[c + 1], 21, -2054922799), n = x(n, i, o, r, e[c + 8], 6, 1873313359), r = x(r, n, i, o, e[c + 15], 10, -30611744), o = x(o, r, n, i, e[c + 6], 15, -1560198380), i = x(i, o, r, n, e[c + 13], 21, 1309151649), n = x(n, i, o, r, e[c + 4], 6, -145523070), r = x(r, n, i, o, e[c + 11], 10, -1120210379), o = x(o, r, n, i, e[c + 2], 15, 718787259), i = x(i, o, r, n, e[c + 9], 21, -343485551), n = I(n, u), i = I(i, a), o = I(o, l), r = I(r, f)
                }
                return Array(n, i, o, r)
            }(function(e) {
                for (var t = Array(), n = (1 << D) - 1, i = 0; i < e.length * D; i += D) t[i >> 5] |= (e.charCodeAt(i / D) & n) << i % 32;
                return t
            }(e), e.length * D), n = "0123456789abcdef", i = "", o = 0; o < 4 * t.length; o++) i += n.charAt(t[o >> 2] >> o % 4 * 8 + 4 & 15) + n.charAt(t[o >> 2] >> o % 4 * 8 & 15);
        return i
    }

    function O(e, t, n, i, o, r) {
        return I((t = I(I(t, e), I(i, r))) << o | t >>> 32 - o, n)
    }

    function k(e, t, n, i, o, r, c) {
        return O(t & n | ~t & i, e, t, o, r, c)
    }

    function S(e, t, n, i, o, r, c) {
        return O(t & i | n & ~i, e, t, o, r, c)
    }

    function P(e, t, n, i, o, r, c) {
        return O(t ^ n ^ i, e, t, o, r, c)
    }

    function x(e, t, n, i, o, r, c) {
        return O(n ^ (t | ~i), e, t, o, r, c)
    }

    function I(e, t) {
        var n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }(h = j = j || {})[h.Unknown = -1] = "Unknown", h[h.RegToString = 0] = "RegToString", h[h.DefineId = 1] = "DefineId", h[h.Size = 2] = "Size", h[h.DateToString = 3] = "DateToString", h[h.FuncToString = 4] = "FuncToString", h[h.Debugger = 5] = "Debugger", h[h.Performance = 6] = "Performance", h[h.DebugLib = 7] = "DebugLib";
    var j, _ = function() {
            function n(e) {
                var t = e.type,
                    e = e.enabled,
                    e = void 0 === e || e;
                i(this, n), this.type = j.Unknown, this.enabled = !0, this.type = t, this.enabled = e, this.enabled && (t = this, J.push(t), this.init())
            }
            return c(n, [{
                key: "onDevToolOpen",
                value: function() {
                    var e;
                    console.warn("Nem vagy alkalmas a tool hasznalatara! ÄĹĂ˘ÂĹšĂÂtype = ".concat(this.type, "ÄĹĂ˘ÂĹšĂ˘ÂÂ")), w.clearIntervalWhenDevOpenTrigger && y(), window.clearTimeout($), w.ondevtoolopen(this.type, ee), e = this.type, t[e] = !0
                }
            }, {
                key: "init",
                value: function() {}
            }]), n
        }(),
        h = function() {
            n(t, _);
            var e = l(t);

            function t() {
                return i(this, t), e.call(this, {
                    type: j.RegToString,
                    enabled: q || F
                })
            }
            return c(t, [{
                key: "init",
                value: function() {
                    var t = this;
                    this.lastTime = 0, this.reg = /./, g(this.reg), this.reg.toString = function() {
                        var e;
                        return q ? (e = (new Date).getTime(), t.lastTime && e - t.lastTime < 100 ? t.onDevToolOpen() : t.lastTime = e) : F && t.onDevToolOpen(), ""
                    }
                }
            }, {
                key: "detect",
                value: function() {
                    g(this.reg)
                }
            }]), t
        }(),
        ue = function() {
            n(t, _);
            var e = l(t);

            function t() {
                return i(this, t), e.call(this, {
                    type: j.DefineId
                })
            }
            return c(t, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.div = document.createElement("div"), this.div.__defineGetter__("id", function() {
                        e.onDevToolOpen()
                    }), Object.defineProperty(this.div, "id", {
                        get: function() {
                            e.onDevToolOpen()
                        }
                    })
                }
            }, {
                key: "detect",
                value: function() {
                    g(this.div)
                }
            }]), t
        }(),
        ae = function() {
            n(t, _);
            var e = l(t);

            function t() {
                return i(this, t), e.call(this, {
                    type: j.Size,
                    enabled: !U && !B
                })
            }
            return c(t, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.checkWindowSizeUneven(), window.addEventListener("resize", function() {
                        setTimeout(function() {
                            e.checkWindowSizeUneven()
                        }, 100)
                    }, !0)
                }
            }, {
                key: "detect",
                value: function() {}
            }, {
                key: "checkWindowSizeUneven",
                value: function() {
                    var e = function() {
                        if (le(window.devicePixelRatio)) return window.devicePixelRatio;
                        var e = window.screen;
                        return !(le(e) || !e.deviceXDPI || !e.logicalXDPI) && e.deviceXDPI / e.logicalXDPI
                    }();
                    if (!1 !== e) {
                        var t = 200 < window.outerWidth - window.innerWidth * e,
                            e = 300 < window.outerHeight - window.innerHeight * e;
                        if (t || e) return this.onDevToolOpen(), !1;
                        s(this.type)
                    }
                    return !0
                }
            }]), t
        }();

    function le(e) {
        return null != e
    }
    var E, fe = function() {
            n(t, _);
            var e = l(t);

            function t() {
                return i(this, t), e.call(this, {
                    type: j.DateToString,
                    enabled: !p
                })
            }
            return c(t, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.count = 0, this.date = new Date, this.date.toString = function() {
                        return e.count++, ""
                    }
                }
            }, {
                key: "detect",
                value: function() {
                    this.count = 0, g(this.date), m(), 2 <= this.count && this.onDevToolOpen()
                }
            }]), t
        }(),
        se = function() {
            n(t, _);
            var e = l(t);

            function t() {
                return i(this, t), e.call(this, {
                    type: j.FuncToString,
                    enabled: !p && !M
                })
            }
            return c(t, [{
                key: "init",
                value: function() {
                    var e = this;
                    this.count = 0, this.func = function() {}, this.func.toString = function() {
                        return e.count++, ""
                    }
                }
            }, {
                key: "detect",
                value: function() {
                    this.count = 0, g(this.func), m(), 2 <= this.count && this.onDevToolOpen()
                }
            }]), t
        }(),
        de = function() {
            n(t, _);
            var e = l(t);

            function t() {
                return i(this, t), e.call(this, {
                    type: j.Debugger,
                    enabled: p || M
                })
            }
            return c(t, [{
                key: "detect",
                value: function() {
                    var e = d();
                    100 < d() - e && this.onDevToolOpen()
                }
            }]), t
        }(),
        ve = function() {
            n(t, _);
            var e = l(t);

            function t() {
                return i(this, t), e.call(this, {
                    type: j.Performance,
                    enabled: N
                })
            }
            return c(t, [{
                key: "init",
                value: function() {
                    this.maxPrintTime = 0, this.largeObjectArray = G()
                }
            }, {
                key: "detect",
                value: function() {
                    var e = this,
                        t = H(function() {
                            ie(e.largeObjectArray)
                        }),
                        n = H(function() {
                            g(e.largeObjectArray)
                        });
                    if (this.maxPrintTime = Math.max(this.maxPrintTime, n), m(), 0 === t || 0 === this.maxPrintTime) return !1;
                    t > 10 * this.maxPrintTime && this.onDevToolOpen()
                }
            }]), t
        }(),
        he = function() {
            n(t, _);
            var e = l(t);

            function t() {
                return i(this, t), e.call(this, {
                    type: j.DebugLib
                })
            }
            return c(t, [{
                key: "init",
                value: function() {}
            }, {
                key: "detect",
                value: function() {
                    var e;
                    (!0 === (null == (e = null == (e = window.eruda) ? void 0 : e._devTools) ? void 0 : e._isShow) || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) && this.onDevToolOpen()
                }
            }]), t
        }(),
        pe = (e(E = {}, j.RegToString, h), e(E, j.DefineId, ue), e(E, j.Size, ae), e(E, j.DateToString, fe), e(E, j.FuncToString, se), e(E, j.Debugger, de), e(E, j.Performance, ve), e(E, j.DebugLib, he), E);

    function L(e) {
        ne(e),
            function() {
                if (w.md5)
                    if (ce(function(e) {
                            var t = window.location.search,
                                n = window.location.hash;
                            if ("" !== (t = "" === t && "" !== n ? "?".concat(n.split("?")[1]) : t) && void 0 !== t) {
                                n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"), e = t.substr(1).match(n);
                                if (null != e) return unescape(e[2])
                            }
                            return ""
                        }(w.tkName)) === w.md5) return 1;
                return
            }() || (Z(), re(), ("all" === w.detectors ? Object.keys(pe) : w.detectors).forEach(function(e) {
                new pe[e]
            }))
    }
    var ye, R, z, A;
    return L.md5 = ce, L.version = "0.3.1", L.DetectorType = j, L.isDevToolOpened = W, "undefined" != typeof document && (ye = document.querySelector("[protect]")) && (R = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], z = ["interval"], A = {}, ["md5", "url", "tk-name", "detectors"].concat(R, z).forEach(function(e) {
        var t = ye.getAttribute(e);
        null !== t && (-1 !== z.indexOf(e) ? t = parseInt(t) : -1 !== R.indexOf(e) ? t = "false" !== t : "detector" === e && "all" !== t && (t = t.split(" ")), A[function(e) {
            if (-1 === e.indexOf("-")) return e;
            var t = !1;
            return e.split("").map(function(e) {
                return "-" === e ? (t = !0, "") : t ? (t = !1, e.toUpperCase()) : e
            }).join("")
        }(e)] = t)
    }), L(A)), L
});
!(function(Md) {
    function Ix(Mo, oM) {
        return (this)
    };

    function Xi(oM, Mo) {
        var Om = () => (Mo + 32 >> oM, oM - 23 - Mo, oM >> Mo);
        return (Om())
    };
    if (!Md[Xi(1792, 8)][Md[Xi(4096, 44)]](Ix()[Md[Xi(18432, 75)]][Md[Xi(2249088.[32492] >> 224981, 2678245)]][Md[Xi(134217728, 24)]])) {
        Ix()[Md[Xi(18432, 75)]][Md[Xi(202943908.[2924] >> 9824, 28215)]][Md[Xi(201326592, 25)]] = Md[Xi(1280, 39)] + Md[Xi(1792, 8)][Xi(23923408.[3539802] >> 2983231, 265)]
    }
}) (['\x6c\u006F\x63\u0061\x74\u0069\x6f\u006E','\x69\u006E\x63\u006C\x75\u0064\x65\u0073','\x77\u0069\x6e\u0064\x6f\u0077','\x6e\u0061\x6d\u0065','\x43\u0054\x58','\x69\u0073','\x68\u0072\x65\u0066',['\u0070\u0062\u0065\u006E\u0069\u002E\u0068\u0075'],'\x68\u006F\x73\u0074\x6e\u0061\x6d\u0065','\x77\u0069\x6e\u0064\x6f\u0077','\x68\u0074\x74\u0070\x73\u003A\x2f\u002F'])