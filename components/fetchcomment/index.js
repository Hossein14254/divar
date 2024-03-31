import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function CommentBox({id}) {
  const [currentCommentIndex, setCurrentCommentIndex] = useState(0);
  const [idagahi, setIdagahi] = useState("");
  const [iduser, setIduser] = useState(null);
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState([]);
  const [user,setUser]=useState([])

  const [numcomment, setNumcomment] = useState(0);

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/admin/comment');
      const data = await response.json();
      const comment = data.data;
  
      if (response.ok) {
          setIdagahi(id);
          setComments(comment.filter(c => c.idagahi == id)); 
          console.log(comment.filter(c => c.idagahi == id)[1].iduser.name); 
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  
  



  useEffect(() => {
    fetchComments();
  }, []);



  const showPreviousComment = () => {
    setCurrentCommentIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const showNextComment = () => {
    setCurrentCommentIndex((prevIndex) =>
      Math.min(comments.length - 1, prevIndex + 1)
    );
  };

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

  useEffect(() => {
    medata();

  }, []);

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">نظرات کاربران</h2>
        <div className="flex space-x-4">
          <button
            onClick={showPreviousComment}
            disabled={currentCommentIndex === 0}
            className={`p-2 rounded-full transition-colors duration-300 ${
              currentCommentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            } hover:bg-gray-200 focus:outline-none`}
          >
            <FaChevronRight />
          </button>
          <button
            onClick={showNextComment}
            disabled={currentCommentIndex === comments.length - 1}
            className={`p-2 rounded-full transition-colors duration-300 ${
              currentCommentIndex === comments.length - 1
                ? 'opacity-50 cursor-not-allowed'
                : ''
            } hover:bg-gray-200 focus:outline-none`}
          >
            <FaChevronLeft />
          </button>
        </div>
      </div>
      <div className="border-t pt-4">
      {comments && comments[currentCommentIndex] ?(
        <>
            <p className='text-gray-400 mb-3'>{comments[currentCommentIndex].iduser.name}</p>
            <p className="text-gray-700">{comments[currentCommentIndex].comment}</p>


          </>
        ) : (
          <>
            درحال بارگذاری...
          </>
        )}

      </div>
    </div>
  );
}


export default CommentBox;