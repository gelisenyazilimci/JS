# JavaScript: Destructuring (Parçalama)

Destructuring, ES6 ile JavaScript'e eklenmiş, diziler ve nesnelerden değerleri kolayca çıkararak değişkenlere atama yapmamızı sağlayan bir özelliktir. Hem dizi hem de nesne yapılarını ele alır ve kodu daha okunabilir hale getirir.

---

## Array Destructuring (Dizi Parçalama)

Array Destructuring, bir dizinin elemanlarını sırasıyla değişkenlere atamak için kullanılır.

### Temel Kullanım

```javascript
const sayilar = [1, 2, 3];
const [birinci, ikinci, ucuncu] = sayilar;
console.log(birinci); // 1
console.log(ikinci);  // 2
console.log(ucuncu);  // 3
```

### Varsayılan Değerler

Eğer dizi elemanı yoksa, bir varsayılan değer atanabilir.

```javascript
const renkler = ["Kırmızı"];
const [renk1, renk2 = "Mavi"] = renkler;
console.log(renk1); // "Kırmızı"
console.log(renk2); // "Mavi"
```

### Atlanan Elemanlar

Dizinin bazı elemanlarını atlayabilirsiniz.

```javascript
const sayilar = [1, 2, 3, 4];
const [, ikinci, , dorduncu] = sayilar;
console.log(ikinci);  // 2
console.log(dorduncu); // 4
```

### Geriye Kalan Elemanlar

Rest Operator ile bir dizinin kalan elemanlarını yakalayabilirsiniz.

```javascript
const sayilar = [1, 2, 3, 4, 5];
const [ilk, ...kalan] = sayilar;
console.log(ilk);  // 1
console.log(kalan); // [2, 3, 4, 5]
```

---

## Object Destructuring (Nesne Parçalama)

Object Destructuring, bir nesnenin özelliklerini değişkenlere atamak için kullanılır.

### Temel Kullanım

```javascript
const kisi = { isim: "Ahmet", yas: 25 };
const { isim, yas } = kisi;
console.log(isim); // "Ahmet"
console.log(yas);  // 25
```

### Varsayılan Değerler

Eğer nesnede özellik yoksa, bir varsayılan değer atanabilir.

```javascript
const kisi = { isim: "Ayşe" };
const { isim, yas = 18 } = kisi;
console.log(isim); // "Ayşe"
console.log(yas);  // 18
```

### Özellik İsimlerini Değiştirme

Nesne özelliklerini farklı değişken isimleriyle kullanabilirsiniz.

```javascript
const kisi = { isim: "Ali", yas: 30 };
const { isim: ad, yas: yasDegeri } = kisi;
console.log(ad);       // "Ali"
console.log(yasDegeri); // 30
```

### Geriye Kalan Özellikler

Rest Operator ile bir nesnenin kalan özelliklerini yakalayabilirsiniz.

```javascript
const kisi = { isim: "Mehmet", yas: 40, meslek: "Mühendis" };
const { isim, ...diger } = kisi;
console.log(isim); // "Mehmet"
console.log(diger); // { yas: 40, meslek: "Mühendis" }
```

---

## Array ve Object Destructuring Karşılaştırması

| Özellik                | Array Destructuring               | Object Destructuring              |
|------------------------|------------------------------------|------------------------------------|
| **Sıra**              | Dizinin sırasına bağlıdır.         | Özellik isimlerine bağlıdır.      |
| **Varsayılan Değer**  | Desteklenir.                      | Desteklenir.                      |
| **Rest Kullanımı**    | `...değişken` ile kalan elemanlar alınabilir. | `...değişken` ile kalan özellikler alınabilir. |

---

## Nested Destructuring (İç İçe Parçalama)

Daha karmaşık veri yapıları için iç içe destructuring kullanılabilir.

### Dizi İçinde Nesne

```javascript
const kisiler = [
  { isim: "Ahmet", yas: 25 },
  { isim: "Ayşe", yas: 30 }
];

const [ilkKisi, ikinciKisi] = kisiler;
const { isim: isim1, yas: yas1 } = ilkKisi;
console.log(isim1); // "Ahmet"
console.log(yas1);  // 25
```

### Nesne İçinde Dizi

```javascript
const kisi = {
  isim: "Fatma",
  yas: 28,
  adresler: ["Ankara", "İstanbul"]
};

const { isim, adresler: [ilkAdres, ikinciAdres] } = kisi;
console.log(isim);       // "Fatma"
console.log(ilkAdres);   // "Ankara"
console.log(ikinciAdres); // "İstanbul"
```

---

## Destructuring Kullanım Alanları

### Fonksiyon Parametreleri

Destructuring, fonksiyon parametrelerinde de kullanılabilir.

```javascript
function kisiBilgisi({ isim, yas }) {
  console.log(`İsim: ${isim}, Yaş: ${yas}`);
}

const kisi = { isim: "Zeynep", yas: 35 };
kisiBilgisi(kisi);
// İsim: Zeynep, Yaş: 35
```

### Dizi Döndürme

Fonksiyonlardan dönen dizileri kolayca parçalayabilirsiniz.

```javascript
function koordinatlar() {
  return [10, 20];
}

const [x, y] = koordinatlar();
console.log(x); // 10
console.log(y); // 20
```

---

## Özet

- **Array Destructuring:** Dizilerden elemanları sırayla çıkarır.
- **Object Destructuring:** Nesnelerden özellikleri isme göre çıkarır.
- **Farklar:** Array Destructuring sıralamaya bağlıdır, Object Destructuring ise isimlere.
- **İç İçe Parçalama:** Karmaşık veri yapıları için desteklenir.
- **Rest Operator:** Kalan elemanları veya özellikleri yakalamak için kullanılır.


