// Sample data for products (replace with your real data)
const productsData = [
    {
      name: "Nike Air Force",
      price: "$69.99",
      image: "NAF.jpeg",
    },
    {
      name: "Nike Dunk High Retro",
      price: "$89.99",
      image: "Nike Dunk High Retro.jpeg",
    },
    {
      name: "Nike IN",
      price: "$119.99",
      image: "Nike IN.jpeg",
    },
    {
      name: "Nike Precision 6",
      price: "$119.99",
      image: "Nike Precision 6.jpeg",
    },
    {
      name: "Nike Air Deldon",
      price: "$119.99",
      image: "Nike Air Deldon.jpeg",
    },
    {
      name: "Nike Air Force",
      price: "$69.99",
      image: "NAF.jpeg",
    },
    {
      name: "Nike Dunk High Retro",
      price: "$89.99",
      image: "Nike Dunk High Retro.jpeg",
    },
    {
      name: "Nike IN",
      price: "$119.99",
      image: "Nike IN.jpeg",
    },
    {
      name: "Nike Precision 6",
      price: "$119.99",
      image: "Nike Precision 6.jpeg",
    },
    {
      name: "Nike Air Deldon",
      price: "$119.99",
      image: "Nike Air Deldon.jpeg",
    },
    {
      name: "Nike Air Force",
      price: "$69.99",
      image: "NAF.jpeg",
    },
    {
      name: "Nike Dunk High Retro",
      price: "$89.99",
      image: "Nike Dunk High Retro.jpeg",
    },
    {
      name: "Nike IN",
      price: "$119.99",
      image: "Nike IN.jpeg",
    },
    {
      name: "Nike Precision 6",
      price: "$119.99",
      image: "Nike Precision 6.jpeg",
    },
    {
      name: "Nike Air Deldon",
      price: "$119.99",
      image: "Nike Air Deldon.jpeg",
    },
    
  ];
  
  // Function to generate product cards dynamically
  function generateProductCards() {
    const productContainer = document.querySelector(".product-container");
  
    productsData.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
  
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;
  
      const productName = document.createElement("h3");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("p");
      productPrice.textContent = product.price;
  
      productCard.appendChild(productImage);
      productCard.appendChild(productName);
      productCard.appendChild(productPrice);
  
      productContainer.appendChild(productCard);
    });
  }
  
  // Call the function to generate product cards when the page loads
  window.addEventListener("load", generateProductCards);
  