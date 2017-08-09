app.controller('appController', ['DataService', '$timeout', function (DataService, $timeout) {
    var vm = this;
    DataService.loadData();

    vm.onSearch = function (value) {
        vm.dataSet = DataService.getData(value);
    }
}]);