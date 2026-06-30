const texts = [
  "Clean UI. Fast Performance.",
  "Modern SaaS-style interface.",
  "Minimal design. Maximum clarity.",
  "Smooth navigation system.",
  "Optimized for speed."
];

let i = 0;

function rotate(){
    const el = document.getElementById("rotatingText");
    if(!el) return;

    el.style.opacity = 0;

    setTimeout(()=>{
        i = (i + 1) % texts.length;
        el.textContent = texts[i];
        el.style.opacity = 1;
    },250);
}

setInterval(rotate, 2500);
