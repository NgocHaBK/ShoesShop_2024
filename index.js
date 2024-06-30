function GetProductAPI() {
  getProduct()
    .then((res) => {
      console.log("get data successfully: ", res.data);
      productsArr = res.data.content;
      renderProducts();
    })
    .catch((err) => {
      console.log("error from get all data: ", err);
    });
}

GetProductAPI();
let productsArr = [];

const errorNotify = (param) => {
  const errors = {
    name: "Họ và tên chỉ chứa chữ cái, không chứa chữ số !",
    email: "Email của bạn chưa hợp lệ !",
    phone: "Nhập đúng định dạng số điện thoại !",
    password:
      "Mật khẩu phải từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt)",
    confpassword: "Mật khẩu không trùng khớp !",
    gender: "Vui lòng chọn giới tính !",
  };
  return errors[param];
};

const renderProducts = (renderedProducts = productsArr) => {
  try {
    let contents = "";
    console.log("data products: ", renderedProducts);

    for (let item of renderedProducts) {
      const { image, price, name, description } = item;
      const new_description = description.slice(0, 50);
      contents += `<div class="flex-column mt-4 item">
            <a href="./detail.html?productid=${item.id}"><img src="${image}" alt="hinh" class="w-100"/></a>
            <a href="./detail.html?productid=${item.id}"><p>${name}</p></a>
            <p class="shoes_name pb-0">Men's shoes</p>
            <p class="shoes_description">${new_description}</p>
            <p>$ ${price}</p>
          </div>`;
    }
    console.log("Generated HTML content: ", contents);

    const detailedProductsElement =
      document.getElementById("detailed_products");
    if (!detailedProductsElement) {
      throw new Error("Element with ID 'detailed_products' not found");
    }
    detailedProductsElement.innerHTML = contents;
    console.log("Products rendered successfully");
  } catch (error) {
    console.error("Error in renderProducts: ", error.message);
  }
};

const renderError = (span_tag, name) => {
  span_tag.innerHTML = errorNotify(name);
  console.log(errorNotify(name));
};

function handleSubmit(e) {
  console.log("bạn vào form");
  let user = new User();
  if (validateTong(user)) {
    postUser(user)
      .then((res) => {
        console.log("post thành công: ", res.data);
      })
      .catch((err) => {
        console.log("lỗi post user: ", err);
      });
  }
}
