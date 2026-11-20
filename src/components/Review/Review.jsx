import ReviewDesktop from "./ReviewDesktop.jsx";
import useMobileDetect from "../../hooks/useMobileDetect.jsx";
import useReviews from "../../hooks/useReviews";

function Review () {
    const isMobile = useMobileDetect();
    const reviews = useReviews();

    if (isMobile) return null;
    return < ReviewDesktop reviews={reviews} />;
}

export default Review;