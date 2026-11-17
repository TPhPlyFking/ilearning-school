import PartnerDesktop from "./PartnerDesktop.jsx";
import PartnerMobile from "./PartnerMobile.jsx";
import UseMobileDetect from "../../hooks/useMobileDetect.jsx"

function Partner() {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <PartnerMobile />;
    }
    return <PartnerDesktop />;
}

export default Partner;