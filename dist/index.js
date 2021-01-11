!(function (e, n) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = n();
  else if ('function' == typeof define && define.amd) define([], n);
  else {
    var t = n();
    for (var r in t) ('object' == typeof exports ? exports : e)[r] = t[r];
  }
})(self, function () {
  return (() => {
    'use strict';
    var e = {
        805: (e, n) => {
          Object.defineProperty(n, '__esModule', { value: !0 }),
            (n.Channel = void 0);
          var t = (function () {
            function e(e) {
              var n = this;
              void 0 === e && (e = []),
                (this.addEvent = function (e) {
                  n.events.has(e) || n.events.set(e, new Array());
                }),
                (this.subscribe = function (e, t) {
                  var r = n.events.get(e);
                  if (r)
                    return (
                      r.push(t),
                      function () {
                        return n.unsubscribe(t, e);
                      }
                    );
                }),
                (this.findSubscriberIndex = function (e, n) {
                  return null == n ? void 0 : n.findIndex(e);
                }),
                (this.findEvent = function (e) {
                  return n.events.get(e);
                }),
                (this.unsubscribe = function (e, t) {
                  var r = n.findEvent(t),
                    i = n.findSubscriberIndex(e, r);
                  void 0 !== i && (null == r || r.splice(i, 1));
                }),
                (this.emit = function (e, t) {
                  var r;
                  null === (r = n.findEvent(e)) ||
                    void 0 === r ||
                    r.forEach(function (e) {
                      return e(t);
                    });
                }),
                (this.events = new Map()),
                null == e ||
                  e.forEach(function (e) {
                    return n.events.set(e, new Array());
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
          n.Channel = t;
        },
        607: function (e, n, t) {
          var r =
              (this && this.__createBinding) ||
              (Object.create
                ? function (e, n, t, r) {
                    void 0 === r && (r = t),
                      Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: function () {
                          return n[t];
                        },
                      });
                  }
                : function (e, n, t, r) {
                    void 0 === r && (r = t), (e[r] = n[t]);
                  }),
            i =
              (this && this.__exportStar) ||
              function (e, n) {
                for (var t in e)
                  'default' === t ||
                    Object.prototype.hasOwnProperty.call(n, t) ||
                    r(n, e, t);
              };
          Object.defineProperty(n, '__esModule', { value: !0 }), i(t(598), n);
        },
        598: function (e, n, t) {
          var r =
              (this && this.__assign) ||
              function () {
                return (r =
                  Object.assign ||
                  function (e) {
                    for (var n, t = 1, r = arguments.length; t < r; t++)
                      for (var i in (n = arguments[t]))
                        Object.prototype.hasOwnProperty.call(n, i) &&
                          (e[i] = n[i]);
                    return e;
                  }).apply(this, arguments);
              },
            i =
              (this && this.__spreadArrays) ||
              function () {
                for (var e = 0, n = 0, t = arguments.length; n < t; n++)
                  e += arguments[n].length;
                var r = Array(e),
                  i = 0;
                for (n = 0; n < t; n++)
                  for (
                    var o = arguments[n], s = 0, u = o.length;
                    s < u;
                    s++, i++
                  )
                    r[i] = o[s];
                return r;
              };
          Object.defineProperty(n, '__esModule', { value: !0 }),
            (n.Pipeline = void 0);
          var o = t(805),
            s = ['before-delete'],
            u = (function () {
              function e() {
                var e = this;
                (this.channels = new Map()),
                  (this.addChannel = function (n) {
                    for (var t = [], u = 1; u < arguments.length; u++)
                      t[u - 1] = arguments[u];
                    var a = t[0],
                      f = void 0 === a ? [] : a,
                      c = t.slice(1),
                      l = e.channels.get(n);
                    return (
                      l ||
                        ((l = new (o.Channel.bind.apply(
                          o.Channel,
                          i([void 0, i(f, s)], c),
                        ))()),
                        e.channels.set(n, l)),
                      r(r({}, l), {
                        removeChannel: function () {
                          return e.removeChannel(n);
                        },
                      })
                    );
                  }),
                  (this.getChannel = function (n) {
                    return e.channels.get(n);
                  });
              }
              return (
                (e.prototype.removeChannel = function (e) {
                  var n = this.channels.get(e);
                  return (
                    null == n || n.emit('before-delete'),
                    this.channels.delete(e)
                  );
                }),
                e
              );
            })();
          n.Pipeline = u;
        },
      },
      n = {};
    return (function t(r) {
      if (n[r]) return n[r].exports;
      var i = (n[r] = { exports: {} });
      return e[r].call(i.exports, i, i.exports, t), i.exports;
    })(607);
  })();
});
