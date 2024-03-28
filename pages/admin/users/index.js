import React from 'react'
import Usersadmin from '@/components/users'
import { useEffect,useState } from 'react';
export default function index() {
  const [datas,setDatas]=useState([])
  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/auth/users", {
        method: "GET",
      });
  
      if (response.ok) {
        const data = await response.json(); // انتظار برای حل شدن Promise و دریافت داده‌ها
        setDatas(data.message)
        console.log(datas);

      } else {
        console.log("notuser !");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(()=>{
    fetchUserData();
  },[])
  return (
    <>
    <div className='grid grid-cols-8 place-items-center ml-2 mt-5'>
        <div className='col-span-1'>نام کاربر</div>
        <div className='col-span-1'>تلفن همراه</div>
        <div className='col-span-1'>تعداد آگهی ها</div>
        <div className='col-span-1'>نقش</div>
        <div className='col-span-1'>مشاهده</div>
        <div className='col-span-1'>ویرایش</div>
        <div className='col-span-1'>حذف</div>
        <div className='col-span-1'>تصویر</div>
    </div>
    {datas ? (
      <>
                        {datas.slice().reverse().map((item) => (
                        <Usersadmin key={2} {...item} />
                      ))}
                        </>    
    ):(
      <></>
    )}
    </>
  )
}
