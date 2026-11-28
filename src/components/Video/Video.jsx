import usePageConfig from "../../hooks/usePageConfig.jsx";
import useMobileDetect from "../../hooks/useMobileDetect.jsx";
import VideoDesktop from "./VideoDesktop.jsx";
import VideoMobile from "./VideoMobile.jsx";

function Video () {
    const isMobile = useMobileDetect();
    const config = usePageConfig();

    if (isMobile) {
        return <VideoMobile config = {config} />;
    }
    return <VideoDesktop config = {config} />;
}

export default Video;