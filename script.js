document.addEventListener("DOMContentLoaded", () => {

    // Reveal Animation
    const items = document.querySelectorAll(".card, .section h2, .skills span");

    const observer = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.style.opacity="1";
                entry.target.style.transform="translateY(0)";

            }

        });

    },{threshold:.15});

    items.forEach(item=>{

        item.style.opacity="0";
        item.style.transform="translateY(40px)";
        item.style.transition=".7s ease";

        observer.observe(item);

    });

    // Typing Effect

    const title=document.querySelector(".hero h2");

    const text=title.textContent;

    title.textContent="";

    let i=0;

    function typing(){

        if(i<text.length){

            title.textContent+=text.charAt(i);

            i++;

            setTimeout(typing,55);

        }

    }

    typing();

});


// Cursor Glow

const glow=document.createElement("div");

glow.style.cssText=`
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

window.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

});
