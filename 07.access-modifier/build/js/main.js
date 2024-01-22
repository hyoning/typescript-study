"use strict";
class Post {
    constructor(id = 0, title = '') {
        this.id = id;
        this.title = title;
    }
    getPost() {
        return `postId ${this.id}, postTitle: ${this.title}`;
    }
}
class PostB extends Post {
    getPost() {
        return this.title;
    }
}
const post = new Post(1, "title 1");
console.log(post.id);
console.log(post.title);
