
define(['knockout', 'dataService', 'postman'], function(ko, ds, postman) {
    return function(params) {
        var comments = [1,2,3,4];
        var currentComponent = ko.observable("comment-list-element");

        return {
            comments,
            currentComponent
        };
    };
});