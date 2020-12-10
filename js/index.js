/*
=========================
Navigation
=========================
*/
const navOpen = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav-list");

// Open and Close Navbar
navOpen.addEventListener("click", () => {
  const listHeight = navList.getBoundingClientRect().height;
  const containerHeight = navContainer.getBoundingClientRect().height;
  if (containerHeight === 0) {
    navContainer.style.height = `${listHeight}px`;
  } else {
    navContainer.style.height = "0px";
  }
});

// Fix Navbar
const navBar = document.querySelector(".navigation");
const topLink = document.querySelector(".goto-top");
window.addEventListener("scroll", () => {
  const navHeight = navBar.getBoundingClientRect().height;
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }

  // if (scrollHeight > 500) {
  //   topLink.classList.add("show");
  // } else {
  //   topLink.classList.remove("show");
  // }
});

// Smooth Scroll
const links = document.querySelectorAll(".scroll-link");
const linksContainer = document.querySelector(".nav-list");

links.forEach(link => {
  link.addEventListener("click", e => {
    // Prevent Default
    e.preventDefault();
    // Scroll to a specific spot
    const id = e.currentTarget.getAttribute("href").slice(1);
    const el = document.getElementById(id);

    const navHeight = navBar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixNav = navBar.classList.contains("fix-nav");
    let position = el.offsetTop - navHeight;

    if (navHeight > 82) {
      position = position + containerHeight;
    } else if (!fixNav) {
      position = position + navHeight + navHeight;
    }

    window.scrollTo({
      left: 0,
      top: position,
    });

    navContainer.style.height = "0";
  });
});

gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 1.5, y: -100 });
gsap.from(".hero p", { opacity: 0, duration: 1, delay: 2, x: -100 });
gsap.from(".hero .btn1", { opacity: 0, duration: 1, delay: 2.5, x: -20 });
gsap.from(".hero .btn2", { opacity: 0, duration: 1, delay: 2.5, x: 20 });
gsap.from(".nav-item", {
  opacity: 0,
  duration: 1,
  delay: 1.2,
  y: 30,
  stagger: 0.2,
});

AOS.init();
