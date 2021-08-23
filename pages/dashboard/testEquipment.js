import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import { Typography } from '@material-ui/core'


export default function testEquipment() {
    return (
        <div>
            <SidebarV2>
                <Typography variant="h5">
                    This will display the Test Equipment section
                </Typography>
            </SidebarV2>
        </div>
    )
}
