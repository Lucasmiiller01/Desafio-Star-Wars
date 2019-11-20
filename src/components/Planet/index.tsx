import React from "react";
import { Grid, Typography, Box, makeStyles } from "@material-ui/core";


export default function PlanetMain() {
    const classes = useStyles();

    return (
        <Box border={5} className={classes.root}>
            <Grid item xs={12} className={classes.root}>
                <Typography gutterBottom variant="h4" className={classes.title}>
                    Planet Name
                </Typography>
                <Box borderTop={5} className={classes.borderTitle}/>
                
                <Typography gutterBottom variant="h6" >
                    Population: 200000
                </Typography>

                <Typography gutterBottom variant="h6">
                    Climate: ARID
                </Typography>

                <Typography gutterBottom variant="h6">
                    TERRAIN: DESERT
                </Typography>

                <Typography gutterBottom variant="h6">
                    FEATURED IN N FILMS
                </Typography>

            </Grid>
        </Box>
    );
}

const useStyles = makeStyles({
    root: {
        margin: 20
    },
    borderTitle: {
        marginLeft: -20,
        marginRight: -20
    },
    title: {
        textAlign: "center"
    }
});