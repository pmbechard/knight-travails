/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Board.js":
/*!*********************************!*\
  !*** ./src/components/Board.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getBoard\": () => (/* binding */ getBoard)\n/* harmony export */ });\n/* harmony import */ var _img_location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/location.png */ \"./src/img/location.png\");\n/* harmony import */ var _logic_KnightFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic/KnightFactory */ \"./src/components/logic/KnightFactory.js\");\n/* harmony import */ var _img_finish_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/finish.png */ \"./src/img/finish.png\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n\n\n\n\nfunction getBoard() {\n  var container = document.createElement('div');\n  container.classList.add('board-container');\n  document.body.appendChild(container);\n\n  var _loop = function _loop(i) {\n    var tile = document.createElement('div');\n    container.appendChild(tile);\n    var modifier = parseInt(i / 8) % 2 === 0 ? 1 : 0;\n    tile.classList.add('tile', \"\".concat((i + modifier) % 2 === 0 ? 'light' : 'dark'));\n    tile.id = \"tile-\".concat(7 - i % 8, \"-\").concat(parseInt(i / 8));\n    var locationImg = document.createElement('img');\n    locationImg.src = _img_location_png__WEBPACK_IMPORTED_MODULE_0__;\n    locationImg.id = 'location-img';\n    locationImg.classList.add('board-icon');\n    var finishImg = document.createElement('img');\n    finishImg.src = _img_finish_png__WEBPACK_IMPORTED_MODULE_2__;\n    finishImg.id = 'finish-img';\n    finishImg.classList.add('board-icon');\n    tile.addEventListener('mouseover', function () {\n      if (_index_js__WEBPACK_IMPORTED_MODULE_3__.markerState.state === null) return;\n      if (tile.classList.contains('disabled')) return;\n      tile.appendChild(locationImg);\n    });\n    tile.addEventListener('mouseleave', function () {\n      locationImg.remove();\n    });\n    tile.addEventListener('click', function () {\n      if (_index_js__WEBPACK_IMPORTED_MODULE_3__.markerState.state === null) return;\n      if (tile.classList.contains('disabled')) return;else if (_index_js__WEBPACK_IMPORTED_MODULE_3__.markerState.state === false) {\n        tile.appendChild((0,_logic_KnightFactory__WEBPACK_IMPORTED_MODULE_1__.knightFactory)());\n        tile.classList.add('disabled');\n        _index_js__WEBPACK_IMPORTED_MODULE_3__.markerState.start = tile;\n      } else if (_index_js__WEBPACK_IMPORTED_MODULE_3__.markerState.state === true) {\n        tile.appendChild(finishImg);\n        tile.classList.add('disabled');\n        _index_js__WEBPACK_IMPORTED_MODULE_3__.markerState.end = tile;\n      }\n      locationImg.remove();\n      _index_js__WEBPACK_IMPORTED_MODULE_3__.markerState.state = _index_js__WEBPACK_IMPORTED_MODULE_3__.markerState.state === false ? true : null;\n    });\n  };\n\n  for (var i = 63; i >= 0; i--) {\n    _loop(i);\n  }\n}\n\n//# sourceURL=webpack://knight-travails/./src/components/Board.js?");

/***/ }),

