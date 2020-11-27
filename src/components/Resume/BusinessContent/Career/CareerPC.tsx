import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    Button,
    Grid,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    Paper,
    TextField,
} from "@material-ui/core";

import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

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
        careerPaper: {
            paddingRight: "30px",
            paddingLeft: "30px",
            paddingTop: "10px",
            paddingBottom: "10px",
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

function CareerPC() {
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
            <Grid container spacing={3} className={classes.basicContents}>
                <Grid item xs={12}>
                    <Paper
                        elevation={3}
                        className={classes.careerPaper}
                    >
                        <TextField
                            multiline
                            className={classes.skill}
                            label="経歴"
                            helperText="〇〇系業務WEBサイト開発"
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="yyyy/MM"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="開始年月"
                                    className={classes.skillSpan}
                                    value={selectedDate1}
                                    onChange={handleDateChange1}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="yyyy/MM"
                                margin="normal"
                                id="date-picker-inline"
                                label="終了年月"
                                className={classes.skillSpan}
                                value={selectedDate2}
                                onChange={handleDateChange2}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                        <br/>
                        <TextField
                            id="standard-multiline-static"
                            label="業務内容"
                            className={classes.skillContents}
                            multiline
                            rows={5}
                        />
                        <br/>
                        <TextField
                            id="standard-multiline-static"
                            label="言語・OS"
                            className={classes.skillContents}
                            multiline
                            rows={3}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default CareerPC;
