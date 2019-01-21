let picturesArray = ['1_pic.jpg', '2_pic.jpg', '3_pic.jpg', '4_pic.jpg', '1_pic.jpg', '2_pic.jpg', '3_pic.jpg', '4_pic.jpg'];

function shuffle(a) {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function restartGame() {
    shuffle(picturesArray);
    let path = "../images/";
    for (let i = 0; i< picturesArray.length; i++){
        let inner = `<div class="flip-card">
            <div class="flip-card-inner">
                <div class="containPic front">
                    <img src="${path+picturesArray[i]}" alt="Second image">
                </div>
                <div class="containBack back"></div>
                </div>
            </div>
        `;

        document.getElementById('main').innerHTML = document.getElementById('main').innerHTML + inner;
    }
}

restartGame();

function run() {
    let visibleInner = document.getElementsByClassName('flip-card-inner');

    for (let i = 0; i < visibleInner.length; i++) {
        if (visibleInner[i].classList.toggle("flipped")) {
            visibleInner[i].addEventListener('click', () => {visibleInner[i].classList.toggle("flipped")});

        } else {
            return false;
        }
    }
}

setTimeout(run, 3000);

// function checkGame() {
//     let visibleFront = document.getElementsByClassName('front');
//     for (let i = 0; i < visibleFront.length; i++) {
//         visibleFront[i].addEventListener('click', () => {visibleFront[i].classList.toggle("flippeda")});
//         if (visibleFront[i].classList.toggle("flipped")) {
//             console.log(visibleFront[i].classList.toggle('flipped'));
//         }
//     }
//     console.log(visibleFront);
// }
// checkGame();