import Swal from 'sweetalert2';

function showConfirmation() {
  Swal.fire({
    title: 'آیا مطمئن هستید؟',
    text: "این عملیات قابل برگشت نیست!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'بله',
    cancelButtonText: 'خیر'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'عملیات موفقیت‌آمیز بود!',
        'شما گزینه "بله" را انتخاب کرده‌اید.',
        'success'
      );
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'عملیات لغو شد',
        'شما گزینه "خیر" را انتخاب کرده‌اید.',
        'error'
      );
    }
  });
}

function Alert() {
  return (
    <button onClick={showConfirmation}>نمایش هشدار با گزینه‌ها</button>
  );
}

export default Alert;
