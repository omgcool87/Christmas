// 等待 HTML 全部載入完成
window.addEventListener('load', () => {
    
    // 1. 註冊插件
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".countdown", {
        y: 30,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".countdown",
            start: "top 85%",
            toggleActions: "play none none reverse",
            // markers: true // 💡 建議開啟這個，可以看到觸發紅線，方便除錯
        }
    });

    // 2. 你的 Page 3 文字動畫 (改用 from 效果更好)
    gsap.from(".page-word-title", {
        y: 30,
        opacity: 0,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page3-container p",
            start: "top 85%",
            toggleActions: "play none none reverse",
            // markers: true // 💡 建議開啟這個，可以看到觸發紅線，方便除錯
        }
    });

    gsap.from(".page3-container p", {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page3-container p",
            start: "top 85%",
            toggleActions: "play none none reverse",
            // markers: true // 💡 建議開啟這個，可以看到觸發紅線，方便除錯
        }
    });

    // 3. 雪人搖擺動畫
    gsap.fromTo(".page-word-title img", {rotation: -10}, {
        rotation: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    // 4. (選填) 你之前的倒數計時代碼放在這下面...
});