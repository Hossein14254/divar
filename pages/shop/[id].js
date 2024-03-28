import React from 'react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { FaExclamationTriangle } from 'react-icons/fa'
import { FaMoneyBill, FaCity } from 'react-icons/fa'
import { FaList, FaExchangeAlt, FaStar, FaInfoCircle } from 'react-icons/fa'

export default function ID() {
  const [nums, setNums] = useState(0)
  const [data, setData] = useState([])
  const [isLoding, setIsloding] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/shop')
        const data = await response.json()
        setData(data)
        console.log(data)
        setMessage(data.message)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsloding(false)
      }
    }

    setNums(0)
    fetchData()
  }, [])
  function polic() {
    setNums(nums + 1)
    if (nums % 2 == 0) {
      const element = document.querySelector('.polic')
      element.classList.remove('polic')
    } else {
      const element = document.querySelector('.polic-on')
      element.classList.add('polic')
    }
  }

  const router = useRouter()
  const id = router.query.id
  const db = data.find(res => res._id == id)
  console.log(db)
  if (id) {
    return (
      <div className="row">
        {isLoding ? (
          <p>بارگیری</p>
        ) : (
          <div className="row">
            <div className="col-1"></div>
            <div className="col-5 div-box-url">
              <h3 className="titel-box-url box-url">
                {db.name},{db.daste}
              </h3>
              <h5 className="box-url ">لحظاتی پیش در {db.city}</h5>
              <hr />
              <div className="row">
                <FaExclamationTriangle className="icon-box-url-1 col-2" />

                <span className=" col-7">زنگ خطرهای قبل از معامله</span>
                <FaArrowLeft className="icon-box-url-2 col-2" />
              </div>

              <hr />
              <div>
                <button onClick={polic} className="bttn-box-url box-url">
                  اطلاعات تماس
                </button>
              </div>
              <div className="polic polic-on row">
                <div className="po row">
                  <span className="col-8">شماره تماس : </span>
                  <span className="span-box-url col-4">{db.num}</span>
                </div>
                <div className="pol">
                  <p>هشدار پلیس</p>
                  <p>
                    لطفاً پیش از انجام معامله و هر نوع پرداخت وجه، از صحت کالا
                    یا خدمات ارائه‌شده، به‌صورت حضوری اطمینان حاصل نمایید.
                  </p>
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <FaInfoCircle className="col-2 icon" />
                <span className="col-2"> توضیحات</span>
                <span className="col-4"></span>
              </div>
              <div className="span-fr">
                <span className="col ">{db.text}</span>
              </div>
              <hr></hr>
            </div>
            <div className="col-5 img-box-url">
              <img className="img-fluid " src={'/' + db.img + '.jpg'}></img>
              <hr className="hr-box-url"></hr>
              <div className="row">
                <FaMoneyBill className="col-2 icon" />
                <span className="col-2">قیمت</span>
                <span className="col-4"></span>
                <span className="col-4">{db.pric} تومان</span>
              </div>
              <hr></hr>
              <div className="row">
                <FaCity className="col-2 icon" />
                <span className="col-2">شهر</span>
                <span className="col-4"></span>
                <span className="col-4">{db.city}</span>
              </div>
              <hr></hr>
              <div className="row">
                <FaList className="col-2 icon" />
                <span className="col-3">دسته بندی</span>
                <span className="col-3"></span>
                <span className="col-4">{db.daste}</span>
              </div>
              <hr></hr>
              <div className="row">
                <FaExchangeAlt className="col-2 icon" />
                <span className="col-2"> معاوضه</span>
                <span className="col-4"></span>
                <span className="col-4">{db.transfree}</span>
              </div>
              <hr></hr>
              <div className="row">
                <FaStar className="col-2 icon" />
                <span className="col-2"> وضعیت</span>
                <span className="col-4"></span>
                <span className="col-4">{db.condition}</span>
              </div>
              <hr></hr>
            </div>

            <div className="col-1"></div>
          </div>
        )}
      </div>
    )
  } else {
    ;<div>وجود ندارد</div>
  }
}
