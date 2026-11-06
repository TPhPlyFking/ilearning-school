import { useEffect, useState } from "react";
import { fetchApiData } from "../api/apiHelper";

export default function useMentors() {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchApiData("/v1/mentor/public/list", {
                page: 1,
                size: 5,
            });

            if (data === null) return;

            setMentors(data.content ?? []);
        }

        loadData();
    }, []);

    return mentors;
}