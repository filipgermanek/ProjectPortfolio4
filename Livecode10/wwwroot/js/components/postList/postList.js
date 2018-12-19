define(['knockout', 'dataService', 'postman'], function(ko, ds, postman) {
    return function(params) {
        var posts = ko.observableArray();
        var currentComponent = ko.observable("post-list-element");
        var currentPage = ko.observable(0);
        var lastPage = ko.observable();
        var showPages = params.userId === undefined || params.userId === null;
        if (params.userId) {
             ds.getAnnotatedPosts(params.userId, function(data) {
                posts(data.items);
            });
        } else {
             ds.getPosts(currentPage(), function(data) {
                posts(data.items);
                lastPage(data.numberOfPages);
             });
        }
        
       
        var postListPages = ko.observable("post-list-pages");
        var onPageNumberClick = function (number) {
            currentPage(number - 1);
            ds.getPosts(currentPage(), function(data) {
                posts(data.items);
                lastPage(data.numberOfPages);
            });
        }
        var onPostClick = params.onPostClick;
        return {
            posts,
            onPostClick,
            currentComponent,
            currentPage,
            lastPage,
            onPageNumberClick,
            postListPages,
            showPages
        };
    };
});