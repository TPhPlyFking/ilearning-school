import {fetchApiData} from "../api/apiHelper.jsx";
import {useEffect, useState} from 'react';

let request = null; // nhớ lần gọi đầu tiên, dùng chung cho mọi component

function loadConfig() {
    if (!request) {
        request = fetchApiData("/v1/setting/public").then((data) => {
            if (data === null) return null;
            const item = data.find((d) => d.keyName === "page_config");
            return item ? JSON.parse(item.valueData) : null;
        });
    }
    return request;
}

export default function usePageConfig () {
    const [config, setConfig] = useState(null);

    useEffect(() => {
        loadConfig().then(setConfig).catch(console.error);
    }, []);
    return config;
}
