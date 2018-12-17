﻿define(['knockout', 'dataService', 'postman'], function(ko, ds, postman) {
    return function(params) {
        var posts = ko.observableArray();
        var currentComponent = ko.observable("post-list-element");
        console.log("params in list", params)
        if (params.userId) {
             ds.getAnnotatedPosts(params.userId, function(data) {
                console.log("data", data);
                posts(data.items);
            });
        } else {
             ds.getPosts(function(data) {
                posts(data.items);
            });
        }
       
        var onPostClick = params.onPostClick;
        return {
            posts,
            onPostClick,
            currentComponent
        };
    };
});