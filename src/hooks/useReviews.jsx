import { useEffect, useState } from "react";
import { fetchApiData } from "../api/apiHelper";

export default function useReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchApiData("/v1/rating/public/list", {
                page: 0,
                size: 3,
            });

            if (data === null) return;

            if (data.content) {
                setReviews(data.content);
            }
        }

        loadData();
    }, []);

    return reviews;
}