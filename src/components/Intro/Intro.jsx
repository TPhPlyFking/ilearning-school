import IntroDesktop from "./IntroDesktop.jsx";
import IntroMobile from "./IntroMobile.jsx";
import UseMobileDetect from '../UseMobileDetect/UseMobileDetect.jsx';

function Intro() {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <IntroMobile />;
    }
    return <IntroDesktop />;
}

export default Intro;