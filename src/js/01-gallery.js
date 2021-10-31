// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGallery(galleryItems);

function createGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return ` 
      <li>
      <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="Image ${description}" />
    </a>
    </li>`;
    })
    .join('');
}
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.on('show.simplelightbox');
console.log(galleryItems);
