exports.id = 333;
exports.ids = [333];
exports.modules = {

/***/ 96086:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 49449));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 5953));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 99921));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 67120, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 27230, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 973));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2598));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 79290));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98931));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14760));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 60487));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9295))

/***/ }),

/***/ 14760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Breadcrumbs: () => (/* binding */ Breadcrumbs)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45781);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48657);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91148);
/* __next_internal_client_entry_do_not_use__ Breadcrumbs auto */ 





const Breadcrumbs = ({ color })=>{
    const { t, i18n } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    const [breadcrumbs, setBreadcrumbs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (router) {
            const linkPath = pathname.split("/");
            linkPath.shift();
            const pathArray = linkPath.map((path, i)=>{
                return {
                    title: t(`bread.${path}`),
                    href: "/" + linkPath.slice(0, i + 1).join("/"),
                    key: path
                };
            });
            setBreadcrumbs([
                {
                    title: t(`bread.home`),
                    href: "/",
                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),
                    key: "home"
                },
                ...pathArray
            ]);
        }
    }, [
        router,
        i18n.language
    ]);
    if (!breadcrumbs) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().flex),
                items: breadcrumbs.map((it, index)=>({
                        key: it.key,
                        title: it.title,
                        className: color ? (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().itemWhite) : (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item)
                    }))
            })
        })
    });
};


/***/ }),

/***/ 78351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* reexport */ Button),
  V: () => (/* reexport */ ButtonWhite)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/shared/components/button/button.tsx


const Button = ({ text, onClick })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "btn",
        onClick: onClick,
        children: text
    });
};

;// CONCATENATED MODULE: ./src/shared/components/button/button-white.tsx


const ButtonWhite = ({ text, onClick })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: "btn btn-white",
        onClick: onClick,
        children: text
    });
};

;// CONCATENATED MODULE: ./src/shared/components/button/index.ts




/***/ }),

/***/ 49449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Footer: () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(30478);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91148);
/* __next_internal_client_entry_do_not_use__ Footer auto */ 




const Footer = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .$G)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("footer", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "sectionTitle",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: t("shared.sectionTitle.contact")
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contact),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        t("shared.element.adress"),
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Україна, 29000, м. Хмельницький, віл. Чорновола, 31"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        t("shared.element.phone"),
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "+380977262832"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        t("shared.element.email"),
                                        ":"
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "ula-hzb@ukr.net"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().social),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "https://www.instagram.com/hzb.ukraine/",
                            target: "_blank",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                width: "15",
                                height: "15",
                                viewBox: "0 0 15 15",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M12.4928 15H2.50719C1.12731 15 0 13.8727 0 12.4928V2.50719C0 1.12731 1.12731 0 2.50719 0H12.4928C13.8727 0 15 1.12731 15 2.50719V12.4928C15 13.8789 13.8788 15 12.4928 15Z",
                                        fill: "#FD7A19"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M7.50245 11.353C6.4737 11.353 5.50655 10.9526 4.77965 10.2257C4.05275 9.49883 3.65234 8.53168 3.65234 7.50293C3.65234 6.47419 4.05275 5.50704 4.77965 4.78014C5.50655 4.05324 6.4737 3.65283 7.50245 3.65283C8.53119 3.65283 9.49834 4.05324 10.2252 4.78014C10.9521 5.50704 11.3525 6.47419 11.3525 7.50293C11.3525 8.53168 10.9521 9.49883 10.2252 10.2257C9.49218 10.9526 8.53119 11.353 7.50245 11.353ZM7.50245 4.47213C5.83304 4.47213 4.47164 5.82737 4.47164 7.50293C4.47164 9.17234 5.82688 10.5337 7.50245 10.5337C9.17185 10.5337 10.5332 9.1785 10.5332 7.50293C10.5271 5.83353 9.17185 4.47213 7.50245 4.47213Z",
                                        fill: "white"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M12.104 3.52633C12.5123 3.52633 12.8432 3.19536 12.8432 2.78709C12.8432 2.37882 12.5123 2.04785 12.104 2.04785C11.6957 2.04785 11.3647 2.37882 11.3647 2.78709C11.3647 3.19536 11.6957 3.52633 12.104 3.52633Z",
                                        fill: "white"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "https://www.instagram.com/hzb.ukraine/",
                            target: "_blank",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                width: "8",
                                height: "15",
                                viewBox: "0 0 8 15",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                                        clipPath: "url(#clip0_1548_1897)",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M2.36789 14.9987C2.36556 14.9664 2.36137 14.9336 2.36137 14.9013C2.36137 12.6992 2.36137 10.4972 2.36137 8.29511C2.36137 8.2769 2.36137 8.25868 2.36137 8.24047C2.36137 8.15942 2.35112 8.14894 2.26818 8.14894C1.75006 8.14894 1.23194 8.14894 0.713815 8.14894C0.501348 8.14894 0.288881 8.14894 0.0764142 8.14894C6.8319e-07 8.14894 0 8.14849 0 8.07244C0 7.23643 0 6.40042 0 5.5644C0 5.51037 0.0284229 5.48335 0.0852671 5.48335C0.812128 5.48335 1.53899 5.48335 2.26585 5.48335C2.32922 5.48335 2.36106 5.45163 2.36137 5.38818C2.36323 4.65416 2.36277 3.92015 2.36975 3.18613C2.37115 3.0518 2.40144 2.91748 2.41961 2.78315C2.43079 2.70255 2.43964 2.6215 2.45781 2.54273C2.48064 2.44392 2.51233 2.34738 2.54075 2.24994C2.56032 2.18346 2.57943 2.11652 2.60226 2.05095C2.62462 1.98584 2.64792 1.92072 2.67587 1.85743C2.70849 1.78367 2.74204 1.70944 2.78304 1.64023C2.85526 1.5182 2.92701 1.3948 3.01135 1.28096C3.10081 1.15984 3.19912 1.04373 3.30442 0.935356C3.39621 0.840644 3.50011 0.75686 3.60309 0.673988C3.67997 0.612516 3.76104 0.554232 3.84631 0.504599C3.9558 0.44085 4.06856 0.380745 4.18551 0.330201C4.30246 0.279658 4.42593 0.24323 4.54661 0.200428C4.62349 0.173107 4.69943 0.143054 4.77725 0.119376C4.82244 0.105716 4.8709 0.102073 4.91796 0.093877C4.99065 0.0815827 5.06287 0.0670116 5.13555 0.056994C5.25949 0.0396909 5.3839 0.0205664 5.5083 0.0105488C5.62898 0.000986506 5.75012 -0.000379532 5.87126 7.5814e-05C6.1005 7.5814e-05 6.32975 0.0018972 6.55899 0.006906C6.77099 0.0119148 6.98299 0.017379 7.19406 0.0310393C7.43075 0.0465211 7.66652 0.0715651 7.90275 0.093877C7.92418 0.0956984 7.94468 0.106171 7.96751 0.113457V2.48763C7.94282 2.48763 7.91952 2.48763 7.89576 2.48763C7.41491 2.48763 6.93406 2.48626 6.45322 2.49036C6.32322 2.49127 6.19183 2.50083 6.06416 2.52269C5.91832 2.54774 5.77528 2.59236 5.64529 2.66521C5.51762 2.7367 5.41884 2.84098 5.33777 2.95891C5.30562 3.00627 5.28978 3.06546 5.27347 3.12147C5.24318 3.22529 5.21709 3.33047 5.19053 3.43566C5.18494 3.45843 5.18401 3.48256 5.18401 3.50624C5.18168 4.14554 5.18075 4.78485 5.17702 5.42415C5.17702 5.48107 5.20498 5.48335 5.24924 5.48335C6.09165 5.48244 6.93406 5.48244 7.77648 5.48335C7.80956 5.48335 7.84217 5.49428 7.8664 5.49838C7.85895 5.57715 7.85522 5.64318 7.84544 5.70875C7.83053 5.81211 7.81049 5.91502 7.79512 6.01838C7.78254 6.1008 7.77275 6.18367 7.76297 6.26654C7.75039 6.37446 7.74107 6.48238 7.72662 6.59029C7.71171 6.70504 7.69308 6.81933 7.67584 6.93363C7.6749 6.94091 7.67304 6.94774 7.67211 6.95503C7.65999 7.07023 7.64881 7.18543 7.6353 7.30063C7.61573 7.46365 7.5957 7.62666 7.57333 7.78922C7.55842 7.89623 7.54025 8.00323 7.52021 8.10933C7.51742 8.12344 7.49924 8.14075 7.48433 8.14576C7.46616 8.15213 7.4438 8.14803 7.4233 8.14803C6.70762 8.14803 5.99194 8.14803 5.27627 8.14803C5.21041 8.14803 5.17748 8.17991 5.17748 8.24366C5.17748 10.4639 5.17749 12.6842 5.17655 14.9045C5.17655 14.9354 5.15978 14.9668 5.15139 14.9978H2.36696L2.36789 14.9987Z",
                                            fill: "#FD7A19"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                            id: "clip0_1548_1897",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                                width: "7.96751",
                                                height: "14.9987",
                                                fill: "white"
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};


