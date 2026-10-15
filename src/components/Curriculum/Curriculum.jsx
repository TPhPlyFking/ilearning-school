import CurriculumDesktop from "./CurriculumDesktop.jsx";
import CurriculumMobile from "./CurriculumMobile.jsx";
import UseMobileDetect from "../UseMobileDetect/UseMobileDetect.jsx"

function Curriculum() {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <CurriculumMobile />;
    }
    return <CurriculumDesktop />;
}

export default Curriculum;