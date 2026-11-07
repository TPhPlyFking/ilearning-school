function AboutDesktop({config}) {

    const aboutData = config?.description;

    if (!aboutData) return null;

    return (
        <section className="about-desktop">
            {}
            <h1>{aboutData.title}</h1>
            <p>{aboutData.description}</p>
        </section>
    );
}

export default AboutDesktop;