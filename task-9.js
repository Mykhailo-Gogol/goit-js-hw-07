const images = document.querySelectorAll(".js-lazy-load img");

const options = {
  rootMargin: "-50px",
};

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

const io = new IntersectionObserver(onEntry, options);

images.forEach((image) => io.observe(image));
