define(['knockout', 'dataService'], function(ko, ds) {
    return function(params) {
        var onPageNumberClick = params.onPageNumberClick;
        var currentPage = params.currentPage;
        var lastPage = params.lastPage;
        var pages = [];
        console.log("currentpage", currentPage(), lastPage())
        if (currentPage() < 9) {
            for (i = 1; i <= 10; i++) {
                pages.push(i);
            }
        } else {
            for(i = currentPage() - 5; i <= currentPage() + 5; i++) {
                pages.push(i);
            }
        }
        return {
            currentPage,
            lastPage,
            onPageNumberClick,
            pages
        };
    };
});