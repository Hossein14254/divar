import React, { useState, useEffect } from 'react';
import Product from '@/components/Product';

export default function Index() {
  const [datas, setDatas] = useState([]);
  const [isLoding, setIsloding] = useState(true);
  const [datafilter, setDatafilter] = useState([]);
  const [citys, setCitys] = useState([]);
  const [dastes, setDastes] = useState([]);
  const [city, setCity] = useState('');
  const [daste, setDaste] = useState('');
  const [condition, setCondition] = useState('');
  const [transfree, setTransfree] = useState('');
  const [pric1, setPric1] = useState(0);
  const [pric2, setPric2] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/shop');
        const data = await response.json();
        setDatas(data);
        setDatafilter(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsloding(false);
      }
    };

    const fetchCityAndDaste = async () => {
      try {
        const responseCity = await fetch('/api/admin/city/get');
        const responseDaste = await fetch('/api/admin/daste/get');

        if (responseCity.ok && responseDaste.ok) {
          const dataCity = await responseCity.json();
          const dataDaste = await responseDaste.json();
          setCitys(dataCity);
          setDastes(dataDaste);
        } else {
          console.log('Error fetching city and daste data');
        }
      } catch (error) {
        console.error('Error fetching city and daste data:', error);
      }
    };

    fetchData();
    fetchCityAndDaste();
  }, []);

  function applyFilters() {
    let filteredDatas = [...datas];

    if (city && city !== '') {
      filteredDatas = filteredDatas.filter(item => item.city === city);
    }

    if (daste && daste !== '') {
      filteredDatas = filteredDatas.filter(item => item.daste === daste);
    }

    if (transfree && transfree !== '') {
      filteredDatas = filteredDatas.filter(item => item.transfree === transfree);
    }

    if (condition && condition !== '') {
      filteredDatas = filteredDatas.filter(item => item.condition === condition);
    }

    if (pric1 && pric1 !== 0) {
      filteredDatas = filteredDatas.filter(item => item.pric > pric1);
    }

    if (pric2 && pric2 !== 0) {
      filteredDatas = filteredDatas.filter(item => item.pric < pric2);
    }

    setDatafilter(filteredDatas);
  }

  return (
    <div className="grid grid-cols-4">
      <div className="col-span-1 h-full ml-8">
        <div className="">
          <select
            className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={city}
            onChange={e => setCity(e.target.value)}
          >
            <option value="" disabled>
              شهر را انتخاب کنید
            </option>
            <option value="">مهم نیست</option>
            {citys.map((item, index) => (
              <option key={index} value={item.city}>
                {item.city}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <select
            className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={daste}
            onChange={e => setDaste(e.target.value)}
          >
            <option value="" disabled>
              دسته بندی را انتخاب کنید
            </option>
            <option value="">مهم نیست</option>
            {dastes.map((item, index) => (
              <option key={index} value={item.daste}>
                {item.daste}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <select
            className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={transfree}
            onChange={e => setTransfree(e.target.value)}
          >
            <option value="" disabled>
              وضعیت معاوضه را انتخاب کنید
            </option>
            <option value="">مهم نیست</option>
            <option value="بله">بله</option>
            <option value="خیر">خیر</option>
          </select>
        </div>
        <div className="">
          <select
            className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            value={condition}
            onChange={e => setCondition(e.target.value)}
          >
            <option value="" disabled>
              وضعیت کارکرد را انتخاب کنید
            </option>
            <option value="">مهم نیست</option>
            <option value="نو">نو</option>
            <option value="در حد نو">در حد نو</option>
            <option value="کارکرده">کارکرده</option>
            <option value="خراب">خراب</option>
          </select>
        </div>
        <div className="">
          <input
            className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 animate-pulse"
            placeholder="قیمت به تومان"
            value={pric1}
            onChange={e => setPric1(e.target.value)}
          ></input>
          حداقل قیمت(تومان)
        </div>
        <div className="">
          <input
            className="input w-full px-4 py-2 mt-10 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 rounded-lg shadow-sm appearance-none focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 animate-pulse"
            placeholder="قیمت به تومان"
            value={pric2}
            onChange={e => setPric2(e.target.value)}
          ></input>
          حداکثر قیمت(تومان)
        </div>
        <h1 className="w-24 h-12  text-slate-200 hover:text-slate-800">
          <button
            onClick={applyFilters}
            className="flex  w-24 h-12 items-center mt-4 justify-center rounded-md transform transition duration-300 ease-in-out hover:scale-105  bg-[#656ED3] hover:bg-slate-200"
          >
            فیلترکردن
          </button>
        </h1>
      </div>
      <div className="col-span-3">
  <div className="md:grid md:grid-cols-2" style={{ overflowY: 'auto', maxHeight: '700px' }}>
    {datafilter ? (
      <>
        {datafilter.slice().reverse().map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </>
    ) : (
      <></>
    )}
  </div>
</div>
    </div>
  );
}
