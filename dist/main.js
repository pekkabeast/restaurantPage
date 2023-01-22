/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateContactContent": () => (/* binding */ generateContactContent)
/* harmony export */ });
const generateContactContent = () => {};




/***/ }),

/***/ "./src/mainPage.js":
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateHeader": () => (/* binding */ generateHeader),
/* harmony export */   "generateMainContent": () => (/* binding */ generateMainContent)
/* harmony export */ });
const generateHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Shiro-chan's Hell's Bakery";

  const navBar = document.createElement("nav");
  navBar.classList.add("navBar");
  const mainBtn = document.createElement("button");
  mainBtn.id = "main";
  const menuBtn = document.createElement("button");
  menuBtn.id = "menu";
  const contactBtn = document.createElement("button");
  contactBtn.id = "contact";

  mainBtn.textContent = "Main";
  menuBtn.textContent = "Menu";
  contactBtn.textContent = "Contact";
  navBar.append(mainBtn, menuBtn, contactBtn);

  header.appendChild(headerTitle);
  header.appendChild(navBar);
  console.log(header);
  return header;
};

const generateMainContent = () => {
  const mainBtn = document.getElementById("main");
  mainBtn.classList.remove("inactive");
  mainBtn.classList.add("active");

  const mainContent = document.createElement("div");
  mainContent.classList.add("mainContent");

  const chefImage = new Image();
  chefImage.src = "../src/assets/shiro.jpg";
  chefImage.alt = "Chef Shiro-chan";
  chefImage.id = "chef-portrait";

  const chefBlurb = document.createElement("div");
  chefBlurb.classList.add("blurb");
  chefBlurb.textContent =
    "Shiro's Hell's Kitchen bakery is turning up the heat at Kitty's Palace in Las Vegas. Drawing inspiration from the global hit reality television show starring world-renowned chef Shiro-chan, guests will feel like they are on the studio set.";

  mainContent.appendChild(chefImage);
  mainContent.appendChild(chefBlurb);
  return mainContent;
};




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateMenuContent": () => (/* binding */ generateMenuContent)
/* harmony export */ });
const generateMenuContent = () => {
  const menuBtn = document.getElementById("menu");
  menuBtn.classList.remove("inactive");
  menuBtn.classList.add("active");
  const menuContent = document.createElement("div");
  menuContent.classList.add("menuContent");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  const menuCard = document.createElement("div");
  menuCard.classList.add("menuCard");
  const cardTitle = document.createElement("h2");
  cardTitle.textContent = "Menu Item";
  cardTitle.classList.add("cardTitle");
  const cardImg = new Image();
  cardImg.src = "../src/assets/cookie.jpg";
  cardImg.classList.add("cardImg");
  const cardBlurb = document.createElement("p");
  cardBlurb.textContent = "This is a short description of the menu item";
  cardBlurb.classList.add("cardBlurb");

  menuCard.append(cardTitle, cardImg, cardBlurb);

  for (let i = 0; i < 6; i++) {
    menu.appendChild(menuCard.cloneNode(true));
  }

  menuContent.appendChild(menu);
  return menuContent;
};




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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainPage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainPage.js */ "./src/mainPage.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");




const content = document.querySelector(".content");
//on load of page, show the header
function showHeader() {
  content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.generateHeader)());
  const btnList = content.querySelectorAll("button");
  btnList.forEach((btn) => {
    btn.classList.add("inactive");
  });
  btnList.forEach((btn) => {
    btn.addEventListener("click", switchPage);
  });
  return content;
}
document.body.appendChild(showHeader());
content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.generateMainContent)());

function switchPage(e) {
  const btnList = content.querySelectorAll("button");
  btnList.forEach((btn) => {
    btn.classList.remove("active");
    btn.classList.add("inactive");
  });
  content.removeChild(content.lastChild);
  if (e.target.id == "main") {
    content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.generateMainContent)());
  } else if (e.target.id == "menu") {
    content.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.generateMenuContent)());
  } else if (e.target.id == "contact") {
    content.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_1__.generateContactContent)());
  }
}

