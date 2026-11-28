import usePageConfig from "../../hooks/usePageConfig.jsx";
import useMobileDetect from "../../hooks/useMobileDetect.jsx"
import IntroDesktop from "./IntroDesktop.jsx";
import IntroMobile from "./IntroMobile.jsx"

function Intro() {
    const isMobile = useMobileDetect();
    const config = usePageConfig();
    if (isMobile) {
        return <IntroMobile config={config} />
    }
    return <IntroDesktop config={config} />
}

export default Intro;