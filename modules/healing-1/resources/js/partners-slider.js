$(document).ready(function () {
    const wrapper = document.getElementById('partnersWrapper');
    const track = document.getElementById('partnersTrack');

    let delay = 6000;
    let duration = 600;
    let paused = false;

    function slideOnce() {
        if (paused) return;

        // trượt 1 logo
        track.style.transition = `transform ${duration}ms ease`;
        track.style.transform = 'translateX(-16.6667%)';

        // sau khi trượt xong
        setTimeout(() => {
            track.style.transition = 'none';
            track.style.transform = 'translateX(0)';

            // đưa logo đầu xuống cuối (KHÔNG tạo DOM mới)
            track.appendChild(track.firstElementChild);
        }, duration);
    }

// autoplay
    let timer = setInterval(slideOnce, delay);

// hover → pause
    wrapper.addEventListener('mouseenter', () => paused = true);
    wrapper.addEventListener('mouseleave', () => paused = false);
});
