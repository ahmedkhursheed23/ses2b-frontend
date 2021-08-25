import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import { Typography } from '@material-ui/core'
import Face from '../../components/FaceAPI/Face'
import Button from '@material-ui/core/Button'
import Stepper from'../../components/dashComponents/testEquipment/Stepper'


export default function testEquipment() {
    const [showFace, setFace] = React.useState(false)
    return (
        <div>
            <SidebarV2>
                <Typography variant="h5">
                    Test Equipment
                </Typography>
                {showFace 
                    ? 
                    <Stepper>
                        <Face/>
                    </Stepper>
                    : <Button color="secondary" onClick={() => {setFace(true)}}> Begin Calibration</Button>
                }
                
            </SidebarV2>
        </div>
    )
}
