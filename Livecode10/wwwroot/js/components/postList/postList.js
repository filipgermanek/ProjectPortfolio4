define(['knockout', 'dataService', 'postman'], function(ko, ds, postman) {
    return function(params) {
        var posts = ko.observableArray();
        var currentComponent = ko.observable("post-list-element");
        console.log("params in list", params)
        ds.getPosts(function(data) {
            console.log("data", data);
            posts(data.items);
        });

        return {
            posts,
            currentComponent
        };
    };
});