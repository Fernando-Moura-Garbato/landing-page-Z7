const options = {
  rootMargin: "0px",
  scrollMargin: "0px",
  threshold: 1.0,
}



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      // If you want the animation only once:
      //observer.unobserve(entry.target);
    } else {
        entry.target.classList.remove("active")
    }
  });
});

// Observe all elements with class="reveal"
document.querySelectorAll('.side-text p').forEach((el) => observer.observe(el));