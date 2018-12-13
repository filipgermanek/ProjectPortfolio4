define(['knockout', 'postman'], function (ko, postman) {
    return function (params) {
        var title = params.post.title;
        var score = params.post.score;
        var d = new Date(params.post.creationDate);
        var date = d ? d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() : '';
        console.log("params in single post:", params)
        var onPostClick = params.onPostClick;
        return {
            score,
            title,
            date,
            onPostClick
        };
    };
});