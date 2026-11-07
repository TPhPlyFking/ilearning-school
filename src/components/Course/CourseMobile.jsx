import uni from "../../picture/uni.jpg";
import { useState } from "react";
function CourseMobile({classrooms}) {
    const [openId, setOpenId] = useState(null);
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
                            {(openId === lop.id
                                ? lop.course.shortDescription.split("\n")
                                : lop.course.shortDescription.split("\n").slice(0, 4)
                            ).map((dong, index) => (
                                <p key={index}>{dong}</p>
                            ))}
                        </div>

                        <button className={"course-mobile-more" + (openId === lop.id ? " open" : "")}
                                onClick={() => setOpenId(openId === lop.id ? null : lop.id)}>
                            {openId === lop.id ? "Thu gọn" : "Xem thêm"}
                        </button>
                    </div>
                </section>
            ))}
        </>
    );
}

export default CourseMobile;