import React from 'react'

const Button2 = ({i,j}) => {
   
  return (
    <>
    <div className=" col-3 round"> 
        <div className="btn-group-vertical">
        <button type="button" className="btn btn-primary bg-black"> {i}</button>
        <button type="button" className="btn btn-primary bg-blue">{j}</button>
        </div>
    </div>
    </>
  )
}

export default Button2