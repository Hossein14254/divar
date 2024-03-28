import React, { useEffect } from 'react';
import lottie from 'lottie-web';

export default function Anmsingin() {
  useEffect(() => {
    const container = document.getElementById('lottie-container');

    // بارگیری انیمیشن
    const anim = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/6de2c8f9-4e8f-46f8-ad8b-81f9a3d41d2f/nukP60LHiK.json'
       // آدرس URL فایل JSON انیمیشن
    });

    return () => {
      anim.destroy(); // حذف انیمیشن در هنگام عدم نیاز به آن
    };
  }, []);

  return (
    <div>
      <div className='row'>
        <div className='col-3'></div>
        <div id="lottie-container" className='col-8' style={{ width: '100%', height: '400px' }}></div>
        <div className='col-1'></div>
      </div>
    </div>
  );
}
