// Inserir no html
// <scriptsrc="https://cdn.utmify.com.br/scripts/utms/latest.js"asyncdefer></script>

(() => {
   var e, t;
   console.log("utms script loaded! 2.3.11"),
      function (e) {
         e.Doppus = "doppus"
      }(e || (e = {})),
      function (e) {
         e.PandaVideo = "pandavideo.com", e.YouTube = "youtube.com"
      }(t || (t = {}));
   const n = ["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term"];
   class o {
      static addUtmParametersToUrl(e) {
         const t = o.urlWithoutParams(e),
            n = o.paramsFromUrl(e),
            i = o.getUtmParameters(),
            r = new URLSearchParams;
         n.forEach(((e, t) => r.append(t, e))), i.forEach(((e, t) => r.append(t, e)));
         const u = o.urlParametersWithoutDuplicates(r),
            a = o.simplifyParametersIfNecessary(t, u),
            s = -1 === t.indexOf("?") ? "?" : "&";
         return `${t}${s}${a.toString()}`
      }
      static urlWithoutParams(e) {
         return e.split("?")[0]
      }
      static paramsFromUrl(e) {
         if (!e) return new URLSearchParams;
         const t = e instanceof URL ? e.href : e;
         if (!t.includes("?")) return new URLSearchParams;
         const n = t.split("?");
         if (n.length <= 1) return new URLSearchParams;
         const o = n[1];
         return new URLSearchParams(o)
      }
      static urlParametersWithoutDuplicates(e) {
         const t = Array.from(e.keys()),
            n = new Map;
         t.forEach((t => {
            const o = e.getAll(t);
            n.set(t, o[o.length - 1])
         }));
         const o = new URLSearchParams;
         return n.forEach(((e, t) => {
            o.append(t, e)
         })), o
      }
      static getUtmParameters() {
         var e;
         const t = "hQwK21wXxR",
            n = "rKm-km-rKm",
            o = new URLSearchParams(window.location.search);

         function i(e) {
            const t = o.get(e);
            if (null != t && "null" !== t && "undefined" !== t && "" !== t) return t;
            const n = localStorage.getItem(e);
            if (!n) return "";
            const i = localStorage.getItem(r(e));
            return !i || new Date(i) < new Date ? (localStorage.removeItem(e), localStorage.removeItem(r(e)), "") : n
         }

         function u(e) {
            return e.join(t)
         }
         const a = i("utm_term"),
            s = i("utm_content"),
            c = i("utm_medium"),
            l = i("utm_campaign"),
            d = function (e) {
               const t = function () {
                  var e;
                  const t = localStorage.getItem("lead");
                  if (!t) return null;
                  const n = JSON.parse(t);
                  return null !== (e = null == n ? void 0 : n._id) && void 0 !== e ? e : null
               }();
               return t ? e.includes("jLj") ? e : `${e}jLj${t}` : e
            }(i("utm_source")),
            m = new URLSearchParams;
         m.set("utm_source", d), m.set("utm_campaign", l.includes(n) ? l : `${l}${n}${c}`), m.set("utm_medium", c), m.set("utm_content", s), m.set("utm_term", a);
         const w = null !== (e = m.get("utm_campaign")) && void 0 !== e ? e : "",
            v = [d, w, c, s, a],
            f = u(v);
         m.set("subid", d), m.set("sid2", w), m.set("subid2", w), m.set("subid3", c), m.set("subid4", s), m.set("subid5", w);
         const h = i("xcod"),
            p = i("src"),
            g = "" !== h ? h : p,
            _ = function (e, o) {
               if (e.length <= 255) return e;
               const i = Math.floor(18.8);

               function r(e, t, o) {
                  function r(e) {
                     return e.substring(0, i) + "..."
                  }
                  if (!t) return r(e);
                  const u = null != o ? o : "|",
                     a = e.split(n)[0].split(u),
                     s = a.length > 1 ? a[a.length - 1] : "";
                  return `${r(1===a.length?a[0]:a.slice(0,-1).join(u))}${u}${s}`
               }
               const [a, s, c, l, d] = e.split(t);
               return u([r(a, !0, "jLj"), r(s, !0), r(c, !0), r(l, !0), r(d, !1)])
            }(v.every((e => "" === e)) ? g : f);
         m.set("xcod", _), m.set("sck", _), null != p && "" !== p && m.set("src", p);
         const S = o.get("fbclid");
         return null != S && "" !== S && m.set("fbclid", S), (() => {
            const e = e => null == e || "" === e,
               t = i("utm_source"),
               n = i("utm_medium"),
               o = i("utm_campaign"),
               r = i("utm_content"),
               u = i("utm_term"),
               a = i("xcod"),
               s = i("src"),
               c = m.get("fbclid");
            return e(t) && e(n) && e(o) && e(r) && e(u) && e(a) && e(s) && e(c)
         })() && m.set("utm_source", "organic"), m
      }
      static simplifyParametersIfNecessary(t, o) {
         if (!Object.values(e).some((e => t.includes(e)))) return o;
         const i = new URLSearchParams;
         return o.forEach(((e, t) => {
            n.includes(t) && i.append(t, e)
         })), i
      }
   }
   window.paramsList = ["utm_source", "utm_campaign", "utm_medium", "utm_content", "utm_term", "xcod", "src"], window.itemExpInDays = 7;
   const i = ["utm_source", "utm_campaign", "utm_medium", "utm_content", "xcod", "sck"];

   function r(e) {
      return `${e}_exp`
   }

   function u() {
      function e(e) {
         document.querySelectorAll("a").forEach((t => {
            if (!(t.href.startsWith("mailto:") || t.href.startsWith("tel:") || t.href.startsWith("whatsapp:") || t.href.includes("#"))) {
               if (e && i.every((e => t.href.includes(e)))) return;
               t.href = o.addUtmParametersToUrl(t.href)
            }
         }))
      }

      function n(e) {
         document.querySelectorAll("form").forEach((t => {
            e && i.every((e => t.action.includes(e))) || (t.action = o.addUtmParametersToUrl(t.action), o.getUtmParameters().forEach(((e, n) => {
               const o = (i = n, t.querySelector(`input[name="${i}"]`));
               var i;
               if (o) return void o.setAttribute("value", e);
               const r = ((e, t) => {
                  const n = document.createElement("input");
                  return n.type = "hidden", n.name = e, n.value = t, n
               })(n, e);
               t.appendChild(r)
            })))
         }))
      }! function () {
         const e = new URLSearchParams(window.location.search);
         window.paramsList.forEach((t => {
            const n = e.get(t);
            n && ((e, t) => {
               localStorage.setItem(e, t);
               const n = new Date((new Date).getTime() + 24 * window.itemExpInDays * 60 * 60 * 1e3);
               localStorage.setItem(r(e), n.toISOString())
            })(t, n)
         }))
      }();
      const u = function () {
         var e, t, n, o, i, r, u, a, s, c, l, d, m, w, v, f, h, p, g, _, S;
         const U = null !== (n = null === (t = null === (e = null === window || void 0 === window ? void 0 : window.BOOMR) || void 0 === e ? void 0 : e.themeName) || void 0 === t ? void 0 : t.includes("Dropmeta")) && void 0 !== n && n,
            P = null !== (r = null === (i = null === (o = null === window || void 0 === window ? void 0 : window.BOOMR) || void 0 === o ? void 0 : o.themeName) || void 0 === i ? void 0 : i.includes("Warehouse")) && void 0 !== r && r,
            y = null !== (s = null === (a = null === (u = null === window || void 0 === window ? void 0 : window.BOOMR) || void 0 === u ? void 0 : u.themeName) || void 0 === a ? void 0 : a.includes("Classic®")) && void 0 !== s && s,
            O = null !== (d = null === (l = null === (c = null === window || void 0 === window ? void 0 : window.BOOMR) || void 0 === c ? void 0 : c.themeName) || void 0 === l ? void 0 : l.includes("Tema Vision Nichada")) && void 0 !== d && d,
            b = null !== (v = null === (w = null === (m = null === window || void 0 === window ? void 0 : window.BOOMR) || void 0 === m ? void 0 : m.themeName) || void 0 === w ? void 0 : w.includes("Waresabino")) && void 0 !== v && v,
            L = null !== (p = null === (h = null === (f = null === window || void 0 === window ? void 0 : window.BOOMR) || void 0 === f ? void 0 : f.themeName) || void 0 === h ? void 0 : h.includes("Dawn")) && void 0 !== p && p,
            R = null !== (S = null === (_ = null === (g = null === window || void 0 === window ? void 0 : window.BOOMR) || void 0 === g ? void 0 : g.themeName) || void 0 === _ ? void 0 : _.includes("Vortex")) && void 0 !== S && S;
         return U || P || y || O || b || L || R
      }();
      e(),
         function () {
            const e = window.open;
            window.open = function (t, n, i) {
               var r;
               return t = o.addUtmParametersToUrl(null !== (r = null == t ? void 0 : t.toString()) && void 0 !== r ? r : ""), e(t, n || "", i || "")
            }
         }(), u || (n(), function () {
            const {
               body: t
            } = document;
            new MutationObserver(((t, o) => {
               const i = e => {
                  if (e.nodeType !== Node.ELEMENT_NODE) return !1;
                  const t = e;
                  return "INPUT" === t.tagName && "hidden" === (null == t ? void 0 : t.type)
               };
               t.some((e => Array.from(e.addedNodes).some(i))) || (e(!0), n(!0))
            })).observe(t, {
               subtree: !0,
               childList: !0
            })
         }(), document.querySelectorAll("iframe").forEach((e => {
            Object.values(t).some((t => e.src.includes(t))) || (e.src = o.addUtmParametersToUrl(e.src))
         })))
   }
   const a = () => {
      u(), setTimeout(u, 2e3), setTimeout(u, 3e3), setTimeout(u, 5e3), setTimeout(u, 9e3)
   };
   "complete" === document.readyState ? a() : window.addEventListener("load", a)
})();