import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ExamsTable from '../../components/dashComponents/ExamsTable';
import ExamsTableV2 from '../../components/dashComponents/ExamsTableV2';



const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
        height: 150,
      },
    fixedHeight: {
        height: 100,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
}))

export default function test() {
  const classes = useStyles();
    
    return (
        <div>
            <SidebarV2>
                <Container maxWidth="lg" className={classes.container}>
                    <Typography variant="h5" style={{paddingBottom: 20}}>
                        Upcoming Exams
                    </Typography>
                    <ExamsTable/>

                    <Typography style={{paddingTop: 20, paddingBottom: 20}}>
                        You're probs wondering why there's two different versions of this, it's because I can implement this as a table or as a grid. Let me know which design looks best and ill go forward with it. (The bottom UI is wack but can defs fix it and make it better)
                    </Typography>
                    <Typography variant="h5">
                        Upcoming Exams
                    </Typography>
                    <ExamsTableV2/>
                    {/* <Grid container spacing={3}>
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>
                            <Typography>
                                Hello this is a table
                            </Typography>
                        </Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        </Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        </Paper>
                        </Grid>
                        <Grid item xs={12}>
                        <Paper className={classes.paper}>
                        </Paper>
                        </Grid>
                        
                    </Grid> */}
                </Container>
            </SidebarV2>
        </div>
    )
}
