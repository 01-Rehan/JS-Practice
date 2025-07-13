import Products from "./db.js";

Products.forEach(product=>{

const card = document.createElement("div");
card.classList.add("card","card-vertical" ,"d-flex" ,"direction-column" ,"relative" ,"shadow");
document.body.appendChild(card);

let cardImg = document.createElement("div");
cardImg.classList.add("card-image-container");
card.appendChild(cardImg);

let imgtag = document.createElement("img");
imgtag.classList.add("card-image");
imgtag.setAttribute("src", product.image);
imgtag.setAttribute("alt","Shoes");
cardImg.appendChild(imgtag);

let cardDet = document.createElement("div");
cardDet.classList.add("card-details"); // will get append to tha card in the last 

let cardTitle = document.createElement("div");
cardTitle.classList.add("card-title");
cardTitle.innerText = product.category;
cardDet.appendChild(cardTitle);

let cardDes = document.createElement("div");
cardDes.classList.add("card-description");
    let cardDesPara = document.createElement("p");
    cardDesPara.classList.add("card-des");
    cardDesPara.innerText = product.name;
    cardDes.appendChild(cardDesPara);

    let cardPrice = document.createElement("p");
    cardPrice.classList.add("card-price");
    cardPrice.innerText = "Rs." + product.price;
        let mrp = document.createElement("span");
        mrp.classList.add("price-strike-through");
        mrp.innerText = " Rs." + product.mrp;
        cardPrice.appendChild(mrp);

        let discount = document.createElement("span");
        discount.classList.add("discount");
        discount.innerText =" %" + product.discount;
        cardPrice.appendChild(discount);
    cardDes.appendChild(cardPrice);
cardDet.appendChild(cardDes);

let cardBtn = document.createElement("div");
cardBtn.classList.add("cta-btn");

    let btn = document.createElement("button");
    btn.classList.add("button", "btn-primary" ,"btn-icon", "cart-btn", "d-flex", "align-center", "justify-center", "gap" ,"cursor", "btn-margin");
    
        let btnImg = document.createElement("img");
        btnImg.setAttribute("src",product.img);
        btn.innerText = "Add To Cart";
        btn.appendChild(btnImg);

    cardBtn.appendChild(btn);
cardDet.appendChild(cardBtn);

card.appendChild(cardDet);

});