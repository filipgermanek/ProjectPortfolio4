define(['knockout', 'postman', 'dataService'], function (ko, postman, ds) {
    return function (params) {
        var annotationText = params.annotationText;
        var isAlreadyAnnotated = params.isAnnotated();
        var postId = params.postId;
        var postTitle = params.title;
        var onCancel = function() {
            params.closeModal();
        }
        var onSave = function() {
            if (isAlreadyAnnotated()) {
                var onSuccess = params.onMarkedPostEdit;
                ds.editMarkedPost(1, params.postId(), annotationText(), onSuccess);
            } else {
                var onSuccess = params.onPostMark;
                ds.markPost(1, params.postId(), annotationText(), onSuccess);
            }

        }
        var onUnmark = function() {
            ds.unmarkPost(1, params.postId(), annotationText(), params.onUnmarkPost());
        }
        return {
            onCancel,
            onSave,
            onUnmark,
            isAlreadyAnnotated,
            postTitle,
            annotationText
        };
    };
});