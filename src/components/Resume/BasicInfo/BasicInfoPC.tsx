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


import sea from '../../images/sea.jpg'

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
            fontWeight: 500,
        },
        tabs: {
            borderRight: `1px solid ${theme.palette.divider}`,
            minWidth: "250px",
        },

    }),
);


function BasicInfoPC() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        </div>
    );
}

export default BasicInfoPC;
