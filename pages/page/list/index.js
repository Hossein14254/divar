import React, { useState } from 'react'
import Link from 'next/link'

export default function List() {
  function add2() {
    const element = document.querySelector('.box')
    element.classList.remove('agahi-boxwidth-1')
    element.classList.add('.agahi-boxwidth-2')
  }
  function add1() {
    const element = document.querySelector('.box')
    element.classList.remove('agahi-boxwidth-2')
    element.classList.add('.agahi-boxwidth-1')
  }
  return (
    <div>
      <div className="container container-fluid">
        <Link href="/" className="link" onClick={add1}>
          <div className="container-fluid div-a-list">
            <div className="container-fluid div-a-list-big">داشبورد</div>
          </div>
        </Link>
        <Link href="/new" className="link">
          <div className="container-fluid div-a-list">
            <div className="container-fluid div-a-list-big">ثبت آگهی </div>
          </div>
        </Link>
        <Link href="/shop" className="link" onClick={add2}>
          <div className="container-fluid div-a-list">
            <div className="container-fluid div-a-list-big">
              لیست کل آگهی ها
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
