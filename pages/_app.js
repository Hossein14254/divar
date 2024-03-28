import '@/styles/globals.css'
import Navbar from './page/navbar'
import List from './page/list'
import Shop from './shop'
import Navbar2 from './navbar-2'
import { useState,useEffect } from 'react'
import { useRouter } from 'next/router';
import NavbarAdmin from '@/components/navbar'
import Hederadmin from '@/components/heder'
import { HiOutlineMenuAlt3 } from 'react-icons/hi';










export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [w, setw]=useState(0)
  const [showIcon, setShowIcon] = useState(true);
  useEffect(()=>{
    logWindowSize()
    window.addEventListener("resize", logWindowSize);
    
  },[])

  
  
  function logWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    setw(width)
    console.log("Width:", w);
}

//window.addEventListener("resize", logWindowSize);






  if(router.pathname === '/singin' || router.pathname === '/singup'){
    return (
      <div >
        <Component  {...pageProps} />
      </div>
    );
  }
  
  return (
    <>
      {router.pathname.startsWith('/admin') ? (
        w < 1000 ? (
          <div className="">
            <div className="bg-gradient-to-r from-[#E2FFEA] to-[#E5E4F6] col-span-4">
              {showIcon ? (
                <>
                  <HiOutlineMenuAlt3 className=' text-4xl mx-3 my-3 transform transition duration-300 ease-in-out hover:scale-105' onClick={() => setShowIcon(false)} />
                  <div className="col-span-4">
                    <Component {...pageProps} />
                  </div>
                </>
              ) : (
                <>
                  <HiOutlineMenuAlt3 className='absolute text-4xl mx-3 my-3 transform transition duration-300 ease-in-out hover:scale-105 ' onClick={() => setShowIcon(true)} />
                  <NavbarAdmin className=" " />
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-r from-[#E2FFEA] to-[#E5E4F6] grid grid-cols-4">
            <div className="col-span-1">
              <NavbarAdmin />
            </div>
            <div className="col-span-3">
              <Hederadmin />
              <Component {...pageProps} />
            </div>
          </div>
        )
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Navbar />
            </div>
          </div>
  
          <div className="row">
            <div className="col-3 div-*indexjs">
              <List />
            </div>
            <div className="col-9 div-*indexjs">
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      )}
    </>
  )
   }