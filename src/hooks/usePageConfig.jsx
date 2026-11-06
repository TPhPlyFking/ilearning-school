import { useEffect, useState } from "react";
import { fetchApiData } from "../api/apiHelper";

export default function usePageConfig() {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        async function loadData() {
            const data = await fetchApiData("/v1/setting/public");
            if (data === null) return;
            const item = data.find((d) => d.keyName === "page_config");

            if (item) {
                setConfig(JSON.parse(item.valueData));
            }
        }
        loadData();
    }, []);
    return config;
}