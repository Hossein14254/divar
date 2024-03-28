import React from 'react'
import Link from 'next/link'
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect,useState } from "react";
import { FaSearch } from 'react-icons/fa';



const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isuser, setIsuser] = useState(false);
    const [isadmin,setIsadmin]=useState(false)
    useEffect(() => {
        let token = localStorage.getItem("token");
        if(token){
            token = token.substring(1, token.length - 1);
        }

    
        const medata = async () => {
            try {
                let token = localStorage.getItem("token");
                token = token.substring(1, token.length - 1);
                if (!token) {
                    console.error("توکن موجود نیست.");
                    return;
                }
        
                const response = await fetch("/api/auth/me", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token }),
                });
        
                if (!response.ok) {
                    console.log("دریافت داده با مشکل مواجه شد.");
                }
        
                const data = await response.json();
                console.log("داده دریافت شد:", data);
                setIsuser(true)
                if(data){
                  if(data.data.role!="USER"){
                    setIsadmin(true)
                    console.log("is admin: ",isadmin)
                  }
                }
            } catch (error) {
                console.error("خطا:", error);
            }
        };
      
      
    
        medata();
      }, []);
      const removeTokenFromLocalStorage = () => {
        try {
          localStorage.removeItem('token');
          window.location.reload();
    
          console.log('Token removed from localStorage successfully');
        } catch (error) {
          console.error('Error removing token from localStorage:', error.message);
        }
      };
    const handleHover = () => {
      setIsMenuOpen(true);
    };
  
    const handleLeave = () => {
      setIsMenuOpen(false);
    };
  return (
    <nav className="bg-gray-100 py-4">
  <div className="container mx-auto flex items-center justify-between">
    <div className="flex items-center">
      <a href="#" className="mr-4">
        <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iI0E2MjYyNiIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNOC4zODYgMTQuNjE3SDguMjhhLjcxMi43MTIgMCAwIDEtLjU5NS0uODA2Yy40NzMtMy4xMTcuNjMtOC4wOTIuNjMtOC4xMjcuMDM1LS4zODYuMzMzLS43LjczNi0uNjgzYS43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjIxLS4xNzUgNS4wOTctLjY0OCA4LjMwM2EuNy43IDAgMCAxLS43LjU5NVptMTAuMDM3IDEuMjk2YS42OTMuNjkzIDAgMCAxLS42NjYtLjQ5LjY4OC42ODggMCAwIDEgLjQ1NS0uODc2YzMuMzEtMS4wNSAzLjM2My0xLjg1NyAzLjM4MS0yLjI5NS4wMzUtLjY4My0uNDktMS41NTgtLjctMS44NTZhLjcwMS43MDEgMCAxIDEgMS4xMzgtLjgyNGMuMTA1LjE0IDEuMDUgMS40NTQuOTYzIDIuNzY4LS4wODcgMS41OTQtMS4zMTQgMi41NzUtNC4zNjEgMy41NTZhLjg0NS44NDUgMCAwIDAtLjEwNS4wMDljLS4wMzUuMDA0LS4wNy4wMDktLjEwNS4wMDlabS05LjUxMiAyLjQ3YS42NTYuNjU2IDAgMCAxLS41NDMtLjI2Mi42ODMuNjgzIDAgMCAxIC4xMjMtLjk4MWMxLjQzNi0xLjEzOSAyLjQtMi4xNTUgMy4wMy0zLjA0OC0uMzUtLjE3NS0uNzE4LS40MzgtLjkxLS44NzYtLjE3Ni0uNDAzLS4yODEtMS4wNjkuMzMyLTEuOTYyLjg3Ni0xLjI5NiAxLjc1Mi0xLjU5NCAyLjA4NC0xLjY2NGEuODcxLjg3MSAwIDAgMSAxLjAxNi42MTNjLjA4OC4zMTUuMjk4IDEuMzE0LS4zMzIgMi44MzguODQtLjAxOCAxLjUwNi0uMjQ1IDIuMDE0LS42NjYuOTgtLjc4OCAxLjAzMy0yLjEyIDEuMDMzLTIuMTM3YS43MTUuNzE1IDAgMCAxIC43MTktLjY4My43MTUuNzE1IDAgMCAxIC42ODMuNzE4YzAgLjA3LS4wNyAxLjk0NC0xLjUyNCAzLjE3LS45MTEuNzcxLTIuMTU1IDEuMTA0LTMuNjYxLjk4Mi0uNzE4IDEuMTAzLTEuODU3IDIuNC0zLjYyNiAzLjhhLjcwOC43MDggMCAwIDEtLjQzOC4xNThabTMuODAxLTcuMDc2YTMuMTM0IDMuMTM0IDAgMCAwLS42My43MzVjLS4yMjguMzUtLjI0Ni41NDMtLjIyOC41OTYuMDM1LjA4OC4yMS4xNzUuMzg1LjI0NS4zMzMtLjY2NS40MzgtMS4xOTEuNDczLTEuNTc2Wm0uMTc1IDQuOTIyYS43MS43MSAwIDAgMCAuNy42ODNoLjAzNmMuMDUzIDAgMS4yMjYtLjAzNSAyLjkwOC0uNDJhLjcwMi43MDIgMCAwIDAgLjU0My0uODQxLjcwMi43MDIgMCAwIDAtLjg0MS0uNTQzYy0xLjU2LjMzMi0yLjY2My4zODUtMi42OC4zODVhLjcwNC43MDQgMCAwIDAtLjY2Ni43MzZaTTEuMTM0IDE4LjEwM2MuMTIyLjE3NS4zNS4yOC41Ni4yOC4xNCAwIC4yOC0uMDM1LjQyLS4xMjIgNC40NS0zLjI0IDQuNjI1LTcuNDggNC42MjUtNy42NTUgMC0uMzg1LS4yOTgtLjctLjY4My0uNzE4LS4zODYtLjAxOC0uNy4yOTgtLjcxOC42ODMgMCAuMTQtLjE3NiAzLjczMS00LjA0NyA2LjU1MWEuNzAxLjcwMSAwIDAgMC0uMTU3Ljk4MVoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg=="
          alt="Logo"
          className="h-8 logo"
        />
      </a>
      <form className="flex items-center bg-white  shadow-md rounded-3xl">
        <input 
          className="form-input py-2 rounded-3xl px-4 rounded-l-lg w-80 h-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="search"
          placeholder="جستجو"
          aria-label="Search"
        />
        {/* اضافه کردن آیکون جستجو */}
        <div className='w-14 flex justify-center items-center h-10 group hover:bg-blue-400  rounded-e-3xl transition-colors'>
           <FaSearch className="text-gray-400 h-6 w-6 group-hover:text-red-500" />
        </div>


      </form>
    </div>
    <div className="flex items-center">
      <Link href={'/new'}>
        <button
          className="btn btn-primary ml-4 border-none shadow-2xl hover:shadow-slate-900"
          type="submit"
          style={{ backgroundColor: '#dc3545' }} // اضافه کردن بک‌گراند قرمز
        >
          ثبت آگهی
        </button>
      </Link>
      {/* افزودن سایز بزرگ به آیکون یوزر */}
      
      <FaRegUserCircle 
          className="shadow-2xl hover:shadow-slate-900 text-gray-600 text-3xl cursor-pointer" 
          onMouseEnter={handleHover} 
          onMouseLeave={handleLeave} 
        />
    {isMenuOpen && (
    <ul 
          className="absolute top-12 w-48 bg-white border rounded-lg shadow-lg py-1"
          onMouseEnter={handleHover} 
          onMouseLeave={handleLeave}
  >
          {isuser ? (
            <>
              <li className="menu-item">
                <Link href="/dashboard" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">داشبورد</Link>
              </li>
              <li className="menu-item">
                <button onClick={removeTokenFromLocalStorage} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">خروج</button>
              </li>
            </>
          ) : (
            <>
              <li className="menu-item">
                <Link href="singin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">ورود</Link>
              </li>
              <li className="menu-item">
                <Link href="/singup" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">عضویت</Link>
              </li>
            </>
          )}
          {isadmin && (
            <li className="menu-item">
              <Link href="/admin" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">ادمین</Link>
            </li>
          )}
        </ul>
      )}
    </div>
  </div>
</nav>



  )
}

export default Navbar