/***/ "./src/components/Controls.js":
/*!************************************!*\
  !*** ./src/components/Controls.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getControls\": () => (/* binding */ getControls)\n/* harmony export */ });\n/* harmony import */ var _components_logic_Run__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/logic/Run */ \"./src/components/logic/Run.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./src/index.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction getControls() {\n  var container = document.createElement('div');\n  container.classList.add('controls-container');\n  document.body.appendChild(container);\n  var startBtn = document.createElement('button');\n  startBtn.classList.add('btn');\n  startBtn.id = 'start-btn';\n  startBtn.textContent = 'Start';\n  startBtn.disabled = true;\n  container.appendChild(startBtn);\n  startBtn.addEventListener('click', _components_logic_Run__WEBPACK_IMPORTED_MODULE_0__.run);\n  var resetBtn = document.createElement('button');\n  resetBtn.classList.add('btn');\n  resetBtn.id = 'reset-btn';\n  resetBtn.textContent = 'Reset';\n  container.appendChild(resetBtn);\n  resetBtn.addEventListener('click', function () {\n    var tiles = document.querySelectorAll('.tile');\n\n    var _iterator = _createForOfIteratorHelper(tiles),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var tile = _step.value;\n        tile.classList.remove('disabled');\n        tile.innerHTML = '';\n        ___WEBPACK_IMPORTED_MODULE_1__.markerState.state = false;\n        ___WEBPACK_IMPORTED_MODULE_1__.markerState.start = null;\n        ___WEBPACK_IMPORTED_MODULE_1__.markerState.end = null;\n        startBtn.disabled = true;\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  });\n}\n\n//# sourceURL=webpack://knight-travails/./src/components/Controls.js?");

/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFooter\": () => (/* binding */ getFooter)\n/* harmony export */ });\n/* harmony import */ var _img_gh_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/gh-logo.png */ \"./src/img/gh-logo.png\");\n/* harmony import */ var _img_help_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/help.png */ \"./src/img/help.png\");\n\n\nfunction getFooter() {\n  var container = document.createElement('div');\n  container.classList.add('footer-container');\n  document.body.appendChild(container);\n  var ghIcon = document.createElement('img');\n  ghIcon.src = _img_gh_logo_png__WEBPACK_IMPORTED_MODULE_0__;\n  container.appendChild(ghIcon);\n  ghIcon.addEventListener('click', function () {\n    return window.open('https://github.com/pmbechard/knight-travails');\n  });\n  var footerText = document.createElement('small');\n  footerText.innerHTML = 'Peyton Bechard &copy; 2022';\n  container.appendChild(footerText);\n  var helpImg = document.createElement('img');\n  helpImg.src = _img_help_png__WEBPACK_IMPORTED_MODULE_1__;\n  container.appendChild(helpImg);\n  helpImg.addEventListener('click', function () {\n    var modal = document.getElementById('modal-container');\n    modal.style.display = 'block';\n  });\n}\n\n//# sourceURL=webpack://knight-travails/./src/components/Footer.js?");

/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHeader\": () => (/* binding */ getHeader)\n/* harmony export */ });\n/* harmony import */ var _logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../logo.png */ \"./logo.png\");\n\nfunction getHeader() {\n  var container = document.createElement('div');\n  container.classList.add('header-container');\n  document.body.appendChild(container);\n  var logoImg = document.createElement('img');\n  logoImg.src = _logo_png__WEBPACK_IMPORTED_MODULE_0__;\n  container.appendChild(logoImg);\n  var title = document.createElement('h1');\n  container.appendChild(title);\n  title.textContent = 'Knight Travails';\n}\n\n//# sourceURL=webpack://knight-travails/./src/components/Header.js?");

/***/ }),

