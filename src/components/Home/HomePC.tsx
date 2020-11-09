import React from "react";
import clsx from 'clsx';
import { makeStyles, Theme } from "@material-ui/core/styles";

import HomeComponent from "./index";
import MypageComponent from "../Mypage/index";
import JobOfferComponent from "../JobOffer/index";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
    Box,
    Tab,
    Tabs,
    Typography,
} from "@material-ui/core";

import {
    PermIdentity as PermIdentityIcon,
    Work as WorkIcon,
} from "@material-ui/icons";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const useStyles = makeStyles((theme) => ({
    rootHome: {
        paddingTop: "50px",
    },
    rootCard: {
        maxWidth: "450px",
        marginTop: "20px",
        marginLeft: "10px",
        marginRight: "10px",
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
}))

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `scrollable-force-tab-${index}`,
        'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}

function HomePC() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div　className={classes.rootHome}>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="on"
                indicatorColor="primary"
                textColor="primary"
                aria-label="scrollable force tabs example"
            >
                <Tab label="Mypage" icon={<PermIdentityIcon/>} {...a11yProps(0)} />
                <Tab label="jobOffer" icon={<WorkIcon/>} {...a11yProps(1)} />
            </Tabs>
            {/*マイページ*/}
            <TabPanel value={value} index={0}>
                <MypageComponent/>
            </TabPanel>
            {/*求人情報*/}
            <TabPanel value={value} index={1}>
                <JobOfferComponent/>
            </TabPanel>
        </div>
    )
}

export default HomePC;
