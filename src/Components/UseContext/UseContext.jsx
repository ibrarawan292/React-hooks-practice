import React, { createContext, useState } from "react";
import User from "./User";
import Login from "./login";
import { Link } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

export const AppContext = createContext(null);

const UseContext = () => {
  const [userName, setUserName] = useState("");
  console.log(userName);
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <>
        <div className="flex justify-between items-center">
          <div>
            <Link
              className="btn btn-info flex items-center mr-2"
              to={"/useRef"}
            >
              <GrPrevious />
              Go To UseImperative
            </Link>
          </div>
          <div>
            <Login />
            <User />
          </div>
          <div>
            <Link
              className="btn btn-info flex items-center"
              to={"/useMemo"}
            >
              UseMemo
              <MdNavigateNext />
            </Link>
          </div>
        </div>
      </>
    </AppContext.Provider>
  );
};

export default UseContext;
