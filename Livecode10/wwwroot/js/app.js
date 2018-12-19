define(['knockout', 'postman', 'dataService'], function (ko, postman, ds) { 
    
    var selectedComponent = ko.observable("post-list");
    var postTitle = ko.observable(), postScore = ko.observable() , postBody = ko.observable(),
        postCreationDate = ko.observable(), postComments = ko.observableArray(), postTags = ko.observableArray(),
        isPostAnnotated = ko.observable(), postAnnotationText = ko.observable(), postAnswers = ko.observableArray();
    var onPostClick = function (post) {
        //fetch post here and once its fetched change component and pass post to it
        ds.getPost(post.link ? post.link : post.urlToPost, function(data) {
           postTitle(data.title);
            postScore(data.score);
            postBody(data.body);
            postCreationDate(data.creationDate);
            for(var comment of data.comments) {
                postComments.push(comment);
            }
            for (var tag of data.tags) {
                postTags.push(tag);
            }
            for (var answer of data.answers) {
                postAnswers.push(answer);
            }
            isPostAnnotated(data.isAnnotated);
            postAnnotationText(data.annotationText);
           selectedComponent("post");
        });
        searchValue("");
        searchResults([]);
    }
    var showModal = ko.observable(false);
    var selectedModal = ko.observable("");
    var annotateToPostId = ko.observable();
    var annotateToPostTitle = ko.observable();
    var onAnnotatePostClick = function(post) {
        selectedModal("annotation-modal");
        annotateToPostId(post.id);
        annotateToPostTitle(post.title);
        showModal(true);
    }
    var navigateHome = function () {
        postComments([])
        postTags([])
        selectedComponent("post-list");
        searchValue("");
        searchResults([]);
    }
    var navigateToUserProfile = function() {
        postComments([])
        postTags([])
        selectedComponent('person');
        searchValue("");
        searchResults([]);
    }
    var searchValue = ko.observable(""), searchResults = ko.observableArray([]);
    var onSeachSubmit = function() {
        if (searchValue() !== "") {
            searchResults([]);
            ds.searchPosts(1, searchValue(),function(data) {
                console.log("result of search", data)
                for(const element of data) {
                    searchResults.push(element);
                }
                selectedComponent("search-results");
            });
        }
    }
    var closeModal = function() {
        showModal(false);
        selectedModal("");
        annotateToPostId(null);
        annotateToPostTitle(null);

    }

    return {
        selectedComponent,
        onPostClick,
        onAnnotatePostClick,
        navigateHome,
        selectedComponent,
        navigateToUserProfile,
        onSeachSubmit,
        searchValue,
        postTitle,
        postScore,
        postBody,
        postCreationDate,
        postComments,
        postTags,
        postAnswers,
        isPostAnnotated,
        postAnnotationText,
        selectedModal,
        annotateToPostId,
        annotateToPostTitle,
        showModal,
        closeModal,
        searchResults
    };
});