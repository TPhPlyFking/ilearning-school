import VideoMobile from './VideoMobile.jsx';
import VideoDesktop from './VideoDesktop.jsx';
import UseMobileDetect from '../../hooks/UseMobileDetect.jsx';

function Video({config}){
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <VideoMobile config={config} />;
    }
    return <VideoDesktop config={config} />;
}

export default Video;