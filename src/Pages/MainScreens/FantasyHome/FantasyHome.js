import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '../../../Components/Card/Card'
import Navbar from '../../../Components/Navigation/Navbar/Navbar2'
import Upcoming from '../../../Components/Home/Upcoming/Upcoming'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import './home.css'


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


const FantasyHome = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Navbar />
            <Upcoming></Upcoming>

            <div className="container mx-auto d-flex align-items-center justify-content-center p-0 h-100 w-100 pb-3">

                <Box id="tab" sx={{ width: "100%" }} className='mt-3'>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            centered
                            variant="fullWidth"
                        >
                            <Tab label="Cricket" {...a11yProps(0)} />
                            <Tab label="Kabbadi" {...a11yProps(1)} />
                            <Tab label="Football" {...a11yProps(2)} />
                        </Tabs>
                    </Box>
                    <Stack direction="row" spacing={2} id="chip" className="mt-3 px-3 pb-1 flex-wrap justify-align-content-around d-none d-md-flex">
                        <Chip label="Minimum slots filled" />
                        <Chip label="Maximum slots filled" />
                        <Chip label="Starting soon" />
                        <Chip label="Live" />
                        <Chip label="Upcoming Games" />
                    </Stack>
                    <TabPanel value={value} index={0}>
                        <div className="row mx-auto w-100 g-4">
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="row mx-auto w-100 g-4">
                            <Card></Card>
                            <Card></Card>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="row mx-auto w-100 g-4">
                            <Card></Card>
                        </div>
                    </TabPanel>
                </Box>
            </div>
        </>
    )
}

export default FantasyHome
