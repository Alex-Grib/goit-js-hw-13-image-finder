import * as basicLightbox from 'basiclightbox';
import loadingImgUrl from '../images/loading.gif';

const loadingPlaceholder = basicLightbox.create(
  `<img src="${loadingImgUrl}"/>`
);

function bigImg(data) {
  return basicLightbox.create(`<img src="${data}"/>`);
}
export default { loadingPlaceholder, bigImg };