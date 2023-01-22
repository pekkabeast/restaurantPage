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

export { generateContactContent };
