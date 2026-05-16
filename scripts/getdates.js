const year = new Date().getFullYear();

document.getElementById("curretyear").textContent = year;

document.getElementById("lastModified").textContent =
    `Last Modified: ${document.lastModified}`;