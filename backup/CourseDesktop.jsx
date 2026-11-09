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
                        <details className="more">
                            <summary>Xem thêm</summary>
                            <ul className="course-more-list">
                                {lop.course.shortDescription.split("\n").map((dong, index) => (
                                    <li key={index}>{dong}</li>
                                ))}
                            </ul>
                        </details>
                    </div>
                </section>
            ))}
        </>
    );
}

export default CourseDesktop;