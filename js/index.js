// get all Elements
const totalPriceElement = document.getElementById("total-price");
const discountElement = document.getElementById("discount");
const totalElement = document.getElementById("total");
const cartListContainer = document.getElementById("cart-list");
const couponElement = document.getElementById("coupon-input");
const applyBtn = document.getElementById("apply-btn");
const purchaseBtn = document.getElementById("purchase-btn");
const goToHomeBtn = document.getElementById("go-home-btn");

// get all product1
const product1 = document.getElementById("product-1");
const product2 = document.getElementById("product-2");
const product3 = document.getElementById("product-3");
const product4 = document.getElementById("product-4");
const product5 = document.getElementById("product-5");
const product6 = document.getElementById("product-6");

applyBtn.addEventListener("click", function (params) {
  const couponValue = couponElement.value;
  if (couponValue === "SELL200") {
    // set Discount Price
    const discountPercentage = 20;
    const discount = totalPriceElement.innerText * (discountPercentage / 100);
    discountElement.innerText = parseFloat(discount).toFixed(2);

    // set final total
    totalElement.innerText = parseFloat(
      totalPriceElement.innerText - discount
    ).toFixed(2);

    // clear coupon code from input
    couponElement.value = "";
  }
});

// product 1
product1.addEventListener("click", function (params) {
  const count = cartListContainer.childElementCount;
  const productTitleElement = document.querySelectorAll(".card-title")[0];
  const productTitle = productTitleElement.innerText;

  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${productTitle}`;

  cartListContainer.appendChild(p);

  //   set element with calculation
  const productPrice = getPrice("product-1-price");
  // sum with total price
  const totalPrice = getPreviousTotalPrice("total-price") + productPrice;
  totalPriceElement.innerText = totalPrice.toFixed(2);
  //sum with total
  const total = totalPrice;
  totalElement.innerText = total.toFixed(2);

  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  }
  if (totalPrice >= 200) {
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
  }
});
// product 2
product2.addEventListener("click", function (params) {
  const count = cartListContainer.childElementCount;
  const productTitleElement = document.querySelectorAll(".card-title")[1];
  const productTitle = productTitleElement.innerText;

  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${productTitle}`;

  cartListContainer.appendChild(p);

  //   set element with calculation
  const productPrice = getPrice("product-2-price");
  // sum with total price
  const totalPrice = getPreviousTotalPrice("total-price") + productPrice;
  totalPriceElement.innerText = totalPrice.toFixed(2);
  //sum with total
  const total = totalPrice;
  totalElement.innerText = total.toFixed(2);

  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  }
  if (totalPrice >= 200) {
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
  }
});
// product 3
product3.addEventListener("click", function (params) {
  const count = cartListContainer.childElementCount;
  const productTitleElement = document.querySelectorAll(".card-title")[2];
  const productTitle = productTitleElement.innerText;

  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${productTitle}`;

  cartListContainer.appendChild(p);

  //   set element with calculation
  const productPrice = getPrice("product-3-price");
  // sum with total price
  const totalPrice = getPreviousTotalPrice("total-price") + productPrice;
  totalPriceElement.innerText = totalPrice.toFixed(2);
  //sum with total
  const total = totalPrice;
  totalElement.innerText = total.toFixed(2);

  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  }
  if (totalPrice >= 200) {
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
  }
});
// product 4
product4.addEventListener("click", function (params) {
  const count = cartListContainer.childElementCount;
  const productTitleElement = document.querySelectorAll(".card-title")[3];
  const productTitle = productTitleElement.innerText;

  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${productTitle}`;

  cartListContainer.appendChild(p);

  //   set element with calculation
  const productPrice = getPrice("product-4-price");
  // sum with total price
  const totalPrice = getPreviousTotalPrice("total-price") + productPrice;
  totalPriceElement.innerText = totalPrice.toFixed(2);
  //sum with total
  const total = totalPrice;
  totalElement.innerText = total.toFixed(2);

  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  }
  if (totalPrice >= 200) {
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
  }
});
// product 5
product5.addEventListener("click", function (params) {
  const count = cartListContainer.childElementCount;
  const productTitleElement = document.querySelectorAll(".card-title")[4];
  const productTitle = productTitleElement.innerText;

  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${productTitle}`;

  cartListContainer.appendChild(p);

  //   set element with calculation
  const productPrice = getPrice("product-5-price");
  // sum with total price
  const totalPrice = getPreviousTotalPrice("total-price") + productPrice;
  totalPriceElement.innerText = totalPrice.toFixed(2);
  //sum with total
  const total = totalPrice;
  totalElement.innerText = total.toFixed(2);

  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  }
  if (totalPrice >= 200) {
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
  }
});
// product 6
product6.addEventListener("click", function (params) {
  const count = cartListContainer.childElementCount;
  const productTitleElement = document.querySelectorAll(".card-title")[5];
  const productTitle = productTitleElement.innerText;

  const p = document.createElement("p");
  p.innerHTML = `${count + 1}. ${productTitle}`;

  cartListContainer.appendChild(p);

  //   set element with calculation
  const productPrice = getPrice("product-6-price");
  // sum with total price
  const totalPrice = getPreviousTotalPrice("total-price") + productPrice;
  totalPriceElement.innerText = totalPrice.toFixed(2);
  //sum with total
  const total = totalPrice;
  totalElement.innerText = total.toFixed(2);

  if (totalPrice > 0) {
    purchaseBtn.removeAttribute("disabled");
  }
  if (totalPrice >= 200) {
    const applyBtn = document.getElementById("apply-btn");
    applyBtn.removeAttribute("disabled");
  }
});

goToHomeBtn.addEventListener("click", function () {
  totalPriceElement.innerText = "00";
  discountElement.innerText = "00";
  totalElement.innerText = "00";
  cartListContainer.innerHTML = "";
  applyBtn.setAttribute("disabled", "disabled");
  purchaseBtn.setAttribute("disabled", "disabled");
});
