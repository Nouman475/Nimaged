let title = document.getElementById("product_title");
let product_url = document.getElementById("product_url");
let allItems = document.getElementsByClassName("product_img");
let numOfItems = allItems.length;
let items;
items = [
  {
    name: "olive oil",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  },
  {
    name: "stylish Joggers",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  },
  {
    name: "Handbag",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  },
  {
    name: "Wall Decor",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  },
  {
    name: "T900 Smart watch",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  },
  {
    name: "Unisex Joggers",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  },
  {
    name: "Mens Facewash",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  },
  {
    name: "Handbag",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  },
  {
    name: "Wall lamp",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  },
  {
    name: "Travel charger",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  },
  {
    name: "Gaming Controller",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  },
  {
    name: "Back pack",
    url: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  },
];

var _loop_1 = function (i) {
  allItems[i].addEventListener("click", function () {
    title.innerText = items[i].name;
    product_url.setAttribute("src", items[i].url);
  });
};
for (var i = 0; i <= numOfItems; i++) {
  _loop_1(i);
}

/*SORTING products*/

function showAll() {
  for (let i = 0; i <= numOfItems; i++) {
    allItems[i].classList.remove("hidden");
  }
}

function showShoes() {
  for (let i = 0; i <= numOfItems; i++) {
    allItems[i].classList.add("hidden");
    if ((i === 1) | (i === 5)) {
      allItems[i].classList.remove("hidden");
    }
  }
}
function showBags() {
  for (let i = 0; i <= numOfItems; i++) {
    allItems[i].classList.add("hidden");
    if ((i === 2) | (i === 7) | (i === 11)) {
      allItems[i].classList.remove("hidden");
    }
  }
}
function showElectronics() {
  for (let i = 0; i <= numOfItems; i++) {
    allItems[i].classList.add("hidden");
    if ((i === 4) | (i === 8) | (i === 9)) {
      allItems[i].classList.remove("hidden");
    }
  }
}
function showGaming() {
  for (let i = 0; i <= numOfItems; i++) {
    allItems[i].classList.add("hidden");
    if (i === 10) {
      allItems[i].classList.remove("hidden");
    }
  }
}
