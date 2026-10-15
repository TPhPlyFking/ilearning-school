import MentorMobile from "./MentorMobile.jsx";
import MentorDesktop from "./MentorDesktop.jsx";
import UseMobileDetect from "../UseMobileDetect/UseMobileDetect.jsx";

function Mentor() {
    const isMobile = UseMobileDetect();

    if (isMobile) {
        return <MentorMobile />;
    }

    return <MentorDesktop />;
}

export default Mentor;