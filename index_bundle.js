(() => {
  var n = {
      564: () => {},
      208: (n, e, t) => {
        "use strict";
        t.d(e, { A: () => u });
        var r = t(601),
          o = t.n(r),
          i = t(314),
          a = t.n(i),
          s = t(417),
          c = t.n(s),
          p = new URL(t(588), t.b),
          d = a()(o()),
          l = c()(p);
        d.push([
          n.id,
          `* {\n  margin: 0px;\n  padding: 0px;\n}\n:root {\n  --background-color: transparent;\n  --backdrop-filter: blur(10px);\n  --border-radius: 10px;\n  --border: solid 1px white;\n  --button-bg-color: rgba(0, 0, 0, 0.151);\n  --button-color: white;\n}\n\n.blurred-box {\n  background-color: var(--background-color);\n  backdrop-filter: var(--backdrop-filter);\n  border-radius: var(--border-radius);\n  border: var(--border);\n}\n\nbody {\n  font-family: Arial, sans-serif;\n  color: white;\n  padding: 50px;\n  background-image: url(${l});\n}\n\nheader {\n  display: flex;\n  gap: 20px;\n  text-align: left;\n  padding: 10px;\n}\nheader > h1 {\n  align-self: center;\n}\n.logo {\n  align-self: center;\n  height: 70px;\n  filter: invert(100);\n}\n\nmain.container {\n  display: grid;\n  grid-template-columns: 20% 60% auto;\n  gap: 20px;\n  padding-top: 20px;\n}\n\n.sideBar {\n  height: 75vh;\n  grid-column: 1/2;\n  padding: 20px;\n}\n\n.sideTitle {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 30px;\n}\n\n.filter {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n  padding-top: 30px;\n  padding-bottom: 30px;\n  padding-left: 20px;\n}\n\n.btnSidebar {\n  width: auto;\n  padding-left: 20px;\n  background-color: transparent;\n  font-size: 20px;\n  text-align: left;\n  align-self: center;\n}\n\n.projects {\n  padding-top: 30px;\n}\n\n.btnProjects {\n  background-color: transparent;\n  font-size: 40px;\n  text-align: center;\n  width: 80px;\n}\n#details {\n  height: 40px;\n  width: 80px;\n  font-size: 15px;\n}\nbutton {\n  background-color: var(--button-bg-color);\n  border: none;\n  height: 35px;\n  width: 70px;\n  border-radius: 10px;\n  font-weight: bold;\n  color: var(--button-color);\n  align-self: center;\n  cursor: pointer;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n  transition: 0.8s;\n}\n\nbutton:active {\n  transform: scale(0.8);\n  transition: 0.8s;\n}\n\n.info {\n  grid-column: 3/4;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  gap: 20px;\n  height: 60%;\n  justify-content: center;\n}\n\n.info form {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n\n.input-box {\n  background-color: var(--background-color);\n  backdrop-filter: var(--backdrop-filter);\n  border-radius: var(--border-radius);\n  border: var(--border);\n  color: white;\n  width: 100%;\n  height: 40px;\n}\n\n#name {\n  height: 40px;\n  font-size: 30px;\n  margin-bottom: 35px;\n}\n#projectSelector {\n  margin-bottom: 35px;\n}\n#description {\n  overflow: hidden;\n  min-height: 100px;\n  max-height: 450px;\n  height: 200px;\n  resize: none;\n  font-size: 18px;\n  margin-bottom: 35px;\n}\nform {\n  justify-content: center;\n}\n.formSection {\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n}\n\n.coupleTag {\n  display: flex;\n  gap: 20px;\n  height: 40px;\n  font-size: 20px;\n}\n\n.cancel {\n  background-color: rgba(170, 3, 3, 0.404);\n}\n\n.submit {\n  background-color: rgba(172, 255, 47, 0.253);\n}\n\noption {\n  color: black;\n  font-weight: bold;\n}\n\n.taskInfo {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n  margin-bottom: 20px;\n  height: 50px;\n}\n\n.leftInfo {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 70%;\n}\n.leftInfo :nth-child(2) {\n  font-weight: bold;\n  font-size: 20px;\n}\n.leftInfo :nth-child(3) {\n  max-width: 90%;\n  overflow: hidden;\n}\n\n.rightInfo {\n  justify-content: flex-end;\n  display: flex;\n  align-items: center;\n  gap: 25px;\n}\n.rightInfo :nth-child(1) {\n  width: 90px;\n}\n\n.icon {\n  height: 40px;\n  filter: invert(100%);\n  cursor: pointer;\n}\n.icon:hover {\n  transform: scale(1.1);\n  transition: 0.8s;\n}\n\n.icon:active {\n  transform: scale(0.8);\n  transition: 0.8s;\n}\n\n.newTask {\n  background-color: transparent;\n  height: 50px;\n  width: 100%;\n  box-sizing: border-box;\n  font-size: 20px;\n  padding: 10px;\n}\n.domProjects {\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n}\n\n.projImg {\n  display: flex;\n  justify-content: space-between;\n  padding-top: 0px;\n  padding-left: 20px;\n  padding-right: 20px;\n}\n.viewFlex {\n  display: flex;\n}\n.viewFlex > .btnSidebar {\n  height: auto;\n  align-self: center;\n  width: auto;\n}\n.viewFlex > img {\n  cursor: auto;\n}\n.viewFlex > img:hover {\n  transform: none;\n}\n.detailsDescription {\n  font-size: 20px;\n  max-width: 400px;\n  overflow: hidden;\n  padding-bottom: 10px;\n}\n.detailsTaskName {\n  font-size: 20px;\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\n.detailsDate {\n  font-size: 20px;\n  padding-bottom: 10px;\n}\n.detailsPriority {\n  font-size: 20px;\n  padding-bottom: 10px;\n}\n.detailsProject {\n  font-size: 20px;\n}\n`,
          "",
        ]);
        const u = d;
      },
      314: (n) => {
        "use strict";
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var p = 0; p < n.length; p++) {
                var d = [].concat(n[p]);
                (r && a[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      417: (n) => {
        "use strict";
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"'
                    )
                  : n)
              : n
          );
        };
      },
      601: (n) => {
        "use strict";
        n.exports = function (n) {
          return n[1];
        };
      },
      72: (n) => {
        "use strict";
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var i = {}, a = [], s = 0; s < n.length; s++) {
            var c = n[s],
              p = r.base ? c[0] + r.base : c[0],
              d = i[p] || 0,
              l = "".concat(p, " ").concat(d);
            i[p] = d + 1;
            var u = t(l),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== u) e[u].references++, e[u].updater(f);
            else {
              var g = o(f, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: l, updater: g, references: 1 });
            }
            a.push(l);
          }
          return a;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var s = t(i[a]);
              e[s].references--;
            }
            for (var c = r(n, o), p = 0; p < i.length; p++) {
              var d = t(i[p]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            i = c;
          };
        };
      },
      659: (n) => {
        "use strict";
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      540: (n) => {
        "use strict";
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      56: (n, e, t) => {
        "use strict";
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      825: (n) => {
        "use strict";
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      113: (n) => {
        "use strict";
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      588: (n, e, t) => {
        "use strict";
        n.exports = t.p + "images/girl-7628308_1920.jpg";
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return n[r](i, i.exports, t), i.exports;
  }
  (t.m = n),
    (t.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var r = e.getElementsByTagName("script");
        if (r.length)
          for (var o = r.length - 1; o > -1 && (!n || !/^http(s?):/.test(n)); )
            n = r[o--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser"
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    (() => {
      "use strict";
      var n = t(72),
        e = t.n(n),
        r = t(825),
        o = t.n(r),
        i = t(659),
        a = t.n(i),
        s = t(56),
        c = t.n(s),
        p = t(540),
        d = t.n(p),
        l = t(113),
        u = t.n(l),
        f = t(208),
        g = {};
      (g.styleTagTransform = u()),
        (g.setAttributes = c()),
        (g.insert = a().bind(null, "head")),
        (g.domAPI = o()),
        (g.insertStyleElement = d()),
        e()(f.A, g),
        f.A && f.A.locals && f.A.locals,
        t.p,
        t.p,
        t(588),
        t.p,
        t.p,
        t.p,
        t.p;
      var x = t(564);
      document
        .querySelector(".btnProjects")
        .addEventListener("click", x.newProject);
    })();
})();
