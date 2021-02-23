let slides = document.querySelectorAll('.slide-single');
let slider = [];
for (let i = 0; i < slides.length; i++) {
    slider[i] = slides[i].src;
    slides[i].remove();
}

console.log(slider);

let step = 0;
let offset = 0;

function draw() {
    let img = document.createElement('img');
    img.src = slider[step];
    img.classList.add('slide-single');
    // img.style.left = offset * 512 + 'px';
    document.querySelector('#slide').appendChild(img);
    if (step + 1 == slider.length) {
        step = 0;
    }
    else {
        step++;
    }
    offset = 1;
}



draw();
document.onclick = draw;

