import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import styles from '../styles/Home.module.css'




const useStyles = makeStyles((theme) => ({

  menuButton: {
    marginRight: theme.spacing(1),
  },
  // title: {
  //   flexGrow: 1,
  // },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div >
      <AppBar position="static" color="inherit">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={styles.navLink} style={{ flexGrow: 1}}>
            <Link href="/" >
                Home(Maybe replace this with name or logo)
            </Link>
          </Typography>
          <Link href="/login" >
            <Button color="inherit" >Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}