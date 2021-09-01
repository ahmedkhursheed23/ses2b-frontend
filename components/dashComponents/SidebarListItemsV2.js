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
import { MenuItem } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';

const menuItems = [
    {
        name: "Dashboard",
        text: "Exam Hub",
        link: "/dashboard",
        icon: <DashboardIcon />,
        divider: false,
    },
    {
        name: "TestEquipment",
        text: "Test Your Equipment",
        link: "/dashboard/testEquipment",
        icon: <VideoLabelIcon />,
        divider: false,
    },
    {
        name: "Results",
        text: "Your Results",
        link: "/dashboard/results",
        icon: <BarChartIcon />,
        divider: false,
    },
    {
        name: "PastExams",
        text: "Past Exams",
        link: "/dashboard/past",
        icon: <AssignmentTurnedInIcon />,
        divider: false,

    },
    {
        name: "Messages",
        text: "Messages",
        link: "/dashboard/messages",
        icon: <MessageIcon />,
        divider: false,
    },
    {
        name: "Profile",
        text: "My Profile",
        link: "/dashboard/profile",
        icon: <PersonIcon />,
        divider: false,
    },
    {
        name: "Help",
        text: "Help",
        link: "/dashboard/help",
        icon: <LayersIcon />,
        divider: false,
    }


]

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    currentItem: {
        backgroundColor: "#F9F9F9",
        paddingRight: "16px",
        borderLeft: "4px solid #4259d4"

    },
    currentItemIcon: {
        color: "#4259d4",
        paddingLeft: "8.5px",
        transform: "scale(1)",
    },
    itemIcon: {
        paddingLeft: "8.5px",
        transform: "scale(1)",
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
    const isOpen = props.open;
    return (
        <>
            {menuItems.map((menuItem) => {
                const isActive = currentItem === menuItem.link;
                return (
                    <React.Fragment key={menuItem.link}>
                        <Link href={menuItem.link}>
                            {!isOpen ?
                                <Tooltip title={menuItem.name} placement="right">
                                    <ListItem button className={isActive ? classes.currentItem : ""}>
                                        <ListItemIcon className={isActive ? classes.currentItemIcon : classes.itemIcon}>{menuItem.icon}</ListItemIcon>
                                        <ListItemText primary={menuItem.text} style={isActive ? { color: "#4259d4" } : {}}></ListItemText>
                                    </ListItem>
                                </Tooltip> :
                                <ListItem button className={isActive ? classes.currentItem : ""}>
                                    <ListItemIcon className={isActive ? classes.currentItemIcon : classes.itemIcon}>{menuItem.icon}</ListItemIcon>
                                    <ListItemText primary={menuItem.text} style={isActive ? { color: "#4259d4" } : {}}></ListItemText>
                                </ListItem>
                            }

                        </Link>
                    </React.Fragment>
                );

            })

            }
        </>
    )
}

