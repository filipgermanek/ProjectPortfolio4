define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        var title = params.postTitle;
        var score = params.postScore;
        var body = params.postBody;
        var dateRaw = new Date(params.postCreationDate);
console.log("dateRaw", dateRaw, "cr", params.postCreationDate)
        var creationDate = dateRaw.getDate() + "/" + dateRaw.getMonth() + "/" + dateRaw.getFullYear()
        var comments = params.postComments;
        var tags = params.postTags;
        var isAnnotated = params.isPostAnnotated;
        var postAnnotationText = params.postAnnotationText;
        return {
            title,
            score,
            body,
            creationDate,
            comments,
            tags,
            isAnnotated,
            postAnnotationText
        };
    };
});
