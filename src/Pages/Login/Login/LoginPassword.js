import React, { Component } from 'react'
import Navbar from '../../../Components/Navigation/Navbar/Navbar'

export default class LoginPassword extends Component {
    render() {
        return (
            <>
                <div className="container-fluid loginPage m-0 p-0">
                    <Navbar />
                    <div className="login-container container">

                        <div className="row">
                            <div className="col-8 d-none d-lg-block">
                                <img src="./assests/Login/FormCards.png" alt="Cards" srcset="" />
                            </div>
                            <div className="col-sm-12 col-lg-4">
                                <h1>Welcome</h1>
                                <h4 className='text-start'>@Username</h4>

                                <form className='mt-4'>
                                    <input type="password" placeholder='Your Password Here' className='mb-3' />

                                    <button type='submit'>Continue</button>

                                    <p className='silent-text mt-2'>
                                        By Proceeding, I agree to <u>T&C</u> & <u>Privacy Policy</u>
                                    </p>

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
