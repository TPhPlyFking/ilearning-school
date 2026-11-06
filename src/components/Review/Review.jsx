import ReviewMobile from "./ReviewMobile.jsx";
import ReviewDesktop from "./ReviewDesktop.jsx";
import UseMobileDetect from "../../hooks/UseMobileDetect.jsx";
import useReviews from "../../hooks/useReviews";

function Review() {
    const isMobile = UseMobileDetect();
    const reviews = useReviews();
    if (isMobile) {
        return <ReviewMobile reviews={reviews} />;
    }

    return <ReviewDesktop reviews={reviews} />;
}

export default Review;