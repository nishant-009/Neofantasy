import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './Leaderboard.css'


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const Leaderboard = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='leaderboard h-100'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered variant="fullWidth">
                    <Tab label="My Points" {...a11yProps(0)} />
                    <Tab label="Leaderboard" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <div className="px-3 pt-2">
                    <div className="pts-card">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3">
                                <p>Your Team was a 100% Match</p>
                            </div>
                            <div className="pts">
                                <p>5pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card purple">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3">
                                <p>Your Team was a 100% Match</p>
                            </div>
                            <div className="pts purple">
                                <p>5pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card purple">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3">
                                <p>Your Team was a 100% Match</p>
                            </div>
                            <div className="pts purple">
                                <p>5pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card yellow">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3">
                                <p>Your Team was a 100% Match</p>
                            </div>
                            <div className="pts yellow">
                                <p>5pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3">
                                <p>Your Team was a 100% Match</p>
                            </div>
                            <div className="pts">
                                <p>5pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card yellow">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3">
                                <p>Your Team was a 100% Match</p>
                            </div>
                            <div className="pts yellow">
                                <p>5pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card purple">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3">
                                <p>Your Team was a 100% Match</p>
                            </div>
                            <div className="pts purple">
                                <p>5pts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <div className="px-3 pt-2">
                    <div className="pts-card gold">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3 d-flex align-items-center flex-wrap">
                                <h3>#1</h3>
                                <h5>@Deepkh</h5>
                            </div>
                            <div className="pts">
                                <p>125pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card silver">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3 d-flex align-items-center flex-wrap">
                                <h3>#2</h3>
                                <h5>@SmithB</h5>
                            </div>
                            <div className="pts">
                                <p>125pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card bronze">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3 d-flex align-items-center flex-wrap">
                                <h3>#3</h3>
                                <h5>You (@Maharsh)</h5>
                            </div>
                            <div className="pts">
                                <p>125pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card other-user card">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3 d-flex align-items-center flex-wrap">
                                <h5>#4</h5>
                                <h5>User 123</h5>
                            </div>
                            <div className="">
                                <p>125pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card other-user card">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3 d-flex align-items-center flex-wrap">
                                <h5>#5</h5>
                                <h5>User 123</h5>
                            </div>
                            <div className="">
                                <p>125pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card other-user card">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3 d-flex align-items-center flex-wrap">
                                <h5>#6</h5>
                                <h5>User 123</h5>
                            </div>
                            <div className="">
                                <p>125pts</p>
                            </div>
                        </div>
                    </div>
                    <div className="pts-card other-user card">
                        <div className="container-fluid d-flex align-items-center justify-content-between py-2 px-3">
                            <div className="pe-3 d-flex align-items-center flex-wrap">
                                <h5>#7</h5>
                                <h5>User 123</h5>
                            </div>
                            <div className="">
                                <p>125pts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </TabPanel>

        </div>
    )
}

export default Leaderboard
