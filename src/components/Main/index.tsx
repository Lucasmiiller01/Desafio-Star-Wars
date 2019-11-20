import React from "react";
import CopyRight from "../CopyRight";
import Planet from "../Planet";
import { Grid, Divider, makeStyles} from "@material-ui/core";


export default function Main() {
    const classes = useStyles();

    return (
        <Grid container direction="row" justify="center" alignItems="center" className={classes.container}>
            <Planet/>
            <Grid item xs={12}>
                <Divider className={classes.dividerCopyRight}/>
                <CopyRight />
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles({
    container: {
        height: "100vh"
    },
    dividerCopyRight:{
        marginBottom: 20
    }
});