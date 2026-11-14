function VideoDesktop({config}) {

    const videoUrl = config?.video;

    if (!videoUrl) return null;

    const embedUrl = videoUrl.replace("youtu.be/", "www.youtube.com/embed/").split("?")[0];

    return (
        <section className="Video-Desktop">
            <iframe
                width="100%"
                src={embedUrl}
                title="Video Giới Thiệu"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </section>
    );
}

export default VideoDesktop;