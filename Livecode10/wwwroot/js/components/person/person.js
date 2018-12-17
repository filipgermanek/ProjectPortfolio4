define(['knockout', 'postman', 'dataService'], function (ko, postman, ds) {
    return function (params) {
        var userId = 1;
        var name = ko.observable();
        var location = ko.observable();
        var email = ko.observable();
        var creationDate = ko.observable();
        var postListName = 'post-list';
        var onPostClick = params.onPostClick;
        ds.getUser(userId, function(data) {
            name(data.name);
            location(data.location);
            email(data.email);
            creationDate(data.creationDate);
        });
        return {
            onPostClick,
            name,
            location,
            postListName,
            email,
            creationDate
        };
    };
});