import uni from "../../picture/uni.jpg";

function CourseDesktop(){
    return (
        <section className = "course">
            <img className = "course-Img" src={uni} alt="uni"/>
            <div className="course-intro-details">
                <div className = "course-intro">
                    <h2>Khóa học ReactJS - Xây dựng <br/> chức năng Github với GraphQL</h2>
                    <p className ="course-price">7,500,000 đ</p>
                </div>
                <div className="course-details">
                    <p>→ Lazy loading-code splitting-Memoization trong ReactJS</p>
                    <p>→ Tìm hiểu GraphQL và so sánh với REST</p>
                    <p>→ Sử dụng ApolloLink như Middleware</p>
                    <p>→ So sánh Cách Apollo quản lý cache và Redux quản lý Cache</p>
                    <p>→ Unit test & integration test</p>
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
    );
}

export default CourseDesktop;