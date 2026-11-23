import logoIcon from "../../assets/logo-icon.svg"
import {useState} from 'react';

function HeaderMobile () {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
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
            </header>

            <div className={"menu-overlay" + (isOpen ? " open" : "")}
                onClick={() => setIsOpen(false)}>

            </div>

            <nav className={"menu-panel" + (isOpen ? " open" : "")}>
                <div className="menu-panel-header">
                    <span>Menu</span>
                    <button className="menu-close" onClick={() => setIsOpen(false)}>✕</button>
                </div>
                <div className="menu-links">
                    <a href="#" onClick={() => setIsOpen(false)}>Trang chủ</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Khóa học</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Góc học viên</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Giới thiệu</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Blog</a>
                    <a href="#" onClick={() => setIsOpen(false)}>Log in</a>
                </div>
            </nav>
        </>
    )
}

export default HeaderMobile;