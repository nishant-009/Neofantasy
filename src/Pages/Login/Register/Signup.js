import React, { Component } from 'react'
import Navbar from '../../../Components/Navigation/Navbar/Navbar'

export default class Signup extends Component {
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
                                <h1>Sign-up</h1><br />
                                <h4>For neofantasy</h4>

                                <form className='mt-4'>
                                    <input type="email" placeholder='Enter Email ID' className='mb-3' />

                                    <input type="tel" placeholder='Enter Phone Number' className='mb-3' />

                                    <input type="text" placeholder='Entyer Date of Birth (DD/MM/YY)' className='mb-3' />

                                    <button type='submit'>Continue</button>
                                </form>

                            </div>

                        </div>

                    </div>
                </div>
            </>
        )
    }
}
