import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    //API call
    // const timer = setInterval(() => {
    //   console.log("useEffect internal");
    // }, 1000);
    return () => {
      // clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h2>User Details</h2>
      <h3>Name: {name}</h3>
      <h3>Email: test@gmail.com</h3>
      <h3>Location: Pune</h3>
      <h3>Count:{count}</h3>
      <h3>Count2:{count2}</h3>
    </div>
  );
};
export default User;
