import {Button} from 'antd';
import logoIcon from "../../assets/logo-icon.svg"

function HeaderDesktop() {
    return(
        <header className="header-desktop">
            <div className="header-content">
                <div className ="logo">
                    <img src={logoIcon} alt="logo" className="logo-icon" />
                    <div className="logo-text">
                        <p>ilearning <br/> school</p>
                    </div>
                </div>

                <div className="search">
                    <input type="search" placeholder=" Tìm kiếm khóa học, bài viết, video..."/>
                </div>

                <nav className="link">
                    <a href = "#">Trang chủ</a>
                    <details className="link-detail">
                        <summary>Khóa học</summary>
                            <ul>
                                <li>
                                    <a href="#">
                                        HTML&CSS
                                    </a>
                                </li>
                            </ul>
                    </details>
                    <a href="#">Góc học viên</a>
                    <a href="#">Giới thiệu</a>
                    <a href="#">Blog</a>
                    <span className="divider"></span>
                    <a href="#">Log In</a>
                    <Button className="btn-sign" type="primary" size="large" style={{
                        background:"#090C0F",
                        color: "#FFF",
                        width: "clamp(70px, 7.76vw, 149px)",
                        height: "clamp(32px, 3.13vw, 60px)",
                        borderRadius: "10px",
                        fontSize: "clamp(12px, 1vw, 20px)"
                    }}>
                        SIGN
                    </Button>
                </nav>
            </div>
        </header>
    );
}

export default HeaderDesktop;