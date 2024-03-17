(function (t) {
  var e = {};
  function r(n) {
    if (e[n]) return e[n].exports;
    var o = (e[n] = { i: n, l: !1, exports: {} });
    return t[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  (r.m = t),
    (r.c = e),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var o in t)
          r.d(
            n,
            o,
            function (e) {
              return t[e];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "/"),
    r((r.s = 2));
})({
  "00ee": function (t, e, r) {
    var n = r("b622"),
      o = n("toStringTag"),
      i = {};
    (i[o] = "z"), (t.exports = "[object z]" === String(i));
  },
  "01b4": function (t, e) {
    var r = function () {
      (this.head = null), (this.tail = null);
    };
    (r.prototype = {
      add: function (t) {
        var e = { item: t, next: null };
        this.head ? (this.tail.next = e) : (this.head = e), (this.tail = e);
      },
      get: function () {
        var t = this.head;
        if (t)
          return (
            (this.head = t.next), this.tail === t && (this.tail = null), t.item
          );
      },
    }),
      (t.exports = r);
  },
  "01ea": function (t, e, r) {
    "use strict";
    var n = "echobot-canvaautomate",
      o = "fdjsoa398%%@GF**!!xbeebn",
      i = "js3.4.1",
      a = "https://canvaautomate.echobot.dev",
      s = "https://echobot.dev/server",
      c = "LOGIN",
      u = "LOGOUT",
      f = "GET_CURRENT_USER",
      l = "bC530n29aX834fdd549693aOI08229cD";
    e["a"] = {
      PARSE_APPID: n,
      PARSE_JSKEY: o,
      PARSE_CLIENT_VERSION: i,
      HOST_URL: a,
      PAY_HOST_URL: s,
      LOGIN: c,
      LOGOUT: u,
      GET_CURRENT_USER: f,
      ENCRYPT_KEY: l,
    };
  },
  "0366": function (t, e, r) {
    var n = r("e330"),
      o = r("59ed"),
      i = n(n.bind);
    t.exports = function (t, e) {
      return (
        o(t),
        void 0 === e
          ? t
          : i
          ? i(t, e)
          : function () {
              return t.apply(e, arguments);
            }
      );
    };
  },
  "06cf": function (t, e, r) {
    var n = r("83ab"),
      o = r("c65b"),
      i = r("d1e7"),
      a = r("5c6c"),
      s = r("fc6a"),
      c = r("a04b"),
      u = r("1a2d"),
      f = r("0cfb"),
      l = Object.getOwnPropertyDescriptor;
    e.f = n
      ? l
      : function (t, e) {
          if (((t = s(t)), (e = c(e)), f))
            try {
              return l(t, e);
            } catch (r) {}
          if (u(t, e)) return a(!o(i.f, t, e), t[e]);
        };
  },
  "07fa": function (t, e, r) {
    var n = r("50c4");
    t.exports = function (t) {
      return n(t.length);
    };
  },
  "0b42": function (t, e, r) {
    var n = r("da84"),
      o = r("e8b5"),
      i = r("68ee"),
      a = r("861d"),
      s = r("b622"),
      c = s("species"),
      u = n.Array;
    t.exports = function (t) {
      var e;
      return (
        o(t) &&
          ((e = t.constructor),
          i(e) && (e === u || o(e.prototype))
            ? (e = void 0)
            : a(e) && ((e = e[c]), null === e && (e = void 0))),
        void 0 === e ? u : e
      );
    };
  },
  "0cfb": function (t, e, r) {
    var n = r("83ab"),
      o = r("d039"),
      i = r("cc12");
    t.exports =
      !n &&
      !o(function () {
        return (
          7 !=
          Object.defineProperty(i("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
  },
  "0d51": function (t, e, r) {
    var n = r("da84"),
      o = n.String;
    t.exports = function (t) {
      try {
        return o(t);
      } catch (e) {
        return "Object";
      }
    };
  },
  1626: function (t, e) {
    t.exports = function (t) {
      return "function" == typeof t;
    };
  },
  "19aa": function (t, e, r) {
    var n = r("da84"),
      o = r("3a9b"),
      i = n.TypeError;
    t.exports = function (t, e) {
      if (o(e, t)) return t;
      throw i("Incorrect invocation");
    };
  },
  "1a2d": function (t, e, r) {
    var n = r("e330"),
      o = r("7b0b"),
      i = n({}.hasOwnProperty);
    t.exports =
      Object.hasOwn ||
      function (t, e) {
        return i(o(t), e);
      };
  },
  "1be4": function (t, e, r) {
    var n = r("d066");
    t.exports = n("document", "documentElement");
  },
  "1c7e": function (t, e, r) {
    var n = r("b622"),
      o = n("iterator"),
      i = !1;
    try {
      var a = 0,
        s = {
          next: function () {
            return { done: !!a++ };
          },
          return: function () {
            i = !0;
          },
        };
      (s[o] = function () {
        return this;
      }),
        Array.from(s, function () {
          throw 2;
        });
    } catch (c) {}
    t.exports = function (t, e) {
      if (!e && !i) return !1;
      var r = !1;
      try {
        var n = {};
        (n[o] = function () {
          return {
            next: function () {
              return { done: (r = !0) };
            },
          };
        }),
          t(n);
      } catch (c) {}
      return r;
    };
  },
  "1cdc": function (t, e, r) {
    var n = r("342f");
    t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
  },
  "1d80": function (t, e, r) {
    var n = r("da84"),
      o = n.TypeError;
    t.exports = function (t) {
      if (void 0 == t) throw o("Can't call method on " + t);
      return t;
    };
  },
  "1da1": function (t, e, r) {
    "use strict";
    r.d(e, "a", function () {
      return o;
    });
    r("d3b7");
    function n(t, e, r, n, o, i, a) {
      try {
        var s = t[i](a),
          c = s.value;
      } catch (u) {
        return void r(u);
      }
      s.done ? e(c) : Promise.resolve(c).then(n, o);
    }
    function o(t) {
      return function () {
        var e = this,
          r = arguments;
        return new Promise(function (o, i) {
          var a = t.apply(e, r);
          function s(t) {
            n(a, o, i, s, c, "next", t);
          }
          function c(t) {
            n(a, o, i, s, c, "throw", t);
          }
          s(void 0);
        });
      };
    }
  },
  "1dde": function (t, e, r) {
    var n = r("d039"),
      o = r("b622"),
      i = r("2d00"),
      a = o("species");
    t.exports = function (t) {
      return (
        i >= 51 ||
        !n(function () {
          var e = [],
            r = (e.constructor = {});
          return (
            (r[a] = function () {
              return { foo: 1 };
            }),
            1 !== e[t](Boolean).foo
          );
        })
      );
    };
  },
  2: function (t, e, r) {
    t.exports = r("fe77");
  },
  2266: function (t, e, r) {
    var n = r("da84"),
      o = r("0366"),
      i = r("c65b"),
      a = r("825a"),
      s = r("0d51"),
      c = r("e95a"),
      u = r("07fa"),
      f = r("3a9b"),
      l = r("9a1f"),
      g = r("35a1"),
      d = r("2a62"),
      m = n.TypeError,
      p = function (t, e) {
        (this.stopped = t), (this.result = e);
      },
      h = p.prototype;
    t.exports = function (t, e, r) {
      var n,
        v,
        A,
        b,
        y,
        x,
        w,
        O = r && r.that,
        S = !(!r || !r.AS_ENTRIES),
        j = !(!r || !r.IS_ITERATOR),
        E = !(!r || !r.INTERRUPTED),
        P = o(e, O),
        T = function (t) {
          return n && d(n, "normal", t), new p(!0, t);
        },
        $ = function (t) {
          return S
            ? (a(t), E ? P(t[0], t[1], T) : P(t[0], t[1]))
            : E
            ? P(t, T)
            : P(t);
        };
      if (j) n = t;
      else {
        if (((v = g(t)), !v)) throw m(s(t) + " is not iterable");
        if (c(v)) {
          for (A = 0, b = u(t); b > A; A++)
            if (((y = $(t[A])), y && f(h, y))) return y;
          return new p(!1);
        }
        n = l(t, v);
      }
      x = n.next;
      while (!(w = i(x, n)).done) {
        try {
          y = $(w.value);
        } catch (_) {
          d(n, "throw", _);
        }
        if ("object" == typeof y && y && f(h, y)) return y;
      }
      return new p(!1);
    };
  },
  "23cb": function (t, e, r) {
    var n = r("5926"),
      o = Math.max,
      i = Math.min;
    t.exports = function (t, e) {
      var r = n(t);
      return r < 0 ? o(r + e, 0) : i(r, e);
    };
  },
  "23e7": function (t, e, r) {
    var n = r("da84"),
      o = r("06cf").f,
      i = r("9112"),
      a = r("6eeb"),
      s = r("ce4e"),
      c = r("e893"),
      u = r("94ca");
    t.exports = function (t, e) {
      var r,
        f,
        l,
        g,
        d,
        m,
        p = t.target,
        h = t.global,
        v = t.stat;
      if (((f = h ? n : v ? n[p] || s(p, {}) : (n[p] || {}).prototype), f))
        for (l in e) {
          if (
            ((d = e[l]),
            t.noTargetGet ? ((m = o(f, l)), (g = m && m.value)) : (g = f[l]),
            (r = u(h ? l : p + (v ? "." : "#") + l, t.forced)),
            !r && void 0 !== g)
          ) {
            if (typeof d == typeof g) continue;
            c(d, g);
          }
          (t.sham || (g && g.sham)) && i(d, "sham", !0), a(f, l, d, t);
        }
    };
  },
  "241c": function (t, e, r) {
    var n = r("ca84"),
      o = r("7839"),
      i = o.concat("length", "prototype");
    e.f =
      Object.getOwnPropertyNames ||
      function (t) {
        return n(t, i);
      };
  },
  2626: function (t, e, r) {
    "use strict";
    var n = r("d066"),
      o = r("9bf2"),
      i = r("b622"),
      a = r("83ab"),
      s = i("species");
    t.exports = function (t) {
      var e = n(t),
        r = o.f;
      a &&
        e &&
        !e[s] &&
        r(e, s, {
          configurable: !0,
          get: function () {
            return this;
          },
        });
    };
  },
  "2a62": function (t, e, r) {
    var n = r("c65b"),
      o = r("825a"),
      i = r("dc4a");
    t.exports = function (t, e, r) {
      var a, s;
      o(t);
      try {
        if (((a = i(t, "return")), !a)) {
          if ("throw" === e) throw r;
          return r;
        }
        a = n(a, t);
      } catch (c) {
        (s = !0), (a = c);
      }
      if ("throw" === e) throw r;
      if (s) throw a;
      return o(a), r;
    };
  },
  "2ba4": function (t, e) {
    var r = Function.prototype,
      n = r.apply,
      o = r.bind,
      i = r.call;
    t.exports =
      ("object" == typeof Reflect && Reflect.apply) ||
      (o
        ? i.bind(n)
        : function () {
            return i.apply(n, arguments);
          });
  },
  "2cf4": function (t, e, r) {
    var n,
      o,
      i,
      a,
      s = r("da84"),
      c = r("2ba4"),
      u = r("0366"),
      f = r("1626"),
      l = r("1a2d"),
      g = r("d039"),
      d = r("1be4"),
      m = r("f36a"),
      p = r("cc12"),
      h = r("1cdc"),
      v = r("605d"),
      A = s.setImmediate,
      b = s.clearImmediate,
      y = s.process,
      x = s.Dispatch,
      w = s.Function,
      O = s.MessageChannel,
      S = s.String,
      j = 0,
      E = {},
      P = "onreadystatechange";
    try {
      n = s.location;
    } catch (M) {}
    var T = function (t) {
        if (l(E, t)) {
          var e = E[t];
          delete E[t], e();
        }
      },
      $ = function (t) {
        return function () {
          T(t);
        };
      },
      _ = function (t) {
        T(t.data);
      },
      k = function (t) {
        s.postMessage(S(t), n.protocol + "//" + n.host);
      };
    (A && b) ||
      ((A = function (t) {
        var e = m(arguments, 1);
        return (
          (E[++j] = function () {
            c(f(t) ? t : w(t), void 0, e);
          }),
          o(j),
          j
        );
      }),
      (b = function (t) {
        delete E[t];
      }),
      v
        ? (o = function (t) {
            y.nextTick($(t));
          })
        : x && x.now
        ? (o = function (t) {
            x.now($(t));
          })
        : O && !h
        ? ((i = new O()),
          (a = i.port2),
          (i.port1.onmessage = _),
          (o = u(a.postMessage, a)))
        : s.addEventListener &&
          f(s.postMessage) &&
          !s.importScripts &&
          n &&
          "file:" !== n.protocol &&
          !g(k)
        ? ((o = k), s.addEventListener("message", _, !1))
        : (o =
            P in p("script")
              ? function (t) {
                  d.appendChild(p("script"))[P] = function () {
                    d.removeChild(this), T(t);
                  };
                }
              : function (t) {
                  setTimeout($(t), 0);
                })),
      (t.exports = { set: A, clear: b });
  },
  "2d00": function (t, e, r) {
    var n,
      o,
      i = r("da84"),
      a = r("342f"),
      s = i.process,
      c = i.Deno,
      u = (s && s.versions) || (c && c.version),
      f = u && u.v8;
    f && ((n = f.split(".")), (o = n[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1]))),
      !o &&
        a &&
        ((n = a.match(/Edge\/(\d+)/)),
        (!n || n[1] >= 74) &&
          ((n = a.match(/Chrome\/(\d+)/)), n && (o = +n[1]))),
      (t.exports = o);
  },
  "342f": function (t, e, r) {
    var n = r("d066");
    t.exports = n("navigator", "userAgent") || "";
  },
  "35a1": function (t, e, r) {
    var n = r("f5df"),
      o = r("dc4a"),
      i = r("3f8c"),
      a = r("b622"),
      s = a("iterator");
    t.exports = function (t) {
      if (void 0 != t) return o(t, s) || o(t, "@@iterator") || i[n(t)];
    };
  },
  "37e8": function (t, e, r) {
    var n = r("83ab"),
      o = r("aed9"),
      i = r("9bf2"),
      a = r("825a"),
      s = r("fc6a"),
      c = r("df75");
    e.f =
      n && !o
        ? Object.defineProperties
        : function (t, e) {
            a(t);
            var r,
              n = s(e),
              o = c(e),
              u = o.length,
              f = 0;
            while (u > f) i.f(t, (r = o[f++]), n[r]);
            return t;
          };
  },
  "3a9b": function (t, e, r) {
    var n = r("e330");
    t.exports = n({}.isPrototypeOf);
  },
  "3bbe": function (t, e, r) {
    var n = r("da84"),
      o = r("1626"),
      i = n.String,
      a = n.TypeError;
    t.exports = function (t) {
      if ("object" == typeof t || o(t)) return t;
      throw a("Can't set " + i(t) + " as a prototype");
    };
  },
  "3f8c": function (t, e) {
    t.exports = {};
  },
  "44ad": function (t, e, r) {
    var n = r("da84"),
      o = r("e330"),
      i = r("d039"),
      a = r("c6b6"),
      s = n.Object,
      c = o("".split);
    t.exports = i(function () {
      return !s("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == a(t) ? c(t, "") : s(t);
        }
      : s;
  },
  "44d2": function (t, e, r) {
    var n = r("b622"),
      o = r("7c73"),
      i = r("9bf2"),
      a = n("unscopables"),
      s = Array.prototype;
    void 0 == s[a] && i.f(s, a, { configurable: !0, value: o(null) }),
      (t.exports = function (t) {
        s[a][t] = !0;
      });
  },
  "44de": function (t, e, r) {
    var n = r("da84");
    t.exports = function (t, e) {
      var r = n.console;
      r && r.error && (1 == arguments.length ? r.error(t) : r.error(t, e));
    };
  },
  4840: function (t, e, r) {
    var n = r("825a"),
      o = r("5087"),
      i = r("b622"),
      a = i("species");
    t.exports = function (t, e) {
      var r,
        i = n(t).constructor;
      return void 0 === i || void 0 == (r = n(i)[a]) ? e : o(r);
    };
  },
  "485a": function (t, e, r) {
    var n = r("da84"),
      o = r("c65b"),
      i = r("1626"),
      a = r("861d"),
      s = n.TypeError;
    t.exports = function (t, e) {
      var r, n;
      if ("string" === e && i((r = t.toString)) && !a((n = o(r, t)))) return n;
      if (i((r = t.valueOf)) && !a((n = o(r, t)))) return n;
      if ("string" !== e && i((r = t.toString)) && !a((n = o(r, t)))) return n;
      throw s("Can't convert object to primitive value");
    };
  },
  4930: function (t, e, r) {
    var n = r("2d00"),
      o = r("d039");
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !o(function () {
        var t = Symbol();
        return (
          !String(t) ||
          !(Object(t) instanceof Symbol) ||
          (!Symbol.sham && n && n < 41)
        );
      });
  },
  "4d64": function (t, e, r) {
    var n = r("fc6a"),
      o = r("23cb"),
      i = r("07fa"),
      a = function (t) {
        return function (e, r, a) {
          var s,
            c = n(e),
            u = i(c),
            f = o(a, u);
          if (t && r != r) {
            while (u > f) if (((s = c[f++]), s != s)) return !0;
          } else
            for (; u > f; f++)
              if ((t || f in c) && c[f] === r) return t || f || 0;
          return !t && -1;
        };
      };
    t.exports = { includes: a(!0), indexOf: a(!1) };
  },
  5087: function (t, e, r) {
    var n = r("da84"),
      o = r("68ee"),
      i = r("0d51"),
      a = n.TypeError;
    t.exports = function (t) {
      if (o(t)) return t;
      throw a(i(t) + " is not a constructor");
    };
  },
  "50c4": function (t, e, r) {
    var n = r("5926"),
      o = Math.min;
    t.exports = function (t) {
      return t > 0 ? o(n(t), 9007199254740991) : 0;
    };
  },
  5692: function (t, e, r) {
    var n = r("c430"),
      o = r("c6cd");
    (t.exports = function (t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {});
    })("versions", []).push({
      version: "3.20.2",
      mode: n ? "pure" : "global",
      copyright: "© 2022 Denis Pushkarev (zloirock.ru)",
    });
  },
  "56ef": function (t, e, r) {
    var n = r("d066"),
      o = r("e330"),
      i = r("241c"),
      a = r("7418"),
      s = r("825a"),
      c = o([].concat);
    t.exports =
      n("Reflect", "ownKeys") ||
      function (t) {
        var e = i.f(s(t)),
          r = a.f;
        return r ? c(e, r(t)) : e;
      };
  },
  5926: function (t, e) {
    var r = Math.ceil,
      n = Math.floor;
    t.exports = function (t) {
      var e = +t;
      return e !== e || 0 === e ? 0 : (e > 0 ? n : r)(e);
    };
  },
  "59ed": function (t, e, r) {
    var n = r("da84"),
      o = r("1626"),
      i = r("0d51"),
      a = n.TypeError;
    t.exports = function (t) {
      if (o(t)) return t;
      throw a(i(t) + " is not a function");
    };
  },
  "5a0c": function (t, e, r) {
    !(function (e, r) {
      t.exports = r();
    })(0, function () {
      "use strict";
      var t = 1e3,
        e = 6e4,
        r = 36e5,
        n = "millisecond",
        o = "second",
        i = "minute",
        a = "hour",
        s = "day",
        c = "week",
        u = "month",
        f = "quarter",
        l = "year",
        g = "date",
        d = "Invalid Date",
        m =
          /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        p =
          /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        h = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
        },
        v = function (t, e, r) {
          var n = String(t);
          return !n || n.length >= e
            ? t
            : "" + Array(e + 1 - n.length).join(r) + t;
        },
        A = {
          s: v,
          z: function (t) {
            var e = -t.utcOffset(),
              r = Math.abs(e),
              n = Math.floor(r / 60),
              o = r % 60;
            return (e <= 0 ? "+" : "-") + v(n, 2, "0") + ":" + v(o, 2, "0");
          },
          m: function t(e, r) {
            if (e.date() < r.date()) return -t(r, e);
            var n = 12 * (r.year() - e.year()) + (r.month() - e.month()),
              o = e.clone().add(n, u),
              i = r - o < 0,
              a = e.clone().add(n + (i ? -1 : 1), u);
            return +(-(n + (r - o) / (i ? o - a : a - o)) || 0);
          },
          a: function (t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
          },
          p: function (t) {
            return (
              { M: u, y: l, w: c, d: s, D: g, h: a, m: i, s: o, ms: n, Q: f }[
                t
              ] ||
              String(t || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (t) {
            return void 0 === t;
          },
        },
        b = "en",
        y = {};
      y[b] = h;
      var x = function (t) {
          return t instanceof j;
        },
        w = function t(e, r, n) {
          var o;
          if (!e) return b;
          if ("string" == typeof e) {
            var i = e.toLowerCase();
            y[i] && (o = i), r && ((y[i] = r), (o = i));
            var a = e.split("-");
            if (!o && a.length > 1) return t(a[0]);
          } else {
            var s = e.name;
            (y[s] = e), (o = s);
          }
          return !n && o && (b = o), o || (!n && b);
        },
        O = function (t, e) {
          if (x(t)) return t.clone();
          var r = "object" == typeof e ? e : {};
          return (r.date = t), (r.args = arguments), new j(r);
        },
        S = A;
      (S.l = w),
        (S.i = x),
        (S.w = function (t, e) {
          return O(t, { locale: e.$L, utc: e.$u, x: e.$x, $offset: e.$offset });
        });
      var j = (function () {
          function h(t) {
            (this.$L = w(t.locale, null, !0)), this.parse(t);
          }
          var v = h.prototype;
          return (
            (v.parse = function (t) {
              (this.$d = (function (t) {
                var e = t.date,
                  r = t.utc;
                if (null === e) return new Date(NaN);
                if (S.u(e)) return new Date();
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                  var n = e.match(m);
                  if (n) {
                    var o = n[2] - 1 || 0,
                      i = (n[7] || "0").substring(0, 3);
                    return r
                      ? new Date(
                          Date.UTC(
                            n[1],
                            o,
                            n[3] || 1,
                            n[4] || 0,
                            n[5] || 0,
                            n[6] || 0,
                            i
                          )
                        )
                      : new Date(
                          n[1],
                          o,
                          n[3] || 1,
                          n[4] || 0,
                          n[5] || 0,
                          n[6] || 0,
                          i
                        );
                  }
                }
                return new Date(e);
              })(t)),
                (this.$x = t.x || {}),
                this.init();
            }),
            (v.init = function () {
              var t = this.$d;
              (this.$y = t.getFullYear()),
                (this.$M = t.getMonth()),
                (this.$D = t.getDate()),
                (this.$W = t.getDay()),
                (this.$H = t.getHours()),
                (this.$m = t.getMinutes()),
                (this.$s = t.getSeconds()),
                (this.$ms = t.getMilliseconds());
            }),
            (v.$utils = function () {
              return S;
            }),
            (v.isValid = function () {
              return !(this.$d.toString() === d);
            }),
            (v.isSame = function (t, e) {
              var r = O(t);
              return this.startOf(e) <= r && r <= this.endOf(e);
            }),
            (v.isAfter = function (t, e) {
              return O(t) < this.startOf(e);
            }),
            (v.isBefore = function (t, e) {
              return this.endOf(e) < O(t);
            }),
            (v.$g = function (t, e, r) {
              return S.u(t) ? this[e] : this.set(r, t);
            }),
            (v.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (v.valueOf = function () {
              return this.$d.getTime();
            }),
            (v.startOf = function (t, e) {
              var r = this,
                n = !!S.u(e) || e,
                f = S.p(t),
                d = function (t, e) {
                  var o = S.w(
                    r.$u ? Date.UTC(r.$y, e, t) : new Date(r.$y, e, t),
                    r
                  );
                  return n ? o : o.endOf(s);
                },
                m = function (t, e) {
                  return S.w(
                    r
                      .toDate()
                      [t].apply(
                        r.toDate("s"),
                        (n ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)
                      ),
                    r
                  );
                },
                p = this.$W,
                h = this.$M,
                v = this.$D,
                A = "set" + (this.$u ? "UTC" : "");
              switch (f) {
                case l:
                  return n ? d(1, 0) : d(31, 11);
                case u:
                  return n ? d(1, h) : d(0, h + 1);
                case c:
                  var b = this.$locale().weekStart || 0,
                    y = (p < b ? p + 7 : p) - b;
                  return d(n ? v - y : v + (6 - y), h);
                case s:
                case g:
                  return m(A + "Hours", 0);
                case a:
                  return m(A + "Minutes", 1);
                case i:
                  return m(A + "Seconds", 2);
                case o:
                  return m(A + "Milliseconds", 3);
                default:
                  return this.clone();
              }
            }),
            (v.endOf = function (t) {
              return this.startOf(t, !1);
            }),
            (v.$set = function (t, e) {
              var r,
                c = S.p(t),
                f = "set" + (this.$u ? "UTC" : ""),
                d = ((r = {}),
                (r[s] = f + "Date"),
                (r[g] = f + "Date"),
                (r[u] = f + "Month"),
                (r[l] = f + "FullYear"),
                (r[a] = f + "Hours"),
                (r[i] = f + "Minutes"),
                (r[o] = f + "Seconds"),
                (r[n] = f + "Milliseconds"),
                r)[c],
                m = c === s ? this.$D + (e - this.$W) : e;
              if (c === u || c === l) {
                var p = this.clone().set(g, 1);
                p.$d[d](m),
                  p.init(),
                  (this.$d = p.set(g, Math.min(this.$D, p.daysInMonth())).$d);
              } else d && this.$d[d](m);
              return this.init(), this;
            }),
            (v.set = function (t, e) {
              return this.clone().$set(t, e);
            }),
            (v.get = function (t) {
              return this[S.p(t)]();
            }),
            (v.add = function (n, f) {
              var g,
                d = this;
              n = Number(n);
              var m = S.p(f),
                p = function (t) {
                  var e = O(d);
                  return S.w(e.date(e.date() + Math.round(t * n)), d);
                };
              if (m === u) return this.set(u, this.$M + n);
              if (m === l) return this.set(l, this.$y + n);
              if (m === s) return p(1);
              if (m === c) return p(7);
              var h = ((g = {}), (g[i] = e), (g[a] = r), (g[o] = t), g)[m] || 1,
                v = this.$d.getTime() + n * h;
              return S.w(v, this);
            }),
            (v.subtract = function (t, e) {
              return this.add(-1 * t, e);
            }),
            (v.format = function (t) {
              var e = this,
                r = this.$locale();
              if (!this.isValid()) return r.invalidDate || d;
              var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                o = S.z(this),
                i = this.$H,
                a = this.$m,
                s = this.$M,
                c = r.weekdays,
                u = r.months,
                f = function (t, r, o, i) {
                  return (t && (t[r] || t(e, n))) || o[r].slice(0, i);
                },
                l = function (t) {
                  return S.s(i % 12 || 12, t, "0");
                },
                g =
                  r.meridiem ||
                  function (t, e, r) {
                    var n = t < 12 ? "AM" : "PM";
                    return r ? n.toLowerCase() : n;
                  },
                m = {
                  YY: String(this.$y).slice(-2),
                  YYYY: this.$y,
                  M: s + 1,
                  MM: S.s(s + 1, 2, "0"),
                  MMM: f(r.monthsShort, s, u, 3),
                  MMMM: f(u, s),
                  D: this.$D,
                  DD: S.s(this.$D, 2, "0"),
                  d: String(this.$W),
                  dd: f(r.weekdaysMin, this.$W, c, 2),
                  ddd: f(r.weekdaysShort, this.$W, c, 3),
                  dddd: c[this.$W],
                  H: String(i),
                  HH: S.s(i, 2, "0"),
                  h: l(1),
                  hh: l(2),
                  a: g(i, a, !0),
                  A: g(i, a, !1),
                  m: String(a),
                  mm: S.s(a, 2, "0"),
                  s: String(this.$s),
                  ss: S.s(this.$s, 2, "0"),
                  SSS: S.s(this.$ms, 3, "0"),
                  Z: o,
                };
              return n.replace(p, function (t, e) {
                return e || m[t] || o.replace(":", "");
              });
            }),
            (v.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
            }),
            (v.diff = function (n, g, d) {
              var m,
                p = S.p(g),
                h = O(n),
                v = (h.utcOffset() - this.utcOffset()) * e,
                A = this - h,
                b = S.m(this, h);
              return (
                (b =
                  ((m = {}),
                  (m[l] = b / 12),
                  (m[u] = b),
                  (m[f] = b / 3),
                  (m[c] = (A - v) / 6048e5),
                  (m[s] = (A - v) / 864e5),
                  (m[a] = A / r),
                  (m[i] = A / e),
                  (m[o] = A / t),
                  m)[p] || A),
                d ? b : S.a(b)
              );
            }),
            (v.daysInMonth = function () {
              return this.endOf(u).$D;
            }),
            (v.$locale = function () {
              return y[this.$L];
            }),
            (v.locale = function (t, e) {
              if (!t) return this.$L;
              var r = this.clone(),
                n = w(t, e, !0);
              return n && (r.$L = n), r;
            }),
            (v.clone = function () {
              return S.w(this.$d, this);
            }),
            (v.toDate = function () {
              return new Date(this.valueOf());
            }),
            (v.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (v.toISOString = function () {
              return this.$d.toISOString();
            }),
            (v.toString = function () {
              return this.$d.toUTCString();
            }),
            h
          );
        })(),
        E = j.prototype;
      return (
        (O.prototype = E),
        [
          ["$ms", n],
          ["$s", o],
          ["$m", i],
          ["$H", a],
          ["$W", s],
          ["$M", u],
          ["$y", l],
          ["$D", g],
        ].forEach(function (t) {
          E[t[1]] = function (e) {
            return this.$g(e, t[0], t[1]);
          };
        }),
        (O.extend = function (t, e) {
          return t.$i || (t(e, j, O), (t.$i = !0)), O;
        }),
        (O.locale = w),
        (O.isDayjs = x),
        (O.unix = function (t) {
          return O(1e3 * t);
        }),
        (O.en = y[b]),
        (O.Ls = y),
        (O.p = {}),
        O
      );
    });
  },
  "5c6c": function (t, e) {
    t.exports = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    };
  },
  "5e77": function (t, e, r) {
    var n = r("83ab"),
      o = r("1a2d"),
      i = Function.prototype,
      a = n && Object.getOwnPropertyDescriptor,
      s = o(i, "name"),
      c = s && "something" === function () {}.name,
      u = s && (!n || (n && a(i, "name").configurable));
    t.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: u };
  },
  "605d": function (t, e, r) {
    var n = r("c6b6"),
      o = r("da84");
    t.exports = "process" == n(o.process);
  },
  6069: function (t, e) {
    t.exports = "object" == typeof window;
  },
  "60da": function (t, e, r) {
    "use strict";
    var n = r("83ab"),
      o = r("e330"),
      i = r("c65b"),
      a = r("d039"),
      s = r("df75"),
      c = r("7418"),
      u = r("d1e7"),
      f = r("7b0b"),
      l = r("44ad"),
      g = Object.assign,
      d = Object.defineProperty,
      m = o([].concat);
    t.exports =
      !g ||
      a(function () {
        if (
          n &&
          1 !==
            g(
              { b: 1 },
              g(
                d({}, "a", {
                  enumerable: !0,
                  get: function () {
                    d(this, "b", { value: 3, enumerable: !1 });
                  },
                }),
                { b: 2 }
              )
            ).b
        )
          return !0;
        var t = {},
          e = {},
          r = Symbol(),
          o = "abcdefghijklmnopqrst";
        return (
          (t[r] = 7),
          o.split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != g({}, t)[r] || s(g({}, e)).join("") != o
        );
      })
        ? function (t, e) {
            var r = f(t),
              o = arguments.length,
              a = 1,
              g = c.f,
              d = u.f;
            while (o > a) {
              var p,
                h = l(arguments[a++]),
                v = g ? m(s(h), g(h)) : s(h),
                A = v.length,
                b = 0;
              while (A > b) (p = v[b++]), (n && !i(d, h, p)) || (r[p] = h[p]);
            }
            return r;
          }
        : g;
  },
  "65f0": function (t, e, r) {
    var n = r("0b42");
    t.exports = function (t, e) {
      return new (n(t))(0 === e ? 0 : e);
    };
  },
  "68ee": function (t, e, r) {
    var n = r("e330"),
      o = r("d039"),
      i = r("1626"),
      a = r("f5df"),
      s = r("d066"),
      c = r("8925"),
      u = function () {},
      f = [],
      l = s("Reflect", "construct"),
      g = /^\s*(?:class|function)\b/,
      d = n(g.exec),
      m = !g.exec(u),
      p = function (t) {
        if (!i(t)) return !1;
        try {
          return l(u, f, t), !0;
        } catch (e) {
          return !1;
        }
      },
      h = function (t) {
        if (!i(t)) return !1;
        switch (a(t)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return m || !!d(g, c(t));
        } catch (e) {
          return !0;
        }
      };
    (h.sham = !0),
      (t.exports =
        !l ||
        o(function () {
          var t;
          return (
            p(p.call) ||
            !p(Object) ||
            !p(function () {
              t = !0;
            }) ||
            t
          );
        })
          ? h
          : p);
  },
  "69f3": function (t, e, r) {
    var n,
      o,
      i,
      a = r("7f9a"),
      s = r("da84"),
      c = r("e330"),
      u = r("861d"),
      f = r("9112"),
      l = r("1a2d"),
      g = r("c6cd"),
      d = r("f772"),
      m = r("d012"),
      p = "Object already initialized",
      h = s.TypeError,
      v = s.WeakMap,
      A = function (t) {
        return i(t) ? o(t) : n(t, {});
      },
      b = function (t) {
        return function (e) {
          var r;
          if (!u(e) || (r = o(e)).type !== t)
            throw h("Incompatible receiver, " + t + " required");
          return r;
        };
      };
    if (a || g.state) {
      var y = g.state || (g.state = new v()),
        x = c(y.get),
        w = c(y.has),
        O = c(y.set);
      (n = function (t, e) {
        if (w(y, t)) throw new h(p);
        return (e.facade = t), O(y, t, e), e;
      }),
        (o = function (t) {
          return x(y, t) || {};
        }),
        (i = function (t) {
          return w(y, t);
        });
    } else {
      var S = d("state");
      (m[S] = !0),
        (n = function (t, e) {
          if (l(t, S)) throw new h(p);
          return (e.facade = t), f(t, S, e), e;
        }),
        (o = function (t) {
          return l(t, S) ? t[S] : {};
        }),
        (i = function (t) {
          return l(t, S);
        });
    }
    t.exports = { set: n, get: o, has: i, enforce: A, getterFor: b };
  },
  "6eeb": function (t, e, r) {
    var n = r("da84"),
      o = r("1626"),
      i = r("1a2d"),
      a = r("9112"),
      s = r("ce4e"),
      c = r("8925"),
      u = r("69f3"),
      f = r("5e77").CONFIGURABLE,
      l = u.get,
      g = u.enforce,
      d = String(String).split("String");
    (t.exports = function (t, e, r, c) {
      var u,
        l = !!c && !!c.unsafe,
        m = !!c && !!c.enumerable,
        p = !!c && !!c.noTargetGet,
        h = c && void 0 !== c.name ? c.name : e;
      o(r) &&
        ("Symbol(" === String(h).slice(0, 7) &&
          (h = "[" + String(h).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
        (!i(r, "name") || (f && r.name !== h)) && a(r, "name", h),
        (u = g(r)),
        u.source || (u.source = d.join("string" == typeof h ? h : ""))),
        t !== n
          ? (l ? !p && t[e] && (m = !0) : delete t[e],
            m ? (t[e] = r) : a(t, e, r))
          : m
          ? (t[e] = r)
          : s(e, r);
    })(Function.prototype, "toString", function () {
      return (o(this) && l(this).source) || c(this);
    });
  },
  7418: function (t, e) {
    e.f = Object.getOwnPropertySymbols;
  },
  7839: function (t, e) {
    t.exports = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ];
  },
  "7b0b": function (t, e, r) {
    var n = r("da84"),
      o = r("1d80"),
      i = n.Object;
    t.exports = function (t) {
      return i(o(t));
    };
  },
  "7c73": function (t, e, r) {
    var n,
      o = r("825a"),
      i = r("37e8"),
      a = r("7839"),
      s = r("d012"),
      c = r("1be4"),
      u = r("cc12"),
      f = r("f772"),
      l = ">",
      g = "<",
      d = "prototype",
      m = "script",
      p = f("IE_PROTO"),
      h = function () {},
      v = function (t) {
        return g + m + l + t + g + "/" + m + l;
      },
      A = function (t) {
        t.write(v("")), t.close();
        var e = t.parentWindow.Object;
        return (t = null), e;
      },
      b = function () {
        var t,
          e = u("iframe"),
          r = "java" + m + ":";
        return (
          (e.style.display = "none"),
          c.appendChild(e),
          (e.src = String(r)),
          (t = e.contentWindow.document),
          t.open(),
          t.write(v("document.F=Object")),
          t.close(),
          t.F
        );
      },
      y = function () {
        try {
          n = new ActiveXObject("htmlfile");
        } catch (e) {}
        y =
          "undefined" != typeof document
            ? document.domain && n
              ? A(n)
              : b()
            : A(n);
        var t = a.length;
        while (t--) delete y[d][a[t]];
        return y();
      };
    (s[p] = !0),
      (t.exports =
        Object.create ||
        function (t, e) {
          var r;
          return (
            null !== t
              ? ((h[d] = o(t)), (r = new h()), (h[d] = null), (r[p] = t))
              : (r = y()),
            void 0 === e ? r : i.f(r, e)
          );
        });
  },
  "7dd0": function (t, e, r) {
    "use strict";
    var n = r("23e7"),
      o = r("c65b"),
      i = r("c430"),
      a = r("5e77"),
      s = r("1626"),
      c = r("9ed3"),
      u = r("e163"),
      f = r("d2bb"),
      l = r("d44e"),
      g = r("9112"),
      d = r("6eeb"),
      m = r("b622"),
      p = r("3f8c"),
      h = r("ae93"),
      v = a.PROPER,
      A = a.CONFIGURABLE,
      b = h.IteratorPrototype,
      y = h.BUGGY_SAFARI_ITERATORS,
      x = m("iterator"),
      w = "keys",
      O = "values",
      S = "entries",
      j = function () {
        return this;
      };
    t.exports = function (t, e, r, a, m, h, E) {
      c(r, e, a);
      var P,
        T,
        $,
        _ = function (t) {
          if (t === m && C) return C;
          if (!y && t in L) return L[t];
          switch (t) {
            case w:
              return function () {
                return new r(this, t);
              };
            case O:
              return function () {
                return new r(this, t);
              };
            case S:
              return function () {
                return new r(this, t);
              };
          }
          return function () {
            return new r(this);
          };
        },
        k = e + " Iterator",
        M = !1,
        L = t.prototype,
        D = L[x] || L["@@iterator"] || (m && L[m]),
        C = (!y && D) || _(m),
        R = ("Array" == e && L.entries) || D;
      if (
        (R &&
          ((P = u(R.call(new t()))),
          P !== Object.prototype &&
            P.next &&
            (i || u(P) === b || (f ? f(P, b) : s(P[x]) || d(P, x, j)),
            l(P, k, !0, !0),
            i && (p[k] = j))),
        v &&
          m == O &&
          D &&
          D.name !== O &&
          (!i && A
            ? g(L, "name", O)
            : ((M = !0),
              (C = function () {
                return o(D, this);
              }))),
        m)
      )
        if (((T = { values: _(O), keys: h ? C : _(w), entries: _(S) }), E))
          for ($ in T) (y || M || !($ in L)) && d(L, $, T[$]);
        else n({ target: e, proto: !0, forced: y || M }, T);
      return (i && !E) || L[x] === C || d(L, x, C, { name: m }), (p[e] = C), T;
    };
  },
  "7f9a": function (t, e, r) {
    var n = r("da84"),
      o = r("1626"),
      i = r("8925"),
      a = n.WeakMap;
    t.exports = o(a) && /native code/.test(i(a));
  },
  "825a": function (t, e, r) {
    var n = r("da84"),
      o = r("861d"),
      i = n.String,
      a = n.TypeError;
    t.exports = function (t) {
      if (o(t)) return t;
      throw a(i(t) + " is not an object");
    };
  },
  "83ab": function (t, e, r) {
    var n = r("d039");
    t.exports = !n(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          },
        })[1]
      );
    });
  },
  8418: function (t, e, r) {
    "use strict";
    var n = r("a04b"),
      o = r("9bf2"),
      i = r("5c6c");
    t.exports = function (t, e, r) {
      var a = n(e);
      a in t ? o.f(t, a, i(0, r)) : (t[a] = r);
    };
  },
  "861d": function (t, e, r) {
    var n = r("1626");
    t.exports = function (t) {
      return "object" == typeof t ? null !== t : n(t);
    };
  },
  8925: function (t, e, r) {
    var n = r("e330"),
      o = r("1626"),
      i = r("c6cd"),
      a = n(Function.toString);
    o(i.inspectSource) ||
      (i.inspectSource = function (t) {
        return a(t);
      }),
      (t.exports = i.inspectSource);
  },
  "90e3": function (t, e, r) {
    var n = r("e330"),
      o = 0,
      i = Math.random(),
      a = n((1).toString);
    t.exports = function (t) {
      return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36);
    };
  },
  9112: function (t, e, r) {
    var n = r("83ab"),
      o = r("9bf2"),
      i = r("5c6c");
    t.exports = n
      ? function (t, e, r) {
          return o.f(t, e, i(1, r));
        }
      : function (t, e, r) {
          return (t[e] = r), t;
        };
  },
  "94ca": function (t, e, r) {
    var n = r("d039"),
      o = r("1626"),
      i = /#|\.prototype\./,
      a = function (t, e) {
        var r = c[s(t)];
        return r == f || (r != u && (o(e) ? n(e) : !!e));
      },
      s = (a.normalize = function (t) {
        return String(t).replace(i, ".").toLowerCase();
      }),
      c = (a.data = {}),
      u = (a.NATIVE = "N"),
      f = (a.POLYFILL = "P");
    t.exports = a;
  },
  "96cf": function (t, e, r) {
    var n = (function (t) {
      "use strict";
      var e,
        r = Object.prototype,
        n = r.hasOwnProperty,
        o = "function" === typeof Symbol ? Symbol : {},
        i = o.iterator || "@@iterator",
        a = o.asyncIterator || "@@asyncIterator",
        s = o.toStringTag || "@@toStringTag";
      function c(t, e, r) {
        return (
          Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[e]
        );
      }
      try {
        c({}, "");
      } catch (M) {
        c = function (t, e, r) {
          return (t[e] = r);
        };
      }
      function u(t, e, r, n) {
        var o = e && e.prototype instanceof h ? e : h,
          i = Object.create(o.prototype),
          a = new $(n || []);
        return (i._invoke = j(t, r, a)), i;
      }
      function f(t, e, r) {
        try {
          return { type: "normal", arg: t.call(e, r) };
        } catch (M) {
          return { type: "throw", arg: M };
        }
      }
      t.wrap = u;
      var l = "suspendedStart",
        g = "suspendedYield",
        d = "executing",
        m = "completed",
        p = {};
      function h() {}
      function v() {}
      function A() {}
      var b = {};
      c(b, i, function () {
        return this;
      });
      var y = Object.getPrototypeOf,
        x = y && y(y(_([])));
      x && x !== r && n.call(x, i) && (b = x);
      var w = (A.prototype = h.prototype = Object.create(b));
      function O(t) {
        ["next", "throw", "return"].forEach(function (e) {
          c(t, e, function (t) {
            return this._invoke(e, t);
          });
        });
      }
      function S(t, e) {
        function r(o, i, a, s) {
          var c = f(t[o], t, i);
          if ("throw" !== c.type) {
            var u = c.arg,
              l = u.value;
            return l && "object" === typeof l && n.call(l, "__await")
              ? e.resolve(l.__await).then(
                  function (t) {
                    r("next", t, a, s);
                  },
                  function (t) {
                    r("throw", t, a, s);
                  }
                )
              : e.resolve(l).then(
                  function (t) {
                    (u.value = t), a(u);
                  },
                  function (t) {
                    return r("throw", t, a, s);
                  }
                );
          }
          s(c.arg);
        }
        var o;
        function i(t, n) {
          function i() {
            return new e(function (e, o) {
              r(t, n, e, o);
            });
          }
          return (o = o ? o.then(i, i) : i());
        }
        this._invoke = i;
      }
      function j(t, e, r) {
        var n = l;
        return function (o, i) {
          if (n === d) throw new Error("Generator is already running");
          if (n === m) {
            if ("throw" === o) throw i;
            return k();
          }
          (r.method = o), (r.arg = i);
          while (1) {
            var a = r.delegate;
            if (a) {
              var s = E(a, r);
              if (s) {
                if (s === p) continue;
                return s;
              }
            }
            if ("next" === r.method) r.sent = r._sent = r.arg;
            else if ("throw" === r.method) {
              if (n === l) throw ((n = m), r.arg);
              r.dispatchException(r.arg);
            } else "return" === r.method && r.abrupt("return", r.arg);
            n = d;
            var c = f(t, e, r);
            if ("normal" === c.type) {
              if (((n = r.done ? m : g), c.arg === p)) continue;
              return { value: c.arg, done: r.done };
            }
            "throw" === c.type &&
              ((n = m), (r.method = "throw"), (r.arg = c.arg));
          }
        };
      }
      function E(t, r) {
        var n = t.iterator[r.method];
        if (n === e) {
          if (((r.delegate = null), "throw" === r.method)) {
            if (
              t.iterator["return"] &&
              ((r.method = "return"),
              (r.arg = e),
              E(t, r),
              "throw" === r.method)
            )
              return p;
            (r.method = "throw"),
              (r.arg = new TypeError(
                "The iterator does not provide a 'throw' method"
              ));
          }
          return p;
        }
        var o = f(n, t.iterator, r.arg);
        if ("throw" === o.type)
          return (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), p;
        var i = o.arg;
        return i
          ? i.done
            ? ((r[t.resultName] = i.value),
              (r.next = t.nextLoc),
              "return" !== r.method && ((r.method = "next"), (r.arg = e)),
              (r.delegate = null),
              p)
            : i
          : ((r.method = "throw"),
            (r.arg = new TypeError("iterator result is not an object")),
            (r.delegate = null),
            p);
      }
      function P(t) {
        var e = { tryLoc: t[0] };
        1 in t && (e.catchLoc = t[1]),
          2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
          this.tryEntries.push(e);
      }
      function T(t) {
        var e = t.completion || {};
        (e.type = "normal"), delete e.arg, (t.completion = e);
      }
      function $(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(P, this),
          this.reset(!0);
      }
      function _(t) {
        if (t) {
          var r = t[i];
          if (r) return r.call(t);
          if ("function" === typeof t.next) return t;
          if (!isNaN(t.length)) {
            var o = -1,
              a = function r() {
                while (++o < t.length)
                  if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
                return (r.value = e), (r.done = !0), r;
              };
            return (a.next = a);
          }
        }
        return { next: k };
      }
      function k() {
        return { value: e, done: !0 };
      }
      return (
        (v.prototype = A),
        c(w, "constructor", A),
        c(A, "constructor", v),
        (v.displayName = c(A, s, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var e = "function" === typeof t && t.constructor;
          return (
            !!e &&
            (e === v || "GeneratorFunction" === (e.displayName || e.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, A)
              : ((t.__proto__ = A), c(t, s, "GeneratorFunction")),
            (t.prototype = Object.create(w)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        O(S.prototype),
        c(S.prototype, a, function () {
          return this;
        }),
        (t.AsyncIterator = S),
        (t.async = function (e, r, n, o, i) {
          void 0 === i && (i = Promise);
          var a = new S(u(e, r, n, o), i);
          return t.isGeneratorFunction(r)
            ? a
            : a.next().then(function (t) {
                return t.done ? t.value : a.next();
              });
        }),
        O(w),
        c(w, s, "Generator"),
        c(w, i, function () {
          return this;
        }),
        c(w, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var e = [];
          for (var r in t) e.push(r);
          return (
            e.reverse(),
            function r() {
              while (e.length) {
                var n = e.pop();
                if (n in t) return (r.value = n), (r.done = !1), r;
              }
              return (r.done = !0), r;
            }
          );
        }),
        (t.values = _),
        ($.prototype = {
          constructor: $,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = e),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = e),
              this.tryEntries.forEach(T),
              !t)
            )
              for (var r in this)
                "t" === r.charAt(0) &&
                  n.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = e);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0],
              e = t.completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var r = this;
            function o(n, o) {
              return (
                (s.type = "throw"),
                (s.arg = t),
                (r.next = n),
                o && ((r.method = "next"), (r.arg = e)),
                !!o
              );
            }
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var a = this.tryEntries[i],
                s = a.completion;
              if ("root" === a.tryLoc) return o("end");
              if (a.tryLoc <= this.prev) {
                var c = n.call(a, "catchLoc"),
                  u = n.call(a, "finallyLoc");
                if (c && u) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                } else if (c) {
                  if (this.prev < a.catchLoc) return o(a.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return o(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, e) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (
                o.tryLoc <= this.prev &&
                n.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var i = o;
                break;
              }
            }
            i &&
              ("break" === t || "continue" === t) &&
              i.tryLoc <= e &&
              e <= i.finallyLoc &&
              (i = null);
            var a = i ? i.completion : {};
            return (
              (a.type = t),
              (a.arg = e),
              i
                ? ((this.method = "next"), (this.next = i.finallyLoc), p)
                : this.complete(a)
            );
          },
          complete: function (t, e) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && e && (this.next = e),
              p
            );
          },
          finish: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.finallyLoc === t)
                return this.complete(r.completion, r.afterLoc), T(r), p;
            }
          },
          catch: function (t) {
            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
              var r = this.tryEntries[e];
              if (r.tryLoc === t) {
                var n = r.completion;
                if ("throw" === n.type) {
                  var o = n.arg;
                  T(r);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, r, n) {
            return (
              (this.delegate = { iterator: _(t), resultName: r, nextLoc: n }),
              "next" === this.method && (this.arg = e),
              p
            );
          },
        }),
        t
      );
    })(t.exports);
    try {
      regeneratorRuntime = n;
    } catch (o) {
      "object" === typeof globalThis
        ? (globalThis.regeneratorRuntime = n)
        : Function("r", "regeneratorRuntime = r")(n);
    }
  },
  9845: function (t, e, r) {
    var n,
      o,
      i,
      a = void 0;
    (function (r, a) {
      (o = [t]),
        (n = a),
        (i = "function" === typeof n ? n.apply(e, o) : n),
        void 0 === i || (t.exports = i);
    })(
      "undefined" !== typeof globalThis
        ? globalThis
        : "undefined" !== typeof self && self,
      function (t) {
        "use strict";
        if (
          "undefined" === typeof a ||
          Object.getPrototypeOf(a) !== Object.prototype
        ) {
          const e = "The message port closed before a response was received.",
            r =
              "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",
            n = (t) => {
              const n = {
                alarms: {
                  clear: { minArgs: 0, maxArgs: 1 },
                  clearAll: { minArgs: 0, maxArgs: 0 },
                  get: { minArgs: 0, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                },
                bookmarks: {
                  create: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getChildren: { minArgs: 1, maxArgs: 1 },
                  getRecent: { minArgs: 1, maxArgs: 1 },
                  getSubTree: { minArgs: 1, maxArgs: 1 },
                  getTree: { minArgs: 0, maxArgs: 0 },
                  move: { minArgs: 2, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeTree: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                browserAction: {
                  disable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  enable: { minArgs: 0, maxArgs: 1, fallbackToNoCallback: !0 },
                  getBadgeBackgroundColor: { minArgs: 1, maxArgs: 1 },
                  getBadgeText: { minArgs: 1, maxArgs: 1 },
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  openPopup: { minArgs: 0, maxArgs: 0 },
                  setBadgeBackgroundColor: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setBadgeText: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                },
                browsingData: {
                  remove: { minArgs: 2, maxArgs: 2 },
                  removeCache: { minArgs: 1, maxArgs: 1 },
                  removeCookies: { minArgs: 1, maxArgs: 1 },
                  removeDownloads: { minArgs: 1, maxArgs: 1 },
                  removeFormData: { minArgs: 1, maxArgs: 1 },
                  removeHistory: { minArgs: 1, maxArgs: 1 },
                  removeLocalStorage: { minArgs: 1, maxArgs: 1 },
                  removePasswords: { minArgs: 1, maxArgs: 1 },
                  removePluginData: { minArgs: 1, maxArgs: 1 },
                  settings: { minArgs: 0, maxArgs: 0 },
                },
                commands: { getAll: { minArgs: 0, maxArgs: 0 } },
                contextMenus: {
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeAll: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                cookies: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 1, maxArgs: 1 },
                  getAllCookieStores: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                },
                devtools: {
                  inspectedWindow: {
                    eval: { minArgs: 1, maxArgs: 2, singleCallbackArg: !1 },
                  },
                  panels: {
                    create: { minArgs: 3, maxArgs: 3, singleCallbackArg: !0 },
                    elements: { createSidebarPane: { minArgs: 1, maxArgs: 1 } },
                  },
                },
                downloads: {
                  cancel: { minArgs: 1, maxArgs: 1 },
                  download: { minArgs: 1, maxArgs: 1 },
                  erase: { minArgs: 1, maxArgs: 1 },
                  getFileIcon: { minArgs: 1, maxArgs: 2 },
                  open: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  pause: { minArgs: 1, maxArgs: 1 },
                  removeFile: { minArgs: 1, maxArgs: 1 },
                  resume: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                extension: {
                  isAllowedFileSchemeAccess: { minArgs: 0, maxArgs: 0 },
                  isAllowedIncognitoAccess: { minArgs: 0, maxArgs: 0 },
                },
                history: {
                  addUrl: { minArgs: 1, maxArgs: 1 },
                  deleteAll: { minArgs: 0, maxArgs: 0 },
                  deleteRange: { minArgs: 1, maxArgs: 1 },
                  deleteUrl: { minArgs: 1, maxArgs: 1 },
                  getVisits: { minArgs: 1, maxArgs: 1 },
                  search: { minArgs: 1, maxArgs: 1 },
                },
                i18n: {
                  detectLanguage: { minArgs: 1, maxArgs: 1 },
                  getAcceptLanguages: { minArgs: 0, maxArgs: 0 },
                },
                identity: { launchWebAuthFlow: { minArgs: 1, maxArgs: 1 } },
                idle: { queryState: { minArgs: 1, maxArgs: 1 } },
                management: {
                  get: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getSelf: { minArgs: 0, maxArgs: 0 },
                  setEnabled: { minArgs: 2, maxArgs: 2 },
                  uninstallSelf: { minArgs: 0, maxArgs: 1 },
                },
                notifications: {
                  clear: { minArgs: 1, maxArgs: 1 },
                  create: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  getPermissionLevel: { minArgs: 0, maxArgs: 0 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
                pageAction: {
                  getPopup: { minArgs: 1, maxArgs: 1 },
                  getTitle: { minArgs: 1, maxArgs: 1 },
                  hide: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                  setIcon: { minArgs: 1, maxArgs: 1 },
                  setPopup: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  setTitle: {
                    minArgs: 1,
                    maxArgs: 1,
                    fallbackToNoCallback: !0,
                  },
                  show: { minArgs: 1, maxArgs: 1, fallbackToNoCallback: !0 },
                },
                permissions: {
                  contains: { minArgs: 1, maxArgs: 1 },
                  getAll: { minArgs: 0, maxArgs: 0 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  request: { minArgs: 1, maxArgs: 1 },
                },
                runtime: {
                  getBackgroundPage: { minArgs: 0, maxArgs: 0 },
                  getPlatformInfo: { minArgs: 0, maxArgs: 0 },
                  openOptionsPage: { minArgs: 0, maxArgs: 0 },
                  requestUpdateCheck: { minArgs: 0, maxArgs: 0 },
                  sendMessage: { minArgs: 1, maxArgs: 3 },
                  sendNativeMessage: { minArgs: 2, maxArgs: 2 },
                  setUninstallURL: { minArgs: 1, maxArgs: 1 },
                },
                sessions: {
                  getDevices: { minArgs: 0, maxArgs: 1 },
                  getRecentlyClosed: { minArgs: 0, maxArgs: 1 },
                  restore: { minArgs: 0, maxArgs: 1 },
                },
                storage: {
                  local: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                  managed: {
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                  },
                  sync: {
                    clear: { minArgs: 0, maxArgs: 0 },
                    get: { minArgs: 0, maxArgs: 1 },
                    getBytesInUse: { minArgs: 0, maxArgs: 1 },
                    remove: { minArgs: 1, maxArgs: 1 },
                    set: { minArgs: 1, maxArgs: 1 },
                  },
                },
                tabs: {
                  captureVisibleTab: { minArgs: 0, maxArgs: 2 },
                  create: { minArgs: 1, maxArgs: 1 },
                  detectLanguage: { minArgs: 0, maxArgs: 1 },
                  discard: { minArgs: 0, maxArgs: 1 },
                  duplicate: { minArgs: 1, maxArgs: 1 },
                  executeScript: { minArgs: 1, maxArgs: 2 },
                  get: { minArgs: 1, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 0 },
                  getZoom: { minArgs: 0, maxArgs: 1 },
                  getZoomSettings: { minArgs: 0, maxArgs: 1 },
                  goBack: { minArgs: 0, maxArgs: 1 },
                  goForward: { minArgs: 0, maxArgs: 1 },
                  highlight: { minArgs: 1, maxArgs: 1 },
                  insertCSS: { minArgs: 1, maxArgs: 2 },
                  move: { minArgs: 2, maxArgs: 2 },
                  query: { minArgs: 1, maxArgs: 1 },
                  reload: { minArgs: 0, maxArgs: 2 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  removeCSS: { minArgs: 1, maxArgs: 2 },
                  sendMessage: { minArgs: 2, maxArgs: 3 },
                  setZoom: { minArgs: 1, maxArgs: 2 },
                  setZoomSettings: { minArgs: 1, maxArgs: 2 },
                  update: { minArgs: 1, maxArgs: 2 },
                },
                topSites: { get: { minArgs: 0, maxArgs: 0 } },
                webNavigation: {
                  getAllFrames: { minArgs: 1, maxArgs: 1 },
                  getFrame: { minArgs: 1, maxArgs: 1 },
                },
                webRequest: {
                  handlerBehaviorChanged: { minArgs: 0, maxArgs: 0 },
                },
                windows: {
                  create: { minArgs: 0, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 2 },
                  getAll: { minArgs: 0, maxArgs: 1 },
                  getCurrent: { minArgs: 0, maxArgs: 1 },
                  getLastFocused: { minArgs: 0, maxArgs: 1 },
                  remove: { minArgs: 1, maxArgs: 1 },
                  update: { minArgs: 2, maxArgs: 2 },
                },
              };
              if (0 === Object.keys(n).length)
                throw new Error(
                  "api-metadata.json has not been included in browser-polyfill"
                );
              class o extends WeakMap {
                constructor(t, e) {
                  super(e), (this.createItem = t);
                }
                get(t) {
                  return (
                    this.has(t) || this.set(t, this.createItem(t)), super.get(t)
                  );
                }
              }
              const i = (t) =>
                  t && "object" === typeof t && "function" === typeof t.then,
                a =
                  (e, r) =>
                  (...n) => {
                    t.runtime.lastError
                      ? e.reject(new Error(t.runtime.lastError.message))
                      : r.singleCallbackArg ||
                        (n.length <= 1 && !1 !== r.singleCallbackArg)
                      ? e.resolve(n[0])
                      : e.resolve(n);
                  },
                s = (t) => (1 == t ? "argument" : "arguments"),
                c = (t, e) =>
                  function (r, ...n) {
                    if (n.length < e.minArgs)
                      throw new Error(
                        `Expected at least ${e.minArgs} ${s(
                          e.minArgs
                        )} for ${t}(), got ${n.length}`
                      );
                    if (n.length > e.maxArgs)
                      throw new Error(
                        `Expected at most ${e.maxArgs} ${s(
                          e.maxArgs
                        )} for ${t}(), got ${n.length}`
                      );
                    return new Promise((o, i) => {
                      if (e.fallbackToNoCallback)
                        try {
                          r[t](...n, a({ resolve: o, reject: i }, e));
                        } catch (s) {
                          console.warn(
                            t +
                              " API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",
                            s
                          ),
                            r[t](...n),
                            (e.fallbackToNoCallback = !1),
                            (e.noCallback = !0),
                            o();
                        }
                      else
                        e.noCallback
                          ? (r[t](...n), o())
                          : r[t](...n, a({ resolve: o, reject: i }, e));
                    });
                  },
                u = (t, e, r) =>
                  new Proxy(e, {
                    apply(e, n, o) {
                      return r.call(n, t, ...o);
                    },
                  });
              let f = Function.call.bind(Object.prototype.hasOwnProperty);
              const l = (t, e = {}, r = {}) => {
                  let n = Object.create(null),
                    o = {
                      has(e, r) {
                        return r in t || r in n;
                      },
                      get(o, i, a) {
                        if (i in n) return n[i];
                        if (!(i in t)) return;
                        let s = t[i];
                        if ("function" === typeof s)
                          if ("function" === typeof e[i]) s = u(t, t[i], e[i]);
                          else if (f(r, i)) {
                            let e = c(i, r[i]);
                            s = u(t, t[i], e);
                          } else s = s.bind(t);
                        else if (
                          "object" === typeof s &&
                          null !== s &&
                          (f(e, i) || f(r, i))
                        )
                          s = l(s, e[i], r[i]);
                        else {
                          if (!f(r, "*"))
                            return (
                              Object.defineProperty(n, i, {
                                configurable: !0,
                                enumerable: !0,
                                get() {
                                  return t[i];
                                },
                                set(e) {
                                  t[i] = e;
                                },
                              }),
                              s
                            );
                          s = l(s, e[i], r["*"]);
                        }
                        return (n[i] = s), s;
                      },
                      set(e, r, o, i) {
                        return r in n ? (n[r] = o) : (t[r] = o), !0;
                      },
                      defineProperty(t, e, r) {
                        return Reflect.defineProperty(n, e, r);
                      },
                      deleteProperty(t, e) {
                        return Reflect.deleteProperty(n, e);
                      },
                    },
                    i = Object.create(t);
                  return new Proxy(i, o);
                },
                g = (t) => ({
                  addListener(e, r, ...n) {
                    e.addListener(t.get(r), ...n);
                  },
                  hasListener(e, r) {
                    return e.hasListener(t.get(r));
                  },
                  removeListener(e, r) {
                    e.removeListener(t.get(r));
                  },
                }),
                d = new o((t) =>
                  "function" !== typeof t
                    ? t
                    : function (e) {
                        const r = l(
                          e,
                          {},
                          { getContent: { minArgs: 0, maxArgs: 0 } }
                        );
                        t(r);
                      }
                );
              let m = !1;
              const p = new o((t) =>
                  "function" !== typeof t
                    ? t
                    : function (e, n, o) {
                        let a,
                          s,
                          c = !1,
                          u = new Promise((t) => {
                            a = function (e) {
                              m ||
                                (console.warn(r, new Error().stack), (m = !0)),
                                (c = !0),
                                t(e);
                            };
                          });
                        try {
                          s = t(e, n, a);
                        } catch (g) {
                          s = Promise.reject(g);
                        }
                        const f = !0 !== s && i(s);
                        if (!0 !== s && !f && !c) return !1;
                        const l = (t) => {
                          t.then(
                            (t) => {
                              o(t);
                            },
                            (t) => {
                              let e;
                              (e =
                                t &&
                                (t instanceof Error ||
                                  "string" === typeof t.message)
                                  ? t.message
                                  : "An unexpected error occurred"),
                                o({
                                  __mozWebExtensionPolyfillReject__: !0,
                                  message: e,
                                });
                            }
                          ).catch((t) => {
                            console.error(
                              "Failed to send onMessage rejected reply",
                              t
                            );
                          });
                        };
                        return l(f ? s : u), !0;
                      }
                ),
                h = ({ reject: r, resolve: n }, o) => {
                  t.runtime.lastError
                    ? t.runtime.lastError.message === e
                      ? n()
                      : r(new Error(t.runtime.lastError.message))
                    : o && o.__mozWebExtensionPolyfillReject__
                    ? r(new Error(o.message))
                    : n(o);
                },
                v = (t, e, r, ...n) => {
                  if (n.length < e.minArgs)
                    throw new Error(
                      `Expected at least ${e.minArgs} ${s(
                        e.minArgs
                      )} for ${t}(), got ${n.length}`
                    );
                  if (n.length > e.maxArgs)
                    throw new Error(
                      `Expected at most ${e.maxArgs} ${s(
                        e.maxArgs
                      )} for ${t}(), got ${n.length}`
                    );
                  return new Promise((t, e) => {
                    const o = h.bind(null, { resolve: t, reject: e });
                    n.push(o), r.sendMessage(...n);
                  });
                },
                A = {
                  devtools: { network: { onRequestFinished: g(d) } },
                  runtime: {
                    onMessage: g(p),
                    onMessageExternal: g(p),
                    sendMessage: v.bind(null, "sendMessage", {
                      minArgs: 1,
                      maxArgs: 3,
                    }),
                  },
                  tabs: {
                    sendMessage: v.bind(null, "sendMessage", {
                      minArgs: 2,
                      maxArgs: 3,
                    }),
                  },
                },
                b = {
                  clear: { minArgs: 1, maxArgs: 1 },
                  get: { minArgs: 1, maxArgs: 1 },
                  set: { minArgs: 1, maxArgs: 1 },
                };
              return (
                (n.privacy = {
                  network: { "*": b },
                  services: { "*": b },
                  websites: { "*": b },
                }),
                l(t, A, n)
              );
            };
          if (
            "object" != typeof chrome ||
            !chrome ||
            !chrome.runtime ||
            !chrome.runtime.id
          )
            throw new Error(
              "This script should only be loaded in a browser extension."
            );
          t.exports = n(chrome);
        } else t.exports = a;
      }
    );
  },
  "99af": function (t, e, r) {
    "use strict";
    var n = r("23e7"),
      o = r("da84"),
      i = r("d039"),
      a = r("e8b5"),
      s = r("861d"),
      c = r("7b0b"),
      u = r("07fa"),
      f = r("8418"),
      l = r("65f0"),
      g = r("1dde"),
      d = r("b622"),
      m = r("2d00"),
      p = d("isConcatSpreadable"),
      h = 9007199254740991,
      v = "Maximum allowed index exceeded",
      A = o.TypeError,
      b =
        m >= 51 ||
        !i(function () {
          var t = [];
          return (t[p] = !1), t.concat()[0] !== t;
        }),
      y = g("concat"),
      x = function (t) {
        if (!s(t)) return !1;
        var e = t[p];
        return void 0 !== e ? !!e : a(t);
      },
      w = !b || !y;
    n(
      { target: "Array", proto: !0, forced: w },
      {
        concat: function (t) {
          var e,
            r,
            n,
            o,
            i,
            a = c(this),
            s = l(a, 0),
            g = 0;
          for (e = -1, n = arguments.length; e < n; e++)
            if (((i = -1 === e ? a : arguments[e]), x(i))) {
              if (((o = u(i)), g + o > h)) throw A(v);
              for (r = 0; r < o; r++, g++) r in i && f(s, g, i[r]);
            } else {
              if (g >= h) throw A(v);
              f(s, g++, i);
            }
          return (s.length = g), s;
        },
      }
    );
  },
  "9a1f": function (t, e, r) {
    var n = r("da84"),
      o = r("c65b"),
      i = r("59ed"),
      a = r("825a"),
      s = r("0d51"),
      c = r("35a1"),
      u = n.TypeError;
    t.exports = function (t, e) {
      var r = arguments.length < 2 ? c(t) : e;
      if (i(r)) return a(o(r, t));
      throw u(s(t) + " is not iterable");
    };
  },
  "9bf2": function (t, e, r) {
    var n = r("da84"),
      o = r("83ab"),
      i = r("0cfb"),
      a = r("aed9"),
      s = r("825a"),
      c = r("a04b"),
      u = n.TypeError,
      f = Object.defineProperty,
      l = Object.getOwnPropertyDescriptor,
      g = "enumerable",
      d = "configurable",
      m = "writable";
    e.f = o
      ? a
        ? function (t, e, r) {
            if (
              (s(t),
              (e = c(e)),
              s(r),
              "function" === typeof t &&
                "prototype" === e &&
                "value" in r &&
                m in r &&
                !r[m])
            ) {
              var n = l(t, e);
              n &&
                n[m] &&
                ((t[e] = r.value),
                (r = {
                  configurable: d in r ? r[d] : n[d],
                  enumerable: g in r ? r[g] : n[g],
                  writable: !1,
                }));
            }
            return f(t, e, r);
          }
        : f
      : function (t, e, r) {
          if ((s(t), (e = c(e)), s(r), i))
            try {
              return f(t, e, r);
            } catch (n) {}
          if ("get" in r || "set" in r) throw u("Accessors not supported");
          return "value" in r && (t[e] = r.value), t;
        };
  },
  "9ed3": function (t, e, r) {
    "use strict";
    var n = r("ae93").IteratorPrototype,
      o = r("7c73"),
      i = r("5c6c"),
      a = r("d44e"),
      s = r("3f8c"),
      c = function () {
        return this;
      };
    t.exports = function (t, e, r, u) {
      var f = e + " Iterator";
      return (
        (t.prototype = o(n, { next: i(+!u, r) })),
        a(t, f, !1, !0),
        (s[f] = c),
        t
      );
    };
  },
  a04b: function (t, e, r) {
    var n = r("c04e"),
      o = r("d9b5");
    t.exports = function (t) {
      var e = n(t, "string");
      return o(e) ? e : e + "";
    };
  },
  a4b4: function (t, e, r) {
    var n = r("342f");
    t.exports = /web0s(?!.*chrome)/i.test(n);
  },
  a79d: function (t, e, r) {
    "use strict";
    var n = r("23e7"),
      o = r("c430"),
      i = r("fea9"),
      a = r("d039"),
      s = r("d066"),
      c = r("1626"),
      u = r("4840"),
      f = r("cdf9"),
      l = r("6eeb"),
      g =
        !!i &&
        a(function () {
          i.prototype["finally"].call({ then: function () {} }, function () {});
        });
    if (
      (n(
        { target: "Promise", proto: !0, real: !0, forced: g },
        {
          finally: function (t) {
            var e = u(this, s("Promise")),
              r = c(t);
            return this.then(
              r
                ? function (r) {
                    return f(e, t()).then(function () {
                      return r;
                    });
                  }
                : t,
              r
                ? function (r) {
                    return f(e, t()).then(function () {
                      throw r;
                    });
                  }
                : t
            );
          },
        }
      ),
      !o && c(i))
    ) {
      var d = s("Promise").prototype["finally"];
      i.prototype["finally"] !== d &&
        l(i.prototype, "finally", d, { unsafe: !0 });
    }
  },
  ae93: function (t, e, r) {
    "use strict";
    var n,
      o,
      i,
      a = r("d039"),
      s = r("1626"),
      c = r("7c73"),
      u = r("e163"),
      f = r("6eeb"),
      l = r("b622"),
      g = r("c430"),
      d = l("iterator"),
      m = !1;
    [].keys &&
      ((i = [].keys()),
      "next" in i
        ? ((o = u(u(i))), o !== Object.prototype && (n = o))
        : (m = !0));
    var p =
      void 0 == n ||
      a(function () {
        var t = {};
        return n[d].call(t) !== t;
      });
    p ? (n = {}) : g && (n = c(n)),
      s(n[d]) ||
        f(n, d, function () {
          return this;
        }),
      (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: m });
  },
  aed9: function (t, e, r) {
    var n = r("83ab"),
      o = r("d039");
    t.exports =
      n &&
      o(function () {
        return (
          42 !=
          Object.defineProperty(function () {}, "prototype", {
            value: 42,
            writable: !1,
          }).prototype
        );
      });
  },
  b041: function (t, e, r) {
    "use strict";
    var n = r("00ee"),
      o = r("f5df");
    t.exports = n
      ? {}.toString
      : function () {
          return "[object " + o(this) + "]";
        };
  },
  b575: function (t, e, r) {
    var n,
      o,
      i,
      a,
      s,
      c,
      u,
      f,
      l = r("da84"),
      g = r("0366"),
      d = r("06cf").f,
      m = r("2cf4").set,
      p = r("1cdc"),
      h = r("d4c3"),
      v = r("a4b4"),
      A = r("605d"),
      b = l.MutationObserver || l.WebKitMutationObserver,
      y = l.document,
      x = l.process,
      w = l.Promise,
      O = d(l, "queueMicrotask"),
      S = O && O.value;
    S ||
      ((n = function () {
        var t, e;
        A && (t = x.domain) && t.exit();
        while (o) {
          (e = o.fn), (o = o.next);
          try {
            e();
          } catch (r) {
            throw (o ? a() : (i = void 0), r);
          }
        }
        (i = void 0), t && t.enter();
      }),
      p || A || v || !b || !y
        ? !h && w && w.resolve
          ? ((u = w.resolve(void 0)),
            (u.constructor = w),
            (f = g(u.then, u)),
            (a = function () {
              f(n);
            }))
          : A
          ? (a = function () {
              x.nextTick(n);
            })
          : ((m = g(m, l)),
            (a = function () {
              m(n);
            }))
        : ((s = !0),
          (c = y.createTextNode("")),
          new b(n).observe(c, { characterData: !0 }),
          (a = function () {
            c.data = s = !s;
          }))),
      (t.exports =
        S ||
        function (t) {
          var e = { fn: t, next: void 0 };
          i && (i.next = e), o || ((o = e), a()), (i = e);
        });
  },
  b622: function (t, e, r) {
    var n = r("da84"),
      o = r("5692"),
      i = r("1a2d"),
      a = r("90e3"),
      s = r("4930"),
      c = r("fdbf"),
      u = o("wks"),
      f = n.Symbol,
      l = f && f["for"],
      g = c ? f : (f && f.withoutSetter) || a;
    t.exports = function (t) {
      if (!i(u, t) || (!s && "string" != typeof u[t])) {
        var e = "Symbol." + t;
        s && i(f, t) ? (u[t] = f[t]) : (u[t] = c && l ? l(e) : g(e));
      }
      return u[t];
    };
  },
  c04e: function (t, e, r) {
    var n = r("da84"),
      o = r("c65b"),
      i = r("861d"),
      a = r("d9b5"),
      s = r("dc4a"),
      c = r("485a"),
      u = r("b622"),
      f = n.TypeError,
      l = u("toPrimitive");
    t.exports = function (t, e) {
      if (!i(t) || a(t)) return t;
      var r,
        n = s(t, l);
      if (n) {
        if ((void 0 === e && (e = "default"), (r = o(n, t, e)), !i(r) || a(r)))
          return r;
        throw f("Can't convert object to primitive value");
      }
      return void 0 === e && (e = "number"), c(t, e);
    };
  },
  c430: function (t, e) {
    t.exports = !1;
  },
  c65b: function (t, e) {
    var r = Function.prototype.call;
    t.exports = r.bind
      ? r.bind(r)
      : function () {
          return r.apply(r, arguments);
        };
  },
  c6b6: function (t, e, r) {
    var n = r("e330"),
      o = n({}.toString),
      i = n("".slice);
    t.exports = function (t) {
      return i(o(t), 8, -1);
    };
  },
  c6cd: function (t, e, r) {
    var n = r("da84"),
      o = r("ce4e"),
      i = "__core-js_shared__",
      a = n[i] || o(i, {});
    t.exports = a;
  },
  c8ba: function (t, e) {
    var r;
    r = (function () {
      return this;
    })();
    try {
      r = r || new Function("return this")();
    } catch (n) {
      "object" === typeof window && (r = window);
    }
    t.exports = r;
  },
  ca84: function (t, e, r) {
    var n = r("e330"),
      o = r("1a2d"),
      i = r("fc6a"),
      a = r("4d64").indexOf,
      s = r("d012"),
      c = n([].push);
    t.exports = function (t, e) {
      var r,
        n = i(t),
        u = 0,
        f = [];
      for (r in n) !o(s, r) && o(n, r) && c(f, r);
      while (e.length > u) o(n, (r = e[u++])) && (~a(f, r) || c(f, r));
      return f;
    };
  },
  cc12: function (t, e, r) {
    var n = r("da84"),
      o = r("861d"),
      i = n.document,
      a = o(i) && o(i.createElement);
    t.exports = function (t) {
      return a ? i.createElement(t) : {};
    };
  },
  cca6: function (t, e, r) {
    var n = r("23e7"),
      o = r("60da");
    n(
      { target: "Object", stat: !0, forced: Object.assign !== o },
      { assign: o }
    );
  },
  cdf9: function (t, e, r) {
    var n = r("825a"),
      o = r("861d"),
      i = r("f069");
    t.exports = function (t, e) {
      if ((n(t), o(e) && e.constructor === t)) return e;
      var r = i.f(t),
        a = r.resolve;
      return a(e), r.promise;
    };
  },
  ce4e: function (t, e, r) {
    var n = r("da84"),
      o = Object.defineProperty;
    t.exports = function (t, e) {
      try {
        o(n, t, { value: e, configurable: !0, writable: !0 });
      } catch (r) {
        n[t] = e;
      }
      return e;
    };
  },
  d012: function (t, e) {
    t.exports = {};
  },
  d039: function (t, e) {
    t.exports = function (t) {
      try {
        return !!t();
      } catch (e) {
        return !0;
      }
    };
  },
  d066: function (t, e, r) {
    var n = r("da84"),
      o = r("1626"),
      i = function (t) {
        return o(t) ? t : void 0;
      };
    t.exports = function (t, e) {
      return arguments.length < 2 ? i(n[t]) : n[t] && n[t][e];
    };
  },
  d1e7: function (t, e, r) {
    "use strict";
    var n = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !n.call({ 1: 2 }, 1);
    e.f = i
      ? function (t) {
          var e = o(this, t);
          return !!e && e.enumerable;
        }
      : n;
  },
  d2bb: function (t, e, r) {
    var n = r("e330"),
      o = r("825a"),
      i = r("3bbe");
    t.exports =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var t,
              e = !1,
              r = {};
            try {
              (t = n(
                Object.getOwnPropertyDescriptor(Object.prototype, "__proto__")
                  .set
              )),
                t(r, []),
                (e = r instanceof Array);
            } catch (a) {}
            return function (r, n) {
              return o(r), i(n), e ? t(r, n) : (r.__proto__ = n), r;
            };
          })()
        : void 0);
  },
  d3b7: function (t, e, r) {
    var n = r("00ee"),
      o = r("6eeb"),
      i = r("b041");
    n || o(Object.prototype, "toString", i, { unsafe: !0 });
  },
  d44e: function (t, e, r) {
    var n = r("9bf2").f,
      o = r("1a2d"),
      i = r("b622"),
      a = i("toStringTag");
    t.exports = function (t, e, r) {
      t && !r && (t = t.prototype),
        t && !o(t, a) && n(t, a, { configurable: !0, value: e });
    };
  },
  d4c3: function (t, e, r) {
    var n = r("342f"),
      o = r("da84");
    t.exports = /ipad|iphone|ipod/i.test(n) && void 0 !== o.Pebble;
  },
  d9b5: function (t, e, r) {
    var n = r("da84"),
      o = r("d066"),
      i = r("1626"),
      a = r("3a9b"),
      s = r("fdbf"),
      c = n.Object;
    t.exports = s
      ? function (t) {
          return "symbol" == typeof t;
        }
      : function (t) {
          var e = o("Symbol");
          return i(e) && a(e.prototype, c(t));
        };
  },
  da84: function (t, e, r) {
    (function (e) {
      var r = function (t) {
        return t && t.Math == Math && t;
      };
      t.exports =
        r("object" == typeof globalThis && globalThis) ||
        r("object" == typeof window && window) ||
        r("object" == typeof self && self) ||
        r("object" == typeof e && e) ||
        (function () {
          return this;
        })() ||
        Function("return this")();
    }).call(this, r("c8ba"));
  },
  dc4a: function (t, e, r) {
    var n = r("59ed");
    t.exports = function (t, e) {
      var r = t[e];
      return null == r ? void 0 : n(r);
    };
  },
  df75: function (t, e, r) {
    var n = r("ca84"),
      o = r("7839");
    t.exports =
      Object.keys ||
      function (t) {
        return n(t, o);
      };
  },
  e163: function (t, e, r) {
    var n = r("da84"),
      o = r("1a2d"),
      i = r("1626"),
      a = r("7b0b"),
      s = r("f772"),
      c = r("e177"),
      u = s("IE_PROTO"),
      f = n.Object,
      l = f.prototype;
    t.exports = c
      ? f.getPrototypeOf
      : function (t) {
          var e = a(t);
          if (o(e, u)) return e[u];
          var r = e.constructor;
          return i(r) && e instanceof r
            ? r.prototype
            : e instanceof f
            ? l
            : null;
        };
  },
  e177: function (t, e, r) {
    var n = r("d039");
    t.exports = !n(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    });
  },
  e260: function (t, e, r) {
    "use strict";
    var n = r("fc6a"),
      o = r("44d2"),
      i = r("3f8c"),
      a = r("69f3"),
      s = r("9bf2").f,
      c = r("7dd0"),
      u = r("c430"),
      f = r("83ab"),
      l = "Array Iterator",
      g = a.set,
      d = a.getterFor(l);
    t.exports = c(
      Array,
      "Array",
      function (t, e) {
        g(this, { type: l, target: n(t), index: 0, kind: e });
      },
      function () {
        var t = d(this),
          e = t.target,
          r = t.kind,
          n = t.index++;
        return !e || n >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : "keys" == r
          ? { value: n, done: !1 }
          : "values" == r
          ? { value: e[n], done: !1 }
          : { value: [n, e[n]], done: !1 };
      },
      "values"
    );
    var m = (i.Arguments = i.Array);
    if ((o("keys"), o("values"), o("entries"), !u && f && "values" !== m.name))
      try {
        s(m, "name", { value: "values" });
      } catch (p) {}
  },
  e2cc: function (t, e, r) {
    var n = r("6eeb");
    t.exports = function (t, e, r) {
      for (var o in e) n(t, o, e[o], r);
      return t;
    };
  },
  e330: function (t, e) {
    var r = Function.prototype,
      n = r.bind,
      o = r.call,
      i = n && n.bind(o, o);
    t.exports = n
      ? function (t) {
          return t && i(t);
        }
      : function (t) {
          return (
            t &&
            function () {
              return o.apply(t, arguments);
            }
          );
        };
  },
  e667: function (t, e) {
    t.exports = function (t) {
      try {
        return { error: !1, value: t() };
      } catch (e) {
        return { error: !0, value: e };
      }
    };
  },
  e6cf: function (t, e, r) {
    "use strict";
    var n,
      o,
      i,
      a,
      s = r("23e7"),
      c = r("c430"),
      u = r("da84"),
      f = r("d066"),
      l = r("c65b"),
      g = r("fea9"),
      d = r("6eeb"),
      m = r("e2cc"),
      p = r("d2bb"),
      h = r("d44e"),
      v = r("2626"),
      A = r("59ed"),
      b = r("1626"),
      y = r("861d"),
      x = r("19aa"),
      w = r("8925"),
      O = r("2266"),
      S = r("1c7e"),
      j = r("4840"),
      E = r("2cf4").set,
      P = r("b575"),
      T = r("cdf9"),
      $ = r("44de"),
      _ = r("f069"),
      k = r("e667"),
      M = r("01b4"),
      L = r("69f3"),
      D = r("94ca"),
      C = r("b622"),
      R = r("6069"),
      I = r("605d"),
      F = r("2d00"),
      N = C("species"),
      U = "Promise",
      G = L.getterFor(U),
      Y = L.set,
      H = L.getterFor(U),
      W = g && g.prototype,
      B = g,
      z = W,
      q = u.TypeError,
      J = u.document,
      V = u.process,
      Z = _.f,
      K = Z,
      X = !!(J && J.createEvent && u.dispatchEvent),
      Q = b(u.PromiseRejectionEvent),
      tt = "unhandledrejection",
      et = "rejectionhandled",
      rt = 0,
      nt = 1,
      ot = 2,
      it = 1,
      at = 2,
      st = !1,
      ct = D(U, function () {
        var t = w(B),
          e = t !== String(B);
        if (!e && 66 === F) return !0;
        if (c && !z["finally"]) return !0;
        if (F >= 51 && /native code/.test(t)) return !1;
        var r = new B(function (t) {
            t(1);
          }),
          n = function (t) {
            t(
              function () {},
              function () {}
            );
          },
          o = (r.constructor = {});
        return (
          (o[N] = n),
          (st = r.then(function () {}) instanceof n),
          !st || (!e && R && !Q)
        );
      }),
      ut =
        ct ||
        !S(function (t) {
          B.all(t)["catch"](function () {});
        }),
      ft = function (t) {
        var e;
        return !(!y(t) || !b((e = t.then))) && e;
      },
      lt = function (t, e) {
        var r,
          n,
          o,
          i = e.value,
          a = e.state == nt,
          s = a ? t.ok : t.fail,
          c = t.resolve,
          u = t.reject,
          f = t.domain;
        try {
          s
            ? (a || (e.rejection === at && ht(e), (e.rejection = it)),
              !0 === s
                ? (r = i)
                : (f && f.enter(), (r = s(i)), f && (f.exit(), (o = !0))),
              r === t.promise
                ? u(q("Promise-chain cycle"))
                : (n = ft(r))
                ? l(n, r, c, u)
                : c(r))
            : u(i);
        } catch (g) {
          f && !o && f.exit(), u(g);
        }
      },
      gt = function (t, e) {
        t.notified ||
          ((t.notified = !0),
          P(function () {
            var r,
              n = t.reactions;
            while ((r = n.get())) lt(r, t);
            (t.notified = !1), e && !t.rejection && mt(t);
          }));
      },
      dt = function (t, e, r) {
        var n, o;
        X
          ? ((n = J.createEvent("Event")),
            (n.promise = e),
            (n.reason = r),
            n.initEvent(t, !1, !0),
            u.dispatchEvent(n))
          : (n = { promise: e, reason: r }),
          !Q && (o = u["on" + t])
            ? o(n)
            : t === tt && $("Unhandled promise rejection", r);
      },
      mt = function (t) {
        l(E, u, function () {
          var e,
            r = t.facade,
            n = t.value,
            o = pt(t);
          if (
            o &&
            ((e = k(function () {
              I ? V.emit("unhandledRejection", n, r) : dt(tt, r, n);
            })),
            (t.rejection = I || pt(t) ? at : it),
            e.error)
          )
            throw e.value;
        });
      },
      pt = function (t) {
        return t.rejection !== it && !t.parent;
      },
      ht = function (t) {
        l(E, u, function () {
          var e = t.facade;
          I ? V.emit("rejectionHandled", e) : dt(et, e, t.value);
        });
      },
      vt = function (t, e, r) {
        return function (n) {
          t(e, n, r);
        };
      },
      At = function (t, e, r) {
        t.done ||
          ((t.done = !0),
          r && (t = r),
          (t.value = e),
          (t.state = ot),
          gt(t, !0));
      },
      bt = function (t, e, r) {
        if (!t.done) {
          (t.done = !0), r && (t = r);
          try {
            if (t.facade === e) throw q("Promise can't be resolved itself");
            var n = ft(e);
            n
              ? P(function () {
                  var r = { done: !1 };
                  try {
                    l(n, e, vt(bt, r, t), vt(At, r, t));
                  } catch (o) {
                    At(r, o, t);
                  }
                })
              : ((t.value = e), (t.state = nt), gt(t, !1));
          } catch (o) {
            At({ done: !1 }, o, t);
          }
        }
      };
    if (
      ct &&
      ((B = function (t) {
        x(this, z), A(t), l(n, this);
        var e = G(this);
        try {
          t(vt(bt, e), vt(At, e));
        } catch (r) {
          At(e, r);
        }
      }),
      (z = B.prototype),
      (n = function (t) {
        Y(this, {
          type: U,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: new M(),
          rejection: !1,
          state: rt,
          value: void 0,
        });
      }),
      (n.prototype = m(z, {
        then: function (t, e) {
          var r = H(this),
            n = Z(j(this, B));
          return (
            (r.parent = !0),
            (n.ok = !b(t) || t),
            (n.fail = b(e) && e),
            (n.domain = I ? V.domain : void 0),
            r.state == rt
              ? r.reactions.add(n)
              : P(function () {
                  lt(n, r);
                }),
            n.promise
          );
        },
        catch: function (t) {
          return this.then(void 0, t);
        },
      })),
      (o = function () {
        var t = new n(),
          e = G(t);
        (this.promise = t),
          (this.resolve = vt(bt, e)),
          (this.reject = vt(At, e));
      }),
      (_.f = Z =
        function (t) {
          return t === B || t === i ? new o(t) : K(t);
        }),
      !c && b(g) && W !== Object.prototype)
    ) {
      (a = W.then),
        st ||
          (d(
            W,
            "then",
            function (t, e) {
              var r = this;
              return new B(function (t, e) {
                l(a, r, t, e);
              }).then(t, e);
            },
            { unsafe: !0 }
          ),
          d(W, "catch", z["catch"], { unsafe: !0 }));
      try {
        delete W.constructor;
      } catch (yt) {}
      p && p(W, z);
    }
    s({ global: !0, wrap: !0, forced: ct }, { Promise: B }),
      h(B, U, !1, !0),
      v(U),
      (i = f(U)),
      s(
        { target: U, stat: !0, forced: ct },
        {
          reject: function (t) {
            var e = Z(this);
            return l(e.reject, void 0, t), e.promise;
          },
        }
      ),
      s(
        { target: U, stat: !0, forced: c || ct },
        {
          resolve: function (t) {
            return T(c && this === i ? B : this, t);
          },
        }
      ),
      s(
        { target: U, stat: !0, forced: ut },
        {
          all: function (t) {
            var e = this,
              r = Z(e),
              n = r.resolve,
              o = r.reject,
              i = k(function () {
                var r = A(e.resolve),
                  i = [],
                  a = 0,
                  s = 1;
                O(t, function (t) {
                  var c = a++,
                    u = !1;
                  s++,
                    l(r, e, t).then(function (t) {
                      u || ((u = !0), (i[c] = t), --s || n(i));
                    }, o);
                }),
                  --s || n(i);
              });
            return i.error && o(i.value), r.promise;
          },
          race: function (t) {
            var e = this,
              r = Z(e),
              n = r.reject,
              o = k(function () {
                var o = A(e.resolve);
                O(t, function (t) {
                  l(o, e, t).then(r.resolve, n);
                });
              });
            return o.error && n(o.value), r.promise;
          },
        }
      );
  },
  e893: function (t, e, r) {
    var n = r("1a2d"),
      o = r("56ef"),
      i = r("06cf"),
      a = r("9bf2");
    t.exports = function (t, e, r) {
      for (var s = o(e), c = a.f, u = i.f, f = 0; f < s.length; f++) {
        var l = s[f];
        n(t, l) || (r && n(r, l)) || c(t, l, u(e, l));
      }
    };
  },
  e8b5: function (t, e, r) {
    var n = r("c6b6");
    t.exports =
      Array.isArray ||
      function (t) {
        return "Array" == n(t);
      };
  },
  e95a: function (t, e, r) {
    var n = r("b622"),
      o = r("3f8c"),
      i = n("iterator"),
      a = Array.prototype;
    t.exports = function (t) {
      return void 0 !== t && (o.Array === t || a[i] === t);
    };
  },
  e9c4: function (t, e, r) {
    var n = r("23e7"),
      o = r("da84"),
      i = r("d066"),
      a = r("2ba4"),
      s = r("e330"),
      c = r("d039"),
      u = o.Array,
      f = i("JSON", "stringify"),
      l = s(/./.exec),
      g = s("".charAt),
      d = s("".charCodeAt),
      m = s("".replace),
      p = s((1).toString),
      h = /[\uD800-\uDFFF]/g,
      v = /^[\uD800-\uDBFF]$/,
      A = /^[\uDC00-\uDFFF]$/,
      b = function (t, e, r) {
        var n = g(r, e - 1),
          o = g(r, e + 1);
        return (l(v, t) && !l(A, o)) || (l(A, t) && !l(v, n))
          ? "\\u" + p(d(t, 0), 16)
          : t;
      },
      y = c(function () {
        return (
          '"\\udf06\\ud834"' !== f("\udf06\ud834") ||
          '"\\udead"' !== f("\udead")
        );
      });
    f &&
      n(
        { target: "JSON", stat: !0, forced: y },
        {
          stringify: function (t, e, r) {
            for (var n = 0, o = arguments.length, i = u(o); n < o; n++)
              i[n] = arguments[n];
            var s = a(f, null, i);
            return "string" == typeof s ? m(s, h, b) : s;
          },
        }
      );
  },
  f069: function (t, e, r) {
    "use strict";
    var n = r("59ed"),
      o = function (t) {
        var e, r;
        (this.promise = new t(function (t, n) {
          if (void 0 !== e || void 0 !== r)
            throw TypeError("Bad Promise constructor");
          (e = t), (r = n);
        })),
          (this.resolve = n(e)),
          (this.reject = n(r));
      };
    t.exports.f = function (t) {
      return new o(t);
    };
  },
  f36a: function (t, e, r) {
    var n = r("e330");
    t.exports = n([].slice);
  },
  f5df: function (t, e, r) {
    var n = r("da84"),
      o = r("00ee"),
      i = r("1626"),
      a = r("c6b6"),
      s = r("b622"),
      c = s("toStringTag"),
      u = n.Object,
      f =
        "Arguments" ==
        a(
          (function () {
            return arguments;
          })()
        ),
      l = function (t, e) {
        try {
          return t[e];
        } catch (r) {}
      };
    t.exports = o
      ? a
      : function (t) {
          var e, r, n;
          return void 0 === t
            ? "Undefined"
            : null === t
            ? "Null"
            : "string" == typeof (r = l((e = u(t)), c))
            ? r
            : f
            ? a(e)
            : "Object" == (n = a(e)) && i(e.callee)
            ? "Arguments"
            : n;
        };
  },
  f772: function (t, e, r) {
    var n = r("5692"),
      o = r("90e3"),
      i = n("keys");
    t.exports = function (t) {
      return i[t] || (i[t] = o(t));
    };
  },
  fc6a: function (t, e, r) {
    var n = r("44ad"),
      o = r("1d80");
    t.exports = function (t) {
      return n(o(t));
    };
  },
  fdbf: function (t, e, r) {
    var n = r("4930");
    t.exports = n && !Symbol.sham && "symbol" == typeof Symbol.iterator;
  },
  fe77: function (t, e, r) {
    "use strict";
    r.r(e);
    var n = r("1da1"),
      o =
        (r("e260"),
        r("e6cf"),
        r("cca6"),
        r("a79d"),
        r("96cf"),
        r("99af"),
        r("d3b7"),
        r("e9c4"),
        r("9845")),
      i = r.n(o),
      a = r("5a0c"),
      s = r.n(a),
      c = r("01ea");
    function u(t, e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = Object(n["a"])(
          regeneratorRuntime.mark(function t(e, r) {
            var n;
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (n = {
                        _ApplicationId: c["a"].PARSE_APPID,
                        _JavaScriptKey: c["a"].PARSE_JSKEY,
                        _ClientVersion: c["a"].PARSE_CLIENT_VERSION,
                      }),
                      (n = JSON.stringify(Object.assign(n, r))),
                      t.abrupt(
                        "return",
                        fetch(
                          ""
                            .concat(c["a"].HOST_URL, "/parse/functions/")
                            .concat(e),
                          {
                            headers: {
                              "cache-control": "no-cache",
                              "content-type": "text/plain",
                              pragma: "no-cache",
                            },
                            body: n,
                            method: "POST",
                          }
                        )
                          .then(function (t) {
                            return t.json();
                          })
                          .then(function (t) {
                            return t && t.result ? t.result : null;
                          })
                          .catch(function (t) {
                            return console.log("runParseCloud", t), null;
                          })
                      )
                    );
                  case 3:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        f.apply(this, arguments)
      );
    }
    i.a.runtime.onMessage.addListener(
      (function () {
        var t = Object(n["a"])(
          regeneratorRuntime.mark(function t(e, r) {
            var n, o, a, c, f, l, g;
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    if ("DOWNLOAD_FILE" !== e.type) {
                      t.next = 9;
                      break;
                    }
                    return (
                      (n = e.subFolder),
                      (o = e.fileName),
                      (a = e.url),
                      (c = e.fileSuffix),
                      (f = n),
                      (l = o || s()().format("YYYYMMDDHHmmss")),
                      (g = (f ? "".concat(f, "/").concat(l) : l) + "." + c),
                      i.a.downloads.download({
                        url: a,
                        filename: g,
                        conflictAction: "overwrite",
                      }),
                      t.abrupt("return", !0)
                    );
                  case 9:
                    if ("SHOW_DEFAULT_FOLDER" !== e.type) {
                      t.next = 13;
                      break;
                    }
                    i.a.downloads.showDefaultFolder(), (t.next = 30);
                    break;
                  case 13:
                    if ("UPDATE_HISTORY" !== e.type) {
                      t.next = 17;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      new Promise(function (t) {
                        u("updateHistory", e.data).then(function (e) {
                          t(e);
                        });
                      })
                    );
                  case 17:
                    if ("ADD_LOGS" !== e.type) {
                      t.next = 21;
                      break;
                    }
                    return t.abrupt(
                      "return",
                      new Promise(function (t) {
                        u("addLogs", e.data).then(function (e) {
                          t(e);
                        });
                      })
                    );
                  case 21:
                    if ("LOGIN" !== e.type) {
                      t.next = 27;
                      break;
                    }
                    return (
                      (t.next = 24),
                      i.a.storage.local.set({ webAuthData: e.data })
                    );
                  case 24:
                    i.a.tabs.remove(r.tab.id), (t.next = 30);
                    break;
                  case 27:
                    if ("ping" !== e.type) {
                      t.next = 30;
                      break;
                    }
                    return console.log(e), t.abrupt("return", "pong");
                  case 30:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function (e, r) {
          return t.apply(this, arguments);
        };
      })()
    );
  },
  fea9: function (t, e, r) {
    var n = r("da84");
    t.exports = n.Promise;
  },
});
