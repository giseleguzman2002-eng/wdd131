// ======================
// FOOTER INFORMATION
// ======================

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}

const lastModified = document.querySelector("#lastModified");

if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
}

// ======================
// HAMBURGER MENU
// ======================

const menuButton = document.querySelector("#menuButton");
const navMenu = document.querySelector("nav ul");

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

// ======================
// VISIT COUNTER
// LOCAL STORAGE
// ======================

let visits = Number(localStorage.getItem("gahVisits")) || 0;

visits++;

localStorage.setItem("gahVisits", visits);

const visitCount = document.querySelector("#visitCount");

if (visitCount) {
    visitCount.textContent =
        `You have visited GAH Make Up ${visits} times.`;
}

// ======================
// DYNAMIC SERVICES LIST
// ARRAY + FOREACH
// ======================

const dynamicServices = document.querySelector("#dynamicServices");

const services = [
    "Wedding Makeup",
    "Quinceañera Makeup",
    "Graduation Makeup",
    "Birthday Makeup",
    "Special Event Makeup"
];

if (dynamicServices) {
    services.forEach(service => {
        const li = document.createElement("li");
        li.textContent = service;
        dynamicServices.appendChild(li);
    });
}

// ======================
// GALLERY COUNTER
// ======================

const galleryImages = document.querySelectorAll(".gallery-grid img");

const galleryCount = document.querySelector("#galleryCount");

if (galleryCount) {
    galleryCount.textContent =
        `Gallery Images: ${galleryImages.length}`;
}

// ======================
// GALLERY INTERACTION
// ======================

galleryImages.forEach(image => {

    image.addEventListener("click", () => {

        const caption = image.nextElementSibling.textContent;

        alert(`Selected Style: ${caption}`);

    });

});

// ======================
// FORM SUBMISSION
// OBJECT + LOCAL STORAGE
// ======================

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
            "gahRequest",
            JSON.stringify(request)
        );

        confirmationMessage.textContent =
            `Thank you ${fullname}! Your ${eventType} request has been submitted successfully.`;

        infoForm.reset();

    });

}