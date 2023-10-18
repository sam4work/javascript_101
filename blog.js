import posts from "./blog_post.js";





document.addEventListener("DOMContentLoaded", function () {

    const postContainer = document.getElementById("post-container");

    posts.map(post => {

        // Create blog card element
        const blogCard = document.createElement("div");
        blogCard.className = "blog-card"; // add class attribute


        // Create post image element
        const img = document.createElement("img");
        img.alt = post.title; // add alt attribute 
        img.src = post.image; // add src attribute

        // Create h2 text element
        const h2 = document.createElement("h2");
        h2.textContent = post.title; // insert post title as text 

        // Create first p text element
        const p1 = document.createElement("p");
        p1.textContent = new Date().toDateString(); // insert date as text 
        p1.className = "date"; // add class attribute

        // Create first p text element
        const p2 = document.createElement("p");
        p2.textContent = post.description; // insert post description as text

        // Create anchor tag element
        const a = document.createElement("a");
        a.href = "#"; // add href attribute
        a.className = "read-more" // add class attribute

        blogCard.appendChild(img); // insert img element into div with blog-card id
        blogCard.appendChild(h2); // insert h2 element into div with blog-card id
        blogCard.appendChild(p1); // insert first p element into div with blog-card id
        blogCard.appendChild(p2); // insert second p element into div with blog-card id
        blogCard.appendChild(a);// insert anchor element into div with blog-card id

        // add newly created div with blog-card id into div with id of post-container
        postContainer.appendChild(blogCard);

    })

});