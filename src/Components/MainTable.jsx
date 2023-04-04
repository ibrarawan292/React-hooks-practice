import React, { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import AddEditModal from "./AddEditModal";
import { Link } from "react-router-dom";
const MainTable = () => {
  const [data, setData] = useState([]);
  const [editdata, setEditData] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const getData = () => {
    const storedData = JSON.parse(localStorage.getItem("user"));
    if (storedData) {
      setData(storedData);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    const newData = data.map((item) => ({
      ...item,
      isChecked: e.target.checked,
    }));
    setData(newData);
  };

  const handleRowCheckboxChange = (e, id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return { ...item, isChecked: e.target.checked };
      } else {
        return item;
      }
    });
    setData(newData);
  };

  const handleEdit = (item) => {
    setShowForm(true);
    // let filterData = data?.filter((obj) => obj.id === id);
    // console.log(filterData[0], "PERMISION");
    // let obj = {
    //   id: filterData[0].id,
    //   name: filterData[0].name,
    //   role_ids: filterData[0].role_ids,
    //   email: filterData[0].email,
    //   country: filterData[0].country,
    // };
    // console.log(obj);
    setEditData(item);
  };

  const handleDelete = (id) => {
    const data = JSON.parse(localStorage.getItem("user")) || [];
    const updatedData = data.filter((item) => item.id !== id);
    localStorage.setItem("user", JSON.stringify(updatedData));
    setData(updatedData);
  };

  return (
    <>
      <div className="flex justify-between">
        <button
          className="btn btn-primary"
          onClick={() => {
            setShowForm(true);
            setEditData(null);
          }}
        >
          Create
        </button>

        <Link className="btn btn-info flex items-center" to={"/useState"}>
          UseState
          <MdNavigateNext />
        </Link>

        <Link className="btn btn-info flex items-center" to={"/tic-tac-toe"}>
          Tic-Tac-Toe-Game
          <MdNavigateNext />
        </Link>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between py-4 bg-white dark:bg-gray-800">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  // fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  // clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search users"
            />
          </div>
        </div>
        {data && data.length === 0 ? (
          <>
            <h1>No data found</h1>
          </>
        ) : (
          <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all-search" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((item) => {
                    console.log(item);
                    return (
                      <tr
                        key={item.id}
                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                      >
                        <td className="w-4 p-4">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              checked={item.isChecked}
                              onChange={(e) =>
                                handleRowCheckboxChange(e, item.id)
                              }
                            />
                            <label
                              htmlFor="checkbox-table-search-1"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        <td className="px-6 py-4">{item.name}</td>
                        <td className="px-6 py-4">{item.email}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                            Online
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          {/* <!-- Modal toggle --> */}
                          <button
                            href="#"
                            // type="button"
                            onClick={() => {
                              setShowForm(true);
                              handleEdit(item);
                            }}
                            className="btn btn-primary font-medium mr-2 text-white dark:text-blue-500 "
                          >
                            Edit user
                          </button>
                          <a
                            href="#"
                            // type="button"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                            className="btn btn-danger font-medium mr-2 text-white dark:text-blue-500"
                          >
                            Delete User
                          </a>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </>
        )}

        {showForm ? (
          <AddEditModal
            showForm={showForm}
            setShowForm={setShowForm}
            getData={getData}
            editData={editdata}
            setEditData={setEditData}
          />
        ) : null}
      </div>
    </>
  );
};

export default MainTable;
