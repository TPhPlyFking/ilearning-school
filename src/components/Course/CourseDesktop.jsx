import uni from "../../picture/uni.jpg"
import { useState } from 'react';

function CourseDesktop({classrooms = []}) {
    const [openId, setOpenId] = useState([]);
    return (
        <>
            {classrooms.map((lop) => (
                <section className="course" key={lop.id}>
                    <img className="course-Img" src={uni} alt={uni}/>
                    <div className="course-intro-details">
                        <div className="course-intro">
                            <h2>{lop.course.name}</h2>
                            <p className="course-price">
                                {lop.course.price.toLocaleString("vi-VN")} đ
                            </p>
                        </div>
                        <div className="course-details">
                            {(openId.includes(lop.id)
                                ? lop.course.shortDescription.split("\n") :
                                lop.course.shortDescription.split("\n").slice(0, 4)).map((dong, index) => (
                                    <p key={index}>{dong}</p>
                            ))}
                            <button className={"more" + (openId.includes(lop.id) ? " open" : "")}
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

                    </div>

                </section>
            ))}
        </>
    );
}

export default CourseDesktop;
