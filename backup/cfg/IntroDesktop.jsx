import coding from "../../picture/coding.jpg";
import {Button} from "antd";

function IntroDesktop({config}) {

    const slide = config?.slider?.[0];

    if (!slide) return null;

    return (
        <section className="intro">
            <img src={coding} alt={slide.title} />
            <div className="intro-text">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Button type="primary" className="intro-btn">
                    Đăng ký ngay
                </Button>
            </div>
        </section>
    );
}

export default IntroDesktop;