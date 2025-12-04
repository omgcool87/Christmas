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