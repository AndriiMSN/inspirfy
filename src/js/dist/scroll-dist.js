!function () {
    let e = !0;
    setTimeout((() => {
        e = !1
    }), 3600);
    let t = 1600, n = 0;
    const i = document.querySelectorAll(".scrolling-block"), s = document.querySelector(".lets__talk"),
        o = document.querySelector(".start__earning");

    function l(e, t) {
        e.ripples({resolution: 40, perturbance: .15, interactive: !1, width: t});
        let n = .5 * e.outerWidth(), i = .5 * e.outerHeight();
        e.ripples("drop", n, i, 200, .15), setTimeout((() => {
            e.ripples("set", "perturbance", .1)
        }), 600), setTimeout((() => {
            e.ripples("set", "perturbance", .05)
        }), 900), setTimeout((() => {
            e.ripples("set", "perturbance", .025)
        }), 1200), setTimeout((() => {
            e.ripples("set", "perturbance", 0), e.ripples("destroy")
        }), 1500)
    }

    function c(e) {
        if (2 === e) {
            let t = i[e].querySelector(".toggle__slider.active .toggle-bg-img");
            t.classList.add("rippled"), l($(`.${t.className.split(" ")[0]}`), t.clientWidth)
        }
        if (3 === e) {
            let t = i[e].querySelector(".toggle__slider.active .toggle-bg-img");
            t.classList.add("rippled"), l($(`.${t.className.split(" ")[0]}`), t.clientWidth)
        }
        if (4 === e) {
            let t = i[e].querySelector(".toggle__slider.active .toggle-bg-img");
            t.classList.add("rippled"), l($(`.${t.className.split(" ")[0]}`), t.clientWidth)
        }
        if (6 === e) {
            let t = i[e].querySelector(".about__img");
            t.classList.add("rippled"), l($(`.${t.className.split(" ")[0]}`), t.clientWidth)
        }
    }

    function a() {
        return n + 1 !== i.length ? (n++, i[n - 1].classList.remove("active"), i[n - 1].classList.remove("animate"), i[n].classList.add("active"), i[n].classList.add("animate"), n !== i.length ? i[n - 1].classList.add("active") : i[n - 1].classList.add("invise"), i[n + 1] && (i[n + 1].classList.remove("active"), i[n + 1].classList.add("invise")), c(n)) : n = n, n
    }

    function d() {
        return n - 1 != -1 ? (n--, i[n].classList.remove("invise"), i[n].classList.add("animate"), i[n].classList.add("active"), i[n + 1].classList.remove("animate"), i[n + 1].classList.remove("active"), i[n + 1].classList.add("invise"), c(n)) : n = n, n
    }

    function r() {
        n === i.length - 2 ? $("html,body").animate({
            scrollTop: i[n].offsetTop - (document.documentElement.clientHeight - i[n].clientHeight) / 2,
            behavior: "smooth"
        }, 800, (() => {
            setTimeout((() => {
            }), t)
        })) : $("html,body").animate({scrollTop: i[n].offsetTop, behavior: "smooth"}, 800, (() => {
            setTimeout((() => {
            }), t)
        }))
    }

    function u(n, s, o) {
        e || 0 === i[2].offsetTop || (e = !0, 0 !== s ? (n.preventDefault(), setTimeout((function () {
            e = !1
        }), t)) : e = !1, s > 0 && 0 === o ? (a(), r()) : s < 0 && 0 === o && (d(), r()))
    }

    window.addEventListener("wheel", (function (e) {
        if (s.classList.contains("open") || o.classList.contains("open")) return !1;
        if (document.documentElement.clientWidth >= 1366) {
            let t = e.deltaY, n = e.deltaX, s = i[i.length - 1].offsetTop;
            pageYOffset > s - 10 && 0 !== s ? t < 0 && 0 === n && (e.preventDefault(), u(e, t, n)) : (0 !== t && e.preventDefault(), u(e, t, n))
        }
    }), {passive: !1});
    let f = 0, m = 0;

    function p(t, s, o) {
        if (!e && 0 !== i[2].offsetTop) {
            if (e = !0, s > 30 || s < -30 ? (t.preventDefault(), setTimeout((function () {
                e = !1
            }), 400)) : e = !1, s < -30) return a(), r(), n;
            s > 30 && (d(), r())
        }
    }

    window.addEventListener("touchmove", (e => {
        if (document.documentElement.clientWidth >= 1366) if (s.classList.contains("open") || o.classList.contains("open")) ; else {
            let t = i[i.length - 1].offsetTop, n = e.changedTouches[0].clientY - f, s = e.changedTouches[0].clientX - m;
            if ((s > 50 || s < -50) && n < 50 && n > -50) ; else {
                if (!(pageYOffset > t - 10 && 0 !== t)) return e.preventDefault(), e.stopPropagation(), !1;
                if (n > 0) return e.preventDefault(), e.stopPropagation(), !1
            }
        }
    }), document.documentElement.clientWidth >= 1336 ? {passive: !1} : {passive: !0}), window.addEventListener("touchstart", (e => {
        if (document.documentElement.clientWidth >= 1366) return f = e.changedTouches[0].clientY, m = e.changedTouches[0].clientX, !1
    }), document.documentElement.clientWidth >= 1336 ? {passive: !1} : {passive: !0}), window.addEventListener("touchend", (function (e) {
        if (s.classList.contains("open") || o.classList.contains("open")) return e.preventDefault(), !1;
        let t = e.changedTouches[0].clientY - f, n = e.changedTouches[0].clientX - m;
        if (document.documentElement.clientWidth >= 1366 && 0 !== t && 0 !== n) {
            let s = i[i.length - 1].offsetTop;
            pageYOffset < s - 10 && 0 !== s ? t < 50 && t > -50 ? e.preventDefault() : p(e, t, n) : t > 0 && p(e, t, n)
        }
    }), document.documentElement.clientWidth >= 1336 ? {passive: !1} : {passive: !0}), window.addEventListener("scroll", (e => {
        e.preventDefault(), n !== i.length - 1 && document.documentElement.clientWidth >= 1366 && (n === i.length - 2 ? window.scrollTo(0, i[n].offsetTop - (document.documentElement.clientHeight - i[n].clientHeight) / 2) : window.scrollTo(0, i[n].offsetTop))
    }));
    let h = 0;
    window.addEventListener("scroll", (e => {
        if (document.documentElement.clientWidth < 1366) {
            if (pageYOffset > i[i.length - 2].offsetTop) return n = i.length - 1, i[n].classList.add("animate"), i[n].classList.add("active"), n;
            if (i[h + 1] && pageYOffset + document.documentElement.clientHeight > i[h + 1].offsetTop + i[h + 1].clientHeight / 10 - 10) return h += 1, n = h, i[n].classList.add("animate"), i[n].classList.add("active"), h
        }
    }));
    let g = document.documentElement.clientWidth, v = document.documentElement.clientHeight;
    window.addEventListener("resize", (() => {
        if (document.documentElement.clientWidth !== g && document.documentElement.clientHeight !== v) return i[n].classList.add("active"), window.scrollTo(0, i[n].offsetTop), g = document.documentElement.clientWidth, v = document.documentElement.clientHeight
    }));
    const L = document.querySelector(".arrow__up");
    ["click", "touchend"].forEach((e => L.addEventListener(e, (() => (n = 0, $("html,body").animate({
        scrollTop: i[n].offsetTop,
        behavior: "smooth"
    }, 800), n))))), document.querySelectorAll(".header__nav__items li").forEach((e => {
        let t = e.getAttribute("data-nav"), s = e.getAttribute("data-counter");
        ["click", "touchend"].forEach((o => e.addEventListener(o, (() => {
            n = +s, document.querySelector("html").classList.remove("lock"), i.forEach((e => {
                e.classList.add("active")
            })), $("html,body").animate({
                scrollTop: document.querySelector(`.${t}`).offsetTop,
                behavior: "smooth"
            }, 800), setTimeout((() => {
                i[n].classList.add("animate")
            }), 300)
        }), !1)))
    })), document.onkeydown = function (t) {
        if (document.documentElement.clientWidth >= 1366) {
            if (32 === t.keyCode && t.target === document.body) {
                let n = i[i.length - 1].offsetTop;
                if (pageYOffset > n - 10 && 0 !== n) ; else if (s.classList.contains("open") || o.classList.contains("open")) ; else {
                    if (e || 0 === i[2].offsetTop) return void t.preventDefault();
                    e = !0, setTimeout((function () {
                        e = !1
                    }), 700), a(), r()
                }
            }
            if ("38" == t.keyCode) {
                let n = i[i.length - 1].offsetTop;
                if (pageYOffset > n - 10 && 0 !== n) ; else if (s.classList.contains("open") || o.classList.contains("open")) ; else {
                    if (e || 0 === i[2].offsetTop) return void t.preventDefault();
                    e = !0, setTimeout((function () {
                        e = !1
                    }), 700), d(), r()
                }
            } else if ("40" == t.keyCode) {
                let n = i[i.length - 1].offsetTop;
                if (pageYOffset > n - 10 && 0 !== n) ; else if (s.classList.contains("open") || o.classList.contains("open")) ; else {
                    if (e || 0 === i[2].offsetTop) return void t.preventDefault();
                    e = !0, setTimeout((function () {
                        e = !1
                    }), 700), a(), r()
                }
            }
        }
    }
}();
//# sourceMappingURL=scroll-dist.js.map