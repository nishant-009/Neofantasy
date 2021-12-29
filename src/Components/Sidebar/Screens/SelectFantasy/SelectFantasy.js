import React from 'react'
import './SelectFantasy.css'

const SelectFantasy = () => {
    return (
        <>
            <div className="selectFanatay p-3">
                <div className="d-flex align-items-center justify-content-between w-100">
                    <div>
                        <h5 className='blue fw-600'>Select Your Fantasy 11</h5>
                        <p className='silent-text text-start fw-600 mt-2'>0 / 11 Players Selected</p>
                    </div>
                    <div className="d-flex flex-column justify-content-center">
                        <p className='silent-text  text-center' style={{ fontSize: "10px" }}>Credits</p>
                        <div className="credits-div"><p>143.0</p></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectFantasy
