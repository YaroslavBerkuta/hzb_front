exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 64807:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  HF: () => (/* reexport */ Advantages),
  Oo: () => (/* reexport */ breadcrumb.Breadcrumbs),
  zx: () => (/* reexport */ components_button/* Button */.z),
  VM: () => (/* reexport */ components_button/* ButtonWhite */.V),
  eT: () => (/* reexport */ Clients),
  mr: () => (/* reexport */ Instagram),
  kT: () => (/* reexport */ partner.Partner),
  iR: () => (/* reexport */ slider.Slider),
  up: () => (/* reexport */ task_answer.TaskAnswer)
});

// UNUSED EXPORTS: CatalogPrewiev, Footer, Header

// EXTERNAL MODULE: ./src/shared/components/footer/index.tsx
var footer = __webpack_require__(49449);
// EXTERNAL MODULE: ./src/shared/components/header/index.tsx + 28 modules
var header = __webpack_require__(5953);
// EXTERNAL MODULE: ./src/shared/components/button/index.ts + 2 modules
var components_button = __webpack_require__(78351);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/shared/components/advantage/index.module.scss
var index_module = __webpack_require__(49426);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/shared/config/index.ts + 2 modules
var config = __webpack_require__(47091);
;// CONCATENATED MODULE: ./src/shared/components/advantage/advantages.tsx





const Advantages = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (index_module_default()).flex,
        children: (0,config/* advantages */.aZ)().map((it, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: it.image,
                            width: 72,
                            height: 72,
                            alt: it.title
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (index_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: it.title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
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
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
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

// EXTERNAL MODULE: ./src/shared/components/partner/index.tsx
var partner = __webpack_require__(99921);
// EXTERNAL MODULE: ./src/shared/components/clients/index.module.scss
var clients_index_module = __webpack_require__(26568);
var clients_index_module_default = /*#__PURE__*/__webpack_require__.n(clients_index_module);
;// CONCATENATED MODULE: ./src/shared/components/clients/index.tsx




const Clients = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (clients_index_module_default()).flex,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (clients_index_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (clients_index_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (clients_index_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (clients_index_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (clients_index_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (clients_index_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (clients_index_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (clients_index_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (clients_index_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/client.png",
                        alt: "client",
                        loading: "lazy",
                        layout: "fill",
                        objectFit: "contain"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (clients_index_module_default()).info,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                children: "ЕПІЦЕНТР"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "Лідер у сегменті роздрібної торгівлі товарами для дому та ремонту на ринку."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/shared/components/instagram/index.module.scss
var instagram_index_module = __webpack_require__(17450);
var instagram_index_module_default = /*#__PURE__*/__webpack_require__.n(instagram_index_module);
;// CONCATENATED MODULE: ./src/shared/components/instagram/instagram-post.tsx





const InstagramPost = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: "",
        className: (instagram_index_module_default()).item,
        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (instagram_index_module_default()).flex,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(InstagramPost, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(InstagramPost, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(InstagramPost, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(InstagramPost, {})
        ]
    });
};

// EXTERNAL MODULE: ./src/shared/components/task-answer/index.tsx + 2 modules
var task_answer = __webpack_require__(79290);
// EXTERNAL MODULE: ./src/shared/components/breadcrumb/index.tsx
var breadcrumb = __webpack_require__(14760);
// EXTERNAL MODULE: ./src/shared/components/slider/index.tsx
var slider = __webpack_require__(98931);
;// CONCATENATED MODULE: ./src/shared/components/index.ts













/***/ }),

/***/ 49426:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "advantage_item__q4CJh",
	"flex": "advantage_flex__chjLY",
	"info": "advantage_info__IPvWt"
};


/***/ }),

/***/ 26568:
/***/ ((module) => {

// Exports
module.exports = {
	"flex": "clients_flex__7WeT0",
	"item": "clients_item__spj9Q",
	"info": "clients_info__e6dAv"
};


/***/ }),

/***/ 17450:
/***/ ((module) => {

// Exports
module.exports = {
	"flex": "instagram_flex__EGr_P",
	"item": "instagram_item__VVfo4"
};


/***/ })

};
;