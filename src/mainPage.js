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

export { generateHeader, generateMainContent };
