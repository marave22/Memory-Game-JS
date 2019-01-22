let picturesArray = ['1_pic.jpg', '2_pic.jpg', '3_pic.jpg', '4_pic.jpg', '1_pic.jpg', '2_pic.jpg', '3_pic.jpg', '4_pic.jpg'];
let newClass;
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
    for (let i = 0; i < picturesArray.length; i++){
        newClass = picturesArray[i].replace(".", "-");
            let inner = `<div class="flip-card">
                        <div class="flip-card-inner" data-item="${newClass}">
                            <div class="containPic front">
                                <img src="${path+picturesArray[i]}" alt=Image">
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
        visibleInner[i].style.transform = "rotateY(180deg)";
        visibleInner[i].addEventListener('click', () => {
            visibleInner[i].classList.toggle("flipped");
            if(document.getElementsByClassName('flipped').length > 1) {
                if (document.getElementsByClassName('flipped')[0].getAttribute("data-item") ===  document.getElementsByClassName('flipped')[1].getAttribute("data-item")) {
                    document.getElementsByClassName('flipped')[1].classList.add('active');
                    document.getElementsByClassName('flipped')[1].classList.remove('flipped');
                    document.getElementsByClassName('flipped')[0].classList.add('active');
                    document.getElementsByClassName('flipped')[0].classList.remove('flipped');
                    if (document.getElementsByClassName('active').length === visibleInner.length) {
                        document.getElementById('result').innerHTML = "Win";
                        document.getElementById('main').innerHTML = '';
                            restartGame();
                            setTimeout(()=>{
                                run()
                            },800);
                    }
                } else {
                    setTimeout(() => {
                        document.getElementsByClassName('flipped')[1].classList.remove('flipped');
                        document.getElementsByClassName('flipped')[0].classList.remove('flipped');
                    },600)
                }
            }
        });
    }
}
setTimeout(run, 3000);

function openCard() {
    return document.location.reload(true);
}

