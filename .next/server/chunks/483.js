exports.id = 483;
exports.ids = [483];
exports.modules = {

/***/ 36792:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 84483:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ useFlatList)
/* harmony export */ });
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36792);
/* harmony import */ var lodash_noop__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_noop__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable @typescript-eslint/no-explicit-any */ 

const defaultProps = {
    limit: 20,
    page: 1,
    fetchItems: (lodash_noop__WEBPACK_IMPORTED_MODULE_0___default()) /*  axios request */ ,
    serrializatorResponse: (data)=>data,
    serrializatorItems: (items)=>items,
    loadParams: {},
    needInit: true,
    clearWhenReload: true,
    defaultItems: [],
    defaultLoading: true
};
const getDefaultProps = ()=>{
    return Object.assign({}, defaultProps);
};
const useFlatList = (props)=>{
    if (!props.fetchItems) throw new Error("Use flat list need a fetchItems function");
    props = Object.assign(getDefaultProps(), props);
    const loadParams = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({
        limit: props.limit,
        page: props.page,
        count: undefined,
        ...props.loadParams
    });
    const blockLoadingRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(false);
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.defaultItems);
    const [totalCount, setTotalCount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.defaultLoading);
    const [isLoadingNext, setIsLoadingNext] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isInit, setIsInit] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const fetchItems = async (firstFetch = false)=>{
        console.log("firstFetch:", firstFetch);
        const { count, page, limit } = loadParams.current;
        if (firstFetch) {
            setLoading(true);
            loadParams.current.page = defaultProps.page;
            loadParams.current.count = undefined;
        } else if (blockLoadingRef.current) return;
        else if (count && page > Math.ceil(count / limit)) return;
        setIsLoadingNext(true);
        blockLoadingRef.current = true;
        try {
            if (props.clearWhenReload) setItems([]);
            const response = props.serrializatorResponse(await props.fetchItems({
                params: loadParams.current
            }));
            if (!response) throw {};
            loadParams.current = {
                ...props.loadParams,
                ...loadParams.current,
                limit: loadParams.current.limit,
                page: loadParams.current.page + 1,
                count: response.data.count
            };
            const fetchedItems = props.serrializatorItems(response.data.items);
            if (firstFetch) setItems(fetchedItems);
            else setItems([
                ...items,
                ...fetchedItems
            ]);
            setTotalCount(response.data.count);
            if (!isInit) setIsInit(true);
        } catch (e) {
            setItems([]);
        }
        blockLoadingRef.current = false;
        setLoading(false);
        setIsLoadingNext(false);
    };
    const resetFlatList = async ()=>{
        await fetchItems(true);
    };
    const loadMore = ()=>{
        fetchItems(false);
    };
    const setLoadParams = (params)=>{
        loadParams.current = {
            ...loadParams.current,
            ...params
        };
        fetchItems(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (props.needInit) fetchItems(true);
    }, []);
    const loadAll = ()=>{
        if (!loadParams.current.count) return;
        setLoadParams({
            limit: loadParams.current.count
        });
    };
    const isLoadedAll = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        try {
            return loadParams.current.count === items?.length;
        } catch (e) {
            return false;
        }
    }, [
        loadParams.current,
        items
    ]);
    return {
        items,
        isEmpty: !items || !items.length,
        isLoading,
        isLoadingNext,
        loadParams: loadParams.current,
        resetFlatList,
        loadMore,
        setLoadParams,
        isInit,
        _setItems: setItems,
        count: totalCount,
        loadAll,
        isLoadedAll
    };
};


/***/ })

};
;