define(['knockout', 'postman', 'dataService'], function (ko, postman, ds) {
    return function (params) {
        var annotationText = ko.observable();
        var onCancel = function() {
            params.closeModal();
        }
        var onSave = function() {
            //TODO
            if (true) {
                ds.markPost(1, params.postId(), annotationText(), function(data) {
                    console.log("callback in modal", data);
                });
            } else {

            }

        }
        return {
            onCancel,
            onSave
        };
    };
});