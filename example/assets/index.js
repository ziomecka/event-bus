(() => {
  var e = {
      590: (e) => {
        self,
          (e.exports = (() => {
            'use strict';
            var e = {
                805: (e, t) => {
                  Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.Channel = void 0);
                  var n = (function () {
                    function e(e) {
                      var t = this;
                      void 0 === e && (e = []),
                        (this.addEvent = function (e) {
                          t.events.has(e) || t.events.set(e, new Array());
                        }),
                        (this.subscribe = function (e, n) {
                          var r = t.events.get(e);
                          if (r)
                            return (
                              r.push(n),
                              function () {
                                return t.unsubscribe(n, e);
                              }
                            );
                        }),
                        (this.findSubscriberIndex = function (e, t) {
                          return null == t ? void 0 : t.findIndex(e);
                        }),
                        (this.findEvent = function (e) {
                          return t.events.get(e);
                        }),
                        (this.unsubscribe = function (e, n) {
                          var r = t.findEvent(n),
                            i = t.findSubscriberIndex(e, r);
                          void 0 !== i && (null == r || r.splice(i, 1));
                        }),
                        (this.emit = function (e, n) {
                          var r;
                          null === (r = t.findEvent(e)) ||
                            void 0 === r ||
                            r.forEach(function (e) {
                              return e(n);
                            });
                        }),
                        (this.events = new Map()),
                        null == e ||
                          e.forEach(function (e) {
                            return t.events.set(e, new Array());
                          });
                    }
                    return (
                      Object.defineProperty(e.prototype, 'eventsIds', {
                        get: function () {
                          return this.events.keys();
                        },
                        enumerable: !1,
                        configurable: !0,
                      }),
                      e
                    );
                  })();
                  t.Channel = n;
                },
                607: function (e, t, n) {
                  var r =
                      (this && this.__createBinding) ||
                      (Object.create
                        ? function (e, t, n, r) {
                            void 0 === r && (r = n),
                              Object.defineProperty(e, r, {
                                enumerable: !0,
                                get: function () {
                                  return t[n];
                                },
                              });
                          }
                        : function (e, t, n, r) {
                            void 0 === r && (r = n), (e[r] = t[n]);
                          }),
                    i =
                      (this && this.__exportStar) ||
                      function (e, t) {
                        for (var n in e)
                          'default' === n ||
                            Object.prototype.hasOwnProperty.call(t, n) ||
                            r(t, e, n);
                      };
                  Object.defineProperty(t, '__esModule', { value: !0 }),
                    i(n(598), t);
                },
                598: function (e, t, n) {
                  var r =
                      (this && this.__assign) ||
                      function () {
                        return (r =
                          Object.assign ||
                          function (e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                              for (var i in (t = arguments[n]))
                                Object.prototype.hasOwnProperty.call(t, i) &&
                                  (e[i] = t[i]);
                            return e;
                          }).apply(this, arguments);
                      },
                    i =
                      (this && this.__spreadArrays) ||
                      function () {
                        for (var e = 0, t = 0, n = arguments.length; t < n; t++)
                          e += arguments[t].length;
                        var r = Array(e),
                          i = 0;
                        for (t = 0; t < n; t++)
                          for (
                            var o = arguments[t], u = 0, c = o.length;
                            u < c;
                            u++, i++
                          )
                            r[i] = o[u];
                        return r;
                      };
                  Object.defineProperty(t, '__esModule', { value: !0 }),
                    (t.Pipeline = void 0);
                  var o = n(805),
                    u = ['before-delete'],
                    c = (function () {
                      function e() {
                        var e = this;
                        (this.channels = new Map()),
                          (this.addChannel = function (t) {
                            for (var n = [], c = 1; c < arguments.length; c++)
                              n[c - 1] = arguments[c];
                            var s = n[0],
                              a = void 0 === s ? [] : s,
                              l = n.slice(1),
                              f = e.channels.get(t);
                            return (
                              f ||
                                ((f = new (o.Channel.bind.apply(
                                  o.Channel,
                                  i([void 0, i(a, u)], l),
                                ))()),
                                e.channels.set(t, f)),
                              r(r({}, f), {
                                removeChannel: function () {
                                  return e.removeChannel(t);
                                },
                              })
                            );
                          }),
                          (this.getChannel = function (t) {
                            return e.channels.get(t);
                          });
                      }
                      return (
                        (e.prototype.removeChannel = function (e) {
                          var t = this.channels.get(e);
                          return (
                            null == t || t.emit('before-delete'),
                            this.channels.delete(e)
                          );
                        }),
                        e
                      );
                    })();
                  t.Pipeline = c;
                },
              },
              t = {};
            return (function n(r) {
              if (t[r]) return t[r].exports;
              var i = (t[r] = { exports: {} });
              return e[r].call(i.exports, i, i.exports, n), i.exports;
            })(607);
          })());
      },
      853: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.alert = void 0),
          (t.alert = function (e) {
            var t;
            return (
              null === (t = e.pipeline.getChannel('button')) ||
                void 0 === t ||
                t.subscribe('button-clicked', function () {
                  return window.alert('Button clicked');
                }),
              {
                render: function () {
                  return null;
                },
              }
            );
          });
      },
      380: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.button = void 0),
          (t.button = function (e) {
            var t = e.pipeline,
              n = e.parentElement,
              r = t.addChannel('button', ['button-clicked']);
            return {
              render: function (e) {
                void 0 === e && (e = 'button');
                var t = document.createElement('button');
                return (
                  (t.textContent = e),
                  (function (e) {
                    e.addEventListener('click', function () {
                      r.emit('button-clicked');
                    });
                  })(t),
                  n && n.append(t),
                  t
                );
              },
            };
          });
      },
      537: function (e, t, n) {
        'use strict';
        var r =
            (this && this.__createBinding) ||
            (Object.create
              ? function (e, t, n, r) {
                  void 0 === r && (r = n),
                    Object.defineProperty(e, r, {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    });
                }
              : function (e, t, n, r) {
                  void 0 === r && (r = n), (e[r] = t[n]);
                }),
          i =
            (this && this.__exportStar) ||
            function (e, t) {
              for (var n in e)
                'default' === n ||
                  Object.prototype.hasOwnProperty.call(t, n) ||
                  r(t, e, n);
            };
        Object.defineProperty(t, '__esModule', { value: !0 }),
          i(n(448), t),
          i(n(853), t),
          i(n(380), t);
      },
      448: (e, t) => {
        'use strict';
        Object.defineProperty(t, '__esModule', { value: !0 });
      },
      564: (e, t, n) => {
        'use strict';
        var r = n(537),
          i = new (0, n(590).Pipeline)();
        r.button({ pipeline: i, parentElement: document.body }).render(),
          r.alert({ pipeline: i }).render();
      },
    },
    t = {};
  !(function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  })(564);
})();
