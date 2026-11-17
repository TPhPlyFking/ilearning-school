import useMobileDetect from "../../hooks/useMobileDetect.jsx"
import IntroDesktop from "./IntroDesktop.jsx";
import IntroMobile from "./IntroMobile.jsx"

function Intro({config}) {
    const isMobile = useMobileDetect();
    if (isMobile) {
        return <IntroMobile config={config} />
    }
    return <IntroDesktop config={config} />
}

export default Intro;