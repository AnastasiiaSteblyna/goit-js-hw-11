import Notiflix from 'notiflix';
const axios = require('axios').default;

export function fetchGallery(searchName) {
  return axios
    .get(
      `https://pixabay.com/api/?key=30799489-f6e21edc3306eb9c86baf04e6&q=${searchName}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`
    )
    .then(response => {
      if (response.data.total === 0) {
        Notiflix.Notify.failure('Oops, there is no pictures with that name');
      }
      return response.data;
    });
}
