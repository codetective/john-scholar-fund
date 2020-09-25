window.addEventListener('DOMContentLoaded', () => {
  //eslint-disable-next-line
    //  AOS.init();
     const nav = document.querySelector("nav");
     window.addEventListener("scroll", () => {
       nav.classList.toggle("nav-white", window.scrollY > 0);
     });

     const sidebar = document.querySelector(".sidebar-pane");
     const overlay = document.querySelector(".sidebar-overlay");
     const sidebarToggle = document.querySelector("button.navbar-toggler");

     sidebarToggle.addEventListener("click", () => {
       sidebar.classList.toggle("sidebar-pane-show");
       overlay.classList.toggle("overlay");
     });

     overlay.addEventListener("click", () => {
       sidebar.classList.toggle("sidebar-pane-show");
       overlay.classList.toggle("overlay");
     });
})