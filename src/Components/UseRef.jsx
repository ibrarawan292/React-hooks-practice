import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const UseRef = () => {
  const inputRef = useRef(null);

  const handleSubmit = () => {
    inputRef.current.value = "";
  };
  return (
    <div className="flex justify-between m-2 items-center">
      <div>
        <Link className="btn btn-info flex items-center mr-2" to={"/useEffect"}>
          <GrPrevious />
          Go To UseEffect
        </Link>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter a name"
          className="border"
          ref={inputRef}
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>

      <div>
        <Link className="btn btn-info flex items-center" to={"/useLayoutEffect"}>
          UseLayOutEffect
          <MdNavigateNext />
        </Link>
      </div>
    </div>
  );
};

export default UseRef;
