import ReviewMobile from './ReviewMobile.jsx';
import ReviewDesktop from './ReviewDesktop.jsx';
import UseMobileDetect from "../UseMobileDetect/UseMobileDetect.jsx";

function Review() {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <ReviewMobile />;
    }
    return <ReviewDesktop />;
}

export default Review;