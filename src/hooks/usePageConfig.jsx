import {fetchApiData} from "../api/apiHelper.jsx";
import {useEffect, useState} from 'react';

export default function usePageConfig () {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        async function loadData() {
            const data = await fetchApiData("/v1/setting/public");
            if(data === null) return;
            const item = data.find((d) => d.keyName === "page_config");
            if (item) {
                setConfig(JSON.parse(item.valueData)); // biến chuỗi thành object
            }
        }
        loadData().catch(console.error);
    }, []);
    return config;
}