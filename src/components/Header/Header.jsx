import HeaderDesktop from "./HeaderDesktop.jsx";
import HeaderMobile from "./HeaderMobile.jsx";
import useMobileDetect from "../../hooks/UseMobileDetect.jsx";

function Header() {
    const isMobile = useMobileDetect();

    if (isMobile) {
        return <HeaderMobile />;
    }

    return <HeaderDesktop />;
}

export default Header;