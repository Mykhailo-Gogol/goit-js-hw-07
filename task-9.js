// Нодліст зоозбражень
const images = document.querySelectorAll(".js-lazy-load img");

// Додає марджин обзерверу
const options = {
  rootMargin: "-50px",
};

// Відтворює при вході в viewport
const onEntry = (entries, observer) => {
  console.log("Observed");

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.dataset.lazy;

      image.src = src;
      image.classList.add("show");
      observer.unobserve(image);
    }
  });
};

// Створює обзервер
const io = new IntersectionObserver(onEntry, options);

// Підключає обзервер
images.forEach((image) => io.observe(image));
