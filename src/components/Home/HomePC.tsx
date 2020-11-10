import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import MypageComponent from "../Mypage/index";
import JobOfferComponent from "../JobOffer/index";
import ResumeComponent from "../Resume/index";

import {
    Box,
    Tab,
    Tabs,
    Typography,
} from "@material-ui/core";

import {
    AssignmentInd as AssignmentIndIcon,
    PermIdentity as PermIdentityIcon,
    Work as WorkIcon,
} from "@material-ui/icons";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const useStyles = makeStyles((theme) => ({
    rootCard: {
        maxWidth: "450px",
        marginTop: "20px",
        marginLeft: "10px",
        marginRight: "10px",
    },
    rootHome: {
        paddingTop: "50px",
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
                <Tab label="マイページ" icon={<PermIdentityIcon/>} {...a11yProps(0)} />
                <Tab label="求人情報" icon={<WorkIcon/>} {...a11yProps(1)} />
                <Tab label="履歴書" icon={<AssignmentIndIcon/>} {...a11yProps(2)} />

            </Tabs>
            {/*マイページ*/}
            <TabPanel value={value} index={0}>
                <MypageComponent/>
            </TabPanel>
            {/*求人情報*/}
            <TabPanel value={value} index={1}>
                <JobOfferComponent/>
            </TabPanel>
            {/*履歴書*/}
            <TabPanel value={value} index={2}>
                <ResumeComponent/>
            </TabPanel>

        </div>
    )
}

export default HomePC;
