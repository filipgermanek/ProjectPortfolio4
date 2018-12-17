define(['knockout', 'postman', 'dataService'], function (ko, postman, ds) { 
    
    var selectedComponent = ko.observable("post-list");
    var postTitle = ko.observable(), postScore = ko.observable() , postBody = ko.observable(),
        postCreationDate = ko.observable(), postComments = ko.observableArray(), postTags = ko.observableArray(),
        isPostAnnotated = ko.observable(), postAnnotationText = ko.observable();
    var onPostClick = function (post) {
        //fetch post here and once its fetched change component and pass post to it
        ds.getPost(post.link, function(data) {
           postTitle(data.title);
            postScore(data.score);
            postBody(data.body);
            postCreationDate(data.creationDate);
            for(var comment of data.comments) {
                postComments.push(comment);
            }
            for (var tag of data.tags) {
                postTags.push(tag)
            }
            isPostAnnotated(data.isAnnotated);
            postAnnotationText(data.annotationText);
            console.log("isPostAnnotated", isPostAnnotated)
           selectedComponent("post");
        });

    }
    var navigateHome = function () {
        postComments([])
        postTags([])
        selectedComponent("post-list");
    }
    var navigateToUserProfile = function() {
        postComments([])
        postTags([])
        selectedComponent('person')
    }
    var searchValue = ko.observable("test");
    var onSearchInputClick = function(d, e) {
        if (e.keyCode === 13) {
            console.log("enter", d, e)
        }
    }

    return {
        selectedComponent,
        onPostClick,
        navigateHome,
        selectedComponent,
        navigateToUserProfile,
        onSearchInputClick,
        searchValue,
        postTitle,
        postScore,
        postBody,
        postCreationDate,
        postComments,
        postTags,
        isPostAnnotated,
        postAnnotationText
    };
});