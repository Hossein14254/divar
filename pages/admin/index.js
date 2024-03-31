import React from 'react'
import { useEffect,useState } from 'react'
import AgahisDashbodrAdmin from '@/components/dashbord/agahi#'
import Loder from '../new/loder'
import Statisticsuser from '@/components/dashbord/statistics/user'
import Statisticscity from '@/components/dashbord/statistics/city'
import Statisticsagahi from '@/components/dashbord/statistics/agahi'
import Comment from '@/components/dashbord/comment2'
export default function index() {
  const [agahis,setAgahis]=useState([])
  const [commentf , setCommentf]=useState([])
  const [numcomment , setNumcomment]=useState(0)

const [numagahis , setNumagahis]=useState(0)
const [numdaste , setNumdaste]=useState(0)
const [numcity,setNumcity]=useState(0)
const [numuser , setNumuser]=useState(0)

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
const fetchnumcity=  async () => {
  try{
    const response=await fetch('/api/admin/city/get')
    const data = await response.json()
    if(response.ok){
      setNumcity(data.length)
    }else{
      console.log("daste:","no")
    }
  }catch (error) {
    console.error("Error:", error);
  }
};
  const fetchnumdaste=  async () => {
    try{
      const response=await fetch('/api/admin/daste/get')
      const data = await response.json()
      if(response.ok){
        setNumdaste(data.length)
      }else{
        console.log("daste:","no")
      }
    }catch (error) {
      console.error("Error:", error);
    }
  };
  const fetchUserData = async () => {
    try {
      const response = await fetch("/api/auth/users", {
        method: "GET",
      });
  
      if (response.ok) {
        const data = await response.json(); // انتظار برای حل شدن Promise و دریافت داده‌ها
        setNumuser(data.message.length)
      } else {
        console.log("notuser !");
      }
    } catch (err) {
      console.log(err);
    }
  };
  


  useEffect(() => {
    const fetchagahis=  async () => {
      try{
        const response=await fetch('/api/shop')
        const data = await response.json()
        if(response.ok){
          setAgahis(data)
          setNumagahis(data.length)
        }else{
          console.log("agahis:","no")
        }
      }catch (error) {
        console.error("Error:", error);
      }
    };
    fetchUserData()
    fetchnumcity()
    fetchnumdaste()
    fetchagahis()
    fetccomment()
  }, [])
  
  return (
    <div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 h-20 w-[1300px] mt-5 mx-10">
                <div className=' w-full h-96'>
                    <div className=''>
                        اخرین آگهی ها(3مورد آخر)
                    </div>
                   {agahis ? (
                        <>
                        {agahis.slice(-3).reverse().map((item) => (
                        <AgahisDashbodrAdmin key={2} {...item} />
                      ))}
                        </>
                   ):(
                    <Loder/>
                   )}
                </div>
                <div className=' w-full h-96'>
                  <div>اخرین کامنت ها(3مورد آخر)

                  </div>
                  {Comment ? (
                    <>
                        {commentf.slice(-3).reverse().map((item) => (
                        <Comment key={2} {...item} />
                      ))}                    </>
                  ):(
                    <></>
                  )}
                </div>
                <div className=' w-full h-96'>
                  <div>آمار و نگاه کلی</div>
                  {numcity ? (
                    <>
                        <Statisticsuser numuser={numuser} />
                        <Statisticscity numdaste={numdaste} numcity={numcity}/>
                        <Statisticsagahi numagahis={numagahis} numcomment={numcomment}/>
                    </>
                  ):(
                    <Loder/>
                  )}
                </div>
            </div>
    </div>
  )
}
