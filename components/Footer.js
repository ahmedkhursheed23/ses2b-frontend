import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Grid } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'© Copyright UTS - CRICOS Provider No: 00099F '}
      {new Date().getFullYear()}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor: '#000000',
     /*  theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[900], */
  },
  footerHeadingText: {
    color: '#ffffff', 
  },
  footerParagraphText: {
    color: 'b2b2b2', 
  },
    
  grid: {
      width: '100%',
      flexdirection: 'column',
    },

}));


export default function StickyFooter() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
            <Grid container spacing={2} justifyContent="center">
                
                <Typography className={classes.footerHeadingText} variant="body1">My sticky footer can be found here.</Typography>

            </Grid>

            <Typography className={classes.footerHeadingText} variant={'body2'}> {'© Copyright UTS - CRICOS Provider No: 00099F - '} {new Date().getFullYear()} </Typography>
        </Container>
      </footer>
    </div>
  );
}