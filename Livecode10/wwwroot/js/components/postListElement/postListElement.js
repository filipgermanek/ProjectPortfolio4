define(['knockout', 'postman'], function (ko, postman) {
    return function (params) {
        var title = params.post.title;

        var onPostClick = function(p) {
            console.log("p", p);

        }
        return {
            title,
            onPostClick
        };
    };
});