async function playVideo() {
    const videoContainer = document.getElementById('Video');
    const iframe = document.getElementById('Video');

    try {
        const res = await fetch('https://flimapi.x10.mx/?link=https://docchuyentrang.blogspot.com/p/conan-movie-028.html?m=1');
        const data = await res.json();

        if (data.iframe_src) {
            iframe.src = data.iframe_src;
            videoContainer.style.display = 'block';
            videoContainer.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert("Không tìm thấy video.");
        }
    } catch (err) {
        console.error(err);
        alert("Không thể tải video. Vui lòng thử lại sau.");
    }

    document.addEventListener('fullscreenchange', function () {
        const isFullscreen = document.fullscreenElement;
        const watermark = document.getElementById('watermark-icon');
        const iframeContainer = document.getElementById('Video');

        if (isFullscreen === iframeContainer) {
            watermark.style.display = 'block';
        } else {
            watermark.style.display = 'none';
        }
    });

    document.getElementById('Video').addEventListener('dblclick', function () {
        this.requestFullscreen().catch((err) => console.error("Fullscreen failed", err));
    });
}
