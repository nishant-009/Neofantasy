import React from 'react'
import './LiveGame3.css'
import PakistanFlag from '../../../../../assests/PakistanFlag.png'
import IndiaFlag from '../../../../../assests/IndiaFlag.png'

const LiveGame3 = () => {
    return (
        <>
            <div className='mt-2 container fluid'>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='row'>
                            <div className='col-12'>
                                <div class="p-3">

                                    <div class="Scoreboard d-flex justify-content-around">

                                        <div class="p-3">
                                            <img src="./assets/pakflag.png" alt="pak_flag" />
                                            <p style={{ textAlign: "center" }}><b>Pakistan</b></p>
                                            <p style={{ textAlign: "center" }}>Won the toss and decided to bat first</p>
                                        </div>
                                        <div class="p-3">
                                            <h2>139/6</h2>
                                            <h5>19.4/20</h5>
                                            <h5>RR: 7.06</h5>
                                        </div>
                                        <div class="p-3">
                                            <h2>139/6</h2>
                                            <h5>19.4/20</h5>
                                            <h5>RRR: 7.06 CRR:9.06</h5>
                                        </div>
                                        <div class="p-3">
                                            <img src="./assets/INDflag.png" alt="pak_flag" />
                                            <p style={{ textAlign: "center" }}><b>India</b></p>

                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12">
                                <div className="prob mt-2">
                                    <div class="p-3 WinProb d-flex justify-content-between">
                                        <div className="Row1" style={{ color: "#0B4AAA" }}><b>17%</b></div>

                                        <div className="Row2">
                                            <b>Win Probability</b>
                                            {/* <img className="blue" src="./assets/blueProb.png" alt="bluebar" />    
                                    <img className="darkblue" src="./assets/VioletProb.png" alt="violetbar" /> */}
                                        </div>

                                        <div className="Row3" style={{ color: "#0B4AAA" }}><b>83%</b></div>

                                    </div>
                                    <div className='col-4'>
                                        <img className='d-flex align-self-end' style={{ width: "400px" }} src="./assets/probtag.png" alt="prop_tag" />
                                    </div>


                                </div>
                                <div className="ballbyball mt-2">

                                    <div class="p-3">
                                        {/* <h1>ballbyball</h1>  */}
                                        <ul class="nav">
                                            <li class="">
                                                <a class="nav-link" href="#" style={{ color: "black" }}><b>Ball By Ball</b></a>
                                            </li>
                                            <li class="">
                                                <a class="nav-link" href="#" style={{ color: "black" }} >Fall of Wickets</a>
                                            </li>
                                        </ul>

                                        <div className='balls'>
                                            {/* <div className='ball1'>0</div>
                                    <div className='ball2'>1</div>
                                    <div className='ball3'>2</div>
                                    <div className='ball4'>2</div>
                                    <div className='ball5'>2</div>
                                    <div className='ball6'>2</div>
                                    <div className='ball7'>6</div>
                                    <div className='ball8'>W</div>
                                    <div className='ball9'>4</div>
                                    <div className='ball10'>WD</div> */}

                                            <img className='d-flex align-self-end' style={{ width: "400px" }} src="./assets/ballbyballtag.png" alt="prop_tag" />


                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="col-md-6 col-sm-12 mt-2">
                                <div className='Commentary'>
                                    <div class="p-3">
                                        {/* <h1>Commentary</h1>  */}
                                        <ul class="nav bg-light">
                                            <li class="">
                                                <a class="nav-link" href="#" style={{ color: "black" }}><b>Commentary</b></a>
                                            </li>
                                            <li class="">
                                                <a class="nav-link" href="#" style={{ color: "black" }}>Scorecard</a>
                                            </li>
                                        </ul>

                                        <div className='Comments'>
                                            <div className='p-1 Row2'>SRI LANKA Won the toss & Decided to bat First</div>
                                            <div className='p-1 Row3'>SRI LANKA Won the toss & Decided to bat First</div>
                                            <div className='p-1 Row4'>SRI LANKA Won the toss & Decided to bat First</div>
                                            <div className='p-1 Row5'>SRI LANKA Won the toss & Decided to bat First</div>
                                            <div className='p-1 Row6'>SRI LANKA Won the toss & Decided to bat First</div>
                                            <div className='p-1 Row7'>SRI LANKA Won the toss & Decided to bat First</div>
                                            <div className='p-1 Row8'>SRI LANKA Won the toss & Decided to bat First</div>
                                        </div>


                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-md-4 Right'>
                        <div class="">
                            <div className='points d-flex flex-column mt-3 p-2'>
                                <div className='First d-flex flex-row justify-content-between p-3 mt-2'>
                                    <div className="num p-1"><h1>#1</h1></div>
                                    <div className="user"><h4>@DeepKh</h4></div>
                                    <div className="pts p-1">125pts</div>
                                </div>

                                <div className='Second d-flex flex-row justify-content-between p-2 mt-2'>
                                    <div className="num p-1"><h1>#2</h1></div>
                                    <div className="user"><h4>@SmithB</h4></div>
                                    <div className="pts p-1">125pts</div>
                                </div>

                                <div className='Third d-flex flex-row justify-content-between p-2 mt-2'>
                                    <div className="num p-1"><h1>#3</h1></div>
                                    <div className="user"><h4>@You(@Maharsh)</h4></div>
                                    <div className="pts p-1">125pts</div>
                                </div>

                                <div className='fourth d-flex flex-row justify-content-between p-3'>
                                    <div className="num p-1">#4</div>
                                    <div className="user">User123</div>
                                    <div className="pts p-1">125pts</div>
                                </div>

                                <div className='fifth d-flex flex-row justify-content-between p-3'>
                                    <div className="num p-1">#5</div>
                                    <div className="user">User123</div>
                                    <div className="pts p-1">125pts</div>
                                </div>

                                <div className='sixth d-flex flex-row justify-content-between p-3'>
                                    <div className="num p-1">#6</div>
                                    <div className="user">User123</div>
                                    <div className="pts p-1">125pts</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LiveGame3
