function AboutDesktop ({config}) {
    const about = config?.description;
    if (!about) return null;
    return(
        <section className="about-desktop">
            <div className="about-text">
                <h1>{about.title}</h1>
                <p>{about.description}</p>
            </div>
        </section>
    );
}

export default AboutDesktop;