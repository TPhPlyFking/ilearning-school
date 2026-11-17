import useMobileDetect from "../../hooks/useMobileDetect";
import AboutDesktop from "./AboutDesktop.jsx";
import AboutMobile from "./AboutMobile.jsx";

function About ({config}) {
    const isMobile = useMobileDetect();

    if (isMobile) return <AboutMobile config={config}/>;
    return <AboutDesktop config={config} />
}

export default About;