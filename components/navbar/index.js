import React from 'react'
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { SlBasket } from "react-icons/sl";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlinePercent } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { FaTreeCity } from "react-icons/fa6";







export default function NavbarAdmin() {
  return (
<div class="flex">
  <div class="bg-[#656ED3] w-[425px] md-[425px] sm:w-[425px] h-[870px] my-8 mr-14 rounded-4xl">
    <div class=' w-[345px] h-24 mx-auto my-10 flex justify-end'>
        <h1 className='mx-1 my-6 text-4xl font-bold text-white'>G Divar</h1>
        <img src='/logo 1.png' className='w-16 h-16 my-3 mx-3'></img>
    </div>
    <div className='flex justify-end mx-10'>
        <h1 className='font-bold'>❤️Admin Dashboard</h1>
    </div>
    <div className=' w-[345px] h-[420px] mx-auto my-0 '>


    <a href='/admin'><div class='transition ease-in-out hover:scale-105 group hover:bg-white text-white w-[280px] h-12 rounded-xl flex items-center text-[25px] mx-10 my-2 hover:text-black'>
                <MdOutlineAdminPanelSettings class='inline mx-4 group-hover:text-[#656ED3]  font-bold' />
        <div class='flex items-center'>
                <h1 class='ml-2 group-hover:text-black font-bold'>داشبورد</h1>
        </div>
    </div></a>
    <a href='/admin/list'><div class='transition ease-in-out hover:scale-105 group hover:bg-white text-white w-[280px] h-12 rounded-xl flex items-center text-[25px] mx-10 my-2 hover:text-black'>
                <SlBasket class='inline mx-4 group-hover:text-[#656ED3]  font-bold' />
        <div class='flex items-center'>
                <h1 class='ml-2 group-hover:text-black font-bold'>لیست آگهی ها</h1>
        </div>
    </div></a>
    <a href='/admin/users'><div class='transition ease-in-out hover:scale-105 group hover:bg-white text-white w-[280px] h-12 rounded-xl flex items-center text-[25px] mx-10 my-2 hover:text-black'>
                <HiOutlineUsers class='inline mx-4 group-hover:text-[#656ED3]  font-bold' />
        <div class='flex items-center'>
                <h1 class='ml-2 group-hover:text-black font-bold'>مدیریت کاربران</h1>
        </div>
    </div></a>
    <a href='/admin/Comments'><div class='transition ease-in-out hover:scale-105 group hover:bg-white text-white w-[280px] h-12 rounded-xl flex items-center text-[25px] mx-10 my-2 hover:text-black'>
                <TfiCommentAlt class='inline mx-4 group-hover:text-[#656ED3]  font-bold' />
        <div class='flex items-center'>
                <h1 class='ml-2 group-hover:text-black font-bold'>آخرین کامنت ها</h1>
        </div>
    </div></a>
    <a href='/admin/daste'><div class='transition ease-in-out hover:scale-105 group hover:bg-white text-white w-[280px] h-12 rounded-xl flex items-center text-[25px] mx-10 my-2 hover:text-black'>
                <TbCategoryPlus class='inline mx-4 group-hover:text-[#656ED3]  font-bold' />
        <div class='flex items-center'>
                <h1 class='ml-2 group-hover:text-black font-bold'>مدیریت دسته ها</h1>
        </div>
    </div></a>
    <a href='/admin/city'><div class='transition ease-in-out hover:scale-105 group hover:bg-white text-white w-[280px] h-12 rounded-xl flex items-center text-[25px] mx-10 my-2 hover:text-black'>
                <FaTreeCity class='inline mx-4 group-hover:text-[#656ED3]  font-bold' />
        <div class='flex items-center'>
                <h1 class='ml-2 group-hover:text-black font-bold'>مدیریت شهر ها</h1>
        </div>
    </div></a>
    <a><div class='hover:cursor-not-allowed transition ease-in-out hover:scale-105 group hover:bg-white text-white w-[280px] h-12 rounded-xl flex items-center text-[25px] mx-10 my-2 hover:text-black'>
                <MdOutlinePercent class='inline mx-4 group-hover:text-[#656ED3]  font-bold' />
        <div class='flex items-center'>
                <h1 class='ml-2 group-hover:text-black font-bold'>آمار و نگاه کلی</h1>
        </div>
    </div></a>
    <a><div class='hover:cursor-not-allowed transition ease-in-out hover:scale-105 group hover:bg-white text-white w-[280px] h-12 rounded-xl flex items-center text-[25px] mx-10 my-2 hover:text-black'>
                <IoSettingsOutline class='inline mx-4 group-hover:text-[#656ED3]  font-bold' />
        <div class='flex items-center'>
                <h1 class='ml-2 group-hover:text-black font-bold'>تنظیمات</h1>
        </div>
    </div></a>

        
        










    </div>
    
    <div className=' zarafe w-[345px] rounded-4xl h-36 mx-auto my-5'>
        <p></p>
        <h1 className='text-2xl mx-4 mt-5'> با مدیریت داشبورد خود مشکل دارید؟</h1>
        <button class="bg-[#00F0FF] rounded-xl mx-28 w-28 h-10 shadow-2xl hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transform transition duration-300 ease-in-out hover:scale-105">ارتباط با سازنده</button>
    </div>
  </div>
</div>
  )
}
