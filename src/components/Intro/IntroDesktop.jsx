import coding from "../../picture/coding.jpg";

function IntroDesktop() {
    return (
        <section className="intro">
            <img src={coding} alt="coding"/>
            <div className="intro-text">
                <h1>
                    Chương trình học mang lại kiến thức <br/>
                    tổng quan để đi làm
                </h1>
                <p>
                    Đào tạo theo nhu cầu doanh nghiệp, học viên tham gia chương trình<br/>
                    sẽ có đưc những giá trị khác biệt: Tiết kiệm thời gian, tiền bạc,<br/>
                    công sức và dễ dàng tham gia và định hướng sự nghiệp.
                </p>
                <button>Đăng ký ngay</button>
            </div>
        </section>
    );
}

export default IntroDesktop;