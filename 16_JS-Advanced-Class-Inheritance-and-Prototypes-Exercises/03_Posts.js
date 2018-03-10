function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }
    
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }
    
    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }
    
        addComment(comment) {
            this.comments.push(comment);
        }
    
        toString() {
            let string = `Post: ${this.title}\nContent: ${this.content}\n`;
            string += `Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0) {
                string += "\nComments:\n * ";
            }
            string += this.comments.join('\n * ')
            return string;
        }
    }
    
    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }
    
        view() {
            this.views++;
            return this;
        }
    
        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }

    return {
        Post,
        SocialMediaPost,
        BlogPost
    }
}


// let test = new BlogPost("TestTitle", "TestContent", 5);

// test.view().view().view();

// console.log(test.toString());

// let test = new SocialMediaPost("TestTitle", "TestContent", 5, 10);

// test.addComment("1");
// test.addComment("2");
// test.addComment("3");
// console.log(test.toString());

// let blogPost = new BlogPost('blog title', 'blog content', 55);
// blogPost.view();
// blogPost.view();
// blogPost.view();
// console.log(blogPost.toString());



// let post = new Post("Post", "Content");

// console.log(post.toString());

// // Post: Post
// // Content: Content

// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);

// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");

// console.log(scm.toString());

// // Post: TestTitle
// // Content: TestContent
// // Rating: -5
// // Comments:
// //  * Good post
// //  * Very good post
// //  * Wow!