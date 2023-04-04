import React from 'react'
import { GrPrevious } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const TicTacToe = () => {
  return (
    <>
    <div>
    <Link className="btn btn-info flex items-center w-[15%]" to={"/"}>
          <GrPrevious />
          Go to Home
        </Link>
    </div>
    
    <h1>Comming Soon....!!</h1>
    </>
  )
}

export default TicTacToe