//on load, the main page should be shown with button depressed
//when user clicks different nav buttons, button should change to be depressed
//remove existing content and show new content
function generateMain() {
  content.appendChild((0,_mainPage_js__WEBPACK_IMPORTED_MODULE_0__.generateMainContent)());
  return content;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFK0M7Ozs7Ozs7Ozs7Ozs7OztBQ2xEL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFK0I7Ozs7Ozs7VUNoQy9CO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vRTtBQUNkO0FBQ047O0FBRWhEO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0REFBYztBQUNwQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUVBQW1COztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSx3QkFBd0IsaUVBQW1CO0FBQzNDLElBQUk7QUFDSix3QkFBd0IsNkRBQW1CO0FBQzNDLElBQUk7QUFDSix3QkFBd0IsbUVBQXNCO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUVBQW1CO0FBQ3pDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21haW5QYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBnZW5lcmF0ZUNvbnRhY3RDb250ZW50ID0gKCkgPT4ge307XG5cbmV4cG9ydCB7IGdlbmVyYXRlQ29udGFjdENvbnRlbnQgfTtcbiIsImNvbnN0IGdlbmVyYXRlSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICBjb25zdCBoZWFkZXJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaGVhZGVyVGl0bGUudGV4dENvbnRlbnQgPSBcIlNoaXJvLWNoYW4ncyBIZWxsJ3MgQmFrZXJ5XCI7XG5cbiAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcbiAgbmF2QmFyLmNsYXNzTGlzdC5hZGQoXCJuYXZCYXJcIik7XG4gIGNvbnN0IG1haW5CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtYWluQnRuLmlkID0gXCJtYWluXCI7XG4gIGNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBtZW51QnRuLmlkID0gXCJtZW51XCI7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb250YWN0QnRuLmlkID0gXCJjb250YWN0XCI7XG5cbiAgbWFpbkJ0bi50ZXh0Q29udGVudCA9IFwiTWFpblwiO1xuICBtZW51QnRuLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gIGNvbnRhY3RCdG4udGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgbmF2QmFyLmFwcGVuZChtYWluQnRuLCBtZW51QnRuLCBjb250YWN0QnRuKTtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgY29uc29sZS5sb2coaGVhZGVyKTtcbiAgcmV0dXJuIGhlYWRlcjtcbn07XG5cbmNvbnN0IGdlbmVyYXRlTWFpbkNvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gIG1haW5CdG4uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBtYWluQnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRlbnRcIik7XG5cbiAgY29uc3QgY2hlZkltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNoZWZJbWFnZS5zcmMgPSBcIi4uL3NyYy9hc3NldHMvc2hpcm8uanBnXCI7XG4gIGNoZWZJbWFnZS5hbHQgPSBcIkNoZWYgU2hpcm8tY2hhblwiO1xuICBjaGVmSW1hZ2UuaWQgPSBcImNoZWYtcG9ydHJhaXRcIjtcblxuICBjb25zdCBjaGVmQmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGVmQmx1cmIuY2xhc3NMaXN0LmFkZChcImJsdXJiXCIpO1xuICBjaGVmQmx1cmIudGV4dENvbnRlbnQgPVxuICAgIFwiU2hpcm8ncyBIZWxsJ3MgS2l0Y2hlbiBiYWtlcnkgaXMgdHVybmluZyB1cCB0aGUgaGVhdCBhdCBLaXR0eSdzIFBhbGFjZSBpbiBMYXMgVmVnYXMuIERyYXdpbmcgaW5zcGlyYXRpb24gZnJvbSB0aGUgZ2xvYmFsIGhpdCByZWFsaXR5IHRlbGV2aXNpb24gc2hvdyBzdGFycmluZyB3b3JsZC1yZW5vd25lZCBjaGVmIFNoaXJvLWNoYW4sIGd1ZXN0cyB3aWxsIGZlZWwgbGlrZSB0aGV5IGFyZSBvbiB0aGUgc3R1ZGlvIHNldC5cIjtcblxuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjaGVmSW1hZ2UpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjaGVmQmx1cmIpO1xuICByZXR1cm4gbWFpbkNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyBnZW5lcmF0ZUhlYWRlciwgZ2VuZXJhdGVNYWluQ29udGVudCB9O1xuIiwiY29uc3QgZ2VuZXJhdGVNZW51Q29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIG1lbnVCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgY29uc3QgbWVudUNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q29udGVudC5jbGFzc0xpc3QuYWRkKFwibWVudUNvbnRlbnRcIik7XG5cbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKFwibWVudUNhcmRcIik7XG4gIGNvbnN0IGNhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY2FyZFRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51IEl0ZW1cIjtcbiAgY2FyZFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJjYXJkVGl0bGVcIik7XG4gIGNvbnN0IGNhcmRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY2FyZEltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvY29va2llLmpwZ1wiO1xuICBjYXJkSW1nLmNsYXNzTGlzdC5hZGQoXCJjYXJkSW1nXCIpO1xuICBjb25zdCBjYXJkQmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2FyZEJsdXJiLnRleHRDb250ZW50ID0gXCJUaGlzIGlzIGEgc2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIG1lbnUgaXRlbVwiO1xuICBjYXJkQmx1cmIuY2xhc3NMaXN0LmFkZChcImNhcmRCbHVyYlwiKTtcblxuICBtZW51Q2FyZC5hcHBlbmQoY2FyZFRpdGxlLCBjYXJkSW1nLCBjYXJkQmx1cmIpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51Q2FyZC5jbG9uZU5vZGUodHJ1ZSkpO1xuICB9XG5cbiAgbWVudUNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudSk7XG4gIHJldHVybiBtZW51Q29udGVudDtcbn07XG5cbmV4cG9ydCB7IGdlbmVyYXRlTWVudUNvbnRlbnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2VuZXJhdGVIZWFkZXIsIGdlbmVyYXRlTWFpbkNvbnRlbnQgfSBmcm9tIFwiLi9tYWluUGFnZS5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVDb250YWN0Q29udGVudCB9IGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCB7IGdlbmVyYXRlTWVudUNvbnRlbnQgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4vL29uIGxvYWQgb2YgcGFnZSwgc2hvdyB0aGUgaGVhZGVyXG5mdW5jdGlvbiBzaG93SGVhZGVyKCkge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlSGVhZGVyKCkpO1xuICBjb25zdCBidG5MaXN0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpO1xuICBidG5MaXN0LmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XG4gIH0pO1xuICBidG5MaXN0LmZvckVhY2goKGJ0bikgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3dpdGNoUGFnZSk7XG4gIH0pO1xuICByZXR1cm4gY29udGVudDtcbn1cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2hvd0hlYWRlcigpKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVNYWluQ29udGVudCgpKTtcblxuZnVuY3Rpb24gc3dpdGNoUGFnZShlKSB7XG4gIGNvbnN0IGJ0bkxpc3QgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gIGJ0bkxpc3QuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfSk7XG4gIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0Q2hpbGQpO1xuICBpZiAoZS50YXJnZXQuaWQgPT0gXCJtYWluXCIpIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlTWFpbkNvbnRlbnQoKSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gXCJtZW51XCIpIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlTWVudUNvbnRlbnQoKSk7XG4gIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT0gXCJjb250YWN0XCIpIHtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlQ29udGFjdENvbnRlbnQoKSk7XG4gIH1cbn1cblxuLy9vbiBsb2FkLCB0aGUgbWFpbiBwYWdlIHNob3VsZCBiZSBzaG93biB3aXRoIGJ1dHRvbiBkZXByZXNzZWRcbi8vd2hlbiB1c2VyIGNsaWNrcyBkaWZmZXJlbnQgbmF2IGJ1dHRvbnMsIGJ1dHRvbiBzaG91bGQgY2hhbmdlIHRvIGJlIGRlcHJlc3NlZFxuLy9yZW1vdmUgZXhpc3RpbmcgY29udGVudCBhbmQgc2hvdyBuZXcgY29udGVudFxuZnVuY3Rpb24gZ2VuZXJhdGVNYWluKCkge1xuICBjb250ZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlTWFpbkNvbnRlbnQoKSk7XG4gIHJldHVybiBjb250ZW50O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9