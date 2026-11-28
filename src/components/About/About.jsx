import usePageConfig from "../../hooks/usePageConfig.jsx";
import useMobileDetect from "../../hooks/useMobileDetect";
import AboutDesktop from "./AboutDesktop.jsx";
import AboutMobile from "./AboutMobile.jsx";

function About () {
    const isMobile = useMobileDetect();
    const config = usePageConfig();

    if (isMobile) return <AboutMobile config={config}/>;
    return <AboutDesktop config={config} />
}

export default About;