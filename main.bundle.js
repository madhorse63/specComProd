/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/swiper */ \"./src/modules/swiper.js\");\n/* harmony import */ var _modules_swiper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_swiper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n\n\n\n\ndocument.querySelector('#countUp').addEventListener('click', function () {\n  var departureWeight = document.querySelector('#departure-weight').value;\n  var departureType = document.querySelector('#type').value;\n  var departureCost = document.querySelector('#departure-cost').value;\n  var redirect = document.querySelector('#redirect').value;\n  var confirm = document.querySelector('#confirm').value;\n  /* проверки */\n\n  if (departureWeight.trim() === '') {\n    alert('Введите вес отправления!');\n    return false;\n  }\n\n  ;\n\n  if (departureWeight.trim() < 0) {\n    alert('Вес отправления не может быть меньше 0!');\n    return false;\n  }\n\n  ;\n\n  if (departureWeight.trim() > 2 && departureType === 'packet') {\n    alert('Вес пакета не может превышать 2 кг');\n    return false;\n  }\n\n  ;\n\n  if (departureWeight.trim() > 50 && departureType === 'package') {\n    alert('Вес посылки не может превышать 50 кг');\n    return false;\n  }\n\n  ;\n\n  if (isNaN(departureCost.trim())) {\n    alert('Допустимо только числовое значение');\n    return false;\n  }\n\n  if (departureCost.trim() < 0) {\n    alert('Недопустимое значние оценки');\n    return false;\n  }\n  /* подсчеты */\n\n\n  var modalContentCalc = document.querySelector('.modal-content-calc');\n\n  if (departureCost.trim() === '') {\n    console.log(1);\n    modalContentCalc.innerHTML = \"\\n        <p class=\\\"modal-text-calc\\\">\\n            \\u0421\\u0442\\u043E\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442  \".concat((0,_modules_calculator__WEBPACK_IMPORTED_MODULE_2__.calc)(), \" \\u0440\\u0443\\u0431\\u043B\\u0435\\u0439            \\n        </p>\\n        \");\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.showModalCalcFunc)();\n  }\n\n  if (departureCost.trim() !== '') {\n    modalContentCalc.innerHTML = \"\\n        <p class=\\\"modal-text-calc\\\">\\n            \\u0421\\u0442\\u043E\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C \\u043E\\u0442\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F \\u0441\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442  \".concat((0,_modules_calculator__WEBPACK_IMPORTED_MODULE_2__.calcWithCoef)(), \" \\u0440\\u0443\\u0431\\u043B\\u0435\\u0439            \\n        </p>\\n        \");\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.showModalCalcFunc)();\n  }\n});\ndocument.querySelector('#close-button-calc').addEventListener('click', function () {\n  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.closeModalCalcFunc)();\n});\n/* модальные окна */\n\nvar items = document.querySelectorAll('.item');\nvar modalContent = document.querySelector('.modal-content');\nitems.forEach(function (item) {\n  item.addEventListener('click', function () {\n    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.showModalFunc)();\n\n    if (item.id === 'item-1') {\n      modalContent.innerHTML = \"\\n        <p class=\\\"modal-header\\\">\\n            Lorem, ipsum.\\n        </p>\\n        <img class=\\\"modal-cover\\\" src=\\\"./images/icons/1.png\\\" alt=\\\"cover\\\">\\n        <p class=\\\"modal-descr\\\">\\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dicta. Accusantium delectus commodi, corrupti rerum quibusdam atque mollitia suscipit non!\\n        </p>\";\n    }\n\n    if (item.id === 'item-2') {\n      modalContent.innerHTML = \"\\n        <p class=\\\"modal-header\\\">\\n            Lorem, ipsum.\\n        </p>\\n        <img class=\\\"modal-cover\\\" src=\\\"./images/icons/2.png\\\" alt=\\\"cover\\\">\\n        <p class=\\\"modal-descr\\\">\\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dicta. Accusantium delectus commodi, corrupti rerum quibusdam atque mollitia suscipit non!\\n        </p>\";\n    }\n\n    if (item.id === 'item-3') {\n      modalContent.innerHTML = \"\\n        <p class=\\\"modal-header\\\">\\n            Lorem, ipsum.\\n        </p>\\n        <img class=\\\"modal-cover\\\" src=\\\"./images/icons/3.png\\\" alt=\\\"cover\\\">\\n        <p class=\\\"modal-descr\\\">\\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dicta. Accusantium delectus commodi, corrupti rerum quibusdam atque mollitia suscipit non!\\n        </p>\";\n    }\n\n    if (item.id === 'item-4') {\n      modalContent.innerHTML = \"\\n        <p class=\\\"modal-header\\\">\\n            Lorem, ipsum.\\n        </p>\\n        <img class=\\\"modal-cover\\\" src=\\\"./images/icons/4.png\\\" alt=\\\"cover\\\">\\n        <p class=\\\"modal-descr\\\">\\n            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, dicta. Accusantium delectus commodi, corrupti rerum quibusdam atque mollitia suscipit non!\\n        </p>\";\n    }\n  });\n});\nvar closeModal = document.querySelector('#close-button');\ncloseModal.addEventListener('click', function () {\n  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.closeModalFunc)();\n});\n/* скролл */\n\n//# sourceURL=webpack://webpack1/./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calc\": () => (/* binding */ calc),\n/* harmony export */   \"calcWithCoef\": () => (/* binding */ calcWithCoef)\n/* harmony export */ });\n/* harmony import */ var _cityCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cityCodes */ \"./src/modules/cityCodes.js\");\n\n\nfunction calc() {\n  var citySend = document.querySelector('#send').value;\n  var cityGet = document.querySelector('#get').value;\n  var departureType = document.querySelector('#type').value;\n  var service = document.querySelector('#service').value;\n  var departureWeight = document.querySelector('#departure-weight').value;\n  var tarifZone = _cityCodes__WEBPACK_IMPORTED_MODULE_0__[\"default\"][citySend][cityGet];\n\n  if (departureType === 'packet') {\n    switch (service) {\n      case 'window-window':\n        {\n          if (departureWeight <= 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '0.60';\n                }\n\n              case 2:\n                {\n                  return '1.15';\n                }\n\n              case 3:\n                {\n                  return '1.35';\n                }\n\n              case 4:\n                {\n                  return '1.60';\n                }\n\n              case 5:\n                {\n                  return '2.05';\n                }\n            }\n          }\n\n          if (departureWeight > 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '1.40';\n                }\n\n              case 2:\n                {\n                  return '1.95';\n                }\n\n              case 3:\n                {\n                  return '2.25';\n                }\n\n              case 4:\n                {\n                  return '2.40';\n                }\n\n              case 5:\n                {\n                  return '2.85';\n                }\n            }\n          }\n\n          break;\n        }\n\n      case 'window-door':\n        {\n          if (departureWeight <= 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '2.25';\n                }\n\n              case 2:\n                {\n                  return '2.70';\n                }\n\n              case 3:\n                {\n                  return '2.85';\n                }\n\n              case 4:\n                {\n                  return '3.00';\n                }\n\n              case 5:\n                {\n                  return '3.40';\n                }\n            }\n          }\n\n          if (departureWeight > 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '3.25';\n                }\n\n              case 2:\n                {\n                  return '3.70';\n                }\n\n              case 3:\n                {\n                  return '3.80';\n                }\n\n              case 4:\n                {\n                  return '4.00';\n                }\n\n              case 5:\n                {\n                  return '4.35';\n                }\n            }\n          }\n\n          break;\n        }\n\n      case 'door-window':\n        {\n          if (departureWeight <= 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '2.25';\n                }\n\n              case 2:\n                {\n                  return '2.70';\n                }\n\n              case 3:\n                {\n                  return '2.85';\n                }\n\n              case 4:\n                {\n                  return '3.00';\n                }\n\n              case 5:\n                {\n                  return '3.40';\n                }\n            }\n          }\n\n          if (departureWeight > 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '3.25';\n                }\n\n              case 2:\n                {\n                  return '3.70';\n                }\n\n              case 3:\n                {\n                  return '3.80';\n                }\n\n              case 4:\n                {\n                  return '4.00';\n                }\n\n              case 5:\n                {\n                  return '4.35';\n                }\n            }\n          }\n\n          break;\n        }\n\n      case 'door-door':\n        {\n          if (departureWeight <= 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '3.90';\n                }\n\n              case 2:\n                {\n                  return '4.35';\n                }\n\n              case 3:\n                {\n                  return '4.45';\n                }\n\n              case 4:\n                {\n                  return '4.65';\n                }\n\n              case 5:\n                {\n                  return '5.00';\n                }\n            }\n          }\n\n          if (departureWeight > 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '4.70';\n                }\n\n              case 2:\n                {\n                  return '5.15';\n                }\n\n              case 3:\n                {\n                  return '5.45';\n                }\n\n              case 4:\n                {\n                  return '5.80';\n                }\n\n              case 5:\n                {\n                  return '6.15';\n                }\n            }\n          }\n\n          break;\n        }\n    }\n  }\n\n  if (departureType === 'package') {\n    switch (service) {\n      case 'window-window':\n        {\n          if (departureWeight <= 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '0.75';\n                }\n\n              case 2:\n                {\n                  return '2.15';\n                }\n\n              case 3:\n                {\n                  return '2.55';\n                }\n\n              case 4:\n                {\n                  return '3.10';\n                }\n\n              case 5:\n                {\n                  return '4.20';\n                }\n            }\n          }\n\n          if (departureWeight > 1 && departureWeight <= 2) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '0.85';\n                }\n\n              case 2:\n                {\n                  return '2.25';\n                }\n\n              case 3:\n                {\n                  return '2.70';\n                }\n\n              case 4:\n                {\n                  return '3.20';\n                }\n\n              case 5:\n                {\n                  return '4.30';\n                }\n            }\n          }\n\n          if (departureWeight > 2 && departureWeight <= 3) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '1.00';\n                }\n\n              case 2:\n                {\n                  return '2.40';\n                }\n\n              case 3:\n                {\n                  return '2.80';\n                }\n\n              case 4:\n                {\n                  return '3.35';\n                }\n\n              case 5:\n                {\n                  return '4.45';\n                }\n            }\n          }\n\n          if (departureWeight > 3 && departureWeight <= 5) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '1.20';\n                }\n\n              case 2:\n                {\n                  return '2.60';\n                }\n\n              case 3:\n                {\n                  return '3.05';\n                }\n\n              case 4:\n                {\n                  return '3.60';\n                }\n\n              case 5:\n                {\n                  return '4.70';\n                }\n            }\n          }\n\n          if (departureWeight > 5 && departureWeight <= 10) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '1.80';\n                }\n\n              case 2:\n                {\n                  return '3.20';\n                }\n\n              case 3:\n                {\n                  return '3.65';\n                }\n\n              case 4:\n                {\n                  return '4.20';\n                }\n\n              case 5:\n                {\n                  return '5.30';\n                }\n            }\n          }\n\n          if (departureWeight > 10 && departureWeight <= 15) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '2.40';\n                }\n\n              case 2:\n                {\n                  return '3.80';\n                }\n\n              case 3:\n                {\n                  return '4.25';\n                }\n\n              case 4:\n                {\n                  return '4.80';\n                }\n\n              case 5:\n                {\n                  return '5.90';\n                }\n            }\n          }\n\n          if (departureWeight > 15 && departureWeight <= 20) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '3.00';\n                }\n\n              case 2:\n                {\n                  return '4.40';\n                }\n\n              case 3:\n                {\n                  return '4.85';\n                }\n\n              case 4:\n                {\n                  return '5.40';\n                }\n\n              case 5:\n                {\n                  return '6.50';\n                }\n            }\n          }\n\n          if (departureWeight > 20 && departureWeight <= 25) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '3.60';\n                }\n\n              case 2:\n                {\n                  return '5.00';\n                }\n\n              case 3:\n                {\n                  return '5.45';\n                }\n\n              case 4:\n                {\n                  return '6.00';\n                }\n\n              case 5:\n                {\n                  return '7.10';\n                }\n            }\n          }\n\n          if (departureWeight > 25 && departureWeight <= 30) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '4.20';\n                }\n\n              case 2:\n                {\n                  return '5.60';\n                }\n\n              case 3:\n                {\n                  return '6.05';\n                }\n\n              case 4:\n                {\n                  return '6.60';\n                }\n\n              case 5:\n                {\n                  return '7.70';\n                }\n            }\n          }\n\n          if (departureWeight > 30 && departureWeight <= 35) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '4.80';\n                }\n\n              case 2:\n                {\n                  return '6.20';\n                }\n\n              case 3:\n                {\n                  return '6.65';\n                }\n\n              case 4:\n                {\n                  return '7.20';\n                }\n\n              case 5:\n                {\n                  return '8.30';\n                }\n            }\n          }\n\n          if (departureWeight > 35 && departureWeight <= 40) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '5.40';\n                }\n\n              case 2:\n                {\n                  return '6.80';\n                }\n\n              case 3:\n                {\n                  return '7.25';\n                }\n\n              case 4:\n                {\n                  return '7.80';\n                }\n\n              case 5:\n                {\n                  return '8.90';\n                }\n            }\n          }\n\n          if (departureWeight > 40 && departureWeight <= 45) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '6.00';\n                }\n\n              case 2:\n                {\n                  return '7.40';\n                }\n\n              case 3:\n                {\n                  return '7.85';\n                }\n\n              case 4:\n                {\n                  return '8.40';\n                }\n\n              case 5:\n                {\n                  return '8.50';\n                }\n            }\n          }\n\n          if (departureWeight > 45 && departureWeight <= 50) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '6.60';\n                }\n\n              case 2:\n                {\n                  return '8.00';\n                }\n\n              case 3:\n                {\n                  return '8.45';\n                }\n\n              case 4:\n                {\n                  return '9.00';\n                }\n\n              case 5:\n                {\n                  return '10.10';\n                }\n            }\n          }\n\n          break;\n        }\n\n      case 'window-door':\n        {\n          if (departureWeight <= 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '3.90';\n                }\n\n              case 2:\n                {\n                  return '5.00';\n                }\n\n              case 3:\n                {\n                  return '5.30';\n                }\n\n              case 4:\n                {\n                  return '5.70';\n                }\n\n              case 5:\n                {\n                  return '6.55';\n                }\n            }\n          }\n\n          if (departureWeight > 1 && departureWeight <= 2) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '4.05';\n                }\n\n              case 2:\n                {\n                  return '5.10';\n                }\n\n              case 3:\n                {\n                  return '5.40';\n                }\n\n              case 4:\n                {\n                  return '5.80';\n                }\n\n              case 5:\n                {\n                  return '6.65';\n                }\n            }\n          }\n\n          if (departureWeight > 2 && departureWeight <= 3) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '4.15';\n                }\n\n              case 2:\n                {\n                  return '5.20';\n                }\n\n              case 3:\n                {\n                  return '5.55';\n                }\n\n              case 4:\n                {\n                  return '5.95';\n                }\n\n              case 5:\n                {\n                  return '6.80';\n                }\n            }\n          }\n\n          if (departureWeight > 3 && departureWeight <= 5) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '4.40';\n                }\n\n              case 2:\n                {\n                  return '5.45';\n                }\n\n              case 3:\n                {\n                  return '5.80';\n                }\n\n              case 4:\n                {\n                  return '6.20';\n                }\n\n              case 5:\n                {\n                  return '7.00';\n                }\n            }\n          }\n\n          if (departureWeight > 5 && departureWeight <= 10) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '5.70';\n                }\n\n              case 2:\n                {\n                  return '7.20';\n                }\n\n              case 3:\n                {\n                  return '7.50';\n                }\n\n              case 4:\n                {\n                  return '7.95';\n                }\n\n              case 5:\n                {\n                  return '8.75';\n                }\n            }\n          }\n\n          if (departureWeight > 10 && departureWeight <= 15) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '6.50';\n                }\n\n              case 2:\n                {\n                  return '8.40';\n                }\n\n              case 3:\n                {\n                  return '8.70';\n                }\n\n              case 4:\n                {\n                  return '9.15';\n                }\n\n              case 5:\n                {\n                  return '9.95';\n                }\n            }\n          }\n\n          if (departureWeight > 15 && departureWeight <= 20) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '7.30';\n                }\n\n              case 2:\n                {\n                  return '9.60';\n                }\n\n              case 3:\n                {\n                  return '9.90';\n                }\n\n              case 4:\n                {\n                  return '10.35';\n                }\n\n              case 5:\n                {\n                  return '11.15';\n                }\n            }\n          }\n\n          if (departureWeight > 20 && departureWeight <= 25) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '8.10';\n                }\n\n              case 2:\n                {\n                  return '10.80';\n                }\n\n              case 3:\n                {\n                  return '11.10';\n                }\n\n              case 4:\n                {\n                  return '11.55';\n                }\n\n              case 5:\n                {\n                  return '12.35';\n                }\n            }\n          }\n\n          if (departureWeight > 25 && departureWeight <= 30) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '8.90';\n                }\n\n              case 2:\n                {\n                  return '12.00';\n                }\n\n              case 3:\n                {\n                  return '12.30';\n                }\n\n              case 4:\n                {\n                  return '12.75';\n                }\n\n              case 5:\n                {\n                  return '13.55';\n                }\n            }\n          }\n\n          if (departureWeight > 30 && departureWeight <= 35) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '9.70';\n                }\n\n              case 2:\n                {\n                  return '13.20';\n                }\n\n              case 3:\n                {\n                  return '13.50';\n                }\n\n              case 4:\n                {\n                  return '13.95';\n                }\n\n              case 5:\n                {\n                  return '14.75';\n                }\n            }\n          }\n\n          if (departureWeight > 35 && departureWeight <= 40) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '10.50';\n                }\n\n              case 2:\n                {\n                  return '14.40';\n                }\n\n              case 3:\n                {\n                  return '14.70';\n                }\n\n              case 4:\n                {\n                  return '15.15';\n                }\n\n              case 5:\n                {\n                  return '15.95';\n                }\n            }\n          }\n\n          if (departureWeight > 40 && departureWeight <= 45) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '11.30';\n                }\n\n              case 2:\n                {\n                  return '15.60';\n                }\n\n              case 3:\n                {\n                  return '15.90';\n                }\n\n              case 4:\n                {\n                  return '16.35';\n                }\n\n              case 5:\n                {\n                  return '17.15';\n                }\n            }\n          }\n\n          if (departureWeight > 45 && departureWeight <= 50) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '12.10';\n                }\n\n              case 2:\n                {\n                  return '16.80';\n                }\n\n              case 3:\n                {\n                  return '17.10';\n                }\n\n              case 4:\n                {\n                  return '17.55';\n                }\n\n              case 5:\n                {\n                  return '18.35';\n                }\n            }\n          }\n\n          break;\n        }\n\n      case 'door-window':\n        {\n          if (departureWeight <= 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '3.90';\n                }\n\n              case 2:\n                {\n                  return '5.00';\n                }\n\n              case 3:\n                {\n                  return '5.30';\n                }\n\n              case 4:\n                {\n                  return '5.70';\n                }\n\n              case 5:\n                {\n                  return '6.55';\n                }\n            }\n          }\n\n          if (departureWeight > 1 && departureWeight <= 2) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '4.05';\n                }\n\n              case 2:\n                {\n                  return '5.10';\n                }\n\n              case 3:\n                {\n                  return '5.40';\n                }\n\n              case 4:\n                {\n                  return '5.80';\n                }\n\n              case 5:\n                {\n                  return '6.65';\n                }\n            }\n          }\n\n          if (departureWeight > 2 && departureWeight <= 3) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '4.15';\n                }\n\n              case 2:\n                {\n                  return '5.20';\n                }\n\n              case 3:\n                {\n                  return '5.55';\n                }\n\n              case 4:\n                {\n                  return '5.95';\n                }\n\n              case 5:\n                {\n                  return '6.80';\n                }\n            }\n          }\n\n          if (departureWeight > 3 && departureWeight <= 5) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '4.40';\n                }\n\n              case 2:\n                {\n                  return '5.45';\n                }\n\n              case 3:\n                {\n                  return '5.80';\n                }\n\n              case 4:\n                {\n                  return '6.20';\n                }\n\n              case 5:\n                {\n                  return '7.00';\n                }\n            }\n          }\n\n          if (departureWeight > 5 && departureWeight <= 10) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '5.70';\n                }\n\n              case 2:\n                {\n                  return '7.20';\n                }\n\n              case 3:\n                {\n                  return '7.50';\n                }\n\n              case 4:\n                {\n                  return '7.95';\n                }\n\n              case 5:\n                {\n                  return '8.75';\n                }\n            }\n          }\n\n          if (departureWeight > 10 && departureWeight <= 15) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '6.50';\n                }\n\n              case 2:\n                {\n                  return '8.40';\n                }\n\n              case 3:\n                {\n                  return '8.70';\n                }\n\n              case 4:\n                {\n                  return '9.15';\n                }\n\n              case 5:\n                {\n                  return '9.95';\n                }\n            }\n          }\n\n          if (departureWeight > 15 && departureWeight <= 20) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '7.30';\n                }\n\n              case 2:\n                {\n                  return '9.60';\n                }\n\n              case 3:\n                {\n                  return '9.90';\n                }\n\n              case 4:\n                {\n                  return '10.35';\n                }\n\n              case 5:\n                {\n                  return '11.15';\n                }\n            }\n          }\n\n          if (departureWeight > 20 && departureWeight <= 25) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '8.10';\n                }\n\n              case 2:\n                {\n                  return '10.80';\n                }\n\n              case 3:\n                {\n                  return '11.10';\n                }\n\n              case 4:\n                {\n                  return '11.55';\n                }\n\n              case 5:\n                {\n                  return '12.35';\n                }\n            }\n          }\n\n          if (departureWeight > 25 && departureWeight <= 30) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '8.90';\n                }\n\n              case 2:\n                {\n                  return '12.00';\n                }\n\n              case 3:\n                {\n                  return '12.30';\n                }\n\n              case 4:\n                {\n                  return '12.75';\n                }\n\n              case 5:\n                {\n                  return '13.55';\n                }\n            }\n          }\n\n          if (departureWeight > 30 && departureWeight <= 35) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '9.70';\n                }\n\n              case 2:\n                {\n                  return '13.20';\n                }\n\n              case 3:\n                {\n                  return '13.50';\n                }\n\n              case 4:\n                {\n                  return '13.95';\n                }\n\n              case 5:\n                {\n                  return '14.75';\n                }\n            }\n          }\n\n          if (departureWeight > 35 && departureWeight <= 40) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '10.50';\n                }\n\n              case 2:\n                {\n                  return '14.40';\n                }\n\n              case 3:\n                {\n                  return '14.70';\n                }\n\n              case 4:\n                {\n                  return '15.15';\n                }\n\n              case 5:\n                {\n                  return '15.95';\n                }\n            }\n          }\n\n          if (departureWeight > 40 && departureWeight <= 45) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '11.30';\n                }\n\n              case 2:\n                {\n                  return '15.60';\n                }\n\n              case 3:\n                {\n                  return '15.90';\n                }\n\n              case 4:\n                {\n                  return '16.35';\n                }\n\n              case 5:\n                {\n                  return '17.15';\n                }\n            }\n          }\n\n          if (departureWeight > 45 && departureWeight <= 50) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '12.10';\n                }\n\n              case 2:\n                {\n                  return '16.80';\n                }\n\n              case 3:\n                {\n                  return '17.10';\n                }\n\n              case 4:\n                {\n                  return '17.55';\n                }\n\n              case 5:\n                {\n                  return '18.35';\n                }\n            }\n          }\n\n          break;\n        }\n\n      case 'door-door':\n        {\n          if (departureWeight <= 1) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '6.20';\n                }\n\n              case 2:\n                {\n                  return '7.10';\n                }\n\n              case 3:\n                {\n                  return '7.35';\n                }\n\n              case 4:\n                {\n                  return '7.70';\n                }\n\n              case 5:\n                {\n                  return '8.40';\n                }\n            }\n          }\n\n          if (departureWeight > 1 && departureWeight <= 2) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '6.35';\n                }\n\n              case 2:\n                {\n                  return '7.25';\n                }\n\n              case 3:\n                {\n                  return '7.50';\n                }\n\n              case 4:\n                {\n                  return '7.85';\n                }\n\n              case 5:\n                {\n                  return '8.55';\n                }\n            }\n          }\n\n          if (departureWeight > 2 && departureWeight <= 3) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '6.50';\n                }\n\n              case 2:\n                {\n                  return '7.40';\n                }\n\n              case 3:\n                {\n                  return '7.65';\n                }\n\n              case 4:\n                {\n                  return '8.00';\n                }\n\n              case 5:\n                {\n                  return '8.70';\n                }\n            }\n          }\n\n          if (departureWeight > 3 && departureWeight <= 5) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '6.80';\n                }\n\n              case 2:\n                {\n                  return '7.70';\n                }\n\n              case 3:\n                {\n                  return '7.95';\n                }\n\n              case 4:\n                {\n                  return '8.30';\n                }\n\n              case 5:\n                {\n                  return '9.00';\n                }\n            }\n          }\n\n          if (departureWeight > 5 && departureWeight <= 10) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '8.65';\n                }\n\n              case 2:\n                {\n                  return '9.55';\n                }\n\n              case 3:\n                {\n                  return '9.80';\n                }\n\n              case 4:\n                {\n                  return '10.15';\n                }\n\n              case 5:\n                {\n                  return '10.85';\n                }\n            }\n          }\n\n          if (departureWeight > 10 && departureWeight <= 15) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '10.00';\n                }\n\n              case 2:\n                {\n                  return '10.90';\n                }\n\n              case 3:\n                {\n                  return '11.15';\n                }\n\n              case 4:\n                {\n                  return '11.50';\n                }\n\n              case 5:\n                {\n                  return '12.20';\n                }\n            }\n          }\n\n          if (departureWeight > 15 && departureWeight <= 20) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '11.35';\n                }\n\n              case 2:\n                {\n                  return '12.25';\n                }\n\n              case 3:\n                {\n                  return '12.50';\n                }\n\n              case 4:\n                {\n                  return '12.85';\n                }\n\n              case 5:\n                {\n                  return '13.55';\n                }\n            }\n          }\n\n          if (departureWeight > 20 && departureWeight <= 25) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '12.70';\n                }\n\n              case 2:\n                {\n                  return '13.60';\n                }\n\n              case 3:\n                {\n                  return '13.85';\n                }\n\n              case 4:\n                {\n                  return '14.20';\n                }\n\n              case 5:\n                {\n                  return '14.90';\n                }\n            }\n          }\n\n          if (departureWeight > 25 && departureWeight <= 30) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '14.05';\n                }\n\n              case 2:\n                {\n                  return '14.95';\n                }\n\n              case 3:\n                {\n                  return '15.20';\n                }\n\n              case 4:\n                {\n                  return '15.55';\n                }\n\n              case 5:\n                {\n                  return '16.25';\n                }\n            }\n          }\n\n          if (departureWeight > 30 && departureWeight <= 35) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '15.40';\n                }\n\n              case 2:\n                {\n                  return '16.30';\n                }\n\n              case 3:\n                {\n                  return '16.55';\n                }\n\n              case 4:\n                {\n                  return '16.90';\n                }\n\n              case 5:\n                {\n                  return '17.60';\n                }\n            }\n          }\n\n          if (departureWeight > 35 && departureWeight <= 40) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '16.75';\n                }\n\n              case 2:\n                {\n                  return '17.65';\n                }\n\n              case 3:\n                {\n                  return '17.90';\n                }\n\n              case 4:\n                {\n                  return '18.25';\n                }\n\n              case 5:\n                {\n                  return '18.95';\n                }\n            }\n          }\n\n          if (departureWeight > 40 && departureWeight <= 45) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '18.10';\n                }\n\n              case 2:\n                {\n                  return '19.00';\n                }\n\n              case 3:\n                {\n                  return '19.25';\n                }\n\n              case 4:\n                {\n                  return '19.60';\n                }\n\n              case 5:\n                {\n                  return '20.30';\n                }\n            }\n          }\n\n          if (departureWeight > 45 && departureWeight <= 50) {\n            switch (tarifZone) {\n              case 1:\n                {\n                  return '19.45';\n                }\n\n              case 2:\n                {\n                  return '20.35';\n                }\n\n              case 3:\n                {\n                  return '20.60';\n                }\n\n              case 4:\n                {\n                  return '20.95';\n                }\n\n              case 5:\n                {\n                  return '21.65';\n                }\n            }\n          }\n\n          break;\n        }\n    }\n  }\n}\n\nfunction calcWithCoef() {\n  var departureCost = document.querySelector('#departure-cost').value;\n  var costCoef = 0.015;\n  return Number(calc()) + departureCost * costCoef;\n}\n\n\n\n//# sourceURL=webpack://webpack1/./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/cityCodes.js":
/*!**********************************!*\
  !*** ./src/modules/cityCodes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar cityCodes = {\n  P1: {\n    'P1': 1,\n    'P2': 4,\n    'P3': 4,\n    'P4': 4,\n    'P5': 3,\n    'P6': 4,\n    'P7': 3,\n    'P8': 3,\n    'P9': 4,\n    'P10': 4,\n    'P11': 3,\n    'P12': 4,\n    'P13': 2,\n    'P14': 3,\n    'P15': 3,\n    'P16': 5,\n    'P17': 5,\n    'P18': 4,\n    'P19': 4,\n    'P20': 4,\n    'P21': 5,\n    'P22': 5,\n    'P23': 4\n  },\n  P2: {\n    'P1': 4,\n    'P2': 1,\n    'P3': 4,\n    'P4': 4,\n    'P5': 3,\n    'P6': 4,\n    'P7': 3,\n    'P8': 4,\n    'P9': 4,\n    'P10': 4,\n    'P11': 4,\n    'P12': 4,\n    'P13': 4,\n    'P14': 4,\n    'P15': 5,\n    'P16': 2,\n    'P17': 3,\n    'P18': 5,\n    'P19': 5,\n    'P20': 5,\n    'P21': 5,\n    'P22': 5,\n    'P23': 4\n  },\n  P3: {\n    'P1': 4,\n    'P2': 4,\n    'P3': 1,\n    'P4': 4,\n    'P5': 3,\n    'P6': 4,\n    'P7': 3,\n    'P8': 4,\n    'P9': 4,\n    'P10': 4,\n    'P11': 4,\n    'P12': 3,\n    'P13': 5,\n    'P14': 3,\n    'P15': 5,\n    'P16': 5,\n    'P17': 5,\n    'P18': 2,\n    'P19': 3,\n    'P20': 5,\n    'P21': 5,\n    'P22': 5,\n    'P23': 4\n  },\n  P4: {\n    'P1': 4,\n    'P2': 4,\n    'P3': 4,\n    'P4': 1,\n    'P5': 3,\n    'P6': 4,\n    'P7': 3,\n    'P8': 4,\n    'P9': 4,\n    'P10': 4,\n    'P11': 4,\n    'P12': 5,\n    'P13': 5,\n    'P14': 5,\n    'P15': 5,\n    'P16': 5,\n    'P17': 5,\n    'P18': 5,\n    'P19': 5,\n    'P20': 3,\n    'P21': 5,\n    'P22': 5,\n    'P23': 4\n  },\n  P5: {\n    'P1': 3,\n    'P2': 3,\n    'P3': 3,\n    'P4': 3,\n    'P5': 1,\n    'P6': 3,\n    'P7': 2,\n    'P8': 3,\n    'P9': 3,\n    'P10': 3,\n    'P11': 3,\n    'P12': 4,\n    'P13': 4,\n    'P14': 4,\n    'P15': 4,\n    'P16': 4,\n    'P17': 4,\n    'P18': 4,\n    'P19': 4,\n    'P20': 4,\n    'P21': 4,\n    'P22': 4,\n    'P23': 3\n  },\n  P6: {\n    'P1': 4,\n    'P2': 4,\n    'P3': 4,\n    'P4': 4,\n    'P5': 3,\n    'P6': 1,\n    'P7': 3,\n    'P8': 4,\n    'P9': 4,\n    'P10': 2,\n    'P11': 4,\n    'P12': 4,\n    'P13': 5,\n    'P14': 4,\n    'P15': 4,\n    'P16': 4,\n    'P17': 4,\n    'P18': 4,\n    'P19': 5,\n    'P20': 4,\n    'P21': 4,\n    'P22': 5,\n    'P23': 3\n  },\n  P7: {\n    'P1': 3,\n    'P2': 3,\n    'P3': 3,\n    'P4': 3,\n    'P5': 2,\n    'P6': 3,\n    'P7': 2,\n    'P8': 3,\n    'P9': 3,\n    'P10': 3,\n    'P11': 3,\n    'P12': 5,\n    'P13': 4,\n    'P14': 4,\n    'P15': 4,\n    'P16': 4,\n    'P17': 4,\n    'P18': 4,\n    'P19': 5,\n    'P20': 4,\n    'P21': 4,\n    'P22': 5,\n    'P23': 3\n  },\n  P8: {\n    'P1': 3,\n    'P2': 4,\n    'P3': 4,\n    'P4': 4,\n    'P5': 3,\n    'P6': 4,\n    'P7': 3,\n    'P8': 1,\n    'P9': 4,\n    'P10': 4,\n    'P11': 3,\n    'P12': 4,\n    'P13': 3,\n    'P14': 2,\n    'P15': 3,\n    'P16': 4,\n    'P17': 4,\n    'P18': 4,\n    'P19': 4,\n    'P20': 4,\n    'P21': 4,\n    'P22': 5,\n    'P23': 3\n  },\n  P9: {\n    'P1': 4,\n    'P2': 4,\n    'P3': 4,\n    'P4': 4,\n    'P5': 3,\n    'P6': 4,\n    'P7': 3,\n    'P8': 4,\n    'P9': 1,\n    'P10': 4,\n    'P11': 5,\n    'P12': 5,\n    'P13': 5,\n    'P14': 4,\n    'P15': 5,\n    'P16': 3,\n    'P17': 2,\n    'P18': 5,\n    'P19': 5,\n    'P20': 4,\n    'P21': 4,\n    'P22': 5,\n    'P23': 3\n  },\n  P10: {\n    'P1': 4,\n    'P2': 4,\n    'P3': 4,\n    'P4': 4,\n    'P5': 3,\n    'P6': 2,\n    'P7': 3,\n    'P8': 4,\n    'P9': 4,\n    'P10': 1,\n    'P11': 4,\n    'P12': 3,\n    'P13': 4,\n    'P14': 3,\n    'P15': 4,\n    'P16': 4,\n    'P17': 5,\n    'P18': 3,\n    'P19': 3,\n    'P20': 4,\n    'P21': 3,\n    'P22': 2,\n    'P23': 3\n  },\n  P11: {\n    'P1': 3,\n    'P2': 4,\n    'P3': 4,\n    'P4': 4,\n    'P5': 3,\n    'P6': 4,\n    'P7': 3,\n    'P8': 3,\n    'P9': 5,\n    'P10': 4,\n    'P11': 1,\n    'P12': 5,\n    'P13': 3,\n    'P14': 3,\n    'P15': 2,\n    'P16': 5,\n    'P17': 5,\n    'P18': 4,\n    'P19': 4,\n    'P20': 4,\n    'P21': 5,\n    'P22': 4,\n    'P23': 3\n  },\n  P12: {\n    'P1': 4,\n    'P2': 4,\n    'P3': 3,\n    'P4': 5,\n    'P5': 4,\n    'P6': 4,\n    'P7': 5,\n    'P8': 4,\n    'P9': 5,\n    'P10': 3,\n    'P11': 5,\n    'P12': 1,\n    'P13': 5,\n    'P14': 4,\n    'P15': 5,\n    'P16': 5,\n    'P17': 5,\n    'P18': 3,\n    'P19': 2,\n    'P20': 5,\n    'P21': 4,\n    'P22': 4,\n    'P23': 4\n  },\n  P13: {\n    'P1': 2,\n    'P2': 4,\n    'P3': 5,\n    'P4': 5,\n    'P5': 4,\n    'P6': 5,\n    'P7': 4,\n    'P8': 3,\n    'P9': 5,\n    'P10': 4,\n    'P11': 3,\n    'P12': 5,\n    'P13': 2,\n    'P14': 3,\n    'P15': 3,\n    'P16': 5,\n    'P17': 5,\n    'P18': 4,\n    'P19': 4,\n    'P20': 4,\n    'P21': 5,\n    'P22': 4,\n    'P23': 3\n  },\n  P14: {\n    'P1': 3,\n    'P2': 5,\n    'P3': 3,\n    'P4': 5,\n    'P5': 4,\n    'P6': 4,\n    'P7': 4,\n    'P8': 2,\n    'P9': 4,\n    'P10': 3,\n    'P11': 3,\n    'P12': 4,\n    'P13': 3,\n    'P14': 2,\n    'P15': 3,\n    'P16': 4,\n    'P17': 4,\n    'P18': 4,\n    'P19': 4,\n    'P20': 4,\n    'P21': 4,\n    'P22': 4,\n    'P23': 3\n  },\n  P15: {\n    'P1': 3,\n    'P2': 5,\n    'P3': 5,\n    'P4': 5,\n    'P5': 4,\n    'P6': 4,\n    'P7': 4,\n    'P8': 3,\n    'P9': 5,\n    'P10': 4,\n    'P11': 2,\n    'P12': 5,\n    'P13': 3,\n    'P14': 3,\n    'P15': 2,\n    'P16': 5,\n    'P17': 5,\n    'P18': 4,\n    'P19': 4,\n    'P20': 4,\n    'P21': 5,\n    'P22': 4,\n    'P23': 3\n  },\n  P16: {\n    'P1': 5,\n    'P2': 2,\n    'P3': 5,\n    'P4': 5,\n    'P5': 4,\n    'P6': 4,\n    'P7': 4,\n    'P8': 4,\n    'P9': 3,\n    'P10': 4,\n    'P11': 5,\n    'P12': 5,\n    'P13': 5,\n    'P14': 4,\n    'P15': 5,\n    'P16': 2,\n    'P17': 3,\n    'P18': 5,\n    'P19': 5,\n    'P20': 4,\n    'P21': 4,\n    'P22': 5,\n    'P23': 3\n  },\n  P17: {\n    'P1': 5,\n    'P2': 3,\n    'P3': 5,\n    'P4': 5,\n    'P5': 4,\n    'P6': 4,\n    'P7': 4,\n    'P8': 4,\n    'P9': 2,\n    'P10': 5,\n    'P11': 5,\n    'P12': 5,\n    'P13': 5,\n    'P14': 4,\n    'P15': 5,\n    'P16': 3,\n    'P17': 2,\n    'P18': 5,\n    'P19': 5,\n    'P20': 4,\n    'P21': 4,\n    'P22': 5,\n    'P23': 3\n  },\n  P18: {\n    'P1': 4,\n    'P2': 5,\n    'P3': 2,\n    'P4': 5,\n    'P5': 4,\n    'P6': 4,\n    'P7': 4,\n    'P8': 4,\n    'P9': 5,\n    'P10': 3,\n    'P11': 4,\n    'P12': 3,\n    'P13': 4,\n    'P14': 4,\n    'P15': 4,\n    'P16': 5,\n    'P17': 5,\n    'P18': 2,\n    'P19': 3,\n    'P20': 5,\n    'P21': 4,\n    'P22': 3,\n    'P23': 4\n  },\n  P19: {\n    'P1': 4,\n    'P2': 5,\n    'P3': 3,\n    'P4': 5,\n    'P5': 4,\n    'P6': 5,\n    'P7': 5,\n    'P8': 4,\n    'P9': 5,\n    'P10': 3,\n    'P11': 4,\n    'P12': 2,\n    'P13': 4,\n    'P14': 4,\n    'P15': 4,\n    'P16': 5,\n    'P17': 5,\n    'P18': 3,\n    'P19': 2,\n    'P20': 5,\n    'P21': 4,\n    'P22': 3,\n    'P23': 4\n  },\n  P20: {\n    'P1': 4,\n    'P2': 5,\n    'P3': 5,\n    'P4': 3,\n    'P5': 4,\n    'P6': 4,\n    'P7': 4,\n    'P8': 4,\n    'P9': 4,\n    'P10': 4,\n    'P11': 4,\n    'P12': 5,\n    'P13': 4,\n    'P14': 4,\n    'P15': 4,\n    'P16': 4,\n    'P17': 4,\n    'P18': 5,\n    'P19': 5,\n    'P20': 3,\n    'P21': 4,\n    'P22': 4,\n    'P23': 3\n  },\n  P21: {\n    'P1': 5,\n    'P2': 5,\n    'P3': 5,\n    'P4': 5,\n    'P5': 4,\n    'P6': 3,\n    'P7': 4,\n    'P8': 4,\n    'P9': 4,\n    'P10': 3,\n    'P11': 5,\n    'P12': 4,\n    'P13': 5,\n    'P14': 4,\n    'P15': 5,\n    'P16': 4,\n    'P17': 4,\n    'P18': 4,\n    'P19': 4,\n    'P20': 4,\n    'P21': 3,\n    'P22': 3,\n    'P23': 3\n  },\n  P22: {\n    'P1': 5,\n    'P2': 5,\n    'P3': 5,\n    'P4': 5,\n    'P5': 4,\n    'P6': 5,\n    'P7': 5,\n    'P8': 5,\n    'P9': 5,\n    'P10': 2,\n    'P11': 4,\n    'P12': 4,\n    'P13': 4,\n    'P14': 4,\n    'P15': 4,\n    'P16': 5,\n    'P17': 5,\n    'P18': 3,\n    'P19': 3,\n    'P20': 4,\n    'P21': 3,\n    'P22': 2,\n    'P23': 3\n  },\n  P23: {\n    'P1': 4,\n    'P2': 4,\n    'P3': 4,\n    'P4': 4,\n    'P5': 3,\n    'P6': 3,\n    'P7': 3,\n    'P8': 3,\n    'P9': 3,\n    'P10': 3,\n    'P11': 3,\n    'P12': 4,\n    'P13': 3,\n    'P14': 3,\n    'P15': 3,\n    'P16': 3,\n    'P17': 3,\n    'P18': 4,\n    'P19': 4,\n    'P20': 3,\n    'P21': 3,\n    'P22': 3,\n    'P23': 3\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cityCodes);\n\n//# sourceURL=webpack://webpack1/./src/modules/cityCodes.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showModalFunc\": () => (/* binding */ showModalFunc),\n/* harmony export */   \"closeModalFunc\": () => (/* binding */ closeModalFunc),\n/* harmony export */   \"showModalCalcFunc\": () => (/* binding */ showModalCalcFunc),\n/* harmony export */   \"closeModalCalcFunc\": () => (/* binding */ closeModalCalcFunc)\n/* harmony export */ });\nvar showModal = document.querySelector('.modal-ext-wrap');\nvar showModalCalc = document.querySelector('.modal-ext-wrap-calc');\n\nvar showModalFunc = function showModalFunc() {\n  showModal.style.opacity = '1';\n  showModal.style.transition = 'ease-in-out 500ms';\n  showModal.style.zIndex = '100';\n  document.body.style.overflow = 'hidden';\n};\n\nvar closeModalFunc = function closeModalFunc() {\n  showModal.style.opacity = '0';\n  showModal.style.transition = 'ease-in-out 500ms';\n  showModal.style.zIndex = '-1';\n  document.body.style.overflow = 'visible';\n};\n\nvar showModalCalcFunc = function showModalCalcFunc() {\n  showModalCalc.style.opacity = '1';\n  showModalCalc.style.transition = 'ease-in-out 500ms';\n  showModalCalc.style.zIndex = '100';\n  document.body.style.overflow = 'hidden';\n};\n\nvar closeModalCalcFunc = function closeModalCalcFunc() {\n  showModalCalc.style.opacity = '0';\n  showModalCalc.style.transition = 'ease-in-out 500ms';\n  showModalCalc.style.zIndex = '-1';\n  document.body.style.overflow = 'visible';\n};\n\n\n\n//# sourceURL=webpack://webpack1/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/swiper.js":
