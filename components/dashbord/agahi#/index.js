import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import { useState } from 'react';
import { MdDriveFileRenameOutline } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { FaTreeCity } from "react-icons/fa6";





export default function AgahisDashboardAdmin({ _id, name, city, daste, img }) {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <>
    <a href={`/shop/${_id}`}>
        
<div className='relative w-full grid grid-cols-2 my-2  rounded-xl bg-[#656ED3] shadow-lg transition-transform duration-300 transform hover:scale-105'>
    <div className='col-span-1 flex items-center'>
        <div>
            <h1 className='text-2xl text-white pt-1 mr-4 flex items-center'>
                <MdDriveFileRenameOutline className='ml-2' />{name} 
            </h1>
            <h1 className='text-2xl text-white mr-4 flex items-center'>
                <TbCategoryPlus className='ml-2' />{daste}
            </h1>
            <h1 className='text-2xl text-white mr-4 flex items-center'>
                <FaTreeCity className='inline ml-2' />{city}
            </h1>
        </div>
    </div>
    <div className='col-span-1 rounded-xl overflow-hidden'>
        <img className='w-full h-auto rounded-xl' src={img + '.jpg'} alt='تصویر' />
    </div>
</div>
    </a>
    </>
  );
}