/***/ "./src/components/HelpModal.js":
/*!*************************************!*\
  !*** ./src/components/HelpModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getHelpModal\": () => (/* binding */ getHelpModal)\n/* harmony export */ });\nfunction getHelpModal() {\n  var container = document.createElement('div');\n  container.classList.add('modal-container');\n  container.id = 'modal-container';\n  document.body.appendChild(container);\n  var background = document.createElement('div');\n  background.classList.add('modal-bg');\n  container.appendChild(background);\n  background.addEventListener('click', function () {\n    container.style.display = 'none';\n  });\n  var modalWindow = document.createElement('div');\n  modalWindow.classList.add('modal-window');\n  container.appendChild(modalWindow);\n  var heading = document.createElement('h1');\n  heading.textContent = 'Help!';\n  modalWindow.appendChild(heading);\n  var whatHeading = document.createElement('h2');\n  whatHeading.textContent = 'What is this place?';\n  modalWindow.appendChild(whatHeading);\n  var whatParagraph = document.createElement('p');\n  whatParagraph.textContent = \"This is the visual display of an algorithm that helps our knight friend find the shortest route to the specified location from where ever you've decided to place him. Knights have the ability to reach any place on the chess board. Give it a shot!\";\n  modalWindow.appendChild(whatParagraph);\n  var howHeading = document.createElement('h2');\n  howHeading.textContent = 'How do I do it?';\n  modalWindow.appendChild(howHeading);\n  var howParagraph = document.createElement('p');\n  howParagraph.innerHTML = '1. Choose a spot on the chess board to place our knight. <br> 2. Choose a spot on the chess board to place the destination you want him to reach. <br> 3. Click the <u>Start</u> button to begin! <br><br> Press <u>Reset</u> at any time to clear the board.';\n  modalWindow.appendChild(howParagraph);\n  var btnContainer = document.createElement('div');\n  btnContainer.classList.add('try-btn-container');\n  modalWindow.appendChild(btnContainer);\n  var tryBtn = document.createElement('button');\n  tryBtn.classList.add('btn');\n  tryBtn.textContent = 'Try it out!';\n  btnContainer.appendChild(tryBtn);\n  tryBtn.addEventListener('click', function () {\n    container.style.display = 'none';\n  });\n}\n\n//# sourceURL=webpack://knight-travails/./src/components/HelpModal.js?");

/***/ }),

/***/ "./src/components/logic/KnightFactory.js":
/*!***********************************************!*\
  !*** ./src/components/logic/KnightFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"knightFactory\": () => (/* binding */ knightFactory)\n/* harmony export */ });\n/* harmony import */ var _img_knight_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/knight.png */ \"./src/img/knight.png\");\n\nfunction knightFactory() {\n  var knightImg = document.createElement('img');\n  knightImg.src = _img_knight_png__WEBPACK_IMPORTED_MODULE_0__;\n  knightImg.id = 'knight--img';\n  knightImg.classList.add('board-icon');\n  return knightImg;\n}\n\n//# sourceURL=webpack://knight-travails/./src/components/logic/KnightFactory.js?");

/***/ }),

/***/ "./src/components/logic/MarkerState.js":
/*!*********************************************!*\
  !*** ./src/components/logic/MarkerState.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Marker\": () => (/* binding */ Marker)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError(\"attempted to get private field on non-instance\"); } return fn; }\n\nvar _parseCoords = /*#__PURE__*/new WeakSet();\n\nvar _updateStartBtn = /*#__PURE__*/new WeakSet();\n\nvar Marker = /*#__PURE__*/function () {\n  function Marker(state) {\n    _classCallCheck(this, Marker);\n\n    _classPrivateMethodInitSpec(this, _updateStartBtn);\n\n    _classPrivateMethodInitSpec(this, _parseCoords);\n\n    this._state = state;\n    this._start;\n    this._end;\n  }\n\n  _createClass(Marker, [{\n    key: \"state\",\n    get: function get() {\n      return this._state;\n    },\n    set: function set(state) {\n      this._state = state;\n\n      _classPrivateMethodGet(this, _updateStartBtn, _updateStartBtn2).call(this);\n    }\n  }, {\n    key: \"start\",\n    get: function get() {\n      return this._start;\n    },\n    set: function set(loc) {\n      this._start = _classPrivateMethodGet(this, _parseCoords, _parseCoords2).call(this, loc);\n    }\n  }, {\n    key: \"end\",\n    get: function get() {\n      return this._end;\n    },\n    set: function set(loc) {\n      this._end = _classPrivateMethodGet(this, _parseCoords, _parseCoords2).call(this, loc);\n    }\n  }]);\n\n  return Marker;\n}();\n\nfunction _parseCoords2(loc) {\n  if (!loc) return;\n  var coords = loc.id;\n  coords = coords.split('-');\n  coords = coords.slice(1);\n  coords = coords.map(function (coord) {\n    return parseInt(coord);\n  });\n  return coords;\n}\n\nfunction _updateStartBtn2() {\n  var startBtn = document.getElementById('start-btn');\n  startBtn.disabled = !this._state ? true : false;\n  startBtn.disabled = this._state ? true : false;\n}\n\n//# sourceURL=webpack://knight-travails/./src/components/logic/MarkerState.js?");

