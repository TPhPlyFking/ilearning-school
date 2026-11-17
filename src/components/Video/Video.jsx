import useMobileDetect from "../../hooks/useMobileDetect.jsx";
import VideoDesktop from "./VideoDesktop.jsx";
import VideoMobile from "./VideoMobile.jsx";

function Video ({config}) {
    const isMobile = useMobileDetect();

    if (isMobile) {
        return <VideoMobile config = {config} />;
    }
    return <VideoDesktop config = {config} />;
}

export default Video;