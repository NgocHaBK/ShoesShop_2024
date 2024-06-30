window.onload = () => {
  const urlParam = new URLSearchParams(window.location.search);
  const myparam = urlParam.get("productid");
  console.log("my param: ", myparam);
  getGivenProduct(myparam)
    .then((res) => {
      //   console.log("get given product sucessfully: ", res.data);
      let content = "";

      const {
        image,
        name,
        price,
        size,
        description,
        alias,
        quantity,
        relatedProducts,
      } = res.data.content;
      let sizeButtons = "";
      for (let value of size) {
        sizeButtons += `<button class="py-3 px-3 rounded hover:bg-black hover:text-white duration-300 transition  size-button">${value}</button>`;
      }
      content += `<div class="flex">
            <div class="left">
                <img src="${image}" class="w-100 h-100"/>
                </div>
                <div class="right">
                <h3>${name}</h3>
                <p>Men's shoes</p>
                <p>$ ${price}</p>
                <p>select size</p>
                <div class="grid grid-cols-3 gap-2 mb-2">
                    ${sizeButtons}
                </div>
                <button class="bg-black text-white w-100 py-3 px-5 rounded hover:opacity-80">Add to bag</button>
                <button class="w-100 bg-green-300 py-3 px-5 mt-2 rounded hover:opacity-90">Add to favorite</button>
                <ul class="product-info-list mt-3">
                                <li class="fs-6">${description.slice(
                                  0,
                                  48
                                )}</li>
                                <li class="fs-6">Colour Shown: White/Black/White/Smoke Grey</li>
                                <li class="fs-6">Alias: ${alias}</li>
                                <li class="fs-6">Quantity: ${quantity} pairs</li>
                            </ul>
                </div>
        </div>`;
      document.querySelector(".detail-product").innerHTML = content;

      let related_content = "";
      for (let item of relatedProducts) {
        console.log("item: ", item);
        const { name, image, shortDescription, price } = item;
        related_content += `<div class="flex-column mt-4 item">
              <a href="./detail.html?productid=${
                item.id
              }"><img src="${image}" alt="hinh" class="w-100"/></a>
              <a href="./detail.html?productid=${item.id}"><p>${name}</p></a>
              <p class="shoes_name pb-0">Men's shoes</p>
              <p class="shoes_description">${shortDescription.slice(0, 50)}</p>
              <p>$ ${price}</p>
            </div>`;
      }
      document.querySelector(".product_list-content").innerHTML =
        related_content;
    })
    .catch((error) => {
      console.log("lỗi get given product: ", error);
    });
};
