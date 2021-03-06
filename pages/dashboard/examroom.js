import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import WarningIcon from '@material-ui/icons/Warning';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';


export default function examroom() {
	return (
		<div>
			<SidebarV2>
				<Typography variant="h5">
					Welcome to the exam room
				</Typography>
				<div style={{ display: 'flex', justifyContent: 'space-around', padding: 60, paddingBottom: 20 }}>
					<IconButton>
						<Badge badgeContent={1} color="secondary">
							<NotificationImportantIcon color="action" fontSize="large" />
						</Badge>
					</IconButton>
					<IconButton>
						<Badge badgeContent={3} color="secondary">
							<WarningIcon fontSize="large" style={{ color: '#ff9800' }} />
						</Badge>
					</IconButton>
				</div>
				<Typography variant="h1" align="center" style={{ padding: 50 }}>
					120:00
				</Typography>
				<div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
					<Paper style={{ width: 300, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="outlined" square>
						<Typography>
							This will hold the video API
						</Typography>
					</Paper>
					<Paper style={{ width: 300, height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }} variant="outlined" square>
						<Typography>
							This will hold the screen record API
						</Typography>
					</Paper>
				</div>
			</SidebarV2>
		</div>
	)
}
