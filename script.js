const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuOpenIcon = document.getElementById("menu-open");
const menuCloseIcon = document.getElementById("menu-close");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  menuOpenIcon.classList.toggle("hidden");
  menuCloseIcon.classList.toggle("hidden");
});

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    cards.forEach((c) => {
      c.classList.remove("md:basis-2/4");
      c.classList.add("md:basis-1/4");
    });
    card.classList.remove("md:basis-1/4");
    card.classList.add("md:basis-2/4");
  });
});

const coffeeList = [
  {
    name: "Espresso",
    price: "Rp 35.000",
    img: "src/images/menu/espresso.jpg",
    desc: "A classic Italian-style coffee brewed under pressure, delivering a bold and aromatic flavor.",
  },
  {
    name: "Latte",
    price: "Rp 40.000",
    img: "src/images/menu/latte.jpg",
    desc: "Smooth and milky with a shot of espresso—perfectly balanced for a mellow experience.",
  },
  {
    name: "Cappuccino",
    price: "Rp 42.000",
    img: "src/images/menu/cappuccino.jpg",
    desc: "A bold espresso base layered with steamed milk and a fluffy foam topping.",
  },
  {
    name: "Americano",
    price: "Rp 30.000",
    img: "src/images/menu/americano.jpg",
    desc: "Espresso diluted with hot water for a smooth, black coffee experience.",
  },
  {
    name: "Mocha",
    price: "Rp 45.000",
    img: "src/images/menu/mocha.jpg",
    desc: "A rich fusion of chocolate, espresso, and milk—perfect for sweet tooths.",
  },
  {
    name: "Macchiato",
    price: "Rp 38.000",
    img: "src/images/menu/macchiato.jpg",
    desc: "Espresso marked with a dash of frothy milk foam for a stronger taste.",
  },
  {
    name: "Flat White",
    price: "Rp 39.000",
    img: "src/images/menu/flat-white.jpg",
    desc: "Creamy and balanced, like a latte with less foam and more texture.",
  },
];

const slider = document.getElementById("slider");

coffeeList.forEach((coffee) => {
  const card = document.createElement("div");
  card.className =
    "min-w-[220px] max-w-[250px] bg-[#2b2b2f] rounded-xl p-4 shadow-md flex-shrink-0 border border-[#c9a27e]/10";

  card.innerHTML = `
        <img src="${coffee.img}" alt="${
    coffee.name
  }" class="rounded-lg mb-3 w-full h-40 object-cover border border-[#c9a27e]/30" />
        <h3 class="text-lg font-semibold mb-1 text-white">${coffee.name}</h3>
        <p class="text-sm text-[#c9a27e] mb-3">${coffee.price}</p>
        <button class="w-full text-sm py-2 px-4 bg-[#c9a27e] hover:bg-[#d8b893] text-black font-semibold rounded-lg transition" onclick='openModal(${JSON.stringify(
          coffee
        )})'>
          View Details
        </button>
      `;

  slider.appendChild(card);
});

function openModal(coffee) {
  document.getElementById("modalImg").src = coffee.img;
  document.getElementById("modalNama").textContent = coffee.name;
  document.getElementById("modalHarga").textContent = coffee.price;
  document.getElementById("modalDesc").textContent = coffee.desc;
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("flex");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  document.getElementById("modal").classList.remove("flex");
}
