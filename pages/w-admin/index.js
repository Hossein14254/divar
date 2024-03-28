import React, { useEffect, useState } from "react";
import Link from "next/link";
import CPT from "../page/CPT-d";

export default function Shop() {
  const [datas, setDatas] = useState([]);
  const [isLoding, setIsloding] = useState(true);
  const [isuser, setIsuser] = useState(false);
  const [isadmin,setIsadmin]=useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/shop");
        const data = await response.json();
        setDatas(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsloding(false);
      }
    };
    fetchData();
  }, []);
  
  
  return (
    <div className="container">
      <div className="row">
        {isLoding ? (
          <p>بارگیری</p>
        ) : (
          <div className="box-shop">
            {datas.map((item, index) => (
              <CPT key={index} {...item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
