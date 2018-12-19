define(['knockout', 'dataService'], function(ko, ds) {
    return function(params) {
        var onPageNumberClick = params.onPageNumberClick;
        var currentPage = params.currentPage;
        var lastPage = params.lastPage;
        var pages = params.pages;

        return {
            currentPage,
            lastPage,
            onPageNumberClick,
            pages
        };
    };
});