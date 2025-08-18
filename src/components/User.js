import { use, useEffect, useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    console.log("useEffect ");

    return () => {
      console.log("useeffect returned");
    };
  }, []);
  console.log("rendered");
  return (
    <div className="user-card">
      <h2>Count = {count}</h2>
      <h2>Count2 = {count2}</h2>
      <h2>Name:{props.name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: @sharon07</h4>
    </div>
  );
};

export default User;
