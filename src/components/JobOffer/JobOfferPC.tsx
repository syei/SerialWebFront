import React from "react";
import clsx from 'clsx';
import { makeStyles, Theme } from "@material-ui/core/styles";

import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Grid,
    Typography,
} from "@material-ui/core";

import sea from '../../images/sea.jpg'
import cake from '../../images/cake.jpg'
import salad from '../../images/salad.jpg'
import nabe from '../../images/nabe.jpg'

const useStyles = makeStyles((theme) => ({
    rootHome: {
        paddingTop: "0px",
    },
    rootCard: {
        maxWidth: "450px",
        height: "auto",
        marginTop: "20px",
        marginLeft: "10px",
        marginRight: "10px",
    },
    media: {
        // height: 0,
        paddingTop: '56.25%', // 16:9
    },
}))


function JobOfferPC() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div　className={classes.rootHome}>
            <Grid container direction="row">
                {eventData.map((eventdata: any) =>(
                     <Grid item xs={12} sm={12} md={4} lg={3} spacing={5}>
                        <div>
                            <Card className={classes.rootCard}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.media}
                                        image={ eventdata.eventImg }
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            { eventdata.eventTitle }
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            { eventdata.eventDescription }
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default JobOfferPC;

//###############################################################
//###############################################################
//###############################################################
//###############################################################
//###############################################################
//###############################################################
//###############################################################
//###############################################################
//###############################################################


const eventData = [
    {
        eventImg: sea,
        eventTitle: "sea",
        eventDescription: "海に行ったよ！！！！",
    },
    {
        eventImg: cake,
        eventTitle: "cake",
        eventDescription: "糸島のケーキが美味しかった！！！！",
    },
    {
        eventImg: salad,
        eventTitle: "salad",
        eventDescription: "糸島のサラダが美味しかった！！！！！",
    },
    {
        eventImg: nabe,
        eventTitle: "nabe",
        eventDescription: "鍋が美味しかった！！！！",
    },
    {
        eventImg: sea,
        eventTitle: "sea",
        eventDescription: "海に行ったよ！！！！",
    },
    {
        eventImg: cake,
        eventTitle: "cake",
        eventDescription: "糸島のケーキが美味しかった！！！！",
    },
    {
        eventImg: salad,
        eventTitle: "salad",
        eventDescription: "糸島のサラダが美味しかった！！！！",
    },
    {
        eventImg: nabe,
        eventTitle: "nabe",
        eventDescription: "鍋が美味しかった！！！！",
    },
    {
        eventImg: sea,
        eventTitle: "sea",
        eventDescription: "海に行ったよ！！！！",
    },
    {
        eventImg: cake,
        eventTitle: "cake",
        eventDescription: "糸島のケーキが美味しかった！！！！",
    },
    {
        eventImg: salad,
        eventTitle: "salad",
        eventDescription: "糸島のサラダが美味しかった！！！！",
    },
    {
        eventImg: nabe,
        eventTitle: "nabe",
        eventDescription: "鍋が美味しかった！！！！",
    },
    {
        eventImg: sea,
        eventTitle: "sea",
        eventDescription: "海に行ったよ！！！！",
    },
    {
        eventImg: cake,
        eventTitle: "cake",
        eventDescription: "糸島のケーキが美味しかった！！！！",
    },
    {
        eventImg: salad,
        eventTitle: "salad",
        eventDescription: "糸島のサラダが美味しかった！！！！",
    },
    {
        eventImg: nabe,
        eventTitle: "nabe",
        eventDescription: "鍋が美味しかった！！！！",
    },
]