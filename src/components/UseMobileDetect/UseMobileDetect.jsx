import {useState, useEffect} from 'react'

function UseMobileDetect() {
    const mediaQuery = window.matchMedia("(max-width: 900px)");
    const [isMobile, setIsMobile] = useState(mediaQuery.matches);
    useEffect(() => {
        const handleChange = (event) => (
            setIsMobile(event.matches)
        );
        mediaQuery.addEventListener("change", handleChange);
        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        }
    }, []);

    return isMobile;
}

export default UseMobileDetect;
