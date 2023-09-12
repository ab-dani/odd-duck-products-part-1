"use strict";

function Product(name, price, imageURL) {
  this.name = name;
  this.price = price;
  this.imageURL = imageURL;
}

const sunglasses = new Product(
  "Sunglasses",
  20,
  "pexels-antony-trivet-9898270.jpg"
);

const watch = new Product("Watch", 20, "pexels-josh-withers-15763948.jpg");

const wallet = new Product("Wallet", 20, "pexels-neeraj-raj-2767612.jpg");

console.log(sunglasses.name);
console.log(sunglasses.price);
console.log(sunglasses.imageURL);

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateUniqueRandomNumbers(count, max) {
  const uniqueNumbers = new Set();
  while (uniqueNumbers.size < count) {
    uniqueNumbers.add(getRandomInt(1, max));
  }
  return Array.from(uniqueNumbers);
}

function displayRandomProductImages() {
  const productContainer = document.getElementById("productContainer");
  const imageCount = 3;
  const maxImageNumber = 10;
  const uniqueImageNumbers = generateUniqueRandomNumbers(
    imageCount,
    maxImageNumber
  );

  uniqueImageNumbers.forEach((imageNumber) => {
    const imageUrl = "images/product${imageNumber}.jpg";
    const imageElement = document.createElement("img");
    imageElement.src = imageUrl;
    imageElement.alt = "Product ${imageNumber}";
    productContainer.appendChild(imageElement);
  });
}

displayRandomProductImages();

function handleImageClick(event) {
  const clickedImage = event.target;
  const imageAlt = clickedImage.alt;

  const selectedProduct = products.find(
    (product = product.imageURL === imageAlt)
  );

  if (selectedProduct) {
    selectedProduct.clickCount++;

    console.log("Clicked on image: ${imageAlt}");
  }

  generateAndDisplayNewProducts();
}

const productContainer = document.getElementById("productContainer");

productContainer.addEventListener("click", handleImageClick);

displayRandomProductImages();
