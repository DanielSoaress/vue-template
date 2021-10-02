//import swal from 'sweetalert2';

const alertSwal = (
  type = 'warning',
  title = null,
  message = null,
  cancelButtonText = 'Cancelar',
  confirmButtonText = 'Sim'
) => {
  switch (type) {
    case 'success':
      return ({
        type: 'success',
        title,
        text: message,
        showCancelButton: false,
        cancelButtonText,
        confirmButtonText
      })
        .then(() => true)
        .catch(() => false);

    case 'warning':
      return ({
        type: 'warning',
        title,
        text: message,
        showCancelButton: true,
        cancelButtonText,
        confirmButtonText
      })
        .then(() => true)
        .catch(() => false);

    case 'error':
      return ({
        type: 'error',
        title,
        text: message,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText,
        confirmButtonText
      })
        .then(() => true)
        .catch(() => false);
    default:
      break;
  }
};

export default alertSwal;
