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
const generateContactContent = () => {
  const contactBtn = document.getElementById("contact");
  contactBtn.classList.remove("inactive");
  contactBtn.classList.add("active");

  const contactContent = document.createElement("div");
  contactContent.classList.add("contactContent");

  const infoBox = document.createElement("div");
  infoBox.classList.add("infoBox");
  const infoTitle = document.createElement("h1");
  infoTitle.textContent = "Shiro-chan";
  const contactImg = new Image();
  contactImg.src = "../src/assets/shiro.jpg";
  contactImg.classList.add("contactImage");
  const infoPhone = document.createElement("div");
  infoPhone.textContent = "Phone: 111-111-1111 Email: shiro-chan@shiro.com";
  infoBox.append(infoTitle, contactImg, infoPhone);

  contactContent.appendChild(infoBox);

  return contactContent;
};




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFa0M7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QmxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQzs7Ozs7Ozs7Ozs7Ozs7O0FDbEQvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUUrQjs7Ozs7OztVQ2hDL0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9FO0FBQ2Q7QUFDTjs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDREQUFjO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRUFBbUI7O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHdCQUF3QixpRUFBbUI7QUFDM0MsSUFBSTtBQUNKLHdCQUF3Qiw2REFBbUI7QUFDM0MsSUFBSTtBQUNKLHdCQUF3QixtRUFBc0I7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpRUFBbUI7QUFDekM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWFpblBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGdlbmVyYXRlQ29udGFjdENvbnRlbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG4gIGNvbnRhY3RCdG4uY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xuICBjb250YWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKFwiY29udGFjdENvbnRlbnRcIik7XG5cbiAgY29uc3QgaW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm9Cb3guY2xhc3NMaXN0LmFkZChcImluZm9Cb3hcIik7XG4gIGNvbnN0IGluZm9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgaW5mb1RpdGxlLnRleHRDb250ZW50ID0gXCJTaGlyby1jaGFuXCI7XG4gIGNvbnN0IGNvbnRhY3RJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29udGFjdEltZy5zcmMgPSBcIi4uL3NyYy9hc3NldHMvc2hpcm8uanBnXCI7XG4gIGNvbnRhY3RJbWcuY2xhc3NMaXN0LmFkZChcImNvbnRhY3RJbWFnZVwiKTtcbiAgY29uc3QgaW5mb1Bob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb1Bob25lLnRleHRDb250ZW50ID0gXCJQaG9uZTogMTExLTExMS0xMTExIEVtYWlsOiBzaGlyby1jaGFuQHNoaXJvLmNvbVwiO1xuICBpbmZvQm94LmFwcGVuZChpbmZvVGl0bGUsIGNvbnRhY3RJbWcsIGluZm9QaG9uZSk7XG5cbiAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mb0JveCk7XG5cbiAgcmV0dXJuIGNvbnRhY3RDb250ZW50O1xufTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVDb250YWN0Q29udGVudCB9O1xuIiwiY29uc3QgZ2VuZXJhdGVIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyXCIpO1xuXG4gIGNvbnN0IGhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBoZWFkZXJUaXRsZS50ZXh0Q29udGVudCA9IFwiU2hpcm8tY2hhbidzIEhlbGwncyBCYWtlcnlcIjtcblxuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdkJhclwiKTtcbiAgY29uc3QgbWFpbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1haW5CdG4uaWQgPSBcIm1haW5cIjtcbiAgY29uc3QgbWVudUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdG4uaWQgPSBcIm1lbnVcIjtcbiAgY29uc3QgY29udGFjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnRhY3RCdG4uaWQgPSBcImNvbnRhY3RcIjtcblxuICBtYWluQnRuLnRleHRDb250ZW50ID0gXCJNYWluXCI7XG4gIG1lbnVCdG4udGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgY29udGFjdEJ0bi50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICBuYXZCYXIuYXBwZW5kKG1haW5CdG4sIG1lbnVCdG4sIGNvbnRhY3RCdG4pO1xuXG4gIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUaXRsZSk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChuYXZCYXIpO1xuICBjb25zb2xlLmxvZyhoZWFkZXIpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgZ2VuZXJhdGVNYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbWFpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcbiAgbWFpbkJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaW5hY3RpdmVcIik7XG4gIG1haW5CdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5Db250ZW50LmNsYXNzTGlzdC5hZGQoXCJtYWluQ29udGVudFwiKTtcblxuICBjb25zdCBjaGVmSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgY2hlZkltYWdlLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9zaGlyby5qcGdcIjtcbiAgY2hlZkltYWdlLmFsdCA9IFwiQ2hlZiBTaGlyby1jaGFuXCI7XG4gIGNoZWZJbWFnZS5pZCA9IFwiY2hlZi1wb3J0cmFpdFwiO1xuXG4gIGNvbnN0IGNoZWZCbHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNoZWZCbHVyYi5jbGFzc0xpc3QuYWRkKFwiYmx1cmJcIik7XG4gIGNoZWZCbHVyYi50ZXh0Q29udGVudCA9XG4gICAgXCJTaGlybydzIEhlbGwncyBLaXRjaGVuIGJha2VyeSBpcyB0dXJuaW5nIHVwIHRoZSBoZWF0IGF0IEtpdHR5J3MgUGFsYWNlIGluIExhcyBWZWdhcy4gRHJhd2luZyBpbnNwaXJhdGlvbiBmcm9tIHRoZSBnbG9iYWwgaGl0IHJlYWxpdHkgdGVsZXZpc2lvbiBzaG93IHN0YXJyaW5nIHdvcmxkLXJlbm93bmVkIGNoZWYgU2hpcm8tY2hhbiwgZ3Vlc3RzIHdpbGwgZmVlbCBsaWtlIHRoZXkgYXJlIG9uIHRoZSBzdHVkaW8gc2V0LlwiO1xuXG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNoZWZJbWFnZSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGNoZWZCbHVyYik7XG4gIHJldHVybiBtYWluQ29udGVudDtcbn07XG5cbmV4cG9ydCB7IGdlbmVyYXRlSGVhZGVyLCBnZW5lcmF0ZU1haW5Db250ZW50IH07XG4iLCJjb25zdCBnZW5lcmF0ZU1lbnVDb250ZW50ID0gKCkgPT4ge1xuICBjb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuICBtZW51QnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcbiAgbWVudUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICBjb25zdCBtZW51Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtZW51Q29udGVudFwiKTtcblxuICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICBjb25zdCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoXCJtZW51Q2FyZFwiKTtcbiAgY29uc3QgY2FyZFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBjYXJkVGl0bGUudGV4dENvbnRlbnQgPSBcIk1lbnUgSXRlbVwiO1xuICBjYXJkVGl0bGUuY2xhc3NMaXN0LmFkZChcImNhcmRUaXRsZVwiKTtcbiAgY29uc3QgY2FyZEltZyA9IG5ldyBJbWFnZSgpO1xuICBjYXJkSW1nLnNyYyA9IFwiLi4vc3JjL2Fzc2V0cy9jb29raWUuanBnXCI7XG4gIGNhcmRJbWcuY2xhc3NMaXN0LmFkZChcImNhcmRJbWdcIik7XG4gIGNvbnN0IGNhcmRCbHVyYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjYXJkQmx1cmIudGV4dENvbnRlbnQgPSBcIlRoaXMgaXMgYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgbWVudSBpdGVtXCI7XG4gIGNhcmRCbHVyYi5jbGFzc0xpc3QuYWRkKFwiY2FyZEJsdXJiXCIpO1xuXG4gIG1lbnVDYXJkLmFwcGVuZChjYXJkVGl0bGUsIGNhcmRJbWcsIGNhcmRCbHVyYik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVDYXJkLmNsb25lTm9kZSh0cnVlKSk7XG4gIH1cblxuICBtZW51Q29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbiAgcmV0dXJuIG1lbnVDb250ZW50O1xufTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVNZW51Q29udGVudCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZW5lcmF0ZUhlYWRlciwgZ2VuZXJhdGVNYWluQ29udGVudCB9IGZyb20gXCIuL21haW5QYWdlLmpzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUNvbnRhY3RDb250ZW50IH0gZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVNZW51Q29udGVudCB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbi8vb24gbG9hZCBvZiBwYWdlLCBzaG93IHRoZSBoZWFkZXJcbmZ1bmN0aW9uIHNob3dIZWFkZXIoKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVIZWFkZXIoKSk7XG4gIGNvbnN0IGJ0bkxpc3QgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIik7XG4gIGJ0bkxpc3QuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcbiAgfSk7XG4gIGJ0bkxpc3QuZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzd2l0Y2hQYWdlKTtcbiAgfSk7XG4gIHJldHVybiBjb250ZW50O1xufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzaG93SGVhZGVyKCkpO1xuY29udGVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZU1haW5Db250ZW50KCkpO1xuXG5mdW5jdGlvbiBzd2l0Y2hQYWdlKGUpIHtcbiAgY29uc3QgYnRuTGlzdCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbChcImJ1dHRvblwiKTtcbiAgYnRuTGlzdC5mb3JFYWNoKChidG4pID0+IHtcbiAgICBidG4uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZChcImluYWN0aXZlXCIpO1xuICB9KTtcbiAgY29udGVudC5yZW1vdmVDaGlsZChjb250ZW50Lmxhc3RDaGlsZCk7XG4gIGlmIChlLnRhcmdldC5pZCA9PSBcIm1haW5cIikge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVNYWluQ29udGVudCgpKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcIm1lbnVcIikge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVNZW51Q29udGVudCgpKTtcbiAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PSBcImNvbnRhY3RcIikge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVDb250YWN0Q29udGVudCgpKTtcbiAgfVxufVxuXG4vL29uIGxvYWQsIHRoZSBtYWluIHBhZ2Ugc2hvdWxkIGJlIHNob3duIHdpdGggYnV0dG9uIGRlcHJlc3NlZFxuLy93aGVuIHVzZXIgY2xpY2tzIGRpZmZlcmVudCBuYXYgYnV0dG9ucywgYnV0dG9uIHNob3VsZCBjaGFuZ2UgdG8gYmUgZGVwcmVzc2VkXG4vL3JlbW92ZSBleGlzdGluZyBjb250ZW50IGFuZCBzaG93IG5ldyBjb250ZW50XG5mdW5jdGlvbiBnZW5lcmF0ZU1haW4oKSB7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVNYWluQ29udGVudCgpKTtcbiAgcmV0dXJuIGNvbnRlbnQ7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=