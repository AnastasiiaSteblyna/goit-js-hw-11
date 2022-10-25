import './styles.css';
import Notiflix from 'notiflix';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchGallery } from './js/fetch-gallery';
import { renderGallery } from './js/render-gallery';

export const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const lightbox = new SimpleLightbox('.gallery a');

refs.searchForm.addEventListener('submit', createGalleryItemsOnSubmit);

refs.galleryContainer.addEventListener(`click`, e => {
  e.preventDefault();
});

function createGalleryItemsOnSubmit(e) {
  e.preventDefault();

  refs.galleryContainer.innerHTML = '';

  const searchName = e.currentTarget.elements.searchQuery.value.trim();

  if (searchName.length < 1) {
    Notiflix.Notify.warning('Please, add a word if you wish to find pictures');
  } else {
    return fetchGallery(searchName)
      .then(renderGallery)
      .catch(error => console.log(error));
  }

  refs.searchForm.reset();

  lightbox.refresh();
}
