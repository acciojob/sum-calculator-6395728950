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
      <input type="number" onChange={(e)=>setArr([...arr,Number(e.target.value)])} />
      <h1>Sum: {currentSum}</h1>
    </div>
  );
};

export default App;
