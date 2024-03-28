import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const DashboardPage = () => {
  const [user, setUser] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        let token = localStorage.getItem("token");
        token = token.substring(1, token.length - 1);

        if (!token) {
          router.push("/singin");
          return;
        }

        const response = await fetch("/api/auth/me", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        if (response.ok) {
          const userData = await response.json();
          console.log("user data :",userData.data)

          setUser(userData.data);



          console.log("user :",user);
        } else {
          console.log("res NO");
          //router.push("/signin");
        }
      } catch (error) {
        console.error("Error:", error);
        router.push("/signin");
      }
    };

    fetchUserData();
  }, [router]);

  return (
    <div>
      {user && Object.keys(user).length > 0 ? (
        <div>
          <h1>Welcome, {user.name}!</h1>
          {/* Add more user info as needed */}
        </div>
      ) : (
        <p>not user</p>
      )}
    </div>
  );
};

export default DashboardPage;
