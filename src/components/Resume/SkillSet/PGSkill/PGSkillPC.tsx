import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    Chip,
    Button,
    Grid,
    Divider,
    Typography,
} from "@material-ui/core";

import {
    Code as CodeIcon
} from '@material-ui/icons';

import PGSkill from "../../../../utils/PGSkill.json";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 400,
            backgroundColor: theme.palette.background.paper,
        },
        chip: {
            margin: theme.spacing(0.5),
        },
        section1: {
            margin: theme.spacing(3, 2),
        },
        section2: {
            margin: theme.spacing(2),
        },
    }),
);


function PGSkillPC() {
    const classes = useStyles();

    function handleClick()  {
        console.log()
    };

    return (
        <div className={classes.root}>
            <div className={classes.section1}>
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4">
                            PGスキル
                        </Typography>
                    </Grid>
                    <Grid item>
                        <CodeIcon fontSize={"large"}/>
                    </Grid>
                </Grid>
                <Typography color="textSecondary" variant="body2">
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or just down the
                    hall.
                </Typography>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
                <div>
                    {PGSkill.map((skill: any)=>(
                        <Chip className={classes.chip} label={skill.skill} onClick={handleClick}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PGSkillPC;


