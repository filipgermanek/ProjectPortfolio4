define(['knockout', 'dataService', 'postman'], function (ko, ds, postman) {
    return function (params) {
        var post = ko.observable();
        var postId = 13649012;
        var title = "testttt", body;
        ds.getPost(postId, function(data) {
            console.log("data post", data);
            post(data);
        });
       // title = post.title;
       // body = post.body;
        return {
            title
        };
    };
});
