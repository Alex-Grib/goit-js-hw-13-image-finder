import cardTpl from '../templates/card.hbs';
import getRefs from './get-refs';

const refs = getRefs();

function renderImageCards(data) {
  const markup = cardTpl(data);
  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}

function clearImageContainer() {
  refs.galleryContainer.innerHTML = '';
}

export default { renderImageCards, clearImageContainer };