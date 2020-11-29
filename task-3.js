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
rootContainerRef.style.paddingTop = "50px";
rootContainerRef.style.paddingBottom = "50px";
rootContainerRef.style.listStyle = "none";
rootContainerRef.style.display = "flex";
rootContainerRef.style.justifyContent = "center";
rootContainerRef.style.alignItems = "center";
rootContainerRef.style.backgroundColor = "tomato";

for (let i = 0; i < images.length; i++) {
  let { url, alt } = images[i];
  let itm = document.createElement("li");
  itm.style.marginRight = "20px";
  let img = document.createElement("img");
  img.setAttribute("src", url);
  img.setAttribute("alt", alt);
  img.style.width = "200px";
  img.style.height = "auto";
  itm.appendChild(img);
  rootContainerRef.appendChild(itm);
}
