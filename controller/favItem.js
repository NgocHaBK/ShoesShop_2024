let itemArr = [];
function updateFavItemQuantity() {
  document.querySelector(".fav_quantity").innerHTML = itemArr.length;
}

console.log("mảng fav item: ", itemArr);
function renderFavItems() {
  let content = "";
  itemArr = getItem_();
  if (!itemArr) itemArr = [];
  updateFavItemQuantity();
  for (let index in itemArr) {
    const { image, name, price, id } = itemArr[index];
    const idx = Number(index) + 1;
    content += `<tr>
    <td>${idx}</td>
            <td><img src="${image}"/></td>
            <td>${name}</td>
            <td>${price}</td>
            <td class="text-center">
            <button class="bg-red text-white btn btn-danger btn-deleteFavItem" onclick="deleteFavItem(${id})">X</button>
            </td>
        </tr>`;
  }
  document.querySelector(".tbody").innerHTML = content;
}
renderFavItems();
// document.querySelector(".btn-deleteFavItem").addEventListener("click",deleteFavItem);
function deleteFavItem(id) {
  const newfavItemArr = itemArr.filter((item) => {
    console.log("id - passedId: ", item.id, id);
    return item.id !== id ? item : "";
  });
  setItem_("favItem", newfavItemArr);
  renderFavItems();
}
const addFavItem = (newItem) => {
  itemArr.push(newItem);
  console.log("item in addfavitem: ", newItem);
  setItem_("favItem", itemArr);
  renderFavItems();
};
