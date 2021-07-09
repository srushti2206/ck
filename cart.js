
    let carts =document.querySelectorAll('.add-cart');

    let products=[
        {
            name:"apple",
            tag:"apple",
            price:75,
            inCart:0
        }
        {
            name:"lemon",
            tag:"lemon",
            price:75,
            inCart:0
        }
        {
            name:"cherry",
            tag:"cherry",
            price:50,
            inCart:0
        }
    ]
    for (let i=0;i<carts.length; i++){
        carts[i].addEventListener('click',() => {
            console.log("added to cart");
        })
    }

