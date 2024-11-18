
# JavaScript `switch` Statement

JavaScript'te `switch` ifadesi, bir değişkenin veya ifadenin **değerine** göre birden fazla koşulu kontrol etmek ve buna göre bir kod bloğu çalıştırmak için kullanılır. Bu ifade, birden fazla `if-else` ifadesinin yerine daha okunabilir bir alternatif sunar.

---

## Kullanım Şablonu

```javascript
switch (ifade) {
    case deger1:
        // Eğer ifade deger1 ile eşleşirse bu kod çalışır
        break;
    case deger2:
        // Eğer ifade deger2 ile eşleşirse bu kod çalışır
        break;
    default:
        // Hiçbir değerle eşleşmezse bu kod çalışır
}
```

### Açıklamalar:
- **`case`:** Karşılaştırma yapılacak her bir olasılığı belirtir.
- **`break`:** `switch` ifadesinden çıkmayı sağlar. Eğer yazılmazsa, sonraki `case` blokları da çalışır (**fall-through behavior**).
- **`default`:** Hiçbir `case` eşleşmediğinde çalıştırılacak koddur. Zorunlu değildir.

---

## Örnekler

### Temel Kullanım

```javascript
const renk = "mavi";

switch (renk) {
    case "kırmızı":
        console.log("Renk kırmızı.");
        break;
    case "mavi":
        console.log("Renk mavi.");
        break;
    case "yeşil":
        console.log("Renk yeşil.");
        break;
    default:
        console.log("Bilinmeyen renk.");
}
```

#### Çıktı:
```
Renk mavi.
```

---

### `default` Kullanımı

```javascript
const meyve = "çilek";

switch (meyve) {
    case "elma":
        console.log("Bu bir elma.");
        break;
    case "muz":
        console.log("Bu bir muz.");
        break;
    default:
        console.log("Bu meyve tanımlı değil.");
}
```

#### Çıktı:
```
Bu meyve tanımlı değil.
```

---

### Fall-Through Özelliği

`break` ifadesi kullanılmadığında birden fazla `case` bloğu çalışabilir.

```javascript
const puan = 3;

switch (puan) {
    case 1:
        console.log("Puan 1.");
    case 2:
        console.log("Puan 2.");
    case 3:
        console.log("Puan 3.");
    default:
        console.log("Puan tanımlı değil.");
}
```

#### Çıktı:
```
Puan 3.
Puan tanımlı değil.
```

### Not:
Eğer `break` kullanmazsanız, sonraki `case` ve `default` blokları da çalışır.

---

### Birden Fazla `case`'i Gruplama

```javascript
const gün = "Cumartesi";

switch (gün) {
    case "Cumartesi":
    case "Pazar":
        console.log("Hafta sonu.");
        break;
    default:
        console.log("Hafta içi.");
}
```

#### Çıktı:
```
Hafta sonu.
```

---

## Önemli Notlar
1. `switch` ifadesi, yalnızca **değer eşitliği** (`===`) kullanır.
2. Büyük/küçük harf duyarlılığına sahiptir. Örneğin `"Mavi"` ile `"mavi"` eşleşmez.
3. `default` bloğu herhangi bir yere yazılabilir, ancak genellikle en sona yazılır.
4. Karmaşık koşullarda `if-else` kullanımı daha uygun olabilir.

---

## Kaynaklar
- [MDN Web Docs: switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
- JavaScript resmi dokümantasyonu

---
