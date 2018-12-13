define(['knockout', 'postman'], function (ko, postman) { 
    var title = "TODO PAGE TITLE";
    var menuItems = [


    ];

    var selectedMenu = ko.observable(menuItems[0]);
    var selectedPost = ko.observable(null);
    var selectedComponent = ko.observable("person");
    var isActive = function(menu) {
        return selectedMenu() === menu ? "active" : "";
    };

    var changeMenu = function(menu) {
        selectedMenu(menu);
        selectedComponent(menu.component);
    };

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
        isActive,
        changeMenu,
        selectedComponent,
        selectedPost,
        onPostClick
    };
});