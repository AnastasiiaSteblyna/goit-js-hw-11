import './styles/styles.css';

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

import NewApiService from './js/fetch-gallery';
import { renderGallery } from './js/render-gallery';

export const refs = {
  searchForm: document.querySelector('#search-form'),
  galleryContainer: document.querySelector('.gallery'),
  loadMoreBtn: document.querySelector('.load-more'),
};

const newApiService = new NewApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();
  refs.galleryContainer.innerHTML = '';

  newApiService.query = e.currentTarget.elements.searchQuery.value.trim();

  if ((newApiService.query = '')) {
    Notiflix.Notify.warning('You forgot to add text');
  }

  newApiService.resetPage();

  newApiService
    .fetchGallery()
    .then(renderGallery)
    .catch(error => console.log(error));

  refs.searchForm.reset();

  //   lightbox.refresh();
}

function onLoadMore() {}
