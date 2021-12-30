import * as React from 'react';
import { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '../../../Components/Card/Card'
import LiveCard from '../../../Components/Card/Livecard';
import Navbar from '../../../Components/Navigation/Navbar/Navbar2'
import Upcoming from '../../../Components/Home/Upcoming/Upcoming'
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Sidebar from '../../../Components/Sidebar/Sidebar'
// Flags
import India from '../../../assests/Flags/India.png'
import Srilanka from '../../../assests/Flags/Srilanka.png'
import WestIndies from '../../../assests/Flags/WestIndies.png'
import Australia from '../../../assests/Flags/Australia.png'
import FCGoa from '../../../assests/Flags/FCGoa.png'
import KeralaBlasters from '../../../assests/Flags/KeralaBlasters.png'


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



const MyGames = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    // Cards
    const upcoming = [
        {
            match: "#1",
            title: "India Tour of Srilanka",
            team1: "IN",
            team2: "SL",
            team1flag: India,
            team2flag: Srilanka,
            entries: "250+",
            starting: "03 h : 20 m"
        },
        {
            match: "#2",
            title: "West Indies Vs Australia",
            team1: "WI",
            team2: "AUS",
            team1flag: WestIndies,
            team2flag: Australia,
            entries: "250+",
            starting: "03 h : 20 m"
        },
        {
            match: "#3",
            title: "India Vs WestIndies",
            team1: "IN",
            team2: "Wi",
            team1flag: India,
            team2flag: WestIndies,
            entries: "250+",
            starting: "03 h : 20 m"
        },
        {
            match: "#4",
            title: "Australia Vs Srilanka",
            team1: "aus",
            team2: "SL",
            team1flag: Australia,
            team2flag: Srilanka,
            entries: "250+",
            starting: "03 h : 20 m"
        },
    ]

    const live = [
        {
            match: "#3",
            title: "India Vs WestIndies",
            team1: "IN",
            team2: "Wi",
            team1flag: India,
            team2flag: WestIndies,
            rank: "23",
            points: "120"
        },
        {
            match: "#4",
            title: "Australia Vs Srilanka",
            team1: "aus",
            team2: "SL",
            team1flag: Australia,
            team2flag: Srilanka,
            rank: "23",
            points: "120"
        },
    ]

    const completed = [
        {
            match: "#4",
            title: "Australia Vs Srilanka",
            team1: "aus",
            team2: "SL",
            team1flag: Australia,
            team2flag: Srilanka,
            entries: "250+",
            starting: "03 h : 20 m"
        },
    ]



    return (
        <>
            <Navbar />
            <Sidebar />
            <div className="container mx-auto d-flex align-items-center justify-content-center p-0 px-lg-5 h-100 w-100 pb-3 mt-5">

                <Box id="tab" sx={{ width: "100%" }} className='mt-3'>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            centered
                            variant="fullWidth"
                        >
                            <Tab label="Upcoming Games" {...a11yProps(0)} />
                            <Tab label="Live Games" {...a11yProps(1)} />
                            <Tab label="Completed Games" {...a11yProps(2)} />
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
                        <div className="row mx-auto w-100 gy-4">
                            {upcoming.map((currElem) => {
                                const { match, title, team1, team2, team1flag, team2flag, entries, starting } = currElem;
                                return (
                                    <Card match={match} title={title} team1={team1} team2={team2} team1flag={team1flag} team2flag={team2flag} entries={entries}
                                        starting={starting}
                                    />
                                )
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="row mx-auto w-100 gy-4">
                            {live.map((currElem) => {
                                const { match, title, team1, team2, team1flag, team2flag, rank, points } = currElem;
                                return (
                                    <LiveCard match={match} title={title} team1={team1} team2={team2} team1flag={team1flag} team2flag={team2flag} rank={rank} points={points}
                                    />
                                )
                            })}
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="row mx-auto w-100 gy-4">
                            {completed.map((currElem) => {
                                const { match, title, team1, team2, team1flag, team2flag, entries, starting } = currElem;
                                return (
                                    <Card match={match} title={title} team1={team1} team2={team2} team1flag={team1flag} team2flag={team2flag} entries={entries}
                                        starting={starting}
                                    />
                                )
                            })}
                        </div>
                    </TabPanel>
                </Box>
            </div>
        </>
    )
}

export default MyGames
