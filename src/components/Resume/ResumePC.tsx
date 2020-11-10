import React from "react";
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import {
    Grid,
    TextField,
    Paper
} from "@material-ui/core";

import sea from '../../images/sea.jpg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        rootItemPaper: {
            minHeight: "1040px",
            borderTopLeftRadius: "25px",
            borderTopRightRadius: "25px",

},
        rootInfoPaper: {
            paddingTop: "10px",
            paddingBottom: "30px",
            paddingLeft: "30px",
            paddingRight: "30px",
            minHeight: "1000px",
        },
        mypageImg: {
            maxWidth: "100%",
            height: "auto",
            borderRadius: "1%",
        },
        familyName: {
            margin: "25px",
            maxWidth : "400px",
            display: "flex",
            flexDirection: "column",
        },
        givenName: {
            margin: "25px",
            maxWidth : "400px",
            display: "flex",
            flexDirection: "column",
        },
        specialty: {
            margin: "25px",
            maxWidth : "400px",
            display: "flex",
            flexDirection: "column",
        },
        socialLink: {
            margin: "25px",
            maxWidth : "500px",
            display: "flex",
            flexDirection: "column",
        },

    }),
);

function ResumePC() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={0}>
                <Grid item xs={5}>
                    <Paper className={classes.rootItemPaper}>
                        <img src={sea} className={classes.mypageImg}/>
                    </Paper>
                </Grid>
                <Grid item xs={7}>
                    <Paper className={classes.rootInfoPaper}>
                        <p>基本:</p>
                        <TextField
                            className={classes.familyName}
                            label="姓"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.givenName}
                            label="名"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.specialty}
                            label="得意分野"
                            helperText="「エンジニア」または「デザイナー」などの専門分野"
                            variant="outlined"
                        />
                        <p>リンク</p>
                        <TextField
                            className={classes.socialLink}
                            id="outlined-margin-normal"
                            label="GitHub"
                            defaultValue="https://github.com/"
                            helperText="GitHubのユーザー名を追加してください（johnsmithなど）"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.socialLink}
                            id="outlined-margin-normal"
                            label="Facebook"
                            defaultValue="http://www.facebook.com/"
                            helperText="Facebook のユーザー名を入力してください（johnsmithなど）"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.socialLink}
                            id="outlined-margin-normal"
                            label="LinkedIn"
                            defaultValue="http://www.linkedin.com/"
                            helperText="LinkedIn リソースIDを入力してください（in/johnsmithなど）"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.socialLink}
                            id="outlined-margin-normal"
                            label="YouTube"
                            defaultValue="http://www.youtube.com/"
                            helperText="Youtubeのユーザー名を入力してください（例：johnsmith）"
                            variant="outlined"
                        />
                        <TextField
                            className={classes.socialLink}
                            id="outlined-margin-normal"
                            label="Twitter"
                            defaultValue="http://twitter.com/"
                            helperText="Twitterのユーザー名を追加してください（johnsmithなど）"
                            variant="outlined"
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ResumePC;