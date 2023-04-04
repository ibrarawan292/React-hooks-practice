import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import Select from "react-select";
import { v4 as uuidv4 } from "uuid";

const AddEditModal = ({ showForm, setShowForm, editData, getData }) => {
  console.log(editData, "edit");
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  //   // gender: "",
  //   hobbies: [],
  //   country: null,
  // });
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [country, setCountry] = useState("");


  useEffect(() => {
    if (editData) {
      setName(editData.name);
      setHobbies(editData.role_ids);
      setCountry(editData.country);
      setEmail(editData.email);
    }
  }, [editData]);
  console.log(hobbies, "edithobbies");
 

  const options = [
    { label: "Reading", value: "reading" },
    { label: "Sports", value: "sports" },
    { label: "Music", value: "music" },
  ];

  const countryOptions = [
    { value: "USA", label: "United States of America" },
    { value: "CAN", label: "Canada" },
    { value: "IND", label: "India" },
  ];



  // const handleInputChange = (event) => {
  //   console.log(event.target.value)
  //   // const { name, value } = event.target;
  //   // setUser({ ...user, [name]: value });
  //   // const value = event.target.value;
  //   setUser(event.target.value);
  // };

  // console.log(user)
  const handleMultiSelectChange = (selectedList) => {
    console.log(selectedList);
    setHobbies(selectedList);
    // let selectedIds = selectedList.map((val) => val.cat);
    // setHobbiesID(selectedIds);
  };

  const handleSelectChange = (selectedOption) => {
    setCountry(selectedOption);
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    let arr = []
    const user = {
      id: uuidv4(),
      name: name,
      role_ids: hobbies,
      email: email,
      country: country,
    };
    arr.push(user)
    localStorage.setItem("user", JSON.stringify(arr));
    setShowForm(false)
    getData()
  };
  return (
    <>
      {showForm ? (
        <div class="fixed top-0 left-0 right-0 z-50 items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
          <div class="relative w-full h-full max-w-2xl md:h-auto">
            {/* <!-- Modal content --> */}
            <form
              action="#"
              class="relative bg-white rounded-lg shadow dark:bg-gray-700"
              onSubmit={handleFormSubmit}
            >
              {/* <!-- Modal header --> */}
              <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit user
                </h3>
                <button
                  type="button"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="editUserModal"
                  onClick={() => setShowForm(false)}
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div class="p-6 space-y-6">
                <div class="grid grid-cols-6 gap-6">
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="name"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="email"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="example@company.com"
                      required=""
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="department"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Hobbies
                    </label>
                    <Select
                      options={options}
                      value={hobbies}
                      isMulti
                      onChange={handleMultiSelectChange}
                      placeholder="Select Country"
                      defaultValue={hobbies}
                    />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label
                      for="company"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Country
                    </label>
                    <Select
                      options={countryOptions}
                      value={country}
                      onChange={handleSelectChange}
                      placeholder="Select Country"
                      defaultValue={country}
                    />
                  </div>
                </div>
              </div>
              {/* <!-- Modal footer --> */}
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="submit"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save all
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AddEditModal;