/***/ }),

/***/ 5953:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Header: () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/shared/components/header/index.module.scss
var index_module = __webpack_require__(55022);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/shared/config/index.ts + 2 modules
var config = __webpack_require__(47091);
// EXTERNAL MODULE: ./src/shared/components/navigation/index.module.scss
var navigation_index_module = __webpack_require__(82181);
var navigation_index_module_default = /*#__PURE__*/__webpack_require__.n(navigation_index_module);
;// CONCATENATED MODULE: ./src/shared/components/navigation/header-link.tsx




const HeaderLink = ({ it, className, onClick })=>{
    return it.link ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
        href: it.link,
        className: className(it.key),
        onClick: ()=>onClick(it.key),
        children: [
            it.image && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: it.image,
                width: 72,
                height: 72,
                alt: it.label
            }),
            it.label
        ]
    }, it.key) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: className(it.key),
        onClick: ()=>onClick(it.key),
        children: [
            it.image && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: it.image,
                width: 72,
                height: 72,
                alt: it.label
            }),
            it.label
        ]
    });
};

// EXTERNAL MODULE: ./src/shared/providers/context-provider.tsx
var context_provider = __webpack_require__(60487);
// EXTERNAL MODULE: ./src/shared/providers/style-provider.tsx
var style_provider = __webpack_require__(9295);
;// CONCATENATED MODULE: ./src/shared/providers/index.ts



;// CONCATENATED MODULE: ./src/shared/components/navigation/header-navigation.tsx
/* __next_internal_client_entry_do_not_use__ HeaderNavigation auto */ 





const HeaderNavigation = ()=>{
    const [active, setActive] = (0,react_.useState)();
    const { setActiveMenuKey } = (0,context_provider.useAppContext)();
    const linkStyle = (0,react_.useCallback)((key)=>key === active ? `${(navigation_index_module_default()).link} ${(navigation_index_module_default()).active_link}` : (navigation_index_module_default()).link, [
        active
    ]);
    const onClick = (key)=>{
        if (active == key) {
            setActive(null);
            setActiveMenuKey(null);
        } else {
            setActive(key);
            setActiveMenuKey(key);
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: (navigation_index_module_default()).menu,
            children: (0,config/* menuConfig */.U8)().map((it)=>/*#__PURE__*/ jsx_runtime_.jsx(HeaderLink, {
                    it: it,
                    className: linkStyle,
                    onClick: onClick
                }, it.key))
        })
    });
};

// EXTERNAL MODULE: ./node_modules/antd/lib/dropdown/index.js
var dropdown = __webpack_require__(66897);
// EXTERNAL MODULE: ./node_modules/antd/lib/space/index.js
var space = __webpack_require__(77054);
// EXTERNAL MODULE: ./node_modules/lodash/find.js
var find = __webpack_require__(73941);
var find_default = /*#__PURE__*/__webpack_require__.n(find);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(91148);
// EXTERNAL MODULE: ./node_modules/local-storage/local-storage.js
var local_storage = __webpack_require__(97497);
;// CONCATENATED MODULE: ./src/shared/services/system/storage.service.ts

const setStorage = (key, value)=>{
    (0,local_storage.set)(key, value);
};
const getStorage = (key)=>{
    return (0,local_storage.get)(key);
};
const removeStorage = (key)=>{
    remove(key);
};


;// CONCATENATED MODULE: ./src/shared/services/system/index.ts


;// CONCATENATED MODULE: ./src/shared/services/index.ts
 // export * from "./domain"

;// CONCATENATED MODULE: ./src/shared/components/navigation/lang-select.tsx
/* __next_internal_client_entry_do_not_use__ LangSelect auto */ 








