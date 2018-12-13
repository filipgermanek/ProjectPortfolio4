define(['jquery'], function ($) {

    var getPosts = function (callback) {
        $.getJSON('http://localhost:5002/api/posts', {contentType: 'application/json'}, function (data) {
            console.log("data posts", data)
            callback(data);
        });
    };

    var getPost = function (postId, callback) {
        $.getJSON('http://localhost:5002/api/posts/' + postId, {contentType: 'application/json'}, function (data) {
            callback(data);
        });
    }

    return {
        getPosts,
getPost
    };
});