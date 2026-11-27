import { useEffect, useState } from "react";
import { fetchApiData } from "../api/apiHelper.jsx";

export default function usePartners() {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function loadData() {
            const data = await fetchApiData("/v1/company/public/list", {
                page: 0,
                size: 5,
            });
            if (data === null) return;

            setCompanies(data.content ?? []);
        }
        loadData().catch(console.error);
    }, []);

    return companies;
}
