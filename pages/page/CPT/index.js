import React from 'react'
import Link from 'next/link'
export default function CPT({ _id, name, city, pric, img }) {
  return (
    <div>
      <Link href={`/shop/${_id}`} className="link">
        <div className="col-lg-6">
          <div className="row agahi-boxwidth-1">
            <div className="col-7">
              <h4>{name}</h4>
              <h6 className="h6">{pric} ملیون تومان</h6>
              <h6>از {city}</h6>
              <p></p>
              <p></p>
              <p></p>
              <h5>لحظاتی پیش در {city}</h5>
            </div>
            <div className="col-5">
              <div className="square-container">
                <img
                  className="square-image"
                  src={img + '.jpg'}
                  alt="تصویر"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
