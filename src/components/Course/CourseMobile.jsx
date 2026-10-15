import uni from "../../picture/uni.jpg";

function CourseMobile() {
    return (
        <section className="course-mobile">
            <img className="course-mobile-img" src={uni} alt="uni"/>

            <div className="course-mobile-content">
                <h2>
                    Khóa học ReactJS - Xây dựng chức năng Github với GraphQL
                </h2>

                <p className="course-mobile-price">
                    7,500,000 đ
                </p>

                <div className="course-mobile-details">
                    <p>→ Lazy loading - code splitting - Memoization trong ReactJS</p>
                    <p>→ Tìm hiểu GraphQL và so sánh với REST</p>
                    <p>→ Sử dụng ApolloLink như Middleware</p>
                    <p>→ So sánh Cách Apollo quản lý cache và Redux quản lý Cache</p>
                    <p>→ Unit test & Integration test</p>
                </div>

                <details className="course-mobile-more">
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

export default CourseMobile;