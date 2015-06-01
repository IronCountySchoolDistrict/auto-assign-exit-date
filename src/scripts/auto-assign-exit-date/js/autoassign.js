/*global $j, define, require*/

define('autoassign', function (psData) {
    'use strict';
    return {
        insertExitDate: function () {
            var exitDateField = $j('.psDateWidget').eq(1);
            if (!exitDateField.val()) {
                exitDateField.val(psData.exitDate);
            }
        }
    };
});