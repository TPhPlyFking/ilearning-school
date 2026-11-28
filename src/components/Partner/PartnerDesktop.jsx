import { useEffect, useRef } from "react";

const API_BASE_URL = "https://ai-project-api.moviehub.io.vn";

function PartnerDesktop({companies = []}) {
    const listRef = useRef(null);
    const pausedRef = useRef(false); // true khi chuột đang nằm trên logo thì không tự chạy

    // danh sách được nối 2 lần để chạy hết vòng thì quay lại đầu mà không bị trống
    const loopList = [...companies, ...companies];

    const holdRef = useRef(0);        // sau khi bấm nút thì tạm nghỉ tự chạy 1 chút cho cuộn mượt xong
    const runningRef = useRef(false); // đang tự chạy hay không (để biết lúc nào cần lấy lại vị trí)
    const posRef = useRef(0);         // vị trí hiện tại (số lẻ để chạy êm)

    // bấm nút: cuộn sang trái (-1) hoặc phải (1) đúng 1 logo
    const scroll = (huong) => {
        const list = listRef.current;
        if (!list) return;
        const half = list.scrollWidth / 2;
        if (huong === 1 && list.scrollLeft >= half - 1) {
            list.scrollLeft -= half; // nhảy về nửa đầu (giống hệt nên không thấy giật)
        }
        if (huong === -1 && list.scrollLeft <= 0) {
            list.scrollLeft += half;
        }
        holdRef.current = Date.now() + 700;
        list.scrollBy({ left: huong * (list.clientWidth / 5), behavior: "smooth" });
    };

    // tự chạy êm: mỗi khung hình dịch list sang trái một chút (40px/giây), dừng khi chuột ở trên logo
    useEffect(() => {
        let id;
        let last = performance.now();
        const step = (now) => {
            const list = listRef.current;
            const dt = now - last;
            last = now;
            if (list) {
                const dung = pausedRef.current || Date.now() < holdRef.current;
                if (dung) {
                    runningRef.current = false;
                } else {
                    if (!runningRef.current) {
                        posRef.current = list.scrollLeft; // vừa chạy lại thì lấy vị trí thật
                        runningRef.current = true;
                    }
                    const half = list.scrollWidth / 2;
                    posRef.current += (40 * dt) / 1000;
                    if (posRef.current >= half) posRef.current -= half;
                    list.scrollLeft = posRef.current;
                }
            }
            id = requestAnimationFrame(step);
        };
        id = requestAnimationFrame(step);
        return () => cancelAnimationFrame(id);
    }, [companies]);

    return (
        <section className="partner">
            <div className="partner-intro">
                <h5>khách hàng và</h5>
                <h6>Đối tác của UI8</h6>
            </div>

            <div className="partner-logo">
                <button className="partner-arrow" onClick={() => scroll(-1)}>←</button>

                <div
                    className="partner-list"
                    ref={listRef}
                    onMouseEnter={() => { pausedRef.current = true; }}
                    onMouseLeave={() => { pausedRef.current = false; }}
                >
                    {loopList.map((company, index) => (
                        <div className="partner-item" key={index}>
                            <img
                                src={API_BASE_URL + "/v1/file/download" + company.avatar}
                                alt={company.name}
                            />
                        </div>
                    ))}
                </div>

                <button className="partner-arrow" onClick={() => scroll(1)}>→</button>
            </div>
        </section>
    );
}

export default PartnerDesktop;
