"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 5340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ AccountContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AccountContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);


/***/ }),

/***/ 4369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2842);
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5340);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3346);
/* harmony import */ var _artifacts_contracts_Blog_sol_Blog_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3326);

/* pages/index.js */ 





/* import contract address and contract owner address */ 
/* import Application Binary Interface (ABI) */ 
function Home(props) {
    /* posts are fetched server side and passed in as props */ /* see getServerSideProps */ const { posts  } = props;
    const account = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context__WEBPACK_IMPORTED_MODULE_6__/* .AccountContext */ .w);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    async function navigate() {
        router.push('/create-post');
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: postList,
                children: /* map over the posts array and render a button with the post title */ posts.map((post, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                        href: `/post/${post[2]}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: linkStyle,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: postTitle,
                                        children: post[1]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: arrowContainer,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/right-arrow.svg",
                                            alt: "Right arrow",
                                            className: smallArrow
                                        })
                                    })
                                ]
                            })
                        })
                    }, index)
                )
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: container,
                children: account === _config__WEBPACK_IMPORTED_MODULE_8__/* .ownerAddress */ .Q && posts && !posts.length && /* if the signed in user is the account owner, render a button */ /* to create the first post */ /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: buttonStyle,
                    onClick: navigate,
                    children: [
                        "Create your first post",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/right-arrow.svg",
                            alt: "Right arrow",
                            className: arrow
                        })
                    ]
                })
            })
        ]
    });
};
async function getServerSideProps() {
    /* here we check to see the current environment variable */ /* and render a provider based on the environment we're in */ let provider;
    if (process.env.ENVIRONMENT === 'local') {
        provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider();
    } else if (process.env.ENVIRONMENT === 'testnet') {
        provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider('https://rpc-mumbai.matic.today');
    } else {
        provider = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.providers.JsonRpcProvider('https://polygon-rpc.com/');
    }
    const contract = new ethers__WEBPACK_IMPORTED_MODULE_4__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_8__/* .contractAddress */ .i, _artifacts_contracts_Blog_sol_Blog_json__WEBPACK_IMPORTED_MODULE_7__/* .abi */ .Mt, provider);
    const data = await contract.fetchPosts();
    return {
        props: {
            posts: JSON.parse(JSON.stringify(data))
        }
    };
}
const arrowContainer = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 20px;
`;
const postTitle = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
  margin: 0;
  padding: 20px;
`;
const linkStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
  border: 1px solid #ddd;
  margin-top: 20px;
  border-radius: 8px;
  display: flex;
`;
const postList = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
  width: 700px;
  margin: 0 auto;
  padding-top: 50px;
`;
const container = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
  display: flex;
  justify-content: center;
`;
const buttonStyle = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
  margin-top: 100px;
  background-color: #fafafa;
  outline: none;
  border: none;
  font-size: 44px;
  padding: 20px 70px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 7px 7px rgba(0, 0, 0, 0.1);
`;
const arrow = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
  width: 35px;
  margin-left: 30px;
`;
const smallArrow = _emotion_css__WEBPACK_IMPORTED_MODULE_1__.css`
  width: 25px;
`;


/***/ }),

/***/ 2842:
/***/ ((module) => {

module.exports = require("@emotion/css");

/***/ }),

/***/ 1982:
/***/ ((module) => {

module.exports = require("ethers");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [397,676,664,128], () => (__webpack_exec__(4369)));
module.exports = __webpack_exports__;

})();