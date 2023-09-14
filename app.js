"use strict";

function Product(name, price, imageURL, timeImage) {
  this.name = name;
  this.price = price;
  this.imageURL = imageURL;
  this.timeImage = timeImage;
}

const sunglasses = new Product("Sunglasses", 20, "22.jpg",1);

const watch = new Product("Watch", 20, "23.jpg", 1);

const wallet = new Product("Wallet", 20, "23.jpg", 1);

console.log(sunglasses.name);
console.log(sunglasses.price);
console.log(sunglasses.imageURL);
console.log(sunglasses.timeImage);

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
    const imageUrl = "${22}.jpg";
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
