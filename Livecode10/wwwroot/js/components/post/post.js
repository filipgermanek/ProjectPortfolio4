define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        var id = params.postId();
        var title = params.postTitle();
        var score = params.postScore();
        var body = params.postBody();
        var dateRaw = new Date(params.postCreationDate());
        var creationDate = dateRaw.getDate() + "/" + dateRaw.getMonth() + "/" + dateRaw.getFullYear()
        var comments = params.postComments;
        var tags = params.postTags;
        var answers = params.postAnswers;
        var isAnnotated = params.isPostAnnotated;
        var isntAnnotated = params.isntPostAnnotated;
        var postAnnotationText = params.postAnnotationText();
        var onAnnotatePostClick = params.onAnnotatePostClick;
        console.log("isannot", isAnnotated());
        return {
            id,
            title,
            score,
            body,
            creationDate,
            comments,
            tags,
            isAnnotated,
            postAnnotationText,
            answers,
            isntAnnotated,
            onAnnotatePostClick
        };
    };
});
