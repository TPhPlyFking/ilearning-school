import FeelingDesktop from './FeelingDesktop.jsx';
import FeelingMobile from './FeelingMobile.jsx';
import UseMobileDetect from '../UseMobileDetect/UseMobileDetect.jsx';

function Feeling() {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <FeelingMobile />;
    }
    return <FeelingDesktop />;
}

export default Feeling;