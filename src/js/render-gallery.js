import { refs } from '../index';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function renderGallery(data) {
  let lightbox = null;
  lightbox && lightbox.destroy();
  const markup = data
    .map(
      hit =>
        `<div class="photo-card">
      <a href=${hit.largeImageURL} >
      <img src=${hit.webformatURL} alt="${hit.tags}" loading="lazy" title="${hit.tags}"/></a>
      <div class="info">
      <p class="info-item">
      <b>Likes: ${hit.likes}</b>
      </p>
      <p class="info-item">
      <b>Views: ${hit.views}</b>
      </p>
      <p class="info-item">
      <b>Comments: ${hit.comments}</b>
      </p>
      <p class="info-item">
      <b>Downloads: ${hit.downloads}</b>
      </p>
      </div>
      </div>`
    )
    .join('');
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
  });
}
