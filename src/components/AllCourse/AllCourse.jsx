import AllCourseDesktop from './AllCourseDesktop.jsx';
import AllCourseMobile from './AllCourseMobile.jsx';
import UseMobileDetect from "../UseMobileDetect/UseMobileDetect.jsx";

function AllCourse() {
    const isMobile = UseMobileDetect();
    if (isMobile) {
        return <AllCourseMobile />;
    }
    return <AllCourseDesktop />;
}

export default AllCourse;