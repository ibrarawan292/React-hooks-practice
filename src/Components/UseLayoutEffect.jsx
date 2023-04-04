import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { GrPrevious } from 'react-icons/gr'
import { MdNavigateNext } from 'react-icons/md'
import { Link } from 'react-router-dom'

const UseLayoutEffect = () => {

    const inputRef = useRef(null)
    useLayoutEffect(() => {
        //it runs before the useEffect
        console.log(inputRef.current.value)
    }, [])

    useEffect(() => {
        // console.log("Use Effect" )
        inputRef.current.value = "Hello World"
    }, [])
  return (
    <>
      <div className="flex justify-between m-2 items-center">
        <div>
          <Link
            className="btn btn-info flex items-center mr-2"
            to={"/useRef"}
          >
            <GrPrevious />
            Go To UseRef
          </Link>
        </div>
        <div>
          <input type="text" defaultValue="IBRAR" ref={inputRef} className='border'  />
        </div>
        <div>
          <Link className="btn btn-info flex items-center" to={"/useImperativeEffect"}>
            UseImperativeEffect
            <MdNavigateNext />
          </Link>
        </div>
      </div>
    </>
  )
}

export default UseLayoutEffect