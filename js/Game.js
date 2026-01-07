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

const currentCount = document.getElementById('current-count');
const MAX_CHARS = 100; // 設定最大字數

inputText.addEventListener('input', (e) => {
    let content = e.target.value;
    
    // 如果字數超過上限，強制截斷（保險機制）
    if (content.length > MAX_CHARS) {
        content = content.substring(0, MAX_CHARS);
        e.target.value = content;
    }
    
    // 更新字數顯示
    currentCount.innerText = content.length;
    
    // 更新卡片預覽
    previewText.innerText = content || "寫下你的溫暖祝福...";
});


document.getElementById('download-trigger').addEventListener('click', () => {
    const card = document.getElementById('card-widget');

    // 1. clone 卡片
    const clone = card.cloneNode(true);
    clone.id = 'snapshot-temp';

    // 2. 移除 3D 翻轉
    clone.classList.remove('is-flipped');

    const inner = clone.querySelector('.card-inner');
    inner.style.transform = 'none';

    // 3. 只留下目前畫面（正面 or 背面）
    const isFlipped = card.classList.contains('is-flipped');
    const front = clone.querySelector('.card-front');
    const back  = clone.querySelector('.card-back');

    if (isFlipped) {
        front.style.display = 'none';
        back.style.transform = 'none';
    } else {
        back.style.display = 'none';
    }

    // 4. 丟到畫面外
    document.body.appendChild(clone);

    // 5. 截圖
    html2canvas(clone, {
        scale: 2,
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = `christmas-card-${isFlipped ? 'back' : 'front'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();

        clone.remove();
    });
});
