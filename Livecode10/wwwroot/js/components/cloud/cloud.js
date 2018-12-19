define(['jquery', 'knockout', 'dataService', 'jqcloud'], function ($, ko, ds, postman) {
    return function (params) {
        var words = ko.observableArray();
        
        ds.getWordsCountForPost(params.postId, function(data) {
            words([]);
            for (var el of data) {
                var word = {
                    text: el.word,
                    weight: el.count
                }
                words.push(word);
            }
        });
        
        return {
            words
        };
    };
});