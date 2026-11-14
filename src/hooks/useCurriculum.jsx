import { useEffect, useState } from "react";
import { fetchApiData } from "../api/apiHelper";

export default function useCurriculum(courseId) {
    const [curriculum, setCurriculum] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchApiData("/v1/syllabus/public/list", {
                courseId: courseId,
                page: 0,
                size: 20,
            });
            if (data === null) return;

            setCurriculum(data.content);
        }
        loadData();
    }, [courseId]);

    return curriculum;
}
