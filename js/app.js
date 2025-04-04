const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

// const listOfGallery = document.querySelector(".gallery__list");
// const fullGalelery = images.map(image => {
//   return ` <li data-info="${image.original}" class="galery__item">
//             <img class="galery__img" src="${image.original}" alt="${image.description}">
//         </li>`;
// })
// listOfGallery.innerHTML = fullGalelery.join("");
// const galleryElement = document.querySelector(".gallery__list");
// const backdrop = document.querySelector(".backdrop");
// const closeElement = document.querySelector(".modal__close");
// const modal = document.querySelector(".modal")
// listElement.addEventListener("click", (event) =>{
//   if (event.target.nodeName === "IMG") {
//     backdrop.classList.remove("is-hidden");
//     const itemImg = event.target.parentElement.dataset.info;
//         const itemAlt = event.target.alt;  
//         document.querySelector(".modal").innerHTML = `<img src="${itemImg}" alt="${itemAlt}">`;
//     }
// })

// modal.addEventListener("click", () => {
//   backdrop.classList.add("is-hidden");
// });


const listofGallery = document.querySelector(".gallery__list");

const fullImages = images.map(image => {
    return `
        <li data-info="${image.original}" class="gallery__item">
            <img class="gallery__img" src="${image.original}" alt="${image.description}">
        </li>`;
});



listofGallery.innerHTML = fullImages.join("");
const listElement = document.querySelector(".gallery__list");
const backdrop = document.querySelector(".backdrop");
const closeButton = document.querySelector(".modal__close");
const modal = document.querySelector(".modal")
listElement.addEventListener("click", (event) => {
    if (event.target.nodeName === "IMG") {
        backdrop.classList.remove("is-hidden");
        const itemImg = event.target.parentElement.dataset.info;
        const itemAlt = event.target.alt;  

        document.querySelector(".modal").innerHTML = `<img src="${itemImg}" alt="${itemAlt}">`;
    }
});



modal.addEventListener("click", () => {
    backdrop.classList.add("is-hidden");
});