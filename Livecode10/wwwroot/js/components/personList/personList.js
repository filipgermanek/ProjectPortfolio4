define(['knockout', 'dataService', 'postman'], function(ko, ds, postman) {
    return function(params) {
        var persons = ko.observableArray();
        var showDetails = ko.observable(false);
        var currentComponent = ko.observable("person");

        ds.getPersons(function(data) {
            persons(data);
        });

        showDetails.subscribe(function(val) {
            if (val) currentComponent("person-details");
            else currentComponent("person");
        });

       
        postman.subscribe("deletePerson", function(id) {
            persons.remove(function (e) {
                return e.id === id;
            });
        });

        return {
            persons,
            showDetails,
            currentComponent
        };
    };
});