import React from 'react'
import Button from './Button'
import Button2 from './Button2'
import { BsFillPlayFill } from 'react-icons/bs';
import { AiOutlineStar } from 'react-icons/ai';
import "./css/main.css"
const ButtonRow = ({name1, name2}) => {
  return (
    <>
    <div className="card custom-card2">
                    <div className="card-body">
                        <div className="row">
                            {/* First Column - col-3 */}
                            <div className="col-4">
                            <div className='row'>
                            <button  className="btn btn-rounded custom-button col-5">
                            <div className='row' style={{ margin: '0 !important', padding: '0 !important' }}>
                            <div className='col-12 round-container1' style={{ margin: '0 !important', padding: '0 !important' }}>
                                <BsFillPlayFill size='30' style={{border:"5px solid white ",background:"gray", borderRadius: "50%", margin: '0 !important', padding: '0 !important'}}/>
                                  IN-PLAY
                            <span> test test</span>  
                            </div>
                           
                        
                            
                            </div>
                            </button>

                                <div className='col-7'>
                                 <b> {name1}  
                                <span className='spanColor'>(vs)</span> {name2}  </b>
                                <p>Test Matches </p>
                                </div>
                                </div>
                            </div>

                           

                            {/* Third Column - col-7 */}
                            <div className="col-3">
                                <div className='row'>

                           <Button2 i='L' j="03" />
                           <Button2 i='M' j="01" />
                           <Button2 i='F' j="11" />
                           <Button2 i='MO' j="01" />
                                </div>
                            </div>


                            <div className="col-5">
                            <div className="row"> 
                                       <Button/>
                                       <Button/>
                                       <Button/>
                                       <Button/>
                                       <Button/>
                                     <AiOutlineStar size='30' className='col-2 mt-3'/> 
                            </div>
                            </div>
                        </div>
                    </div>
                </div></>
  )
}

export default ButtonRow