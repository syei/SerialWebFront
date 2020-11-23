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
        basicTitle: {
            textAlign: "left",
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
    const [age, setAge] = React.useState('');
    const [fName, setFName] = React.useState('');
    const [gName, setGName] = React.useState('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };
    const fNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setFName(event.target.value as string);
     };
    const gNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setGName(event.target.value as string);
    };

    return (
        <div className={classes.root}>
            <p className={classes.basicTitle}>基本情報</p>
            <TextField
                id="standard-multiline-flexible"
                multiline
                className={classes.resumeName}
                label="氏名"
            />
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

            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">性別</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                        value={age}
                    onChange={handleChange}
                >
                    <MenuItem value={10}>男性</MenuItem>
                    <MenuItem value={20}>女性</MenuItem>
                </Select>
            </FormControl>
            <div>
            </div>
        </div>
    );
}

export default BasicInfoPC;
