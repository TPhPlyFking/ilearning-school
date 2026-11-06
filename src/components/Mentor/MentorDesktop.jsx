import { Carousel } from "antd";
import { useRef } from "react";

    const API_BASE_URL = "https://ai-project-api.moviehub.io.vn";


function MentorDesktop({ mentors = [], currentMentor, setCurrentMentor }) {
    const totalMentors = mentors.length;


    const carouselRef = useRef(null);

    const handleNext = () => {
        carouselRef.current?.next();
    };

    const handlePrev = () => {
        carouselRef.current?.prev();
    };

    const handleGoTo = (index) => {
        carouselRef.current?.goTo(index);
    };

    if (totalMentors === 0) {
        return (
            <section className="mentor-desktop">
                <div className="mentor-heading">
                    <h5>Nhân sự nòng cốt</h5>
                    <h6>Đội ngũ giảng viên</h6>
                </div>
            </section>
        );
    }

    return (
        <section className="mentor-desktop">
            <div className="mentor-heading">
                <h5>Nhân sự nòng cốt</h5>
                <h6>Đội ngũ giảng viên</h6>
            </div>

            <div className="mentor-card-stage">
                <Carousel
                    ref={carouselRef}
                    initialSlide={currentMentor}
                    afterChange={(current) => setCurrentMentor(current)}
                    dots={false}
                    arrows={false}
                >   
                    {mentors.map((item) => {
                        const avatarPath = item.account?.avatarPath;
                        const avatarUrl = avatarPath ? `${API_BASE_URL}${avatarPath}` : "";

                        return (
                            <div key={item.id}>
                                <div className="mentor-card">

                                    <div
                                        className="mentor-image"
                                        style={avatarUrl ? { backgroundImage: `url("${avatarUrl}")` } : undefined}
                                    ></div>

                                    <div className="mentor-info">
                                        <span className="quote-icon">//</span>
                                        <p style={{ whiteSpace: "pre-line" }}>
                                            {item.description || "Chưa có mô tả."}
                                        </p>

                                        <div className="mentor-profile">
                                            <h5>{item.account?.fullName || "Mentor"}</h5>
                                            <h6>{item.position || ""}</h6>
                                        </div>
                                    </div>


                                    <div className="dots-center">
                                        {mentors.map((dotMentor, dotIndex) => (
                                            <span
                                                key={dotMentor.id}
                                                className={`dot ${currentMentor === dotIndex ? "active" : ""}`}
                                                onClick={() => handleGoTo(dotIndex)}
                                            ></span>
                                        ))}
                                    </div>

                                    <div className="buttons-right">
                                        <button onClick={handlePrev}>&lt;</button>
                                        <button onClick={handleNext}>&gt;</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Carousel>
            </div>
        </section>
    );
}

export default MentorDesktop;