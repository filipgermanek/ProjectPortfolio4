define(['knockout', 'postman'], function (ko, postman) {
    return function (params) {
        var id = ""//params.person.id;
        var firstName =""// params.person.firstName;
        var lastName = ""//params.person.lastName;
        var age = ""//params.person.age;
        var postListName = 'post-list';

var onPostClick = params.onPostClick;

        return {

onPostClick,
            id,
            firstName,
            lastName,
            age,
           postListName
         
        };
    };
});