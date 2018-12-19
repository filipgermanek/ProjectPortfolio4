define(['knockout', 'dataService', 'postman'], function(ko, ds, postman) {
    return function(params) {
        var posts = params.searchResults;
        var currentComponent = ko.observable("post-list-element");
        var currentPage = ko.observable(null);
        var lastPage = ko.observable(null);
        var showPages = false;
        var onPostClick = params.onPostClick;
        var postListPages = "post-list-pages" , onPageNumberClick = null, currentPage = ko.observable(0), lastPage = ko.observable(0), pages = ko.observableArray();
        return {
            posts,
            onPostClick,
            currentComponent,
            showPages,
            postListPages,
            onPageNumberClick,
            currentPage,
            lastPage,
            pages
        };
    };
});
