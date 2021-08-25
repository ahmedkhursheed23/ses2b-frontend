import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import ExamsTable from '../../components/dashComponents/upcomingExams/ExamsTable';
import ExamsTableV2 from '../../components/dashComponents/upcomingExams/ExamsTableV2';
import ExamsCurrent from '../../components/dashComponents/upcomingExams/ExamsCurrent';



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

export default function test(props) {
  const classes = useStyles();
  const [showCurrent, setCurrent] = React.useState(false);

  const handleAgree = () => {
    setCurrent(true);
    console.log("Index side working");
  }
    
    return (
        <div>
            <SidebarV2>
                    { showCurrent === true ? 
                        <div style={{paddingBottom: 60}}>
                            <Typography variant="h5" style={{paddingBottom: 20}}>
                                Current Exams
                            </Typography>
                            <ExamsCurrent />
                        </div>
                        
                    : 
                    <Typography color="secondary" variant="body1" style={{paddingBottom: 20}}>
                        You have no current exams
                    </Typography>
                    }
                    <Typography variant="h5" style={{paddingBottom: 20}}>
                        Upcoming Exams
                    </Typography>
                    <ExamsTable handleAgree = {handleAgree} test1="test"/>

                    {/* <Typography style={{paddingTop: 20, paddingBottom: 20}}>
                        You're probs wondering why there's two different versions of this, it's because I can implement this as a table or as a grid. Let me know which design looks best and ill go forward with it.
                    </Typography>
                    <Typography variant="h5">
                        Upcoming Exams
                    </Typography>
                    <ExamsTableV2/> */}
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

            </SidebarV2>
        </div>
    )
}
