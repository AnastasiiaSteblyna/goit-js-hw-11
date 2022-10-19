import './style.css';

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

refs.searchForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const searchName = e.currentTarget.elements.searchQuery.value;

  refs.searchForm.reset();

  if (searchName.length < 1) {
    Notiflix.Notify.warning('Enter country, please');
    refs.galleryContainer.innerHTML = '';
  } else {
    return fetchGallery(searchName)
      .then(renderGallery)
      .catch(error => console.log(error));
  }
}

new SimpleLightbox(`.gallery a`, { captionDelay: 250 });
