import CurriculumDesktop from "./CurriculumDesktop.jsx";
import CurriculumMobile from "./CurriculumMobile.jsx";
import UseMobileDetect from "../../hooks/UseMobileDetect.jsx"
import useCurriculum from "../../hooks/useCurriculum";

function Curriculum() {
    const isMobile = UseMobileDetect();
    const curriculum = useCurriculum("9719885062930432");

    // Bước 1: gom thành từng giai đoạn
    // kind 1 = giai đoạn, kind 2 = môn của giai đoạn đứng ngay trước nó
    const stages = [];
    let currentStage = null;

    curriculum.forEach((item) => {
        if (item.kind === 1) {
            currentStage = { ...item, subjects: [] };
            stages.push(currentStage);
        } else if (currentStage !== null) {
            currentStage.subjects.push(item);
        }
    });

    // Bước 2: các ô cùng giai đoạn (cùng chữ trước dấu ":") dùng môn của ô đầu tiên
    const firstSubjects = {};

    stages.forEach((stage) => {
        const phase = stage.name.split(":")[0];
        if (firstSubjects[phase] === undefined) {
            firstSubjects[phase] = stage.subjects;
        }
        stage.subjects = firstSubjects[phase];
    });

    if (isMobile) {
        return <CurriculumMobile stages={stages} />;
    }
    return <CurriculumDesktop stages={stages} />;
}

export default Curriculum;
