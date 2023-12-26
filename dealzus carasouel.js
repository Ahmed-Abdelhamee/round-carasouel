// let images=document.querySelectorAll("#a img");

let images=["./IMG1.jpg","./IMG2.jpg","./IMG4.jpg","./logo.jpeg","./android.jpg"]


function movement(){
    // empty()
    let aa=images
    for (let i =0 ; i< aa.length;i++ ) {
        let img=document.createElement("img");
        img.classList.add(`move-${i+1}`);
        img.src=images[i]
        document.getElementById("a").append(img)
    }
    setTimeout(() => {
        images.unshift(images.pop())
        empty()
    }, 3000);
    // setInterval(() => {
    //     empty()
    // }, 3000);
};

movement()

function empty(){
    while(document.getElementById("a").hasChildNodes()){
        document.getElementById("a").removeChild(document.getElementById("a").children[0])
        if(document.getElementById("a").children.length==0)
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

