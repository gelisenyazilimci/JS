"use strict";

let check = true;

/*

YAPIYI ANLAMA

const promise1 = new Promise((resolve, reject) =>
{
  setTimeout(() => {
      if (check) {
          resolve ("Promise is successful.");
      } else {
          reject ("Promise is not successful.");
      }
  }, 300);
});

console.log(promise1);



*/

// Yukarıda sadece resolve ve reject ettik ve
// bunları kullanamadık aşağıdaki kodlar ise kullanım ile alakalı olacaktır.


/* function createPromise() {
    return new Promise( (resolve, reject) =>
    {
        setTimeout(() => {
            if (check) {
                resolve ("Promise is successful.");
            } else {
                reject ("Promise is not successful.");
            }
        }, 300);
    });
}

createPromise()
    .then((response) =>
{
    console.log(response);
})
    .catch((error) =>
    {
        console.log(error);
    })
    .finally(()=> console.log('Deney tamamlandı'));
    */

// Örnek olarak aşağıda asekron yapı oluşturacam ve örnekte Promise ile XMLHTTPREQUEST kullanacağız.



function readStudents (url) {
    return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
        try {
            xhr.addEventListener("readystatechange",
                () =>
                {
                    if (xhr.readyState === 4 && xhr.status === 200)  {
                        resolve(JSON.parse(xhr.responseText));
                    }
                });
        } catch (e) {
        reject (e);
        }
        xhr.open("GET", url, true);
        xhr.send();
    });
}
readStudents("students.json").then ((data) => console.log(data))
    .catch((e) => console.log(e))
    .finally(() => console.log('Deney tamamlandı'));