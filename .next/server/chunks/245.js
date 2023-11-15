"use strict";
exports.id = 245;
exports.ids = [245];
exports.modules = {

/***/ 71245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R6: () => (/* binding */ getTranslate)
/* harmony export */ });
/* unused harmony exports Lang, compareTranslates */
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55089);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable @typescript-eslint/no-explicit-any */ 
var Lang;
(function(Lang) {
    Lang["EN"] = "en";
    Lang["UA"] = "ua";
})(Lang || (Lang = {}));
const getTranslate = (translates, lang)=>{
    try {
        if (!translates || lodash__WEBPACK_IMPORTED_MODULE_0___default().isEmpty(translates)) return {};
        if (translates.length === 1) return translates[0];
        const item = translates.find((it)=>it?.lang === lang);
        if (item) return item;
        const enItem = translates.find((it)=>it?.lang === Lang.EN);
        if (enItem) return enItem;
        return translates[0];
    } catch (e) {
        return {};
    }
};
const compareTranslates = (translates, translates2, keys)=>{
    if (!translates || !translates2) return false;
    let isEqual = true;
    const _translates1 = translates.reduce((res, it)=>{
        res[it.id] = _.pick(it, keys);
        return res;
    }, {});
    translates2.map((it)=>{
        const _it = _.pick(it, keys);
        if (!_.isEqual(_translates1[it.id], _it)) isEqual = false;
    });
    return isEqual;
};


/***/ })

};
;