import React from 'react'
import Listagahi from '@/components/list'
import Alert from '@/components/hoshdar';
import { useEffect,useState } from 'react';

export default function index() {
  const[list,setList]=useState([])

  useEffect(() => {
    const fetchagahis=  async () => {
      try{
        const response=await fetch('/api/shop')
        const data = await response.json()
        if(response.ok){
          setList(data)
        }else{
          console.log("agahis:","no")
        }
      }catch (error) {
        console.error("Error:", error);
      }
    };

    fetchagahis()
  }, [])
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
  return (
    <>
    <div className='grid grid-cols-8 place-items-center ml-2 mt-5'>
        <div className='col-span-1'>نام آگهی</div>
        <div className='col-span-1'>قیمت</div>
        <div className='col-span-1'>شهر</div>
        <div className='col-span-1'>دسته بندی</div>
        <div className='col-span-1'>مشاهده</div>
        <div className='col-span-1'>ویرایش</div>
        <div className='col-span-1'>حذف</div>
        <div className='col-span-1'>تصویر</div>
    </div>
    {list ? (
      <>
                        {list.slice().reverse().map((item) => (
                        <Listagahi key={2} {...item} />
                      ))}
                        </>    
    ):(
      <></>
    )}
    
    </>
  )
}
