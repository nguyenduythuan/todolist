import { toast } from 'react-toastify';

export const toasError = error => {
  let message = null;
  if (error && typeof error === 'object' && error.message) {
    ({ message } = error);
  }
  if (message !== null && typeof message !== 'undefined' && message !== '') {
    toast.error(message);
  }
};
