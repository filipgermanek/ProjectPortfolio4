define(['knockout', 'postman'], function (ko, postman) { 
    var title = "TODO TITLE";
    
    var selectedComponent = ko.observable("post-list");
    var onPostClick = function (post) {
        console.log("post clicked", post)
//fetch post here and once its fetched change component and pass post to it
        selectedComponent("post");
    }
    var navigateHome = function () {
        selectedComponent("post-list");
    }
    var navigateToUserProfile = function() {
console.log("person");
        selectedComponent('person')
    }

    postman.subscribe("changeMenu", function(menuName) {
        var menu = menuItems.find(function(m) {
            return m.name === menuName;
        });
        if (menu) changeMenu(menu);
    }) ;

    return {
        selectedComponent,
        onPostClick,
        navigateHome,
        selectedComponent,
        navigateToUserProfile
    };
});