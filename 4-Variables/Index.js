let age = 30;
age = 32;
/*

1. Var:

- var JavaScript'teki en eski değişken tanımlama yöntemidir.
- Değişken, tanımlandığı fonksiyonun veya global kapsamın (function scope) içinde tanımlıdır.
- Fonksiyonun dışında tanımlandığında global bir değişken olur ve herhangi bir blok (if, for, vs..) içinde hapsedilmez. Blok kapsamında (Block scope) özelliğine sahip değildir.

2. Let:

- ECMAScript 2015 (ES6) ile tanıtılmıştır.
- let, blok kapsamında tanımlı değişkenler oluşturur. Bu if veya for gibi bloklar içinde tanımlandığında, sadece o blok içinde geçerli olduğu anlamına gelir.
- Aynı blok içinde yeniden tanımlanamaz. Ancak farklı bloklarda kullanılabilir.

3. Const

- ECMAScript 2015 (ES6) ile tanıtılmıştır.
- const, aynı let gibi blok kapsamına sahiptir.
- const ile tanımlanan bir değişkene atanan değer, sabittir ve sonradan değiştirilemez.
- const ile tanımlanan değişkenler mutlaka ilk tanımlandığı sırada bir değer almalıdır.


Özetle:

- var: Eski yöntem, fonksiyon kapsamında.
- let: ES6 ile gelen, blok kapsamında ve değiştirilebilir.
- const: ES6 ile gelen, blok kapsamında ve değerleri değiştirilemez. Sadece kendisine 1 değer atıldıktan sonra program içerisinde üzerine değişiklik yapılamaz
é
 */