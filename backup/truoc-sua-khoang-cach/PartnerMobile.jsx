import { Swiper } from "antd-mobile";
import fpt from "../../picture/fpt.png";
import pharmacity from "../../picture/pharmacity.png";
import kaas from "../../picture/kaas.png";
import tma from "../../picture/tma.png";
import sendo from "../../picture/sendo.png";

function PartnerMobile() {
    const logos = [
        { image: fpt, name: "FPT" },
        { image: pharmacity, name: "Pharmacity" },
        { image: kaas, name: "KAAS" },
        { image: tma, name: "TMA" },
        { image: sendo, name: "Sendo" }
    ];

    return (
        <section className="partner-mobile" style={{
            width: 'calc(100% - 20px)',
            margin: '30px auto 0',
            padding: '30px 0',
            boxSizing: 'border-box',
            backgroundColor: '#141414',
            color: 'white',
            textAlign: 'center',
        }}>
            <div className="partner-mobile-intro" style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h5 style={{ color: '#fff', fontSize: '14px', margin: 0, fontWeight: 'normal' }}>khách hàng và</h5>
                <h6 style={{ color: '#fff', fontSize: '16px', margin: '5px 0 0 0', fontWeight: 700 }}>Đối tác của UI8</h6>
            </div>

            <div className="partner-mobile-logo" style={{
                position: 'relative',
                display: 'flex',
                width: '100%',
                margin: '0 auto',
                padding: '25px 10px',
                gap: 0,
                boxSizing: 'border-box',
                backgroundColor: '#090c0f',
                overflow: 'hidden',
            }}>
                <Swiper
                    loop
                    autoplay
                    autoplayInterval={2000}
                    slideSize={35}

                    indicator={() => null}
                >
                    {logos.map((logo) => (
                        <Swiper.Item key={logo.name}>
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 10px' }}>
                                <img
                                    src={logo.image}
                                    alt={logo.name}
                                    style={{ height: '35px', objectFit: 'contain', maxWidth: '100%' }}
                                />
                            </div>
                        </Swiper.Item>
                    ))}
                </Swiper>


            </div>
        </section>
    );
}

export default PartnerMobile;