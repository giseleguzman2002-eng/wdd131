// ==========================
// FOOTER
// ==========================

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}


// ==========================
// HAMBURGER MENU
// ==========================

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("nav ul");

if (menuButton && navMenu) {

    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });

}


// ==========================
// VISIT COUNTER
// ==========================

let visits = Number(localStorage.getItem("visits")) || 0;

visits++;

localStorage.setItem("visits", visits);

const visitCount = document.querySelector("#visitCount");

if (visitCount) {

    visitCount.textContent =
        `You have visited this site ${visits} times.`;

}


// ==========================
// SERVICES ARRAY
// ==========================

const services = [

    "Wedding Makeup",
    "Quinceañera Makeup",
    "Graduation Makeup",
    "Birthday Makeup",
    "Special Event Makeup"

];

const dynamicServices =
    document.querySelector("#dynamicServices");

if (dynamicServices) {

    services.forEach(service => {

        const li = document.createElement("li");

        li.textContent = service;

        dynamicServices.appendChild(li);

    });

}


// ==========================
// FORM
// ==========================

const infoForm = document.querySelector("#infoForm");
const confirmationMessage =
    document.querySelector("#confirmationMessage");

if (infoForm) {

    infoForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const fullname =
            document.querySelector("#fullname").value;

        const email =
            document.querySelector("#email").value;

        const eventType =
            document.querySelector("#eventType").value;

        const message =
            document.querySelector("#message").value;

        const request = {

            fullname,
            email,
            eventType,
            message

        };

        localStorage.setItem(
            "lastRequest",
            JSON.stringify(request)
        );

        confirmationMessage.innerHTML =
            `Thank you ${fullname}! Your request for ${eventType} makeup has been submitted successfully.`;

        infoForm.reset();

    });

}


// ==========================
// GALLERY COUNTER
// ==========================

const galleryImages =
    document.querySelectorAll(".gallery-grid img");

const galleryCount =
    document.querySelector("#galleryCount");

if (galleryCount) {

    galleryCount.textContent =
        `This gallery contains ${galleryImages.length} makeup inspiration photos.`;

}


// ==========================
// GALLERY INTERACTION
// ==========================

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const caption =
            image.nextElementSibling.textContent;

        alert(`Selected style: ${caption}`);

    });

});