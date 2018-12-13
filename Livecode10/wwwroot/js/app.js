define(['knockout', 'postman'], function (ko, postman) { 
    var title = "TODO TITLE";
    var menuItems = [
    
    ];
    
    var selectedPost = ko.observable(null);
    var selectedComponent = ko.observable("person");
    var onPostClick = function (post) {
        selectedPost(post);
        selectedComponent("post");
    }

    postman.subscribe("changeMenu", function(menuName) {
        var menu = menuItems.find(function(m) {
            return m.name === menuName;
        });
        if (menu) changeMenu(menu);
    }) ;

    return {
        title,
        selectedComponent,
        selectedPost,
        onPostClick
    };
});