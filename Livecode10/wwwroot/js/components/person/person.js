define(['knockout', 'postman'], function (ko, postman) {
    return function (params) {
        var id = params.person.id;
        var firstName = params.person.firstName;
        var lastName = params.person.lastName;
        var age = params.person.age;

        var deletePerson = function(p) {
            postman.publish("deletePerson", p.id);
        };

        return {
            id,
            firstName,
            lastName,
            age,
            deletePerson
        };
    };
});