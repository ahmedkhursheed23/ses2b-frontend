import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ExamsTable from '../../components/dashComponents/upcomingExams/ExamsTable';

//This is a test file that I used to try out some new functionality. You can ignore for now.

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

export default function Test() {
  const classes = useStyles();
    
    return (
        <div>
            <SidebarV2>
                <Container maxWidth="lg" className={classes.container}>
                    <ExamsTable/>
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
