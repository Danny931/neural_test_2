!(function () {
  try {
    var e =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof global
          ? global
          : "undefined" != typeof self
          ? self
          : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = "25d53083-24a2-476e-81d3-99974d05cf81"),
      (e._sentryDebugIdIdentifier =
        "sentry-dbid-25d53083-24a2-476e-81d3-99974d05cf81"));
  } catch (e) {}
})(),
  (function () {
    try {
      var e =
          "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        t = new e.Error().stack;
      t &&
        ((e._sentryDebugIds = e._sentryDebugIds || {}),
        (e._sentryDebugIds[t] = "25d53083-24a2-476e-81d3-99974d05cf81"),
        (e._sentryDebugIdIdentifier =
          "sentry-dbid-25d53083-24a2-476e-81d3-99974d05cf81"));
    } catch (e) {}
  })(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [219],
    {
      4755: (e, t, n) => {
        Promise.resolve().then(n.bind(n, 5058));
      },
      7419: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return u;
            },
          });
        let r = n(7424),
          o = n(5155),
          d = r._(n(4496)),
          l = r._(n(3585)),
          s = {
            400: "Bad Request",
            404: "This page could not be found",
            405: "Method Not Allowed",
            500: "Internal Server Error",
          };
        function a(e) {
          let { res: t, err: n } = e;
          return {
            statusCode:
              t && t.statusCode ? t.statusCode : n ? n.statusCode : 404,
          };
        }
        let i = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
          desc: { lineHeight: "48px" },
          h1: {
            display: "inline-block",
            margin: "0 20px 0 0",
            paddingRight: 23,
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: "top",
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: "28px" },
          wrap: { display: "inline-block" },
        };
        class u extends d.default.Component {
          render() {
            let { statusCode: e, withDarkMode: t = !0 } = this.props,
              n =
                this.props.title || s[e] || "An unexpected error has occurred";
            return (0, o.jsxs)("div", {
              style: i.error,
              children: [
                (0, o.jsx)(l.default, {
                  children: (0, o.jsx)("title", {
                    children: e
                      ? e + ": " + n
                      : "Application error: a client-side exception has occurred",
                  }),
                }),
                (0, o.jsxs)("div", {
                  style: i.desc,
                  children: [
                    (0, o.jsx)("style", {
                      dangerouslySetInnerHTML: {
                        __html:
                          "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}" +
                          (t
                            ? "@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"
                            : ""),
                      },
                    }),
                    e
                      ? (0, o.jsx)("h1", {
                          className: "next-error-h1",
                          style: i.h1,
                          children: e,
                        })
                      : null,
                    (0, o.jsx)("div", {
                      style: i.wrap,
                      children: (0, o.jsxs)("h2", {
                        style: i.h2,
                        children: [
                          this.props.title || e
                            ? n
                            : (0, o.jsx)(o.Fragment, {
                                children:
                                  "Application error: a client-side exception has occurred (see the browser console for more information)",
                              }),
                          ".",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            });
          }
        }
        (u.displayName = "ErrorPage"),
          (u.getInitialProps = a),
          (u.origGetInitialProps = a),
          ("function" == typeof t.default ||
            ("object" == typeof t.default && null !== t.default)) &&
            void 0 === t.default.__esModule &&
            (Object.defineProperty(t.default, "__esModule", { value: !0 }),
            Object.assign(t.default, t),
            (e.exports = t.default));
      },
      9145: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "AmpStateContext", {
            enumerable: !0,
            get: function () {
              return r;
            },
          });
        let r = n(7424)._(n(4496)).default.createContext({});
      },
      517: (e, t) => {
        "use strict";
        function n(e) {
          let {
            ampFirst: t = !1,
            hybrid: n = !1,
            hasQuery: r = !1,
          } = void 0 === e ? {} : e;
          return t || (n && r);
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "isInAmpMode", {
            enumerable: !0,
            get: function () {
              return n;
            },
          });
      },
      3585: (e, t, n) => {
        "use strict";
        var r = n(7358);
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (function (e, t) {
            for (var n in t)
              Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
          })(t, {
            default: function () {
              return g;
            },
            defaultHead: function () {
              return c;
            },
          });
        let o = n(7424),
          d = n(5365),
          l = n(5155),
          s = d._(n(4496)),
          a = o._(n(5097)),
          i = n(9145),
          u = n(5857),
          f = n(517);
        function c(e) {
          void 0 === e && (e = !1);
          let t = [(0, l.jsx)("meta", { charSet: "utf-8" }, "charset")];
          return (
            e ||
              t.push(
                (0, l.jsx)(
                  "meta",
                  { name: "viewport", content: "width=device-width" },
                  "viewport"
                )
              ),
            t
          );
        }
        function p(e, t) {
          return "string" == typeof t || "number" == typeof t
            ? e
            : t.type === s.default.Fragment
            ? e.concat(
                s.default.Children.toArray(t.props.children).reduce(
                  (e, t) =>
                    "string" == typeof t || "number" == typeof t
                      ? e
                      : e.concat(t),
                  []
                )
              )
            : e.concat(t);
        }
        n(1637);
        let y = ["name", "httpEquiv", "charSet", "itemProp"];
        function h(e, t) {
          let { inAmpMode: n } = t;
          return e
            .reduce(p, [])
            .reverse()
            .concat(c(n).reverse())
            .filter(
              (function () {
                let e = new Set(),
                  t = new Set(),
                  n = new Set(),
                  r = {};
                return (o) => {
                  let d = !0,
                    l = !1;
                  if (
                    o.key &&
                    "number" != typeof o.key &&
                    o.key.indexOf("$") > 0
                  ) {
                    l = !0;
                    let t = o.key.slice(o.key.indexOf("$") + 1);
                    e.has(t) ? (d = !1) : e.add(t);
                  }
                  switch (o.type) {
                    case "title":
                    case "base":
                      t.has(o.type) ? (d = !1) : t.add(o.type);
                      break;
                    case "meta":
                      for (let e = 0, t = y.length; e < t; e++) {
                        let t = y[e];
                        if (o.props.hasOwnProperty(t)) {
                          if ("charSet" === t) n.has(t) ? (d = !1) : n.add(t);
                          else {
                            let e = o.props[t],
                              n = r[t] || new Set();
                            ("name" !== t || !l) && n.has(e)
                              ? (d = !1)
                              : (n.add(e), (r[t] = n));
                          }
                        }
                      }
                  }
                  return d;
                };
              })()
            )
            .reverse()
            .map((e, t) => {
              let o = e.key || t;
              if (
                r.env.__NEXT_OPTIMIZE_FONTS &&
                !n &&
                "link" === e.type &&
                e.props.href &&
                [
                  "https://fonts.googleapis.com/css",
                  "https://use.typekit.net/",
                ].some((t) => e.props.href.startsWith(t))
              ) {
                let t = { ...(e.props || {}) };
                return (
                  (t["data-href"] = t.href),
                  (t.href = void 0),
                  (t["data-optimized-fonts"] = !0),
                  s.default.cloneElement(e, t)
                );
              }
              return s.default.cloneElement(e, { key: o });
            });
        }
        let g = function (e) {
          let { children: t } = e,
            n = (0, s.useContext)(i.AmpStateContext),
            r = (0, s.useContext)(u.HeadManagerContext);
          return (0, l.jsx)(a.default, {
            reduceComponentsToState: h,
            headManager: r,
            inAmpMode: (0, f.isInAmpMode)(n),
            children: t,
          });
        };
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      5097: (e, t, n) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          });
        let r = n(4496),
          o = "undefined" == typeof window,
          d = o ? () => {} : r.useLayoutEffect,
          l = o ? () => {} : r.useEffect;
        function s(e) {
          let { headManager: t, reduceComponentsToState: n } = e;
          function s() {
            if (t && t.mountedInstances) {
              let o = r.Children.toArray(
                Array.from(t.mountedInstances).filter(Boolean)
              );
              t.updateHead(n(o, e));
            }
          }
          if (o) {
            var a;
            null == t || null == (a = t.mountedInstances) || a.add(e.children),
              s();
          }
          return (
            d(() => {
              var n;
              return (
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.add(e.children),
                () => {
                  var n;
                  null == t ||
                    null == (n = t.mountedInstances) ||
                    n.delete(e.children);
                }
              );
            }),
            d(
              () => (
                t && (t._pendingUpdate = s),
                () => {
                  t && (t._pendingUpdate = s);
                }
              )
            ),
            l(
              () => (
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null)),
                () => {
                  t &&
                    t._pendingUpdate &&
                    (t._pendingUpdate(), (t._pendingUpdate = null));
                }
              )
            ),
            null
          );
        }
      },
      2112: (e, t, n) => {
        e.exports = n(7419);
      },
      5058: (e, t, n) => {
        "use strict";
        n.r(t), n.d(t, { default: () => a });
        var r = n(5155),
          o = n(6094),
          d = n(2112),
          l = n.n(d),
          s = n(4496);
        function a(e) {
          let { error: t } = e;
          return (
            (0, s.useEffect)(() => {
              o.Cp(t);
            }, [t]),
            (0, r.jsx)("html", {
              "data-sentry-component": "GlobalError",
              "data-sentry-source-file": "global-error.tsx",
              children: (0, r.jsx)("body", {
                children: (0, r.jsx)(l(), {
                  statusCode: 0,
                  "data-sentry-element": "NextError",
                  "data-sentry-source-file": "global-error.tsx",
                  "data-sentry-element": "NextError",
                }),
              }),
            })
          );
        }
      },
    },
    (e) => {
      var t = (t) => e((e.s = t));
      e.O(0, [850, 441, 618, 358], () => t(4755)), (_N_E = e.O());
    },
  ]);
