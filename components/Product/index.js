import React, { useEffect,useState } from 'react';
import { FaShoppingCart, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

const Product = ({name,_id,pric,city,img}) => {
    const [price, setPrice] = useState(pric); // مقدار اولیه pric
    const [randomNumber, setRandomNumber] = useState(null);
    useEffect(() => {
        const random = Math.floor(Math.random() * 5) + 1;
        setRandomNumber(random);
        let price = parseInt(pric); // تبدیل pric به عدد; // بروزرسانی مقدار pric
         if (price > 1000000) {
            price = price / 1000000;
            console.log(price);
            setPrice(price.toString()); // بروزرسانی مقدار pric
        }else if (price > 1000) {
            price = price / 1000;
            setPrice(price.toString())
        }
    }, []);

  return (
    <div className=''>

    <div className="flex mb-5 bg-white w-[500px] mt-3 rounded-lg shadow-lg overflow-hidden  mx-1">
      <div className="w-1/2 relative items-center my-4">
        <img src={`/${img}.jpg`}
             alt="س" className="mr-2 w-full h-auto object-cover items-center" />
        <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full">
          فروش ویژه
        </div>
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-2">{name}</h2>
        <p className="text-gray-600 mb-2 flex items-center">
          <FaMapMarkerAlt className="mr-2" />
          {city}
        </p>
        <div className="flex items-center mb-4">
        <div className="flex items-center mr-2">
            {Array.from({ length: randomNumber }, (_, index) => (
                <FaStar key={index} className="text-yellow-500" />
            ))}
            {Array.from({ length: 5 - randomNumber }, (_, index) => (
                <FaStar key={index} className="text-gray-300" />
            ))}
        </div>
          <span className="text-gray-600 ml-2">({randomNumber})</span>
        </div>
        <p className="text-xl font-bold mb-4">{price} میلیون تومن</p>
        <a href={`/shop/${_id}`}>
        <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2 px-4 rounded-full flex items-center">
          <FaShoppingCart className="mr-2" />
        مشاهده  این آگهی
        </button>
        </a>
      </div>
    </div>
    </div>
  );
};

export default Product;