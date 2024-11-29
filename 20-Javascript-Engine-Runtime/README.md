# JavaScript Engine and Runtime

JavaScript, güçlü ve esnek bir dildir, ancak arka planda çalışan mekanizmalar bu dilin çalışmasını sağlar.
Bu mekanizmalar, **JavaScript Engine** ve **Runtime** içinde yer alır. Bu doküman, JavaScript Engine ve Runtime'ın önemli parçalarını açıklamaktadır.

---

## JavaScript Engine Nedir?

JavaScript Engine, JavaScript kodunu çalıştıran bir yazılımdır. Modern tarayıcılardaki popüler JavaScript motorları şunlardır:

- **V8** (Google Chrome ve Node.js)
- **SpiderMonkey** (Mozilla Firefox)
- **Chakra** (Eski Microsoft Edge)
- **JavaScriptCore** (Safari)

Motorun temel işlevleri:

1. JavaScript kodunu okumak.
2. Kodu "parse" ederek bir **AST (Abstract Syntax Tree)** oluşturmak.
3. Kodu çalıştırarak çıktıyı üretmek.

---

## JavaScript Engine'in Parçaları

### 1. **Parsing** ve **AST (Abstract Syntax Tree)**
Parsing, JavaScript kodunun bir Abstract Syntax Tree'ye dönüştürülmesi işlemidir. Bu süreç, kodu anlamak ve optimize etmek için yapılır.

Örneğin, aşağıdaki JavaScript kodunu düşünelim:

**Kod:**
```javascript
const sum = (a, b) => a + b;
sum(2, 3);
```

**AST (Basitleştirilmiş Hali):**
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": { "type": "Identifier", "name": "sum" },
          "init": {
            "type": "ArrowFunctionExpression",
            "params": [
              { "type": "Identifier", "name": "a" },
              { "type": "Identifier", "name": "b" }
            ],
            "body": {
              "type": "BinaryExpression",
              "operator": "+",
              "left": { "type": "Identifier", "name": "a" },
              "right": { "type": "Identifier", "name": "b" }
            }
          }
        }
      ]
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": { "type": "Identifier", "name": "sum" },
        "arguments": [
          { "type": "Literal", "value": 2 },
          { "type": "Literal", "value": 3 }
        ]
      }
    }
  ]
}
```
Bu yapı, motorun kodu analiz edip optimize etmesine olanak tanır.

---

### 2. **Just-In-Time (JIT) Compilation**
JavaScript motorları, kodu hızlı bir şekilde çalıştırmak için **JIT Compilation** kullanır. JIT, "Just-In-Time Compilation" anlamına gelir ve kodu çalıştırmadan hemen önce derler.

#### JIT Süreci:
1. Kod **AST**'ye dönüştürülür.
2. AST, **Bytecode**'a çevrilir.
3. Bytecode, tekrar eden veya önemli kod parçaları için makine koduna dönüştürülür.

Bu süreç, JavaScript kodunun hem hızlı hem de optimize çalışmasını sağlar.

---

## JavaScript Runtime Nedir?

JavaScript Runtime, JavaScript kodunun çalıştırıldığı ortamdır. Tarayıcılar (ör. Chrome) ve Node.js, JavaScript için runtime sağlar.

Bir JavaScript Runtime, şu bileşenleri içerir:

### 1. **JavaScript Engine**
Yukarıda açıklandığı gibi, JavaScript kodunu çalıştırır.

### 2. **Call Stack**
JavaScript kodunun çalıştırılmasını takip eden bir veri yapısıdır. Fonksiyon çağrıları burada "push" edilir ve işlem tamamlandığında "pop" edilir.

### 3. **Web API'leri (Tarayıcılar için)**
Tarayıcılar, zamanlayıcılar (`setTimeout`), DOM manipülasyonu, HTTP istekleri gibi işlevleri sağlar.

### 4. **Event Loop**
Event Loop, Call Stack ve Web API'ler arasındaki iletişimi sağlar. Asenkron işlemlerin (ör. `setTimeout`, `fetch`) nasıl çalıştığını yönetir.

---

## JavaScript Engine ve Runtime'ın Birlikte Çalışması
Aşağıda, basitleştirilmiş bir çalışma şeması verilmiştir:

1. Kod, JavaScript Engine tarafından AST'ye dönüştürülür.
2. AST, çalıştırılabilir bytecode'a derlenir.
3. Kod çalışırken:
    - Senkron işlemler Call Stack üzerinde yürütülür.
    - Asenkron işlemler Web API'lerde çalışır ve tamamlanınca Event Loop ile Call Stack'e eklenir.

---

## Daha Fazla Bilgi için Kaynaklar
- [MDN Web Docs – JavaScript Engines](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [V8 JavaScript Engine Documentation](https://v8.dev/)
- [AST Explorer](https://astexplorer.net/)

---
Happy coding! 🚀
