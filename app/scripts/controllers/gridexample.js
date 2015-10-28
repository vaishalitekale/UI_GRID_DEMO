'use strict';

/**
 * @ngdoc function
 * @name pmsApp.controller:GridexampleCtrl
 * @description
 * # GridexampleCtrl
 * Controller of the pmsApp
 */
var app = angular.module('pmsApp')
  app.controller('GridexampleCtrl', function ($scope) {

    $scope.ACPreferences = [{

        Nominees: "Anil Singh",

        Email: 'anil.singh@gmail.com',

        Threshold: '50%, 70%, 80%, 85%, 90%, 100%,120%',

        SendSMS: true,

        SendEmail: true,

        AlertOptIn: true

    },

    {

        Nominees: "Dilip Singh",

        Email: 'dilip@gmail.com',

        Threshold: '50%, 70%, 80%, 85%, 90%, 100%,120%',

        SendSMS: true,

        SendEmail: false,

        AlertOptIn: true

    },

    {

        Nominees: "Vrendra",

        Email: 'Vrendra@gmail.com',

        Threshold: '50%, 70%, 80%, 85%, 90%, 100%,120%',

        SendSMS: false,

        SendEmail: true,

        AlertOptIn: true

    }];


    $scope.filterOptions = {

        filterText: ''

    };


    $scope.pagingOptions = {

        pageSizes: [10, 20, 50, 100],

        pageSize: 10,

        totalServerItems: 0,

        currentPage: 1

    };


    var removeRowTemplate = '<span style="display:block; text-align:center;"><button ng-click="editRowIndex($index)" class="btn btn-xs btn-default"><i class="fa fa-pencil"></i></button><button ng-click="removeRowIndex($index)" class="btn btn-xs btn-default"><i class="fa fa-times"></i></button></span>';

    var onoffTemplate = '<span class="smart-form"><label class="toggle"><input type="checkbox" checked="checked" name="checkbox-toggle"><i data-swchoff-text="OFF" data-swchon-text="ON"></i></label></span>';


    $scope.myColumns = [{ field: 'Nominees', displayName: 'Nominees' },

            { field: 'Email', displayName: 'Email', editableCellTemplate: true, enableCellEdit: true },

            { field: 'Threshold', displayName: 'Threshold' },

            { field: 'SendSMS', displayName: 'Send SMS', width: "7%" },

            { field: 'SendEmail', displayName: 'Send Email', width: "8%" },

            { field: 'AlertOptIn', displayName: 'Alert Opt-In', width: "9%", cellTemplate: onoffTemplate },

            { field: 'remove', displayName: '', width: "7%", cellTemplate: removeRowTemplate } ];


    $scope.ngGridView = {

        data: 'ACPreferences',

        enablePaging: true,

        showFooter: true,

        filterOptions: $scope.filterOptions,

        pagingOptions: $scope.pagingOptions,

        columnDefs: 'myColumns'

    };


    $scope.removeRowIndex = function () {

        var index = this.row.rowIndex;

        $scope.ngGridView.selectItem(index, false);

        $scope.ACPreferences.splice(index, 1);

    };


    $scope.editRowIndex = function () {

        var index = this.row.rowIndex;

        alert('Row Index : ' + this.row.rowIndex);

    };

});
