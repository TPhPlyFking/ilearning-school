import { Swiper } from "antd-mobile";

const API_BASE_URL = "https://ai-project-api.moviehub.io.vn";

function MentorMobile({ mentors = [], currentMentor, setCurrentMentor }) {
    const totalMentors = mentors.length;

    if (totalMentors === 0) {
        return (
            <section className="mentor-mobile">
                <div className="mentor-heading">
                    <h5>Nhân sự nòng cốt</h5>
                    <h6>Đội ngũ giảng viên</h6>
                </div>
            </section>
        );
    }

    return (
        <section className="mentor-mobile">
            <div className="mentor-heading">
                <h5>Nhân sự nòng cốt</h5>
                <h6>Đội ngũ giảng viên</h6>
            </div>

            <Swiper
                loop
                autoplay
                defaultIndex={currentMentor}

                onIndexChange={(index) => {
                    setCurrentMentor(index);
                }}
            >
                {mentors.map((item) => {
                    const avatarPath = item.account?.avatarPath;
                    const avatarUrl = avatarPath ? `${API_BASE_URL}${avatarPath}` : "";

                    return (
                        <Swiper.Item key={item.id}>
                            <div className="mentor-card">
                                <div
                                    className="mentor-image"
                                    style={ avatarUrl ? { backgroundImage: `url("${avatarUrl}")` } : undefined }
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
                            </div>
                        </Swiper.Item>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default MentorMobile;