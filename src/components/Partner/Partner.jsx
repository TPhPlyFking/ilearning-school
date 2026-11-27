import PartnerDesktop from "./PartnerDesktop.jsx";
import PartnerMobile from "./PartnerMobile.jsx";
import UseMobileDetect from "../../hooks/useMobileDetect.jsx"
import usePartners from "../../hooks/usePartners.jsx";

function Partner() {
    const isMobile = UseMobileDetect();
    const companies = usePartners();
    if (isMobile) {
        return <PartnerMobile companies={companies} />;
    }
    return <PartnerDesktop companies={companies} />;
}

export default Partner;