import uni from "../../picture/uni.jpg";

function CourseDesktop({classrooms}){

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
                            {}
                            {lop.course.shortDescription.split("\n").slice(0, 4).map((dong, index) => (
                                <p key={index}>{dong}</p>
                            ))}
                        </div>
                        <details className="more">
                            <summary>Xem thêm</summary>
                            <ul>
                                <li>
                                    <a href="#">Chi tiết</a>
                                </li>
                            </ul>
                        </details>
                    </div>
                </section>
            ))}
        </>
    );
}

export default CourseDesktop;