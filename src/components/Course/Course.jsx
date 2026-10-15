import CourseMobile from './CourseMobile.jsx';
import UseMobileDetect from '../UseMobileDetect/UseMobileDetect.jsx';
import CourseDesktop from "./CourseDesktop.jsx";

function Course() {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <CourseMobile />;
    }
    return <CourseDesktop />;
}

export default Course;