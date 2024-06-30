const postUser = (user) => {
  return axios({
    method: "POST",
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    data: user,
  });
};
const getProduct = () => {
  return axios({
    method: "GET",
    url: "https://shop.cyberlearn.vn/api/Product",
  });
};
const getGivenProduct = (id) => {
  return axios({
    method: "GET",
    url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
  });
};
const putUser = () => {
  console.log("updating user!");
};
const deleteUser = () => {
  console.log("deleting user!");
};
