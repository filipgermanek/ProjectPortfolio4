define(['knockout', 'postman'], function (ko, postman) {
    return function (params) {
        var isAnswer = params.post.parentId !== null && params.post.parentId !== undefined;
        var parentId = params.post.parentId;
        var id = params.post.id;
        var title = params.post.title;
        var score = params.post.score;
        var d = new Date(params.post.creationDate);
        var link = params.post.url;
        var date = d ? d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear() : '';
        var onPostClick = params.onPostClick;
        return {
            id,
            parentId,
            score,
            title,
            date,
            link,
            onPostClick,
            isAnswer
        };
    };
});