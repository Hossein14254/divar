import React from 'react'
import Swal from 'sweetalert2';
import { useEffect,useState } from 'react';

export default function Comment({_id,comment,iduser,idagahi,createdAt}) {
  const [name,setName]=useState([])
  const [user,setUser]=useState("")
  function send(){
  }
  console.log()
  useEffect(()=>{
            setUser({iduser}.iduser)
  },[])
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
      const [nums, setNums] = useState(0)
      const [data, setData] = useState([])
      const [isLoding, setIsloding] = useState(true)
      const [agahi,setAgahi]=useState(0)
      const handleDelete = async () => {
        fetch('/api/admin/comment', {
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
  {user  ?(<>
    <div className='col-span-1'>{user.name}</div>
  </>):(<>
    <div className='col-span-1  text-red-500'>کاربر کامنت حذف شده</div>
  </>) }
    <div className='col-span-3'>{comment} </div>

    <div className='col-span-1'>
      <a href={`/shop/${idagahi}`}>
        <button className='w-24 h-12 bg-[#656ED3] text-white shadow-lg transition-transform 
        duration-300 transform hover:scale-105 rounded-xl'>مشاهده</button>
        </a>
    </div>
    <div className='col-span-1'>
        <button onClick={send} className='w-24 h-12 bg-[#656ED3] text-white shadow-lg transition-transform 
        duration-300 transform hover:scale-105 rounded-xl hover:cursor-not-allowed'>ویرایش</button>
    </div>
    <div className='col-span-1'>
        <button onClick={showConfirmation} className='w-24 h-12 bg-red-500 text-white shadow-lg transition-transform 
        duration-300 transform hover:scale-105 rounded-xl'>حذف</button>
    </div>
    <div className='col-span-1'>
      <p>{createdAt}</p>
    </div>
</div>

    </>
  )
}
