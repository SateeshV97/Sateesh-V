import React from 'react'

const Button = () => {
    const label='1.79';
    const val='2.4L';
  return (
    <>
    <div className=" col-2 round"> 

       {/*  <button className='custom-button btn btn-rounded' >
        {label}<br/>
        <h6 className='button-spanColor'>{val}</h6> 
        </button> */}
         <div className="btn-group-vertical">
        <button type="button" className="btn btn-primary bg-black"> {label} 
        <h6  className="button-spanColor">{val}</h6></button>
        </div>
    </div>
    </>
  )
}

export default Button