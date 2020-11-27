import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    Button,
    Grid,
    InputLabel,
    FormControl,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core";

import PGSkillComponent from "./PGSkill/index";

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
            margin: "15px",
        },
    }),
);


function SkillSetPC() {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <p className={classes.skillSetTitle}>スキルセット</p>
            <Grid container spacing={3} className={classes.basicContents}>
                <Grid item xs={12}>
                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        className={classes.skill}
                        label="職種"
                        helperText="ITエンジニア、デザイナー、建築家 等"
                    />
                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        className={classes.skill}
                        label="得意分野"
                        helperText="バックエンド、フロントエンド、フルスタック 等"
                    />
                </Grid>
                <Grid item xs={12}>
                    <PGSkillComponent/>
                </Grid>
            </Grid>

        </div>
    );
}

export default SkillSetPC;
