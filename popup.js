(function (t) {
  function e(e) {
    for (
      var s, i, o = e[0], c = e[1], l = e[2], p = 0, d = [];
      p < o.length;
      p++
    )
      (i = o[p]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && d.push(n[i][0]),
        (n[i] = 0);
    for (s in c) Object.prototype.hasOwnProperty.call(c, s) && (t[s] = c[s]);
    u && u(e);
    while (d.length) d.shift()();
    return r.push.apply(r, l || []), a();
  }
  function a() {
    for (var t, e = 0; e < r.length; e++) {
      for (var a = r[e], s = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== n[c] && (s = !1);
      }
      s && (r.splice(e--, 1), (t = i((i.s = a[0]))));
    }
    return t;
  }
  var s = {},
    n = { popup: 0 },
    r = [];
  function i(e) {
    if (s[e]) return s[e].exports;
    var a = (s[e] = { i: e, l: !1, exports: {} });
    return t[e].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = t),
    (i.c = s),
    (i.d = function (t, e, a) {
      i.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: a });
    }),
    (i.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (i.t = function (t, e) {
      if ((1 & e && (t = i(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var s in t)
          i.d(
            a,
            s,
            function (e) {
              return t[e];
            }.bind(null, s)
          );
      return a;
    }),
    (i.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return i.d(e, "a", e), e;
    }),
    (i.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (i.p = "/");
  var o = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = o.push.bind(o);
  (o.push = e), (o = o.slice());
  for (var l = 0; l < o.length; l++) e(o[l]);
  var u = c;
  r.push([0, "chunk-vendors"]), a();
})({
  0: function (t, e, a) {
    t.exports = a("0a3d");
  },
  "01ea": function (t, e, a) {
    "use strict";
    var s = "echobot-canvaautomate",
      n = "fdjsoa398%%@GF**!!xbeebn",
      r = "js3.4.1",
      i = "https://canvaautomate.echobot.dev",
      o = "https://echobot.dev/server",
      c = "LOGIN",
      l = "LOGOUT",
      u = "GET_CURRENT_USER",
      p = "bC530n29aX834fdd549693aOI08229cD";
    e["a"] = {
      PARSE_APPID: s,
      PARSE_JSKEY: n,
      PARSE_CLIENT_VERSION: r,
      HOST_URL: i,
      PAY_HOST_URL: o,
      LOGIN: c,
      LOGOUT: l,
      GET_CURRENT_USER: u,
      ENCRYPT_KEY: p,
    };
  },
  "0224": function (t, e, a) {},
  "0a3d": function (t, e, a) {
    "use strict";
    a.r(e);
    a("e260"), a("e6cf"), a("cca6"), a("a79d");
    var s = a("2b0e"),
      n =
        (a("42e0"),
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "wrapper" }, [
            a(
              "header",
              { staticClass: "is-flex is-align-items-center p-3 pl-4" },
              [
                t._m(0),
                a(
                  "h1",
                  { staticClass: "is-size-6 has-text-weight-semibold px-2" },
                  [t._v(" Canva Automate Maker ")]
                ),
                a(
                  "span",
                  { staticClass: "has-text-grey-light is-size-7 mt-1" },
                  [t._v(t._s(t.version))]
                ),
                t.user.id &&
                !t.subscription.isPro &&
                t.usedCount >= 1 &&
                "pro" !== t.tabType
                  ? a(
                      "a",
                      {
                        staticClass:
                          "btn-pro is-flex is-justify-content-center is-align-items-center px-4 has-text-weight-semibold",
                        on: {
                          click: function (e) {
                            return t.handleSwitchTab("pro");
                          },
                        },
                      },
                      [
                        a(
                          "svg",
                          {
                            attrs: {
                              xmlns: "http://www.w3.org/2000/svg",
                              viewBox: "0 0 24 24",
                              width: "18",
                              height: "18",
                            },
                          },
                          [
                            a("path", {
                              attrs: { fill: "none", d: "M0 0h24v24H0z" },
                            }),
                            a("path", {
                              attrs: {
                                d: "M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                                fill: "rgba(255,221,86,1)",
                              },
                            }),
                          ]
                        ),
                        a("span", { staticClass: "pl-1" }, [
                          t._v("Upgrade to Pro"),
                        ]),
                      ]
                    )
                  : t._e(),
                t.user.id && "pro" === t.tabType
                  ? a(
                      "div",
                      {
                        staticStyle: {
                          position: "absolute",
                          right: "15px",
                          top: "15px",
                        },
                      },
                      [
                        a(
                          "b-dropdown",
                          {
                            attrs: {
                              "aria-role": "list",
                              "mobile-modal": !1,
                              position: "is-bottom-left",
                            },
                            scopedSlots: t._u(
                              [
                                {
                                  key: "trigger",
                                  fn: function () {
                                    return [
                                      a(
                                        "p",
                                        {
                                          staticClass:
                                            "btn-logout is-size-7 has-text-grey-light is-flex is-justify-content-center is-align-items-center",
                                          attrs: { role: "button" },
                                        },
                                        [
                                          a("b-icon", {
                                            attrs: {
                                              icon: "user",
                                              size: "is-small",
                                            },
                                          }),
                                          a(
                                            "span",
                                            { staticClass: "username" },
                                            [t._v(t._s(t.user.username))]
                                          ),
                                          a("b-icon", {
                                            attrs: {
                                              icon: "angle-down",
                                              size: "is-small",
                                            },
                                          }),
                                        ],
                                        1
                                      ),
                                    ];
                                  },
                                  proxy: !0,
                                },
                              ],
                              null,
                              !1,
                              4160029623
                            ),
                          },
                          [
                            a(
                              "b-dropdown-item",
                              {
                                staticClass:
                                  "is-flex is-justify-content-center is-align-items-center",
                                attrs: { "aria-role": "listitem" },
                                on: { click: t.handleLogout },
                              },
                              [
                                a("b-icon", {
                                  attrs: { icon: "sign-out-alt" },
                                }),
                                t._v(" Logout"),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : t._e(),
              ]
            ),
            t.user.id
              ? a("main", { staticClass: "is-flex is-flex-grow-1" }, [
                  a("div", { staticClass: "aside" }, [
                    a("ul", [
                      a("li", [
                        a(
                          "a",
                          {
                            class: { current: "index" === t.tabType },
                            on: {
                              click: function (e) {
                                return t.handleSwitchTab("index");
                              },
                            },
                          },
                          [
                            a(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  width: "18",
                                  height: "18",
                                },
                              },
                              [
                                a("path", {
                                  attrs: { fill: "none", d: "M0 0h24v24H0z" },
                                }),
                                a("path", {
                                  attrs: {
                                    d: "M19 21H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9a1 1 0 0 1-1 1zm-6-2h5V9.157l-6-5.454-6 5.454V19h5v-6h2v6z",
                                    fill: "rgba(51,51,51,1)",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      a("li", [
                        a(
                          "a",
                          {
                            class: { current: "faq" === t.tabType },
                            on: {
                              click: function (e) {
                                return t.handleSwitchTab("faq");
                              },
                            },
                          },
                          [
                            a(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  width: "18",
                                  height: "18",
                                },
                              },
                              [
                                a("path", {
                                  attrs: { fill: "none", d: "M0 0h24v24H0z" },
                                }),
                                a("path", {
                                  attrs: {
                                    d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-5h2v2h-2v-2zm2-1.645V14h-2v-1.5a1 1 0 0 1 1-1 1.5 1.5 0 1 0-1.471-1.794l-1.962-.393A3.501 3.501 0 1 1 13 13.355z",
                                    fill: "rgba(51,51,51,1)",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]),
                      a("li", [
                        a(
                          "a",
                          {
                            class: { current: "pro" === t.tabType },
                            on: {
                              click: function (e) {
                                return t.handleSwitchTab("pro");
                              },
                            },
                          },
                          [
                            a(
                              "svg",
                              {
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  width: "18",
                                  height: "18",
                                },
                              },
                              [
                                a("path", {
                                  attrs: { fill: "none", d: "M0 0h24v24H0z" },
                                }),
                                a("path", {
                                  attrs: {
                                    d: "M3.492 8.065L4.778 19h14.444l1.286-10.935-4.01 2.673L12 4.441l-4.498 6.297-4.01-2.673zM2.801 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4z",
                                    fill: "rgba(51,51,51,1)",
                                  },
                                }),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  a("div", { staticClass: "body is-flex-grow-1" }, [
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "index" === t.tabType,
                            expression: "tabType === 'index'",
                          },
                        ],
                        staticClass: "px-5 pt-4",
                      },
                      [
                        a(
                          "b-field",
                          {
                            staticClass: "pb-3",
                            attrs: { label: "Variable Markers" },
                          },
                          [
                            t.markerLoading && t.isCanvaTab
                              ? a(
                                  "b-taglist",
                                  { staticClass: "is-size-6 warning" },
                                  [
                                    a("b-icon", {
                                      attrs: {
                                        icon: "spinner",
                                        "custom-class": "fa-spin",
                                        type: "is-mainred",
                                      },
                                    }),
                                    t._v(" Variable marker, loading... "),
                                  ],
                                  1
                                )
                              : t.isCanvaTab
                              ? t.markerLoading ||
                                0 !== t.variantMarkers.length ||
                                t.taskDoing
                                ? !t.markerLoading && t.taskDoing
                                  ? a(
                                      "b-taglist",
                                      {
                                        staticClass:
                                          "is-size-6 warning is-flex is-flex-wrap-nowrap is-align-content-flex-start",
                                      },
                                      [
                                        a("b-icon", {
                                          staticClass: "ml-1",
                                          staticStyle: { color: "#ffaf36" },
                                          attrs: {
                                            icon: "exclamation-circle",
                                            size: "is-large",
                                          },
                                        }),
                                        a("span", { staticClass: "ml-3" }, [
                                          t._v(
                                            "There is already a task running, please wait for it to finish or manually abort it before running a new task."
                                          ),
                                        ]),
                                      ],
                                      1
                                    )
                                  : a(
                                      "b-taglist",
                                      [
                                        t._l(t.variantMarkers, function (e, s) {
                                          return a(
                                            "b-tag",
                                            {
                                              key: s,
                                              attrs: {
                                                type: "is-primary is-light",
                                                rounded: "",
                                              },
                                            },
                                            [
                                              a(
                                                "span",
                                                {
                                                  staticClass:
                                                    "is-flex is-justify-content-center is-align-items-center",
                                                },
                                                [
                                                  a("b-icon", {
                                                    attrs: {
                                                      icon: "check-circle",
                                                      size: "is-small",
                                                    },
                                                  }),
                                                  a("span", [t._v(t._s(e))]),
                                                ],
                                                1
                                              ),
                                            ]
                                          );
                                        }),
                                        a(
                                          "span",
                                          {
                                            staticClass:
                                              "is-size-7 has-text-grey-light",
                                          },
                                          [
                                            t._v(
                                              t._s(t.variantMarkers.length) +
                                                " variables"
                                            ),
                                          ]
                                        ),
                                      ],
                                      2
                                    )
                                : a(
                                    "b-taglist",
                                    { staticClass: "is-size-6 warning" },
                                    [
                                      a("b-icon", {
                                        staticStyle: { color: "#ffaf36" },
                                        attrs: { icon: "exclamation-circle" },
                                      }),
                                      t._v(
                                        "Please mark the variables on the design (eg: #1#,#2#,#3#...) "
                                      ),
                                    ],
                                    1
                                  )
                              : a(
                                  "b-taglist",
                                  { staticClass: "is-size-6 warning" },
                                  [
                                    a("b-icon", {
                                      staticStyle: { color: "#ffaf36" },
                                      attrs: { icon: "exclamation-circle" },
                                    }),
                                    t._v(
                                      "Please open the Canva.com design page first. "
                                    ),
                                  ],
                                  1
                                ),
                          ],
                          1
                        ),
                        a(
                          "b-field",
                          {
                            staticClass: "pb-1",
                            scopedSlots: t._u(
                              [
                                {
                                  key: "label",
                                  fn: function () {
                                    return [
                                      t._v("Data Source "),
                                      a(
                                        "a",
                                        {
                                          staticClass:
                                            "has-text-weight-normal is-size-7 pt-1 pr-1 is-clickable",
                                          staticStyle: { float: "right" },
                                          on: {
                                            click: t.handleDownloadTemplate,
                                          },
                                        },
                                        [t._v("Download a sample CSV ")]
                                      ),
                                    ];
                                  },
                                  proxy: !0,
                                },
                              ],
                              null,
                              !1,
                              326243853
                            ),
                          },
                          [
                            t.csvFile
                              ? a(
                                  "div",
                                  {
                                    staticClass:
                                      "uploaded-box is-flex is-flex-direction-column is-justify-content-center is-align-items-center is-relative",
                                  },
                                  [
                                    a(
                                      "div",
                                      {
                                        staticClass:
                                          "is-flex is-align-items-center",
                                      },
                                      [
                                        a("b-icon", {
                                          attrs: {
                                            icon: "file-csv",
                                            size: "is-medium",
                                          },
                                        }),
                                        a(
                                          "span",
                                          {
                                            staticClass:
                                              "is-size-7 has-text-grey",
                                          },
                                          [
                                            t._v(
                                              " " +
                                                t._s(t.csvFile.name) +
                                                " (" +
                                                t._s(t.csvFile.size) +
                                                " bytes) "
                                            ),
                                          ]
                                        ),
                                        a(
                                          "div",
                                          {
                                            staticClass:
                                              "bottom-tools is-flex is-align-items-center is-justify-content-center has-text-weight-semibold",
                                          },
                                          [
                                            a(
                                              "label",
                                              {
                                                staticClass:
                                                  "mr-6 is-size-7 is-flex is-align-items-center has-text-grey-dark",
                                                attrs: { for: "skipNumber" },
                                              },
                                              [
                                                a("b-icon", {
                                                  staticClass: "has-text-link",
                                                  attrs: {
                                                    icon: "cut",
                                                    size: "is-small",
                                                  },
                                                }),
                                                t._v(" Skip "),
                                                a("b-input", {
                                                  staticClass:
                                                    "is-inline-block mx-1",
                                                  attrs: {
                                                    id: "skipNumber",
                                                    size: "is-small",
                                                    type: "number",
                                                    min: "0",
                                                    max: t.csvList.length - 1,
                                                    "custom-class":
                                                      "is-size-7 py-1 has-text-centered min-input",
                                                  },
                                                  model: {
                                                    value: t.skipRowNumber,
                                                    callback: function (e) {
                                                      t.skipRowNumber = e;
                                                    },
                                                    expression: "skipRowNumber",
                                                  },
                                                }),
                                                a(
                                                  "b-tooltip",
                                                  {
                                                    attrs: {
                                                      type: "is-light",
                                                      size: "is-large",
                                                      label:
                                                        "When using the same csv file again, skip the number of completed downloads from the last time, so that you don't have to modify the csv file.",
                                                      multilined: "",
                                                    },
                                                  },
                                                  [
                                                    t._v(" rows "),
                                                    a("b-icon", {
                                                      staticClass:
                                                        "has-text-dark",
                                                      staticStyle: {
                                                        opacity: "0.3",
                                                      },
                                                      attrs: {
                                                        size: "is-small",
                                                        icon: "question-circle",
                                                      },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ],
                                              1
                                            ),
                                            a(
                                              "a",
                                              {
                                                staticClass:
                                                  "is-flex is-align-items-center is-size-7 py-2",
                                                on: {
                                                  click: t.handleRemoveCsvFile,
                                                },
                                              },
                                              [
                                                a("b-icon", {
                                                  staticClass:
                                                    "has-text-danger",
                                                  attrs: {
                                                    icon: "trash-alt",
                                                    size: "is-small",
                                                  },
                                                }),
                                                a(
                                                  "span",
                                                  {
                                                    staticClass:
                                                      "has-text-grey-dark",
                                                  },
                                                  [t._v("Remove and re-upload")]
                                                ),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                    a(
                                      "div",
                                      {
                                        staticClass:
                                          "mb-5 pb-2 is-flex is-align-items-center",
                                      },
                                      [
                                        a("b-icon", {
                                          staticClass: "mx-2",
                                          attrs: {
                                            type: "is-success",
                                            icon: "check-circle",
                                            size: "is-small",
                                          },
                                        }),
                                        a(
                                          "span",
                                          {
                                            staticClass: "has-text-grey",
                                            staticStyle: {
                                              "font-size": "14px",
                                            },
                                          },
                                          [
                                            a(
                                              "span",
                                              {
                                                staticClass:
                                                  "has-text-weight-semibold has-text-black-bis",
                                              },
                                              [t._v(t._s(t.csvList.length))]
                                            ),
                                            t._v(
                                              " rows of records have been loaded. "
                                            ),
                                          ]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]
                                )
                              : a(
                                  "b-upload",
                                  {
                                    attrs: { "drag-drop": "", expanded: "" },
                                    model: {
                                      value: t.csvFile,
                                      callback: function (e) {
                                        t.csvFile = e;
                                      },
                                      expression: "csvFile",
                                    },
                                  },
                                  [
                                    a(
                                      "section",
                                      {
                                        staticClass: "section",
                                        staticStyle: {
                                          padding:
                                            "0.2rem 1.5rem 0.45rem 1.5rem",
                                        },
                                      },
                                      [
                                        a(
                                          "div",
                                          {
                                            staticClass:
                                              "content has-text-centered",
                                          },
                                          [
                                            a("b-icon", {
                                              staticClass: "has-text-grey",
                                              attrs: {
                                                icon: "arrow-circle-up",
                                                size: "is-large",
                                              },
                                            }),
                                            a("p", { staticClass: "mb-0" }, [
                                              t._v("Upload fill data (.csv)"),
                                            ]),
                                            a(
                                              "p",
                                              {
                                                staticClass:
                                                  "is-size-7 has-text-grey-light",
                                              },
                                              [
                                                t._v(
                                                  " Drop your files here or click to upload "
                                                ),
                                              ]
                                            ),
                                          ],
                                          1
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                          ],
                          1
                        ),
                        a("p", { staticClass: "label" }, [
                          t._v(" Download File Type "),
                          "PNG" === t.downloadFileType
                            ? a(
                                "span",
                                { staticStyle: { float: "right" } },
                                [
                                  a(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        type: "is-light",
                                        multilined: "",
                                        position: "is-left",
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "content",
                                            fn: function () {
                                              return [
                                                t._v(
                                                  " Transparent backgrounds require canva.com's own feature support, so you must already be "
                                                ),
                                                a("strong", [
                                                  t._v(
                                                    "canva.com Pro (not referring to Automate Maker's Pro)"
                                                  ),
                                                ]),
                                                t._v(" to use it.. "),
                                              ];
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        1563723258
                                      ),
                                    },
                                    [
                                      a(
                                        "b-checkbox",
                                        {
                                          staticClass: "pt-1",
                                          attrs: { size: "is-small" },
                                          model: {
                                            value: t.transparentBg,
                                            callback: function (e) {
                                              t.transparentBg = e;
                                            },
                                            expression: "transparentBg",
                                          },
                                        },
                                        [t._v(" Transparent background ")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                          "PDF" === t.downloadFileType ||
                          "PDF2" === t.downloadFileType
                            ? a(
                                "span",
                                { staticStyle: { float: "right" } },
                                [
                                  a(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        type: "is-light",
                                        multilined: "",
                                        position: "is-left",
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "content",
                                            fn: function () {
                                              return [
                                                t._v(
                                                  " Planning to print something? Turn on margins, bleed, rulers, and crop marks while designing to make sure everything prints as expected. "
                                                ),
                                              ];
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        3968719435
                                      ),
                                    },
                                    [
                                      "PDF2" === t.downloadFileType
                                        ? a(
                                            "b-checkbox",
                                            {
                                              staticClass: "pt-1 mr-3",
                                              attrs: { size: "is-small" },
                                              model: {
                                                value: t.cropMarksBleed,
                                                callback: function (e) {
                                                  t.cropMarksBleed = e;
                                                },
                                                expression: "cropMarksBleed",
                                              },
                                            },
                                            [t._v(" Crop marks and bleed ")]
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                  a(
                                    "b-tooltip",
                                    {
                                      attrs: {
                                        type: "is-light",
                                        multilined: "",
                                        position: "is-left",
                                      },
                                      scopedSlots: t._u(
                                        [
                                          {
                                            key: "content",
                                            fn: function () {
                                              return [
                                                t._v(
                                                  " Flattening your PDF converts your design with multiple layers into one. This ensures that all of your design’s elements get printed. "
                                                ),
                                              ];
                                            },
                                            proxy: !0,
                                          },
                                        ],
                                        null,
                                        !1,
                                        1049244550
                                      ),
                                    },
                                    [
                                      a(
                                        "b-checkbox",
                                        {
                                          staticClass: "pt-1",
                                          attrs: { size: "is-small" },
                                          model: {
                                            value: t.flattened,
                                            callback: function (e) {
                                              t.flattened = e;
                                            },
                                            expression: "flattened",
                                          },
                                        },
                                        [t._v(" Flatten PDF ")]
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              )
                            : t._e(),
                        ]),
                        a(
                          "b-field",
                          { staticClass: "pb-1" },
                          [
                            a(
                              "b-select",
                              {
                                attrs: {
                                  placeholder: "Select Download File Type",
                                  expanded: "",
                                },
                                model: {
                                  value: t.downloadFileType,
                                  callback: function (e) {
                                    t.downloadFileType = e;
                                  },
                                  expression: "downloadFileType",
                                },
                              },
                              [
                                a("option", { attrs: { value: "PDF" } }, [
                                  t._v("PDF Standard"),
                                ]),
                                a("option", { attrs: { value: "PDF2" } }, [
                                  t._v("PDF Print"),
                                ]),
                                a("option", { attrs: { value: "JPG" } }, [
                                  t._v("JPG"),
                                ]),
                                a("option", { attrs: { value: "PNG" } }, [
                                  t._v("PNG"),
                                ]),
                                a("option", { attrs: { value: "MP4" } }, [
                                  t._v("MP4"),
                                ]),
                                a("option", { attrs: { value: "GIF" } }, [
                                  t._v("GIF"),
                                ]),
                                a("option", { attrs: { value: "" } }, [
                                  t._v("Canva.com Default"),
                                ]),
                              ]
                            ),
                          ],
                          1
                        ),
                        a(
                          "b-field",
                          {
                            staticClass: "pb-2",
                            attrs: { label: "Download Folder Name" },
                          },
                          [
                            a("b-input", {
                              model: {
                                value: t.downloadFolder,
                                callback: function (e) {
                                  t.downloadFolder = e;
                                },
                                expression: "downloadFolder",
                              },
                            }),
                          ],
                          1
                        ),
                        a(
                          "b-button",
                          {
                            staticClass:
                              "button is-uppercase has-text-weight-semibold",
                            attrs: {
                              type: "is-primary",
                              "icon-left": "file-export",
                              expanded: "",
                              loading: t.workinProgress,
                            },
                            on: {
                              click: function (e) {
                                return t.handleStartWorking();
                              },
                            },
                          },
                          [t._v(" Automate Make ")]
                        ),
                        a(
                          "a",
                          {
                            staticClass:
                              "is-flex is-align-items-center is-justify-content-center is-size-7 mt-2",
                            on: {
                              click: function (e) {
                                return t.handleGotoVideoGuide();
                              },
                            },
                          },
                          [
                            a("b-icon", { attrs: { icon: "video" } }),
                            t._v("Tutorial Video (Guide) "),
                          ],
                          1
                        ),
                        a(
                          "div",
                          {
                            staticClass: "modal",
                            class: { "is-active": t.isShowProUpgradePop },
                          },
                          [
                            a("div", {
                              staticClass: "modal-background",
                              staticStyle: {
                                "background-color": "rgba(10, 10, 10, 0.4)",
                              },
                              on: {
                                click: function (e) {
                                  t.isShowProUpgradePop = !1;
                                },
                              },
                            }),
                            a("div", { staticClass: "modal-content px-2" }, [
                              a(
                                "div",
                                {
                                  staticClass: "card mx-6 pb-1",
                                  staticStyle: { "border-radius": "0.6rem" },
                                },
                                [
                                  a("div", { staticClass: "card-content" }, [
                                    a(
                                      "div",
                                      {
                                        staticClass:
                                          "content has-text-centered",
                                      },
                                      [
                                        a(
                                          "h3",
                                          {
                                            staticClass:
                                              "has-text-weight-semibold is-size-5 mb-4 is-flex is-justify-content-center is-align-items-center",
                                          },
                                          [
                                            a(
                                              "svg",
                                              {
                                                staticClass: "mr-2",
                                                attrs: {
                                                  xmlns:
                                                    "http://www.w3.org/2000/svg",
                                                  viewBox: "0 0 24 24",
                                                  width: "24",
                                                  height: "24",
                                                },
                                              },
                                              [
                                                a("path", {
                                                  attrs: {
                                                    fill: "none",
                                                    d: "M0 0h24v24H0z",
                                                  },
                                                }),
                                                a("path", {
                                                  attrs: {
                                                    d: "M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                                                    fill: "rgba(255,221,86,1)",
                                                  },
                                                }),
                                              ]
                                            ),
                                            t._v(" Upgrade Pro "),
                                          ]
                                        ),
                                        a("p", { staticClass: "mb-4" }, [
                                          t._v(
                                            " Your trial period has ended (" +
                                              t._s(t.usedCount) +
                                              " designs downloaded). Upgrade to the Pro version to download unlimited designs and unlock all features. "
                                          ),
                                        ]),
                                        a(
                                          "b-button",
                                          {
                                            staticClass:
                                              "has-text-weight-semibold btn-upgrade",
                                            attrs: {
                                              type: "is-primary",
                                              expanded: "",
                                            },
                                            on: {
                                              click: function (e) {
                                                return t.handleSwitchTab("pro");
                                              },
                                            },
                                          },
                                          [t._v("Upgrade Now")]
                                        ),
                                      ],
                                      1
                                    ),
                                  ]),
                                ]
                              ),
                            ]),
                          ]
                        ),
                      ],
                      1
                    ),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "faq" === t.tabType,
                            expression: "tabType === 'faq'",
                          },
                        ],
                        staticClass: "px-4 py-2",
                      },
                      [
                        t._l(t.collapses, function (e, s) {
                          return a(
                            "b-collapse",
                            {
                              key: s,
                              staticClass: "is-size-7",
                              attrs: {
                                animation: "slide",
                                open: t.isOpenFaq == s,
                              },
                              on: {
                                open: function (e) {
                                  t.isOpenFaq = s;
                                },
                                close: function (e) {
                                  t.isOpenFaq = -1;
                                },
                              },
                              scopedSlots: t._u(
                                [
                                  {
                                    key: "trigger",
                                    fn: function (s) {
                                      return [
                                        a(
                                          "div",
                                          {
                                            staticClass: "is-flex py-2",
                                            staticStyle: {
                                              "border-bottom":
                                                "1px solid #f1f1f1",
                                            },
                                            attrs: { role: "button" },
                                          },
                                          [
                                            a(
                                              "p",
                                              {
                                                staticClass:
                                                  "is-flex is-flex-grow-1 has-text-grey-dark is-align-items-center has-text-weight-semibold",
                                              },
                                              [
                                                a("b-icon", {
                                                  staticClass:
                                                    "has-text-grey-lighter",
                                                  attrs: {
                                                    icon: "question-circle",
                                                  },
                                                }),
                                                t._v(" " + t._s(e.title) + " "),
                                              ],
                                              1
                                            ),
                                            a(
                                              "a",
                                              {
                                                staticClass:
                                                  "is-flex is-justify-content-center is-align-items-center",
                                              },
                                              [
                                                a("b-icon", {
                                                  attrs: {
                                                    icon: s.open
                                                      ? "angle-down"
                                                      : "angle-up",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                          ]
                                        ),
                                      ];
                                    },
                                  },
                                ],
                                null,
                                !0
                              ),
                            },
                            [
                              0 === s
                                ? a(
                                    "div",
                                    { staticClass: "px-1 py-2 has-text-grey" },
                                    [
                                      a("p", [
                                        t._v(
                                          ' First open your design on canva.com and use #1#, #2#, #3#... ,Then prepare your data source csv file and click "Automate Make" to start creating and downloading automatically one by one. '
                                        ),
                                      ]),
                                    ]
                                  )
                                : 1 === s
                                ? a(
                                    "div",
                                    { staticClass: "px-1 py-2 has-text-grey" },
                                    [
                                      a("p", [
                                        t._v(
                                          " Countless variables can be marked on a design and they only need to appear in this format, i.e. #1#, #2#, #3# ... Of course, the csv file of the data source needs to have the corresponding data columns. "
                                        ),
                                      ]),
                                    ]
                                  )
                                : 2 === s
                                ? a(
                                    "div",
                                    { staticClass: "px-1 py-2 has-text-grey" },
                                    [
                                      a("p", [
                                        t._v(
                                          " Usually, this is because your computer is set to auto-sleep, or the task page is minimized or covered by another window, when the browser will limit the tasks running in the background to save energy and it will stop working. So please disable the computer sleep mode and keep the window always visible. "
                                        ),
                                      ]),
                                    ]
                                  )
                                : 3 === s
                                ? a(
                                    "div",
                                    { staticClass: "px-1 py-2 has-text-grey" },
                                    [
                                      a("p", [
                                        t._v(
                                          " Transparent backgrounds require canva.com's own feature support, so you must already be canva.com Pro (not referring to Automate Maker's Pro) to use it. "
                                        ),
                                      ]),
                                    ]
                                  )
                                : 4 === s
                                ? a(
                                    "div",
                                    { staticClass: "px-1 py-2 has-text-grey" },
                                    [
                                      a("p", [
                                        t._v(
                                          " Sorry to see you go. Can I ask why you’re choosing to cancel and if there’s anything I can do to keep you as a subscriber?"
                                        ),
                                        a("br"),
                                        a("br"),
                                        t._v(
                                          "You can simply unsubscribe through the CanvaAutomateMaker app. Alternatively, email us directly at hi@echobot.dev from the email address used to register an account.If you do decide to cancel, you will continue to have access to CanvaAutomateMaker until the end of your billing cycle. "
                                        ),
                                      ]),
                                    ]
                                  )
                                : t._e(),
                            ]
                          );
                        }),
                        a(
                          "div",
                          {
                            staticClass:
                              "box is-size-7 has-text-grey-light m-4 py-3 px-5",
                          },
                          [
                            a("p", { staticClass: "mb-2" }, [
                              t._v(
                                " Do you have an idea for making Canva Automate Maker better? We'd love to hear about it! "
                              ),
                            ]),
                            a(
                              "a",
                              {
                                staticClass:
                                  "is-flex is-align-items-center is-justify-content-center is-uppercase",
                                attrs: {
                                  href:
                                    "mailto:echobot.dev@gmail.com?subject=Canva Automate Maker(" +
                                    t.version +
                                    ") issue",
                                },
                              },
                              [
                                a("b-icon", {
                                  attrs: { icon: "envelope-open-text" },
                                }),
                                t._v("echobot.dev@gmail.com "),
                              ],
                              1
                            ),
                          ]
                        ),
                      ],
                      2
                    ),
                    a(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: "pro" === t.tabType,
                            expression: "tabType === 'pro'",
                          },
                        ],
                      },
                      [
                        "ok" === t.configs.status && t.subscription.userId
                          ? a("Pro", {
                              attrs: {
                                subscription: t.subscription,
                                configs: t.configs,
                              },
                            })
                          : t._e(),
                      ],
                      1
                    ),
                    t._m(1),
                  ]),
                ])
              : a(
                  "div",
                  { staticClass: "p-6 mx-6 my-4" },
                  [
                    a(
                      "div",
                      { staticClass: "is-flex is-justify-content-center" },
                      [
                        a(
                          "svg",
                          {
                            attrs: {
                              width: "60",
                              height: "60",
                              viewBox: "0 0 60 60",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                            },
                          },
                          [
                            a("g", { attrs: { "clip-path": "url(#clip0)" } }, [
                              a("path", {
                                attrs: {
                                  d: "M24.3625 54.3625C13.27 51.805 5 41.8675 5 30C5 16.1925 16.1925 5 30 5C43.8075 5 55 16.1925 55 30C55 41.8675 46.73 51.805 35.6375 54.3625L30 60L24.3625 54.3625V54.3625ZM17.53 45.6425C19.8595 47.5055 22.5783 48.8205 25.485 49.49L26.885 49.8125L30 52.93L33.1175 49.8125L34.5175 49.4875C37.614 48.7737 40.4944 47.3284 42.9175 45.2725C41.2895 43.6014 39.3429 42.2738 37.1929 41.3682C35.0428 40.4626 32.733 39.9973 30.4 40C25.31 40 20.725 42.175 17.53 45.6425V45.6425ZM14.04 42.05C16.1411 39.8202 18.6767 38.0443 21.4904 36.8318C24.304 35.6193 27.3362 34.9959 30.4 35C33.3541 34.9962 36.2799 35.5759 39.0094 36.706C41.7388 37.836 44.2182 39.4941 46.305 41.585C48.4452 38.5728 49.7091 35.0266 49.9564 31.3398C50.2038 27.653 49.4249 23.9697 47.7062 20.6986C45.9876 17.4276 43.3963 14.6966 40.2199 12.8086C37.0435 10.9207 33.4062 9.9496 29.7115 10.0031C26.0168 10.0567 22.4092 11.1327 19.2888 13.1119C16.1685 15.0911 13.6574 17.896 12.0342 21.2155C10.4111 24.535 9.73924 28.2393 10.0933 31.9174C10.4473 35.5955 11.8134 39.1036 14.04 42.0525V42.05ZM30 32.5C27.3478 32.5 24.8043 31.4464 22.9289 29.5711C21.0536 27.6957 20 25.1522 20 22.5C20 19.8478 21.0536 17.3043 22.9289 15.4289C24.8043 13.5536 27.3478 12.5 30 12.5C32.6522 12.5 35.1957 13.5536 37.0711 15.4289C38.9464 17.3043 40 19.8478 40 22.5C40 25.1522 38.9464 27.6957 37.0711 29.5711C35.1957 31.4464 32.6522 32.5 30 32.5ZM30 27.5C31.3261 27.5 32.5979 26.9732 33.5355 26.0355C34.4732 25.0979 35 23.8261 35 22.5C35 21.1739 34.4732 19.9022 33.5355 18.9645C32.5979 18.0268 31.3261 17.5 30 17.5C28.6739 17.5 27.4022 18.0268 26.4645 18.9645C25.5268 19.9022 25 21.1739 25 22.5C25 23.8261 25.5268 25.0979 26.4645 26.0355C27.4022 26.9732 28.6739 27.5 30 27.5Z",
                                  fill: "#DADADA",
                                },
                              }),
                            ]),
                            a("defs", [
                              a("clipPath", { attrs: { id: "clip0" } }, [
                                a("rect", {
                                  attrs: {
                                    width: "60",
                                    height: "60",
                                    fill: "white",
                                  },
                                }),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    ),
                    a(
                      "p",
                      {
                        staticClass:
                          "is-size-6 has-text-grey-light py-4 has-text-centered",
                      },
                      [t._v(" Please sign in to save your settings. ")]
                    ),
                    a(
                      "b-button",
                      {
                        staticClass: "mb-5 btn-g-login",
                        attrs: { expanded: "", loading: t.loginLoading },
                        on: { click: t.handleLogin },
                      },
                      [
                        a(
                          "span",
                          {
                            staticClass:
                              "is-flex is-justify-content-center is-align-items-center",
                          },
                          [
                            a(
                              "svg",
                              {
                                attrs: {
                                  width: "24",
                                  height: "24",
                                  viewBox: "0 0 24 24",
                                  fill: "none",
                                  xmlns: "http://www.w3.org/2000/svg",
                                },
                              },
                              [
                                a("path", {
                                  attrs: {
                                    d: "M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
                                    fill: "#FFC107",
                                  },
                                }),
                                a("path", {
                                  attrs: {
                                    d: "M3.15302 7.3455L6.43851 9.755C7.32751 7.554 9.48052 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15902 2 4.82802 4.1685 3.15302 7.3455Z",
                                    fill: "#FF3D00",
                                  },
                                }),
                                a("path", {
                                  attrs: {
                                    d: "M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.001 12 18C9.39897 18 7.19047 16.3415 6.35847 14.027L3.09747 16.5395C4.75247 19.778 8.11347 22 12 22Z",
                                    fill: "#4CAF50",
                                  },
                                }),
                                a("path", {
                                  attrs: {
                                    d: "M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z",
                                    fill: "#1976D2",
                                  },
                                }),
                              ]
                            ),
                            a("span", { staticClass: "is-size-6 pl-1" }, [
                              t._v("Sign In with Google"),
                            ]),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
          ]);
        }),
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "logo" }, [
            s("img", {
              attrs: {
                width: "100%",
                src: a("cf05"),
                alt: "Canva Automate Maker logo",
              },
            }),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "copy" }, [
            t._v(" © 2022 "),
            a(
              "a",
              {
                attrs: {
                  href: "https://canvaautomate.echobot.dev",
                  target: "_blank",
                },
              },
              [t._v("echobot.dev")]
            ),
          ]);
        },
      ],
      i = a("1da1"),
      o =
        (a("96cf"),
        a("d81d"),
        a("498a"),
        a("2ca0"),
        a("8a79"),
        a("d3b7"),
        a("ac1f"),
        a("466d"),
        a("b64b"),
        a("25f0"),
        a("99af"),
        a("b0c0"),
        a("159b"),
        a("caad"),
        a("2532"),
        a("5319"),
        a("9129"),
        a("a9e3"),
        a("fb6a"),
        a("9845")),
      c = a.n(o),
      l = a("369b"),
      u = a.n(l),
      p = a("5a0c"),
      d = a.n(p),
      h = a("bc3a"),
      g = a.n(h),
      f = a("3452"),
      b = a.n(f),
      m =
        (a("3ca3"),
        a("ddb0"),
        a("9861"),
        a("2b3d"),
        a("c1f9"),
        a("4c53"),
        a("00b4"),
        a("4333")),
      v = a.n(m),
      y = a("01ea");
    v.a.initialize(y["a"].PARSE_APPID, y["a"].PARSE_JSKEY),
      (v.a.serverURL = "".concat(y["a"].HOST_URL, "/parse"));
    var w = c.a.identity.getRedirectURL(),
      x = c.a.runtime.id,
      C = {
        bpijnbbibffaadmdjpddcofjgofheedf:
          "783073505404-eohtrgfk0ce67s4srvso1mfcgno36r9b.apps.googleusercontent.com",
        ilokhiadgdkfcgmfefcjpnpoihebldfp:
          "783073505404-vo126rmlvn8fokvvptofca5e88e20a7j.apps.googleusercontent.com",
      },
      k = "bpijnbbibffaadmdjpddcofjgofheedf" === x ? "chrome" : "edge",
      _ = new URLSearchParams({
        client_id: C[x],
        response_type: "token",
        redirect_uri: w,
        scope: "openid email",
      }),
      S = (function () {
        var t = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            var e,
              a = arguments;
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = !(a.length > 0 && void 0 !== a[0]) || a[0]),
                      t.abrupt(
                        "return",
                        new Promise(function (t, a) {
                          c.a.identity
                            .launchWebAuthFlow({
                              url: "https://accounts.google.com/o/oauth2/v2/auth?".concat(
                                _.toString()
                              ),
                              interactive: e,
                            })
                            .then(
                              function (e) {
                                if (c.a.runtime.lastError)
                                  a(c.a.runtime.lastError.message);
                                else {
                                  var s = new URL(e),
                                    n = new URLSearchParams(s.hash.slice(1)),
                                    r = Object.fromEntries(n.entries());
                                  t(r.access_token);
                                }
                              },
                              function (t) {
                                a("".concat(t));
                              }
                            );
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      P = (function () {
        var t = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            var e,
              a = arguments;
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = !(a.length > 0 && void 0 !== a[0]) || a[0]),
                      t.abrupt(
                        "return",
                        new Promise(function (t, a) {
                          c.a.identity.getAuthToken(
                            { interactive: e },
                            (function () {
                              var e = Object(i["a"])(
                                regeneratorRuntime.mark(function e(s) {
                                  return regeneratorRuntime.wrap(function (e) {
                                    while (1)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if (!c.a.runtime.lastError) {
                                            e.next = 3;
                                            break;
                                          }
                                          return (
                                            a(c.a.runtime.lastError.message),
                                            e.abrupt("return")
                                          );
                                        case 3:
                                          t(s);
                                        case 4:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              );
                              return function (t) {
                                return e.apply(this, arguments);
                              };
                            })()
                          );
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      T = (function () {
        var t = Object(i["a"])(
          regeneratorRuntime.mark(function t(e) {
            var a, s, n, r, i, o, l;
            return regeneratorRuntime.wrap(
              function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = {}),
                        (t.prev = 1),
                        (t.next = 4),
                        g.a.get(
                          "https://www.googleapis.com/oauth2/v3/userinfo?alt=json&access_token=".concat(
                            e
                          )
                        )
                      );
                    case 4:
                      (s = t.sent),
                        (n = s.data),
                        n.sub &&
                          (a = { gid: n.sub, email: n.email, access_token: e }),
                        (t.next = 12);
                      break;
                    case 9:
                      (t.prev = 9), (t.t0 = t["catch"](1)), console.log(t.t0);
                    case 12:
                      if (a.gid) {
                        t.next = 24;
                        break;
                      }
                      return (
                        (t.prev = 13),
                        (t.next = 16),
                        g.a.get(
                          "https://www.googleapis.com/oauth2/v2/userinfo?alt=json&access_token=".concat(
                            e
                          )
                        )
                      );
                    case 16:
                      (r = t.sent),
                        (i = r.data),
                        i.id &&
                          (a = { gid: i.id, email: i.email, access_token: e }),
                        (t.next = 24);
                      break;
                    case 21:
                      (t.prev = 21), (t.t1 = t["catch"](13)), console.log(t.t1);
                    case 24:
                      if (a.gid) {
                        t.next = 36;
                        break;
                      }
                      return (
                        (t.prev = 25),
                        (t.next = 28),
                        g.a.get(
                          "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=".concat(
                            e
                          )
                        )
                      );
                    case 28:
                      (o = t.sent),
                        (l = o.data),
                        l.id &&
                          (a = { gid: l.id, email: l.email, access_token: e }),
                        (t.next = 36);
                      break;
                    case 33:
                      (t.prev = 33), (t.t2 = t["catch"](25)), console.log(t.t2);
                    case 36:
                      if (a.access_token)
                        try {
                          c.a.storage.local.set({
                            googleAccessToken: a.access_token,
                          });
                        } catch (u) {
                          console.log(u);
                        }
                      return t.abrupt("return", a);
                    case 38:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [
                [1, 9],
                [13, 21],
                [25, 33],
              ]
            );
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })(),
      L = (function () {
        var t = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            var e,
              a,
              s,
              n,
              r = arguments;
            return regeneratorRuntime.wrap(
              function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (e = !(r.length > 0 && void 0 !== r[0]) || r[0]),
                        (a = {}),
                        (t.prev = 2),
                        (t.next = 5),
                        P(e)
                      );
                    case 5:
                      if (((s = t.sent), !s)) {
                        t.next = 10;
                        break;
                      }
                      return (t.next = 9), T(s);
                    case 9:
                      a = t.sent;
                    case 10:
                      t.next = 15;
                      break;
                    case 12:
                      (t.prev = 12),
                        (t.t0 = t["catch"](2)),
                        console.log("launchGetAuthToken", t.t0);
                    case 15:
                      if (a.gid) {
                        t.next = 29;
                        break;
                      }
                      return (t.prev = 16), (t.next = 19), S(e);
                    case 19:
                      if (((n = t.sent), !n)) {
                        t.next = 24;
                        break;
                      }
                      return (t.next = 23), T(n);
                    case 23:
                      a = t.sent;
                    case 24:
                      t.next = 29;
                      break;
                    case 26:
                      (t.prev = 26),
                        (t.t1 = t["catch"](16)),
                        console.log("launchWebAuthFlow", t.t1);
                    case 29:
                      return (
                        console.log("loginWithGoogle", a), t.abrupt("return", a)
                      );
                    case 31:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [
                [2, 12],
                [16, 26],
              ]
            );
          })
        );
        return function () {
          return t.apply(this, arguments);
        };
      })(),
      z = (function () {
        var t = Object(i["a"])(
          regeneratorRuntime.mark(function t(e) {
            var a;
            return regeneratorRuntime.wrap(
              function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0),
                        (a =
                          "https://accounts.google.com/o/oauth2/revoke?token=".concat(
                            e
                          )),
                        (t.next = 4),
                        g.a.get(a)
                      );
                    case 4:
                      return (
                        (t.prev = 4),
                        (t.next = 7),
                        c.a.identity.removeCachedAuthToken({ token: e })
                      );
                    case 7:
                      return t.finish(4);
                    case 8:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, , 4, 8]]
            );
          })
        );
        return function (e) {
          return t.apply(this, arguments);
        };
      })();
    function M(t) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = Object(i["a"])(
          regeneratorRuntime.mark(function t(e) {
            var a, s, n, r;
            return regeneratorRuntime.wrap(
              function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (a = e.username),
                        (s = e.id),
                        (n = {}),
                        (t.prev = 2),
                        (t.next = 5),
                        v.a.User.logIn(a, s, { usePost: !0 })
                      );
                    case 5:
                      (n = t.sent), (t.next = 11);
                      break;
                    case 8:
                      (t.prev = 8), (t.t0 = t["catch"](2)), console.log(t.t0);
                    case 11:
                      if (!n || !n.id) {
                        t.next = 13;
                        break;
                      }
                      return t.abrupt("return", n);
                    case 13:
                      return (
                        (t.prev = 13),
                        (r = new v.a.User()),
                        r.set("username", a),
                        r.set("password", s),
                        r.set("email", a),
                        r.set("browser", D() ? "edge" : "chrome"),
                        r.set("platform", k),
                        (t.next = 22),
                        r.signUp()
                      );
                    case 22:
                      if (((n = t.sent), !n || !n.id)) {
                        t.next = 25;
                        break;
                      }
                      return t.abrupt("return", n);
                    case 25:
                      t.next = 30;
                      break;
                    case 27:
                      (t.prev = 27), (t.t1 = t["catch"](13)), console.log(t.t1);
                    case 30:
                      return t.abrupt("return", null);
                    case 31:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [
                [2, 8],
                [13, 27],
              ]
            );
          })
        )),
        A.apply(this, arguments)
      );
    }
    function R() {
      return j.apply(this, arguments);
    }
    function j() {
      return (
        (j = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      "return",
                      new Promise(function (t, e) {
                        v.a.User.currentAsync().then(
                          (function () {
                            var e = Object(i["a"])(
                              regeneratorRuntime.mark(function e(a) {
                                var s;
                                return regeneratorRuntime.wrap(function (e) {
                                  while (1)
                                    switch ((e.prev = e.next)) {
                                      case 0:
                                        (s = {}),
                                          a &&
                                            (s = {
                                              id: a.id,
                                              username: a.get("username"),
                                              createdAt: a.get("createdAt"),
                                            }),
                                          t({ status: "ok", user: s });
                                      case 3:
                                      case "end":
                                        return e.stop();
                                    }
                                }, e);
                              })
                            );
                            return function (t) {
                              return e.apply(this, arguments);
                            };
                          })(),
                          function (t) {
                            e("".concat(t));
                          }
                        );
                      })
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        j.apply(this, arguments)
      );
    }
    var D = function () {
      return /Edg/.test(navigator.userAgent);
    };
    function F() {
      return U.apply(this, arguments);
    }
    function U() {
      return (
        (U = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            var e, a, s, n;
            return regeneratorRuntime.wrap(
              function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (t.prev = 0), (t.next = 3), L();
                    case 3:
                      if (
                        ((e = t.sent), (a = e.email), (s = e.gid), !a || !s)
                      ) {
                        t.next = 11;
                        break;
                      }
                      return (t.next = 9), M({ username: a, id: s });
                    case 9:
                      return (n = t.sent), t.abrupt("return", n);
                    case 11:
                      t.next = 16;
                      break;
                    case 13:
                      (t.prev = 13), (t.t0 = t["catch"](0)), console.log(t.t0);
                    case 16:
                      return t.abrupt("return", null);
                    case 17:
                    case "end":
                      return t.stop();
                  }
              },
              t,
              null,
              [[0, 13]]
            );
          })
        )),
        U.apply(this, arguments)
      );
    }
    function E() {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            var e,
              a = arguments;
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (e = !(a.length > 0 && void 0 !== a[0]) || a[0]),
                      t.abrupt(
                        "return",
                        new Promise(function (t, a) {
                          v.a.User.logOut().then(
                            Object(i["a"])(
                              regeneratorRuntime.mark(function a() {
                                var s, n;
                                return regeneratorRuntime.wrap(
                                  function (a) {
                                    while (1)
                                      switch ((a.prev = a.next)) {
                                        case 0:
                                          if (!e) {
                                            a.next = 12;
                                            break;
                                          }
                                          return (
                                            (a.prev = 1),
                                            (a.next = 4),
                                            c.a.storage.local.get([
                                              "googleAccessToken",
                                            ])
                                          );
                                        case 4:
                                          (s = a.sent),
                                            (n =
                                              (s && s.googleAccessToken) || ""),
                                            n &&
                                              (z(n),
                                              c.a.storage.local.remove(n)),
                                            (a.next = 12);
                                          break;
                                        case 9:
                                          (a.prev = 9),
                                            (a.t0 = a["catch"](1)),
                                            console.log(a.t0);
                                        case 12:
                                          t({ status: "ok" });
                                        case 13:
                                        case "end":
                                          return a.stop();
                                      }
                                  },
                                  a,
                                  null,
                                  [[1, 9]]
                                );
                              })
                            ),
                            function (t) {
                              a("".concat(t));
                            }
                          );
                        })
                      )
                    );
                  case 2:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        O.apply(this, arguments)
      );
    }
    function I() {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      "return",
                      new Promise(function (t, e) {
                        v.a.Cloud.run("u").then(
                          function (e) {
                            t(e);
                          },
                          function (t) {
                            e(t);
                          }
                        );
                      })
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        B.apply(this, arguments)
      );
    }
    function q() {
      return H.apply(this, arguments);
    }
    function H() {
      return (
        (H = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      "return",
                      new Promise(function (t, e) {
                        v.a.Cloud.run("getUseCount").then(
                          function (e) {
                            t(e);
                          },
                          function (t) {
                            e("".concat(t));
                          }
                        );
                      })
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        H.apply(this, arguments)
      );
    }
    function N() {
      return V.apply(this, arguments);
    }
    function V() {
      return (
        (V = Object(i["a"])(
          regeneratorRuntime.mark(function t() {
            return regeneratorRuntime.wrap(function (t) {
              while (1)
                switch ((t.prev = t.next)) {
                  case 0:
                    return t.abrupt(
                      "return",
                      new Promise(function (t, e) {
                        v.a.Cloud.run("c").then(
                          function (e) {
                            t(e);
                          },
                          function (t) {
                            e("".concat(t));
                          }
                        );
                      })
                    );
                  case 1:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        V.apply(this, arguments)
      );
    }
    function G(t, e) {
      var a = "\ufeff",
        s = document.createElement("a");
      s.setAttribute(
        "href",
        "data:text/csv; charset=utf-8," +
          encodeURIComponent("".concat(a).concat(e))
      ),
        s.setAttribute("download", t),
        (s.style.display = "none"),
        document.body.appendChild(s),
        s.click(),
        document.body.removeChild(s);
    }
    var K = function () {
        var t = this,
          e = t.$createElement,
          s = t._self._c || e;
        return s(
          "div",
          { staticClass: "pt-1" },
          [
            s("div", { staticClass: "px-5" }, [
              s(
                "table",
                {
                  staticClass:
                    "features-table table is-fullwidth is-size-7 mb-1",
                },
                [
                  s("thead", [
                    s("tr", [
                      s("th"),
                      s("th", [t._v("Free Trial")]),
                      s("th", [
                        s(
                          "span",
                          { staticClass: "is-flex is-align-items-center" },
                          [
                            s(
                              "svg",
                              {
                                staticClass: "mr-1",
                                attrs: {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  viewBox: "0 0 24 24",
                                  width: "18",
                                  height: "18",
                                },
                              },
                              [
                                s("path", {
                                  attrs: { fill: "none", d: "M0 0h24v24H0z" },
                                }),
                                s("path", {
                                  attrs: {
                                    d: "M2.8 5.2L7 8l4.186-5.86a1 1 0 0 1 1.628 0L17 8l4.2-2.8a1 1 0 0 1 1.547.95l-1.643 13.967a1 1 0 0 1-.993.883H3.889a1 1 0 0 1-.993-.883L1.253 6.149A1 1 0 0 1 2.8 5.2zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
                                    fill: "#ff8e57",
                                  },
                                }),
                              ]
                            ),
                            t._v(" Pro"),
                          ]
                        ),
                      ]),
                    ]),
                  ]),
                  s("tbody", [
                    s("tr", [
                      s("td", { staticClass: "has-text-weight-semibold" }, [
                        t._v(" Number of automated designs "),
                      ]),
                      s("td", { staticClass: "has-text-weight-bold" }, [
                        t._v(
                          " " +
                            t._s((t.configs && t.configs.trialCount) || 10) +
                            " "
                        ),
                      ]),
                      s(
                        "td",
                        {
                          staticClass: "has-text-mygreen has-text-weight-bold",
                        },
                        [t._v("Unlimited")]
                      ),
                    ]),
                    s("tr", [
                      s("td", { staticClass: "has-text-weight-semibold" }, [
                        t._v("Automated Make & Download"),
                      ]),
                      s(
                        "td",
                        [
                          s("b-icon", {
                            staticClass: "has-text-mygreen",
                            attrs: { icon: "check-circle", size: "is-small" },
                          }),
                        ],
                        1
                      ),
                      s(
                        "td",
                        [
                          s("b-icon", {
                            staticClass: "has-text-mygreen",
                            attrs: { icon: "check-circle", size: "is-small" },
                          }),
                        ],
                        1
                      ),
                    ]),
                    s("tr", [
                      s("td", { staticClass: "has-text-weight-semibold" }, [
                        t._v("Multiple variable markers"),
                      ]),
                      s(
                        "td",
                        [
                          s("b-icon", {
                            staticClass: "has-text-mygreen",
                            attrs: { icon: "check-circle", size: "is-small" },
                          }),
                        ],
                        1
                      ),
                      s(
                        "td",
                        [
                          s("b-icon", {
                            staticClass: "has-text-mygreen",
                            attrs: { icon: "check-circle", size: "is-small" },
                          }),
                        ],
                        1
                      ),
                    ]),
                    s("tr", [
                      s("td", { staticClass: "has-text-weight-semibold" }, [
                        t._v("Support multi-page design"),
                      ]),
                      s(
                        "td",
                        [
                          s("b-icon", {
                            staticClass: "has-text-mygreen",
                            attrs: { icon: "check-circle", size: "is-small" },
                          }),
                        ],
                        1
                      ),
                      s(
                        "td",
                        [
                          s("b-icon", {
                            staticClass: "has-text-mygreen",
                            attrs: { icon: "check-circle", size: "is-small" },
                          }),
                        ],
                        1
                      ),
                    ]),
                    s("tr", [
                      s("td", { staticClass: "has-text-weight-semibold" }, [
                        t._v("Continued free updates"),
                      ]),
                      s(
                        "td",
                        [
                          s("b-icon", {
                            staticClass: "has-text-mygreen",
                            attrs: { icon: "check-circle", size: "is-small" },
                          }),
                        ],
                        1
                      ),
                      s(
                        "td",
                        [
                          s("b-icon", {
                            staticClass: "has-text-mygreen",
                            attrs: { icon: "check-circle", size: "is-small" },
                          }),
                        ],
                        1
                      ),
                    ]),
                  ]),
                ]
              ),
            ]),
            !t.subscription.subscriptionId ||
            t.repay ||
            (!t.subscription.isPro &&
              (t.subscription.isPro ||
                t.subscription.isCanceled ||
                t.subscription.chargeStatus))
              ? [
                  t.configs.offerText
                    ? s(
                        "div",
                        {
                          staticClass:
                            "mx-5 mb-3 is-size-7 is-flex is-justify-content-center is-align-items-center has-text-mygreen",
                          staticStyle: {
                            "border-radius": "5px",
                            height: "30px",
                            "font-weight": "700",
                            border: "1px solid #b2dbc7",
                            "background-color": "#f8fffb",
                          },
                        },
                        [
                          s("img", {
                            staticStyle: { "margin-right": "5px" },
                            attrs: {
                              src: a("b3a1"),
                              width: "18",
                              height: "18",
                              alt: "party popper",
                            },
                          }),
                          s("span", {
                            domProps: { innerHTML: t._s(t.configs.offerText) },
                          }),
                          t.configs.offerDate
                            ? s("span", { staticClass: "ml-2 is-uppercase" }, [
                                t._v("(" + t._s(t.configs.offerDate) + ")"),
                              ])
                            : t._e(),
                        ]
                      )
                    : t._e(),
                  s(
                    "ul",
                    { staticClass: "price-list is-flex" },
                    t._l(t.plans, function (e) {
                      return s("li", { key: e.objectId }, [
                        s(
                          "div",
                          {
                            staticClass: "card",
                            class: { recommended: e.isRecommended },
                          },
                          [
                            s(
                              "div",
                              { staticClass: "card-content" },
                              [
                                s(
                                  "h2",
                                  {
                                    staticClass:
                                      "is-size-7 has-text-weight-semibold mb-1",
                                  },
                                  [t._v(" " + t._s(e.planName) + " ")]
                                ),
                                s("p", { staticClass: "has-text-centered" }, [
                                  s(
                                    "span",
                                    { staticClass: "has-text-grey is-size-7" },
                                    [
                                      s(
                                        "span",
                                        {
                                          staticClass: "is-size-6",
                                          staticStyle: {
                                            "text-decoration": "line-through",
                                          },
                                        },
                                        [t._v("$" + t._s(e.originalPrice))]
                                      ),
                                      t._v(
                                        "/" +
                                          t._s(
                                            1 === e.intervalMonth
                                              ? "monthly"
                                              : 12 === e.intervalMonth
                                              ? "yearly"
                                              : "quarterly"
                                          )
                                      ),
                                    ]
                                  ),
                                ]),
                                s(
                                  "div",
                                  {
                                    staticClass:
                                      "has-text-black is-size-4 has-text-centered",
                                  },
                                  [
                                    s(
                                      "span",
                                      {
                                        staticClass:
                                          "is-size-7 has-text-grey-light",
                                        staticStyle: { "margin-right": "2px" },
                                      },
                                      [t._v("$")]
                                    ),
                                    e.monthlyPriceArr.length > 1
                                      ? s("span", [
                                          t._v(t._s(e.monthlyPriceArr[0])),
                                          s(
                                            "span",
                                            {
                                              staticClass:
                                                "is-size-6 has-text-grey",
                                            },
                                            [
                                              t._v(
                                                "." + t._s(e.monthlyPriceArr[1])
                                              ),
                                            ]
                                          ),
                                        ])
                                      : s("span", [t._v(t._s(e.monthlyPrice))]),
                                    s("span", { staticClass: "is-size-7" }, [
                                      t._v("/mo"),
                                    ]),
                                  ]
                                ),
                                e.isRecommended
                                  ? s(
                                      "b-tag",
                                      {
                                        staticClass: "has-text-weight-semibold",
                                        staticStyle: {
                                          position: "absolute",
                                          top: "-0.6rem",
                                          right: "0.2rem",
                                          "background-color": "#ffe9b6",
                                          color: "#bb5858",
                                          "font-size": "0.7rem",
                                        },
                                        attrs: { rounded: "" },
                                      },
                                      [t._v("Most Popular")]
                                    )
                                  : t._e(),
                                e.intervalMonth > 1
                                  ? s(
                                      "p",
                                      {
                                        staticClass:
                                          "has-text-centered has-text-grey mb-2",
                                        staticStyle: { "font-size": "11px" },
                                      },
                                      [
                                        t._v(
                                          " $" +
                                            t._s(e.price) +
                                            " billed " +
                                            t._s(
                                              12 === e.intervalMonth
                                                ? "12 months"
                                                : "3 months"
                                            ) +
                                            " "
                                        ),
                                      ]
                                    )
                                  : s(
                                      "p",
                                      {
                                        staticClass:
                                          "has-text-centered has-text-grey mb-2",
                                        staticStyle: { "font-size": "11px" },
                                      },
                                      [
                                        t._v(
                                          " $" +
                                            t._s(e.price) +
                                            " billed 1 month "
                                        ),
                                      ]
                                    ),
                                s(
                                  "a",
                                  {
                                    staticClass:
                                      "button is-primary is-fullwidth has-text-weight-semibold btn-pay",
                                    on: {
                                      click: function (a) {
                                        return t.handleSubscribe(e);
                                      },
                                    },
                                  },
                                  [
                                    s("span", [
                                      t._v(t._s(t.configs.buyButtonText)),
                                    ]),
                                  ]
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ]);
                    }),
                    0
                  ),
                  s(
                    "p",
                    {
                      staticClass: "has-text-grey px-5 mt-2",
                      staticStyle: { "font-size": "11px" },
                    },
                    [
                      s("b-icon", {
                        attrs: { icon: "lock", size: "is-small" },
                      }),
                      t._v(" We use "),
                      s("span", { staticClass: "has-text-weight-bold" }, [
                        t._v("Paddle™️"),
                      ]),
                      t._v(" or "),
                      s("span", { staticClass: "has-text-weight-bold" }, [
                        t._v("Paypal™️"),
                      ]),
                      t._v(
                        " to process purchases and do not keep your card details on our servers. "
                      ),
                    ],
                    1
                  ),
                  t._m(3),
                ]
              : s("div", { staticClass: "pt-4 px-5" }, [
                  s("table", { staticClass: "table is-fullwidth is-size-7" }, [
                    s(
                      "tbody",
                      [
                        s("tr", [
                          s(
                            "td",
                            {
                              staticClass: "has-text-weight-semibold",
                              staticStyle: { width: "130px" },
                            },
                            [t._v(" Current Plan ")]
                          ),
                          s("td", [
                            s("span", { staticClass: "tag-pro" }, [
                              s(
                                "svg",
                                {
                                  attrs: {
                                    width: "12",
                                    height: "12",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                  },
                                },
                                [
                                  s("path", {
                                    attrs: {
                                      d: "M1.4 2.6L3.5 4L5.593 1.07C5.63925 1.00519 5.70032 0.952356 5.77111 0.915904C5.8419 0.879453 5.92038 0.860435 6 0.860435C6.07963 0.860435 6.1581 0.879453 6.22889 0.915904C6.29969 0.952356 6.36075 1.00519 6.407 1.07L8.5 4L10.6 2.6C10.6795 2.54713 10.7724 2.51811 10.8679 2.51637C10.9633 2.51464 11.0573 2.54026 11.1386 2.59021C11.22 2.64017 11.2853 2.71236 11.3269 2.79827C11.3686 2.88418 11.3847 2.9802 11.3735 3.075L10.552 10.0585C10.5377 10.1801 10.4792 10.2923 10.3877 10.3736C10.2962 10.455 10.178 10.5 10.0555 10.5H1.9445C1.82203 10.5 1.70383 10.455 1.61231 10.3736C1.5208 10.2923 1.46233 10.1801 1.448 10.0585L0.6265 3.0745C0.6154 2.97975 0.631643 2.88379 0.67331 2.79796C0.714978 2.71214 0.780331 2.64002 0.861655 2.59013C0.94298 2.54025 1.03688 2.51467 1.13227 2.51642C1.22766 2.51816 1.32056 2.54717 1.4 2.6ZM6 7.5C6.26522 7.5 6.51957 7.39465 6.70711 7.20711C6.89464 7.01957 7 6.76522 7 6.5C7 6.23479 6.89464 5.98043 6.70711 5.7929C6.51957 5.60536 6.26522 5.5 6 5.5C5.73478 5.5 5.48043 5.60536 5.29289 5.7929C5.10536 5.98043 5 6.23479 5 6.5C5 6.76522 5.10536 7.01957 5.29289 7.20711C5.48043 7.39465 5.73478 7.5 6 7.5Z",
                                      fill: "currentColor",
                                    },
                                  }),
                                ]
                              ),
                              t._v(" PRO "),
                            ]),
                          ]),
                        ]),
                        s("tr", [
                          s("td", { staticClass: "has-text-weight-semibold" }, [
                            t._v("Email"),
                          ]),
                          s("td", [
                            t._v(" " + t._s(t.subscription.email) + " "),
                          ]),
                        ]),
                        t.subscription.isPro && t.subscription.isCanceled
                          ? [
                              t._m(0),
                              s("tr", [
                                s(
                                  "td",
                                  {
                                    staticStyle: {
                                      padding: "14px 0 0 0",
                                      "border-bottom": "none",
                                    },
                                    attrs: { colspan: "2" },
                                  },
                                  [
                                    s(
                                      "div",
                                      {
                                        staticClass:
                                          "desc is-flex is-align-items-center",
                                      },
                                      [
                                        s(
                                          "div",
                                          {
                                            staticClass:
                                              "left-icon left-icon is-flex is-justify-content-center is-align-items-center",
                                          },
                                          [
                                            s("b-icon", {
                                              staticClass: "has-text-primary",
                                              attrs: {
                                                icon: "exclamation-circle",
                                                size: "is-large",
                                              },
                                            }),
                                          ],
                                          1
                                        ),
                                        s(
                                          "div",
                                          { staticClass: "is-flex-grow-1" },
                                          [
                                            s(
                                              "div",
                                              {
                                                staticClass: "has-text-primary",
                                              },
                                              [t._v("You have unsubscribed.")]
                                            ),
                                            t._v(
                                              " Pro account can be used until the end of the current billing cycle. (" +
                                                t._s(
                                                  t.toFormatDate(
                                                    t.subscription
                                                      .cancelEffectiveAt
                                                  )
                                                ) +
                                                ") "
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]
                                ),
                              ]),
                              s("tr", [
                                s(
                                  "td",
                                  { attrs: { colspan: "2" } },
                                  [
                                    s(
                                      "b-button",
                                      {
                                        staticClass:
                                          "mt-2 has-text-weight-semibold",
                                        attrs: {
                                          size: "is-small",
                                          type: "is-primary",
                                        },
                                        on: {
                                          click: function (e) {
                                            t.repay = !0;
                                          },
                                        },
                                      },
                                      [t._v("Upgrade to Pro now >>")]
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                            ]
                          : [
                              t.subscription.chargeStatus
                                ? s("tr", [
                                    s(
                                      "td",
                                      {
                                        staticClass: "has-text-weight-semibold",
                                      },
                                      [t._v("Status")]
                                    ),
                                    t._m(1),
                                  ])
                                : t._e(),
                              t.subscription.chargeStatus
                                ? s("tr", [
                                    s(
                                      "td",
                                      {
                                        staticClass: "has-text-weight-semibold",
                                      },
                                      [t._v("Next Payment")]
                                    ),
                                    s("td", [
                                      t._v(
                                        t._s(
                                          t.toFormatDate(
                                            t.subscription.nextBillAt
                                          )
                                        )
                                      ),
                                    ]),
                                  ])
                                : s("tr", [
                                    s(
                                      "td",
                                      {
                                        staticClass: "has-text-weight-semibold",
                                      },
                                      [t._v("Status")]
                                    ),
                                    t._m(2),
                                  ]),
                              !t.subscription.chargeStatus &&
                              t.subscription.nextRetryAt &&
                              t.isGreaterCurrentDate(t.subscription.nextRetryAt)
                                ? s("tr", [
                                    s(
                                      "td",
                                      {
                                        staticClass: "has-text-weight-semibold",
                                      },
                                      [t._v("Next Retry")]
                                    ),
                                    s("td", [
                                      t._v(
                                        t._s(
                                          t.toFormatDate(
                                            t.subscription.nextRetryAt
                                          )
                                        )
                                      ),
                                    ]),
                                  ])
                                : t._e(),
                              t.subscription.chargeStatus
                                ? t._e()
                                : s("tr", [
                                    s(
                                      "td",
                                      {
                                        staticStyle: {
                                          padding: "14px 0 0 0",
                                          "border-bottom": "none",
                                        },
                                        attrs: { colspan: "2" },
                                      },
                                      [
                                        s(
                                          "div",
                                          {
                                            staticClass:
                                              "desc is-flex is-align-items-center",
                                          },
                                          [
                                            s(
                                              "div",
                                              {
                                                staticClass:
                                                  "left-icon left-icon is-flex is-justify-content-center is-align-items-center",
                                              },
                                              [
                                                s("b-icon", {
                                                  staticClass:
                                                    "has-text-primary",
                                                  attrs: {
                                                    icon: "exclamation-circle",
                                                    size: "is-large",
                                                  },
                                                }),
                                              ],
                                              1
                                            ),
                                            s(
                                              "div",
                                              { staticClass: "is-flex-grow-1" },
                                              [
                                                s(
                                                  "div",
                                                  {
                                                    staticClass:
                                                      "has-text-primary",
                                                  },
                                                  [
                                                    t._v(
                                                      " Account subscription is overdue " +
                                                        t._s(
                                                          t.toFormatDate(
                                                            t.subscription
                                                              .chargeAt
                                                          )
                                                        ) +
                                                        " "
                                                    ),
                                                  ]
                                                ),
                                                t._v(
                                                  " Account suspended due to the failed payment. Please update the payment method to resume the subscription. "
                                                ),
                                              ]
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                                  ]),
                              s("tr", [
                                s(
                                  "td",
                                  [
                                    s(
                                      "b-button",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          size: "is-small",
                                          type: "is-primary",
                                          outlined: "",
                                        },
                                        on: { click: t.handleCancel },
                                      },
                                      [t._v("Unsubscribe")]
                                    ),
                                  ],
                                  1
                                ),
                                s(
                                  "td",
                                  [
                                    s(
                                      "b-button",
                                      {
                                        staticClass: "mt-2",
                                        attrs: {
                                          type: "is-success",
                                          size: "is-small",
                                          outlined: "",
                                        },
                                        on: { click: t.handleUpdate },
                                      },
                                      [t._v("Update Billing Info")]
                                    ),
                                  ],
                                  1
                                ),
                              ]),
                            ],
                      ],
                      2
                    ),
                  ]),
                ]),
            s("b-loading", {
              attrs: { "can-cancel": !0 },
              model: {
                value: t.isLoading,
                callback: function (e) {
                  t.isLoading = e;
                },
                expression: "isLoading",
              },
            }),
          ],
          2
        );
      },
      Y = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("tr", [
            a("td", { staticClass: "has-text-weight-semibold" }, [
              t._v("Status"),
            ]),
            a("td", [
              a("span", { staticClass: "label-status status-danger" }, [
                t._v("Cancelled"),
              ]),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("td", [
            a("span", { staticClass: "label-status" }, [t._v("Active")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("td", [
            a("span", { staticClass: "label-status status-warning" }, [
              t._v("Past Due"),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s("div", { staticClass: "has-text-centered" }, [
            s("img", {
              staticClass: "m-auto",
              attrs: { src: a("84d6"), width: "260", alt: "safe pay" },
            }),
          ]);
        },
      ],
      Z =
        (a("1276"),
        {
          data: function () {
            return { version: "", plans: [], repay: !1 };
          },
          props: {
            subscription: {
              type: Object,
              default: function () {
                return {};
              },
            },
            configs: {
              type: Object,
              default: function () {
                return {};
              },
            },
          },
          computed: {
            isLoading: function () {
              return !this.subscription.userId || 0 === this.plans.length;
            },
          },
          created: function () {
            this.initData();
          },
          methods: {
            initData: function () {
              var t = this;
              return Object(i["a"])(
                regeneratorRuntime.mark(function e() {
                  var a, s, n;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (a = t.configs.plans),
                            (t.plans = a.map(function (t) {
                              return (
                                (t.monthlyPriceArr = t.monthlyPrice
                                  .toString()
                                  .split(".")),
                                t
                              );
                            })),
                            (s = c.a.runtime.getManifest()),
                            (n = s.version),
                            (t.version = "v".concat(n));
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            handleSubscribe: function (t) {
              c.a.tabs.create({
                url: ""
                  .concat(this.$config.PAY_HOST_URL, "/checkout?plan=")
                  .concat(t.id, "&product=")
                  .concat(t.product, "&uid=")
                  .concat(this.subscription.userId, "&app=canvaautomate&v=")
                  .concat(this.version, "&email=")
                  .concat(encodeURIComponent(this.subscription.email)),
              });
            },
            handleCancel: function () {
              var t = this;
              this.$buefy.dialog.prompt({
                message:
                  '🥺Are you sure? Sorry to see you go. Can I ask why you’re choosing to cancel and if there’s anything I can do to keep you as a subscriber? <a href="mailto:echobot.dev@gmail.com?subject=Canva Automate Maker(' +
                  this.version +
                  ') issue" target="_blank">echobot.dev@gmail.com</a><br /><br />Please enter your email below to confirm the action.<br /><span style="color: #999; user-select: none; font-style: italic;">📧 ' +
                  this.subscription.email +
                  "</span>",
                inputAttrs: { placeholder: "" },
                trapFocus: !0,
                cancelText: "Keep Pro Plan",
                confirmText: "Unsubscribe",
                onConfirm: function (e) {
                  t.subscription.email === e.trim()
                    ? c.a.tabs.create({ url: t.subscription.cancelUrl })
                    : t.$buefy.snackbar.open({
                        message:
                          "The email you entered does not match the email used to make the purchase.",
                        type: "is-danger",
                        position: "is-bottom-right",
                        queue: !1,
                        duration: 3e3,
                      });
                },
              });
            },
            handleUpdate: function () {
              c.a.tabs.create({ url: this.subscription.updateUrl });
            },
            toFormatDate: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "MMM DD, YYYY";
              return d()(t).format(e);
            },
            isGreaterCurrentDate: function (t) {
              return d()() <= d()(t);
            },
          },
        }),
      J = Z,
      W = (a("598b"), a("2877")),
      X = Object(W["a"])(J, K, Y, !1, null, "79ded02a", null),
      Q = X.exports,
      $ = {
        name: "App",
        data: function () {
          return {
            variantMarkers: [],
            downloadFileType: "PDF",
            downloadFolder: "canva_automate_".concat(
              d()().format("MMDDHHmmss")
            ),
            transparentBg: !1,
            cropMarksBleed: !1,
            flattened: !1,
            tabType: "index",
            user: {},
            isOpenFaq: -1,
            collapses: [
              { title: "How to get started?" },
              { title: "How many variables can be marked at most?" },
              { title: "Why it gets stuck and how to prevent it?" },
              { title: "Generate PNG to support transparent background?" },
              { title: "How to cancel my subscription?" },
            ],
            subscription: {},
            version: "",
            loginLoading: !1,
            isShowProUpgradePop: !1,
            csvFile: null,
            csvList: [],
            usedCount: 0,
            trialCount: 10,
            isCanvaTab: !0,
            markerLoading: !0,
            workinProgress: !1,
            configs: {},
            taskDoing: !1,
            task: "",
            skipRowNumber: 0,
          };
        },
        watch: {
          csvFile: function (t) {
            var e = this;
            if (!t) return (this.csvFile = null), void (this.csvList = []);
            this.readerCsv(t)
              .then(function (t) {
                if (
                  (console.log(t),
                  (e.csvList = []),
                  !t || (t && 0 === t.length))
                )
                  return (
                    (e.csvFile = null),
                    void e.$buefy.snackbar.open({
                      message:
                        "Please upload a valid CSV file. (Refer to the sample CSV file)",
                      type: "is-warning",
                      position: "is-top",
                      queue: !1,
                    })
                  );
                t = t.map(function (t) {
                  for (var e in t) {
                    var a = e.toLowerCase().trim();
                    a !== e && ((t[a] = t[e]), delete t[e]);
                  }
                  for (var s in t)
                    (s.startsWith("#") && s.endsWith("#")) || delete t[s];
                  return t;
                });
                var a = function (t) {
                  var e = t.every(function (t) {
                    var e = t["#filename#"] || "";
                    if (!e.match(/[\/\\:*?"<>|]/)) return !0;
                  });
                  return e;
                };
                if (!a(t))
                  return (
                    (e.csvFile = null),
                    void e.$buefy.dialog.alert({
                      message:
                        'The "#filename#" column cannot contain special characters ( / \\ : * ? " < > | ).',
                    })
                  );
                e.csvList = t;
              })
              .catch(function (t) {
                console.log(t),
                  (e.csvFile = null),
                  e.$buefy.snackbar.open({
                    message:
                      "Please upload a valid CSV file.  (Refer to the sample CSV file)",
                    type: "is-warning",
                    position: "is-top",
                    queue: !1,
                  });
              }),
              console.log(t);
          },
        },
        created: function () {
          var t = this,
            e = c.a.runtime.getManifest(),
            a = e.version;
          (this.version = "v".concat(a)),
            this.initData(),
            c.a.storage.onChanged.addListener(
              (function () {
                var e = Object(i["a"])(
                  regeneratorRuntime.mark(function e(a) {
                    var s, n, r, i, o;
                    return regeneratorRuntime.wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            (s = Object.keys(a)), (n = 0), (r = s);
                          case 2:
                            if (!(n < r.length)) {
                              e.next = 11;
                              break;
                            }
                            if (
                              ((i = r[n]),
                              "webAuthData" !== i ||
                                !a[i].newValue ||
                                a[i].oldValue)
                            ) {
                              e.next = 8;
                              break;
                            }
                            if (((o = a[i].newValue), o && o.id))
                              try {
                                M({ username: o.email, id: o.id }).then(
                                  function () {
                                    t.initData(),
                                      g.a.get(
                                        "https://server.echobot.dev/auth/logout"
                                      ),
                                      c.a.storage.local.remove("webAuthData");
                                  }
                                );
                              } catch (l) {
                                console.log(l);
                              }
                            return e.abrupt("break", 11);
                          case 8:
                            n++, (e.next = 2);
                            break;
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })()
            );
        },
        methods: {
          getOptConfigs: function () {
            var t = this;
            return Object(i["a"])(
              regeneratorRuntime.mark(function e() {
                var a, s, n, r, i;
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (a = {}), (e.prev = 1), (e.next = 4), N();
                        case 4:
                          (s = e.sent),
                            "ok" === s.status &&
                              (s.key
                                ? ((n = s.key),
                                  (r = s.value),
                                  (i = b.a.AES.decrypt(
                                    r,
                                    b.a.enc.Utf8.parse(t.$config.ENCRYPT_KEY),
                                    {
                                      iv: b.a.enc.Hex.parse(n),
                                      mode: b.a.mode.CBC,
                                      format: b.a.format.Hex,
                                    }
                                  ).toString(b.a.enc.Utf8)),
                                  (a = JSON.parse(i)))
                                : (a = s)),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e["catch"](1)),
                            console.log(e.t0);
                        case 11:
                          return e.abrupt("return", a);
                        case 12:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            )();
          },
          getVariantMarker: function (t) {
            var e = this;
            return Object(i["a"])(
              regeneratorRuntime.mark(function a() {
                var s, n, r, i;
                return regeneratorRuntime.wrap(
                  function (a) {
                    while (1)
                      switch ((a.prev = a.next)) {
                        case 0:
                          (e.markerLoading = !0), (s = {}), (n = ""), (r = "");
                          try {
                            (i = localStorage.getItem(
                              "Parse/".concat(
                                e.$config.PARSE_APPID,
                                "/currentUser"
                              )
                            )),
                              i && ((i = JSON.parse(i)), (n = i.sessionToken)),
                              (r = localStorage.getItem(
                                "Parse/".concat(
                                  e.$config.PARSE_APPID,
                                  "/installationId"
                                )
                              ));
                          } catch (o) {
                            console.log(o);
                          }
                          return (
                            (a.prev = 5),
                            (a.next = 8),
                            c.a.tabs.sendMessage(t, {
                              type: "GET_VARIANT_MARKER",
                              data: {
                                configs: e.configs,
                                subscription: e.subscription,
                                user: e.user,
                                trialCount: e.trialCount,
                                usedCount: e.usedCount,
                                version: e.version,
                                _InstallationId: r,
                                _SessionToken: n,
                              },
                            })
                          );
                        case 8:
                          (s = a.sent), console.log(s), (a.next = 16);
                          break;
                        case 12:
                          return (
                            (a.prev = 12),
                            (a.t0 = a["catch"](5)),
                            console.log(a.t0),
                            a.abrupt("return", { status: !1, msg: a.t0 })
                          );
                        case 16:
                          if (!s.taskDoing) {
                            a.next = 18;
                            break;
                          }
                          return a.abrupt("return", {
                            status: !1,
                            taskDoing: !0,
                            msg: "task running",
                          });
                        case 18:
                          if (!s.unDoDisabled) {
                            a.next = 20;
                            break;
                          }
                          return a.abrupt("return", {
                            status: !0,
                            data: s.varList,
                          });
                        case 20:
                          return a.abrupt("return", {
                            status: !1,
                            msg: "undo available",
                          });
                        case 21:
                        case "end":
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[5, 12]]
                );
              })
            )();
          },
          initData: function () {
            var t = this;
            return Object(i["a"])(
              regeneratorRuntime.mark(function e() {
                var a, s, n, r, i, o, l, u, p, d;
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t.getUserInfo();
                        case 2:
                          if (t.user.id) {
                            e.next = 20;
                            break;
                          }
                          return (
                            (e.next = 5), c.a.storage.local.get("webAuthData")
                          );
                        case 5:
                          if (
                            ((a = e.sent), (s = a.webAuthData), !s || !s.id)
                          ) {
                            e.next = 13;
                            break;
                          }
                          try {
                            (t.loginLoading = !0),
                              M({ username: s.email, id: s.id }).then(
                                function () {
                                  t.initData(),
                                    g.a.get(
                                      "https://server.echobot.dev/auth/logout"
                                    ),
                                    (t.loginLoading = !1);
                                }
                              );
                          } catch (h) {
                            (t.loginLoading = !1), console.log(h);
                          }
                          return (
                            c.a.storage.local.remove("webAuthData"),
                            e.abrupt("return", !1)
                          );
                        case 13:
                          return (
                            (e.next = 15),
                            g.a.get("https://server.echobot.dev/auth/info")
                          );
                        case 15:
                          if (
                            ((n = e.sent),
                            (n = n.data),
                            !(
                              200 === n.code &&
                              n.data &&
                              n.data.id &&
                              n.data.email
                            ))
                          ) {
                            e.next = 20;
                            break;
                          }
                          try {
                            (t.loginLoading = !0),
                              M({ username: n.data.email, id: n.data.id }).then(
                                function () {
                                  t.initData(),
                                    g.a.get(
                                      "https://server.echobot.dev/auth/logout"
                                    ),
                                    (t.loginLoading = !1);
                                }
                              );
                          } catch (h) {
                            (t.loginLoading = !1), console.log(h);
                          }
                          return e.abrupt("return", !1);
                        case 20:
                          if (t.configs.objectId) {
                            e.next = 24;
                            break;
                          }
                          return (e.next = 23), t.getOptConfigs();
                        case 23:
                          t.configs = e.sent;
                        case 24:
                          if (t.user.id) {
                            e.next = 26;
                            break;
                          }
                          return e.abrupt("return");
                        case 26:
                          return (
                            (t.trialCount = t.configs.trialCount || 10),
                            (t.task = ""
                              .concat(t.user.id, "-")
                              .concat(+new Date())),
                            (e.next = 30),
                            c.a.storage.local.get([
                              "downloadFileType",
                              "transparentBg",
                              "cropMarksBleed",
                              "flattened",
                            ])
                          );
                        case 30:
                          return (
                            (r = e.sent),
                            (t.downloadFileType = r.downloadFileType || ""),
                            (t.transparentBg = r.transparentBg || !1),
                            (t.cropMarksBleed = r.cropMarksBleed || !1),
                            (t.flattened = r.flattened || !1),
                            (e.prev = 35),
                            (e.next = 38),
                            I()
                          );
                        case 38:
                          (i = e.sent),
                            i.key
                              ? ((o = i.key),
                                (l = i.value),
                                (u = b.a.AES.decrypt(
                                  l,
                                  b.a.enc.Utf8.parse(t.$config.ENCRYPT_KEY),
                                  {
                                    iv: b.a.enc.Hex.parse(o),
                                    mode: b.a.mode.CBC,
                                    format: b.a.format.Hex,
                                  }
                                ).toString(b.a.enc.Utf8)),
                                (t.subscription = JSON.parse(u)))
                              : (t.subscription = i),
                            (e.next = 48);
                          break;
                        case 42:
                          if (
                            ((e.prev = 42),
                            (e.t0 = e["catch"](35)),
                            !e.t0 || 209 !== e.t0.code)
                          ) {
                            e.next = 48;
                            break;
                          }
                          return (
                            e.t0.message && t.$buefy.toast.open(e.t0.message),
                            E().then(
                              function () {
                                t.getUserInfo();
                              },
                              function () {
                                t.getUserInfo();
                              }
                            ),
                            e.abrupt("return")
                          );
                        case 48:
                          if (t.subscription.isPro) {
                            e.next = 53;
                            break;
                          }
                          return (e.next = 51), q();
                        case 51:
                          (t.usedCount = e.sent),
                            t.usedCount >= t.trialCount &&
                              ((t.isShowProUpgradePop = !0),
                              !t.subscription.subscriptionId ||
                                t.subscription.isPro ||
                                t.subscription.isCanceled ||
                                t.subscription.chargeStatus ||
                                (t.tabType = "pro"));
                        case 53:
                          return (
                            (e.next = 55),
                            c.a.tabs.query({ active: !0, currentWindow: !0 })
                          );
                        case 55:
                          if (
                            ((p = e.sent),
                            !(
                              p.length > 0 &&
                              p[0].url &&
                              p[0].url.indexOf(
                                "https://www.canva.com/design/"
                              ) > -1
                            ))
                          ) {
                            e.next = 80;
                            break;
                          }
                          return (
                            (t.isCanvaTab = !0),
                            (e.next = 60),
                            t.getVariantMarker(p[0].id)
                          );
                        case 60:
                          if (((d = e.sent), !d.status)) {
                            e.next = 65;
                            break;
                          }
                          (t.variantMarkers = d.data), (e.next = 77);
                          break;
                        case 65:
                          if (!d.taskDoing) {
                            e.next = 69;
                            break;
                          }
                          (t.taskDoing = !0), (e.next = 77);
                          break;
                        case 69:
                          return (e.next = 71), c.a.tabs.reload();
                        case 71:
                          return (e.next = 73), t.waitForTabLoaded(p[0].id);
                        case 73:
                          return (e.next = 75), t.getVariantMarker(p[0].id);
                        case 75:
                          (d = e.sent), d.status && (t.variantMarkers = d.data);
                        case 77:
                          (t.markerLoading = !1), (e.next = 81);
                          break;
                        case 80:
                          t.isCanvaTab = !1;
                        case 81:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[35, 42]]
                );
              })
            )();
          },
          waitForTabLoaded: function (t) {
            var e = this;
            return Object(i["a"])(
              regeneratorRuntime.mark(function a() {
                var s;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (a.next = 2), c.a.tabs.get(t);
                      case 2:
                        if (((s = a.sent), "complete" !== s.status)) {
                          a.next = 5;
                          break;
                        }
                        return a.abrupt("return", !0);
                      case 5:
                        return a.abrupt(
                          "return",
                          new Promise(function (a) {
                            setTimeout(function () {
                              e.waitForTabLoaded(t).then(function (t) {
                                a(t);
                              });
                            }, 1e3);
                          })
                        );
                      case 6:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          readerCsv: function (t) {
            return new Promise(function (e, a) {
              var s = t.name,
                n = s.substring(s.lastIndexOf(".") + 1).toLowerCase();
              t && "csv" == n
                ? u.a.parse(t, {
                    header: !0,
                    skipEmptyLines: !0,
                    comments: "sep=",
                    complete: function (t) {
                      console.log("results", t),
                        t && t.data
                          ? (t.data.forEach(function (t) {
                              Object.keys(t).forEach(function (e) {
                                t[e].includes("\n") &&
                                  (t[e] = t[e].replace(/\n/g, "")),
                                  t[e].includes("\r") &&
                                    (t[e] = t[e].replace(/\r/g, "")),
                                  t[e].includes("\t") &&
                                    (t[e] = t[e].replace(/\t/g, ""));
                              });
                            }),
                            e(t.data))
                          : a("err");
                    },
                    error: function (t) {
                      console.log("err", t), a(t);
                    },
                  })
                : a("Invalid file type");
            });
          },
          handleDownloadTemplate: function () {
            G(
              "canva_maker_template.csv",
              "sep=,\n#1#,#2#,#3#,#4#,#5#,#6#,#FileName#\n1986,Mason,36,,,,1986_mason\n1987,Sophia,35,,,,1987_sophia"
            );
          },
          handleRemoveCsvFile: function () {
            (this.csvFile = null), (this.skipRowNumber = 0);
          },
          getUserInfo: function () {
            var t = this;
            return Object(i["a"])(
              regeneratorRuntime.mark(function e() {
                var a, s;
                return regeneratorRuntime.wrap(
                  function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (a = {}), (e.prev = 1), (e.next = 4), R();
                        case 4:
                          (s = e.sent),
                            "ok" === s.status &&
                              ((t.user = s.user), (a = t.user)),
                            (e.next = 11);
                          break;
                        case 8:
                          (e.prev = 8),
                            (e.t0 = e["catch"](1)),
                            t.$buefy.toast.open("".concat(e.t0));
                        case 11:
                          return (t.loginLoading = !1), e.abrupt("return", a);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 8]]
                );
              })
            )();
          },
          handleSwitchTab: function (t) {
            (this.tabType = t), "pro" === t && (this.isShowProUpgradePop = !1);
          },
          handleStartWorking: function () {
            var t = this;
            return Object(i["a"])(
              regeneratorRuntime.mark(function e() {
                var a, s;
                return regeneratorRuntime.wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (t.isCanvaTab) {
                          e.next = 3;
                          break;
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message: "Please open the Canva.com design page.",
                            type: "is-warning",
                            position: "is-top",
                            queue: !1,
                          }),
                          e.abrupt("return")
                        );
                      case 3:
                        if (
                          !t.configs.isVerifyMarker ||
                          0 !== t.variantMarkers.length
                        ) {
                          e.next = 6;
                          break;
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message: "Please mark the variables on the design.",
                            type: "is-warning",
                            position: "is-top",
                            queue: !1,
                          }),
                          e.abrupt("return")
                        );
                      case 6:
                        if (0 !== t.csvList.length) {
                          e.next = 9;
                          break;
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message:
                              "Please upload the CSV file of the variable data source.",
                            type: "is-warning",
                            position: "is-top",
                            queue: !1,
                          }),
                          e.abrupt("return")
                        );
                      case 9:
                        if (
                          (1 === t.csvList.length && (t.skipRowNumber = 0),
                          (a = parseInt(t.skipRowNumber)),
                          !Number.isNaN(a))
                        ) {
                          e.next = 16;
                          break;
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message:
                              "Please enter the number of valid skipped rows.",
                            type: "is-warning",
                            position: "is-top",
                            queue: !1,
                          }),
                          e.abrupt("return")
                        );
                      case 16:
                        if (
                          (a < 0 && (t.skipRowNumber = 0),
                          !(a >= t.csvList.length))
                        ) {
                          e.next = 20;
                          break;
                        }
                        return (
                          t.$buefy.snackbar.open({
                            message:
                              "The number of rows skipped must be less than ".concat(
                                t.csvList.length,
                                "."
                              ),
                            type: "is-warning",
                            position: "is-top",
                            queue: !1,
                          }),
                          e.abrupt("return")
                        );
                      case 20:
                        if (!t.downloadFolder.match(/[\/\\:*?"<>|]/)) {
                          e.next = 23;
                          break;
                        }
                        return (
                          t.$buefy.dialog.alert({
                            message:
                              'Download folder name cannot contain special characters ( / \\ : * ? " < > | ).',
                          }),
                          e.abrupt("return")
                        );
                      case 23:
                        if (t.subscription.isPro) {
                          e.next = 30;
                          break;
                        }
                        return (e.next = 26), q();
                      case 26:
                        if (
                          ((t.usedCount = e.sent),
                          !(t.usedCount >= t.trialCount))
                        ) {
                          e.next = 30;
                          break;
                        }
                        return (t.isShowProUpgradePop = !0), e.abrupt("return");
                      case 30:
                        if (t.workinProgress) {
                          e.next = 37;
                          break;
                        }
                        return (
                          (t.workinProgress = !0),
                          c.a.storage.local.set({
                            downloadFileType: t.downloadFileType,
                            transparentBg: t.transparentBg,
                            cropMarksBleed: t.cropMarksBleed,
                            flattened: t.flattened,
                          }),
                          (e.next = 35),
                          c.a.tabs.query({ active: !0, currentWindow: !0 })
                        );
                      case 35:
                        (s = e.sent),
                          c.a.tabs.sendMessage(s[0].id, {
                            type: "AUTOMATE_MAKE",
                            data: {
                              csvList:
                                t.skipRowNumber > 0
                                  ? t.csvList.slice(
                                      -1 * (t.csvList.length - t.skipRowNumber)
                                    )
                                  : t.csvList,
                              downloadFileType: t.downloadFileType,
                              downloadFolder: t.downloadFolder,
                              transparentBg: t.transparentBg,
                              cropMarksBleed: t.cropMarksBleed,
                              flattened: t.flattened,
                              task: t.task,
                              useLimit: t.subscription.isPro
                                ? 1e6
                                : t.trialCount - t.usedCount,
                            },
                          });
                      case 37:
                        setTimeout(function () {
                          (t.workinProgress = !1), window.close();
                        }, 50);
                      case 38:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
          handleGotoVideoGuide: function () {
            c.a.tabs.create({
              url: "https://canvaautomate.echobot.dev/?utm_source=extension&utm_medium=referral&utm_campaign=guide",
            });
          },
          handleLogin: function () {
            var t = this;
            if (((this.loginLoading = !0), this.configs.nativeAuthLogin))
              F().then(
                function (e) {
                  e && e.id && t.initData();
                },
                function () {
                  t.$buefy.snackbar.open({
                    message:
                      "You did not complete the authorization or something went wrong.",
                    type: "is-warning",
                    position: "is-top",
                    queue: !1,
                  }),
                    (t.loginLoading = !1);
                }
              );
            else {
              var e = c.a.windows.create({
                url: "https://server.echobot.dev/passport/google_canvaautomatemaker",
                type: "popup",
                height: 700,
                width: 520,
              });
              e.then(function () {
                t.loginLoading = !1;
              });
            }
          },
          handleLogout: function () {
            var t = this;
            this.$buefy.dialog.confirm({
              message:
                '<div style="margin-top: 10px;">Are you sure you want to log out?</div>',
              confirmText: "Log out",
              cancelText: "Cancel",
              type: "is-danger",
              hasIcon: !0,
              onConfirm: function () {
                c.a.storage.local.remove("webAuthData"),
                  E().then(
                    function () {
                      t.getUserInfo();
                    },
                    function (e) {
                      t.getUserInfo(), t.$buefy.toast.open("".concat(e));
                    }
                  );
              },
            });
          },
        },
        components: { Pro: Q },
      },
      tt = $,
      et = (a("11aa"), Object(W["a"])(tt, n, r, !1, null, null, null)),
      at = et.exports,
      st = a("ecee"),
      nt = a("c074"),
      rt = a("ad3d"),
      it = a("289d");
    st["c"].add(
      nt["r"],
      nt["k"],
      nt["l"],
      nt["v"],
      nt["e"],
      nt["b"],
      nt["c"],
      nt["n"],
      nt["m"],
      nt["q"],
      nt["w"],
      nt["g"],
      nt["u"],
      nt["t"],
      nt["f"],
      nt["o"],
      nt["x"],
      nt["a"],
      nt["d"],
      nt["p"],
      nt["j"],
      nt["i"],
      nt["y"],
      nt["s"],
      nt["z"],
      nt["h"]
    ),
      s["a"].component("vue-fontawesome", rt["a"]),
      s["a"].use(it["a"], {
        defaultIconComponent: "vue-fontawesome",
        defaultIconPack: "fas",
      }),
      (s["a"].prototype.$config = y["a"]),
      new s["a"]({
        el: "#app",
        render: function (t) {
          return t(at);
        },
      });
  },
  1: function (t, e) {},
  "11aa": function (t, e, a) {
    "use strict";
    a("0224");
  },
  "42e0": function (t, e, a) {},
  "598b": function (t, e, a) {
    "use strict";
    a("5aeb");
  },
  "5aeb": function (t, e, a) {},
  "84d6": function (t, e, a) {
    t.exports = a.p + "img/safepay.jpg";
  },
  b3a1: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAC0FBMVEUAAACKPy/DMVe6MVirfB0iRKpHjv4vXsYzadwxZdJ3SBgobPcsZ+WTbBgpWsEnTrrSLVc2Y8z+j8E9h/j0P3LpR3aQaRv9Z5Yybu04f/HgNmI7btrSjjKNWhu1jCnImTDkoSflX4vAgSFYJFPNelmIYBxplv+8MlFDiPVAd+SOZR7SOWB5WBHQrEDyOmcnX9/yXYoyb+8weewrYtLgOGTfV4TJWXygKUb+qd93M4hpJoG6iSyccRnkNGKYch6EYSXdZI5HZdjqhXqOYKzqL15xlPfqL2HxR3flnDphLGvDkivJrzX8K2LojzTxojfLME1sjO3sYpHMiCDd0zyEhp7IdBWDRZMve/VoMnTyfq/z7kL0mcztYI7joShrNHfsh7bk2TukcSCmID9kM25xgbqXYpuMYSz79j8/S6H5pD/3jr6ZZHr0vywsUcSBTj3fjipKSqXAL04pRqCYLULNnoODWUr5q0nQrD2ih0r49UAXTcfv5Szv6EFKYLHi1z3ieadffvXDoz3iszrWqTbruj7//2Tcrjj/8Fj+1D7+1E3xwkT/+V3ErEaKSL/4yki4hh7/31LKozigUdOTRcPLtEjPpjf82EaZSsr+R3j/6FbeqTKdcxrvtDD//279PW36tjBHe/yHUsLnqi/4qP3clPzLhPWpXNw+cPiza+LuwTtbk//UmCLDjB+aTL39VofvJlX8yzr8qyv984nAkGT9vzLuqCx1n//roPu9dezXltv//Xf//kIzgf6MYMf8f6/+3ET2xjrafRa2dLPhvG7sxlGicqyzpYjFsG3DnELikhvwnhr40c6+eMypX7qbVKr88anUOl3MuFu7lUzmtkv/oNSRZ8DkurqriZn54G3TlmPz013cpFijhEHZVDi4chX0s+zEiarBlpbowoaqgXTcvFf/qU2KUbriuJmhdI701UjUMkLprTxhg9rz2ayHWGLDTzEZpX+9AAAAgXRSTlMAEC8a/Q/+MYNEIP6v+CUaZ1X++OnBvf7Sw5xoYVUf/v6eRTEuLf7n3pB+VT38++vq56WahX5CPv7+/drZrJ9uYf78+Ofk0s+fhnxG/vrY07yzn2L7+vXy3tzb2c/LubKjiX5o/v76+fb27erjx8TCtqM+/v3z8siy6+rFtY2Nhei/oIroAAAJfklEQVRYw6XY91tSURgH8HtBFMxERHOnlaZmZu6WpQ0r23vvvfeeCoGFRZQVIUnSJIxcVKbZstKsXO299/gXes+5F7wKRU99f6kIPr7nnPc93EcCx5lPNAnbO8GFTfxd2LEsmgn1dGoquWQrle5hf+WQU1yH4Z/J8zzhKSCaxDs7O1vp5kJAOHyrZZjrjevUqSwWOZGlTg5E08R0wBLUxI/ycrZ0WO5QBU1O6eQ6kU04e5ZaeyPbJQEoZV+Wc5S9fZRFTWF9DR6xpn8kurp6uBDcE6U+hGXi2KRLb5BiQu0hoRYrVxo8xrFM1Y0r8/AmnJqNcbB0Eue3YhMgKfsKQuztQyy2MN7N4NGKNFU/0cPDHUGhDhwLx7UMpGUdsg1hvJAQHmGRmI6x4NBQX4OhLyFo1qx0jFdUFFeAtZb4f4a5lpV1jCfioaRWBM/B2pnHMTbeTalMIDjRzaiM4cJrIzYMwDs0sawjHBiUpITz+F1YLi5hLJJkJQzMRo3C4UZgKMKTT4xYVzIeS6xhLrgtO2R3ZP2GgS10c3PrnZzce+DAbG8Sd7ZP9KL16yOiicDxJSUlG1q2ntbOL4iAoLUZEn/jBA3pEBuYGOsOWt8Yc9kO0RFOzgS5eU7JnKl+XV80n91tWnt42XFItiH2N1B8cIcYtFnswEAzw/HxjOTy0atT50x17K4f9SIr68qo7kEEOaQDBTlbbrhjcE1yk2XznCKd6BNuOYIM6qq/cmXUiytX7Lq1c4TdboUK9jJ1PzsmwTuMOvhlNTWwNYxwIyN9GI3UIzegEqRRL+zs7FoMOaP0RmNdWhrFoVp64MCByd4sam3BwdMZzvLISGbDkS1yJWqQkCOX/zyDKoouLS0V8nBByUplcnwsdcFMX7EimNEcDhFOzMZub+efKQbpBXJyARoGb/EsFXI5VO+haSDC3NE5kYtXBDN3aVPEIiecKC5saTu5IjNTbKyUI0j//IyyZwpJCDzpwWZ1LCsbhv70dndhkfHBQxwZEEfAjY7mQqI9IwSwsvBMkAJy5VCQFkH64S0JZ8IEud6bgncgLMHd3T15OmEZvMpFfrCyzIyMcLUeIL0aQdqAJa2JBqjTFPqoAuPiWKR1iO85d7E8HJzUVIk6FwrSIOir2jjJlwFNIAlbEUTMnY0KSoWkaXMD1BhSadWagBSSvjEAYttyOE5Jc+1SUUEQhVir1RifnzH0FKnUeUVq2CgI6V52bwLLFuSTNHdsHS4I4i/SqdXGL2cMj/epxHnpeZoleI4TPFznx9lwHDyTlo4txBAuSaJTByBIlabLS0/PK5qEtjzGUGYLcvZKWtq/88Na2vFXiNIuA+TxVHcZHEjeYJBYMa0SyT9vUGjSouWTR9+/kYnLUSj27QNpEEAUs3//pfSFrS0+xXd24PEEAgGv4SXu0uVtxva6eP0mgrAjQlLP+jzsAHTp0kLfhvc783y4UV5eISFCoT180TB1osfo+xcvPqzFDoYk4stfv+ZhByCzxHHwCfUKEdpDTlFp25ZoNPiz7l/MybmRkUo7WFLrwKEC4kJfPo9G8OfbnqXShwm17/bpIkC9boYrTI4kDUn79+/aRTmfa0d6CQ/TCAYgQyE+DAcGv/B+Tk7Ozus36YIkAGFpR/0O5JTfmCk8jIJKASDUR8BzcOZzOByi8cpSMz+Bs3Pnw1pzQQCJ89Sq+vpdwHw7TGcrGA58wjJsEl9pGRl1vQBCEu1gaMcunUpMMScg32Zugu94qyFbJcD8TPOHpn77AUGnX79rcEDaflk1EhCUmTfeXZ7UkrCexI41Q/wcu4aj6fgEzt69IDGcHbu2p1fMBCVpZKG6KD29qJ/15mZPdKv5Mt1vEJ6yilk7957GEsPZtX33JcnIpJFPNRpNUV56kTHFKsRyr6kJbjOcghR1d08DREsmZ/tuqVRXoS4qwlKR0b+1dck7eLrjEglyoBcL74Jz4MCB19fEKJSz+6Bs22eVVpOfrynS5GsDJgVZ3+14Eq0MOyJV4WnkHNjz6howJkcq23bhkUSvBkdj1AYEDMefs2J1T8UF4QYqPI2hPa/elDOcbYcKqsv1Wo0m3xigrxzUmiBHbBxh4bTpShWkElESOJDbb54wnEMXCqqf6PW38vNv3aqsHD5g45yS8RaNMONtLSpIpKU68fEd5Bw/fvvjI4YDkabpcymqa8o6eJra3HSTJuN7aJ8KVwQdBBI4x0+efFBwkHIAOiSTXtLpc+Gbs/LWLbnf1JIS2VSyycrgasyAglRIwhP29Cp2zp8vrr6AHMg2mVQqTVfJ4fEiKyurheOA8eNH4KUF+pq5/uhqhCNTGVUqelTrX2Hn2LFzVQWHTM5Bnb8cKVnNW8AT3QDMkL6DV/uaVwY32sNMhciIIFMjrsTO0aPnqqoLgJHJpPvT6p7ZgdK8hV/DklLmvX9vmr72C+BC+3AjXKTVapFDD9ibYuycO/KyqgAg6O26Z88Q04O5M74AmUqaVngRro+7NyVao9bswLk/eoAdyMvqC7tVcppxbHxQS94PpjfJsWsGvoeuX/uKnDTaQcf+/SU4KMWvCvGqugHTJK37BRJU/FIz4B6C2+PqNaaDj72gCjHnbt/t3Lnzj1WL2zEZy/HA9xBAINU3ciBAvSy+M7pzly5dxvZvQzRKIOMSwCsDqI6a+avXypkOjvTa2wZGEM145O43rx+TgpXBlFEzv+fqmyeNHdluidyu+exVmOFwI8c48c0VDM7PHxzYaGUAmSYVxovpSHX+aI+7t6efpYVCYWjDwQPUMLZBsLKKin1o5vGg0uOFIdlnkZxi6HCFwhAf8xb1W53fj/GoDwVVKGDE0KTi+Sr+fmEbdg6m5doxGAgnyovHaKEBjD3irK3FFyMaMZhUcKCdq6ovwKp2wKpgqBoNOJ9P/CZteqFpxTMv1tW/ws7Roy+rqh9J5FmMobKZGTkPMxSUI4bz+liMnHNHiq8u+LHqLxiSZfrL0pwPK8NNDhwXni/UyV0mz7DJsBOnjGOZVoYePyQSkyOVygoeFN+xydDf9a73Om2hz2wWzMZ1mDGzA60jn70YMbaDIPq5e+1bgNBkmBzZZ387esRthzXu3r0JcRRUMQtmDH3xgAPMQYm8G2PEbZY0bgs9I9NgXA9AQ99+UADlSMW5thnrv0YKWiNCDQ3tU/y94ImiW7sg4h/jGw4Njduw+PoCYP49KeHicmjDY3dGw03xXxmwpnz3k5ULgPnftExZMxwW9V/5BUL/EUSBxHDeAAAAAElFTkSuQmCC";
  },
  cf05: function (t, e, a) {
    t.exports = a.p + "img/logo.png";
  },
});
