import React from 'react'
import './LiveGame2.css'
import PakistanFlag from '../../../../../assests/PakistanFlag.png'
import IndiaFlag from '../../../../../assests/IndiaFlag.png'

const LiveGame2 = () => {
    return (
        <>
            <div className="fluid m-0 d-flex Main flex-column  m-0 p-0 h-100 w-100" >
                <div className='container-fluid'>
                    <div className="mt-5 ScoreBoard d-flex flex-col">
                        <div className="Row1">
                            <img src="./assets/pakflag.png" alt="pak_flag" />
                            <p><b>Pakistan</b></p>
                            <p>Won the toss and decided to bat first</p>
                        </div>

                        <div className="Row2">
                            <p><h2>139/6</h2></p>
                            <p><h5>19.4/20</h5></p>
                            <p><h5>RR: 7.06</h5></p>
                        </div>

                        <div className="Row3">
                            <p>* Yet to bat</p>
                        </div>

                        <div className="Row4">
                            <img src="./assets/INDflag.png" alt="ind_flag" />
                            <p><b>India</b></p>
                        </div>
                    </div>

                    <div className="mt-4 WinProb d-flex">
                        <div className="Row1">17%</div>

                        <div className="Row2">
                            <p className="title">Win Probability</p>
                            <img className="blue" src="./assets/blueProb.png" alt="bluebar" />
                            <img className="darkblue" src="./assets/VioletProb.png" alt="violetbar" />
                        </div>

                        <div className="Row3">83%</div>
                    </div>

                    <div className="mt-4 BallByBall d-flex flex-column justify-content-around">
                        <div className='d-flex flex-row justify-content-around '>
                            <div><b>Ball By Ball</b></div>
                            <div>Fall Of Wickets</div>
                        </div>

                        <div className='balls  d-flex flex-row justify-content-around'>
                            <div className='ball1'>0</div>
                            <div className='ball2'>1</div>
                            <div className='ball3'>2</div>
                            <div className='ball4'>2</div>
                            <div className='ball5'>2</div>
                            <div className='ball6'>2</div>
                            <div className='ball7'>6</div>
                            <div className='ball8'>W</div>
                            <div className='ball9'>4</div>
                            <div className='ball10'>WD</div>
                        </div>
                    </div>

                    <div className='Commentary d-flex flex-column justify-content-around'>
                        <div className='Row1'><b>Commentary ScoreCard</b></div>
                        <div className='Row2'>SRI LANKA Won the toss & Decided to bat First</div>
                        <div className='Row3'>SRI LANKA Won the toss & Decided to bat First</div>
                        <div className='Row4'>SRI LANKA Won the toss & Decided to bat First</div>
                        <div className='Row5'>SRI LANKA Won the toss & Decided to bat First</div>
                        <div className='Row6'>SRI LANKA Won the toss & Decided to bat First</div>
                        <div className='Row7'>SRI LANKA Won the toss & Decided to bat First</div>
                        <div className='Row8'>SRI LANKA Won the toss & Decided to bat First</div>
                    </div>

                    <div className='MyPoints d-flex flex-column'>
                        <div className='Header d-flex flexy-row justify-content-around'>
                            <div>My points</div>
                            <div>Leader Board</div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='Hundred d-flex flex-row justify-content-between p-3'>
                                <div><img src="./assets/tag100.png" alt="100_tag" />Your Team was a 100% Match</div>
                                <div className='pts p-1'><h5>5pts</h5></div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='Wicket d-flex flex-row justify-content-between p-3'>
                                <div><img src="./assets/tagwicket.png" alt="wicket_tag" />Woah !, BowlerFirstName got a wicket</div>
                                <div className='pts p-1'><h5>25pts</h5></div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='Helmet d-flex flex-row justify-content-between p-3'>
                                <div><img src="./assets/taghelmet.png" alt="helmet_tag" />WicketKeeperName caught a wicket</div>
                                <div className='pts p-1'><h5>25pts</h5></div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='Wicket2 d-flex flex-row justify-content-between p-3'>
                                <div><img src="./assets/tagwicket.png" alt="wicket_tag" />Woah !, BowlerFirstName got a wicket</div>
                                <div className='pts p-1'><h5>25pts</h5></div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='Helmet d-flex flex-row justify-content-between p-3'>
                                <div><img src="./assets/taghelmet.png" alt="helmet_tag" />WicketKeeperName caught a wicket</div>
                                <div className='pts p-1'><h5>25pts</h5></div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='Wicket2 d-flex flex-row justify-content-between p-3'>
                                <div><img src="./assets/tagwicket.png" alt="wicket_tag" />Woah !, BowlerFirstName got a wicket</div>
                                <div className='pts p-1'><h5>25pts</h5></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveGame2
