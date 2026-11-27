import {fetchApiData} from "../api/apiHelper.jsx";
import {useState, useEffect} from 'react';

export default function useMentor () {
    const [mentors, setMentors] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchApiData("/v1/mentor/public/list", {
                page: 0,
                size: 5,
            });
            if (data === null) return;
            setMentors(data.content ?? [])
        }
        loadData().catch(console.error);
    }, []);
    return mentors;
};