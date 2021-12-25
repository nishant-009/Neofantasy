import React, { Component } from 'react'
import Navbar from '../../../Components/Navigation/Navbar/Navbar'
import { } from './LoginPage.css'
// import { NavLink } from 'react-router-dom'

export default class LoginPage extends Component {
    render() {
        return (
            <>
                <div className="container-fluid loginPage m-0 p-0">
                    <Navbar />
                    <div className="login-container container w-75 mx-auto">

                        <div className="row">
                            <div className="col-8 d-none d-lg-block">
                                <img src="./assests/Login/FormCards.png" alt="Cards" srcset="" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <h1>Login <br /> To Continue</h1>

                                <form className='mt-4'>
                                    <input type="text" placeholder='Your Email or Username Here' className='mb-3' />

                                    {/* <NavLink to="/password" className="w-100"> */}
                                    <button>Continue</button>
                                    {/* </NavLink> */}

                                    <img src="./assests/Login/OR.png" alt="OR" className=' mt-3 img-fluid' />
                                </form>
                                <button type='submit' className='mt-3 google-btn'>
                                    <img src="./assests/Login/Google icon.png" alt="google" className='me-2 img-fluid' />
                                    Continue with Google
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}
