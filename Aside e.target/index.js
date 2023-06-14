const container = document.getElementById("container");
const clearBtn = document.getElementById("clear-btn");

const products = [
  {
    name: "Ostrich Pillow",
    price: "10",
    image: "ostrichpillow.jpg",
    id: "ostrich-pillow",
  },
  {
    name: "Bacon Bandages",
    price: "8",
    image: "bacon-bandage.jpg",
    id: "bacon-bandages",
  },
  {
    name: "Baby Mop",
    price: "20",
    image: "babymop.jpg",
    id: "baby-mop",
  },
];

let productsHtml = "";

for (let product of products) {
  productsHtml += `
    <div class="product on-offer">
    <h3>${product.name}</h3>
    <h4> £${product.price}</h4>
    <img src="${product.image}">
    <button id="${product.id}">Buy Now</button>
    </div>
    `;
}
container.innerHTML = productsHtml;

container.addEventListener("click", (e) => {
  document.getElementById(e.target.id).parentElement.classList.add("purchased");
  document
    .getElementById(e.target.id)
    .parentElement.classList.remove("on-offer");
});

clearBtn.addEventListener("click", () => {
  const productsArray = document.getElementsByClassName("product");
  for (let product of productsArray) {
    product.classList.remove("purchased");
    product.classList.add("on-offer");
  }
});
