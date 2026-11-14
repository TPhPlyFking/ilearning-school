import CurriculumStage from "./CurriculumStage.jsx";

function CurriculumDesktop({stages}) {
    return (
        <section className="curriculum">
            <div className="curriculum-intro">
                <h1>Giáo trình</h1>
            </div>

            {stages.map((stage) => (
                <CurriculumStage key={stage.id} stage={stage} showBadge={true} />
            ))}

            <button className="Join-now"> Đăng ký ngay</button>
        </section>
    );
}

export default CurriculumDesktop;
