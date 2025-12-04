const numStars = 200;

const sky = document.getElementById('sky');

for (let i = 0; i < numStars; i++) {
    let star = document.createElement('div');
    star.className = 'star';

            // 隨機位置 (0% - 100%)
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';

            // 隨機大小 (1px - 3px)
    let size = Math.random() * 2 + 1 + 'px';
    star.style.width = size;
    star.style.height = size;

            // 隨機動畫延遲和時長
    star.style.animationDelay = Math.random() * 5 + 's'; // 延遲 0s ~ 5s
    star.style.animationDuration = Math.random() * 3 + 2 + 's'; // 時長 2s ~ 5s
    sky.appendChild(star);
}