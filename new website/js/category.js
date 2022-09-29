let loadBtn = document.querySelector("#load-more");
let currentItem=4;

loadBtn.onclick = () =>{
    let boxes = [...document.querySelectorAll('.s-container .box-container .box')];
    for(var i = currentItem; i < currentItem+4; i++){
        boxes[i].style.display = "inline-block";
    }
    currentItem +=4;

    if(currentItem >= boxes.length){
        loadBtn.style.display = "none";
    }
}