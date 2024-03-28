import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import Router, { useRouter } from 'next/router'
import ANMUSER from './anm-user'
import Lottie from 'lottie-web'

export default function New() {
  const [animationData, setAnimationData] = useState(false);
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

    fetchUserData();
  }, [router]);



  return (
    <div className="container">
      {isLigin ? (<>
      <div className="row">
        <div className="col-5">
          <input
            className="input"
            placeholder="نام آگهی"
            value={name}
            onChange={e => setName(e.target.value)}
            ></input>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <input
            className="input"
            placeholder="دسته بندی"
            value={daste}
            onChange={e => setDaste(e.target.value)}
            ></input>
        </div>
      </div>
      {/* قیمت و شهر */}
      <div className="row">
        <div className="col-5">
          <input
            className="input"
            placeholder="قیمت"
            value={pric}
            onChange={e => setPric(e.target.value)}
          ></input>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <input
            className="input"
            placeholder="شهر"
            value={city}
            onChange={e => setCity(e.target.value)}
            ></input>
        </div>
      </div>
      {/**وضعیت و معاوضه */}
      <div className="row">
        <div className="col-5">
          <input
            className="input"
            placeholder="وضعیت"
            value={condition}
            onChange={e => setCondition(e.target.value)}
            ></input>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <input
            className="input"
            placeholder="معاوضه"
            value={transfree}
            onChange={e => setTransfree(e.target.value)}
            ></input>
        </div>
      </div>
      {/** */}
      <div className="row">
        <div className="col-5">
          <textarea
            className="input input-text"
            placeholder="توضیحات محصول و آگهی"
            value={text}
            onChange={e => setText(e.target.value)}
            ></textarea>
        </div>
        <div className="col-1"></div>
        <div className="col-5">
          <input
            className="input input-not-value"
            value={user.number}
            onChange={e => setNum(e.target.value)}
            ></input>
          <input
            className="input"
            placeholder="لینک عکس"
            value={img}
            onChange={e => setImg(e.target.value)}
          ></input>
          <button className="bttn-send-agahi" onClick={send}>
            ثبت آگهی
          </button>
        </div>
      </div>
      </>):(<>

      {animationData ? (<>
      <ANMUSER/>
      </>):(
        <>
        <ANMUSER />
        </>
      )}

      </>)}
    </div>
  )
}
