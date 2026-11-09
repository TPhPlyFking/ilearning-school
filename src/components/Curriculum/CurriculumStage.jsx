import { useState } from "react";

function CurriculumStage({ stage, showBadge }) {
    const [open, setOpen] = useState(false);

    return (
        <div className="curriculum-stage">
            <div className="curriculum-stage-head" onClick={() => setOpen(!open)}>
                <h2>{stage.name}</h2>

                {showBadge && (
                    <span className="curriculum-stage-badge">{stage.timeline} buổi</span>
                )}

                <span className={open ? "curriculum-stage-icon open" : "curriculum-stage-icon"}></span>
            </div>

            {open && (
                <div className="curriculum-stage-body">
                    {stage.subjects.map((mon) => (
                        <p key={mon.id}>- {mon.name}</p>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CurriculumStage;
