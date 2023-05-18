import React, { useState } from 'react'
import Select from 'react-select'


const ReactSelectAll = () => {

    
  const options = [

    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [selectedOption, setSelectedOption] = useState(null);


  const handleChange = (selectedOption, event) => {

    if (selectedOption.length == 0) {
      return setSelectedOption(null);
    }

    else if (event.action == "select-option" && event.option.value === "All") {
      return setSelectedOption(options);
    }
    else {
      return setSelectedOption(selectedOption);
    }

  }

  return (
    <>
    <Select
      options={[{ label: "All", value: "All" }, ...options]}
      onChange={handleChange}
      selectedOption={selectedOption}
      isMulti
      value={selectedOption}
    />
    
    <>
            {selectedOption?.map((obj) => {
                return <h1>{obj.value}</h1>
            })}

        </>

  </>
  )
}

export default ReactSelectAll