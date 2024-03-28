import { useState, useEffect } from 'react'
import Head from 'next/head'
import Swal from 'sweetalert2'
import { Container, Form, Button } from 'react-bootstrap'
import Router, { useRouter } from 'next/router'
import Anmsingup from '../new/singup'

const Signup = () => {
  const router = useRouter();
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    // ارسال اطلاعات به سرور
    try {
      const response = await fetch('/api/auth/singup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, number, password }),
      })

      if (response.status === 201) {
        const data = await response.json()
        setMessage(data.message)
        //showAlert1()
        setName('')
        setNumber('')
        setPassword('')
      } else if (response.status === 423) {
        setMessage('این شماره موبایل قبلا ثبت نام کرده')
      } else {
        showAlert2()
        setMessage('Error: Please try again later.')
      }
    } catch (error) {
      showAlert2()
      setMessage('Error: Please try again later.')
    }
  }
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
      Router.replace('/shop').then(() => {
        window.location.reload()
      })
    }, 2000) // 2000 میلی‌ثانیه معادل با 2 ثانیه است
  }
  useEffect(()=>{
    let token = localStorage.getItem("token")
    if(token){
      router.push('/dashboard');
    }

  });
  return (
    <>
    <div class="relative sing grid grid-cols-1 sm:grid-cols-6">
    <div class="bg-[#EBEFFF] sm:col-span-1 hidden sm:block"></div>
    <div class="relative bg-[#EBEFFF] col-span-1 sm:col-span-2 h-[1000px] ">
        <div class="hidden sm:block absolute bg-[#656ED3] h-full w-full -mt-14 sm:mt-[-350px] rounded-[160px] rotate-[10deg]"></div>
        <div class="hidden sm:block absolute bg-[#AFB3FF] h-full w-full -mt-12 sm:mt-[-300px] right-20 rounded-[160px]"></div>
        <img class="absolute mt-72 sm:mt-  left-0" src='/pc.png' alt="PC"></img>
    </div>

    <div class="bg-[#EBEFFF] col-span-1 sm:col-span-3">
    <Form  onSubmit={handleSubmit}>
        <div class="mx-auto my-16  max-w-[580px] h-52">
            <h1 class="text-2xl font-bold sm:mx-44">Welcome Back!</h1>
            <h1 class="text-2xl">Name:</h1>
            <input class="w-full h-14 rounded-3xl border-[#656ED3] border-solid border-[4px] my-5"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
            ></input>
            <h1 class="text-2xl">Number:</h1>

                        <input class="w-full h-14 rounded-3xl border-[#656ED3] border-solid border-[4px] my-5"
                        type="text"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        required
            ></input>
            <h1 class="text-2xl">Password:</h1>
            <input class="w-full h-14 rounded-3xl border-[#656ED3] border-solid border-[4px] my-5"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
            ></input>
            <button class="w-full h-14 rounded-3xl bg-[#656ED3] border-[#656ED3] border-solid border-[4px] text-2xl text-white my-10" 
            variant="primary" type="submit"
            >Login</button>
                  {message && <p className=' number-singin-button'>{message}</p>}

      
            <a class="text-2xl font-bold mx-6" dir='rtl' href="/singin"> ورود | قبلا ثبت نام کرده اید؟</a>
        </div>
    </Form>
    </div>
</div>
    {/* <Container>
      <Head>
      </Head>
          <div className="row">
          <div className='col-6'>
            <div className='row'>
              <div className='col'>
                <Anmsingup/>
              </div>
            </div>
          </div>
      <Form className='col-6' onSubmit={handleSubmit}>
                <div className='row' style={{ marginTop: "70px" }}>
        <Form.Group controlId="name">




<label className="col-0"></label>

          <Form.Label className='col-8 number-singin-label'>نام و نام خانوادگی:</Form.Label>
          <label className="col-4"></label>
            <div className="row">

<label className="col-0"></label>
          <input className='col-8 form-control number-singin-input'
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            />
<label className="col-4"></label>
            </div>
        </Form.Group>
            </div>

        <Form.Group controlId="number">
        <div className="row">

<label className="col-0"></label>
          <Form.Label className='col-8 number-singin-label'>شماره همراه:</Form.Label>
          <label className="col-4"></label>
            </div>
          <div className="row">

<label className="col-0"></label>
          <input className='col-8 form-control number-singin-input'
            type="text"
            value={number}
            onChange={e => setNumber(e.target.value)}
            required
            />
          <label className="col-4"></label>
            </div>
        </Form.Group>
        <Form.Group controlId="password">
<div className="row">

<label className="col-0"></label>
          <Form.Label className='col-8  number-singin-label'>رمزعبور:</Form.Label>
          <label className="col-4"></label>
            </div>
            <div className="row">

<label className="col-0"></label>
          <input className='col-8 form-control number-singin-input'
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            />
                    <label className="col-4"></label>
            </div>
        </Form.Group>
        <div className="row">

<label className="col-0"></label>
        <Button  className='col-8 form-control number-singin-button' variant="primary" type="submit">
          ثبت نام
        </Button>
        <label className="col-4"></label>
            </div>
      </Form>
      <div className="row">

<label className="col-0"></label>
      {message && <p className='col-8 number-singin-button'>{message}</p>}
      <label className="col-4"></label>
            </div>
            <div className="row">

<label className="col-4"></label>

<a className="col-4 link number-singin-link" href="/singin"><p> ورود | قبلا ثبت نام کرده اید؟</p></a>
<label className="col-4"></label>
</div>
            </div>
    </Container> */}
            </>
  )
}

export default Signup
