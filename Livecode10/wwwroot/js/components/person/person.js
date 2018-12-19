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
            var rawDate = new Date(data.creationDate);
            creationDate(rawDate.getDate() + "/" + rawDate.getMonth() + "/" + rawDate.getFullYear());
        });
        var markedPosts = ko.observableArray();
        ds.getAnnotatedPosts(userId, function (data) {
            console.log("marked posts", data)
            for (const item of data.items) {
                markedPosts.push(item);
            }
        });
        var searchHistory = ko.observableArray();
        ds.getUserSearchHistory(userId, function(data) {
            if (data.items) {
                for(const element of data.items) {
                    var rawDate = new Date(element.creationDate);
                    var obj = {
                        searchtext: element.searchtext,
                        creationDate: rawDate.getDate() + "/" + rawDate.getMonth() + "/" + rawDate.getFullYear()
                    };
                    searchHistory.push(obj);
                }
            }
        });
        var unmarkPost = function (post) {
            console.log("unmark", post);
        }
        var editMarkedPost = function (post) {
            console.log("edit", post)
        }
        var toggleProfileSection = function() {
            var newValue = !showProfileSection();
            showProfileSection(newValue);
        };
        var toggleSearchHistorySection = function() {
            var newValue = !showSearchHistorySection();
            showSearchHistorySection(newValue);
        };
        var toggleMarkedPostSection = function() {
            var newValue = !showMarkedPostsSection();
            showMarkedPostsSection(newValue);
        };
        var showProfileSection = ko.observable(true),
            showSearchHistorySection = ko.observable(false),
            showMarkedPostsSection = ko.observable(true);
        return {
            onPostClick,
            name,
            location,
            postListName,
            email,
            creationDate,
            searchHistory,
            markedPosts,
            unmarkPost,
            editMarkedPost,
            showProfileSection,
            showSearchHistorySection,
            showMarkedPostsSection,
            toggleProfileSection,
            toggleMarkedPostSection,
            toggleSearchHistorySection
        };
    };
});