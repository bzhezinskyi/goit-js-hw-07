import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const el = galleryItems.map(el => {
  const item = document.createElement('div');
  item.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = el.original;

  const image = document.createElement('img');
  image.src = el.preview;
  image.alt = el.description;
  image.dataset.sourse = el.original;
  image.classList.add('gallery__image');

  link.append(image);
  item.append(link);
  return item;
});

gallery.append(...el);

const galleryLinks = document.querySelectorAll('.gallery__link');
galleryLink(document.querySelectorAll('.gallery__link'));

function galleryLink(object) {
  for (const el of object) {
    el.addEventListener('click', e => {
      e.preventDefault();
    });
  }
}

// gallery.addEventListener('click', onGalleryLibkClick);
// const galleryLink = document.querySelector('.gallery__link');
// console.log('~ galleryLink', galleryLink);

// function onGalleryLibkClick() {
//   galleryLink.map(el => {
//     console.log(el);
//     el.addEventListener('click', e => {
//       e.preventDefault();
//     });
//   });
// }

// galleryLink.addEventListener('click', e => {
//   e.preventDefault();
// });

// gallery.addEventListener('click', selectImage);

// function selectImage(e) {
//   if (e.target.nodeName !== 'IMG') {
//     return;
//   }
//   const selectedImage = e.target.dataset.url;
//   console.log('~ selectedImage', selectedImage);
// }
