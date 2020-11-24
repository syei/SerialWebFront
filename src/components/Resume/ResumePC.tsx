import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    Box,
    Grid,
    Tab,
    Tabs,
    TextField,
    Typography,
    Paper
} from "@material-ui/core";

import BasicInfoComponent from "./BasicInfo/index";
import SkillSetComponent from "./SkillSet/index";
import BusinessContentComponent from "./BusinessContent/index";
import OtherComponent from "./Other/index";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: 'flex',
            // height: 224,
            minHeight: "550px",
        },
        rootResume: {
            marginRight: "auto",
            marginLeft: "auto",
        },
        headerLine: {
            width: "550px",
            aligin: "center",
        },
        headerTitle: {
            textAlign: "center",
            fontSize: "30px",
            fontWeight: 700,
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
            minWidth: "250px",
            paddingTop: "20px",
        },
        tabsTitle: {
            fontSize: "23px",
            fontWeight: 300,
        },
    }),
);


function ResumePC() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                <Tab label={<span className={classes.tabsTitle}>基本情報</span>} {...a11yProps(0)} />
                <Tab label={<span className={classes.tabsTitle}>スキルセット</span>} {...a11yProps(1)} />
                <Tab label={<span className={classes.tabsTitle}>業務内容</span>} {...a11yProps(2)} />
                <Tab label={<span className={classes.tabsTitle}>その他</span>} {...a11yProps(3)} />
            </Tabs>
            <div className={classes.rootResume}>
                <p className={classes.headerTitle}>
                    職務経歴書
                </p>
                <hr className={classes.headerLine}/>
                {/*経歴のジャンルを選択して修正する画面*/}
                <TabPanel value={value} index={0}>
                    <BasicInfoComponent/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <SkillSetComponent/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <BusinessContentComponent/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <OtherComponent/>
                </TabPanel>
            </div>
        </div>
    );

}

export default ResumePC;
