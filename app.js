let products = [
    {
        name: "Buds VS102 Pro",
        price: 1499,
        color: "Aurora Green",
          imageUrl: "https://www.gonoise.com/cdn/shop/files/5_copy_81ee3c14-ce3a-4379-bb68-8485d61b91f2.webp?v=1720443495"
    },
    {
        name: "Buds X Prime",
        price: 1299,
        color: "Silver Grey",
          imageUrl: "https://www.gonoise.com/cdn/shop/files/4_83ab5e13-fbce-4071-9630-470b86721e85.webp?v=1720440893"
    },

    {
        name: "Air Buds Pro 4",
        price: 2499,
        color: "Coal Black",
          imageUrl: "https://www.gonoise.com/cdn/shop/files/Artboard_7-min.png?v=1726721617"
    },

    {
        name: "Buds MVP 102",
        price: 1099,
        color: "Valant White",
          imageUrl: "https://www.gonoise.com/cdn/shop/files/20_517e765c-f396-4e19-8e03-32528662d096.webp?v=1725259636"
    },

    {
        name: "Buds Xero",
        price: 3499,
        color: "Blue",
          imageUrl: "https://www.gonoise.com/cdn/shop/files/5_0204ec3b-501d-4862-a60a-91d5b5868992.png?v=1723117683"
    },

    {
        name: "Air Buds 6",
        price: 2999,
        color: "Sage Blue",
          imageUrl: "https://www.gonoise.com/cdn/shop/files/1_result_1.webp?v=1735023346"
    },

    {
        name: "Buds Verve 2",
        price: 1499,
        color: "Forest Green",
          imageUrl: "https://www.gonoise.com/cdn/shop/files/G_3.webp?v=1725948270"
    },
    {
        name: "Buds Trance 2",
        price: 1199,
        color: "Dusk Blue",
          imageUrl: "https://www.gonoise.com/cdn/shop/files/Artboard_1_816e61c2-6778-465b-9c3b-07d0b705d0fd.png?v=1728366"
    },

    {
        name: "Air Clips",
        price: 2999,
        color: "Pearl Black",
          imageUrl: "https://www.gonoise.com/cdn/shop/files/AirClipsBlack_5.webp?v=1732867997"
    },


];

products.forEach(function (item) {
    console.log(item.imageUrl);

    document.querySelector(".product-list").innerHTML += `
          <div class="product">
              <img  src="${item.imageUrl}"/>
              <h3>${item.name}</h3>
              <div class="price">Rs. ${item.price}</div>
              <button>Buy Now</button>
          </div>
      `;
});
