"use strict";

/*
async function foo () {
    return "Hello World!";
}
foo().then((res)=>console.log(res));
 */


// Promise ile yapılışı.

/*
document.querySelector("#button").addEventListener("click", ()=> {
   fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => res.json())
       .then((post) => {
          fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
              .then((res) => res.json()).then((comments) => {
              console.log(comments);
          });
       });
});
 */


document.querySelector("#button").addEventListener("click", async () => {
    const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const postJson = await postResponse.json();

    // postId değerine göre ilgili yorumları içerir.
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postJson.id}`);

    const commentsJson = await commentsResponse.json();
    console.log(commentsJson); // Herhangi çekilen post id'sine göre yazılan yazılan yorumları konsol üzerinde yazdırır.
});
