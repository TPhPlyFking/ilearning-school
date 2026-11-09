import usePageConfig from "../../hooks/usePageConfig.jsx";

function AboutMobile() {
    const config = usePageConfig();

    const aboutData = config?.description;

    if (!aboutData) return null;

    return (
        <section className="about-mobile">
            {}
            <h1>{aboutData.title}</h1>
            <p>{aboutData.description}</p>
        </section>
    );
}
export default AboutMobile;