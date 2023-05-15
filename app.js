const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animation-show')
    } else {
      entry.target.classList.remove('animation-show')
    }
  })
})

const hiddenElements = document.querySelectorAll('.animation-hidden')
const hiddenElementsRight = document.querySelectorAll('.animation-hidden-right')
hiddenElements.forEach((el) => observer.observe(el))
hiddenElementsRight.forEach((el) => observer.observe(el))

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav ul li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};