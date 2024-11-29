# Scope and The Scope Chain

JavaScript'te **Scope** (kapsam), kodun değişkenlere, fonksiyonlara veya nesnelere hangi erişim yetkisine sahip olduğunu belirler. **Scope Chain** ise bu erişimin nasıl sağlandığını ve farklı kapsamlar arasında nasıl dolaşıldığını ifade eder. Bu doküman, JavaScript'teki scope kavramını ve türlerini açıklamaktadır.

---

## Scope Türleri

### 1. **Global Scope**
Global scope, tüm kod tarafından erişilebilen kapsamdır. Bir değişken global olarak tanımlandığında, `window` nesnesine (tarayıcıda) veya `global` nesnesine (Node.js'de) bağlanır.

**Örnek:**
```javascript
var globalVar = "I am global!";

function printGlobal() {
  console.log(globalVar); // "I am global!"
}

printGlobal();
console.log(window.globalVar); // "I am global!" (Tarayıcıda)
```

- Global değişkenler genellikle kötü bir uygulama olarak görülür çünkü kodun her yerinden erişilebilir ve kolayca üzerine yazılabilir.

---

### 2. **Function Scope**
Function scope, yalnızca bir fonksiyonun içindeki kodun erişebileceği kapsamdır. JavaScript'te `var` ile tanımlanan değişkenler function scope'a sahiptir.

**Örnek:**
```javascript
function exampleFunction() {
  var localVar = "I am local!";
  console.log(localVar); // "I am local!"
}

exampleFunction();
console.log(localVar); // Hata: localVar tanımlı değil
```

---

### 3. **Block Scope (ES6 ile Gelen)**
Block scope, `{}` süslü parantezler içinde tanımlanan kapsamdır. `let` ve `const` ile tanımlanan değişkenler block scope'a sahiptir.

**Örnek:**
```javascript
{
  let blockScopedVar = "I am block scoped!";
  console.log(blockScopedVar); // "I am block scoped!"
}

console.log(blockScopedVar); // Hata: blockScopedVar tanımlı değil
```

`var` ile tanımlanan değişkenler block scope yerine function scope'a bağlıdır:
```javascript
{
  var functionScopedVar = "I am not block scoped!";
}

console.log(functionScopedVar); // "I am not block scoped!"
```

---

## Scope Chain Nedir?

**Scope Chain**, bir değişkene erişmeye çalıştığınızda JavaScript motorunun hangi kapsamda bu değişkeni aradığını ifade eder. Eğer bir değişken bulunamazsa, bir üst kapsamda arama devam eder. Bu süreç en üst kapsam olan global scope'a kadar devam eder.

**Örnek:**
```javascript
var globalVar = "I am global!";

function outerFunction() {
  var outerVar = "I am in outer function!";

  function innerFunction() {
    var innerVar = "I am in inner function!";
    console.log(innerVar);   // "I am in inner function!"
    console.log(outerVar);   // "I am in outer function!"
    console.log(globalVar);  // "I am global!"
  }

  innerFunction();
}

outerFunction();
```

**Scope Chain Arama Süreci:**
1. `innerVar` -> `innerFunction` içinde bulunur.
2. `outerVar` -> `outerFunction` içinde bulunur.
3. `globalVar` -> Global scope içinde bulunur.

---

## Shadowing (Gölgeleme)
Aynı isimli bir değişken bir iç scope'da tanımlandığında, dış scope'daki değişkeni "gölgeler".

**Örnek:**
```javascript
var name = "Global Name";

function shadowExample() {
  var name = "Local Name";
  console.log(name); // "Local Name"
}

shadowExample();
console.log(name); // "Global Name"
```

---

## Lexical Scope Nedir?
JavaScript'te scope, **lexical (statik)** olarak belirlenir. Yani, bir değişkenin hangi kapsamda erişilebilir olduğu, kod yazıldığı sırada belirlenir ve çalışma zamanında değişmez.

**Örnek:**
```javascript
function outerFunction() {
  var outerVar = "I am outer!";

  return function innerFunction() {
    console.log(outerVar); // "I am outer!"
  };
}

const innerFunc = outerFunction();
innerFunc();
```
Burada `innerFunction`, `outerFunction`'ın kapsamına erişebilir çünkü tanımlandığı yer itibarıyla lexical olarak bağlıdır.

---

## Daha Fazla Bilgi için Kaynaklar
- [MDN Web Docs – Scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Scope)
- [JavaScript.info – Scope and Closures](https://javascript.info/closure)

---

Bu rehber ile Scope ve Scope Chain'in temel kavramlarını öğrenebilirsiniz. Happy coding! 🚀
