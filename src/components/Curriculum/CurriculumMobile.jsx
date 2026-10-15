function CurriculumMobile() {
    return (
        <section className="curriculum-mobile">
            <h1>Giáo trình</h1>

            <div className="curriculum-list">
                <div className="curriculum-item">
                    <div className="curriculum-header">
                        <h2>GIAI ĐOẠN HỌC 1: Chuẩn bị nền tảng</h2>
                        <span className="icon">+</span>
                    </div>
                </div>

                <div className="curriculum-item">
                    <div className="curriculum-header">
                        <h2>
                            GIAI ĐOẠN HỌC 2:<br />
                            Chuyên môn sâu - Hướng chuyên sâu 1:<br />
                            Lập trình viên java
                        </h2>
                        <span className="icon">−</span>
                    </div>
                    <div className="curriculum-body">
                        <p>- Môn 3: Lập trình hướng đối tượng</p>
                        <p>- Môn 4: Cấu trúc dữ liệu và giải thuật</p>
                        <p>- Môn 5: Các hệ cơ sở dữ liệu</p>
                        <p>- Môn 6: Phát triển ứng dụng web</p>
                        <p>- Môn 7 (không bắt buộc): Lập trình di động</p>
                    </div>
                </div>

                <div className="curriculum-item">
                    <div className="curriculum-header">
                        <h2>GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 2: Lập trình viên web fullstack</h2>
                        <span className="icon">+</span>
                    </div>
                </div>

                <div className="curriculum-item">
                    <div className="curriculum-header">
                        <h2>GIAI ĐOẠN HỌC 2: Chuyên môn sâu - Hướng chuyên sâu 2: Lập trình viên web fullstack</h2>
                        <span className="icon">+</span>
                    </div>
                </div>
            </div>

            <button className="Join-now">Đăng ký ngay</button>
        </section>
    );
}

export default CurriculumMobile;