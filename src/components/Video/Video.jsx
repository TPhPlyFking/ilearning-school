import VideoMobile from './VideoMobile.jsx';
import VideoDesktop from './VideoDesktop.jsx';
import UseMobileDetect from '../UseMobileDetect/UseMobileDetect.jsx';

function Video(){
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <VideoMobile />;
    }
    return <VideoDesktop />;
}

export default Video;