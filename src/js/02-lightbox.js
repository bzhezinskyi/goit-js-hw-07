import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const el = galleryItems.map(el => {
  const item = document.createElement('a');
  item.classList.add('gallery__item');
  item.href = el.original;

  const image = document.createElement('img');
  image.src = el.preview;
  image.alt = el.description;
  image.classList.add('gallery__image');

  item.append(image);
  return item;
});

gallery.append(...el);

var lightbox = new SimpleLightbox('.gallery a', {
  caption: 'sss',
});
console.log('~ lightbox', lightbox);
console.log('~ lightbox', lightbox);
