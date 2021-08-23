import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

// This is a second version of the exam table to show different styles that we can implement.

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
      },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',

      },
    fixedHeight: {
        height: 100,
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
    },
}))





export default function ExamsTableV2() {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.container}>
                <Paper style={{height: 680}}>
                    <Container>

                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper} variant="outlined" style={{marginTop: 16}}>
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs={3}>
                                            <Typography variant="h6">EXAM</Typography>

                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="h6">DATE</Typography>

                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="h6">TIME</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="h6" align="right">ACCESS</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper} variant="outlined">
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs={3}>
                                            <Typography>Final Exam</Typography>
                                            <Typography>Math101</Typography>

                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography>12/12/12</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography>4:20</Typography>

                                        </Grid>
                                        <Grid item xs={3} align="right">
                                            <Button color="secondary">
                                                Start Exam
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper} variant="outlined">
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs={3}>
                                            <Typography>Final Exam</Typography>
                                            <Typography>Math101</Typography>

                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography>12/12/12</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography>4:20</Typography>

                                        </Grid>
                                        <Grid item xs={3} align="right">
                                            <Button color="secondary">
                                                Start Exam
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={classes.paper} variant="outlined">
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs={3}>
                                            <Typography>Final Exam</Typography>
                                            <Typography>Math101</Typography>

                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography>12/12/12</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography>4:20</Typography>

                                        </Grid>
                                        <Grid item xs={3} align="right">
                                            <Button color="secondary">
                                                Start Exam
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Paper>
            </Container>
        </div>
    )
}
