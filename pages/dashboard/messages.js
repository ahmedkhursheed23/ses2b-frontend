import { Typography } from '@material-ui/core'
import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'


export default function exams() {
    return (
        <div>
            <SidebarV2>
                <Typography variant="h5">
                    This will display any messages from the Examinator
                </Typography>
            </SidebarV2>
        </div>
    )
}
