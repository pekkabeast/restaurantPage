import { generateHeader, generateMainContent } from "./mainPage.js";
import { generateContactContent } from "./contact.js";
import { generateMenuContent } from "./menu.js";

const content = document.querySelector(".content");
//on load of page, show the header
function showHeader() {
  content.appendChild(generateHeader());
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
content.appendChild(generateMainContent());

function switchPage(e) {
  const btnList = content.querySelectorAll("button");
  btnList.forEach((btn) => {
    btn.classList.remove("active");
    btn.classList.add("inactive");
  });
  content.removeChild(content.lastChild);
  if (e.target.id == "main") {
    content.appendChild(generateMainContent());
  } else if (e.target.id == "menu") {
    content.appendChild(generateMenuContent());
  } else if (e.target.id == "contact") {
    content.appendChild(generateContactContent());
  }
}

//on load, the main page should be shown with button depressed
//when user clicks different nav buttons, button should change to be depressed
//remove existing content and show new content
function generateMain() {
  content.appendChild(generateMainContent());
  return content;
}
