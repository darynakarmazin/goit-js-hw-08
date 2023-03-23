// Описаний в документації
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

//  console.log(galleryItems);

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const galleryList = document.querySelector('.gallery');
const galleryListItems = createGaleryItem(galleryItems);

galleryList.insertAdjacentHTML('beforeend', galleryListItems);

function createGaleryItem(galleryItems) {
  const galleryItem = galleryItems
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li> `;
    })
    .join('');

  return galleryItem;
}

var lightbox = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
});
