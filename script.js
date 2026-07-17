// ===========================
// DIARA ❤️ FRISKA
// ===========================

// Slideshow Foto

const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg"
];

let index = 0;

const slide = document.getElementById("slide");

setInterval(() => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    slide.style.opacity = "0";

    setTimeout(() => {
        slide.src = images[index];
        slide.style.opacity = "1";
    },400);

},3000);


// ===========================
// Efek Hati Berjatuhan
// ===========================

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.fontSize = (18 + Math.random()*25) + "px";

    heart.style.animationDuration = (4 + Math.random()*4) + "s";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },8000);

}

setInterval(createHeart,250);


// ===========================
// Tombol Love
// ===========================

const btn = document.getElementById("openBtn");

btn.addEventListener("click",()=>{

    const music = document.getElementById("music");

    music.play();

    btn.innerHTML = "❤️ I Love You Friska ❤️";

    alert(
`Hai Friska ❤️

Terima kasih sudah hadir di hidupku.

Aku bersyukur bisa mengenalmu.

Semoga kita selalu saling menjaga,
saling menguatkan,
dan terus bersama.

I Love You Forever ❤️

- Diara`
    );

});


// ===========================
// Animasi Scroll
// ===========================

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".gallery,.letter,.music").forEach(el=>{

el.style.opacity="0";
el.style.transform="translateY(80px)";
el.style.transition="1s";

observer.observe(el);

});


// ===========================
// Background Hero Berganti
// ===========================

const hero = document.querySelector(".hero");

let bg = 0;

setInterval(()=>{

bg++;

if(bg >= images.length){
bg = 0;
}

hero.style.backgroundImage =
`url('${images[bg]}')`;

},5000);


// ===========================
// Efek Judul Berkedip
// ===========================

setInterval(()=>{

const title = document.querySelector(".hero h1");

title.style.textShadow =
"0 0 10px #ff69b4, 0 0 30px hotpink";

setTimeout(()=>{

title.style.textShadow="none";

},800);

},2000);


// ===========================
// Pesan Selamat Datang
// ===========================

window.onload = ()=>{

setTimeout(()=>{

console.log("Welcome Diara ❤️ Friska");

},1000);

};