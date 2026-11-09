import uni from "../../picture/uni.jpg";
import { Collapse } from "antd-mobile";
function CourseMobile({classrooms}) {
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



                        <div className="course-mobile-more">
                            <Collapse>
                                <Collapse.Panel key="1" title="Xem thêm">
                                    <ul>
                                        {lop.course.shortDescription.split("\n").map((dong,index)=>(
                                            <li key={index}>{dong}</li>
                                        ))}
                                    </ul>
                                </Collapse.Panel>
                            </Collapse>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}

export default CourseMobile;