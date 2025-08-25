
    
    const products = [
      { img: "imageAK/p2.jpg", price: 59.99, old: 79.99 },
      { img: "imageAK/a11.jpg", price: 79.99 },
      { img: "imageAK/p5.jpg", price: 59.99, old: 79.99 },
      { img: "imageAK/p3.jpg", price: 79.99 },
      { img: "imageAK/a10.jpg", price: 79.99 },
      { img: "imageAK/a3.jpg", price: 79.99 },
      { img: "imageAK/a20.jpg", price: 79.99 },
      { img: "imageAK/a6.jpg", price: 79.99 },
      { img: "imageAK/a8.jpg", price: 79.99 },
      { img: "imageAK/a7.jpg", price: 79.99 },
      { img: "imageAK/p6.jpg", price: 79.99 },
      { img: "imageAK/p7.jpg", price: 79.99 },
      { img: "imageAK/a22.jpg", price: 79.99 },
      { img: "imageAK/p4.jpg", price: 79.99 },
      { img: "imageAK/p10.jpg", price: 79.99 },
      { img: "imageAK/p17.jpg", price: 79.99 },
      { img: "imageAK/a14.jpg", price: 79.99 },
      { img: "imageAK/p11.jpg", price: 79.99 },
      { img: "imageAK/p9.jpg", price: 79.99 },
      { img: "imageAK/p8.jpg", price: 79.99 },
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
 
  