"use strict";


// Person, product, 

const product = {
    // properties
    title: "Samsung S25",
    description: "Güzel bir telefon",
    price: 9000,

    // methods
    display:function () {
        return `Ürün Başlığı: ${this.title} ürün açıklaması ${this.description} ve fiyati ${this.price}`;
    }
};
console.log(product.display());
