let itemCartArr = [];
function updateCartItemQuantity() {
  document.querySelector(".cart_productQuantity").innerHTML =
    itemCartArr.length;
}

console.log("mảng fav item: ", itemCartArr);
function renderCartItems() {
  let content = "";
  itemCartArr = getItem_("cartItem");
  if (!itemCartArr) itemCartArr = [];
  updateCartItemQuantity();
  for (let index in itemCartArr) {
    const { image, name, price, id } = itemCartArr[index];
    const idx = Number(index) + 1;
    content += `<tr>
    <td>${idx}</td>
            <td><img src="${image}"/></td>
            <td>${name}</td>
            <td>${price}</td>
            <td class="text-center"><button class="bg-red text-white btn btn-danger" onclick="deleteCartItem(${id})">X</button></td>
        </tr>`;
  }
  document.querySelector(".tbodyCart").innerHTML = content;
}
renderCartItems();
function deleteCartItem(id) {
  const newfavItemArr = itemCartArr.filter((item) => {
    console.log("id - passedId: ", item.id, id);
    return item.id !== id ? item : "";
  });
  setItem_("cartItem", newfavItemArr);
  renderCartItems();
}
const addCartItem = (newItem) => {
  itemCartArr.push(newItem);
  console.log("item in addfavitem: ", newItem);
  setItem_("cartItem", itemCartArr);
  renderCartItems();
};
