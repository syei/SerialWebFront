import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    Button,
    Grid,
} from "@material-ui/core";


import CareerComponent from './Career/index';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: 'inline-block',
            // height: 224,
            minHeight: "550px",
        },
        skillSetTitle: {
            textAlign: "center",
            fontSize: "25px",
            fontWeight: 500,
        },
        basicContents: {
            aligin: "center",
            textAlign: "center",
        },
        buttom: {
            backgroundColor: "#d5e55f",
        },
        skill: {
            minWidth: "300px",
            margin: "10px",
        },
        skillSpan: {
            maxWidth: "140px",
            margin: "10px",
        },
        skillContents: {
            minWidth: "550px",
            margin: "10px",
        },
    }),
);

function BusinessContentPC() {
    const classes = useStyles();
    const [selectedDate1, setSelectedDate1] = React.useState<Date | null>(
        new Date('2021-01-01T00:00:00'),
    );
    const [selectedDate2, setSelectedDate2] = React.useState<Date | null>(
        new Date('2021-01-01T00:00:00'),
    );

    const handleDateChange1 = (date: Date | null) => {
        setSelectedDate1(date);
    };
    const handleDateChange2 = (date: Date | null) => {
        setSelectedDate2(date);
    };

    return (
        <div className={classes.root}>
            <p className={classes.skillSetTitle}>業務内容</p>
            <Grid container spacing={3} className={classes.basicContents}>
                <Grid item xs={12}>
                    <Button
                        variant="contained"
                        className={classes.buttom}
                        href="#contained-buttons"
                        // onClick={}
                    >
                        経歴追加
                    </Button>
                </Grid>
                <Grid item  xs={12}>
                    <CareerComponent/>
                </Grid>
           </Grid>
        </div>
    );
}

export default BusinessContentPC;
