define(['knockout', 'postman'], function (ko, postman) {
    return function (params) {
        var title = "Some Comment"; // params.post.title;

        var onCommentClick = function(p) {
            console.log("p", p);

        }
        return {
            title,
            onCommentClick
        };
    };
});