# Primitifler ve Nesneler (Primitives vs. Reference Types) – JavaScript

JavaScript'te veri tipleri iki kategoriye ayrılır: **Primitif (ilkel) tipler** ve **referans tipleri**. Bu iki tip arasındaki farkı anlamak, JavaScript'teki değişkenlerin bellek yönetimini, atamaların ve kopyalamaların nasıl işlediğini anlamak açısından kritiktir.

---

## Primitif Tipler (Primitive Types)

### Tanım:
Primitif tipler, **değer** olarak saklanan basit veri türleridir. Bu tipler immutable'dır (değiştirilemez). Bir değişkenin içerdiği değer doğrudan bellek üzerinde saklanır ve doğrudan erişilebilir.

### Primitif Tipler:
1. **Number**: Tüm sayılar (tam sayılar ve ondalıklı sayılar).
   ```javascript
   let age = 25;
   ```
2. **String**: Metin verileri.
   ```javascript
   let name = "Ali";
   ```
3. **Boolean**: Doğru veya yanlış değeri (true/false).
   ```javascript
   let isStudent = true;
   ```
4. **Undefined**: Tanımlanmış ancak değer atanmamış değişkenler.
   ```javascript
   let job; // undefined
   ```
5. **Null**: Bilinçli olarak boş değer atanması.
   ```javascript
   let car = null;
   ```
6. **Symbol**: Benzersiz ve değişmez kimlikler oluşturmak için kullanılan tip.
   ```javascript
   let id = Symbol("id");
   ```
7. **BigInt**: Çok büyük tam sayılar.
   ```javascript
   let bigNumber = 123456789012345678901234567890n;
   ```

### Bellekteki Davranış:
- Primitif bir değişkenin değeri **yığın (stack)** bellek bölgesinde depolanır.
- Yeni bir değişkene kopyalandığında **değer kopyalanır**, orijinal değişken etkilenmez.

**Örnek:**
```javascript
let x = 10;
let y = x; // y, x'in değerini kopyalar.

y = 20;
console.log(x); // 10 (x etkilenmez)
console.log(y); // 20
```

---

## Referans Tipleri (Reference Types)

### Tanım:
Referans tipleri, karmaşık yapıdaki veri tipleridir ve bellekte bir referans (adres) ile saklanır. Bu tür değişkenler mutable'dır (değişebilir). Değişkenin kendisi bir adres saklar, asıl veri ise **heap** bölgesinde tutulur.

### Referans Tipleri:
1. **Object**: Anahtar-değer çiftlerinden oluşan yapı.
   ```javascript
   let person = { name: "Ali", age: 25 };
   ```
2. **Array**: Sıralı veri koleksiyonları.
   ```javascript
   let numbers = [1, 2, 3, 4];
   ```
3. **Function**: Fonksiyonlar da birer nesnedir.
   ```javascript
   function greet() {
       console.log("Hello");
   }
   ```
4. **Date, RegExp, Set, Map**: JavaScript’teki diğer nesne türleri de referans tipleridir.

### Bellekteki Davranış:
- Referans tiplerinin adresi **yığın (stack)** bölgesinde, asıl verisi ise **heap** bölgesinde tutulur.
- Yeni bir değişkene atandığında **referans kopyalanır**, yani iki değişken de aynı nesneyi işaret eder.

**Örnek:**
```javascript
let obj1 = { name: "Ayşe" };
let obj2 = obj1; // obj2, obj1 ile aynı referansa işaret eder.

obj2.name = "Fatma";
console.log(obj1.name); // Fatma (orijinal nesne de etkilenir)
console.log(obj2.name); // Fatma
```

---

## Primitif ve Referans Tipleri Arasındaki Farklar

| **Özellik**                | **Primitif Tipler**                                     | **Referans Tipleri**                     |
|-----------------------------|-----------------------------------------------------|-----------------------------------------|
| **Saklama Yöntemi**         | Değer olarak saklanır                                | Referans (adres) olarak saklanır       |
| **Bellek Kullanımı**         | Stack bölgesinde saklanır                             | Stack adres, heap veri saklar            |
| **Kopyalama**               | Değer kopyalanır                                    | Referans kopyalanır                  |
| **Mutability (Değişebilirlik)** | Immutable (Özdeğiştirilemez)                     | Mutable (Özdeğiştirilebilir)        |

---

## Detaylı Örnekler

### 1. Primitif Tiplerde Değişim Etkilemez:
```javascript
let a = 5;
let b = a; // a'nın değeri b'ye kopyalanır.

b = 10;
console.log(a); // 5
console.log(b); // 10
```

### 2. Referans Tiplerinde Değişim Etkiler:
```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2, arr1'in referansını kopyalar.

arr2.push(4);
console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
```

### 3. Orijinal Referansı Koruma:
```javascript
let obj1 = { name: "Ahmet" };
let obj2 = { ...obj1 }; // Spread operatörü ile yeni bir kopya oluşturulur.

obj2.name = "Mehmet";
console.log(obj1.name); // Ahmet
console.log(obj2.name); // Mehmet
```

---

## Pratik Tavsiyeler
1. **Primitif ve Referans Tipleri Karıştırmayın:** Değer kopyalama ile referans kopyalama arasındaki farkı iyi anlayın.
2. **Spread Operatörü veya Object.assign Kullanımı:** Referans tiplerini klonlamak için `...` (spread) operatörü veya `Object.assign` kullanabilirsiniz.
   ```javascript
   let original = { name: "Elif" };
   let clone = { ...original };
   ```
3. **Immutable Veri Yapıları:** Eğer veri değişikliğini istemiyorsanız, immutable veri yapıları kullanmayı düşünün.