const LangSelect = ()=>{
    const { i18n } = (0,es/* useTranslation */.$G)();
    const selectLang = (e)=>{
        setStorage("lang", e);
        i18n.changeLanguage(e);
    };
    const items = [
        {
            key: "ua",
            onClick: (e)=>selectLang(e.key),
            label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/ua.svg",
                        alt: "lang",
                        width: 18,
                        height: 12,
                        style: {
                            marginRight: 5
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Українська"
                    })
                ]
            })
        },
        {
            key: "en",
            onClick: (e)=>selectLang(e.key),
            label: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/en.svg",
                        alt: "lang",
                        width: 18,
                        height: 12,
                        style: {
                            marginRight: 5
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "English"
                    })
                ]
            })
        }
    ];
    const current = (0,react_.useMemo)(()=>{
        return find_default()(config/* LangIcon */.nl, {
            key: i18n.language
        })?.image;
    }, [
        i18n.language
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* default */.Z, {
        menu: {
            items
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            onClick: (e)=>e.preventDefault(),
            children: /*#__PURE__*/ jsx_runtime_.jsx(space["default"], {
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: current || "/ua.svg",
                    alt: "lang",
                    width: 18,
                    height: 12,
                    loading: "lazy"
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/shared/components/navigation/header-contact.tsx




const HeaderContact = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (navigation_index_module_default()).contact,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "tel:+380977262832",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        width: "14",
                        height: "16",
                        viewBox: "0 0 14 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                clipPath: "url(#clip0_1513_3023)",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M10.4236 15.4978C10.162 15.4735 9.90339 15.4301 9.65022 15.3537C9.44921 15.293 9.24456 15.2432 9.04756 15.1704C8.82321 15.0874 8.60579 14.9836 8.38508 14.8892C8.10455 14.7693 7.83715 14.6209 7.57158 14.4678C7.16263 14.2324 6.76573 13.9758 6.38561 13.6899C6.11711 13.4878 5.84606 13.2889 5.58778 13.0731C5.30433 12.8361 5.02854 12.5878 4.75859 12.3332C4.48353 12.0744 4.2143 11.8076 3.95274 11.5335C3.70541 11.2746 3.46756 11.0047 3.23189 10.7333C3.05752 10.5332 2.88788 10.328 2.72518 10.1165C2.52564 9.85758 2.33229 9.59283 2.14223 9.32533C1.88359 8.96109 1.64318 8.58353 1.41664 8.1954C1.19593 7.81784 0.990551 7.43089 0.806691 7.0314C0.635598 6.65972 0.481652 6.2806 0.355431 5.88816C0.254016 5.57249 0.168652 5.25289 0.107001 4.92547C0.032581 4.53538 -0.0126544 4.14177 0.00339685 3.74306C0.0190833 3.35023 0.0825589 2.96602 0.224467 2.60178C0.33792 2.31 0.484935 2.03897 0.69725 1.81377C0.913577 1.58426 1.12845 1.35318 1.34514 1.12446C1.46735 0.995604 1.59174 0.869099 1.71724 0.743769C1.92262 0.53815 2.16886 0.473919 2.44283 0.50956C2.66463 0.53815 2.83535 0.663872 2.98857 0.829542C3.34899 1.21924 3.7127 1.60502 4.07459 1.99315C4.37883 2.3194 4.68198 2.64721 4.98513 2.97425C5.06502 3.06041 5.14783 3.14383 5.22298 3.2347C5.50169 3.57191 5.50789 4.09477 5.24596 4.43238C5.15732 4.54674 5.05554 4.64975 4.95814 4.75628C4.80382 4.92508 4.64112 5.08566 4.49484 5.2619C4.32119 5.47144 4.22124 5.72053 4.18767 6.00252C4.16652 6.17955 4.17965 6.35149 4.21066 6.52421C4.23802 6.67617 4.29967 6.81403 4.36971 6.9468C4.46675 7.13088 4.5616 7.31692 4.67067 7.49316C4.83556 7.75988 5.00483 8.02464 5.18468 8.28C5.47542 8.69319 5.80448 9.07075 6.1576 9.42324C6.42318 9.68839 6.70298 9.93592 6.99738 10.1631C7.28958 10.3883 7.59128 10.5982 7.90719 10.7835C8.03706 10.8598 8.16365 10.9433 8.30811 10.984C8.4803 11.0326 8.65358 11.0749 8.83343 11.0357C8.92426 11.0157 9.01729 11.0036 9.10666 10.9773C9.33685 10.9092 9.52326 10.7623 9.68998 10.5849C9.86253 10.4008 10.0347 10.2163 10.2047 10.0291C10.305 9.91829 10.4159 9.82782 10.5491 9.76476C10.6651 9.70993 10.7851 9.69544 10.9073 9.69701C11.1561 9.69975 11.36 9.81254 11.5337 10.0001C11.9211 10.418 12.3104 10.8336 12.6989 11.2507C13.0093 11.5836 13.319 11.9173 13.6291 12.2506C13.6926 12.3191 13.7623 12.3826 13.8166 12.4586C13.9002 12.5749 13.9691 12.7014 13.9859 12.8526C13.9873 12.8643 13.995 12.8753 13.9997 12.8866V13.2058C13.9946 13.2203 13.9873 13.2344 13.9852 13.2497C13.9593 13.4216 13.8837 13.567 13.7725 13.6903C13.4339 14.0659 13.0965 14.4431 12.7514 14.8116C12.6536 14.9162 12.5362 15.0024 12.4187 15.0815C12.2392 15.2021 12.0466 15.2934 11.8434 15.3631C11.6424 15.4324 11.4385 15.4763 11.2294 15.499C11.1984 15.5025 10.4524 15.5017 10.4236 15.499V15.4978Z",
                                    fill: "#4B4B4B"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                                    id: "clip0_1513_3023",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        width: "14",
                                        height: "15",
                                        fill: "white",
                                        transform: "translate(0 0.5)"
                                    })
                                })
                            })
                        ]
                    }),
                    "+380977262832"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: `mailto:ula-hzb@ukr.net`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("g", {
                                clipPath: "url(#clip0_1513_3028)",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M0.5 7.68146C0.512092 7.62038 0.528476 7.56008 0.534717 7.49861C0.5511 7.34317 0.554611 7.18577 0.579186 7.0315C0.618583 6.78561 0.666173 6.54011 0.720393 6.29697C0.762521 6.10824 0.812451 5.92069 0.872523 5.73745C0.947418 5.50997 1.03089 5.28522 1.12022 5.06322C1.25558 4.72727 1.42643 4.40856 1.61367 4.09924C1.76502 3.84904 1.93587 3.61137 2.11492 3.37997C2.3712 3.04951 2.65634 2.74646 2.96255 2.46298C3.10571 2.33025 3.26018 2.20887 3.41231 2.08632C3.65923 1.88702 3.91785 1.70456 4.1948 1.54951C4.40584 1.43127 4.61609 1.31067 4.83453 1.20809C5.06428 1.10002 5.29989 1.00331 5.53862 0.917953C5.74575 0.84356 5.9599 0.786394 6.17327 0.731187C6.38079 0.677546 6.59026 0.630952 6.80052 0.590623C6.9503 0.56204 7.10243 0.543246 7.25456 0.531109C7.7562 0.491563 8.25862 0.486081 8.75987 0.532675C9.03526 0.558125 9.30793 0.606285 9.57942 0.664233C9.8751 0.727271 10.1645 0.809104 10.4501 0.906206C10.7145 0.99587 10.9712 1.10589 11.224 1.22649C11.5977 1.40464 11.953 1.61412 12.292 1.85139C12.5233 2.01349 12.7437 2.18968 12.9555 2.37762C13.179 2.57614 13.3916 2.78522 13.5898 3.0084C13.8379 3.28757 14.0626 3.58436 14.2689 3.89681C14.5154 4.26956 14.7222 4.66228 14.9001 5.07105C14.966 5.22218 15.0253 5.37684 15.0768 5.53346C15.1485 5.75233 15.216 5.97277 15.2738 6.19556C15.333 6.425 15.3732 6.65875 15.4122 6.89329C15.5281 7.58671 15.4977 8.28483 15.4926 8.98217C15.4902 9.29579 15.4169 9.6008 15.3108 9.89681C15.1688 10.2923 14.9508 10.6411 14.659 10.9407C14.4409 11.1642 14.1893 11.3447 13.9073 11.4837C13.6651 11.6032 13.4119 11.6858 13.1474 11.7281C12.8978 11.768 12.647 11.7829 12.3927 11.7492C12.1535 11.7175 11.9199 11.6678 11.696 11.5804C11.4791 11.4959 11.2739 11.3855 11.0843 11.2476C10.9026 11.1157 10.7356 10.9673 10.5889 10.7966C10.5772 10.7833 10.5609 10.7739 10.5464 10.7621C10.4349 10.8518 10.3276 10.9407 10.2176 11.0256C10.0401 11.1623 9.85013 11.2797 9.64846 11.3768C9.52013 11.4387 9.38867 11.4951 9.25527 11.544C9.05087 11.6196 8.84139 11.6764 8.6249 11.7104C8.37759 11.7492 8.13029 11.7797 7.88025 11.7649C7.55609 11.7457 7.23701 11.7003 6.92456 11.6032C6.68037 11.5272 6.44555 11.4317 6.22203 11.3099C5.88384 11.1259 5.58192 10.8929 5.31432 10.6153C5.04673 10.3373 4.82673 10.0252 4.6547 9.68068C4.58683 9.54442 4.53027 9.4019 4.478 9.2586C4.36605 8.95241 4.3009 8.63526 4.27516 8.31067C4.25137 8.01623 4.25761 7.72218 4.30949 7.43127C4.33952 7.2629 4.37268 7.09376 4.42183 6.93009C4.51506 6.61881 4.6469 6.32477 4.81815 6.04716C4.96286 5.81263 5.12904 5.59689 5.319 5.39916C5.51794 5.19242 5.73405 5.00448 5.98057 4.85726C6.15338 4.7539 6.32852 4.65131 6.51147 4.5687C6.68037 4.49235 6.85942 4.43596 7.03768 4.3835C7.39967 4.27739 7.7718 4.24489 8.14706 4.25938C8.34912 4.26721 8.55001 4.28835 8.74973 4.33103C9.09885 4.40542 9.42924 4.52641 9.74325 4.69438C9.97613 4.81889 10.1942 4.96729 10.3955 5.13917C10.4438 5.18068 10.493 5.19634 10.5558 5.19595C10.9178 5.1936 11.2798 5.19477 11.6418 5.19477H11.7533C11.7533 5.24528 11.7533 5.28483 11.7533 5.32477C11.7533 6.51741 11.7537 7.71004 11.7529 8.90268C11.7529 9.02602 11.7631 9.14661 11.8079 9.26173C11.9316 9.58084 12.1559 9.78287 12.4906 9.86392C12.7219 9.91991 12.9384 9.88115 13.1396 9.7676C13.3573 9.64505 13.4923 9.45045 13.5672 9.21318C13.6101 9.0777 13.628 8.93949 13.6265 8.79736C13.6241 8.53777 13.6233 8.27778 13.6265 8.0178C13.6304 7.72884 13.6031 7.44262 13.5613 7.15797C13.5188 6.86744 13.4521 6.58123 13.3616 6.30166C13.2504 5.95789 13.11 5.62586 12.9356 5.3091C12.6318 4.75625 12.2483 4.26682 11.7834 3.84121C11.5002 3.58201 11.1943 3.35217 10.8628 3.15953C10.6755 3.05069 10.4778 2.96063 10.2839 2.86353C10.0889 2.76525 9.88407 2.69125 9.67499 2.63056C9.49906 2.57966 9.32119 2.5362 9.14253 2.49548C9.02161 2.46807 8.89913 2.44223 8.77586 2.43087C8.52153 2.40777 8.26642 2.38585 8.01131 2.37997C7.69925 2.37293 7.38797 2.39681 7.08059 2.45554C6.90076 2.49 6.72055 2.52524 6.54306 2.57065C6.29615 2.6333 6.05547 2.71748 5.82181 2.81889C5.43642 2.98608 5.07209 3.19047 4.73077 3.43792C4.41247 3.66893 4.11913 3.92735 3.85544 4.21787C3.55391 4.55069 3.29334 4.91404 3.07919 5.31028C2.87127 5.69517 2.70549 6.09611 2.59198 6.51975C2.54517 6.69477 2.51162 6.87175 2.47652 7.04912C2.39694 7.45084 2.37978 7.8557 2.39577 8.26251C2.40357 8.46533 2.42425 8.66854 2.45311 8.8694C2.48003 9.05421 2.51592 9.23902 2.56584 9.41913C2.67351 9.80989 2.81198 10.1893 2.99688 10.5523C3.1966 10.945 3.43806 11.3087 3.71969 11.6458C3.9237 11.8898 4.14878 12.1133 4.39218 12.3177C4.59463 12.4876 4.80683 12.6439 5.02996 12.7852C5.27181 12.9383 5.52496 13.0703 5.78632 13.1854C5.92791 13.2476 6.07497 13.2981 6.22086 13.3502C6.31721 13.3843 6.41512 13.416 6.5142 13.4407C6.7498 13.499 6.98385 13.5644 7.22726 13.5855C7.44141 13.6039 7.65478 13.631 7.86932 13.6427C8.16929 13.6591 8.46692 13.627 8.76455 13.5902C9.01888 13.5589 9.26892 13.5072 9.51467 13.4383C9.88875 13.3334 10.2515 13.1971 10.5936 13.0096C10.6634 12.9712 10.7356 12.9371 10.8179 12.8949C11.1292 13.4344 11.4377 13.9692 11.7518 14.5143C11.6776 14.5566 11.6078 14.602 11.5337 14.6376C11.2903 14.7539 11.0488 14.8753 10.8 14.9783C10.5823 15.0683 10.3576 15.1427 10.1325 15.212C9.95467 15.2668 9.77173 15.3044 9.59034 15.3467C9.48424 15.3714 9.37736 15.3925 9.27009 15.4121C9.1753 15.4293 9.07973 15.4461 8.98416 15.4567C8.84178 15.4728 8.69863 15.4837 8.55625 15.497C8.52582 15.4998 7.49056 15.5002 7.46091 15.4978C7.38329 15.492 7.30488 15.4916 7.22765 15.4818C7.0486 15.4587 6.86917 15.4356 6.69168 15.4035C6.49586 15.3678 6.30044 15.3279 6.10774 15.2793C5.96068 15.2422 5.81947 15.1842 5.67358 15.1427C5.41574 15.0695 5.17 14.9649 4.92698 14.8549C4.52247 14.6721 4.13824 14.4524 3.77313 14.1987C3.45639 13.9783 3.15798 13.7363 2.87635 13.472C2.38797 13.0135 1.97215 12.4967 1.62069 11.9274C1.39328 11.5585 1.20175 11.1705 1.04143 10.7672C0.884615 10.3725 0.763692 9.96651 0.676705 9.55069C0.638477 9.36744 0.606491 9.18264 0.580746 8.99744C0.559682 8.84591 0.553831 8.69203 0.537447 8.53972C0.529256 8.47277 0.512482 8.40621 0.5 8.33886C0.5 8.1196 0.5 7.90073 0.5 7.68146ZM9.88056 8.01427C9.88524 6.99391 9.05087 6.13761 8.01755 6.13213C6.97488 6.12665 6.1409 6.98608 6.13504 7.9947C6.12919 9.0225 6.95577 9.88859 8.0078 9.8878C9.05399 9.88702 9.87549 9.03777 9.88056 8.01427Z",
                                    fill: "#4B4B4B"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                                    id: "clip0_1513_3028",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                        width: "15",
                                        height: "15",
                                        fill: "white",
                                        transform: "translate(0.5 0.5)"
                                    })
                                })
                            })
                        ]
                    }),
                    "ula-hzb@ukr.net"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(LangSelect, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/components/navigation/index.ts



;// CONCATENATED MODULE: ./src/shared/components/header/menu-mobil.tsx
/* __next_internal_client_entry_do_not_use__ MenuMobil auto */ 




const MenuMobil = ()=>{
    const [active, setActive] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).burger,
                onClick: ()=>setActive(!active),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: !active ? (index_module_default()).menu : `${(index_module_default()).menu} ${(index_module_default()).menuActive}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    children: (0,config/* menuConfig */.U8)().map((it, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: it.label
                                }),
                                it.children?.map((el, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: el.link,
                                            children: el.label
                                        })
                                    }, index))
                            ]
                        }, index))
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/components/header/header-top.tsx
/* __next_internal_client_entry_do_not_use__ HeaderTop auto */ 






const HeaderTop = ({})=>{
    const [width, setWidth] = (0,react_.useState)(0);
    (0,react_.useEffect)(()=>{
        setWidth(window.innerWidth);
    }, []);
    const renderMenu = (0,react_.useCallback)(()=>{
        if (width > 768) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderNavigation, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderContact, {})
                ]
            });
        } else {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(HeaderContact, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(MenuMobil, {})
                ]
            });
        }
    }, [
        width
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default()).header_top,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).header_flex,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: "/",
                        className: (index_module_default()).header_logo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/logo.svg",
                                width: 50,
                                height: 50,
                                alt: "logo"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                children: [
                                    "Хмельницьк",
                                    /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                    "залізобетон"
                                ]
                            })
                        ]
                    }),
                    renderMenu()
                ]
            })
        })
    });
};

;// CONCATENATED MODULE: ./src/shared/components/header/header-bottom.tsx
/* __next_internal_client_entry_do_not_use__ HeaderBottom auto */ 






const HeaderBottom = ()=>{
    const { activeMenuKey, setActiveMenuKey } = (0,context_provider.useAppContext)();
    const menu = (0,config/* menuConfig */.U8)();
    const renderItem = (0,react_.useMemo)(()=>{
        const item = find_default()(menu, {
            key: activeMenuKey
        });
        if (item) {
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).header_bottom,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: item?.children?.map((it)=>/*#__PURE__*/ jsx_runtime_.jsx(HeaderLink, {
                                it: it,
                                className: ()=>{},
                                onClick: ()=>setActiveMenuKey(null)
                            }, it.key))
                    })
                })
            });
        }
        return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {});
    }, [
        activeMenuKey
    ]);
    return renderItem;
};

// EXTERNAL MODULE: ./node_modules/i18next/dist/esm/i18next.js
var i18next = __webpack_require__(61601);
;// CONCATENATED MODULE: ./src/i18n/locales/ua/advantage.ts
const advantageTranslates = {
    experience: {
        title: "Досвід",
        desc: "Понад 60 років на ринку Лідерство у галузі виробництва залізобетонних конструкцій Західної України"
    },
    quality: {
        title: "Контроль якості",
        desc: "Система управління якістю ISO 9001-2015 Акредитована лабораторія Сертифікована продукція"
    },
    chain: {
        title: "Розгорнута дилерська мережа",
        desc: "Офіційне представництво у семи регіонах України"
    },
    largest: {
        title: "Один з найбільших складів в Україні",
        desc: "Виробничі потужності та складська програма забезпечують постійну наявність серійної продукціі"
    }
};

;// CONCATENATED MODULE: ./src/i18n/locales/ua/breadcrums.ts
const breadcrumsTranslate = {
    home: "Головна",
    about: "Про нас",
    news: "Новини",
    power: "ВИРОБНИЧА ПОТУЖНІСТЬ",
    labaratory: "ВИПРОБУВАЛЬНА ЛАБОРАТОРІЯ",
    system: "СИСТЕМА УПРАВЛІННЯ ЯКІСТЮ",
    project: "РЕАЛІЗОВАНІ ПРОЕКТИ",
    awards: "Нагороди",
    contacts: "Контакти",
    main: "Основні",
    distribution: "Дистрибютори"
};

;// CONCATENATED MODULE: ./src/i18n/locales/ua/form.ts
const fromTranslate = {
    subtitle: "Заповніть форму, ми Вам зателефонуємо",
    title: "ЗВ’ЯЗАТИСЬ З НАМИ",
    name: "Ім’я",
    surname: "Прізвище",
    fullName: "Ім’я та прізвище",
    phone: "Телефон",
    email: "Email",
    comment: "Коментар"
};

;// CONCATENATED MODULE: ./src/i18n/locales/ua/navigation.ts
const navTranslation = {
    catalog: {
        label: "Каталог"
    },
    about: {
        label: "Про нас",
        el1: "НОВИНИ",
        el2: "ВИРОБНИЧІ ПОТУЖНОСТІ",
        el3: "ВИПРОБУВАЛЬНА ЛАБОРАТОРІЯ",
        el4: "СИСТЕМА УПРАВЛІННЯ ЯКІСТЮ",
        el5: "РЕАЛІЗОВАНІ ПРОЕКТИ",
        el6: "НАГОРОДИ"
    },
    contact: {
        label: "Контакти",
        el1: "ОСНОВНІ",
        el2: "ДИСТРИБ’ЮТОРИ"
    }
};

;// CONCATENATED MODULE: ./src/i18n/locales/ua/question.ts
const questionTranslate = {
    firstTab: {
        title: "Як зробити замовлення?",
        el1: "Залиште заявку на сайті",
        el2: "Консультація й оплата замовлення",
        el3: "Доставка"
    },
    secondTab: {
        title: "Які є способи оплати?",
        el1: "Банківський переказ",
        el2: "Оплата картою через термінал",
        el3: "Готівкою в касі підприємства"
    },
    thirdTab: {
        title: "Які є варіанти доставки?",
        el1: "Власне авто",
        el2: "Транспорт вантажовідправника",
        el3: "Пошук авто через диспетчера"
    },
    fourTab: {
        title: "Чому з нами вигідно?",
        el1: "Програми лояльності",
        el2: "Система знижок",
        el3: "Сезонні акції",
        el4: "Розпродаж залишків"
    }
};

;// CONCATENATED MODULE: ./src/i18n/locales/ua/shared.ts
const sharedTranslation = {
    sectionTitle: {
        advantages: "ПЕРЕВАГИ",
        partners: "ПАРТНЕРИ",
        clients: "НАШІ КЛІЄНТИ",
        instagram: "ІНСТАГРАМ",
        question: "ЗАПИТАННЯ - ВІДПОВІДЬ",
        contact: "КОНТАКТИ ПІДПРИЄМСТВА",
        adress: "НАША АДРЕСА",
        labolatory: "ВИПРОБУВАЛЬНА ЛАБОРАТОРІЯ",
        zbut: "ВІДДІЛ ЗБУТУ",
        production: "ВИРОБНИЧИЙ ВІДДІЛ",
        supply: "ВІДДІЛ ПОСТАЧАННЯ",
        accounting: "БУХГАЛТЕРІЯ"
    },
    element: {
        btnOrange: "Зв’язатись з нами",
        share: "Поширити",
        loadMore: "Дивитись більше",
        goTo: "Перейти",
        email: "E-mail",
        phone: "Телефон",
        adress: "Адреса",
        homeTitle: "В СПРАВІ БУДІВНИЦТВА ПОТРІБНО ПРАЦЮВАТИ З СПРАВЖНІМИ ПРОФЕСІОНАЛАМИ"
    }
};

;// CONCATENATED MODULE: ./src/i18n/locales/ua/index.ts






const ua = {
    nav: navTranslation,
    shared: sharedTranslation,
    advantage: advantageTranslates,
    form: fromTranslate,
    question: questionTranslate,
    bread: breadcrumsTranslate
};

;// CONCATENATED MODULE: ./src/i18n/locales/en/advantage.ts
const advantage_advantageTranslates = {
    experience: {
        title: "Experience",
        desc: "Over 60 years on the market Leadership in the field of production of reinforced concrete structures in Western Ukraine"
    },
    quality: {
        title: "Quality control",
        desc: "Quality management system ISO 9001-2015 Accredited laboratory Certified products"
    },
    chain: {
        title: "Expanded dealer network",
        desc: "Official representation in seven regions of Ukraine"
    },
    largest: {
        title: "One of the largest warehouses in Ukraine",
        desc: "The production facilities and warehouse program ensure the constant availability of serial products"
    }
};

;// CONCATENATED MODULE: ./src/i18n/locales/en/breadcrums.ts
const breadcrums_breadcrumsTranslate = {
    home: "Home",
    about: "About Us",
    news: "News",
    power: "PRODUCTION CAPACITY",
    labaratory: "TESTING LABORATORY",
    system: "QUALITY MANAGEMENT SYSTEM",
    project: "IMPLEMENTED PROJECTS",
    awards: "Awards",
    contacts: "CONTACTS",
    main: "Main",
    distribution: "distribution"
};

;// CONCATENATED MODULE: ./src/i18n/locales/en/form.ts
const form_fromTranslate = {
    subtitle: "Fill out the form, we will call you",
    title: "CONTACT US",
    name: "Name",
    surname: "Surnamne",
    fullName: "First and last name",
    phone: "Phone number",
    email: "E-mail",
    comment: "Comment"
};

;// CONCATENATED MODULE: ./src/i18n/locales/en/navigation.ts
const navigation_navTranslation = {
    catalog: {
        label: "Catalog"
    },
    about: {
        label: "About us",
        el1: "NEWS",
        el2: "PRODUCTION CAPACITY",
        el3: "TESTING LABORATORY",
        el4: "QUALITY MANAGEMENT SYSTEM",
        el5: "IMPLEMENTED PROJECTS",
        el6: "AWARDS"
    },
    contact: {
        label: "Contact",
        el1: "THE MAIN",
        el2: "DISTRIBUTORS"
    }
};

;// CONCATENATED MODULE: ./src/i18n/locales/en/question.ts
const question_questionTranslate = {
    firstTab: {
        title: "How to make a deal?",
        el1: "Fill out the application on the website",
        el2: "Consultation and payment for contract",
        el3: "Delivery"
    },
    secondTab: {
        title: "What are the payment methods?",
        el1: "Bank Transfer",
        el2: "Payment by card through the terminal",
        el3: "In cash at the company's cash desk"
    },
    thirdTab: {
        title: "What are the delivery options?",
        el1: "The car itself",
        el2: "Transport of the consignor",
        el3: "Car search through dispatcher"
    },
    fourTab: {
        title: "Чому з нами вигідно?",
        el1: "Loyalty programs",
        el2: "System of discounts",
        el3: "Seasonal promotions",
        el4: "Sale of leftovers"
    }
};

;// CONCATENATED MODULE: ./src/i18n/locales/en/shared.ts
const shared_sharedTranslation = {
    sectionTitle: {
        advantages: "ADVANTAGES",
        partners: "PARTNERS",
        clients: "OUR CLIENTS",
        instagram: "INSTAGRAM",
        question: "QUESTION - ANSWER",
        contact: "COMPANY CONTACTS",
        adress: "OUR ADDRESS",
        labolatory: "TESTING LABORATORY",
        zbut: "SALES DEPARTMENT",
        production: "PRODUCTION DEPARTMENT",
        supply: "SUPPLY DEPARTMENT",
        accounting: "ACCOUNTING"
    },
    element: {
        btnOrange: "Contact us",
        goTo: "Go to",
        share: "Share",
        loadMore: "Load more",
        email: "E-mail",
        phone: "Phone",
        adress: "Adress",
        homeTitle: "IN CONSTRUCTION, YOU NEED TO WORK WITH REAL PROFESSIONALS"
    }
};

;// CONCATENATED MODULE: ./src/i18n/locales/en/index.ts






const en = {
    nav: navigation_navTranslation,
    shared: shared_sharedTranslation,
    advantage: advantage_advantageTranslates,
    form: form_fromTranslate,
    question: question_questionTranslate,
    bread: breadcrums_breadcrumsTranslate
};

;// CONCATENATED MODULE: ./src/i18n/locales/index.ts



;// CONCATENATED MODULE: ./src/i18n/index.ts




const defaultLang = "ua";

i18next/* default.use */.ZP.use(es/* initReactI18next */.Db).init({
    debug: false,
    lng: defaultLang,
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            translation: en
        },
        ua: {
            translation: ua
        }
    }
});
i18next/* default */.ZP.on("languageChanged", async (lang)=>{
    try {
        await setStorage("lang", lang);
    } catch (error) {
        console.log("ERROR", error);
    }
});

;// CONCATENATED MODULE: ./src/shared/components/header/index.tsx
/* __next_internal_client_entry_do_not_use__ Header auto */ 







const Header = ({})=>{
    const detecLang = ()=>{
        const language = getStorage("lang");
        if (language) {
            return i18next/* default.changeLanguage */.ZP.changeLanguage(language);
        }
        return i18next/* default.changeLanguage */.ZP.changeLanguage("ua");
    };
    (0,react_.useEffect)(()=>{
        detecLang();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (index_module_default()).header,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderTop, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(HeaderBottom, {})
        ]
    });
};


/***/ }),

/***/ 99921:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Partner: () => (/* binding */ Partner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25373);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11729);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(91148);
/* __next_internal_client_entry_do_not_use__ Partner auto */ 





const Partner = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__/* .useTranslation */ .$G)();
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handlePrev = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
        spaceBetween: 24,
        slidesPerView: 3,
        ref: sliderRef,
        style: {
            position: "relative",
            overflowY: "visible"
        },
        breakpoints: {
            1680: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 2
            },
            425: {
                slidesPerView: 1
            },
            375: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            }
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                style: {
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), center / cover no-repeat url('/main.png'), lightgray -442.415px 0px / 274.155% 166.667% no-repeat`
                },
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Гармонія"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().detail),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "btn-outline",
                                href: "",
                                children: t("shared.element.goTo")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                style: {
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), center / cover no-repeat url('/main.png'), lightgray -442.415px 0px / 274.155% 166.667% no-repeat`
                },
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Гармонія"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().detail),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "btn-outline",
                                href: "",
                                children: t("shared.element.goTo")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                style: {
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), center / cover no-repeat url('/main.png'), lightgray -442.415px 0px / 274.155% 166.667% no-repeat`
                },
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Гармонія"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().detail),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "btn-outline",
                                href: "",
                                children: t("shared.element.goTo")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
                style: {
                    background: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), center / cover no-repeat url('/main.png'), lightgray -442.415px 0px / 274.155% 166.667% no-repeat`
                },
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().item),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            children: "Гармонія"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().detail),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                className: "btn-outline",
                                href: "",
                                children: t("shared.element.goTo")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navigation),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handlePrev,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "34",
                            height: "34",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    clipPath: "url(#clip0_598_5316)",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            x: "33",
                                            y: "33",
                                            width: "32",
                                            height: "32",
                                            transform: "rotate(180 33 33)",
                                            stroke: "#4B4B4B",
                                            strokeWidth: "2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M20 10L13 16.5L20 23",
                                            stroke: "#4B4B4B",
                                            strokeWidth: "2"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                        id: "clip0_598_5320",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            width: "34",
                                            height: "34",
                                            fill: "white",
                                            transform: "translate(34 34) rotate(180)"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handleNext,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "34",
                            height: "34",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g", {
                                    clipPath: "url(#clip0_598_5316)",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            x: "1",
                                            y: "1",
                                            width: "32",
                                            height: "32",
                                            stroke: "#4B4B4B",
                                            strokeWidth: "2"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M14 24L21 17.5L14 11",
                                            stroke: "#4B4B4B",
                                            strokeWidth: "2"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                                        id: "clip0_598_5316",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                            width: "34",
                                            height: "34",
                                            fill: "white"
                                        })
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 98931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Slider: () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25373);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38664);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42768);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ Slider auto */ 





const Slider = ({ slides })=>{
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const handlePrev = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);
    const handleNext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    const renderItem = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((it, index)=>{
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(swiper_react__WEBPACK_IMPORTED_MODULE_3__/* .SwiperSlide */ .o5, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                src: it,
                width: 880,
                height: 680,
                alt: "slide"
            })
        }, index);
    }, [
        slides
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_3__/* .Swiper */ .tq, {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().slider),
        modules: [
            swiper_modules__WEBPACK_IMPORTED_MODULE_4__/* .Pagination */ .tl
        ],
        pagination: {
            clickable: true,
            bulletActiveClass: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().activeBullet),
            bulletClass: `swiper-pagination-bullet ${(_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bullet)}`
        },
        ref: sliderRef,
        children: [
            slides?.map((it, index)=>renderItem(it, index)),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navigation),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handlePrev,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            width: "34",
                            height: "34",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    x: "33",
                                    y: "33",
                                    width: "32",
                                    height: "32",
                                    transform: "rotate(180 33 33)",
                                    stroke: "white",
                                    strokeWidth: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M20 10L13 16.5L20 23",
                                    stroke: "white",
                                    strokeWidth: "2"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: handleNext,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                            width: "34",
                            height: "34",
                            viewBox: "0 0 34 34",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                    x: "1",
                                    y: "1",
                                    width: "32",
                                    height: "32",
                                    stroke: "white",
                                    strokeWidth: "2"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                    d: "M14 24L21 17.5L14 11",
                                    stroke: "white",
                                    strokeWidth: "2"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 79290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TaskAnswer: () => (/* binding */ TaskAnswer)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/shared/components/task-answer/index.module.scss
var index_module = __webpack_require__(78390);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/antd/lib/collapse/index.js
var collapse = __webpack_require__(64579);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/lib/icons/RightOutlined.js
var RightOutlined = __webpack_require__(53541);
// EXTERNAL MODULE: ./src/shared/components/form/file-form.module.scss
var file_form_module = __webpack_require__(64528);
var file_form_module_default = /*#__PURE__*/__webpack_require__.n(file_form_module);
// EXTERNAL MODULE: ./src/shared/components/button/index.ts + 2 modules
var components_button = __webpack_require__(78351);
// EXTERNAL MODULE: ./src/shared/services/domain/mail.service.ts + 1 modules
var mail_service = __webpack_require__(30162);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 14 modules
var es = __webpack_require__(91148);
;// CONCATENATED MODULE: ./src/shared/components/form/file-form.tsx
/* __next_internal_client_entry_do_not_use__ FileForm auto */ 





const FileForm = ()=>{
    const { t } = (0,es/* useTranslation */.$G)();
    const [data, setData] = (0,react_.useState)({
        name: "",
        surname: "",
        email: "",
        phone: "",
        comment: ""
    });
    const handleSubmit = async ()=>{
        try {
            await (0,mail_service/* sendForm */.q)(data);
        } catch (error) {
            console.log(error);
        }
    };
    const onChange = (val, key)=>{
        setData((prev)=>({
                ...prev,
                [key]: val
            }));
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (file_form_module_default()).flex,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: t("form.subtitle")
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                children: t("form.title")
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (file_form_module_default()).input,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: t("form.fullName")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        name: "name",
                        defaultValue: data.name,
                        onChange: (e)=>onChange(e.target.value, e.target.name)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (file_form_module_default()).input,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: t("form.phone")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "tel",
                        name: "phone",
                        defaultValue: data.phone,
                        onChange: (e)=>onChange(e.target.value, e.target.name)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (file_form_module_default()).input,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: t("form.email")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "email",
                        name: "email",
                        defaultValue: data.email,
                        onChange: (e)=>onChange(e.target.value, e.target.name)
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (file_form_module_default()).input,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                        children: t("form.comment")
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                        name: "comment",
                        id: "",
                        defaultValue: data.comment,
                        onChange: (e)=>onChange(e.target.value, e.target.name),
                        cols: 30,
                        rows: 1
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* Button */.z, {
                text: t("shared.element.btnOrange"),
                onClick: ()=>handleSubmit()
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/components/form/index.ts


;// CONCATENATED MODULE: ./src/shared/components/task-answer/index.tsx
/* __next_internal_client_entry_do_not_use__ TaskAnswer auto */ 







const TaskAnswer = ()=>{
    const { t } = (0,es/* useTranslation */.$G)();
    const items = [
        {
            key: "1",
            label: t("question.firstTab.title"),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).flex,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "contacts.svg",
                                width: 72,
                                height: 72,
                                alt: "contacts"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.firstTab.el1")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "dolar.svg",
                                width: 72,
                                height: 72,
                                alt: "dolar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.firstTab.el2")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "devilery.svg",
                                width: 72,
                                height: 72,
                                alt: "devilery"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.firstTab.el3")
                            })
                        ]
                    })
                ]
            }),
            className: (index_module_default()).item
        },
        {
            key: "2",
            label: t("question.secondTab.title"),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).flex,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "bank.svg",
                                width: 72,
                                height: 72,
                                alt: "bank"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.secondTab.el1")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "cart.svg",
                                width: 72,
                                height: 72,
                                alt: "cart"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.secondTab.el2")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "money.svg",
                                width: 72,
                                height: 72,
                                alt: "money"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.secondTab.el3")
                            })
                        ]
                    })
                ]
            }),
            className: (index_module_default()).item
        },
        {
            key: "3",
            label: t("question.thirdTab.title"),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).flex,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "car.svg",
                                width: 72,
                                height: 72,
                                alt: "car"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.thirdTab.el1")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "bus.svg",
                                width: 72,
                                height: 72,
                                alt: "bus"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.thirdTab.el2")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "phone.svg",
                                width: 72,
                                height: 72,
                                alt: "phone"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.thirdTab.el3")
                            })
                        ]
                    })
                ]
            }),
            className: (index_module_default()).item
        },
        {
            key: "4",
            label: t("question.fourTab.title"),
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).flex,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "system.svg",
                                width: 72,
                                height: 72,
                                alt: "system"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.fourTab.el1")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "dolar.svg",
                                width: 72,
                                height: 72,
                                alt: "dolar"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.fourTab.el2")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "sun.svg",
                                width: 72,
                                height: 72,
                                alt: "sun"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.fourTab.el3")
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "3d.svg",
                                width: 72,
                                height: 72,
                                alt: "phone"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: t("question.fourTab.el4")
                            })
                        ]
                    })
                ]
            }),
            className: (index_module_default()).item
        }
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(collapse/* default */.Z, {
                expandIconPosition: "end",
                expandIcon: ({ isActive })=>/*#__PURE__*/ jsx_runtime_.jsx(RightOutlined["default"], {
                        rotate: isActive ? 90 : 0,
                        style: {
                            fontSize: "15px",
                            color: isActive ? "#FD7A19" : "black"
                        }
                    }),
                items: items,
                className: (index_module_default()).tab
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FileForm, {})
        ]
    });
};


/***/ }),

/***/ 2598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   advantages: () => (/* binding */ advantages)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91148);
/* __next_internal_client_entry_do_not_use__ advantages auto */ 
const advantages = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__/* .useTranslation */ .$G)();
    return [
        {
            image: "/experience.svg",
            title: t("advantage.experience.title"),
            description: t("advantage.experience.desc")
        },
        {
            image: "/iso.svg",
            title: t("advantage.quality.title"),
            description: t("advantage.quality.desc")
        },
        {
            image: "/awards.svg",
            title: t("advantage.chain.title"),
            description: t("advantage.chain.desc")
        },
        {
            image: "/power.svg",
            title: t("advantage.largest.title"),
            description: t("advantage.largest.desc")
        }
    ];
};


/***/ }),

/***/ 47091:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  nl: () => (/* reexport */ LangIcon),
  aZ: () => (/* reexport */ advantages_config.advantages),
  dJ: () => (/* reexport */ http),
  U8: () => (/* reexport */ menu_config.menuConfig)
});

// UNUSED EXPORTS: axiosInstance, request

// EXTERNAL MODULE: ./src/shared/config/menu.config.ts
var menu_config = __webpack_require__(973);
// EXTERNAL MODULE: ./src/shared/config/advantages.config.ts
var advantages_config = __webpack_require__(2598);
;// CONCATENATED MODULE: ./src/shared/config/lang.config.ts
const LangIcon = [
    {
        key: "ua",
        image: "/ua.svg"
    },
    {
        key: "en",
        image: "/en.svg"
    }
];

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(40248);
;// CONCATENATED MODULE: ./src/shared/config/axios.config.ts

const axiosInstance = axios/* default */.Z.create({
    baseURL: "http://13.49.185.119:3000",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    },
    timeout: 180000
});
const request = async (func, retryCount = 0)=>{
    try {
        let response = await func();
        return response;
    } catch (e) {
        console.log(e);
    }
};
const http = {
    get: (url, params)=>request(()=>axiosInstance.get(url, params)),
    post: (url, data, params)=>request(()=>axiosInstance.post(url, data, params)),
    put: (url, data, params)=>request(()=>axiosInstance.put(url, data, params)),
    patch: (url, data, params)=>request(()=>axiosInstance.patch(url, data, params)),
    delete: (url, params)=>request(()=>axiosInstance.delete(url, params))
};

;// CONCATENATED MODULE: ./src/shared/config/index.ts






/***/ }),

/***/ 973:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menuConfig: () => (/* binding */ menuConfig)
/* harmony export */ });
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91148);
/* __next_internal_client_entry_do_not_use__ menuConfig auto */ 
const menuConfig = ()=>{
    const { t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_0__/* .useTranslation */ .$G)();
    return [
        // {
        //   label: t("nav.catalog.label"),
        //   key: "catalog",
        //   link: null,
        //   children: [
        //     {
        //       label: "Залізобетонні вироби",
        //       key: "zb",
        //       link: "/",
        //       image: "/zb.svg",
        //     },
        //     {
        //       label: "Бетони та розчини",
        //       key: "beton",
        //       link: "/",
        //       image: "/beton.svg",
        //     },
        //     {
        //       label: "Столярні вироби",
        //       key: "stolar",
        //       link: "/",
        //       image: "/stolar.svg",
        //     },
        //     {
        //       label: "3D Моделі",
        //       key: "3d",
        //       link: "/",
        //       image: "/3d.svg",
        //     },
        //   ],
        // },
        {
            label: t("nav.about.label"),
            key: "about",
            link: null,
            children: [
                {
                    label: t("nav.about.el1"),
                    key: "news",
                    link: "/about/news",
                    image: "/news.svg"
                },
                {
                    label: t("nav.about.el2"),
                    key: "power",
                    link: "/about/power",
                    image: "/power.svg"
                },
                {
                    label: t("nav.about.el3"),
                    key: "labaratory",
                    link: "/about/labaratory",
                    image: "/labaratory.svg"
                },
                {
                    label: t("nav.about.el4"),
                    key: "system",
                    link: "/about/system",
                    image: "/system.svg"
                },
                {
                    label: t("nav.about.el5"),
                    key: "project",
                    link: "/about/project",
                    image: "/project.svg"
                },
                {
                    label: t("nav.about.el6"),
                    key: "awards",
                    link: "/about/awards",
                    image: "/awards.svg"
                }
            ]
        },
        {
            label: t("nav.contact.label"),
            key: "contact",
            link: null,
            children: [
                {
                    label: t("nav.contact.el1"),
                    key: "contacts",
                    link: "/contacts/main",
                    image: "/contacts.svg"
                },
                {
                    label: t("nav.contact.el2"),
                    key: "distribution",
                    link: "/contacts/distribution",
                    image: "/distribution.svg"
                }
            ]
        }
    ];
};


/***/ }),

/***/ 60487:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppStateContext: () => (/* binding */ AppStateContext),
/* harmony export */   ContextProvider: () => (/* binding */ ContextProvider),
/* harmony export */   useAppContext: () => (/* binding */ useAppContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ AppStateContext,ContextProvider,useAppContext auto */ 

const AppStateContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});
const ContextProvider = ({ children })=>{
    const [activeMenuKey, setActiveMenuKey] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AppStateContext.Provider, {
        value: {
            activeMenuKey,
            setActiveMenuKey
        },
        children: children
    });
};
const useAppContext = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AppStateContext);


/***/ }),

/***/ 9295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StyledComponentsRegistry: () => (/* binding */ StyledComponentsRegistry)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(96347);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ StyledComponentsRegistry auto */ 



const StyledComponentsRegistry = ({ children })=>{
    const cache = (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.createCache)();
    (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useServerInsertedHTML)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("style", {
            id: "antd",
            dangerouslySetInnerHTML: {
                __html: (0,_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.extractStyle)(cache, true)
            }
        }));
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_cssinjs__WEBPACK_IMPORTED_MODULE_2__.StyleProvider, {
        cache: cache,
        children: children
    });
};


/***/ }),

/***/ 30162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  q: () => (/* binding */ sendForm)
});

// EXTERNAL MODULE: ./src/shared/config/index.ts + 2 modules
var config = __webpack_require__(47091);
;// CONCATENATED MODULE: ./src/shared/api/form/index.ts

const sendMail = (data)=>{
    return config/* http */.dJ.post("/public/form/main", data);
};

// EXTERNAL MODULE: ./node_modules/antd/lib/message/index.js
var message = __webpack_require__(35435);
;// CONCATENATED MODULE: ./src/shared/services/domain/mail.service.ts


const sendForm = async (data)=>{
    try {
        await sendMail(data);
        message/* default */.ZP.success("Ваше повідомлення доставлено");
    } catch (error) {
        message/* default */.ZP.error("Ваше поввідомлення не доставлено");
    }
};


/***/ }),

/***/ 48657:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "breadcrumb_item__xJc8L",
	"itemWhite": "breadcrumb_itemWhite__xqtSO",
	"flex": "breadcrumb_flex__haPeP"
};


/***/ }),

/***/ 30478:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__NAan4",
	"contact": "footer_contact__5vrcZ",
	"social": "footer_social__YwpTD"
};


/***/ }),

/***/ 64528:
/***/ ((module) => {

// Exports
module.exports = {
	"flex": "file-form_flex__Fw17A",
	"input": "file-form_input__7nT1g"
};


/***/ }),

/***/ 55022:
/***/ ((module) => {

// Exports
module.exports = {
	"header": "header_header__kn7qQ",
	"header_top": "header_header_top__PceGl",
	"burger": "header_burger__oO_DA",
	"header_bottom": "header_header_bottom__rH8o1",
	"header_flex": "header_header_flex__RMqKN",
	"header_logo": "header_header_logo__A3UpM",
	"menuActive": "header_menuActive__5fhhM",
	"menu": "header_menu__oPLbc"
};


/***/ }),

/***/ 82181:
/***/ ((module) => {

// Exports
module.exports = {
	"link": "navigation_link__jqvXf",
	"active_link": "navigation_active_link__PgqET",
	"menu": "navigation_menu__QIr_J",
	"contact": "navigation_contact__hZYp6",
	"burger": "navigation_burger__BKuW9"
};


/***/ }),

/***/ 11729:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "partner_item__wM5pn",
	"title": "partner_title__DYNxX",
	"detail": "partner_detail__MAfdD",
	"navigation": "partner_navigation__9Gg2X"
};


/***/ }),

/***/ 42768:
/***/ ((module) => {

// Exports
module.exports = {
	"slider": "slider_slider__0SO0V",
	"bullet": "slider_bullet__8WWXl",
	"activeBullet": "slider_activeBullet__W2fZ3",
	"navigation": "slider_navigation__2GRNx",
	"item": "slider_item__hCm8D"
};


/***/ }),

/***/ 78390:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "task-answer_item___uhTN",
	"tab": "task-answer_tab__qzzh2",
	"flex": "task-answer_flex__RapIg",
	"wrapper": "task-answer_wrapper__swh3y"
};


/***/ }),

/***/ 27779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src/app/layout.tsx","import":"Montserrat","arguments":[{"subsets":["latin","cyrillic"]}],"variableName":"montserrat"}
var layout_tsx_import_Montserrat_arguments_subsets_latin_cyrillic_variableName_montserrat_ = __webpack_require__(19004);
var layout_tsx_import_Montserrat_arguments_subsets_latin_cyrillic_variableName_montserrat_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Montserrat_arguments_subsets_latin_cyrillic_variableName_montserrat_);
// EXTERNAL MODULE: ./src/shared/components/index.ts + 20 modules
var components = __webpack_require__(67263);
// EXTERNAL MODULE: ./src/app/globals.scss
var globals = __webpack_require__(39675);
// EXTERNAL MODULE: ./node_modules/swiper/swiper.css
var swiper = __webpack_require__(86181);
// EXTERNAL MODULE: ./node_modules/swiper/modules/navigation.css
var navigation = __webpack_require__(91530);
// EXTERNAL MODULE: ./node_modules/swiper/modules/pagination.css
var pagination = __webpack_require__(56869);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./src/shared/providers/context-provider.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/providers/context-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["AppStateContext"];

const e1 = proxy["ContextProvider"];

const e2 = proxy["useAppContext"];

;// CONCATENATED MODULE: ./src/shared/providers/style-provider.tsx

const style_provider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/providers/style-provider.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: style_provider_esModule, $$typeof: style_provider_$$typeof } = style_provider_proxy;
const style_provider_default_ = style_provider_proxy.default;

const style_provider_e0 = style_provider_proxy["StyledComponentsRegistry"];

;// CONCATENATED MODULE: ./src/shared/providers/index.ts



// EXTERNAL MODULE: ./node_modules/local-storage/local-storage.js
var local_storage = __webpack_require__(38682);
;// CONCATENATED MODULE: ./src/shared/services/system/storage.service.ts

const setStorage = (key, value)=>{
    set(key, value);
};
const getStorage = (key)=>{
    return get(key);
};
const removeStorage = (key)=>{
    remove(key);
};


;// CONCATENATED MODULE: ./src/app/layout.tsx









const metadata = {
    title: "Хмельницьк залізобетон",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "uk",
        className: (layout_tsx_import_Montserrat_arguments_subsets_latin_cyrillic_variableName_montserrat_default()).className,
        children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* Header */.h4, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "main",
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components/* Footer */.$_, {})
                ]
            })
        })
    });
}


/***/ }),

/***/ 67263:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Oo: () => (/* reexport */ breadcrumb_e0),
  $_: () => (/* reexport */ e0),
  h4: () => (/* reexport */ header_e0)
});

// UNUSED EXPORTS: Advantages, Button, ButtonWhite, CatalogPrewiev, Clients, Instagram, Partner, Slider, TaskAnswer

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./src/shared/components/footer/index.tsx

const proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/components/footer/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Footer"];

;// CONCATENATED MODULE: ./src/shared/components/header/index.tsx

const header_proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/components/header/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: header_esModule, $$typeof: header_$$typeof } = header_proxy;
const header_default_ = header_proxy.default;

const header_e0 = header_proxy["Header"];

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
;// CONCATENATED MODULE: ./src/shared/components/button/button.tsx


const Button = ({ text, onClick })=>{
    return /*#__PURE__*/ _jsx("button", {
        className: "btn",
        onClick: onClick,
        children: text
    });
};

;// CONCATENATED MODULE: ./src/shared/components/button/button-white.tsx


const ButtonWhite = ({ text, onClick })=>{
    return /*#__PURE__*/ _jsx("button", {
        className: "btn btn-white",
        onClick: onClick,
        children: text
    });
};

;// CONCATENATED MODULE: ./src/shared/components/button/index.ts



// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(3501);
;// CONCATENATED MODULE: ./src/shared/config/menu.config.ts

const menu_config_proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/config/menu.config.ts`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: menu_config_esModule, $$typeof: menu_config_$$typeof } = menu_config_proxy;
const menu_config_default_ = menu_config_proxy.default;

