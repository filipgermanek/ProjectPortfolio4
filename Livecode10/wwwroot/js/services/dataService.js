define(['jquery'], function ($) {

    var getPosts = function (callback) {
        $.getJSON('http://localhost:5002/api/posts', {contentType: 'application/json'}, function (data) {
            console.log("data posts", data)
            callback(data);
        });
    };

    var getPost = function (postLink, callback) {
        $.getJSON(postLink, {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    var getUser = function (userId, callback) {
console.log("getting user", userId);
        $.getJSON('http://localhost:5002/api/users/' + userId, {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    var getPostTags = function (postId, callback) {
        $.getJSON('http://localhost:5002/api/posts/' + postId + '/tags', {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    var getUserSearchHistory = function (userId, callback) {
        $.getJSON('http://localhost:5002/api/users/' + userId + 'search_history', {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    var searchPosts = function (userId, callback) {
        $.getJSON('http://localhost:5002/api/posts/' + searchText, {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    var getAnnotatedPosts = function (userId, callback) {
         $.getJSON('http://localhost:5002/api/users/' + userId + '/marked_posts', {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }


    return {
        getPosts,
        getPost,
        getUser,
        getPostTags,
        getUserSearchHistory,
        searchPosts,
        getAnnotatedPosts
    };
});