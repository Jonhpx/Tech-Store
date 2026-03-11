const products = [
  {
    id: 1,
    name: "Smartphone X",
    description: "Smartphone com 128GB de armazenamento e câmera de alta resolução.",
    price: 1499.00,
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
  },
  {
    id: 2,
    name: "Notebook Pro",
    description: "Notebook ideal para estudo e trabalho com alto desempenho.",
    price: 3999.00,
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400"
  },
  {
    id: 3,
    name: "Tablet Plus",
    description: "Tablet com tela de 10 polegadas ideal para estudo e entretenimento.",
    price: 1299.00,
    img: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400"
  },
  {
    id: 4,
    name: "Fone Bluetooth",
    description: "Fone sem fio com som potente e bateria de longa duração.",
    price: 299.00,
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
  }
];

let cart = [];

const productsContainer = document.getElementById("products");
const cartCountElem = document.getElementById("cart-count");

function formatPrice(price) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function renderProducts(filter = "") {
  productsContainer.innerHTML = "";
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(filter.toLowerCase()) ||
    p.description.toLowerCase().includes(filter.toLowerCase())
  );
  filtered.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" class="product-image" />
      <div class="product-info">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="product-price">${formatPrice(p.price)}</div>
        <button class="add-btn" onclick="addToCart(${p.id})">Adicionar ao carrinho</button>
      </div>
    `;
    productsContainer.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  cartCountElem.textContent = cart.length;
  alert(`"${product.name}" adicionado ao carrinho!`);
}


document.getElementById("search-btn").addEventListener("click", () => {
  const filter = document.getElementById("search").value;
  renderProducts(filter);
});

document.getElementById("search").addEventListener("keyup", e => {
  if (e.key === "Enter") renderProducts(e.target.value);
});

renderProducts();