const products = [
  {
    id: "fc-1888",
    name: "Flux Capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "Power Laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "Time Circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "Low Voltage Reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "Warp Equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector("#productName");

products.forEach(product => {
    const option = document.createElement("option");

    option.value = product.id;
    option.textContent = product.name;

    productSelect.appendChild(option);
});
let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount++;

localStorage.setItem("reviewCount", reviewCount);

document.querySelector("#reviewCount").textContent = reviewCount;
// Footer
document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;