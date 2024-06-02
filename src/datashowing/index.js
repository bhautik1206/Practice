import "./styled.css";

document.getElementById("app").innerHTML = `
  <h1>Product Listing</h1>
`;
let productContainer = document.getElementById("container");

function displayData(data) {
  productContainer.innerHTML = ""; // Clear any existing content

  data.forEach((item) => {
    // Create elements for each product item
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");

    let image = document.createElement("img");
    image.src = item.image;
    image.alt = item.title;
    image.classList.add("product_img");

    let title = document.createElement("h2");
    title.textContent = item.title;
    title.classList.add("product_title");

    let price = document.createElement("p");
    price.textContent = `$${item.price}`;
    price.classList.add("product_price");

    let description = document.createElement("p");
    description.textContent = item.description;
    description.classList.add("product_description");

    let category = document.createElement("p");
    category.textContent = item.category;
    category.classList.add("product_category");

    // Append elements to the product div
    productDiv.appendChild(image);
    productDiv.appendChild(title);
    productDiv.appendChild(price);
    productDiv.appendChild(description);
    productDiv.appendChild(category);

    // Append the product div to the container
    productContainer.appendChild(productDiv);
  });
}

function fetchData() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      displayData(data);
    })
    .catch((error) => {
      console.error("Error fetching the data", error);
    });
}

// Fetch and display data when the page loads
fetchData();
