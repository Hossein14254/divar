
import React from 'react'
import DasteAdmin from '@/components/daste'
import { useState ,useEffect} from 'react'
export default function index() {

  const [daste , setDaste]=useState("")
  const [dastes , setDastes]=useState("")

  const fetchagahis=  async () => {
    try{
      const response=await fetch('/api/admin/daste/get')
      const data = await response.json()
      if(response.ok){
        setDastes(data)
      
        console.log("تعداد داده‌ها:", data.length);
      }else{
        console.log("daste:","no")
      }
    }catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchagahis()
  }, [])
  async function send() {
    try {
      console.log(daste);
      const response = await fetch("/api/admin/daste/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ daste }), // تغییر اعمال شده است
      });
      if (response.ok) {
        console.log("ok");
        fetchagahis()
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  
  return (
    <>
    <div className='mt-10 mr-10'>
        <p>افزودن دسته جدید</p>
        <input   className='w-52 h-12 rounded-xl focus:bg-slate-100 focus:scale-105 transform duration-300' 
                    
        value={daste}
        onChange={e => setDaste(e.target.value)}
        placeholder='نام دسته بندی'></input>
        <button onClick={send}  className='mr-3 bg-[#656ED3] w-24  h-12 rounded-xl
         transition-transform 
         duration-300 transform hover:scale-105 text-white
        '>افزودن</button>
    </div>
    <div className='grid grid-cols-8 place-items-center ml-2 mt-5'>
        <div className='col-span-1'>نام دسته بندی</div>
        <div className='col-span-1'>تعداد آگهی ها</div>
        <div className='col-span-1'>تاریخ انتشار</div>
        <div className='col-span-1'>دسته مادر</div>
        <div className='col-span-1'>مشاهده</div>
        <div className='col-span-1'>ویرایش</div>
        <div className='col-span-1'>حذف</div>
        <div className='col-span-1'>تصویر</div>
    </div>
    {dastes ? (
      <>

        {Array.isArray(dastes) && dastes.slice().reverse().map((item) => (
             <DasteAdmin key={1} {...item} />
        ))}


        </>
    ):(
      <></>
    )}
    </>
  )
}
