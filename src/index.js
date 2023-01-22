import { generateHeader, generateMainContent } from "./mainPage";

function generateMain() {
  const content = document.querySelector(".content");
  content.appendChild(generateHeader());
  content.appendChild(generateMainContent());
  return content;
}

document.body.appendChild(generateMain());
