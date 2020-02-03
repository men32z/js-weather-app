import Swal from 'sweetalert2';
import search from './js/search';

const query = document.querySelector('#search-text');

document.querySelector('#temp').addEventListener('click', () => search.toggle());

document.querySelector('#search').addEventListener('click', () => {
  search.search(query.value).catch(err => {
    Swal.fire({
      title: 'Error!',
      text: err,
      icon: 'error',
      confirmButtonText: 'Cool',
    });
  });
});
document.querySelector('#search-text').addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    search.search(query.value).catch(err => {
      Swal.fire({
        title: 'Error!',
        text: err,
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    });
  }
});
