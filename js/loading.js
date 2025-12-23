// 放在 JS 檔案的最上方
function initLoading() {
    console.log("找到的圖片總數：", document.querySelectorAll('img').length);
    const images = document.querySelectorAll('img');
    const totalImages = images.length;
    let loadedImages = 0;
    
    const progressFill = document.getElementById('progress-fill');
    const loadingText = document.getElementById('loading-text');
    const loadingMask = document.getElementById('loading-mask');

    if (totalImages === 0) {
        hideLoading();
        return;
    }

    images.forEach(img => {
        // 如果圖片已經在快取中載入了
        if (img.complete) {
            updateProgress();
        } else {
            // 監聽圖片載入完成或失敗
            img.addEventListener('load', updateProgress);
            img.addEventListener('error', updateProgress);
        }
    });

    function updateProgress() {
        loadedImages++;
        const progress = Math.round((loadedImages / totalImages) * 100);
        
        // 更新 UI
        progressFill.style.width = `${progress}%`;
        loadingText.innerText = `${progress}%`;

        // 當全部載入完成
        if (loadedImages === totalImages) {
            setTimeout(hideLoading, 500); // 稍微停頓一下讓使用者看清楚 100%
        }
    }

    function hideLoading() {
        // 使用 GSAP 製作優雅的淡出消失
        gsap.to("#loading-mask", {
            opacity: 0,
            duration: 1,
            onComplete: () => {
                document.getElementById('loading-mask').style.display = 'none';
                // 在這裡觸發你第一頁的聖誕老人動畫
            }
        });
    }
}

// 執行
initLoading();