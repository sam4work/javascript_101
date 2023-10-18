import posts from "./blog_post.js";




document.addEventListener("DOMContentLoaded", function () {

    const body = document.getElementsByTagName("body");

    console.log(body);

    for (let index = 0; index < posts.length; index++) {

        const div = document.createElement("div");
        div.textContent = posts[index].title;

        body[0].appendChild(div);
        
    }

    posts.map(post => {
        const div = document.createElement("div");
        div.textContent = post.title;

        body[0].appendChild(div);

    })


});