/***/ }),

/***/ "./src/components/logic/PathFinder.js":
/*!********************************************!*\
  !*** ./src/components/logic/PathFinder.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compareArrays\": () => (/* binding */ compareArrays),\n/* harmony export */   \"getChildren\": () => (/* binding */ getChildren),\n/* harmony export */   \"pathfinder\": () => (/* binding */ pathfinder)\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Node = /*#__PURE__*/_createClass(function Node(coords, prev, children) {\n  _classCallCheck(this, Node);\n\n  this.coords = coords;\n  this.prev = prev;\n  this.children = children;\n});\n\nfunction pathfinder(from, to) {\n  var prev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;\n  var current = new Node(from, prev, getChildren(from));\n  var queue = [];\n  queue.push(current);\n  var node;\n\n  do {\n    node = queue[0];\n    queue = queue.slice(1);\n    if (compareArrays(node.coords, to)) break;\n    node.children.forEach(function (child) {\n      queue.push(new Node(child, node, getChildren(child)));\n    });\n  } while (queue.length > 0);\n\n  return destructureNode(node);\n}\nfunction getChildren(node) {\n  var _node = _slicedToArray(node, 2),\n      x = _node[0],\n      y = _node[1];\n\n  var children = [];\n  if (x > 0 && y < 6) children.push([x - 1, y + 2]);\n  if (x < 7 && y < 6) children.push([x + 1, y + 2]);\n  if (x < 6 && y < 7) children.push([x + 2, y + 1]);\n  if (x < 6 && y > 0) children.push([x + 2, y - 1]);\n  if (x < 7 && y > 1) children.push([x + 1, y - 2]);\n  if (x > 0 && y > 1) children.push([x - 1, y - 2]);\n  if (x > 1 && y > 0) children.push([x - 2, y - 1]);\n  if (x > 1 && y < 7) children.push([x - 2, y + 1]);\n  return children;\n}\nfunction compareArrays(a, b) {\n  if (!Array.isArray(a) || !Array.isArray(b)) return false;\n  if (a.length !== b.length) return false;\n  return a.every(function (val, index) {\n    return val === b[index];\n  });\n}\n\nfunction destructureNode(node) {\n  var output = [];\n\n  while (node) {\n    output.push(node.coords);\n    node = node.prev;\n  }\n\n  return output.reverse();\n}\n\n//# sourceURL=webpack://knight-travails/./src/components/logic/PathFinder.js?");

/***/ }),

