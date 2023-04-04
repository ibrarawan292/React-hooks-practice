import React, { useRef } from "react";
import Button from "./Button";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";

const UseImperativeEffect = () => {
  const buttonRef = useRef(null);
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <Link
            className="btn btn-info flex items-center mr-2"
            to={"/useLayoutEffect"}
          >
            <GrPrevious />
            Go To UseLayout
          </Link>
        </div>
        <div>
          <div>UseImperativeEffect</div>
          <button
            onClick={() => {
              buttonRef.current.alterToggle();
            }}
            className="border p-3"
          >
            Button from Parent
          </button>
          <Button ref={buttonRef} />
        </div>
        <div>
          <div>
            <Link
              className="btn btn-info flex items-center"
              to={"/useContext"}
            >
              UseContext
              <MdNavigateNext />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseImperativeEffect;
