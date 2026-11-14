import UseMobileDetect from '../../hooks/UseMobileDetect.jsx';
import AboutDesktop from "./AboutDesktop.jsx";
import AboutMobile from "./AboutMobile.jsx";

function About({config}) {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <AboutMobile config={config} />;
    }
    return <AboutDesktop config={config} />;
}

export default About;