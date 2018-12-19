define(['knockout', 'postman', 'dataService'], function (ko, postman, ds) { 
    
    var selectedComponent = ko.observable("post-list");
    var postId = ko.observable(), postTitle = ko.observable(), postScore = ko.observable() , postBody = ko.observable(),
        postCreationDate = ko.observable(), postComments = ko.observableArray(), postTags = ko.observableArray(),
        isPostAnnotated = ko.observable(), isntPostAnnotated = ko.observable(), postAnnotationText = ko.observable(), postAnswers = ko.observableArray();
    var onPostClick = function (post) {
        //fetch post here and once its fetched change component and pass post to it
        ds.getPost(post.link ? post.link : post.urlToPost, function(data) {
           postTitle(data.title);
            postId(data.id);
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
            isntPostAnnotated(!data.isAnnotated);
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
    var annotateToPostIsAnnotated = ko.observable();
    var annotateToPostAnnotationText = ko.observable();
    var onAnnotatePostClick = function(post) {
        annotateToPostId(post.id);
        annotateToPostTitle(post.title);
        annotateToPostIsAnnotated(post.isAnnotated);
        annotateToPostAnnotationText(post.postAnnotationText);
        selectedModal("annotation-modal");
        showModal(true);
    }
    var navigateHome = function () {
        postComments([])
        postTags([])
        selectedComponent("post-list");
        searchValue("");
        showModal(false);
        selectedModal("");
        searchResults([]);
    }
    var navigateToUserProfile = function() {
        postComments([])
        postTags([])
        selectedComponent('person');
        searchValue("");
        showModal(false);
        selectedModal("");
        searchResults([]);
    }
    var searchValue = ko.observable(""), searchResults = ko.observableArray([]);
    var onSeachSubmit = function() {
        if (searchValue() !== "") {
            searchResults([]);
            ds.searchPosts(1, searchValue(),function(data) {
                for(const element of data) {
                    searchResults.push(element);
                }
                selectedComponent("search-results");
            });
        }
    }

    var onPostMark = function(res) {
        isPostAnnotated(true);
        isntPostAnnotated(false);
        postAnnotationText(res.annotationText);
        closeModal();
    }
    var onMarkedPostEdit = function(res) {
        postAnnotationText(res.annotationText);
        closeModal();
    }
    var onUnmarkPost = function(res) {
        isPostAnnotated(false);
        isntPostAnnotated(true);
        postAnnotationText(null);
        closeModal();
    }

    var closeModal = function() {
        showModal(false);
        selectedModal("");
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
        postId,
        postTitle,
        postScore,
        postBody,
        postCreationDate,
        postComments,
        postTags,
        postAnswers,
        isPostAnnotated,
        isntPostAnnotated,
        postAnnotationText,
        selectedModal,
        annotateToPostId,
        annotateToPostTitle,
        annotateToPostIsAnnotated,
        annotateToPostAnnotationText,
        onPostMark,
        onMarkedPostEdit,
        onUnmarkPost,
        showModal,
        closeModal,
        searchResults
    };
});