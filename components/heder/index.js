import React from 'react'
import { BsBellFill } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
import { IoMdSearch } from "react-icons/io";
import { useEffect,useState } from 'react';
import { useRouter } from "next/router";




export default function Hederadmin() {
  const router=useRouter()
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let token = localStorage.getItem("token");
        token = token.substring(1, token.length - 1);

        if (!token) {
          router.push("/singin");
          return;
        }

        const response = await fetch("/api/auth/me", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          const userData = await response.json();
          console.log("user data :",userData.data)

          setUser(userData.data);

          console.log("user :",user);
          if(userData.data.role!=="ADMIN"){
            router.push("/singin");
          }
        } else {
          console.log("res NO");
        }
      } catch (error) {
        console.error("Error:", error);
        router.push("/singin");
      }
    };

    fetchUserData();
  }, []);

  return (
<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-20 w-[1300px] mt-20 mx-10'>
    <div className='hover:cursor-not-allowed h-20 bg-orange-400  flex justify-center items-center shadow-2xl rounded-xl hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition duration-300 ease-in-out hover:scale-105'>
        <p className='block mb-5'>خوش آمدید</p>
        {user ? (
          <h1 className='block -mb-4 text-4xl'>{user.name}</h1>
        ):(
          <h1 className='block -mb-4 text-4xl'>بدون نام</h1>
        )}
    </div>
        <a href='/'>
    <div className='h-20 bg-[#656ED3] text-white rounded-xl flex justify-center items-center shadow-2xl hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition duration-300 ease-in-out hover:scale-105'>
            مشاهده صحفه اصلی
    </div>
        </a>

<div className='h-20text-[#656ED3] flex items-center'>
    <input className='w-80 h-14 ml-8 rounded-xl border-gray-900 border-x 
    shadow-2xl hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition duration-300 ease-in-out hover:scale-105
    '
    placeholder='جستوجو کنید...'
    >

    </input>
  <div className='group left-0 w-14 h-14 rounded-4xl bg-white justify-center items-center flex mr-5
  shadow-2xl hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition duration-300 ease-in-out hover:scale-105
  '>
    <div className='w-5 h-5 text-[#656ED3]'>
      <BsBellFill className='text-[#656ED3] w-full h-full'/>
    </div>
  </div>
</div>

</div>
  )
}

