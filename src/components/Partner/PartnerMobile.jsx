import { Swiper } from "antd-mobile";

const API_BASE_URL = "https://ai-project-api.moviehub.io.vn";

function PartnerMobile({companies = []}) {
    return (
        <section className="partner-mobile" style={{
            width: 'calc(100% - 20px)',
            margin: '0 auto 40px',
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
                    {companies.map((company) => (
                        <Swiper.Item key={company.id}>
                            <div style={{ display: 'flex', justifyContent: 'center', padding: '0 10px' }}>
                                <img
                                    src={API_BASE_URL + "/v1/file/download" + company.avatar}
                                    alt={company.name}
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