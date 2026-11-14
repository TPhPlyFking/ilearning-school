import uni from "../../picture/uni.jpg";
import { useState } from "react";

function CourseDesktop({classrooms}){
    const [openId, setOpenId] = useState(null);

    return (
        <>
            {classrooms.map((lop) => (
                <section className = "course" key={lop.id}>
                    <img className = "course-Img" src={uni} alt="uni"/>
                    <div className="course-intro-details">
                        <div className = "course-intro">
                            <h2>{lop.course.name}</h2>
                            <p className ="course-price">
                                {lop.course.price.toLocaleString("vi-VN")} đ
                            </p>
                        </div>
                        <div className="course-details">
                            {(openId === lop.id
                                ? lop.course.shortDescription.split("\n")
                                : lop.course.shortDescription.split("\n").slice(0, 4)
                            ).map((dong, index) => (
                                <p key={index}>{dong}</p>
                            ))}
                        </div>
                        <button className={"more" + (openId === lop.id ? " open" : "")}
                                onClick={() => setOpenId(openId === lop.id ? null : lop.id)}>
                            {openId === lop.id ? "Thu gọn" : "Xem thêm"}
                        </button>
                    </div>
                </section>
            ))}
        </>
    );
}

export default CourseDesktop;