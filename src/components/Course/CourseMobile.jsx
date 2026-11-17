import uni from "../../picture/uni.jpg";
import { useState } from "react";
function CourseMobile({classrooms}) {
    const [openId, setOpenId] = useState([]);
    return (
        <>
            {classrooms.map((lop) =>(
                <section className="course-mobile" key={lop.id}>
                    <img className="course-mobile-img" src={uni} alt="uni"/>

                    <div className="course-mobile-content">
                        <h2>{lop.course.name} </h2>

                        <p className="course-mobile-price">
                            {lop.course.price.toLocaleString("vi-VN")} đ
                        </p>
                        <div className="course-mobile-details">
                            {(openId.includes(lop.id)
                                    ? lop.course.shortDescription.split("\n")
                                    : lop.course.shortDescription.split("\n").slice(0, 4)
                            ).map((dong, index) => (
                                <p key={index}>{dong}</p>
                            ))}
                        </div>
                        <button className={"course-mobile-more" + (openId.includes(lop.id) ? " open" : "")}
                                onClick={() => {
                                    if (openId.includes(lop.id)) {
                                        setOpenId(openId.filter((id) => id !== lop.id));
                                    } else {
                                        setOpenId([...openId, lop.id]);
                                    }
                                }}>
                            {openId.includes(lop.id) ? "Thu gọn" : "Xem thêm"}
                        </button>
                    </div>
                </section>
            ))}
        </>
    );
}

export default CourseMobile;