const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const rootContainerRef = document.querySelector("#gallery");
rootContainerRef.classList.add("gallery");

images.forEach((e, index) => {
  const { url, alt } = images[index];

  const listItem = `<li><img src=${url} alt=${alt} width = "200" height = "auto" ></li>`;
  rootContainerRef.insertAdjacentHTML("beforeend", listItem);
});

/*
 * REFACTORING: Замінив let на const
 * REFACTORING: Замінив for на функциональний метод forEach
 * REFACTORING: Виконав завдання з одну операцію
 */
