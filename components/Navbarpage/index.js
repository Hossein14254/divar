import React from 'react'
import { useState,useEffect } from 'react';

export default function Navbarpage() {
    const [isuser, setIsuser] = useState(false);
    const [isadmin,setIsadmin]=useState(false)
    useEffect(() => {
        let token = localStorage.getItem("token");
        if(token){
            token = token.substring(1, token.length - 1);
        }

    
        const medata = async () => {
            try {
                let token = localStorage.getItem("token");
                token = token.substring(1, token.length - 1);
                if (!token) {
                    console.error("توکن موجود نیست.");
                    return;
                }
        
                const response = await fetch("/api/auth/me", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });
        
                if (!response.ok) {
                    console.log("دریافت داده با مشکل مواجه شد.");
                }
        
                const data = await response.json();
                console.log("داده دریافت شد:", data);
                setIsuser(true)
                if(data){
                  if(data.data.role!="USER"){
                    setIsadmin(true)
                    console.log("is admin: ",isadmin)
                  }
                }
            } catch (error) {
                console.error("خطا:", error);
            }
        };
      
      
    
        medata();
      }, []);
      const removeTokenFromLocalStorage = () => {
        try {
          localStorage.removeItem('token');
          window.location.reload();
    
          console.log('Token removed from localStorage successfully');
        } catch (error) {
          console.error('Error removing token from localStorage:', error.message);
        }
      };
  return (
    <div className='text-white'>
        <div className='w-full h-20 bg-slate-600 grid grid-cols-2'>
            <div className='col-span-1 grid grid-cols-2'>
                    <div className='col-span-1'>
                        <div class='h-24 mx-auto flex justify-center'>
                            <h1 className='mx-1 my-6 text-2xl font-bold text-white'>G Divar</h1>
                            <img src='/logo 1.png' className='w-10 h-10 my-3 mx-3'></img>
                        </div>
                    </div>
                    <div className='col-span-1 flex items-center mb-4 [&>*]:mx-5 justify-start'>
                        <a href='/' className='hover:text-gray-400  transform transition duration-300 ease-in-out hover:scale-105'>
                        <div>
                            صحفه اصلی
                        </div>
                        </a>
                        <a href='/new' className='hover:text-gray-400  transform transition duration-300 ease-in-out hover:scale-105'>
                        <div>
                             ثبت آگهی
                        </div>
                        </a>
                        <a href='/about' className='hover:text-gray-400  transform transition duration-300 ease-in-out hover:scale-105'>
                        <div>
                            درباره ما 
                        </div>
                        </a>
                    </div>
            </div>
            <div className='flex col-span-1 items-center mb-4 justify-end '>
                    <div className='flex'>
                        {isadmin? (<>
                            <div className=' mx-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-800 bg-slate-200 text-slate-800 hover:text-white'>
                            <a href='/admin'>
                                <button className='w-20  h-10 my-auto hover:text-gray-200 group '> پنل ادمین </button>
                            </a>
                        </div>  
                        </>):(<>
                            <div className=' mx-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-800 bg-slate-200 text-slate-800 hover:text-white'>
                               <a href='/'>
                                <button className='w-20  h-10 my-auto'> پشتیبانی </button>
                               </a>
                            </div>  
                        </>)}
                        {isuser ? (<>
                            <div className=' mx-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 bg-slate-800 hover:bg-slate-200 hover:text-slate-800'>
                            <a href='/dashboard'>
                                <button className='w-20  h-10 my-auto'>داشبورد</button>
                            </a>
                        </div>
                        <div className=' mx-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-800 bg-slate-200 text-slate-800 hover:text-white'>
                            <button onClick={removeTokenFromLocalStorage} className='w-20  h-10 my-auto'> خروج </button>
                        </div>  
                        </>):(<>           
                      <div className=' mx-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 bg-slate-800 hover:bg-slate-200 hover:text-slate-800'>
                            <a href='/singin'>
                                <button className='w-20  h-10 my-auto'> ورود </button>
                            </a>
                        </div>
                        <div className=' mx-4 rounded-md transform transition duration-300 ease-in-out hover:scale-105 hover:bg-slate-800 bg-slate-200 text-slate-800 hover:text-white'>
                                <a href='/singup'> 
                                    <button className='w-20  h-10 my-auto'> ثبت نام </button>
                                </a>
                        </div>  
                        </>)}
                    </div>
            </div>
        </div>
    </div>
  )
}
