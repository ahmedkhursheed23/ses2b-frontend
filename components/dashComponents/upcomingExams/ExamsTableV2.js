import React from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ExamAlert from './ExamsAlert';

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
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
    },
    dateTime: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

    },
    button: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignContent: 'center',
        alignItems: 'center',

    }
}))





export default function ExamsTableV2() {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.container}>
                <Paper style={{ height: '100%' }} variant="outlined">
                    {/* this second container is to hold the grid together */}
                    <Container style={{ paddingBottom: 28, paddingTop: 28 }}>
                        <Grid container spacing={3}>
                            {/* this first grid item contains the headings */}
                            <Grid item xs={12}>
                                <Paper className={classes.paper} variant="outlined">
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs={3}>
                                            <Typography variant="h6">EXAM</Typography>

                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="h6" align="center">DATE</Typography>

                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="h6" align="center">TIME</Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography variant="h6" align="right">ACCESS</Typography>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>
                            {/* the rest of these grid items hold upcoming exams */}
                            {/* they will be shortened to 1 grid item which will map an array, as shown on ExamTable.js */}
                            <Grid item xs={12} >
                                <Paper className={classes.paper} variant="outlined">
                                    <Grid container wrap="nowrap" spacing={2}>
                                        <Grid item xs={3}>
                                            <Typography>Final Exam</Typography>
                                            <Typography>Math101</Typography>

                                        </Grid>
                                        <Grid item xs={3} className={classes.dateTime}>
                                            <Typography>12/12/12</Typography>
                                        </Grid>
                                        <Grid item xs={3} className={classes.dateTime}>
                                            <Typography align="center" >4:20</Typography>

                                        </Grid>
                                        <Grid item xs={3} align="right" className={classes.button}>
                                            <ExamAlert />
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
                                        <Grid item xs={3} className={classes.dateTime}>
                                            <Typography align="center">12/12/12</Typography>
                                        </Grid>
                                        <Grid item xs={3} className={classes.dateTime}>
                                            <Typography align="center">4:20</Typography>

                                        </Grid>
                                        <Grid item xs={3} align="right" className={classes.button}>
                                            <ExamAlert isDisabled={true} />
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
                                        <Grid item xs={3} className={classes.dateTime}>
                                            <Typography align="center">12/12/12</Typography>
                                        </Grid>
                                        <Grid item xs={3} className={classes.dateTime}>
                                            <Typography align="center">4:20</Typography>

                                        </Grid>
                                        <Grid item xs={3} align="right" className={classes.button}>
                                            <ExamAlert isDisabled={true} />
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
