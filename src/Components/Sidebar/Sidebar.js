import './Sidebar.css'
import Arrow from '../../assests/Icons/left arrow.png'
import IndiaFlag from '../../assests/Flags/India.png'
import SrilankaFlag from '../../assests/Flags/Srilanka.png'
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import SwipeableViews from 'react-swipeable-views';
import Pool from './Screens/Pools/Pool';
import BuildTeam from './Screens/BuildTeam/BuildTeam';
import Fantasy from './Screens/SelectFantasy/SelectFantasy';
import Confirm from './Screens/ConfirmTeam/Confirm';

const steps = [
    {
        description: <Pool />
    },
    {
        description: <BuildTeam />
    },
    {
        description: <Fantasy />
    },
    {
        description: <Confirm />,
    },
];


const Sidebar = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <>
            <div class="offcanvas offcanvas-end sidebar d-flex justify-content-center" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header d-flex align-items-center justify-content-between">
                    <div className='d-flex align-items-center'>
                        <img src={Arrow} onClick={handleBack} hidden={activeStep === 0} style={{ cursor: "pointer" }} />
                        <img src={Arrow} alt="" type="button" data-bs-dismiss="offcanvas" aria-label="Close" hidden={activeStep !== 0} />
                        <p className='fw-600 ms-3'>India Tour of Srilanka</p>
                    </div>
                    <div className="time">
                        <p>3<span>h</span>23<span>m</span>47<span>s</span></p>
                    </div>
                </div>
                <div className="teams d-flex align-items-center justify-content-around">
                    <div>
                        <img src={SrilankaFlag} alt="" className='img-fluid' />
                    </div>
                    <div className='title'>
                        <p>SL <span>vs</span> IND</p>
                    </div>
                    <div>
                        <img src={IndiaFlag} alt="" className='img-fluid' />
                    </div>
                </div>
                <div class="offcanvas-body p-0 pb-5">
                    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
                        <Box sx={{ height: "100%", width: '100%' }}>
                            {steps[activeStep].description}
                        </Box>
                    </Box>
                </div>
                <div className="ps-3 pe-4">
                    <button onClick={handleNext} hidden={activeStep === maxSteps - 1} className='next'>Next</button>
                    <button data-bs-toggle="modal" data-bs-target="#exampleModal" hidden={activeStep !== maxSteps - 1} className='next' >Save Team</button>
                </div>
            </div>

            {/* Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
