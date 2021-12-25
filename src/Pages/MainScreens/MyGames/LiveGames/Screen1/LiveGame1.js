import React from 'react'
import './LiveGame1.css'
import PakistanFlag from '../../../../../assests/PakistanFlag.png'
import IndiaFlag from '../../../../../assests/IndiaFlag.png'

const LiveGame1 = () => {
    return (
        <>
            <div className="fluid m-0 d-flex  m-0 p-0 h-100 w-100">
                <div className='container'>
                    <div className="mt-5 d-flex flex-row">

                        <div className="MyteamCard d-flex flex-row ">
                            <div className="Col1 d-flex flex-column">
                                <div className="Row1"><h3><b>My Teams</b></h3></div>
                                <div className="Row2">You have Selected</div>
                                <div className="Row3"><h4><b>India 1</b></h4></div>
                            </div>

                            <div className="Col2 d-flex flex-column">
                                <div><b>Change team</b></div>
                            </div>
                        </div>

                        <div className="PoolCard d-flex flex-row">
                            <div className="Col1 d-flex flex-column">
                                <div className="Row1"><h3><b>My Pools</b></h3></div>
                                <div className="Row2">You have Selected</div>
                                <div className="Row3"><h4><b>Pool #12, Pool #16</b></h4></div>
                            </div>

                            <div className="Col2 d-flex flex-column">
                                <div><b>Manage pool</b></div>
                            </div>

                        </div>

                    </div>

                    <div className="BigCard mt-5 d-flex flex-row justify-content-between">

                        <div className="PakSquad d-flex flex-column">
                            <div className="Batsman" style={{ textAlign: "center" }}>
                                <p><b>Batsmen</b></p>
                                <p>Babar Azam (c) <br /> Asif Ali <br /> Fakhar Zaman<br />Haider Ali</p>
                            </div>

                            <div className="Wicketkeeper" style={{ textAlign: "center" }}>
                                <p><b>Wicketkeepers</b></p>
                                <p>Mohammad Rizwan <br />Sarfaraz Ahmed</p>
                            </div>

                            <div className="All-rounder" style={{ textAlign: "center" }}>
                                <p><b>All-rounders</b></p>
                                <p>Mohammad Hafeez <br />Mohammad Nawaz<br />Mohammad Wasim<br />Shadab Khan<br />Imad Wasim <br />Shoaib Malik</p>
                            </div>

                            <div className="Bowler" style={{ textAlign: "center" }}>
                                <p><b>Bowlers</b></p>
                                <p>Shaeen Afridi <br />Hasan Ali<br />Haris Raut</p>
                            </div>
                        </div>


                        <div className="CardCenter d-flex flex-column ">
                            <div className="Title">
                                <div className="Row1"><h3>2021 ICC T20 World CupMatch #16</h3></div>
                                <div className="Row2">Sun 24 October, 18:00 Local ( 19:30 IST )</div>
                                <div className="Row3">Dubai International Stadium, Dubai, UAE</div>
                            </div>

                            <div className="FlagImage d-flex flex-row">

                                <div className="Row1">
                                    <img src={PakistanFlag} alt='pak_flag' />
                                    <p style={{ textAlign: "center" }}><h3>Pakistan</h3></p>
                                </div>

                                <p className="Row2">VS</p>

                                <div className="Row3">
                                    <img src={IndiaFlag} alt='ind_flag' />
                                    <p style={{ textAlign: "center" }}><h3>India</h3></p>
                                </div>

                            </div>

                            <div className="Watch d-flex flex-row">
                                <div className="Day d-flex flex-row justify-content-around">
                                    <div className="Row1" style={{ color: "white", fontSize: "64px", fontWeight: "600px", textAlign: "center" }}>0</div>
                                    <div className="Row2" style={{ color: "white", fontSize: "64px", fontWeight: "600px", textAlign: "center" }}>1</div>
                                </div>
                                <div className="Hour d-flex flex-row">
                                    <div className="Row1" style={{ color: "white", fontSize: "64px", fontWeight: "600px", textAlign: "center" }}>2</div>
                                    <div className="Row2" style={{ color: "white", fontSize: "64px", fontWeight: "600px", textAlign: "center" }}>3</div>
                                </div>
                                <div className="Minute d-flex flex-row">
                                    <div className="Row1" style={{ color: "white", fontSize: "64px", fontWeight: "600px", textAlign: "center" }}>4</div>
                                    <div className="Row2" style={{ color: "white", fontSize: "64px", fontWeight: "600px", textAlign: "center" }}>6</div>
                                </div>
                                <div className="Second d-flex flex-row">
                                    <div className="Row1" style={{ color: "white", fontSize: "64px", fontWeight: "600px", textAlign: "center" }}>4</div>
                                    <div className="Row2" style={{ color: "white", fontSize: "64px", fontWeight: "600px", textAlign: "center" }}>7</div>
                                </div>
                            </div>
                        </div>

                        <div className="IndSquad d-flex flex-column">
                            <div className="Batsman" style={{ textAlign: "center" }}>
                                <p><b>Batsmen</b></p>
                                <p>Virat Kohli (c)<br />Rohit Sharma<br />KL Rahul<br />Suryakumar Yadav</p>
                            </div>

                            <div className="Wicketkeeper" style={{ textAlign: "center" }}>
                                <p><b>Wicketkeepers</b></p>
                                <p>Rishabh Pant <br />Ishan Kishan</p>
                            </div>

                            <div className="All-rounder" style={{ textAlign: "center" }}>
                                <p><b>All-rounders</b></p>
                                <p>Hardik Pandya<br />Ravindra Jadeja<br />Rahul Chahar<br />Ravichandra Ashiwn<br />Azar patel</p>
                            </div>

                            <div className="Bowler" style={{ textAlign: "center" }}>
                                <p><b>Bowlers</b></p>
                                <p>Varun Chakravarthu <br />Jasprit Bumrah<br />Bhuvneshwar Kumar<br />Mohammed Shami</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveGame1
