import { useState } from "react";
import useMobileDetect from '../../hooks/useMobileDetect.jsx';
import useCourse from '../../hooks/useCourse.jsx';
import CourseDesktop from "./CourseDesktop.jsx";
import CourseMobile from "./CourseMobile.jsx";
import AllCourse from "../AllCourse/AllCourse.jsx";

function Course() {
    const isMobile = useMobileDetect();
    const classrooms = useCourse();
    const [showAll, setShowAll] = useState(false);
    const show = showAll ? classrooms : classrooms.slice(0, 4);

    return (
        <>
            {isMobile ? <CourseMobile classrooms={show} /> : <CourseDesktop classrooms={show} />}
            <AllCourse showAll={showAll} onClick={() => setShowAll(!showAll)} />
        </>
    );
}

export default Course;