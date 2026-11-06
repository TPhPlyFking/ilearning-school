import { useEffect, useState } from "react";
import { fetchApiData } from "../api/apiHelper";

export default function useClassrooms() {
    const [classrooms, setClassrooms] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchApiData("/v1/class-room/public/list", {
                page: 0,
                size: 5,
            });
            if (data === null) return;

            setClassrooms(data.content);
        }
        loadData();
    }, []);

    return classrooms;
}