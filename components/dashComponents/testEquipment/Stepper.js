import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// This whole doc needs to be cleaned up so dont worry that its not annotated
// Im just testing the stepper functionality
// This will be cleaned up when I got things working the way it should

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonSpace: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));

function getSteps() {
  return ['Calibrate Webcam', 'Activate Screen Share', 'Complete Calibration'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Making sure the webcam is working and detecting appropiate objects (Yes the AI is objectifying you)';
    case 1:
      return 'Making sure the screen share is working';
    case 2:
      return 'This is going to do a final check with both APIs running';
    default:
      return 'Callibration Complete!';
  }
}

export default function HorizontalLabelPositionBelowStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    console.log(activeStep);
    props.setVideoWidth(300);
    props.setVideoHeight(225);
    props.setFlex('space-evenly');
    props.setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === 0)
      props.setDisplay('none');
    else if(activeStep === 1) {
      props.setDisplay('flex');
      props.setScreenHeight(249);
      props.setScreenWidth(324);
    } else if(activeStep === 2) {
      props.handleVideoClose();
      props.setDisplay('none');
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    props.setVideoWidth(480);
    props.setVideoHeight(360);
    props.setScreenWidth(504);
    props.setScreenHeight(384);
    props.setFlex('center');
    props.setActiveStep(0);
    props.handleStartVideo();
    props.setDisplay('flex');
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            {props.children}
            <Typography className={classes.instructions} align="center">Your equipment is fully calibrated</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {props.children}
            <Typography className={classes.instructions} align="center">{getStepContent(activeStep)}</Typography>
            <div className={classes.buttonSpace}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


// I put this here just to remind me of different ways i can switch

// const App = () => {
//     const [screen, setScreen] = React.useState("home");
  
//     return (
//       <div>
//         <nav>
//           <button onClick={() => setScreen("home")}>Home</button>
//           <button onClick={() => setScreen("otherScreen")}>Other Screen</button>
//         </nav>
//         { screen === "home" ?
//         <HomeScreen/>
//         :  screen === "otherScreen" ?
//         <OtherScreen/>
//         : null }
//       </div>
//       );
//   };



// This is another one that I could use for the switching

// function index(props) {
//     return (
//         <Fragment>
//             <TopNav {...this.state}/>
//             <div className="container">
//                 <Switch>
//                     <Route path={`${match.url}/home`} component={Home} />
//                     <Route path={`${match.url}/contact`} component={Contact} />
//                     <Route path={`${match.url}/notification`} component={Notification} />
//                     <Route component={ErrorPage} />
//                 </Switch>
//             </div>
//         </Fragment>
//     );
// }

// export default index;