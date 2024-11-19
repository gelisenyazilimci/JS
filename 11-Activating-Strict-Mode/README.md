
# JavaScript Strict Mode (`'use strict'`)

JavaScript'te **Strict Mode** (katı mod), daha güvenli bir kod yazmayı teşvik eden bir özelliktir. Bu mod, bazı hataları ve kötü kod pratiklerini yakalamak için JavaScript motoruna daha katı kurallar uygular.

Strict Mode, hataların tespitini kolaylaştırır, kodun daha hızlı çalışmasını sağlar ve gelecekteki JavaScript sürümleriyle daha uyumlu olmasını hedefler.

---

## Strict Mode Nasıl Etkinleştirilir?

### Global Düzeyde
Bir dosyanın tamamını strict mode altında çalıştırmak için, dosyanın başına `'use strict';` ifadesi eklenir.

```javascript
'use strict';

// Bu dosyanın tamamı strict mode'da çalışır.
function test() {
    let x = 10;
    console.log(x);
}
```

### Fonksiyon Düzeyinde
Sadece belirli bir fonksiyonu strict mode altında çalıştırmak için, fonksiyonun içine `'use strict';` ifadesi eklenir.

```javascript
function strictFonksiyon() {
    'use strict';
    // Bu fonksiyon strict mode'da çalışır.
    let x = 20;
    console.log(x);
}
```

### Not:
- Strict mode, isteğe bağlıdır. Ancak, modern uygulamalarda kullanımı önerilir.
- Tarayıcılar eski kodlarla uyumluluk için strict mode'u varsayılan olarak etkinleştirmez.

---

## Strict Mode'un Avantajları

1. **Sessiz Hataları Görünür Hale Getirir:**
   - Normalde JavaScript, hatalı kodlarda hata mesajı vermeden çalışmaya devam eder. Strict mode, bu hataları görünür hale getirir.
   ```javascript
   'use strict';
   x = 10; // ReferenceError: x is not defined
   ```

2. **Değişken Tanımlama Zorunluluğu:**
   - Değişkenler mutlaka `var`, `let` veya `const` ile tanımlanmalıdır.
   ```javascript
   'use strict';
   myVariable = 42; // ReferenceError: myVariable is not defined
   ```

3. **Yanlışlıkla Küresel (Global) Değişken Oluşturmayı Engeller:**
   - Hatalı yazımlardan kaynaklanan global değişkenlerin oluşmasını engeller.

4. **Kopyalanamaz Nesne Özellikleri:**
   - Sabit veya yazılabilir olmayan nesne özelliklerini değiştirmeye çalıştığınızda hata alırsınız.
   ```javascript
   'use strict';
   const obj = Object.freeze({ prop: 42 });
   obj.prop = 50; // TypeError: Cannot assign to read-only property 'prop'
   ```

5. **Kısıtlanmış Anahtar Kelimeler:**
   - `eval` ve `arguments` gibi anahtar kelimeler strict mode altında farklı davranır.

6. **Gelecekteki Standartlarla Uyum:**
   - Strict mode, JavaScript'in daha sonraki sürümleriyle uyumlu kod yazmanıza yardımcı olur.

---

## Strict Mode ile İlgili Kısıtlamalar ve Değişiklikler

1. **Yinelenen Parametre Adları Yasak:**
   ```javascript
   'use strict';
   function test(a, a) { // SyntaxError: Duplicate parameter name not allowed in this context
       return a;
   }
   ```

2. **Kendi Kendini Çağıran `this`:**
   - Bir fonksiyon global bağlamda çağrıldığında `this`, `undefined` döner (global nesne değil).
   ```javascript
   'use strict';
   function test() {
       console.log(this); // undefined
   }
   test();
   ```

3. **Silinemeyen Özellikler:**
   - Strict mode altında `delete` ile silinemeyen özellikler hata verir.
   ```javascript
   'use strict';
   delete Object.prototype; // TypeError
   ```

---

## Strict Mode Kullanımı Hangi Durumlarda Önerilir?

- Daha güvenli ve hatasız bir kod tabanı oluşturmak istediğinizde.
- Yeni projelerde modern standartlara uygun bir yapı sağlamak için.
- Karmaşık uygulamalarda hataları daha kolay bulmak ve çözmek için.

---

## Kaynaklar
- [MDN Web Docs: Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
- JavaScript resmi dokümantasyonu

---
