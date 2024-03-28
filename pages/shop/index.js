import React from 'react'
import { useEffect, useState } from 'react'
import CPT from '../page/CPT'
import Loder from '../new/loder'

export default function Shop() {
  const [datas, setDatas] = useState([])
  const [isLoding, setIsloding] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/shop')
        const data = await response.json()
        setDatas(data)
        console.log(data)
        setMessage(data.message)
      } catch (error) {
        console.error('Error fetching data:', error)
      } finally {
        setIsloding(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container">
      <div className="row">
        {isLoding ? (
          <>
          <div className='col-5'></div>
<div className='col-2'> <Loder/></div>
          <div className='col-5'></div>
          </>

        ) : (
          <div className="box-shop">
            {datas.map((item, index) => (
              <>
              <CPT key={index} {...item} />
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
