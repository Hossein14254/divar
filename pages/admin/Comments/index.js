import React from 'react'
import Commentadmin from '@/components/comment'
import { useEffect,useState } from 'react'
export default function index() {
  const [commentf , setCommentf]=useState([])
  const [numcomment , setNumcomment]=useState(0)
  const fetccomment=  async () => {
    try{
      const response=await fetch('/api/admin/comment')
      const data = await response.json()
      if(response.ok){
        const comments = data.data; // فرضاً اطلاعات مربوط به کامنت‌ها درون یک فیلد به نام "data" دریافت شده است
        console.log("comments: ", comments);  
        setCommentf(comments)  
        setNumcomment(comments.length)
        console.log((comments.length))
      }else{
        console.log("daste:","no")
      }
    }catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    fetccomment();
  },[])
  return (
    <>
    <div className='grid grid-cols-8 place-items-center ml-2 mt-5'>
        <div className='col-span-1'>نام کاربر</div>
        <div className='col-span-3'> کامنت</div>
        <div className='col-span-1'>مشاهده آگهی</div>
        <div className='col-span-1'>ویرایش</div>
        <div className='col-span-1'>حذف</div>
        <div className='col-span-1'>تاریخ کامنت</div>
    </div>{
      commentf ? (
        <>
    
        {Array.isArray(commentf) &&commentf.slice().reverse().map((item) => (
          <Commentadmin key={1} {...item} />
     ))}
 
          
        </>
      ):(
        <>بدون کامنت</>
      )
    }
    </>
  )
}
