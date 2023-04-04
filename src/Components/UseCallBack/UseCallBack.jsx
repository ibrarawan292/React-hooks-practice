import React, { useCallback, useState } from "react";
import Child from "./Child";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";

const UseCallBackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Yo, pls sub to the channel!");

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  return (
    <div className="App">
      <div className="flex justify-between items-center">
        <div>
          <Link className="btn btn-info flex items-center mr-2" to={"/useMemo"}>
            <GrPrevious />
            Go To UseMemo
          </Link>
        </div>
        <div>
          <Child returnComment={returnComment} />

          <button
            className="btn btn-primary"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            {" "}
            Toggle
          </button>
          {toggle && <h1> toggle </h1>}
        </div>
        <div>
          <Link className="btn btn-info flex items-center" to={"/"}>
            <GrPrevious />
            Go To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UseCallBackTutorial;
