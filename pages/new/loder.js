import React, { useEffect } from 'react';
import lottie from 'lottie-web';

export default function loder() {
  useEffect(() => {
    const container = document.getElementById('lottie-container');

    // بارگیری انیمیشن
    const anim = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/60b8df59-f0e0-4e5d-8c44-3a73e84214e4/EeoMSpJNxR.json'
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
