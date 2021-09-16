import React from 'react'
import FaceApiTest from '../../components/FaceAPI/FaceApiTest'
import SidebarV2 from '../../components/dashComponents/SidebarV2'

export default function testFaceAuth() {
    return (
        <div>
            <SidebarV2>
                <FaceApiTest/>
            </SidebarV2>
        </div>
    )
}
