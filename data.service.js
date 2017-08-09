app.service('DataService', function ($http, $filter) {
    var _data;
    this.loadData = function () {
        $http.get('resources/clientdata.json')
             .then(function (response) {
                 _data = response.data.data;
             }, function (error) {
                 console.log(error);
             });
    }

    // Search records based on client Name & policy number
    this.getData = function (searchInput) {
        var dataSet = [];
        if (searchInput && searchInput.length > 0) {
            angular.forEach(_data, function (item) {
                if (item.clientName.toLowerCase().indexOf(searchInput.toLowerCase()) > -1 || item.policyNumber.toLowerCase().indexOf(searchInput.toLowerCase()) > -1) {
                    dataSet.push(item);
                }
            });

        }
        return dataSet;
    }




});