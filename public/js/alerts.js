/* eslint-disable */

// Type is 'success' or 'error'
export const hideAlert = () => {
  const el = document.querySelector('.alert');
  // Best Practice trick to remove element from his parent
  if (el) el.parentElement.removeChild(el);
};

// Type is 'success' or 'error'
export const showAlert = (type, msg) => {
  const markup = `<div class="alert alert--${type}">${msg}</div>`;
  document.querySelector('body').insertAdjacentHTML('afterbegin', markup);
  window.setTimeout(hideAlert, 5000);
};
