!function (e) {
    var t = {};

    function o(s) {
        if (t[s]) return t[s].exports;
        var i = t[s] = {i: s, l: !1, exports: {}};
        return e[s].call(i.exports, i, i.exports, o), i.l = !0, i.exports
    }

    o.m = e, o.c = t, o.d = function (e, t, s) {
        o.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: s})
    }, o.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, o.t = function (e, t) {
        if (1 & t && (e = o(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        if (o.r(s), Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e) for (var i in e) o.d(s, i, function (t) {
            return e[t]
        }.bind(null, i));
        return s
    }, o.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return o.d(t, "a", t), t
    }, o.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, o.p = "", o(o.s = 0)
}([function (e, t) {
    const o = document.querySelectorAll(".target__toggle__block__title"),
        s = document.querySelector(".target__slider__img__images__toggle-1"),
        i = ".target__slider__img__images__toggle-1",
        l = document.querySelector(".target__slider__img__images__toggle-1 + img"),
        c = document.querySelector(".target__slider__img__elements__buttons .left"),
        r = document.querySelector(".target__slider__img__elements__buttons .right");
    o.forEach(e => {
    }), o.forEach(e => {
        E(e, o, s, l, i)
    }), r.addEventListener("click", () => {
        p(o, s, l, i)
    }), c.addEventListener("click", () => {
        S(o, s, l, i)
    });
    const n = document.querySelectorAll(".selling__toggle__block__title"),
        a = document.querySelector(".selling__slider__img__images__toggle-1"),
        _ = ".selling__slider__img__images__toggle-1",
        d = document.querySelector(".selling__slider__img__images__toggle-1 + img"),
        m = document.querySelector(".selling__slider__img__elements__buttons .left"),
        u = document.querySelector(".selling__slider__img__elements__buttons .right");
    n.forEach((e, t) => {
        e.addEventListener("click", () => {
            2 === t ? a.classList.add("row") : a.classList.remove("row")
        }), E(e, n, a, d, _)
    }), u.addEventListener("click", () => {
        p(n, a, d, _), n[2].classList.contains("active") ? a.classList.add("row") : a.classList.remove("row")
    }), m.addEventListener("click", () => {
        S(n, a, d, _), n[2].classList.contains("active") ? a.classList.add("row") : a.classList.remove("row")
    });
    const g = document.querySelectorAll(".tools__toggle__block__title"),
        f = document.querySelector(".tools__slider__img__images__toggle-1"),
        v = ".tools__slider__img__images__toggle-1",
        h = document.querySelector(".tools__slider__img__images__toggle-1 + img"),
        L = document.querySelector(".tools__slider__img__elements__buttons .left"),
        b = document.querySelector(".tools__slider__img__elements__buttons .right");

    function y(e, t, o, s) {
        document.querySelector("".concat(s, " + img")).remove();
        let i = document.createElement("img");
        var l, c;
        i.src = "".concat(e.getAttribute("data-slider-src")), i.classList.add("active"), c = i, (l = t).parentNode.insertBefore(c, l.nextSibling);
        let r = (e.attributes.length - 2) / 2,
            n = Array(r).fill().map((t, o) => '\n      <img\n      class="'.concat(e.getAttribute("data-img-class-".concat(o + 1)), '"\n      src="').concat(e.getAttribute("data-img-link-".concat(o + 1)), '"\n      alt=""\n    />\n      '));
        e.classList.contains("active") ? t.innerHTML = n.join("\n") : t.innerHTML = ""
    }

    function E(e, t, o, s, i) {
        e.addEventListener("click", () => {
            e.classList.contains("active") ? e.classList.remove("active") : (t.forEach(e => {
                e.classList.remove("active")
            }), e.classList.add("active")), y(e, o, 0, i)
        })
    }

    function p(e, t, o, s) {
        let i, l = -1;
        e.forEach((e, t) => {
            if (e.classList.contains("active")) return l = t, l
        }), e.forEach(e => {
            e.classList.remove("active")
        });
        i = l + 1 >= e.length ? 0 : l + 1, e[i].classList.add("active"), y(e[i], t, 0, s)
    }

    function S(e, t, o, s) {
        let i, l = -1;
        e.forEach((e, t) => {
            if (e.classList.contains("active")) return l = t, l
        }), e.forEach(e => {
            e.classList.remove("active")
        });
        i = l - 1 <= -1 ? e.length - 1 : l - 1, e[i].classList.add("active"), y(e[i], t, 0, s)
    }

    g.forEach(e => {
        E(e, g, f, h, v)
    }), b.addEventListener("click", () => {
        p(g, f, h, v)
    }), L.addEventListener("click", () => {
        S(g, f, h, v)
    });
    const q = document.querySelectorAll(".mob-target__slider__img__elements__buttons .left"),
        k = document.querySelectorAll(".mob-target__slider__img__elements__buttons .right");
    q.forEach(e => {
        e.addEventListener("click", () => {
            let e, t = -1;
            o.forEach((e, o) => {
                if (e.classList.contains("active")) return t = o, t
            }), o.forEach(e => {
                e.classList.remove("active")
            });
            e = t - 1 <= -1 ? o.length - 1 : t - 1, o[e].classList.add("active"), $("html,body").animate({
                scrollTop: o[e].offsetTop - 40,
                behavior: "smooth"
            }, 800)
        })
    }), k.forEach(e => {
        e.addEventListener("click", () => {
            let e, t = -1;
            o.forEach((e, o) => {
                if (e.classList.contains("active")) return t = o, t
            }), o.forEach(e => {
                e.classList.remove("active")
            });
            e = t + 1 >= o.length ? 0 : t + 1, o[e].classList.add("active"), $("html,body").animate({
                scrollTop: o[e].offsetTop - 40,
                behavior: "smooth"
            }, 800)
        })
    });
    const T = document.querySelectorAll(".mob-selling__slider__img__elements__buttons .left"),
        A = document.querySelectorAll(".mob-selling__slider__img__elements__buttons .right");
    T.forEach(e => {
        e.addEventListener("click", () => {
            let e, t = -1;
            n.forEach((e, o) => {
                if (e.classList.contains("active")) return t = o, t
            }), n.forEach(e => {
                e.classList.remove("active")
            });
            e = t - 1 <= -1 ? n.length - 1 : t - 1, n[e].classList.add("active"), $("html,body").animate({
                scrollTop: n[e].offsetTop - 40,
                behavior: "smooth"
            }, 800)
        })
    }), A.forEach(e => {
        e.addEventListener("click", () => {
            let e, t = -1;
            n.forEach((e, o) => {
                if (e.classList.contains("active")) return t = o, t
            }), n.forEach(e => {
                e.classList.remove("active")
            });
            e = t + 1 >= n.length ? 0 : t + 1, n[e].classList.add("active"), $("html,body").animate({
                scrollTop: n[e].offsetTop - 40,
                behavior: "smooth"
            }, 800)
        })
    });
    const j = document.querySelectorAll(".mob-tools__slider__img__elements__buttons .left"),
        w = document.querySelectorAll(".mob-tools__slider__img__elements__buttons .right");
    j.forEach(e => {
        e.addEventListener("click", () => {
            let e, t = -1;
            g.forEach((e, o) => {
                if (e.classList.contains("active")) return t = o, t
            }), g.forEach(e => {
                e.classList.remove("active")
            });
            e = t - 1 <= -1 ? g.length - 1 : t - 1, g[e].classList.add("active"), $("html,body").animate({
                scrollTop: document.querySelector(".tools").offsetTop + g[e].offsetTop - 40,
                behavior: "smooth"
            }, 800)
        })
    }), w.forEach(e => {
        e.addEventListener("click", () => {
            let e, t = -1;
            g.forEach((e, o) => {
                if (e.classList.contains("active")) return t = o, t
            }), g.forEach(e => {
                e.classList.remove("active")
            });
            e = t + 1 >= g.length ? 0 : t + 1, g[e].classList.add("active"), $("html,body").animate({
                scrollTop: document.querySelector(".tools").offsetTop + g[e].offsetTop - 40,
                behavior: "smooth"
            }, 800)
        })
    })
}]);
//# sourceMappingURL=toggleImg-dist.js.map