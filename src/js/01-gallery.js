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

galleryLink(galleryLinks);

function galleryLink(object) {
  for (const el of object) {
    el.addEventListener('click', e => {
      e.preventDefault();
    });
  }
}

gallery.addEventListener('click', onGalleryImage);

function onGalleryImage() {
  console.log(event.target);

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.sourse}" width="800" height="600">
`);

  instance.show();
}
