import {useEffect, useState} from 'react';
import {fetchApiData} from "../api/apiHelper.jsx";

export default function useCourse(){
    const [classrooms, setClassrooms]  = useState([]);

    useEffect (() => {
        async function loadData() {
            const data = await fetchApiData("/v1/class-room/public/list",{
                page: 0,
                size: 10,
            });
            if (data === null) return;

            const list = await Promise.all(
                data.content.map(async(lop) => {
                    const gt = await fetchApiData("/v1/syllabus/public/list",
                        { courseId : lop.course.id,
                            page: 0,
                            size: 20,
                        });
                    return { ...lop, curriculum: gt && gt.content ?  gt.content : []};
                })
            );
            setClassrooms(list);
        }
        loadData().catch(console.error);
    }, []);
    return classrooms;
}
