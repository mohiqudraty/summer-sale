function getPrice(productId) {
  const element = document.getElementById(productId);
  const elementInt = element.innerText;
  const price = parseFloat(elementInt);
  return price;
}

function getPreviousTotalPrice(totalPriceId) {
  const element = document.getElementById(totalPriceId);
  const elementInt = element.innerText;
  const previousTotalPrice = parseFloat(elementInt);
  return previousTotalPrice;
}
