import WebRTC from '../../components/WebRTC/WebRTC'
import Face from '../../components/FaceAPI/FaceStream'

export default function faceapi() {
    return (
        <div>
            <Face />
            <WebRTC />
        </div>
    )
}
