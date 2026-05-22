// Footer dates

const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;

// Hamburger menu

const menubutton = document.querySelector("#menubutton");
const navigation = document.querySelector(".navigation");

navigation.classList.add("hide");

menubutton.addEventListener("click", () => {

    navigation.classList.toggle("hide");

    if (navigation.classList.contains("hide")) {
        menubutton.textContent = "☰";
    } else {
        menubutton.textContent = "X";
    }

})