define(['knockout', 'postman'], function (ko, postman) {
    return function (params) {
        var title = params.post.title;
        return {
            title
        };
    };
});
