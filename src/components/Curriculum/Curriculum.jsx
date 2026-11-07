import CurriculumDesktop from "./CurriculumDesktop.jsx";
import CurriculumMobile from "./CurriculumMobile.jsx";
import UseMobileDetect from "../../hooks/UseMobileDetect.jsx"
import useCurriculum from "../../hooks/useCurriculum";

function Curriculum() {
    const isMobile = UseMobileDetect();
    const curriculum = useCurriculum("9719885062930432");
    const sorted = [...curriculum].sort((a, b) => a.ordering - b.ordering);

    // Gom nhóm: kind 1 là giai đoạn, các dòng kind 2 ngay sau nó là môn của giai đoạn đó
    const stages = [];
    sorted.forEach((item) => {
        if (item.kind === 1) {
            stages.push({ ...item, subjects: [] });
        } else if (stages.length > 0) {
            stages[stages.length - 1].subjects.push(item);
        }
    });

    // Gom môn theo tên giai đoạn (phần trước dấu ":"), ví dụ "GIAI ĐOẠN HỌC 2"
    const subjectsByPhase = {};
    stages.forEach((stage) => {
        const phase = stage.name.split(":")[0];
        if (!subjectsByPhase[phase]) {
            subjectsByPhase[phase] = [];
        }
        subjectsByPhase[phase].push(...stage.subjects);
    });

    // Các ô cùng giai đoạn dùng chung một danh sách môn
    const fullStages = stages.map((stage) => ({
        ...stage,
        subjects: subjectsByPhase[stage.name.split(":")[0]],
    }));

    if (isMobile) {
        return <CurriculumMobile stages={fullStages} />;
    }
    return <CurriculumDesktop stages={fullStages} />;
}

export default Curriculum;
