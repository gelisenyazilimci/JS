console.log("start");
const login = (username, password, callback) => {
    setTimeout(() => {
        callback ( {username: username, password: password} )
    }, 1000);
}

function getPostByUsername (username, callback) {
    setTimeout(() => {
        callback("post list")
    })
}
login("Ramadan", "3169", user => {

    console.log(user);
    getPostByUsername(user.username, (posts) => {
        console.log(posts);
    });
});
console.log("end");