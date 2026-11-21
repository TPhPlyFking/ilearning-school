import ReviewDesktop from "./ReviewDesktop.jsx";
import useMobileDetect from "../../hooks/useMobileDetect.jsx";
import useReviews from "../../hooks/useReviews";
import ReviewMobile from "./ReviewMobile.jsx"

function Review () {
    const isMobile = useMobileDetect();
    const reviews = useReviews();

    if (isMobile) return < ReviewMobile reviews={reviews}/>;
    return < ReviewDesktop reviews={reviews} />;
}

export default Review;