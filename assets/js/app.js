(window.webpackJsonp = window.webpackJsonp || []).push([
	[2], {
		1: function (e, t, n) {
			"use strict";
			n.r(t), n.d(t, "isRTL", function () {
				return a
			}), n.d(t, "isMobile", function () {
				return s
			}), n.d(t, "isDarkMode", function () {
				return o
			}), n.d(t, "formatDate", function () {
				return i
			});
			var a = function () {
					var e = document.querySelector("html");
					return "ar" === e.getAttribute("lang") || "he" === e.getAttribute("lang")
				},
				s = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "768px";
					return window.matchMedia("(max-width: ".concat(e, ")")).matches
				},
				o = function () {
					var e = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
					return e && e.matches
				},
				i = function (e) {
					return e ? new Date(e).toLocaleDateString(document.documentElement.lang, {
						year: "numeric",
						month: "long",
						day: "numeric"
					}) : ""
				}
		},
		15: function (e, t, n) {
			e.exports = n(16)
		},
		16: function (e, t, n) {
			"use strict";
			n.r(t);
			var a = n(12),
				s = n(0),
				o = n.n(s),
				i = n(6),
				c = n.n(i),
				l = n(7),
				r = n.n(l),
				d = (n(5), n(8)),
				u = n(10),
				h = n.n(u),
				m = n(11),
				f = n.n(m),
				p = n(1);
			Object(a.a)({}), o()(document).ready(function () {
				Object(p.isRTL)() && o()("html").attr("dir", "rtl").addClass("rtl");
				var e = o()("body"),
					t = o()(".js-header"),
					n = o()(".js-open-menu"),
					a = o()(".js-close-menu"),
					s = o()(".js-menu"),
					i = o()(".js-toggle-submenu"),
					l = o()(".js-submenu-option")[0],
					u = o()(".js-submenu"),
					m = o()(".js-recent-articles"),
					g = o()(".js-open-search"),
					v = o()(".js-close-search"),
					b = o()(".js-search"),
					k = o()(".js-input-search"),
					w = o()(".js-search-results"),
					j = o()(".js-no-results"),
					C = o()(".js-toggle-darkmode"),
					D = o()(".js-toggle-darkmode-mobile"),
					y = localStorage.getItem("theme"),
					z = localStorage.getItem("theme"),
					_ = null,
					S = !1;

				function A() {
					t.removeClass("submenu-is-active"), i.removeClass("active"), u.removeClass("opened").addClass("closed")
				}

				function L() {
					e.toggleClass("no-scroll-y")
				}
				n.click(function () {
					t.addClass("mobile-menu-opened"), s.addClass("opened"), L()
				}), a.click(function () {
					t.removeClass("mobile-menu-opened"), s.removeClass("opened"), L()
				}), i.click(function () {
					(S = !S) ? (t.addClass("submenu-is-active"), i.addClass("active"), u.removeClass("closed").addClass("opened")) : A()
				}), g.click(function () {
					b.addClass("opened"), setTimeout(function () {
						k.focus()
					}, 400), L()
				}), v.click(function () {
					k.blur(), b.removeClass("opened"), L()
				}),
				k.keyup(function () {
					if (k.val().length > 0 && _) {
						var e = _.search(k.val()),
							t = "";
						if (e.length > 0) {
							for (var n = 0, a = e.length; n < a; n++) t += '\n          <article class="m-result">            <a href="'.concat(e[n].url, '" class="m-result__link">              <h3 class="m-result__title">').concat(e[n].title, '</h3>              <span class="m-result__date">').concat(Object(p.formatDate)(e[n].published_at), "</span>            </a>          </article>");
							j.hide(), w.html(t), w.show()
						} else w.html(""), w.hide(), j.show()
					} else w.html(""), w.hide(), j.hide()
				}),
				D.change(function () {
					D.is(":checked") ? (o()("html").attr("data-theme", "dark"), localStorage.setItem("theme", "dark")) : (o()("html").attr("data-theme", "light"), localStorage.setItem("theme", "light"))
				}),
				C.change(function () {
					C.is(":checked") ? (o()("html").attr("data-theme", "dark"), localStorage.setItem("theme", "dark")) : (o()("html").attr("data-theme", "light"), localStorage.setItem("theme", "light"))
				}),
				o()(window).click(function (e) {
					S && l && !l.contains(e.target) && (S = !1, A())
				}),
				z ? (o()("html").attr("data-theme", z), "dark" === z && D.attr("checked", !0)) : Object(p.isDarkMode)() && D.attr("checked", !0),
				y ? (o()("html").attr("data-theme", y), "dark" === y && C.attr("checked", !0)) : Object(p.isDarkMode)() && C.attr("checked", !0);
				var M, D, O, x, T, I = document.querySelector(".js-header");
				I && new r.a(I, {
					tolerance: {
						down: 10,
						up: 20
					},
					offset: 15
				}).init();
				m.length > 0 && m.slick({
					adaptiveHeight: !0,
					arrows: !1,
					infinite: !1,
					mobileFirst: !0,
					variableWidth: !0,
					rtl: Object(p.isRTL)()
				}), "undefined" != typeof disableFadeAnimation && disableFadeAnimation ? o()("[data-aos]").addClass("no-aos-animation") : h.a.init({
					once: !0,
					startEvent: "DOMContentLoaded"
				}), c()(".lozad", {
					loaded: function (e) {
						e.classList.add("loaded")
					}
				}).observe(), Object(d.a)(".js-tooltip"), "undefined" != typeof ghostSearchApiKey ? (M = ghostHost, D = ghostSearchApiKey, O = new GhostContentAPI({
					url: M,
					key: D,
					version: "v2"
				}), x = [], T = {
					shouldSort: !0,
					threshold: 0,
					location: 0,
					distance: 100,
					tokenize: !0,
					matchAllTokens: !0,
					maxPatternLength: 32,
					minMatchCharLength: 1,
					keys: ["title", "custom_excerpt", "html"]
				}, O.posts.browse({
					limit: "all",
					fields: "id, title, url, published_at, custom_excerpt, html"
				}).then(function (e) {
					for (var t = 0, n = e.length; t < n; t++) x.push(e[t]);
					_ = new f.a(x, T)
				}).catch(function (e) {
					console.log(e)
				})) : (g.css("visibility", "hidden"), v.remove(), b.remove())
			})
		}
	},
	[
		[15, 0, 1]
	]
]);