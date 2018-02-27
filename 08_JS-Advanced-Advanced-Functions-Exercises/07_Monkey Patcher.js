function solution(command) {
    let commands = {
        upvote: () => { this.upvotes++; },
        downvote: () => { this.downvotes++; },
        score: () => {
            let scoreArray = [];
            scoreArray.push(this.upvotes);
            scoreArray.push(this.downvotes);

            let totalVotes = this.upvotes + this.downvotes;
            if (totalVotes > 50) {
                let numberToAdd = Math.ceil(Math.max(this.upvotes, this.downvotes)*0.25);
                scoreArray[0] += numberToAdd;
                scoreArray[1] += numberToAdd;
            }

            let totalScore = this.upvotes - this.downvotes;
            scoreArray.push(totalScore);

            //RATING
            // let rating = '';
            // if ((this.upvotes / totalVotes) > 0.66) {
            //     rating = 'hot';
            // } else if (rating != 'hot' && totalScore >= 0 && (this.upvotes > 100 || this.downvotes > 100)) {
            //     rating = 'controversial';
            // } else if (totalScore < 0) {
            //     rating = 'unpopular';
            // } else if (rating == '' || totalVotes < 10) {
            //     rating = 'new';
            // }

            let rating = 'new';
            if (this.upvotes + this.downvotes < 10) {
                rating = 'new';
            } else if (this.upvotes / (this.upvotes + this.downvotes) > 0.66) {
                rating = 'hot';
            } else if ((this.upvotes / (this.upvotes + this.downvotes) <= 0.66) &&
                (this.upvotes > 100 || this.downvotes > 100) &&
                this.upvotes - this.downvotes >= 0) {
                rating = 'controversial';
            } else if (this.upvotes - this.downvotes < 0) {
                rating = 'unpopular';
            }

            scoreArray.push(rating);
            return scoreArray;
        }
    }

    return commands[command]();
}

// let post = {
//     id: '3',
//     author: 'emil',
//     content: 'this field is irrelevant',
//     upvotes: 100,
//     downvotes: 100
// };

// solution.call(post, 'upvote');
// solution.call(post, 'downvote');
// let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
// console.log(score);

// for (let i = 0; i < 50; i++) {
//     solution.call(post, 'downvote'); // (executed 50 times)
// }  

// score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
// console.log(score);

