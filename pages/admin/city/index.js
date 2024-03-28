
import React from 'react'
import CityAdmin from '@/components/city'
import { useEffect ,useState } from 'react'
export default function index() {
  
  const [city , setCity]=useState("")
  const [islod ,setIslod]=useState(false)
  const [citys , setCitys]=useState("")

  const fetchagahis=  async () => {
    try{
      const response=await fetch('/api/admin/city/get')
      const data = await response.json()
      if(response.ok){
        console.log("daste:",data)
        setCitys(data)
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
      console.log(city);
      const response = await fetch("/api/admin/city/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city }), // تغییر اعمال شده است
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
        <p>افزودن شهر جدید</p>
        <input   className='w-52 h-12 rounded-xl focus:bg-slate-100 focus:scale-105 transform duration-300'
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder='نام  شهر'></input>
        <button  onClick={send} className='mr-3 bg-[#656ED3] w-24  h-12 rounded-xl
         transition-transform 
         duration-300 transform hover:scale-105 text-white
        '>افزودن</button>
    </div>
    <div className='grid grid-cols-8 place-items-center ml-2 mt-5'>
        <div className='col-span-1'>نام شهر</div>
        <div className='col-span-1'>تعداد آگهی ها</div>
        <div className='col-span-1'>تاریخ انتشار</div>
        <div className='col-span-1'>نام استان</div>
        <div className='col-span-1'>مشاهده</div>
        <div className='col-span-1'>ویرایش</div>
        <div className='col-span-1'>حذف</div>
        <div className='col-span-1'>تصویر</div>
    </div>
    {citys ? (
        <>
        {Array.isArray(citys) && citys.slice().reverse().map((item) => (
          <CityAdmin key={1} {...item} />
          ))}
        </>
    ):(
      <></>
    )}
    
    </>
  )
}
