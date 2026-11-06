import CourseMobile from './CourseMobile.jsx';
import UseMobileDetect from '../../hooks/UseMobileDetect.jsx';
import CourseDesktop from "./CourseDesktop.jsx";
import useClassrooms from "../../hooks/useClassrooms";

function Course() {
    const isMobile = UseMobileDetect();
    const classrooms = useClassrooms();
    if (isMobile) {
        return <CourseMobile classrooms={classrooms}/>;
    }
    return <CourseDesktop classrooms={classrooms}/>;
}

export default Course;