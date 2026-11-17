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
                <Button type="primary" size="large" className="intro-btn" style={{
                    width: "clamp(120px, 11.98vw, 230px)",
                    height: "clamp(45px, 4.17vw, 80px)",
                    marginTop: "clamp(15px, 1.72vw, 33px)",
                    borderRadius: "clamp(9px, 1.04vw, 20px)",
                    fontSize: "clamp(11px, 1.25vw, 24px)",
                    fontWeight: 700,
                    background: "#15cca3",
                }}>
                    Đăng ký ngay
                </Button>
            </div>
        </section>
    )
}
export default IntroDesktop;