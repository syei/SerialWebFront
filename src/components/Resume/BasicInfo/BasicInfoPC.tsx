import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    Grid,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core";

import initial from "../../../utils/initial.json";
import ages from "../../../utils/age.json";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
            display: 'inline-block',
            // height: 224,
            minHeight: "550px",
        },
        resumeName: {
            minWidth: "300px",
            margin: "15px",
        },
        resumeInitial: {
            minWidth: "200px",
            margin: "15px",
        },
        basicContents: {
            aligin: "center",
            textAlign: "center",
        },
        basicTitle: {
            textAlign: "center",
            fontSize: "25px",
            fontWeight: 500,
        },
        formControl: {
            minWidth: "100px",
            margin: "15px",
        },
    }),
);


function BasicInfoPC() {
    const classes = useStyles();
    const [fName, setFName] = React.useState('');
    const [gName, setGName] = React.useState('');
    const [gender, setGender] = React.useState('');
    const [age, setAge] = React.useState('');

    const fNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setFName(event.target.value as string);
     };
    const gNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGName(event.target.value as string);
    };
    const genderChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGender(event.target.value as string);
    };
    const ageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    return (
        <div className={classes.root}>
            <p className={classes.basicTitle}>基本情報</p>
            <Grid container spacing={3} className={classes.basicContents}>
                <Grid item xs={12}>
                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        className={classes.resumeName}
                        label="氏名"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        className={classes.resumeName}
                        label="フリガナ"
                    />
                </Grid>
                <Grid item xs={12}>
                    {/*イニシャル*/}
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">名</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={fName}
                            onChange={fNameChange}
                        >
                            {initial.map(ini => (
                                <MenuItem value={ini.value}>{ini.initial}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">姓</InputLabel>
                    <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gName}
                            onChange={gNameChange}
                        >
                        {initial.map(ini => (
                            <MenuItem value={ini.value}>{ini.initial}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
                    {/*性別*/}
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">性別</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={gender}
                            onChange={genderChange}
                        >
                            <MenuItem value={10}>男性</MenuItem>
                            <MenuItem value={20}>女性</MenuItem>
                        </Select>
                    </FormControl>
                    {/*年齢*/}
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-simple-select-label">年齢</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={age}
                            onChange={ageChange}
                        >
                            {ages.map(age => (
                                <MenuItem value={age.value}>{age.age}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                </Grid>
            </Grid>
        </div>
    );
}

export default BasicInfoPC;
