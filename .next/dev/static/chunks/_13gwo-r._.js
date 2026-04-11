(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/useNavbar.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useNavbar",
    ()=>useNavbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useNavbar() {
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDrawerOpen, setIsDrawerOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavbar.useEffect": ()=>{
            const handleScroll = {
                "useNavbar.useEffect.handleScroll": ()=>setIsScrolled(window.scrollY > 40)
            }["useNavbar.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "useNavbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["useNavbar.useEffect"];
        }
    }["useNavbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useNavbar.useEffect": ()=>{
            if (!isDrawerOpen) return;
            const handleKeyDown = {
                "useNavbar.useEffect.handleKeyDown": (e)=>{
                    if (e.key === 'Escape') setIsDrawerOpen(false);
                }
            }["useNavbar.useEffect.handleKeyDown"];
            const handleClickOutside = {
                "useNavbar.useEffect.handleClickOutside": (e)=>{
                    const target = e.target;
                    if (!target.closest('.navbar')) setIsDrawerOpen(false);
                }
            }["useNavbar.useEffect.handleClickOutside"];
            document.addEventListener('keydown', handleKeyDown);
            document.addEventListener('click', handleClickOutside);
            document.body.style.overflow = 'hidden';
            return ({
                "useNavbar.useEffect": ()=>{
                    document.removeEventListener('keydown', handleKeyDown);
                    document.removeEventListener('click', handleClickOutside);
                    document.body.style.overflow = '';
                }
            })["useNavbar.useEffect"];
        }
    }["useNavbar.useEffect"], [
        isDrawerOpen
    ]);
    const toggleDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavbar.useCallback[toggleDrawer]": ()=>setIsDrawerOpen({
                "useNavbar.useCallback[toggleDrawer]": (v)=>!v
            }["useNavbar.useCallback[toggleDrawer]"])
    }["useNavbar.useCallback[toggleDrawer]"], []);
    const closeDrawer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useNavbar.useCallback[closeDrawer]": ()=>setIsDrawerOpen(false)
    }["useNavbar.useCallback[closeDrawer]"], []);
    return {
        isScrolled,
        isDrawerOpen,
        toggleDrawer,
        closeDrawer
    };
}
_s(useNavbar, "24lc0qttJb4IFD+1Pde8eo5juuk=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useActiveSection.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useActiveSection",
    ()=>useActiveSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
const SECTIONS = [
    'home',
    'sobre',
    'servicos',
    'noticias',
    'contato'
];
function useActiveSection() {
    _s();
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('home');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useActiveSection.useEffect": ()=>{
            const OFFSET = 90;
            const handleScroll = {
                "useActiveSection.useEffect.handleScroll": ()=>{
                    const scrollY = window.scrollY + OFFSET;
                    let current = SECTIONS[0];
                    for (const id of SECTIONS){
                        const el = document.getElementById(id);
                        if (el && el.offsetTop <= scrollY) current = id;
                    }
                    setActiveSection(current);
                }
            }["useActiveSection.useEffect.handleScroll"];
            handleScroll();
            window.addEventListener('scroll', handleScroll, {
                passive: true
            });
            return ({
                "useActiveSection.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["useActiveSection.useEffect"];
        }
    }["useActiveSection.useEffect"], []);
    return activeSection;
}
_s(useActiveSection, "65M0EpCty5hXphTge5SPn9c/pY8=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/useSmoothScroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSmoothScroll",
    ()=>useSmoothScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useSmoothScroll() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSmoothScroll.useEffect": ()=>{
            const handleClick = {
                "useSmoothScroll.useEffect.handleClick": (e)=>{
                    const target = e.target;
                    const anchor = target.closest('a[href^="#"]');
                    if (!anchor) return;
                    const hash = anchor.getAttribute('href');
                    if (!hash || hash === '#') return;
                    const el = document.querySelector(hash);
                    if (!el) return;
                    e.preventDefault();
                    const navbarHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--navbar-height') || '72', 10);
                    const top = el.getBoundingClientRect().top + window.scrollY - navbarHeight;
                    window.scrollTo({
                        top,
                        behavior: 'smooth'
                    });
                }
            }["useSmoothScroll.useEffect.handleClick"];
            document.addEventListener('click', handleClick);
            return ({
                "useSmoothScroll.useEffect": ()=>document.removeEventListener('click', handleClick)
            })["useSmoothScroll.useEffect"];
        }
    }["useSmoothScroll.useEffect"], []);
}
_s(useSmoothScroll, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar/Navbar.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "active": "Navbar-module__dVeNwG__active",
  "brand": "Navbar-module__dVeNwG__brand",
  "brandName": "Navbar-module__dVeNwG__brandName",
  "brandOab": "Navbar-module__dVeNwG__brandOab",
  "brandText": "Navbar-module__dVeNwG__brandText",
  "cta": "Navbar-module__dVeNwG__cta",
  "drawer": "Navbar-module__dVeNwG__drawer",
  "drawerLink": "Navbar-module__dVeNwG__drawerLink",
  "drawerNav": "Navbar-module__dVeNwG__drawerNav",
  "drawerOpen": "Navbar-module__dVeNwG__drawerOpen",
  "hamburger": "Navbar-module__dVeNwG__hamburger",
  "inner": "Navbar-module__dVeNwG__inner",
  "link": "Navbar-module__dVeNwG__link",
  "nav": "Navbar-module__dVeNwG__nav",
  "navbar": "Navbar-module__dVeNwG__navbar",
  "open": "Navbar-module__dVeNwG__open",
  "scrolled": "Navbar-module__dVeNwG__scrolled",
});
}),
"[project]/components/Navbar/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNavbar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useNavbar.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useActiveSection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useActiveSection.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSmoothScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/useSmoothScroll.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/Navbar/Navbar.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const NAV_LINKS = [
    {
        href: '#home',
        label: 'Home'
    },
    {
        href: '#sobre',
        label: 'Sobre'
    },
    {
        href: '#servicos',
        label: 'Serviços'
    },
    {
        href: '#noticias',
        label: 'Notícias'
    },
    {
        href: '#contato',
        label: 'Onde Estamos'
    }
];
const WA_HREF = 'https://wa.me/5511993198275?text=Olá%2C%20gostaria%20de%20agendar%20uma%20consulta.';
function Navbar() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSmoothScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSmoothScroll"])();
    const { isScrolled, isDrawerOpen, toggleDrawer, closeDrawer } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNavbar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavbar"])();
    const activeSection = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useActiveSection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveSection"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: `navbar ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navbar} ${isScrolled ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].scrolled : ''}`,
                role: "navigation",
                "aria-label": "Navegação principal",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "#home",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brand,
                            "aria-label": "Dr. Eduardo Gonçalves Advocacia – início",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-solid fa-scale-balanced",
                                    style: {
                                        color: 'var(--color-accent)',
                                        fontSize: 'var(--text-xl)'
                                    },
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar/Navbar.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandText,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandName,
                                            children: "Dr. Eduardo Gonçalves"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar/Navbar.tsx",
                                            lineNumber: 34,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].brandOab,
                                            children: "OAB/RS 00.000"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar/Navbar.tsx",
                                            lineNumber: 35,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Navbar/Navbar.tsx",
                                    lineNumber: 33,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar/Navbar.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nav,
                            role: "list",
                            children: NAV_LINKS.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: href,
                                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].link} ${activeSection === href.slice(1) ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar/Navbar.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                }, href, false, {
                                    fileName: "[project]/components/Navbar/Navbar.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar/Navbar.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: WA_HREF,
                            className: `btn btn--whatsapp btn--sm ${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].cta}`,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label": "Contato via WhatsApp",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "fa-brands fa-whatsapp",
                                    "aria-hidden": "true"
                                }, void 0, false, {
                                    fileName: "[project]/components/Navbar/Navbar.tsx",
                                    lineNumber: 59,
                                    columnNumber: 13
                                }, this),
                                "WhatsApp"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar/Navbar.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger} ${isDrawerOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ''}`,
                            "aria-label": "Abrir menu de navegação",
                            "aria-expanded": isDrawerOpen,
                            "aria-controls": "mobile-drawer",
                            onClick: toggleDrawer,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Navbar/Navbar.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Navbar/Navbar.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {}, void 0, false, {
                                    fileName: "[project]/components/Navbar/Navbar.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Navbar/Navbar.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Navbar/Navbar.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Navbar/Navbar.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "mobile-drawer",
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawer} ${isDrawerOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawerOpen : ''}`,
                "aria-hidden": !isDrawerOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawerNav,
                        "aria-label": "Menu mobile",
                        children: NAV_LINKS.map(({ href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].drawerLink} ${activeSection === href.slice(1) ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Navbar$2f$Navbar$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].active : ''}`,
                                onClick: closeDrawer,
                                children: label
                            }, href, false, {
                                fileName: "[project]/components/Navbar/Navbar.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar/Navbar.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: WA_HREF,
                        className: "btn btn--whatsapp",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        onClick: closeDrawer,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "fa-brands fa-whatsapp",
                                "aria-hidden": "true"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar/Navbar.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            "Fale pelo WhatsApp"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar/Navbar.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar/Navbar.tsx",
                lineNumber: 78,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Navbar/Navbar.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
_s(Navbar, "s7v3xEI4+YRZk9Omj/WbwXldPi8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useSmoothScroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSmoothScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useNavbar$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNavbar"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$useActiveSection$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveSection"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/WhatsAppButton/WhatsAppButton.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "btn": "WhatsAppButton-module__WRIqmG__btn",
  "float": "WhatsAppButton-module__WRIqmG__float",
  "pulseRing": "WhatsAppButton-module__WRIqmG__pulseRing",
  "tooltip": "WhatsAppButton-module__WRIqmG__tooltip",
});
}),
"[project]/components/WhatsAppButton/WhatsAppButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppButton$2f$WhatsAppButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/components/WhatsAppButton/WhatsAppButton.module.css [app-client] (css module)");
'use client';
;
;
;
const WA_HREF = 'https://wa.me/5511993198275?text=Olá%2C%20gostaria%20de%20falar%20com%20um%20advogado.';
function WhatsAppButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppButton$2f$WhatsAppButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].float,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppButton$2f$WhatsAppButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].tooltip,
                children: "Fale conosco agora!"
            }, void 0, false, {
                fileName: "[project]/components/WhatsAppButton/WhatsAppButton.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: WA_HREF,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppButton$2f$WhatsAppButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].btn,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": "Abrir conversa no WhatsApp",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WhatsAppButton$2f$WhatsAppButton$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].pulseRing,
                        "aria-hidden": "true",
                        animate: {
                            scale: [
                                1,
                                1.4,
                                1.4
                            ],
                            opacity: [
                                0.6,
                                0,
                                0
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeOut'
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/WhatsAppButton/WhatsAppButton.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "fa-brands fa-whatsapp",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/WhatsAppButton/WhatsAppButton.tsx",
                        lineNumber: 26,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WhatsAppButton/WhatsAppButton.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WhatsAppButton/WhatsAppButton.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_13gwo-r._.js.map