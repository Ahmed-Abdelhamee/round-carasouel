// let images=document.querySelectorAll("#a img");

let images = ["./IMG2.jpg", "./IMG1.jpg", "./logo.jpeg", "./IMG4.jpg", "./IMG3.jpg"]


function movement() {
    // empty()
    let aa = images
    for (let i = 0; i < aa.length; i++) {
        let img = document.createElement("img");
        img.classList.add(`move-${i + 1}`);
        img.src = images[i]
        document.getElementById("a").append(img)
    }
    setTimeout(() => {
        images.unshift(images.pop())
        empty()
    }, 5000);
    // setInterval(() => {
    //     empty()
    // }, 3000);
};

movement()

function empty() {
    while (document.getElementById("a").hasChildNodes()) {
        document.getElementById("a").removeChild(document.getElementById("a").children[0])
        if (document.getElementById("a").children.length == 0)
            break;
    }
    movement()
    // let x=document.querySelectorAll("#a img")
    // for (let i =0 ; i< 5;i++ ) {
    //     x[i].classList.remove(`move-${i+1}`)
    //     x[i].classList.add(`move-${i+2}`)
    // }
    // x[4].classList.add(`move-${1}`)

}

// console.log(confirm("hello"))


// <!-- ---------------------------------------- scroll list view ---------------------------------->
let i = 1;
function x() {
    let inter = window.setInterval(() => {
        document.getElementById("c").style.marginLeft = `${i}%`;
        i--;
        if (i % 30 == 0)
            clearInterval(inter)
    }, 10);
}
function y() {
    let inter = window.setInterval(() => {
        document.getElementById("c").style.marginLeft = `${i}%`;
        i++;
        if (i % 30 == 0)
            clearInterval(inter)
    }, 10);
}

document.getElementById('file').addEventListener('change', imgToCode, false);

function imgToCode(ele) {
    let loader = new FileReader();
    loader.readAsDataURL(ele.target.files[0])
    loader.onload = (event) => {
        console.log(event.target?.result);  // show the photos before uploading
    }
}




// <!---------------------------------------- cararsouel  code ------------------------------------>
setActive = -1;
let intRTL;
let intLTR;
cararsouelImages = document.querySelectorAll(".carasouel img");
carasouelNum = cararsouelImages.length;

addActiveFromRTL();
// addActiveFromLTR()

function removeActive() {
    cararsouelImages.forEach((ele) => {
        ele.classList.remove("active-from-right-to-left");
        ele.classList.remove("active-from-left-to-right");
    })
}

function addActiveFromRTL() {
    clearInterval(intRTL)
    clearInterval(intLTR)
    removeActive();
    setActive++;
    if (setActive === cararsouelImages.length)
        setActive = 0;
    cararsouelImages[setActive].classList.add("active-from-right-to-left")
    intRTL = setInterval(() => {
        addActiveFromRTL()
    }, 8000);
}

function addActiveFromLTR() {
    clearInterval(intRTL)
    clearInterval(intLTR)
    removeActive();
    setActive--;
    if (setActive < 0)
        setActive = cararsouelImages.length - 1;
    cararsouelImages[setActive].classList.add("active-from-left-to-right")
    intLTR = setInterval(() => {
        addActiveFromLTR();
    }, 8000);
}

function carasouelDirection(direction) {
    if (direction == "rtl") {
        addActiveFromRTL();
    }
    else {
        addActiveFromLTR()
    }
}
