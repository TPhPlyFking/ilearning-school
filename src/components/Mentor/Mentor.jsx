import MentorMobile from "./MentorMobile.jsx";
import MentorDesktop from "./MentorDesktop.jsx";
import UseMobileDetect from "../../hooks/UseMobileDetect.jsx";
import useMentors from "../../hooks/useMentors";
import {useState} from "react";

function Mentor() {
    const isMobile = UseMobileDetect();
    const mentors = useMentors();

    const [currentMentor, setCurrentMentor] = useState(0);


    if (isMobile) {
        return <MentorMobile
            mentors={mentors}
            currentMentor={currentMentor} setCurrentMentor={setCurrentMentor}
        />;
    }

    return <MentorDesktop
        mentors={mentors}
        currentMentor={currentMentor} setCurrentMentor={setCurrentMentor}
    />;
}

export default Mentor;