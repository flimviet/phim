function showWatermarkIcon(show) {
    const icon = document.getElementById('watermark-icon');
    if (icon) icon.style.display = show ? 'block' : 'none';
}

document.addEventListener('fullscreenchange', function () {
    const isFullscreen = !!document.fullscreenElement;
    showWatermarkIcon(isFullscreen);
});

// Khi double click video container -> fullscreen
document.getElementById('Video').addEventListener('dblclick', function () {
    this.requestFullscreen().catch(err => console.error("Fullscreen failed", err));
});

// Nút "Xem phim"
function playVideo() {
    const videoContainer = document.getElementById('Video');
    const iframe = videoContainer?.querySelector('iframe');

    if (videoContainer && iframe) {
        videoContainer.style.display = 'block';

        // Thêm autoplay nếu chưa có
        if (!iframe.src.includes('autoplay=1')) {
            const hasQuery = iframe.src.includes('?');
            iframe.src += (hasQuery ? '&' : '?') + 'autoplay=1';
        }

        // Gọi fullscreen và show watermark icon
        videoContainer.requestFullscreen()
            .then(() => showWatermarkIcon(true))
            .catch(err => console.error("Fullscreen failed", err));
    } else {
        console.error("Video container or iframe not found");
    }
}