/*!*******************************!*\
  !*** ./src/modules/swiper.js ***!
  \*******************************/
/***/ (() => {

eval("var mySwiper = document.querySelector('.mySwiper');\nvar swiper = new Swiper(mySwiper, {\n  loop: true,\n  autoplay: {\n    delay: 7500,\n    disableOnInteraction: false\n  },\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true,\n    renderBullet: function renderBullet(index, className) {\n      return '<span class=' + className + \">\" + \"</span>\";\n    }\n  }\n});\n\n//# sourceURL=webpack://webpack1/./src/modules/swiper.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/_MG_0541.jpg */ \"./src/images/_MG_0541.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/_MG_1092.jpg */ \"./src/images/_MG_1092.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/_MG_1110.jpg */ \"./src/images/_MG_1110.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/_MG_1963.jpg */ \"./src/images/_MG_1963.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/chel.jpg */ \"./src/images/chel.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  border: 0;\\n  padding: 0;\\n  margin: 0; }\\n\\n.wrapper {\\n  max-width: 1440px;\\n  width: 100%;\\n  margin: 0 auto; }\\n\\n.center {\\n  max-width: 1340px;\\n  margin: 0 auto;\\n  width: 100%; }\\n\\n.header {\\n  height: 100px;\\n  background-color: #242a8a;\\n  box-shadow: 0px 5px 32px white;\\n  position: fixed;\\n  z-index: 10;\\n  top: 0;\\n  width: 100%;\\n  max-width: 1440px; }\\n\\n.headerCenter {\\n  padding-top: 10px;\\n  display: flex;\\n  justify-content: space-between; }\\n\\n.name {\\n  color: white;\\n  font-size: 36px;\\n  line-height: 38px;\\n  font-family: 'Monsterrat', sans-serif;\\n  font-weight: 900; }\\n\\n.logoWrap {\\n  display: grid;\\n  grid-template-columns: 1fr 4fr;\\n  grid-column-gap: 50px;\\n  align-items: center; }\\n\\n.logo {\\n  width: 80px;\\n  height: 80px; }\\n\\n.menu {\\n  display: flex;\\n  align-items: center; }\\n\\n.menu ul {\\n  list-style-type: none;\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  grid-column-gap: 40px; }\\n\\n.menu ul li a {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 24px;\\n  line-height: 26px;\\n  color: #fff;\\n  text-decoration: none;\\n  position: relative;\\n  transition: all ease-in-out 350ms; }\\n\\n/* .menu ul li:first-child{\\r\\n    text-align: right;\\r\\n} */\\n.menu ul li a:hover {\\n  color: #fae257;\\n  transition: all ease-in-out 350ms; }\\n\\n.menu ul li a::after {\\n  content: '';\\n  position: absolute;\\n  display: block;\\n  height: 0.4em;\\n  width: 0;\\n  background-color: #fae257;\\n  border-radius: 3px;\\n  bottom: -0.8em;\\n  transition: all ease-in-out 350ms; }\\n\\n.menu ul li a:hover::after {\\n  width: 100%;\\n  transition: all ease-in-out 350ms; }\\n\\n.slider {\\n  margin-top: 100px; }\\n\\n.slide1 {\\n  height: 600px;\\n  width: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: 120%;\\n  background-position: -115px -90px; }\\n\\n.slideWrap {\\n  width: 100%;\\n  height: 600px;\\n  background-color: rgba(36, 42, 138, 0.6); }\\n\\n.sliderCenter .slide1-head {\\n  font-family: 'Ubuntu';\\n  text-transform: uppercase;\\n  color: white;\\n  font-size: 60px;\\n  padding-top: 50px;\\n  max-width: 50%;\\n  margin-bottom: 100px; }\\n\\n.slideDescr {\\n  color: white;\\n  font-family: 'Roboto';\\n  font-size: 24px;\\n  line-height: 26px; }\\n\\n.slide2 {\\n  height: 600px;\\n  width: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  background-size: 120%;\\n  background-position: -115px -90px; }\\n\\n.slide2 .slide2-head {\\n  font-family: 'Ubuntu';\\n  text-transform: uppercase;\\n  color: white;\\n  font-size: 50px;\\n  width: 70%;\\n  padding-top: 50px;\\n  margin-bottom: 50px; }\\n\\n.slideDescr {\\n  color: white;\\n  font-family: 'Roboto';\\n  font-size: 24px;\\n  line-height: 26px; }\\n\\n.slide3 {\\n  height: 600px;\\n  width: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-size: 120%;\\n  background-position: -115px -90px; }\\n\\n.slide3 .slide3-head {\\n  font-family: 'Ubuntu';\\n  text-transform: uppercase;\\n  color: white;\\n  font-size: 50px;\\n  padding-top: 50px;\\n  margin-bottom: 50px; }\\n\\n.slideDescr {\\n  color: white;\\n  font-family: 'Roboto';\\n  font-size: 24px;\\n  line-height: 26px; }\\n\\n.slide4 {\\n  height: 600px;\\n  width: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-size: 120%;\\n  background-position: -115px -90px; }\\n\\n.slide4 .slide4-head {\\n  font-family: 'Ubuntu';\\n  text-transform: uppercase;\\n  color: white;\\n  font-size: 50px;\\n  padding-top: 50px;\\n  margin-bottom: 50px; }\\n\\n.slideDescr {\\n  color: white;\\n  font-family: 'Roboto';\\n  font-size: 24px;\\n  line-height: 26px; }\\n\\n.benefits {\\n  display: grid;\\n  grid-template-columns: repeat(4, 1fr);\\n  justify-content: space-between;\\n  grid-column-gap: 100px;\\n  margin-top: 50px;\\n  margin-bottom: 50px; }\\n\\n.benefits .item {\\n  display: grid;\\n  grid-template-rows: 2fr 1fr;\\n  grid-row-gap: 25px;\\n  justify-items: center;\\n  border-radius: 20px;\\n  padding-top: 20px;\\n  padding-bottom: 20px;\\n  /*     padding-left: 10px;\\r\\n    padding-right: 10px; */\\n  text-align: center; }\\n\\n.benefits .item:hover {\\n  cursor: pointer;\\n  box-shadow: 0px 0px 25px #fae257; }\\n\\n.benefits .image {\\n  text-align: center;\\n  width: 50%;\\n  object-fit: cover;\\n  align-self: flex-end; }\\n\\n.benefits .descr {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 24px;\\n  line-height: 26px; }\\n\\n.about {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-size: 80%;\\n  background-repeat: no-repeat;\\n  background-position: 350px -100px; }\\n\\n.aboutWrap {\\n  padding-top: 70px;\\n  padding-bottom: 100px;\\n  background: linear-gradient(90deg, white 0%, white 43%, rgba(255, 255, 255, 0) 100%); }\\n\\n.aboutWrap h3 {\\n  font-family: 'Ubentu', sans-serif;\\n  font-size: 54px;\\n  line-height: 58px;\\n  width: 50%;\\n  margin-left: 50px;\\n  margin-bottom: 30px; }\\n\\n.aboutWrap .aboutDescr {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 24px;\\n  line-height: 26px;\\n  width: 50%;\\n  margin-left: 50px; }\\n\\n.calculator {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  background-color: rgba(36, 42, 138, 0.4); }\\n\\n.calcLeft {\\n  background-color: #242a8a;\\n  border-radius: 0 0 50px 0; }\\n\\n.leftWrap {\\n  margin-left: 50px;\\n  margin-top: 50px;\\n  margin-bottom: 50px; }\\n\\n.leftWrap h3 {\\n  color: white;\\n  font-family: 'Monsterrat', sans-serif;\\n  font-size: 32px;\\n  line-height: 34px;\\n  margin-bottom: 25px; }\\n\\n.cities {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  grid-column-gap: 30px;\\n  margin-bottom: 20px; }\\n\\n.chooseCity {\\n  color: white;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 18px;\\n  line-height: 20px;\\n  margin-bottom: 5px; }\\n\\n.chooseCity span {\\n  font-size: 14px; }\\n\\n.inputDescr {\\n  color: white;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 18px;\\n  line-height: 20px;\\n  margin-bottom: 5px; }\\n\\n.inputDescr span {\\n  font-size: 14px; }\\n\\n.sendCity select {\\n  width: 100%;\\n  height: 30px;\\n  border-radius: 5px;\\n  font-size: 20px;\\n  line-height: 22px; }\\n\\n.getCity select {\\n  width: 180px;\\n  height: 30px;\\n  border-radius: 5px;\\n  font-size: 20px;\\n  line-height: 22px; }\\n\\n.selectWrap {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  grid-column-gap: 30px;\\n  margin-bottom: 20px; }\\n\\n.type select {\\n  width: 100%;\\n  height: 30px;\\n  border-radius: 5px;\\n  font-size: 20px;\\n  line-height: 22px; }\\n\\n.services select {\\n  width: 350px;\\n  height: 30px;\\n  border-radius: 5px;\\n  font-size: 20px;\\n  line-height: 22px; }\\n\\n.inputWrap {\\n  display: grid;\\n  grid-template-columns: 1fr 2fr;\\n  grid-column-gap: 30px;\\n  margin-bottom: 20px; }\\n\\n.weight input {\\n  height: 30px;\\n  border-radius: 5px;\\n  width: 100%; }\\n\\n.cost input {\\n  height: 30px;\\n  border-radius: 5px;\\n  width: 250px; }\\n\\n.checkboxDescr {\\n  color: white;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 16px;\\n  line-height: 18px; }\\n\\n.moreOptions {\\n  display: grid;\\n  grid-template-rows: repeat(4, 1fr);\\n  grid-row-gap: 10px; }\\n\\n.moreOptions .checkbox {\\n  margin-right: 15px; }\\n\\n.breakdown .checkboxDescr, .repeat .checkboxDescr {\\n  margin-left: 20px; }\\n\\n.countUp {\\n  color: #242a8a;\\n  background-color: white;\\n  width: 200px;\\n  padding: 20px 40px;\\n  font-size: 28px;\\n  line-height: 30px;\\n  text-align: center;\\n  font-family: 'Monsterrat', sans-serif;\\n  border-radius: 15px;\\n  margin-top: 40px;\\n  font-weight: 700;\\n  transition: ease-in-out 350ms; }\\n\\n.countUp:hover {\\n  cursor: pointer;\\n  box-shadow: 0px 0px 25px #fae257;\\n  transition: ease-in-out 350ms; }\\n\\n.rightWrap {\\n  text-align: center;\\n  margin-top: 110px;\\n  margin-right: 50px;\\n  margin-bottom: 50px; }\\n\\n.rightWrap .question {\\n  color: #242a8a;\\n  font-family: 'Monsterrat', sans-serif;\\n  font-size: 38px;\\n  line-height: 40px;\\n  font-weight: 700;\\n  margin-bottom: 25px; }\\n\\n.rightWrap .toCall {\\n  color: #242a8a;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 24px;\\n  line-height: 26px;\\n  margin-bottom: 5px;\\n  width: 50%;\\n  margin: 0 auto; }\\n\\n.rightWrap .or {\\n  color: #242a8a;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 24px;\\n  line-height: 26px;\\n  margin-top: 20px;\\n  margin-bottom: 20px; }\\n\\n.rightWrap .call {\\n  background-color: #242a8a;\\n  color: white;\\n  padding: 20px 40px;\\n  font-size: 28px;\\n  line-height: 30px;\\n  font-family: 'Monsterrat', sans-serif;\\n  border-radius: 15px;\\n  text-decoration: none;\\n  margin-top: 20px;\\n  display: inline-block;\\n  width: 300px;\\n  transition: ease-in-out 350ms; }\\n\\n.rightWrap .requestCall {\\n  background-color: #242a8a;\\n  color: white;\\n  width: 300px;\\n  padding: 20px 40px;\\n  font-size: 28px;\\n  line-height: 30px;\\n  font-family: 'Monsterrat', sans-serif;\\n  border-radius: 15px;\\n  margin-top: 40px;\\n  margin: 0 auto;\\n  transition: ease-in-out 350ms; }\\n\\n.rightWrap .requestCall:hover {\\n  cursor: pointer;\\n  box-shadow: 0px 0px 25px #fae257;\\n  transition: ease-in-out 350ms; }\\n\\n.rightWrap .call:hover {\\n  cursor: pointer;\\n  box-shadow: 0px 0px 25px #fae257;\\n  transition: ease-in-out 350ms; }\\n\\n.gradient {\\n  height: 100px;\\n  background: linear-gradient(180deg, rgba(36, 42, 138, 0.4) 0%, rgba(36, 42, 138, 0.1) 80%, rgba(255, 255, 255, 0) 100%); }\\n\\n.news {\\n  max-width: 1340px;\\n  width: 100%;\\n  margin: 0 auto;\\n  margin-bottom: 50px; }\\n\\n.news h4 {\\n  font-size: 36px;\\n  line-height: 38px;\\n  font-family: 'Monsterrat', sans-serif;\\n  font-weight: 900;\\n  color: #242a8a;\\n  margin-top: 40px; }\\n\\n.newsWrap {\\n  display: grid;\\n  grid-template-columns: repeat(2, 1fr);\\n  grid-column-gap: 20px;\\n  margin-top: 30px; }\\n\\n.newsItem {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr; }\\n\\n.newsCover {\\n  width: 90%;\\n  object-fit: cover; }\\n\\n.info .newsName {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 24px;\\n  line-height: 26px;\\n  margin-top: 10px; }\\n\\n.info .date {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 16px;\\n  line-height: 20px;\\n  color: rgba(0, 0, 0, 0.8);\\n  margin-top: 15px; }\\n\\n.footer {\\n  background-color: #242a8a; }\\n\\n.footerCenter {\\n  max-width: 1340px;\\n  margin: 0 auto;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  grid-column-gap: 20px; }\\n\\n.footerLeftPart {\\n  padding: 40px 0 40px 0; }\\n\\n.footerLeftPart .footerHead {\\n  color: white;\\n  font-size: 24px;\\n  line-height: 26px;\\n  font-family: 'Monsterrat', sans-serif;\\n  font-weight: 700;\\n  margin-bottom: 25px; }\\n\\n.footerLeftPart .text {\\n  color: white;\\n  margin-bottom: 10px;\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 16px;\\n  line-height: 18px; }\\n\\n.footerLeftPart .text a {\\n  color: white; }\\n\\n.footerRightPart {\\n  display: grid;\\n  grid-template-columns: repeat(3, 70px);\\n  grid-column-gap: 20px;\\n  grid-template-rows: 70px;\\n  justify-content: flex-end;\\n  padding-top: 40px; }\\n\\n.footerRightPart .socialIcon {\\n  background-color: white;\\n  border-radius: 10px;\\n  transition: ease-in-out 350ms; }\\n\\n.footerRightPart .socialIcon:hover {\\n  cursor: pointer;\\n  box-shadow: 0px 0px 25px #fae257;\\n  transition: ease-in-out 350ms; }\\n\\n.footerRightPart .socialIcon a {\\n  display: inline-block;\\n  margin: 10px; }\\n\\n.socialIcon a img {\\n  width: 50px;\\n  object-fit: cover; }\\n\\n/* swiper */\\n.swiper {\\n  width: 100%;\\n  height: 100%; }\\n\\n.swiper-pagination-bullet {\\n  width: 50px;\\n  height: 5px;\\n  text-align: center;\\n  line-height: 20px;\\n  font-size: 12px;\\n  color: #141742;\\n  opacity: 1;\\n  background: rgba(20, 23, 66, 0.5);\\n  border-radius: 0; }\\n\\n.swiper-pagination-bullet-active {\\n  color: #fae257;\\n  background: #fae257; }\\n\\n/* modal window*/\\n.modal-ext-wrap {\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  position: fixed;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: rgba(36, 42, 138, 0.8);\\n  opacity: 0;\\n  transition: all ease-in-out 500ms; }\\n\\n.modal-window {\\n  width: 40%;\\n  background-color: white;\\n  margin-left: 30%;\\n  margin-top: 10vh;\\n  border-radius: 30px; }\\n\\n.modal-wrap {\\n  max-width: 1300px;\\n  margin: 0 auto;\\n  padding-top: 50px; }\\n\\n.modal-wrap .close {\\n  display: flex;\\n  justify-content: flex-end;\\n  margin-bottom: 50px;\\n  margin-right: 50px; }\\n\\n.modal-wrap .close img {\\n  width: 50px;\\n  object-fit: cover; }\\n\\n.modal-wrap .close img:hover {\\n  cursor: pointer; }\\n\\n.modal-wrap .modal-content {\\n  text-align: center; }\\n\\n.modal-wrap .modal-content .modal-header {\\n  font-family: 'Monsterrat', sans-serif;\\n  font-weight: 700;\\n  font-size: 48px;\\n  line-height: 52px;\\n  margin-bottom: 50px; }\\n\\n.modal-wrap .modal-content .modal-cover {\\n  width: 155px;\\n  object-fit: cover;\\n  margin-bottom: 50px; }\\n\\n.modal-wrap .modal-content .modal-descr {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 22px;\\n  line-height: 26px;\\n  font-weight: 700;\\n  max-width: 350px;\\n  margin: 0 auto;\\n  padding-bottom: 150px; }\\n\\n/* calc */\\n.modal-ext-wrap-calc {\\n  top: 0;\\n  left: 0;\\n  z-index: -1;\\n  position: fixed;\\n  width: 100%;\\n  height: 100vh;\\n  background-color: rgba(36, 42, 138, 0.8);\\n  opacity: 0;\\n  transition: all ease-in-out 500ms; }\\n\\n.modal-window-calc {\\n  width: 40%;\\n  background-color: white;\\n  margin-left: 30%;\\n  margin-top: 30vh;\\n  border-radius: 30px; }\\n\\n.modal-wrap-calc {\\n  max-width: 1300px;\\n  margin: 0 auto;\\n  margin-top: 50px; }\\n\\n.modal-wrap-calc .close-calc {\\n  display: flex;\\n  justify-content: flex-end;\\n  margin-bottom: 50px; }\\n\\n.modal-wrap-calc .close-calc img {\\n  width: 50px;\\n  object-fit: cover;\\n  margin-right: 50px;\\n  padding-top: 50px; }\\n\\n.modal-wrap-calc .close-calc img:hover {\\n  cursor: pointer; }\\n\\n.modal-wrap-calc .modal-content-calc {\\n  text-align: center; }\\n\\n.modal-wrap-calc .modal-content-calc .modal-text-calc {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 22px;\\n  line-height: 26px;\\n  font-weight: 700;\\n  max-width: 350px;\\n  margin: 0 auto;\\n  padding-bottom: 100px; }\\n\\n/* mobile */\\n@media screen and (max-width: 1440px) {\\n  .center {\\n    width: 90%; }\\n  .logoWrap {\\n    grid-column-gap: 20px; }\\n  .menu ul {\\n    grid-column-gap: 20px; } }\\n\\n@media screen and (max-width: 1200px) {\\n  .name {\\n    font-size: 30px;\\n    line-height: 32px; }\\n  .menu ul li a {\\n    font-size: 26px;\\n    line-height: 28px; } }\\n\\n@media screen and (max-width: 1024px) {\\n  .header {\\n    height: 80px; }\\n  .logo {\\n    width: 60px;\\n    height: 60px;\\n    object-fit: cover; }\\n  .logoWrap {\\n    grid-column-gap: 0; }\\n  .name {\\n    font-size: 26px;\\n    line-height: 28px; }\\n  .menu ul {\\n    grid-column-gap: 10px; }\\n  .menu ul li a {\\n    font-size: 22px;\\n    line-height: 24px; } }\\n\\n@media screen and (max-width: 768px) {\\n  .menu {\\n    display: none; } }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack1/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack1/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack1/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack1/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack1/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack1/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/_MG_0541.jpg":
/*!*********************************!*\
  !*** ./src/images/_MG_0541.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"1a0e9d9b8e12dfb2fa15.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/_MG_0541.jpg?");

/***/ }),

/***/ "./src/images/_MG_1092.jpg":
/*!*********************************!*\
  !*** ./src/images/_MG_1092.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"add7bd8965a7a41e2798.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/_MG_1092.jpg?");

/***/ }),

/***/ "./src/images/_MG_1110.jpg":
/*!*********************************!*\
  !*** ./src/images/_MG_1110.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"49c7ce53229dad60d11c.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/_MG_1110.jpg?");

/***/ }),

/***/ "./src/images/_MG_1963.jpg":
/*!*********************************!*\
  !*** ./src/images/_MG_1963.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"0909d88aa8cc4db61a26.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/_MG_1963.jpg?");

/***/ }),

/***/ "./src/images/chel.jpg":
/*!*****************************!*\
  !*** ./src/images/chel.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"f3f0c86ea866dd89f944.jpg\";\n\n//# sourceURL=webpack://webpack1/./src/images/chel.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("adc504ab02172df0e270")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack1:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack1"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;