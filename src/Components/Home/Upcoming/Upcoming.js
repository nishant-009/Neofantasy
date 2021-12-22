import React from 'react'
import './Upcoming.css'

const Upcoming = () => {
    return (
        <>
            <div className="container-fluid upcoming d-flex flex-column flex-md-row align-items-center justify-content-between py-1 px-4 text-center text-lg-start ">
                <div className="left">
                    <p>You have upcoming match</p>
                    <div className="match-no ">
                        <p>Math #n</p>
                    </div>
                    <div className="match-title">
                        <p>India Tour of Sri Lanka</p>
                    </div>
                </div>
                <div className="center">
                    <div className="match-flag d-flex justify-content-center align-items-center ">
                        <div className="card-flag">
                            <img src="/assests/Flags/SriLanka.png" alt="" className='img-fluid' />
                        </div>
                        <p>Sl</p>
                        <span>vs</span>
                        <p>IND</p>
                        <div className="card-flag">
                            <img src="/assests/Flags/India.png" alt="" className='img-fluid' />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="match-info d-flex flex-column justify-content-between w-100 text-center text-lg-start">
                        <p>03 h : 20 m</p>
                        <p className="text-dark">GoTo Match</p>
                        <p className="silent">View My All Upcoming  Games</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upcoming
