import CurriculumStage from "./CurriculumStage.jsx";

function CurriculumMobile({stages}) {
    return (
        <section className="curriculum-mobile">
            <h1>Giáo trình</h1>

            {stages.map((stage) => (
                <CurriculumStage key={stage.id} stage={stage} showBadge={false} />
            ))}

            <button className="Join-now">Đăng ký ngay</button>
        </section>
    );
}

export default CurriculumMobile;
