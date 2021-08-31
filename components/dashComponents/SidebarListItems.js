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
import Link from 'next/link';


export const MainListItems = (
  <div>
    <Link href="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Exam Hub" />
      </ListItem>
    </Link>
    <Link href="/dashboard/testEquipment">
      <ListItem button>
        <ListItemIcon>
          <VideoLabelIcon />
        </ListItemIcon>
        <ListItemText primary="Test Equipment" />
      </ListItem>
    </Link>
    <Link href="/dashboard/results">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Results" />
      </ListItem>
    </Link>
    <Link href="/dashboard/past">
      <ListItem button>
        <ListItemIcon>
          <AssignmentTurnedInIcon />
        </ListItemIcon>
        <ListItemText primary="Past Exams" />
      </ListItem>
    </Link>
  </div>
);


export const SecondaryListItems = (
  <div>
    <Link href="/dashboard/messages">
      <ListItem button>
        <ListItemIcon>
          <MessageIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
    </Link>
    <Link href="/dashboard/profile">
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </Link>
    <Link href="/dashboard/help">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem>
    </Link>
  </div>
);