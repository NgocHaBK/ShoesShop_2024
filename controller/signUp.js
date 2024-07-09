const redirectPage = function (link) {
  if (link) {
    location.href = link;
  } else {
    location.href = "./index.html";
  }
};
