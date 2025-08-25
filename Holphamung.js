const products = [
    { img: "imageHM/C3.jpg", price: 59.99, old: 79.99 },
    { img: "imageHM/C4.jpg", price: 79.99 },
    { img: "imageHM/C5.jpg", price: 79.99 },
    { img: "imageHM/C6.jpg", price: 59.99, old: 79.99 },
    { img: "imageHM/C7.jpg", price: 79.99 },
    { img: "imageHM/C8.jpg", price: 79.99 },
    { img: "imageHM/C10.jpg", price: 79.99 },
    { img: "imageHM/C9.jpg", price: 79.99 },
    { img: "imageHM/C11.jpg", price: 79.99 },
    { img: "imageHM/C12.jpg", price: 79.99 },
    { img: "imageHM/C13.jpg", price: 79.99 },
    { img: "imageHM/C14.jpg", price: 79.99 },
    { img: "imageHM/C15.jpg", price: 79.99 },
    { img: "imageHM/C16.jpg", price: 79.99 },
    { img: "imageHM/C17.jpg", price: 79.99 },
    { img: "imageHM/C18.jpg", price: 79.99 },
   
  ];

  const grid = document.getElementById("productGrid");

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.img}" alt="Khmer Clothing">
      <h3>Sleeve Gray..................</h3>
      <p>Ad by Apsara Angkor</p>
      <div class="rating">★★★★★ <span>(1.1K)</span></div>
      <div class="price">USD ${p.price.toFixed(2)} ${p.old ? `<span class="old-price">USD ${p.old.toFixed(2)}</span>` : ""}</div>
        <button class="buy-button">Buy Now</button>
    `;
    grid.appendChild(card);
  });