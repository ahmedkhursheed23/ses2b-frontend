import React, { useRef} from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import { Typography } from '@material-ui/core'
import Face from '../../components/FaceAPI/Face'
import Button from '@material-ui/core/Button'
import Stepper from'../../components/dashComponents/testEquipment/Stepper'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden';
import { Container } from '@material-ui/core'
//322, 247
export default function testEquipment() {
    const [showFace, setFace] = React.useState(false)
    const [videoWidth, setVideoWidth] = React.useState(480)
    const [videoHeight, setVideoHeight] = React.useState(360)
    const [screenWidth, setScreenWidth] = React.useState(504)
    const [screenHeight, setScreenHeight] = React.useState(384)
    const [displayType, setDisplay] = React.useState('flex')
    const [newFlex, setFlex] = React.useState('center')
    const [activeStep, setActiveStep] = React.useState(0)
    const myref = React.useRef();
    console.log(myref)
    const handleCloseVideo = () => myref.current.getClose();
    const handleStartVideo = () => myref.current.getStart();


    return (
        <div>
            <SidebarV2>
                <Typography variant="h5">
                    Test Equipment
                </Typography>
                {showFace 
                    ? 
                    <Stepper 
                    setVideoWidth={setVideoWidth}
                    setVideoHeight={setVideoHeight}
                    setScreenWidth={setScreenWidth}
                    setScreenHeight={setScreenHeight}
                    setDisplay={setDisplay} 
                    setFlex={setFlex} 
                    setActiveStep={setActiveStep}
                    handleVideoClose={handleCloseVideo}
                    handleStartVideo={handleStartVideo}
                    >
                        <div style={{display: 'flex', justifyContent: newFlex, alignItems: 'center', height: 384}}>
                            <Paper style={{padding: 5, display: displayType}} variant="outlined" square display="none">
                                <Face 
                                videoWidth={videoWidth} 
                                videoHeight={videoHeight}
                                ref={myref}/>

                            </Paper>
                            {activeStep > 0 && activeStep < 3 ?
                                <Paper variant="outlined" square
                                style={{height: screenHeight, width: screenWidth, display: 'flex', justifyContent: 'center', alignItems: 'center'}}> 
                                    This will display the screenshare 
                                </Paper>
                            : activeStep > 2 && 
                                <div>
                                    <img style={{maxWidth: 400}}src={"https://live-production.wcms.abc-cdn.net.au/634f185fc1cb3cb6565d9a84ecb0cae2?impolicy=wcms_crop_resize&cropH=694&cropW=1239&xPos=145&yPos=60&width=862&height=485"}/>
                                </div>
                            }
                        </div>
                    </Stepper>
                    : <Button color="secondary" onClick={() => {setFace(true)}}> Begin Calibration</Button>
                }
            </SidebarV2>
        </div>
    )
}
