define(['knockout', 'postman'], function (ko, postman) {
    return function (params) {
        var title = params.post.title;
        var score = params.post.score;
        var d = new Date(params.post.creationDate);
        var date = d ? d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() : '';

        var onPostClick = function(p) {
            console.log("p", p);

        }
        return {
            score,
            title,
            date,
            onPostClick
        };
    };
});