window.onload = () => {
  const urlParam = new URLSearchParams(window.location.search);
  const myparam = urlParam.get("productid");
  //http://localhost:8080/login?key=value
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
        id,
      } = res.data.content;
      const new_item = {
        image: image,
        name: name,
        price: price,
        id: id,
      };
      console.log("newItem: ", new_item);
      let sizeButtons = "";
      for (let value of size) {
        sizeButtons += `<button class="py-3 px-3 rounded  duration-300 transition size-button">${value}</button>`;
      }
      content += `<div class="row py-20">
            <div class="left col-sm-12 col-md-12 col-12 col-lg-7" >
                <div class= "img-card text-center mr-4" style="background-color: #f5f5f5;object-fit:contain"  >  
            <img src="${image}" class="mx-auto" />
                </div>
                </div>
                <div class="right col-sm-12 col-md-12 col-12 col-lg-5" >
                <h3 style="color:#f15e2c">${name}</h3>
                <p class="mb-2">Men's shoes</p>
                <p class="pt-0">$ ${price}</p>
                <p>Select Size</p>
                <div class="grid grid-cols-3 gap-2 mb-2 _button_group">
                    ${sizeButtons}
                </div>
                <button class=" text-white w-100 py-3 px-5 fw-bold rounded hover:opacity-80" id="btn-add">Add To Bag</button>
                <button class="w-100 py-3 px-5 mt-2 fw-bold rounded " id="btn-addfav">Add To Favorite</button>
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
      document
        .getElementById("btn-addfav")
        .addEventListener("click", () => addFavItem(new_item));
      document
        .getElementById("btn-add")
        .addEventListener("click", () => addCartItem(new_item));
      let related_content = "";
      for (let item of relatedProducts) {
        console.log("item: ", item);
        const { name, image, shortDescription, price } = item;
        related_content += `<div class="flex-column mt-4 mr-4 item">
              <a href="./detail.html?productid=${
                item.id
              }" ><img src="${image}" alt="hinh" style="background-color: #f5f5f5;" class="w-100"/></a>
              <a href="./detail.html?productid=${
                item.id
              }"><p style="color:#f15e2c">${name}</p></a>
              <p class="shoes_name pb-0 mb-2" style="color:#173d58">Men's shoes</p>
              <p class="shoes_description">${shortDescription.slice(0, 50)}</p>
              <p class="pt-0">$ ${price}</p>
            </div>`;
      }
      document.querySelector(".product_list-content").innerHTML =
        related_content;
    })
    .catch((error) => {
      console.log("lỗi get given product: ", error);
    });
};
