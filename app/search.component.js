app.component('searchWidget', {

    templateUrl: 'view/searchWidget.html',
    bindings: {
        dataset: '<',
        onKeyPress: '&'
    },
    controllerAs: 'swCtrl'
});
