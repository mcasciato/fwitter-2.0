(function() {

    'use strict';

    var pane = {
        transclude: true,
        require: {
            TabsController: '^tabs'
        },
        bindings: {
            title: '@'
        },
        controller: PaneController,
        templateUrl: 'components/tab-component/pane.html'
    }

    function PaneController() {
        this.$onInit = function() {
            this.TabsController.addPane(this)
        }
    }

    angular
        .module('fwitter')
        .component('pane', pane)

}());
