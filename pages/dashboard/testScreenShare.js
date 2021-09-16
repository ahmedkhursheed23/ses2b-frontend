import router from 'next/router';
import React from 'react'
import SidebarV2 from '../../components/dashComponents/SidebarV2'
import ScreenShareTest from '../../components/WebRTC/ScreenShareTest'

export default function testScreenShare() {
  const [isScreenShare, setScreenShare] = React.useState(false);
  return (
    <div>
      <SidebarV2>
        <h1>Turn on your screen share</h1>
        <ScreenShareTest setScreenShare={setScreenShare} />
        {isScreenShare ?
          <div>
            <p>Screen share activated</p>
            <button onClick= {() => router.push("/dashboard/examroom")}>
              Enter Exam Room
            </button>
          </div>
        :
          <p>Turn on your screenshare</p>
        }
      </SidebarV2>
    </div>
  )
}
