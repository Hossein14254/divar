import React, { useEffect } from 'react';
import lottie from 'lottie-web';

export default function AnmUser() {
  useEffect(() => {
    const container = document.getElementById('lottie-container');

    // بارگیری انیمیشن
    const anim = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/e1cf1610-04d5-4b9f-a62b-94006a305be5/lwJtmU86tZ.json'
       // آدرس URL فایل JSON انیمیشن
    });

    return () => {
      anim.destroy(); // حذف انیمیشن در هنگام عدم نیاز به آن
    };
  }, []);

  return (
    <div>
      <div className="row">
        <label className="col-4"></label>
        <a className="col-5 link " href="/signup">
          <h1>شما دسترسی ندارید!</h1>
          <p>جهت ثبت آگهی وارد حساب کاربری خود بشوید</p>
          <p>ورود | ثبت نام</p>
        </a>
        <label className="col-3"></label>
      </div>
      <div className='row'>
        <div className='col-3'></div>
        <div id="lottie-container" className='col-8' style={{ width: '100%', height: '400px' }}></div>
        <div className='col-1'></div>
      </div>
    </div>
  );
}
