define(['jquery'], function ($) {

    var getPosts = function (page, callback) {
        $.getJSON(`http://localhost:5002/api/posts?pageSize=10&page=${page}`, {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    };

    var getPost = function (postLink, callback) {
        $.getJSON(postLink, {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    var getUser = function (userId, callback) {
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
        $.getJSON('http://localhost:5002/api/users/' + userId + '/search_history', {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    var searchPosts = function (userId, searchText, callback) {
        console.log("search for", userId, searchText)
        $.getJSON('http://localhost:5002/api/posts/search/' + searchText, {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    var getAnnotatedPosts = function (userId, callback) {
         $.getJSON('http://localhost:5002/api/users/' + userId + '/marked_posts', {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    var markPost = function (userId, postId, annotationText, callback) {
        var request = {
            postId,
            annotationText
        }
        $.post('http://localhost:5002/api/users/' + userId + "/marked_posts", {data: request}, function (data) {
            console.log("data in mark res", data)
            callback(data);
        }, 'json');
    }


    return {
        getPosts,
        getPost,
        getUser,
        getPostTags,
        getUserSearchHistory,
        searchPosts,
        getAnnotatedPosts,
        markPost
    };
});