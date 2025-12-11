// 星星
function createStars() {
    const starsContainer = document.getElementById("stars");
    const starCount = 200;

    for (let i = 0; i<starCount; i++) {
        const star = document.createElement("div");
        star.className = "star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.width = star.style.height = Math.random() * 4 + "px" ;
        starsContainer.appendChild(star);
    }
}

createStars();

// 聖誕倒數
let future = new Date("Dec 25,2025 00:00:00").getTime();

function updataCountdown() {
    let present = new Date().getTime();
    let time_period = future - present;

    if (time_period <= 0) {
        let nextDate = new Date(future);
        nextDate.setFullYear(nextDate.getFullYear() + 1);
        future = nextDate.getTime();
        time_period = future - present;
    }

    const sec = 1000 
    const min = sec * 60;
    const hr = min * 60;
    const day = hr * 24;

    let d = Math.floor(time_period / day);
    let h = Math.floor((time_period % day) / hr);
    let m = Math.floor((time_period % hr) / min);
    let s = Math.floor((time_period % min) / sec);

    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    document.querySelector(".day-no").innerText = d;
    document.querySelector(".hour-no").innerText = h;
    document.querySelector(".minute-no").innerText = m;
    document.querySelector(".second-no").innerText = s;

    setTimeout(updataCountdown,1000);

}
updataCountdown();

// 下雪效果
let snowfalling = document.querySelector(".snowfalling");
let context = snowfalling.getContext("2d");
let wid = window.innerWidth;
let hgt = window.innerHeight;
snowfalling.width = wid;
snowfalling.height = hgt;

let num = 200;
let snows = [];

// Create the snow data
for (let i = 0; i < num; i++) {
    snows.push({
        x: Math.random() * wid,
        y: Math.random() * hgt,
        r: Math.random() * 2 + 1, // Radius
        d: Math.random() + 0.2      // Density (controls fall speed)
    });
}

let draw = () => {
    // 1. Clear the canvas for the new frame
    context.clearRect(0, 0, wid, hgt);

    // 2. Set style and shadow (Soft Glow Effect)
    context.fillStyle = "rgb(255, 255, 255)";
    context.shadowColor = "white"; // Where you stopped
    context.shadowBlur = 5;        // Adds a soft glow to the snow
    
    context.beginPath();

    // 3. Loop through snows array to draw and move
    for (let i = 0; i < num; i++) {
        let s = snows[i];

        // Draw the flake
        context.moveTo(s.x, s.y);
        context.arc(s.x, s.y, s.r, 0, Math.PI * 2);

        // Update position (Falling down)
        s.y += s.d; // Move down based on density
        s.x += Math.sin(s.y * 0.05) * 0.5; // Slight side-to-side sway

        // 4. Reset flake if it leaves the bottom or right side
        if (s.y > hgt) {
            s.y = 0;
            s.x = Math.random() * wid;
        }
        if (s.x > wid) {
            s.x = 0;
        }
    }
    
    context.fill();
    
    // 5. Repeat the animation
    requestAnimationFrame(draw);

    // ... (在你原本的程式碼下方加入這段) ...

    window.addEventListener("resize", () => {
    // 1. 重新取得視窗寬高
    wid = window.innerWidth;
    hgt = window.innerHeight;
    
    // 2. 更新 Canvas 大小
    snowfalling.width = wid;
    snowfalling.height = hgt;
    
    // 3. (選用) 如果你想在視窗變大時增加雪花數量，可以在這裡補 code
    // 但通常只更新寬高就夠了，舊的雪花會自動飄到新邊界內
    });
}

// Start the animation
draw();

