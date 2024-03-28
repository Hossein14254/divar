import React from 'react'
import { useEffect , useState } from 'react'
import { useRouter } from 'next/router'

export default function index() {
    const router =useRouter()
    const [nums, setNums] = useState(0)
    const [data, setData] = useState([])
    const [isLoding, setIsloding] = useState(true)

    const [name,setName]=useState()
    const [pric , setPric]=useState("")
    const [condition,setCondition]=useState("")
    const [transfree,setTransfree]=useState("")
    const [text, setText]=useState("")
    const [img, setImg]=useState("")
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/shop')
          const data = await response.json()
          setData(data[0])
          setName(data[0].name);setPric(data[0].pric);setCondition(data[0].condition);setTransfree(data[0].transfree);setText(data[0].text);setImg(data[0].img)
          setMessage(data.message)
        } catch (error) {
          console.error('Error fetching data:', error)
        } finally {
          setIsloding(false)
        }
      }
  
      fetchData()
    }, [])

    const handleImageUpload = async()=>{
        const {_id }= router.query;
        console.log("id   :"+_id)
        try {
            const requestOptions = {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({_id, name, img, text, transfree, condition, pric})
            };
          
            const response = await fetch('/api/up', requestOptions);
            const data = await response.json();
            window.location.reload();
            setData(data[0]);
            setMessage(data.message);
          } catch (error) {
            console.error('Error fetching data:', error);
          } finally {
            setIsloding(false);
          }
        }
          
  return (
    <div>
        <div className='grid grid-cols-8 place-items-center ml-2 mt-5'>
            <div className='col-span-1'>نام آگهی</div>
            <div className='col-span-1'>دسته بندی</div>
            <div className='col-span-1'>شهر</div>
            <div className='col-span-1'>قیمت</div>
            <div className='col-span-1'>معاوضه</div>
            <div className='col-span-1'>وضعیت</div>
            <div className='col-span-1'>توضیحات</div>
            <div className='col-span-1'>تصویر</div>
        </div>
        {data ? (
            <>
                        <div className='grid grid-cols-8 bg-lime-400 h-12 place-items-center ml-2 mt-5'>
            <div className='col-span-1'>{data.name}</div>
            <div className='col-span-1'>{data.daste}</div>
            <div className='col-span-1'>{data.city}</div>
            <div className='col-span-1'>{data.pric}</div>
            <div className='col-span-1'>{data.transfree}</div>
            <div className='col-span-1'>{data.condition}</div>
            <div className='col-span-1'>{data.text}</div>
            <div className='col-span-1'>{data.img}</div>
        </div>
            </>
        ):(
            <></>
        )}

        <div className='grid grid-cols-8 bg-slate-300 place-items-center ml-2 mt-5'>
            <div className='col-span-1'>
                <input placeholder='' value={name} onChange={(e)=>setName(e.target.value)} className='w-36 mr-0 h-10 transform transition duration-300 ease-in-out hover:scale-105 rounded-xl'></input>
            </div>
            <div className='col-span-1'>غیرقابل ویرایش</div>
            <div className='col-span-1'>غیرقابل ویرایش</div>
            <div className='col-span-1'>
                <input placeholder='' value={pric} onChange={(e)=>setPric(e.target.value)} className='w-36 mr-0 h-10 transform transition duration-300 ease-in-out hover:scale-105 rounded-xl'></input>
            </div>
            <div className='col-span-1'>
                <input placeholder='' value={transfree} onChange={(e)=>setTransfree(e.target.value)} className='w-36 mr-0 h-10 transform transition duration-300 ease-in-out hover:scale-105 rounded-xl'></input>
            </div>
            <div className='col-span-1'>
                <input placeholder='' value={condition} onChange={(e)=>setCondition(e.target.value)} className='w-36 mr-0 h-10 transform transition duration-300 ease-in-out hover:scale-105 rounded-xl'></input>
            </div>
            <div className='col-span-1'> 
                <input placeholder='' value={text} onChange={(e)=>setText(e.target.value)} className='w-36 mr-0 h-10 transform transition duration-300 ease-in-out hover:scale-105 rounded-xl'></input>

            </div>
            <div className='col-span-1'>
                <input placeholder=''  value={img} onChange={(e)=>setImg(e.target.value)}  className='w-36 mr-0 h-10 transform transition duration-300 ease-in-out hover:scale-105 rounded-xl'></input>
            </div>
        </div>
        <div className='grid grid-cols-8 place-items-center ml-2 mt-5'>
            <div className='col-span-7'></div>
            <button onClick={handleImageUpload} className='col-span-1 bg-[#656ED6] text-white h-10 w-20 rounded-lg transform transition duration-300 ease-in-out hover:scale-105'>ذخیره </button>
        </div>
    </div>
  )
}

