import UseMobileDetect from '../../hooks/UseMobileDetect.jsx';
import AboutDesktop from "./AboutDesktop.jsx";
import AboutMobile from "./AboutMobile.jsx";

function About() {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <AboutMobile />;
    }
    return <AboutDesktop />;
}

export default About;