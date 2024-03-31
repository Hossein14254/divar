import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { useRouter } from 'next/router';
import CommentBox from '@/components/newcomment';
import Fetchcomment from '@/components/fetchcomment';

const ProductPage = () => {
  const router = useRouter();
  const [id,setId]=useState(null)
  const [db, setDb] = useState(null);
  const [data, setData] = useState([]);
  const [isLoding, setIsloding] = useState(true);
  const [message, setMessage] = useState('');
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/shop');
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage('There was an error fetching the data.');
      } finally {
        setIsloding(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (router.query.id && data.length > 0) {
      const dbS = data.find(res => res._id == router.query.id);
      setDb(dbS);
      setId(router.query.id)
      console.log("code   :     "+id)
      const random = Math.floor(Math.random() * 5) + 1;
      setRandomNumber(random);
    }
  }, [router.query.id, data]);

  const productData = {
    name: 'پیکان سفید',
    category: 'خودرو',
    phoneNumber: '014548585',
    city: 'تبریز',
    isExchangeable: false,
    condition: 'درحد نو',
    price: 197000000,
    imageUrl: '/4.jpg',
    description: 'بسیار زیبا و با دوام من ازش خیلی راضی بودم خوش به سعادت خریدارش',
  };

  return (
    <div className="flex flex-row">
      {isLoding ? (
        <p>Loading...</p>
      ) : (
        <>
          {db ? (
            <>
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 3 }}
                transition={{ duration: 0.5 }}
                className="w-1/2 h-full shadow-2xl rounded-lg"
              >
                <img src={`/${db.img}.jpg`} alt={productData.name} className="w-full h-full object-cover rounded-lg" />
              </motion.div>

              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-1/2 p-8 shadow-2xl rounded-lg"
              >
                <div className="grid grid-cols-2">
                  <div className="col-span-1">
                    <div className="w-48 h-20 mt-2 mr-2 bg-[#656ED3] flex justify-center items-center text-white transform transition duration-300 ease-in-out hover:scale-105 rounded-xl">
                      <h2 className="text-2xl mt-4 text-white font-bold mb-4">{db.name}</h2>
                    </div>
                    <div className="w-48 h-20 mt-2 mr-2 bg-[#656ED3] flex justify-center items-center text-white transform transition duration-300 ease-in-out hover:scale-105 rounded-xl">
                      <p className="mb-2">{db.daste}</p>
                    </div>
                    <div className="w-48 h-20 mt-2 mr-2 bg-[#656ED3] flex justify-center items-center text-white transform transition duration-300 ease-in-out hover:scale-105 rounded-xl">
                      <p className="mb-2">شماره تماس: {db.number}</p>
                    </div>
                    <div className="flex items-center mr-2 w-48 h-20 mt-2 bg-[#656ED3] justify-center text-white transform transition duration-300 ease-in-out hover:scale-105 rounded-xl">
                      {Array.from({ length: randomNumber }, (_, index) => (
                        <FaStar key={index} className="text-yellow-500" />
                      ))}
                      {Array.from({ length: 5 - randomNumber }, (_, index) => (
                        <FaStar key={index} className="text-gray-300" />
                      ))}
                    </div>
                  </div>
                  <div className="col-span-1 justify-center">
                    <div className="w-48 h-20 mt-2 mr-2 bg-[#656ED3] flex justify-center items-center text-white transform transition duration-300 ease-in-out hover:scale-105 rounded-xl">
                      <p className="mb-2">{db.price} تومان</p>
                    </div>
                    <div className="w-48 h-20 mt-2 mr-2 bg-[#656ED3] flex justify-center items-center text-white transform transition duration-300 ease-in-out hover:scale-105 rounded-xl">
                      <p className="mb-2">{db.city}</p>
                    </div>
                    <div className="w-48 h-20 mt-2 mr-2 bg-[#656ED3] flex justify-center items-center text-white transform duration-300 ease-in-out hover:scale-105 rounded-xl">
                      <p className="mb-2">معاوضه: {db.transfree}</p>
                    </div>
                    <div className="flex items-center mr-2 w-48 h-20 mt-2 bg-[#656ED3] justify-center text-white transform duration-300 ease-in-out hover:scale-105 rounded-xl">
                      <p className="mb-2">وضعیت: {db.condition}</p>
                    </div>
                  </div>
                </div>

                <motion.p
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-4 shadow-lg rounded-lg p-4"
                >
                  {db.text}
                </motion.p>
              </motion.div>
              <div>

              <Fetchcomment id={id}/>
              <CommentBox id={id}></CommentBox>
              </div>
            </>
          ) : (
            <p>There was an error fetching the data.</p>
            )}
        </>
      )}
    </div>
  );
};

export default ProductPage;
