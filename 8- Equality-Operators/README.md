
# JavaScript Eşitlik Operatörleri (Equality Operators)

JavaScript'te eşitlik operatörleri, iki değer arasındaki eşitliği kontrol etmek için kullanılır. Bu operatörler, değerlerin **tipine** ve/veya **içeriğine** göre karşılaştırma yapar. Aşağıda bu operatörler detaylı bir şekilde açıklanmıştır:

---

## == (Eşittir Operatörü - Loose Equality)
Bu operatör, **değerlerin eşitliğini** kontrol eder. Karşılaştırma sırasında veri tipleri **zorla dönüştürülür** (type coercion).

### Örnek:
```javascript
console.log(5 == '5'); // true (string '5' sayıya dönüştürülür)
console.log(0 == false); // true (false değeri 0'a dönüştürülür)
console.log(null == undefined); // true
```

### Not:
Type coercion, beklenmedik sonuçlara yol açabilir. Bu yüzden bu operatör dikkatli kullanılmalıdır.

---

## === (Tam Eşittir Operatörü - Strict Equality)
Bu operatör, **hem değerlerin hem de veri tiplerinin eşitliğini** kontrol eder. Veri tipi farklıysa eşitlik **false** döner.

### Örnek:
```javascript
console.log(5 === '5'); // false (veri tipleri farklı)
console.log(0 === false); // false (veri tipleri farklı)
console.log(null === undefined); // false
console.log(5 === 5); // true
```

### Kullanım:
`===`, her zaman `==` operatörüne tercih edilmelidir çünkü açık ve güvenilir sonuçlar sağlar.

---

## != (Eşit Değil Operatörü - Loose Inequality)
Bu operatör, iki değerin **eşit olmadığını** kontrol eder. Karşılaştırma sırasında veri tipleri **zorla dönüştürülür** (type coercion).

### Örnek:
```javascript
console.log(5 != '5'); // false (string '5', 5'e dönüştürülür)
console.log(0 != false); // false
console.log(null != undefined); // false
```

---

## !== (Tam Eşit Değil Operatörü - Strict Inequality)
Bu operatör, iki değerin **değer veya veri tipi bakımından eşit olmadığını** kontrol eder. Veri tipi farklıysa sonuç **true** döner.

### Örnek:
```javascript
console.log(5 !== '5'); // true (veri tipleri farklı)
console.log(0 !== false); // true (veri tipleri farklı)
console.log(null !== undefined); // true
console.log(5 !== 5); // false
```

---

## Eşitlik Operatörleri Tablosu

| Operatör | Açıklama                          | Veri Tipi Kontrolü | Zorla Dönüştürme |
|----------|-----------------------------------|--------------------|------------------|
| `==`     | Eşittir                          | ❌                 | ✅               |
| `===`    | Tam eşittir                      | ✅                 | ❌               |
| `!=`     | Eşit değil                       | ❌                 | ✅               |
| `!==`    | Tam eşit değil                   | ✅                 | ❌               |

---

## Önemli Notlar
- **`===` ve `!==`**, genellikle daha güvenilir ve beklenmedik hataları önlemek için önerilir.
- Type coercion, karmaşıklık yaratabileceğinden, `==` ve `!=` kullanımı genellikle iyi bir pratik olarak görülmez.
- Bu operatörler, kontrol yapılarında sıkça kullanılır.

### İyi Örnek:
```javascript
if (userInput === 'admin') {
    console.log('Giriş başarılı!');
}
```

### Kötü Örnek:
```javascript
if (userInput == 'admin') {
    console.log('Giriş başarılı!');
}
```
`userInput` beklenmeyen bir veri tipi içeriyorsa hatalara yol açabilir.

