import  {useState, useEffect} from 'react';
import {fetchApiData} from "../api/apiHelper.jsx";

export default function useReviews () {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchApiData("/v1/rating/public/list", {
                page: 1,
                size: 3,
            });
            if (data === null) return;
            setReviews(data.content);
        }
        loadData().catch(console.error);
    }, []);
    return reviews;
}