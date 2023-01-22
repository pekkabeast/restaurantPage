/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*************************!*\
  !*** ./src/mainPage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "generateHeader": () => (/* binding */ generateHeader),
/* harmony export */   "generateMainContent": () => (/* binding */ generateMainContent)
/* harmony export */ });
const generateHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const headerTitle = document.createElement("h1");
  headerTitle.textContent = "Shiro-chan's Hell's Kitchen";

  header.appendChild(headerTitle);
  console.log(header);
  return header;
};

const generateMainContent = () => {
  const mainContent = document.createElement("div");
  mainContent.classList.add("mainContent");

  const chefImage = new Image();
  chefImage.src = "../src/assets/shiro.jpg";
  chefImage.alt = "Chef Shiro-chan";
  chefImage.id = "Chef-portrait";

  const chefBlurb = document.createElement("div");
  chefBlurb.classList.add("blurb");
  chefBlurb.textContent =
    "Shiro's Hell's Kitchen restaurant is turning up the heat at Kitty's Palace in Las Vegas. Drawing inspiration from the global hit reality television show starring world-renowned chef Shiro-chan, guests will feel like they are on the studio set.";

  mainContent.appendChild(chefImage);
  mainContent.appendChild(chefBlurb);
  return mainContent;
};



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpblBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUUrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvbWFpblBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBnZW5lcmF0ZUhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJoZWFkZXJcIik7XG5cbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJTaGlyby1jaGFuJ3MgSGVsbCdzIEtpdGNoZW5cIjtcblxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpO1xuICBjb25zb2xlLmxvZyhoZWFkZXIpO1xuICByZXR1cm4gaGVhZGVyO1xufTtcblxuY29uc3QgZ2VuZXJhdGVNYWluQ29udGVudCA9ICgpID0+IHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbkNvbnRlbnRcIik7XG5cbiAgY29uc3QgY2hlZkltYWdlID0gbmV3IEltYWdlKCk7XG4gIGNoZWZJbWFnZS5zcmMgPSBcIi4uL3NyYy9hc3NldHMvc2hpcm8uanBnXCI7XG4gIGNoZWZJbWFnZS5hbHQgPSBcIkNoZWYgU2hpcm8tY2hhblwiO1xuICBjaGVmSW1hZ2UuaWQgPSBcIkNoZWYtcG9ydHJhaXRcIjtcblxuICBjb25zdCBjaGVmQmx1cmIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaGVmQmx1cmIuY2xhc3NMaXN0LmFkZChcImJsdXJiXCIpO1xuICBjaGVmQmx1cmIudGV4dENvbnRlbnQgPVxuICAgIFwiU2hpcm8ncyBIZWxsJ3MgS2l0Y2hlbiByZXN0YXVyYW50IGlzIHR1cm5pbmcgdXAgdGhlIGhlYXQgYXQgS2l0dHkncyBQYWxhY2UgaW4gTGFzIFZlZ2FzLiBEcmF3aW5nIGluc3BpcmF0aW9uIGZyb20gdGhlIGdsb2JhbCBoaXQgcmVhbGl0eSB0ZWxldmlzaW9uIHNob3cgc3RhcnJpbmcgd29ybGQtcmVub3duZWQgY2hlZiBTaGlyby1jaGFuLCBndWVzdHMgd2lsbCBmZWVsIGxpa2UgdGhleSBhcmUgb24gdGhlIHN0dWRpbyBzZXQuXCI7XG5cbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hlZkltYWdlKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hlZkJsdXJiKTtcbiAgcmV0dXJuIG1haW5Db250ZW50O1xufTtcblxuZXhwb3J0IHsgZ2VuZXJhdGVIZWFkZXIsIGdlbmVyYXRlTWFpbkNvbnRlbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==