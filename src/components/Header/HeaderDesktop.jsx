function HeaderDesktop() {
    return (
        <header className="header-desktop">
            <div className="header-content">
                <div className="logo">
                    <div className="logo-text">
                        <p> iLearning <br/> School</p>
                    </div>
                </div>

                <div className="search">
                    <input type="search" placeholder="Tìm kiếm khóa học, bài viết, video..."/>
                </div>

                <nav className="link">
                    <a href = "#">Trang chủ</a>
                    <details className="link-detail">
                        <summary>Khóa học</summary>
                        <ul>
                            <li>
                                <a href="#">
                                    HTML & CSS
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Javescript
                                </a>
                            </li>
                        </ul>
                    </details>
                    <a href="goc"> Góc học viên </a>
                    <a href="gt"> Giới thiệu</a>
                    <a href="blog"> Blog</a>
                    <a href="log in">Log in</a>
                    <button> SIGN</button>
                </nav>
            </div>
        </header>
    );
}

export default HeaderDesktop;