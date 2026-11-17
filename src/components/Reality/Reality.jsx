import RealityDesktop from "./RealityDesktop.jsx"
import RealityMobile from "./RealityMobile.jsx"
import useMobileDetect from "../../hooks/useMobileDetect.jsx";

function Reality(){
    const isMobile = useMobileDetect();

    if (isMobile) {
        return <RealityMobile/>;
    }
    return <RealityDesktop />;
}

export default Reality;