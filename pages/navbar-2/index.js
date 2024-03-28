import React from "react";
import Link from "next/link";
import { useEffect,useState } from "react";

const Navbar = () => {
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

  return (
    <div>
{isuser ? (
  <ul className="menu">
    <li className="menu-item">
      <Link href="/dashboard">داشبورد</Link>
    </li>
  
    <li className="menu-item">
      <button  onClick={removeTokenFromLocalStorage}>خروج</button>
    </li>
  </ul>
) : (
  <ul className="menu">
    <li className="menu-item">
      <Link href="/singin">ورود</Link>
    </li>
    <li className="menu-item">
      <Link href="/singup">ثبت نام</Link>
    </li>
  </ul>
)}
{isadmin ? (
  <>
    <ul className="menu">
    <li className="menu-item">
      <Link href="/w-admin">ادمین</Link>
    </li>
  </ul>
  </>
):(
  <>
  </>
)
}
    </div>
  );
};

export default Navbar;
