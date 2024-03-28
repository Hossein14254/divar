import { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Link } from "react-bootstrap-icons";
import Anmsingin from "../new/singin";

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/auth/singin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Login successful");
        const data = await response.json();
        localStorage.setItem("token", JSON.stringify(data.token));
        router.push('/dashboard');
        setTimeout(() => {
          window.location.reload();
        }, 500); 
      } else {
        setMessage("Login failed");
        storeTokenInStorage(null);
      }
    } catch (error) {
      setMessage("Internal server error");
      console.log(error);
    }
  };

  useEffect(() => {
    let token = localStorage.getItem("token")
    if(token){
      router.push('/dashboard');
    }
  }, []);

  return (
    
    <div class="grid grid-cols-6 sing">
    <div class="bg-[#EBEFFF] col-span-3">
      <div class="mx-[190px] my-[283px] w-[580px] h-52 ">
        <h1 class="text-2xl items-center font-bold inline-block mx-44">Welcome Back!</h1>
        <h1 class="text-2xl items-center">Username:</h1>
        <form onSubmit={handleSubmit}>

        <input class="w-full h-14 rounded-3xl border-[#656ED3] border-solid border-[4px] my-5"
                    name="identifier"
                    value={formData.identifier}
                    onChange={handleChange}
                    ></input>
        <h1 class="text-2xl items-center">Password:</h1>
        <input class="w-full h-14 rounded-3xl size-full border-[#656ED3] border-solid border-[4px] my-5"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        ></input>
        <button class="w-full h-14 rounded-3xl bg-[#656ED3] border-[#656ED3] border-solid border-[4px] text-2xl text-white my-10" 
                  type="submit"
                  >Login</button>
                  </form>

                  {message && <p className=' number-singin-button'>{message}</p>}




        <a class="text-2xl items-center justify-center font-bold mx-24 inline-block" href="/singup" >نام نویسی | رمزعبورتان را گم کرده اید؟</a>

      </div>
    </div>
    <div class="bg-[#EBEFFF]  col-span-1"></div>
    <img class="absolute mt-32  right-72" src='/laptop.png'></img>
    <div class="bg-[#AFB3FF] col-span-2 h-[1000px]"></div>
    </div>
    //   <form onSubmit={handleSubmit}>
        
    //     <div className="row">
    //       <div className="col-6">
    //         <div className="row">
    //           <div className="col " style={{}}>
    //             <Anmsingin />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="col-6">
    //         <div className="row">
    //           <div className="col">
    //             <div className="row" style={{ marginTop: "70px" }}>
    //               <label className="col-0"></label>
    //               <label className="col-8 number-singin-label">شماره همراه:</label>
    //               <label className="col-4"></label>
    //             </div>
    //             <div className="row">
    //               <label className="col-0"></label>
    //               <input className="col-8 form-control number-singin-input number-singin-input-1" 
    //                 name="identifier"
    //                 value={formData.identifier}
    //                 onChange={handleChange}
    //               />
    //               <label className="col-4"></label>
    //             </div>
    //           </div>
    //         </div>
    //         <div>
    //           <div className="row">
    //             <label className="col-0"></label>
    //             <label className="col-8 number-singin-label">رمز عبور :</label>
    //             <label className="col-4"></label>
    //           </div>
    //           <div className="row">
    //             <label className="col-0 "></label>
    //             <input className="col-8 form-control number-singin-input"
    //               type="password"
    //               name="password"
    //               value={formData.password}
    //               onChange={handleChange}
    //             />
    //             <label className="col-4"></label>
    //           </div>
    //         </div>
    //         <div className="row">
    //           <label className="col-0"></label>
    //           <button className="col-8 number-singin-button" type="submit">ورود</button>
    //           <label className="col-4"></label>
    //         </div>
    //       </div>
    //     </div>
    //   </form>

    //   <div className="row">
    //     <label className="col-0"></label>
    //     {message && <p className="col-8">{message}</p>}
    //     <label className="col-4"></label>
    //   </div>

    //   <div className="row">
    //     <label className="col-4"></label>
    //     <a className="col-4 link number-singin-link" href="/singup"><p>نام نویسی | رمزعبورتان را گم کرده اید؟</p></a>
    //     <label className="col-0"></label>
    //   </div>
    // </div>
  );
};

export default LoginPage;
