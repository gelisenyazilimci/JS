# JavaScript: Spread Operator ve Rest Parameters

Spread Operator (`...`), ES6 ile JavaScript'e eklenmiş, diziler ve nesneler üzerinde işlem yapmayı daha kolay ve okunabilir hale getiren güçlü bir özelliktir. Spread Operator ve Rest Parameters, aynı sembolü (`...`) paylaşsa da farklı amaçlarla kullanılırlar.

---

## Spread Operator Nedir?

Spread Operator, bir diziyi veya nesneyi, bağımsız elemanlarına veya özelliklerine ayırarak başka bir yapıya genişletmek için kullanılır.

### Kullanım Alanları

1. **Dizi Elemanlarını Ayırma**
2. **Nesne Özelliklerini Ayırma**
3. **Fonksiyonlara Argüman Gönderme**

### Temel Kullanım

```javascript
const dizi = [1, 2, 3];
const yeniDizi = [...dizi, 4, 5];
console.log(yeniDizi); // [1, 2, 3, 4, 5]

const nesne = { a: 1, b: 2 };
const yeniNesne = { ...nesne, c: 3 };
console.log(yeniNesne); // { a: 1, b: 2, c: 3 }
```

---

## Spread Operator Kullanım Örnekleri

### 1. Dizilerde Kullanım

#### a) Dizi Birleştirme

```javascript
const dizi1 = [1, 2];
const dizi2 = [3, 4];
const birlesikDizi = [...dizi1, ...dizi2];
console.log(birlesikDizi); // [1, 2, 3, 4]
```

#### b) Kopyalama

```javascript
const orijinalDizi = [1, 2, 3];
const kopyaDizi = [...orijinalDizi];
kopyaDizi.push(4);
console.log(orijinalDizi); // [1, 2, 3]
console.log(kopyaDizi);    // [1, 2, 3, 4]
```

### 2. Nesnelerde Kullanım

#### a) Nesne Birleştirme

```javascript
const nesne1 = { a: 1, b: 2 };
const nesne2 = { c: 3, d: 4 };
const birlesikNesne = { ...nesne1, ...nesne2 };
console.log(birlesikNesne); // { a: 1, b: 2, c: 3, d: 4 }
```

#### b) Kopyalama

```javascript
const orijinalNesne = { a: 1, b: 2 };
const kopyaNesne = { ...orijinalNesne, c: 3 };
console.log(kopyaNesne); // { a: 1, b: 2, c: 3 }
```

### 3. Fonksiyonlarda Kullanım

Spread Operator, dizileri bağımsız argümanlar olarak bir fonksiyona iletmek için kullanılabilir.

```javascript
const sayilar = [1, 2, 3];
const toplam = (a, b, c) => a + b + c;
console.log(toplam(...sayilar)); // 6
```

---

## Rest Parameters Nedir?

Rest Parameters, bir fonksiyona belirsiz sayıda argüman göndermek için kullanılır. Spread Operator'ün aksine, Rest Parameters bağımsız elemanları bir diziye toplar.

### Temel Kullanım

```javascript
function topla(...sayilar) {
  return sayilar.reduce((toplam, sayi) => toplam + sayi, 0);
}

console.log(topla(1, 2, 3, 4)); // 10
```

---

## Rest Parameters Kullanım Örnekleri

### 1. Belirsiz Sayıda Argüman İşleme

```javascript
function selamla(isim, ...mesajlar) {
  console.log(`Merhaba, ${isim}!`);
  console.log(mesajlar);
}

selamla("Ahmet", "Nasılsın?", "Bugün hava güzel.", "Görüşürüz.");
// Merhaba, Ahmet!
// ["Nasılsın?", "Bugün hava güzel.", "Görüşürüz."]
```

### 2. Varsayılan Parametreler ile Kullanım

```javascript
function carp(sabit, ...sayilar) {
  return sayilar.map(sayi => sayi * sabit);
}

console.log(carp(2, 1, 2, 3)); // [2, 4, 6]
```

### 3. Argümanların Parçalanması

```javascript
function ayir(il, ...sehirler) {
  console.log(`İl: ${il}`);
  console.log(`Şehirler: ${sehirler.join(", ")}`);
}

ayir("Ankara", "Polatlı", "Beypazarı", "Kızılcahamam");
// İl: Ankara
// Şehirler: Polatlı, Beypazarı, Kızılcahamam
```

---

## Spread ve Rest Karşılaştırması

| Özellik                  | Spread Operator                           | Rest Parameters                     |
|--------------------------|------------------------------------------|-------------------------------------|
| **Amaç**                | Elemanları veya özellikleri genişletir.  | Elemanları bir diziye toplar.      |
| **Kullanım Yeri**       | Dizi/Nesne birleştirme, fonksiyon argümanları. | Fonksiyon parametreleri.            |
| **Yazım Şekli**         | `...dizi` veya `...nesne`                | `...parametre`                      |

---

## Özet

- **Spread Operator:** Dizileri ve nesneleri genişletmek için kullanılır.
- **Rest Parameters:** Bir fonksiyonun parametrelerini bir diziye toplamak için kullanılır.
- Her ikisi de `...` sembolünü paylaşır, ancak kullanımları ve amaçları farklıdır.

### Örnek Uygulamalar:

```javascript
// Spread: Dizileri birleştirme
const dizi1 = [1, 2];
const dizi2 = [3, 4];
console.log([...dizi1, ...dizi2]); // [1, 2, 3, 4]

// Rest: Fonksiyon parametreleri
function topla(...sayilar) {
  return sayilar.reduce((a, b) => a + b, 0);
}
console.log(topla(1, 2, 3)); // 6
```


