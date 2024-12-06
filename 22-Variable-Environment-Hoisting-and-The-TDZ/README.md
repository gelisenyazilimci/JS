# JavaScript'te Değişken Ortamı: Hoisting ve TDZ (Temporal Dead Zone)

## Giriş
JavaScript'te değişkenler ve fonksiyonların nasıl oluşturulduğu ve kullanıldığı, bir "değişken ortamı" (variable environment) tarafından kontrol edilir. İki önemli kavram bu bağlamda kritik öneme sahiptir:

1. **Hoisting (Yukarı Taşınma):** JavaScript'in değişken ve fonksiyon bildirimlerini yürütme sırasında nasıl "yukarı taşıdığı" (hoist ettiği) mekanizma.
2. **TDZ (Temporal Dead Zone):** `let` ve `const` ile tanımlanan değişkenlerin, bildirilmeden önce erişilmesinin neden bir hataya yol açtığını açıklayan bir alan.

Bu dokümanda her iki konuyu ayrıntılı olarak ele alacağız.

---

## Hoisting Nedir?
**Hoisting**, JavaScript'in yürütme bağlamında (execution context), değişken ve fonksiyon bildirimlerini ilgili kapsamın (scope) başına taşımasıdır. Ancak yalnızca bildirim taşınır; atama işlemleri taşınmaz.

### Örnek:
```javascript
console.log(x); // Çıktı: undefined
var x = 5;
console.log(x); // Çıktı: 5
```
Yukarıdaki kod, şu şekilde çalışır:
```javascript
var x;
console.log(x); // Çıktı: undefined
x = 5;
console.log(x); // Çıktı: 5
```
`var` ile tanımlanan değişkenler, bellekte yer ayrılırken "yukarı taşınır" ancak varsayılan olarak `undefined` atanır.

---

### Fonksiyon Hoisting
Fonksiyon bildirimleri de hoisting'e tabidir ve kapsamın başına taşınır. Bu, fonksiyonların tanımlanmadan önce çağrılmasını sağlar.

#### Örnek:
```javascript
greet(); // Çıktı: Merhaba!

function greet() {
    console.log("Merhaba!");
}
```
Fonksiyon ifadeleri (`function expressions`) ise hoisting'e uğramaz:
```javascript
sayHello(); // Hata: Cannot access 'sayHello' before initialization

const sayHello = function() {
    console.log("Merhaba!");
};
```
Burada, `sayHello` bir değişken olarak davranır ve `TDZ` nedeniyle hata verir.

---

## Temporal Dead Zone (Geçici Ölü Bölge)
**TDZ**, bir `let` veya `const` değişkeninin bildirilmeden önce erişilemediği süreyi ifade eder. Değişkenler "hoisted" edilse de (yukarı taşınsa da), bildirimden önce kullanılmaya çalışıldığında hata alınır.

### Örnek:
```javascript
console.log(y); // Hata: Cannot access 'y' before initialization
let y = 10;
```
Bu kodda `y`, bellekte yer almasına rağmen, `let` ile bildirildiği için "TDZ" içerisindedir. Değişken, yalnızca bildirimi tamamlandıktan sonra kullanılabilir.

---

### TDZ ile `let` ve `const`
- **`let`:** `undefined` atanmaz. TDZ nedeniyle bildirilmeden önce erişilmeye çalışıldığında hata verir.
- **`const`:** Hem `TDZ`'ye tabidir hem de ilk değer atanmadan kullanılmaz.

#### Örnek:
```javascript
console.log(a); // Hata: Cannot access 'a' before initialization
const a = 5;
```

---

## `var` ile `let` ve `const` Arasındaki Farklar
| Özellik                | `var`                      | `let`                | `const`              |
|------------------------|----------------------------|----------------------|----------------------|
| **Hoisting**           | Evet (undefined ile başlar)| Evet (TDZ'ye tabidir)| Evet (TDZ'ye tabidir)|
| **TDZ**                | Yok                        | Var                  | Var                  |
| **Yeniden Bildirim**   | Evet                       | Hayır                | Hayır                |
| **Değer Atama**        | Evet (varsayılan olarak undefined) | Hayır               | Zorunlu (ilk değer gerekli)|

---

## Hoisting ve TDZ'nin Etkileri

### 1. Daha Güvenli Kod Yazımı
`let` ve `const` kullanımı, `var` ile karşılaştırıldığında daha güvenli kod yazımına olanak tanır. Çünkü TDZ, değişkenlerin yalnızca doğru bir şekilde tanımlandıktan sonra kullanılmasını zorunlu kılar.

### 2. Hata Yakalama Kolaylığı
`let` ve `const` ile tanımlanan değişkenlerde yanlış kullanım, çalışma zamanında değil, derleme sırasında yakalanır. Bu da hata ayıklamayı kolaylaştırır.

---

## Özet
- **Hoisting:** Değişken ve fonksiyon bildirimlerinin kapsamın başına taşınmasıdır.
    - `var` ile bildirimler `undefined` ile başlatılır.
    - `let` ve `const` bildirimleri TDZ'ye tabidir.
- **TDZ:** Değişkenin bellekte var olduğu ancak henüz kullanılabilir olmadığı bir dönemdir.
- **En İyi Uygulamalar:**
    1. `var` yerine `let` ve `const` kullanın.
    2. Değişkenleri her zaman kullanmadan önce tanımlayın.
    3. `const` kullanarak değişmeyen değerleri tanımlayın.

---

JavaScript'te hoisting ve TDZ, değişkenlerin ve fonksiyonların nasıl çalıştığını anlamak için temel kavramlardır. Bu bilgileri doğru kullanarak daha güvenli ve hatasız kod yazabilirsiniz.
