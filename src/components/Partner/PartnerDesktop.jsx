const API_BASE_URL = "https://ai-project-api.moviehub.io.vn";

function PartnerDesktop({companies = []}) {
    return (
        <section className="partner">
            <div className="partner-intro">
                <h5>khách hàng và</h5>
                <h6>Đối tác của UI8</h6>
            </div>

            <div className="partner-logo">
                <div className="partner-track">
                    {companies.map((company) => (
                        <img
                            key={company.id}
                            src={API_BASE_URL + "/v1/file/download" + company.avatar}
                            alt={company.name}
                        />
                    ))}
                </div>

                <div className="partner-track" aria-hidden="true">
                    {companies.map((company) => (
                        <img
                            key={company.id}
                            src={API_BASE_URL + "/v1/file/download" + company.avatar}
                            alt=""
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PartnerDesktop;