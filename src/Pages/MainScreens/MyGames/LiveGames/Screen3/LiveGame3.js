import React from 'react'
import './LiveGame3.css'
import PakistanFlag from '../../../../../assests/PakistanFlag.png'
import IndiaFlag from '../../../../../assests/IndiaFlag.png'

const LiveGame3 = () => {
    return (
        <>
            <div className="fluid m-0 d-flex Main flex-column  m-0 p-0 h-100 w-100">
                <div className='container-fluid'>
                    <div className="mt-5 ScoreBoard d-flex flex-col">
                        <div className="Row1">
                            <img src="./assets/pakflag.png" alt="pak_flag" />
                            <p style={{ textAlign: "center" }}><b>Pakistan</b></p>
                            <p>Won the toss and decided to bat first</p>
                        </div>

                        <div className="Row2">
                            <p><h2>139/6</h2></p>
                            <p><h5>19.4/20</h5></p>
                            <p><h5>RR: 7.06</h5></p>
                        </div>

                        <div className="Row3">
                            <p><h2>119/6</h2></p>
                            <p><h5>17.8/20</h5></p>
                            <p><h5>RRR: 7.06 CRR: 9.06</h5></p>
                        </div>

                        <div className="Row4">
                            <img src="./assets/INDflag.png" alt="ind_flag" />
                            <p style={{ textAlign: "center" }}><b>India</b></p>
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
                        <div className='Comments'>
                            <div className='Row2'>SRI LANKA Won the toss & Decided to bat First</div>
                            <div className='Row3'>SRI LANKA Won the toss & Decided to bat First</div>
                            <div className='Row4'>SRI LANKA Won the toss & Decided to bat First</div>
                            <div className='Row5'>SRI LANKA Won the toss & Decided to bat First</div>
                            <div className='Row6'>SRI LANKA Won the toss & Decided to bat First</div>
                            <div className='Row7'>SRI LANKA Won the toss & Decided to bat First</div>
                            <div className='Row8'>SRI LANKA Won the toss & Decided to bat First</div>
                        </div>
                    </div>

                    <div className='MyPoints d-flex flex-column'>
                        <div className='Header d-flex flexy-row justify-content-around'>
                            <div>My points</div>
                            <div>Leader Board</div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='First d-flex flex-row justify-content-between p-3'>
                                <div className="num p-1"><h1>#1</h1></div>
                                <div className="user"><h4>@DeepKh</h4></div>
                                <div className="pts p-1">125pts</div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='Second d-flex flex-row justify-content-between p-3'>
                                <div className="num p-1"><h1>#2</h1></div>
                                <div className="user"><h4>@SmithB</h4></div>
                                <div className="pts p-1">125pts</div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='Third d-flex flex-row justify-content-between p-3'>
                                <div className="num p-1"><h1>#3</h1></div>
                                <div className="user"><h4>@You(@Maharsh)</h4></div>
                                <div className="pts p-1">125pts</div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='fourth d-flex flex-row justify-content-between p-3'>
                                <div className="num p-1">#4</div>
                                <div className="user">User123</div>
                                <div className="pts p-1">125pts</div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='fifth d-flex flex-row justify-content-between p-3'>
                                <div className="num p-1">#5</div>
                                <div className="user">User123</div>
                                <div className="pts p-1">125pts</div>
                            </div>
                        </div>

                        <div className='points d-flex flex-column mt-3'>
                            <div className='sixth d-flex flex-row justify-content-between p-3'>
                                <div className="num p-1">#6</div>
                                <div className="user">User123</div>
                                <div className="pts p-1">125pts</div>
                            </div>
                        </div>


                        {/* <div className='points d-flex flex-column mt-3'>
                    <div className='fivth d-flex flex-row justify-content-between p-3'>
                        <div className="num p-1"><h1>#5</h1></div>
                        <div className="user"><h4>User123</h4></div>
                        <div className="pts p-1">125pts</div>
                    </div>
                </div>

                <div className='points d-flex flex-column mt-3'>
                    <div className='Sixth d-flex flex-row justify-content-between p-3'>
                        <div className="num p-1"><h1>#6</h1></div>
                        <div className="user"><h4>User123</h4></div>
                        <div className="pts p-1">125pts</div>
                    </div>
                </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveGame3
