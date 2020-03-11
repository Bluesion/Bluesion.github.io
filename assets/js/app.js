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
					s = o()(".js-menu"),
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
				"undefined" != typeof disableFadeAnimation && disableFadeAnimation ? o()("[data-aos]").addClass("no-aos-animation") : h.a.init({
					once: !0,
					startEvent: "DOMContentLoaded"
				}),
				c()(".lozad", {
					loaded: function (e) {
						e.classList.add("loaded")
					}
				}).observe(), Object(d.a)(".js-tooltip"), "undefined" != typeof ghostSearchApiKey ? (M = ghostHost, D = ghostSearchApiKey, O = new GhostContentAPI({
					url: M,
					key: D,
					version: "v2"
				}),
				x = [],
				T = {
					shouldSort: !0,
					threshold: 0,
					location: 0,
					distance: 100,
					tokenize: !0,
					matchAllTokens: !0,
					maxPatternLength: 32,
					minMatchCharLength: 1,
					keys: ["title", "custom_excerpt", "html"]
				}
			})
		}
	},
	[
		[15, 0, 1]
	]
]);