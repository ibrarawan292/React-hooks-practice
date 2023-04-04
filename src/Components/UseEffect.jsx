import axios from "axios";
import React, { useEffect, useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const UseEffect = () => {
  const [comments, setComments] = useState([]);
  const [visibleComments, setVisibleComments] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(4);
  const [sum, setSum] = useState(0);
  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        // Extract email addresses from response data
        const emails = response.data.map((comment) => comment.email);
        // Set comments state to response data
        setComments(emails);
        // Set visibleComments state to first 5 emails
        setVisibleComments(emails.slice(startIndex, endIndex + 1));
      })
      .catch((error) => console.error(error));
  }, []);

  const loadMore = () => {
    console.log(startIndex, "start index")
    const newStartIndex = startIndex + 5;
    console.log(newStartIndex, "new start index")
    console.log(endIndex, "end index")
    const newEndIndex = endIndex + 5;
    console.log(newEndIndex, "new end index")
    setVisibleComments(comments.slice(newStartIndex, newEndIndex + 1));
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
  };
  console.log(visibleComments, "visible comments")
  //   console.log(data)
  //   const da = data
  // ✅ Good
  const handleIncreaseValue = () => {
    setSum((prev) => prev + 1);
  };
  return (
    <>
      <div className="flex justify-between m-2 items-center">
        <div>
          <Link
            className="btn btn-info flex items-center mr-2"
            to={"/useReducer"}
          >
            <GrPrevious />
            Go To UseReducer
          </Link>
        </div>
        <div>
          <h1>UseEffect</h1>
          <ul>
            {visibleComments.map((email) => (
              <li key={email}>{email}</li>
            ))}
          </ul>
          {endIndex < comments.length - 1 && (
            <button
              className="btn btn-primary"
              onClick={() => {
                loadMore();
                handleIncreaseValue();
              }}
            >
              Load More
            </button>
          )}
          <h1>{sum}</h1>
          {/* <button
            onClick={handleIncreaseValue}
            className="btn btn-dark my-2 ms-1"
          >
            {" "}
            +1
          </button> */}
        </div>
        <div>
          <Link className="btn btn-info flex items-center" to={"/useRef"}>
            UseRef
            <MdNavigateNext />
          </Link>
        </div>
      </div>
    </>
  );
};

export default UseEffect;
