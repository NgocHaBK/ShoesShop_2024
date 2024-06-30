const validateTong = (user) => {
  let isvalid = 1;
  let inputsUser = document.querySelectorAll(
    "#formSubmit input,#formSubmit select"
  );
  for (let inputUser of inputsUser) {
    let { name, value, id } = inputUser;
    if (name !== "confpassword") user[name] = value.trim();
    let span_tag = document
      .getElementById(id)
      .parentElement.querySelector(".error-notify");

    if (name === "name" && !validateOnlyLetters(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "email" && !validateEmail(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "phone" && !validatePhoneNumber(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "password" && !validatePassword(value)) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else {
      span_tag.innerHTML = "";
    }
    if (name === "confpassword" && value !== user.password) {
      isvalid = 0;
      renderError(span_tag, name);
      continue;
    } else span_tag.innerHTML = "";
  }
  if (isvalid) {
    for (let inputUser of inputsUser) {
      inputUser.value = "";
    }
    return 1;
  }

  return 0;
};

const validateOnlyLetters = (value) => {
  if (value.trim() === "undefined") return 0;
  value = value.trim();
  // Biểu thức chính quy kiểm tra chỉ chứa chữ cái
  const regex = /^[A-Za-z]+$/;
  return regex.test(value);
};
const validateEmail = (email) => {
  if (email.trim() === "undefined") return 0;
  email = email.trim();
  // Biểu thức chính quy kiểm tra tính hợp lệ của email
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
function validatePhoneNumber(phoneNumber) {
  // Regular expression to match Vietnamese phone numbers
  const regex = /^(0[35789]\d{8}|0\d{2}\d{7})$/;
  return regex.test(phoneNumber);
}
const validatePassword = (password) => {
  if (password.trim() === "undefined") return 0;
  // Biểu thức chính quy kiểm tra tính hợp lệ của mật khẩu
  const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*\W).{6,10}$/;
  return regex.test(password);
};
