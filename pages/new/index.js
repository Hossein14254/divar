import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Router, { useRouter } from 'next/router'
import ANMUSER from './anm-user'
import Lottie from 'lottie-web'

export default function New() {
  const [animationData, setAnimationData] = useState(false);
  const [dastes,setDastes]=useState([])
  const [x,setX]=useState(58)
  const [f,setF]=useState()
  const [step, setStep] = useState(1);
  const [citys,setCitys]=useState([])

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
  const fetchdaste=  async () => {
    try{
      const responsess=await fetch('/api/admin/daste/get')
      const data = await responsess.json()
      if(responsess.ok){
        setDastes(data)
      
      }else{
        console.log("daste:","no")
      }
    }catch (error) {
      console.error("Error:", error);
    }
  };
  
  setTimeout(() => {
    setAnimationData(true)
  }, 500);
  const router = useRouter();
  const [isLigin,setIsLogin]=useState(false)
  const [user, setUser] = useState([]);
  const [name, setName] = useState('')
  const [daste, setDaste] = useState('')
  const [pric, setPric] = useState('')
  const [city, setCity] = useState('')
  const [condition, setCondition] = useState('')
  const [transfree, setTransfree] = useState('')
  const [text, setText] = useState('')
  const [num, setNum] = useState('')
  const [img, setImg] = useState('')
  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const showAlert1 = () => {
    Swal.fire({
      icon: 'success',
      title: 'عملایت موفق',
    })
    {
      reloadPageAfterDelay()
    }
  }
  const showAlert2 = () => {
    Swal.fire({
      icon: 'error',
      title: 'عملایت نا موفق',
    })
  }
  const reloadPageAfterDelay = () => {
    setTimeout(() => {
      window.location.reload()
    }, 2000) // 2000 میلی‌ثانیه معادل با 2 ثانیه است
  }
  function send() {
    const Data = {
      name: name,
      daste: daste,
      pric: pric,
      city: city,
      condition: condition,
      transfree: transfree,
      text: text,
      num: num,
      img: img,
    }
    console.log(Data)
    fetch('/api/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Data),
    })
      .then(response => {
        if (response.ok) {
          console.log('دخیره شد')
          showAlert1()
        } else {
          console.error(response)
          console.log('دخیره نشد')
          showAlert2()
        }
      })
      .catch(error => {
        console.error('Error:', error)
      })
  }

  useEffect(() => {

    const fetchUserData = async () => {
      try {
        let token = localStorage.getItem("token");
        if(!token){
          setIsLogin(false)
          return 0;
        }
        token = token.substring(1, token.length - 1);

        const response = await fetch("/api/auth/me", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          setIsLogin(true)
          const userData = await response.json();
          console.log("user data :",userData.data)

          setUser(userData.data);



          console.log("user :",user);
        } else {
          console.log("res NO");
          //router.push("/signin");
        }
      } catch (error) {
        console.error("Error:", error);
        router.push("/signin");
      }

    }
    fetchagahis()
    fetchdaste()
    setF(x/4);
    fetchUserData();
  }, []);




  return (
    <div className='grid grid-cols-3'>
      <div className='col-span-1'>


<div class="w-300 h-12 bg-gradient-to-r mt-20 from-green-200 to-green-0 relative overflow-hidden rounded-full shadow-md">
    <div class="absolute top-0 left-0 h-full bg-blue-900 animate-pulse rounded-full" style={{width: `${step*9}%`}}></div>
    <div class="absolute top-0 left-0 h-full bg-green-400 animate-pulse rounded-full" style={{width: `${step*18}%`}}></div>
    <div class="absolute top-0 left-0 h-full bg-blue-900 animate-pulse rounded-full" style={{width: `${step*27}%`}}></div>
    <div class="absolute top-0 left-0 h-full bg-green-400 animate-pulse rounded-full" style={{width: `${step*33}%`}}></div>
</div>

<div className='flex w-full h-10 justify-center '>
    <h1 className='text-5xl mt-5'> {`${step*33}%`} </h1>
</div>

















      </div>
      <div className='col-span-2'>
        <>
        <div className="">
      {step === 1 ? (
        <>
            <div className="">
              <input
                className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 animate-pulse"
                placeholder="نام آگهی"
                value={name}
                onChange={e => setName(e.target.value)}
              ></input>
            </div>
            <div className="">
              <input
                className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 animate-pulse"
                placeholder="قیمت به تومان"
                value={pric}
                onChange={e => setPric(e.target.value)}
              ></input>
            </div>
            <div className="">
              <input
                className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 animate-pulse"
                placeholder="توضیحات کوتاه"
                value={text}
                onChange={e => setText(e.target.value)}
              ></input>
            </div>
            <div className='w-full justify-end'>
            <h1 className= 'w-24 h-12  text-slate-200 hover:text-slate-800'>
          <button  className='flex mt-4 w-24 h-12 items-center justify-center hover:cursor-not-allowed rounded-md transform transition duration-300 ease-in-out hover:scale-105  bg-slate-800 hover:bg-slate-200'>مرحله قبلی</button></h1>
            </div>
          <h1 className= 'w-24 h-12  text-slate-200 hover:text-slate-800'>

          <button onClick={handleNextStep} className='flex  w-24 h-12 items-center mt-4 justify-center rounded-md transform transition duration-300 ease-in-out hover:scale-105  bg-[#656ED3] hover:bg-slate-200'>مرحله بعدی</button></h1>
        </>
      ) : step === 2 ? (
        <>
<div className="">
  <select
    className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    value={daste}
    onChange={e => setDaste(e.target.value)}
  >
    <option value="" disabled>دسته بندی را انتخاب کنید</option>
    {dastes.map((item) => (
      <option key={1} value={item.daste}>{item.daste}</option>
    ))}
  </select>
</div>


<div className="">
  <select
    className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    value={city}
    onChange={e => setCity(e.target.value)}
  >
    <option value="" disabled> شهر را انتخاب کنید</option>
    {citys.map((item) => (
      <option key={1} value={item.city}>{item.city}</option>
    ))}
  </select>
</div>
            <div className='w-full justify-end'>
            <h1 className= 'w-24 h-12  text-slate-200 hover:text-slate-800'>
          <button  onClick={handlePrevStep}  className='flex mt-4 w-24 h-12 items-center justify-center  rounded-md transform transition duration-300 ease-in-out hover:scale-105  bg-slate-800 hover:bg-slate-200'>مرحله قبلی</button></h1>
            </div>
          <h1 className= 'w-24 h-12  text-slate-200 hover:text-slate-800'>

          <button onClick={handleNextStep} className='flex  w-24 h-12 items-center mt-4 justify-center rounded-md transform transition duration-300 ease-in-out hover:scale-105  bg-[#656ED3] hover:bg-slate-200'>مرحله بعدی</button></h1>
        </>
      ) :step===3? (
        <>

    <div className="">
      <select
        className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        value={transfree}
        onChange={e => setTransfree(e.target.value)}      >
        <option value="" disabled>  وضعیت معاوضه را انتخاب کنید.</option>
        <option value="بله">بله</option>
        <option value="خیر">خیر</option>
      </select>
    </div>
    <div className="">
      <select
        className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        value={condition}
        onChange={e => setCondition(e.target.value)}      >
        <option value="" disabled>  وضعیت کارکد را انتخاب کنید.</option>
        <option value="نو">نو</option>
        <option value="در حد نو">در حد نو</option>
        <option value="کارکرده">کارکرده</option>
        <option value="خراب">خراب</option>
      </select>
    </div>
        <div className="">
              <input
                className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 animate-pulse"
                placeholder="لینک تصویر"
                value={img}
                onChange={e => setImg(e.target.value)}
              ></input>
            </div>
        <div className='w-full justify-end'>
        <h1 className= 'w-24 h-12  text-slate-200 hover:text-slate-800'>
      <button  onClick={handlePrevStep} className='flex mt-4 w-24 h-12 items-center justify-center  rounded-md transform transition duration-300 ease-in-out hover:scale-105  bg-slate-800 hover:bg-slate-200'>مرحله قبلی</button></h1>
        </div>
      <h1 className= 'w-24 h-12  text-slate-200 hover:text-slate-800'>

      <button onClick={send} className='flex  w-24 h-12 items-center mt-4 justify-center rounded-md transform transition duration-300 ease-in-out hover:scale-105  bg-[#656ED3] hover:bg-slate-200'>ثبت آگهی</button></h1>
    </>
      ):(
        <>
          {/* دیگر فیلدها */}
          <p>اگهی شما ثبت شد</p>
        </>
      )}
    </div>
        </>
        </div>
      </div>
  )
}
