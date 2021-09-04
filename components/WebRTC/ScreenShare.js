import React, { useRef, useState } from "react";

export default function ScreenShare(props) {

  const videoRef = useRef();
  const videoHeight = 360;
  const videoWidth = 480;

  const [feedback, setFeedback] = useState("")

//   if (adapter.browserDetails.browser == 'firefox') {
//   adapter.browserShim.shimGetDisplayMedia(window, 'screen');
// }
  

  function handleSuccess(stream) {
    startButton.disabled = true;
    // const video = document.querySelector('video');
    videoRef.current.srcObject = stream;

    stream.getVideoTracks()[0].addEventListener('ended', () => {
      errorMsg('The user has ended sharing the screen');
      startButton.disabled = false;
    });
  }

  function handleError(error) {
    errorMsg(`getDisplayMedia error: ${error.name}`, error);
  }

  function errorMsg(msg, error) {
    setFeedback(msg);
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  }

  function startButton() {
    navigator.mediaDevices.getDisplayMedia({ video: {}})
        .then(handleSuccess, handleError);
  }



  return (
    <div>
      <video ref={videoRef} height={videoHeight} width={videoWidth} playsInline autoPlay muted />
      <button onClick={() => startButton()}>Start</button>
      <p>{ feedback }</p>
    </div>
  );
}