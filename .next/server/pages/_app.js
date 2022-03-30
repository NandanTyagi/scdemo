"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ contractAddress),
/* harmony export */   "Q": () => (/* binding */ ownerAddress)
/* harmony export */ });
const contractAddress = "0xA407f842fe47d476d0F66813Db51B1329b70eb97";
const ownerAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";


/***/ }),

/***/ 5340:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ AccountContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const AccountContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);


/***/ }),

/***/ 5619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@emotion/css"
var css_ = __webpack_require__(2842);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
;// CONCATENATED MODULE: external "web3modal"
const external_web3modal_namespaceObject = require("web3modal");
var external_web3modal_default = /*#__PURE__*/__webpack_require__.n(external_web3modal_namespaceObject);
;// CONCATENATED MODULE: external "@walletconnect/web3-provider"
const web3_provider_namespaceObject = require("@walletconnect/web3-provider");
var web3_provider_default = /*#__PURE__*/__webpack_require__.n(web3_provider_namespaceObject);
// EXTERNAL MODULE: ./context.js
var context = __webpack_require__(5340);
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(3346);
;// CONCATENATED MODULE: ./pages/_app.js

/* pages/__app.js */ 









function MyApp({ Component , pageProps  }) {
    /* create local state to save account information after signin */ const { 0: account , 1: setAccount  } = (0,external_react_.useState)(null);
    /* web3Modal configuration for enabling wallet access */ async function getWeb3Modal() {
        const web3Modal = new (external_web3modal_default())({
            cacheProvider: false,
            providerOptions: {
                walletconnect: {
                    package: (web3_provider_default()),
                    options: {
                        infuraId: 'your-infura-id'
                    }
                }
            }
        });
        return web3Modal;
    }
    /* the connect function uses web3 modal to connect to the user's wallet */ async function connect() {
        try {
            const web3Modal = await getWeb3Modal();
            const connection = await web3Modal.connect();
            const provider = new external_ethers_.ethers.providers.Web3Provider(connection);
            const accounts = await provider.listAccounts();
            setAccount(accounts[0]);
        } catch (err) {
            console.log('error:', err);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: nav,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: header,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "/logo.svg",
                                        alt: "React Logo",
                                        style: {
                                            width: '50px'
                                        }
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: titleContainer,
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                className: title,
                                                children: "Full Stack"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: description,
                                                children: "WEB3"
                                            })
                                        ]
                                    })
                                })
                            }),
                            !account && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: buttonContainer,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: buttonStyle,
                                    onClick: connect,
                                    children: "Connect"
                                })
                            }),
                            account && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: accountInfo,
                                children: account
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: linkContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: _app_link,
                                    children: "Home"
                                })
                            }),
                            /* if the signed in user is the contract owner, we */ /* show the nav link to create a new post */ account === config/* ownerAddress */.Q && /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: "/create-post",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: _app_link,
                                    children: "Create Post"
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: container,
                children: /*#__PURE__*/ jsx_runtime_.jsx(context/* AccountContext.Provider */.w.Provider, {
                    value: account,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps,
                        connect: connect
                    })
                })
            })
        ]
    });
}
const accountInfo = css_.css`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  font-size: 12px;
`;
const container = css_.css`
  padding: 40px;
`;
const linkContainer = css_.css`
  padding: 30px 60px;
  background-color: #fafafa;
`;
const nav = css_.css`
  background-color: white;
`;
const header = css_.css`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.075);
  padding: 20px 30px;
`;
const description = css_.css`
  margin: 0;
  color: #999999;
`;
const titleContainer = css_.css`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
`;
const title = css_.css`
  margin-left: 30px;
  font-weight: 500;
  margin: 0;
`;
const buttonContainer = css_.css`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;
const buttonStyle = css_.css`
  background-color: #fafafa;
  outline: none;
  border: none;
  font-size: 18px;
  padding: 16px 70px;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 7px 7px rgba(0, 0, 0, 0.1);
`;
const _app_link = css_.css`
  margin: 0px 40px 0px 0px;
  font-size: 16px;
  font-weight: 400;
`;
/* harmony default export */ const _app = (MyApp);


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
var __webpack_exports__ = __webpack_require__.X(0, [397,676,664], () => (__webpack_exec__(5619)));
module.exports = __webpack_exports__;

})();