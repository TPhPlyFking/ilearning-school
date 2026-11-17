import fpt from "../../picture/fpt.png";
import pharmacity from "../../picture/pharmacity.png";
import kaas from "../../picture/kaas.png";
import tma from "../../picture/tma.png";
import sendo from "../../picture/sendo.png";

function PartnerDesktop() {
    const logos= [
        { image: fpt, name: "FPT" },
        { image: pharmacity, name: "Pharmacity" },
        { image: kaas, name: "KAAS" },
        { image: tma, name: "TMA" },
        { image: sendo, name: "Sendo" }
    ];

    return (
        <section className="partner">
            <div className="partner-intro">
                <h5>khách hàng và</h5>
                <h6>Đối tác của UI8</h6>
            </div>

            <div className="partner-logo">
                <div className="partner-track">
                    {logos.map((logo) => (
                        <img
                            key={logo.name}
                            src={logo.image}
                            alt={logo.name}
                        />
                    ))}
                </div>

                <div className="partner-track" aria-hidden="true">
                    {logos.map((logo) => (
                        <img
                            key={logo.name}
                            src={logo.image}
                            alt=""
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PartnerDesktop;