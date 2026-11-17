import logoIcon from "../../assets/logo-icon.svg"
import {useState} from 'react';

function HeaderMobile () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="header-mobile">
            <div className="mobile-logo">
                <img src={logoIcon} alt="logo" className="icon-mobile" />
                <p>ilearning<br/>School</p>
            </div>
            <div className="header-right">
                <button className="contact-mobile">Liên hệ tư vấn</button>
                <button className="mobile-menu" onClick={() => setIsOpen(!isOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
            {isOpen && (
                <nav className="link-mobile">
                    <a href="#">Trang chủ</a>
                    <a href="#">Khóa học</a>
                    <a href="#">Góc học viên</a>
                    <a href="#">Giới thiệu</a>
                    <a href="#">Blog</a>
                    <a href="#">Log in</a>
                </nav>
            )}
        </header>
    )
}

export default HeaderMobile;