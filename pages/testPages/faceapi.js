import FaceAuth from '../../components/FaceAPI/FaceAuth'

export default function faceapi() {
    return (
        <div>
            <FaceAuth nextPage = "/dashboard"/>
        </div>
    )
}
