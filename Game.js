    // 取得 DOM 元素
const previewImage = document.getElementById('preview-image');
    const inputTitle = document.getElementById('input-title');
    const previewTitle = document.getElementById('preview-title');
    const inputText = document.getElementById('input-text');
    const previewText = document.getElementById('preview-text');
    const cardWidget = document.getElementById('card-widget');
    // 取得所有樣式單選按鈕
    const styleRadios = document.querySelectorAll('input[name="card-style"]');

    // 文字同步
    inputTitle.addEventListener('input', (e) => previewTitle.innerText = e.target.value || "Merry Christmas!");
    inputText.addEventListener('input', (e) => previewText.innerText = e.target.value || "這是一段祝福語...");

    // ====== 新增：樣式切換邏輯 ======
    styleRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            // 當某個 radio 被選中時，將其 value (大圖網址) 設定給預覽圖片
            if (e.target.checked) {
                // 做一個簡單的淡出淡入效果提升體驗
                previewImage.style.opacity = 0.5; 
                setTimeout(() => {
                    previewImage.src = e.target.value;
                    previewImage.style.opacity = 1;
                }, 150);
            }
        });
    });
    // ==============================

    // 翻轉按鈕
    document.getElementById('flip-trigger').addEventListener('click', () => {
        cardWidget.classList.toggle('is-flipped');
    });

    // 下載按鈕
    document.getElementById('download-trigger').addEventListener('click', () => {
        const isFlipped = cardWidget.classList.contains('is-flipped');
        const target = isFlipped ? "#export-back" : "#export-front";
        // 提高下載解析度
        html2canvas(document.querySelector(target), { scale: 2, useCORS: true }).then(canvas => {
            const link = document.createElement('a');
            link.download = `christmas-card-${isFlipped ? 'back' : 'front'}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    });

    // 雪花動畫產生器 (維持不變)
    const snowContainer = document.getElementById('snow-container');
    for (let i = 0; i < 40; i++) {
        const snowflake = document.createElement('div');
        snowflake.innerHTML = '❄'; snowflake.style.position = 'absolute'; snowflake.style.color = '#fff';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animation = `snowfall ${Math.random() * 5 + 3}s linear infinite`;
        snowflake.style.opacity = Math.random() * 0.6 + 0.2;
        snowflake.style.fontSize = Math.random() * 15 + 8 + 'px';
        snowContainer.appendChild(snowflake);
    }