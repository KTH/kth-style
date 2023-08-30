!(function (e, t) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define([], t)
    : 'object' == typeof exports
    ? (exports.klaro = t())
    : (e.klaro = t())
})(self, function () {
  return (() => {
    var e = {
        5089: (e, t, n) => {
          var r = n(2086),
            o = n(930),
            i = n(9268),
            a = r.TypeError
          e.exports = function (e) {
            if (o(e)) return e
            throw a(i(e) + ' is not a function')
          }
        },
        1449: (e, t, n) => {
          var r = n(2086),
            o = n(1956),
            i = n(9268),
            a = r.TypeError
          e.exports = function (e) {
            if (o(e)) return e
            throw a(i(e) + ' is not a constructor')
          }
        },
        1378: (e, t, n) => {
          var r = n(2086),
            o = n(930),
            i = r.String,
            a = r.TypeError
          e.exports = function (e) {
            if ('object' == typeof e || o(e)) return e
            throw a("Can't set " + i(e) + ' as a prototype')
          }
        },
        8669: (e, t, n) => {
          var r = n(211),
            o = n(4710),
            i = n(7826),
            a = r('unscopables'),
            s = Array.prototype
          null == s[a] && i.f(s, a, { configurable: !0, value: o(null) }),
            (e.exports = function (e) {
              s[a][e] = !0
            })
        },
        9966: (e, t, n) => {
          'use strict'
          var r = n(3448).charAt
          e.exports = function (e, t, n) {
            return t + (n ? r(e, t).length : 1)
          }
        },
        1855: (e, t, n) => {
          var r = n(2086),
            o = n(5516),
            i = r.TypeError
          e.exports = function (e, t) {
            if (o(t, e)) return e
            throw i('Incorrect invocation')
          }
        },
        6112: (e, t, n) => {
          var r = n(2086),
            o = n(8759),
            i = r.String,
            a = r.TypeError
          e.exports = function (e) {
            if (o(e)) return e
            throw a(i(e) + ' is not an object')
          }
        },
        1005: (e, t, n) => {
          var r = n(3677)
          e.exports = r(function () {
            if ('function' == typeof ArrayBuffer) {
              var e = new ArrayBuffer(8)
              Object.isExtensible(e) && Object.defineProperty(e, 'a', { value: 8 })
            }
          })
        },
        1984: (e, t, n) => {
          'use strict'
          var r = n(8062).forEach,
            o = n(2802)('forEach')
          e.exports = o
            ? [].forEach
            : function (e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
              }
        },
        1842: (e, t, n) => {
          'use strict'
          var r = n(2086),
            o = n(8516),
            i = n(9413),
            a = n(3060),
            s = n(7850),
            c = n(2814),
            l = n(1956),
            u = n(2871),
            p = n(9720),
            f = n(3546),
            d = n(1667),
            v = r.Array
          e.exports = function (e) {
            var t = a(e),
              n = l(this),
              r = arguments.length,
              y = r > 1 ? arguments[1] : void 0,
              m = void 0 !== y
            m && (y = o(y, r > 2 ? arguments[2] : void 0))
            var h,
              g,
              b,
              _,
              k,
              w,
              x = d(t),
              j = 0
            if (!x || (this == v && c(x)))
              for (h = u(t), g = n ? new this(h) : v(h); h > j; j++) (w = m ? y(t[j], j) : t[j]), p(g, j, w)
            else
              for (k = (_ = f(t, x)).next, g = n ? new this() : []; !(b = i(k, _)).done; j++)
                (w = m ? s(_, y, [b.value, j], !0) : b.value), p(g, j, w)
            return (g.length = j), g
          }
        },
        6198: (e, t, n) => {
          var r = n(4088),
            o = n(7740),
            i = n(2871),
            a = function (e) {
              return function (t, n, a) {
                var s,
                  c = r(t),
                  l = i(c),
                  u = o(a, l)
                if (e && n != n) {
                  for (; l > u; ) if ((s = c[u++]) != s) return !0
                } else for (; l > u; u++) if ((e || u in c) && c[u] === n) return e || u || 0
                return !e && -1
              }
            }
          e.exports = { includes: a(!0), indexOf: a(!1) }
        },
        8062: (e, t, n) => {
          var r = n(8516),
            o = n(8240),
            i = n(5974),
            a = n(3060),
            s = n(2871),
            c = n(5574),
            l = o([].push),
            u = function (e) {
              var t = 1 == e,
                n = 2 == e,
                o = 3 == e,
                u = 4 == e,
                p = 6 == e,
                f = 7 == e,
                d = 5 == e || p
              return function (v, y, m, h) {
                for (
                  var g,
                    b,
                    _ = a(v),
                    k = i(_),
                    w = r(y, m),
                    x = s(k),
                    j = 0,
                    O = h || c,
                    S = t ? O(v, x) : n || f ? O(v, 0) : void 0;
                  x > j;
                  j++
                )
                  if ((d || j in k) && ((b = w((g = k[j]), j, _)), e))
                    if (t) S[j] = b
                    else if (b)
                      switch (e) {
                        case 3:
                          return !0
                        case 5:
                          return g
                        case 6:
                          return j
                        case 2:
                          l(S, g)
                      }
                    else
                      switch (e) {
                        case 4:
                          return !1
                        case 7:
                          l(S, g)
                      }
                return p ? -1 : o || u ? u : S
              }
            }
          e.exports = {
            forEach: u(0),
            map: u(1),
            filter: u(2),
            some: u(3),
            every: u(4),
            find: u(5),
            findIndex: u(6),
            filterReject: u(7),
          }
        },
        9955: (e, t, n) => {
          var r = n(3677),
            o = n(211),
            i = n(1448),
            a = o('species')
          e.exports = function (e) {
            return (
              i >= 51 ||
              !r(function () {
                var t = []
                return (
                  ((t.constructor = {})[a] = function () {
                    return { foo: 1 }
                  }),
                  1 !== t[e](Boolean).foo
                )
              })
            )
          }
        },
        2802: (e, t, n) => {
          'use strict'
          var r = n(3677)
          e.exports = function (e, t) {
            var n = [][e]
            return (
              !!n &&
              r(function () {
                n.call(
                  null,
                  t ||
                    function () {
                      return 1
                    },
                  1
                )
              })
            )
          }
        },
        3329: (e, t, n) => {
          var r = n(2086),
            o = n(7740),
            i = n(2871),
            a = n(9720),
            s = r.Array,
            c = Math.max
          e.exports = function (e, t, n) {
            for (var r = i(e), l = o(t, r), u = o(void 0 === n ? r : n, r), p = s(c(u - l, 0)), f = 0; l < u; l++, f++)
              a(p, f, e[l])
            return (p.length = f), p
          }
        },
        745: (e, t, n) => {
          var r = n(8240)
          e.exports = r([].slice)
        },
        1147: (e, t, n) => {
          var r = n(3329),
            o = Math.floor,
            i = function (e, t) {
              var n = e.length,
                c = o(n / 2)
              return n < 8 ? a(e, t) : s(e, i(r(e, 0, c), t), i(r(e, c), t), t)
            },
            a = function (e, t) {
              for (var n, r, o = e.length, i = 1; i < o; ) {
                for (r = i, n = e[i]; r && t(e[r - 1], n) > 0; ) e[r] = e[--r]
                r !== i++ && (e[r] = n)
              }
              return e
            },
            s = function (e, t, n, r) {
              for (var o = t.length, i = n.length, a = 0, s = 0; a < o || s < i; )
                e[a + s] = a < o && s < i ? (r(t[a], n[s]) <= 0 ? t[a++] : n[s++]) : a < o ? t[a++] : n[s++]
              return e
            }
          e.exports = i
        },
        8789: (e, t, n) => {
          var r = n(2086),
            o = n(6526),
            i = n(1956),
            a = n(8759),
            s = n(211)('species'),
            c = r.Array
          e.exports = function (e) {
            var t
            return (
              o(e) &&
                ((t = e.constructor),
                ((i(t) && (t === c || o(t.prototype))) || (a(t) && null === (t = t[s]))) && (t = void 0)),
              void 0 === t ? c : t
            )
          }
        },
        5574: (e, t, n) => {
          var r = n(8789)
          e.exports = function (e, t) {
            return new (r(e))(0 === t ? 0 : t)
          }
        },
        7850: (e, t, n) => {
          var r = n(6112),
            o = n(6737)
          e.exports = function (e, t, n, i) {
            try {
              return i ? t(r(n)[0], n[1]) : t(n)
            } catch (t) {
              o(e, 'throw', t)
            }
          }
        },
        8939: (e, t, n) => {
          var r = n(211)('iterator'),
            o = !1
          try {
            var i = 0,
              a = {
                next: function () {
                  return { done: !!i++ }
                },
                return: function () {
                  o = !0
                },
              }
            ;(a[r] = function () {
              return this
            }),
              Array.from(a, function () {
                throw 2
              })
          } catch (e) {}
          e.exports = function (e, t) {
            if (!t && !o) return !1
            var n = !1
            try {
              var i = {}
              ;(i[r] = function () {
                return {
                  next: function () {
                    return { done: (n = !0) }
                  },
                }
              }),
                e(i)
            } catch (e) {}
            return n
          }
        },
        2306: (e, t, n) => {
          var r = n(8240),
            o = r({}.toString),
            i = r(''.slice)
          e.exports = function (e) {
            return i(o(e), 8, -1)
          }
        },
        375: (e, t, n) => {
          var r = n(2086),
            o = n(2371),
            i = n(930),
            a = n(2306),
            s = n(211)('toStringTag'),
            c = r.Object,
            l =
              'Arguments' ==
              a(
                (function () {
                  return arguments
                })()
              )
          e.exports = o
            ? a
            : function (e) {
                var t, n, r
                return void 0 === e
                  ? 'Undefined'
                  : null === e
                  ? 'Null'
                  : 'string' ==
                    typeof (n = (function (e, t) {
                      try {
                        return e[t]
                      } catch (e) {}
                    })((t = c(e)), s))
                  ? n
                  : l
                  ? a(t)
                  : 'Object' == (r = a(t)) && i(t.callee)
                  ? 'Arguments'
                  : r
              }
        },
        5204: (e, t, n) => {
          'use strict'
          var r = n(7826).f,
            o = n(4710),
            i = n(9431),
            a = n(8516),
            s = n(1855),
            c = n(4722),
            l = n(8432),
            u = n(7420),
            p = n(5283),
            f = n(2423).fastKey,
            d = n(3278),
            v = d.set,
            y = d.getterFor
          e.exports = {
            getConstructor: function (e, t, n, l) {
              var u = e(function (e, r) {
                  s(e, d),
                    v(e, { type: t, index: o(null), first: void 0, last: void 0, size: 0 }),
                    p || (e.size = 0),
                    null != r && c(r, e[l], { that: e, AS_ENTRIES: n })
                }),
                d = u.prototype,
                m = y(t),
                h = function (e, t, n) {
                  var r,
                    o,
                    i = m(e),
                    a = g(e, t)
                  return (
                    a
                      ? (a.value = n)
                      : ((i.last = a =
                          {
                            index: (o = f(t, !0)),
                            key: t,
                            value: n,
                            previous: (r = i.last),
                            next: void 0,
                            removed: !1,
                          }),
                        i.first || (i.first = a),
                        r && (r.next = a),
                        p ? i.size++ : e.size++,
                        'F' !== o && (i.index[o] = a)),
                    e
                  )
                },
                g = function (e, t) {
                  var n,
                    r = m(e),
                    o = f(t)
                  if ('F' !== o) return r.index[o]
                  for (n = r.first; n; n = n.next) if (n.key == t) return n
                }
              return (
                i(d, {
                  clear: function () {
                    for (var e = m(this), t = e.index, n = e.first; n; )
                      (n.removed = !0),
                        n.previous && (n.previous = n.previous.next = void 0),
                        delete t[n.index],
                        (n = n.next)
                    ;(e.first = e.last = void 0), p ? (e.size = 0) : (this.size = 0)
                  },
                  delete: function (e) {
                    var t = this,
                      n = m(t),
                      r = g(t, e)
                    if (r) {
                      var o = r.next,
                        i = r.previous
                      delete n.index[r.index],
                        (r.removed = !0),
                        i && (i.next = o),
                        o && (o.previous = i),
                        n.first == r && (n.first = o),
                        n.last == r && (n.last = i),
                        p ? n.size-- : t.size--
                    }
                    return !!r
                  },
                  forEach: function (e) {
                    for (
                      var t, n = m(this), r = a(e, arguments.length > 1 ? arguments[1] : void 0);
                      (t = t ? t.next : n.first);

                    )
                      for (r(t.value, t.key, this); t && t.removed; ) t = t.previous
                  },
                  has: function (e) {
                    return !!g(this, e)
                  },
                }),
                i(
                  d,
                  n
                    ? {
                        get: function (e) {
                          var t = g(this, e)
                          return t && t.value
                        },
                        set: function (e, t) {
                          return h(this, 0 === e ? 0 : e, t)
                        },
                      }
                    : {
                        add: function (e) {
                          return h(this, (e = 0 === e ? 0 : e), e)
                        },
                      }
                ),
                p &&
                  r(d, 'size', {
                    get: function () {
                      return m(this).size
                    },
                  }),
                u
              )
            },
            setStrong: function (e, t, n) {
              var r = t + ' Iterator',
                o = y(t),
                i = y(r)
              l(
                e,
                t,
                function (e, t) {
                  v(this, { type: r, target: e, state: o(e), kind: t, last: void 0 })
                },
                function () {
                  for (var e = i(this), t = e.kind, n = e.last; n && n.removed; ) n = n.previous
                  return e.target && (e.last = n = n ? n.next : e.state.first)
                    ? 'keys' == t
                      ? { value: n.key, done: !1 }
                      : 'values' == t
                      ? { value: n.value, done: !1 }
                      : { value: [n.key, n.value], done: !1 }
                    : ((e.target = void 0), { value: void 0, done: !0 })
                },
                n ? 'entries' : 'values',
                !n,
                !0
              ),
                u(t)
            },
          }
        },
        4909: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(2086),
            i = n(8240),
            a = n(7189),
            s = n(1007),
            c = n(2423),
            l = n(4722),
            u = n(1855),
            p = n(930),
            f = n(8759),
            d = n(3677),
            v = n(8939),
            y = n(914),
            m = n(5070)
          e.exports = function (e, t, n) {
            var h = -1 !== e.indexOf('Map'),
              g = -1 !== e.indexOf('Weak'),
              b = h ? 'set' : 'add',
              _ = o[e],
              k = _ && _.prototype,
              w = _,
              x = {},
              j = function (e) {
                var t = i(k[e])
                s(
                  k,
                  e,
                  'add' == e
                    ? function (e) {
                        return t(this, 0 === e ? 0 : e), this
                      }
                    : 'delete' == e
                    ? function (e) {
                        return !(g && !f(e)) && t(this, 0 === e ? 0 : e)
                      }
                    : 'get' == e
                    ? function (e) {
                        return g && !f(e) ? void 0 : t(this, 0 === e ? 0 : e)
                      }
                    : 'has' == e
                    ? function (e) {
                        return !(g && !f(e)) && t(this, 0 === e ? 0 : e)
                      }
                    : function (e, n) {
                        return t(this, 0 === e ? 0 : e, n), this
                      }
                )
              }
            if (
              a(
                e,
                !p(_) ||
                  !(
                    g ||
                    (k.forEach &&
                      !d(function () {
                        new _().entries().next()
                      }))
                  )
              )
            )
              (w = n.getConstructor(t, e, h, b)), c.enable()
            else if (a(e, !0)) {
              var O = new w(),
                S = O[b](g ? {} : -0, 1) != O,
                P = d(function () {
                  O.has(1)
                }),
                A = v(function (e) {
                  new _(e)
                }),
                z =
                  !g &&
                  d(function () {
                    for (var e = new _(), t = 5; t--; ) e[b](t, t)
                    return !e.has(-0)
                  })
              A ||
                (((w = t(function (e, t) {
                  u(e, k)
                  var n = m(new _(), e, w)
                  return null != t && l(t, n[b], { that: n, AS_ENTRIES: h }), n
                })).prototype = k),
                (k.constructor = w)),
                (P || z) && (j('delete'), j('has'), h && j('get')),
                (z || S) && j(b),
                g && k.clear && delete k.clear
            }
            return (x[e] = w), r({ global: !0, forced: w != _ }, x), y(w, e), g || n.setStrong(w, e, h), w
          }
        },
        8474: (e, t, n) => {
          var r = n(9606),
            o = n(6095),
            i = n(4399),
            a = n(7826)
          e.exports = function (e, t, n) {
            for (var s = o(t), c = a.f, l = i.f, u = 0; u < s.length; u++) {
              var p = s[u]
              r(e, p) || (n && r(n, p)) || c(e, p, l(t, p))
            }
          }
        },
        5469: (e, t, n) => {
          var r = n(211)('match')
          e.exports = function (e) {
            var t = /./
            try {
              '/./'[e](t)
            } catch (n) {
              try {
                return (t[r] = !1), '/./'[e](t)
              } catch (e) {}
            }
            return !1
          }
        },
        7209: (e, t, n) => {
          var r = n(3677)
          e.exports = !r(function () {
            function e() {}
            return (e.prototype.constructor = null), Object.getPrototypeOf(new e()) !== e.prototype
          })
        },
        471: (e, t, n) => {
          'use strict'
          var r = n(3083).IteratorPrototype,
            o = n(4710),
            i = n(5736),
            a = n(914),
            s = n(7719),
            c = function () {
              return this
            }
          e.exports = function (e, t, n, l) {
            var u = t + ' Iterator'
            return (e.prototype = o(r, { next: i(+!l, n) })), a(e, u, !1, !0), (s[u] = c), e
          }
        },
        2585: (e, t, n) => {
          var r = n(5283),
            o = n(7826),
            i = n(5736)
          e.exports = r
            ? function (e, t, n) {
                return o.f(e, t, i(1, n))
              }
            : function (e, t, n) {
                return (e[t] = n), e
              }
        },
        5736: (e) => {
          e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t }
          }
        },
        9720: (e, t, n) => {
          'use strict'
          var r = n(2258),
            o = n(7826),
            i = n(5736)
          e.exports = function (e, t, n) {
            var a = r(t)
            a in e ? o.f(e, a, i(0, n)) : (e[a] = n)
          }
        },
        8432: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(9413),
            i = n(3296),
            a = n(4398),
            s = n(930),
            c = n(471),
            l = n(2130),
            u = n(7530),
            p = n(914),
            f = n(2585),
            d = n(1007),
            v = n(211),
            y = n(7719),
            m = n(3083),
            h = a.PROPER,
            g = a.CONFIGURABLE,
            b = m.IteratorPrototype,
            _ = m.BUGGY_SAFARI_ITERATORS,
            k = v('iterator'),
            w = 'keys',
            x = 'values',
            j = 'entries',
            O = function () {
              return this
            }
          e.exports = function (e, t, n, a, v, m, S) {
            c(n, t, a)
            var P,
              A,
              z,
              E = function (e) {
                if (e === v && R) return R
                if (!_ && e in I) return I[e]
                switch (e) {
                  case w:
                  case x:
                  case j:
                    return function () {
                      return new n(this, e)
                    }
                }
                return function () {
                  return new n(this)
                }
              },
              C = t + ' Iterator',
              T = !1,
              I = e.prototype,
              D = I[k] || I['@@iterator'] || (v && I[v]),
              R = (!_ && D) || E(v),
              M = ('Array' == t && I.entries) || D
            if (
              (M &&
                (P = l(M.call(new e()))) !== Object.prototype &&
                P.next &&
                (i || l(P) === b || (u ? u(P, b) : s(P[k]) || d(P, k, O)), p(P, C, !0, !0), i && (y[C] = O)),
              h &&
                v == x &&
                D &&
                D.name !== x &&
                (!i && g
                  ? f(I, 'name', x)
                  : ((T = !0),
                    (R = function () {
                      return o(D, this)
                    }))),
              v)
            )
              if (((A = { values: E(x), keys: m ? R : E(w), entries: E(j) }), S))
                for (z in A) (_ || T || !(z in I)) && d(I, z, A[z])
              else r({ target: t, proto: !0, forced: _ || T }, A)
            return (i && !S) || I[k] === R || d(I, k, R, { name: v }), (y[t] = R), A
          }
        },
        4145: (e, t, n) => {
          var r = n(9775),
            o = n(9606),
            i = n(9251),
            a = n(7826).f
          e.exports = function (e) {
            var t = r.Symbol || (r.Symbol = {})
            o(t, e) || a(t, e, { value: i.f(e) })
          }
        },
        5283: (e, t, n) => {
          var r = n(3677)
          e.exports = !r(function () {
            return (
              7 !=
              Object.defineProperty({}, 1, {
                get: function () {
                  return 7
                },
              })[1]
            )
          })
        },
        821: (e, t, n) => {
          var r = n(2086),
            o = n(8759),
            i = r.document,
            a = o(i) && o(i.createElement)
          e.exports = function (e) {
            return a ? i.createElement(e) : {}
          }
        },
        933: (e) => {
          e.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0,
          }
        },
        3526: (e, t, n) => {
          var r = n(821)('span').classList,
            o = r && r.constructor && r.constructor.prototype
          e.exports = o === Object.prototype ? void 0 : o
        },
        1799: (e, t, n) => {
          var r = n(4999).match(/firefox\/(\d+)/i)
          e.exports = !!r && +r[1]
        },
        172: (e) => {
          e.exports = 'object' == typeof window
        },
        4172: (e, t, n) => {
          var r = n(4999)
          e.exports = /MSIE|Trident/.test(r)
        },
        1848: (e, t, n) => {
          var r = n(4999),
            o = n(2086)
          e.exports = /ipad|iphone|ipod/i.test(r) && void 0 !== o.Pebble
        },
        4344: (e, t, n) => {
          var r = n(4999)
          e.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
        },
        1801: (e, t, n) => {
          var r = n(2306),
            o = n(2086)
          e.exports = 'process' == r(o.process)
        },
        4928: (e, t, n) => {
          var r = n(4999)
          e.exports = /web0s(?!.*chrome)/i.test(r)
        },
        4999: (e, t, n) => {
          var r = n(563)
          e.exports = r('navigator', 'userAgent') || ''
        },
        1448: (e, t, n) => {
          var r,
            o,
            i = n(2086),
            a = n(4999),
            s = i.process,
            c = i.Deno,
            l = (s && s.versions) || (c && c.version),
            u = l && l.v8
          u && (o = (r = u.split('.'))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])),
            !o && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]),
            (e.exports = o)
        },
        9804: (e, t, n) => {
          var r = n(4999).match(/AppleWebKit\/(\d+)\./)
          e.exports = !!r && +r[1]
        },
        8684: (e) => {
          e.exports = [
            'constructor',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            'toLocaleString',
            'toString',
            'valueOf',
          ]
        },
        1695: (e, t, n) => {
          var r = n(2086),
            o = n(4399).f,
            i = n(2585),
            a = n(1007),
            s = n(3648),
            c = n(8474),
            l = n(7189)
          e.exports = function (e, t) {
            var n,
              u,
              p,
              f,
              d,
              v = e.target,
              y = e.global,
              m = e.stat
            if ((n = y ? r : m ? r[v] || s(v, {}) : (r[v] || {}).prototype))
              for (u in t) {
                if (
                  ((f = t[u]),
                  (p = e.noTargetGet ? (d = o(n, u)) && d.value : n[u]),
                  !l(y ? u : v + (m ? '.' : '#') + u, e.forced) && void 0 !== p)
                ) {
                  if (typeof f == typeof p) continue
                  c(f, p)
                }
                ;(e.sham || (p && p.sham)) && i(f, 'sham', !0), a(n, u, f, e)
              }
          }
        },
        3677: (e) => {
          e.exports = function (e) {
            try {
              return !!e()
            } catch (e) {
              return !0
            }
          }
        },
        2331: (e, t, n) => {
          'use strict'
          n(2077)
          var r = n(8240),
            o = n(1007),
            i = n(4861),
            a = n(3677),
            s = n(211),
            c = n(2585),
            l = s('species'),
            u = RegExp.prototype
          e.exports = function (e, t, n, p) {
            var f = s(e),
              d = !a(function () {
                var t = {}
                return (
                  (t[f] = function () {
                    return 7
                  }),
                  7 != ''[e](t)
                )
              }),
              v =
                d &&
                !a(function () {
                  var t = !1,
                    n = /a/
                  return (
                    'split' === e &&
                      (((n = {}).constructor = {}),
                      (n.constructor[l] = function () {
                        return n
                      }),
                      (n.flags = ''),
                      (n[f] = /./[f])),
                    (n.exec = function () {
                      return (t = !0), null
                    }),
                    n[f](''),
                    !t
                  )
                })
            if (!d || !v || n) {
              var y = r(/./[f]),
                m = t(f, ''[e], function (e, t, n, o, a) {
                  var s = r(e),
                    c = t.exec
                  return c === i || c === u.exec
                    ? d && !a
                      ? { done: !0, value: y(t, n, o) }
                      : { done: !0, value: s(n, t, o) }
                    : { done: !1 }
                })
              o(String.prototype, e, m[0]), o(u, f, m[1])
            }
            p && c(u[f], 'sham', !0)
          }
        },
        6910: (e, t, n) => {
          var r = n(3677)
          e.exports = !r(function () {
            return Object.isExtensible(Object.preventExtensions({}))
          })
        },
        7258: (e, t, n) => {
          var r = n(6059),
            o = Function.prototype,
            i = o.apply,
            a = o.call
          e.exports =
            ('object' == typeof Reflect && Reflect.apply) ||
            (r
              ? a.bind(i)
              : function () {
                  return a.apply(i, arguments)
                })
        },
        8516: (e, t, n) => {
          var r = n(8240),
            o = n(5089),
            i = n(6059),
            a = r(r.bind)
          e.exports = function (e, t) {
            return (
              o(e),
              void 0 === t
                ? e
                : i
                ? a(e, t)
                : function () {
                    return e.apply(t, arguments)
                  }
            )
          }
        },
        6059: (e, t, n) => {
          var r = n(3677)
          e.exports = !r(function () {
            var e = function () {}.bind()
            return 'function' != typeof e || e.hasOwnProperty('prototype')
          })
        },
        2395: (e, t, n) => {
          'use strict'
          var r = n(2086),
            o = n(8240),
            i = n(5089),
            a = n(8759),
            s = n(9606),
            c = n(745),
            l = n(6059),
            u = r.Function,
            p = o([].concat),
            f = o([].join),
            d = {},
            v = function (e, t, n) {
              if (!s(d, t)) {
                for (var r = [], o = 0; o < t; o++) r[o] = 'a[' + o + ']'
                d[t] = u('C,a', 'return new C(' + f(r, ',') + ')')
              }
              return d[t](e, n)
            }
          e.exports = l
            ? u.bind
            : function (e) {
                var t = i(this),
                  n = t.prototype,
                  r = c(arguments, 1),
                  o = function () {
                    var n = p(r, c(arguments))
                    return this instanceof o ? v(t, n.length, n) : t.apply(e, n)
                  }
                return a(n) && (o.prototype = n), o
              }
        },
        9413: (e, t, n) => {
          var r = n(6059),
            o = Function.prototype.call
          e.exports = r
            ? o.bind(o)
            : function () {
                return o.apply(o, arguments)
              }
        },
        4398: (e, t, n) => {
          var r = n(5283),
            o = n(9606),
            i = Function.prototype,
            a = r && Object.getOwnPropertyDescriptor,
            s = o(i, 'name'),
            c = s && 'something' === function () {}.name,
            l = s && (!r || (r && a(i, 'name').configurable))
          e.exports = { EXISTS: s, PROPER: c, CONFIGURABLE: l }
        },
        8240: (e, t, n) => {
          var r = n(6059),
            o = Function.prototype,
            i = o.bind,
            a = o.call,
            s = r && i.bind(a, a)
          e.exports = r
            ? function (e) {
                return e && s(e)
              }
            : function (e) {
                return (
                  e &&
                  function () {
                    return a.apply(e, arguments)
                  }
                )
              }
        },
        563: (e, t, n) => {
          var r = n(2086),
            o = n(930),
            i = function (e) {
              return o(e) ? e : void 0
            }
          e.exports = function (e, t) {
            return arguments.length < 2 ? i(r[e]) : r[e] && r[e][t]
          }
        },
        1667: (e, t, n) => {
          var r = n(375),
            o = n(2964),
            i = n(7719),
            a = n(211)('iterator')
          e.exports = function (e) {
            if (null != e) return o(e, a) || o(e, '@@iterator') || i[r(e)]
          }
        },
        3546: (e, t, n) => {
          var r = n(2086),
            o = n(9413),
            i = n(5089),
            a = n(6112),
            s = n(9268),
            c = n(1667),
            l = r.TypeError
          e.exports = function (e, t) {
            var n = arguments.length < 2 ? c(e) : t
            if (i(n)) return a(o(n, e))
            throw l(s(e) + ' is not iterable')
          }
        },
        2964: (e, t, n) => {
          var r = n(5089)
          e.exports = function (e, t) {
            var n = e[t]
            return null == n ? void 0 : r(n)
          }
        },
        8509: (e, t, n) => {
          var r = n(8240),
            o = n(3060),
            i = Math.floor,
            a = r(''.charAt),
            s = r(''.replace),
            c = r(''.slice),
            l = /\$([$&'`]|\d{1,2}|<[^>]*>)/g,
            u = /\$([$&'`]|\d{1,2})/g
          e.exports = function (e, t, n, r, p, f) {
            var d = n + e.length,
              v = r.length,
              y = u
            return (
              void 0 !== p && ((p = o(p)), (y = l)),
              s(f, y, function (o, s) {
                var l
                switch (a(s, 0)) {
                  case '$':
                    return '$'
                  case '&':
                    return e
                  case '`':
                    return c(t, 0, n)
                  case "'":
                    return c(t, d)
                  case '<':
                    l = p[c(s, 1, -1)]
                    break
                  default:
                    var u = +s
                    if (0 === u) return o
                    if (u > v) {
                      var f = i(u / 10)
                      return 0 === f ? o : f <= v ? (void 0 === r[f - 1] ? a(s, 1) : r[f - 1] + a(s, 1)) : o
                    }
                    l = r[u - 1]
                }
                return void 0 === l ? '' : l
              })
            )
          }
        },
        2086: (e, t, n) => {
          var r = function (e) {
            return e && e.Math == Math && e
          }
          e.exports =
            r('object' == typeof globalThis && globalThis) ||
            r('object' == typeof window && window) ||
            r('object' == typeof self && self) ||
            r('object' == typeof n.g && n.g) ||
            (function () {
              return this
            })() ||
            Function('return this')()
        },
        9606: (e, t, n) => {
          var r = n(8240),
            o = n(3060),
            i = r({}.hasOwnProperty)
          e.exports =
            Object.hasOwn ||
            function (e, t) {
              return i(o(e), t)
            }
        },
        7153: (e) => {
          e.exports = {}
        },
        1670: (e, t, n) => {
          var r = n(2086)
          e.exports = function (e, t) {
            var n = r.console
            n && n.error && (1 == arguments.length ? n.error(e) : n.error(e, t))
          }
        },
        5963: (e, t, n) => {
          var r = n(563)
          e.exports = r('document', 'documentElement')
        },
        6761: (e, t, n) => {
          var r = n(5283),
            o = n(3677),
            i = n(821)
          e.exports =
            !r &&
            !o(function () {
              return (
                7 !=
                Object.defineProperty(i('div'), 'a', {
                  get: function () {
                    return 7
                  },
                }).a
              )
            })
        },
        5974: (e, t, n) => {
          var r = n(2086),
            o = n(8240),
            i = n(3677),
            a = n(2306),
            s = r.Object,
            c = o(''.split)
          e.exports = i(function () {
            return !s('z').propertyIsEnumerable(0)
          })
            ? function (e) {
                return 'String' == a(e) ? c(e, '') : s(e)
              }
            : s
        },
        5070: (e, t, n) => {
          var r = n(930),
            o = n(8759),
            i = n(7530)
          e.exports = function (e, t, n) {
            var a, s
            return i && r((a = t.constructor)) && a !== n && o((s = a.prototype)) && s !== n.prototype && i(e, s), e
          }
        },
        9277: (e, t, n) => {
          var r = n(8240),
            o = n(930),
            i = n(4489),
            a = r(Function.toString)
          o(i.inspectSource) ||
            (i.inspectSource = function (e) {
              return a(e)
            }),
            (e.exports = i.inspectSource)
        },
        2423: (e, t, n) => {
          var r = n(1695),
            o = n(8240),
            i = n(7153),
            a = n(8759),
            s = n(9606),
            c = n(7826).f,
            l = n(62),
            u = n(3226),
            p = n(3813),
            f = n(5422),
            d = n(6910),
            v = !1,
            y = f('meta'),
            m = 0,
            h = function (e) {
              c(e, y, { value: { objectID: 'O' + m++, weakData: {} } })
            },
            g = (e.exports = {
              enable: function () {
                ;(g.enable = function () {}), (v = !0)
                var e = l.f,
                  t = o([].splice),
                  n = {}
                ;(n[y] = 1),
                  e(n).length &&
                    ((l.f = function (n) {
                      for (var r = e(n), o = 0, i = r.length; o < i; o++)
                        if (r[o] === y) {
                          t(r, o, 1)
                          break
                        }
                      return r
                    }),
                    r({ target: 'Object', stat: !0, forced: !0 }, { getOwnPropertyNames: u.f }))
              },
              fastKey: function (e, t) {
                if (!a(e)) return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e
                if (!s(e, y)) {
                  if (!p(e)) return 'F'
                  if (!t) return 'E'
                  h(e)
                }
                return e[y].objectID
              },
              getWeakData: function (e, t) {
                if (!s(e, y)) {
                  if (!p(e)) return !0
                  if (!t) return !1
                  h(e)
                }
                return e[y].weakData
              },
              onFreeze: function (e) {
                return d && v && p(e) && !s(e, y) && h(e), e
              },
            })
          i[y] = !0
        },
        3278: (e, t, n) => {
          var r,
            o,
            i,
            a = n(9316),
            s = n(2086),
            c = n(8240),
            l = n(8759),
            u = n(2585),
            p = n(9606),
            f = n(4489),
            d = n(8944),
            v = n(7153),
            y = 'Object already initialized',
            m = s.TypeError,
            h = s.WeakMap
          if (a || f.state) {
            var g = f.state || (f.state = new h()),
              b = c(g.get),
              _ = c(g.has),
              k = c(g.set)
            ;(r = function (e, t) {
              if (_(g, e)) throw new m(y)
              return (t.facade = e), k(g, e, t), t
            }),
              (o = function (e) {
                return b(g, e) || {}
              }),
              (i = function (e) {
                return _(g, e)
              })
          } else {
            var w = d('state')
            ;(v[w] = !0),
              (r = function (e, t) {
                if (p(e, w)) throw new m(y)
                return (t.facade = e), u(e, w, t), t
              }),
              (o = function (e) {
                return p(e, w) ? e[w] : {}
              }),
              (i = function (e) {
                return p(e, w)
              })
          }
          e.exports = {
            set: r,
            get: o,
            has: i,
            enforce: function (e) {
              return i(e) ? o(e) : r(e, {})
            },
            getterFor: function (e) {
              return function (t) {
                var n
                if (!l(t) || (n = o(t)).type !== e) throw m('Incompatible receiver, ' + e + ' required')
                return n
              }
            },
          }
        },
        2814: (e, t, n) => {
          var r = n(211),
            o = n(7719),
            i = r('iterator'),
            a = Array.prototype
          e.exports = function (e) {
            return void 0 !== e && (o.Array === e || a[i] === e)
          }
        },
        6526: (e, t, n) => {
          var r = n(2306)
          e.exports =
            Array.isArray ||
            function (e) {
              return 'Array' == r(e)
            }
        },
        930: (e) => {
          e.exports = function (e) {
            return 'function' == typeof e
          }
        },
        1956: (e, t, n) => {
          var r = n(8240),
            o = n(3677),
            i = n(930),
            a = n(375),
            s = n(563),
            c = n(9277),
            l = function () {},
            u = [],
            p = s('Reflect', 'construct'),
            f = /^\s*(?:class|function)\b/,
            d = r(f.exec),
            v = !f.exec(l),
            y = function (e) {
              if (!i(e)) return !1
              try {
                return p(l, u, e), !0
              } catch (e) {
                return !1
              }
            },
            m = function (e) {
              if (!i(e)) return !1
              switch (a(e)) {
                case 'AsyncFunction':
                case 'GeneratorFunction':
                case 'AsyncGeneratorFunction':
                  return !1
              }
              try {
                return v || !!d(f, c(e))
              } catch (e) {
                return !0
              }
            }
          ;(m.sham = !0),
            (e.exports =
              !p ||
              o(function () {
                var e
                return (
                  y(y.call) ||
                  !y(Object) ||
                  !y(function () {
                    e = !0
                  }) ||
                  e
                )
              })
                ? m
                : y)
        },
        7189: (e, t, n) => {
          var r = n(3677),
            o = n(930),
            i = /#|\.prototype\./,
            a = function (e, t) {
              var n = c[s(e)]
              return n == u || (n != l && (o(t) ? r(t) : !!t))
            },
            s = (a.normalize = function (e) {
              return String(e).replace(i, '.').toLowerCase()
            }),
            c = (a.data = {}),
            l = (a.NATIVE = 'N'),
            u = (a.POLYFILL = 'P')
          e.exports = a
        },
        8759: (e, t, n) => {
          var r = n(930)
          e.exports = function (e) {
            return 'object' == typeof e ? null !== e : r(e)
          }
        },
        3296: (e) => {
          e.exports = !1
        },
        7994: (e, t, n) => {
          var r = n(8759),
            o = n(2306),
            i = n(211)('match')
          e.exports = function (e) {
            var t
            return r(e) && (void 0 !== (t = e[i]) ? !!t : 'RegExp' == o(e))
          }
        },
        2071: (e, t, n) => {
          var r = n(2086),
            o = n(563),
            i = n(930),
            a = n(5516),
            s = n(1876),
            c = r.Object
          e.exports = s
            ? function (e) {
                return 'symbol' == typeof e
              }
            : function (e) {
                var t = o('Symbol')
                return i(t) && a(t.prototype, c(e))
              }
        },
        4722: (e, t, n) => {
          var r = n(2086),
            o = n(8516),
            i = n(9413),
            a = n(6112),
            s = n(9268),
            c = n(2814),
            l = n(2871),
            u = n(5516),
            p = n(3546),
            f = n(1667),
            d = n(6737),
            v = r.TypeError,
            y = function (e, t) {
              ;(this.stopped = e), (this.result = t)
            },
            m = y.prototype
          e.exports = function (e, t, n) {
            var r,
              h,
              g,
              b,
              _,
              k,
              w,
              x = n && n.that,
              j = !(!n || !n.AS_ENTRIES),
              O = !(!n || !n.IS_ITERATOR),
              S = !(!n || !n.INTERRUPTED),
              P = o(t, x),
              A = function (e) {
                return r && d(r, 'normal', e), new y(!0, e)
              },
              z = function (e) {
                return j ? (a(e), S ? P(e[0], e[1], A) : P(e[0], e[1])) : S ? P(e, A) : P(e)
              }
            if (O) r = e
            else {
              if (!(h = f(e))) throw v(s(e) + ' is not iterable')
              if (c(h)) {
                for (g = 0, b = l(e); b > g; g++) if ((_ = z(e[g])) && u(m, _)) return _
                return new y(!1)
              }
              r = p(e, h)
            }
            for (k = r.next; !(w = i(k, r)).done; ) {
              try {
                _ = z(w.value)
              } catch (e) {
                d(r, 'throw', e)
              }
              if ('object' == typeof _ && _ && u(m, _)) return _
            }
            return new y(!1)
          }
        },
        6737: (e, t, n) => {
          var r = n(9413),
            o = n(6112),
            i = n(2964)
          e.exports = function (e, t, n) {
            var a, s
            o(e)
            try {
              if (!(a = i(e, 'return'))) {
                if ('throw' === t) throw n
                return n
              }
              a = r(a, e)
            } catch (e) {
              ;(s = !0), (a = e)
            }
            if ('throw' === t) throw n
            if (s) throw a
            return o(a), n
          }
        },
        3083: (e, t, n) => {
          'use strict'
          var r,
            o,
            i,
            a = n(3677),
            s = n(930),
            c = n(4710),
            l = n(2130),
            u = n(1007),
            p = n(211),
            f = n(3296),
            d = p('iterator'),
            v = !1
          ;[].keys && ('next' in (i = [].keys()) ? (o = l(l(i))) !== Object.prototype && (r = o) : (v = !0)),
            null == r ||
            a(function () {
              var e = {}
              return r[d].call(e) !== e
            })
              ? (r = {})
              : f && (r = c(r)),
            s(r[d]) ||
              u(r, d, function () {
                return this
              }),
            (e.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: v })
        },
        7719: (e) => {
          e.exports = {}
        },
        2871: (e, t, n) => {
          var r = n(4005)
          e.exports = function (e) {
            return r(e.length)
          }
        },
        3173: (e, t, n) => {
          var r,
            o,
            i,
            a,
            s,
            c,
            l,
            u,
            p = n(2086),
            f = n(8516),
            d = n(4399).f,
            v = n(4953).set,
            y = n(4344),
            m = n(1848),
            h = n(4928),
            g = n(1801),
            b = p.MutationObserver || p.WebKitMutationObserver,
            _ = p.document,
            k = p.process,
            w = p.Promise,
            x = d(p, 'queueMicrotask'),
            j = x && x.value
          j ||
            ((r = function () {
              var e, t
              for (g && (e = k.domain) && e.exit(); o; ) {
                ;(t = o.fn), (o = o.next)
                try {
                  t()
                } catch (e) {
                  throw (o ? a() : (i = void 0), e)
                }
              }
              ;(i = void 0), e && e.enter()
            }),
            y || g || h || !b || !_
              ? !m && w && w.resolve
                ? (((l = w.resolve(void 0)).constructor = w),
                  (u = f(l.then, l)),
                  (a = function () {
                    u(r)
                  }))
                : g
                ? (a = function () {
                    k.nextTick(r)
                  })
                : ((v = f(v, p)),
                  (a = function () {
                    v(r)
                  }))
              : ((s = !0),
                (c = _.createTextNode('')),
                new b(r).observe(c, { characterData: !0 }),
                (a = function () {
                  c.data = s = !s
                }))),
            (e.exports =
              j ||
              function (e) {
                var t = { fn: e, next: void 0 }
                i && (i.next = t), o || ((o = t), a()), (i = t)
              })
        },
        8109: (e, t, n) => {
          var r = n(2086)
          e.exports = r.Promise
        },
        3193: (e, t, n) => {
          var r = n(1448),
            o = n(3677)
          e.exports =
            !!Object.getOwnPropertySymbols &&
            !o(function () {
              var e = Symbol()
              return !String(e) || !(Object(e) instanceof Symbol) || (!Symbol.sham && r && r < 41)
            })
        },
        9316: (e, t, n) => {
          var r = n(2086),
            o = n(930),
            i = n(9277),
            a = r.WeakMap
          e.exports = o(a) && /native code/.test(i(a))
        },
        8722: (e, t, n) => {
          'use strict'
          var r = n(5089),
            o = function (e) {
              var t, n
              ;(this.promise = new e(function (e, r) {
                if (void 0 !== t || void 0 !== n) throw TypeError('Bad Promise constructor')
                ;(t = e), (n = r)
              })),
                (this.resolve = r(t)),
                (this.reject = r(n))
            }
          e.exports.f = function (e) {
            return new o(e)
          }
        },
        7725: (e, t, n) => {
          var r = n(2086),
            o = n(7994),
            i = r.TypeError
          e.exports = function (e) {
            if (o(e)) throw i("The method doesn't accept regular expressions")
            return e
          }
        },
        2194: (e, t, n) => {
          var r = n(2086),
            o = n(3677),
            i = n(8240),
            a = n(4059),
            s = n(4080).trim,
            c = n(9439),
            l = r.parseInt,
            u = r.Symbol,
            p = u && u.iterator,
            f = /^[+-]?0x/i,
            d = i(f.exec),
            v =
              8 !== l(c + '08') ||
              22 !== l(c + '0x16') ||
              (p &&
                !o(function () {
                  l(Object(p))
                }))
          e.exports = v
            ? function (e, t) {
                var n = s(a(e))
                return l(n, t >>> 0 || (d(f, n) ? 16 : 10))
              }
            : l
        },
        8675: (e, t, n) => {
          'use strict'
          var r = n(5283),
            o = n(8240),
            i = n(9413),
            a = n(3677),
            s = n(8779),
            c = n(6952),
            l = n(7446),
            u = n(3060),
            p = n(5974),
            f = Object.assign,
            d = Object.defineProperty,
            v = o([].concat)
          e.exports =
            !f ||
            a(function () {
              if (
                r &&
                1 !==
                  f(
                    { b: 1 },
                    f(
                      d({}, 'a', {
                        enumerable: !0,
                        get: function () {
                          d(this, 'b', { value: 3, enumerable: !1 })
                        },
                      }),
                      { b: 2 }
                    )
                  ).b
              )
                return !0
              var e = {},
                t = {},
                n = Symbol(),
                o = 'abcdefghijklmnopqrst'
              return (
                (e[n] = 7),
                o.split('').forEach(function (e) {
                  t[e] = e
                }),
                7 != f({}, e)[n] || s(f({}, t)).join('') != o
              )
            })
              ? function (e, t) {
                  for (var n = u(e), o = arguments.length, a = 1, f = c.f, d = l.f; o > a; )
                    for (var y, m = p(arguments[a++]), h = f ? v(s(m), f(m)) : s(m), g = h.length, b = 0; g > b; )
                      (y = h[b++]), (r && !i(d, m, y)) || (n[y] = m[y])
                  return n
                }
              : f
        },
        4710: (e, t, n) => {
          var r,
            o = n(6112),
            i = n(7711),
            a = n(8684),
            s = n(7153),
            c = n(5963),
            l = n(821),
            u = n(8944)('IE_PROTO'),
            p = function () {},
            f = function (e) {
              return '<script>' + e + '</script>'
            },
            d = function (e) {
              e.write(f('')), e.close()
              var t = e.parentWindow.Object
              return (e = null), t
            },
            v = function () {
              try {
                r = new ActiveXObject('htmlfile')
              } catch (e) {}
              var e, t
              v =
                'undefined' != typeof document
                  ? document.domain && r
                    ? d(r)
                    : (((t = l('iframe')).style.display = 'none'),
                      c.appendChild(t),
                      (t.src = String('javascript:')),
                      (e = t.contentWindow.document).open(),
                      e.write(f('document.F=Object')),
                      e.close(),
                      e.F)
                  : d(r)
              for (var n = a.length; n--; ) delete v.prototype[a[n]]
              return v()
            }
          ;(s[u] = !0),
            (e.exports =
              Object.create ||
              function (e, t) {
                var n
                return (
                  null !== e ? ((p.prototype = o(e)), (n = new p()), (p.prototype = null), (n[u] = e)) : (n = v()),
                  void 0 === t ? n : i.f(n, t)
                )
              })
        },
        7711: (e, t, n) => {
          var r = n(5283),
            o = n(8202),
            i = n(7826),
            a = n(6112),
            s = n(4088),
            c = n(8779)
          t.f =
            r && !o
              ? Object.defineProperties
              : function (e, t) {
                  a(e)
                  for (var n, r = s(t), o = c(t), l = o.length, u = 0; l > u; ) i.f(e, (n = o[u++]), r[n])
                  return e
                }
        },
        7826: (e, t, n) => {
          var r = n(2086),
            o = n(5283),
            i = n(6761),
            a = n(8202),
            s = n(6112),
            c = n(2258),
            l = r.TypeError,
            u = Object.defineProperty,
            p = Object.getOwnPropertyDescriptor
          t.f = o
            ? a
              ? function (e, t, n) {
                  if (
                    (s(e),
                    (t = c(t)),
                    s(n),
                    'function' == typeof e && 'prototype' === t && 'value' in n && 'writable' in n && !n.writable)
                  ) {
                    var r = p(e, t)
                    r &&
                      r.writable &&
                      ((e[t] = n.value),
                      (n = {
                        configurable: 'configurable' in n ? n.configurable : r.configurable,
                        enumerable: 'enumerable' in n ? n.enumerable : r.enumerable,
                        writable: !1,
                      }))
                  }
                  return u(e, t, n)
                }
              : u
            : function (e, t, n) {
                if ((s(e), (t = c(t)), s(n), i))
                  try {
                    return u(e, t, n)
                  } catch (e) {}
                if ('get' in n || 'set' in n) throw l('Accessors not supported')
                return 'value' in n && (e[t] = n.value), e
              }
        },
        4399: (e, t, n) => {
          var r = n(5283),
            o = n(9413),
            i = n(7446),
            a = n(5736),
            s = n(4088),
            c = n(2258),
            l = n(9606),
            u = n(6761),
            p = Object.getOwnPropertyDescriptor
          t.f = r
            ? p
            : function (e, t) {
                if (((e = s(e)), (t = c(t)), u))
                  try {
                    return p(e, t)
                  } catch (e) {}
                if (l(e, t)) return a(!o(i.f, e, t), e[t])
              }
        },
        3226: (e, t, n) => {
          var r = n(2306),
            o = n(4088),
            i = n(62).f,
            a = n(3329),
            s =
              'object' == typeof window && window && Object.getOwnPropertyNames
                ? Object.getOwnPropertyNames(window)
                : []
          e.exports.f = function (e) {
            return s && 'Window' == r(e)
              ? (function (e) {
                  try {
                    return i(e)
                  } catch (e) {
                    return a(s)
                  }
                })(e)
              : i(o(e))
          }
        },
        62: (e, t, n) => {
          var r = n(1352),
            o = n(8684).concat('length', 'prototype')
          t.f =
            Object.getOwnPropertyNames ||
            function (e) {
              return r(e, o)
            }
        },
        6952: (e, t) => {
          t.f = Object.getOwnPropertySymbols
        },
        2130: (e, t, n) => {
          var r = n(2086),
            o = n(9606),
            i = n(930),
            a = n(3060),
            s = n(8944),
            c = n(7209),
            l = s('IE_PROTO'),
            u = r.Object,
            p = u.prototype
          e.exports = c
            ? u.getPrototypeOf
            : function (e) {
                var t = a(e)
                if (o(t, l)) return t[l]
                var n = t.constructor
                return i(n) && t instanceof n ? n.prototype : t instanceof u ? p : null
              }
        },
        3813: (e, t, n) => {
          var r = n(3677),
            o = n(8759),
            i = n(2306),
            a = n(1005),
            s = Object.isExtensible,
            c = r(function () {
              s(1)
            })
          e.exports =
            c || a
              ? function (e) {
                  return !!o(e) && (!a || 'ArrayBuffer' != i(e)) && (!s || s(e))
                }
              : s
        },
        5516: (e, t, n) => {
          var r = n(8240)
          e.exports = r({}.isPrototypeOf)
        },
        1352: (e, t, n) => {
          var r = n(8240),
            o = n(9606),
            i = n(4088),
            a = n(6198).indexOf,
            s = n(7153),
            c = r([].push)
          e.exports = function (e, t) {
            var n,
              r = i(e),
              l = 0,
              u = []
            for (n in r) !o(s, n) && o(r, n) && c(u, n)
            for (; t.length > l; ) o(r, (n = t[l++])) && (~a(u, n) || c(u, n))
            return u
          }
        },
        8779: (e, t, n) => {
          var r = n(1352),
            o = n(8684)
          e.exports =
            Object.keys ||
            function (e) {
              return r(e, o)
            }
        },
        7446: (e, t) => {
          'use strict'
          var n = {}.propertyIsEnumerable,
            r = Object.getOwnPropertyDescriptor,
            o = r && !n.call({ 1: 2 }, 1)
          t.f = o
            ? function (e) {
                var t = r(this, e)
                return !!t && t.enumerable
              }
            : n
        },
        7530: (e, t, n) => {
          var r = n(8240),
            o = n(6112),
            i = n(1378)
          e.exports =
            Object.setPrototypeOf ||
            ('__proto__' in {}
              ? (function () {
                  var e,
                    t = !1,
                    n = {}
                  try {
                    ;(e = r(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set))(n, []),
                      (t = n instanceof Array)
                  } catch (e) {}
                  return function (n, r) {
                    return o(n), i(r), t ? e(n, r) : (n.__proto__ = r), n
                  }
                })()
              : void 0)
        },
        4863: (e, t, n) => {
          var r = n(5283),
            o = n(8240),
            i = n(8779),
            a = n(4088),
            s = o(n(7446).f),
            c = o([].push),
            l = function (e) {
              return function (t) {
                for (var n, o = a(t), l = i(o), u = l.length, p = 0, f = []; u > p; )
                  (n = l[p++]), (r && !s(o, n)) || c(f, e ? [n, o[n]] : o[n])
                return f
              }
            }
          e.exports = { entries: l(!0), values: l(!1) }
        },
        999: (e, t, n) => {
          'use strict'
          var r = n(2371),
            o = n(375)
          e.exports = r
            ? {}.toString
            : function () {
                return '[object ' + o(this) + ']'
              }
        },
        7999: (e, t, n) => {
          var r = n(2086),
            o = n(9413),
            i = n(930),
            a = n(8759),
            s = r.TypeError
          e.exports = function (e, t) {
            var n, r
            if ('string' === t && i((n = e.toString)) && !a((r = o(n, e)))) return r
            if (i((n = e.valueOf)) && !a((r = o(n, e)))) return r
            if ('string' !== t && i((n = e.toString)) && !a((r = o(n, e)))) return r
            throw s("Can't convert object to primitive value")
          }
        },
        6095: (e, t, n) => {
          var r = n(563),
            o = n(8240),
            i = n(62),
            a = n(6952),
            s = n(6112),
            c = o([].concat)
          e.exports =
            r('Reflect', 'ownKeys') ||
            function (e) {
              var t = i.f(s(e)),
                n = a.f
              return n ? c(t, n(e)) : t
            }
        },
        9775: (e, t, n) => {
          var r = n(2086)
          e.exports = r
        },
        4522: (e) => {
          e.exports = function (e) {
            try {
              return { error: !1, value: e() }
            } catch (e) {
              return { error: !0, value: e }
            }
          }
        },
        880: (e, t, n) => {
          var r = n(6112),
            o = n(8759),
            i = n(8722)
          e.exports = function (e, t) {
            if ((r(e), o(t) && t.constructor === e)) return t
            var n = i.f(e)
            return (0, n.resolve)(t), n.promise
          }
        },
        7733: (e) => {
          var t = function () {
            ;(this.head = null), (this.tail = null)
          }
          ;(t.prototype = {
            add: function (e) {
              var t = { item: e, next: null }
              this.head ? (this.tail.next = t) : (this.head = t), (this.tail = t)
            },
            get: function () {
              var e = this.head
              if (e) return (this.head = e.next), this.tail === e && (this.tail = null), e.item
            },
          }),
            (e.exports = t)
        },
        9431: (e, t, n) => {
          var r = n(1007)
          e.exports = function (e, t, n) {
            for (var o in t) r(e, o, t[o], n)
            return e
          }
        },
        1007: (e, t, n) => {
          var r = n(2086),
            o = n(930),
            i = n(9606),
            a = n(2585),
            s = n(3648),
            c = n(9277),
            l = n(3278),
            u = n(4398).CONFIGURABLE,
            p = l.get,
            f = l.enforce,
            d = String(String).split('String')
          ;(e.exports = function (e, t, n, c) {
            var l,
              p = !!c && !!c.unsafe,
              v = !!c && !!c.enumerable,
              y = !!c && !!c.noTargetGet,
              m = c && void 0 !== c.name ? c.name : t
            o(n) &&
              ('Symbol(' === String(m).slice(0, 7) && (m = '[' + String(m).replace(/^Symbol\(([^)]*)\)/, '$1') + ']'),
              (!i(n, 'name') || (u && n.name !== m)) && a(n, 'name', m),
              (l = f(n)).source || (l.source = d.join('string' == typeof m ? m : ''))),
              e !== r
                ? (p ? !y && e[t] && (v = !0) : delete e[t], v ? (e[t] = n) : a(e, t, n))
                : v
                ? (e[t] = n)
                : s(t, n)
          })(Function.prototype, 'toString', function () {
            return (o(this) && p(this).source) || c(this)
          })
        },
        1189: (e, t, n) => {
          var r = n(2086),
            o = n(9413),
            i = n(6112),
            a = n(930),
            s = n(2306),
            c = n(4861),
            l = r.TypeError
          e.exports = function (e, t) {
            var n = e.exec
            if (a(n)) {
              var r = o(n, e, t)
              return null !== r && i(r), r
            }
            if ('RegExp' === s(e)) return o(c, e, t)
            throw l('RegExp#exec called on incompatible receiver')
          }
        },
        4861: (e, t, n) => {
          'use strict'
          var r,
            o,
            i = n(9413),
            a = n(8240),
            s = n(4059),
            c = n(4276),
            l = n(4930),
            u = n(9197),
            p = n(4710),
            f = n(3278).get,
            d = n(2582),
            v = n(2910),
            y = u('native-string-replace', String.prototype.replace),
            m = RegExp.prototype.exec,
            h = m,
            g = a(''.charAt),
            b = a(''.indexOf),
            _ = a(''.replace),
            k = a(''.slice),
            w = ((o = /b*/g), i(m, (r = /a/), 'a'), i(m, o, 'a'), 0 !== r.lastIndex || 0 !== o.lastIndex),
            x = l.BROKEN_CARET,
            j = void 0 !== /()??/.exec('')[1]
          ;(w || j || x || d || v) &&
            (h = function (e) {
              var t,
                n,
                r,
                o,
                a,
                l,
                u,
                d = this,
                v = f(d),
                O = s(e),
                S = v.raw
              if (S) return (S.lastIndex = d.lastIndex), (t = i(h, S, O)), (d.lastIndex = S.lastIndex), t
              var P = v.groups,
                A = x && d.sticky,
                z = i(c, d),
                E = d.source,
                C = 0,
                T = O
              if (
                (A &&
                  ((z = _(z, 'y', '')),
                  -1 === b(z, 'g') && (z += 'g'),
                  (T = k(O, d.lastIndex)),
                  d.lastIndex > 0 &&
                    (!d.multiline || (d.multiline && '\n' !== g(O, d.lastIndex - 1))) &&
                    ((E = '(?: ' + E + ')'), (T = ' ' + T), C++),
                  (n = new RegExp('^(?:' + E + ')', z))),
                j && (n = new RegExp('^' + E + '$(?!\\s)', z)),
                w && (r = d.lastIndex),
                (o = i(m, A ? n : d, T)),
                A
                  ? o
                    ? ((o.input = k(o.input, C)),
                      (o[0] = k(o[0], C)),
                      (o.index = d.lastIndex),
                      (d.lastIndex += o[0].length))
                    : (d.lastIndex = 0)
                  : w && o && (d.lastIndex = d.global ? o.index + o[0].length : r),
                j &&
                  o &&
                  o.length > 1 &&
                  i(y, o[0], n, function () {
                    for (a = 1; a < arguments.length - 2; a++) void 0 === arguments[a] && (o[a] = void 0)
                  }),
                o && P)
              )
                for (o.groups = l = p(null), a = 0; a < P.length; a++) l[(u = P[a])[0]] = o[u[1]]
              return o
            }),
            (e.exports = h)
        },
        4276: (e, t, n) => {
          'use strict'
          var r = n(6112)
          e.exports = function () {
            var e = r(this),
              t = ''
            return (
              e.global && (t += 'g'),
              e.ignoreCase && (t += 'i'),
              e.multiline && (t += 'm'),
              e.dotAll && (t += 's'),
              e.unicode && (t += 'u'),
              e.sticky && (t += 'y'),
              t
            )
          }
        },
        4930: (e, t, n) => {
          var r = n(3677),
            o = n(2086).RegExp,
            i = r(function () {
              var e = o('a', 'y')
              return (e.lastIndex = 2), null != e.exec('abcd')
            }),
            a =
              i ||
              r(function () {
                return !o('a', 'y').sticky
              }),
            s =
              i ||
              r(function () {
                var e = o('^r', 'gy')
                return (e.lastIndex = 2), null != e.exec('str')
              })
          e.exports = { BROKEN_CARET: s, MISSED_STICKY: a, UNSUPPORTED_Y: i }
        },
        2582: (e, t, n) => {
          var r = n(3677),
            o = n(2086).RegExp
          e.exports = r(function () {
            var e = o('.', 's')
            return !(e.dotAll && e.exec('\n') && 's' === e.flags)
          })
        },
        2910: (e, t, n) => {
          var r = n(3677),
            o = n(2086).RegExp
          e.exports = r(function () {
            var e = o('(?<a>b)', 'g')
            return 'b' !== e.exec('b').groups.a || 'bc' !== 'b'.replace(e, '$<a>c')
          })
        },
        9586: (e, t, n) => {
          var r = n(2086).TypeError
          e.exports = function (e) {
            if (null == e) throw r("Can't call method on " + e)
            return e
          }
        },
        3648: (e, t, n) => {
          var r = n(2086),
            o = Object.defineProperty
          e.exports = function (e, t) {
            try {
              o(r, e, { value: t, configurable: !0, writable: !0 })
            } catch (n) {
              r[e] = t
            }
            return t
          }
        },
        7420: (e, t, n) => {
          'use strict'
          var r = n(563),
            o = n(7826),
            i = n(211),
            a = n(5283),
            s = i('species')
          e.exports = function (e) {
            var t = r(e),
              n = o.f
            a &&
              t &&
              !t[s] &&
              n(t, s, {
                configurable: !0,
                get: function () {
                  return this
                },
              })
          }
        },
        914: (e, t, n) => {
          var r = n(7826).f,
            o = n(9606),
            i = n(211)('toStringTag')
          e.exports = function (e, t, n) {
            e && !n && (e = e.prototype), e && !o(e, i) && r(e, i, { configurable: !0, value: t })
          }
        },
        8944: (e, t, n) => {
          var r = n(9197),
            o = n(5422),
            i = r('keys')
          e.exports = function (e) {
            return i[e] || (i[e] = o(e))
          }
        },
        4489: (e, t, n) => {
          var r = n(2086),
            o = n(3648),
            i = '__core-js_shared__',
            a = r[i] || o(i, {})
          e.exports = a
        },
        9197: (e, t, n) => {
          var r = n(3296),
            o = n(4489)
          ;(e.exports = function (e, t) {
            return o[e] || (o[e] = void 0 !== t ? t : {})
          })('versions', []).push({
            version: '3.21.1',
            mode: r ? 'pure' : 'global',
            copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
            license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
            source: 'https://github.com/zloirock/core-js',
          })
        },
        8515: (e, t, n) => {
          var r = n(6112),
            o = n(1449),
            i = n(211)('species')
          e.exports = function (e, t) {
            var n,
              a = r(e).constructor
            return void 0 === a || null == (n = r(a)[i]) ? t : o(n)
          }
        },
        3448: (e, t, n) => {
          var r = n(8240),
            o = n(9502),
            i = n(4059),
            a = n(9586),
            s = r(''.charAt),
            c = r(''.charCodeAt),
            l = r(''.slice),
            u = function (e) {
              return function (t, n) {
                var r,
                  u,
                  p = i(a(t)),
                  f = o(n),
                  d = p.length
                return f < 0 || f >= d
                  ? e
                    ? ''
                    : void 0
                  : (r = c(p, f)) < 55296 || r > 56319 || f + 1 === d || (u = c(p, f + 1)) < 56320 || u > 57343
                  ? e
                    ? s(p, f)
                    : r
                  : e
                  ? l(p, f, f + 2)
                  : u - 56320 + ((r - 55296) << 10) + 65536
              }
            }
          e.exports = { codeAt: u(!1), charAt: u(!0) }
        },
        4274: (e, t, n) => {
          var r = n(4398).PROPER,
            o = n(3677),
            i = n(9439)
          e.exports = function (e) {
            return o(function () {
              return !!i[e]() || '​᠎' !== '​᠎'[e]() || (r && i[e].name !== e)
            })
          }
        },
        4080: (e, t, n) => {
          var r = n(8240),
            o = n(9586),
            i = n(4059),
            a = n(9439),
            s = r(''.replace),
            c = '[' + a + ']',
            l = RegExp('^' + c + c + '*'),
            u = RegExp(c + c + '*$'),
            p = function (e) {
              return function (t) {
                var n = i(o(t))
                return 1 & e && (n = s(n, l, '')), 2 & e && (n = s(n, u, '')), n
              }
            }
          e.exports = { start: p(1), end: p(2), trim: p(3) }
        },
        4953: (e, t, n) => {
          var r,
            o,
            i,
            a,
            s = n(2086),
            c = n(7258),
            l = n(8516),
            u = n(930),
            p = n(9606),
            f = n(3677),
            d = n(5963),
            v = n(745),
            y = n(821),
            m = n(1635),
            h = n(4344),
            g = n(1801),
            b = s.setImmediate,
            _ = s.clearImmediate,
            k = s.process,
            w = s.Dispatch,
            x = s.Function,
            j = s.MessageChannel,
            O = s.String,
            S = 0,
            P = {}
          try {
            r = s.location
          } catch (e) {}
          var A = function (e) {
              if (p(P, e)) {
                var t = P[e]
                delete P[e], t()
              }
            },
            z = function (e) {
              return function () {
                A(e)
              }
            },
            E = function (e) {
              A(e.data)
            },
            C = function (e) {
              s.postMessage(O(e), r.protocol + '//' + r.host)
            }
          ;(b && _) ||
            ((b = function (e) {
              m(arguments.length, 1)
              var t = u(e) ? e : x(e),
                n = v(arguments, 1)
              return (
                (P[++S] = function () {
                  c(t, void 0, n)
                }),
                o(S),
                S
              )
            }),
            (_ = function (e) {
              delete P[e]
            }),
            g
              ? (o = function (e) {
                  k.nextTick(z(e))
                })
              : w && w.now
              ? (o = function (e) {
                  w.now(z(e))
                })
              : j && !h
              ? ((a = (i = new j()).port2), (i.port1.onmessage = E), (o = l(a.postMessage, a)))
              : s.addEventListener && u(s.postMessage) && !s.importScripts && r && 'file:' !== r.protocol && !f(C)
              ? ((o = C), s.addEventListener('message', E, !1))
              : (o =
                  'onreadystatechange' in y('script')
                    ? function (e) {
                        d.appendChild(y('script')).onreadystatechange = function () {
                          d.removeChild(this), A(e)
                        }
                      }
                    : function (e) {
                        setTimeout(z(e), 0)
                      })),
            (e.exports = { set: b, clear: _ })
        },
        7740: (e, t, n) => {
          var r = n(9502),
            o = Math.max,
            i = Math.min
          e.exports = function (e, t) {
            var n = r(e)
            return n < 0 ? o(n + t, 0) : i(n, t)
          }
        },
        4088: (e, t, n) => {
          var r = n(5974),
            o = n(9586)
          e.exports = function (e) {
            return r(o(e))
          }
        },
        9502: (e) => {
          var t = Math.ceil,
            n = Math.floor
          e.exports = function (e) {
            var r = +e
            return r != r || 0 === r ? 0 : (r > 0 ? n : t)(r)
          }
        },
        4005: (e, t, n) => {
          var r = n(9502),
            o = Math.min
          e.exports = function (e) {
            return e > 0 ? o(r(e), 9007199254740991) : 0
          }
        },
        3060: (e, t, n) => {
          var r = n(2086),
            o = n(9586),
            i = r.Object
          e.exports = function (e) {
            return i(o(e))
          }
        },
        1288: (e, t, n) => {
          var r = n(2086),
            o = n(9413),
            i = n(8759),
            a = n(2071),
            s = n(2964),
            c = n(7999),
            l = n(211),
            u = r.TypeError,
            p = l('toPrimitive')
          e.exports = function (e, t) {
            if (!i(e) || a(e)) return e
            var n,
              r = s(e, p)
            if (r) {
              if ((void 0 === t && (t = 'default'), (n = o(r, e, t)), !i(n) || a(n))) return n
              throw u("Can't convert object to primitive value")
            }
            return void 0 === t && (t = 'number'), c(e, t)
          }
        },
        2258: (e, t, n) => {
          var r = n(1288),
            o = n(2071)
          e.exports = function (e) {
            var t = r(e, 'string')
            return o(t) ? t : t + ''
          }
        },
        2371: (e, t, n) => {
          var r = {}
          ;(r[n(211)('toStringTag')] = 'z'), (e.exports = '[object z]' === String(r))
        },
        4059: (e, t, n) => {
          var r = n(2086),
            o = n(375),
            i = r.String
          e.exports = function (e) {
            if ('Symbol' === o(e)) throw TypeError('Cannot convert a Symbol value to a string')
            return i(e)
          }
        },
        9268: (e, t, n) => {
          var r = n(2086).String
          e.exports = function (e) {
            try {
              return r(e)
            } catch (e) {
              return 'Object'
            }
          }
        },
        5422: (e, t, n) => {
          var r = n(8240),
            o = 0,
            i = Math.random(),
            a = r((1).toString)
          e.exports = function (e) {
            return 'Symbol(' + (void 0 === e ? '' : e) + ')_' + a(++o + i, 36)
          }
        },
        1876: (e, t, n) => {
          var r = n(3193)
          e.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator
        },
        8202: (e, t, n) => {
          var r = n(5283),
            o = n(3677)
          e.exports =
            r &&
            o(function () {
              return 42 != Object.defineProperty(function () {}, 'prototype', { value: 42, writable: !1 }).prototype
            })
        },
        1635: (e, t, n) => {
          var r = n(2086).TypeError
          e.exports = function (e, t) {
            if (e < t) throw r('Not enough arguments')
            return e
          }
        },
        9251: (e, t, n) => {
          var r = n(211)
          t.f = r
        },
        211: (e, t, n) => {
          var r = n(2086),
            o = n(9197),
            i = n(9606),
            a = n(5422),
            s = n(3193),
            c = n(1876),
            l = o('wks'),
            u = r.Symbol,
            p = u && u.for,
            f = c ? u : (u && u.withoutSetter) || a
          e.exports = function (e) {
            if (!i(l, e) || (!s && 'string' != typeof l[e])) {
              var t = 'Symbol.' + e
              s && i(u, e) ? (l[e] = u[e]) : (l[e] = c && p ? p(t) : f(t))
            }
            return l[e]
          }
        },
        9439: (e) => {
          e.exports = '\t\n\v\f\r                　\u2028\u2029\ufeff'
        },
        3938: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(2086),
            i = n(3677),
            a = n(6526),
            s = n(8759),
            c = n(3060),
            l = n(2871),
            u = n(9720),
            p = n(5574),
            f = n(9955),
            d = n(211),
            v = n(1448),
            y = d('isConcatSpreadable'),
            m = 9007199254740991,
            h = 'Maximum allowed index exceeded',
            g = o.TypeError,
            b =
              v >= 51 ||
              !i(function () {
                var e = []
                return (e[y] = !1), e.concat()[0] !== e
              }),
            _ = f('concat'),
            k = function (e) {
              if (!s(e)) return !1
              var t = e[y]
              return void 0 !== t ? !!t : a(e)
            }
          r(
            { target: 'Array', proto: !0, forced: !b || !_ },
            {
              concat: function (e) {
                var t,
                  n,
                  r,
                  o,
                  i,
                  a = c(this),
                  s = p(a, 0),
                  f = 0
                for (t = -1, r = arguments.length; t < r; t++)
                  if (k((i = -1 === t ? a : arguments[t]))) {
                    if (f + (o = l(i)) > m) throw g(h)
                    for (n = 0; n < o; n++, f++) n in i && u(s, f, i[n])
                  } else {
                    if (f >= m) throw g(h)
                    u(s, f++, i)
                  }
                return (s.length = f), s
              },
            }
          )
        },
        8010: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(8062).filter
          r(
            { target: 'Array', proto: !0, forced: !n(9955)('filter') },
            {
              filter: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
              },
            }
          )
        },
        2327: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(8062).find,
            i = n(8669),
            a = 'find',
            s = !0
          a in [] &&
            Array(1).find(function () {
              s = !1
            }),
            r(
              { target: 'Array', proto: !0, forced: s },
              {
                find: function (e) {
                  return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
                },
              }
            ),
            i(a)
        },
        5610: (e, t, n) => {
          var r = n(1695),
            o = n(1842)
          r(
            {
              target: 'Array',
              stat: !0,
              forced: !n(8939)(function (e) {
                Array.from(e)
              }),
            },
            { from: o }
          )
        },
        5623: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(6198).includes,
            i = n(8669)
          r(
            { target: 'Array', proto: !0 },
            {
              includes: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
              },
            }
          ),
            i('includes')
        },
        7471: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(8240),
            i = n(6198).indexOf,
            a = n(2802),
            s = o([].indexOf),
            c = !!s && 1 / s([1], 1, -0) < 0,
            l = a('indexOf')
          r(
            { target: 'Array', proto: !0, forced: c || !l },
            {
              indexOf: function (e) {
                var t = arguments.length > 1 ? arguments[1] : void 0
                return c ? s(this, e, t) || 0 : i(this, e, t)
              },
            }
          )
        },
        5769: (e, t, n) => {
          'use strict'
          var r = n(4088),
            o = n(8669),
            i = n(7719),
            a = n(3278),
            s = n(7826).f,
            c = n(8432),
            l = n(3296),
            u = n(5283),
            p = 'Array Iterator',
            f = a.set,
            d = a.getterFor(p)
          e.exports = c(
            Array,
            'Array',
            function (e, t) {
              f(this, { type: p, target: r(e), index: 0, kind: t })
            },
            function () {
              var e = d(this),
                t = e.target,
                n = e.kind,
                r = e.index++
              return !t || r >= t.length
                ? ((e.target = void 0), { value: void 0, done: !0 })
                : 'keys' == n
                ? { value: r, done: !1 }
                : 'values' == n
                ? { value: t[r], done: !1 }
                : { value: [r, t[r]], done: !1 }
            },
            'values'
          )
          var v = (i.Arguments = i.Array)
          if ((o('keys'), o('values'), o('entries'), !l && u && 'values' !== v.name))
            try {
              s(v, 'name', { value: 'values' })
            } catch (e) {}
        },
        5613: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(8240),
            i = n(5974),
            a = n(4088),
            s = n(2802),
            c = o([].join),
            l = i != Object,
            u = s('join', ',')
          r(
            { target: 'Array', proto: !0, forced: l || !u },
            {
              join: function (e) {
                return c(a(this), void 0 === e ? ',' : e)
              },
            }
          )
        },
        1013: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(8062).map
          r(
            { target: 'Array', proto: !0, forced: !n(9955)('map') },
            {
              map: function (e) {
                return o(this, e, arguments.length > 1 ? arguments[1] : void 0)
              },
            }
          )
        },
        2410: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(2086),
            i = n(6526),
            a = n(1956),
            s = n(8759),
            c = n(7740),
            l = n(2871),
            u = n(4088),
            p = n(9720),
            f = n(211),
            d = n(9955),
            v = n(745),
            y = d('slice'),
            m = f('species'),
            h = o.Array,
            g = Math.max
          r(
            { target: 'Array', proto: !0, forced: !y },
            {
              slice: function (e, t) {
                var n,
                  r,
                  o,
                  f = u(this),
                  d = l(f),
                  y = c(e, d),
                  b = c(void 0 === t ? d : t, d)
                if (
                  i(f) &&
                  ((n = f.constructor),
                  ((a(n) && (n === h || i(n.prototype))) || (s(n) && null === (n = n[m]))) && (n = void 0),
                  n === h || void 0 === n)
                )
                  return v(f, y, b)
                for (r = new (void 0 === n ? h : n)(g(b - y, 0)), o = 0; y < b; y++, o++) y in f && p(r, o, f[y])
                return (r.length = o), r
              },
            }
          )
        },
        9217: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(8240),
            i = n(5089),
            a = n(3060),
            s = n(2871),
            c = n(4059),
            l = n(3677),
            u = n(1147),
            p = n(2802),
            f = n(1799),
            d = n(4172),
            v = n(1448),
            y = n(9804),
            m = [],
            h = o(m.sort),
            g = o(m.push),
            b = l(function () {
              m.sort(void 0)
            }),
            _ = l(function () {
              m.sort(null)
            }),
            k = p('sort'),
            w = !l(function () {
              if (v) return v < 70
              if (!(f && f > 3)) {
                if (d) return !0
                if (y) return y < 603
                var e,
                  t,
                  n,
                  r,
                  o = ''
                for (e = 65; e < 76; e++) {
                  switch (((t = String.fromCharCode(e)), e)) {
                    case 66:
                    case 69:
                    case 70:
                    case 72:
                      n = 3
                      break
                    case 68:
                    case 71:
                      n = 4
                      break
                    default:
                      n = 2
                  }
                  for (r = 0; r < 47; r++) m.push({ k: t + r, v: n })
                }
                for (
                  m.sort(function (e, t) {
                    return t.v - e.v
                  }),
                    r = 0;
                  r < m.length;
                  r++
                )
                  (t = m[r].k.charAt(0)), o.charAt(o.length - 1) !== t && (o += t)
                return 'DGBEFHACIJK' !== o
              }
            })
          r(
            { target: 'Array', proto: !0, forced: b || !_ || !k || !w },
            {
              sort: function (e) {
                void 0 !== e && i(e)
                var t = a(this)
                if (w) return void 0 === e ? h(t) : h(t, e)
                var n,
                  r,
                  o = [],
                  l = s(t)
                for (r = 0; r < l; r++) r in t && g(o, t[r])
                for (
                  u(
                    o,
                    (function (e) {
                      return function (t, n) {
                        return void 0 === n
                          ? -1
                          : void 0 === t
                          ? 1
                          : void 0 !== e
                          ? +e(t, n) || 0
                          : c(t) > c(n)
                          ? 1
                          : -1
                      }
                    })(e)
                  ),
                    n = o.length,
                    r = 0;
                  r < n;

                )
                  t[r] = o[r++]
                for (; r < l; ) delete t[r++]
                return t
              },
            }
          )
        },
        3352: (e, t, n) => {
          var r = n(5283),
            o = n(4398).EXISTS,
            i = n(8240),
            a = n(7826).f,
            s = Function.prototype,
            c = i(s.toString),
            l = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
            u = i(l.exec)
          r &&
            !o &&
            a(s, 'name', {
              configurable: !0,
              get: function () {
                try {
                  return u(l, c(this))[1]
                } catch (e) {
                  return ''
                }
              },
            })
        },
        1484: (e, t, n) => {
          'use strict'
          n(4909)(
            'Map',
            function (e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : void 0)
              }
            },
            n(5204)
          )
        },
        8410: (e, t, n) => {
          var r = n(1695),
            o = n(8675)
          r({ target: 'Object', stat: !0, forced: Object.assign !== o }, { assign: o })
        },
        2699: (e, t, n) => {
          var r = n(1695),
            o = n(5283),
            i = n(7711).f
          r({ target: 'Object', stat: !0, forced: Object.defineProperties !== i, sham: !o }, { defineProperties: i })
        },
        9785: (e, t, n) => {
          var r = n(1695),
            o = n(5283),
            i = n(7826).f
          r({ target: 'Object', stat: !0, forced: Object.defineProperty !== i, sham: !o }, { defineProperty: i })
        },
        2595: (e, t, n) => {
          var r = n(1695),
            o = n(4863).entries
          r(
            { target: 'Object', stat: !0 },
            {
              entries: function (e) {
                return o(e)
              },
            }
          )
        },
        252: (e, t, n) => {
          var r = n(1695),
            o = n(3677),
            i = n(4088),
            a = n(4399).f,
            s = n(5283),
            c = o(function () {
              a(1)
            })
          r(
            { target: 'Object', stat: !0, forced: !s || c, sham: !s },
            {
              getOwnPropertyDescriptor: function (e, t) {
                return a(i(e), t)
              },
            }
          )
        },
        4009: (e, t, n) => {
          var r = n(1695),
            o = n(5283),
            i = n(6095),
            a = n(4088),
            s = n(4399),
            c = n(9720)
          r(
            { target: 'Object', stat: !0, sham: !o },
            {
              getOwnPropertyDescriptors: function (e) {
                for (var t, n, r = a(e), o = s.f, l = i(r), u = {}, p = 0; l.length > p; )
                  void 0 !== (n = o(r, (t = l[p++]))) && c(u, t, n)
                return u
              },
            }
          )
        },
        2274: (e, t, n) => {
          var r = n(1695),
            o = n(3677),
            i = n(3060),
            a = n(2130),
            s = n(7209)
          r(
            {
              target: 'Object',
              stat: !0,
              forced: o(function () {
                a(1)
              }),
              sham: !s,
            },
            {
              getPrototypeOf: function (e) {
                return a(i(e))
              },
            }
          )
        },
        2571: (e, t, n) => {
          var r = n(1695),
            o = n(3060),
            i = n(8779)
          r(
            {
              target: 'Object',
              stat: !0,
              forced: n(3677)(function () {
                i(1)
              }),
            },
            {
              keys: function (e) {
                return i(o(e))
              },
            }
          )
        },
        987: (e, t, n) => {
          n(1695)({ target: 'Object', stat: !0 }, { setPrototypeOf: n(7530) })
        },
        3238: (e, t, n) => {
          var r = n(2371),
            o = n(1007),
            i = n(999)
          r || o(Object.prototype, 'toString', i, { unsafe: !0 })
        },
        2081: (e, t, n) => {
          var r = n(1695),
            o = n(2194)
          r({ global: !0, forced: parseInt != o }, { parseInt: o })
        },
        1418: (e, t, n) => {
          'use strict'
          var r,
            o,
            i,
            a,
            s = n(1695),
            c = n(3296),
            l = n(2086),
            u = n(563),
            p = n(9413),
            f = n(8109),
            d = n(1007),
            v = n(9431),
            y = n(7530),
            m = n(914),
            h = n(7420),
            g = n(5089),
            b = n(930),
            _ = n(8759),
            k = n(1855),
            w = n(9277),
            x = n(4722),
            j = n(8939),
            O = n(8515),
            S = n(4953).set,
            P = n(3173),
            A = n(880),
            z = n(1670),
            E = n(8722),
            C = n(4522),
            T = n(7733),
            I = n(3278),
            D = n(7189),
            R = n(211),
            M = n(172),
            N = n(1801),
            q = n(1448),
            L = R('species'),
            B = 'Promise',
            U = I.getterFor(B),
            F = I.set,
            H = I.getterFor(B),
            W = f && f.prototype,
            K = f,
            V = W,
            $ = l.TypeError,
            G = l.document,
            Z = l.process,
            Y = E.f,
            J = Y,
            Q = !!(G && G.createEvent && l.dispatchEvent),
            X = b(l.PromiseRejectionEvent),
            ee = 'unhandledrejection',
            te = !1,
            ne = D(B, function () {
              var e = w(K),
                t = e !== String(K)
              if (!t && 66 === q) return !0
              if (c && !V.finally) return !0
              if (q >= 51 && /native code/.test(e)) return !1
              var n = new K(function (e) {
                  e(1)
                }),
                r = function (e) {
                  e(
                    function () {},
                    function () {}
                  )
                }
              return ((n.constructor = {})[L] = r), !(te = n.then(function () {}) instanceof r) || (!t && M && !X)
            }),
            re =
              ne ||
              !j(function (e) {
                K.all(e).catch(function () {})
              }),
            oe = function (e) {
              var t
              return !(!_(e) || !b((t = e.then))) && t
            },
            ie = function (e, t) {
              var n,
                r,
                o,
                i = t.value,
                a = 1 == t.state,
                s = a ? e.ok : e.fail,
                c = e.resolve,
                l = e.reject,
                u = e.domain
              try {
                s
                  ? (a || (2 === t.rejection && ue(t), (t.rejection = 1)),
                    !0 === s ? (n = i) : (u && u.enter(), (n = s(i)), u && (u.exit(), (o = !0))),
                    n === e.promise ? l($('Promise-chain cycle')) : (r = oe(n)) ? p(r, n, c, l) : c(n))
                  : l(i)
              } catch (e) {
                u && !o && u.exit(), l(e)
              }
            },
            ae = function (e, t) {
              e.notified ||
                ((e.notified = !0),
                P(function () {
                  for (var n, r = e.reactions; (n = r.get()); ) ie(n, e)
                  ;(e.notified = !1), t && !e.rejection && ce(e)
                }))
            },
            se = function (e, t, n) {
              var r, o
              Q
                ? (((r = G.createEvent('Event')).promise = t),
                  (r.reason = n),
                  r.initEvent(e, !1, !0),
                  l.dispatchEvent(r))
                : (r = { promise: t, reason: n }),
                !X && (o = l['on' + e]) ? o(r) : e === ee && z('Unhandled promise rejection', n)
            },
            ce = function (e) {
              p(S, l, function () {
                var t,
                  n = e.facade,
                  r = e.value
                if (
                  le(e) &&
                  ((t = C(function () {
                    N ? Z.emit('unhandledRejection', r, n) : se(ee, n, r)
                  })),
                  (e.rejection = N || le(e) ? 2 : 1),
                  t.error)
                )
                  throw t.value
              })
            },
            le = function (e) {
              return 1 !== e.rejection && !e.parent
            },
            ue = function (e) {
              p(S, l, function () {
                var t = e.facade
                N ? Z.emit('rejectionHandled', t) : se('rejectionhandled', t, e.value)
              })
            },
            pe = function (e, t, n) {
              return function (r) {
                e(t, r, n)
              }
            },
            fe = function (e, t, n) {
              e.done || ((e.done = !0), n && (e = n), (e.value = t), (e.state = 2), ae(e, !0))
            },
            de = function (e, t, n) {
              if (!e.done) {
                ;(e.done = !0), n && (e = n)
                try {
                  if (e.facade === t) throw $("Promise can't be resolved itself")
                  var r = oe(t)
                  r
                    ? P(function () {
                        var n = { done: !1 }
                        try {
                          p(r, t, pe(de, n, e), pe(fe, n, e))
                        } catch (t) {
                          fe(n, t, e)
                        }
                      })
                    : ((e.value = t), (e.state = 1), ae(e, !1))
                } catch (t) {
                  fe({ done: !1 }, t, e)
                }
              }
            }
          if (
            ne &&
            ((V = (K = function (e) {
              k(this, V), g(e), p(r, this)
              var t = U(this)
              try {
                e(pe(de, t), pe(fe, t))
              } catch (e) {
                fe(t, e)
              }
            }).prototype),
            ((r = function (e) {
              F(this, {
                type: B,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: new T(),
                rejection: !1,
                state: 0,
                value: void 0,
              })
            }).prototype = v(V, {
              then: function (e, t) {
                var n = H(this),
                  r = Y(O(this, K))
                return (
                  (n.parent = !0),
                  (r.ok = !b(e) || e),
                  (r.fail = b(t) && t),
                  (r.domain = N ? Z.domain : void 0),
                  0 == n.state
                    ? n.reactions.add(r)
                    : P(function () {
                        ie(r, n)
                      }),
                  r.promise
                )
              },
              catch: function (e) {
                return this.then(void 0, e)
              },
            })),
            (o = function () {
              var e = new r(),
                t = U(e)
              ;(this.promise = e), (this.resolve = pe(de, t)), (this.reject = pe(fe, t))
            }),
            (E.f = Y =
              function (e) {
                return e === K || e === i ? new o(e) : J(e)
              }),
            !c && b(f) && W !== Object.prototype)
          ) {
            ;(a = W.then),
              te ||
                (d(
                  W,
                  'then',
                  function (e, t) {
                    var n = this
                    return new K(function (e, t) {
                      p(a, n, e, t)
                    }).then(e, t)
                  },
                  { unsafe: !0 }
                ),
                d(W, 'catch', V.catch, { unsafe: !0 }))
            try {
              delete W.constructor
            } catch (e) {}
            y && y(W, V)
          }
          s({ global: !0, wrap: !0, forced: ne }, { Promise: K }),
            m(K, B, !1, !0),
            h(B),
            (i = u(B)),
            s(
              { target: B, stat: !0, forced: ne },
              {
                reject: function (e) {
                  var t = Y(this)
                  return p(t.reject, void 0, e), t.promise
                },
              }
            ),
            s(
              { target: B, stat: !0, forced: c || ne },
              {
                resolve: function (e) {
                  return A(c && this === i ? K : this, e)
                },
              }
            ),
            s(
              { target: B, stat: !0, forced: re },
              {
                all: function (e) {
                  var t = this,
                    n = Y(t),
                    r = n.resolve,
                    o = n.reject,
                    i = C(function () {
                      var n = g(t.resolve),
                        i = [],
                        a = 0,
                        s = 1
                      x(e, function (e) {
                        var c = a++,
                          l = !1
                        s++,
                          p(n, t, e).then(function (e) {
                            l || ((l = !0), (i[c] = e), --s || r(i))
                          }, o)
                      }),
                        --s || r(i)
                    })
                  return i.error && o(i.value), n.promise
                },
                race: function (e) {
                  var t = this,
                    n = Y(t),
                    r = n.reject,
                    o = C(function () {
                      var o = g(t.resolve)
                      x(e, function (e) {
                        p(o, t, e).then(n.resolve, r)
                      })
                    })
                  return o.error && r(o.value), n.promise
                },
              }
            )
        },
        3214: (e, t, n) => {
          var r = n(1695),
            o = n(563),
            i = n(7258),
            a = n(2395),
            s = n(1449),
            c = n(6112),
            l = n(8759),
            u = n(4710),
            p = n(3677),
            f = o('Reflect', 'construct'),
            d = Object.prototype,
            v = [].push,
            y = p(function () {
              function e() {}
              return !(f(function () {}, [], e) instanceof e)
            }),
            m = !p(function () {
              f(function () {})
            }),
            h = y || m
          r(
            { target: 'Reflect', stat: !0, forced: h, sham: h },
            {
              construct: function (e, t) {
                s(e), c(t)
                var n = arguments.length < 3 ? e : s(arguments[2])
                if (m && !y) return f(e, t, n)
                if (e == n) {
                  switch (t.length) {
                    case 0:
                      return new e()
                    case 1:
                      return new e(t[0])
                    case 2:
                      return new e(t[0], t[1])
                    case 3:
                      return new e(t[0], t[1], t[2])
                    case 4:
                      return new e(t[0], t[1], t[2], t[3])
                  }
                  var r = [null]
                  return i(v, r, t), new (i(a, e, r))()
                }
                var o = n.prototype,
                  p = u(l(o) ? o : d),
                  h = i(e, p, t)
                return l(h) ? h : p
              },
            }
          )
        },
        2759: (e, t, n) => {
          var r = n(5283),
            o = n(2086),
            i = n(8240),
            a = n(7189),
            s = n(5070),
            c = n(2585),
            l = n(7826).f,
            u = n(62).f,
            p = n(5516),
            f = n(7994),
            d = n(4059),
            v = n(4276),
            y = n(4930),
            m = n(1007),
            h = n(3677),
            g = n(9606),
            b = n(3278).enforce,
            _ = n(7420),
            k = n(211),
            w = n(2582),
            x = n(2910),
            j = k('match'),
            O = o.RegExp,
            S = O.prototype,
            P = o.SyntaxError,
            A = i(v),
            z = i(S.exec),
            E = i(''.charAt),
            C = i(''.replace),
            T = i(''.indexOf),
            I = i(''.slice),
            D = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,
            R = /a/g,
            M = /a/g,
            N = new O(R) !== R,
            q = y.MISSED_STICKY,
            L = y.UNSUPPORTED_Y
          if (
            a(
              'RegExp',
              r &&
                (!N ||
                  q ||
                  w ||
                  x ||
                  h(function () {
                    return (M[j] = !1), O(R) != R || O(M) == M || '/a/i' != O(R, 'i')
                  }))
            )
          ) {
            for (
              var B = function (e, t) {
                  var n,
                    r,
                    o,
                    i,
                    a,
                    l,
                    u = p(S, this),
                    v = f(e),
                    y = void 0 === t,
                    m = [],
                    h = e
                  if (!u && v && y && e.constructor === B) return e
                  if (
                    ((v || p(S, e)) && ((e = e.source), y && (t = ('flags' in h) ? h.flags : A(h))),
                    (e = void 0 === e ? '' : d(e)),
                    (t = void 0 === t ? '' : d(t)),
                    (h = e),
                    w && ('dotAll' in R) && (r = !!t && T(t, 's') > -1) && (t = C(t, /s/g, '')),
                    (n = t),
                    q && ('sticky' in R) && (o = !!t && T(t, 'y') > -1) && L && (t = C(t, /y/g, '')),
                    x &&
                      ((i = (function (e) {
                        for (
                          var t, n = e.length, r = 0, o = '', i = [], a = {}, s = !1, c = !1, l = 0, u = '';
                          r <= n;
                          r++
                        ) {
                          if ('\\' === (t = E(e, r))) t += E(e, ++r)
                          else if (']' === t) s = !1
                          else if (!s)
                            switch (!0) {
                              case '[' === t:
                                s = !0
                                break
                              case '(' === t:
                                z(D, I(e, r + 1)) && ((r += 2), (c = !0)), (o += t), l++
                                continue
                              case '>' === t && c:
                                if ('' === u || g(a, u)) throw new P('Invalid capture group name')
                                ;(a[u] = !0), (i[i.length] = [u, l]), (c = !1), (u = '')
                                continue
                            }
                          c ? (u += t) : (o += t)
                        }
                        return [o, i]
                      })(e)),
                      (e = i[0]),
                      (m = i[1])),
                    (a = s(O(e, t), u ? this : S, B)),
                    (r || o || m.length) &&
                      ((l = b(a)),
                      r &&
                        ((l.dotAll = !0),
                        (l.raw = B(
                          (function (e) {
                            for (var t, n = e.length, r = 0, o = '', i = !1; r <= n; r++)
                              '\\' !== (t = E(e, r))
                                ? i || '.' !== t
                                  ? ('[' === t ? (i = !0) : ']' === t && (i = !1), (o += t))
                                  : (o += '[\\s\\S]')
                                : (o += t + E(e, ++r))
                            return o
                          })(e),
                          n
                        ))),
                      o && (l.sticky = !0),
                      m.length && (l.groups = m)),
                    e !== h)
                  )
                    try {
                      c(a, 'source', '' === h ? '(?:)' : h)
                    } catch (e) {}
                  return a
                },
                U = function (e) {
                  ;(e in B) ||
                    l(B, e, {
                      configurable: !0,
                      get: function () {
                        return O[e]
                      },
                      set: function (t) {
                        O[e] = t
                      },
                    })
                },
                F = u(O),
                H = 0;
              F.length > H;

            )
              U(F[H++])
            ;(S.constructor = B), (B.prototype = S), m(o, 'RegExp', B)
          }
          _('RegExp')
        },
        2077: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(4861)
          r({ target: 'RegExp', proto: !0, forced: /./.exec !== o }, { exec: o })
        },
        895: (e, t, n) => {
          'use strict'
          var r = n(8240),
            o = n(4398).PROPER,
            i = n(1007),
            a = n(6112),
            s = n(5516),
            c = n(4059),
            l = n(3677),
            u = n(4276),
            p = 'toString',
            f = RegExp.prototype,
            d = f.toString,
            v = r(u),
            y = l(function () {
              return '/a/b' != d.call({ source: 'a', flags: 'b' })
            }),
            m = o && d.name != p
          ;(y || m) &&
            i(
              RegExp.prototype,
              p,
              function () {
                var e = a(this),
                  t = c(e.source),
                  n = e.flags
                return '/' + t + '/' + c(void 0 === n && s(f, e) && !('flags' in f) ? v(e) : n)
              },
              { unsafe: !0 }
            )
        },
        6446: (e, t, n) => {
          'use strict'
          n(4909)(
            'Set',
            function (e) {
              return function () {
                return e(this, arguments.length ? arguments[0] : void 0)
              }
            },
            n(5204)
          )
        },
        5289: (e, t, n) => {
          'use strict'
          var r,
            o = n(1695),
            i = n(8240),
            a = n(4399).f,
            s = n(4005),
            c = n(4059),
            l = n(7725),
            u = n(9586),
            p = n(5469),
            f = n(3296),
            d = i(''.endsWith),
            v = i(''.slice),
            y = Math.min,
            m = p('endsWith')
          o(
            {
              target: 'String',
              proto: !0,
              forced: !((!f && !m && ((r = a(String.prototype, 'endsWith')), r && !r.writable)) || m),
            },
            {
              endsWith: function (e) {
                var t = c(u(this))
                l(e)
                var n = arguments.length > 1 ? arguments[1] : void 0,
                  r = t.length,
                  o = void 0 === n ? r : y(s(n), r),
                  i = c(e)
                return d ? d(t, i, o) : v(t, o - i.length, o) === i
              },
            }
          )
        },
        1514: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(8240),
            i = n(7725),
            a = n(9586),
            s = n(4059),
            c = n(5469),
            l = o(''.indexOf)
          r(
            { target: 'String', proto: !0, forced: !c('includes') },
            {
              includes: function (e) {
                return !!~l(s(a(this)), s(i(e)), arguments.length > 1 ? arguments[1] : void 0)
              },
            }
          )
        },
        7460: (e, t, n) => {
          'use strict'
          var r = n(3448).charAt,
            o = n(4059),
            i = n(3278),
            a = n(8432),
            s = 'String Iterator',
            c = i.set,
            l = i.getterFor(s)
          a(
            String,
            'String',
            function (e) {
              c(this, { type: s, string: o(e), index: 0 })
            },
            function () {
              var e,
                t = l(this),
                n = t.string,
                o = t.index
              return o >= n.length
                ? { value: void 0, done: !0 }
                : ((e = r(n, o)), (t.index += e.length), { value: e, done: !1 })
            }
          )
        },
        1203: (e, t, n) => {
          'use strict'
          var r = n(9413),
            o = n(2331),
            i = n(6112),
            a = n(4005),
            s = n(4059),
            c = n(9586),
            l = n(2964),
            u = n(9966),
            p = n(1189)
          o('match', function (e, t, n) {
            return [
              function (t) {
                var n = c(this),
                  o = null == t ? void 0 : l(t, e)
                return o ? r(o, t, n) : new RegExp(t)[e](s(n))
              },
              function (e) {
                var r = i(this),
                  o = s(e),
                  c = n(t, r, o)
                if (c.done) return c.value
                if (!r.global) return p(r, o)
                var l = r.unicode
                r.lastIndex = 0
                for (var f, d = [], v = 0; null !== (f = p(r, o)); ) {
                  var y = s(f[0])
                  ;(d[v] = y), '' === y && (r.lastIndex = u(o, a(r.lastIndex), l)), v++
                }
                return 0 === v ? null : d
              },
            ]
          })
        },
        911: (e, t, n) => {
          'use strict'
          var r = n(7258),
            o = n(9413),
            i = n(8240),
            a = n(2331),
            s = n(3677),
            c = n(6112),
            l = n(930),
            u = n(9502),
            p = n(4005),
            f = n(4059),
            d = n(9586),
            v = n(9966),
            y = n(2964),
            m = n(8509),
            h = n(1189),
            g = n(211)('replace'),
            b = Math.max,
            _ = Math.min,
            k = i([].concat),
            w = i([].push),
            x = i(''.indexOf),
            j = i(''.slice),
            O = '$0' === 'a'.replace(/./, '$0'),
            S = !!/./[g] && '' === /./[g]('a', '$0')
          a(
            'replace',
            function (e, t, n) {
              var i = S ? '$' : '$0'
              return [
                function (e, n) {
                  var r = d(this),
                    i = null == e ? void 0 : y(e, g)
                  return i ? o(i, e, r, n) : o(t, f(r), e, n)
                },
                function (e, o) {
                  var a = c(this),
                    s = f(e)
                  if ('string' == typeof o && -1 === x(o, i) && -1 === x(o, '$<')) {
                    var d = n(t, a, s, o)
                    if (d.done) return d.value
                  }
                  var y = l(o)
                  y || (o = f(o))
                  var g = a.global
                  if (g) {
                    var O = a.unicode
                    a.lastIndex = 0
                  }
                  for (var S = []; ; ) {
                    var P = h(a, s)
                    if (null === P) break
                    if ((w(S, P), !g)) break
                    '' === f(P[0]) && (a.lastIndex = v(s, p(a.lastIndex), O))
                  }
                  for (var A, z = '', E = 0, C = 0; C < S.length; C++) {
                    for (var T = f((P = S[C])[0]), I = b(_(u(P.index), s.length), 0), D = [], R = 1; R < P.length; R++)
                      w(D, void 0 === (A = P[R]) ? A : String(A))
                    var M = P.groups
                    if (y) {
                      var N = k([T], D, I, s)
                      void 0 !== M && w(N, M)
                      var q = f(r(o, void 0, N))
                    } else q = m(T, s, I, D, M, o)
                    I >= E && ((z += j(s, E, I) + q), (E = I + T.length))
                  }
                  return z + j(s, E)
                },
              ]
            },
            !!s(function () {
              var e = /./
              return (
                (e.exec = function () {
                  var e = []
                  return (e.groups = { a: '7' }), e
                }),
                '7' !== ''.replace(e, '$<a>')
              )
            }) ||
              !O ||
              S
          )
        },
        2482: (e, t, n) => {
          'use strict'
          var r = n(7258),
            o = n(9413),
            i = n(8240),
            a = n(2331),
            s = n(7994),
            c = n(6112),
            l = n(9586),
            u = n(8515),
            p = n(9966),
            f = n(4005),
            d = n(4059),
            v = n(2964),
            y = n(3329),
            m = n(1189),
            h = n(4861),
            g = n(4930),
            b = n(3677),
            _ = g.UNSUPPORTED_Y,
            k = 4294967295,
            w = Math.min,
            x = [].push,
            j = i(/./.exec),
            O = i(x),
            S = i(''.slice),
            P = !b(function () {
              var e = /(?:)/,
                t = e.exec
              e.exec = function () {
                return t.apply(this, arguments)
              }
              var n = 'ab'.split(e)
              return 2 !== n.length || 'a' !== n[0] || 'b' !== n[1]
            })
          a(
            'split',
            function (e, t, n) {
              var i
              return (
                (i =
                  'c' == 'abbc'.split(/(b)*/)[1] ||
                  4 != 'test'.split(/(?:)/, -1).length ||
                  2 != 'ab'.split(/(?:ab)*/).length ||
                  4 != '.'.split(/(.?)(.?)/).length ||
                  '.'.split(/()()/).length > 1 ||
                  ''.split(/.?/).length
                    ? function (e, n) {
                        var i = d(l(this)),
                          a = void 0 === n ? k : n >>> 0
                        if (0 === a) return []
                        if (void 0 === e) return [i]
                        if (!s(e)) return o(t, i, e, a)
                        for (
                          var c,
                            u,
                            p,
                            f = [],
                            v =
                              (e.ignoreCase ? 'i' : '') +
                              (e.multiline ? 'm' : '') +
                              (e.unicode ? 'u' : '') +
                              (e.sticky ? 'y' : ''),
                            m = 0,
                            g = new RegExp(e.source, v + 'g');
                          (c = o(h, g, i)) &&
                          !(
                            (u = g.lastIndex) > m &&
                            (O(f, S(i, m, c.index)),
                            c.length > 1 && c.index < i.length && r(x, f, y(c, 1)),
                            (p = c[0].length),
                            (m = u),
                            f.length >= a)
                          );

                        )
                          g.lastIndex === c.index && g.lastIndex++
                        return (
                          m === i.length ? (!p && j(g, '')) || O(f, '') : O(f, S(i, m)), f.length > a ? y(f, 0, a) : f
                        )
                      }
                    : '0'.split(void 0, 0).length
                    ? function (e, n) {
                        return void 0 === e && 0 === n ? [] : o(t, this, e, n)
                      }
                    : t),
                [
                  function (t, n) {
                    var r = l(this),
                      a = null == t ? void 0 : v(t, e)
                    return a ? o(a, t, r, n) : o(i, d(r), t, n)
                  },
                  function (e, r) {
                    var o = c(this),
                      a = d(e),
                      s = n(i, o, a, r, i !== t)
                    if (s.done) return s.value
                    var l = u(o, RegExp),
                      v = o.unicode,
                      y =
                        (o.ignoreCase ? 'i' : '') + (o.multiline ? 'm' : '') + (o.unicode ? 'u' : '') + (_ ? 'g' : 'y'),
                      h = new l(_ ? '^(?:' + o.source + ')' : o, y),
                      g = void 0 === r ? k : r >>> 0
                    if (0 === g) return []
                    if (0 === a.length) return null === m(h, a) ? [a] : []
                    for (var b = 0, x = 0, j = []; x < a.length; ) {
                      h.lastIndex = _ ? 0 : x
                      var P,
                        A = m(h, _ ? S(a, x) : a)
                      if (null === A || (P = w(f(h.lastIndex + (_ ? x : 0)), a.length)) === b) x = p(a, x, v)
                      else {
                        if ((O(j, S(a, b, x)), j.length === g)) return j
                        for (var z = 1; z <= A.length - 1; z++) if ((O(j, A[z]), j.length === g)) return j
                        x = b = P
                      }
                    }
                    return O(j, S(a, b)), j
                  },
                ]
              )
            },
            !P,
            _
          )
        },
        938: (e, t, n) => {
          'use strict'
          var r,
            o = n(1695),
            i = n(8240),
            a = n(4399).f,
            s = n(4005),
            c = n(4059),
            l = n(7725),
            u = n(9586),
            p = n(5469),
            f = n(3296),
            d = i(''.startsWith),
            v = i(''.slice),
            y = Math.min,
            m = p('startsWith')
          o(
            {
              target: 'String',
              proto: !0,
              forced: !((!f && !m && ((r = a(String.prototype, 'startsWith')), r && !r.writable)) || m),
            },
            {
              startsWith: function (e) {
                var t = c(u(this))
                l(e)
                var n = s(y(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                  r = c(e)
                return d ? d(t, r, n) : v(t, n, n + r.length) === r
              },
            }
          )
        },
        266: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(4080).trim
          r(
            { target: 'String', proto: !0, forced: n(4274)('trim') },
            {
              trim: function () {
                return o(this)
              },
            }
          )
        },
        2189: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(5283),
            i = n(2086),
            a = n(8240),
            s = n(9606),
            c = n(930),
            l = n(5516),
            u = n(4059),
            p = n(7826).f,
            f = n(8474),
            d = i.Symbol,
            v = d && d.prototype
          if (o && c(d) && (!('description' in v) || void 0 !== d().description)) {
            var y = {},
              m = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : u(arguments[0]),
                  t = l(v, this) ? new d(e) : void 0 === e ? d() : d(e)
                return '' === e && (y[t] = !0), t
              }
            f(m, d), (m.prototype = v), (v.constructor = m)
            var h = 'Symbol(test)' == String(d('test')),
              g = a(v.toString),
              b = a(v.valueOf),
              _ = /^Symbol\((.*)\)[^)]+$/,
              k = a(''.replace),
              w = a(''.slice)
            p(v, 'description', {
              configurable: !0,
              get: function () {
                var e = b(this),
                  t = g(e)
                if (s(y, e)) return ''
                var n = h ? w(t, 7, -1) : k(t, _, '$1')
                return '' === n ? void 0 : n
              },
            }),
              r({ global: !0, forced: !0 }, { Symbol: m })
          }
        },
        1047: (e, t, n) => {
          n(4145)('iterator')
        },
        5901: (e, t, n) => {
          'use strict'
          var r = n(1695),
            o = n(2086),
            i = n(563),
            a = n(7258),
            s = n(9413),
            c = n(8240),
            l = n(3296),
            u = n(5283),
            p = n(3193),
            f = n(3677),
            d = n(9606),
            v = n(6526),
            y = n(930),
            m = n(8759),
            h = n(5516),
            g = n(2071),
            b = n(6112),
            _ = n(3060),
            k = n(4088),
            w = n(2258),
            x = n(4059),
            j = n(5736),
            O = n(4710),
            S = n(8779),
            P = n(62),
            A = n(3226),
            z = n(6952),
            E = n(4399),
            C = n(7826),
            T = n(7711),
            I = n(7446),
            D = n(745),
            R = n(1007),
            M = n(9197),
            N = n(8944),
            q = n(7153),
            L = n(5422),
            B = n(211),
            U = n(9251),
            F = n(4145),
            H = n(914),
            W = n(3278),
            K = n(8062).forEach,
            V = N('hidden'),
            $ = 'Symbol',
            G = B('toPrimitive'),
            Z = W.set,
            Y = W.getterFor($),
            J = Object.prototype,
            Q = o.Symbol,
            X = Q && Q.prototype,
            ee = o.TypeError,
            te = o.QObject,
            ne = i('JSON', 'stringify'),
            re = E.f,
            oe = C.f,
            ie = A.f,
            ae = I.f,
            se = c([].push),
            ce = M('symbols'),
            le = M('op-symbols'),
            ue = M('string-to-symbol-registry'),
            pe = M('symbol-to-string-registry'),
            fe = M('wks'),
            de = !te || !te.prototype || !te.prototype.findChild,
            ve =
              u &&
              f(function () {
                return (
                  7 !=
                  O(
                    oe({}, 'a', {
                      get: function () {
                        return oe(this, 'a', { value: 7 }).a
                      },
                    })
                  ).a
                )
              })
                ? function (e, t, n) {
                    var r = re(J, t)
                    r && delete J[t], oe(e, t, n), r && e !== J && oe(J, t, r)
                  }
                : oe,
            ye = function (e, t) {
              var n = (ce[e] = O(X))
              return Z(n, { type: $, tag: e, description: t }), u || (n.description = t), n
            },
            me = function (e, t, n) {
              e === J && me(le, t, n), b(e)
              var r = w(t)
              return (
                b(n),
                d(ce, r)
                  ? (n.enumerable
                      ? (d(e, V) && e[V][r] && (e[V][r] = !1), (n = O(n, { enumerable: j(0, !1) })))
                      : (d(e, V) || oe(e, V, j(1, {})), (e[V][r] = !0)),
                    ve(e, r, n))
                  : oe(e, r, n)
              )
            },
            he = function (e, t) {
              b(e)
              var n = k(t),
                r = S(n).concat(ke(n))
              return (
                K(r, function (t) {
                  ;(u && !s(ge, n, t)) || me(e, t, n[t])
                }),
                e
              )
            },
            ge = function (e) {
              var t = w(e),
                n = s(ae, this, t)
              return (
                !(this === J && d(ce, t) && !d(le, t)) &&
                (!(n || !d(this, t) || !d(ce, t) || (d(this, V) && this[V][t])) || n)
              )
            },
            be = function (e, t) {
              var n = k(e),
                r = w(t)
              if (n !== J || !d(ce, r) || d(le, r)) {
                var o = re(n, r)
                return !o || !d(ce, r) || (d(n, V) && n[V][r]) || (o.enumerable = !0), o
              }
            },
            _e = function (e) {
              var t = ie(k(e)),
                n = []
              return (
                K(t, function (e) {
                  d(ce, e) || d(q, e) || se(n, e)
                }),
                n
              )
            },
            ke = function (e) {
              var t = e === J,
                n = ie(t ? le : k(e)),
                r = []
              return (
                K(n, function (e) {
                  !d(ce, e) || (t && !d(J, e)) || se(r, ce[e])
                }),
                r
              )
            }
          if (
            (p ||
              ((Q = function () {
                if (h(X, this)) throw ee('Symbol is not a constructor')
                var e = arguments.length && void 0 !== arguments[0] ? x(arguments[0]) : void 0,
                  t = L(e),
                  n = function (e) {
                    this === J && s(n, le, e), d(this, V) && d(this[V], t) && (this[V][t] = !1), ve(this, t, j(1, e))
                  }
                return u && de && ve(J, t, { configurable: !0, set: n }), ye(t, e)
              }),
              R((X = Q.prototype), 'toString', function () {
                return Y(this).tag
              }),
              R(Q, 'withoutSetter', function (e) {
                return ye(L(e), e)
              }),
              (I.f = ge),
              (C.f = me),
              (T.f = he),
              (E.f = be),
              (P.f = A.f = _e),
              (z.f = ke),
              (U.f = function (e) {
                return ye(B(e), e)
              }),
              u &&
                (oe(X, 'description', {
                  configurable: !0,
                  get: function () {
                    return Y(this).description
                  },
                }),
                l || R(J, 'propertyIsEnumerable', ge, { unsafe: !0 }))),
            r({ global: !0, wrap: !0, forced: !p, sham: !p }, { Symbol: Q }),
            K(S(fe), function (e) {
              F(e)
            }),
            r(
              { target: $, stat: !0, forced: !p },
              {
                for: function (e) {
                  var t = x(e)
                  if (d(ue, t)) return ue[t]
                  var n = Q(t)
                  return (ue[t] = n), (pe[n] = t), n
                },
                keyFor: function (e) {
                  if (!g(e)) throw ee(e + ' is not a symbol')
                  if (d(pe, e)) return pe[e]
                },
                useSetter: function () {
                  de = !0
                },
                useSimple: function () {
                  de = !1
                },
              }
            ),
            r(
              { target: 'Object', stat: !0, forced: !p, sham: !u },
              {
                create: function (e, t) {
                  return void 0 === t ? O(e) : he(O(e), t)
                },
                defineProperty: me,
                defineProperties: he,
                getOwnPropertyDescriptor: be,
              }
            ),
            r({ target: 'Object', stat: !0, forced: !p }, { getOwnPropertyNames: _e, getOwnPropertySymbols: ke }),
            r(
              {
                target: 'Object',
                stat: !0,
                forced: f(function () {
                  z.f(1)
                }),
              },
              {
                getOwnPropertySymbols: function (e) {
                  return z.f(_(e))
                },
              }
            ),
            ne &&
              r(
                {
                  target: 'JSON',
                  stat: !0,
                  forced:
                    !p ||
                    f(function () {
                      var e = Q()
                      return '[null]' != ne([e]) || '{}' != ne({ a: e }) || '{}' != ne(Object(e))
                    }),
                },
                {
                  stringify: function (e, t, n) {
                    var r = D(arguments),
                      o = t
                    if ((m(t) || void 0 !== e) && !g(e))
                      return (
                        v(t) ||
                          (t = function (e, t) {
                            if ((y(o) && (t = s(o, this, e, t)), !g(t))) return t
                          }),
                        (r[1] = t),
                        a(ne, null, r)
                      )
                  },
                }
              ),
            !X[G])
          ) {
            var we = X.valueOf
            R(X, G, function (e) {
              return s(we, this)
            })
          }
          H(Q, $), (q[V] = !0)
        },
        5849: (e, t, n) => {
          var r = n(2086),
            o = n(933),
            i = n(3526),
            a = n(1984),
            s = n(2585),
            c = function (e) {
              if (e && e.forEach !== a)
                try {
                  s(e, 'forEach', a)
                } catch (t) {
                  e.forEach = a
                }
            }
          for (var l in o) o[l] && c(r[l] && r[l].prototype)
          c(i)
        },
        4078: (e, t, n) => {
          var r = n(2086),
            o = n(933),
            i = n(3526),
            a = n(5769),
            s = n(2585),
            c = n(211),
            l = c('iterator'),
            u = c('toStringTag'),
            p = a.values,
            f = function (e, t) {
              if (e) {
                if (e[l] !== p)
                  try {
                    s(e, l, p)
                  } catch (t) {
                    e[l] = p
                  }
                if ((e[u] || s(e, u, t), o[t]))
                  for (var n in a)
                    if (e[n] !== a[n])
                      try {
                        s(e, n, a[n])
                      } catch (t) {
                        e[n] = a[n]
                      }
              }
            }
          for (var d in o) f(r[d] && r[d].prototype, d)
          f(i, 'DOMTokenList')
        },
        6252: (e, t, n) => {
          var r = n(1695),
            o = n(2086),
            i = n(7258),
            a = n(930),
            s = n(4999),
            c = n(745),
            l = n(1635),
            u = /MSIE .\./.test(s),
            p = o.Function,
            f = function (e) {
              return function (t, n) {
                var r = l(arguments.length, 1) > 2,
                  o = a(t) ? t : p(t),
                  s = r ? c(arguments, 2) : void 0
                return e(
                  r
                    ? function () {
                        i(o, this, s)
                      }
                    : o,
                  n
                )
              }
            }
          r({ global: !0, bind: !0, forced: u }, { setTimeout: f(o.setTimeout), setInterval: f(o.setInterval) })
        },
        8702: (e) => {
          e.exports = {
            acceptAll: 'Accepta-les totes',
            acceptSelected: 'Accepta les escollides',
            service: {
              disableAll: {
                description: 'Useu aquest botó per a habilitar o deshabilitar totes les aplicacions.',
                title: 'Habilita/deshabilita totes les aplicacions',
              },
              optOut: {
                description: 'Aquesta aplicació es carrega per defecte, però podeu desactivar-la',
                title: '(opt-out)',
              },
              purpose: 'Finalitat',
              purposes: 'Finalitats',
              required: { description: 'Aquesta aplicació es necessita sempre', title: '(necessària)' },
            },
            close: 'Tanca',
            consentModal: {
              description: 'Aquí podeu veure i personalitzar la informació que recopilem sobre vós.',
              privacyPolicy: {
                name: 'política de privadesa',
                text: 'Per a més informació, consulteu la nostra {privacyPolicy}.',
              },
              title: 'Informació que recopilem',
            },
            consentNotice: {
              changeDescription:
                'Hi ha hagut canvis des de la vostra darrera visita. Actualitzeu el vostre consentiment.',
              description:
                'Recopilem i processem la vostra informació personal amb les següents finalitats: {purposes}.',
              imprint: { name: 'Empremta' },
              learnMore: 'Saber-ne més',
              privacyPolicy: { name: 'política de privadesa' },
            },
            decline: 'Rebutja',
            ok: 'Accepta',
            poweredBy: 'Funciona amb Klaro!',
            purposeItem: { service: 'aplicació', services: 'aplicacions' },
            save: 'Desa',
          }
        },
        584: (e) => {
          e.exports = {
            privacyPolicy: {
              name: 'zásady ochrany soukromí',
              text: 'Pro další informace si přečtete naše <tr-hint v="privacy policy">{privacyPolicy}</tr-hint>.',
            },
            consentModal: {
              title: 'Služby, které bychom rádi využili',
              description:
                'Zde můžete posoudit a přizpůsobit služby, které bychom rádi na tomto webu používali. Máte to pod kontrolou! Povolte nebo zakažte služby, jak uznáte za vhodné.',
            },
            consentNotice: {
              testing: 'Testing mode!',
              changeDescription: 'Od vaší poslední návštěvy došlo ke změnám, obnovte prosím svůj souhlas.',
              description:
                '„Dobrý den! Můžeme povolit některé další služby pro {purposes}? Svůj souhlas můžete kdykoliv změnit nebo odvolat.“',
              'learnMore|capitalize': 'Vyberu si',
            },
            účely: {
              functional: {
                'title|capitalize': 'Poskytování služeb',
                description:
                  'Tyto služby jsou nezbytné pro správné fungování tohoto webu. Nelze je zde deaktivovat, protože služba by jinak nefungovala správně.\n',
              },
              performance: {
                'title|capitalize': 'Optimalizace výkonu',
                description:
                  'V rámci těchto služeb jsou zpracovávány osobní údaje za účelem optimalizace služeb, které jsou na tomto webu poskytovány.\n',
              },
              marketing: {
                'title|capitalize': 'Marketing',
                description:
                  'V rámci těchto služeb jsou zpracovávány osobní údaje, aby se vám zobrazoval relevantní obsah o produktech, službách nebo tématech, které by vás mohly zajímat.',
              },
              advertising: {
                'title|capitalize': 'Reklama',
                description:
                  'V rámci těchto služeb jsou zpracovávány osobní údaje, aby vám zobrazovaly personalizované nebo zájmově orientované reklamy.',
              },
            },
            purposeItem: {
              service: 'Jednoduchá služba <tr-snip></tr-snip> , kterou nainstaluji do svého počítače.',
              services: 'Několik jednoduchých služeb <tr-snip></tr-snip> , které nainstaluji do svého počítače.',
            },
            'ok|capitalize': 'To je v pořádku',
            save: 'uložit',
            'decline|capitalize': 'Nepřijímám',
            close: 'zavřít',
            acceptAll: 'přijmout vše',
            acceptSelected: 'přijmout vybrané',
            service: {
              disableAll: {
                title: 'povolit nebo zakázat všechny služby',
                description: 'Pomocí tohoto přepínače můžete povolit nebo zakázat všechny služby.',
              },
              optOut: {
                title: '(opt-out)',
                description: 'Tato služba se načítá ve výchozím nastavení (ale můžete ji zrušit)',
              },
              required: { title: '(vždy vyžadováno)', description: 'Tato služba je vždy vyžadována' },
              purposes: 'Zpracování  pro účely <tr-snip></tr-snip>',
              purpose: 'Zpracování pro účely <tr-snip></tr-snip>',
            },
            poweredBy: 'Realizováno pomocí Klaro!',
            contextualConsent: {
              description: 'Chcete načíst externí obsah dodávaný prostřednictvím {title}?',
              acceptOnce: 'Ano',
              acceptAlways: 'Vždy',
            },
          }
        },
        8163: (e) => {
          e.exports = {
            acceptAll: 'Tillad alle',
            acceptSelected: 'Tillad udvalgte',
            service: {
              disableAll: {
                description: 'Brug denne kontakt til at aktivere/deaktivere alle apps.',
                title: 'Aktiver/deaktiver alle applikatione',
              },
              optOut: {
                description: 'Denne applikation indlæses som standard (men du kan deaktivere den)',
                title: 'Opt-Out',
              },
              purpose: 'Formål',
              purposes: 'Formål',
              required: { description: 'Denne applikation er altid nødvendig', title: '(Altid nødvendig)' },
            },
            close: 'Luk',
            consentModal: {
              description: 'Her kan du se og ændre, hvilke informationer vi gemmer om dig.',
              privacyPolicy: {
                name: 'Flere informationer finde du under {privacyPolicy}',
                text: 'databeskyttelseserklæring.',
              },
              title: 'Informationer, som vi gemmer',
            },
            consentNotice: {
              changeDescription: 'Der har været ændringer siden dit sidste besøg. Opdater dit valg.',
              description: 'Vi gemmer og behandler dine personlige oplysninger til følgende formål: {purposes}.',
              imprint: { name: '' },
              learnMore: 'Læs mere',
              privacyPolicy: { name: 'Datenschutzerklärung' },
            },
            decline: 'Afvis',
            ok: 'Ok',
            poweredBy: 'Realiseret med Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Gem',
          }
        },
        6555: (e) => {
          e.exports = {
            acceptAll: 'Alle akzeptieren',
            acceptSelected: 'Ausgewählte akzeptieren',
            close: 'Schließen',
            consentModal: {
              description:
                'Hier können Sie die Dienste, die wir auf dieser Website nutzen möchten, bewerten und anpassen. Sie haben das Sagen! Aktivieren oder deaktivieren Sie die Dienste, wie Sie es für richtig halten.',
              privacyPolicy: {
                name: 'Datenschutzerklärung',
                text: 'Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}.',
              },
              title: 'Dienste, die wir nutzen möchten',
            },
            consentNotice: {
              changeDescription: 'Seit Ihrem letzten Besuch gab es Änderungen, bitte erneuern Sie Ihre Zustimmung.',
              title: 'Cookie-Einstellungen',
              description:
                'Hallo! Könnten wir bitte einige zusätzliche Dienste für {purposes} aktivieren? Sie können Ihre Zustimmung später jederzeit ändern oder zurückziehen.',
              imprint: { name: 'Impressum' },
              learnMore: 'Lassen Sie mich wählen',
              privacyPolicy: { name: 'Datenschutzerklärung' },
              testing: 'Testmodus!',
            },
            contextualConsent: {
              acceptAlways: 'Immer',
              acceptOnce: 'Ja',
              description: 'Möchten Sie von {title} bereitgestellte externe Inhalte laden?',
            },
            decline: 'Ich lehne ab',
            ok: 'Das ist ok',
            poweredBy: 'Realisiert mit Klaro!',
            privacyPolicy: {
              name: 'Datenschutzerklärung',
              text: 'Um mehr zu erfahren, lesen Sie bitte unsere {privacyPolicy}.',
            },
            purposeItem: { service: 'Dienst', services: 'Dienste' },
            purposes: {
              advertising: {
                description:
                  'Diese Dienste verarbeiten persönliche Informationen, um Ihnen personalisierte oder interessenbezogene Werbung zu zeigen.',
                title: 'Werbung',
              },
              functional: {
                description:
                  'Diese Dienste sind für die korrekte Funktion dieser Website unerlässlich. Sie können sie hier nicht deaktivieren, da der Dienst sonst nicht richtig funktionieren würde.\n',
                title: 'Dienstbereitstellung',
              },
              marketing: {
                description:
                  'Diese Dienste verarbeiten persönliche Daten, um Ihnen relevante Inhalte über Produkte, Dienstleistungen oder Themen zu zeigen, die Sie interessieren könnten.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Diese Dienste verarbeiten personenbezogene Daten, um den von dieser Website angebotenen Service zu optimieren.\n',
                title: 'Optimierung der Leistung',
              },
            },
            save: 'Speichern',
            service: {
              disableAll: {
                description: 'Mit diesem Schalter können Sie alle Dienste aktivieren oder deaktivieren.',
                title: 'Alle Dienste aktivieren oder deaktivieren',
              },
              optOut: {
                description: 'Diese Dienste werden standardmäßig geladen (Sie können sich jedoch abmelden)',
                title: '(Opt-out)',
              },
              purpose: 'Zweck',
              purposes: 'Zwecke',
              required: { description: 'Dieser Service ist immer erforderlich', title: '(immer erforderlich)' },
            },
          }
        },
        5040: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description:
                  'Χρησιμοποίησε αυτό τον διακόπτη για να ενεργοποιήσεις/απενεργοποιήσεις όλες τις εφαρμογές.',
                title: 'Για όλες τις εφαρμογές',
              },
              optOut: {
                description: 'Είναι προκαθορισμένο να φορτώνεται, άλλα μπορεί να παραληφθεί',
                title: '(μη απαιτούμενο)',
              },
              purpose: 'Σκοπός',
              purposes: 'Σκοποί',
              required: {
                description: 'Δεν γίνεται να λειτουργήσει σωστά η εφαρμογή χωρίς αυτό',
                title: '(απαιτούμενο)',
              },
            },
            close: 'Κλείσιμο',
            consentModal: {
              description: 'Εδώ μπορείς να δεις και να ρυθμίσεις τις πληροφορίες που συλλέγουμε σχετικά με εσένα.',
              privacyPolicy: {
                name: 'Πολιτική Απορρήτου',
                text: 'Για περισσότερες πληροφορίες, παρακαλώ διαβάστε την {privacyPolicy}.',
              },
              title: 'Πληροφορίες που συλλέγουμε',
            },
            consentNotice: {
              changeDescription:
                'Πραγματοποιήθηκαν αλλαγές μετά την τελευταία σας επίσκεψη παρακαλούμε ανανεώστε την συγκατάθεση σας.',
              description:
                'Συγκεντρώνουμε και επεξεργαζόμαστε τα προσωπικά δεδομένα σας για τους παρακάτω λόγους: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Περισσότερα',
              privacyPolicy: { name: 'Πολιτική Απορρήτου' },
            },
            decline: 'Απόρριπτω',
            ok: 'OK',
            poweredBy: 'Υποστηρίζεται από το Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Αποθήκευση',
          }
        },
        1210: (e) => {
          e.exports = {
            acceptAll: 'Accept all',
            acceptSelected: 'Accept selected',
            close: 'Close',
            consentModal: {
              description:
                "Here you can assess and customize the services that we'd like to use on this website. You're in charge! Enable or disable services as you see fit.",
              title: 'Services we would like to use',
            },
            consentNotice: {
              changeDescription: 'There were changes since your last visit, please renew your consent.',
              title: 'Cookie Consent',
              description:
                'Hi! Could we please enable some additional services for {purposes}? You can always change or withdraw your consent later.',
              learnMore: 'Let me choose',
              testing: 'Testing mode!',
            },
            contextualConsent: {
              acceptAlways: 'Always',
              acceptOnce: 'Yes',
              description: 'Do you want to load external content supplied by {title}?',
            },
            decline: 'I decline',
            ok: "That's ok",
            poweredBy: 'Realized with Klaro!',
            privacyPolicy: { name: 'privacy policy', text: 'To learn more, please read our {privacyPolicy}.' },
            purposeItem: { service: 'service', services: 'services' },
            purposes: {
              advertising: {
                description:
                  'These services process personal information to show you personalized or interest-based advertisements.',
                title: 'Advertising',
              },
              functional: {
                description:
                  'These services are essential for the correct functioning of this website. You cannot disable them here as the service would not work correctly otherwise.\n',
                title: 'Service Provision',
              },
              marketing: {
                description:
                  'These services process personal information to show you relevant content about products, services or topics that you might be interested in.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'These services process personal information to optimize the service that this website offers.\n',
                title: 'Performance Optimization',
              },
            },
            save: 'Save',
            service: {
              disableAll: {
                description: 'Use this switch to enable or disable all services.',
                title: 'Enable or disable all services',
              },
              optOut: { description: 'This services is loaded by default (but you can opt out)', title: '(opt-out)' },
              purpose: 'purpose',
              purposes: 'purposes',
              required: { description: 'This services is always required', title: '(always required)' },
            },
          }
        },
        8833: (e) => {
          e.exports = {
            acceptAll: 'Aceptar todas',
            acceptSelected: 'Aceptar seleccionadas',
            close: 'Cerrar',
            consentModal: {
              description:
                'Aquí puede evaluar y personalizar los servicios que nos gustaría utilizar en este sitio web. ¡Usted decide! Habilite o deshabilite los servicios como considere oportuno.',
              privacyPolicy: {
                name: 'política de privacidad',
                text: 'Para saber más, por favor lea nuestra {privacyPolicy}.',
              },
              title: 'Servicios que nos gustaría utilizar',
            },
            consentNotice: {
              changeDescription:
                'Ha habido cambios en las cookies desde su última visita. Debe renovar su consentimiento.',
              description:
                '¡Hola! ¿Podríamos habilitar algunos servicios adicionales para {purposes}? Siempre podrá cambiar o retirar su consentimiento más tarde.',
              imprint: { name: 'Imprimir' },
              learnMore: 'Quiero elegir',
              privacyPolicy: { name: 'política de privacidad' },
              testing: '¡Modo de prueba!',
            },
            contextualConsent: {
              acceptAlways: 'Siempre',
              acceptOnce: 'Sí',
              description: '¿Quieres cargar el contenido externo suministrado por {title}?',
            },
            decline: 'Descartar todas',
            ok: 'De acuerdo',
            poweredBy: '¡Realizado con Klaro!',
            privacyPolicy: {
              name: 'política de privacidad',
              text: 'Para saber más, por favor lea nuestra {privacyPolicy}.',
            },
            purposeItem: { service: 'servicio', services: 'servicios' },
            purposes: {
              advertising: {
                description:
                  'Estos servicios procesan información personal para mostrarle anuncios personalizados o basados en intereses.',
                title: 'Publicidad',
              },
              functional: {
                description:
                  'Estos servicios son esenciales para el correcto funcionamiento de este sitio web. No puede desactivarlos ya que la página no funcionaría correctamente.',
                title: 'Prestación de servicios',
              },
              marketing: {
                description:
                  'Estos servicios procesan información personal para mostrarle contenido relevante sobre productos, servicios o temas que puedan interesarle.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Estos servicios procesan información personal para optimizar el servicio que ofrece este sitio.',
                title: 'Optimización del rendimiento',
              },
            },
            save: 'Guardar',
            service: {
              disableAll: {
                description: 'Utilice este interruptor para activar o desactivar todos los servicios.',
                title: 'Activar o desactivar todos los servicios',
              },
              optOut: {
                description: 'Este servicio está habilitado por defecto (pero puede optar por lo contrario)',
                title: '(desactivar)',
              },
              purpose: 'Finalidad',
              purposes: 'Finalidades',
              required: { description: 'Este servicio es necesario siempre', title: '(siempre requerido)' },
            },
          }
        },
        7646: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: { description: 'Aktivoi kaikki päälle/pois.', title: 'Valitse kaikki' },
              optOut: {
                description: 'Ladataan oletuksena (mutta voit ottaa sen pois päältä)',
                title: '(ladataan oletuksena)',
              },
              purpose: 'Käyttötarkoitus',
              purposes: 'Käyttötarkoitukset',
              required: { description: 'Sivusto vaatii tämän aina', title: '(vaaditaan)' },
            },
            close: 'Sulje',
            consentModal: {
              description: 'Voit tarkastella ja muokata sinusta keräämiämme tietoja.',
              privacyPolicy: { name: 'tietosuojasivultamme', text: 'Voit lukea lisätietoja {privacyPolicy}.' },
              title: 'Keräämämme tiedot',
            },
            consentNotice: {
              changeDescription: 'Olemme tehneet muutoksia ehtoihin viime vierailusi jälkeen, tarkista ehdot.',
              description: 'Keräämme ja käsittelemme henkilötietoja seuraaviin tarkoituksiin: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Lue lisää',
              privacyPolicy: { name: 'tietosuojasivultamme' },
            },
            decline: 'Hylkää',
            ok: 'Hyväksy',
            poweredBy: 'Palvelun tarjoaa Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Tallenna',
          }
        },
        1483: (e) => {
          e.exports = {
            acceptAll: 'Accepter tout',
            acceptSelected: 'Accepter sélectionné',
            close: 'Fermer',
            consentModal: {
              description:
                "Vous pouvez ici évaluer et personnaliser les services que nous aimerions utiliser sur ce site. C'est vous qui décidez ! Activez ou désactivez les services comme bon vous semble.",
              privacyPolicy: {
                name: 'politique de confidentialité',
                text: 'Pour en savoir plus, veuillez lire notre {privacyPolicy}.',
              },
              title: 'Services que nous souhaitons utiliser',
            },
            consentNotice: {
              changeDescription:
                'Il y a eu des changements depuis votre dernière visite, veuillez renouveler votre consentement.',
              description:
                'Bonjour ! Pourrions-nous activer des services supplémentaires pour {purposes}? Vous pouvez toujours modifier ou retirer votre consentement plus tard.',
              imprint: { name: 'mentions légales' },
              learnMore: 'Laissez-moi choisir',
              privacyPolicy: { name: 'politique de confidentialité' },
              testing: 'Mode test !',
            },
            contextualConsent: {
              acceptAlways: 'Toujours',
              acceptOnce: 'Oui',
              description: 'Vous souhaitez charger un contenu externe fourni par {title}?',
            },
            decline: 'Je refuse',
            ok: "C'est bon.",
            poweredBy: 'Réalisé avec Klaro !',
            privacyPolicy: {
              name: 'politique de confidentialité',
              text: 'Pour en savoir plus, veuillez lire notre {privacyPolicy}.',
            },
            purposeItem: { service: 'service', services: 'services' },
            purposes: {
              advertising: {
                description:
                  'Ces services traitent les informations personnelles pour vous présenter des publicités personnalisées ou basées sur des intérêts.',
                title: 'Publicité',
              },
              functional: {
                description:
                  'Ces services sont essentiels au bon fonctionnement de ce site. Vous ne pouvez pas les désactiver ici car le service ne fonctionnerait pas correctement autrement.\n',
                title: 'Prestation de services',
              },
              marketing: {
                description:
                  'Ces services traitent les informations personnelles afin de vous présenter un contenu pertinent sur les produits, les services ou les sujets qui pourraient vous intéresser.',
                title: 'Marketing',
              },
              performance: {
                description:
                  "Ces services traitent les informations personnelles afin d'optimiser le service que ce site Web offre.\n",
                title: 'Optimisation de la performance',
              },
            },
            save: 'Enregistrer',
            service: {
              disableAll: {
                description: 'Utilisez ce commutateur pour activer ou désactiver tous les services.',
                title: 'Activer ou désactiver tous les services',
              },
              optOut: {
                description: 'Ce service est chargé par défaut (mais vous pouvez le désactiver)',
                title: '(opt-out)',
              },
              purpose: 'Objet',
              purposes: 'Fins',
              required: { description: 'Ce service est toujours nécessaire', title: '(toujours requis)' },
            },
          }
        },
        4986: (e) => {
          e.exports = {
            acceptAll: 'Aceptar todas',
            acceptSelected: 'Aceptar seleccionadas',
            close: 'Pechar',
            consentModal: {
              description:
                'Aquí pode avaliar e personalizar os servizos que nos gustaría utilizar neste sitio web. ¡Vostede decide! Habilite ou deshabilite os servicios como lle conveña.',
              privacyPolicy: {
                name: 'política de privacidade',
                text: 'Para saber máis, por favor lea a nosa {privacyPolicy}.',
              },
              title: 'Servizos que nos gustaría utilizar',
            },
            consentNotice: {
              changeDescription:
                'Houbo cambios nas cookies dende a súa última visita. Debe renovar o seu consentimento.',
              description:
                '¡Ola! ¿Poderíamos habilitar algúns servizos adicionais para {purposes}? Sempre poderá cambiar ou retirar o séu consentimento máis tarde.',
              imprint: { name: 'Imprimir' },
              learnMore: 'Quero elixir',
              privacyPolicy: { name: 'política de privacidade' },
              testing: '¡Modo de proba!',
            },
            decline: 'Descartar todas',
            ok: 'De acordo',
            poweredBy: '¡Realizado con Klaro!',
            privacyPolicy: {
              name: 'política de privacidade',
              text: 'Para saber máis, por favor lea a nosa {privacyPolicy}.',
            },
            purposeItem: { service: 'servizo', services: 'servizos' },
            purposes: {
              advertising: {
                description:
                  'Estes servizos procesan información persoal para mostrarlle anuncios personalizados ou basados en intereses.',
                title: 'Publicidade',
              },
              functional: {
                description:
                  'Estes servizos son esenciais para o correcto funcionamiento deste sitio web. Non pode desactivalos xa que a páxina non funcionaría correctamente.',
                title: 'Prestación de servizos',
              },
              marketing: {
                description:
                  'Estes servizos procesan información persoal para mostrarlle contido relevante sobre produtos, servizos ou temas que poidan interesarlle.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Estes servizos procesan información persoal para optimizar o servizo que ofrece este sitio.',
                title: 'Optimización do rendimento',
              },
            },
            save: 'Gardar',
            service: {
              disableAll: {
                description: 'Utilice este interruptor para activar ou desactivar todos os servizos.',
                title: 'Activar ou desactivar todos os servizos',
              },
              optOut: {
                description: 'Este servizo está habilitado por defecto (pero pode optar polo contrario)',
                title: '(desactivar)',
              },
              purpose: 'Finalidade',
              purposes: 'Finalidades',
              required: { description: 'Este servizo é necesario sempre', title: '(sempre requirido)' },
            },
          }
        },
        439: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Prihvati sve',
            acceptSelected: '',
            acceptSelected_en: 'Prihvati odabrane',
            service: {
              disableAll: {
                description: 'Koristite ovaj prekidač da omogućite/onemogućite sve aplikacije odjednom.',
                title: 'Izmeijeni sve',
              },
              optOut: {
                description: 'Ova aplikacija je učitana automatski (ali je možete onemogućiti)',
                title: '(onemogućite)',
              },
              purpose: 'Svrha',
              purposes: 'Svrhe',
              required: { description: 'Ova aplikacija je uvijek obavezna', title: '(obavezna)' },
            },
            close: 'Zatvori',
            consentModal: {
              description: 'Ovdje možete vidjeti i podesiti informacije koje prikupljamo o Vama.',
              privacyPolicy: {
                name: 'pravila privatnosti',
                text: 'Za više informacije pročitajte naša {privacyPolicy}.',
              },
              title: 'Informacije koje prikupljamo',
            },
            consentNotice: {
              changeDescription:
                'Došlo je do promjena od Vaše posljednjeg posjećivanja web stranice, molimo Vas da ažurirate svoja odobrenja.',
              description: 'Mi prikupljamo i procesiramo Vaše osobne podatke radi slijedećeg: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Saznajte više',
              privacyPolicy: { name: 'pravila privatnosti' },
            },
            decline: 'Odbij',
            ok: 'U redu',
            poweredBy: 'Pokreće Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Spremi',
          }
        },
        6250: (e) => {
          e.exports = {
            acceptAll: 'Mind elfogad',
            acceptAll_en: 'Accept all',
            acceptSelected: 'Kiválasztottat elfogad',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description: 'Használja ezt a kapcsolót az összes alkalmazás engedélyezéséhez/letiltásához.',
                title: 'Összes app átkapcsolása',
              },
              optOut: {
                description: 'Ez az alkalmazás alapértelmezés szerint betöltött (de ki lehet kapcsolni)',
                title: '(leiratkozás)',
              },
              purpose: 'Cél',
              purposes: 'Célok',
              required: { description: 'Ez az alkalmazás mindig szükséges', title: '(mindig szükséges)' },
            },
            close: 'Elvet',
            consentModal: {
              description: 'Itt láthatja és testreszabhatja az önről gyűjtött információkat.',
              privacyPolicy: {
                name: 'adatvédelmi irányelveinket',
                text: 'További információért kérjük, olvassa el az {privacyPolicy}.',
              },
              title: 'Információk, amiket gyűjtünk',
            },
            consentNotice: {
              changeDescription: 'Az utolsó látogatás óta változások történtek, kérjük, frissítse a hozzájárulását.',
              description: 'Személyes adatait összegyűjtjük és feldolgozzuk az alábbi célokra: {purposes}.',
              imprint: { name: 'impresszum', name_en: 'imprint' },
              learnMore: 'Tudjon meg többet',
              privacyPolicy: { name: 'adatvédelmi irányelveinket' },
            },
            contextualConsent: {
              acceptAlways: 'Mindig',
              acceptOnce: 'Igen',
              description: 'Be akarod tölteni a {title} által szolgáltatott külső tartalmakat?',
            },
            decline: 'Elutasít',
            ok: 'Elfogad',
            poweredBy: 'Powered by Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Mentés',
          }
        },
        2376: (e) => {
          e.exports = {
            acceptAll: 'Accettare tutti',
            acceptSelected: 'Accettare selezionato',
            close: 'Chiudi',
            consentModal: {
              description:
                'Qui può valutare e personalizzare i servizi che vorremmo utilizzare su questo sito web. È lei il responsabile! Abilitare o disabilitare i servizi come meglio crede.',
              privacyPolicy: {
                name: 'informativa sulla privacy',
                text: 'Per saperne di più, legga la nostra {privacyPolicy}.',
              },
              title: 'Servizi che desideriamo utilizzare',
            },
            consentNotice: {
              changeDescription:
                'Ci sono stati dei cambiamenti rispetto alla sua ultima visita, la preghiamo di rinnovare il suo consenso.',
              description:
                'Salve, possiamo attivare alcuni servizi aggiuntivi per {purposes}? Può sempre modificare o ritirare il suo consenso in un secondo momento.',
              imprint: { name: 'impronta' },
              learnMore: 'Lasciatemi scegliere',
              privacyPolicy: { name: 'informativa sulla privacy' },
              testing: 'Modalità di test!',
            },
            contextualConsent: {
              acceptAlways: 'Sempre',
              acceptOnce: 'Sì',
              description: 'Vuole caricare contenuti esterni forniti da {title}?',
            },
            decline: 'Rifiuto',
            ok: 'Va bene così',
            poweredBy: 'Realizzato con Klaro!',
            privacyPolicy: {
              name: 'informativa sulla privacy',
              text: 'Per saperne di più, legga la nostra {privacyPolicy}.',
            },
            purposeItem: { service: 'servizio', services: 'servizi' },
            purposes: {
              advertising: {
                description:
                  'Questi servizi elaborano le informazioni personali per mostrarle annunci pubblicitari personalizzati o basati su interessi.',
                title: 'Pubblicità',
              },
              functional: {
                description:
                  'Questi servizi sono essenziali per il corretto funzionamento di questo sito web. Non può disattivarli qui perché altrimenti il servizio non funzionerebbe correttamente.\n',
                title: 'Fornitura di servizi',
              },
              marketing: {
                description:
                  'Questi servizi elaborano le informazioni personali per mostrarle contenuti rilevanti su prodotti, servizi o argomenti che potrebbero interessarla.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Questi servizi elaborano le informazioni personali per ottimizzare il servizio offerto da questo sito web.\n',
                title: 'Ottimizzazione delle prestazioni',
              },
            },
            save: 'Salva',
            service: {
              disableAll: {
                description: 'Utilizzi questo interruttore per attivare o disattivare tutti i servizi.',
                title: 'Attivare o disattivare tutti i servizi',
              },
              optOut: {
                description: 'Questo servizio è caricato di default (ma è possibile scegliere di non usufruirne)',
                title: '(opt-out)',
              },
              purpose: 'Scopo dell',
              purposes: 'Finalità',
              required: { description: 'Questo servizio è sempre richiesto', title: '(sempre richiesto)' },
            },
          }
        },
        1163: (e) => {
          e.exports = {
            acceptAll: 'Accepteer alle',
            acceptSelected: 'Geselecteerde',
            close: 'Sluit',
            consentModal: {
              description:
                'Hier kunt u de diensten die wij op deze website willen gebruiken beoordelen en aanpassen. U heeft de leiding! Schakel de diensten naar eigen inzicht in of uit.',
              privacyPolicy: { name: 'privacybeleid', text: 'Voor meer informatie kunt u ons {privacyPolicy} lezen.' },
              title: 'Diensten die we graag willen gebruiken',
            },
            consentNotice: {
              changeDescription:
                'Er waren veranderingen sinds uw laatste bezoek, gelieve uw toestemming te hernieuwen.',
              description:
                'Hallo, kunnen wij u een aantal extra diensten aanbieden voor {purposes}? U kunt uw toestemming later altijd nog wijzigen of intrekken.',
              imprint: { name: 'impressum' },
              learnMore: 'Laat me kiezen',
              privacyPolicy: { name: 'privacybeleid' },
              testing: 'Testmodus!',
            },
            contextualConsent: {
              acceptAlways: 'Altijd',
              acceptOnce: 'Ja',
              description: 'Wilt u externe content laden die door {title} wordt aangeleverd ?',
            },
            decline: 'Ik weiger',
            ok: 'Dat is oké',
            poweredBy: 'Gerealiseerd met Klaro!',
            privacyPolicy: { name: 'privacybeleid', text: 'Voor meer informatie kunt u ons {privacyPolicy} lezen.' },
            purposeItem: { service: 'service', services: 'diensten' },
            purposes: {
              advertising: {
                description:
                  'Deze diensten verwerken persoonlijke informatie om u gepersonaliseerde of op interesse gebaseerde advertenties te tonen.',
                title: 'Reclame',
              },
              functional: {
                description:
                  'Deze diensten zijn essentieel voor het correct functioneren van deze website. U kunt ze hier niet uitschakelen omdat de dienst anders niet correct zou werken.\n',
                title: 'Dienstverlening',
              },
              marketing: {
                description:
                  'Deze diensten verwerken persoonlijke informatie om u relevante inhoud te tonen over producten, diensten of onderwerpen waarin u geïnteresseerd zou kunnen zijn.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Deze diensten verwerken persoonlijke informatie om de service die deze website biedt te optimaliseren.\n',
                title: 'Optimalisatie van de prestaties',
              },
            },
            save: 'Opslaan',
            service: {
              disableAll: {
                description: 'Gebruik deze schakelaar om alle diensten in of uit te schakelen.',
                title: 'Alle diensten in- of uitschakelen',
              },
              optOut: {
                description: 'Deze diensten worden standaard geladen (maar u kunt zich afmelden)',
                title: '(opt-out)',
              },
              purpose: 'Verwerkingsdoel',
              purposes: 'Verwerkingsdoeleinden',
              required: { description: 'Deze diensten zijn altijd nodig', title: '(altijd nodig)' },
            },
          }
        },
        4501: (e) => {
          e.exports = {
            acceptAll: 'Godtar alle',
            acceptSelected: 'Godtar valgt',
            service: {
              disableAll: { description: 'Bruk denne for å skru av/på alle apper.', title: 'Bytt alle apper' },
              optOut: {
                description: 'Denne appen er lastet som standard (men du kan skru det av)',
                title: '(opt-out)',
              },
              purpose: 'Årsak',
              purposes: 'Årsaker',
              required: { description: 'Denne applikasjonen er alltid påkrevd', title: '(alltid påkrevd)' },
            },
            close: '',
            close_en: 'Close',
            consentModal: {
              description: 'Her kan du se og velge hvilken informasjon vi samler inn om deg.',
              privacyPolicy: {
                name: 'personvernerklæring',
                text: 'For å lære mer, vennligst les vår {privacyPolicy}.',
              },
              title: 'Informasjon vi samler inn',
            },
            consentNotice: {
              changeDescription: 'Det har skjedd endringer siden ditt siste besøk, vennligst oppdater ditt samtykke.',
              description: 'Vi samler inn og prosesserer din personlige informasjon av følgende årsaker: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Lær mer',
              privacyPolicy: { name: 'personvernerklæring' },
            },
            decline: 'Avslå',
            ok: 'OK',
            poweredBy: 'Laget med Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Opslaan',
          }
        },
        1375: (e) => {
          e.exports = {
            acceptAll: 'Tot acceptar',
            acceptSelected: 'Acceptar çò seleccionat',
            close: 'Tampar',
            consentModal: {
              description:
                'Aquí podètz mesurar e personalizar los servicis que volriam utilizar sus aqueste site web. Avètz lo darrièr mot ! Activatz o desactivatz segon vòstra causida.',
              title: 'Servicis que volriam utilizar',
            },
            consentNotice: {
              changeDescription:
                'I aguèt de modificacions dempuèi vòstra darrièra visita, mercés de repassar vòstre consentiment.',
              description:
                'Adieu ! Poiriam activar mai de servici per {purposes} ? Podètz totjorn modificar o tirar vòstre consentiment mai tard.',
              learnMore: 'Me daissar causir',
              testing: 'Mòde tèst !',
            },
            contextualConsent: {
              acceptAlways: 'Totjorn',
              acceptOnce: 'Òc',
              description: 'Volètz cargar de contenguts extèrn provesits per {title} ?',
            },
            decline: 'Refusi',
            ok: 'Es bon',
            poweredBy: 'Realizat amb Klaro !',
            privacyPolicy: {
              name: 'politica de confidencialitat',
              text: 'Per ne saber mai, vejatz nòstra {privacyPolicy}.',
            },
            purposeItem: { service: 'servici', services: 'servicis' },
            purposes: {
              advertising: {
                description:
                  'Aquestes servicis tractan d’informacions personalas per vos mostrar de reclamas personalizadas o basadas suls interèsses.',
                title: 'Reclama',
              },
              functional: {
                description:
                  'Aquestes servicis son essencials pel foncionament corrèct d’aqueste site web. Los podètz pas desactivar aquí pr’amor que lo servici foncionariá pas coma cal autrament.\n',
                title: 'Servici de provision',
              },
              marketing: {
                description:
                  'Aquestes servicis tractan d’informacions personalas per vos mostrar de contenguts a prepaus de produits, de servicis o tèmas que poirián vos interessar.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Aquestes servicis tractan d’informacions per optimizar lo servici qu’aqueste site web prepausa.\n',
                title: 'Optimizacion de las performanças',
              },
            },
            save: 'Salvar',
            service: {
              disableAll: {
                description: 'Utilizatz aqueste alternator per activar o desactivar totes los servicis.',
                title: 'Activar o desactivar totes los servicis',
              },
              optOut: {
                description: 'Aqueste servici es cargar per defaut (mas lo podètz desactivar)',
                title: '(opt-out)',
              },
              purpose: 'finalitat',
              purposes: 'finalitat',
              required: { description: 'Aqueste servici es totjorn requesit', title: '(totjorn requesit)' },
            },
          }
        },
        6758: (e) => {
          e.exports = {
            acceptAll: 'Zaakceptuj wszystkie',
            acceptSelected: 'Zaakceptuj wybrane',
            close: 'Zamknij',
            consentModal: {
              description:
                'Tutaj mogą Państwo ocenić i dostosować usługi, które chcielibyśmy wykorzystać na tej stronie. Włączaj lub wyłączaj usługi według własnego uznania.',
              privacyPolicy: {
                name: 'polityką prywatności',
                text: 'Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}.',
              },
              title: 'Usługi, z których chcielibyśmy skorzystać',
            },
            consentNotice: {
              changeDescription: 'Od Twojej ostatniej wizyty nastąpiły zmiany, prosimy o odnowienie zgody.',
              description:
                'Czy możemy włączyć dodatkowe usługi dla {purposes}? W każdej chwili mogą Państwo później zmienić lub wycofać swoją zgodę.',
              imprint: { name: 'Imprint' },
              learnMore: 'Pozwól mi wybrać',
              privacyPolicy: { name: 'polityka prywatności' },
              testing: 'Tryb testowy!',
            },
            contextualConsent: {
              acceptAlways: 'Zawsze',
              acceptOnce: 'Tak',
              description: 'Czy chcą Państwo załadować treści zewnętrzne dostarczane przez {title}?',
            },
            decline: 'Odmawiam',
            ok: 'Ok',
            poweredBy: 'Technologia dostarczona przez Klaro',
            privacyPolicy: {
              name: 'polityka prywatności',
              text: 'Aby dowiedzieć się więcej, prosimy o zapoznanie się z naszą {privacyPolicy}.',
            },
            purposeItem: { service: 'usługa', services: 'usługi' },
            purposes: {
              advertising: {
                description:
                  'Usługi te przetwarzają dane osobowe w celu pokazania Państwu spersonalizowanych lub opartych na zainteresowaniach reklam.',
                title: 'Reklama',
              },
              functional: {
                description:
                  'Usługi te są niezbędne do prawidłowego funkcjonowania niniejszej strony internetowej. Nie mogą Państwo ich tutaj wyłączyć, ponieważ w przeciwnym razie strona nie działałaby prawidłowo.\n',
                title: 'Świadczenie usług',
              },
              marketing: {
                description:
                  'Usługi te przetwarzają dane osobowe w celu pokazania Państwu istotnych treści dotyczących produktów, usług lub tematów, którymi mogą być Państwo zainteresowani.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Usługi te przetwarzają dane osobowe w celu optymalizacji usług oferowanych przez tę stronę.\n',
                title: 'Optymalizacja wydajności',
              },
            },
            save: 'Zapisz',
            service: {
              disableAll: {
                description: 'Za pomocą tego przełącznika można włączać lub wyłączać wszystkie usługi.',
                title: 'Włącz lub wyłącz wszystkie usługi',
              },
              optOut: {
                description: 'Ta usługa jest domyślnie załadowana (ale mogą Państwo z niej zrezygnować)',
                title: '(opt-out)',
              },
              purpose: 'Cel',
              purposes: 'Cele',
              required: { description: 'Usługi te są zawsze wymagane', title: '(zawsze wymagane)' },
            },
          }
        },
        1509: (e) => {
          e.exports = {
            acceptAll: 'Aceitar todos',
            acceptSelected: 'Aceitar selecionados',
            close: 'Fechar',
            consentModal: {
              description:
                'Aqui você pode avaliar e personalizar os serviços que gostaríamos de usar neste website. Você está no comando! Habilite ou desabilite os serviços como julgar conveniente.',
              privacyPolicy: {
                name: 'política de privacidade',
                text: 'Para saber mais, por favor, leia nossa {privacyPolicy}.',
              },
              title: 'Serviços que gostaríamos de utilizar',
            },
            consentNotice: {
              changeDescription: 'Houve mudanças desde sua última visita, queira renovar seu consentimento.',
              description:
                'Olá! Poderíamos, por favor, habilitar alguns serviços adicionais para {purposes}? Você pode sempre mudar ou retirar seu consentimento mais tarde.',
              imprint: { name: 'imprimir' },
              learnMore: 'Deixe-me escolher',
              privacyPolicy: { name: 'política de privacidade' },
              testing: 'Modo de teste!',
            },
            contextualConsent: {
              acceptAlways: 'Sempre',
              acceptOnce: 'Sim',
              description: 'Você deseja carregar conteúdo externo fornecido por {title}?',
            },
            decline: 'Recusar',
            ok: 'Aceito.',
            poweredBy: 'Realizado com Klaro!',
            privacyPolicy: {
              name: 'política de privacidade',
              text: 'Para saber mais, por favor, leia nossa {privacyPolicy}.',
            },
            purposeItem: { service: 'serviço', services: 'serviços' },
            purposes: {
              advertising: {
                description:
                  'Esses serviços processam informações pessoais para mostrar a você anúncios personalizados ou baseados em interesses.',
                title: 'Publicidade',
              },
              functional: {
                description:
                  'Esses serviços são essenciais para o correto funcionamento deste website. Você não pode desativá-los aqui, pois de outra forma o serviço não funcionaria corretamente.\n',
                title: 'Prestação de serviços',
              },
              marketing: {
                description:
                  'Esses serviços processam informações pessoais para mostrar a você conteúdo relevante sobre produtos, serviços ou tópicos que possam ser do seu interesse.',
                title: 'Marketing',
              },
              performance: {
                description:
                  'Esses serviços processam informações pessoais para otimizar o serviço que este website oferece.\n',
                title: 'Otimização do desempenho',
              },
            },
            save: 'Salvar',
            service: {
              disableAll: {
                description: 'Use essa chave para habilitar ou desabilitar todos os serviços.',
                title: 'Habilitar ou desabilitar todos os serviços',
              },
              optOut: {
                description: 'Estes serviços são carregados por padrão (mas o você pode optar por não participar).',
                title: '(opt-out)',
              },
              purpose: 'Objetivo',
              purposes: 'Objetivos',
              required: { description: 'Esses serviços são sempre necessários', title: '(sempre necessário)' },
            },
          }
        },
        5137: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description: 'Utilizați acest switch pentru a activa/dezactiva toate aplicațiile.',
                title: 'Comutați între toate aplicațiile',
              },
              optOut: {
                description: 'Această aplicație este încărcată în mod implicit (dar puteți renunța)',
                title: '(opt-out)',
              },
              purpose: 'Scop',
              purposes: 'Scopuri',
              required: { description: 'Această aplicație este întotdeauna necesară', title: '(întotdeauna necesar)' },
            },
            close: '',
            close_en: 'Close',
            consentModal: {
              description: 'Aici puteți vedea și personaliza informațiile pe care le colectăm despre dvs.',
              privacyPolicy: {
                name: 'politica privacy',
                text: 'Pentru a afla mai multe, vă rugăm să citiți {privacyPolicy}.',
              },
              title: 'Informațiile pe care le colectăm',
            },
            consentNotice: {
              changeDescription: 'Au existat modificări de la ultima vizită, vă rugăm să actualizați consimțământul.',
              description: 'Colectăm și procesăm informațiile dvs. personale în următoarele scopuri: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Află mai multe',
              privacyPolicy: { name: 'politica privacy' },
            },
            decline: 'Renunță',
            ok: 'OK',
            poweredBy: 'Realizat de Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Salvează',
          }
        },
        6227: (e) => {
          e.exports = {
            acceptAll: 'Принять всё',
            acceptSelected: 'Принять выбранные',
            service: {
              disableAll: {
                description: 'Используйте этот переключатель, чтобы включить/отключить все приложения.',
                title: 'Переключить все приложения',
              },
              optOut: {
                description: 'Это приложение включено по умолчанию (но вы можете отказаться)',
                title: '(отказаться)',
              },
              purpose: 'Намерение',
              purposes: 'Намерения',
              required: { description: 'Это обязательное приложение', title: '(всегда обязательный)' },
            },
            close: 'Закрыть',
            consentModal: {
              description: 'Здесь вы можете просмотреть и настроить, какую информацию о вас мы храним.',
              privacyPolicy: {
                name: 'Соглашение',
                text: 'Чтобы узнать больше, пожалуйста, прочитайте наше {privacyPolicy}.',
              },
              title: 'Информация, которую мы сохраняем',
            },
            consentNotice: {
              changeDescription: 'Со времени вашего последнего визита произошли изменения, обновите своё согласие.',
              description: 'Мы собираем и обрабатываем вашу личную информацию для следующих целей: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Настроить',
              privacyPolicy: { name: 'политика конфиденциальности' },
            },
            decline: 'Отклонить',
            ok: 'Принять',
            poweredBy: 'Работает на Кларо!',
            purposeItem: { service: '', services: '' },
            save: 'Сохранить',
          }
        },
        812: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description: 'Koristite ovaj prekidač da omogućite/onesposobite sve aplikacije odjednom.',
                title: 'Izmeni sve',
              },
              optOut: {
                description: 'Ova aplikacija je učitana automatski (ali je možete onesposobiti)',
                title: '(onesposobite)',
              },
              purpose: 'Svrha',
              purposes: 'Svrhe',
              required: { description: 'Ova aplikacija je uvek neophodna', title: '(neophodna)' },
            },
            close: 'Zatvori',
            consentModal: {
              description: 'Ovde možete videti i podesiti informacije koje prikupljamo o Vama.',
              privacyPolicy: {
                name: 'politiku privatnosti',
                text: 'Za više informacije pročitajte našu {privacyPolicy}.',
              },
              title: 'Informacije koje prikupljamo',
            },
            consentNotice: {
              changeDescription:
                'Došlo je do promena od Vaše poslednje posete, molimo Vas da ažurirate svoja odobrenja.',
              description: 'Mi prikupljamo i procesiramo Vaše lične podatke radi sledećeg: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Saznajte više',
              privacyPolicy: { name: 'politiku privatnosti' },
            },
            decline: 'Odbij',
            ok: 'U redu',
            poweredBy: 'Pokreće Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Sačuvaj',
          }
        },
        2220: (e) => {
          e.exports = {
            consentModal: {
              title: 'Информације које прикупљамо',
              description: 'Овде можете видет и подесити информације које прикупљамо о Вама.\n',
              privacyPolicy: {
                name: 'политику приватности',
                text: 'За више информација прочитајте нашу {privacyPolicy}.\n',
              },
            },
            consentNotice: {
              changeDescription:
                'Дошло је до промена од Ваше последнје посете, молимо Вас да ажурирате своја одобрења.',
              description: 'Ми прикупљамо и процесирамо Ваше личне податке ради следећег: {purposes}.\n',
              learnMore: 'Сазнајте више',
              privacyPolicy: { name: 'политику приватности' },
            },
            ok: 'У реду',
            save: 'Сачувај',
            decline: 'Одбиј',
            close: 'Затвори',
            service: {
              disableAll: {
                title: 'Измени све',
                description: 'Користите овај прекидач да омогућите/онеспособите све апликације одједном.',
              },
              optOut: {
                title: '(онеспособите)',
                description: 'Ова апликација је учитана аутоматски (али је можете онеспособити)',
              },
              required: { title: '(неопходна)', description: 'Ова апликација је увек неопходна.' },
              purposes: 'Сврхе',
              purpose: 'Сврха',
            },
            poweredBy: 'Покреће Кларо!',
          }
        },
        3538: (e) => {
          e.exports = {
            acceptAll: 'Acceptera alla',
            acceptSelected: 'Acceptera markerat',
            service: {
              disableAll: {
                description: 'Använd detta reglage för att aktivera/avaktivera samtliga appar.',
                title: 'Ändra för alla appar',
              },
              optOut: {
                description: 'Den här appen laddas som standardinställning (men du kan avaktivera den)',
                title: '(Avaktivera)',
              },
              purpose: 'Syfte',
              purposes: 'Syften',
              required: { description: 'Den här applikationen krävs alltid', title: '(Krävs alltid)' },
            },
            close: 'Stäng',
            consentModal: {
              description: 'Här kan du se och anpassa vilken information vi samlar om dig.',
              privacyPolicy: { name: 'Integritetspolicy', text: 'För att veta mer, läs vår {privacyPolicy}.' },
              title: 'Information som vi samlar',
            },
            consentNotice: {
              changeDescription:
                'Det har skett förändringar sedan ditt senaste besök, var god uppdatera ditt medgivande.',
              description: 'Vi samlar och bearbetar din personliga data i följande syften: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Läs mer',
              privacyPolicy: { name: 'Integritetspolicy' },
            },
            decline: 'Avböj',
            ok: 'OK',
            poweredBy: 'Körs på Klaro!',
            purposeItem: { service: '', services: '' },
            save: 'Spara',
          }
        },
        4785: (e) => {
          e.exports = {
            acceptAll: '',
            acceptAll_en: 'Accept all',
            acceptSelected: '',
            acceptSelected_en: 'Accept selected',
            service: {
              disableAll: {
                description: 'Toplu açma/kapama için bu düğmeyi kullanabilirsin.',
                title: 'Tüm uygulamaları aç/kapat',
              },
              optOut: {
                description: 'Bu uygulama varsayılanda yüklendi (ancak iptal edebilirsin)',
                title: '(isteğe bağlı)',
              },
              purpose: 'Amaç',
              purposes: 'Amaçlar',
              required: { description: 'Bu uygulama her zaman gerekli', title: '(her zaman gerekli)' },
            },
            close: 'Kapat',
            consentModal: {
              description: 'Hakkınızda topladığımız bilgileri burada görebilir ve özelleştirebilirsiniz.',
              privacyPolicy: {
                name: 'Gizlilik Politikası',
                text: 'Daha fazlası için lütfen {privacyPolicy} sayfamızı okuyun.',
              },
              title: 'Sakladığımız bilgiler',
            },
            consentNotice: {
              changeDescription: 'Son ziyaretinizden bu yana değişiklikler oldu, lütfen seçiminizi güncelleyin.',
              description: 'Kişisel bilgilerinizi aşağıdaki amaçlarla saklıyor ve işliyoruz: {purposes}.',
              imprint: { name: '', name_en: 'imprint' },
              learnMore: 'Daha fazla bilgi',
              privacyPolicy: { name: 'Gizlilik Politikası' },
            },
            decline: 'Reddet',
            ok: 'Tamam',
            poweredBy: 'Klaro tarafından geliştirildi!',
            purposeItem: { service: '', services: '' },
            save: 'Kaydet',
          }
        },
        1898: (e) => {
          e.exports = {
            acceptAll: '照单全收',
            acceptSelected: '接受选择',
            close: '密切',
            consentModal: {
              description:
                '在这里，您可以评估和定制我们希望在本网站上使用的服务。您是负责人！您可以根据自己的需要启用或禁用服务。启用或禁用您认为合适的服务。',
              privacyPolicy: { name: '隐私政策', text: '要了解更多，请阅读我们的{privacyPolicy} 。' },
              title: '我们想使用的服务',
            },
            consentNotice: {
              changeDescription: '自上次访问后有变化，请更新您的同意。',
              description: '你好！我们可以为{purposes} 启用一些额外的服务吗？您可以随时更改或撤回您的同意。',
              imprint: { name: '印记' },
              learnMore: '让我来选',
              privacyPolicy: { name: '隐私政策' },
              testing: '测试模式！',
            },
            contextualConsent: {
              acceptAlways: '总是',
              acceptOnce: '是的，是的',
              description: '你想加载由{title} 提供的外部内容吗？',
            },
            decline: '我拒绝',
            ok: '没事的',
            poweredBy: '与Klaro一起实现!',
            privacyPolicy: { name: '隐私政策', text: '要了解更多，请阅读我们的{privacyPolicy} 。' },
            purposeItem: { service: '服务', services: '服务' },
            purposes: {
              advertising: { description: '这些服务处理个人信息，向您展示个性化或基于兴趣的广告。', title: '广告宣传' },
              functional: {
                description:
                  '这些服务对于本网站的正常运行是必不可少的。您不能在这里禁用它们，否则服务将无法正常运行。\n',
                title: '服务提供',
              },
              marketing: {
                description: '这些服务会处理个人信息，向您展示您可能感兴趣的产品、服务或主题的相关内容。',
                title: '市场营销',
              },
              performance: { description: '这些服务处理个人信息是为了优化本网站提供的服务。\n', title: '性能优化' },
            },
            save: '挽救',
            service: {
              disableAll: { description: '使用此开关可启用或禁用所有服务。', title: '启用或停用所有服务' },
              optOut: { description: '这个服务是默认加载的(但你可以选择退出)', title: '(选择退出)' },
              purpose: '目的',
              purposes: '目的',
              required: { description: '这种服务是必须的', title: '(总是需要)' },
            },
          }
        },
        8772: (e, t, n) => {
          'use strict'
          var r = n(331)
          function o() {}
          function i() {}
          ;(i.resetWarningCache = o),
            (e.exports = function () {
              function e(e, t, n, o, i, a) {
                if (a !== r) {
                  var s = new Error(
                    'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
                  )
                  throw ((s.name = 'Invariant Violation'), s)
                }
              }
              function t() {
                return e
              }
              e.isRequired = e
              var n = {
                array: e,
                bigint: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                elementType: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t,
                checkPropTypes: i,
                resetWarningCache: o,
              }
              return (n.PropTypes = n), n
            })
        },
        3615: (e, t, n) => {
          e.exports = n(8772)()
        },
        331: (e) => {
          'use strict'
          e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
        },
      },
      t = {}
    function n(r) {
      var o = t[r]
      if (void 0 !== o) return o.exports
      var i = (t[r] = { exports: {} })
      return e[r](i, i.exports, n), i.exports
    }
    ;(n.n = (e) => {
      var t = e && e.__esModule ? () => e.default : () => e
      return n.d(t, { a: t }), t
    }),
      (n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
      }),
      (n.g = (function () {
        if ('object' == typeof globalThis) return globalThis
        try {
          return this || new Function('return this')()
        } catch (e) {
          if ('object' == typeof window) return window
        }
      })()),
      (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (n.r = (e) => {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 })
      })
    var r = {}
    return (
      (() => {
        'use strict'
        n.r(r),
          n.d(r, {
            addEventListener: () => Fn,
            defaultConfig: () => zn,
            defaultTranslations: () => Nn,
            getConfigTranslations: () => Wn,
            getElement: () => Un,
            getElementID: () => Bn,
            getManager: () => er,
            language: () => Ee,
            render: () => Vn,
            renderContextualConsentNotices: () => $n,
            resetManagers: () => Xn,
            setup: () => Yn,
            show: () => Jn,
            updateConfig: () => kt,
            validateConfig: () => Zn,
            version: () => tr,
          }),
          n(5769),
          n(1484),
          n(3238),
          n(7460),
          n(4078),
          n(3938),
          n(3352),
          n(2077),
          n(1013),
          n(2482),
          n(2410),
          n(2327),
          n(2571),
          n(5610),
          n(5901),
          n(2189),
          n(1047),
          n(9785),
          n(8010),
          n(252),
          n(5849),
          n(4009),
          n(2699)
        var e,
          t,
          o,
          i,
          a,
          s,
          c = {},
          l = [],
          u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i
        function p(e, t) {
          for (var n in t) e[n] = t[n]
          return e
        }
        function f(e) {
          var t = e.parentNode
          t && t.removeChild(e)
        }
        function d(t, n, r) {
          var o,
            i,
            a,
            s = {}
          for (a in n) 'key' == a ? (o = n[a]) : 'ref' == a ? (i = n[a]) : (s[a] = n[a])
          if (
            (arguments.length > 2 && (s.children = arguments.length > 3 ? e.call(arguments, 2) : r),
            'function' == typeof t && null != t.defaultProps)
          )
            for (a in t.defaultProps) void 0 === s[a] && (s[a] = t.defaultProps[a])
          return v(t, s, o, i, null)
        }
        function v(e, n, r, i, a) {
          var s = {
            type: e,
            props: n,
            key: r,
            ref: i,
            __k: null,
            __: null,
            __b: 0,
            __e: null,
            __d: void 0,
            __c: null,
            __h: null,
            constructor: void 0,
            __v: null == a ? ++o : a,
          }
          return null == a && null != t.vnode && t.vnode(s), s
        }
        function y(e) {
          return e.children
        }
        function m(e, t) {
          ;(this.props = e), (this.context = t)
        }
        function h(e, t) {
          if (null == t) return e.__ ? h(e.__, e.__.__k.indexOf(e) + 1) : null
          for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e
          return 'function' == typeof e.type ? h(e) : null
        }
        function g(e) {
          var t, n
          if (null != (e = e.__) && null != e.__c) {
            for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
              if (null != (n = e.__k[t]) && null != n.__e) {
                e.__e = e.__c.base = n.__e
                break
              }
            return g(e)
          }
        }
        function b(e) {
          ;((!e.__d && (e.__d = !0) && i.push(e) && !_.__r++) || s !== t.debounceRendering) &&
            ((s = t.debounceRendering) || a)(_)
        }
        function _() {
          for (var e; (_.__r = i.length); )
            (e = i.sort(function (e, t) {
              return e.__v.__b - t.__v.__b
            })),
              (i = []),
              e.some(function (e) {
                var t, n, r, o, i, a
                e.__d &&
                  ((i = (o = (t = e).__v).__e),
                  (a = t.__P) &&
                    ((n = []),
                    ((r = p({}, o)).__v = o.__v + 1),
                    z(
                      a,
                      o,
                      r,
                      t.__n,
                      void 0 !== a.ownerSVGElement,
                      null != o.__h ? [i] : null,
                      n,
                      null == i ? h(o) : i,
                      o.__h
                    ),
                    E(n, o),
                    o.__e != i && g(o)))
              })
        }
        function k(e, t, n, r, o, i, a, s, u, p) {
          var f,
            d,
            m,
            g,
            b,
            _,
            k,
            x = (r && r.__k) || l,
            O = x.length
          for (n.__k = [], f = 0; f < t.length; f++)
            if (
              null !=
              (g = n.__k[f] =
                null == (g = t[f]) || 'boolean' == typeof g
                  ? null
                  : 'string' == typeof g || 'number' == typeof g || 'bigint' == typeof g
                  ? v(null, g, null, null, g)
                  : Array.isArray(g)
                  ? v(y, { children: g }, null, null, null)
                  : g.__b > 0
                  ? v(g.type, g.props, g.key, null, g.__v)
                  : g)
            ) {
              if (((g.__ = n), (g.__b = n.__b + 1), null === (m = x[f]) || (m && g.key == m.key && g.type === m.type)))
                x[f] = void 0
              else
                for (d = 0; d < O; d++) {
                  if ((m = x[d]) && g.key == m.key && g.type === m.type) {
                    x[d] = void 0
                    break
                  }
                  m = null
                }
              z(e, g, (m = m || c), o, i, a, s, u, p),
                (b = g.__e),
                (d = g.ref) && m.ref != d && (k || (k = []), m.ref && k.push(m.ref, null, g), k.push(d, g.__c || b, g)),
                null != b
                  ? (null == _ && (_ = b),
                    'function' == typeof g.type && g.__k === m.__k
                      ? (g.__d = u = w(g, u, e))
                      : (u = j(e, g, m, x, b, u)),
                    'function' == typeof n.type && (n.__d = u))
                  : u && m.__e == u && u.parentNode != e && (u = h(m))
            }
          for (n.__e = _, f = O; f--; )
            null != x[f] &&
              ('function' == typeof n.type && null != x[f].__e && x[f].__e == n.__d && (n.__d = h(r, f + 1)),
              I(x[f], x[f]))
          if (k) for (f = 0; f < k.length; f++) T(k[f], k[++f], k[++f])
        }
        function w(e, t, n) {
          for (var r, o = e.__k, i = 0; o && i < o.length; i++)
            (r = o[i]) && ((r.__ = e), (t = 'function' == typeof r.type ? w(r, t, n) : j(n, r, r, o, r.__e, t)))
          return t
        }
        function x(e, t) {
          return (
            (t = t || []),
            null == e ||
              'boolean' == typeof e ||
              (Array.isArray(e)
                ? e.some(function (e) {
                    x(e, t)
                  })
                : t.push(e)),
            t
          )
        }
        function j(e, t, n, r, o, i) {
          var a, s, c
          if (void 0 !== t.__d) (a = t.__d), (t.__d = void 0)
          else if (null == n || o != i || null == o.parentNode)
            e: if (null == i || i.parentNode !== e) e.appendChild(o), (a = null)
            else {
              for (s = i, c = 0; (s = s.nextSibling) && c < r.length; c += 2) if (s == o) break e
              e.insertBefore(o, i), (a = i)
            }
          return void 0 !== a ? a : o.nextSibling
        }
        function O(e, t, n) {
          '-' === t[0]
            ? e.setProperty(t, n)
            : (e[t] = null == n ? '' : 'number' != typeof n || u.test(t) ? n : n + 'px')
        }
        function S(e, t, n, r, o) {
          var i
          e: if ('style' === t)
            if ('string' == typeof n) e.style.cssText = n
            else {
              if (('string' == typeof r && (e.style.cssText = r = ''), r))
                for (t in r) (n && t in n) || O(e.style, t, '')
              if (n) for (t in n) (r && n[t] === r[t]) || O(e.style, t, n[t])
            }
          else if ('o' === t[0] && 'n' === t[1])
            (i = t !== (t = t.replace(/Capture$/, ''))),
              (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
              e.l || (e.l = {}),
              (e.l[t + i] = n),
              n ? r || e.addEventListener(t, i ? A : P, i) : e.removeEventListener(t, i ? A : P, i)
          else if ('dangerouslySetInnerHTML' !== t) {
            if (o) t = t.replace(/xlink[H:h]/, 'h').replace(/sName$/, 's')
            else if ('href' !== t && 'list' !== t && 'form' !== t && 'tabIndex' !== t && 'download' !== t && t in e)
              try {
                e[t] = null == n ? '' : n
                break e
              } catch (e) {}
            'function' == typeof n ||
              (null != n && (!1 !== n || ('a' === t[0] && 'r' === t[1])) ? e.setAttribute(t, n) : e.removeAttribute(t))
          }
        }
        function P(e) {
          this.l[e.type + !1](t.event ? t.event(e) : e)
        }
        function A(e) {
          this.l[e.type + !0](t.event ? t.event(e) : e)
        }
        function z(e, n, r, o, i, a, s, c, l) {
          var u,
            f,
            d,
            v,
            h,
            g,
            b,
            _,
            w,
            x,
            j,
            O = n.type
          if (void 0 !== n.constructor) return null
          null != r.__h && ((l = r.__h), (c = n.__e = r.__e), (n.__h = null), (a = [c])), (u = t.__b) && u(n)
          try {
            e: if ('function' == typeof O) {
              if (
                ((_ = n.props),
                (w = (u = O.contextType) && o[u.__c]),
                (x = u ? (w ? w.props.value : u.__) : o),
                r.__c
                  ? (b = (f = n.__c = r.__c).__ = f.__E)
                  : ('prototype' in O && O.prototype.render
                      ? (n.__c = f = new O(_, x))
                      : ((n.__c = f = new m(_, x)), (f.constructor = O), (f.render = D)),
                    w && w.sub(f),
                    (f.props = _),
                    f.state || (f.state = {}),
                    (f.context = x),
                    (f.__n = o),
                    (d = f.__d = !0),
                    (f.__h = [])),
                null == f.__s && (f.__s = f.state),
                null != O.getDerivedStateFromProps &&
                  (f.__s == f.state && (f.__s = p({}, f.__s)), p(f.__s, O.getDerivedStateFromProps(_, f.__s))),
                (v = f.props),
                (h = f.state),
                d)
              )
                null == O.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(),
                  null != f.componentDidMount && f.__h.push(f.componentDidMount)
              else {
                if (
                  (null == O.getDerivedStateFromProps &&
                    _ !== v &&
                    null != f.componentWillReceiveProps &&
                    f.componentWillReceiveProps(_, x),
                  (!f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(_, f.__s, x)) ||
                    n.__v === r.__v)
                ) {
                  ;(f.props = _),
                    (f.state = f.__s),
                    n.__v !== r.__v && (f.__d = !1),
                    (f.__v = n),
                    (n.__e = r.__e),
                    (n.__k = r.__k),
                    n.__k.forEach(function (e) {
                      e && (e.__ = n)
                    }),
                    f.__h.length && s.push(f)
                  break e
                }
                null != f.componentWillUpdate && f.componentWillUpdate(_, f.__s, x),
                  null != f.componentDidUpdate &&
                    f.__h.push(function () {
                      f.componentDidUpdate(v, h, g)
                    })
              }
              ;(f.context = x),
                (f.props = _),
                (f.state = f.__s),
                (u = t.__r) && u(n),
                (f.__d = !1),
                (f.__v = n),
                (f.__P = e),
                (u = f.render(f.props, f.state, f.context)),
                (f.state = f.__s),
                null != f.getChildContext && (o = p(p({}, o), f.getChildContext())),
                d || null == f.getSnapshotBeforeUpdate || (g = f.getSnapshotBeforeUpdate(v, h)),
                (j = null != u && u.type === y && null == u.key ? u.props.children : u),
                k(e, Array.isArray(j) ? j : [j], n, r, o, i, a, s, c, l),
                (f.base = n.__e),
                (n.__h = null),
                f.__h.length && s.push(f),
                b && (f.__E = f.__ = null),
                (f.__e = !1)
            } else
              null == a && n.__v === r.__v
                ? ((n.__k = r.__k), (n.__e = r.__e))
                : (n.__e = C(r.__e, n, r, o, i, a, s, l))
            ;(u = t.diffed) && u(n)
          } catch (e) {
            ;(n.__v = null), (l || null != a) && ((n.__e = c), (n.__h = !!l), (a[a.indexOf(c)] = null)), t.__e(e, n, r)
          }
        }
        function E(e, n) {
          t.__c && t.__c(n, e),
            e.some(function (n) {
              try {
                ;(e = n.__h),
                  (n.__h = []),
                  e.some(function (e) {
                    e.call(n)
                  })
              } catch (e) {
                t.__e(e, n.__v)
              }
            })
        }
        function C(t, n, r, o, i, a, s, l) {
          var u,
            p,
            d,
            v = r.props,
            y = n.props,
            m = n.type,
            g = 0
          if (('svg' === m && (i = !0), null != a))
            for (; g < a.length; g++)
              if ((u = a[g]) && 'setAttribute' in u == !!m && (m ? u.localName === m : 3 === u.nodeType)) {
                ;(t = u), (a[g] = null)
                break
              }
          if (null == t) {
            if (null === m) return document.createTextNode(y)
            ;(t = i ? document.createElementNS('http://www.w3.org/2000/svg', m) : document.createElement(m, y.is && y)),
              (a = null),
              (l = !1)
          }
          if (null === m) v === y || (l && t.data === y) || (t.data = y)
          else {
            if (
              ((a = a && e.call(t.childNodes)),
              (p = (v = r.props || c).dangerouslySetInnerHTML),
              (d = y.dangerouslySetInnerHTML),
              !l)
            ) {
              if (null != a)
                for (v = {}, g = 0; g < t.attributes.length; g++) v[t.attributes[g].name] = t.attributes[g].value
              ;(d || p) &&
                ((d && ((p && d.__html == p.__html) || d.__html === t.innerHTML)) ||
                  (t.innerHTML = (d && d.__html) || ''))
            }
            if (
              ((function (e, t, n, r, o) {
                var i
                for (i in n) 'children' === i || 'key' === i || i in t || S(e, i, null, n[i], r)
                for (i in t)
                  (o && 'function' != typeof t[i]) ||
                    'children' === i ||
                    'key' === i ||
                    'value' === i ||
                    'checked' === i ||
                    n[i] === t[i] ||
                    S(e, i, t[i], n[i], r)
              })(t, y, v, i, l),
              d)
            )
              n.__k = []
            else if (
              ((g = n.props.children),
              k(
                t,
                Array.isArray(g) ? g : [g],
                n,
                r,
                o,
                i && 'foreignObject' !== m,
                a,
                s,
                a ? a[0] : r.__k && h(r, 0),
                l
              ),
              null != a)
            )
              for (g = a.length; g--; ) null != a[g] && f(a[g])
            l ||
              ('value' in y &&
                void 0 !== (g = y.value) &&
                (g !== t.value || ('progress' === m && !g) || ('option' === m && g !== v.value)) &&
                S(t, 'value', g, v.value, !1),
              'checked' in y && void 0 !== (g = y.checked) && g !== t.checked && S(t, 'checked', g, v.checked, !1))
          }
          return t
        }
        function T(e, n, r) {
          try {
            'function' == typeof e ? e(n) : (e.current = n)
          } catch (e) {
            t.__e(e, r)
          }
        }
        function I(e, n, r) {
          var o, i
          if (
            (t.unmount && t.unmount(e),
            (o = e.ref) && ((o.current && o.current !== e.__e) || T(o, null, n)),
            null != (o = e.__c))
          ) {
            if (o.componentWillUnmount)
              try {
                o.componentWillUnmount()
              } catch (e) {
                t.__e(e, n)
              }
            o.base = o.__P = null
          }
          if ((o = e.__k)) for (i = 0; i < o.length; i++) o[i] && I(o[i], n, 'function' != typeof e.type)
          r || null == e.__e || f(e.__e), (e.__e = e.__d = void 0)
        }
        function D(e, t, n) {
          return this.constructor(e, n)
        }
        function R(n, r, o) {
          var i, a, s
          t.__ && t.__(n, r),
            (a = (i = 'function' == typeof o) ? null : (o && o.__k) || r.__k),
            (s = []),
            z(
              r,
              (n = ((!i && o) || r).__k = d(y, null, [n])),
              a || c,
              c,
              void 0 !== r.ownerSVGElement,
              !i && o ? [o] : a ? null : r.firstChild ? e.call(r.childNodes) : null,
              s,
              !i && o ? o : a ? a.__e : r.firstChild,
              i
            ),
            E(s, n)
        }
        ;(e = l.slice),
          (t = {
            __e: function (e, t) {
              for (var n, r, o; (t = t.__); )
                if ((n = t.__c) && !n.__)
                  try {
                    if (
                      ((r = n.constructor) &&
                        null != r.getDerivedStateFromError &&
                        (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
                      null != n.componentDidCatch && (n.componentDidCatch(e), (o = n.__d)),
                      o)
                    )
                      return (n.__E = n)
                  } catch (t) {
                    e = t
                  }
              throw e
            },
          }),
          (o = 0),
          (m.prototype.setState = function (e, t) {
            var n
            ;(n = null != this.__s && this.__s !== this.state ? this.__s : (this.__s = p({}, this.state))),
              'function' == typeof e && (e = e(p({}, n), this.props)),
              e && p(n, e),
              null != e && this.__v && (t && this.__h.push(t), b(this))
          }),
          (m.prototype.forceUpdate = function (e) {
            this.__v && ((this.__e = !0), e && this.__h.push(e), b(this))
          }),
          (m.prototype.render = y),
          (i = []),
          (a = 'function' == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout),
          (_.__r = 0)
        var M,
          N,
          q,
          L = 0,
          B = [],
          U = t.__b,
          F = t.__r,
          H = t.diffed,
          W = t.__c,
          K = t.unmount
        function V(e, n) {
          t.__h && t.__h(N, e, L || n), (L = 0)
          var r = N.__H || (N.__H = { __: [], __h: [] })
          return e >= r.__.length && r.__.push({}), r.__[e]
        }
        function $(e) {
          return (
            (L = 1),
            (function (e, t, n) {
              var r = V(M++, 2)
              return (
                (r.t = e),
                r.__c ||
                  ((r.__ = [
                    n ? n(t) : Q(void 0, t),
                    function (e) {
                      var t = r.t(r.__[0], e)
                      r.__[0] !== t && ((r.__ = [t, r.__[1]]), r.__c.setState({}))
                    },
                  ]),
                  (r.__c = N)),
                r.__
              )
            })(Q, e)
          )
        }
        function G() {
          for (var e; (e = B.shift()); )
            if (e.__P)
              try {
                e.__H.__h.forEach(Y), e.__H.__h.forEach(J), (e.__H.__h = [])
              } catch (n) {
                ;(e.__H.__h = []), t.__e(n, e.__v)
              }
        }
        ;(t.__b = function (e) {
          ;(N = null), U && U(e)
        }),
          (t.__r = function (e) {
            F && F(e), (M = 0)
            var t = (N = e.__c).__H
            t && (t.__h.forEach(Y), t.__h.forEach(J), (t.__h = []))
          }),
          (t.diffed = function (e) {
            H && H(e)
            var n = e.__c
            n &&
              n.__H &&
              n.__H.__h.length &&
              ((1 !== B.push(n) && q === t.requestAnimationFrame) ||
                (
                  (q = t.requestAnimationFrame) ||
                  function (e) {
                    var t,
                      n = function () {
                        clearTimeout(r), Z && cancelAnimationFrame(t), setTimeout(e)
                      },
                      r = setTimeout(n, 100)
                    Z && (t = requestAnimationFrame(n))
                  }
                )(G)),
              (N = null)
          }),
          (t.__c = function (e, n) {
            n.some(function (e) {
              try {
                e.__h.forEach(Y),
                  (e.__h = e.__h.filter(function (e) {
                    return !e.__ || J(e)
                  }))
              } catch (r) {
                n.some(function (e) {
                  e.__h && (e.__h = [])
                }),
                  (n = []),
                  t.__e(r, e.__v)
              }
            }),
              W && W(e, n)
          }),
          (t.unmount = function (e) {
            K && K(e)
            var n,
              r = e.__c
            r &&
              r.__H &&
              (r.__H.__.forEach(function (e) {
                try {
                  Y(e)
                } catch (e) {
                  n = e
                }
              }),
              n && t.__e(n, r.__v))
          })
        var Z = 'function' == typeof requestAnimationFrame
        function Y(e) {
          var t = N,
            n = e.__c
          'function' == typeof n && ((e.__c = void 0), n()), (N = t)
        }
        function J(e) {
          var t = N
          ;(e.__c = e.__()), (N = t)
        }
        function Q(e, t) {
          return 'function' == typeof t ? t(e) : t
        }
        function X(e, t) {
          for (var n in e) if ('__source' !== n && !(n in t)) return !0
          for (var r in t) if ('__source' !== r && e[r] !== t[r]) return !0
          return !1
        }
        function ee(e) {
          this.props = e
        }
        ;((ee.prototype = new m()).isPureReactComponent = !0),
          (ee.prototype.shouldComponentUpdate = function (e, t) {
            return X(this.props, e) || X(this.state, t)
          })
        var te = t.__b
        ;(t.__b = function (e) {
          e.type && e.type.__f && e.ref && ((e.props.ref = e.ref), (e.ref = null)), te && te(e)
        }),
          'undefined' != typeof Symbol && Symbol.for && Symbol.for('react.forward_ref')
        var ne = t.__e
        t.__e = function (e, t, n) {
          if (e.then)
            for (var r, o = t; (o = o.__); )
              if ((r = o.__c) && r.__c) return null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), r.__c(e, t)
          ne(e, t, n)
        }
        var re = t.unmount
        function oe() {
          ;(this.__u = 0), (this.t = null), (this.__b = null)
        }
        function ie(e) {
          var t = e.__.__c
          return t && t.__e && t.__e(e)
        }
        function ae() {
          ;(this.u = null), (this.o = null)
        }
        ;(t.unmount = function (e) {
          var t = e.__c
          t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), re && re(e)
        }),
          ((oe.prototype = new m()).__c = function (e, t) {
            var n = t.__c,
              r = this
            null == r.t && (r.t = []), r.t.push(n)
            var o = ie(r.__v),
              i = !1,
              a = function () {
                i || ((i = !0), (n.__R = null), o ? o(s) : s())
              }
            n.__R = a
            var s = function () {
                if (!--r.__u) {
                  if (r.state.__e) {
                    var e = r.state.__e
                    r.__v.__k[0] = (function e(t, n, r) {
                      return (
                        t &&
                          ((t.__v = null),
                          (t.__k =
                            t.__k &&
                            t.__k.map(function (t) {
                              return e(t, n, r)
                            })),
                          t.__c &&
                            t.__c.__P === n &&
                            (t.__e && r.insertBefore(t.__e, t.__d), (t.__c.__e = !0), (t.__c.__P = r))),
                        t
                      )
                    })(e, e.__c.__P, e.__c.__O)
                  }
                  var t
                  for (r.setState({ __e: (r.__b = null) }); (t = r.t.pop()); ) t.forceUpdate()
                }
              },
              c = !0 === t.__h
            r.__u++ || c || r.setState({ __e: (r.__b = r.__v.__k[0]) }), e.then(a, a)
          }),
          (oe.prototype.componentWillUnmount = function () {
            this.t = []
          }),
          (oe.prototype.render = function (e, t) {
            if (this.__b) {
              if (this.__v.__k) {
                var n = document.createElement('div'),
                  r = this.__v.__k[0].__c
                this.__v.__k[0] = (function e(t, n, r) {
                  return (
                    t &&
                      (t.__c &&
                        t.__c.__H &&
                        (t.__c.__H.__.forEach(function (e) {
                          'function' == typeof e.__c && e.__c()
                        }),
                        (t.__c.__H = null)),
                      null !=
                        (t = (function (e, t) {
                          for (var n in t) e[n] = t[n]
                          return e
                        })({}, t)).__c && (t.__c.__P === r && (t.__c.__P = n), (t.__c = null)),
                      (t.__k =
                        t.__k &&
                        t.__k.map(function (t) {
                          return e(t, n, r)
                        }))),
                    t
                  )
                })(this.__b, n, (r.__O = r.__P))
              }
              this.__b = null
            }
            var o = t.__e && d(y, null, e.fallback)
            return o && (o.__h = null), [d(y, null, t.__e ? null : e.children), o]
          })
        var se = function (e, t, n) {
          if ((++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ('t' !== e.props.revealOrder[0] || !e.o.size)))
            for (n = e.u; n; ) {
              for (; n.length > 3; ) n.pop()()
              if (n[1] < n[0]) break
              e.u = n = n[2]
            }
        }
        ;((ae.prototype = new m()).__e = function (e) {
          var t = this,
            n = ie(t.__v),
            r = t.o.get(e)
          return (
            r[0]++,
            function (o) {
              var i = function () {
                t.props.revealOrder ? (r.push(o), se(t, e, r)) : o()
              }
              n ? n(i) : i()
            }
          )
        }),
          (ae.prototype.render = function (e) {
            ;(this.u = null), (this.o = new Map())
            var t = x(e.children)
            e.revealOrder && 'b' === e.revealOrder[0] && t.reverse()
            for (var n = t.length; n--; ) this.o.set(t[n], (this.u = [1, 0, this.u]))
            return e.children
          }),
          (ae.prototype.componentDidUpdate = ae.prototype.componentDidMount =
            function () {
              var e = this
              this.o.forEach(function (t, n) {
                se(e, n, t)
              })
            })
        var ce = ('undefined' != typeof Symbol && Symbol.for && Symbol.for('react.element')) || 60103,
          le =
            /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
          ue = 'undefined' != typeof document,
          pe = function (e) {
            return ('undefined' != typeof Symbol && 'symbol' == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(
              e
            )
          }
        function fe(e, t, n) {
          return null == t.__k && (t.textContent = ''), R(e, t), 'function' == typeof n && n(), e ? e.__c : null
        }
        ;(m.prototype.isReactComponent = {}),
          ['componentWillMount', 'componentWillReceiveProps', 'componentWillUpdate'].forEach(function (e) {
            Object.defineProperty(m.prototype, e, {
              configurable: !0,
              get: function () {
                return this['UNSAFE_' + e]
              },
              set: function (t) {
                Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t })
              },
            })
          })
        var de = t.event
        function ve() {}
        function ye() {
          return this.cancelBubble
        }
        function me() {
          return this.defaultPrevented
        }
        t.event = function (e) {
          return (
            de && (e = de(e)),
            (e.persist = ve),
            (e.isPropagationStopped = ye),
            (e.isDefaultPrevented = me),
            (e.nativeEvent = e)
          )
        }
        var he = {
            configurable: !0,
            get: function () {
              return this.class
            },
          },
          ge = t.vnode
        t.vnode = function (e) {
          var t = e.type,
            n = e.props,
            r = n
          if ('string' == typeof t) {
            var o = -1 === t.indexOf('-')
            for (var i in ((r = {}), n)) {
              var a = n[i]
              ;(ue && 'children' === i && 'noscript' === t) ||
                ('value' === i && 'defaultValue' in n && null == a) ||
                ('defaultValue' === i && 'value' in n && null == n.value
                  ? (i = 'value')
                  : 'download' === i && !0 === a
                  ? (a = '')
                  : /ondoubleclick/i.test(i)
                  ? (i = 'ondblclick')
                  : /^onchange(textarea|input)/i.test(i + t) && !pe(n.type)
                  ? (i = 'oninput')
                  : /^onfocus$/i.test(i)
                  ? (i = 'onfocusin')
                  : /^onblur$/i.test(i)
                  ? (i = 'onfocusout')
                  : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(i)
                  ? (i = i.toLowerCase())
                  : o && le.test(i)
                  ? (i = i.replace(/[A-Z0-9]/, '-$&').toLowerCase())
                  : null === a && (a = void 0),
                (r[i] = a))
            }
            'select' == t &&
              r.multiple &&
              Array.isArray(r.value) &&
              (r.value = x(n.children).forEach(function (e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value)
              })),
              'select' == t &&
                null != r.defaultValue &&
                (r.value = x(n.children).forEach(function (e) {
                  e.props.selected = r.multiple
                    ? -1 != r.defaultValue.indexOf(e.props.value)
                    : r.defaultValue == e.props.value
                })),
              (e.props = r),
              n.class != n.className &&
                ((he.enumerable = 'className' in n),
                null != n.className && (r.class = n.className),
                Object.defineProperty(r, 'className', he))
          }
          ;(e.$$typeof = ce), ge && ge(e)
        }
        var be = t.__r
        t.__r = function (e) {
          be && be(e), e.__c
        }
        const _e = d,
          ke = y,
          we = m
        n(987), n(2274), n(3214), n(6252), n(9217), n(7471), n(5613)
        var xe = n(3615),
          je = function (e) {
            var t = e.t
            return _e(
              'svg',
              {
                role: 'img',
                'aria-label': t(['close']),
                width: '12',
                height: '12',
                version: '1.1',
                xmlns: 'http://www.w3.org/2000/svg',
              },
              _e('title', null, t(['close'])),
              _e('line', { x1: '1', y1: '11', x2: '11', y2: '1', strokeWidth: '1' }),
              _e('line', { x1: '1', y1: '1', x2: '11', y2: '11', strokeWidth: '1' })
            )
          }
        function Oe(e) {
          return e
            .split('-')
            .map(function (e) {
              return e.slice(0, 1).toUpperCase() + e.slice(1)
            })
            .join(' ')
        }
        function Se(e) {
          return (
            (function (e) {
              if (Array.isArray(e)) return Pe(e)
            })(e) ||
            (function (e) {
              if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                return Array.from(e)
            })(e) ||
            (function (e, t) {
              if (e) {
                if ('string' == typeof e) return Pe(e, t)
                var n = Object.prototype.toString.call(e).slice(8, -1)
                return (
                  'Object' === n && e.constructor && (n = e.constructor.name),
                  'Map' === n || 'Set' === n
                    ? Array.from(e)
                    : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                    ? Pe(e, t)
                    : void 0
                )
              }
            })(e) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function Pe(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function Ae(e) {
          return (
            (Ae =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Ae(e)
          )
        }
        ;(je.propTypes = { t: n.n(xe)().func }), n(8410), n(895), n(1203), n(2081), n(2759), n(5289)
        var ze = function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r]
          var o,
            i = Ae(n[0])
          o = 0 === n.length ? {} : 'string' === i || 'number' === i ? Array.prototype.slice.call(n) : n[0]
          for (var a = [], s = e.toString(); s.length > 0; ) {
            var c = s.match(/\{(?!\{)([\w\d]+)\}(?!\})/)
            if (null !== c) {
              var l = s.substr(0, c.index)
              s = s.substr(c.index + c[0].length)
              var u = parseInt(c[1])
              a.push(l), u != u ? a.push(o[c[1]]) : a.push(o[u])
            } else a.push(s), (s = '')
          }
          return a
        }
        function Ee(e) {
          if (void 0 !== e && void 0 !== e.lang && 'zz' !== e.lang) return e.lang
          var t = (
              ('string' == typeof window.language ? window.language : null) ||
              document.documentElement.lang ||
              (void 0 !== e && void 0 !== e.languages && void 0 !== e.languages[0] ? e.languages[0] : 'en')
            ).toLowerCase(),
            n = new RegExp('^([\\w]+)-([\\w]+)$').exec(t)
          return null === n ? t : n[1]
        }
        function Ce(e, t, n) {
          var r = t
          Array.isArray(r) || (r = [r])
          for (var o = e, i = 0; i < r.length; i++) {
            if (void 0 === o) return n
            if (void 0 !== r[i] && r[i].endsWith('?')) {
              var a,
                s = r[i].slice(0, r[i].length - 1)
              void 0 !== (a = o instanceof Map ? o.get(s) : o[s]) && 'string' == typeof a && (o = a)
            } else o = o instanceof Map ? o.get(r[i]) : o[r[i]]
          }
          return void 0 === o || 'string' != typeof o ? n : '' !== o ? o : void 0
        }
        function Te(e, t, n, r) {
          var o = r,
            i = !1
          '!' === o[0] && ((o = o.slice(1)), (i = !0)), Array.isArray(o) || (o = [o])
          var a = Ce(e, [t].concat(Se(o)))
          if ((void 0 === a && void 0 !== n && (a = Ce(e, [n].concat(Se(o)))), void 0 === a)) {
            if (i) return
            return ['[missing translation: '.concat(t, '/').concat(o.join('/'), ']')]
          }
          for (var s = arguments.length, c = new Array(s > 4 ? s - 4 : 0), l = 4; l < s; l++) c[l - 4] = arguments[l]
          return c.length > 0 ? ze.apply(void 0, [a].concat(c)) : a
        }
        const Ie = function (e) {
          var t = e.text,
            n = e.config
          if ((t instanceof Array || (t = [t]), !0 === n.htmlTexts)) {
            var r = !1
            '<' === t[0][0] && (r = !0)
            var o = t.map(function (e, t) {
              return 'string' == typeof e ? _e('span', { key: t, dangerouslySetInnerHTML: { __html: e } }) : e
            })
            return _e(r ? ke : 'span', null, o)
          }
          return _e('span', null, t)
        }
        function De(e) {
          return (
            (De =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            De(e)
          )
        }
        function Re() {
          return (
            (Re =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
            Re.apply(this, arguments)
          )
        }
        function Me(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function Ne(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        function qe(e, t) {
          return (
            (qe =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            qe(e, t)
          )
        }
        function Le(e, t) {
          if (t && ('object' === De(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function Be(e) {
          return (
            (Be = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Be(e)
          )
        }
        var Ue = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && qe(e, t)
          })(a, e)
          var t,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = Be(r)
                if (o) {
                  var n = Be(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return Le(this, e)
              })
          function a() {
            return Me(this, a), i.apply(this, arguments)
          }
          return (
            (t = a),
            (n = [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.checked,
                    r = t.onlyRequiredEnabled,
                    o = t.onToggle,
                    i = t.name,
                    a = t.lang,
                    s = t.config,
                    c = t.translations,
                    l = t.title,
                    u = t.description,
                    p = t.visible,
                    f = t.t,
                    d = this.props.required || !1,
                    v = this.props.optOut || !1,
                    y = this.props.purposes || [],
                    m = 'service-item-'.concat(i),
                    h = ''.concat(m, '-title'),
                    g = y
                      .map(function (e) {
                        return f(['!', 'purposes', e, 'title?']) || Oe(e)
                      })
                      .join(', '),
                    b = v
                      ? _e(
                          'span',
                          { className: 'cm-opt-out', title: f(['service', 'optOut', 'description']) },
                          f(['service', 'optOut', 'title'])
                        )
                      : '',
                    _ = d
                      ? _e(
                          'span',
                          { className: 'cm-required', title: f(['service', 'required', 'description']) },
                          f(['service', 'required', 'title'])
                        )
                      : ''
                  y.length > 0 &&
                    (e = _e(
                      'p',
                      { className: 'purposes' },
                      f(['service', y.length > 1 ? 'purposes' : 'purpose']),
                      ': ',
                      g
                    ))
                  var k = u || Te(c, a, 'zz', ['!', 'description']) || f(['!', i, 'description?'])
                  return _e(
                    'div',
                    null,
                    _e('input', {
                      id: m,
                      className: 'cm-list-input' + (d ? ' required' : '') + (r ? ' half-checked only-required' : ''),
                      'aria-labelledby': ''.concat(h),
                      'aria-describedby': ''.concat(m, '-description'),
                      disabled: d,
                      checked: n || d,
                      tabIndex: p ? '0' : '-1',
                      type: 'checkbox',
                      onChange: function (e) {
                        o(e.target.checked)
                      },
                    }),
                    _e(
                      'label',
                      Re({ htmlFor: m, className: 'cm-list-label' }, d ? { tabIndex: '0' } : {}),
                      _e(
                        'span',
                        { className: 'cm-list-title', id: ''.concat(h) },
                        l || Te(c, a, 'zz', ['!', 'title']) || f(['!', i, 'title?']) || Oe(i)
                      ),
                      _,
                      b,
                      _e('span', { className: 'cm-switch' }, _e('div', { className: 'slider round active' }))
                    ),
                    _e(
                      'div',
                      { id: ''.concat(m, '-description') },
                      k && _e('p', { className: 'cm-list-description' }, _e(Ie, { config: s, text: k })),
                      e
                    )
                  )
                },
              },
            ]),
            n && Ne(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function Fe(e) {
          return (
            (Fe =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Fe(e)
          )
        }
        function He(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        function We(e, t) {
          return (
            (We =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            We(e, t)
          )
        }
        function Ke(e, t) {
          if (t && ('object' === Fe(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return Ve(e)
        }
        function Ve(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function $e(e) {
          return (
            ($e = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            $e(e)
          )
        }
        function Ge() {
          return (
            (Ge =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
            Ge.apply(this, arguments)
          )
        }
        var Ze = function (e) {
            var t = e.services,
              n = e.config,
              r = e.consents,
              o = e.lang,
              i = e.toggle,
              a = e.visible,
              s = e.t
            return t.map(function (e) {
              var t = r[e.name]
              return _e(
                'li',
                { key: e.name, className: 'cm-service' },
                _e(
                  Ue,
                  Ge(
                    {
                      checked: t || e.required,
                      onToggle: function (t) {
                        i([e], t)
                      },
                      config: n,
                      lang: o,
                      visible: a,
                      t: s,
                    },
                    e
                  )
                )
              )
            })
          },
          Ye = (function (e) {
            !(function (e, t) {
              if ('function' != typeof t && null !== t)
                throw new TypeError('Super expression must either be null or a function')
              ;(e.prototype = Object.create(t && t.prototype, {
                constructor: { value: e, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(e, 'prototype', { writable: !1 }),
                t && We(e, t)
            })(a, e)
            var t,
              n,
              r,
              o,
              i =
                ((r = a),
                (o = (function () {
                  if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                  if (Reflect.construct.sham) return !1
                  if ('function' == typeof Proxy) return !0
                  try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                  } catch (e) {
                    return !1
                  }
                })()),
                function () {
                  var e,
                    t = $e(r)
                  if (o) {
                    var n = $e(this).constructor
                    e = Reflect.construct(t, arguments, n)
                  } else e = t.apply(this, arguments)
                  return Ke(this, e)
                })
            function a(e) {
              var t
              return (
                (function (e, t) {
                  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
                })(this, a),
                (t = i.call(this, e)),
                e.manager.watch(Ve(t)),
                (t.state = { consents: e.manager.consents }),
                t
              )
            }
            return (
              (t = a),
              (n = [
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.props.manager.unwatch(this)
                  },
                },
                {
                  key: 'update',
                  value: function (e, t, n) {
                    e === this.props.manager && 'consents' === t && this.setState({ consents: n })
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var e = this.props,
                      t = e.config,
                      n = e.t,
                      r = e.manager,
                      o = e.lang,
                      i = this.state.consents,
                      a = t.services,
                      s = function (e, t) {
                        e.map(function (e) {
                          e.required || r.updateConsent(e.name, t)
                        })
                      },
                      c = _e(Ze, { config: t, lang: o, services: a, t: n, consents: i, toggle: s }),
                      l = a.filter(function (e) {
                        return !e.required
                      }),
                      u = l.filter(function (e) {
                        return i[e.name]
                      }).length,
                      p = a.filter(function (e) {
                        return e.required
                      }).length,
                      f = u === l.length
                    return (
                      a.filter(function (e) {
                        return e.required
                      }).length,
                      _e(
                        'ul',
                        { className: 'cm-services' },
                        c,
                        !t.hideToggleAll &&
                          l.length > 1 &&
                          _e(
                            'li',
                            { className: 'cm-service cm-toggle-all' },
                            _e(Ue, {
                              name: 'disableAll',
                              title: n(['service', 'disableAll', 'title']),
                              description: n(['service', 'disableAll', 'description']),
                              checked: f,
                              config: t,
                              onlyRequiredEnabled: !f && p > 0,
                              onToggle: function (e) {
                                s(a, e)
                              },
                              lang: o,
                              t: n,
                            })
                          )
                      )
                    )
                  },
                },
              ]),
              n && He(t.prototype, n),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              a
            )
          })(we)
        function Je(e) {
          return (
            (Je =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Je(e)
          )
        }
        function Qe() {
          return (
            (Qe =
              Object.assign ||
              function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t]
                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
              }),
            Qe.apply(this, arguments)
          )
        }
        function Xe(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        function et(e, t) {
          return (
            (et =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            et(e, t)
          )
        }
        function tt(e, t) {
          if (t && ('object' === Je(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function nt(e) {
          return (
            (nt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            nt(e)
          )
        }
        var rt = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && et(e, t)
          })(a, e)
          var t,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = nt(r)
                if (o) {
                  var n = nt(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return tt(this, e)
              })
          function a(e) {
            var t
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, a),
              ((t = i.call(this, e)).state = { servicesVisible: !1 }),
              t
            )
          }
          return (
            (t = a),
            (n = [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this,
                    n = this.props,
                    r = n.allEnabled,
                    o = n.onlyRequiredEnabled,
                    i = n.allDisabled,
                    a = n.services,
                    s = n.config,
                    c = n.onToggle,
                    l = n.name,
                    u = n.lang,
                    p = n.manager,
                    f = n.consents,
                    d = n.title,
                    v = n.description,
                    y = n.t,
                    m = this.state.servicesVisible,
                    h = this.props.required || !1,
                    g = this.props.purposes || [],
                    b = 'purpose-item-'.concat(l),
                    _ = ''.concat(b, '-title'),
                    k = g
                      .map(function (e) {
                        return y(['!', 'purposes', e, 'title?']) || Oe(e)
                      })
                      .join(', '),
                    w = h
                      ? _e(
                          'span',
                          { className: 'cm-required', title: y(['!', 'service', 'required', 'description']) || '' },
                          y(['service', 'required', 'title'])
                        )
                      : ''
                  g.length > 0 &&
                    (e = _e(
                      'p',
                      { className: 'purposes' },
                      y(['purpose', g.length > 1 ? 'purposes' : 'purpose']),
                      ': ',
                      k
                    ))
                  var x = function (e) {
                      e.preventDefault()
                      var n = 'false' !== e.currentTarget.getAttribute('aria-expanded')
                      e.currentTarget.setAttribute('aria-expanded', !n), t.setState({ servicesVisible: !m })
                    },
                    j = _e(Ze, {
                      config: s,
                      lang: u,
                      services: a,
                      toggle: function (e, t) {
                        e.map(function (e) {
                          e.required || p.updateConsent(e.name, t)
                        })
                      },
                      consents: f,
                      visible: m,
                      t: y,
                    }),
                    O = v || y(['!', 'purposes', l, 'description'])
                  return _e(
                    ke,
                    null,
                    _e('input', {
                      id: b,
                      className:
                        'cm-list-input' + (h ? ' required' : '') + (r ? '' : o ? ' only-required' : ' half-checked'),
                      'aria-labelledby': ''.concat(_),
                      'aria-describedby': ''.concat(b, '-description'),
                      disabled: h,
                      checked: r || (!i && !o),
                      type: 'checkbox',
                      onChange: function (e) {
                        c(e.target.checked)
                      },
                    }),
                    _e(
                      'label',
                      Qe({ htmlFor: b, className: 'cm-list-label' }, h ? { tabIndex: '0' } : {}),
                      _e(
                        'span',
                        { className: 'cm-list-title', id: ''.concat(_) },
                        d || y(['!', 'purposes', l, 'title?']) || Oe(l)
                      ),
                      w,
                      _e('span', { className: 'cm-switch' }, _e('div', { className: 'slider round active' }))
                    ),
                    _e(
                      'div',
                      { id: ''.concat(b, '-description') },
                      O && _e('p', { className: 'cm-list-description' }, _e(Ie, { config: s, text: O })),
                      e
                    ),
                    a.length > 0 &&
                      _e(
                        'div',
                        { className: 'cm-services' },
                        _e(
                          'div',
                          { className: 'cm-caret' },
                          _e(
                            'a',
                            {
                              href: '#',
                              'aria-haspopup': 'true',
                              'aria-expanded': 'false',
                              tabIndex: '0',
                              onClick: x,
                              onKeyDown: function (e) {
                                32 === e.keyCode && x(e)
                              },
                            },
                            (m && _e('span', null, '↑')) || _e('span', null, '↓'),
                            ' ',
                            a.length,
                            ' ',
                            y(['purposeItem', a.length > 1 ? 'services' : 'service'])
                          )
                        ),
                        _e('ul', { className: 'cm-content' + (m ? ' expanded' : '') }, j)
                      )
                  )
                },
              },
            ]),
            n && Xe(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function ot(e) {
          return (
            (ot =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            ot(e)
          )
        }
        function it(e, t) {
          var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
          if (!n) {
            if (
              Array.isArray(e) ||
              (n = (function (e, t) {
                if (e) {
                  if ('string' == typeof e) return at(e, t)
                  var n = Object.prototype.toString.call(e).slice(8, -1)
                  return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                      ? Array.from(e)
                      : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? at(e, t)
                      : void 0
                  )
                }
              })(e)) ||
              (t && e && 'number' == typeof e.length)
            ) {
              n && (e = n)
              var r = 0,
                o = function () {}
              return {
                s: o,
                n: function () {
                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
                },
                e: function (e) {
                  throw e
                },
                f: o,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          }
          var i,
            a = !0,
            s = !1
          return {
            s: function () {
              n = n.call(e)
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(s = !0), (i = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (s) throw i
              }
            },
          }
        }
        function at(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function st(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        function ct(e, t) {
          return (
            (ct =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            ct(e, t)
          )
        }
        function lt(e, t) {
          if (t && ('object' === ot(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return ut(e)
        }
        function ut(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function pt(e) {
          return (
            (pt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            pt(e)
          )
        }
        var ft = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && ct(e, t)
          })(a, e)
          var t,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = pt(r)
                if (o) {
                  var n = pt(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return lt(this, e)
              })
          function a(e) {
            var t
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, a),
              (t = i.call(this, e)),
              e.manager.watch(ut(t)),
              (t.state = { consents: e.manager.consents }),
              t
            )
          }
          return (
            (t = a),
            (n = [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.manager.unwatch(this)
                },
              },
              {
                key: 'update',
                value: function (e, t, n) {
                  e === this.props.manager && 'consents' === t && this.setState({ consents: n })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.config,
                    r = t.t,
                    o = t.manager,
                    i = t.lang,
                    a = this.state.consents,
                    s = n.services,
                    c = {},
                    l = it(s)
                  try {
                    for (l.s(); !(e = l.n()).done; ) {
                      var u,
                        p = e.value,
                        f = it(p.purposes)
                      try {
                        for (f.s(); !(u = f.n()).done; ) {
                          var d = u.value
                          void 0 === c[d] && (c[d] = []), c[d].push(p)
                        }
                      } catch (e) {
                        f.e(e)
                      } finally {
                        f.f()
                      }
                    }
                  } catch (e) {
                    l.e(e)
                  } finally {
                    l.f()
                  }
                  var v = function (e, t) {
                      e.map(function (e) {
                        var n,
                          r = it(c[e])
                        try {
                          for (r.s(); !(n = r.n()).done; ) {
                            var i = n.value
                            i.required || o.updateConsent(i.name, t)
                          }
                        } catch (e) {
                          r.e(e)
                        } finally {
                          r.f()
                        }
                      })
                    },
                    y = function (e) {
                      var t,
                        n = { allEnabled: !0, onlyRequiredEnabled: !0, allDisabled: !0, allRequired: !0 },
                        r = it(e)
                      try {
                        for (r.s(); !(t = r.n()).done; ) {
                          var o = t.value
                          o.required || (n.allRequired = !1),
                            a[o.name]
                              ? (o.required || (n.onlyRequiredEnabled = !1), (n.allDisabled = !1))
                              : o.required || (n.allEnabled = !1)
                        }
                      } catch (e) {
                        r.e(e)
                      } finally {
                        r.f()
                      }
                      return n.allDisabled && (n.onlyRequiredEnabled = !1), n
                    },
                    m = n.purposeOrder || [],
                    h = Object.keys(c)
                      .sort(function (e, t) {
                        return m.indexOf(e) - m.indexOf(t)
                      })
                      .map(function (e) {
                        var t = y(c[e])
                        return _e(
                          'li',
                          { key: e, className: 'cm-purpose' },
                          _e(rt, {
                            allEnabled: t.allEnabled,
                            allDisabled: t.allDisabled,
                            onlyRequiredEnabled: t.onlyRequiredEnabled,
                            required: t.allRequired,
                            consents: a,
                            name: e,
                            config: n,
                            lang: i,
                            manager: o,
                            onToggle: function (t) {
                              v([e], t)
                            },
                            services: c[e],
                            t: r,
                          })
                        )
                      }),
                    g = Object.keys(c).filter(function (e) {
                      var t,
                        n = it(c[e])
                      try {
                        for (n.s(); !(t = n.n()).done; ) if (!t.value.required) return !0
                      } catch (e) {
                        n.e(e)
                      } finally {
                        n.f()
                      }
                      return !1
                    }),
                    b = y(s)
                  return _e(
                    'ul',
                    { className: 'cm-purposes' },
                    h,
                    g.length > 1 &&
                      _e(
                        'li',
                        { className: 'cm-purpose cm-toggle-all' },
                        _e(rt, {
                          name: 'disableAll',
                          title: r(['service', 'disableAll', 'title']),
                          description: r(['service', 'disableAll', 'description']),
                          allDisabled: b.allDisabled,
                          allEnabled: b.allEnabled,
                          onlyRequiredEnabled: b.onlyRequiredEnabled,
                          onToggle: function (e) {
                            v(Object.keys(c), e)
                          },
                          manager: o,
                          consents: a,
                          config: n,
                          lang: i,
                          services: [],
                          t: r,
                        })
                      )
                  )
                },
              },
            ]),
            n && st(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function dt(e) {
          return (
            (dt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            dt(e)
          )
        }
        function vt(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function yt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        function mt(e, t) {
          return (
            (mt =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            mt(e, t)
          )
        }
        function ht(e, t) {
          if (t && ('object' === dt(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function gt(e) {
          return (
            (gt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            gt(e)
          )
        }
        var bt = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && mt(e, t)
          })(a, e)
          var t,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = gt(r)
                if (o) {
                  var n = gt(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return ht(this, e)
              })
          function a() {
            return vt(this, a), i.apply(this, arguments)
          }
          return (
            (t = a),
            (n = [
              {
                key: 'componentDidMount',
                value: function () {
                  this.consentModalRef.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    r = this,
                    o = this.props,
                    i = o.hide,
                    a = o.confirming,
                    s = o.saveAndHide,
                    c = o.acceptAndHide,
                    l = o.declineAndHide,
                    u = o.config,
                    p = o.manager,
                    f = o.lang,
                    d = o.t,
                    v = u.embedded,
                    y = void 0 === u.groupByPurpose || u.groupByPurpose
                  u.mustConsent ||
                    (e = _e(
                      'button',
                      {
                        title: d(['close']),
                        'aria-label': d(['close']),
                        className: 'hide',
                        type: 'button',
                        onClick: i,
                        tabIndex: '0',
                        ref: function (e) {
                          r.consentModalRef = e
                        },
                      },
                      _e(je, { t: d })
                    )),
                    u.hideDeclineAll ||
                      p.confirmed ||
                      (t = _e(
                        'button',
                        {
                          disabled: a,
                          className: 'cm-btn cm-btn-decline cm-btn-danger cn-decline',
                          type: 'button',
                          onClick: l,
                        },
                        d(['decline'])
                      ))
                  var m,
                    h,
                    g,
                    b = _e(
                      'button',
                      {
                        disabled: a,
                        className: 'cm-btn cm-btn-success cm-btn-info cm-btn-accept',
                        type: 'button',
                        onClick: s,
                      },
                      d([p.confirmed ? 'save' : 'acceptSelected'])
                    )
                  u.acceptAll &&
                    !p.confirmed &&
                    (n = _e(
                      'button',
                      { disabled: a, className: 'cm-btn cm-btn-success cm-btn-accept-all', type: 'button', onClick: c },
                      d(['acceptAll'])
                    )),
                    void 0 !== u.privacyPolicy
                      ? 'string' == typeof u.privacyPolicy
                        ? (m = u.privacyPolicy)
                        : 'object' === dt(u.privacyPolicy) && (m = u.privacyPolicy[f] || u.privacyPolicy.default)
                      : void 0 !== (m = d(['!', 'privacyPolicyUrl'], { lang: f })) && (m = m.join('')),
                    void 0 !== m &&
                      (h = _e(
                        'a',
                        { key: 'ppLink', href: m, target: '_blank', rel: 'noopener' },
                        d(['privacyPolicy', 'name'])
                      )),
                    (g = _e(y ? ft : Ye, { t: d, config: u, manager: p, lang: f }))
                  var _ = _e(
                    'div',
                    { className: 'cm-modal cm-klaro' },
                    _e(
                      'div',
                      { className: 'cm-header' },
                      e,
                      _e('h1', { className: 'title' }, _e(Ie, { config: u, text: d(['consentModal', 'title']) })),
                      _e(
                        'p',
                        null,
                        _e(Ie, {
                          config: u,
                          text: [d(['consentModal', 'description'])].concat(
                            (h && [' '].concat(d(['privacyPolicy', 'text'], { privacyPolicy: h }))) || []
                          ),
                        })
                      )
                    ),
                    _e('div', { className: 'cm-body' }, g),
                    _e(
                      'div',
                      { className: 'cm-footer' },
                      _e('div', { className: 'cm-footer-buttons' }, t, b, n),
                      !u.disablePoweredBy &&
                        _e(
                          'p',
                          { className: 'cm-powered-by' },
                          _e(
                            'a',
                            { target: '_blank', href: u.poweredBy || 'https://kiprotect.com/klaro', rel: 'noopener' },
                            d(['poweredBy'])
                          )
                        )
                    )
                  )
                  return v
                    ? _e('div', { id: 'cookieScreen', className: 'cookie-modal cm-embedded' }, _)
                    : _e(
                        'div',
                        { id: 'cookieScreen', className: 'cookie-modal' },
                        _e('div', { className: 'cm-bg', onClick: i }),
                        _
                      )
                },
              },
            ]),
            n && yt(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function _t(e) {
          return (
            (_t =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            _t(e)
          )
        }
        function kt(e, t, n) {
          void 0 === n && (n = !0)
          for (var r = Object.keys(t), o = 0; o < r.length; o++) {
            var i = r[o],
              a = t[i],
              s = e[i]
            'string' == typeof a
              ? (n || void 0 === s) && (e[i] = a)
              : 'object' === _t(a) && ('object' === _t(s) ? kt(s, a, n) : (n || void 0 === s) && (e[i] = a))
          }
          return e
        }
        function wt(e) {
          return (
            (wt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            wt(e)
          )
        }
        function xt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function jt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        function Ot(e, t) {
          return (
            (Ot =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            Ot(e, t)
          )
        }
        function St(e, t) {
          if (t && ('object' === wt(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return Pt(e)
        }
        function Pt(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function At(e) {
          return (
            (At = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            At(e)
          )
        }
        function zt(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          )
        }
        n(6446)
        var Et = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && Ot(e, t)
          })(a, e)
          var t,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = At(r)
                if (o) {
                  var n = At(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return St(this, e)
              })
          function a(e) {
            var t
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, a),
              zt(Pt((t = i.call(this, e))), 'executeButtonClicked', function (e, n, r) {
                var o = t.state.modal,
                  i = 0
                e && (i = t.props.manager.changeAll(n))
                var a = t.props.manager.confirmed
                if ((t.props.manager.saveAndApplyConsents(r), e && !a && (o || t.props.config.mustConsent))) {
                  var s = function () {
                    t.setState({ confirming: !1 }), t.props.hide()
                  }
                  t.setState({ confirming: !0 }), 0 === i ? s() : setTimeout(s, 800)
                } else t.props.hide()
              }),
              zt(Pt(t), 'saveAndHide', function () {
                t.executeButtonClicked(!1, !1, 'save')
              }),
              zt(Pt(t), 'acceptAndHide', function () {
                t.executeButtonClicked(!0, !0, 'accept')
              }),
              zt(Pt(t), 'declineAndHide', function () {
                t.executeButtonClicked(!0, !1, 'decline')
              }),
              (t.state = { modal: e.modal, confirming: !1 }),
              t
            )
          }
          return (
            (t = a),
            (n = [
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  e.modal !== this.props.modal && this.setState({ modal: this.props.modal }),
                    this.noticeRef && this.noticeRef.focus()
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t,
                    n,
                    r = this,
                    o = this.props,
                    i = o.lang,
                    a = o.config,
                    s = o.show,
                    c = o.manager,
                    l = o.testing,
                    u = o.t,
                    p = this.state,
                    f = p.confirming,
                    d = p.modal,
                    v = a.embedded,
                    y = a.noticeAsModal,
                    m = a.hideLearnMore,
                    h = a.purposeOrder || [],
                    g = (function (e) {
                      for (var t = new Set([]), n = 0; n < e.services.length; n++)
                        for (var r = e.services[n].purposes || [], o = 0; o < r.length; o++) t.add(r[o])
                      return Array.from(t)
                    })(a)
                      .filter(function (e) {
                        return 'functional' !== e
                      })
                      .sort(function (e, t) {
                        return h.indexOf(e) - h.indexOf(t)
                      }),
                    b = g.map(function (e) {
                      return u(['!', 'purposes', e, 'title?']) || Oe(e)
                    })
                  ;(t =
                    1 === b.length
                      ? b[0]
                      : []
                          .concat(
                            ((n = b.slice(0, -2)),
                            (function (e) {
                              if (Array.isArray(e)) return xt(e)
                            })(n) ||
                              (function (e) {
                                if (
                                  ('undefined' != typeof Symbol && null != e[Symbol.iterator]) ||
                                  null != e['@@iterator']
                                )
                                  return Array.from(e)
                              })(n) ||
                              (function (e, t) {
                                if (e) {
                                  if ('string' == typeof e) return xt(e, t)
                                  var n = Object.prototype.toString.call(e).slice(8, -1)
                                  return (
                                    'Object' === n && e.constructor && (n = e.constructor.name),
                                    'Map' === n || 'Set' === n
                                      ? Array.from(e)
                                      : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                                      ? xt(e, t)
                                      : void 0
                                  )
                                }
                              })(n) ||
                              (function () {
                                throw new TypeError(
                                  'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                )
                              })()),
                            [b.slice(-2).join(' & ')]
                          )
                          .join(', ')),
                    void 0 !== a.privacyPolicy
                      ? 'string' == typeof a.privacyPolicy
                        ? (e = a.privacyPolicy)
                        : 'object' === wt(a.privacyPolicy) && (e = a.privacyPolicy[i] || a.privacyPolicy.default)
                      : void 0 !== (e = u(['!', 'privacyPolicyUrl'], { lang: i })) && (e = e.join(''))
                  var _,
                    k = function (e) {
                      e.preventDefault(), r.setState({ modal: !0 })
                    }
                  if (
                    (c.changed && (_ = _e('p', { className: 'cn-changes' }, u(['consentNotice', 'changeDescription']))),
                    !s && !l && !f)
                  )
                    return _e('div', null)
                  var w,
                    x = (!a.mustConsent || y) && !c.confirmed && !a.noNotice,
                    j = a.hideDeclineAll
                      ? ''
                      : _e(
                          'button',
                          {
                            className: 'cm-btn cm-btn-danger cn-decline',
                            type: 'button',
                            onClick: this.declineAndHide,
                          },
                          u(['decline'])
                        ),
                    O = a.acceptAll
                      ? _e(
                          'button',
                          { className: 'cm-btn cm-btn-success', type: 'button', onClick: this.acceptAndHide },
                          u(['ok'])
                        )
                      : _e(
                          'button',
                          { className: 'cm-btn cm-btn-success', type: 'button', onClick: this.saveAndHide },
                          u(['ok'])
                        ),
                    S = function () {
                      return y
                        ? _e(
                            'button',
                            {
                              key: 'learnMoreLink',
                              className: 'cm-btn cm-btn-lern-more cm-btn-info',
                              type: 'button',
                              onClick: k,
                            },
                            u(['consentNotice', 'learnMore'])
                          )
                        : _e(
                            'a',
                            { key: 'learnMoreLink', className: 'cm-link cn-learn-more', href: '#', onClick: k },
                            u(['consentNotice', 'learnMore'])
                          )
                    }
                  if (
                    (void 0 !== e && (w = _e('a', { key: 'ppLink', href: e }, u(['privacyPolicy', 'name']))),
                    d || (c.confirmed && !l) || (!c.confirmed && a.mustConsent))
                  )
                    return _e(bt, {
                      t: u,
                      lang: i,
                      config: a,
                      hide: function () {
                        ;(a.mustConsent && !a.acceptAll) ||
                          (c.confirmed && !l ? r.props.hide() : r.setState({ modal: !1 }),
                          setTimeout(function () {
                            r.noticeRef && r.noticeRef.focus()
                          }, 1))
                      },
                      confirming: f,
                      declineAndHide: this.declineAndHide,
                      saveAndHide: this.saveAndHide,
                      acceptAndHide: this.acceptAndHide,
                      manager: c,
                    })
                  var P = _e(
                    'div',
                    {
                      role: 'dialog',
                      'aria-describedby': 'id-cookie-notice',
                      'aria-labelledby': 'id-cookie-title',
                      id: 'klaro-cookie-notice',
                      tabIndex: '0',
                      autoFocus: !0,
                      ref: function (e) {
                        r.noticeRef = e
                      },
                      className: 'cookie-notice '
                        .concat(x || l ? '' : 'cookie-notice-hidden', ' ')
                        .concat(y ? 'cookie-modal-notice' : '', ' ')
                        .concat(v ? 'cn-embedded' : ''),
                    },
                    _e(
                      'div',
                      { className: 'cn-body' },
                      u(['!', 'consentNotice', 'title']) &&
                        _e('h2', { id: 'id-cookie-title' }, u(['consentNotice', 'title'])),
                      _e(
                        'p',
                        { id: 'id-cookie-notice' },
                        _e(Ie, {
                          config: a,
                          text: u(['consentNotice', 'description'], {
                            purposes: _e('strong', { key: 'strong' }, t),
                            privacyPolicy: w,
                            learnMoreLink: S(),
                          }),
                        })
                      ),
                      l && _e('p', null, u(['consentNotice', 'testing'])),
                      _,
                      _e('div', { className: 'cn-ok' }, !m && S(), _e('div', { className: 'cn-buttons' }, j, O))
                    )
                  )
                  return y
                    ? _e('div', { id: 'cookieScreen', className: 'cookie-modal' }, _e('div', { className: 'cm-bg' }), P)
                    : P
                },
              },
            ]),
            n && jt(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function Ct(e) {
          return (
            (Ct =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Ct(e)
          )
        }
        function Tt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        function It(e, t) {
          return (
            (It =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            It(e, t)
          )
        }
        function Dt(e, t) {
          if (t && ('object' === Ct(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return Rt(e)
        }
        function Rt(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
          return e
        }
        function Mt(e) {
          return (
            (Mt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Mt(e)
          )
        }
        var Nt = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t)
              throw new TypeError('Super expression must either be null or a function')
            ;(e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(e, 'prototype', { writable: !1 }),
              t && It(e, t)
          })(a, e)
          var t,
            n,
            r,
            o,
            i =
              ((r = a),
              (o = (function () {
                if ('undefined' == typeof Reflect || !Reflect.construct) return !1
                if (Reflect.construct.sham) return !1
                if ('function' == typeof Proxy) return !0
                try {
                  return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                } catch (e) {
                  return !1
                }
              })()),
              function () {
                var e,
                  t = Mt(r)
                if (o) {
                  var n = Mt(this).constructor
                  e = Reflect.construct(t, arguments, n)
                } else e = t.apply(this, arguments)
                return Dt(this, e)
              })
          function a(e) {
            var t
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
              })(this, a),
              (t = i.call(this, e)),
              e.manager.watch(Rt(t)),
              (t.state = { show: e.show > 0 || !e.manager.confirmed }),
              t
            )
          }
          return (
            (t = a),
            (n = [
              {
                key: 'componentWillUnmount',
                value: function () {
                  this.props.manager.unwatch(this)
                },
              },
              {
                key: 'update',
                value: function (e, t) {
                  e === this.props.manager &&
                    'applyConsents' === t &&
                    (!this.props.config.embedded && this.props.manager.confirmed
                      ? this.setState({ show: !1 })
                      : this.forceUpdate())
                },
              },
              {
                key: 'notifyApi',
                value: function () {
                  var e = this.props,
                    t = e.api,
                    n = e.modal,
                    r = e.show,
                    o = e.config
                  if (void 0 !== t) {
                    if (n || r > 0) return
                    this.props.manager.confirmed ||
                      this.props.manager.auxiliaryStore.getWithKey('shown-before') ||
                      (t.update(this, 'showNotice', { config: o }),
                      this.props.manager.auxiliaryStore.setWithKey('shown-before', !0))
                  }
                },
              },
              {
                key: 'componentDidMount',
                value: function () {
                  this.notifyApi()
                },
              },
              {
                key: 'componentDidUpdate',
                value: function (e) {
                  if (e.show !== this.props.show) {
                    this.notifyApi()
                    var t = this.props.show > 0 || !this.props.manager.confirmed
                    t !== this.state.show && this.setState({ show: t })
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = t.config,
                    r = t.t,
                    o = t.lang,
                    i = t.testing,
                    a = t.manager,
                    s = t.modal,
                    c = this.state.show,
                    l = n.additionalClass,
                    u = n.embedded,
                    p = n.stylePrefix
                  return _e(
                    'div',
                    { lang: o, className: (p || 'klaro') + (void 0 !== l ? ' ' + l : '') },
                    _e(Et, {
                      key: 'app-' + this.props.show,
                      t: r,
                      testing: i,
                      show: c,
                      lang: o,
                      modal: s,
                      hide: function () {
                        u || e.setState({ show: !1 })
                      },
                      config: n,
                      manager: a,
                    })
                  )
                },
              },
            ]),
            n && Tt(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            a
          )
        })(we)
        function qt(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        const Lt = function (e) {
          var n,
            r,
            o = e.manager,
            i = e.style,
            a = e.config,
            s = e.t,
            c = e.lang,
            l = e.service,
            u =
              ((n = $(0)),
              (r = 2),
              (function (e) {
                if (Array.isArray(e)) return e
              })(n) ||
                (function (e, t) {
                  var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                  if (null != n) {
                    var r,
                      o,
                      i = [],
                      a = !0,
                      s = !1
                    try {
                      for (
                        n = n.call(e);
                        !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t);
                        a = !0
                      );
                    } catch (e) {
                      ;(s = !0), (o = e)
                    } finally {
                      try {
                        a || null == n.return || n.return()
                      } finally {
                        if (s) throw o
                      }
                    }
                    return i
                  }
                })(n, r) ||
                (function (e, t) {
                  if (e) {
                    if ('string' == typeof e) return qt(e, t)
                    var n = Object.prototype.toString.call(e).slice(8, -1)
                    return (
                      'Object' === n && e.constructor && (n = e.constructor.name),
                      'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? qt(e, t)
                        : void 0
                    )
                  }
                })(n, r) ||
                (function () {
                  throw new TypeError(
                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                  )
                })()),
            p = u[0],
            f = u[1],
            d = a.additionalClass,
            v = (a.embedded, a.stylePrefix)
          !(function (e, n) {
            var r = V(M++, 3)
            !t.__s &&
              (function (e, t) {
                return (
                  !e ||
                  e.length !== t.length ||
                  t.some(function (t, n) {
                    return t !== e[n]
                  })
                )
              })(r.__H, n) &&
              ((r.__ = e), (r.__H = n), N.__H.__h.push(r))
          })(function () {
            var e = {
              update: function () {
                return f(p + 1)
              },
            }
            return (
              o.watch(e),
              function () {
                o.unwatch(e)
              }
            )
          })
          var y = Te(l.translations || {}, c, 'zz', ['!', 'title']) || s(['!', l.name, 'title?']) || Oe(l.name)
          return _e(
            'div',
            { lang: c, className: (v || 'klaro') + (void 0 !== d ? ' ' + d : '') + ' cm-as-context-notice' },
            _e(
              'div',
              { className: 'context-notice' + (void 0 !== i ? ' cm-'.concat(i) : '') },
              _e('p', null, s(['contextualConsent', 'description'], { title: y })),
              _e(
                'p',
                { className: 'cm-buttons' },
                _e(
                  'button',
                  {
                    className: 'cm-btn cm-btn-success',
                    type: 'button',
                    onClick: function () {
                      o.updateConsent(l.name, !0), o.applyConsents(!1, !0, l.name), o.updateConsent(l.name, !1)
                    },
                  },
                  s(['contextualConsent', 'acceptOnce'])
                ),
                _e(
                  'button',
                  {
                    className: 'cm-btn cm-btn-success-var',
                    type: 'button',
                    onClick: function () {
                      o.updateConsent(l.name, !0),
                        o.confirmed
                          ? (o.saveConsents('contextual-accept'), o.applyConsents(!1, !0, l.name))
                          : o.applyConsents(!1, !0, l.name)
                    },
                  },
                  s(['contextualConsent', 'acceptAlways'])
                )
              )
            )
          )
        }
        function Bt() {
          for (
            var e = document.cookie.split(';'), t = [], n = new RegExp('^\\s*([^=]+)\\s*=\\s*(.*?)$'), r = 0;
            r < e.length;
            r++
          ) {
            var o = e[r],
              i = n.exec(o)
            null !== i && t.push({ name: i[1], value: i[2] })
          }
          return t
        }
        function Ut(e, t, n) {
          var r = e + '=; Max-Age=-99999999;'
          ;(document.cookie = r),
            (r += ' path=' + (t || '/') + ';'),
            (document.cookie = r),
            void 0 !== n && ((r += ' domain=' + n + ';'), (document.cookie = r))
        }
        function Ft(e, t) {
          if (e) {
            if ('string' == typeof e) return Ht(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Ht(e, t)
                : void 0
            )
          }
        }
        function Ht(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function Wt(e) {
          for (var t = {}, n = 0; n < e.attributes.length; n++) {
            var r = e.attributes[n]
            r.name.startsWith('data-') && (t[r.name.slice(5)] = r.value)
          }
          return t
        }
        function Kt(e, t) {
          for (var n = Object.keys(e), r = 0; r < n.length; r++) {
            var o = n[r],
              i = e[o]
            t[o] !== i && t.setAttribute('data-' + o, i)
          }
        }
        function Vt(e) {
          return (
            (Vt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype
                      ? 'symbol'
                      : typeof e
                  }),
            Vt(e)
          )
        }
        function $t(e, t) {
          if ('function' != typeof t && null !== t)
            throw new TypeError('Super expression must either be null or a function')
          ;(e.prototype = Object.create(t && t.prototype, {
            constructor: { value: e, writable: !0, configurable: !0 },
          })),
            Object.defineProperty(e, 'prototype', { writable: !1 }),
            t && Gt(e, t)
        }
        function Gt(e, t) {
          return (
            (Gt =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e
              }),
            Gt(e, t)
          )
        }
        function Zt(e) {
          var t = (function () {
            if ('undefined' == typeof Reflect || !Reflect.construct) return !1
            if (Reflect.construct.sham) return !1
            if ('function' == typeof Proxy) return !0
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
            } catch (e) {
              return !1
            }
          })()
          return function () {
            var n,
              r = Jt(e)
            if (t) {
              var o = Jt(this).constructor
              n = Reflect.construct(r, arguments, o)
            } else n = r.apply(this, arguments)
            return Yt(this, n)
          }
        }
        function Yt(e, t) {
          if (t && ('object' === Vt(t) || 'function' == typeof t)) return t
          if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined')
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            return e
          })(e)
        }
        function Jt(e) {
          return (
            (Jt = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
                }),
            Jt(e)
          )
        }
        function Qt(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
        }
        function Xt(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        function en(e, t, n) {
          return t && Xt(e.prototype, t), n && Xt(e, n), Object.defineProperty(e, 'prototype', { writable: !1 }), e
        }
        n(2595), n(266), n(911), n(938), n(5623), n(1514)
        var tn = (function () {
            function e() {
              Qt(this, e), (this.value = null)
            }
            return (
              en(e, [
                {
                  key: 'get',
                  value: function () {
                    return this.value
                  },
                },
                {
                  key: 'set',
                  value: function (e) {
                    this.value = e
                  },
                },
                {
                  key: 'delete',
                  value: function () {
                    this.value = null
                  },
                },
              ]),
              e
            )
          })(),
          nn = (function () {
            function e(t) {
              Qt(this, e),
                (this.cookieName = t.storageName),
                (this.cookieDomain = t.cookieDomain),
                (this.cookiePath = t.cookiePath),
                (this.cookieExpiresAfterDays = t.cookieExpiresAfterDays)
            }
            return (
              en(e, [
                {
                  key: 'get',
                  value: function () {
                    var e = (function (e) {
                      for (var t = Bt(), n = 0; n < t.length; n++) if (t[n].name === e) return t[n]
                      return null
                    })(this.cookieName)
                    return e ? e.value : null
                  },
                },
                {
                  key: 'set',
                  value: function (e) {
                    return (function (e, t, n, r, o) {
                      var i = ''
                      if (n) {
                        var a = new Date()
                        a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), (i = '; expires=' + a.toUTCString())
                      }
                      void 0 !== r && (i += '; domain=' + r),
                        (i += void 0 !== o ? '; path=' + o : '; path=/'),
                        (document.cookie = e + '=' + (t || '') + i + '; SameSite=Lax')
                    })(this.cookieName, e, this.cookieExpiresAfterDays, this.cookieDomain, this.cookiePath)
                  },
                },
                {
                  key: 'delete',
                  value: function () {
                    return Ut(this.cookieName)
                  },
                },
              ]),
              e
            )
          })(),
          rn = (function () {
            function e(t, n) {
              Qt(this, e), (this.key = t.storageName), (this.handle = n)
            }
            return (
              en(e, [
                {
                  key: 'get',
                  value: function () {
                    return this.handle.getItem(this.key)
                  },
                },
                {
                  key: 'getWithKey',
                  value: function (e) {
                    return this.handle.getItem(e)
                  },
                },
                {
                  key: 'set',
                  value: function (e) {
                    return this.handle.setItem(this.key, e)
                  },
                },
                {
                  key: 'setWithKey',
                  value: function (e, t) {
                    return this.handle.setItem(e, t)
                  },
                },
                {
                  key: 'delete',
                  value: function () {
                    return this.handle.removeItem(this.key)
                  },
                },
                {
                  key: 'deleteWithKey',
                  value: function (e) {
                    return this.handle.removeItem(e)
                  },
                },
              ]),
              e
            )
          })(),
          on = (function (e) {
            $t(n, e)
            var t = Zt(n)
            function n(e) {
              return Qt(this, n), t.call(this, e, localStorage)
            }
            return en(n)
          })(rn),
          an = (function (e) {
            $t(n, e)
            var t = Zt(n)
            function n(e) {
              return Qt(this, n), t.call(this, e, sessionStorage)
            }
            return en(n)
          })(rn)
        const sn = { cookie: nn, test: tn, localStorage: on, sessionStorage: an }
        function cn(e, t) {
          var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
          if (!n) {
            if (Array.isArray(e) || (n = un(e)) || (t && e && 'number' == typeof e.length)) {
              n && (e = n)
              var r = 0,
                o = function () {}
              return {
                s: o,
                n: function () {
                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
                },
                e: function (e) {
                  throw e
                },
                f: o,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          }
          var i,
            a = !0,
            s = !1
          return {
            s: function () {
              n = n.call(e)
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(s = !0), (i = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (s) throw i
              }
            },
          }
        }
        function ln(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
              if (null != n) {
                var r,
                  o,
                  i = [],
                  a = !0,
                  s = !1
                try {
                  for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                } catch (e) {
                  ;(s = !0), (o = e)
                } finally {
                  try {
                    a || null == n.return || n.return()
                  } finally {
                    if (s) throw o
                  }
                }
                return i
              }
            })(e, t) ||
            un(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function un(e, t) {
          if (e) {
            if ('string' == typeof e) return pn(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? pn(e, t)
                : void 0
            )
          }
        }
        function pn(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function fn(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function dn(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? fn(Object(n), !0).forEach(function (t) {
                  vn(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : fn(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
          }
          return e
        }
        function vn(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          )
        }
        function yn(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        var mn = (function () {
          function e(t, n, r) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.config = t),
              (this.store = void 0 !== n ? n : new sn[this.storageMethod](this)),
              void 0 === this.store && (this.store = sn.cookie),
              (this.auxiliaryStore = void 0 !== r ? r : new an(this)),
              (this.consents = this.defaultConsents),
              (this.confirmed = !1),
              (this.changed = !1),
              (this.states = {}),
              (this.initialized = {}),
              (this.executedOnce = {}),
              (this.watchers = new Set([])),
              this.loadConsents(),
              this.applyConsents(),
              (this.savedConsents = dn({}, this.consents))
          }
          var t, n
          return (
            (t = e),
            (n = [
              {
                key: 'storageMethod',
                get: function () {
                  return this.config.storageMethod || 'cookie'
                },
              },
              {
                key: 'storageName',
                get: function () {
                  return this.config.storageName || this.config.cookieName || 'klaro'
                },
              },
              {
                key: 'cookieDomain',
                get: function () {
                  return this.config.cookieDomain || void 0
                },
              },
              {
                key: 'cookiePath',
                get: function () {
                  return this.config.cookiePath || void 0
                },
              },
              {
                key: 'cookieExpiresAfterDays',
                get: function () {
                  return this.config.cookieExpiresAfterDays || 120
                },
              },
              {
                key: 'defaultConsents',
                get: function () {
                  for (var e = {}, t = 0; t < this.config.services.length; t++) {
                    var n = this.config.services[t]
                    e[n.name] = this.getDefaultConsent(n)
                  }
                  return e
                },
              },
              {
                key: 'watch',
                value: function (e) {
                  this.watchers.has(e) || this.watchers.add(e)
                },
              },
              {
                key: 'unwatch',
                value: function (e) {
                  this.watchers.has(e) && this.watchers.delete(e)
                },
              },
              {
                key: 'notify',
                value: function (e, t) {
                  var n = this
                  this.watchers.forEach(function (r) {
                    r.update(n, e, t)
                  })
                },
              },
              {
                key: 'getService',
                value: function (e) {
                  var t = this.config.services.filter(function (t) {
                    return t.name === e
                  })
                  if (t.length > 0) return t[0]
                },
              },
              {
                key: 'getDefaultConsent',
                value: function (e) {
                  var t = e.default || e.required
                  return void 0 === t && (t = this.config.default), void 0 === t && (t = !1), t
                },
              },
              {
                key: 'changeAll',
                value: function (e) {
                  var t = this,
                    n = 0
                  return (
                    this.config.services
                      .filter(function (e) {
                        return !e.contextualConsentOnly
                      })
                      .map(function (r) {
                        r.required || t.config.required || e
                          ? t.updateConsent(r.name, !0) && n++
                          : t.updateConsent(r.name, !1) && n++
                      }),
                    n
                  )
                },
              },
              {
                key: 'updateConsent',
                value: function (e, t) {
                  var n = (this.consents[e] || !1) !== t
                  return (this.consents[e] = t), this.notify('consents', this.consents), n
                },
              },
              {
                key: 'resetConsents',
                value: function () {
                  ;(this.consents = this.defaultConsents),
                    (this.states = {}),
                    (this.confirmed = !1),
                    this.applyConsents(),
                    (this.savedConsents = dn({}, this.consents)),
                    this.store.delete(),
                    this.notify('consents', this.consents)
                },
              },
              {
                key: 'getConsent',
                value: function (e) {
                  return this.consents[e] || !1
                },
              },
              {
                key: 'loadConsents',
                value: function () {
                  var e = this.store.get()
                  return (
                    null !== e &&
                      ((this.consents = JSON.parse(decodeURIComponent(e))),
                      this._checkConsents(),
                      this.notify('consents', this.consents)),
                    this.consents
                  )
                },
              },
              {
                key: 'saveAndApplyConsents',
                value: function (e) {
                  this.saveConsents(e), this.applyConsents()
                },
              },
              {
                key: 'changedConsents',
                value: function () {
                  for (var e = {}, t = 0, n = Object.entries(this.consents); t < n.length; t++) {
                    var r = ln(n[t], 2),
                      o = r[0],
                      i = r[1]
                    this.savedConsents[o] !== i && (e[o] = i)
                  }
                  return e
                },
              },
              {
                key: 'saveConsents',
                value: function (e) {
                  var t = encodeURIComponent(JSON.stringify(this.consents))
                  this.store.set(t), (this.confirmed = !0), (this.changed = !1)
                  var n = this.changedConsents()
                  ;(this.savedConsents = dn({}, this.consents)),
                    this.notify('saveConsents', { changes: n, consents: this.consents, type: e || 'script' })
                },
              },
              {
                key: 'applyConsents',
                value: function (e, t, n) {
                  function r(e, t) {
                    if (void 0 !== e) return ('function' == typeof e ? e : new Function('opts', e))(t)
                  }
                  for (var o = 0, i = 0; i < this.config.services.length; i++) {
                    var a = this.config.services[i]
                    if (void 0 === n || n === a.name) {
                      var s = a.vars || {},
                        c = { service: a, config: this.config, vars: s }
                      this.initialized[a.name] || ((this.initialized[a.name] = !0), r(a.onInit, c))
                    }
                  }
                  for (var l = 0; l < this.config.services.length; l++) {
                    var u = this.config.services[l]
                    if (void 0 === n || n === u.name) {
                      var p = this.states[u.name],
                        f = u.vars || {},
                        d = void 0 !== u.optOut ? u.optOut : this.config.optOut || !1,
                        v = void 0 !== u.required ? u.required : this.config.required || !1,
                        y = this.confirmed || d || e || t,
                        m = (this.getConsent(u.name) && y) || v,
                        h = {
                          service: u,
                          config: this.config,
                          vars: f,
                          consents: this.consents,
                          confirmed: this.confirmed,
                        }
                      p !== m && o++,
                        e ||
                          (r(m ? u.onAccept : u.onDecline, h),
                          this.updateServiceElements(u, m),
                          this.updateServiceStorage(u, m),
                          void 0 !== u.callback && u.callback(m, u),
                          void 0 !== this.config.callback && this.config.callback(m, u),
                          (this.states[u.name] = m))
                    }
                  }
                  return this.notify('applyConsents', o, n), o
                },
              },
              {
                key: 'updateServiceElements',
                value: function (e, t) {
                  if (t) {
                    if (e.onlyOnce && this.executedOnce[e.name]) return
                    this.executedOnce[e.name] = !0
                  }
                  for (var n = document.querySelectorAll("[data-name='" + e.name + "']"), r = 0; r < n.length; r++) {
                    var o = n[r],
                      i = o.parentElement,
                      a = Wt(o),
                      s = a.type,
                      c = a.src,
                      l = a.href,
                      u = ['href', 'src', 'type']
                    if ('placeholder' !== s)
                      if ('IFRAME' === o.tagName) {
                        if (t && o.src === c) {
                          console.debug(
                            'Skipping '
                              .concat(o.tagName, ' for service ')
                              .concat(e.name, ', as it already has the correct type...')
                          )
                          continue
                        }
                        var p,
                          f = document.createElement(o.tagName),
                          d = cn(o.attributes)
                        try {
                          for (d.s(); !(p = d.n()).done; ) {
                            var v = p.value
                            if ('style' === v.name) {
                              var y = ln(v.value.split(':'), 2),
                                m = y[0],
                                h = y[1]
                              f.style[m.trim()] = h.trim()
                            } else f.setAttribute(v.name, v.value)
                          }
                        } catch (e) {
                          d.e(e)
                        } finally {
                          d.f()
                        }
                        ;(f.innerText = o.innerText),
                          (f.text = o.text),
                          t
                            ? (void 0 !== a['original-display'] && (f.style.display = a['original-display']),
                              void 0 !== a.src && (f.src = a.src))
                            : ((f.src = ''),
                              void 0 !== a['modified-by-klaro'] && void 0 !== a['original-display']
                                ? f.setAttribute('data-original-display', a['original-display'])
                                : (void 0 !== o.style.display &&
                                    f.setAttribute('data-original-display', o.style.display),
                                  f.setAttribute('data-modified-by-klaro', 'yes')),
                              (f.style.display = 'none')),
                          i.insertBefore(f, o),
                          i.removeChild(o)
                      } else if ('SCRIPT' === o.tagName || 'LINK' === o.tagName) {
                        if (t && o.type === (s || '') && o.src === c) {
                          console.debug(
                            'Skipping '
                              .concat(o.tagName, ' for service ')
                              .concat(e.name, ', as it already has the correct type or src...')
                          )
                          continue
                        }
                        var g,
                          b = document.createElement(o.tagName),
                          _ = cn(o.attributes)
                        try {
                          for (_.s(); !(g = _.n()).done; ) {
                            var k = g.value
                            b.setAttribute(k.name, k.value)
                          }
                        } catch (e) {
                          _.e(e)
                        } finally {
                          _.f()
                        }
                        ;(b.innerText = o.innerText),
                          (b.text = o.text),
                          t
                            ? ((b.type = s || ''), void 0 !== c && (b.src = c), void 0 !== l && (b.href = l))
                            : (b.type = 'text/plain'),
                          i.insertBefore(b, o),
                          i.removeChild(o)
                      } else {
                        if (t) {
                          var w,
                            x = cn(u)
                          try {
                            for (x.s(); !(w = x.n()).done; ) {
                              var j = w.value,
                                O = a[j]
                              void 0 !== O && (void 0 === a['original-' + j] && (a['original-' + j] = o[j]), (o[j] = O))
                            }
                          } catch (e) {
                            x.e(e)
                          } finally {
                            x.f()
                          }
                          void 0 !== a.title && (o.title = a.title),
                            void 0 !== a['original-display']
                              ? (o.style.display = a['original-display'])
                              : o.style.removeProperty('display')
                        } else {
                          void 0 !== a.title && o.removeAttribute('title'),
                            void 0 === a['original-display'] &&
                              void 0 !== o.style.display &&
                              (a['original-display'] = o.style.display),
                            (o.style.display = 'none')
                          var S,
                            P = cn(u)
                          try {
                            for (P.s(); !(S = P.n()).done; ) {
                              var A = S.value
                              void 0 !== a[A] &&
                                (void 0 !== a['original-' + A] ? (o[A] = a['original-' + A]) : o.removeAttribute(A))
                            }
                          } catch (e) {
                            P.e(e)
                          } finally {
                            P.f()
                          }
                        }
                        Kt(a, o)
                      }
                    else
                      t
                        ? ((o.style.display = 'none'), (a['original-display'] = o.style.display))
                        : (o.style.display = a['original-display'] || 'block')
                  }
                },
              },
              {
                key: 'updateServiceStorage',
                value: function (e, t) {
                  if (!t && void 0 !== e.cookies && e.cookies.length > 0)
                    for (var n = Bt(), r = 0; r < e.cookies.length; r++) {
                      var o = e.cookies[r],
                        i = void 0,
                        a = void 0
                      if (o instanceof Array) {
                        var s = ln(o, 3)
                        ;(o = s[0]), (i = s[1]), (a = s[2])
                      } else if (o instanceof Object && !(o instanceof RegExp)) {
                        var c = o
                        ;(o = c.pattern), (i = c.path), (a = c.domain)
                      }
                      if (void 0 !== o) {
                        o instanceof RegExp ||
                          (o = o.startsWith('^')
                            ? new RegExp(o)
                            : new RegExp('^' + o.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&') + '$'))
                        for (var l = 0; l < n.length; l++) {
                          var u = n[l]
                          null !== o.exec(u.name) &&
                            (console.debug('Deleting cookie:', u.name, 'Matched pattern:', o, 'Path:', i, 'Domain:', a),
                            Ut(u.name, i, a),
                            void 0 === a && Ut(u.name, i, '.' + window.location.hostname))
                        }
                      }
                    }
                },
              },
              {
                key: '_checkConsents',
                value: function () {
                  for (
                    var e = !0,
                      t = new Set(
                        this.config.services.map(function (e) {
                          return e.name
                        })
                      ),
                      n = new Set(Object.keys(this.consents)),
                      r = 0,
                      o = Object.keys(this.consents);
                    r < o.length;
                    r++
                  ) {
                    var i = o[r]
                    t.has(i) || delete this.consents[i]
                  }
                  var a,
                    s = cn(this.config.services)
                  try {
                    for (s.s(); !(a = s.n()).done; ) {
                      var c = a.value
                      n.has(c.name) || ((this.consents[c.name] = this.getDefaultConsent(c)), (e = !1))
                    }
                  } catch (e) {
                    s.e(e)
                  } finally {
                    s.f()
                  }
                  ;(this.confirmed = e), e || (this.changed = !0)
                },
              },
            ]),
            n && yn(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })()
        function hn(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function gn(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? hn(Object(n), !0).forEach(function (t) {
                  bn(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : hn(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
          }
          return e
        }
        function bn(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          )
        }
        function _n(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n]
            ;(r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              'value' in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r)
          }
        }
        n(1418)
        var kn = (function () {
          function e(t, n, r) {
            !(function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function')
            })(this, e),
              (this.url = t),
              (this.id = n),
              (this.opts = Object.assign({}, r))
          }
          var t, n
          return (
            (t = e),
            (n = [
              {
                key: 'getLocationData',
                value: function (e) {
                  var t = e.records || {}
                  return {
                    pathname: void 0 === t.savePathname || t.savePathname ? location.pathname : void 0,
                    port: '' !== location.port ? parseInt(location.port) : 0,
                    hostname: location.hostname,
                    protocol: location.protocol.slice(0, location.protocol.length - 1),
                  }
                },
              },
              {
                key: 'getUserData',
                value: function () {
                  return { client_version: tr(), client_name: 'klaro:web' }
                },
              },
              {
                key: 'getBaseConsentData',
                value: function (e) {
                  return { location_data: this.getLocationData(e), user_data: this.getUserData(e) }
                },
              },
              {
                key: 'update',
                value: function (e, t, n) {
                  if ('saveConsents' === t) {
                    if ('save' === n.type && 0 === Object.keys(n.changes).length) return
                    var r = gn(
                      gn({}, this.getBaseConsentData(e.config)),
                      {},
                      {
                        consent_data: {
                          consents: n.consents,
                          changes: 'save' === n.type ? n.changes : void 0,
                          type: n.type,
                          config: e.config.id,
                        },
                      }
                    )
                    this.submitConsentData(r)
                  } else if ('showNotice' === t) {
                    var o = gn(
                      gn({}, this.getBaseConsentData(n.config)),
                      {},
                      { consent_data: { consents: {}, changes: {}, type: 'show', config: n.config.id } }
                    )
                    this.submitConsentData(o)
                  }
                },
              },
              {
                key: 'apiRequest',
                value: function (e, t, n, r) {
                  var o = this
                  return new Promise(function (i, a) {
                    var s,
                      c,
                      l = new XMLHttpRequest()
                    l.addEventListener('load', function () {
                      var e = JSON.parse(l.response)
                      l.status < 200 || l.status >= 300 ? ((e.status = l.status), a(e)) : i(e, l.status)
                    }),
                      l.addEventListener('error', function () {
                        a({ status: 0, xhr: l })
                      }),
                      void 0 !== n &&
                        ('GET' === e
                          ? (t +=
                              '?' +
                              ((c = n),
                              '?' +
                                Object.keys(c)
                                  .map(function (e) {
                                    return e + '=' + encodeURIComponent(c[e])
                                  })
                                  .join('&')))
                          : (s = JSON.stringify(n))),
                      l.open(e, o.url + t),
                      void 0 !== s && l.setRequestHeader('Content-Type', r || 'application/json;charset=UTF-8'),
                      l.send(s)
                  })
                },
              },
              {
                key: 'submitConsentData',
                value: function (e) {
                  return this.apiRequest(
                    'POST',
                    '/v1/privacy-managers/' + this.id + '/submit',
                    e,
                    'text/plain;charset=UTF-8'
                  )
                },
              },
              {
                key: 'loadConfig',
                value: function (e) {
                  return this.apiRequest(
                    'GET',
                    '/v1/privacy-managers/' +
                      this.id +
                      '/config.json?name=' +
                      e +
                      (this.opts.testing ? '&testing=true' : '')
                  )
                },
              },
              {
                key: 'loadConfigs',
                value: function () {
                  return this.apiRequest(
                    'GET',
                    '/v1/privacy-managers/' + this.id + '/configs.json' + (this.opts.testing ? '&testing=true' : '')
                  )
                },
              },
            ]) && _n(t.prototype, n),
            Object.defineProperty(t, 'prototype', { writable: !1 }),
            e
          )
        })()
        function wn(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e
            })(e) ||
            (function (e, t) {
              var n = null == e ? null : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
              if (null != n) {
                var r,
                  o,
                  i = [],
                  a = !0,
                  s = !1
                try {
                  for (n = n.call(e); !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); a = !0);
                } catch (e) {
                  ;(s = !0), (o = e)
                } finally {
                  try {
                    a || null == n.return || n.return()
                  } finally {
                    if (s) throw o
                  }
                }
                return i
              }
            })(e, t) ||
            xn(e, t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              )
            })()
          )
        }
        function xn(e, t) {
          if (e) {
            if ('string' == typeof e) return jn(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? jn(e, t)
                : void 0
            )
          }
        }
        function jn(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function On(e, t, n) {
          if (void 0 !== e.styling) {
            var r = Object.assign({}, e.styling)
            if (void 0 !== r.theme) {
              var o = r.theme
              o instanceof Array || (o = [o]), (r = {})
              var i,
                a = (function (e, t) {
                  var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                  if (!n) {
                    if (Array.isArray(e) || (n = xn(e))) {
                      n && (e = n)
                      var r = 0,
                        o = function () {}
                      return {
                        s: o,
                        n: function () {
                          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
                        },
                        e: function (e) {
                          throw e
                        },
                        f: o,
                      }
                    }
                    throw new TypeError(
                      'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    )
                  }
                  var i,
                    a = !0,
                    s = !1
                  return {
                    s: function () {
                      n = n.call(e)
                    },
                    n: function () {
                      var e = n.next()
                      return (a = e.done), e
                    },
                    e: function (e) {
                      ;(s = !0), (i = e)
                    },
                    f: function () {
                      try {
                        a || null == n.return || n.return()
                      } finally {
                        if (s) throw i
                      }
                    },
                  }
                })(o)
              try {
                for (a.s(); !(i = a.n()).done; ) {
                  var s = t[i.value]
                  if (void 0 !== s)
                    for (var c = 0, l = Object.entries(s); c < l.length; c++) {
                      var u = wn(l[c], 2),
                        p = u[0],
                        f = u[1]
                      p.startsWith('_') || (r[p] = f)
                    }
                }
              } catch (e) {
                a.e(e)
              } finally {
                a.f()
              }
              for (var d = 0, v = Object.entries(e.styling); d < v.length; d++) {
                var y = wn(v[d], 2),
                  m = y[0],
                  h = y[1]
                'theme' !== m && (r[m] = h)
              }
            }
            void 0 === n && (n = document.documentElement)
            for (var g = 0, b = Object.entries(r); g < b.length; g++) {
              var _ = wn(b[g], 2),
                k = _[0],
                w = _[1]
              n.style.setProperty('--' + k, w)
            }
            window.document.documentMode &&
              n === document.documentElement &&
              (function (e) {
                var t,
                  n = (function (e, t) {
                    var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                    if (!n) {
                      if (Array.isArray(e) || (n = Ft(e))) {
                        n && (e = n)
                        var r = 0,
                          o = function () {}
                        return {
                          s: o,
                          n: function () {
                            return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
                          },
                          e: function (e) {
                            throw e
                          },
                          f: o,
                        }
                      }
                      throw new TypeError(
                        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                      )
                    }
                    var i,
                      a = !0,
                      s = !1
                    return {
                      s: function () {
                        n = n.call(e)
                      },
                      n: function () {
                        var e = n.next()
                        return (a = e.done), e
                      },
                      e: function (e) {
                        ;(s = !0), (i = e)
                      },
                      f: function () {
                        try {
                          a || null == n.return || n.return()
                        } finally {
                          if (s) throw i
                        }
                      },
                    }
                  })(document.querySelectorAll('style[data-context=klaro-styles]'))
                try {
                  for (n.s(); !(t = n.n()).done; ) {
                    var r = t.value,
                      o = r.innerText
                    void 0 !== r.styleSheet && (o = r.styleSheet.cssText)
                    for (
                      var i = function () {
                          var e,
                            t,
                            n =
                              ((t = 2),
                              (function (e) {
                                if (Array.isArray(e)) return e
                              })((e = s[a])) ||
                                (function (e, t) {
                                  var n =
                                    null == e
                                      ? null
                                      : ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
                                  if (null != n) {
                                    var r,
                                      o,
                                      i = [],
                                      a = !0,
                                      s = !1
                                    try {
                                      for (
                                        n = n.call(e);
                                        !(a = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t);
                                        a = !0
                                      );
                                    } catch (e) {
                                      ;(s = !0), (o = e)
                                    } finally {
                                      try {
                                        a || null == n.return || n.return()
                                      } finally {
                                        if (s) throw o
                                      }
                                    }
                                    return i
                                  }
                                })(e, t) ||
                                Ft(e, t) ||
                                (function () {
                                  throw new TypeError(
                                    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                                  )
                                })()),
                            r = n[0],
                            i = n[1],
                            c = new RegExp('([a-z0-9-]+):[^;]+;[\\s\\n]*\\1:\\s*var\\(--' + r + ',\\s*[^\\)]+\\)', 'g')
                          o = o.replace(c, function (e, t) {
                            return ''
                              .concat(t, ': ')
                              .concat(i, '; ')
                              .concat(t, ': var(--')
                              .concat(r, ', ')
                              .concat(i, ')')
                          })
                        },
                        a = 0,
                        s = Object.entries(e);
                      a < s.length;
                      a++
                    )
                      i()
                    var c = document.createElement('style')
                    c.setAttribute('type', 'text/css'),
                      c.setAttribute('data-context', 'klaro-styles'),
                      void 0 !== c.styleSheet ? (c.styleSheet.cssText = o) : (c.innerText = o),
                      r.parentElement.appendChild(c),
                      r.parentElement.removeChild(r)
                  }
                } catch (e) {
                  n.e(e)
                } finally {
                  n.f()
                }
              })(r)
          }
        }
        function Sn(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        function Pn(e) {
          for (var t = new Map([]), n = 0, r = Object.keys(e); n < r.length; n++) {
            var o = r[n],
              i = e[o]
            'string' == typeof o && ('string' == typeof i || null === i ? t.set(o, i) : t.set(o, Pn(i)))
          }
          return t
        }
        function An(e, t, n, r) {
          var o = function (e, t, n) {
            if (n instanceof Map) {
              var r = new Map([])
              An(r, n, !0, !1), e.set(t, r)
            } else e.set(t, n)
          }
          if (!(t instanceof Map && e instanceof Map)) throw new Error('Parameters are not maps!')
          void 0 === n && (n = !0), void 0 === r && (r = !1), r && (e = new e.constructor(e))
          var i,
            a = (function (e, t) {
              var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
              if (!n) {
                if (
                  Array.isArray(e) ||
                  (n = (function (e, t) {
                    if (e) {
                      if ('string' == typeof e) return Sn(e, t)
                      var n = Object.prototype.toString.call(e).slice(8, -1)
                      return (
                        'Object' === n && e.constructor && (n = e.constructor.name),
                        'Map' === n || 'Set' === n
                          ? Array.from(e)
                          : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                          ? Sn(e, t)
                          : void 0
                      )
                    }
                  })(e)) ||
                  (t && e && 'number' == typeof e.length)
                ) {
                  n && (e = n)
                  var r = 0,
                    o = function () {}
                  return {
                    s: o,
                    n: function () {
                      return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
                    },
                    e: function (e) {
                      throw e
                    },
                    f: o,
                  }
                }
                throw new TypeError(
                  'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                )
              }
              var i,
                a = !0,
                s = !1
              return {
                s: function () {
                  n = n.call(e)
                },
                n: function () {
                  var e = n.next()
                  return (a = e.done), e
                },
                e: function (e) {
                  ;(s = !0), (i = e)
                },
                f: function () {
                  try {
                    a || null == n.return || n.return()
                  } finally {
                    if (s) throw i
                  }
                },
              }
            })(t.keys())
          try {
            for (a.s(); !(i = a.n()).done; ) {
              var s = i.value,
                c = t.get(s),
                l = e.get(s)
              if (e.has(s))
                if (c instanceof Map && l instanceof Map) e.set(s, An(l, c, n, r))
                else {
                  if (!n) continue
                  o(e, s, c)
                }
              else o(e, s, c)
            }
          } catch (e) {
            a.e(e)
          } finally {
            a.f()
          }
          return e
        }
        var zn,
          En = {
            top: { _meta: { incompatibleWith: ['bottom'] }, 'notice-top': '20px', 'notice-bottom': 'auto' },
            bottom: { _meta: { incompatibleWith: ['top'] }, 'notice-bottom': '20px', 'notice-top': 'auto' },
            left: { _meta: { incompatibleWith: ['wide'] }, 'notice-left': '20px', 'notice-right': 'auto' },
            right: { _meta: { incompatibleWith: ['wide'] }, 'notice-right': '20px', 'notice-left': 'auto' },
            wide: {
              'notice-left': '20px',
              'notice-right': 'auto',
              'notice-max-width': 'calc(100vw - 60px)',
              'notice-position': 'fixed',
            },
            light: {
              'button-text-color': '#fff',
              dark1: '#fafafa',
              dark2: '#777',
              dark3: '#555',
              light1: '#444',
              light2: '#666',
              light3: '#111',
              green3: '#f00',
            },
          }
        function Cn(e, t) {
          var n = Object.keys(e)
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e)
            t &&
              (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
              })),
              n.push.apply(n, r)
          }
          return n
        }
        function Tn(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {}
            t % 2
              ? Cn(Object(n), !0).forEach(function (t) {
                  In(e, t, n[t])
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : Cn(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })
          }
          return e
        }
        function In(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
              : (e[t] = n),
            e
          )
        }
        function Dn(e, t) {
          var n = ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
          if (!n) {
            if (Array.isArray(e) || (n = Rn(e)) || (t && e && 'number' == typeof e.length)) {
              n && (e = n)
              var r = 0,
                o = function () {}
              return {
                s: o,
                n: function () {
                  return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
                },
                e: function (e) {
                  throw e
                },
                f: o,
              }
            }
            throw new TypeError(
              'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          }
          var i,
            a = !0,
            s = !1
          return {
            s: function () {
              n = n.call(e)
            },
            n: function () {
              var e = n.next()
              return (a = e.done), e
            },
            e: function (e) {
              ;(s = !0), (i = e)
            },
            f: function () {
              try {
                a || null == n.return || n.return()
              } finally {
                if (s) throw i
              }
            },
          }
        }
        function Rn(e, t) {
          if (e) {
            if ('string' == typeof e) return Mn(e, t)
            var n = Object.prototype.toString.call(e).slice(8, -1)
            return (
              'Object' === n && e.constructor && (n = e.constructor.name),
              'Map' === n || 'Set' === n
                ? Array.from(e)
                : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                ? Mn(e, t)
                : void 0
            )
          }
        }
        function Mn(e, t) {
          ;(null == t || t > e.length) && (t = e.length)
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
          return r
        }
        var Nn = new Map([]),
          qn = {},
          Ln = {}
        function Bn(e, t) {
          return (e.elementID || 'klaro') + (t ? '-ide' : '')
        }
        function Un(e, t) {
          var n = Bn(e, t),
            r = document.getElementById(n)
          return null === r && (((r = document.createElement('div')).id = n), document.body.appendChild(r)), r
        }
        function Fn(e, t) {
          if ((void 0 === qn[e] ? (qn[e] = [t]) : qn[e].push(t), void 0 !== Ln[e])) {
            var n,
              r = Dn(Ln[e])
            try {
              for (r.s(); !(n = r.n()).done; ) {
                var o = n.value
                if (
                  !1 ===
                  t.apply(
                    void 0,
                    (function (e) {
                      if (Array.isArray(e)) return Mn(e)
                    })((i = o)) ||
                      (function (e) {
                        if (('undefined' != typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator'])
                          return Array.from(e)
                      })(i) ||
                      Rn(i) ||
                      (function () {
                        throw new TypeError(
                          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                        )
                      })()
                  )
                )
                  break
              }
            } catch (e) {
              r.e(e)
            } finally {
              r.f()
            }
          }
          var i
        }
        function Hn(e) {
          for (var t = qn[e], n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
            r[o - 1] = arguments[o]
          if ((void 0 === Ln[e] ? (Ln[e] = [r]) : Ln[e].push(r), void 0 !== t)) {
            var i,
              a = Dn(t)
            try {
              for (a.s(); !(i = a.n()).done; ) {
                var s = i.value
                if (!0 === s.apply(void 0, r)) return !0
              }
            } catch (e) {
              a.e(e)
            } finally {
              a.f()
            }
          }
        }
        function Wn(e) {
          var t = new Map([])
          return An(t, Nn), An(t, Pn(e.translations || {})), t
        }
        var Kn = 1
        function Vn(e, t) {
          if (void 0 !== e) {
            ;(t = t || {}), Hn('render', (e = Zn(e)), t)
            var n = 0
            t.show && (n = Kn++)
            var r = Un(e),
              o = er(e)
            void 0 !== t.api && o.watch(t.api), On(e, En, r)
            var i = Ee(e),
              a = Wn(e),
              s = function () {
                for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r]
                return Te.apply(void 0, [a, i, e.fallbackLang || 'zz'].concat(n))
              },
              c = fe(
                _e(Nt, {
                  t: s,
                  lang: i,
                  manager: o,
                  config: e,
                  testing: t.testing,
                  modal: t.modal,
                  api: t.api,
                  show: n,
                }),
                r
              )
            return $n(o, s, i, e, t), c
          }
        }
        function $n(e, t, n, r, o) {
          var i,
            a = [],
            s = Dn(r.services)
          try {
            for (s.s(); !(i = s.n()).done; ) {
              var c,
                l = i.value,
                u = e.getConsent(l.name) && e.confirmed,
                p = Dn(document.querySelectorAll("[data-name='" + l.name + "']"))
              try {
                for (p.s(); !(c = p.n()).done; ) {
                  var f = c.value,
                    d = Wt(f)
                  if ('placeholder' !== d.type && ('IFRAME' === f.tagName || 'DIV' === f.tagName)) {
                    var v = f.previousElementSibling
                    if (null !== v) {
                      var y = Wt(v)
                      ;('placeholder' === y.type && y.name === l.name) || (v = null)
                    }
                    if (null === v) {
                      ;((v = document.createElement('DIV')).style.maxWidth = f.width + 'px'),
                        (v.style.height = f.height + 'px'),
                        Kt({ type: 'placeholder', name: l.name }, v),
                        u && (v.style.display = 'none'),
                        f.parentElement.insertBefore(v, f)
                      var m = fe(
                        _e(Lt, {
                          t,
                          lang: n,
                          manager: e,
                          config: r,
                          service: l,
                          style: d.style,
                          testing: o.testing,
                          api: o.api,
                        }),
                        v
                      )
                      a.push(m)
                    }
                    'IFRAME' === f.tagName && (d.src = f.src),
                      void 0 === d['modified-by-klaro'] &&
                        void 0 === f.style.display &&
                        (d['original-display'] = f.style.display),
                      (d['modified-by-klaro'] = 'yes'),
                      Kt(d, f),
                      u || ((f.src = ''), (f.style.display = 'none'))
                  }
                }
              } catch (e) {
                p.e(e)
              } finally {
                p.f()
              }
            }
          } catch (e) {
            s.e(e)
          } finally {
            s.f()
          }
          return a
        }
        function Gn(e) {
          ;/complete|interactive|loaded/.test(document.readyState)
            ? e()
            : window.addEventListener('DOMContentLoaded', e)
        }
        function Zn(e) {
          var t = Tn({}, e)
          return (
            2 === t.version ||
              (void 0 !== t.apps &&
                void 0 === t.services &&
                ((t.services = t.apps),
                console.warn('Warning, your configuration file is outdated. Please change `apps` to `services`'),
                delete t.apps),
              void 0 !== t.translations &&
                void 0 !== t.translations.apps &&
                void 0 === t.services &&
                ((t.translations.services = t.translations.apps),
                console.warn(
                  'Warning, your configuration file is outdated. Please change `apps` to `services` in the `translations` key'
                ),
                delete t.translations.apps)),
            t
          )
        }
        function Yn(e) {
          if (void 0 !== window) {
            var t = (function (e) {
                if (null !== document.currentScript && void 0 !== document.currentScript) return document.currentScript
                for (var t = document.getElementsByTagName('script'), n = 0; n < t.length; n++) {
                  var r = t[n]
                  if (r.src.includes('klaro')) return r
                }
                return null
              })(),
              n = new Map(
                decodeURI(location.hash.slice(1))
                  .split('&')
                  .map(function (e) {
                    return e.split('=')
                  })
                  .map(function (e) {
                    return 1 === e.length ? [e[0], !0] : e
                  })
              ),
              r = n.get('klaro-testing'),
              o = function (e) {
                var t = Tn(Tn({}, e), {}, { testing: r })
                zn.noAutoLoad || (zn.testing && !t.testing) || Vn(zn, t)
              }
            if (void 0 !== e)
              (zn = e),
                Gn(function () {
                  return o({})
                })
            else if (null !== t) {
              var i = (function (e) {
                  var t = e.getAttribute('data-klaro-id')
                  if (null !== t) return t
                  var n = /.*\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src)
                  return null !== n ? n[1] : null
                })(t),
                a = (function (e) {
                  var t = e.getAttribute('data-klaro-api-url')
                  if (null !== t) return t
                  var n = /(http(?:s)?:\/\/[^/]+)\/v1\/privacy-managers\/([a-f0-9]+)\/klaro.*\.js/.exec(e.src)
                  return null !== n ? n[1] : null
                })(t),
                s = (function (e, t) {
                  if (e.has('klaro-config')) return e.get('klaro-config')
                  var n = t.getAttribute('data-klaro-config')
                  return null !== n ? n : 'default'
                })(n, t)
              if (null !== i) {
                var c = new kn(a, i, { testing: r })
                if (void 0 !== window.klaroApiConfigs) {
                  if (!0 === Hn('apiConfigsLoaded', window.klaroApiConfigs, c)) return
                  var l = window.klaroApiConfigs.find(function (e) {
                    return e.name === s && ('active' === e.status || r)
                  })
                  void 0 !== l
                    ? ((zn = l),
                      Gn(function () {
                        return o({ api: c })
                      }))
                    : Hn('apiConfigsFailed', {})
                } else
                  c.loadConfig(s)
                    .then(function (e) {
                      !0 !== Hn('apiConfigsLoaded', [e], c) &&
                        ((zn = e),
                        Gn(function () {
                          return o({ api: c })
                        }))
                    })
                    .catch(function (e) {
                      console.error(e, 'cannot load Klaro configs'), Hn('apiConfigsFailed', e)
                    })
              } else {
                var u = t.getAttribute('data-klaro-config') || 'klaroConfig'
                void 0 !== (zn = window[u]) &&
                  Gn(function () {
                    return o({})
                  })
              }
            }
            n.has('klaro-ide') &&
              (function (e) {
                var t = /^(.*)(\/[^/]+)$/.exec(e.src)[1] || '',
                  n = document.createElement('script')
                ;(n.src = '' !== t ? t + '/ide.js' : 'ide.js'), (n.type = 'application/javascript')
                var r,
                  o = Dn(n.attributes)
                try {
                  for (o.s(); !(r = o.n()).done; ) {
                    var i = r.value
                    n.setAttribute(i.name, i.value)
                  }
                } catch (e) {
                  o.e(e)
                } finally {
                  o.f()
                }
                document.head.appendChild(n)
              })(t)
          }
        }
        function Jn(e, t, n) {
          return Vn((e = e || zn), { show: !0, modal: t, api: n }), !1
        }
        var Qn = {}
        function Xn() {
          for (var e in Object.keys(Qn)) delete Qn[e]
        }
        function er(e) {
          var t = (e = e || zn).storageName || e.cookieName || 'default'
          return void 0 === Qn[t] && (Qn[t] = new mn(Zn(e))), Qn[t]
        }
        function tr() {
          return 'v' === 'unknown'[0] ? 'unknown'.slice(1) : 'unknown'
        }
        var nr = n(1898),
          rr = n.n(nr),
          or = n(1509),
          ir = n.n(or),
          ar = n(8702),
          sr = n.n(ar),
          cr = n(584),
          lr = n.n(cr),
          ur = n(8163),
          pr = n.n(ur),
          fr = n(6555),
          dr = n.n(fr),
          vr = n(5040),
          yr = n.n(vr),
          mr = n(1210),
          hr = n.n(mr),
          gr = n(8833),
          br = n.n(gr),
          _r = n(7646),
          kr = n.n(_r),
          wr = n(1483),
          xr = n.n(wr),
          jr = n(4986),
          Or = n.n(jr),
          Sr = n(6250),
          Pr = n.n(Sr),
          Ar = n(439),
          zr = n.n(Ar),
          Er = n(2376),
          Cr = n.n(Er),
          Tr = n(1163),
          Ir = n.n(Tr),
          Dr = n(4501),
          Rr = n.n(Dr),
          Mr = n(1375),
          Nr = n.n(Mr),
          qr = n(5137),
          Lr = n.n(qr),
          Br = n(812),
          Ur = n.n(Br),
          Fr = n(2220),
          Hr = n.n(Fr),
          Wr = n(3538),
          Kr = n.n(Wr),
          Vr = n(4785),
          $r = n.n(Vr),
          Gr = n(6758),
          Zr = n.n(Gr),
          Yr = n(6227),
          Jr = n.n(Yr),
          Qr = Pn({
            ca: sr(),
            cs: lr(),
            da: pr(),
            de: dr(),
            el: yr(),
            en: hr(),
            zh: rr(),
            pt: ir(),
            es: br(),
            fi: kr(),
            fr: xr(),
            gl: Or(),
            hu: Pr(),
            hr: zr(),
            it: Cr(),
            nl: Ir(),
            no: Rr(),
            oc: Nr(),
            ro: Lr(),
            sr: Ur(),
            sr_cyrl: Hr(),
            sv: Kr(),
            tr: $r(),
            pl: Zr(),
            ru: Jr(),
          })
        An(Nn, Qr), Yn()
      })(),
      r
    )
  })()
})
