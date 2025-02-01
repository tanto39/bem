// Бургер-меню
document.querySelector(".nav__burger").addEventListener("click", function () {
  this.classList.toggle("nav__burger_active");
  document.querySelector(".nav__list").classList.toggle("nav__list_visible");
});

// Сообщение
document.querySelector(".form__button").addEventListener("click", function(event) {
  event.preventDefault();
  document.querySelector(".form__message").classList.add("form__message_visible");
});

// Прокрутка
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("[data-scroll-to]");
  const sections = document.querySelectorAll("[data-section]");
  const header = document.querySelector(".header__fixed");

  const getTargetSection = (targetName) => {
    return Array.from(sections).find((section) => section.dataset.section === targetName);
  };

  const scrollToSection = (section) => {
    if (!section) return;

    const headerHeight = header.offsetHeight;
    const sectionTop = section.offsetTop - headerHeight;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });
  };

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetName = link.dataset.scrollTo;
      const targetSection = getTargetSection(targetName);

      if (targetSection) {
        scrollToSection(targetSection);
      }
    });
  });
});
