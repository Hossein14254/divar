import React, { useEffect } from 'react';
import lottie from 'lottie-web';

export default function Anmsingup() {
  useEffect(() => {
    const container = document.getElementById('lottie-container');

    // بارگیری انیمیشن
    const anim = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/6730d3c9-88dd-41bb-9a08-89c6638f35ad/j75lzNPoF9.json'
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
