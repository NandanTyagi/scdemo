"use strict";
exports.id = 128;
exports.ids = [128];
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

/***/ 3326:
/***/ ((module) => {

module.exports = JSON.parse('{"Mt":[{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"title","type":"string"},{"indexed":false,"internalType":"string","name":"hash","type":"string"}],"name":"PostCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"string","name":"title","type":"string"},{"indexed":false,"internalType":"string","name":"hash","type":"string"},{"indexed":false,"internalType":"bool","name":"published","type":"bool"}],"name":"PostUpdated","type":"event"},{"inputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"hash","type":"string"}],"name":"createPost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"hash","type":"string"}],"name":"fetchPost","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"content","type":"string"},{"internalType":"bool","name":"published","type":"bool"}],"internalType":"struct Blog.Post","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fetchPosts","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"content","type":"string"},{"internalType":"bool","name":"published","type":"bool"}],"internalType":"struct Blog.Post[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"updateName","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"postId","type":"uint256"},{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"hash","type":"string"},{"internalType":"bool","name":"published","type":"bool"}],"name":"updatePost","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');

/***/ })

};
;