const menu_config_e0 = menu_config_proxy["menuConfig"];

;// CONCATENATED MODULE: ./src/shared/config/advantages.config.ts

const advantages_config_proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/config/advantages.config.ts`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: advantages_config_esModule, $$typeof: advantages_config_$$typeof } = advantages_config_proxy;
const advantages_config_default_ = advantages_config_proxy.default;

const advantages_config_e0 = advantages_config_proxy["advantages"];

;// CONCATENATED MODULE: ./src/shared/config/lang.config.ts
const LangIcon = [
    {
        key: "ua",
        image: "/ua.svg"
    },
    {
        key: "en",
        image: "/en.svg"
    }
];

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(26274);
;// CONCATENATED MODULE: ./src/shared/config/axios.config.ts

const axiosInstance = axios/* default */.Z.create({
    baseURL: "http://13.49.185.119:3000",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "X-Requested-With": "XMLHttpRequest",
        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    },
    timeout: 180000
});
const request = async (func, retryCount = 0)=>{
    try {
        let response = await func();
        return response;
    } catch (e) {
        console.log(e);
    }
};
const http = {
    get: (url, params)=>request(()=>axiosInstance.get(url, params)),
    post: (url, data, params)=>request(()=>axiosInstance.post(url, data, params)),
    put: (url, data, params)=>request(()=>axiosInstance.put(url, data, params)),
    patch: (url, data, params)=>request(()=>axiosInstance.patch(url, data, params)),
    delete: (url, params)=>request(()=>axiosInstance.delete(url, params))
};

;// CONCATENATED MODULE: ./src/shared/config/index.ts





;// CONCATENATED MODULE: ./src/shared/components/advantage/advantages.tsx





const Advantages = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: styles.flex,
        children: advantages().map((it, index)=>/*#__PURE__*/ _jsxs("div", {
                className: styles.item,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: it.image,
                            width: 72,
                            height: 72,
                            alt: it.title
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.info,
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                children: it.title
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: it.description
                            })
                        ]
                    })
                ]
            }, index))
    });
};

;// CONCATENATED MODULE: ./src/shared/components/advantage/index.ts


// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(53219);
;// CONCATENATED MODULE: ./src/shared/components/catalog-prewiev/index.tsx





const CatalogPrewiev = ({ image, name, key })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.flex,
        children: [
            /*#__PURE__*/ _jsxs(Link, {
                href: "/",
                className: styles.item,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.image,
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/catalog.png",
                            loading: "lazy",
                            layout: "fill",
                            objectFit: "fill",
                            alt: name
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.desc,
                        children: [
                            /*#__PURE__*/ _jsx(Image, {
                                src: "/zb.svg",
                                width: 72,
                                height: 72,
                                alt: "zb"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Залізобетонні вироби"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Link, {
                href: "/",
                className: styles.item,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.image,
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/catalog.png",
                            loading: "lazy",
                            layout: "fill",
                            objectFit: "fill",
                            alt: name
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.desc,
                        children: [
                            /*#__PURE__*/ _jsx(Image, {
                                src: "/zb.svg",
                                width: 72,
                                height: 72,
                                alt: "zb"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Бетони та розчини"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs(Link, {
                href: "/",
                className: styles.item,
                children: [
                    /*#__PURE__*/ _jsx("div", {
                        className: styles.image,
                        children: /*#__PURE__*/ _jsx(Image, {
                            src: "/catalog.png",
                            loading: "lazy",
                            layout: "fill",
                            objectFit: "fill",
                            alt: name
                        })
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.desc,
                        children: [
                            /*#__PURE__*/ _jsx(Image, {
                                src: "/zb.svg",
                                width: 72,
                                height: 72,
                                alt: "zb"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Вироби з деревини"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/components/partner/index.tsx

const partner_proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/components/partner/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: partner_esModule, $$typeof: partner_$$typeof } = partner_proxy;
const partner_default_ = partner_proxy.default;

const partner_e0 = partner_proxy["Partner"];

;// CONCATENATED MODULE: ./src/shared/components/clients/index.tsx




const Clients = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.flex,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: styles.item,
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.info,
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.item,
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.info,
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.item,
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.info,
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.item,
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.info,
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: styles.item,
                children: [
                    /*#__PURE__*/ _jsx(Image, {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ _jsxs("div", {
                        className: styles.info,
                        children: [
                            /*#__PURE__*/ _jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ _jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/components/instagram/instagram-post.tsx





const instagram_post_InstagramPost = ()=>{
    return /*#__PURE__*/ _jsx(Link, {
        href: "",
        className: styles.item,
        children: /*#__PURE__*/ _jsx(Image, {
            src: "/client.png",
            alt: "",
            loading: "lazy",
            layout: "fill",
            objectFit: "cover"
        })
    });
};

;// CONCATENATED MODULE: ./src/shared/components/instagram/index.tsx




const Instagram = ()=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: styles.flex,
        children: [
            /*#__PURE__*/ _jsx(InstagramPost, {}),
            /*#__PURE__*/ _jsx(InstagramPost, {}),
            /*#__PURE__*/ _jsx(InstagramPost, {}),
            /*#__PURE__*/ _jsx(InstagramPost, {})
        ]
    });
};

;// CONCATENATED MODULE: ./src/shared/components/task-answer/index.tsx

const task_answer_proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/components/task-answer/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: task_answer_esModule, $$typeof: task_answer_$$typeof } = task_answer_proxy;
const task_answer_default_ = task_answer_proxy.default;

const task_answer_e0 = task_answer_proxy["TaskAnswer"];

;// CONCATENATED MODULE: ./src/shared/components/breadcrumb/index.tsx

const breadcrumb_proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/components/breadcrumb/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: breadcrumb_esModule, $$typeof: breadcrumb_$$typeof } = breadcrumb_proxy;
const breadcrumb_default_ = breadcrumb_proxy.default;

const breadcrumb_e0 = breadcrumb_proxy["Breadcrumbs"];

;// CONCATENATED MODULE: ./src/shared/components/slider/index.tsx

const slider_proxy = (0,module_proxy.createProxy)(String.raw`/Users/pro/Documents/hzb/hzb_front/src/shared/components/slider/index.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: slider_esModule, $$typeof: slider_$$typeof } = slider_proxy;
const slider_default_ = slider_proxy.default;

const slider_e0 = slider_proxy["Slider"];

;// CONCATENATED MODULE: ./src/shared/components/index.ts













/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 39675:
/***/ (() => {



/***/ })

};
;