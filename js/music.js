const audio = document.getElementById('bg-music');
const musicWidget = document.getElementById('music-toggle');
const musicMenu = document.getElementById('music-menu');
const options = document.querySelectorAll('.song-option');
const firstSong = document.querySelector('.song-option.active').getAttribute('data-src');

audio.src = firstSong;

// 1. 嘗試自動播放的函數
function tryAutoplay() {
    audio.play().then(() => {
        musicWidget.classList.add('playing');
    }).catch(error => {
        console.log("瀏覽器阻擋了自動播放，等待使用者點擊...");
        // 如果被阻擋，當使用者第一次點擊頁面任何地方時播放
        document.addEventListener('click', () => {
            audio.play();
            musicWidget.classList.add('playing');
        }, { once: true });
    });
}

// 頁面載入後執行
window.addEventListener('load', tryAutoplay);

// 2. 點擊圖示開關選單 / 播放暫停
musicWidget.addEventListener('click', (e) => {
    e.stopPropagation(); // 防止觸發 document 的點擊事件
    musicMenu.classList.toggle('show');
    
    if (audio.paused) {
        audio.play();
        musicWidget.classList.add('playing');
    }
});

// 3. 切換歌曲
options.forEach(opt => {
    opt.addEventListener('click', () => {
        options.forEach(o => o.classList.remove('active'));
        opt.classList.add('active');
        
        const wasPlaying = !audio.paused;
        audio.src = opt.getAttribute('data-src');
        if (wasPlaying) {
            audio.play();
            musicWidget.classList.add('playing');
        }
        musicMenu.classList.remove('show');
    });
});

// 點擊空白處關閉選單
document.addEventListener('click', () => {
    musicMenu.classList.remove('show');
});