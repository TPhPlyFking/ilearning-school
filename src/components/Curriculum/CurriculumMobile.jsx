import { useState } from "react";

function CurriculumMobile({stages}) {
    const [openIds, setOpenIds] = useState([]);

    function toggle(id) {
        if (openIds.includes(id)) {
            setOpenIds(openIds.filter((x) => x !== id));
        } else {
            setOpenIds([...openIds, id]);
        }
    }

    return (
        <section className="curriculum-mobile">
            <h1>Giáo trình</h1>

            {stages.map((stage) => (
                <div className="curriculum-stage" key={stage.id}>
                    <div className="curriculum-stage-head"
                         onClick={() => toggle(stage.id)}>
                        <h2>{stage.name}</h2>
                        <span className={"curriculum-stage-icon" + (openIds.includes(stage.id) ? " open" : "")}></span>
                    </div>
                    {openIds.includes(stage.id) && (
                        <div className="curriculum-stage-body">
                            {stage.subjects.map((mon) => (
                                <p key={mon.id}>- {mon.name}</p>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <button className="Join-now">Đăng ký ngay</button>
        </section>
    );
}

export default CurriculumMobile;
