import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [currentSum, setSum] = useState(0);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    setSum(sum);
  }, [arr]); // ✅ correct dependency array

   

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input type="number" onChange={(e)=>setArr([...arr,Number(e.target.value)])} />
      <p>Sum: {currentSum}</p>
    </div>
  );
};

export default App;
