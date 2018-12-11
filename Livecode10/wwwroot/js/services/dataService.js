define(['jquery'], function ($) {
    var getPersons = function(callback) {
        $.getJSON('api/persons', function(data) {
            callback(data);
        });
    };

    var getWords = function (callback) {
        $.getJSON('api/words', function (data) {
            callback(data);
        });
    };

    var getPosts = function (callback) {
        $.getJSON('api/posts', function (data) {
            callback(data);
        });
    };

    return {
        getPersons,
        getWords,
        getPosts
    };
});