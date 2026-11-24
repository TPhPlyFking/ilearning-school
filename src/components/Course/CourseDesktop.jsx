import uni from "../../picture/uni.jpg"
import { useState } from 'react';

function CourseDesktop({classrooms = []}) {
    const [openId, setOpenId] = useState([]);
    const [openStageId, setOpenStageId] = useState([]);
    return (
        <>
            {classrooms.map((lop) => {
                // Gom giáo trình phẳng thành từng giai đoạn kèm danh sách môn
                const stages = [];
                let currentStage = null;
                lop.curriculum.forEach((item) => {
                    if (item.kind === 1) {
                        currentStage = { ...item, subjects: [] };
                        stages.push(currentStage);
                    } else if (currentStage !== null) {
                        currentStage.subjects.push(item);
                    }
                });

                return (
                <div className="course-block" key={lop.id}>
                <section className="course">
                    <img className="course-Img" src={uni} alt={uni}/>
                    <div className="course-intro-details">
                        <div className="course-intro">
                            <h2>{lop.course.name}</h2>
                            <p className="course-price">
                                {lop.course.price.toLocaleString("vi-VN")} đ
                            </p>
                        </div>
                        <div className="course-details">
                            {
                                lop.course.shortDescription.split("\n").slice(0, 4).map((dong, index) => (
                                    <p key={index}>{dong}</p>
                            ))

                            }

                            <button className={"more" + (openId.includes(lop.id) ? " open" : "")} onClick={() => {
                                if (openId.includes(lop.id)) {
                                    setOpenId(openId.filter((id) => id !== lop.id));
                                } else {
                                    setOpenId([...openId, lop.id]);
                                }
                            }}>
                                {openId.includes(lop.id) ? "Rút gọn" : "Xem thêm"}
                            </button>
                        </div>

                    </div>

                </section>

                {/* Giáo trình: mở cùng lúc với "Xem thêm" (dùng chung openId) */}
                {lop.curriculum.length > 0 && (
                    <div className={"curriculum" + (openId.includes(lop.id) ? " open" : "")}>
                        <div className="curriculum-inner">
                            <div className="curriculum-card">
                                <h3>Giáo trình</h3>
                                {stages.map((stage) => (
                                    <div className="stage" key={stage.id}>
                                        <div className="stage-head">
                                            <p>{stage.name}</p>
                                            <span className="stage-time">{stage.timeline} buổi</span>
                                            <button className="stage-btn" onClick={() => {
                                                if (openStageId.includes(stage.id)) {
                                                    setOpenStageId(openStageId.filter((id) => id !== stage.id));
                                                } else {
                                                    setOpenStageId([...openStageId, stage.id]);
                                                }
                                            }}>
                                                {openStageId.includes(stage.id) ? "−" : "+"}
                                            </button>
                                        </div>
                                        <div className={"stage-body" + (openStageId.includes(stage.id) ? " open" : "")}>
                                            <div className="stage-body-inner">
                                                {stage.subjects.map((subject) => (
                                                    <p key={subject.id}>- {subject.name}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
                </div>
                );
            })}
        </>
    );
}

export default CourseDesktop;
