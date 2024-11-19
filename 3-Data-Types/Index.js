let javaScriptIsFun = true; // Boolean
console.log(javaScriptIsFun); // Output: true

console.log(typeof javaScriptIsFun); // Output: boolean
javaScriptIsFun = 'Yes!';
console.log(typeof javaScriptIsFun); // Output: string
// JavaScript dinamik bir dildir ve bu nedenle değişkenlerin türlerini değiştirebiliriz.

// typeof, bir değişkenin veri türünü döndüren bir JavaScript operatörüdür.

let a;
console.log(a); // Output: undefined
console.log(typeof a); // Output: undefined

console.log(typeof null); // Output: object

// Soru: neden null veri türü object olarak döner?
// Sebeb: Bu, JavaScript'in başlangıç dönemlerinden bir hata ve bu hata, JavaScript'in hala geriye dönük uyumluluk nedeniyle düzeltilmemiştir.