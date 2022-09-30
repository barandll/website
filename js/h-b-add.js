let carts = document.querySelectorAll('.add-cart-btnn, .btn, .Add-cart');
let hearts = document.querySelectorAll('.add-heart-btnn');


for(let i = 0 ; i < carts.length ; i++){
    carts[i].addEventListener('click', ()=>{
        /* console.log("added"); */
        cartNumbers();
    })
}

function cartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers ){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelector('#cart-btnn span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers',1);
        document.querySelector('#cart-btnn span').textContent = 1;
    }
    

}


for(let i = 0 ; i < hearts.length ; i++){
    hearts[i].addEventListener('click', ()=>{
        heartNumbers();
    })
}

function heartNumbers(){
    let productNumbers = localStorage.getItem('heartNumbers');
    productNumbers = parseInt(productNumbers);

    if(productNumbers ){
        localStorage.setItem('heartNumbers',productNumbers+1);
        document.querySelector('#heart-btnn span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('heartNumbers',1);
        document.querySelector('#heart-btnn span').textContent = 1;
    }
    

}

