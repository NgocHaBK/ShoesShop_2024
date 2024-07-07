const setItem_ = (name, item) => {
  localStorage.setItem(name, JSON.stringify(item));
};
const getItem_ = (name = "favItem") => {
  return JSON.parse(localStorage.getItem(name));
};
