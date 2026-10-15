
import { useState } from "react";

function MentorDesktop() {
    const [currentMentor, setCurrentMentor] = useState(0);
    const [targetMentor, setTargetMentor] = useState(0);
    const [direction, setDirection] = useState("next");
    const [phase, setPhase] = useState("idle");

    const goToMentor = (nextMentor, moveDirection) => {
        if (phase === "sliding" || nextMentor === currentMentor) {
            return;
        }

        setDirection(moveDirection);
        setTargetMentor(nextMentor);
        setPhase("sliding");
    };

    const handleNext = () => {
        if (currentMentor < 2) {
            goToMentor(currentMentor + 1, "next");
        }
    };

    const handlePrev = () => {
        if (currentMentor > 0) {
            goToMentor(currentMentor - 1, "prev");
        }
    };

    // cập nhật mentor sau khi thẻ mới truot vo
    const handleAnimationEnd = (event) => {
        if (
            event.animationName.startsWith("mentorEnter") &&
            phase === "sliding"
        ) {
            setCurrentMentor(targetMentor);
            setPhase("idle");
        }
    };

    const renderMentorCard = (mentorIndex, role) => {
        const transitionClass =
            phase === "sliding"
                ? `${role} slide-${direction}`
                : "";

        if (mentorIndex === 0) {
            return (
                <div
                    key={`tam-${role}`}
                    className={`mentor-card mentor-card-transition ${transitionClass}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <div className="mentor-image"></div>

                    <div className="mentor-info">
                        <span className="quote-icon">//</span>
                        <p>
                            Mình đến với ngành từ những năm 2007, đến nay có thể tạm cho là hơn 13 năm rồi.
                            Với việc "chạy" dự án, mentor cho rất nhiều nơi, mình tin rằng có thể cung cấp cho
                            các bạn một cách toàn vẹn về bức tranh tổng thể của ngành lập trình. Quan trọng
                            nhất vẫn là xây dựng những chiếc app và hệ thống có hiệu năng cao, tạo được giá trị
                            cho người dùng cũng như doanh nghiệp của bạn.
                            <br /><br />
                            Bên cạnh đó, là một Software / Solution Architect, mình tự tin có thể giúp bạn hiểu rõ
                            việc xây dựng kiến trúc cho ứng dụng lớn, mang lại hiệu quả cao cho team.
                        </p>
                        <div className="mentor-profile">
                            <h5>Tâm Huỳnh</h5>
                            <h6>Founder & CEO</h6>
                        </div>
                    </div>

                    <div className="dots-center">
                        <span
                            className={`dot ${currentMentor === 0 ? "active" : ""}`}
                            onClick={() => goToMentor(0, 0 < currentMentor ? "prev" : "next")}
                        ></span>
                        <span
                            className={`dot ${currentMentor === 1 ? "active" : ""}`}
                            onClick={() => goToMentor(1, 1 < currentMentor ? "prev" : "next")}
                        ></span>
                        <span
                            className={`dot ${currentMentor === 2 ? "active" : ""}`}
                            onClick={() => goToMentor(2, 2 < currentMentor ? "prev" : "next")}
                        ></span>
                    </div>

                    <div className="buttons-right">
                        <button
                            onClick={handlePrev}
                            className={currentMentor === 0 ? "disabled" : ""}
                            disabled={phase === "sliding" || currentMentor === 0}
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNext}
                            className={currentMentor === 2 ? "disabled" : ""}
                            disabled={phase === "sliding" || currentMentor === 2}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            );
        }

        if (mentorIndex === 1) {
            return (
                <div
                    key={`hieu-${role}`}
                    className={`mentor-card mentor-card-transition ${transitionClass}`}
                    onAnimationEnd={handleAnimationEnd}
                >
                    <div className="mentor-image"></div>

                    <div className="mentor-info">
                        <span className="quote-icon">//</span>
                        <p>
                            Mình đến với ngành từ những năm 2007, đến nay có thể tạm cho là hơn 13 năm rồi.
                            Với việc "chạy" dự án, mentor cho rất nhiều nơi, mình tin rằng có thể cung cấp cho
                            các bạn một cách toàn vẹn về bức tranh tổng thể của ngành lập trình. Quan trọng
                            nhất vẫn là xây dựng những chiếc app và hệ thống có hiệu năng cao, tạo được giá trị
                            cho người dùng cũng như doanh nghiệp của bạn.
                            <br /><br />
                            Bên cạnh đó, là một Software / Solution Architect, mình tự tin có thể giúp bạn hiểu rõ
                            việc xây dựng kiến trúc cho ứng dụng lớn, mang lại hiệu quả cao cho team.
                        </p>
                        <div className="mentor-profile">
                            <h5>Hiếu Hồ</h5>
                            <h6>Giảng viên Frontend</h6>
                        </div>
                    </div>

                    <div className="dots-center">
                        <span
                            className={`dot ${currentMentor === 0 ? "active" : ""}`}
                            onClick={() => goToMentor(0, 0 < currentMentor ? "prev" : "next")}
                        ></span>
                        <span
                            className={`dot ${currentMentor === 1 ? "active" : ""}`}
                            onClick={() => goToMentor(1, 1 < currentMentor ? "prev" : "next")}
                        ></span>
                        <span
                            className={`dot ${currentMentor === 2 ? "active" : ""}`}
                            onClick={() => goToMentor(2, 2 < currentMentor ? "prev" : "next")}
                        ></span>
                    </div>

                    <div className="buttons-right">
                        <button
                            onClick={handlePrev}
                            className={currentMentor === 0 ? "disabled" : ""}
                            disabled={phase === "sliding" || currentMentor === 0}
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNext}
                            className={currentMentor === 2 ? "disabled" : ""}
                            disabled={phase === "sliding" || currentMentor === 2}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            );
        }

        return (
            <div
                key={`quan-${role}`}
                className={`mentor-card mentor-card-transition ${transitionClass}`}
                onAnimationEnd={handleAnimationEnd}
            >
                <div className="mentor-image"></div>

                <div className="mentor-info">
                    <span className="quote-icon">//</span>
                    <p>
                        Mình đến với ngành từ những năm 2007, đến nay có thể tạm cho là hơn 13 năm rồi.
                        Với việc "chạy" dự án, mentor cho rất nhiều nơi, mình tin rằng có thể cung cấp cho
                        các bạn một cách toàn vẹn về bức tranh tổng thể của ngành lập trình. Quan trọng
                        nhất vẫn là xây dựng những chiếc app và hệ thống có hiệu năng cao, tạo được giá trị
                        cho người dùng cũng như doanh nghiệp của bạn.
                        <br /><br />
                        Bên cạnh đó, là một Software / Solution Architect, mình tự tin có thể giúp bạn hiểu rõ
                        việc xây dựng kiến trúc cho ứng dụng lớn, mang lại hiệu quả cao cho team.
                    </p>
                    <div className="mentor-profile">
                        <h5>Quân Bùi</h5>
                        <h6>Giảng viên IOS</h6>
                    </div>
                </div>
                <div className="dots-center">
                    <span
                        className={`dot ${currentMentor === 0 ? "active" : ""}`}
                        onClick={() => goToMentor(0, 0 < currentMentor ? "prev" : "next")}
                    ></span>
                    <span
                        className={`dot ${currentMentor === 1 ? "active" : ""}`}
                        onClick={() => goToMentor(1, 1 < currentMentor ? "prev" : "next")}
                    ></span>
                    <span
                        className={`dot ${currentMentor === 2 ? "active" : ""}`}
                        onClick={() => goToMentor(2, 2 < currentMentor ? "prev" : "next")}
                    ></span>
                </div>

                <div className="buttons-right">
                    <button
                        onClick={handlePrev}
                        className={currentMentor === 0 ? "disabled" : ""}
                        disabled={phase === "sliding" || currentMentor === 0}
                    >
                        &lt;
                    </button>
                    <button
                        onClick={handleNext}
                        className={currentMentor === 2 ? "disabled" : ""}
                        disabled={phase === "sliding" || currentMentor === 2}
                    >
                        &gt;
                    </button>
                </div>
            </div>
        );
    };

    return (
        <section className="mentor-desktop">
            <div className="mentor-heading">
                <h5>Nhân sự nòng cốt</h5>
                <h6>Đội ngũ giảng viên</h6>
            </div>

            <div
                className={`mentor-card-stage ${
                    phase === "sliding" ? "is-sliding" : ""
                }`}
            >
                {phase === "idle" ? (
                    renderMentorCard(currentMentor, "current")
                ) : (
                    <>
                        {renderMentorCard(currentMentor, "exiting")}
                        {renderMentorCard(targetMentor, "entering")}
                    </>
                )}
            </div>
        </section>
    );
}

export default MentorDesktop;
