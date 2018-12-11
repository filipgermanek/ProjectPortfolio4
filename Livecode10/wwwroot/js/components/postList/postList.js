define(['knockout', 'dataService', 'postman'], function(ko, ds, postman) {
    return function(params) {
        var posts = ko.observableArray();
        var currentComponent = ko.observable("post-list-element");

        ds.getPosts(function(data) {
            console.log("data", data);
            posts(data);
        });

        return {
            posts,
            currentComponent
        };
    };
});