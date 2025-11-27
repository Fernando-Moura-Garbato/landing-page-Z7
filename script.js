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
document.querySelectorAll('#left-example-text h1, #left-example-text p').forEach((el) => observer.observe(el));
document.querySelectorAll('#right-example-text h1, #right-example-text p').forEach((el) => observer.observe(el));
document.querySelectorAll('#home div img, #home-side-text-one, #home-side-text-two').forEach((el) => observer.observe(el));

function abrirWhatsapp() {
    window.open("https://wa.me/5545998372274", "_blank");
}

function abrirEmail() {
    window.location.href = "mailto:fernandogarbato@gmail.com"
}


