# Execution Contexts and The Call Stack

JavaScript'in çalışma prensiplerini anlamak için **Execution Contexts (EC)** ve **Call Stack** kavramlarını bilmek oldukça önemlidir. Bu doküman, JavaScript kodunun nasıl çalıştığını anlamanıza yardımcı olacak şekilde bu iki kavramı açıklamaktadır.

---

## Execution Context (EC) Nedir?

**Execution Context**, JavaScript kodunun çalıştığı ortamdır. JavaScript motoru bir kodu çalıştırırken, bu kod için bir execution context oluşturur. Her context, aşağıdaki bileşenlerden oluşur:

### 1. **Memory Component (Variable Environment)**
Değişkenlerin ve fonksiyonların bellekte saklandığı yerdir.

### 2. **Code Component (Thread of Execution)**
Kodun çalıştırıldığı bileşendir. Satır satır kod burada yürütülür.

---

### Execution Context Türleri

1. **Global Execution Context (GEC)**:
    - JavaScript motoru, kodunuzu çalıştırmadan önce otomatik olarak bir global context oluşturur.
    - `window` (tarayıcı) veya `global` (Node.js) nesnesine bağlıdır.

2. **Function Execution Context (FEC)**:
    - Bir fonksiyon çağrıldığında, o fonksiyon için yeni bir execution context oluşturulur.
    - Her fonksiyonun kendine ait bir bellek alanı (variable environment) vardır.

3. **Eval Execution Context**:
    - `eval()` fonksiyonuyla oluşturulan context'tir (kullanımı önerilmez).

---

## Execution Context Nasıl Oluşturulur?

Bir execution context oluşturulduğunda, iki aşamadan geçer:

1. **Creation Phase (Oluşturma Aşaması)**:
    - Bellekte değişkenler ve fonksiyonlar için alan ayrılır.
    - Değişkenlere başlangıçta `undefined` değeri atanır (hoisting).
    - Fonksiyon tanımları belleğe tamamen yüklenir.

2. **Execution Phase (Çalıştırma Aşaması)**:
    - Kod satır satır yürütülür ve değişkenlere değer atanır.

Örnek Kod:
```javascript
console.log(name); // undefined (hoisting)
var name = "John";
console.log(name); // John
```

---

## The Call Stack Nedir?

Call Stack, JavaScript'in kodu nasıl çalıştırdığını anlamak için kritik bir veri yapısıdır. **Stack** mantığıyla çalışır: LIFO (Last In, First Out).

### Call Stack Nasıl Çalışır?

1. **Fonksiyon Çağrısı**:
    - Bir fonksiyon çağrıldığında, onun execution context'i oluşturulur ve Call Stack'e eklenir (**push**).

2. **Fonksiyonun Tamamlanması**:
    - Fonksiyon tamamlandığında, ilgili context Call Stack'ten kaldırılır (**pop**).

### Örnek:
```javascript
function first() {
  console.log("First Function");
  second();
  console.log("First Function End");
}

function second() {
  console.log("Second Function");
}

first();
```

**Call Stack Adımları:**
1. `first()` çağrılır ve Call Stack'e eklenir.
2. `second()` çağrılır ve Call Stack'e eklenir.
3. `second()` tamamlanır ve Call Stack'ten kaldırılır.
4. `first()` tamamlanır ve Call Stack'ten kaldırılır.

---

## Hoisting Nedir?

**Hoisting**, değişken ve fonksiyon bildirimlerinin bellekte kodun çalıştırılmasından önce kaldırılmasıdır.

Örnek:
```javascript
console.log(a); // undefined
var a = 10;
console.log(a); // 10
```

Fonksiyonlar için hoisting örneği:
```javascript
sayHello(); // "Hello World!"

function sayHello() {
  console.log("Hello World!");
}
```

---

## Execution Context ve Call Stack'in Birlikte Çalışması

1. Kod çalışmaya başladığında Global Execution Context oluşturulur ve Call Stack'e eklenir.
2. Fonksiyon çağrıldığında, yeni bir Function Execution Context oluşturulur ve Call Stack'e eklenir.
3. Fonksiyon tamamlandığında, ilgili context Call Stack'ten kaldırılır.

Şematik Görünüm:
```
[Global Execution Context]  // Başlangıç
[Function Execution Context] // Fonksiyon çağrıldığında eklenir
...
[Global Execution Context]  // Tüm fonksiyonlar tamamlanınca
```

---

## Daha Fazla Bilgi için Kaynaklar
- [MDN Web Docs – Execution Context](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Execution_context)
- [Call Stack Visualization](https://visualgo.net/en/stack)

---

Happy coding! 🚀
