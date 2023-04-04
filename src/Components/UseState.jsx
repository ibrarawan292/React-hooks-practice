import React, { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const UseState = () => {
  const [sum, setSum] = useState(0);
  // ✅ Good
  const handleIncreaseValue = () => {
    setSum((prev) => prev + 1);
   

  };
  const handleDecreaseValue = () => setSum((prev) => prev - 1);

  // console.log(sum)
  if(sum <= 0){
   setSum((prev) => prev + 1)
  }
  // console.log(sum);
  useEffect(() => {
    console.log(sum);
  }, [sum]);

  return (
    <>
      <div className="w-50% flex justify-center items-center">
        <Link className="btn btn-info flex items-center mr-2" to={"/"}>
          <GrPrevious />
          Home
        </Link>
        <button onClick={handleIncreaseValue} className="btn btn-dark">
          {" "}
          +1
        </button>
        <h2 className="mx-3">{sum}</h2>
        <button onClick={handleDecreaseValue} className="btn btn-dark">
          {" "}
          -1
        </button>
        <Link
          className="btn btn-info ml-2 flex items-center"
          to={"/useReducer"}
        >
          Go TO UseReducer
          <MdNavigateNext />
        </Link>
      </div>
    </>
  );
};

export default UseState;
