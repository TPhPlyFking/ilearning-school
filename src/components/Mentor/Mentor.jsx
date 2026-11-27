import useMobileDetect from "../../hooks/useMobileDetect.jsx";
import MentorDesktop from "./MentorDesktop.jsx";
import MentorMobile from "./MentorMobile.jsx";
import useMentors from "../../hooks/useMentors.jsx";
import {useState} from 'react';

function Mentor() {
    const isMobile = useMobileDetect();
    const mentors = useMentors();
    const [currentMentor, setCurrentMentor] = useState(0);

    if (isMobile) return <MentorMobile mentors = {mentors} currentMentor={currentMentor} setCurrentMentor={setCurrentMentor} />;
    return <MentorDesktop mentors = {mentors} currentMentor={currentMentor} setCurrentMentor={setCurrentMentor} />
}
export default Mentor;