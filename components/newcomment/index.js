import React, { useState,useRouter,useEffect } from 'react';

const CommentBox = ({ onSubmit,id }) => {
  const [comment, setComment] = useState('');
  const [idagahi,setIdagahi]=useState(null)
  const [iduser,setIduser]=useState(null)
  useEffect(()=>{
    medata();
    setIdagahi(id);

  },[])
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
          setIduser(data.data._id);
      } catch (error) {
          console.error("خطا:", error);
      }
  };

  const handleSubmit = async(e) => {
      e.preventDefault();

      setIdagahi(id);
      if (!comment.trim()) return;
        console.log(idagahi, iduser);
        try{
            const responseDaste=await fetch("/api/admin/comment",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({idagahi,iduser,comment})
            });
            if(responseDaste.ok){
                console.log("ok")
                setComment("")
            }else{
                console.log("not")
            }
        }catch(err){
            console.log(err)

        }
};


return (
    <form className="mt-6">
      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="نظر خود را اینجا بنویسید..."
        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:border-blue-500"
        rows={4}
        cols={50}
      />
      <button onClick={handleSubmit} type="submit" className="mt-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">ارسال نظر</button>
    </form>
  );
};

export default CommentBox;
