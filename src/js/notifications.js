import { error, notice, info } from '@pnotify/core';

function errorNotFound() {
  error({
    title: 'Oops!',
    text: 'No images found :( Please enter another query!',
    delay: 1500,
  });
}

function errorNotice() {
  notice({
    title: 'Well..',
    text: 'Something went wrong. Please reload a page.',
    delay: 3000,
  });
}

function errorInfo() {
  info({
    title: 'You found all pictures that you want!',
    text: 'No more pictures for your search query.',
    delay: 3000,
  });
}

function errorNoQuery() {
  info({
    title: 'Empty query!',
    text: 'Please enter a query.',
    delay: 1500,
  });
}

export default { errorNotFound, errorNotice, errorInfo, errorNoQuery };