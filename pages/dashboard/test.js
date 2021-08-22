import React from 'react'
import Sidebarv2 from '../../components/Sidebarv2'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ExamsTable from '../../components/ExamsTable';



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
            <Sidebarv2>
                <Container maxWidth="lg" className={classes.container}>
                    <ExamsTable/>
                    <Grid container spacing={3}>
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
                        
                    </Grid>
                </Container>
            </Sidebarv2>
        </div>
    )
}
