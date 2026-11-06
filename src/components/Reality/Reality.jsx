import RealityDesktop from "./RealityDesktop.jsx";
import RealityMobile from "./RealityMobile.jsx";
import UseMobileDetect from "../../hooks/UseMobileDetect.jsx";

function Reality() {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <RealityMobile />;
    }
    return <RealityDesktop />;
}
export default Reality;