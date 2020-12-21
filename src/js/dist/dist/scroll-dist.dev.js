"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function n(o) {
    if (t[o]) return t[o].exports;
    var i = t[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }

  n.m = e, n.c = t, n.d = function (e, t, o) {
    n.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: o
    });
  }, n.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, n.t = function (e, t) {
    if (1 & t && (e = n(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var o = Object.create(null);
    if (n.r(o), Object.defineProperty(o, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var i in e) {
      n.d(o, i, function (t) {
        return e[t];
      }.bind(null, i));
    }
    return o;
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 0);
}([function (e, t) {
  var n = !1,
      o = 0;
  window.scrollTo(0, 0);
  var i = document.querySelectorAll(".scrolling-block"),
      c = document.querySelector(".lets__talk"),
      s = document.querySelector(".start__earning");

  function l() {
    return o + 1 !== i.length ? (o++, i[o - 1].classList.remove("active"), i[o].classList.add("active"), i[o].classList.add("animate"), o !== i.length ? i[o - 1].classList.add("active") : i[o - 1].classList.add("invise"), i[o + 1] && (i[o + 1].classList.remove("active"), i[o + 1].classList.add("invise"))) : o = o, o;
  }

  function a() {
    return o - 1 != -1 ? (o--, i[o].classList.remove("invise"), i[o + 1].classList.remove("active"), i[o].classList.add("animate"), i[o].classList.add("active"), i[o + 1].classList.add("invise")) : o = o, o;
  }

  function r() {
    o === i.length - 3 ? $("html,body").animate({
      scrollTop: i[o].offsetTop - (document.documentElement.clientHeight - i[o].clientHeight) / 2,
      behavior: "smooth"
    }, 800, function () {
      setTimeout(function () {}, 400);
    }) : o === i.length - 1 ? $("html,body").animate({
      scrollTop: i[o - 1].offsetTop + i[o].offsetTop,
      behavior: "smooth"
    }, 800, function () {
      setTimeout(function () {}, 400);
    }) : $("html,body").animate({
      scrollTop: i[o].offsetTop,
      behavior: "smooth"
    }, 800, function () {
      setTimeout(function () {}, 400);
    });
  }

  function u(e) {
    if (c.classList.contains("open") || s.classList.contains("open")) return !1;

    if (console.log("wheel"), document.documentElement.clientWidth >= 1366) {
      e.preventDefault();
      var _t = e.deltaY,
          _o = e.deltaX;
      i[i.length - 1].offsetTop;
      0 !== _t && e.preventDefault(), function (e, t, o) {
        0 !== t ? e.preventDefault() : n = !1;
        t > 0 && 0 === o ? (l(), r()) : t < 0 && 0 === o && (a(), r());
      }(e, _t, _o);
    }
  }

  window.addEventListener("wheel", function (e) {
    if (document.documentElement.clientWidth >= 1366) {
      var _t2 = e.deltaY,
          _n = e.deltaX;
      0 !== _t2 && (_n < 20 || _n > -20) && e.preventDefault();
    }
  }, {
    passive: !1
  });

  var d = function (e, t, n) {
    var o;
    return function () {
      var i = this,
          c = arguments,
          s = function s() {
        o = null, n || e.apply(i, c);
      },
          l = n && !o;

      clearTimeout(o), o = setTimeout(s, t), l && e.apply(i, c);
    };
  }(function (e) {
    u(e);
  }, 300);

  window.addEventListener("wheel", d, {
    passive: !1
  });
  var f = 0,
      m = 0;
  window.addEventListener("touchmove", function (e) {
    if (document.documentElement.clientWidth >= 1366 && !c.classList.contains("open") && !s.classList.contains("open")) return e.preventDefault(), e.stopPropagation(), !1;
  }, document.documentElement.clientWidth >= 1366 ? {
    passive: !1
  } : {
    passive: !0
  }), window.addEventListener("touchstart", function (e) {
    if (document.documentElement.clientWidth >= 1366) return f = e.changedTouches[0].clientY, m = e.changedTouches[0].clientX, !1;
  }, {
    passive: !1
  }), window.addEventListener("touchend", function (e) {
    if (c.classList.contains("open") || s.classList.contains("open")) return !1;
    var t = e.changedTouches[0].clientY - f,
        i = e.changedTouches[0].clientX - m;
    document.documentElement.clientWidth >= 1366 && 0 !== t && 0 !== i && (t < 50 && t > -50 ? e.preventDefault() : function (e, t, i) {
      if (n) return;
      n = !0, t > 30 || t < -30 ? (e.preventDefault(), setTimeout(function () {
        n = !1;
      }, 400)) : n = !1;
      if (t < -30) return l(), r(), o;
      t > 30 && (a(), r());
    }(e, t));
  }, {}), window.addEventListener("scroll", function (e) {
    e.preventDefault(), o !== i.length - 1 && document.documentElement.clientWidth >= 1366 && (o === i.length - 3 ? window.scrollTo(0, i[o].offsetTop - (document.documentElement.clientHeight - i[o].clientHeight) / 2) : window.scrollTo(0, i[o].offsetTop));
  });
  var p = document.querySelector(".arrow__up");
  ["click", "touchend"].forEach(function (e) {
    return p.addEventListener(e, function () {
      return o = 0, $("html,body").animate({
        scrollTop: i[o].offsetTop,
        behavior: "smooth"
      }, 800), o;
    });
  }), document.querySelectorAll(".header__nav__items li").forEach(function (e) {
    var t = e.getAttribute("data-nav"),
        n = e.getAttribute("data-counter");
    ["click", "touchend"].forEach(function (c) {
      return e.addEventListener(c, function () {
        o = +n, document.querySelector("html").classList.remove("lock"), i.forEach(function (e) {
          e.classList.add("active");
        }), $("html,body").animate({
          scrollTop: document.querySelector(".".concat(t)).offsetTop,
          behavior: "smooth"
        }, 800), setTimeout(function () {
          i[o].classList.add("animate");
        }, 300);
      }, !1);
    });
  }), document.onkeydown = function (e) {
    if (document.documentElement.clientWidth >= 1366) {
      if (32 === e.keyCode && e.target === document.body) if (c.classList.contains("open") || s.classList.contains("open")) ;else {
        if (n) return void e.preventDefault();
        n = !0, setTimeout(function () {
          n = !1;
        }, 700), l(), r();
      }
      if ("38" == e.keyCode) {
        if (c.classList.contains("open") || s.classList.contains("open")) ;else {
          if (n) return void e.preventDefault();
          n = !0, setTimeout(function () {
            n = !1;
          }, 700), a(), r();
        }
      } else if ("40" == e.keyCode) if (c.classList.contains("open") || s.classList.contains("open")) ;else {
        if (n) return void e.preventDefault();
        n = !0, setTimeout(function () {
          n = !1;
        }, 700), l(), r();
      }
    }
  };
}]);