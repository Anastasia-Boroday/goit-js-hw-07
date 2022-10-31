import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const imageRef = galleryItems.map(({preview, original, description}) => 
    
    `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`).join("");

galleryRef.insertAdjacentHTML('beforeend', imageRef);


const lightbox = new SimpleLightbox('.gallery a',{ captionsData: 'alt', captionDelay: 250});
