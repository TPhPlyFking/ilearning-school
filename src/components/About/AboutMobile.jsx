function AboutMobile({config}) {
    const about = config?.description;
    if(!about) return null;
    return (
        <section className="about-mobile">
            <h1>{about.title}</h1>
            <p>{about.description}</p>
        </section>
    );
}

export default AboutMobile;