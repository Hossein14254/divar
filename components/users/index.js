import React from 'react'
import Swal from 'sweetalert2';
export default function Usersadmin({_id,name,number,role}) {
  
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
            handleDelete()
            Swal.fire(
              'عملیات موفقیت‌آمیز بود!',
              'شما گزینه "بله" را انتخاب کرده‌اید.',
              'success'
            );
            window.location.reload();

          } else if (result.dismiss === Swal.DismissReason.cancel) {
            Swal.fire(
              'عملیات لغو شد',
              'شما گزینه "خیر" را انتخاب کرده‌اید.',
              'error'
            );
          }
        });
      }
      const handleDelete = async () => {
        fetch('/api/auth/users', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ _id }), // تغییر این خط
        })
          .then(response => {
            if (response.ok) {
              console.log('حذف شد')
            } else {
              console.log("حذف نشد")
            }
          })
          .catch(error => {
            console.error('Error:', error)
          })
      }
  return (
    <>
<div className='grid grid-cols-8 place-items-center ml-2 mt-3 bg-slate-300'>
    <div className='col-span-1'>{name}</div>
    <div className='col-span-1'>{number}</div>
    <div className='col-span-1'>2</div>
    <div className='col-span-1'>{role}</div>
    <div className='col-span-1'>
        <button className='w-24 h-12 bg-[#52567d] text-white shadow-lg 
        duration-300 hover:scale-105 rounded-xl hover:cursor-not-allowed'
        >مشاهده</button>
    </div>
    <div className='col-span-1'>
        <button className='hover:cursor-not-allowed  w-24 h-12 bg-[#656ED3] text-white shadow-lg transition-transform 
        duration-300 transform hover:scale-105 rounded-xl'>ویرایش</button>
    </div>
    <div className='col-span-1'>
        <button onClick={showConfirmation} className='w-24 h-12 bg-red-500 text-white shadow-lg transition-transform 
        duration-300 transform hover:scale-105 rounded-xl'>حذف</button>
    </div>
    <div className='col-span-1'>
        <img className='w-full h-auto rounded-xl' src='/444.jpg' alt='بدون تصویر' />
    </div>
</div>

    </>
  )
}
