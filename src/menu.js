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

export { generateMenuContent };
