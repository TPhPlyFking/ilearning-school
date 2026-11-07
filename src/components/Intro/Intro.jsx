import IntroDesktop from "./IntroDesktop.jsx";
import IntroMobile from "./IntroMobile.jsx";
import UseMobileDetect from '../../hooks/UseMobileDetect.jsx';

function Intro({config}) {
    const isMobile = UseMobileDetect();

    if (isMobile) {
        return <IntroMobile config={config}/>;
    }
    return <IntroDesktop config={config}/>;
}

export default Intro;