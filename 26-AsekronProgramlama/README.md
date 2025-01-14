# Asekron Programlama

---

- Örneğin bir dükkana giriyorsunuz ve yemek spariş vereceksiniz diyelim. Siz herhangi bir kasaya gidiyotsunuz örnek olrak 2. kasaya gitmiş olun ve spariş gelene kadar siz kasanın önünde bekliyorsunuz aslında işlemciyi burada blokluyorsunuz. Bu çalışma modeline sekron programlama denir. Fakat gerçek hayatta sparişi verip yan tarafa çekiliriz bu olaya da asekron çalışma denir. Yani arkanızdaki müşteri veya işlem sizin işinizi bitmenizi beklemez sparişi alır almaz ve yan tarafa geçtiğiniz an 2. müşterinin sizin yerinize geçip işlemciye yük bindirmeden devam etmesi durumuna denir.

```javascript
// sync (sekron)
console.log("1");
console.log("2");
console.log("3");

// async (Asekron)
console.log("1");
setTimeout(() => {
    console.log("2");
}, 2000); // 2 saniye sonra ekrana yazdırılır
console.log("3");
```

- Yukarıda kısa bir örnek göstermiş oldum Aslında çok bir şey yok.
- Aslında bazenleri dosya veya herhangi bir işlemin nasıl biteceğini kestiremeyebiliriz veya bilemeyebiliriz. Ve bu işlem bittiği zaman diğer işleme geçmek için bunun da kontrolünü biz sağlamalıyız.
- 3 tane başlık ele alacağız nasıl kontrol edebiliriz diye
- Callback
- promise
- async-await