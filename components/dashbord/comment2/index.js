import React from 'react'
import { useEffect , useState} from 'react'

export default function comment({_id,comment,iduser,idagahi,createdAt}) {
    const [name,setName]=useState([])
    const [user,setUser]=useState("")
    useEffect(()=>{
              setUser({iduser}.iduser)
    },[])
  return (
    <div className='bg-white h-auto rounded-2xl my-3 shadow-lg transition-transform duration-300 transform hover:scale-105'>
        
        <div className='flex items-center'>
            <div className='inline-block-block mx-4 mt-4 w-6 h-6 rounded-lg bg-[#656ED3]'></div>
            {user ? (
        <>
            <h1 className='text-2xl -mb-7 mx-4 inline-block'>{user.name}</h1>
            </>
            ) : (
            <>
                <h1 className='text-2xl -mb-7 mx-4 inline-block'>کاربر حذف شده</h1>
            </>
        )}

        </div>
        
        <div className='grid grid-cols-1 mt-4'>
            <div className='flex justify-center col-span-1'>
                <div className='block'>
                    <p> {comment}</p>
                </div>
            </div>

            
        </div>


        <a href={`/shop/${idagahi}`} className='flex justify-center my-3 items-center'>
            <button className='h-10 bg-[#656ED3] mb-3 text-white rounded-lg w-52'>مشاهده اگهی </button>
        </a>




    </div>
  )
}
