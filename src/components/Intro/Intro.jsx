import IntroDesktop from "./IntroDesktop.jsx";
import IntroMobile from "./IntroMobile.jsx";
import UseMobileDetect from '../../hooks/UseMobileDetect.jsx';
import usePageConfig from "../../hooks/usePageConfig.jsx"

function Intro() {
    const isMobile = UseMobileDetect();
    const config = usePageConfig()

    if (isMobile) {
        return <IntroMobile config={config}/>;
    }
    return <IntroDesktop config={config}/>;
}

export default Intro;