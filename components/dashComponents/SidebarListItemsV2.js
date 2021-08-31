import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    currentItem: {
        backgroundColor: "#F9F9F9",
        paddingRight: "16px",

    },
    currentItemIcon: {
        color: "#4259d4",
        paddingLeft: "8.5px",
        transform: "scale(1.6)",
    },
    itemIcon: {
        paddingLeft: "8.5px",
        transform: "scale(1.6)",
    },
    activeItemRect: {
        position: "absolute",
        content: " ",
        height: "100%",
        width: "4px",
        backgroundColor: "#F9F9F9",
    }
}));

export default function MainItemsList(props) {
    const classes = useStyles();
    const currentItem = props.currentItem;
    return (
        <div>
            <Link href="/dashboard">
                <ListItem button className={classes.currentItem}>
                    <ListItemIcon>

                        <DashboardIcon className={classes.currentItemIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Exam Hub" />
                </ListItem>
            </Link>
            <Link href="/dashboard/testEquipment">
                <ListItem button>
                    <ListItemIcon>
                        <VideoLabelIcon className={classes.itemIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Test Equipment" />
                </ListItem>
            </Link>
            <Link href="/dashboard/results">
                <ListItem button>
                    <ListItemIcon>
                        <BarChartIcon className={classes.itemIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Results" />
                </ListItem>
            </Link>
            <Link href="/dashboard/past">
                <ListItem button>
                    <ListItemIcon>
                        <AssignmentTurnedInIcon className={classes.itemIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Past Exams" />
                </ListItem>
            </Link>
            <Link href="/dashboard/messages">
                <ListItem button>
                    <ListItemIcon>
                        <MessageIcon className={classes.itemIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItem>
            </Link>
            <Link href="/dashboard/profile">
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon className={classes.itemIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
            </Link>
            <Link href="/dashboard/help">
                <ListItem button>
                    <ListItemIcon>
                        <LayersIcon  className={classes.itemIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Help" />
                </ListItem>
            </Link>
        </div>
    )
}

