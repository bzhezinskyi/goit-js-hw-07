import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const el = galleryItems.map(el => {
  const image = document.createElement('img');
  image.src = el.preview;
  image.alt = el.description;
  image.classList.add('gallery__image');

  const item = document.createElement('a');
  item.classList.add('gallery__item');
  item.href = el.original;
  item.dataset.alt = image.alt;

  item.append(image);
  return item;
});

gallery.append(...el);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
