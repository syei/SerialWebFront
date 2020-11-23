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


function SkillSetPC() {
    const classes = useStyles();

    return (
        <div className={classes.root}>

        </div>
    );
}

export default SkillSetPC;
