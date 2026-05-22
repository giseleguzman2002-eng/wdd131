// Footer dates

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu

const menuButton = document.querySelector("#menuButton");
const navigation = document.querySelector(".navigation-hide");

navigation.classList.add("hide");

menuButton.addEventListener("click", () => {

    navigation.classList.toggle("hide");

    if (navigation.classList.contains("hide")) {
        menuButton.textContent = "☰";
    } else {
        menuButton.textContent = "X";
    }

})