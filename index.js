var nav_link_in_the_header = document.querySelectorAll(
  ".nav_link_in_the_header"
);

var nav_link_in_the_nav_vertical = document.querySelectorAll(
  ".nav_link_in_the_nav_vertical"
);

function action(currentButton, type) {
  if (type == "header") {
    nav_link_in_the_header.forEach((l) => l.classList.remove("active"));
  } else {
    nav_link_in_the_nav_vertical.forEach((l) => l.classList.remove("active"));
  }

  currentButton.classList.add("active");
}

nav_link_in_the_header.forEach((link) => {
  link.addEventListener("click", () => action(link, "header"));
});

nav_link_in_the_nav_vertical.forEach((link) => {
  link.addEventListener("click", () => action(link, "nav_vertical"));
});
