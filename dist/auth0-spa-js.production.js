!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e =
        'undefined' != typeof globalThis
          ? globalThis
          : e || self).createAuth0Client = t());
})(this, function () {
  'use strict';
  /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */ var e = function (
    t,
    n
  ) {
    return (e =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (e, t) {
          e.__proto__ = t;
        }) ||
      function (e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
      })(t, n);
  };
  function t(t, n) {
    function i() {
      this.constructor = t;
    }
    e(t, n),
      (t.prototype =
        null === n ? Object.create(n) : ((i.prototype = n.prototype), new i()));
  }
  var n = function () {
    return (n =
      Object.assign ||
      function (e) {
        for (var t, n = 1, i = arguments.length; n < i; n++)
          for (var r in (t = arguments[n]))
            Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
        return e;
      }).apply(this, arguments);
  };
  function i(e, t) {
    var n = {};
    for (var i in e)
      Object.prototype.hasOwnProperty.call(e, i) &&
        t.indexOf(i) < 0 &&
        (n[i] = e[i]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
      var r = 0;
      for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
        t.indexOf(i[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
          (n[i[r]] = e[i[r]]);
    }
    return n;
  }
  function r(e, t, n, i) {
    return new (n || (n = Promise))(function (r, o) {
      function c(e) {
        try {
          a(i.next(e));
        } catch (e) {
          o(e);
        }
      }
      function s(e) {
        try {
          a(i.throw(e));
        } catch (e) {
          o(e);
        }
      }
      function a(e) {
        e.done
          ? r(e.value)
          : new n(function (t) {
              t(e.value);
            }).then(c, s);
      }
      a((i = i.apply(e, t || [])).next());
    });
  }
  function o(e, t) {
    var n,
      i,
      r,
      o,
      c = {
        label: 0,
        sent: function () {
          if (1 & r[0]) throw r[1];
          return r[1];
        },
        trys: [],
        ops: []
      };
    return (
      (o = { next: s(0), throw: s(1), return: s(2) }),
      'function' == typeof Symbol &&
        (o[Symbol.iterator] = function () {
          return this;
        }),
      o
    );
    function s(o) {
      return function (s) {
        return (function (o) {
          if (n) throw new TypeError('Generator is already executing.');
          for (; c; )
            try {
              if (
                ((n = 1),
                i &&
                  (r =
                    2 & o[0]
                      ? i.return
                      : o[0]
                      ? i.throw || ((r = i.return) && r.call(i), 0)
                      : i.next) &&
                  !(r = r.call(i, o[1])).done)
              )
                return r;
              switch (((i = 0), r && (o = [2 & o[0], r.value]), o[0])) {
                case 0:
                case 1:
                  r = o;
                  break;
                case 4:
                  return c.label++, { value: o[1], done: !1 };
                case 5:
                  c.label++, (i = o[1]), (o = [0]);
                  continue;
                case 7:
                  (o = c.ops.pop()), c.trys.pop();
                  continue;
                default:
                  if (
                    !((r = c.trys),
                    (r = r.length > 0 && r[r.length - 1]) ||
                      (6 !== o[0] && 2 !== o[0]))
                  ) {
                    c = 0;
                    continue;
                  }
                  if (3 === o[0] && (!r || (o[1] > r[0] && o[1] < r[3]))) {
                    c.label = o[1];
                    break;
                  }
                  if (6 === o[0] && c.label < r[1]) {
                    (c.label = r[1]), (r = o);
                    break;
                  }
                  if (r && c.label < r[2]) {
                    (c.label = r[2]), c.ops.push(o);
                    break;
                  }
                  r[2] && c.ops.pop(), c.trys.pop();
                  continue;
              }
              o = t.call(e, c);
            } catch (e) {
              (o = [6, e]), (i = 0);
            } finally {
              n = r = 0;
            }
          if (5 & o[0]) throw o[1];
          return { value: o[0] ? o[1] : void 0, done: !0 };
        })([o, s]);
      };
    }
  }
  var c =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
      ? window
      : 'undefined' != typeof global
      ? global
      : 'undefined' != typeof self
      ? self
      : {};
  function s(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, 'default')
      ? e.default
      : e;
  }
  function a(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  var u = function (e) {
      return e && e.Math == Math && e;
    },
    l =
      u('object' == typeof globalThis && globalThis) ||
      u('object' == typeof window && window) ||
      u('object' == typeof self && self) ||
      u('object' == typeof c && c) ||
      (function () {
        return this;
      })() ||
      Function('return this')(),
    d = function (e) {
      try {
        return !!e();
      } catch (e) {
        return !0;
      }
    },
    g = !d(function () {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function () {
            return 7;
          }
        })[1]
      );
    }),
    f = {}.propertyIsEnumerable,
    I = Object.getOwnPropertyDescriptor,
    h = {
      f:
        I && !f.call({ 1: 2 }, 1)
          ? function (e) {
              var t = I(this, e);
              return !!t && t.enumerable;
            }
          : f
    },
    p = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      };
    },
    y = {}.toString,
    b = function (e) {
      return y.call(e).slice(8, -1);
    },
    m = ''.split,
    C = d(function () {
      return !Object('z').propertyIsEnumerable(0);
    })
      ? function (e) {
          return 'String' == b(e) ? m.call(e, '') : Object(e);
        }
      : Object,
    v = function (e) {
      if (null == e) throw TypeError("Can't call method on " + e);
      return e;
    },
    B = function (e) {
      return C(v(e));
    },
    F = function (e) {
      return 'object' == typeof e ? null !== e : 'function' == typeof e;
    },
    U = function (e, t) {
      if (!F(e)) return e;
      var n, i;
      if (t && 'function' == typeof (n = e.toString) && !F((i = n.call(e))))
        return i;
      if ('function' == typeof (n = e.valueOf) && !F((i = n.call(e)))) return i;
      if (!t && 'function' == typeof (n = e.toString) && !F((i = n.call(e))))
        return i;
      throw TypeError("Can't convert object to primitive value");
    },
    Z = {}.hasOwnProperty,
    S = function (e, t) {
      return Z.call(e, t);
    },
    V = l.document,
    G = F(V) && F(V.createElement),
    X = function (e) {
      return G ? V.createElement(e) : {};
    },
    w =
      !g &&
      !d(function () {
        return (
          7 !=
          Object.defineProperty(X('div'), 'a', {
            get: function () {
              return 7;
            }
          }).a
        );
      }),
    x = Object.getOwnPropertyDescriptor,
    A = {
      f: g
        ? x
        : function (e, t) {
            if (((e = B(e)), (t = U(t, !0)), w))
              try {
                return x(e, t);
              } catch (e) {}
            if (S(e, t)) return p(!h.f.call(e, t), e[t]);
          }
    },
    R = function (e) {
      if (!F(e)) throw TypeError(String(e) + ' is not an object');
      return e;
    },
    Q = Object.defineProperty,
    J = {
      f: g
        ? Q
        : function (e, t, n) {
            if ((R(e), (t = U(t, !0)), R(n), w))
              try {
                return Q(e, t, n);
              } catch (e) {}
            if ('get' in n || 'set' in n)
              throw TypeError('Accessors not supported');
            return 'value' in n && (e[t] = n.value), e;
          }
    },
    W = g
      ? function (e, t, n) {
          return J.f(e, t, p(1, n));
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    H = function (e, t) {
      try {
        W(l, e, t);
      } catch (n) {
        l[e] = t;
      }
      return t;
    },
    k = '__core-js_shared__',
    L = l[k] || H(k, {}),
    T = Function.toString;
  'function' != typeof L.inspectSource &&
    (L.inspectSource = function (e) {
      return T.call(e);
    });
  var E,
    Y,
    N,
    K = L.inspectSource,
    O = l.WeakMap,
    z = 'function' == typeof O && /native code/.test(K(O)),
    j = a(function (e) {
      (e.exports = function (e, t) {
        return L[e] || (L[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: '3.8.0',
        mode: 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
      });
    }),
    D = 0,
    _ = Math.random(),
    P = function (e) {
      return (
        'Symbol(' +
        String(void 0 === e ? '' : e) +
        ')_' +
        (++D + _).toString(36)
      );
    },
    M = j('keys'),
    q = function (e) {
      return M[e] || (M[e] = P(e));
    },
    $ = {},
    ee = l.WeakMap;
  if (z) {
    var te = L.state || (L.state = new ee()),
      ne = te.get,
      ie = te.has,
      re = te.set;
    (E = function (e, t) {
      return (t.facade = e), re.call(te, e, t), t;
    }),
      (Y = function (e) {
        return ne.call(te, e) || {};
      }),
      (N = function (e) {
        return ie.call(te, e);
      });
  } else {
    var oe = q('state');
    ($[oe] = !0),
      (E = function (e, t) {
        return (t.facade = e), W(e, oe, t), t;
      }),
      (Y = function (e) {
        return S(e, oe) ? e[oe] : {};
      }),
      (N = function (e) {
        return S(e, oe);
      });
  }
  var ce,
    se = {
      set: E,
      get: Y,
      has: N,
      enforce: function (e) {
        return N(e) ? Y(e) : E(e, {});
      },
      getterFor: function (e) {
        return function (t) {
          var n;
          if (!F(t) || (n = Y(t)).type !== e)
            throw TypeError('Incompatible receiver, ' + e + ' required');
          return n;
        };
      }
    },
    ae = a(function (e) {
      var t = se.get,
        n = se.enforce,
        i = String(String).split('String');
      (e.exports = function (e, t, r, o) {
        var c,
          s = !!o && !!o.unsafe,
          a = !!o && !!o.enumerable,
          u = !!o && !!o.noTargetGet;
        'function' == typeof r &&
          ('string' != typeof t || S(r, 'name') || W(r, 'name', t),
          (c = n(r)).source ||
            (c.source = i.join('string' == typeof t ? t : ''))),
          e !== l
            ? (s ? !u && e[t] && (a = !0) : delete e[t],
              a ? (e[t] = r) : W(e, t, r))
            : a
            ? (e[t] = r)
            : H(t, r);
      })(Function.prototype, 'toString', function () {
        return ('function' == typeof this && t(this).source) || K(this);
      });
    }),
    ue = l,
    le = function (e) {
      return 'function' == typeof e ? e : void 0;
    },
    de = function (e, t) {
      return arguments.length < 2
        ? le(ue[e]) || le(l[e])
        : (ue[e] && ue[e][t]) || (l[e] && l[e][t]);
    },
    ge = Math.ceil,
    fe = Math.floor,
    Ie = function (e) {
      return isNaN((e = +e)) ? 0 : (e > 0 ? fe : ge)(e);
    },
    he = Math.min,
    pe = function (e) {
      return e > 0 ? he(Ie(e), 9007199254740991) : 0;
    },
    ye = Math.max,
    be = Math.min,
    me = function (e) {
      return function (t, n, i) {
        var r,
          o = B(t),
          c = pe(o.length),
          s = (function (e, t) {
            var n = Ie(e);
            return n < 0 ? ye(n + t, 0) : be(n, t);
          })(i, c);
        if (e && n != n) {
          for (; c > s; ) if ((r = o[s++]) != r) return !0;
        } else
          for (; c > s; s++)
            if ((e || s in o) && o[s] === n) return e || s || 0;
        return !e && -1;
      };
    },
    Ce = { includes: me(!0), indexOf: me(!1) },
    ve = Ce.indexOf,
    Be = function (e, t) {
      var n,
        i = B(e),
        r = 0,
        o = [];
      for (n in i) !S($, n) && S(i, n) && o.push(n);
      for (; t.length > r; ) S(i, (n = t[r++])) && (~ve(o, n) || o.push(n));
      return o;
    },
    Fe = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf'
    ],
    Ue = Fe.concat('length', 'prototype'),
    Ze = {
      f:
        Object.getOwnPropertyNames ||
        function (e) {
          return Be(e, Ue);
        }
    },
    Se = { f: Object.getOwnPropertySymbols },
    Ve =
      de('Reflect', 'ownKeys') ||
      function (e) {
        var t = Ze.f(R(e)),
          n = Se.f;
        return n ? t.concat(n(e)) : t;
      },
    Ge = function (e, t) {
      for (var n = Ve(t), i = J.f, r = A.f, o = 0; o < n.length; o++) {
        var c = n[o];
        S(e, c) || i(e, c, r(t, c));
      }
    },
    Xe = /#|\.prototype\./,
    we = function (e, t) {
      var n = Ae[xe(e)];
      return n == Qe || (n != Re && ('function' == typeof t ? d(t) : !!t));
    },
    xe = (we.normalize = function (e) {
      return String(e).replace(Xe, '.').toLowerCase();
    }),
    Ae = (we.data = {}),
    Re = (we.NATIVE = 'N'),
    Qe = (we.POLYFILL = 'P'),
    Je = we,
    We = A.f,
    He = function (e, t) {
      var n,
        i,
        r,
        o,
        c,
        s = e.target,
        a = e.global,
        u = e.stat;
      if ((n = a ? l : u ? l[s] || H(s, {}) : (l[s] || {}).prototype))
        for (i in t) {
          if (
            ((o = t[i]),
            (r = e.noTargetGet ? (c = We(n, i)) && c.value : n[i]),
            !Je(a ? i : s + (u ? '.' : '#') + i, e.forced) && void 0 !== r)
          ) {
            if (typeof o == typeof r) continue;
            Ge(o, r);
          }
          (e.sham || (r && r.sham)) && W(o, 'sham', !0), ae(n, i, o, e);
        }
    },
    ke =
      !!Object.getOwnPropertySymbols &&
      !d(function () {
        return !String(Symbol());
      }),
    Le = ke && !Symbol.sham && 'symbol' == typeof Symbol.iterator,
    Te = j('wks'),
    Ee = l.Symbol,
    Ye = Le ? Ee : (Ee && Ee.withoutSetter) || P,
    Ne = function (e) {
      return (
        S(Te, e) ||
          (ke && S(Ee, e) ? (Te[e] = Ee[e]) : (Te[e] = Ye('Symbol.' + e))),
        Te[e]
      );
    },
    Ke = Ne('match'),
    Oe = function (e) {
      if (
        (function (e) {
          var t;
          return F(e) && (void 0 !== (t = e[Ke]) ? !!t : 'RegExp' == b(e));
        })(e)
      )
        throw TypeError("The method doesn't accept regular expressions");
      return e;
    },
    ze = Ne('match'),
    je = function (e) {
      var t = /./;
      try {
        '/./'[e](t);
      } catch (n) {
        try {
          return (t[ze] = !1), '/./'[e](t);
        } catch (e) {}
      }
      return !1;
    },
    De = A.f,
    _e = ''.startsWith,
    Pe = Math.min,
    Me = je('startsWith'),
    qe = !(
      Me || ((ce = De(String.prototype, 'startsWith')), !ce || ce.writable)
    );
  He(
    { target: 'String', proto: !0, forced: !qe && !Me },
    {
      startsWith: function (e) {
        var t = String(v(this));
        Oe(e);
        var n = pe(Pe(arguments.length > 1 ? arguments[1] : void 0, t.length)),
          i = String(e);
        return _e ? _e.call(t, i, n) : t.slice(n, n + i.length) === i;
      }
    }
  );
  var $e,
    et,
    tt = function (e) {
      if ('function' != typeof e)
        throw TypeError(String(e) + ' is not a function');
      return e;
    },
    nt = function (e, t, n) {
      if ((tt(e), void 0 === t)) return e;
      switch (n) {
        case 0:
          return function () {
            return e.call(t);
          };
        case 1:
          return function (n) {
            return e.call(t, n);
          };
        case 2:
          return function (n, i) {
            return e.call(t, n, i);
          };
        case 3:
          return function (n, i, r) {
            return e.call(t, n, i, r);
          };
      }
      return function () {
        return e.apply(t, arguments);
      };
    },
    it = Function.call,
    rt = function (e, t, n) {
      return nt(it, l[e].prototype[t], n);
    },
    ot =
      (rt('String', 'startsWith'),
      Array.isArray ||
        function (e) {
          return 'Array' == b(e);
        }),
    ct = function (e) {
      return Object(v(e));
    },
    st = function (e, t, n) {
      var i = U(t);
      i in e ? J.f(e, i, p(0, n)) : (e[i] = n);
    },
    at = Ne('species'),
    ut = function (e, t) {
      var n;
      return (
        ot(e) &&
          ('function' != typeof (n = e.constructor) ||
          (n !== Array && !ot(n.prototype))
            ? F(n) && null === (n = n[at]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === t ? 0 : t)
      );
    },
    lt = de('navigator', 'userAgent') || '',
    dt = l.process,
    gt = dt && dt.versions,
    ft = gt && gt.v8;
  ft
    ? (et = ($e = ft.split('.'))[0] + $e[1])
    : lt &&
      (!($e = lt.match(/Edge\/(\d+)/)) || $e[1] >= 74) &&
      ($e = lt.match(/Chrome\/(\d+)/)) &&
      (et = $e[1]);
  var It = et && +et,
    ht = Ne('species'),
    pt = Ne('isConcatSpreadable'),
    yt = 9007199254740991,
    bt = 'Maximum allowed index exceeded',
    mt =
      It >= 51 ||
      !d(function () {
        var e = [];
        return (e[pt] = !1), e.concat()[0] !== e;
      }),
    Ct = (function (e) {
      return (
        It >= 51 ||
        !d(function () {
          var t = [];
          return (
            ((t.constructor = {})[ht] = function () {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        })
      );
    })('concat'),
    vt = function (e) {
      if (!F(e)) return !1;
      var t = e[pt];
      return void 0 !== t ? !!t : ot(e);
    };
  He(
    { target: 'Array', proto: !0, forced: !mt || !Ct },
    {
      concat: function (e) {
        var t,
          n,
          i,
          r,
          o,
          c = ct(this),
          s = ut(c, 0),
          a = 0;
        for (t = -1, i = arguments.length; t < i; t++)
          if (vt((o = -1 === t ? c : arguments[t]))) {
            if (a + (r = pe(o.length)) > yt) throw TypeError(bt);
            for (n = 0; n < r; n++, a++) n in o && st(s, a, o[n]);
          } else {
            if (a >= yt) throw TypeError(bt);
            st(s, a++, o);
          }
        return (s.length = a), s;
      }
    }
  );
  var Bt = {};
  Bt[Ne('toStringTag')] = 'z';
  var Ft = '[object z]' === String(Bt),
    Ut = Ne('toStringTag'),
    Zt =
      'Arguments' ==
      b(
        (function () {
          return arguments;
        })()
      ),
    St = Ft
      ? b
      : function (e) {
          var t, n, i;
          return void 0 === e
            ? 'Undefined'
            : null === e
            ? 'Null'
            : 'string' ==
              typeof (n = (function (e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), Ut))
            ? n
            : Zt
            ? b(t)
            : 'Object' == (i = b(t)) && 'function' == typeof t.callee
            ? 'Arguments'
            : i;
        },
    Vt = Ft
      ? {}.toString
      : function () {
          return '[object ' + St(this) + ']';
        };
  Ft || ae(Object.prototype, 'toString', Vt, { unsafe: !0 });
  var Gt,
    Xt =
      Object.keys ||
      function (e) {
        return Be(e, Fe);
      },
    wt = g
      ? Object.defineProperties
      : function (e, t) {
          R(e);
          for (var n, i = Xt(t), r = i.length, o = 0; r > o; )
            J.f(e, (n = i[o++]), t[n]);
          return e;
        },
    xt = de('document', 'documentElement'),
    At = q('IE_PROTO'),
    Rt = function () {},
    Qt = function (e) {
      return '<script>' + e + '</' + 'script>';
    },
    Jt = function () {
      try {
        Gt = document.domain && new ActiveXObject('htmlfile');
      } catch (e) {}
      var e, t;
      Jt = Gt
        ? (function (e) {
            e.write(Qt('')), e.close();
            var t = e.parentWindow.Object;
            return (e = null), t;
          })(Gt)
        : (((t = X('iframe')).style.display = 'none'),
          xt.appendChild(t),
          (t.src = String('javascript:')),
          (e = t.contentWindow.document).open(),
          e.write(Qt('document.F=Object')),
          e.close(),
          e.F);
      for (var n = Fe.length; n--; ) delete Jt.prototype[Fe[n]];
      return Jt();
    };
  $[At] = !0;
  var Wt =
      Object.create ||
      function (e, t) {
        var n;
        return (
          null !== e
            ? ((Rt.prototype = R(e)),
              (n = new Rt()),
              (Rt.prototype = null),
              (n[At] = e))
            : (n = Jt()),
          void 0 === t ? n : wt(n, t)
        );
      },
    Ht = Ze.f,
    kt = {}.toString,
    Lt =
      'object' == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    Tt = {
      f: function (e) {
        return Lt && '[object Window]' == kt.call(e)
          ? (function (e) {
              try {
                return Ht(e);
              } catch (e) {
                return Lt.slice();
              }
            })(e)
          : Ht(B(e));
      }
    },
    Et = { f: Ne },
    Yt = J.f,
    Nt = function (e) {
      var t = ue.Symbol || (ue.Symbol = {});
      S(t, e) || Yt(t, e, { value: Et.f(e) });
    },
    Kt = J.f,
    Ot = Ne('toStringTag'),
    zt = function (e, t, n) {
      e &&
        !S((e = n ? e : e.prototype), Ot) &&
        Kt(e, Ot, { configurable: !0, value: t });
    },
    jt = [].push,
    Dt = function (e) {
      var t = 1 == e,
        n = 2 == e,
        i = 3 == e,
        r = 4 == e,
        o = 6 == e,
        c = 7 == e,
        s = 5 == e || o;
      return function (a, u, l, d) {
        for (
          var g,
            f,
            I = ct(a),
            h = C(I),
            p = nt(u, l, 3),
            y = pe(h.length),
            b = 0,
            m = d || ut,
            v = t ? m(a, y) : n || c ? m(a, 0) : void 0;
          y > b;
          b++
        )
          if ((s || b in h) && ((f = p((g = h[b]), b, I)), e))
            if (t) v[b] = f;
            else if (f)
              switch (e) {
                case 3:
                  return !0;
                case 5:
                  return g;
                case 6:
                  return b;
                case 2:
                  jt.call(v, g);
              }
            else
              switch (e) {
                case 4:
                  return !1;
                case 7:
                  jt.call(v, g);
              }
        return o ? -1 : i || r ? r : v;
      };
    },
    _t = {
      forEach: Dt(0),
      map: Dt(1),
      filter: Dt(2),
      some: Dt(3),
      every: Dt(4),
      find: Dt(5),
      findIndex: Dt(6),
      filterOut: Dt(7)
    }.forEach,
    Pt = q('hidden'),
    Mt = 'Symbol',
    qt = Ne('toPrimitive'),
    $t = se.set,
    en = se.getterFor(Mt),
    tn = Object.prototype,
    nn = l.Symbol,
    rn = de('JSON', 'stringify'),
    on = A.f,
    cn = J.f,
    sn = Tt.f,
    an = h.f,
    un = j('symbols'),
    ln = j('op-symbols'),
    dn = j('string-to-symbol-registry'),
    gn = j('symbol-to-string-registry'),
    fn = j('wks'),
    In = l.QObject,
    hn = !In || !In.prototype || !In.prototype.findChild,
    pn =
      g &&
      d(function () {
        return (
          7 !=
          Wt(
            cn({}, 'a', {
              get: function () {
                return cn(this, 'a', { value: 7 }).a;
              }
            })
          ).a
        );
      })
        ? function (e, t, n) {
            var i = on(tn, t);
            i && delete tn[t], cn(e, t, n), i && e !== tn && cn(tn, t, i);
          }
        : cn,
    yn = function (e, t) {
      var n = (un[e] = Wt(nn.prototype));
      return (
        $t(n, { type: Mt, tag: e, description: t }), g || (n.description = t), n
      );
    },
    bn = Le
      ? function (e) {
          return 'symbol' == typeof e;
        }
      : function (e) {
          return Object(e) instanceof nn;
        },
    mn = function (e, t, n) {
      e === tn && mn(ln, t, n), R(e);
      var i = U(t, !0);
      return (
        R(n),
        S(un, i)
          ? (n.enumerable
              ? (S(e, Pt) && e[Pt][i] && (e[Pt][i] = !1),
                (n = Wt(n, { enumerable: p(0, !1) })))
              : (S(e, Pt) || cn(e, Pt, p(1, {})), (e[Pt][i] = !0)),
            pn(e, i, n))
          : cn(e, i, n)
      );
    },
    Cn = function (e, t) {
      R(e);
      var n = B(t),
        i = Xt(n).concat(Un(n));
      return (
        _t(i, function (t) {
          (g && !vn.call(n, t)) || mn(e, t, n[t]);
        }),
        e
      );
    },
    vn = function (e) {
      var t = U(e, !0),
        n = an.call(this, t);
      return (
        !(this === tn && S(un, t) && !S(ln, t)) &&
        (!(n || !S(this, t) || !S(un, t) || (S(this, Pt) && this[Pt][t])) || n)
      );
    },
    Bn = function (e, t) {
      var n = B(e),
        i = U(t, !0);
      if (n !== tn || !S(un, i) || S(ln, i)) {
        var r = on(n, i);
        return (
          !r || !S(un, i) || (S(n, Pt) && n[Pt][i]) || (r.enumerable = !0), r
        );
      }
    },
    Fn = function (e) {
      var t = sn(B(e)),
        n = [];
      return (
        _t(t, function (e) {
          S(un, e) || S($, e) || n.push(e);
        }),
        n
      );
    },
    Un = function (e) {
      var t = e === tn,
        n = sn(t ? ln : B(e)),
        i = [];
      return (
        _t(n, function (e) {
          !S(un, e) || (t && !S(tn, e)) || i.push(un[e]);
        }),
        i
      );
    };
  if (
    (ke ||
      (ae(
        (nn = function () {
          if (this instanceof nn)
            throw TypeError('Symbol is not a constructor');
          var e =
              arguments.length && void 0 !== arguments[0]
                ? String(arguments[0])
                : void 0,
            t = P(e),
            n = function (e) {
              this === tn && n.call(ln, e),
                S(this, Pt) && S(this[Pt], t) && (this[Pt][t] = !1),
                pn(this, t, p(1, e));
            };
          return g && hn && pn(tn, t, { configurable: !0, set: n }), yn(t, e);
        }).prototype,
        'toString',
        function () {
          return en(this).tag;
        }
      ),
      ae(nn, 'withoutSetter', function (e) {
        return yn(P(e), e);
      }),
      (h.f = vn),
      (J.f = mn),
      (A.f = Bn),
      (Ze.f = Tt.f = Fn),
      (Se.f = Un),
      (Et.f = function (e) {
        return yn(Ne(e), e);
      }),
      g &&
        (cn(nn.prototype, 'description', {
          configurable: !0,
          get: function () {
            return en(this).description;
          }
        }),
        ae(tn, 'propertyIsEnumerable', vn, { unsafe: !0 }))),
    He({ global: !0, wrap: !0, forced: !ke, sham: !ke }, { Symbol: nn }),
    _t(Xt(fn), function (e) {
      Nt(e);
    }),
    He(
      { target: Mt, stat: !0, forced: !ke },
      {
        for: function (e) {
          var t = String(e);
          if (S(dn, t)) return dn[t];
          var n = nn(t);
          return (dn[t] = n), (gn[n] = t), n;
        },
        keyFor: function (e) {
          if (!bn(e)) throw TypeError(e + ' is not a symbol');
          if (S(gn, e)) return gn[e];
        },
        useSetter: function () {
          hn = !0;
        },
        useSimple: function () {
          hn = !1;
        }
      }
    ),
    He(
      { target: 'Object', stat: !0, forced: !ke, sham: !g },
      {
        create: function (e, t) {
          return void 0 === t ? Wt(e) : Cn(Wt(e), t);
        },
        defineProperty: mn,
        defineProperties: Cn,
        getOwnPropertyDescriptor: Bn
      }
    ),
    He(
      { target: 'Object', stat: !0, forced: !ke },
      { getOwnPropertyNames: Fn, getOwnPropertySymbols: Un }
    ),
    He(
      {
        target: 'Object',
        stat: !0,
        forced: d(function () {
          Se.f(1);
        })
      },
      {
        getOwnPropertySymbols: function (e) {
          return Se.f(ct(e));
        }
      }
    ),
    rn)
  ) {
    var Zn =
      !ke ||
      d(function () {
        var e = nn();
        return (
          '[null]' != rn([e]) || '{}' != rn({ a: e }) || '{}' != rn(Object(e))
        );
      });
    He(
      { target: 'JSON', stat: !0, forced: Zn },
      {
        stringify: function (e, t, n) {
          for (var i, r = [e], o = 1; arguments.length > o; )
            r.push(arguments[o++]);
          if (((i = t), (F(t) || void 0 !== e) && !bn(e)))
            return (
              ot(t) ||
                (t = function (e, t) {
                  if (
                    ('function' == typeof i && (t = i.call(this, e, t)), !bn(t))
                  )
                    return t;
                }),
              (r[1] = t),
              rn.apply(null, r)
            );
        }
      }
    );
  }
  nn.prototype[qt] || W(nn.prototype, qt, nn.prototype.valueOf),
    zt(nn, Mt),
    ($[Pt] = !0),
    Nt('asyncIterator');
  var Sn = J.f,
    Vn = l.Symbol;
  if (
    g &&
    'function' == typeof Vn &&
    (!('description' in Vn.prototype) || void 0 !== Vn().description)
  ) {
    var Gn = {},
      Xn = function () {
        var e =
            arguments.length < 1 || void 0 === arguments[0]
              ? void 0
              : String(arguments[0]),
          t = this instanceof Xn ? new Vn(e) : void 0 === e ? Vn() : Vn(e);
        return '' === e && (Gn[t] = !0), t;
      };
    Ge(Xn, Vn);
    var wn = (Xn.prototype = Vn.prototype);
    wn.constructor = Xn;
    var xn = wn.toString,
      An = 'Symbol(test)' == String(Vn('test')),
      Rn = /^Symbol\((.*)\)[^)]+$/;
    Sn(wn, 'description', {
      configurable: !0,
      get: function () {
        var e = F(this) ? this.valueOf() : this,
          t = xn.call(e);
        if (S(Gn, e)) return '';
        var n = An ? t.slice(7, -1) : t.replace(Rn, '$1');
        return '' === n ? void 0 : n;
      }
    }),
      He({ global: !0, forced: !0 }, { Symbol: Xn });
  }
  Nt('hasInstance'),
    Nt('isConcatSpreadable'),
    Nt('iterator'),
    Nt('match'),
    Nt('matchAll'),
    Nt('replace'),
    Nt('search'),
    Nt('species'),
    Nt('split'),
    Nt('toPrimitive'),
    Nt('toStringTag'),
    Nt('unscopables'),
    zt(l.JSON, 'JSON', !0),
    zt(Math, 'Math', !0),
    He({ global: !0 }, { Reflect: {} }),
    zt(l.Reflect, 'Reflect', !0);
  ue.Symbol;
  var Qn,
    Jn,
    Wn,
    Hn = function (e) {
      return function (t, n) {
        var i,
          r,
          o = String(v(t)),
          c = Ie(n),
          s = o.length;
        return c < 0 || c >= s
          ? e
            ? ''
            : void 0
          : (i = o.charCodeAt(c)) < 55296 ||
            i > 56319 ||
            c + 1 === s ||
            (r = o.charCodeAt(c + 1)) < 56320 ||
            r > 57343
          ? e
            ? o.charAt(c)
            : i
          : e
          ? o.slice(c, c + 2)
          : r - 56320 + ((i - 55296) << 10) + 65536;
      };
    },
    kn = { codeAt: Hn(!1), charAt: Hn(!0) },
    Ln = !d(function () {
      function e() {}
      return (
        (e.prototype.constructor = null),
        Object.getPrototypeOf(new e()) !== e.prototype
      );
    }),
    Tn = q('IE_PROTO'),
    En = Object.prototype,
    Yn = Ln
      ? Object.getPrototypeOf
      : function (e) {
          return (
            (e = ct(e)),
            S(e, Tn)
              ? e[Tn]
              : 'function' == typeof e.constructor && e instanceof e.constructor
              ? e.constructor.prototype
              : e instanceof Object
              ? En
              : null
          );
        },
    Nn = Ne('iterator'),
    Kn = !1;
  [].keys &&
    ('next' in (Wn = [].keys())
      ? (Jn = Yn(Yn(Wn))) !== Object.prototype && (Qn = Jn)
      : (Kn = !0)),
    null == Qn && (Qn = {}),
    S(Qn, Nn) ||
      W(Qn, Nn, function () {
        return this;
      });
  var On = { IteratorPrototype: Qn, BUGGY_SAFARI_ITERATORS: Kn },
    zn = {},
    jn = On.IteratorPrototype,
    Dn = function () {
      return this;
    },
    _n =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function () {
            var e,
              t = !1,
              n = {};
            try {
              (e = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__'
              ).set).call(n, []),
                (t = n instanceof Array);
            } catch (e) {}
            return function (n, i) {
              return (
                R(n),
                (function (e) {
                  if (!F(e) && null !== e)
                    throw TypeError(
                      "Can't set " + String(e) + ' as a prototype'
                    );
                })(i),
                t ? e.call(n, i) : (n.__proto__ = i),
                n
              );
            };
          })()
        : void 0),
    Pn = On.IteratorPrototype,
    Mn = On.BUGGY_SAFARI_ITERATORS,
    qn = Ne('iterator'),
    $n = 'keys',
    ei = 'values',
    ti = 'entries',
    ni = function () {
      return this;
    },
    ii = function (e, t, n, i, r, o, c) {
      !(function (e, t, n) {
        var i = t + ' Iterator';
        (e.prototype = Wt(jn, { next: p(1, n) })), zt(e, i, !1), (zn[i] = Dn);
      })(n, t, i);
      var s,
        a,
        u,
        l = function (e) {
          if (e === r && h) return h;
          if (!Mn && e in f) return f[e];
          switch (e) {
            case $n:
            case ei:
            case ti:
              return function () {
                return new n(this, e);
              };
          }
          return function () {
            return new n(this);
          };
        },
        d = t + ' Iterator',
        g = !1,
        f = e.prototype,
        I = f[qn] || f['@@iterator'] || (r && f[r]),
        h = (!Mn && I) || l(r),
        y = ('Array' == t && f.entries) || I;
      if (
        (y &&
          ((s = Yn(y.call(new e()))),
          Pn !== Object.prototype &&
            s.next &&
            (Yn(s) !== Pn &&
              (_n ? _n(s, Pn) : 'function' != typeof s[qn] && W(s, qn, ni)),
            zt(s, d, !0))),
        r == ei &&
          I &&
          I.name !== ei &&
          ((g = !0),
          (h = function () {
            return I.call(this);
          })),
        f[qn] !== h && W(f, qn, h),
        (zn[t] = h),
        r)
      )
        if (((a = { values: l(ei), keys: o ? h : l($n), entries: l(ti) }), c))
          for (u in a) (Mn || g || !(u in f)) && ae(f, u, a[u]);
        else He({ target: t, proto: !0, forced: Mn || g }, a);
      return a;
    },
    ri = kn.charAt,
    oi = 'String Iterator',
    ci = se.set,
    si = se.getterFor(oi);
  ii(
    String,
    'String',
    function (e) {
      ci(this, { type: oi, string: String(e), index: 0 });
    },
    function () {
      var e,
        t = si(this),
        n = t.string,
        i = t.index;
      return i >= n.length
        ? { value: void 0, done: !0 }
        : ((e = ri(n, i)), (t.index += e.length), { value: e, done: !1 });
    }
  );
  var ai = function (e) {
      var t = e.return;
      if (void 0 !== t) return R(t.call(e)).value;
    },
    ui = function (e, t, n, i) {
      try {
        return i ? t(R(n)[0], n[1]) : t(n);
      } catch (t) {
        throw (ai(e), t);
      }
    },
    li = Ne('iterator'),
    di = Array.prototype,
    gi = function (e) {
      return void 0 !== e && (zn.Array === e || di[li] === e);
    },
    fi = Ne('iterator'),
    Ii = function (e) {
      if (null != e) return e[fi] || e['@@iterator'] || zn[St(e)];
    },
    hi = Ne('iterator'),
    pi = !1;
  try {
    var yi = 0,
      bi = {
        next: function () {
          return { done: !!yi++ };
        },
        return: function () {
          pi = !0;
        }
      };
    (bi[hi] = function () {
      return this;
    }),
      Array.from(bi, function () {
        throw 2;
      });
  } catch (e) {}
  var mi = function (e, t) {
      if (!t && !pi) return !1;
      var n = !1;
      try {
        var i = {};
        (i[hi] = function () {
          return {
            next: function () {
              return { done: (n = !0) };
            }
          };
        }),
          e(i);
      } catch (e) {}
      return n;
    },
    Ci = !mi(function (e) {
      Array.from(e);
    });
  He(
    { target: 'Array', stat: !0, forced: Ci },
    {
      from: function (e) {
        var t,
          n,
          i,
          r,
          o,
          c,
          s = ct(e),
          a = 'function' == typeof this ? this : Array,
          u = arguments.length,
          l = u > 1 ? arguments[1] : void 0,
          d = void 0 !== l,
          g = Ii(s),
          f = 0;
        if (
          (d && (l = nt(l, u > 2 ? arguments[2] : void 0, 2)),
          null == g || (a == Array && gi(g)))
        )
          for (n = new a((t = pe(s.length))); t > f; f++)
            (c = d ? l(s[f], f) : s[f]), st(n, f, c);
        else
          for (
            o = (r = g.call(s)).next, n = new a();
            !(i = o.call(r)).done;
            f++
          )
            (c = d ? ui(r, l, [i.value, f], !0) : i.value), st(n, f, c);
        return (n.length = f), n;
      }
    }
  );
  ue.Array.from;
  var vi,
    Bi = 'undefined' != typeof ArrayBuffer && 'undefined' != typeof DataView,
    Fi = J.f,
    Ui = l.Int8Array,
    Zi = Ui && Ui.prototype,
    Si = l.Uint8ClampedArray,
    Vi = Si && Si.prototype,
    Gi = Ui && Yn(Ui),
    Xi = Zi && Yn(Zi),
    wi = Object.prototype,
    xi = wi.isPrototypeOf,
    Ai = Ne('toStringTag'),
    Ri = P('TYPED_ARRAY_TAG'),
    Qi = Bi && !!_n && 'Opera' !== St(l.opera),
    Ji = {
      Int8Array: 1,
      Uint8Array: 1,
      Uint8ClampedArray: 1,
      Int16Array: 2,
      Uint16Array: 2,
      Int32Array: 4,
      Uint32Array: 4,
      Float32Array: 4,
      Float64Array: 8
    },
    Wi = function (e) {
      return F(e) && S(Ji, St(e));
    };
  for (vi in Ji) l[vi] || (Qi = !1);
  if (
    (!Qi || 'function' != typeof Gi || Gi === Function.prototype) &&
    ((Gi = function () {
      throw TypeError('Incorrect invocation');
    }),
    Qi)
  )
    for (vi in Ji) l[vi] && _n(l[vi], Gi);
  if ((!Qi || !Xi || Xi === wi) && ((Xi = Gi.prototype), Qi))
    for (vi in Ji) l[vi] && _n(l[vi].prototype, Xi);
  if ((Qi && Yn(Vi) !== Xi && _n(Vi, Xi), g && !S(Xi, Ai)))
    for (vi in (!0,
    Fi(Xi, Ai, {
      get: function () {
        return F(this) ? this[Ri] : void 0;
      }
    }),
    Ji))
      l[vi] && W(l[vi], Ri, vi);
  var Hi = function (e) {
      if (Wi(e)) return e;
      throw TypeError('Target is not a typed array');
    },
    ki = function (e) {
      if (_n) {
        if (xi.call(Gi, e)) return e;
      } else
        for (var t in Ji)
          if (S(Ji, vi)) {
            var n = l[t];
            if (n && (e === n || xi.call(n, e))) return e;
          }
      throw TypeError('Target is not a typed array constructor');
    },
    Li = function (e, t, n) {
      if (g) {
        if (n)
          for (var i in Ji) {
            var r = l[i];
            r && S(r.prototype, e) && delete r.prototype[e];
          }
        (Xi[e] && !n) || ae(Xi, e, n ? t : (Qi && Zi[e]) || t);
      }
    },
    Ti = Ne('species'),
    Ei = Hi,
    Yi = ki,
    Ni = [].slice;
  Li(
    'slice',
    function (e, t) {
      for (
        var n = Ni.call(Ei(this), e, t),
          i = (function (e, t) {
            var n,
              i = R(e).constructor;
            return void 0 === i || null == (n = R(i)[Ti]) ? t : tt(n);
          })(this, this.constructor),
          r = 0,
          o = n.length,
          c = new (Yi(i))(o);
        o > r;

      )
        c[r] = n[r++];
      return c;
    },
    d(function () {
      new Int8Array(1).slice();
    })
  );
  var Ki = Ne('unscopables'),
    Oi = Array.prototype;
  null == Oi[Ki] && J.f(Oi, Ki, { configurable: !0, value: Wt(null) });
  var zi = function (e) {
      Oi[Ki][e] = !0;
    },
    ji = Object.defineProperty,
    Di = {},
    _i = function (e) {
      throw e;
    },
    Pi = Ce.includes,
    Mi = (function (e, t) {
      if (S(Di, e)) return Di[e];
      t || (t = {});
      var n = [][e],
        i = !!S(t, 'ACCESSORS') && t.ACCESSORS,
        r = S(t, 0) ? t[0] : _i,
        o = S(t, 1) ? t[1] : void 0;
      return (Di[e] =
        !!n &&
        !d(function () {
          if (i && !g) return !0;
          var e = { length: -1 };
          i ? ji(e, 1, { enumerable: !0, get: _i }) : (e[1] = 1),
            n.call(e, r, o);
        }));
    })('indexOf', { ACCESSORS: !0, 1: 0 });
  He(
    { target: 'Array', proto: !0, forced: !Mi },
    {
      includes: function (e) {
        return Pi(this, e, arguments.length > 1 ? arguments[1] : void 0);
      }
    }
  ),
    zi('includes');
  rt('Array', 'includes');
  He(
    { target: 'String', proto: !0, forced: !je('includes') },
    {
      includes: function (e) {
        return !!~String(v(this)).indexOf(
          Oe(e),
          arguments.length > 1 ? arguments[1] : void 0
        );
      }
    }
  );
  rt('String', 'includes');
  var qi = !d(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    $i = a(function (e) {
      var t = J.f,
        n = P('meta'),
        i = 0,
        r =
          Object.isExtensible ||
          function () {
            return !0;
          },
        o = function (e) {
          t(e, n, { value: { objectID: 'O' + ++i, weakData: {} } });
        },
        c = (e.exports = {
          REQUIRED: !1,
          fastKey: function (e, t) {
            if (!F(e))
              return 'symbol' == typeof e
                ? e
                : ('string' == typeof e ? 'S' : 'P') + e;
            if (!S(e, n)) {
              if (!r(e)) return 'F';
              if (!t) return 'E';
              o(e);
            }
            return e[n].objectID;
          },
          getWeakData: function (e, t) {
            if (!S(e, n)) {
              if (!r(e)) return !0;
              if (!t) return !1;
              o(e);
            }
            return e[n].weakData;
          },
          onFreeze: function (e) {
            return qi && c.REQUIRED && r(e) && !S(e, n) && o(e), e;
          }
        });
      $[n] = !0;
    }),
    er =
      ($i.REQUIRED,
      $i.fastKey,
      $i.getWeakData,
      $i.onFreeze,
      function (e, t) {
        (this.stopped = e), (this.result = t);
      }),
    tr = function (e, t, n) {
      var i,
        r,
        o,
        c,
        s,
        a,
        u,
        l = n && n.that,
        d = !(!n || !n.AS_ENTRIES),
        g = !(!n || !n.IS_ITERATOR),
        f = !(!n || !n.INTERRUPTED),
        I = nt(t, l, 1 + d + f),
        h = function (e) {
          return i && ai(i), new er(!0, e);
        },
        p = function (e) {
          return d
            ? (R(e), f ? I(e[0], e[1], h) : I(e[0], e[1]))
            : f
            ? I(e, h)
            : I(e);
        };
      if (g) i = e;
      else {
        if ('function' != typeof (r = Ii(e)))
          throw TypeError('Target is not iterable');
        if (gi(r)) {
          for (o = 0, c = pe(e.length); c > o; o++)
            if ((s = p(e[o])) && s instanceof er) return s;
          return new er(!1);
        }
        i = r.call(e);
      }
      for (a = i.next; !(u = a.call(i)).done; ) {
        try {
          s = p(u.value);
        } catch (e) {
          throw (ai(i), e);
        }
        if ('object' == typeof s && s && s instanceof er) return s;
      }
      return new er(!1);
    },
    nr = function (e, t, n) {
      if (!(e instanceof t))
        throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
      return e;
    },
    ir = function (e, t, n) {
      for (var i in t) ae(e, i, t[i], n);
      return e;
    },
    rr = Ne('species'),
    or = J.f,
    cr = $i.fastKey,
    sr = se.set,
    ar = se.getterFor,
    ur =
      ((function (e, t, n) {
        var i = -1 !== e.indexOf('Map'),
          r = -1 !== e.indexOf('Weak'),
          o = i ? 'set' : 'add',
          c = l[e],
          s = c && c.prototype,
          a = c,
          u = {},
          g = function (e) {
            var t = s[e];
            ae(
              s,
              e,
              'add' == e
                ? function (e) {
                    return t.call(this, 0 === e ? 0 : e), this;
                  }
                : 'delete' == e
                ? function (e) {
                    return !(r && !F(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : 'get' == e
                ? function (e) {
                    return r && !F(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                  }
                : 'has' == e
                ? function (e) {
                    return !(r && !F(e)) && t.call(this, 0 === e ? 0 : e);
                  }
                : function (e, n) {
                    return t.call(this, 0 === e ? 0 : e, n), this;
                  }
            );
          };
        if (
          Je(
            e,
            'function' != typeof c ||
              !(
                r ||
                (s.forEach &&
                  !d(function () {
                    new c().entries().next();
                  }))
              )
          )
        )
          (a = n.getConstructor(t, e, i, o)), ($i.REQUIRED = !0);
        else if (Je(e, !0)) {
          var f = new a(),
            I = f[o](r ? {} : -0, 1) != f,
            h = d(function () {
              f.has(1);
            }),
            p = mi(function (e) {
              new c(e);
            }),
            y =
              !r &&
              d(function () {
                for (var e = new c(), t = 5; t--; ) e[o](t, t);
                return !e.has(-0);
              });
          p ||
            (((a = t(function (t, n) {
              nr(t, a, e);
              var r = (function (e, t, n) {
                var i, r;
                return (
                  _n &&
                    'function' == typeof (i = t.constructor) &&
                    i !== n &&
                    F((r = i.prototype)) &&
                    r !== n.prototype &&
                    _n(e, r),
                  e
                );
              })(new c(), t, a);
              return null != n && tr(n, r[o], { that: r, AS_ENTRIES: i }), r;
            })).prototype = s),
            (s.constructor = a)),
            (h || y) && (g('delete'), g('has'), i && g('get')),
            (y || I) && g(o),
            r && s.clear && delete s.clear;
        }
        (u[e] = a),
          He({ global: !0, forced: a != c }, u),
          zt(a, e),
          r || n.setStrong(a, e, i);
      })(
        'Set',
        function (e) {
          return function () {
            return e(this, arguments.length ? arguments[0] : void 0);
          };
        },
        {
          getConstructor: function (e, t, n, i) {
            var r = e(function (e, o) {
                nr(e, r, t),
                  sr(e, {
                    type: t,
                    index: Wt(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                  }),
                  g || (e.size = 0),
                  null != o && tr(o, e[i], { that: e, AS_ENTRIES: n });
              }),
              o = ar(t),
              c = function (e, t, n) {
                var i,
                  r,
                  c = o(e),
                  a = s(e, t);
                return (
                  a
                    ? (a.value = n)
                    : ((c.last = a = {
                        index: (r = cr(t, !0)),
                        key: t,
                        value: n,
                        previous: (i = c.last),
                        next: void 0,
                        removed: !1
                      }),
                      c.first || (c.first = a),
                      i && (i.next = a),
                      g ? c.size++ : e.size++,
                      'F' !== r && (c.index[r] = a)),
                  e
                );
              },
              s = function (e, t) {
                var n,
                  i = o(e),
                  r = cr(t);
                if ('F' !== r) return i.index[r];
                for (n = i.first; n; n = n.next) if (n.key == t) return n;
              };
            return (
              ir(r.prototype, {
                clear: function () {
                  for (var e = o(this), t = e.index, n = e.first; n; )
                    (n.removed = !0),
                      n.previous && (n.previous = n.previous.next = void 0),
                      delete t[n.index],
                      (n = n.next);
                  (e.first = e.last = void 0),
                    g ? (e.size = 0) : (this.size = 0);
                },
                delete: function (e) {
                  var t = this,
                    n = o(t),
                    i = s(t, e);
                  if (i) {
                    var r = i.next,
                      c = i.previous;
                    delete n.index[i.index],
                      (i.removed = !0),
                      c && (c.next = r),
                      r && (r.previous = c),
                      n.first == i && (n.first = r),
                      n.last == i && (n.last = c),
                      g ? n.size-- : t.size--;
                  }
                  return !!i;
                },
                forEach: function (e) {
                  for (
                    var t,
                      n = o(this),
                      i = nt(
                        e,
                        arguments.length > 1 ? arguments[1] : void 0,
                        3
                      );
                    (t = t ? t.next : n.first);

                  )
                    for (i(t.value, t.key, this); t && t.removed; )
                      t = t.previous;
                },
                has: function (e) {
                  return !!s(this, e);
                }
              }),
              ir(
                r.prototype,
                n
                  ? {
                      get: function (e) {
                        var t = s(this, e);
                        return t && t.value;
                      },
                      set: function (e, t) {
                        return c(this, 0 === e ? 0 : e, t);
                      }
                    }
                  : {
                      add: function (e) {
                        return c(this, (e = 0 === e ? 0 : e), e);
                      }
                    }
              ),
              g &&
                or(r.prototype, 'size', {
                  get: function () {
                    return o(this).size;
                  }
                }),
              r
            );
          },
          setStrong: function (e, t, n) {
            var i = t + ' Iterator',
              r = ar(t),
              o = ar(i);
            ii(
              e,
              t,
              function (e, t) {
                sr(this, {
                  type: i,
                  target: e,
                  state: r(e),
                  kind: t,
                  last: void 0
                });
              },
              function () {
                for (var e = o(this), t = e.kind, n = e.last; n && n.removed; )
                  n = n.previous;
                return e.target && (e.last = n = n ? n.next : e.state.first)
                  ? 'keys' == t
                    ? { value: n.key, done: !1 }
                    : 'values' == t
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                  : ((e.target = void 0), { value: void 0, done: !0 });
              },
              n ? 'entries' : 'values',
              !n,
              !0
            ),
              (function (e) {
                var t = de(e),
                  n = J.f;
                g &&
                  t &&
                  !t[rr] &&
                  n(t, rr, {
                    configurable: !0,
                    get: function () {
                      return this;
                    }
                  });
              })(t);
          }
        }
      ),
      {
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
        TouchList: 0
      }),
    lr = 'Array Iterator',
    dr = se.set,
    gr = se.getterFor(lr),
    fr = ii(
      Array,
      'Array',
      function (e, t) {
        dr(this, { type: lr, target: B(e), index: 0, kind: t });
      },
      function () {
        var e = gr(this),
          t = e.target,
          n = e.kind,
          i = e.index++;
        return !t || i >= t.length
          ? ((e.target = void 0), { value: void 0, done: !0 })
          : 'keys' == n
          ? { value: i, done: !1 }
          : 'values' == n
          ? { value: t[i], done: !1 }
          : { value: [i, t[i]], done: !1 };
      },
      'values'
    );
  (zn.Arguments = zn.Array), zi('keys'), zi('values'), zi('entries');
  var Ir = Ne('iterator'),
    hr = Ne('toStringTag'),
    pr = fr.values;
  for (var yr in ur) {
    var br = l[yr],
      mr = br && br.prototype;
    if (mr) {
      if (mr[Ir] !== pr)
        try {
          W(mr, Ir, pr);
        } catch (e) {
          mr[Ir] = pr;
        }
      if ((mr[hr] || W(mr, hr, yr), ur[yr]))
        for (var Cr in fr)
          if (mr[Cr] !== fr[Cr])
            try {
              W(mr, Cr, fr[Cr]);
            } catch (e) {
              mr[Cr] = fr[Cr];
            }
    }
  }
  ue.Set;
  function vr(e) {
    var t = this.constructor;
    return this.then(
      function (n) {
        return t.resolve(e()).then(function () {
          return n;
        });
      },
      function (n) {
        return t.resolve(e()).then(function () {
          return t.reject(n);
        });
      }
    );
  }
  function Br(e) {
    return new this(function (t, n) {
      if (!e || void 0 === e.length)
        return n(
          new TypeError(
            typeof e +
              ' ' +
              e +
              ' is not iterable(cannot read property Symbol(Symbol.iterator))'
          )
        );
      var i = Array.prototype.slice.call(e);
      if (0 === i.length) return t([]);
      var r = i.length;
      function o(e, n) {
        if (n && ('object' == typeof n || 'function' == typeof n)) {
          var c = n.then;
          if ('function' == typeof c)
            return void c.call(
              n,
              function (t) {
                o(e, t);
              },
              function (n) {
                (i[e] = { status: 'rejected', reason: n }), 0 == --r && t(i);
              }
            );
        }
        (i[e] = { status: 'fulfilled', value: n }), 0 == --r && t(i);
      }
      for (var c = 0; c < i.length; c++) o(c, i[c]);
    });
  }
  var Fr = setTimeout;
  function Ur(e) {
    return Boolean(e && void 0 !== e.length);
  }
  function Zr() {}
  function Sr(e) {
    if (!(this instanceof Sr))
      throw new TypeError('Promises must be constructed via new');
    if ('function' != typeof e) throw new TypeError('not a function');
    (this._state = 0),
      (this._handled = !1),
      (this._value = void 0),
      (this._deferreds = []),
      Ar(e, this);
  }
  function Vr(e, t) {
    for (; 3 === e._state; ) e = e._value;
    0 !== e._state
      ? ((e._handled = !0),
        Sr._immediateFn(function () {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null !== n) {
            var i;
            try {
              i = n(e._value);
            } catch (e) {
              return void Xr(t.promise, e);
            }
            Gr(t.promise, i);
          } else (1 === e._state ? Gr : Xr)(t.promise, e._value);
        }))
      : e._deferreds.push(t);
  }
  function Gr(e, t) {
    try {
      if (t === e)
        throw new TypeError('A promise cannot be resolved with itself.');
      if (t && ('object' == typeof t || 'function' == typeof t)) {
        var n = t.then;
        if (t instanceof Sr) return (e._state = 3), (e._value = t), void wr(e);
        if ('function' == typeof n)
          return void Ar(
            ((i = n),
            (r = t),
            function () {
              i.apply(r, arguments);
            }),
            e
          );
      }
      (e._state = 1), (e._value = t), wr(e);
    } catch (t) {
      Xr(e, t);
    }
    var i, r;
  }
  function Xr(e, t) {
    (e._state = 2), (e._value = t), wr(e);
  }
  function wr(e) {
    2 === e._state &&
      0 === e._deferreds.length &&
      Sr._immediateFn(function () {
        e._handled || Sr._unhandledRejectionFn(e._value);
      });
    for (var t = 0, n = e._deferreds.length; t < n; t++) Vr(e, e._deferreds[t]);
    e._deferreds = null;
  }
  function xr(e, t, n) {
    (this.onFulfilled = 'function' == typeof e ? e : null),
      (this.onRejected = 'function' == typeof t ? t : null),
      (this.promise = n);
  }
  function Ar(e, t) {
    var n = !1;
    try {
      e(
        function (e) {
          n || ((n = !0), Gr(t, e));
        },
        function (e) {
          n || ((n = !0), Xr(t, e));
        }
      );
    } catch (e) {
      if (n) return;
      (n = !0), Xr(t, e);
    }
  }
  (Sr.prototype.catch = function (e) {
    return this.then(null, e);
  }),
    (Sr.prototype.then = function (e, t) {
      var n = new this.constructor(Zr);
      return Vr(this, new xr(e, t, n)), n;
    }),
    (Sr.prototype.finally = vr),
    (Sr.all = function (e) {
      return new Sr(function (t, n) {
        if (!Ur(e)) return n(new TypeError('Promise.all accepts an array'));
        var i = Array.prototype.slice.call(e);
        if (0 === i.length) return t([]);
        var r = i.length;
        function o(e, c) {
          try {
            if (c && ('object' == typeof c || 'function' == typeof c)) {
              var s = c.then;
              if ('function' == typeof s)
                return void s.call(
                  c,
                  function (t) {
                    o(e, t);
                  },
                  n
                );
            }
            (i[e] = c), 0 == --r && t(i);
          } catch (e) {
            n(e);
          }
        }
        for (var c = 0; c < i.length; c++) o(c, i[c]);
      });
    }),
    (Sr.allSettled = Br),
    (Sr.resolve = function (e) {
      return e && 'object' == typeof e && e.constructor === Sr
        ? e
        : new Sr(function (t) {
            t(e);
          });
    }),
    (Sr.reject = function (e) {
      return new Sr(function (t, n) {
        n(e);
      });
    }),
    (Sr.race = function (e) {
      return new Sr(function (t, n) {
        if (!Ur(e)) return n(new TypeError('Promise.race accepts an array'));
        for (var i = 0, r = e.length; i < r; i++) Sr.resolve(e[i]).then(t, n);
      });
    }),
    (Sr._immediateFn =
      ('function' == typeof setImmediate &&
        function (e) {
          setImmediate(e);
        }) ||
      function (e) {
        Fr(e, 0);
      }),
    (Sr._unhandledRejectionFn = function (e) {
      'undefined' != typeof console &&
        console &&
        console.warn('Possible Unhandled Promise Rejection:', e);
    });
  var Rr = (function () {
    if ('undefined' != typeof self) return self;
    if ('undefined' != typeof window) return window;
    if ('undefined' != typeof global) return global;
    throw new Error('unable to locate global object');
  })();
  'function' != typeof Rr.Promise
    ? (Rr.Promise = Sr)
    : Rr.Promise.prototype.finally
    ? Rr.Promise.allSettled || (Rr.Promise.allSettled = Br)
    : (Rr.Promise.prototype.finally = vr),
    (function (e) {
      function t() {}
      function n(e, t) {
        if (
          ((e = void 0 === e ? 'utf-8' : e),
          (t = void 0 === t ? { fatal: !1 } : t),
          -1 === r.indexOf(e.toLowerCase()))
        )
          throw new RangeError(
            "Failed to construct 'TextDecoder': The encoding label provided ('" +
              e +
              "') is invalid."
          );
        if (t.fatal)
          throw Error(
            "Failed to construct 'TextDecoder': the 'fatal' option is unsupported."
          );
      }
      function i(e) {
        for (
          var t = 0,
            n = Math.min(65536, e.length + 1),
            i = new Uint16Array(n),
            r = [],
            o = 0;
          ;

        ) {
          var c = t < e.length;
          if (!c || o >= n - 1) {
            if ((r.push(String.fromCharCode.apply(null, i.subarray(0, o))), !c))
              return r.join('');
            (e = e.subarray(t)), (o = t = 0);
          }
          if (0 == (128 & (c = e[t++]))) i[o++] = c;
          else if (192 == (224 & c)) {
            var s = 63 & e[t++];
            i[o++] = ((31 & c) << 6) | s;
          } else if (224 == (240 & c)) {
            s = 63 & e[t++];
            var a = 63 & e[t++];
            i[o++] = ((31 & c) << 12) | (s << 6) | a;
          } else if (240 == (248 & c)) {
            65535 <
              (c =
                ((7 & c) << 18) |
                ((s = 63 & e[t++]) << 12) |
                ((a = 63 & e[t++]) << 6) |
                (63 & e[t++])) &&
              ((c -= 65536),
              (i[o++] = ((c >>> 10) & 1023) | 55296),
              (c = 56320 | (1023 & c))),
              (i[o++] = c);
          }
        }
      }
      if (e.TextEncoder && e.TextDecoder) return !1;
      var r = ['utf-8', 'utf8', 'unicode-1-1-utf-8'];
      Object.defineProperty(t.prototype, 'encoding', { value: 'utf-8' }),
        (t.prototype.encode = function (e, t) {
          if ((t = void 0 === t ? { stream: !1 } : t).stream)
            throw Error(
              "Failed to encode: the 'stream' option is unsupported."
            );
          t = 0;
          for (
            var n = e.length,
              i = 0,
              r = Math.max(32, n + (n >>> 1) + 7),
              o = new Uint8Array((r >>> 3) << 3);
            t < n;

          ) {
            var c = e.charCodeAt(t++);
            if (55296 <= c && 56319 >= c) {
              if (t < n) {
                var s = e.charCodeAt(t);
                56320 == (64512 & s) &&
                  (++t, (c = ((1023 & c) << 10) + (1023 & s) + 65536));
              }
              if (55296 <= c && 56319 >= c) continue;
            }
            if (
              (i + 4 > o.length &&
                ((r += 8),
                (r = ((r *= 1 + (t / e.length) * 2) >>> 3) << 3),
                (s = new Uint8Array(r)).set(o),
                (o = s)),
              0 == (4294967168 & c))
            )
              o[i++] = c;
            else {
              if (0 == (4294965248 & c)) o[i++] = ((c >>> 6) & 31) | 192;
              else if (0 == (4294901760 & c))
                (o[i++] = ((c >>> 12) & 15) | 224),
                  (o[i++] = ((c >>> 6) & 63) | 128);
              else {
                if (0 != (4292870144 & c)) continue;
                (o[i++] = ((c >>> 18) & 7) | 240),
                  (o[i++] = ((c >>> 12) & 63) | 128),
                  (o[i++] = ((c >>> 6) & 63) | 128);
              }
              o[i++] = (63 & c) | 128;
            }
          }
          return o.slice ? o.slice(0, i) : o.subarray(0, i);
        }),
        Object.defineProperty(n.prototype, 'encoding', { value: 'utf-8' }),
        Object.defineProperty(n.prototype, 'fatal', { value: !1 }),
        Object.defineProperty(n.prototype, 'ignoreBOM', { value: !1 });
      var o = i;
      'function' == typeof Buffer && Buffer.from
        ? (o = function (e) {
            return Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString(
              'utf-8'
            );
          })
        : 'function' == typeof Blob &&
          'function' == typeof URL &&
          'function' == typeof URL.createObjectURL &&
          (o = function (e) {
            var t = URL.createObjectURL(
              new Blob([e], { type: 'text/plain;charset=UTF-8' })
            );
            try {
              var n = new XMLHttpRequest();
              return n.open('GET', t, !1), n.send(), n.responseText;
            } catch (t) {
              return i(e);
            } finally {
              URL.revokeObjectURL(t);
            }
          }),
        (n.prototype.decode = function (e, t) {
          if ((t = void 0 === t ? { stream: !1 } : t).stream)
            throw Error(
              "Failed to decode: the 'stream' option is unsupported."
            );
          return (
            (e =
              e instanceof Uint8Array
                ? e
                : e.buffer instanceof ArrayBuffer
                ? new Uint8Array(e.buffer)
                : new Uint8Array(e)),
            o(e)
          );
        }),
        (e.TextEncoder = t),
        (e.TextDecoder = n);
    })('undefined' != typeof window ? window : c),
    (function () {
      function e(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function t(e, t) {
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(e, i.key, i);
        }
      }
      function n(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      }
      function i(e, t) {
        if ('function' != typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 }
        })),
          t && o(e, t);
      }
      function r(e) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function o(e, t) {
        return (o =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function s() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function a(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function u(e, t) {
        return !t || ('object' != typeof t && 'function' != typeof t)
          ? a(e)
          : t;
      }
      function l(e) {
        var t = s();
        return function () {
          var n,
            i = r(e);
          if (t) {
            var o = r(this).constructor;
            n = Reflect.construct(i, arguments, o);
          } else n = i.apply(this, arguments);
          return u(this, n);
        };
      }
      function d(e, t) {
        for (
          ;
          !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = r(e));

        );
        return e;
      }
      function g(e, t, n) {
        return (g =
          'undefined' != typeof Reflect && Reflect.get
            ? Reflect.get
            : function (e, t, n) {
                var i = d(e, t);
                if (i) {
                  var r = Object.getOwnPropertyDescriptor(i, t);
                  return r.get ? r.get.call(n) : r.value;
                }
              })(e, t, n || e);
      }
      var f = (function () {
          function t() {
            e(this, t),
              Object.defineProperty(this, 'listeners', {
                value: {},
                writable: !0,
                configurable: !0
              });
          }
          return (
            n(t, [
              {
                key: 'addEventListener',
                value: function (e, t) {
                  e in this.listeners || (this.listeners[e] = []),
                    this.listeners[e].push(t);
                }
              },
              {
                key: 'removeEventListener',
                value: function (e, t) {
                  if (e in this.listeners)
                    for (
                      var n = this.listeners[e], i = 0, r = n.length;
                      i < r;
                      i++
                    )
                      if (n[i] === t) return void n.splice(i, 1);
                }
              },
              {
                key: 'dispatchEvent',
                value: function (e) {
                  var t = this;
                  if (e.type in this.listeners) {
                    for (
                      var n = function (n) {
                          setTimeout(function () {
                            return n.call(t, e);
                          });
                        },
                        i = this.listeners[e.type],
                        r = 0,
                        o = i.length;
                      r < o;
                      r++
                    )
                      n(i[r]);
                    return !e.defaultPrevented;
                  }
                }
              }
            ]),
            t
          );
        })(),
        I = (function (t) {
          i(c, t);
          var o = l(c);
          function c() {
            var t;
            return (
              e(this, c),
              (t = o.call(this)).listeners || f.call(a(t)),
              Object.defineProperty(a(t), 'aborted', {
                value: !1,
                writable: !0,
                configurable: !0
              }),
              Object.defineProperty(a(t), 'onabort', {
                value: null,
                writable: !0,
                configurable: !0
              }),
              t
            );
          }
          return (
            n(c, [
              {
                key: 'toString',
                value: function () {
                  return '[object AbortSignal]';
                }
              },
              {
                key: 'dispatchEvent',
                value: function (e) {
                  'abort' === e.type &&
                    ((this.aborted = !0),
                    'function' == typeof this.onabort &&
                      this.onabort.call(this, e)),
                    g(r(c.prototype), 'dispatchEvent', this).call(this, e);
                }
              }
            ]),
            c
          );
        })(f),
        h = (function () {
          function t() {
            e(this, t),
              Object.defineProperty(this, 'signal', {
                value: new I(),
                writable: !0,
                configurable: !0
              });
          }
          return (
            n(t, [
              {
                key: 'abort',
                value: function () {
                  var e;
                  try {
                    e = new Event('abort');
                  } catch (t) {
                    'undefined' != typeof document
                      ? document.createEvent
                        ? (e = document.createEvent('Event')).initEvent(
                            'abort',
                            !1,
                            !1
                          )
                        : ((e = document.createEventObject()).type = 'abort')
                      : (e = { type: 'abort', bubbles: !1, cancelable: !1 });
                  }
                  this.signal.dispatchEvent(e);
                }
              },
              {
                key: 'toString',
                value: function () {
                  return '[object AbortController]';
                }
              }
            ]),
            t
          );
        })();
      function p(e) {
        return e.__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL
          ? (console.log(
              '__FORCE_INSTALL_ABORTCONTROLLER_POLYFILL=true is set, will force install polyfill'
            ),
            !0)
          : ('function' == typeof e.Request &&
              !e.Request.prototype.hasOwnProperty('signal')) ||
              !e.AbortController;
      }
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        ((h.prototype[Symbol.toStringTag] = 'AbortController'),
        (I.prototype[Symbol.toStringTag] = 'AbortSignal')),
        (function (e) {
          p(e) && ((e.AbortController = h), (e.AbortSignal = I));
        })('undefined' != typeof self ? self : c);
    })();
  var Qr = a(function (e, t) {
    Object.defineProperty(t, '__esModule', { value: !0 });
    var n = (function () {
      function e() {
        var e = this;
        (this.locked = new Map()),
          (this.addToLocked = function (t, n) {
            var i = e.locked.get(t);
            void 0 === i
              ? void 0 === n
                ? e.locked.set(t, [])
                : e.locked.set(t, [n])
              : void 0 !== n && (i.unshift(n), e.locked.set(t, i));
          }),
          (this.isLocked = function (t) {
            return e.locked.has(t);
          }),
          (this.lock = function (t) {
            return new Promise(function (n, i) {
              e.isLocked(t) ? e.addToLocked(t, n) : (e.addToLocked(t), n());
            });
          }),
          (this.unlock = function (t) {
            var n = e.locked.get(t);
            if (void 0 !== n && 0 !== n.length) {
              var i = n.pop();
              e.locked.set(t, n), void 0 !== i && setTimeout(i, 0);
            } else e.locked.delete(t);
          });
      }
      return (
        (e.getInstance = function () {
          return void 0 === e.instance && (e.instance = new e()), e.instance;
        }),
        e
      );
    })();
    t.default = function () {
      return n.getInstance();
    };
  });
  s(Qr);
  var Jr = s(
      a(function (e, t) {
        var n =
            (c && c.__awaiter) ||
            function (e, t, n, i) {
              return new (n || (n = Promise))(function (r, o) {
                function c(e) {
                  try {
                    a(i.next(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function s(e) {
                  try {
                    a(i.throw(e));
                  } catch (e) {
                    o(e);
                  }
                }
                function a(e) {
                  e.done
                    ? r(e.value)
                    : new n(function (t) {
                        t(e.value);
                      }).then(c, s);
                }
                a((i = i.apply(e, t || [])).next());
              });
            },
          i =
            (c && c.__generator) ||
            function (e, t) {
              var n,
                i,
                r,
                o,
                c = {
                  label: 0,
                  sent: function () {
                    if (1 & r[0]) throw r[1];
                    return r[1];
                  },
                  trys: [],
                  ops: []
                };
              return (
                (o = { next: s(0), throw: s(1), return: s(2) }),
                'function' == typeof Symbol &&
                  (o[Symbol.iterator] = function () {
                    return this;
                  }),
                o
              );
              function s(o) {
                return function (s) {
                  return (function (o) {
                    if (n)
                      throw new TypeError('Generator is already executing.');
                    for (; c; )
                      try {
                        if (
                          ((n = 1),
                          i &&
                            (r =
                              2 & o[0]
                                ? i.return
                                : o[0]
                                ? i.throw || ((r = i.return) && r.call(i), 0)
                                : i.next) &&
                            !(r = r.call(i, o[1])).done)
                        )
                          return r;
                        switch (
                          ((i = 0), r && (o = [2 & o[0], r.value]), o[0])
                        ) {
                          case 0:
                          case 1:
                            r = o;
                            break;
                          case 4:
                            return c.label++, { value: o[1], done: !1 };
                          case 5:
                            c.label++, (i = o[1]), (o = [0]);
                            continue;
                          case 7:
                            (o = c.ops.pop()), c.trys.pop();
                            continue;
                          default:
                            if (
                              !((r = c.trys),
                              (r = r.length > 0 && r[r.length - 1]) ||
                                (6 !== o[0] && 2 !== o[0]))
                            ) {
                              c = 0;
                              continue;
                            }
                            if (
                              3 === o[0] &&
                              (!r || (o[1] > r[0] && o[1] < r[3]))
                            ) {
                              c.label = o[1];
                              break;
                            }
                            if (6 === o[0] && c.label < r[1]) {
                              (c.label = r[1]), (r = o);
                              break;
                            }
                            if (r && c.label < r[2]) {
                              (c.label = r[2]), c.ops.push(o);
                              break;
                            }
                            r[2] && c.ops.pop(), c.trys.pop();
                            continue;
                        }
                        o = t.call(e, c);
                      } catch (e) {
                        (o = [6, e]), (i = 0);
                      } finally {
                        n = r = 0;
                      }
                    if (5 & o[0]) throw o[1];
                    return { value: o[0] ? o[1] : void 0, done: !0 };
                  })([o, s]);
                };
              }
            };
        Object.defineProperty(t, '__esModule', { value: !0 });
        var r = 'browser-tabs-lock-key';
        function o(e) {
          return new Promise(function (t) {
            return setTimeout(t, e);
          });
        }
        function s(e) {
          for (
            var t =
                '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
              n = '',
              i = 0;
            i < e;
            i++
          ) {
            n += t[Math.floor(Math.random() * t.length)];
          }
          return n;
        }
        var a = (function () {
          function e() {
            (this.acquiredIatSet = new Set()),
              (this.id = Date.now().toString() + s(15)),
              (this.acquireLock = this.acquireLock.bind(this)),
              (this.releaseLock = this.releaseLock.bind(this)),
              (this.releaseLock__private__ = this.releaseLock__private__.bind(
                this
              )),
              (this.waitForSomethingToChange = this.waitForSomethingToChange.bind(
                this
              )),
              (this.refreshLockWhileAcquired = this.refreshLockWhileAcquired.bind(
                this
              )),
              void 0 === e.waiters && (e.waiters = []);
          }
          return (
            (e.prototype.acquireLock = function (t, c) {
              return (
                void 0 === c && (c = 5e3),
                n(this, void 0, void 0, function () {
                  var n, a, u, l, d, g;
                  return i(this, function (i) {
                    switch (i.label) {
                      case 0:
                        (n = Date.now() + s(4)),
                          (a = Date.now() + c),
                          (u = r + '-' + t),
                          (l = window.localStorage),
                          (i.label = 1);
                      case 1:
                        return Date.now() < a ? [4, o(30)] : [3, 8];
                      case 2:
                        return (
                          i.sent(),
                          null !== l.getItem(u)
                            ? [3, 5]
                            : ((d = this.id + '-' + t + '-' + n),
                              [4, o(Math.floor(25 * Math.random()))])
                        );
                      case 3:
                        return (
                          i.sent(),
                          l.setItem(
                            u,
                            JSON.stringify({
                              id: this.id,
                              iat: n,
                              timeoutKey: d,
                              timeAcquired: Date.now(),
                              timeRefreshed: Date.now()
                            })
                          ),
                          [4, o(30)]
                        );
                      case 4:
                        return (
                          i.sent(),
                          null !== (g = l.getItem(u)) &&
                          (g = JSON.parse(g)).id === this.id &&
                          g.iat === n
                            ? (this.acquiredIatSet.add(n),
                              this.refreshLockWhileAcquired(u, n),
                              [2, !0])
                            : [3, 7]
                        );
                      case 5:
                        return (
                          e.lockCorrector(),
                          [4, this.waitForSomethingToChange(a)]
                        );
                      case 6:
                        i.sent(), (i.label = 7);
                      case 7:
                        return (n = Date.now() + s(4)), [3, 1];
                      case 8:
                        return [2, !1];
                    }
                  });
                })
              );
            }),
            (e.prototype.refreshLockWhileAcquired = function (e, t) {
              return n(this, void 0, void 0, function () {
                var r = this;
                return i(this, function (o) {
                  return (
                    setTimeout(function () {
                      return n(r, void 0, void 0, function () {
                        var n, r;
                        return i(this, function (i) {
                          switch (i.label) {
                            case 0:
                              return [4, Qr.default().lock(t)];
                            case 1:
                              return (
                                i.sent(),
                                this.acquiredIatSet.has(t)
                                  ? ((n = window.localStorage),
                                    null === (r = n.getItem(e))
                                      ? (Qr.default().unlock(t), [2])
                                      : (((r = JSON.parse(
                                          r
                                        )).timeRefreshed = Date.now()),
                                        n.setItem(e, JSON.stringify(r)),
                                        Qr.default().unlock(t),
                                        this.refreshLockWhileAcquired(e, t),
                                        [2]))
                                  : (Qr.default().unlock(t), [2])
                              );
                          }
                        });
                      });
                    }, 1e3),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.waitForSomethingToChange = function (t) {
              return n(this, void 0, void 0, function () {
                return i(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return [
                        4,
                        new Promise(function (n) {
                          var i = !1,
                            r = Date.now(),
                            o = !1;
                          function c() {
                            if (
                              (o ||
                                (window.removeEventListener('storage', c),
                                e.removeFromWaiting(c),
                                clearTimeout(s),
                                (o = !0)),
                              !i)
                            ) {
                              i = !0;
                              var t = 50 - (Date.now() - r);
                              t > 0 ? setTimeout(n, t) : n();
                            }
                          }
                          window.addEventListener('storage', c),
                            e.addToWaiting(c);
                          var s = setTimeout(c, Math.max(0, t - Date.now()));
                        })
                      ];
                    case 1:
                      return n.sent(), [2];
                  }
                });
              });
            }),
            (e.addToWaiting = function (t) {
              this.removeFromWaiting(t),
                void 0 !== e.waiters && e.waiters.push(t);
            }),
            (e.removeFromWaiting = function (t) {
              void 0 !== e.waiters &&
                (e.waiters = e.waiters.filter(function (e) {
                  return e !== t;
                }));
            }),
            (e.notifyWaiters = function () {
              void 0 !== e.waiters &&
                e.waiters.slice().forEach(function (e) {
                  return e();
                });
            }),
            (e.prototype.releaseLock = function (e) {
              return n(this, void 0, void 0, function () {
                return i(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [4, this.releaseLock__private__(e)];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            (e.prototype.releaseLock__private__ = function (t) {
              return n(this, void 0, void 0, function () {
                var n, o, c;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return (
                        (n = window.localStorage),
                        (o = r + '-' + t),
                        null === (c = n.getItem(o))
                          ? [2]
                          : (c = JSON.parse(c)).id !== this.id
                          ? [3, 2]
                          : [4, Qr.default().lock(c.iat)]
                      );
                    case 1:
                      i.sent(),
                        this.acquiredIatSet.delete(c.iat),
                        n.removeItem(o),
                        Qr.default().unlock(c.iat),
                        e.notifyWaiters(),
                        (i.label = 2);
                    case 2:
                      return [2];
                  }
                });
              });
            }),
            (e.lockCorrector = function () {
              for (
                var t = Date.now() - 5e3,
                  n = window.localStorage,
                  i = Object.keys(n),
                  o = !1,
                  c = 0;
                c < i.length;
                c++
              ) {
                var s = i[c];
                if (s.includes(r)) {
                  var a = n.getItem(s);
                  null !== a &&
                    ((void 0 === (a = JSON.parse(a)).timeRefreshed &&
                      a.timeAcquired < t) ||
                      (void 0 !== a.timeRefreshed && a.timeRefreshed < t)) &&
                    (n.removeItem(s), (o = !0));
                }
              }
              o && e.notifyWaiters();
            }),
            (e.waiters = void 0),
            e
          );
        })();
        t.default = a;
      })
    ),
    Wr = { timeoutInSeconds: 60 },
    Hr = 'memory',
    kr = [
      'login_required',
      'consent_required',
      'interaction_required',
      'account_selection_required',
      'access_denied'
    ],
    Lr = { name: 'auth0-spa-js', version: '1.13.6' },
    Tr = (function (e) {
      function n(t, i) {
        var r = e.call(this, i) || this;
        return (
          (r.error = t),
          (r.error_description = i),
          Object.setPrototypeOf(r, n.prototype),
          r
        );
      }
      return (
        t(n, e),
        (n.fromPayload = function (e) {
          return new n(e.error, e.error_description);
        }),
        n
      );
    })(Error),
    Er = (function (e) {
      function n(t, i, r, o) {
        void 0 === o && (o = null);
        var c = e.call(this, t, i) || this;
        return (
          (c.state = r),
          (c.appState = o),
          Object.setPrototypeOf(c, n.prototype),
          c
        );
      }
      return t(n, e), n;
    })(Tr),
    Yr = (function (e) {
      function n() {
        var t = e.call(this, 'timeout', 'Timeout') || this;
        return Object.setPrototypeOf(t, n.prototype), t;
      }
      return t(n, e), n;
    })(Tr),
    Nr = (function (e) {
      function n(t) {
        var i = e.call(this) || this;
        return (i.popup = t), Object.setPrototypeOf(i, n.prototype), i;
      }
      return t(n, e), n;
    })(Yr),
    Kr = function (e, t, n) {
      return (
        void 0 === n && (n = 60),
        new Promise(function (i, r) {
          var o = window.document.createElement('iframe');
          o.setAttribute('width', '0'),
            o.setAttribute('height', '0'),
            (o.style.display = 'none');
          var c,
            s = function () {
              window.document.body.contains(o) &&
                (window.document.body.removeChild(o),
                window.removeEventListener('message', c, !1));
            },
            a = setTimeout(function () {
              r(new Yr()), s();
            }, 1e3 * n);
          (c = function (e) {
            if (
              e.origin == t &&
              e.data &&
              'authorization_response' === e.data.type
            ) {
              var n = e.source;
              n && n.close(),
                e.data.response.error
                  ? r(Tr.fromPayload(e.data.response))
                  : i(e.data.response),
                clearTimeout(a),
                window.removeEventListener('message', c, !1),
                setTimeout(s, 2e3);
            }
          }),
            window.addEventListener('message', c, !1),
            window.document.body.appendChild(o),
            o.setAttribute('src', e);
        })
      );
    },
    Or = function (e, t) {
      var n,
        i,
        r,
        o = t.popup;
      if (
        (o
          ? (o.location.href = e)
          : ((n = e),
            (i = window.screenX + (window.innerWidth - 400) / 2),
            (r = window.screenY + (window.innerHeight - 600) / 2),
            (o = window.open(
              n,
              'auth0:authorize:popup',
              'left=' +
                i +
                ',top=' +
                r +
                ',width=400,height=600,resizable,scrollbars=yes,status=1'
            ))),
        !o)
      )
        throw new Error('Could not open popup');
      return new Promise(function (e, n) {
        var i,
          r = setTimeout(function () {
            n(new Nr(o)), window.removeEventListener('message', i, !1);
          }, 1e3 * (t.timeoutInSeconds || 60));
        (i = function (t) {
          if (t.data && 'authorization_response' === t.data.type) {
            if (
              (clearTimeout(r),
              window.removeEventListener('message', i, !1),
              o.close(),
              t.data.response.error)
            )
              return n(Tr.fromPayload(t.data.response));
            e(t.data.response);
          }
        }),
          window.addEventListener('message', i);
      });
    },
    zr = function () {
      return window.crypto || window.msCrypto;
    },
    jr = function () {
      var e = zr();
      return e.subtle || e.webkitSubtle;
    },
    Dr = function () {
      var e =
          '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_~.',
        t = '';
      return (
        Array.from(zr().getRandomValues(new Uint8Array(43))).forEach(function (
          n
        ) {
          return (t += e[n % e.length]);
        }),
        t
      );
    },
    _r = function (e) {
      return btoa(e);
    },
    Pr = function (e) {
      return Object.keys(e)
        .filter(function (t) {
          return void 0 !== e[t];
        })
        .map(function (t) {
          return encodeURIComponent(t) + '=' + encodeURIComponent(e[t]);
        })
        .join('&');
    },
    Mr = function (e) {
      return r(void 0, void 0, void 0, function () {
        var t;
        return o(this, function (n) {
          switch (n.label) {
            case 0:
              return (
                (t = jr().digest(
                  { name: 'SHA-256' },
                  new TextEncoder().encode(e)
                )),
                window.msCrypto
                  ? [
                      2,
                      new Promise(function (e, n) {
                        (t.oncomplete = function (t) {
                          e(t.target.result);
                        }),
                          (t.onerror = function (e) {
                            n(e.error);
                          }),
                          (t.onabort = function () {
                            n('The digest operation was aborted');
                          });
                      })
                    ]
                  : [4, t]
              );
            case 1:
              return [2, n.sent()];
          }
        });
      });
    },
    qr = function (e) {
      return (function (e) {
        return decodeURIComponent(
          atob(e)
            .split('')
            .map(function (e) {
              return '%' + ('00' + e.charCodeAt(0).toString(16)).slice(-2);
            })
            .join('')
        );
      })(e.replace(/_/g, '/').replace(/-/g, '+'));
    },
    $r = function (e) {
      var t = new Uint8Array(e);
      return (function (e) {
        var t = { '+': '-', '/': '_', '=': '' };
        return e.replace(/[+/=]/g, function (e) {
          return t[e];
        });
      })(window.btoa(String.fromCharCode.apply(String, Array.from(t))));
    };
  var eo = function (e, t) {
      return r(void 0, void 0, void 0, function () {
        var n, i;
        return o(this, function (r) {
          switch (r.label) {
            case 0:
              return [
                4,
                ((o = e),
                (c = t),
                (c = c || {}),
                new Promise(function (e, t) {
                  var n = new XMLHttpRequest(),
                    i = [],
                    r = [],
                    s = {},
                    a = function () {
                      return {
                        ok: 2 == ((n.status / 100) | 0),
                        statusText: n.statusText,
                        status: n.status,
                        url: n.responseURL,
                        text: function () {
                          return Promise.resolve(n.responseText);
                        },
                        json: function () {
                          return Promise.resolve(n.responseText).then(
                            JSON.parse
                          );
                        },
                        blob: function () {
                          return Promise.resolve(new Blob([n.response]));
                        },
                        clone: a,
                        headers: {
                          keys: function () {
                            return i;
                          },
                          entries: function () {
                            return r;
                          },
                          get: function (e) {
                            return s[e.toLowerCase()];
                          },
                          has: function (e) {
                            return e.toLowerCase() in s;
                          }
                        }
                      };
                    };
                  for (var u in (n.open(c.method || 'get', o, !0),
                  (n.onload = function () {
                    n
                      .getAllResponseHeaders()
                      .replace(
                        /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                        function (e, t, n) {
                          i.push((t = t.toLowerCase())),
                            r.push([t, n]),
                            (s[t] = s[t] ? s[t] + ',' + n : n);
                        }
                      ),
                      e(a());
                  }),
                  (n.onerror = t),
                  (n.withCredentials = 'include' == c.credentials),
                  c.headers))
                    n.setRequestHeader(u, c.headers[u]);
                  n.send(c.body || null);
                }))
              ];
            case 1:
              return (n = r.sent()), (i = { ok: n.ok }), [4, n.json()];
            case 2:
              return [2, ((i.json = r.sent()), i)];
          }
          var o, c;
        });
      });
    },
    to = function (e, t, n) {
      return r(void 0, void 0, void 0, function () {
        var i, r;
        return o(this, function (o) {
          return (
            (i = new AbortController()),
            (t.signal = i.signal),
            [
              2,
              Promise.race([
                eo(e, t),
                new Promise(function (e, t) {
                  r = setTimeout(function () {
                    i.abort(), t(new Error("Timeout when executing 'fetch'"));
                  }, n);
                })
              ]).finally(function () {
                clearTimeout(r);
              })
            ]
          );
        });
      });
    },
    no = function (e, t, n, i, c, s) {
      return r(void 0, void 0, void 0, function () {
        return o(this, function (r) {
          return [
            2,
            ((o = {
              auth: { audience: t, scope: n },
              timeout: c,
              fetchUrl: e,
              fetchOptions: i
            }),
            (a = s),
            new Promise(function (e, t) {
              var n = new MessageChannel();
              (n.port1.onmessage = function (n) {
                n.data.error ? t(new Error(n.data.error)) : e(n.data);
              }),
                a.postMessage(o, [n.port2]);
            }))
          ];
          var o, a;
        });
      });
    },
    io = function (e, t, n, i, c, s) {
      return (
        void 0 === s && (s = 1e4),
        r(void 0, void 0, void 0, function () {
          return o(this, function (r) {
            return c ? [2, no(e, t, n, i, s, c)] : [2, to(e, i, s)];
          });
        })
      );
    };
  function ro(e, t, n, c, s, a) {
    return r(this, void 0, void 0, function () {
      var r, u, l, d, g, f, I, h;
      return o(this, function (o) {
        switch (o.label) {
          case 0:
            (r = null), (l = 0), (o.label = 1);
          case 1:
            if (!(l < 3)) return [3, 6];
            o.label = 2;
          case 2:
            return o.trys.push([2, 4, , 5]), [4, io(e, n, c, s, a, t)];
          case 3:
            return (u = o.sent()), (r = null), [3, 6];
          case 4:
            return (d = o.sent()), (r = d), [3, 5];
          case 5:
            return l++, [3, 1];
          case 6:
            if (r) throw ((r.message = r.message || 'Failed to fetch'), r);
            if (
              ((g = u.json),
              (f = g.error),
              (I = g.error_description),
              (h = i(g, ['error', 'error_description'])),
              !u.ok)
            )
              throw new Tr(
                f || 'request_error',
                I || 'HTTP error. Unable to fetch ' + e
              );
            return [2, h];
        }
      });
    });
  }
  var oo = function (e) {
      return Array.from(new Set(e));
    },
    co = function () {
      for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
      return oo(e.join(' ').trim().split(/\s+/)).join(' ');
    };
  function so(e, t) {
    var n = e.baseUrl,
      c = e.timeout,
      s = e.audience,
      a = e.scope,
      u = e.auth0Client,
      l = i(e, ['baseUrl', 'timeout', 'audience', 'scope', 'auth0Client']);
    return r(this, void 0, void 0, function () {
      var e, i;
      return o(this, function (r) {
        switch (r.label) {
          case 0:
            return [
              4,
              ro(
                n + '/oauth/token',
                c,
                s || 'default',
                a,
                {
                  method: 'POST',
                  body: JSON.stringify(l),
                  headers: {
                    'Content-type': 'application/json',
                    'Auth0-Client': btoa(JSON.stringify(u || Lr))
                  }
                },
                t
              )
            ];
          case 1:
            return (
              (e = r.sent()),
              (i = (function (e, t) {
                void 0 === e && (e = ''), void 0 === t && (t = '');
                var n = e.split(/\s+/),
                  i = t.split(/\s+/);
                return n
                  .filter(function (e) {
                    return !i.includes(e);
                  })
                  .join(' ');
              })(a, e.scope)).length &&
                console.warn(
                  'The requested scopes (' +
                    a +
                    ') are different from the scopes of the retrieved token (' +
                    e.scope +
                    '). This could mean that your access token may not include all the scopes that you expect. It is advised to resolve this by either:\n  \n  - Removing `' +
                    i +
                    '` from the scope when requesting a new token.\n  - Ensuring `' +
                    i +
                    "` is returned as part of the requested token's scopes."
                ),
              [2, e]
            );
        }
      });
    });
  }
  var ao = (function () {
      function e(e, t) {
        void 0 === t && (t = uo),
          (this.prefix = t),
          (this.client_id = e.client_id),
          (this.scope = e.scope),
          (this.audience = e.audience);
      }
      return (
        (e.prototype.toKey = function () {
          return (
            this.prefix +
            '::' +
            this.client_id +
            '::' +
            this.audience +
            '::' +
            this.scope
          );
        }),
        (e.fromKey = function (t) {
          var n = t.split('::'),
            i = n[0],
            r = n[1],
            o = n[2];
          return new e({ client_id: r, scope: n[3], audience: o }, i);
        }),
        e
      );
    })(),
    uo = '@@auth0spajs@@',
    lo = function (e) {
      var t = Math.floor(Date.now() / 1e3) + e.expires_in;
      return { body: e, expiresAt: Math.min(t, e.decodedToken.claims.exp) };
    },
    go = function (e, t) {
      var n = e.client_id,
        i = e.audience,
        r = e.scope;
      return t.filter(function (e) {
        var t = ao.fromKey(e),
          o = t.prefix,
          c = t.client_id,
          s = t.audience,
          a = t.scope,
          u = a && a.split(' '),
          l =
            a &&
            r.split(' ').reduce(function (e, t) {
              return e && u.includes(t);
            }, !0);
        return o === uo && c === n && s === i && l;
      })[0];
    },
    fo = (function () {
      function e() {}
      return (
        (e.prototype.save = function (e) {
          var t = new ao({
              client_id: e.client_id,
              scope: e.scope,
              audience: e.audience
            }),
            n = lo(e);
          window.localStorage.setItem(t.toKey(), JSON.stringify(n));
        }),
        (e.prototype.get = function (e, t) {
          void 0 === t && (t = 0);
          var n = this.readJson(e),
            i = Math.floor(Date.now() / 1e3);
          if (n) {
            if (!(n.expiresAt - t < i)) return n.body;
            if (n.body.refresh_token) {
              var r = this.stripData(n);
              return this.writeJson(e.toKey(), r), r.body;
            }
            localStorage.removeItem(e.toKey());
          }
        }),
        (e.prototype.clear = function () {
          for (var e = localStorage.length - 1; e >= 0; e--)
            localStorage.key(e).startsWith(uo) &&
              localStorage.removeItem(localStorage.key(e));
        }),
        (e.prototype.readJson = function (e) {
          var t,
            n = go(e, Object.keys(window.localStorage)),
            i = n && window.localStorage.getItem(n);
          if (i && (t = JSON.parse(i))) return t;
        }),
        (e.prototype.writeJson = function (e, t) {
          localStorage.setItem(e, JSON.stringify(t));
        }),
        (e.prototype.stripData = function (e) {
          return {
            body: { refresh_token: e.body.refresh_token },
            expiresAt: e.expiresAt
          };
        }),
        e
      );
    })(),
    Io = function () {
      this.enclosedCache = (function () {
        var e = {};
        return {
          save: function (t) {
            var n = new ao({
                client_id: t.client_id,
                scope: t.scope,
                audience: t.audience
              }),
              i = lo(t);
            e[n.toKey()] = i;
          },
          get: function (t, n) {
            void 0 === n && (n = 0);
            var i = go(t, Object.keys(e)),
              r = e[i],
              o = Math.floor(Date.now() / 1e3);
            if (r)
              return r.expiresAt - n < o
                ? r.body.refresh_token
                  ? ((r.body = { refresh_token: r.body.refresh_token }), r.body)
                  : void delete e[t.toKey()]
                : r.body;
          },
          clear: function () {
            e = {};
          }
        };
      })();
    },
    ho = 'a0.spajs.txs',
    po = (function () {
      function e(e) {
        (this.storage = e), (this.transaction = this.storage.get(ho));
      }
      return (
        (e.prototype.create = function (e) {
          (this.transaction = e),
            this.storage.save(ho, e, { daysUntilExpire: 1 });
        }),
        (e.prototype.get = function () {
          return this.transaction;
        }),
        (e.prototype.remove = function () {
          delete this.transaction, this.storage.remove(ho);
        }),
        e
      );
    })(),
    yo = function (e) {
      return 'number' == typeof e;
    },
    bo = [
      'iss',
      'aud',
      'exp',
      'nbf',
      'iat',
      'jti',
      'azp',
      'nonce',
      'auth_time',
      'at_hash',
      'c_hash',
      'acr',
      'amr',
      'sub_jwk',
      'cnf',
      'sip_from_tag',
      'sip_date',
      'sip_callid',
      'sip_cseq_num',
      'sip_via_branch',
      'orig',
      'dest',
      'mky',
      'events',
      'toe',
      'txn',
      'rph',
      'sid',
      'vot',
      'vtm'
    ],
    mo = function (e) {
      if (!e.id_token) throw new Error('ID token is required but missing');
      var t = (function (e) {
        var t = e.split('.'),
          n = t[0],
          i = t[1],
          r = t[2];
        if (3 !== t.length || !n || !i || !r)
          throw new Error('ID token could not be decoded');
        var o = JSON.parse(qr(i)),
          c = { __raw: e },
          s = {};
        return (
          Object.keys(o).forEach(function (e) {
            (c[e] = o[e]), bo.includes(e) || (s[e] = o[e]);
          }),
          {
            encoded: { header: n, payload: i, signature: r },
            header: JSON.parse(qr(n)),
            claims: c,
            user: s
          }
        );
      })(e.id_token);
      if (!t.claims.iss)
        throw new Error(
          'Issuer (iss) claim must be a string present in the ID token'
        );
      if (t.claims.iss !== e.iss)
        throw new Error(
          'Issuer (iss) claim mismatch in the ID token; expected "' +
            e.iss +
            '", found "' +
            t.claims.iss +
            '"'
        );
      if (!t.user.sub)
        throw new Error(
          'Subject (sub) claim must be a string present in the ID token'
        );
      if ('RS256' !== t.header.alg)
        throw new Error(
          'Signature algorithm of "' +
            t.header.alg +
            '" is not supported. Expected the ID token to be signed with "RS256".'
        );
      if (
        !t.claims.aud ||
        ('string' != typeof t.claims.aud && !Array.isArray(t.claims.aud))
      )
        throw new Error(
          'Audience (aud) claim must be a string or array of strings present in the ID token'
        );
      if (Array.isArray(t.claims.aud)) {
        if (!t.claims.aud.includes(e.aud))
          throw new Error(
            'Audience (aud) claim mismatch in the ID token; expected "' +
              e.aud +
              '" but was not one of "' +
              t.claims.aud.join(', ') +
              '"'
          );
        if (t.claims.aud.length > 1) {
          if (!t.claims.azp)
            throw new Error(
              'Authorized Party (azp) claim must be a string present in the ID token when Audience (aud) claim has multiple values'
            );
          if (t.claims.azp !== e.aud)
            throw new Error(
              'Authorized Party (azp) claim mismatch in the ID token; expected "' +
                e.aud +
                '", found "' +
                t.claims.azp +
                '"'
            );
        }
      } else if (t.claims.aud !== e.aud)
        throw new Error(
          'Audience (aud) claim mismatch in the ID token; expected "' +
            e.aud +
            '" but found "' +
            t.claims.aud +
            '"'
        );
      if (e.nonce) {
        if (!t.claims.nonce)
          throw new Error(
            'Nonce (nonce) claim must be a string present in the ID token'
          );
        if (t.claims.nonce !== e.nonce)
          throw new Error(
            'Nonce (nonce) claim mismatch in the ID token; expected "' +
              e.nonce +
              '", found "' +
              t.claims.nonce +
              '"'
          );
      }
      if (e.max_age && !yo(t.claims.auth_time))
        throw new Error(
          'Authentication Time (auth_time) claim must be a number present in the ID token when Max Age (max_age) is specified'
        );
      if (!yo(t.claims.exp))
        throw new Error(
          'Expiration Time (exp) claim must be a number present in the ID token'
        );
      if (!yo(t.claims.iat))
        throw new Error(
          'Issued At (iat) claim must be a number present in the ID token'
        );
      var n = e.leeway || 60,
        i = new Date(Date.now()),
        r = new Date(0),
        o = new Date(0),
        c = new Date(0);
      if (
        (c.setUTCSeconds(parseInt(t.claims.auth_time) + e.max_age + n),
        r.setUTCSeconds(t.claims.exp + n),
        o.setUTCSeconds(t.claims.nbf - n),
        i > r)
      )
        throw new Error(
          'Expiration Time (exp) claim error in the ID token; current time (' +
            i +
            ') is after expiration time (' +
            r +
            ')'
        );
      if (yo(t.claims.nbf) && i < o)
        throw new Error(
          "Not Before time (nbf) claim in the ID token indicates that this token can't be used just yet. Currrent time (" +
            i +
            ') is before ' +
            o
        );
      if (yo(t.claims.auth_time) && i > c)
        throw new Error(
          'Authentication Time (auth_time) claim in the ID token indicates that too much time has passed since the last end-user authentication. Currrent time (' +
            i +
            ') is after last auth at ' +
            c
        );
      if (e.organizationId) {
        if (!t.claims.org_id)
          throw new Error(
            'Organization ID (org_id) claim must be a string present in the ID token'
          );
        if (e.organizationId !== t.claims.org_id)
          throw new Error(
            'Organization ID (org_id) claim mismatch in the ID token; expected "' +
              e.organizationId +
              '", found "' +
              t.claims.org_id +
              '"'
          );
      }
      return t;
    },
    Co = a(function (e, t) {
      var n =
        (c && c.__assign) ||
        function () {
          return (n =
            Object.assign ||
            function (e) {
              for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in (t = arguments[n]))
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              return e;
            }).apply(this, arguments);
        };
      function i(e, t) {
        if (!t) return '';
        var n = '; ' + e;
        return !0 === t ? n : n + '=' + t;
      }
      function r(e, t, n) {
        return (
          encodeURIComponent(e)
            .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
            .replace(/\(/g, '%28')
            .replace(/\)/g, '%29') +
          '=' +
          encodeURIComponent(t).replace(
            /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
            decodeURIComponent
          ) +
          (function (e) {
            if ('number' == typeof e.expires) {
              var t = new Date();
              t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires),
                (e.expires = t);
            }
            return (
              i('Expires', e.expires ? e.expires.toUTCString() : '') +
              i('Domain', e.domain) +
              i('Path', e.path) +
              i('Secure', e.secure) +
              i('SameSite', e.sameSite)
            );
          })(n)
        );
      }
      function o(e) {
        for (
          var t = {}, n = e ? e.split('; ') : [], i = /(%[\dA-F]{2})+/gi, r = 0;
          r < n.length;
          r++
        ) {
          var o = n[r].split('='),
            c = o.slice(1).join('=');
          '"' === c.charAt(0) && (c = c.slice(1, -1));
          try {
            t[o[0].replace(i, decodeURIComponent)] = c.replace(
              i,
              decodeURIComponent
            );
          } catch (e) {}
        }
        return t;
      }
      function s() {
        return o(document.cookie);
      }
      function a(e, t, i) {
        document.cookie = r(e, t, n({ path: '/' }, i));
      }
      (t.__esModule = !0),
        (t.encode = r),
        (t.parse = o),
        (t.getAll = s),
        (t.get = function (e) {
          return s()[e];
        }),
        (t.set = a),
        (t.remove = function (e, t) {
          a(e, '', n(n({}, t), { expires: -1 }));
        });
    });
  s(Co);
  Co.encode, Co.parse, Co.getAll, Co.get, Co.set, Co.remove;
  var vo = {
      get: function (e) {
        if ('undefined' != typeof sessionStorage) {
          var t = sessionStorage.getItem(e);
          if (void 0 !== t) return JSON.parse(t);
        }
      },
      save: function (e, t) {
        sessionStorage.setItem(e, JSON.stringify(t));
      },
      remove: function (e) {
        sessionStorage.removeItem(e);
      }
    },
    Bo = {
      get: function (e) {
        if ('undefined' != typeof localStorage) {
          var t = localStorage.getItem(e);
          if (void 0 !== t) return JSON.parse(t);
        }
      },
      save: function (e, t, n) {
        localStorage.setItem(e, JSON.stringify(t));
      },
      remove: function (e) {
        localStorage.removeItem(e);
      }
    };
  function Fo(e, t, n) {
    var i = void 0 === t ? null : t,
      r = (function (e, t) {
        var n = atob(e);
        if (t) {
          for (
            var i = new Uint8Array(n.length), r = 0, o = n.length;
            r < o;
            ++r
          )
            i[r] = n.charCodeAt(r);
          return String.fromCharCode.apply(null, new Uint16Array(i.buffer));
        }
        return n;
      })(e, void 0 !== n && n),
      o = r.indexOf('\n', 10) + 1,
      c = r.substring(o) + (i ? '//# sourceMappingURL=' + i : ''),
      s = new Blob([c], { type: 'application/javascript' });
    return URL.createObjectURL(s);
  }
  var Uo,
    Zo,
    So,
    Vo,
    Go =
      ((Uo =
        'Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwohZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Ci8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKgogICAgQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuCiAgICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgIkxpY2Vuc2UiKTsgeW91IG1heSBub3QgdXNlCiAgICB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZQogICAgTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjAKCiAgICBUSElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZCiAgICBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVECiAgICBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLAogICAgTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC4KCiAgICBTZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMKICAgIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS4KICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovdmFyIGU9ZnVuY3Rpb24oKXtyZXR1cm4oZT1PYmplY3QuYXNzaWdufHxmdW5jdGlvbihlKXtmb3IodmFyIHQscj0xLG49YXJndW1lbnRzLmxlbmd0aDtyPG47cisrKWZvcih2YXIgbyBpbiB0PWFyZ3VtZW50c1tyXSlPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodCxvKSYmKGVbb109dFtvXSk7cmV0dXJuIGV9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9O2Z1bmN0aW9uIHQoZSx0KXt2YXIgcixuLG8scyxhPXtsYWJlbDowLHNlbnQ6ZnVuY3Rpb24oKXtpZigxJm9bMF0pdGhyb3cgb1sxXTtyZXR1cm4gb1sxXX0sdHJ5czpbXSxvcHM6W119O3JldHVybiBzPXtuZXh0OmkoMCksdGhyb3c6aSgxKSxyZXR1cm46aSgyKX0sImZ1bmN0aW9uIj09dHlwZW9mIFN5bWJvbCYmKHNbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSkscztmdW5jdGlvbiBpKHMpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gZnVuY3Rpb24ocyl7aWYocil0aHJvdyBuZXcgVHlwZUVycm9yKCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuIik7Zm9yKDthOyl0cnl7aWYocj0xLG4mJihvPTImc1swXT9uLnJldHVybjpzWzBdP24udGhyb3d8fCgobz1uLnJldHVybikmJm8uY2FsbChuKSwwKTpuLm5leHQpJiYhKG89by5jYWxsKG4sc1sxXSkpLmRvbmUpcmV0dXJuIG87c3dpdGNoKG49MCxvJiYocz1bMiZzWzBdLG8udmFsdWVdKSxzWzBdKXtjYXNlIDA6Y2FzZSAxOm89czticmVhaztjYXNlIDQ6cmV0dXJuIGEubGFiZWwrKyx7dmFsdWU6c1sxXSxkb25lOiExfTtjYXNlIDU6YS5sYWJlbCsrLG49c1sxXSxzPVswXTtjb250aW51ZTtjYXNlIDc6cz1hLm9wcy5wb3AoKSxhLnRyeXMucG9wKCk7Y29udGludWU7ZGVmYXVsdDppZighKG89YS50cnlzLChvPW8ubGVuZ3RoPjAmJm9bby5sZW5ndGgtMV0pfHw2IT09c1swXSYmMiE9PXNbMF0pKXthPTA7Y29udGludWV9aWYoMz09PXNbMF0mJighb3x8c1sxXT5vWzBdJiZzWzFdPG9bM10pKXthLmxhYmVsPXNbMV07YnJlYWt9aWYoNj09PXNbMF0mJmEubGFiZWw8b1sxXSl7YS5sYWJlbD1vWzFdLG89czticmVha31pZihvJiZhLmxhYmVsPG9bMl0pe2EubGFiZWw9b1syXSxhLm9wcy5wdXNoKHMpO2JyZWFrfW9bMl0mJmEub3BzLnBvcCgpLGEudHJ5cy5wb3AoKTtjb250aW51ZX1zPXQuY2FsbChlLGEpfWNhdGNoKGUpe3M9WzYsZV0sbj0wfWZpbmFsbHl7cj1vPTB9aWYoNSZzWzBdKXRocm93IHNbMV07cmV0dXJue3ZhbHVlOnNbMF0/c1sxXTp2b2lkIDAsZG9uZTohMH19KFtzLGldKX19fXZhciByPXt9LG49ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZSsifCIrdH07YWRkRXZlbnRMaXN0ZW5lcigibWVzc2FnZSIsKGZ1bmN0aW9uKG8pe3ZhciBzLGEsaSx1LGM9by5kYXRhLGw9Yy50aW1lb3V0LGY9Yy5hdXRoLGg9Yy5mZXRjaFVybCxwPWMuZmV0Y2hPcHRpb25zLGI9by5wb3J0c1swXTtyZXR1cm4gcz12b2lkIDAsYT12b2lkIDAsdT1mdW5jdGlvbigpe3ZhciBvLHMsYSxpLHUsYyx5LGQsdix3O3JldHVybiB0KHRoaXMsKGZ1bmN0aW9uKHQpe3N3aXRjaCh0LmxhYmVsKXtjYXNlIDA6YT0ocz1mfHx7fSkuYXVkaWVuY2UsaT1zLnNjb3BlLHQubGFiZWw9MTtjYXNlIDE6aWYodC50cnlzLnB1c2goWzEsNywsOF0pLCEodT1KU09OLnBhcnNlKHAuYm9keSkpLnJlZnJlc2hfdG9rZW4mJiJyZWZyZXNoX3Rva2VuIj09PXUuZ3JhbnRfdHlwZSl7aWYoIShjPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIHJbbihlLHQpXX0oYSxpKSkpdGhyb3cgbmV3IEVycm9yKCJUaGUgd2ViIHdvcmtlciBpcyBtaXNzaW5nIHRoZSByZWZyZXNoIHRva2VuIik7cC5ib2R5PUpTT04uc3RyaW5naWZ5KGUoZSh7fSx1KSx7cmVmcmVzaF90b2tlbjpjfSkpfXk9dm9pZCAwLCJmdW5jdGlvbiI9PXR5cGVvZiBBYm9ydENvbnRyb2xsZXImJih5PW5ldyBBYm9ydENvbnRyb2xsZXIscC5zaWduYWw9eS5zaWduYWwpLGQ9dm9pZCAwLHQubGFiZWw9MjtjYXNlIDI6cmV0dXJuIHQudHJ5cy5wdXNoKFsyLDQsLDVdKSxbNCxQcm9taXNlLnJhY2UoWyhnPWwsbmV3IFByb21pc2UoKGZ1bmN0aW9uKGUpe3JldHVybiBzZXRUaW1lb3V0KGUsZyl9KSkpLGZldGNoKGgsZSh7fSxwKSldKV07Y2FzZSAzOnJldHVybiBkPXQuc2VudCgpLFszLDVdO2Nhc2UgNDpyZXR1cm4gdj10LnNlbnQoKSxiLnBvc3RNZXNzYWdlKHtlcnJvcjp2Lm1lc3NhZ2V9KSxbMl07Y2FzZSA1OnJldHVybiBkP1s0LGQuanNvbigpXTooeSYmeS5hYm9ydCgpLGIucG9zdE1lc3NhZ2Uoe2Vycm9yOiJUaW1lb3V0IHdoZW4gZXhlY3V0aW5nICdmZXRjaCcifSksWzJdKTtjYXNlIDY6cmV0dXJuKG89dC5zZW50KCkpLnJlZnJlc2hfdG9rZW4/KGZ1bmN0aW9uKGUsdCxvKXtyW24odCxvKV09ZX0oby5yZWZyZXNoX3Rva2VuLGEsaSksZGVsZXRlIG8ucmVmcmVzaF90b2tlbik6ZnVuY3Rpb24oZSx0KXtkZWxldGUgcltuKGUsdCldfShhLGkpLGIucG9zdE1lc3NhZ2Uoe29rOmQub2ssanNvbjpvfSksWzMsOF07Y2FzZSA3OnJldHVybiB3PXQuc2VudCgpLGIucG9zdE1lc3NhZ2Uoe29rOiExLGpzb246e2Vycm9yX2Rlc2NyaXB0aW9uOncubWVzc2FnZX19KSxbMyw4XTtjYXNlIDg6cmV0dXJuWzJdfXZhciBnfSkpfSxuZXcoKGk9dm9pZCAwKXx8KGk9UHJvbWlzZSkpKChmdW5jdGlvbihlLHQpe2Z1bmN0aW9uIHIoZSl7dHJ5e28odS5uZXh0KGUpKX1jYXRjaChlKXt0KGUpfX1mdW5jdGlvbiBuKGUpe3RyeXtvKHUudGhyb3coZSkpfWNhdGNoKGUpe3QoZSl9fWZ1bmN0aW9uIG8odCl7dC5kb25lP2UodC52YWx1ZSk6bmV3IGkoKGZ1bmN0aW9uKGUpe2UodC52YWx1ZSl9KSkudGhlbihyLG4pfW8oKHU9dS5hcHBseShzLGF8fFtdKSkubmV4dCgpKX0pKX0pKX0oKTsKCg=='),
      (Zo =
        'data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9rZW4ud29ya2VyLmpzIiwic291cmNlcyI6WyJ3b3JrZXI6Ly93ZWItd29ya2VyL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy9jb25zdGFudHMudHMiLCJ3b3JrZXI6Ly93ZWItd29ya2VyL3NyYy93b3JrZXIvdG9rZW4ud29ya2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImltcG9ydCB7IFBvcHVwQ29uZmlnT3B0aW9ucyB9IGZyb20gJy4vZ2xvYmFsJztcbmltcG9ydCB2ZXJzaW9uIGZyb20gJy4vdmVyc2lvbic7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9BVVRIT1JJWkVfVElNRU9VVF9JTl9TRUNPTkRTID0gNjA7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9QT1BVUF9DT05GSUdfT1BUSU9OUzogUG9wdXBDb25maWdPcHRpb25zID0ge1xuICB0aW1lb3V0SW5TZWNvbmRzOiBERUZBVUxUX0FVVEhPUklaRV9USU1FT1VUX0lOX1NFQ09ORFNcbn07XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9TSUxFTlRfVE9LRU5fUkVUUllfQ09VTlQgPSAzO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IENMRUFOVVBfSUZSQU1FX1RJTUVPVVRfSU5fU0VDT05EUyA9IDI7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9GRVRDSF9USU1FT1VUX01TID0gMTAwMDA7XG5cbmV4cG9ydCBjb25zdCBDQUNIRV9MT0NBVElPTl9NRU1PUlkgPSAnbWVtb3J5JztcbmV4cG9ydCBjb25zdCBDQUNIRV9MT0NBVElPTl9MT0NBTF9TVE9SQUdFID0gJ2xvY2Fsc3RvcmFnZSc7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UgPVxuICAnVGhlIHdlYiB3b3JrZXIgaXMgbWlzc2luZyB0aGUgcmVmcmVzaCB0b2tlbic7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgSU5WQUxJRF9SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UgPSAnaW52YWxpZCByZWZyZXNoIHRva2VuJztcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX1NDT1BFID0gJ29wZW5pZCBwcm9maWxlIGVtYWlsJztcblxuLyoqXG4gKiBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgY2FuIGJlIGlzc3VlZCBieSB0aGUgYXV0aG9yaXphdGlvbiBzZXJ2ZXIgd2hpY2ggdGhlXG4gKiB1c2VyIGNhbiByZWNvdmVyIGZyb20gYnkgc2lnbmluZyBpbiBpbnRlcmFjdGl2ZWx5LlxuICogaHR0cHM6Ly9vcGVuaWQubmV0L3NwZWNzL29wZW5pZC1jb25uZWN0LWNvcmUtMV8wLmh0bWwjQXV0aEVycm9yXG4gKiBAaWdub3JlXG4gKi9cbmV4cG9ydCBjb25zdCBSRUNPVkVSQUJMRV9FUlJPUlMgPSBbXG4gICdsb2dpbl9yZXF1aXJlZCcsXG4gICdjb25zZW50X3JlcXVpcmVkJyxcbiAgJ2ludGVyYWN0aW9uX3JlcXVpcmVkJyxcbiAgJ2FjY291bnRfc2VsZWN0aW9uX3JlcXVpcmVkJyxcbiAgLy8gU3RyaWN0bHkgc3BlYWtpbmcgdGhlIHVzZXIgY2FuJ3QgcmVjb3ZlciBmcm9tIGBhY2Nlc3NfZGVuaWVkYCAtIGJ1dCB0aGV5XG4gIC8vIGNhbiBnZXQgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCB0aGVpciBhY2Nlc3MgYmVpbmcgZGVuaWVkIGJ5IGxvZ2dpbmcgaW5cbiAgLy8gaW50ZXJhY3RpdmVseS5cbiAgJ2FjY2Vzc19kZW5pZWQnXG5dO1xuXG4vKipcbiAqIEBpZ25vcmVcbiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfU0VTU0lPTl9DSEVDS19FWFBJUllfREFZUyA9IDE7XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9BVVRIMF9DTElFTlQgPSB7XG4gIG5hbWU6ICdhdXRoMC1zcGEtanMnLFxuICB2ZXJzaW9uOiB2ZXJzaW9uXG59O1xuIiwiaW1wb3J0IHsgTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UgfSBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgV29ya2VyUmVmcmVzaFRva2VuTWVzc2FnZSB9IGZyb20gJy4vd29ya2VyLnR5cGVzJztcblxubGV0IHJlZnJlc2hUb2tlbnM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7fTtcblxuY29uc3QgY2FjaGVLZXkgPSAoYXVkaWVuY2U6IHN0cmluZywgc2NvcGU6IHN0cmluZykgPT4gYCR7YXVkaWVuY2V9fCR7c2NvcGV9YDtcblxuY29uc3QgZ2V0UmVmcmVzaFRva2VuID0gKGF1ZGllbmNlOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpID0+XG4gIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07XG5cbmNvbnN0IHNldFJlZnJlc2hUb2tlbiA9IChcbiAgcmVmcmVzaFRva2VuOiBzdHJpbmcsXG4gIGF1ZGllbmNlOiBzdHJpbmcsXG4gIHNjb3BlOiBzdHJpbmdcbikgPT4gKHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV0gPSByZWZyZXNoVG9rZW4pO1xuXG5jb25zdCBkZWxldGVSZWZyZXNoVG9rZW4gPSAoYXVkaWVuY2U6IHN0cmluZywgc2NvcGU6IHN0cmluZykgPT5cbiAgZGVsZXRlIHJlZnJlc2hUb2tlbnNbY2FjaGVLZXkoYXVkaWVuY2UsIHNjb3BlKV07XG5cbmNvbnN0IHdhaXQgPSAodGltZTogbnVtYmVyKSA9PlxuICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSkpO1xuXG5jb25zdCBtZXNzYWdlSGFuZGxlciA9IGFzeW5jICh7XG4gIGRhdGE6IHsgdGltZW91dCwgYXV0aCwgZmV0Y2hVcmwsIGZldGNoT3B0aW9ucyB9LFxuICBwb3J0czogW3BvcnRdXG59OiBNZXNzYWdlRXZlbnQ8V29ya2VyUmVmcmVzaFRva2VuTWVzc2FnZT4pID0+IHtcbiAgbGV0IGpzb246IHtcbiAgICByZWZyZXNoX3Rva2VuPzogc3RyaW5nO1xuICB9O1xuXG4gIGNvbnN0IHsgYXVkaWVuY2UsIHNjb3BlIH0gPSBhdXRoIHx8IHt9O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgYm9keSA9IEpTT04ucGFyc2UoZmV0Y2hPcHRpb25zLmJvZHkpO1xuXG4gICAgaWYgKCFib2R5LnJlZnJlc2hfdG9rZW4gJiYgYm9keS5ncmFudF90eXBlID09PSAncmVmcmVzaF90b2tlbicpIHtcbiAgICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IGdldFJlZnJlc2hUb2tlbihhdWRpZW5jZSwgc2NvcGUpO1xuXG4gICAgICBpZiAoIXJlZnJlc2hUb2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoTUlTU0lOR19SRUZSRVNIX1RPS0VOX0VSUk9SX01FU1NBR0UpO1xuICAgICAgfVxuXG4gICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgLi4uYm9keSxcbiAgICAgICAgcmVmcmVzaF90b2tlbjogcmVmcmVzaFRva2VuXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgYWJvcnRDb250cm9sbGVyOiBBYm9ydENvbnRyb2xsZXI7XG5cbiAgICBpZiAodHlwZW9mIEFib3J0Q29udHJvbGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgYWJvcnRDb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgZmV0Y2hPcHRpb25zLnNpZ25hbCA9IGFib3J0Q29udHJvbGxlci5zaWduYWw7XG4gICAgfVxuXG4gICAgbGV0IHJlc3BvbnNlOiBhbnk7XG5cbiAgICB0cnkge1xuICAgICAgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLnJhY2UoW1xuICAgICAgICB3YWl0KHRpbWVvdXQpLFxuICAgICAgICBmZXRjaChmZXRjaFVybCwgeyAuLi5mZXRjaE9wdGlvbnMgfSlcbiAgICAgIF0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBmZXRjaCBlcnJvciwgcmVqZWN0IGBzZW5kTWVzc2FnZWAgdXNpbmcgYGVycm9yYCBrZXkgc28gdGhhdCB3ZSByZXRyeS5cbiAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoe1xuICAgICAgICBlcnJvcjogZXJyb3IubWVzc2FnZVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXJlc3BvbnNlKSB7XG4gICAgICAvLyBJZiB0aGUgcmVxdWVzdCB0aW1lcyBvdXQsIGFib3J0IGl0IGFuZCBsZXQgYHN3aXRjaEZldGNoYCByYWlzZSB0aGUgZXJyb3IuXG4gICAgICBpZiAoYWJvcnRDb250cm9sbGVyKSBhYm9ydENvbnRyb2xsZXIuYWJvcnQoKTtcblxuICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICAgIGVycm9yOiBcIlRpbWVvdXQgd2hlbiBleGVjdXRpbmcgJ2ZldGNoJ1wiXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICBpZiAoanNvbi5yZWZyZXNoX3Rva2VuKSB7XG4gICAgICBzZXRSZWZyZXNoVG9rZW4oanNvbi5yZWZyZXNoX3Rva2VuLCBhdWRpZW5jZSwgc2NvcGUpO1xuICAgICAgZGVsZXRlIGpzb24ucmVmcmVzaF90b2tlbjtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVsZXRlUmVmcmVzaFRva2VuKGF1ZGllbmNlLCBzY29wZSk7XG4gICAgfVxuXG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBvazogcmVzcG9uc2Uub2ssXG4gICAgICBqc29uXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcG9ydC5wb3N0TWVzc2FnZSh7XG4gICAgICBvazogZmFsc2UsXG4gICAgICBqc29uOiB7XG4gICAgICAgIGVycm9yX2Rlc2NyaXB0aW9uOiBlcnJvci5tZXNzYWdlXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIERvbid0IHJ1biBgYWRkRXZlbnRMaXN0ZW5lcmAgaW4gb3VyIHRlc3RzICh0aGlzIGlzIHJlcGxhY2VkIGluIHJvbGx1cClcbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICAqL1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7IG1lc3NhZ2VIYW5kbGVyIH07XG59IGVsc2Uge1xuICAvLyBAdHMtaWdub3JlXG4gIGFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBtZXNzYWdlSGFuZGxlcik7XG59XG4iXSwibmFtZXMiOlsiX19hc3NpZ24iLCJPYmplY3QiLCJhc3NpZ24iLCJ0IiwicyIsImkiLCJuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImFwcGx5IiwidGhpcyIsIl9fZ2VuZXJhdG9yIiwidGhpc0FyZyIsImJvZHkiLCJmIiwieSIsImciLCJfIiwibGFiZWwiLCJzZW50IiwidHJ5cyIsIm9wcyIsIm5leHQiLCJ2ZXJiIiwidGhyb3ciLCJyZXR1cm4iLCJTeW1ib2wiLCJpdGVyYXRvciIsInYiLCJvcCIsIlR5cGVFcnJvciIsImRvbmUiLCJ2YWx1ZSIsInBvcCIsInB1c2giLCJlIiwic3RlcCIsInJlZnJlc2hUb2tlbnMiLCJjYWNoZUtleSIsImF1ZGllbmNlIiwic2NvcGUiLCJhZGRFdmVudExpc3RlbmVyIiwiX2EiLCJfYXJndW1lbnRzIiwiUCIsImdlbmVyYXRvciIsIl9iIiwidGltZW91dCIsImF1dGgiLCJmZXRjaFVybCIsImZldGNoT3B0aW9ucyIsInBvcnQiLCJfYyIsIkpTT04iLCJwYXJzZSIsInJlZnJlc2hfdG9rZW4iLCJncmFudF90eXBlIiwicmVmcmVzaFRva2VuIiwiZ2V0UmVmcmVzaFRva2VuIiwiRXJyb3IiLCJzdHJpbmdpZnkiLCJhYm9ydENvbnRyb2xsZXIiLCJBYm9ydENvbnRyb2xsZXIiLCJzaWduYWwiLCJyZXNwb25zZSIsIlByb21pc2UiLCJyYWNlIiwidGltZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiZmV0Y2giLCJfZCIsInBvc3RNZXNzYWdlIiwiZXJyb3IiLCJlcnJvcl8xIiwibWVzc2FnZSIsImpzb24iLCJhYm9ydCIsInNldFJlZnJlc2hUb2tlbiIsImRlbGV0ZVJlZnJlc2hUb2tlbiIsIm9rIiwiZXJyb3JfZGVzY3JpcHRpb24iLCJlcnJvcl8yIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJ0aGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztvRkE2Qk8sSUFBSUEsRUFBVyxXQVFsQixPQVBBQSxFQUFXQyxPQUFPQyxRQUFVLFNBQWtCQyxHQUMxQyxJQUFLLElBQUlDLEVBQUdDLEVBQUksRUFBR0MsRUFBSUMsVUFBVUMsT0FBUUgsRUFBSUMsRUFBR0QsSUFFNUMsSUFBSyxJQUFJSSxLQURUTCxFQUFJRyxVQUFVRixHQUNPSixPQUFPUyxVQUFVQyxlQUFlQyxLQUFLUixFQUFHSyxLQUFJTixFQUFFTSxHQUFLTCxFQUFFSyxJQUU5RSxPQUFPTixJQUVLVSxNQUFNQyxLQUFNUCxZQXVDekIsU0FBU1EsRUFBWUMsRUFBU0MsR0FDakMsSUFBc0dDLEVBQUdDLEVBQUdoQixFQUFHaUIsRUFBM0dDLEVBQUksQ0FBRUMsTUFBTyxFQUFHQyxLQUFNLFdBQWEsR0FBVyxFQUFQcEIsRUFBRSxHQUFRLE1BQU1BLEVBQUUsR0FBSSxPQUFPQSxFQUFFLElBQU9xQixLQUFNLEdBQUlDLElBQUssSUFDaEcsT0FBT0wsRUFBSSxDQUFFTSxLQUFNQyxFQUFLLEdBQUlDLE1BQVNELEVBQUssR0FBSUUsT0FBVUYsRUFBSyxJQUF3QixtQkFBWEcsU0FBMEJWLEVBQUVVLE9BQU9DLFVBQVksV0FBYSxPQUFPakIsT0FBVU0sRUFDdkosU0FBU08sRUFBS3JCLEdBQUssT0FBTyxTQUFVMEIsR0FBSyxPQUN6QyxTQUFjQyxHQUNWLEdBQUlmLEVBQUcsTUFBTSxJQUFJZ0IsVUFBVSxtQ0FDM0IsS0FBT2IsT0FDSCxHQUFJSCxFQUFJLEVBQUdDLElBQU1oQixFQUFZLEVBQVI4QixFQUFHLEdBQVNkLEVBQVUsT0FBSWMsRUFBRyxHQUFLZCxFQUFTLFNBQU9oQixFQUFJZ0IsRUFBVSxTQUFNaEIsRUFBRVMsS0FBS08sR0FBSSxHQUFLQSxFQUFFTyxTQUFXdkIsRUFBSUEsRUFBRVMsS0FBS08sRUFBR2MsRUFBRyxLQUFLRSxLQUFNLE9BQU9oQyxFQUUzSixPQURJZ0IsRUFBSSxFQUFHaEIsSUFBRzhCLEVBQUssQ0FBUyxFQUFSQSxFQUFHLEdBQVE5QixFQUFFaUMsUUFDekJILEVBQUcsSUFDUCxLQUFLLEVBQUcsS0FBSyxFQUFHOUIsRUFBSThCLEVBQUksTUFDeEIsS0FBSyxFQUFjLE9BQVhaLEVBQUVDLFFBQWdCLENBQUVjLE1BQU9ILEVBQUcsR0FBSUUsTUFBTSxHQUNoRCxLQUFLLEVBQUdkLEVBQUVDLFFBQVNILEVBQUljLEVBQUcsR0FBSUEsRUFBSyxDQUFDLEdBQUksU0FDeEMsS0FBSyxFQUFHQSxFQUFLWixFQUFFSSxJQUFJWSxNQUFPaEIsRUFBRUcsS0FBS2EsTUFBTyxTQUN4QyxRQUNJLEtBQU1sQyxFQUFJa0IsRUFBRUcsTUFBTXJCLEVBQUlBLEVBQUVLLE9BQVMsR0FBS0wsRUFBRUEsRUFBRUssT0FBUyxLQUFrQixJQUFWeUIsRUFBRyxJQUFzQixJQUFWQSxFQUFHLElBQVcsQ0FBRVosRUFBSSxFQUFHLFNBQ2pHLEdBQWMsSUFBVlksRUFBRyxNQUFjOUIsR0FBTThCLEVBQUcsR0FBSzlCLEVBQUUsSUFBTThCLEVBQUcsR0FBSzlCLEVBQUUsSUFBTSxDQUFFa0IsRUFBRUMsTUFBUVcsRUFBRyxHQUFJLE1BQzlFLEdBQWMsSUFBVkEsRUFBRyxJQUFZWixFQUFFQyxNQUFRbkIsRUFBRSxHQUFJLENBQUVrQixFQUFFQyxNQUFRbkIsRUFBRSxHQUFJQSxFQUFJOEIsRUFBSSxNQUM3RCxHQUFJOUIsR0FBS2tCLEVBQUVDLE1BQVFuQixFQUFFLEdBQUksQ0FBRWtCLEVBQUVDLE1BQVFuQixFQUFFLEdBQUlrQixFQUFFSSxJQUFJYSxLQUFLTCxHQUFLLE1BQ3ZEOUIsRUFBRSxJQUFJa0IsRUFBRUksSUFBSVksTUFDaEJoQixFQUFFRyxLQUFLYSxNQUFPLFNBRXRCSixFQUFLaEIsRUFBS0wsS0FBS0ksRUFBU0ssR0FDMUIsTUFBT2tCLEdBQUtOLEVBQUssQ0FBQyxFQUFHTSxHQUFJcEIsRUFBSSxVQUFlRCxFQUFJZixFQUFJLEVBQ3RELEdBQVksRUFBUjhCLEVBQUcsR0FBUSxNQUFNQSxFQUFHLEdBQUksTUFBTyxDQUFFRyxNQUFPSCxFQUFHLEdBQUtBLEVBQUcsUUFBSyxFQUFRRSxNQUFNLEdBckI5QkssQ0FBSyxDQUFDbEMsRUFBRzBCLE1DM0N0RCxJQ2pDSFMsRUFBd0MsR0FFdENDLEVBQVcsU0FBQ0MsRUFBa0JDLEdBQWtCLE9BQUdELE1BQVlDLEdBMEduRUMsaUJBQWlCLFdBekZJLFNBQU9DLE9GNkNKOUIsRUFBUytCLEVBQVlDLEVBQUdDLEVFNUNoREMsU0FBUUMsWUFBU0MsU0FBTUMsYUFBVUMsaUJBQ3pCQyxvQkYyQ2dCdkMsU0FBUytCLFNBQWVFLHVGRXJDeENOLEdBQUZhLEVBQXNCSixHQUFRLGFBQWxCUiwyQkFLaEIsMkJBRk0zQixFQUFPd0MsS0FBS0MsTUFBTUosRUFBYXJDLE9BRTNCMEMsZUFBcUMsa0JBQXBCMUMsRUFBSzJDLFdBQWdDLENBRzlELEtBRk1DLEVBN0JZLFNBQUNsQixFQUFrQkMsR0FDekMsT0FBQUgsRUFBY0MsRUFBU0MsRUFBVUMsSUE0QlJrQixDQUFnQm5CLEVBQVVDLElBRzdDLE1BQU0sSUFBSW1CLE1ERmhCLCtDQ0tJVCxFQUFhckMsS0FBT3dDLEtBQUtPLGlCQUNwQi9DLElBQ0gwQyxjQUFlRSxLQUlmSSxTQUUyQixtQkFBcEJDLGtCQUNURCxFQUFrQixJQUFJQyxnQkFDdEJaLEVBQWFhLE9BQVNGLEVBQWdCRSxRQUdwQ0MsMEJBR1MsZ0NBQU1DLFFBQVFDLEtBQUssRUF2Q3RCQyxFQXdDRHBCLEVBdkNYLElBQUlrQixTQUFRLFNBQUFHLEdBQVcsT0FBQUMsV0FBV0QsRUFBU0QsT0F3Q3JDRyxNQUFNckIsT0FBZUMscUJBRnZCYyxFQUFXTyxzQkFVWCxrQkFKQXBCLEVBQUtxQixZQUFZLENBQ2ZDLE1BQU9DLEVBQU1DLHFCQU1qQixPQUFLWCxLQVdRQSxFQUFTWSxTQVRoQmYsR0FBaUJBLEVBQWdCZ0IsUUFFckMxQixFQUFLcUIsWUFBWSxDQUNmQyxNQUFPLHNEQU1YRyxFQUFPTCxVQUVFaEIsZUExRVcsU0FDdEJFLEVBQ0FsQixFQUNBQyxHQUNJSCxFQUFjQyxFQUFTQyxFQUFVQyxJQUFVaUIsRUF1RTNDcUIsQ0FBZ0JGLEVBQUtyQixjQUFlaEIsRUFBVUMsVUFDdkNvQyxFQUFLckIsZUF0RVMsU0FBQ2hCLEVBQWtCQyxVQUNyQ0gsRUFBY0MsRUFBU0MsRUFBVUMsSUF1RXBDdUMsQ0FBbUJ4QyxFQUFVQyxHQUcvQlcsRUFBS3FCLFlBQVksQ0FDZlEsR0FBSWhCLEVBQVNnQixHQUNiSix3Q0FHRnpCLEVBQUtxQixZQUFZLENBQ2ZRLElBQUksRUFDSkosS0FBTSxDQUNKSyxrQkFBbUJDLEVBQU1QLGtDQWhGcEIsSUFBQ1IsTUZpREgsS0FEb0N2QixZQUN6QkEsRUFBSXFCLFdBQVUsU0FBVUcsRUFBU2UsR0FDL0MsU0FBU0MsRUFBVXBELEdBQVMsSUFBTUksRUFBS1MsRUFBVXZCLEtBQUtVLElBQVcsTUFBT0csR0FBS2dELEVBQU9oRCxJQUNwRixTQUFTa0QsRUFBU3JELEdBQVMsSUFBTUksRUFBS1MsRUFBaUIsTUFBRWIsSUFBVyxNQUFPRyxHQUFLZ0QsRUFBT2hELElBQ3ZGLFNBQVNDLEVBQUtrRCxHQUFVQSxFQUFPdkQsS0FBT3FDLEVBQVFrQixFQUFPdEQsT0FBUyxJQUFJWSxHQUFFLFNBQVV3QixHQUFXQSxFQUFRa0IsRUFBT3RELFVBQVd1RCxLQUFLSCxFQUFXQyxHQUNuSWpELEdBQU1TLEVBQVlBLEVBQVVwQyxNQUFNRyxFQUFTK0IsR0FBYyxLQUFLckIifQ=='),
      (So = !1),
      function (e) {
        return (Vo = Vo || Fo(Uo, Zo, So)), new Worker(Vo, e);
      }),
    Xo = {},
    wo = new Jr(),
    xo = 'auth0.lock.getTokenSilently',
    Ao = {
      memory: function () {
        return new Io().enclosedCache;
      },
      localstorage: function () {
        return new fo();
      }
    },
    Ro = function (e) {
      return Ao[e];
    },
    Qo = function () {
      return !/Trident.*rv:11\.0/.test(navigator.userAgent);
    },
    Jo = (function () {
      function e(e) {
        var t, n;
        if (
          ((this.options = e),
          'undefined' != typeof window &&
            (function () {
              if (!zr())
                throw new Error(
                  'For security reasons, `window.crypto` is required to run `auth0-spa-js`.'
                );
              if (void 0 === jr())
                throw new Error(
                  '\n      auth0-spa-js must run on a secure origin. See https://github.com/auth0/auth0-spa-js/blob/master/FAQ.md#why-do-i-get-auth0-spa-js-must-run-on-a-secure-origin for more information.\n    '
                );
            })(),
          (this.cacheLocation = e.cacheLocation || Hr),
          (this.cookieStorage = Bo),
          (this.sessionCheckExpiryDays = e.sessionCheckExpiryDays || 1),
          !Ro(this.cacheLocation))
        )
          throw new Error(
            'Invalid cache location "' + this.cacheLocation + '"'
          );
        var r,
          o,
          c = e.useCookiesForTransactions ? this.cookieStorage : vo;
        (this.cache = Ro(this.cacheLocation)()),
          (this.scope = this.options.scope),
          (this.transactionManager = new po(c)),
          (this.domainUrl = 'https://' + this.options.domain),
          (this.tokenIssuer =
            ((r = this.options.issuer),
            (o = this.domainUrl),
            r
              ? r.startsWith('https://')
                ? r
                : 'https://' + r + '/'
              : o + '/')),
          (this.defaultScope = co(
            'openid',
            void 0 !==
              (null ===
                (n =
                  null === (t = this.options) || void 0 === t
                    ? void 0
                    : t.advancedOptions) || void 0 === n
                ? void 0
                : n.defaultScope)
              ? this.options.advancedOptions.defaultScope
              : 'openid profile email'
          )),
          this.options.useRefreshTokens &&
            (this.scope = co(this.scope, 'offline_access')),
          'undefined' != typeof window &&
            window.Worker &&
            this.options.useRefreshTokens &&
            this.cacheLocation === Hr &&
            Qo() &&
            (this.worker = new Go()),
          (this.customOptions = (function (e) {
            return (
              e.advancedOptions,
              e.audience,
              e.auth0Client,
              e.authorizeTimeoutInSeconds,
              e.cacheLocation,
              e.client_id,
              e.domain,
              e.issuer,
              e.leeway,
              e.max_age,
              e.redirect_uri,
              e.scope,
              e.useRefreshTokens,
              i(e, [
                'advancedOptions',
                'audience',
                'auth0Client',
                'authorizeTimeoutInSeconds',
                'cacheLocation',
                'client_id',
                'domain',
                'issuer',
                'leeway',
                'max_age',
                'redirect_uri',
                'scope',
                'useRefreshTokens'
              ])
            );
          })(e));
      }
      return (
        (e.prototype._url = function (e) {
          var t = encodeURIComponent(
            btoa(JSON.stringify(this.options.auth0Client || Lr))
          );
          return '' + this.domainUrl + e + '&auth0Client=' + t;
        }),
        (e.prototype._getParams = function (e, t, r, o, c) {
          var s = this.options,
            a =
              (s.domain,
              s.leeway,
              s.useRefreshTokens,
              s.useCookiesForTransactions,
              s.auth0Client,
              s.cacheLocation,
              s.advancedOptions,
              i(s, [
                'domain',
                'leeway',
                'useRefreshTokens',
                'useCookiesForTransactions',
                'auth0Client',
                'cacheLocation',
                'advancedOptions'
              ]));
          return n(n(n({}, a), e), {
            scope: co(this.defaultScope, this.scope, e.scope),
            response_type: 'code',
            response_mode: 'query',
            state: t,
            nonce: r,
            redirect_uri: c || this.options.redirect_uri,
            code_challenge: o,
            code_challenge_method: 'S256'
          });
        }),
        (e.prototype._authorizeUrl = function (e) {
          return this._url('/authorize?' + Pr(e));
        }),
        (e.prototype._verifyIdToken = function (e, t, n) {
          return mo({
            iss: this.tokenIssuer,
            aud: this.options.client_id,
            id_token: e,
            nonce: t,
            organizationId: n,
            leeway: this.options.leeway,
            max_age: this._parseNumber(this.options.max_age)
          });
        }),
        (e.prototype._parseNumber = function (e) {
          return 'string' != typeof e ? e : parseInt(e, 10) || void 0;
        }),
        (e.prototype.buildAuthorizeUrl = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t, r, c, s, a, u, l, d, g, f, I, h;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (t = e.redirect_uri),
                      (r = e.appState),
                      (c = i(e, ['redirect_uri', 'appState'])),
                      (s = _r(Dr())),
                      (a = _r(Dr())),
                      (u = Dr()),
                      [4, Mr(u)]
                    );
                  case 1:
                    return (
                      (l = o.sent()),
                      (d = $r(l)),
                      (g = e.fragment ? '#' + e.fragment : ''),
                      (f = this._getParams(c, s, a, d, t)),
                      (I = this._authorizeUrl(f)),
                      (h = e.organization || this.options.organization),
                      this.transactionManager.create(
                        n(
                          {
                            nonce: a,
                            code_verifier: u,
                            appState: r,
                            scope: f.scope,
                            audience: f.audience || 'default',
                            redirect_uri: f.redirect_uri
                          },
                          h && { organizationId: h }
                        )
                      ),
                      [2, I + g]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.loginWithPopup = function (e, t) {
          return (
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            r(this, void 0, void 0, function () {
              var r, c, s, a, u, l, d, g, f, I, h, p, y;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      (r = i(e, [])),
                      (c = _r(Dr())),
                      (s = _r(Dr())),
                      (a = Dr()),
                      [4, Mr(a)]
                    );
                  case 1:
                    return (
                      (u = o.sent()),
                      (l = $r(u)),
                      (d = this._getParams(
                        r,
                        c,
                        s,
                        l,
                        this.options.redirect_uri || window.location.origin
                      )),
                      (g = this._authorizeUrl(
                        n(n({}, d), { response_mode: 'web_message' })
                      )),
                      [
                        4,
                        Or(
                          g,
                          n(n({}, t), {
                            timeoutInSeconds:
                              t.timeoutInSeconds ||
                              this.options.authorizeTimeoutInSeconds ||
                              60
                          })
                        )
                      ]
                    );
                  case 2:
                    if (((f = o.sent()), c !== f.state))
                      throw new Error('Invalid state');
                    return [
                      4,
                      so(
                        {
                          audience: d.audience,
                          scope: d.scope,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          code_verifier: a,
                          code: f.code,
                          grant_type: 'authorization_code',
                          redirect_uri: d.redirect_uri,
                          auth0Client: this.options.auth0Client
                        },
                        this.worker
                      )
                    ];
                  case 3:
                    return (
                      (I = o.sent()),
                      (h = e.organization || this.options.organization),
                      (p = this._verifyIdToken(I.id_token, s, h)),
                      (y = n(n({}, I), {
                        decodedToken: p,
                        scope: d.scope,
                        audience: d.audience || 'default',
                        client_id: this.options.client_id
                      })),
                      this.cache.save(y),
                      this.cookieStorage.save('auth0.is.authenticated', !0, {
                        daysUntilExpire: this.sessionCheckExpiryDays
                      }),
                      [2]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.getUser = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t, n, i;
              return o(this, function (r) {
                return (
                  (t = e.audience || this.options.audience || 'default'),
                  (n = co(this.defaultScope, this.scope, e.scope)),
                  [
                    2,
                    (i = this.cache.get(
                      new ao({
                        client_id: this.options.client_id,
                        audience: t,
                        scope: n
                      })
                    )) &&
                      i.decodedToken &&
                      i.decodedToken.user
                  ]
                );
              });
            })
          );
        }),
        (e.prototype.getIdTokenClaims = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t, n, i;
              return o(this, function (r) {
                return (
                  (t = e.audience || this.options.audience || 'default'),
                  (n = co(this.defaultScope, this.scope, e.scope)),
                  [
                    2,
                    (i = this.cache.get(
                      new ao({
                        client_id: this.options.client_id,
                        audience: t,
                        scope: n
                      })
                    )) &&
                      i.decodedToken &&
                      i.decodedToken.claims
                  ]
                );
              });
            })
          );
        }),
        (e.prototype.loginWithRedirect = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t;
              return o(this, function (n) {
                switch (n.label) {
                  case 0:
                    return [4, this.buildAuthorizeUrl(e)];
                  case 1:
                    return (t = n.sent()), window.location.assign(t), [2];
                }
              });
            })
          );
        }),
        (e.prototype.handleRedirectCallback = function (e) {
          return (
            void 0 === e && (e = window.location.href),
            r(this, void 0, void 0, function () {
              var t, i, r, c, s, a, u, l, d, g, f;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    if (0 === (t = e.split('?').slice(1)).length)
                      throw new Error(
                        'There are no query params available for parsing.'
                      );
                    if (
                      ((i = (function (e) {
                        e.indexOf('#') > -1 &&
                          (e = e.substr(0, e.indexOf('#')));
                        var t = e.split('&'),
                          i = {};
                        return (
                          t.forEach(function (e) {
                            var t = e.split('='),
                              n = t[0],
                              r = t[1];
                            i[n] = decodeURIComponent(r);
                          }),
                          n(n({}, i), { expires_in: parseInt(i.expires_in) })
                        );
                      })(t.join(''))),
                      (r = i.state),
                      (c = i.code),
                      (s = i.error),
                      (a = i.error_description),
                      !(u = this.transactionManager.get()) || !u.code_verifier)
                    )
                      throw new Error('Invalid state');
                    if ((this.transactionManager.remove(), s))
                      throw new Er(s, a, r, u.appState);
                    return (
                      (l = {
                        audience: u.audience,
                        scope: u.scope,
                        baseUrl: this.domainUrl,
                        client_id: this.options.client_id,
                        code_verifier: u.code_verifier,
                        grant_type: 'authorization_code',
                        code: c,
                        auth0Client: this.options.auth0Client
                      }),
                      void 0 !== u.redirect_uri &&
                        (l.redirect_uri = u.redirect_uri),
                      [4, so(l, this.worker)]
                    );
                  case 1:
                    return (
                      (d = o.sent()),
                      (g = this._verifyIdToken(
                        d.id_token,
                        u.nonce,
                        u.organizationId
                      )),
                      (f = n(n({}, d), {
                        decodedToken: g,
                        audience: u.audience,
                        scope: u.scope,
                        client_id: this.options.client_id
                      })),
                      this.cache.save(f),
                      this.cookieStorage.save('auth0.is.authenticated', !0, {
                        daysUntilExpire: this.sessionCheckExpiryDays
                      }),
                      [2, { appState: u.appState }]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.checkSession = function (e) {
          return r(this, void 0, void 0, function () {
            var t;
            return o(this, function (n) {
              switch (n.label) {
                case 0:
                  if (!this.cookieStorage.get('auth0.is.authenticated'))
                    return [2];
                  n.label = 1;
                case 1:
                  return (
                    n.trys.push([1, 3, , 4]), [4, this.getTokenSilently(e)]
                  );
                case 2:
                  return n.sent(), [3, 4];
                case 3:
                  if (((t = n.sent()), !kr.includes(t.error))) throw t;
                  return [3, 4];
                case 4:
                  return [2];
              }
            });
          });
        }),
        (e.prototype.getTokenSilently = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t,
                r,
                c,
                s = this;
              return o(this, function (o) {
                return (
                  (t = n(
                    n({ audience: this.options.audience, ignoreCache: !1 }, e),
                    { scope: co(this.defaultScope, this.scope, e.scope) }
                  )),
                  (r = t.ignoreCache),
                  (c = i(t, ['ignoreCache'])),
                  [
                    2,
                    ((a = function () {
                      return s._getTokenSilently(n({ ignoreCache: r }, c));
                    }),
                    (u =
                      this.options.client_id +
                      '::' +
                      c.audience +
                      '::' +
                      c.scope),
                    (l = Xo[u]),
                    l ||
                      ((l = a().finally(function () {
                        delete Xo[u], (l = null);
                      })),
                      (Xo[u] = l)),
                    l)
                  ]
                );
                var a, u, l;
              });
            })
          );
        }),
        (e.prototype._getTokenSilently = function (e) {
          return (
            void 0 === e && (e = {}),
            r(this, void 0, void 0, function () {
              var t,
                c,
                s,
                a,
                u,
                l,
                d = this;
              return o(this, function (g) {
                switch (g.label) {
                  case 0:
                    return (
                      (t = e.ignoreCache),
                      (c = i(e, ['ignoreCache'])),
                      (s = function () {
                        var e = d.cache.get(
                          new ao({
                            scope: c.scope,
                            audience: c.audience || 'default',
                            client_id: d.options.client_id
                          }),
                          60
                        );
                        return e && e.access_token;
                      }),
                      !t && (a = s())
                        ? [2, a]
                        : [
                            4,
                            ((f = function () {
                              return wo.acquireLock(xo, 5e3);
                            }),
                            (I = 10),
                            void 0 === I && (I = 3),
                            r(void 0, void 0, void 0, function () {
                              var e;
                              return o(this, function (t) {
                                switch (t.label) {
                                  case 0:
                                    (e = 0), (t.label = 1);
                                  case 1:
                                    return e < I ? [4, f()] : [3, 4];
                                  case 2:
                                    if (t.sent()) return [2, !0];
                                    t.label = 3;
                                  case 3:
                                    return e++, [3, 1];
                                  case 4:
                                    return [2, !1];
                                }
                              });
                            }))
                          ]
                    );
                  case 1:
                    if (!g.sent()) return [3, 10];
                    g.label = 2;
                  case 2:
                    return (
                      g.trys.push([2, , 7, 9]),
                      !t && (a = s())
                        ? [2, a]
                        : this.options.useRefreshTokens
                        ? [4, this._getTokenUsingRefreshToken(c)]
                        : [3, 4]
                    );
                  case 3:
                    return (l = g.sent()), [3, 6];
                  case 4:
                    return [4, this._getTokenFromIFrame(c)];
                  case 5:
                    (l = g.sent()), (g.label = 6);
                  case 6:
                    return (
                      (u = l),
                      this.cache.save(
                        n({ client_id: this.options.client_id }, u)
                      ),
                      this.cookieStorage.save('auth0.is.authenticated', !0, {
                        daysUntilExpire: this.sessionCheckExpiryDays
                      }),
                      [2, u.access_token]
                    );
                  case 7:
                    return [4, wo.releaseLock(xo)];
                  case 8:
                    return g.sent(), [7];
                  case 9:
                    return [3, 11];
                  case 10:
                    throw new Yr();
                  case 11:
                    return [2];
                }
                var f, I;
              });
            })
          );
        }),
        (e.prototype.getTokenWithPopup = function (e, t) {
          return (
            void 0 === e && (e = {}),
            void 0 === t && (t = {}),
            r(this, void 0, void 0, function () {
              return o(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (e.audience = e.audience || this.options.audience),
                      (e.scope = co(this.defaultScope, this.scope, e.scope)),
                      (t = n(n({}, Wr), t)),
                      [4, this.loginWithPopup(e, t)]
                    );
                  case 1:
                    return (
                      i.sent(),
                      [
                        2,
                        this.cache.get(
                          new ao({
                            scope: e.scope,
                            audience: e.audience || 'default',
                            client_id: this.options.client_id
                          })
                        ).access_token
                      ]
                    );
                }
              });
            })
          );
        }),
        (e.prototype.isAuthenticated = function () {
          return r(this, void 0, void 0, function () {
            return o(this, function (e) {
              switch (e.label) {
                case 0:
                  return [4, this.getUser()];
                case 1:
                  return [2, !!e.sent()];
              }
            });
          });
        }),
        (e.prototype.buildLogoutUrl = function (e) {
          void 0 === e && (e = {}),
            null !== e.client_id
              ? (e.client_id = e.client_id || this.options.client_id)
              : delete e.client_id;
          var t = e.federated,
            n = i(e, ['federated']),
            r = t ? '&federated' : '';
          return this._url('/v2/logout?' + Pr(n)) + r;
        }),
        (e.prototype.logout = function (e) {
          void 0 === e && (e = {});
          var t = e.localOnly,
            n = i(e, ['localOnly']);
          if (t && n.federated)
            throw new Error(
              'It is invalid to set both the `federated` and `localOnly` options to `true`'
            );
          this.cache.clear(),
            this.cookieStorage.remove('auth0.is.authenticated');
        }),
        (e.prototype._getTokenFromIFrame = function (e) {
          return r(this, void 0, void 0, function () {
            var t, r, c, s, a, u, l, d, g, f, I, h, p, y, b;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (t = _r(Dr())), (r = _r(Dr())), (c = Dr()), [4, Mr(c)];
                case 1:
                  (s = o.sent()),
                    (a = $r(s)),
                    (u = this._getParams(
                      e,
                      t,
                      r,
                      a,
                      e.redirect_uri ||
                        this.options.redirect_uri ||
                        window.location.origin
                    )),
                    (l = this._authorizeUrl(
                      n(n({}, u), {
                        prompt: 'none',
                        response_mode: 'web_message'
                      })
                    )),
                    (d =
                      e.timeoutInSeconds ||
                      this.options.authorizeTimeoutInSeconds),
                    (o.label = 2);
                case 2:
                  return (
                    o.trys.push([2, 5, , 6]), [4, Kr(l, this.domainUrl, d)]
                  );
                case 3:
                  if (((g = o.sent()), t !== g.state))
                    throw new Error('Invalid state');
                  return (
                    (f = e.scope),
                    (I = e.audience),
                    e.redirect_uri,
                    e.ignoreCache,
                    e.timeoutInSeconds,
                    (h = i(e, [
                      'scope',
                      'audience',
                      'redirect_uri',
                      'ignoreCache',
                      'timeoutInSeconds'
                    ])),
                    [
                      4,
                      so(
                        n(n(n({}, this.customOptions), h), {
                          scope: f,
                          audience: I,
                          baseUrl: this.domainUrl,
                          client_id: this.options.client_id,
                          code_verifier: c,
                          code: g.code,
                          grant_type: 'authorization_code',
                          redirect_uri: u.redirect_uri,
                          auth0Client: this.options.auth0Client
                        }),
                        this.worker
                      )
                    ]
                  );
                case 4:
                  return (
                    (p = o.sent()),
                    (y = this._verifyIdToken(p.id_token, r)),
                    [
                      2,
                      n(n({}, p), {
                        decodedToken: y,
                        scope: u.scope,
                        audience: u.audience || 'default'
                      })
                    ]
                  );
                case 5:
                  throw (
                    ('login_required' === (b = o.sent()).error &&
                      this.logout({ localOnly: !0 }),
                    b)
                  );
                case 6:
                  return [2];
              }
            });
          });
        }),
        (e.prototype._getTokenUsingRefreshToken = function (e) {
          return r(this, void 0, void 0, function () {
            var t, r, c, s, a, u, l, d, g;
            return o(this, function (o) {
              switch (o.label) {
                case 0:
                  return (
                    (e.scope = co(
                      this.defaultScope,
                      this.options.scope,
                      e.scope
                    )),
                    ((t = this.cache.get(
                      new ao({
                        scope: e.scope,
                        audience: e.audience || 'default',
                        client_id: this.options.client_id
                      })
                    )) &&
                      t.refresh_token) ||
                    this.worker
                      ? [3, 2]
                      : [4, this._getTokenFromIFrame(e)]
                  );
                case 1:
                  return [2, o.sent()];
                case 2:
                  (r =
                    e.redirect_uri ||
                    this.options.redirect_uri ||
                    window.location.origin),
                    (s = e.scope),
                    (a = e.audience),
                    e.ignoreCache,
                    e.timeoutInSeconds,
                    (u = i(e, [
                      'scope',
                      'audience',
                      'ignoreCache',
                      'timeoutInSeconds'
                    ])),
                    (l =
                      'number' == typeof e.timeoutInSeconds
                        ? 1e3 * e.timeoutInSeconds
                        : null),
                    (o.label = 3);
                case 3:
                  return (
                    o.trys.push([3, 5, , 8]),
                    [
                      4,
                      so(
                        n(
                          n(
                            n(n(n({}, this.customOptions), u), {
                              audience: a,
                              scope: s,
                              baseUrl: this.domainUrl,
                              client_id: this.options.client_id,
                              grant_type: 'refresh_token',
                              refresh_token: t && t.refresh_token,
                              redirect_uri: r
                            }),
                            l && { timeout: l }
                          ),
                          { auth0Client: this.options.auth0Client }
                        ),
                        this.worker
                      )
                    ]
                  );
                case 4:
                  return (c = o.sent()), [3, 8];
                case 5:
                  return 'The web worker is missing the refresh token' ===
                    (d = o.sent()).message ||
                    (d.message &&
                      d.message.indexOf('invalid refresh token') > -1)
                    ? [4, this._getTokenFromIFrame(e)]
                    : [3, 7];
                case 6:
                  return [2, o.sent()];
                case 7:
                  throw d;
                case 8:
                  return (
                    (g = this._verifyIdToken(c.id_token)),
                    [
                      2,
                      n(n({}, c), {
                        decodedToken: g,
                        scope: e.scope,
                        audience: e.audience || 'default'
                      })
                    ]
                  );
              }
            });
          });
        }),
        e
      );
    })();
  function Wo(e) {
    return r(this, void 0, void 0, function () {
      var t;
      return o(this, function (n) {
        switch (n.label) {
          case 0:
            return [4, (t = new Jo(e)).checkSession()];
          case 1:
            return n.sent(), [2, t];
        }
      });
    });
  }
  var Ho = Wo;
  return (Ho.Auth0Client = Jo), (Ho.createAuth0Client = Wo), Ho;
}),
  'Auth0Client' in this &&
    this.console &&
    this.console.warn &&
    this.console.warn('Auth0Client already declared on the global namespace'),
  this &&
    this.createAuth0Client &&
    (this.Auth0Client = this.Auth0Client || this.createAuth0Client.Auth0Client);
//# sourceMappingURL=auth0-spa-js.production.js.map
