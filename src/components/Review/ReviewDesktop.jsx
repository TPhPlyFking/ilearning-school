const API_BASE_URL = "https://ai-project-api.moviehub.io.vn";

function ReviewDesktop({reviews = []}) {
    const getAvatarUrl = (avatarPath) => {
        if (!avatarPath) return "";
        if (avatarPath.startsWith("http")) {
            return avatarPath;
        }
        return `${API_BASE_URL}${avatarPath}`;
    };
    return (
        <section className="review-section">
            <div className="review-heading">
                <p>Cảm nhận của học viên</p>
                <h2>Mọi người nói gì về UI8</h2>
            </div>
            <div className="review-desktop">
            {reviews.map((item) => {
                const fullName = item.student?.fullName || "Học viên";
                const avatarPath = item.student?.account?.avatarPath;
                const location = item.student?.address || "HO CHI MINH CITY";

                return (
                    <div className="review-desktop-card" key={item.id}>
                        <p className="review-quote">"</p>

                        <p className="review-text" style={{whiteSpace: "pre-line"}}>
                            {item.message || "Chưa có nội dung đánh giá."}
                        </p>

                        <div className="review-stars">
                            {Array.from(
                                {length: 5},
                                (_, index) => (
                                    <span key={index}>
                                        {index < (item.star || 0) ? "★" : "☆"}
                                    </span>
                                )
                            )}
                        </div>

                        <div className="review-user">
                            <img
                                src={getAvatarUrl(avatarPath)}
                                alt={fullName}
                                onError={(event) => {
                                    event.currentTarget.style.display = "none";
                                }}
                            />

                            <div>
                                <h5>{fullName}</h5>
                                <h6>{location}</h6>
                            </div>
                        </div>
                    </div>
                )
                })}
            </div>
        </section>
    )
}
export default ReviewDesktop;