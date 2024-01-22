class Post{
	constructor(
		public id:number = 0,
		public title: string =''){}
	getPost(){
		return `postId ${this.id}, postTitle: ${this.title}`;
	}
}
class PostB extends Post{
	getPost() {
		return this.title
	}
}
const post: Post = new Post(1, "title 1");
console.log(post.id);
console.log(post.title);