var nav_link_in_the_header = document.querySelectorAll(
  ".nav_link_in_the_header"
);

var nav_link_in_the_nav_vertical = document.querySelectorAll(
  ".nav_link_in_the_nav_vertical"
);

function clickedNavLink(buttonClicked, location) {
  if (location == "header") {
    nav_link_in_the_header.forEach((link) => {
      link.addEventListener("click", () => {
        nav_link_in_the_header.forEach((l) => l.classList.remove("active")); // Remove de todos
        link.classList.add("active"); // Adiciona ao clicado
      });
    });
  } else {
    nav_link_in_the_nav_vertical.forEach((link) => {
      link.addEventListener("click", () => {
        nav_link_in_the_nav_vertical.forEach((l) =>
          l.classList.remove("active")
        ); // Remove de todos
        link.classList.add("active"); // Adiciona ao clicado
      });
    });
  }
}

for (let i = 0; i < nav_link_in_the_header.length; i++) {
  nav_link_in_the_header[i].addEventListener("click", (e) => {
    e.preventDefault();
    clickedNavLink(nav_link_in_the_header[i], "header");
  });

  nav_link_in_the_nav_vertical[i].addEventListener("click", (e) => {
    e.preventDefault();
    clickedNavLink(nav_link_in_the_nav_vertical[i], "nav_vertical");
  });
}
