/*global $j, define, require*/
require.config({
    paths: {
        psData: '/admin/students/AutoAssignExitDateSpecialPrograms'
    }
});

define('autoassign', ['noext!psData/psData.txt'], function (psData) {
    'use strict';
    return {
        insertExitDate: function () {
            var exitDateField = $j('.psDateWidget').eq(1);
            if (!exitDateField.val()) {
                exitDateField.val(psData.exitDate);
            }
        },

        main: function() {
            this.insertExitDate();
        }
    };
});