/***/ "./src/components/logic/Run.js":
/*!*************************************!*\
  !*** ./src/components/logic/Run.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"run\": () => (/* binding */ run)\n/* harmony export */ });\n/* harmony import */ var _PathFinder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PathFinder */ \"./src/components/logic/PathFinder.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.. */ \"./src/index.js\");\n/* harmony import */ var _KnightFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./KnightFactory */ \"./src/components/logic/KnightFactory.js\");\n\n\n\nfunction run() {\n  var path = (0,_PathFinder__WEBPACK_IMPORTED_MODULE_0__.pathfinder)(___WEBPACK_IMPORTED_MODULE_1__.markerState.start, ___WEBPACK_IMPORTED_MODULE_1__.markerState.end).slice(1); // TODO:\n  // for each value in path\n  //    animate the knight to move to that value\n  //    mark each spot along the way include a number at each new point\n\n  var currentPoint = ___WEBPACK_IMPORTED_MODULE_1__.markerState.start;\n  document.getElementById('start-btn').disabled = true;\n\n  for (var point = 0; point < path.length; point++) {\n    var difference = [path[point][0] - currentPoint[0], path[point][1] - currentPoint[1]];\n    console.log(difference);\n    console.log(point + 1);\n    var tile = document.getElementById(\"tile-\".concat([path[point][0]], \"-\").concat(path[point][1]));\n\n    if (path[point] !== path[path.length - 1]) {\n      tile.innerHTML = '';\n      tile.appendChild((0,_KnightFactory__WEBPACK_IMPORTED_MODULE_2__.knightFactory)());\n    }\n\n    currentPoint = path[point];\n  } // console.log(path);\n\n}\n\n//# sourceURL=webpack://knight-travails/./src/components/logic/Run.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"markerState\": () => (/* binding */ markerState)\n/* harmony export */ });\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Header */ \"./src/components/Header.js\");\n/* harmony import */ var _components_Controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Controls */ \"./src/components/Controls.js\");\n/* harmony import */ var _components_Board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Board */ \"./src/components/Board.js\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Footer */ \"./src/components/Footer.js\");\n/* harmony import */ var _components_HelpModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/HelpModal */ \"./src/components/HelpModal.js\");\n/* harmony import */ var _components_logic_MarkerState__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/logic/MarkerState */ \"./src/components/logic/MarkerState.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\nvar markerState = new _components_logic_MarkerState__WEBPACK_IMPORTED_MODULE_5__.Marker(false); // TODO: Animate algorithm results\n// TODO: Update reset function\n\n(0,_components_Header__WEBPACK_IMPORTED_MODULE_0__.getHeader)();\n(0,_components_Controls__WEBPACK_IMPORTED_MODULE_1__.getControls)();\n(0,_components_Board__WEBPACK_IMPORTED_MODULE_2__.getBoard)();\n(0,_components_Footer__WEBPACK_IMPORTED_MODULE_3__.getFooter)();\n(0,_components_HelpModal__WEBPACK_IMPORTED_MODULE_4__.getHelpModal)();\n\n//# sourceURL=webpack://knight-travails/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".header-container {\\n  height: 10vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: row;\\n  gap: 40px;\\n}\\n.header-container h1 {\\n  font-family: \\\"Kaushan Script\\\", cursive;\\n}\\n\\n.controls-container {\\n  height: 10vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: row;\\n  gap: 80px;\\n  width: 70vw;\\n  margin: 0 auto;\\n  font-family: \\\"Kaushan Script\\\", cursive;\\n}\\n\\n.btn {\\n  background-color: #ebf7fc;\\n  border-radius: 100px;\\n  border: none;\\n  width: 74px;\\n  height: 36px;\\n  cursor: pointer;\\n  transition: all 0.1s ease-in-out;\\n  font-family: \\\"Kaushan Script\\\", cursive;\\n}\\n\\n#start-btn:disabled {\\n  cursor: default;\\n}\\n#start-btn:hover:not([disabled]) {\\n  color: #ebf7fc;\\n  opacity: 1;\\n  transform: scale(1.05);\\n  background-color: #0bac38;\\n}\\n#start-btn:active:not([disabled]) {\\n  opacity: 0.6;\\n}\\n\\n#reset-btn:hover {\\n  color: #ebf7fc;\\n  opacity: 1;\\n  transform: scale(1.05);\\n  background-color: #f44336;\\n}\\n#reset-btn:active {\\n  opacity: 0.6;\\n}\\n\\n.board-container {\\n  width: 400px;\\n  display: grid;\\n  grid-template-columns: repeat(8, 1fr);\\n  margin: 10px auto;\\n}\\n\\n.tile {\\n  height: 50px;\\n  width: 50px;\\n  border: 1px solid black;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: row;\\n  cursor: pointer;\\n  transition: transform 0.1s ease-in-out;\\n}\\n.tile:hover {\\n  transform: scale(1.1);\\n}\\n\\n.dark {\\n  background-color: #444;\\n}\\n\\n.light {\\n  background-color: #ebf7fc;\\n}\\n\\n.board-icon {\\n  height: 40px;\\n  width: 40px;\\n  background-color: transparent;\\n}\\n\\n.footer-container {\\n  height: 10vh;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: row;\\n  gap: 10px;\\n  width: 70vw;\\n  margin: 0 auto;\\n  font-family: \\\"Kaushan Script\\\", cursive;\\n}\\n.footer-container img {\\n  height: 20px;\\n  transition: all 0.1s ease-in-out;\\n  background-color: transparent;\\n}\\n.footer-container img:hover {\\n  opacity: 0.7;\\n  transform: scale(1.1);\\n  cursor: pointer;\\n}\\n.footer-container img:active {\\n  opacity: 1;\\n}\\n\\n.modal-container {\\n  display: none;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  z-index: 4;\\n  background-color: transparent;\\n}\\n.modal-container .modal-bg {\\n  height: 100%;\\n  width: 100%;\\n  background-color: black;\\n  opacity: 0.7;\\n}\\n.modal-container .modal-window {\\n  position: absolute;\\n  top: calc(100vh - 90%);\\n  right: calc(50vw - max(40%, 400px) / 2);\\n  width: max(40%, 400px);\\n  background-color: #2096f3;\\n  border-radius: 12px;\\n  border: 10px solid #ddd;\\n  color: #ebf7fc;\\n  font-family: \\\"Kaushan Script\\\", cursive;\\n  padding: 20px;\\n}\\n.modal-container .modal-window h1 {\\n  background-color: transparent;\\n  text-align: center;\\n  width: 100%;\\n}\\n.modal-container .modal-window h2,\\n.modal-container .modal-window p,\\n.modal-container .modal-window u,\\n.modal-container .modal-window em {\\n  background-color: transparent;\\n}\\n.modal-container .modal-window h2 {\\n  padding: 20px 0 10px;\\n}\\n.modal-container .modal-window .try-btn-container {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: row;\\n  width: 100%;\\n  background-color: transparent;\\n  margin-top: 20px;\\n}\\n.modal-container .modal-window .try-btn-container button:hover {\\n  transform: scale(1.05);\\n  opacity: 0.9;\\n}\\n\\n@media only screen and (max-width: 400px) {\\n  .board-container {\\n    max-width: 320px;\\n    max-height: 320px;\\n    margin: 10px auto;\\n  }\\n  .board-container .tile {\\n    width: 40px;\\n    height: 40px;\\n    margin: 0;\\n    padding: 0;\\n  }\\n  .modal-container .modal-window {\\n    height: 100vh;\\n    width: 100vw;\\n    top: 0;\\n    left: 0;\\n  }\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  background-color: #ddd;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://knight-travails/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://knight-travails/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://knight-travails/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://knight-travails/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://knight-travails/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://knight-travails/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://knight-travails/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://knight-travails/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://knight-travails/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://knight-travails/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./logo.png":
/*!******************!*\
  !*** ./logo.png ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"88983a25115463181cd0.png\";\n\n//# sourceURL=webpack://knight-travails/./logo.png?");

/***/ }),

/***/ "./src/img/finish.png":
/*!****************************!*\
  !*** ./src/img/finish.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"46f5d33b1f1882d3732c.png\";\n\n//# sourceURL=webpack://knight-travails/./src/img/finish.png?");

/***/ }),

/***/ "./src/img/gh-logo.png":
/*!*****************************!*\
  !*** ./src/img/gh-logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0035c307a36c17babb8d.png\";\n\n//# sourceURL=webpack://knight-travails/./src/img/gh-logo.png?");

/***/ }),

/***/ "./src/img/help.png":
/*!**************************!*\
  !*** ./src/img/help.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"da5da3d5aa9fb1aaab10.png\";\n\n//# sourceURL=webpack://knight-travails/./src/img/help.png?");

/***/ }),

/***/ "./src/img/knight.png":
/*!****************************!*\
  !*** ./src/img/knight.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cd8efcef822eae7f8338.png\";\n\n//# sourceURL=webpack://knight-travails/./src/img/knight.png?");

/***/ }),

/***/ "./src/img/location.png":
/*!******************************!*\
  !*** ./src/img/location.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"eb721cdad625041bb7b1.png\";\n\n//# sourceURL=webpack://knight-travails/./src/img/location.png?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;