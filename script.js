document.addEventListener("DOMContentLoaded", () => {

    // ===== Reveal Animation (fade + slide + class toggle) =====
    const revealItems = document.querySelectorAll(
        ".card, .section h2, .skills span, .project, .skill"
    );

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                entry.target.classList.add("show");
            }
        });
    }, { threshold: .15 });

    revealItems.forEach(item => {
        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = ".7s ease";
        revealObserver.observe(item);
    });

    // ===== Typing Effect =====
    const title = document.querySelector(".hero h2");
    if (title) {
        const text = title.textContent;
        title.textContent = "";
        let i = 0;
        function typing() {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typing, 55);
            }
        }
        typing();
    }

    // ===== Skills Progress Bars =====
    const skills = document.querySelector("#skills");
    const bars = document.querySelectorAll(".progress-bar");
    let barsFilled = false;

    function fillBars() {
        if (barsFilled || !skills) return;
        const top = skills.getBoundingClientRect().top;
        if (top < window.innerHeight - 120) {
            bars.forEach(bar => {
                const value = bar.classList.contains("laravel") ? 95 :
                              bar.classList.contains("php")     ? 95 :
                              bar.classList.contains("python")  ? 90 :
                              bar.classList.contains("mysql")   ? 90 : 85;
                bar.style.width = value + "%";
            });
            barsFilled = true;
        }
    }

    window.addEventListener("scroll", fillBars);
    fillBars(); // في حالة القسم ظاهر من أول تحميل الصفحة

});

// ===== Cursor Glow =====
const glow = document.createElement("div");
glow.style.cssText = `
    position:fixed;
    width:220px;
    height:220px;
    border-radius:50%;
    background:radial-gradient(circle,#3b82f655 0%,transparent 70%);
    pointer-events:none;
    transform:translate(-50%,-50%);
    z-index:-1;
    transition:.05s;
`;
document.body.appendChild(glow);

window.addEventListener("mousemove", e => {
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});
