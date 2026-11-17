import useMobileDetect from "../../hooks/useMobileDetect.jsx";
import HeaderDesktop from "./HeaderDesktop.jsx"
import HeaderMobile from "./HeaderMobile.jsx"

function Header () {
    const isMobile = useMobileDetect();

    if (isMobile) {
        return <HeaderMobile />;
    }

    return <HeaderDesktop/>;
}

export default Header;