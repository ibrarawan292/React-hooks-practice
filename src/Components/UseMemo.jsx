import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const UseMemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED"); // using useMemo hook this console.log will print only once when the toggle is clicked!

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]); //This will run when deps data changes

  return (
    <div className="flex justify-between items-center">
      <div>
        <Link
          className="btn btn-info flex items-center mr-2"
          to={"/useContext"}
        >
          <GrPrevious />
          Go To UseContext
        </Link>
      </div>
      <div>
        <h1>UseMemo Tutorial</h1>
        {/* <div> {findLongestName(data)} </div> */}
        <div> {getLongestName} </div>

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
        <Link className="btn btn-info flex items-center" to={"/useCallBack"}>
          UseCallBack
          <MdNavigateNext />
        </Link>
      </div>
    </div>
  );
};

export default UseMemoTutorial;
