# JavaScript: Inheritance (Kalıtım)

JavaScript'te inheritance (kalıtım), bir sınıfın (class) veya nesnenin özelliklerini ve metotlarını başka bir sınıfa veya nesneye aktarma işlemidir. Bu, kod tekrarını azaltır ve daha düzenli bir yapı oluşturmanıza yardımcı olur.

---

## Kalıtım Nedir?

Kalıtım, bir sınıfın başka bir sınıftan özellik ve metot almasını sağlar. Bu sayede temel (base) bir sınıftan yeni bir sınıf türetebilir ve temel sınıfın işlevselliğini genişletebilirsiniz.

### Anahtar Kavramlar

- **Base Class (Üst Sınıf):** Diğer sınıfların türediği sınıf.
- **Derived Class (Alt Sınıf):** Base class'dan türeyen sınıf.
- **`super`:** Üst sınıfa referans verir ve onun metotlarına veya özelliklerine erişim sağlar.

---

## ES6 ile Kalıtım

ES6 ile `class` ve `extends` anahtar kelimeleri kullanılarak kalıtım işlemi yapılabilir.

### Temel Kalıtım Örneği

```javascript
class Hayvan {
  constructor(isim) {
    this.isim = isim;
  }

  sesCikar() {
    console.log(`${this.isim} ses çıkarıyor.`);
  }
}

class Kopek extends Hayvan {
  havla() {
    console.log(`${this.isim} havlıyor.`);
  }
}

const kopek = new Kopek("Karabaş");
kopek.sesCikar(); // "Karabaş ses çıkarıyor."
kopek.havla();    // "Karabaş havlıyor."
```

### `super` Anahtar Kelimesi

`super`, alt sınıftan üst sınıfın constructor'ına veya metoduna erişmek için kullanılır.

```javascript
class Hayvan {
  constructor(isim) {
    this.isim = isim;
  }
}

class Kedi extends Hayvan {
  constructor(isim, renk) {
    super(isim); // Üst sınıfın constructor'ını çağırır.
    this.renk = renk;
  }
}

const kedi = new Kedi("Pamuk", "Beyaz");
console.log(kedi.isim); // "Pamuk"
console.log(kedi.renk); // "Beyaz"
```

---

## `super` ve `this` Kullanımı

Alt sınıfın constructor'ında `this` ifadesi, **sadece `super` çağrısından sonra** kullanılabilir. Aksi takdirde bir hata oluşur.

### Neden `super` Öncelikli Olmalı?

- `this`, alt sınıfın kendi özelliklerini ifade eder.
- Ancak alt sınıf, üst sınıfın özelliklerini devraldığı için `super` çağrısı yapılmadan `this`'in kullanılmasına izin verilmez. Çünkü JavaScript, `super` olmadan `this`'in doğru şekilde yapılandırılamayacağını varsayar.

```javascript
class Hayvan {
  constructor(isim) {
    this.isim = isim;
  }
}

class Kopek extends Hayvan {
  constructor(isim, cins) {
    // this.isim = isim; // HATA: 'super' çağrısı yapılmadan 'this' kullanılamaz.
    super(isim); // Üst sınıfın constructor'ını çağırır.
    this.cins = cins;
  }
}

const kopek = new Kopek("Karabaş", "Golden");
console.log(kopek.isim); // "Karabaş"
console.log(kopek.cins); // "Golden"
```

**Özetle:** `super`, alt sınıfın temel sınıfı yapılandırmasını sağlar. Bu işlem tamamlanmadan `this` kullanılmaya çalışılırsa, henüz tam yapılandırılmadığı için hata oluşur.

---

## Metot Geçersiz Kılma (Overriding)

Alt sınıf, üst sınıfta tanımlı bir metodu kendi versiyonuyla değiştirebilir.

```javascript
class Hayvan {
  sesCikar() {
    console.log("Bir hayvan ses çıkarıyor.");
  }
}

class Kus extends Hayvan {
  sesCikar() {
    console.log("Bir kuş ötüyor.");
  }
}

const kus = new Kus();
kus.sesCikar(); // "Bir kuş ötüyor."
```

### `super` ile Üst Sınıf Metodunu Çağırma

Alt sınıfta, üst sınıfın metodunu çağırmak için `super` kullanılabilir.

```javascript
class Hayvan {
  sesCikar() {
    console.log("Bir hayvan ses çıkarıyor.");
  }
}

class Kus extends Hayvan {
  sesCikar() {
    super.sesCikar(); // Üst sınıfın metodunu çağırır.
    console.log("Bir kuş ötüyor.");
  }
}

const kus = new Kus();
kus.sesCikar();
// "Bir hayvan ses çıkarıyor."
// "Bir kuş ötüyor."
```

---

## Nesne Prototipleri ile Kalıtım

ES6 öncesi, prototipler kullanılarak kalıtım yapılabiliyordu. Ancak bu yöntem, `class` yapısına kıyasla daha karmaşıktır.

```javascript
function Hayvan(isim) {
  this.isim = isim;
}

Hayvan.prototype.sesCikar = function () {
  console.log(`${this.isim} ses çıkarıyor.`);
};

function Kopek(isim, cins) {
  Hayvan.call(this, isim);
  this.cins = cins;
}

Kopek.prototype = Object.create(Hayvan.prototype);
Kopek.prototype.constructor = Kopek;

const kopek = new Kopek("Karabaş", "Golden");
kopek.sesCikar(); // "Karabaş ses çıkarıyor."
```

---

## Özet

- **Kalıtım:** Kod tekrarını azaltır ve düzenli bir yapı oluşturur.
- **ES6 Özellikleri:** `class` ve `extends` ile basit ve anlaşılır bir yapı sağlar.
- **`super`:** Üst sınıfın constructor'ını veya metodunu çağırmak için kullanılır.
- **`this` ve `super` İlişkisi:** Alt sınıfta `this`, yalnızca `super` çağrısından sonra kullanılabilir.
- **Metot Geçersiz Kılma:** Alt sınıfta, üst sınıfın metodu değiştirilebilir ve `super` ile üst sınıf metodu çağrılabilir.

Modern JavaScript projelerinde ES6 ile gelen `class` yapısını ve kalıtım özelliklerini kullanmak, daha okunabilir ve sürdürülebilir kod yazmanıza olanak sağlar.

Mutlu kodlamalar! 🚀
