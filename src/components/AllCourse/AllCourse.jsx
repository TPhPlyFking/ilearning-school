import { Button, ConfigProvider } from "antd";

function AllCourse({ showAll, onClick }) {
    return (
        <ConfigProvider theme={{ token: { colorPrimary: "#15cca3", colorPrimaryHover: "#12b38f",  colorPrimaryActive: "#0f9a7b",} }}>
            <Button
                type="primary"
                onClick={onClick}
                style={{
                    display: "block",
                    width: "clamp(200px, 14.06vw, 270px)",
                    height: "clamp(54px, 3.65vw, 70px)",
                    margin: "clamp(40px, 3.5vw, 70px) auto",
                    borderRadius: "clamp(12px, 1.04vw, 20px)",
                    fontSize: "clamp(17px, 1.15vw, 22px)",
                    fontWeight: 500,
                }}
            >
                {showAll ? "Thu gọn" : "Tất cả khóa học"}
            </Button>
        </ConfigProvider>
    );
}

export default AllCourse;