
// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    form.reset();
  });

  // Smooth scroll effect
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50,
          behavior: "smooth"
        });
      }
    });
  });
});

// JavaScript to handle scroll and active link highlighting
document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll("#navbar a");
    const sections = document.querySelectorAll("section");
    
    // Smooth scroll for navbar links
    navbarLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: target.offsetTop - 60, // Adjusting for fixed navbar height
                behavior: "smooth"
            });
        });
    });

    // Add scroll event listener to highlight the active section
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 60; // Adjust for navbar height
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset <= sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navbarLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === current) {
                link.classList.add("active");
            }
        });
    });
});

// Change navbar background color on scroll
window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Solid background after scroll
    } else {
        navbar.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Transparent background when at the top
    }
});

