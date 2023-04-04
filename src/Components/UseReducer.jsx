import React, { useReducer } from "react";
import { GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "SHOWTEXT":
      return { count: state.count, showText: !state.showText };
    default:
      state;
  }
};

const UseReducer = () => {
  //   const [count, setCount] = useState(0);
  //   const [showText, setShowText] = useState(true);
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  console.log(state);
  return (
    <>
      <div className="flex justify-between m-2 items-center">
        <div>
          <Link
            className="btn btn-info flex items-center mr-2"
            to={"/useState"}
          >
            <GrPrevious />
            Go To UseState
          </Link>
        </div>
        <div>
          {state.count}
          <button
            className="btn btn-primary mx-2"
            onClick={() => {
              // setCount(count + 1);
              // setShowText(!showText);
              dispatch({ type: "INCREMENT" });
              dispatch({ type: "SHOWTEXT" });
            }}
          >
            Click Here
          </button>
          {state.showText && <p>This is a Text</p>}
        </div>
        <div>
          <Link className="btn btn-info flex items-center" to={"/useEffect"}>
            UseEffect
            <MdNavigateNext />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
