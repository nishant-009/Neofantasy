import React, { Component } from 'react'
import vk from '../../../../assests/Player2.png'

export default class Confirm extends Component {
    render() {
        const wk = [
            {
                img: vk,
                name: "KL Rahul",
                points: "9.0",
            },
        ]


        const bat = [
            {
                img: vk,
                name: "KL Rahul",
                points: "9.0",
            },
            {
                img: vk,
                name: "Sanju Samson",
                points: "9.0",
            },
            {
                img: vk,
                name: "Rishab Pant",
                points: "9.0",
            },
        ]

        const all = [
            {
                img: vk,
                name: "KL Rahul",
                points: "9.0",
            },
            {
                img: vk,
                name: "Sanju Samson",
                points: "9.0",
            },
            {
                img: vk,
                name: "Rishab Pant",
                points: "9.0",
            },
            {
                img: vk,
                name: "Rishab Pant",
                points: "9.0",
            },
            {
                img: vk,
                name: "Rishab Pant",
                points: "9.0",
            },
        ]

        return (
            <>
                <div className="container-fluid confirm p-0 mb-4">
                    <div className="text-center p-3">
                        <h3>Confirm Team</h3>
                        <p className='silent-text'>Select Captain & Vice Captain</p>
                    </div>
                    <div className="" style={{ background: "rgba(232, 243, 243, 0.7)" }}>
                        <h4 className='p-3 fw-600'>Wicket Keeper</h4>
                        {wk.map((curElem) => {
                            const { name, img } = curElem;
                            return (
                                <div className="player-card d-flex align-items-center justify-content-between p-3" style={{ backgroundColor: "rgba(15, 40, 101, 0.6)" }}>
                                    <div className="d-flex align-items-center">
                                        <div style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%", overflow: "hidden" }}>
                                            <img src={img} alt="" className='img-fluid' />
                                        </div>
                                        <p className='ms-3 me-2 fw-600 text-light'>{name}</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center justify-content-center me-2" style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%" }}>
                                            <p className='blue fw-600'>C</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%" }}>
                                            <p className='blue fw-600'>VC</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="" style={{ background: "rgba(232, 243, 243, 0.7)" }}>
                        <h4 className='p-3 fw-600'>Batsmen</h4>
                        {bat.map((curElem) => {
                            const { name, img } = curElem;
                            return (
                                <div className="player-card d-flex align-items-center justify-content-between p-3" style={{ backgroundColor: "rgba(15, 40, 101, 0.6)" }}>
                                    <div className="d-flex align-items-center">
                                        <div style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%", overflow: "hidden" }}>
                                            <img src={img} alt="" className='img-fluid' />
                                        </div>
                                        <p className='ms-3 me-2 fw-600 text-light'>{name}</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center justify-content-center me-2" style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%" }}>
                                            <p className='blue fw-600'>C</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%" }}>
                                            <p className='blue fw-600'>VC</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="" style={{ background: "rgba(232, 243, 243, 0.7)" }}>
                        <h4 className='p-3 fw-600'>All Rounder</h4>
                        {all.map((curElem) => {
                            const { name, img } = curElem;
                            return (
                                <div className="player-card d-flex align-items-center justify-content-between p-3" style={{ backgroundColor: "rgba(15, 40, 101, 0.6)" }}>
                                    <div className="d-flex align-items-center">
                                        <div style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%", overflow: "hidden" }}>
                                            <img src={img} alt="" className='img-fluid' />
                                        </div>
                                        <p className='ms-3 me-2 fw-600 text-light'>{name}</p>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex align-items-center justify-content-center me-2" style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%" }}>
                                            <p className='blue fw-600'>C</p>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-center" style={{ width: "40px", height: "40px", backgroundColor: "#fff", borderRadius: "50%" }}>
                                            <p className='blue fw-600'>VC</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </>
        )
    }
}
