import Notiflix from 'notiflix';
const axios = require('axios').default;

export default class NewApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchGallery() {
    return axios
      .get(
        `https://pixabay.com/api/?key=30799489-f6e21edc3306eb9c86baf04e6&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`
      )
      .then(response => {
        this.incrementPage();
        if (response.data.total === 0) {
          Notiflix.Notify.failure('Oops, there is no pictures with that name');
        }
        return response.data;
      });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
